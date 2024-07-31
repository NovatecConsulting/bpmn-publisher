
## Example Process 
![process.png](../assets/basicProcess-bpmn.png)

## Business Context

In the first process, a variable is provided at the start of the process that tells the process which AWS S3 bucket
it is communicating with and in which region the bucket is located. This is followed by a user task which asks a user 
to guess a number between 0 and 10.

In the subsequent service task, a number between 0 and 10 is also generated. These two numbers are then 
written to a new generated file in the format "UserNumber : RandomNumber". 
In the subsequent last step, this generated file is uploaded to the AWS S3 bucket using the Camunda AWS S3 Connector.

## Setup

In this example the use of connectors and job workers is mixed together. The connector runtime is added as a dependency
while the job workers logic is located here. Both use the file api to access local and remote files.

## Running the example
- Configure your Springboot application for local or camunda platform

### Running on Camunda SaaS platform & AWS 

to see the whole setup running on Camunda 8 platform **[Hands on Camunda AWS S3 Connector](https://medium.com/@jannik_74984/hands-on-camunda-aws-s3-connector-cd6f5011740b)**, there was a basic description of 
how to launch these processes on Camunda Saas platform and AWS


### Starting the process

To start activate your Spring-Boot application and then activate the blue Run symbol in the Camunda Modeler on the
right, there you can then provide the start variable which contains important information for the process

```json
{
  "report": {
    "region": "eu-central-1",
    "bucket": "my-connector-bucket"
  }
}
```

- “region” stands for the region in which the S3 bucket is located.
- “bucket” describes the name of your S3 bucket.

![process.png](../assets/camundaScreenshots/start_process.png)

After the start variable has been provided, the process has the necessary information and can start,
at the beginning the User task follows directly, in which the user should enter a number in a Camunda form

In the following service task, a random number is generated and saved together with the entered UserNumber in a file

The following Connector Task is given a "generatedFilePath" so that it knows where the file is stored that
is to be uploaded to AWS S3

This log also appears in the console of your Spring-Boot project. The file was successfully uploaded to an AWS S3 bucket.


![process.png](../assets/camundaScreenshots/successfulLog.png)

If the first Basic process was successful and the result.txt file was uploaded, you can see this in the AWS S3 console.
The result.txt files are stored under "bucketname/uploadedFiles/<shortPik>/result.txt"
shortPik: is logged out in the console, see the example above (81).
![process.png](../assets/awsScreenshots/bucketInsights.png)

Here you can see in more detail that the result.txt file was stored under the folder with the number <shortPik>. 
This number is the checksum, of the ProcessInstanceKey of the respective process to ensure a clear storage location within the S3 bucket
## Testing

The process is completely covered with process and integration testing

### Process Testing
- Process tests with JUnit5 and Mockito
- _camunda-process-test-coverage-junit5-platform-8_  to check out your Test coverage on each Process Test

![process.png](../assets/testCoverageExample1.png)

### Integration testing the process with AWS
To do an integration test I use the following technologies:

- Testcontainer [localstack module](https://java.testcontainers.org/modules/localstack/) to mimik AWS S3
- SpringBootTest to run my process application
