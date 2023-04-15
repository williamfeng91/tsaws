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
 * Summary of information about the last monitoring job to run.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-monitoringschedule-monitoringexecutionsummary.html}
 **/
export interface SageMakerMonitoringScheduleMonitoringExecutionSummary {
  /**
   * The time the monitoring job was scheduled.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ScheduledTime: Value<string>;
  /**
   * The name of the endpoint used to run the monitoring job.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Maximum_: `63`
   *
   * _Pattern_: `^[a-zA-Z0-9](-*[a-zA-Z0-9]){0,62}`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  EndpointName?: Value<string>;
  /**
   * The name of the monitoring schedule.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `63`
   *
   * _Pattern_: `^[a-zA-Z0-9](-*[a-zA-Z0-9]){0,62}$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MonitoringScheduleName: Value<string>;
  /**
   * The Amazon Resource Name (ARN) of the monitoring job.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Maximum_: `256`
   *
   * _Pattern_: `arn:aws[a-z-]*:sagemaker:[a-z0-9-]*:[0-9]{12}:processing-job/.*`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ProcessingJobArn?: Value<string>;
  /**
   * Contains the reason a monitoring job failed, if it failed.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Maximum_: `1024`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FailureReason?: Value<string>;
  /**
   * The time at which the monitoring job was created.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CreationTime: Value<string>;
  /**
   * A timestamp that indicates the last time the monitoring job was modified.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  LastModifiedTime: Value<string>;
  /**
   * The status of the monitoring job.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Allowed values_: `Completed | CompletedWithViolations | Failed | InProgress | Pending | Stopped | Stopping`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MonitoringExecutionStatus: Value<string>;
}

/**
 * The `DatasetFormat` property type specifies Property description not available. for an [AWS::SageMaker::MonitoringSchedule](aws-resource-sagemaker-monitoringschedule.md).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-monitoringschedule-datasetformat.html}
 **/
export interface SageMakerMonitoringScheduleDatasetFormat {
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Parquet?: Value<boolean>;
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: [Csv](aws-properties-sagemaker-monitoringschedule-csv.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Csv?: SageMakerMonitoringScheduleCsv;
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: [Json](aws-properties-sagemaker-monitoringschedule-json.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Json?: SageMakerMonitoringScheduleJson;
}

/**
 * The `Csv` property type specifies Property description not available. for an [AWS::SageMaker::MonitoringSchedule](aws-resource-sagemaker-monitoringschedule.md).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-monitoringschedule-csv.html}
 **/
export interface SageMakerMonitoringScheduleCsv {
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Header?: Value<boolean>;
}

/**
 * Specifies a VPC that your training jobs and hosted models have access to. Control access to and from your training and model containers by configuring the VPC. For more information, see [Protect Endpoints by Using an Amazon Virtual Private Cloud](https://docs.aws.amazon.com/sagemaker/latest/dg/host-vpc.html) and [Protect Training Jobs by Using an Amazon Virtual Private Cloud](https://docs.aws.amazon.com/sagemaker/latest/dg/train-vpc.html).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-monitoringschedule-vpcconfig.html}
 **/
export interface SageMakerMonitoringScheduleVpcConfig {
  /**
   * The ID of the subnets in the VPC to which you want to connect your training job or model. For information about the availability of specific instance types, see [Supported Instance Types and Availability Zones](https://docs.aws.amazon.com/sagemaker/latest/dg/instance-types-az.html).
   *
   * _Required_: Yes
   *
   * _Type_: List of String
   *
   * _Maximum_: `16`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Subnets: List<Value<string>>;
  /**
   * The VPC security group IDs, in the form sg-xxxxxxxx. Specify the security groups for the VPC that is specified in the `Subnets` field.
   *
   * _Required_: Yes
   *
   * _Type_: List of String
   *
   * _Maximum_: `5`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SecurityGroupIds: List<Value<string>>;
}

/**
 * Container image configuration object for the monitoring job.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-monitoringschedule-monitoringappspecification.html}
 **/
export interface SageMakerMonitoringScheduleMonitoringAppSpecification {
  /**
   * Specifies the entrypoint for a container used to run the monitoring job.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Maximum_: `100`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ContainerEntrypoint?: List<Value<string>>;
  /**
   * An Amazon S3 URI to a script that is called after analysis has been performed. Applicable only for the built-in (first party) containers.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Maximum_: `1024`
   *
   * _Pattern_: `^(https|s3)://([^/]+)/?(.*)$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PostAnalyticsProcessorSourceUri?: Value<string>;
  /**
   * An Amazon S3 URI to a script that is called per row prior to running analysis. It can base64 decode the payload and convert it into a flatted json so that the built-in container can use the converted data. Applicable only for the built-in (first party) containers.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Maximum_: `1024`
   *
   * _Pattern_: `^(https|s3)://([^/]+)/?(.*)$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RecordPreprocessorSourceUri?: Value<string>;
  /**
   * The container image to be run by the monitoring job.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Maximum_: `255`
   *
   * _Pattern_: `.*`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ImageUri: Value<string>;
  /**
   * An array of arguments for the container used to run the monitoring job.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Maximum_: `50`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ContainerArguments?: List<Value<string>>;
}

/**
 * Baseline configuration used to validate that the data conforms to the specified constraints and statistics.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-monitoringschedule-baselineconfig.html}
 **/
export interface SageMakerMonitoringScheduleBaselineConfig {
  /**
   * The baseline statistics file in Amazon S3 that the current monitoring job should be validated against.
   *
   * _Required_: No
   *
   * _Type_: [StatisticsResource](aws-properties-sagemaker-monitoringschedule-statisticsresource.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  StatisticsResource?: SageMakerMonitoringScheduleStatisticsResource;
  /**
   * The Amazon S3 URI for the constraints resource.
   *
   * _Required_: No
   *
   * _Type_: [ConstraintsResource](aws-properties-sagemaker-monitoringschedule-constraintsresource.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ConstraintsResource?: SageMakerMonitoringScheduleConstraintsResource;
}

/**
 * The `BatchTransformInput` property type specifies Property description not available. for an [AWS::SageMaker::MonitoringSchedule](aws-resource-sagemaker-monitoringschedule.md).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-monitoringschedule-batchtransforminput.html}
 **/
export interface SageMakerMonitoringScheduleBatchTransformInput {
  /**
   * Property description not available.
   *
   * _Required_: Yes
   *
   * _Type_: [DatasetFormat](aws-properties-sagemaker-monitoringschedule-datasetformat.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DatasetFormat: SageMakerMonitoringScheduleDatasetFormat;
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  S3DataDistributionType?: Value<string>;
  /**
   * Property description not available.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DataCapturedDestinationS3Uri: Value<string>;
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  S3InputMode?: Value<string>;
  /**
   * Property description not available.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  LocalPath: Value<string>;
}

/**
 * Configures the monitoring schedule and defines the monitoring job.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-monitoringschedule-monitoringscheduleconfig.html}
 **/
export interface SageMakerMonitoringScheduleMonitoringScheduleConfig {
  /**
   * Configures the monitoring schedule.
   *
   * _Required_: No
   *
   * _Type_: [ScheduleConfig](aws-properties-sagemaker-monitoringschedule-scheduleconfig.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ScheduleConfig?: SageMakerMonitoringScheduleScheduleConfig;
  /**
   * Defines the monitoring job.
   *
   * _Required_: No
   *
   * _Type_: [MonitoringJobDefinition](aws-properties-sagemaker-monitoringschedule-monitoringjobdefinition.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MonitoringJobDefinition?: SageMakerMonitoringScheduleMonitoringJobDefinition;
  /**
   * The name of the monitoring job definition to schedule.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `63`
   *
   * _Pattern_: `^[a-zA-Z0-9](-*[a-zA-Z0-9])*$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MonitoringJobDefinitionName?: Value<string>;
  /**
   * The type of the monitoring job definition to schedule.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `DataQuality | ModelBias | ModelExplainability | ModelQuality`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MonitoringType?: Value<string>;
}

/**
 * Input object for the endpoint
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-monitoringschedule-endpointinput.html}
 **/
export interface SageMakerMonitoringScheduleEndpointInput {
  /**
   * Whether input data distributed in Amazon S3 is fully replicated or sharded by an S3 key. Defaults to `FullyReplicated`
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `FullyReplicated | ShardedByS3Key`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  S3DataDistributionType?: Value<string>;
  /**
   * An endpoint in customer's account which has enabled `DataCaptureConfig` enabled.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Maximum_: `63`
   *
   * _Pattern_: `^[a-zA-Z0-9](-*[a-zA-Z0-9]){0,62}`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  EndpointName: Value<string>;
  /**
   * Whether the `Pipe` or `File` is used as the input mode for transferring data for the monitoring job. `Pipe` mode is recommended for large datasets. `File` mode is useful for small files that fit in memory. Defaults to `File`.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `File | Pipe`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  S3InputMode?: Value<string>;
  /**
   * Path to the filesystem where the endpoint data is available to the container.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Maximum_: `256`
   *
   * _Pattern_: `.*`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  LocalPath: Value<string>;
}

/**
 * Networking options for a job, such as network traffic encryption between containers, whether to allow inbound and outbound network calls to and from containers, and the VPC subnets and security groups to use for VPC-enabled jobs.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-monitoringschedule-networkconfig.html}
 **/
export interface SageMakerMonitoringScheduleNetworkConfig {
  /**
   * Whether to allow inbound and outbound network calls to and from the containers used for the processing job.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  EnableNetworkIsolation?: Value<boolean>;
  /**
   * Whether to encrypt all communications between distributed processing jobs. Choose `True` to encrypt communications. Encryption provides greater security for distributed processing jobs, but the processing might take longer.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  EnableInterContainerTrafficEncryption?: Value<boolean>;
  /**
   * Specifies a VPC that your training jobs and hosted models have access to. Control access to and from your training and model containers by configuring the VPC. For more information, see [Protect Endpoints by Using an Amazon Virtual Private Cloud](https://docs.aws.amazon.com/sagemaker/latest/dg/host-vpc.html) and [Protect Training Jobs by Using an Amazon Virtual Private Cloud](https://docs.aws.amazon.com/sagemaker/latest/dg/train-vpc.html).
   *
   * _Required_: No
   *
   * _Type_: [VpcConfig](aws-properties-sagemaker-monitoringschedule-vpcconfig.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  VpcConfig?: SageMakerMonitoringScheduleVpcConfig;
}

/**
 * Identifies the resources to deploy for a monitoring job.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-monitoringschedule-monitoringresources.html}
 **/
export interface SageMakerMonitoringScheduleMonitoringResources {
  /**
   * The configuration for the cluster resources used to run the processing job.
   *
   * _Required_: Yes
   *
   * _Type_: [ClusterConfig](aws-properties-sagemaker-monitoringschedule-clusterconfig.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ClusterConfig: SageMakerMonitoringScheduleClusterConfig;
}

/**
 * Specifies a limit to how long a model training job or model compilation job can run. It also specifies how long a managed spot training job has to complete. When the job reaches the time limit, SageMaker ends the training or compilation job. Use this API to cap model training costs.
 *
 * To stop a training job, SageMaker sends the algorithm the `SIGTERM` signal, which delays job termination for 120 seconds. Algorithms can use this 120-second window to save the model artifacts, so the results of training are not lost.
 *
 * The training algorithms provided by SageMaker automatically save the intermediate results of a model training job when possible. This attempt to save artifacts is only a best effort case as model might not be in a state from which it can be saved. For example, if training has just started, the model might not be ready to save. When saved, this intermediate data is a valid model artifact. You can use it to create a model with `CreateModel`.
 *
 * **Note**
 *
 * The Neural Topic Model (NTM) currently does not support saving intermediate model artifacts. When training NTMs, make sure that the maximum runtime is sufficient for the training job to complete.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-monitoringschedule-stoppingcondition.html}
 **/
export interface SageMakerMonitoringScheduleStoppingCondition {
  /**
   * The maximum length of time, in seconds, that a training or compilation job can run before it is stopped.
   *
   * For compilation jobs, if the job does not complete during this time, a `TimeOut` error is generated. We recommend starting with 900 seconds and increasing as necessary based on your model.
   *
   * For all other jobs, if the job does not complete during this time, SageMaker ends the job. When `RetryStrategy` is specified in the job request, `MaxRuntimeInSeconds` specifies the maximum time for all of the attempts in total, not each individual attempt. The default value is 1 day. The maximum value is 28 days.
   *
   * The maximum time that a `TrainingJob` can run in total, including any time spent publishing metrics or archiving and uploading models after it has been stopped, is 30 days.
   *
   * _Required_: Yes
   *
   * _Type_: Integer
   *
   * _Minimum_: `1`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MaxRuntimeInSeconds: Value<number>;
}

/**
 * The Amazon S3 URI for the constraints resource.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-monitoringschedule-constraintsresource.html}
 **/
export interface SageMakerMonitoringScheduleConstraintsResource {
  /**
   * The Amazon S3 URI for the constraints resource.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  S3Uri?: Value<string>;
}

/**
 * The `Json` property type specifies Property description not available. for an [AWS::SageMaker::MonitoringSchedule](aws-resource-sagemaker-monitoringschedule.md).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-monitoringschedule-json.html}
 **/
export interface SageMakerMonitoringScheduleJson {
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Line?: Value<boolean>;
}

/**
 * The output configuration for monitoring jobs.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-monitoringschedule-monitoringoutputconfig.html}
 **/
export interface SageMakerMonitoringScheduleMonitoringOutputConfig {
  /**
   * The AWS Key Management Service (AWS KMS) key that Amazon SageMaker uses to encrypt the model artifacts at rest using Amazon S3 server-side encryption.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Maximum_: `2048`
   *
   * _Pattern_: `.*`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  KmsKeyId?: Value<string>;
  /**
   * Monitoring outputs for monitoring jobs. This is where the output of the periodic monitoring jobs is uploaded.
   *
   * _Required_: Yes
   *
   * _Type_: List of [MonitoringOutput](aws-properties-sagemaker-monitoringschedule-monitoringoutput.md)
   *
   * _Maximum_: `1`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MonitoringOutputs: List<SageMakerMonitoringScheduleMonitoringOutput>;
}

/**
 * The baseline statistics file in Amazon S3 that the current monitoring job should be validated against.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-monitoringschedule-statisticsresource.html}
 **/
export interface SageMakerMonitoringScheduleStatisticsResource {
  /**
   * The S3 URI for the statistics resource.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  S3Uri?: Value<string>;
}

/**
 * Configuration for the cluster used to run model monitoring jobs.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-monitoringschedule-clusterconfig.html}
 **/
export interface SageMakerMonitoringScheduleClusterConfig {
  /**
   * The number of ML compute instances to use in the model monitoring job. For distributed processing jobs, specify a value greater than 1. The default value is 1.
   *
   * _Required_: Yes
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  InstanceCount: Value<number>;
  /**
   * The size of the ML storage volume, in gigabytes, that you want to provision. You must specify sufficient ML storage for your scenario.
   *
   * _Required_: Yes
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  VolumeSizeInGB: Value<number>;
  /**
   * The AWS Key Management Service (AWS KMS) key that Amazon SageMaker uses to encrypt data on the storage volume attached to the ML compute instance(s) that run the model monitoring job.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  VolumeKmsKeyId?: Value<string>;
  /**
   * The ML compute instance type for the processing job.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  InstanceType: Value<string>;
}

/**
 * Defines the monitoring job.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-monitoringschedule-monitoringjobdefinition.html}
 **/
export interface SageMakerMonitoringScheduleMonitoringJobDefinition {
  /**
   * The array of inputs for the monitoring job. Currently we support monitoring an Amazon SageMaker Endpoint.
   *
   * _Required_: Yes
   *
   * _Type_: List of [MonitoringInput](aws-properties-sagemaker-monitoringschedule-monitoringinput.md)
   *
   * _Maximum_: `1`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MonitoringInputs: List<SageMakerMonitoringScheduleMonitoringInput>;
  /**
   * Identifies the resources, ML compute instances, and ML storage volumes to deploy for a monitoring job. In distributed processing, you specify more than one instance.
   *
   * _Required_: Yes
   *
   * _Type_: [MonitoringResources](aws-properties-sagemaker-monitoringschedule-monitoringresources.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MonitoringResources: SageMakerMonitoringScheduleMonitoringResources;
  /**
   * Baseline configuration used to validate that the data conforms to the specified constraints and statistics
   *
   * _Required_: No
   *
   * _Type_: [BaselineConfig](aws-properties-sagemaker-monitoringschedule-baselineconfig.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  BaselineConfig?: SageMakerMonitoringScheduleBaselineConfig;
  /**
   * Specifies a time limit for how long the monitoring job is allowed to run.
   *
   * _Required_: No
   *
   * _Type_: [StoppingCondition](aws-properties-sagemaker-monitoringschedule-stoppingcondition.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  StoppingCondition?: SageMakerMonitoringScheduleStoppingCondition;
  /**
   * Configures the monitoring job to run a specified Docker container image.
   *
   * _Required_: Yes
   *
   * _Type_: [MonitoringAppSpecification](aws-properties-sagemaker-monitoringschedule-monitoringappspecification.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MonitoringAppSpecification: SageMakerMonitoringScheduleMonitoringAppSpecification;
  /**
   * Specifies networking options for an monitoring job.
   *
   * _Required_: No
   *
   * _Type_: [NetworkConfig](aws-properties-sagemaker-monitoringschedule-networkconfig.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  NetworkConfig?: SageMakerMonitoringScheduleNetworkConfig;
  /**
   * Sets the environment variables in the Docker container.
   *
   * _Required_: No
   *
   * _Type_: Map of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Environment?: { [key: string]: Value<string> };
  /**
   * The array of outputs from the monitoring job to be uploaded to Amazon Simple Storage Service (Amazon S3).
   *
   * _Required_: Yes
   *
   * _Type_: [MonitoringOutputConfig](aws-properties-sagemaker-monitoringschedule-monitoringoutputconfig.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MonitoringOutputConfig: SageMakerMonitoringScheduleMonitoringOutputConfig;
  /**
   * The Amazon Resource Name (ARN) of an IAM role that Amazon SageMaker can assume to perform tasks on your behalf.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `20`
   *
   * _Maximum_: `2048`
   *
   * _Pattern_: `^arn:aws[a-z-]*:iam::d{12}:role/?[a-zA-Z_0-9+=,.@-_/]+$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RoleArn: Value<string>;
}

/**
 * The output object for a monitoring job.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-monitoringschedule-monitoringoutput.html}
 **/
export interface SageMakerMonitoringScheduleMonitoringOutput {
  /**
   * The Amazon S3 storage location where the results of a monitoring job are saved.
   *
   * _Required_: Yes
   *
   * _Type_: [S3Output](aws-properties-sagemaker-monitoringschedule-s3output.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  S3Output: SageMakerMonitoringScheduleS3Output;
}

/**
 * Configuration details about the monitoring schedule.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-monitoringschedule-scheduleconfig.html}
 **/
export interface SageMakerMonitoringScheduleScheduleConfig {
  /**
   * A cron expression that describes details about the monitoring schedule.
   *
   * Currently the only supported cron expressions are:
   */
  ScheduleExpression: Value<string>;
}

/**
 * Information about where and how you want to store the results of a monitoring job.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-monitoringschedule-s3output.html}
 **/
export interface SageMakerMonitoringScheduleS3Output {
  /**
   * A URI that identifies the S3 storage location where SageMaker saves the results of a monitoring job.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  S3Uri: Value<string>;
  /**
   * The local path to the S3 storage location where SageMaker saves the results of a monitoring job. LocalPath is an absolute path for the output data.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  LocalPath: Value<string>;
  /**
   * Whether to upload the results of the monitoring job continuously or after the job completes.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  S3UploadMode?: Value<string>;
}

/**
 * The inputs for a monitoring job.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-monitoringschedule-monitoringinput.html}
 **/
export interface SageMakerMonitoringScheduleMonitoringInput {
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: [BatchTransformInput](aws-properties-sagemaker-monitoringschedule-batchtransforminput.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  BatchTransformInput?: SageMakerMonitoringScheduleBatchTransformInput;
  /**
   * The endpoint for a monitoring job.
   *
   * _Required_: No
   *
   * _Type_: [EndpointInput](aws-properties-sagemaker-monitoringschedule-endpointinput.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  EndpointInput?: SageMakerMonitoringScheduleEndpointInput;
}
export interface SageMakerMonitoringScheduleProperties {
  /**
   * The status of the monitoring schedule.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `Failed | Pending | Scheduled | Stopped`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MonitoringScheduleStatus?: Value<string>;
  /**
   * The configuration object that specifies the monitoring schedule and defines the monitoring job.
   *
   * _Required_: Yes
   *
   * _Type_: [MonitoringScheduleConfig](aws-properties-sagemaker-monitoringschedule-monitoringscheduleconfig.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MonitoringScheduleConfig: SageMakerMonitoringScheduleMonitoringScheduleConfig;
  /**
   * The name of the monitoring schedule.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `63`
   *
   * _Pattern_: `^[a-zA-Z0-9](-*[a-zA-Z0-9]){0,62}$`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  MonitoringScheduleName: Value<string>;
  /**
   * The name of the endpoint using the monitoring schedule.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Maximum_: `63`
   *
   * _Pattern_: `^[a-zA-Z0-9](-*[a-zA-Z0-9]){0,62}`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  EndpointName?: Value<string>;
  /**
   * Contains the reason a monitoring job failed, if it failed.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FailureReason?: Value<string>;
  /**
   * Describes metadata on the last execution to run, if there was one.
   *
   * _Required_: No
   *
   * _Type_: [MonitoringExecutionSummary](aws-properties-sagemaker-monitoringschedule-monitoringexecutionsummary.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  LastMonitoringExecutionSummary?: SageMakerMonitoringScheduleMonitoringExecutionSummary;
  /**
   * An array of key-value pairs to apply to this resource.
   *
   * For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html).
   *
   * _Required_: No
   *
   * _Type_: List of [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Tags?: List<ResourceTag>;
}

/**
 * The `AWS::SageMaker::MonitoringSchedule` resource is an Amazon SageMaker resource type that regularly starts SageMaker processing Jobs to monitor the data captured for a SageMaker endpoint.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-monitoringschedule.html}
 */
export interface SageMakerMonitoringScheduleResource {
  Type: 'AWS::SageMaker::MonitoringSchedule';
  Properties: SageMakerMonitoringScheduleProperties;
}
