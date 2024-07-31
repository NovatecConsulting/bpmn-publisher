package info.novatec.bpm.camunda.basisExampleProject.adapter.in;

import info.novatec.bpm.camunda.connector.aws.s3.adapter.in.process.ConnectorAdapter;
import info.novatec.bpm.camunda.connector.aws.s3.adapter.out.cloud.CloudFileAdapter;
import info.novatec.bpm.camunda.connector.file.api.LocalFileCommand;
import info.novatec.bpm.camunda.connector.file.api.ProcessFileCommand;
import info.novatec.bpm.camunda.connector.file.api.RemoteFileCommand;
import info.novatec.bpm.camunda.connector.file.api.impl.ProcessFileService;
import io.camunda.zeebe.client.ZeebeClient;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import java.io.IOException;
import java.nio.file.Files;
import info.novatec.bpm.camunda.connector.aws.s3.adapter.out.cloud.CloudClientFactory;
import info.novatec.bpm.camunda.connector.aws.s3.adapter.out.local.LocalFileAdapter;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;

@Configuration
public class BasicProcessConfiguration {

    public BasicProcessConfiguration(ZeebeClient zeebeClient) {
        this.zeebeClient = zeebeClient;
    }

    private final ZeebeClient zeebeClient;

    // overwrite for tests
    @Value("${aws.endpoint.override:}")
    String awsEndpointOverride;

    @Bean
    @Primary
    RemoteFileCommand remoteFileCommand(CloudClientFactory clientFactory) {
        return new CloudFileAdapter(clientFactory);
    }

    @Bean
    @Primary
    LocalFileCommand localFileCommand() throws IOException {
        return new LocalFileAdapter(Files.createTempDirectory("connector-files-"));
    }

    @Bean
    @Primary
    CloudClientFactory cloudClientFactory() {
        return new CloudClientFactory(awsEndpointOverride);
    }

    @Bean
    @Primary
    ProcessFileCommand processFileCommand(RemoteFileCommand remoteFileCommand, LocalFileCommand localFileCommand) {
        return new ProcessFileService(remoteFileCommand, localFileCommand);
    }

    @Bean
    @Primary
    ConnectorAdapter connectorAdapter(ProcessFileCommand processFileCommand) {
        return new ConnectorAdapter(processFileCommand);
    }
}