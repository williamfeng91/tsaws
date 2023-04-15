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
 * Identifies the resources to deploy for a monitoring job.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelqualityjobdefinition-monitoringresources.html}
 **/
export interface SageMakerModelQualityJobDefinitionMonitoringResources {
  /**
   * The configuration for the cluster resources used to run the processing job.
   *
   * _Required_: Yes
   *
   * _Type_: [ClusterConfig](aws-properties-sagemaker-modelqualityjobdefinition-clusterconfig.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ClusterConfig: SageMakerModelQualityJobDefinitionClusterConfig;
}

/**
 * Container image configuration object for the monitoring job.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelqualityjobdefinition-modelqualityappspecification.html}
 **/
export interface SageMakerModelQualityJobDefinitionModelQualityAppSpecification {
  /**
   * Specifies the entrypoint for a container that the monitoring job runs.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Maximum_: `100`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ContainerEntrypoint?: List<Value<string>>;
  /**
   * The machine learning problem type of the model that the monitoring job monitors.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Allowed values_: `BinaryClassification | MulticlassClassification | Regression`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ProblemType: Value<string>;
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
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
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
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  RecordPreprocessorSourceUri?: Value<string>;
  /**
   * Sets the environment variables in the container that the monitoring job runs.
   *
   * _Required_: No
   *
   * _Type_: Map of String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Environment?: { [key: string]: Value<string> };
  /**
   * The address of the container image that the monitoring job runs.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Maximum_: `255`
   *
   * _Pattern_: `.*`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
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
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ContainerArguments?: List<Value<string>>;
}

/**
 * The configuration for the cluster of resources used to run the processing job.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelqualityjobdefinition-clusterconfig.html}
 **/
export interface SageMakerModelQualityJobDefinitionClusterConfig {
  /**
   * The number of ML compute instances to use in the model monitoring job. For distributed processing jobs, specify a value greater than 1. The default value is 1.
   *
   * _Required_: Yes
   *
   * _Type_: Integer
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  InstanceCount: Value<number>;
  /**
   * The size of the ML storage volume, in gigabytes, that you want to provision. You must specify sufficient ML storage for your scenario.
   *
   * _Required_: Yes
   *
   * _Type_: Integer
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  VolumeSizeInGB: Value<number>;
  /**
   * The AWS Key Management Service (AWS KMS) key that Amazon SageMaker uses to encrypt data on the storage volume attached to the ML compute instance(s) that run the model monitoring job.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  VolumeKmsKeyId?: Value<string>;
  /**
   * The ML compute instance type for the processing job.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  InstanceType: Value<string>;
}

/**
 * The `Json` property type specifies Property description not available. for an [AWS::SageMaker::ModelQualityJobDefinition](aws-resource-sagemaker-modelqualityjobdefinition.md).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelqualityjobdefinition-json.html}
 **/
export interface SageMakerModelQualityJobDefinitionJson {
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Line?: Value<boolean>;
}

/**
 * The constraints resource for a monitoring job.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelqualityjobdefinition-constraintsresource.html}
 **/
export interface SageMakerModelQualityJobDefinitionConstraintsResource {
  /**
   * The Amazon S3 URI for the constraints resource.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  S3Uri?: Value<string>;
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
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelqualityjobdefinition-stoppingcondition.html}
 **/
export interface SageMakerModelQualityJobDefinitionStoppingCondition {
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
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  MaxRuntimeInSeconds: Value<number>;
}

/**
 * The output configuration for monitoring jobs.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelqualityjobdefinition-monitoringoutputconfig.html}
 **/
export interface SageMakerModelQualityJobDefinitionMonitoringOutputConfig {
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
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  KmsKeyId?: Value<string>;
  /**
   * Monitoring outputs for monitoring jobs. This is where the output of the periodic monitoring jobs is uploaded.
   *
   * _Required_: Yes
   *
   * _Type_: List of [MonitoringOutput](aws-properties-sagemaker-modelqualityjobdefinition-monitoringoutput.md)
   *
   * _Maximum_: `1`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  MonitoringOutputs: List<SageMakerModelQualityJobDefinitionMonitoringOutput>;
}

/**
 * The input for the model quality monitoring job. Currently endponts are supported for input for model quality monitoring jobs.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelqualityjobdefinition-modelqualityjobinput.html}
 **/
export interface SageMakerModelQualityJobDefinitionModelQualityJobInput {
  /**
   * The ground truth label provided for the model.
   *
   * _Required_: Yes
   *
   * _Type_: [MonitoringGroundTruthS3Input](aws-properties-sagemaker-modelqualityjobdefinition-monitoringgroundtruths3input.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  GroundTruthS3Input: SageMakerModelQualityJobDefinitionMonitoringGroundTruthS3Input;
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: [BatchTransformInput](aws-properties-sagemaker-modelqualityjobdefinition-batchtransforminput.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  BatchTransformInput?: SageMakerModelQualityJobDefinitionBatchTransformInput;
  /**
   * Input object for the endpoint
   *
   * _Required_: No
   *
   * _Type_: [EndpointInput](aws-properties-sagemaker-modelqualityjobdefinition-endpointinput.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  EndpointInput?: SageMakerModelQualityJobDefinitionEndpointInput;
}

/**
 * Input object for the endpoint
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelqualityjobdefinition-endpointinput.html}
 **/
export interface SageMakerModelQualityJobDefinitionEndpointInput {
  /**
   * Whether input data distributed in Amazon S3 is fully replicated or sharded by an S3 key. Defaults to `FullyReplicated`
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `FullyReplicated | ShardedByS3Key`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  S3DataDistributionType?: Value<string>;
  /**
   * If specified, monitoring jobs substract this time from the start time. For information about using offsets for scheduling monitoring jobs, see [Schedule Model Quality Monitoring Jobs](https://docs.aws.amazon.com/sagemaker/latest/dg/model-monitor-model-quality-schedule.html).
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `15`
   *
   * _Pattern_: `^.?P.*`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  StartTimeOffset?: Value<string>;
  /**
   * If specified, monitoring jobs substract this time from the end time. For information about using offsets for scheduling monitoring jobs, see [Schedule Model Quality Monitoring Jobs](https://docs.aws.amazon.com/sagemaker/latest/dg/model-monitor-model-quality-schedule.html).
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `15`
   *
   * _Pattern_: `^.?P.*`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  EndTimeOffset?: Value<string>;
  /**
   * The threshold for the class probability to be evaluated as a positive result.
   *
   * _Required_: No
   *
   * _Type_: Double
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ProbabilityThresholdAttribute?: Value<number>;
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
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  EndpointName: Value<string>;
  /**
   * The attribute of the input data that represents the ground truth label.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  InferenceAttribute?: Value<string>;
  /**
   * Whether the `Pipe` or `File` is used as the input mode for transferring data for the monitoring job. `Pipe` mode is recommended for large datasets. `File` mode is useful for small files that fit in memory. Defaults to `File`.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `File | Pipe`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
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
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  LocalPath: Value<string>;
  /**
   * In a classification problem, the attribute that represents the class probability.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ProbabilityAttribute?: Value<string>;
}

/**
 * Networking options for a job, such as network traffic encryption between containers, whether to allow inbound and outbound network calls to and from containers, and the VPC subnets and security groups to use for VPC-enabled jobs.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelqualityjobdefinition-networkconfig.html}
 **/
export interface SageMakerModelQualityJobDefinitionNetworkConfig {
  /**
   * Whether to allow inbound and outbound network calls to and from the containers used for the processing job.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  EnableNetworkIsolation?: Value<boolean>;
  /**
   * Whether to encrypt all communications between distributed processing jobs. Choose `True` to encrypt communications. Encryption provides greater security for distributed processing jobs, but the processing might take longer.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  EnableInterContainerTrafficEncryption?: Value<boolean>;
  /**
   * Specifies a VPC that your training jobs and hosted models have access to. Control access to and from your training and model containers by configuring the VPC.
   *
   * _Required_: No
   *
   * _Type_: [VpcConfig](aws-properties-sagemaker-modelqualityjobdefinition-vpcconfig.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  VpcConfig?: SageMakerModelQualityJobDefinitionVpcConfig;
}

/**
 * Specifies a VPC that your training jobs and hosted models have access to. Control access to and from your training and model containers by configuring the VPC. For more information, see [Protect Endpoints by Using an Amazon Virtual Private Cloud](https://docs.aws.amazon.com/sagemaker/latest/dg/host-vpc.html) and [Protect Training Jobs by Using an Amazon Virtual Private Cloud](https://docs.aws.amazon.com/sagemaker/latest/dg/train-vpc.html).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelqualityjobdefinition-vpcconfig.html}
 **/
export interface SageMakerModelQualityJobDefinitionVpcConfig {
  /**
   * The ID of the subnets in the VPC to which you want to connect your training job or model. For information about the availability of specific instance types, see [Supported Instance Types and Availability Zones](https://docs.aws.amazon.com/sagemaker/latest/dg/instance-types-az.html).
   *
   * _Required_: Yes
   *
   * _Type_: List of String
   *
   * _Maximum_: `16`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
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
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  SecurityGroupIds: List<Value<string>>;
}

/**
 * The `Csv` property type specifies Property description not available. for an [AWS::SageMaker::ModelQualityJobDefinition](aws-resource-sagemaker-modelqualityjobdefinition.md).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelqualityjobdefinition-csv.html}
 **/
export interface SageMakerModelQualityJobDefinitionCsv {
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Header?: Value<boolean>;
}

/**
 * The `DatasetFormat` property type specifies Property description not available. for an [AWS::SageMaker::ModelQualityJobDefinition](aws-resource-sagemaker-modelqualityjobdefinition.md).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelqualityjobdefinition-datasetformat.html}
 **/
export interface SageMakerModelQualityJobDefinitionDatasetFormat {
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Parquet?: Value<boolean>;
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: [Csv](aws-properties-sagemaker-modelqualityjobdefinition-csv.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Csv?: SageMakerModelQualityJobDefinitionCsv;
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: [Json](aws-properties-sagemaker-modelqualityjobdefinition-json.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Json?: SageMakerModelQualityJobDefinitionJson;
}

/**
 * The output object for a monitoring job.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelqualityjobdefinition-monitoringoutput.html}
 **/
export interface SageMakerModelQualityJobDefinitionMonitoringOutput {
  /**
   * The Amazon S3 storage location where the results of a monitoring job are saved.
   *
   * _Required_: Yes
   *
   * _Type_: [S3Output](aws-properties-sagemaker-modelqualityjobdefinition-s3output.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  S3Output: SageMakerModelQualityJobDefinitionS3Output;
}

/**
 * The Amazon S3 storage location where the results of a monitoring job are saved.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelqualityjobdefinition-s3output.html}
 **/
export interface SageMakerModelQualityJobDefinitionS3Output {
  /**
   * A URI that identifies the Amazon S3 storage location where Amazon SageMaker saves the results of a monitoring job.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  S3Uri: Value<string>;
  /**
   * The local path to the Amazon S3 storage location where Amazon SageMaker saves the results of a monitoring job. LocalPath is an absolute path for the output data.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  LocalPath: Value<string>;
  /**
   * Whether to upload the results of the monitoring job continuously or after the job completes.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  S3UploadMode?: Value<string>;
}

/**
 * The ground truth labels for the dataset used for the monitoring job.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelqualityjobdefinition-monitoringgroundtruths3input.html}
 **/
export interface SageMakerModelQualityJobDefinitionMonitoringGroundTruthS3Input {
  /**
   * The address of the Amazon S3 location of the ground truth labels.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Maximum_: `512`
   *
   * _Pattern_: `^(https|s3)://([^/]+)/?(.*)$`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  S3Uri: Value<string>;
}

/**
 * Configuration for monitoring constraints and monitoring statistics. These baseline resources are compared against the results of the current job from the series of jobs scheduled to collect data periodically.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelqualityjobdefinition-modelqualitybaselineconfig.html}
 **/
export interface SageMakerModelQualityJobDefinitionModelQualityBaselineConfig {
  /**
   * The constraints resource for a monitoring job.
   *
   * _Required_: No
   *
   * _Type_: [ConstraintsResource](aws-properties-sagemaker-modelqualityjobdefinition-constraintsresource.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ConstraintsResource?: SageMakerModelQualityJobDefinitionConstraintsResource;
  /**
   * The name of the job that performs baselining for the monitoring job.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `63`
   *
   * _Pattern_: `^[a-zA-Z0-9](-*[a-zA-Z0-9]){0,62}`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  BaseliningJobName?: Value<string>;
}

/**
 * The `BatchTransformInput` property type specifies Property description not available. for an [AWS::SageMaker::ModelQualityJobDefinition](aws-resource-sagemaker-modelqualityjobdefinition.md).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelqualityjobdefinition-batchtransforminput.html}
 **/
export interface SageMakerModelQualityJobDefinitionBatchTransformInput {
  /**
   * Property description not available.
   *
   * _Required_: Yes
   *
   * _Type_: [DatasetFormat](aws-properties-sagemaker-modelqualityjobdefinition-datasetformat.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  DatasetFormat: SageMakerModelQualityJobDefinitionDatasetFormat;
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  S3DataDistributionType?: Value<string>;
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  StartTimeOffset?: Value<string>;
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  EndTimeOffset?: Value<string>;
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: Double
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ProbabilityThresholdAttribute?: Value<number>;
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  InferenceAttribute?: Value<string>;
  /**
   * Property description not available.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  DataCapturedDestinationS3Uri: Value<string>;
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  S3InputMode?: Value<string>;
  /**
   * Property description not available.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  LocalPath: Value<string>;
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ProbabilityAttribute?: Value<string>;
}
export interface SageMakerModelQualityJobDefinitionProperties {
  /**
   * Container image configuration object for the monitoring job.
   *
   * _Required_: Yes
   *
   * _Type_: [ModelQualityAppSpecification](aws-properties-sagemaker-modelqualityjobdefinition-modelqualityappspecification.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ModelQualityAppSpecification: SageMakerModelQualityJobDefinitionModelQualityAppSpecification;
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  EndpointName?: Value<string>;
  /**
   * A time limit for how long the monitoring job is allowed to run before stopping.
   *
   * _Required_: No
   *
   * _Type_: [StoppingCondition](aws-properties-sagemaker-modelqualityjobdefinition-stoppingcondition.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  StoppingCondition?: SageMakerModelQualityJobDefinitionStoppingCondition;
  /**
   * Specifies the constraints and baselines for the monitoring job.
   *
   * _Required_: No
   *
   * _Type_: [ModelQualityBaselineConfig](aws-properties-sagemaker-modelqualityjobdefinition-modelqualitybaselineconfig.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ModelQualityBaselineConfig?: SageMakerModelQualityJobDefinitionModelQualityBaselineConfig;
  /**
   * The name of the monitoring job definition.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  JobDefinitionName?: Value<string>;
  /**
   * A list of the inputs that are monitored. Currently endpoints are supported.
   *
   * _Required_: Yes
   *
   * _Type_: [ModelQualityJobInput](aws-properties-sagemaker-modelqualityjobdefinition-modelqualityjobinput.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ModelQualityJobInput: SageMakerModelQualityJobDefinitionModelQualityJobInput;
  /**
   * Identifies the resources to deploy for a monitoring job.
   *
   * _Required_: Yes
   *
   * _Type_: [MonitoringResources](aws-properties-sagemaker-modelqualityjobdefinition-monitoringresources.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  JobResources: SageMakerModelQualityJobDefinitionMonitoringResources;
  /**
   * Specifies the network configuration for the monitoring job.
   *
   * _Required_: No
   *
   * _Type_: [NetworkConfig](aws-properties-sagemaker-modelqualityjobdefinition-networkconfig.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  NetworkConfig?: SageMakerModelQualityJobDefinitionNetworkConfig;
  /**
   * The output configuration for monitoring jobs.
   *
   * _Required_: Yes
   *
   * _Type_: [MonitoringOutputConfig](aws-properties-sagemaker-modelqualityjobdefinition-monitoringoutputconfig.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ModelQualityJobOutputConfig: SageMakerModelQualityJobDefinitionMonitoringOutputConfig;
  /**
   * The Amazon Resource Name (ARN) of an IAM role that Amazon SageMaker can assume to perform tasks on your behalf.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  RoleArn: Value<string>;
  /**
   * An array of key-value pairs to apply to this resource.
   *
   * For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html).
   *
   * _Required_: No
   *
   * _Type_: List of [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Tags?: List<ResourceTag>;
}

/**
 * Creates a definition for a job that monitors model quality and drift. For information about model monitor, see [Amazon SageMaker Model Monitor](https://docs.aws.amazon.com/sagemaker/latest/dg/model-monitor.html).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelqualityjobdefinition.html}
 */
export interface SageMakerModelQualityJobDefinitionResource {
  Type: 'AWS::SageMaker::ModelQualityJobDefinition';
  Properties: SageMakerModelQualityJobDefinitionProperties;
}
