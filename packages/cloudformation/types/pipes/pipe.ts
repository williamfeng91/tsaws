/**
 * Supported regions:
 * - ap-northeast-1 (version 119.1.0)
 * - ap-northeast-2 (version 119.1.0)
 * - ap-northeast-3 (version 119.1.0)
 * - ap-south-1 (version 119.1.0)
 * - ap-southeast-1 (version 119.1.0)
 * - ap-southeast-2 (version 119.1.0)
 * - ca-central-1 (version 119.1.0)
 * - eu-central-1 (version 119.1.0)
 * - eu-west-1 (version 119.1.0)
 * - eu-west-2 (version 119.1.0)
 * - eu-west-3 (version 119.1.0)
 * - sa-east-1 (version 119.1.0)
 * - us-east-1 (version 119.1.0)
 * - us-east-2 (version 119.1.0)
 * - us-west-1 (version 119.1.0)
 * - us-west-2 (version 119.1.0)
 */
import { List, Value } from '../../shared-types/dataTypes';
import { ResourceTag } from '../../shared-types/resource';

/**
 * These are custom parameters to be used when the target is a Amazon Redshift cluster to invoke the Amazon Redshift Data API BatchExecuteStatement.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipetargetredshiftdataparameters.html}
 **/
export interface PipesPipePipeTargetRedshiftDataParameters {
  /**
   * The name of the SQL statement. You can name the SQL statement when you create it to identify the query.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  StatementName?: Value<string>;
  /**
   * The SQL statement text to run.
   *
   * _Required_: Yes
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Sqls: List<Value<string>>;
  /**
   * The name of the database. Required when authenticating using temporary credentials.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Database: Value<string>;
  /**
   * The name or ARN of the secret that enables access to the database. Required when authenticating using Secrets Manager.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SecretManagerArn?: Value<string>;
  /**
   * The database user name. Required when authenticating using temporary credentials.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DbUser?: Value<string>;
  /**
   * Indicates whether to send an event back to EventBridge after the SQL statement runs.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  WithEvent?: Value<boolean>;
}

/**
 * The overrides that are sent to a container. An empty container override can be passed in. An example of an empty container override is `{"containerOverrides": [ ] }`. If a non-empty container override is specified, the `name` parameter must be included.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-ecscontaineroverride.html}
 **/
export interface PipesPipeEcsContainerOverride {
  /**
   * The soft limit (in MiB) of memory to reserve for the container, instead of the default value from the task definition. You must also specify a container name.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MemoryReservation?: Value<number>;
  /**
   * The command to send to the container that overrides the default command from the Docker image or the task definition. You must also specify a container name.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Command?: List<Value<string>>;
  /**
   * The hard limit (in MiB) of memory to present to the container, instead of the default value from the task definition. If your container attempts to exceed the memory specified here, the container is killed. You must also specify a container name.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Memory?: Value<number>;
  /**
   * The number of `cpu` units reserved for the container, instead of the default value from the task definition. You must also specify a container name.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Cpu?: Value<number>;
  /**
   * The environment variables to send to the container. You can add new environment variables, which are added to the container at launch, or you can override the existing environment variables from the Docker image or the task definition. You must also specify a container name.
   *
   * _Required_: No
   *
   * _Type_: List of [EcsEnvironmentVariable](aws-properties-pipes-pipe-ecsenvironmentvariable.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Environment?: List<PipesPipeEcsEnvironmentVariable>;
  /**
   * The type and amount of a resource to assign to a container, instead of the default value from the task definition. The only supported resource is a GPU.
   *
   * _Required_: No
   *
   * _Type_: List of [EcsResourceRequirement](aws-properties-pipes-pipe-ecsresourcerequirement.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ResourceRequirements?: List<PipesPipeEcsResourceRequirement>;
  /**
   * A list of files containing the environment variables to pass to a container, instead of the value from the container definition.
   *
   * _Required_: No
   *
   * _Type_: List of [EcsEnvironmentFile](aws-properties-pipes-pipe-ecsenvironmentfile.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  EnvironmentFiles?: List<PipesPipeEcsEnvironmentFile>;
  /**
   * The name of the container that receives the override. This parameter is required if any override is specified.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Name?: Value<string>;
}

/**
 * This structure specifies the network configuration for an Amazon ECS task.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-networkconfiguration.html}
 **/
export interface PipesPipeNetworkConfiguration {
  /**
   * Use this structure to specify the VPC subnets and security groups for the task, and whether a public IP address is to be used. This structure is relevant only for ECS tasks that use the `awsvpc` network mode.
   *
   * _Required_: No
   *
   * _Type_: [AwsVpcConfiguration](aws-properties-pipes-pipe-awsvpcconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AwsvpcConfiguration?: PipesPipeAwsVpcConfiguration;
}

/**
 * The parameters for using an EventBridge event bus as a target.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipetargeteventbridgeeventbusparameters.html}
 **/
export interface PipesPipePipeTargetEventBridgeEventBusParameters {
  /**
   * A free-form string, with a maximum of 128 characters, used to decide what fields to expect in the event detail.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DetailType?: Value<string>;
  /**
   * The URL subdomain of the endpoint. For example, if the URL for Endpoint is https://abcde.veo.endpoints.event.amazonaws.com, then the EndpointId is `abcde.veo`.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  EndpointId?: Value<string>;
  /**
   * The time stamp of the event, per [RFC3339](https://www.rfc-editor.org/rfc/rfc3339.txt). If no time stamp is provided, the time stamp of the [PutEvents](https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_PutEvents.html) call is used.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Time?: Value<string>;
  /**
   * AWS resources, identified by Amazon Resource Name (ARN), which the event primarily concerns. Any number, including zero, may be present.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Resources?: List<Value<string>>;
  /**
   * The source of the event.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Source?: Value<string>;
}

/**
 * The parameters for using an AWS Batch job as a target.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipetargetbatchjobparameters.html}
 **/
export interface PipesPipePipeTargetBatchJobParameters {
  /**
   * A list of dependencies for the job. A job can depend upon a maximum of 20 jobs. You can specify a `SEQUENTIAL` type dependency without specifying a job ID for array jobs so that each child array job completes sequentially, starting at index 0. You can also specify an `N_TO_N` type dependency with a job ID for array jobs. In that case, each index child of this job must wait for the corresponding index child of each dependency to complete before it can begin.
   *
   * _Required_: No
   *
   * _Type_: List of [BatchJobDependency](aws-properties-pipes-pipe-batchjobdependency.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DependsOn?: List<PipesPipeBatchJobDependency>;
  /**
   * Additional parameters passed to the job that replace parameter substitution placeholders that are set in the job definition. Parameters are specified as a key and value pair mapping. Parameters included here override any corresponding parameter defaults from the job definition.
   *
   * _Required_: No
   *
   * _Type_: Map of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Parameters?: { [key: string]: Value<string> };
  /**
   * The array properties for the submitted job, such as the size of the array. The array size can be between 2 and 10,000. If you specify array properties for a job, it becomes an array job. This parameter is used only if the target is an AWS Batch job.
   *
   * _Required_: No
   *
   * _Type_: [BatchArrayProperties](aws-properties-pipes-pipe-batcharrayproperties.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ArrayProperties?: PipesPipeBatchArrayProperties;
  /**
   * The name of the job. It can be up to 128 letters long. The first character must be alphanumeric, can contain uppercase and lowercase letters, numbers, hyphens (-), and underscores (_).
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  JobName: Value<string>;
  /**
   * The retry strategy to use for failed jobs. When a retry strategy is specified here, it overrides the retry strategy defined in the job definition.
   *
   * _Required_: No
   *
   * _Type_: [BatchRetryStrategy](aws-properties-pipes-pipe-batchretrystrategy.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RetryStrategy?: PipesPipeBatchRetryStrategy;
  /**
   * The job definition used by this job. This value can be one of `name`, `name:revision`, or the Amazon Resource Name (ARN) for the job definition. If name is specified without a revision then the latest active revision is used.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  JobDefinition: Value<string>;
  /**
   * The overrides that are sent to a container.
   *
   * _Required_: No
   *
   * _Type_: [BatchContainerOverrides](aws-properties-pipes-pipe-batchcontaineroverrides.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ContainerOverrides?: PipesPipeBatchContainerOverrides;
}

/**
 * The type and amount of a resource to assign to a container. The supported resource types are GPUs and Elastic Inference accelerators. For more information, see [Working with GPUs on Amazon ECS](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-gpu.html) or [Working with Amazon Elastic Inference on Amazon ECS](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-inference.html) in the _Amazon Elastic Container Service Developer Guide_
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-ecsresourcerequirement.html}
 **/
export interface PipesPipeEcsResourceRequirement {
  /**
   * The type of resource to assign to a container. The supported values are `GPU` or `InferenceAccelerator`.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Type: Value<string>;
  /**
   * The value for the specified resource type.
   *
   * If the `GPU` type is used, the value is the number of physical `GPUs` the Amazon ECS container agent reserves for the container. The number of GPUs that's reserved for all containers in a task can't exceed the number of available GPUs on the container instance that the task is launched on.
   *
   * If the `InferenceAccelerator` type is used, the `value` matches the `deviceName` for an InferenceAccelerator specified in a task definition.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Value: Value<string>;
}

/**
 * The parameters for using a Lambda function as a target.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipetargetlambdafunctionparameters.html}
 **/
export interface PipesPipePipeTargetLambdaFunctionParameters {
  /**
   * Specify whether to invoke the function synchronously or asynchronously.
   */
  InvocationType?: Value<string>;
}

/**
 * The overrides that are sent to a container.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-batchcontaineroverrides.html}
 **/
export interface PipesPipeBatchContainerOverrides {
  /**
   * The command to send to the container that overrides the default command from the Docker image or the task definition.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Command?: List<Value<string>>;
  /**
   * The environment variables to send to the container. You can add new environment variables, which are added to the container at launch, or you can override the existing environment variables from the Docker image or the task definition.
   *
   * Environment variables cannot start with "`AWS Batch`". This naming convention is reserved for variables that AWS Batch sets.
   *
   * _Required_: No
   *
   * _Type_: List of [BatchEnvironmentVariable](aws-properties-pipes-pipe-batchenvironmentvariable.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Environment?: List<PipesPipeBatchEnvironmentVariable>;
  /**
   * The instance type to use for a multi-node parallel job.
   *
   * This parameter isn't applicable to single-node container jobs or jobs that run on Fargate resources, and shouldn't be provided.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  InstanceType?: Value<string>;
  /**
   * The type and amount of resources to assign to a container. This overrides the settings in the job definition. The supported resources include `GPU`, `MEMORY`, and `VCPU`.
   *
   * _Required_: No
   *
   * _Type_: List of [BatchResourceRequirement](aws-properties-pipes-pipe-batchresourcerequirement.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ResourceRequirements?: List<PipesPipeBatchResourceRequirement>;
}

/**
 * The parameters for using a Kinesis stream as a source.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipesourcekinesisstreamparameters.html}
 **/
export interface PipesPipePipeSourceKinesisStreamParameters {
  /**
   * (Streams only) The position in a stream from which to start reading.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  StartingPosition: Value<string>;
  /**
   * The maximum number of records to include in each batch.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  BatchSize?: Value<number>;
  /**
   * (Streams only) Discard records after the specified number of retries. The default value is -1, which sets the maximum number of retries to infinite. When MaximumRetryAttempts is infinite, EventBridge retries failed records until the record expires in the event source.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MaximumRetryAttempts?: Value<number>;
  /**
   * (Streams only) Define how to handle item process failures. `AUTOMATIC_BISECT` halves each batch and retry each half until all the records are processed or there is one failed message left in the batch.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  OnPartialBatchItemFailure?: Value<string>;
  /**
   * Define the target queue to send dead-letter queue events to.
   *
   * _Required_: No
   *
   * _Type_: [DeadLetterConfig](aws-properties-pipes-pipe-deadletterconfig.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DeadLetterConfig?: PipesPipeDeadLetterConfig;
  /**
   * (Streams only) The number of batches to process concurrently from each shard. The default value is 1.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ParallelizationFactor?: Value<number>;
  /**
   * (Streams only) Discard records older than the specified age. The default value is -1, which sets the maximum age to infinite. When the value is set to infinite, EventBridge never discards old records.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MaximumRecordAgeInSeconds?: Value<number>;
  /**
   * With `StartingPosition` set to `AT_TIMESTAMP`, the time from which to start reading, in Unix time seconds.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  StartingPositionTimestamp?: Value<string>;
  /**
   * The maximum length of a time to wait for events.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MaximumBatchingWindowInSeconds?: Value<number>;
}

/**
 * A list of files containing the environment variables to pass to a container. You can specify up to ten environment files. The file must have a `.env` file extension. Each line in an environment file should contain an environment variable in `VARIABLE=VALUE` format. Lines beginning with `#` are treated as comments and are ignored. For more information about the environment variable file syntax, see [Declare default environment variables in file](https://docs.docker.com/compose/env-file/).
 *
 * If there are environment variables specified using the `environment` parameter in a container definition, they take precedence over the variables contained within an environment file. If multiple environment files are specified that contain the same variable, they're processed from the top down. We recommend that you use unique variable names. For more information, see [Specifying environment variables](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/taskdef-envfiles.html) in the _Amazon Elastic Container Service Developer Guide_.
 *
 * This parameter is only supported for tasks hosted on Fargate using the following platform versions:
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-ecsenvironmentfile.html}
 **/
export interface PipesPipeEcsEnvironmentFile {
  /**
   * The file type to use. The only supported value is `s3`.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Type: Value<string>;
  /**
   * The Amazon Resource Name (ARN) of the Amazon S3 object containing the environment variable file.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Value: Value<string>;
}

/**
 * The parameters for using a DynamoDB stream as a source.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipesourcedynamodbstreamparameters.html}
 **/
export interface PipesPipePipeSourceDynamoDBStreamParameters {
  /**
   * (Streams only) The position in a stream from which to start reading.
   *
   * _Valid values_: `TRIM_HORIZON | LATEST`
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  StartingPosition: Value<string>;
  /**
   * The maximum number of records to include in each batch.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  BatchSize?: Value<number>;
  /**
   * (Streams only) Discard records after the specified number of retries. The default value is -1, which sets the maximum number of retries to infinite. When MaximumRetryAttempts is infinite, EventBridge retries failed records until the record expires in the event source.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MaximumRetryAttempts?: Value<number>;
  /**
   * (Streams only) Define how to handle item process failures. `AUTOMATIC_BISECT` halves each batch and retry each half until all the records are processed or there is one failed message left in the batch.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  OnPartialBatchItemFailure?: Value<string>;
  /**
   * Define the target queue to send dead-letter queue events to.
   *
   * _Required_: No
   *
   * _Type_: [DeadLetterConfig](aws-properties-pipes-pipe-deadletterconfig.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DeadLetterConfig?: PipesPipeDeadLetterConfig;
  /**
   * (Streams only) The number of batches to process concurrently from each shard. The default value is 1.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ParallelizationFactor?: Value<number>;
  /**
   * (Streams only) Discard records older than the specified age. The default value is -1, which sets the maximum age to infinite. When the value is set to infinite, EventBridge never discards old records.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MaximumRecordAgeInSeconds?: Value<number>;
  /**
   * The maximum length of a time to wait for events.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MaximumBatchingWindowInSeconds?: Value<number>;
}

/**
 * These are custom parameter to be used when the target is an API Gateway REST APIs or EventBridge ApiDestinations.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipetargethttpparameters.html}
 **/
export interface PipesPipePipeTargetHttpParameters {
  /**
   * The path parameter values to be used to populate API Gateway REST API or EventBridge ApiDestination path wildcards ("*").
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PathParameterValues?: List<Value<string>>;
  /**
   * The headers that need to be sent as part of request invoking the API Gateway REST API or EventBridge ApiDestination.
   *
   * _Required_: No
   *
   * _Type_: Map of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  HeaderParameters?: { [key: string]: Value<string> };
  /**
   * The query string keys/values that need to be sent as part of request invoking the API Gateway REST API or EventBridge ApiDestination.
   *
   * _Required_: No
   *
   * _Type_: Map of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  QueryStringParameters?: { [key: string]: Value<string> };
}

/**
 * The parameters for using a Step Functions state machine as a target.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipetargetstatemachineparameters.html}
 **/
export interface PipesPipePipeTargetStateMachineParameters {
  /**
   * Specify whether to invoke the Step Functions state machine synchronously or asynchronously.
   */
  InvocationType?: Value<string>;
}

/**
 * An object that represents an AWS Batch job dependency.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-batchjobdependency.html}
 **/
export interface PipesPipeBatchJobDependency {
  /**
   * The type of the job dependency.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Type?: Value<string>;
  /**
   * The job ID of the AWS Batch job that's associated with this dependency.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  JobId?: Value<string>;
}

/**
 * The parameters required to set up a target for your pipe.
 *
 * For more information about pipe target parameters, including how to use dynamic path parameters, see [Target parameters](https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-pipes-event-target.html) in the _Amazon EventBridge User Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipetargetparameters.html}
 **/
export interface PipesPipePipeTargetParameters {
  /**
   * The parameters for using a Step Functions state machine as a target.
   *
   * _Required_: No
   *
   * _Type_: [PipeTargetStateMachineParameters](aws-properties-pipes-pipe-pipetargetstatemachineparameters.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  StepFunctionStateMachineParameters?: PipesPipePipeTargetStateMachineParameters;
  /**
   * These are custom parameter to be used when the target is an API Gateway REST APIs or EventBridge ApiDestinations.
   *
   * _Required_: No
   *
   * _Type_: [PipeTargetHttpParameters](aws-properties-pipes-pipe-pipetargethttpparameters.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  HttpParameters?: PipesPipePipeTargetHttpParameters;
  /**
   * The parameters for using a Amazon SQS stream as a source.
   *
   * _Required_: No
   *
   * _Type_: [PipeTargetSqsQueueParameters](aws-properties-pipes-pipe-pipetargetsqsqueueparameters.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SqsQueueParameters?: PipesPipePipeTargetSqsQueueParameters;
  /**
   * The parameters for using an CloudWatch Logs log stream as a target.
   *
   * _Required_: No
   *
   * _Type_: [PipeTargetCloudWatchLogsParameters](aws-properties-pipes-pipe-pipetargetcloudwatchlogsparameters.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CloudWatchLogsParameters?: PipesPipePipeTargetCloudWatchLogsParameters;
  /**
   * The parameters for using a Kinesis stream as a source.
   *
   * _Required_: No
   *
   * _Type_: [PipeTargetKinesisStreamParameters](aws-properties-pipes-pipe-pipetargetkinesisstreamparameters.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  KinesisStreamParameters?: PipesPipePipeTargetKinesisStreamParameters;
  /**
   * Valid JSON text passed to the target. In this case, nothing from the event itself is passed to the target. For more information, see [The JavaScript Object Notation (JSON) Data Interchange Format](http://www.rfc-editor.org/rfc/rfc7159.txt).
   *
   * To remove an input template, specify an empty string.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  InputTemplate?: Value<string>;
  /**
   * The parameters for using a SageMaker pipeline as a target.
   *
   * _Required_: No
   *
   * _Type_: [PipeTargetSageMakerPipelineParameters](aws-properties-pipes-pipe-pipetargetsagemakerpipelineparameters.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SageMakerPipelineParameters?: PipesPipePipeTargetSageMakerPipelineParameters;
  /**
   * The parameters for using an EventBridge event bus as a target.
   *
   * _Required_: No
   *
   * _Type_: [PipeTargetEventBridgeEventBusParameters](aws-properties-pipes-pipe-pipetargeteventbridgeeventbusparameters.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  EventBridgeEventBusParameters?: PipesPipePipeTargetEventBridgeEventBusParameters;
  /**
   * The parameters for using a Lambda function as a target.
   *
   * _Required_: No
   *
   * _Type_: [PipeTargetLambdaFunctionParameters](aws-properties-pipes-pipe-pipetargetlambdafunctionparameters.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  LambdaFunctionParameters?: PipesPipePipeTargetLambdaFunctionParameters;
  /**
   * The parameters for using an Amazon ECS task as a target.
   *
   * _Required_: No
   *
   * _Type_: [PipeTargetEcsTaskParameters](aws-properties-pipes-pipe-pipetargetecstaskparameters.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  EcsTaskParameters?: PipesPipePipeTargetEcsTaskParameters;
  /**
   * The parameters for using an AWS Batch job as a target.
   *
   * _Required_: No
   *
   * _Type_: [PipeTargetBatchJobParameters](aws-properties-pipes-pipe-pipetargetbatchjobparameters.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  BatchJobParameters?: PipesPipePipeTargetBatchJobParameters;
  /**
   * These are custom parameters to be used when the target is a Amazon Redshift cluster to invoke the Amazon Redshift Data API BatchExecuteStatement.
   *
   * _Required_: No
   *
   * _Type_: [PipeTargetRedshiftDataParameters](aws-properties-pipes-pipe-pipetargetredshiftdataparameters.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RedshiftDataParameters?: PipesPipePipeTargetRedshiftDataParameters;
}

/**
 * This structure specifies the VPC subnets and security groups for the task, and whether a public IP address is to be used. This structure is relevant only for ECS tasks that use the `awsvpc` network mode.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-awsvpcconfiguration.html}
 **/
export interface PipesPipeAwsVpcConfiguration {
  /**
   * Specifies the security groups associated with the task. These security groups must all be in the same VPC. You can specify as many as five security groups. If you do not specify a security group, the default security group for the VPC is used.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SecurityGroups?: List<Value<string>>;
  /**
   * Specifies the subnets associated with the task. These subnets must all be in the same VPC. You can specify as many as 16 subnets.
   *
   * _Required_: Yes
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Subnets: List<Value<string>>;
  /**
   * Specifies whether the task's elastic network interface receives a public IP address. You can specify `ENABLED` only when `LaunchType` in `EcsParameters` is set to `FARGATE`.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AssignPublicIp?: Value<string>;
}

/**
 * The parameters for using a Amazon SQS stream as a source.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipetargetsqsqueueparameters.html}
 **/
export interface PipesPipePipeTargetSqsQueueParameters {
  /**
   * The FIFO message group ID to use as the target.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MessageGroupId?: Value<string>;
  /**
   * This parameter applies only to FIFO (first-in-first-out) queues.
   *
   * The token used for deduplication of sent messages.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MessageDeduplicationId?: Value<string>;
}

/**
 * The array properties for the submitted job, such as the size of the array. The array size can be between 2 and 10,000. If you specify array properties for a job, it becomes an array job. This parameter is used only if the target is an AWS Batch job.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-batcharrayproperties.html}
 **/
export interface PipesPipeBatchArrayProperties {
  /**
   * The size of the array, if this is an array batch job.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Size?: Value<number>;
}

/**
 * The AWS Secrets Manager secret that stores your stream credentials.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-mskaccesscredentials.html}
 **/
export interface PipesPipeMSKAccessCredentials {
  /**
   * The ARN of the Secrets Manager secret.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ClientCertificateTlsAuth?: Value<string>;
  /**
   * The ARN of the Secrets Manager secret.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SaslScram512Auth?: Value<string>;
}

/**
 * Filter events using an event pattern. For more information, see [Events and Event Patterns](https://docs.aws.amazon.com/eventbridge/latest/userguide/eventbridge-and-event-patterns.html) in the _Amazon EventBridge User Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-filter.html}
 **/
export interface PipesPipeFilter {
  /**
   * The event pattern.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Pattern?: Value<string>;
}

/**
 * The type and amount of a resource to assign to a container. The supported resources include `GPU`, `MEMORY`, and `VCPU`.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-batchresourcerequirement.html}
 **/
export interface PipesPipeBatchResourceRequirement {
  /**
   * The type of resource to assign to a container. The supported resources include `GPU`, `MEMORY`, and `VCPU`.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Type: Value<string>;
  /**
   * The quantity of the specified resource to reserve for the container. The values vary based on the `type` specified.
   *
   * type="GPU"
   *
   * The number of physical GPUs to reserve for the container. Make sure that the number of GPUs reserved for all containers in a job doesn't exceed the number of available GPUs on the compute resource that the job is launched on.
   *
   * GPUs aren't available for jobs that are running on Fargate resources.
   *
   * type="MEMORY"
   *
   * The memory hard limit (in MiB) present to the container. This parameter is supported for jobs that are running on EC2 resources. If your container attempts to exceed the memory specified, the container is terminated. This parameter maps to `Memory` in the [ Create a container](https://docs.docker.com/engine/api/v1.23/#create-a-container) section of the [Docker Remote API](https://docs.docker.com/engine/api/v1.23/) and the `--memory` option to [docker run](https://docs.docker.com/engine/reference/run/). You must specify at least 4 MiB of memory for a job. This is required but can be specified in several places for multi-node parallel (MNP) jobs. It must be specified for each node at least once. This parameter maps to `Memory` in the [ Create a container](https://docs.docker.com/engine/api/v1.23/#create-a-container) section of the [Docker Remote API](https://docs.docker.com/engine/api/v1.23/) and the `--memory` option to [docker run](https://docs.docker.com/engine/reference/run/).
   *
   * If you're trying to maximize your resource utilization by providing your jobs as much memory as possible for a particular instance type, see [Memory management](https://docs.aws.amazon.com/batch/latest/userguide/memory-management.html) in the _AWS Batch User Guide_.
   *
   * For jobs that are running on Fargate resources, then `value` is the hard limit (in MiB), and must match one of the supported values and the `VCPU` values must be one of the values supported for that memory value.
   *
   * value = 512
   *
   * `VCPU` = 0.25
   *
   * value = 1024
   *
   * `VCPU` = 0.25 or 0.5
   *
   * value = 2048
   *
   * `VCPU` = 0.25, 0.5, or 1
   *
   * value = 3072
   *
   * `VCPU` = 0.5, or 1
   *
   * value = 4096
   *
   * `VCPU` = 0.5, 1, or 2
   *
   * value = 5120, 6144, or 7168
   *
   * `VCPU` = 1 or 2
   *
   * value = 8192
   *
   * `VCPU` = 1, 2, 4, or 8
   *
   * value = 9216, 10240, 11264, 12288, 13312, 14336, or 15360
   *
   * `VCPU` = 2 or 4
   *
   * value = 16384
   *
   * `VCPU` = 2, 4, or 8
   *
   * value = 17408, 18432, 19456, 21504, 22528, 23552, 25600, 26624, 27648, 29696, or 30720
   *
   * `VCPU` = 4
   *
   * value = 20480, 24576, or 28672
   *
   * `VCPU` = 4 or 8
   *
   * value = 36864, 45056, 53248, or 61440
   *
   * `VCPU` = 8
   *
   * value = 32768, 40960, 49152, or 57344
   *
   * `VCPU` = 8 or 16
   *
   * value = 65536, 73728, 81920, 90112, 98304, 106496, 114688, or 122880
   *
   * `VCPU` = 16
   *
   * type="VCPU"
   *
   * The number of vCPUs reserved for the container. This parameter maps to `CpuShares` in the [ Create a container](https://docs.docker.com/engine/api/v1.23/#create-a-container) section of the [Docker Remote API](https://docs.docker.com/engine/api/v1.23/) and the `--cpu-shares` option to [docker run](https://docs.docker.com/engine/reference/run/). Each vCPU is equivalent to 1,024 CPU shares. For EC2 resources, you must specify at least one vCPU. This is required but can be specified in several places; it must be specified for each node at least once.
   *
   * The default for the Fargate On-Demand vCPU resource count quota is 6 vCPUs. For more information about Fargate quotas, see [AWS Fargate quotas](https://docs.aws.amazon.com/general/latest/gr/ecs-service.html#service-quotas-fargate) in the _AWS General Reference_.
   *
   * For jobs that are running on Fargate resources, then `value` must match one of the supported values and the `MEMORY` values must be one of the values supported for that `VCPU` value. The supported values are 0.25, 0.5, 1, 2, 4, 8, and 16
   *
   * value = 0.25
   *
   * `MEMORY` = 512, 1024, or 2048
   *
   * value = 0.5
   *
   * `MEMORY` = 1024, 2048, 3072, or 4096
   *
   * value = 1
   *
   * `MEMORY` = 2048, 3072, 4096, 5120, 6144, 7168, or 8192
   *
   * value = 2
   *
   * `MEMORY` = 4096, 5120, 6144, 7168, 8192, 9216, 10240, 11264, 12288, 13312, 14336, 15360, or 16384
   *
   * value = 4
   *
   * `MEMORY` = 8192, 9216, 10240, 11264, 12288, 13312, 14336, 15360, 16384, 17408, 18432, 19456, 20480, 21504, 22528, 23552, 24576, 25600, 26624, 27648, 28672, 29696, or 30720
   *
   * value = 8
   *
   * `MEMORY` = 16384, 20480, 24576, 28672, 32768, 36864, 40960, 45056, 49152, 53248, 57344, or 61440
   *
   * value = 16
   *
   * `MEMORY` = 32768, 40960, 49152, 57344, 65536, 73728, 81920, 90112, 98304, 106496, 114688, or 122880
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Value: Value<string>;
}

/**
 * These are custom parameter to be used when the target is an API Gateway REST APIs or EventBridge ApiDestinations. In the latter case, these are merged with any InvocationParameters specified on the Connection, with any values from the Connection taking precedence.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipeenrichmenthttpparameters.html}
 **/
export interface PipesPipePipeEnrichmentHttpParameters {
  /**
   * The path parameter values to be used to populate API Gateway REST API or EventBridge ApiDestination path wildcards ("*").
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PathParameterValues?: List<Value<string>>;
  /**
   * The headers that need to be sent as part of request invoking the API Gateway REST API or EventBridge ApiDestination.
   *
   * _Required_: No
   *
   * _Type_: Map of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  HeaderParameters?: { [key: string]: Value<string> };
  /**
   * The query string keys/values that need to be sent as part of request invoking the API Gateway REST API or EventBridge ApiDestination.
   *
   * _Required_: No
   *
   * _Type_: Map of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  QueryStringParameters?: { [key: string]: Value<string> };
}

/**
 * The environment variables to send to the container. You can add new environment variables, which are added to the container at launch, or you can override the existing environment variables from the Docker image or the task definition. You must also specify a container name.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-ecsenvironmentvariable.html}
 **/
export interface PipesPipeEcsEnvironmentVariable {
  /**
   * The value of the key-value pair. For environment variables, this is the value of the environment variable.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Value?: Value<string>;
  /**
   * The name of the key-value pair. For environment variables, this is the name of the environment variable.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Name?: Value<string>;
}

/**
 * The overrides that are associated with a task.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-ecstaskoverride.html}
 **/
export interface PipesPipeEcsTaskOverride {
  /**
   * The Amazon Resource Name (ARN) of the task execution IAM role override for the task. For more information, see [Amazon ECS task execution IAM role](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task_execution_IAM_role.html) in the _Amazon Elastic Container Service Developer Guide_.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ExecutionRoleArn?: Value<string>;
  /**
   * The Amazon Resource Name (ARN) of the IAM role that containers in this task can assume. All containers in this task are granted the permissions that are specified in this role. For more information, see [IAM Role for Tasks](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-iam-roles.html) in the _Amazon Elastic Container Service Developer Guide_.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TaskRoleArn?: Value<string>;
  /**
   * The memory override for the task.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Memory?: Value<string>;
  /**
   * The cpu override for the task.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Cpu?: Value<string>;
  /**
   * The Elastic Inference accelerator override for the task.
   *
   * _Required_: No
   *
   * _Type_: List of [EcsInferenceAcceleratorOverride](aws-properties-pipes-pipe-ecsinferenceacceleratoroverride.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  InferenceAcceleratorOverrides?: List<PipesPipeEcsInferenceAcceleratorOverride>;
  /**
   * The ephemeral storage setting override for the task.
   *
   * This parameter is only supported for tasks hosted on Fargate that use the following platform versions:
   */
  EphemeralStorage?: PipesPipeEcsEphemeralStorage;
  /**
   * One or more container overrides that are sent to a task.
   *
   * _Required_: No
   *
   * _Type_: List of [EcsContainerOverride](aws-properties-pipes-pipe-ecscontaineroverride.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ContainerOverrides?: List<PipesPipeEcsContainerOverride>;
}

/**
 * An object representing a constraint on task placement. To learn more, see [Task Placement Constraints](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-placement-constraints.html) in the Amazon Elastic Container Service Developer Guide.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-placementconstraint.html}
 **/
export interface PipesPipePlacementConstraint {
  /**
   * The type of constraint. Use distinctInstance to ensure that each task in a particular group is running on a different container instance. Use memberOf to restrict the selection to a group of valid candidates.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Type?: Value<string>;
  /**
   * A cluster query language expression to apply to the constraint. You cannot specify an expression if the constraint type is `distinctInstance`. To learn more, see [Cluster Query Language](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/cluster-query-language.html) in the Amazon Elastic Container Service Developer Guide.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Expression?: Value<string>;
}

/**
 * The AWS Secrets Manager secret that stores your stream credentials.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-selfmanagedkafkaaccessconfigurationcredentials.html}
 **/
export interface PipesPipeSelfManagedKafkaAccessConfigurationCredentials {
  /**
   * The ARN of the Secrets Manager secret.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  BasicAuth?: Value<string>;
  /**
   * The ARN of the Secrets Manager secret.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SaslScram256Auth?: Value<string>;
  /**
   * The ARN of the Secrets Manager secret.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ClientCertificateTlsAuth?: Value<string>;
  /**
   * The ARN of the Secrets Manager secret.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SaslScram512Auth?: Value<string>;
}

/**
 * The amount of ephemeral storage to allocate for the task. This parameter is used to expand the total amount of ephemeral storage available, beyond the default amount, for tasks hosted on Fargate. For more information, see [Fargate task storage](https://docs.aws.amazon.com/AmazonECS/latest/userguide/using_data_volumes.html) in the _Amazon ECS User Guide for Fargate_.
 *
 * **Note**
 *
 * This parameter is only supported for tasks hosted on Fargate using Linux platform version `1.4.0` or later. This parameter is not supported for Windows containers on Fargate.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-ecsephemeralstorage.html}
 **/
export interface PipesPipeEcsEphemeralStorage {
  /**
   * The total amount, in GiB, of ephemeral storage to set for the task. The minimum supported value is `21` GiB and the maximum supported value is `200` GiB.
   *
   * _Required_: Yes
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SizeInGiB: Value<number>;
}

/**
 * The parameters for using a Amazon SQS stream as a source.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipesourcesqsqueueparameters.html}
 **/
export interface PipesPipePipeSourceSqsQueueParameters {
  /**
   * The maximum number of records to include in each batch.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  BatchSize?: Value<number>;
  /**
   * The maximum length of a time to wait for events.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MaximumBatchingWindowInSeconds?: Value<number>;
}

/**
 * The parameters for using a Kinesis stream as a source.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipetargetkinesisstreamparameters.html}
 **/
export interface PipesPipePipeTargetKinesisStreamParameters {
  /**
   * Determines which shard in the stream the data record is assigned to. Partition keys are Unicode strings with a maximum length limit of 256 characters for each key. Amazon Kinesis Data Streams uses the partition key as input to a hash function that maps the partition key and associated data to a specific shard. Specifically, an MD5 hash function is used to map partition keys to 128-bit integer values and to map associated data records to shards. As a result of this hashing mechanism, all data records with the same partition key map to the same shard within the stream.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PartitionKey: Value<string>;
}

/**
 * The parameters for using a Rabbit MQ broker as a source.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipesourcerabbitmqbrokerparameters.html}
 **/
export interface PipesPipePipeSourceRabbitMQBrokerParameters {
  /**
   * The maximum number of records to include in each batch.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  BatchSize?: Value<number>;
  /**
   * The name of the virtual host associated with the source broker.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  VirtualHost?: Value<string>;
  /**
   * The name of the destination queue to consume.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  QueueName: Value<string>;
  /**
   * The credentials needed to access the resource.
   *
   * _Required_: Yes
   *
   * _Type_: [MQBrokerAccessCredentials](aws-properties-pipes-pipe-mqbrokeraccesscredentials.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Credentials: PipesPipeMQBrokerAccessCredentials;
  /**
   * The maximum length of a time to wait for events.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MaximumBatchingWindowInSeconds?: Value<number>;
}

/**
 * The parameters for using a SageMaker pipeline as a target.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipetargetsagemakerpipelineparameters.html}
 **/
export interface PipesPipePipeTargetSageMakerPipelineParameters {
  /**
   * List of Parameter names and values for SageMaker Model Building Pipeline execution.
   *
   * _Required_: No
   *
   * _Type_: List of [SageMakerPipelineParameter](aws-properties-pipes-pipe-sagemakerpipelineparameter.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PipelineParameterList?: List<PipesPipeSageMakerPipelineParameter>;
}

/**
 * Details on an Elastic Inference accelerator task override. This parameter is used to override the Elastic Inference accelerator specified in the task definition. For more information, see [Working with Amazon Elastic Inference on Amazon ECS](https://docs.aws.amazon.com/AmazonECS/latest/userguide/ecs-inference.html) in the _Amazon Elastic Container Service Developer Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-ecsinferenceacceleratoroverride.html}
 **/
export interface PipesPipeEcsInferenceAcceleratorOverride {
  /**
   * The Elastic Inference accelerator type to use.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DeviceType?: Value<string>;
  /**
   * The Elastic Inference accelerator device name to override for the task. This parameter must match a `deviceName` specified in the task definition.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DeviceName?: Value<string>;
}

/**
 * The AWS Secrets Manager secret that stores your broker credentials.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-mqbrokeraccesscredentials.html}
 **/
export interface PipesPipeMQBrokerAccessCredentials {
  /**
   * The ARN of the Secrets Manager secret.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  BasicAuth: Value<string>;
}

/**
 * The parameters required to set up a source for your pipe.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipesourceparameters.html}
 **/
export interface PipesPipePipeSourceParameters {
  /**
   * The parameters for using an MSK stream as a source.
   *
   * _Required_: No
   *
   * _Type_: [PipeSourceManagedStreamingKafkaParameters](aws-properties-pipes-pipe-pipesourcemanagedstreamingkafkaparameters.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ManagedStreamingKafkaParameters?: PipesPipePipeSourceManagedStreamingKafkaParameters;
  /**
   * The parameters for using a DynamoDB stream as a source.
   *
   * _Required_: No
   *
   * _Type_: [PipeSourceDynamoDBStreamParameters](aws-properties-pipes-pipe-pipesourcedynamodbstreamparameters.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DynamoDBStreamParameters?: PipesPipePipeSourceDynamoDBStreamParameters;
  /**
   * The parameters for using a self-managed Apache Kafka stream as a source.
   *
   * _Required_: No
   *
   * _Type_: [PipeSourceSelfManagedKafkaParameters](aws-properties-pipes-pipe-pipesourceselfmanagedkafkaparameters.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SelfManagedKafkaParameters?: PipesPipePipeSourceSelfManagedKafkaParameters;
  /**
   * The parameters for using a Rabbit MQ broker as a source.
   *
   * _Required_: No
   *
   * _Type_: [PipeSourceRabbitMQBrokerParameters](aws-properties-pipes-pipe-pipesourcerabbitmqbrokerparameters.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RabbitMQBrokerParameters?: PipesPipePipeSourceRabbitMQBrokerParameters;
  /**
   * The parameters for using a Amazon SQS stream as a source.
   *
   * _Required_: No
   *
   * _Type_: [PipeSourceSqsQueueParameters](aws-properties-pipes-pipe-pipesourcesqsqueueparameters.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SqsQueueParameters?: PipesPipePipeSourceSqsQueueParameters;
  /**
   * The parameters for using a Kinesis stream as a source.
   *
   * _Required_: No
   *
   * _Type_: [PipeSourceKinesisStreamParameters](aws-properties-pipes-pipe-pipesourcekinesisstreamparameters.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  KinesisStreamParameters?: PipesPipePipeSourceKinesisStreamParameters;
  /**
   * The collection of event patterns used to filter events.
   *
   * To remove a filter, specify a `FilterCriteria` object with an empty array of `Filter` objects.
   *
   * For more information, see [Events and Event Patterns](https://docs.aws.amazon.com/eventbridge/latest/userguide/eventbridge-and-event-patterns.html) in the _Amazon EventBridge User Guide_.
   *
   * _Required_: No
   *
   * _Type_: [FilterCriteria](aws-properties-pipes-pipe-filtercriteria.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FilterCriteria?: PipesPipeFilterCriteria;
  /**
   * The parameters for using an Active MQ broker as a source.
   *
   * _Required_: No
   *
   * _Type_: [PipeSourceActiveMQBrokerParameters](aws-properties-pipes-pipe-pipesourceactivemqbrokerparameters.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ActiveMQBrokerParameters?: PipesPipePipeSourceActiveMQBrokerParameters;
}

/**
 * The environment variables to send to the container. You can add new environment variables, which are added to the container at launch, or you can override the existing environment variables from the Docker image or the task definition.
 *
 * **Note**
 *
 * Environment variables cannot start with "`AWS Batch`". This naming convention is reserved for variables that AWS Batch sets.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-batchenvironmentvariable.html}
 **/
export interface PipesPipeBatchEnvironmentVariable {
  /**
   * The value of the key-value pair. For environment variables, this is the value of the environment variable.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Value?: Value<string>;
  /**
   * The name of the key-value pair. For environment variables, this is the name of the environment variable.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Name?: Value<string>;
}

/**
 * The parameters for using a self-managed Apache Kafka stream as a source.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipesourceselfmanagedkafkaparameters.html}
 **/
export interface PipesPipePipeSourceSelfManagedKafkaParameters {
  /**
   * (Streams only) The position in a stream from which to start reading.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  StartingPosition?: Value<string>;
  /**
   * The maximum number of records to include in each batch.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  BatchSize?: Value<number>;
  /**
   * The name of the destination queue to consume.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ConsumerGroupID?: Value<string>;
  /**
   * An array of server URLs.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AdditionalBootstrapServers?: List<Value<string>>;
  /**
   * This structure specifies the VPC subnets and security groups for the stream, and whether a public IP address is to be used.
   *
   * _Required_: No
   *
   * _Type_: [SelfManagedKafkaAccessConfigurationVpc](aws-properties-pipes-pipe-selfmanagedkafkaaccessconfigurationvpc.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Vpc?: PipesPipeSelfManagedKafkaAccessConfigurationVpc;
  /**
   * The credentials needed to access the resource.
   *
   * _Required_: No
   *
   * _Type_: [SelfManagedKafkaAccessConfigurationCredentials](aws-properties-pipes-pipe-selfmanagedkafkaaccessconfigurationcredentials.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Credentials?: PipesPipeSelfManagedKafkaAccessConfigurationCredentials;
  /**
   * The ARN of the Secrets Manager secret used for certification.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ServerRootCaCertificate?: Value<string>;
  /**
   * The name of the topic that the pipe will read from.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TopicName: Value<string>;
  /**
   * The maximum length of a time to wait for events.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MaximumBatchingWindowInSeconds?: Value<number>;
}

/**
 * Name/Value pair of a parameter to start execution of a SageMaker Model Building Pipeline.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-sagemakerpipelineparameter.html}
 **/
export interface PipesPipeSageMakerPipelineParameter {
  /**
   * Value of parameter to start execution of a SageMaker Model Building Pipeline.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Value: Value<string>;
  /**
   * Name of parameter to start execution of a SageMaker Model Building Pipeline.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Name: Value<string>;
}

/**
 * The collection of event patterns used to filter events.
 *
 * To remove a filter, specify a `FilterCriteria` object with an empty array of `Filter` objects.
 *
 * For more information, see [Events and Event Patterns](https://docs.aws.amazon.com/eventbridge/latest/userguide/eventbridge-and-event-patterns.html) in the _Amazon EventBridge User Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-filtercriteria.html}
 **/
export interface PipesPipeFilterCriteria {
  /**
   * The event patterns.
   *
   * _Required_: No
   *
   * _Type_: List of [Filter](aws-properties-pipes-pipe-filter.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Filters?: List<PipesPipeFilter>;
}

/**
 * The parameters for using an MSK stream as a source.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipesourcemanagedstreamingkafkaparameters.html}
 **/
export interface PipesPipePipeSourceManagedStreamingKafkaParameters {
  /**
   * (Streams only) The position in a stream from which to start reading.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  StartingPosition?: Value<string>;
  /**
   * The maximum number of records to include in each batch.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  BatchSize?: Value<number>;
  /**
   * The name of the destination queue to consume.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ConsumerGroupID?: Value<string>;
  /**
   * The credentials needed to access the resource.
   *
   * _Required_: No
   *
   * _Type_: [MSKAccessCredentials](aws-properties-pipes-pipe-mskaccesscredentials.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Credentials?: PipesPipeMSKAccessCredentials;
  /**
   * The name of the topic that the pipe will read from.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  TopicName: Value<string>;
  /**
   * The maximum length of a time to wait for events.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MaximumBatchingWindowInSeconds?: Value<number>;
}

/**
 * The task placement strategy for a task or service. To learn more, see [Task Placement Strategies](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-placement-strategies.html) in the Amazon Elastic Container Service Service Developer Guide.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-placementstrategy.html}
 **/
export interface PipesPipePlacementStrategy {
  /**
   * The field to apply the placement strategy against. For the spread placement strategy, valid values are instanceId (or host, which has the same effect), or any platform or custom attribute that is applied to a container instance, such as attribute:ecs.availability-zone. For the binpack placement strategy, valid values are cpu and memory. For the random placement strategy, this field is not used.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Field?: Value<string>;
  /**
   * The type of placement strategy. The random placement strategy randomly places tasks on available candidates. The spread placement strategy spreads placement across available candidates evenly based on the field parameter. The binpack strategy places tasks on available candidates that have the least available amount of the resource that is specified with the field parameter. For example, if you binpack on memory, a task is placed on the instance with the least amount of remaining memory (but still enough to run the task).
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Type?: Value<string>;
}

/**
 * The parameters for using an Active MQ broker as a source.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipesourceactivemqbrokerparameters.html}
 **/
export interface PipesPipePipeSourceActiveMQBrokerParameters {
  /**
   * The maximum number of records to include in each batch.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  BatchSize?: Value<number>;
  /**
   * The name of the destination queue to consume.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  QueueName: Value<string>;
  /**
   * The credentials needed to access the resource.
   *
   * _Required_: Yes
   *
   * _Type_: [MQBrokerAccessCredentials](aws-properties-pipes-pipe-mqbrokeraccesscredentials.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Credentials: PipesPipeMQBrokerAccessCredentials;
  /**
   * The maximum length of a time to wait for events.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MaximumBatchingWindowInSeconds?: Value<number>;
}

/**
 * The parameters for using an CloudWatch Logs log stream as a target.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipetargetcloudwatchlogsparameters.html}
 **/
export interface PipesPipePipeTargetCloudWatchLogsParameters {
  /**
   * The name of the log stream.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  LogStreamName?: Value<string>;
  /**
   * The time the event occurred, expressed as the number of milliseconds after Jan 1, 1970 00:00:00 UTC.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Timestamp?: Value<string>;
}

/**
 * The parameters required to set up enrichment on your pipe.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipeenrichmentparameters.html}
 **/
export interface PipesPipePipeEnrichmentParameters {
  /**
   * Contains the HTTP parameters to use when the target is a API Gateway REST endpoint or EventBridge ApiDestination.
   *
   * If you specify an API Gateway REST API or EventBridge ApiDestination as a target, you can use this parameter to specify headers, path parameters, and query string keys/values as part of your target invoking request. If you're using ApiDestinations, the corresponding Connection can also have these values configured. In case of any conflicting keys, values from the Connection take precedence.
   *
   * _Required_: No
   *
   * _Type_: [PipeEnrichmentHttpParameters](aws-properties-pipes-pipe-pipeenrichmenthttpparameters.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  HttpParameters?: PipesPipePipeEnrichmentHttpParameters;
  /**
   * Valid JSON text passed to the enrichment. In this case, nothing from the event itself is passed to the enrichment. For more information, see [The JavaScript Object Notation (JSON) Data Interchange Format](http://www.rfc-editor.org/rfc/rfc7159.txt).
   *
   * To remove an input template, specify an empty string.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  InputTemplate?: Value<string>;
}

/**
 * The retry strategy that's associated with a job. For more information, see [ Automated job retries](https://docs.aws.amazon.com/batch/latest/userguide/job_retries.html) in the _AWS Batch User Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-batchretrystrategy.html}
 **/
export interface PipesPipeBatchRetryStrategy {
  /**
   * The number of times to move a job to the `RUNNABLE` status. If the value of `attempts` is greater than one, the job is retried on failure the same number of attempts as the value.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Attempts?: Value<number>;
}

/**
 * This structure specifies the VPC subnets and security groups for the stream, and whether a public IP address is to be used.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-selfmanagedkafkaaccessconfigurationvpc.html}
 **/
export interface PipesPipeSelfManagedKafkaAccessConfigurationVpc {
  /**
   * Specifies the subnets associated with the stream. These subnets must all be in the same VPC. You can specify as many as 16 subnets.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Subnets?: List<Value<string>>;
  /**
   * Specifies the security groups associated with the stream. These security groups must all be in the same VPC. You can specify as many as five security groups. If you do not specify a security group, the default security group for the VPC is used.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SecurityGroup?: List<Value<string>>;
}

/**
 * The parameters for using an Amazon ECS task as a target.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-pipetargetecstaskparameters.html}
 **/
export interface PipesPipePipeTargetEcsTaskParameters {
  /**
   * Specifies the platform version for the task. Specify only the numeric portion of the platform version, such as `1.1.0`.
   *
   * This structure is used only if `LaunchType` is `FARGATE`. For more information about valid platform versions, see [AWS Fargate Platform Versions](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/platform_versions.html) in the _Amazon Elastic Container Service Developer Guide_.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PlatformVersion?: Value<string>;
  /**
   * Specifies an Amazon ECS task group for the task. The maximum length is 255 characters.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Group?: Value<string>;
  /**
   * Specifies whether to enable Amazon ECS managed tags for the task. For more information, see [Tagging Your Amazon ECS Resources](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-using-tags.html) in the Amazon Elastic Container Service Developer Guide.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  EnableECSManagedTags?: Value<boolean>;
  /**
   * The number of tasks to create based on `TaskDefinition`. The default is 1.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TaskCount?: Value<number>;
  /**
   * Whether or not to enable the execute command functionality for the containers in this task. If true, this enables execute command functionality on all containers in the task.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  EnableExecuteCommand?: Value<boolean>;
  /**
   * An array of placement constraint objects to use for the task. You can specify up to 10 constraints per task (including constraints in the task definition and those specified at runtime).
   *
   * _Required_: No
   *
   * _Type_: List of [PlacementConstraint](aws-properties-pipes-pipe-placementconstraint.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PlacementConstraints?: List<PipesPipePlacementConstraint>;
  /**
   * Specifies whether to propagate the tags from the task definition to the task. If no value is specified, the tags are not propagated. Tags can only be propagated to the task during task creation. To add tags to a task after task creation, use the `TagResource` API action.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PropagateTags?: Value<string>;
  /**
   * The placement strategy objects to use for the task. You can specify a maximum of five strategy rules per task.
   *
   * _Required_: No
   *
   * _Type_: [List](aws-properties-pipes-pipe-placementstrategy.md) of [PlacementStrategy](aws-properties-pipes-pipe-placementstrategy.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PlacementStrategy?: List<PipesPipePlacementStrategy>;
  /**
   * Specifies the launch type on which your task is running. The launch type that you specify here must match one of the launch type (compatibilities) of the target task. The `FARGATE` value is supported only in the Regions where AWS Fargate with Amazon ECS is supported. For more information, see [AWS Fargate on Amazon ECS](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/AWS-Fargate.html) in the _Amazon Elastic Container Service Developer Guide_.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  LaunchType?: Value<string>;
  /**
   * The capacity provider strategy to use for the task.
   *
   * If a `capacityProviderStrategy` is specified, the `launchType` parameter must be omitted. If no `capacityProviderStrategy` or launchType is specified, the `defaultCapacityProviderStrategy` for the cluster is used.
   *
   * _Required_: No
   *
   * _Type_: List of [CapacityProviderStrategyItem](aws-properties-pipes-pipe-capacityproviderstrategyitem.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CapacityProviderStrategy?: List<PipesPipeCapacityProviderStrategyItem>;
  /**
   * The reference ID to use for the task.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ReferenceId?: Value<string>;
  /**
   * The overrides that are associated with a task.
   *
   * _Required_: No
   *
   * _Type_: [EcsTaskOverride](aws-properties-pipes-pipe-ecstaskoverride.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Overrides?: PipesPipeEcsTaskOverride;
  /**
   * Use this structure if the Amazon ECS task uses the `awsvpc` network mode. This structure specifies the VPC subnets and security groups associated with the task, and whether a public IP address is to be used. This structure is required if `LaunchType` is `FARGATE` because the `awsvpc` mode is required for Fargate tasks.
   *
   * If you specify `NetworkConfiguration` when the target ECS task does not use the `awsvpc` network mode, the task fails.
   *
   * _Required_: No
   *
   * _Type_: [NetworkConfiguration](aws-properties-pipes-pipe-networkconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  NetworkConfiguration?: PipesPipeNetworkConfiguration;
  /**
   * The metadata that you apply to the task to help you categorize and organize them. Each tag consists of a key and an optional value, both of which you define. To learn more, see [RunTask](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_RunTask.html#ECS-RunTask-request-tags) in the Amazon ECS API Reference.
   *
   * _Required_: No
   *
   * _Type_: List of [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Tags?: List<ResourceTag>;
  /**
   * The ARN of the task definition to use if the event target is an Amazon ECS task.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TaskDefinitionArn: Value<string>;
}

/**
 * A `DeadLetterConfig` object that contains information about a dead-letter queue configuration.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-deadletterconfig.html}
 **/
export interface PipesPipeDeadLetterConfig {
  /**
   * The ARN of the Amazon SQS queue specified as the target for the dead-letter queue.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Arn?: Value<string>;
}

/**
 * The details of a capacity provider strategy. To learn more, see [CapacityProviderStrategyItem](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_CapacityProviderStrategyItem.html) in the Amazon ECS API Reference.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pipes-pipe-capacityproviderstrategyitem.html}
 **/
export interface PipesPipeCapacityProviderStrategyItem {
  /**
   * The short name of the capacity provider.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CapacityProvider: Value<string>;
  /**
   * The weight value designates the relative percentage of the total number of tasks launched that should use the specified capacity provider. The weight value is taken into consideration after the base value, if defined, is satisfied.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Weight?: Value<number>;
  /**
   * The base value designates how many tasks, at a minimum, to run on the specified capacity provider. Only one capacity provider in a capacity provider strategy can have a base defined. If no value is specified, the default value of 0 is used.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Base?: Value<number>;
}
export interface PipesPipeProperties {
  /**
   * The ARN of the enrichment resource.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Enrichment?: Value<string>;
  /**
   * The ARN of the target resource.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Target: Value<string>;
  /**
   * A description of the pipe.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Description?: Value<string>;
  /**
   * The state the pipe should be in.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DesiredState?: Value<string>;
  /**
   * The parameters required to set up a target for your pipe.
   *
   * For more information about pipe target parameters, including how to use dynamic path parameters, see [Target parameters](https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-pipes-event-target.html) in the _Amazon EventBridge User Guide_.
   *
   * _Required_: No
   *
   * _Type_: [PipeTargetParameters](aws-properties-pipes-pipe-pipetargetparameters.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TargetParameters?: PipesPipePipeTargetParameters;
  /**
   * The parameters required to set up enrichment on your pipe.
   *
   * _Required_: No
   *
   * _Type_: [PipeEnrichmentParameters](aws-properties-pipes-pipe-pipeenrichmentparameters.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  EnrichmentParameters?: PipesPipePipeEnrichmentParameters;
  /**
   * The ARN of the role that allows the pipe to send data to the target.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RoleArn: Value<string>;
  /**
   * The ARN of the source resource.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Source: Value<string>;
  /**
   * The parameters required to set up a source for your pipe.
   *
   * _Required_: No
   *
   * _Type_: [PipeSourceParameters](aws-properties-pipes-pipe-pipesourceparameters.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SourceParameters?: PipesPipePipeSourceParameters;
  /**
   * The list of key-value pairs to associate with the pipe.
   *
   * _Required_: No
   *
   * _Type_: Map of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Tags?: { [key: string]: Value<string> };
  /**
   * The name of the pipe.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Name?: Value<string>;
}

/**
 * Create a pipe. Amazon EventBridge Pipes connect event sources to targets and reduces the need for specialized knowledge and integration code.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pipes-pipe.html}
 */
export interface PipesPipeResource {
  Type: 'AWS::Pipes::Pipe';
  Properties: PipesPipeProperties;
}
