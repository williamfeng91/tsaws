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
 * Inputs for the model explainability job.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelexplainabilityjobdefinition-modelexplainabilityjobinput.html}
 **/
export interface SageMakerModelExplainabilityJobDefinitionModelExplainabilityJobInput {
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: [BatchTransformInput](aws-properties-sagemaker-modelexplainabilityjobdefinition-batchtransforminput.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  BatchTransformInput?: SageMakerModelExplainabilityJobDefinitionBatchTransformInput;
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: [EndpointInput](aws-properties-sagemaker-modelexplainabilityjobdefinition-endpointinput.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  EndpointInput?: SageMakerModelExplainabilityJobDefinitionEndpointInput;
}

/**
 * The configuration for the cluster resources used to run the processing job.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelexplainabilityjobdefinition-clusterconfig.html}
 **/
export interface SageMakerModelExplainabilityJobDefinitionClusterConfig {
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
 * The `Csv` property type specifies Property description not available. for an [AWS::SageMaker::ModelExplainabilityJobDefinition](aws-resource-sagemaker-modelexplainabilityjobdefinition.md).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelexplainabilityjobdefinition-csv.html}
 **/
export interface SageMakerModelExplainabilityJobDefinitionCsv {
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
 * Input object for the endpoint
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelexplainabilityjobdefinition-constraintsresource.html}
 **/
export interface SageMakerModelExplainabilityJobDefinitionConstraintsResource {
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
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelexplainabilityjobdefinition-stoppingcondition.html}
 **/
export interface SageMakerModelExplainabilityJobDefinitionStoppingCondition {
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
 * The `BatchTransformInput` property type specifies Property description not available. for an [AWS::SageMaker::ModelExplainabilityJobDefinition](aws-resource-sagemaker-modelexplainabilityjobdefinition.md).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelexplainabilityjobdefinition-batchtransforminput.html}
 **/
export interface SageMakerModelExplainabilityJobDefinitionBatchTransformInput {
  /**
   * Property description not available.
   *
   * _Required_: Yes
   *
   * _Type_: [DatasetFormat](aws-properties-sagemaker-modelexplainabilityjobdefinition-datasetformat.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  DatasetFormat: SageMakerModelExplainabilityJobDefinitionDatasetFormat;
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
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  FeaturesAttribute?: Value<string>;
}

/**
 * The Amazon S3 storage location where the results of a monitoring job are saved.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelexplainabilityjobdefinition-s3output.html}
 **/
export interface SageMakerModelExplainabilityJobDefinitionS3Output {
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
 * The `DatasetFormat` property type specifies Property description not available. for an [AWS::SageMaker::ModelExplainabilityJobDefinition](aws-resource-sagemaker-modelexplainabilityjobdefinition.md).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelexplainabilityjobdefinition-datasetformat.html}
 **/
export interface SageMakerModelExplainabilityJobDefinitionDatasetFormat {
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
   * _Type_: [Csv](aws-properties-sagemaker-modelexplainabilityjobdefinition-csv.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Csv?: SageMakerModelExplainabilityJobDefinitionCsv;
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: [Json](aws-properties-sagemaker-modelexplainabilityjobdefinition-json.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Json?: SageMakerModelExplainabilityJobDefinitionJson;
}

/**
 * The configuration for a baseline model explainability job.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelexplainabilityjobdefinition-modelexplainabilitybaselineconfig.html}
 **/
export interface SageMakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfig {
  /**
   * The constraints resource for a model explainability job.
   *
   * _Required_: No
   *
   * _Type_: [ConstraintsResource](aws-properties-sagemaker-modelexplainabilityjobdefinition-constraintsresource.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ConstraintsResource?: SageMakerModelExplainabilityJobDefinitionConstraintsResource;
  /**
   * The name of the baseline model explainability job.
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
 * The output object for a monitoring job.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelexplainabilityjobdefinition-monitoringoutput.html}
 **/
export interface SageMakerModelExplainabilityJobDefinitionMonitoringOutput {
  /**
   * The Amazon S3 storage location where the results of a monitoring job are saved.
   *
   * _Required_: Yes
   *
   * _Type_: [S3Output](aws-properties-sagemaker-modelexplainabilityjobdefinition-s3output.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  S3Output: SageMakerModelExplainabilityJobDefinitionS3Output;
}

/**
 * The `Json` property type specifies Property description not available. for an [AWS::SageMaker::ModelExplainabilityJobDefinition](aws-resource-sagemaker-modelexplainabilityjobdefinition.md).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelexplainabilityjobdefinition-json.html}
 **/
export interface SageMakerModelExplainabilityJobDefinitionJson {
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
 * Docker container image configuration object for the model explainability job.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelexplainabilityjobdefinition-modelexplainabilityappspecification.html}
 **/
export interface SageMakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecification {
  /**
   * JSON formatted S3 file that defines explainability parameters. For more information on this JSON configuration file, see [Configure model explainability parameters](https://docs.aws.amazon.com/sagemaker/latest/dg/clarify-config-json-monitor-model-explainability-parameters.html).
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Maximum_: `1024`
   *
   * _Pattern_: `^(https|s3)://([^/]+)/?(.*)$`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ConfigUri: Value<string>;
  /**
   * Sets the environment variables in the Docker container.
   *
   * _Required_: No
   *
   * _Type_: Map of String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Environment?: { [key: string]: Value<string> };
  /**
   * The container image to be run by the model explainability job.
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
}

/**
 * Networking options for a job, such as network traffic encryption between containers, whether to allow inbound and outbound network calls to and from containers, and the VPC subnets and security groups to use for VPC-enabled jobs.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelexplainabilityjobdefinition-networkconfig.html}
 **/
export interface SageMakerModelExplainabilityJobDefinitionNetworkConfig {
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
   * _Type_: [VpcConfig](aws-properties-sagemaker-modelexplainabilityjobdefinition-vpcconfig.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  VpcConfig?: SageMakerModelExplainabilityJobDefinitionVpcConfig;
}

/**
 * Identifies the resources to deploy for a monitoring job.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelexplainabilityjobdefinition-monitoringresources.html}
 **/
export interface SageMakerModelExplainabilityJobDefinitionMonitoringResources {
  /**
   * The configuration for the cluster resources used to run the processing job.
   *
   * _Required_: Yes
   *
   * _Type_: [ClusterConfig](aws-properties-sagemaker-modelexplainabilityjobdefinition-clusterconfig.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ClusterConfig: SageMakerModelExplainabilityJobDefinitionClusterConfig;
}

/**
 * The output configuration for monitoring jobs.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelexplainabilityjobdefinition-monitoringoutputconfig.html}
 **/
export interface SageMakerModelExplainabilityJobDefinitionMonitoringOutputConfig {
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
   * _Type_: List of [MonitoringOutput](aws-properties-sagemaker-modelexplainabilityjobdefinition-monitoringoutput.md)
   *
   * _Maximum_: `1`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  MonitoringOutputs: List<SageMakerModelExplainabilityJobDefinitionMonitoringOutput>;
}

/**
 * Specifies a VPC that your training jobs and hosted models have access to. Control access to and from your training and model containers by configuring the VPC. For more information, see [Protect Endpoints by Using an Amazon Virtual Private Cloud](https://docs.aws.amazon.com/sagemaker/latest/dg/host-vpc.html) and [Protect Training Jobs by Using an Amazon Virtual Private Cloud](https://docs.aws.amazon.com/sagemaker/latest/dg/train-vpc.html).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelexplainabilityjobdefinition-vpcconfig.html}
 **/
export interface SageMakerModelExplainabilityJobDefinitionVpcConfig {
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
 * Input object for the endpoint
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-modelexplainabilityjobdefinition-endpointinput.html}
 **/
export interface SageMakerModelExplainabilityJobDefinitionEndpointInput {
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
  /**
   * The attributes of the input data that are the input features.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  FeaturesAttribute?: Value<string>;
}
export interface SageMakerModelExplainabilityJobDefinitionProperties {
  /**
   * The output configuration for monitoring jobs.
   *
   * _Required_: Yes
   *
   * _Type_: [MonitoringOutputConfig](aws-properties-sagemaker-modelexplainabilityjobdefinition-monitoringoutputconfig.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ModelExplainabilityJobOutputConfig: SageMakerModelExplainabilityJobDefinitionMonitoringOutputConfig;
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
   * _Type_: [StoppingCondition](aws-properties-sagemaker-modelexplainabilityjobdefinition-stoppingcondition.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  StoppingCondition?: SageMakerModelExplainabilityJobDefinitionStoppingCondition;
  /**
   * The baseline configuration for a model explainability job.
   *
   * _Required_: No
   *
   * _Type_: [ModelExplainabilityBaselineConfig](aws-properties-sagemaker-modelexplainabilityjobdefinition-modelexplainabilitybaselineconfig.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ModelExplainabilityBaselineConfig?: SageMakerModelExplainabilityJobDefinitionModelExplainabilityBaselineConfig;
  /**
   * The name of the model explainability job definition. The name must be unique within an AWS Region in the AWS account.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  JobDefinitionName?: Value<string>;
  /**
   * Identifies the resources to deploy for a monitoring job.
   *
   * _Required_: Yes
   *
   * _Type_: [MonitoringResources](aws-properties-sagemaker-modelexplainabilityjobdefinition-monitoringresources.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  JobResources: SageMakerModelExplainabilityJobDefinitionMonitoringResources;
  /**
   * Networking options for a model explainability job.
   *
   * _Required_: No
   *
   * _Type_: [NetworkConfig](aws-properties-sagemaker-modelexplainabilityjobdefinition-networkconfig.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  NetworkConfig?: SageMakerModelExplainabilityJobDefinitionNetworkConfig;
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
   * Inputs for the model explainability job.
   *
   * _Required_: Yes
   *
   * _Type_: [ModelExplainabilityJobInput](aws-properties-sagemaker-modelexplainabilityjobdefinition-modelexplainabilityjobinput.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ModelExplainabilityJobInput: SageMakerModelExplainabilityJobDefinitionModelExplainabilityJobInput;
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
  /**
   * Configures the model explainability job to run a specified Docker container image.
   *
   * _Required_: Yes
   *
   * _Type_: [ModelExplainabilityAppSpecification](aws-properties-sagemaker-modelexplainabilityjobdefinition-modelexplainabilityappspecification.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ModelExplainabilityAppSpecification: SageMakerModelExplainabilityJobDefinitionModelExplainabilityAppSpecification;
}

/**
 * Creates the definition for a model explainability job.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelexplainabilityjobdefinition.html}
 */
export interface SageMakerModelExplainabilityJobDefinitionResource {
  Type: 'AWS::SageMaker::ModelExplainabilityJobDefinition';
  Properties: SageMakerModelExplainabilityJobDefinitionProperties;
}
