package basisExampleProjectTest;

import com.example.DeploymentWorkerInitializer;
import info.novatec.bpm.camunda.ExampleProcessApplication;
import info.novatec.bpm.camunda.basisExampleProject.adapter.in.BasicFileOperationAdapter;
import io.camunda.zeebe.client.ZeebeClient;
import io.camunda.zeebe.client.api.ZeebeFuture;
import io.camunda.zeebe.client.api.command.DeployProcessCommandStep1;
import io.camunda.zeebe.client.api.command.DeployResourceCommandStep1;
import io.camunda.zeebe.client.api.response.ActivatedJob;
import io.camunda.zeebe.client.api.response.DeploymentEvent;
import io.camunda.zeebe.client.api.response.ProcessInstanceEvent;
import io.camunda.zeebe.process.test.api.ZeebeTestEngine;
import io.camunda.zeebe.process.test.assertions.BpmnAssert;
import io.camunda.zeebe.spring.client.annotation.Deployment;
import io.camunda.zeebe.spring.test.ZeebeSpringTest;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.ArgumentMatchers;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.DynamicPropertyRegistry;
import org.springframework.test.context.DynamicPropertySource;
import org.testcontainers.containers.localstack.LocalStackContainer;
import org.testcontainers.junit.jupiter.Container;
import org.testcontainers.junit.jupiter.Testcontainers;
import org.testcontainers.utility.DockerImageName;
import software.amazon.awssdk.auth.credentials.AwsBasicCredentials;
import software.amazon.awssdk.auth.credentials.StaticCredentialsProvider;
import software.amazon.awssdk.regions.Region;
import software.amazon.awssdk.services.s3.S3Client;
import software.amazon.awssdk.services.s3.model.CreateBucketRequest;
import software.amazon.awssdk.services.s3.model.GetObjectRequest;

import java.io.IOException;
import java.io.InputStream;
import java.nio.charset.StandardCharsets;
import java.time.Duration;
import java.util.*;
import java.util.concurrent.CompletableFuture;
import java.util.concurrent.TimeoutException;

import static com.google.common.base.CharMatcher.any;
import static io.camunda.zeebe.protocol.Protocol.USER_TASK_JOB_TYPE;
import static io.camunda.zeebe.spring.test.ZeebeTestThreadSupport.waitForProcessInstanceCompleted;
import static org.assertj.core.api.AssertionsForClassTypes.assertThat;
import static org.junit.Assert.assertThrows;
import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.mockito.ArgumentMatchers.anyString;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

@SpringBootTest(classes = ExampleProcessApplication.class)
@ZeebeSpringTest
@Testcontainers
@Deployment(resources = "bpmn/basicExample.bpmn")
class BasicExampleProcessIntTest {

    @Autowired
    ZeebeTestEngine zeebeTestEngine;

    @Autowired
    BasicFileOperationAdapter basicFileOperationAdapter;

    public static final String REPORT_BUCKET = "my-bucket";

    static DockerImageName localstackImage = DockerImageName.parse("localstack/localstack:0.11.3");


    @Mock
    private ZeebeClient zeebeClient;

    @Mock
    private DeployResourceCommandStep1.DeployResourceCommandStep2 deployResourceCommandStep2;

    @InjectMocks
    private DeploymentWorkerInitializer deploymentWorkerInitializer;


    @Container
    static LocalStackContainer s3Service = new LocalStackContainer(localstackImage)
            .withServices(LocalStackContainer.Service.S3);

    @Autowired
    @MockBean
    private ZeebeClient zeebe;

    private S3Client s3Client;

    @DynamicPropertySource
    static void setProperties(DynamicPropertyRegistry registry) {
        registry.add("aws.endpoint.override", s3Service::getEndpoint);
    }

    @BeforeAll
    static void start() {
        s3Service.start();
        System.setProperty("AWS_ACCESS_KEY", s3Service.getAccessKey());
        System.setProperty("AWS_SECRET_KEY", s3Service.getSecretKey());
    }

    @BeforeEach
    void setup_s3() {
        MockitoAnnotations.openMocks(this);
        // Intentionally return null to simulate the NPE scenario
        when(zeebeClient.newDeployCommand()).thenReturn(null);

        s3Client = S3Client
                .builder()
                .endpointOverride(s3Service.getEndpoint())
                .credentialsProvider(
                        StaticCredentialsProvider.create(
                                AwsBasicCredentials.create(s3Service.getAccessKey(), s3Service.getSecretKey())
                        )
                )
                .region(Region.of(s3Service.getRegion()))
                .build();

        createBucket(REPORT_BUCKET);
    }

    @Test
    void test_happy_path() throws IOException, InterruptedException, TimeoutException {

        NullPointerException exception = assertThrows(NullPointerException.class, () -> {
            deploymentWorkerInitializer.deployBpmnFile("bpmn/basicExample.bpmn");
        });


        ProcessInstanceEvent processInstance = zeebe.newCreateInstanceCommand()
                .bpmnProcessId("File_handling_process")
                .latestVersion()
                .variables("{ \"report\": { \"region\":\"" + s3Service.getRegion() + "\", \"bucket\":\"" + REPORT_BUCKET + "\" } }")
                .send()
                .join();

        waitForTaskAndComplete("guess_random_number", USER_TASK_JOB_TYPE, Collections.singletonMap("inputNumber", 2));

        waitForProcessInstanceCompleted(processInstance);

        byte[] result = getResult(REPORT_BUCKET, String.format("uploadedFiles/%d/result.txt", concatPik(processInstance.getProcessInstanceKey())));

        String readableResult = new String(result, StandardCharsets.UTF_8);
        String[] resultArr = readableResult.split("");

        assertThat(resultArr[0]).isEqualTo("2");
        assertThat(resultArr[1]).isEqualTo(" ");
        assertThat(resultArr[2]).isEqualTo(":");
        assertThat(resultArr[3]).isEqualTo(" ");
    }

    private byte[] getResult(String bucket, String key) throws IOException {
        return s3Client.getObject(
                GetObjectRequest.builder()
                        .bucket(bucket)
                        .key(key)
                        .build()
        ).readAllBytes();
    }

    private void createBucket(String bucket) {
        s3Client.createBucket(CreateBucketRequest.builder()
                .bucket(bucket)
                .build()
        );
    }

    public long concatPik(long processInstanceKey) {
        int checksum = 0;
        while (processInstanceKey != 0) {
            checksum += processInstanceKey % 10;
            processInstanceKey /= 10;
        }
        return checksum;
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