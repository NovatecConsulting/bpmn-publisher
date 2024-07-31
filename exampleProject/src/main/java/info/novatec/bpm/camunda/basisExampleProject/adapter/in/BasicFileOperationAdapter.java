package info.novatec.bpm.camunda.basisExampleProject.adapter.in;

import com.example.DeploymentWorkerInitializer;
import com.example.MyAnnotation;
import info.novatec.bpm.camunda.connector.file.api.LocalFileCommand;
import io.camunda.zeebe.client.ZeebeClient;
import io.camunda.zeebe.client.api.response.ActivatedJob;
import jakarta.annotation.PostConstruct;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Component;
import io.camunda.zeebe.spring.client.annotation.JobWorker;
import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.util.Map;
import java.util.Random;

@Component
public class BasicFileOperationAdapter {

    private static final Logger logger = LoggerFactory.getLogger(BasicFileOperationAdapter.class);

    private final LocalFileCommand localFileCommand;

    public BasicFileOperationAdapter( LocalFileCommand localFileCommand) {
        this.localFileCommand = localFileCommand;
    }


    @JobWorker(type = "generate-file")
    public Map<String, Object> generateFile(ActivatedJob job) throws IOException {

        logger.info("Received job");

        Random random = new Random();
        int randomNumber = random.nextInt(10);  // random number between 0 and 9

        int userInputNumber = (int) job.getVariable("inputNumber");

        String content = userInputNumber + " : " + randomNumber;

        byte[] result = content.getBytes(StandardCharsets.UTF_8);

        String generatedFilePath = "uploadedFiles/" + concatPik(job.getProcessInstanceKey()) + "/result.txt";
        logger.info("Result file generated");

        localFileCommand.saveFile(result, generatedFilePath);
        logger.info("NUMS:" + userInputNumber + " " + randomNumber);
        return Map.of("generatedFilePath", generatedFilePath, "generatedFileContentType", "text/plain");
    }

    public long concatPik(long processInstanceKey) {
        int checksum = 0;
        while (processInstanceKey != 0) {
            checksum += processInstanceKey % 10;
            processInstanceKey /= 10;
        }
        return checksum;
    }
}
