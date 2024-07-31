package basisExampleProjectTest;

import info.novatec.bpm.camunda.ExampleProcessApplication;
import info.novatec.bpm.camunda.connector.file.api.LocalFileCommand;
import info.novatec.bpm.camunda.connector.file.api.RemoteFileCommand;
import info.novatec.bpm.camunda.connector.file.api.impl.model.FileContent;
import info.novatec.bpm.camunda.connector.file.api.impl.model.RequestData;
import io.camunda.zeebe.client.ZeebeClient;
import io.camunda.zeebe.client.api.response.ActivatedJob;
import io.camunda.zeebe.client.api.response.ProcessInstanceEvent;
import io.camunda.zeebe.process.test.api.ZeebeTestEngine;
import io.camunda.zeebe.spring.client.annotation.Deployment;
import io.camunda.zeebe.spring.test.ZeebeSpringTest;
import org.camunda.community.process_test_coverage.junit5.platform8.ProcessEngineCoverageExtension;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import java.nio.charset.StandardCharsets;
import java.time.Duration;
import java.util.Collections;
import java.util.List;
import java.util.Map;
import java.util.concurrent.TimeoutException;

import static io.camunda.zeebe.process.test.assertions.BpmnAssert.assertThat;
import static io.camunda.zeebe.protocol.Protocol.USER_TASK_JOB_TYPE;
import static io.camunda.zeebe.spring.test.ZeebeTestThreadSupport.waitForProcessInstanceCompleted;
import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.anyString;
import static org.mockito.Mockito.*;
import static org.mockito.Mockito.verifyNoMoreInteractions;


@SpringBootTest(classes = ExampleProcessApplication.class)
@ZeebeSpringTest
@Deployment(resources = "bpmn/basicExample.bpmn")
@ExtendWith(ProcessEngineCoverageExtension.class)
public class BasicExampleProcessTest {

    @Autowired
    private ZeebeClient zeebe;

    @Autowired
    private ZeebeTestEngine zeebeTestEngine;

    @MockBean
    private LocalFileCommand localFileCommand;

    @MockBean
    private RemoteFileCommand remoteFileCommand;

    @BeforeAll
    static void start() {
        System.setProperty("AWS_ACCESS_KEY", "accessKey");
        System.setProperty("AWS_SECRET_KEY", "secretKey");
    }

    @Test
    void test_process_path() throws Exception {

        when(localFileCommand.loadFile(anyString())).thenReturn("anythingLocal".getBytes(StandardCharsets.UTF_8));
        when(remoteFileCommand.getFile(any(RequestData.class))).thenReturn(
                FileContent.builder()
                        .content("anythingRemote".getBytes(StandardCharsets.UTF_8))
                        .contentLength(14L)
                        .contentType("plain/text")
                        .build()
        );

        ProcessInstanceEvent processInstance = zeebe.newCreateInstanceCommand()
                .bpmnProcessId("File_handling_process")
                .latestVersion()
                .variables("{ \"report\": { \"region\":\"region\", \"bucket\":\"bucket\", \"key\":\"key\" } }")
                .send()
                .join();


        waitForTaskAndComplete("guess_random_number", USER_TASK_JOB_TYPE, Collections.singletonMap("inputNumber", 2));

        waitForProcessInstanceCompleted(processInstance);

        assertThat(processInstance)
                .hasPassedElement("guess_random_number")
                .hasPassedElement("generate-file")
                .hasPassedElement("upload_file")
                .isCompleted();

        // after file generation
        verify(localFileCommand, times(1)).saveFile(any(), anyString());
        // for generation, before upload
        verify(localFileCommand, times(1)).loadFile(anyString());

        verify(remoteFileCommand).putFile(any(RequestData.class), any());

        verifyNoMoreInteractions(localFileCommand, remoteFileCommand);
    }

    public void waitForTaskAndComplete(String taskId, String jobType, Map<String, Object> variables)
            throws InterruptedException, TimeoutException {

        System.out.println("Warten auf idle state...");
        zeebeTestEngine.waitForIdleState(Duration.ofMinutes(5));
        System.out.println("Idle state erreicht.");

        System.out.println("Aktiviere Jobs vom Typ: " + jobType);
        List<ActivatedJob> jobs = zeebe.newActivateJobsCommand()
                .jobType(jobType)
                .maxJobsToActivate(1)
                .workerName("waitForTaskAndComplete")
                .send()
                .join()
                .getJobs();

        if (jobs.isEmpty()) {
            System.out.println("Kein Job gefunden für taskId: " + taskId);
        } else {
            System.out.println("Job gefunden: " + jobs.get(0).getElementId());
        }

        assertFalse(jobs.isEmpty(), "Job for task '" + taskId + "' does not exist");
        ActivatedJob taskJob = jobs.get(0);

        if (taskId != null) {
            System.out.println("Überprüfe taskId: " + taskId);
            Assertions.assertEquals(taskId, taskJob.getElementId());
        }

        if (variables != null && !variables.isEmpty()) {
            System.out.println("Schließe Job mit Variablen: " + variables);
            zeebe.newCompleteCommand(taskJob.getKey()).variables(variables).send().join();
        } else {
            System.out.println("Schließe Job ohne Variablen");
            zeebe.newCompleteCommand(taskJob.getKey()).send().join();
        }
    }
}