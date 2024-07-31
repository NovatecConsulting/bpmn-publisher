package info.novatec.bpm.camunda;

import io.camunda.connector.runtime.InboundConnectorsAutoConfiguration;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication(exclude = {InboundConnectorsAutoConfiguration.class})
@ComponentScan(basePackages = "com.example")
public class ExampleProcessApplication {

    public static void main(String[] args) {
        SpringApplication.run(ExampleProcessApplication.class, args);
    }
}
