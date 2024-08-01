package com.example;

import io.camunda.zeebe.client.ZeebeClient;
import jakarta.annotation.PostConstruct;
import org.slf4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;
import org.springframework.stereotype.Component;

import java.io.File;
import java.io.IOException;


@Component
public class DeploymentWorkerInitializer {

    private final ZeebeClient zeebeClient;
    private static final Logger logger = LoggerUtil.getLogger(DeploymentWorkerInitializer.class);

    @Autowired
    public DeploymentWorkerInitializer(ZeebeClient zeebeClient) {
        this.zeebeClient = zeebeClient;
    }

    @MyAnnotation(bpmnFilePath = "bpmn/")
    public void deployAllFiles(String directoryPath) {
        try {
            Resource directoryResource = new ClassPathResource(directoryPath);
            File directory = directoryResource.getFile();

            File[] files = directory.listFiles((dir, name) -> name.endsWith(".bpmn") || name.endsWith(".dmn"));
            if (files != null) {
                for (File file : files) {
                    deployFile(directoryPath + "/" + file.getName());
                }
            } else {
                logger.warn("No BPMN or DMN files found in directory: " + directoryPath);
            }
        } catch (IOException e) {
            logger.error("Failed to access BPMN or DMN files", e);
        }
    }

    private void deployFile(String bpmnFilePath) {
        try {
            Resource bpmnFile = new ClassPathResource(bpmnFilePath);
            zeebeClient.newDeployCommand()
                    .addResourceStream(bpmnFile.getInputStream(), bpmnFilePath)
                    .send()
                    .join();

            logger.info("Deployment successful for file: " + bpmnFilePath);
        } catch (IOException e) {
            logger.error("Failed to deploy file: " + bpmnFilePath, e);
        }
    }
}
