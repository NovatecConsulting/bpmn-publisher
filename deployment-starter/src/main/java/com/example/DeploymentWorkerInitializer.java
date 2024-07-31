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

import java.io.IOException;


@Component
public class DeploymentWorkerInitializer {

    private final ZeebeClient zeebeClient;
    private static final Logger logger = LoggerUtil.getLogger(DeploymentWorkerInitializer.class);

    @Autowired
    public DeploymentWorkerInitializer(ZeebeClient zeebeClient) {
        this.zeebeClient = zeebeClient;
    }

    @MyAnnotation(bpmnFilePath = "bpmn/basicExample.bpmn")
    public void deployBpmnFile(String bpmnFilePath) {
        System.out.println("filePath:" + bpmnFilePath);
        try {
            Resource bpmnFile = new ClassPathResource(bpmnFilePath);
            zeebeClient.newDeployCommand()
                    .addResourceStream(bpmnFile.getInputStream(), bpmnFilePath)
                    .send()
                    .join();

            logger.info("Deployment successful");

        } catch(IOException e){
            logger.error("Failed to deploy BPMN file", e);
        }
    }
}
