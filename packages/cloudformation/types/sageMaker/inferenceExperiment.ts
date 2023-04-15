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
 * Configuration specifying how to treat different headers. If no headers are specified SageMaker will by default base64 encode when capturing the data.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-inferenceexperiment-capturecontenttypeheader.html}
 **/
export interface SageMakerInferenceExperimentCaptureContentTypeHeader {
  /**
   * The list of all content type headers that SageMaker will treat as JSON and capture accordingly.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Maximum_: `10`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  JsonContentTypes?: List<Value<string>>;
  /**
   * The list of all content type headers that SageMaker will treat as CSV and capture accordingly.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Maximum_: `10`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CsvContentTypes?: List<Value<string>>;
}

/**
 * The start and end times of an inference experiment.
 *
 * The maximum duration that you can set for an inference experiment is 30 days.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-inferenceexperiment-inferenceexperimentschedule.html}
 **/
export interface SageMakerInferenceExperimentInferenceExperimentSchedule {
  /**
   * The timestamp at which the inference experiment ended or will end.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  EndTime?: Value<string>;
  /**
   * The timestamp at which the inference experiment started or will start.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  StartTime?: Value<string>;
}

/**
 * The configuration of `ShadowMode` inference experiment type, which specifies a production variant to take all the inference requests, and a shadow variant to which Amazon SageMaker replicates a percentage of the inference requests. For the shadow variant it also specifies the percentage of requests that Amazon SageMaker replicates.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-inferenceexperiment-shadowmodeconfig.html}
 **/
export interface SageMakerInferenceExperimentShadowModeConfig {
  /**
   * The name of the production variant, which takes all the inference requests.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Maximum_: `63`
   *
   * _Pattern_: `^[a-zA-Z0-9]([-a-zA-Z0-9]*[a-zA-Z0-9])?`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SourceModelVariantName: Value<string>;
  /**
   * List of shadow variant configurations.
   *
   * _Required_: Yes
   *
   * _Type_: List of [ShadowModelVariantConfig](aws-properties-sagemaker-inferenceexperiment-shadowmodelvariantconfig.md)
   *
   * _Maximum_: `1`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ShadowModelVariants: List<SageMakerInferenceExperimentShadowModelVariantConfig>;
}

/**
 * The Amazon S3 location and configuration for storing inference request and response data.
 *
 * This is an optional parameter that you can use for data capture. For more information, see [Capture data](https://docs.aws.amazon.com/sagemaker/latest/dg/model-monitor-data-capture.html).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-inferenceexperiment-datastorageconfig.html}
 **/
export interface SageMakerInferenceExperimentDataStorageConfig {
  /**
   * The Amazon S3 bucket where the inference request and response data is stored.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Maximum_: `512`
   *
   * _Pattern_: `^(https|s3)://([^/])/?(.*)$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Destination: Value<string>;
  /**
   * Configuration specifying how to treat different headers. If no headers are specified SageMaker will by default base64 encode when capturing the data.
   *
   * _Required_: No
   *
   * _Type_: [CaptureContentTypeHeader](aws-properties-sagemaker-inferenceexperiment-capturecontenttypeheader.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ContentType?: SageMakerInferenceExperimentCaptureContentTypeHeader;
  /**
   * The AWS Key Management Service key that Amazon SageMaker uses to encrypt captured data at rest using Amazon S3 server-side encryption.
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
  KmsKey?: Value<string>;
}

/**
 * The infrastructure configuration for deploying the model to a real-time inference endpoint.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-inferenceexperiment-realtimeinferenceconfig.html}
 **/
export interface SageMakerInferenceExperimentRealTimeInferenceConfig {
  /**
   * The number of instances of the type specified by `InstanceType`.
   *
   * _Required_: Yes
   *
   * _Type_: Integer
   *
   * _Minimum_: `0`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  InstanceCount: Value<number>;
  /**
   * The instance type the model is deployed to.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Allowed values_: `ml.c4.2xlarge | ml.c4.4xlarge | ml.c4.8xlarge | ml.c4.xlarge | ml.c5.18xlarge | ml.c5.2xlarge | ml.c5.4xlarge | ml.c5.9xlarge | ml.c5.xlarge | ml.c5d.18xlarge | ml.c5d.2xlarge | ml.c5d.4xlarge | ml.c5d.9xlarge | ml.c5d.xlarge | ml.g4dn.12xlarge | ml.g4dn.16xlarge | ml.g4dn.2xlarge | ml.g4dn.4xlarge | ml.g4dn.8xlarge | ml.g4dn.xlarge | ml.g5.12xlarge | ml.g5.16xlarge | ml.g5.24xlarge | ml.g5.2xlarge | ml.g5.48xlarge | ml.g5.4xlarge | ml.g5.8xlarge | ml.g5.xlarge | ml.m4.10xlarge | ml.m4.16xlarge | ml.m4.2xlarge | ml.m4.4xlarge | ml.m4.xlarge | ml.m5.12xlarge | ml.m5.24xlarge | ml.m5.2xlarge | ml.m5.4xlarge | ml.m5.xlarge | ml.m5d.12xlarge | ml.m5d.16xlarge | ml.m5d.24xlarge | ml.m5d.2xlarge | ml.m5d.4xlarge | ml.m5d.8xlarge | ml.m5d.large | ml.m5d.xlarge | ml.p2.16xlarge | ml.p2.8xlarge | ml.p2.xlarge | ml.p3.16xlarge | ml.p3.2xlarge | ml.p3.8xlarge | ml.p3dn.24xlarge | ml.r5.12xlarge | ml.r5.16xlarge | ml.r5.24xlarge | ml.r5.2xlarge | ml.r5.4xlarge | ml.r5.8xlarge | ml.r5.large | ml.r5.xlarge | ml.t2.2xlarge | ml.t2.large | ml.t2.medium | ml.t2.xlarge | ml.t3.2xlarge | ml.t3.large | ml.t3.medium | ml.t3.xlarge`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  InstanceType: Value<string>;
}

/**
 * The name and sampling percentage of a shadow variant.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-inferenceexperiment-shadowmodelvariantconfig.html}
 **/
export interface SageMakerInferenceExperimentShadowModelVariantConfig {
  /**
   * The name of the shadow variant.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Maximum_: `63`
   *
   * _Pattern_: `^[a-zA-Z0-9]([-a-zA-Z0-9]*[a-zA-Z0-9])?`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ShadowModelVariantName: Value<string>;
  /**
   * The percentage of inference requests that Amazon SageMaker replicates from the production variant to the shadow variant.
   *
   * _Required_: Yes
   *
   * _Type_: Integer
   *
   * _Maximum_: `100`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SamplingPercentage: Value<number>;
}

/**
 * The configuration for the infrastructure that the model will be deployed to.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-inferenceexperiment-modelinfrastructureconfig.html}
 **/
export interface SageMakerInferenceExperimentModelInfrastructureConfig {
  /**
   * The inference option to which to deploy your model. Possible values are the following:
   */
  InfrastructureType: Value<string>;
  /**
   * The infrastructure configuration for deploying the model to real-time inference.
   *
   * _Required_: Yes
   *
   * _Type_: [RealTimeInferenceConfig](aws-properties-sagemaker-inferenceexperiment-realtimeinferenceconfig.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RealTimeInferenceConfig: SageMakerInferenceExperimentRealTimeInferenceConfig;
}

/**
 * Contains information about the deployment options of a model.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-inferenceexperiment-modelvariantconfig.html}
 **/
export interface SageMakerInferenceExperimentModelVariantConfig {
  /**
   * The name of the Amazon SageMaker Model entity.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Maximum_: `63`
   *
   * _Pattern_: `^[a-zA-Z0-9](-*[a-zA-Z0-9])*`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ModelName: Value<string>;
  /**
   * The name of the variant.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Maximum_: `63`
   *
   * _Pattern_: `^[a-zA-Z0-9]([-a-zA-Z0-9]*[a-zA-Z0-9])?`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  VariantName: Value<string>;
  /**
   * The configuration for the infrastructure that the model will be deployed to.
   *
   * _Required_: Yes
   *
   * _Type_: [ModelInfrastructureConfig](aws-properties-sagemaker-inferenceexperiment-modelinfrastructureconfig.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  InfrastructureConfig: SageMakerInferenceExperimentModelInfrastructureConfig;
}

/**
 * The metadata of the endpoint.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-inferenceexperiment-endpointmetadata.html}
 **/
export interface SageMakerInferenceExperimentEndpointMetadata {
  /**
   * The status of the endpoint. For possible values of the status of an endpoint, see [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-inferenceexperiment-endpointmetadata.html#cfn-sagemaker-inferenceexperiment-endpointmetadata-endpointstatus](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-inferenceexperiment-endpointmetadata.html#cfn-sagemaker-inferenceexperiment-endpointmetadata-endpointstatus).
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `Creating | Deleting | Failed | InService | OutOfService | RollingBack | SystemUpdating | Updating`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  EndpointStatus?: Value<string>;
  /**
   * The name of the endpoint.
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
   * The name of the endpoint configuration.
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
  EndpointConfigName?: Value<string>;
}
export interface SageMakerInferenceExperimentProperties {
  /**
   * The Amazon S3 location and configuration for storing inference request and response data.
   *
   * _Required_: No
   *
   * _Type_: [DataStorageConfig](aws-properties-sagemaker-inferenceexperiment-datastorageconfig.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DataStorageConfig?: SageMakerInferenceExperimentDataStorageConfig;
  /**
   * The description of the inference experiment.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Maximum_: `1024`
   *
   * _Pattern_: `.*`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Description?: Value<string>;
  /**
   * The error message for the inference experiment status result.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Maximum_: `1024`
   *
   * _Pattern_: `.*`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  StatusReason?: Value<string>;
  /**
   * An array of `ModelVariantConfigSummary` objects. There is one for each variant in the inference experiment. Each `ModelVariantConfigSummary` object in the array describes the infrastructure configuration for deploying the corresponding variant.
   *
   * _Required_: Yes
   *
   * _Type_: List of [ModelVariantConfig](aws-properties-sagemaker-inferenceexperiment-modelvariantconfig.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ModelVariants: List<SageMakerInferenceExperimentModelVariantConfig>;
  /**
   * The configuration of `ShadowMode` inference experiment type, which shows the production variant that takes all the inference requests, and the shadow variant to which Amazon SageMaker replicates a percentage of the inference requests. For the shadow variant it also shows the percentage of requests that Amazon SageMaker replicates.
   *
   * _Required_: No
   *
   * _Type_: [ShadowModeConfig](aws-properties-sagemaker-inferenceexperiment-shadowmodeconfig.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ShadowModeConfig?: SageMakerInferenceExperimentShadowModeConfig;
  /**
   * The ARN of the IAM role that Amazon SageMaker can assume to access model artifacts and container images, and manage Amazon SageMaker Inference endpoints for model deployment.
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
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  RoleArn: Value<string>;
  /**
   * The name of the inference experiment.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `120`
   *
   * _Pattern_: `^[a-zA-Z0-9](-*[a-zA-Z0-9]){0,119}`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Name: Value<string>;
  /**
   * The type of the inference experiment.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Allowed values_: `ShadowMode`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Type: Value<string>;
  /**
   * The name of the endpoint.
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
   * The desired state of the experiment after stopping. The possible states are the following:
   */
  DesiredState?: Value<string>;
  /**
   * The duration for which the inference experiment ran or will run.
   *
   * The maximum duration that you can set for an inference experiment is 30 days.
   *
   * _Required_: No
   *
   * _Type_: [InferenceExperimentSchedule](aws-properties-sagemaker-inferenceexperiment-inferenceexperimentschedule.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Schedule?: SageMakerInferenceExperimentInferenceExperimentSchedule;
  /**
   * The AWS Key Management Service key that Amazon SageMaker uses to encrypt captured data at rest using Amazon S3 server-side encryption.
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
  KmsKey?: Value<string>;
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
 * Creates an inference experiment using the configurations specified in the request.
 *
 * Use this API to setup and schedule an experiment to compare model variants on a Amazon SageMaker inference endpoint. For more information about inference experiments, see [Shadow tests](https://docs.aws.amazon.com/sagemaker/latest/dg/shadow-tests.html).
 *
 * Amazon SageMaker begins your experiment at the scheduled time and routes traffic to your endpoint's model variants based on your specified configuration.
 *
 * While the experiment is in progress or after it has concluded, you can view metrics that compare your model variants. For more information, see [View, monitor, and edit shadow tests](https://docs.aws.amazon.com/sagemaker/latest/dg/shadow-tests-view-monitor-edit.html).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-inferenceexperiment.html}
 */
export interface SageMakerInferenceExperimentResource {
  Type: 'AWS::SageMaker::InferenceExperiment';
  Properties: SageMakerInferenceExperimentProperties;
}
