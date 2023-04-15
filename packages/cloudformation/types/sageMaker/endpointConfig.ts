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
 * Specifies the configuration for notifications of inference results for asynchronous inference.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-endpointconfig-asyncinferencenotificationconfig.html}
 **/
export interface SageMakerEndpointConfigAsyncInferenceNotificationConfig {
  /**
   * Amazon SNS topic to post a notification to when an inference completes successfully. If no topic is provided, no notification is sent on success.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  SuccessTopic?: Value<string>;
  /**
   * Amazon SNS topic to post a notification to when an inference fails. If no topic is provided, no notification is sent on failure.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ErrorTopic?: Value<string>;
}

/**
 * Specifies whether the endpoint captures input data or output data.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-endpointconfig-captureoption.html}
 **/
export interface SageMakerEndpointConfigCaptureOption {
  /**
   * Specifies whether the endpoint captures input data or output data.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Allowed values_: `Input | Output`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  CaptureMode: Value<string>;
}

/**
 * The `ClarifyShapConfig` property type specifies Property description not available. for an [AWS::SageMaker::EndpointConfig](aws-resource-sagemaker-endpointconfig.md).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-endpointconfig-clarifyshapconfig.html}
 **/
export interface SageMakerEndpointConfigClarifyShapConfig {
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: [ClarifyTextConfig](aws-properties-sagemaker-endpointconfig-clarifytextconfig.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  TextConfig?: SageMakerEndpointConfigClarifyTextConfig;
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  UseLogit?: Value<boolean>;
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Seed?: Value<number>;
  /**
   * Property description not available.
   *
   * _Required_: Yes
   *
   * _Type_: [ClarifyShapBaselineConfig](aws-properties-sagemaker-endpointconfig-clarifyshapbaselineconfig.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ShapBaselineConfig: SageMakerEndpointConfigClarifyShapBaselineConfig;
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  NumberOfSamples?: Value<number>;
}

/**
 * Specifies the configuration for asynchronous inference invocation outputs.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-endpointconfig-asyncinferenceoutputconfig.html}
 **/
export interface SageMakerEndpointConfigAsyncInferenceOutputConfig {
  /**
   * The AWS Key Management Service (AWS KMS) key that Amazon SageMaker uses to encrypt the asynchronous inference output in Amazon S3.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  KmsKeyId?: Value<string>;
  /**
   * Specifies the configuration for notifications of inference results for asynchronous inference.
   *
   * _Required_: No
   *
   * _Type_: [AsyncInferenceNotificationConfig](aws-properties-sagemaker-endpointconfig-asyncinferencenotificationconfig.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  NotificationConfig?: SageMakerEndpointConfigAsyncInferenceNotificationConfig;
  /**
   * The Amazon S3 location to upload inference responses to.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  S3OutputPath: Value<string>;
}

/**
 * The `ClarifyFeatureType` property type specifies Property description not available. for an [AWS::SageMaker::EndpointConfig](aws-resource-sagemaker-endpointconfig.md).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-endpointconfig-clarifyfeaturetype.html}
 **/
export type SageMakerEndpointConfigClarifyFeatureType = Value<string>;

/**
 * The `ClarifyHeader` property type specifies Property description not available. for an [AWS::SageMaker::EndpointConfig](aws-resource-sagemaker-endpointconfig.md).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-endpointconfig-clarifyheader.html}
 **/
export type SageMakerEndpointConfigClarifyHeader = Value<string>;

/**
 * The `ExplainerConfig` property type specifies Property description not available. for an [AWS::SageMaker::EndpointConfig](aws-resource-sagemaker-endpointconfig.md).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-endpointconfig-explainerconfig.html}
 **/
export interface SageMakerEndpointConfigExplainerConfig {
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: [ClarifyExplainerConfig](aws-properties-sagemaker-endpointconfig-clarifyexplainerconfig.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ClarifyExplainerConfig?: SageMakerEndpointConfigClarifyExplainerConfig;
}

/**
 * Specifies the configuration of your endpoint for model monitor data capture.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-endpointconfig-datacaptureconfig.html}
 **/
export interface SageMakerEndpointConfigDataCaptureConfig {
  /**
   * Specifies whether the endpoint captures input data to your model, output data from your model, or both.
   *
   * _Required_: Yes
   *
   * _Type_: List of [CaptureOption](aws-properties-sagemaker-endpointconfig-captureoption.md)
   *
   * _Maximum_: `2`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  CaptureOptions: List<SageMakerEndpointConfigCaptureOption>;
  /**
   * The AWS Key Management Service (AWS KMS) key that Amazon SageMaker uses to encrypt the captured data at rest using Amazon S3 server-side encryption. The KmsKeyId can be any of the following formats: Key ID: 1234abcd-12ab-34cd-56ef-1234567890ab Key ARN: arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab Alias name: alias/ExampleAlias Alias name ARN: arn:aws:kms:us-west-2:111122223333:alias/ExampleAlias If you don't provide a KMS key ID, Amazon SageMaker uses the default KMS key for Amazon S3 for your role's account. For more information, see KMS-Managed Encryption Keys (https://docs.aws.amazon.com/AmazonS3/latest/dev/UsingKMSEncryption.html) in the Amazon Simple Storage Service Developer Guide. The KMS key policy must grant permission to the IAM role that you specify in your CreateModel (https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateModel.html) request. For more information, see Using Key Policies in AWS KMS (http://docs.aws.amazon.com/kms/latest/developerguide/key-policies.html) in the AWS Key Management Service Developer Guide.
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
   * The S3 bucket where model monitor stores captured data.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Maximum_: `512`
   *
   * _Pattern_: `^(https|s3)://([^/])/?(.*)$`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  DestinationS3Uri: Value<string>;
  /**
   * The percentage of data to capture.
   *
   * _Required_: Yes
   *
   * _Type_: Integer
   *
   * _Minimum_: `0`
   *
   * _Maximum_: `100`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  InitialSamplingPercentage: Value<number>;
  /**
   * A list of the JSON and CSV content type that the endpoint captures.
   *
   * _Required_: No
   *
   * _Type_: [CaptureContentTypeHeader](aws-properties-sagemaker-endpointconfig-datacaptureconfig-capturecontenttypeheader.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  CaptureContentTypeHeader?: SageMakerEndpointConfigCaptureContentTypeHeader;
  /**
   * Set to `True` to enable data capture.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  EnableCapture?: Value<boolean>;
}

/**
 * Specifies configuration for how an endpoint performs asynchronous inference.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-endpointconfig-asyncinferenceconfig.html}
 **/
export interface SageMakerEndpointConfigAsyncInferenceConfig {
  /**
   * Specifies the configuration for asynchronous inference invocation outputs.
   *
   * _Required_: Yes
   *
   * _Type_: [AsyncInferenceOutputConfig](aws-properties-sagemaker-endpointconfig-asyncinferenceoutputconfig.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  OutputConfig: SageMakerEndpointConfigAsyncInferenceOutputConfig;
  /**
   * Configures the behavior of the client used by SageMaker to interact with the model container during asynchronous inference.
   *
   * _Required_: No
   *
   * _Type_: [AsyncInferenceClientConfig](aws-properties-sagemaker-endpointconfig-asyncinferenceclientconfig.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ClientConfig?: SageMakerEndpointConfigAsyncInferenceClientConfig;
}

/**
 * Specifies a model that you want to host and the resources to deploy for hosting it. If you are deploying multiple models, tell Amazon SageMaker how to distribute traffic among the models by specifying the `InitialVariantWeight` objects.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-endpointconfig-productionvariant.html}
 **/
export interface SageMakerEndpointConfigProductionVariant {
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ModelDataDownloadTimeoutInSeconds?: Value<number>;
  /**
   * The name of the model that you want to host. This is the name that you specified when creating the model.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Maximum_: `63`
   *
   * _Pattern_: `^[a-zA-Z0-9](-*[a-zA-Z0-9])*`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ModelName: Value<string>;
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  VolumeSizeInGB?: Value<number>;
  EnableSSMAccess?: Value<boolean>;
  /**
   * The name of the production variant.
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
  VariantName: Value<string>;
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ContainerStartupHealthCheckTimeoutInSeconds?: Value<number>;
  /**
   * Number of instances to launch initially.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Minimum_: `1`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  InitialInstanceCount?: Value<number>;
  /**
   * The serverless configuration for an endpoint. Specifies a serverless endpoint configuration instead of an instance-based endpoint configuration.
   *
   * _Required_: No
   *
   * _Type_: [ServerlessConfig](aws-properties-sagemaker-endpointconfig-productionvariant-serverlessconfig.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ServerlessConfig?: SageMakerEndpointConfigServerlessConfig;
  /**
   * The ML compute instance type.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `ml.c4.2xlarge | ml.c4.4xlarge | ml.c4.8xlarge | ml.c4.large | ml.c4.xlarge | ml.c5.18xlarge | ml.c5.2xlarge | ml.c5.4xlarge | ml.c5.9xlarge | ml.c5.large | ml.c5.xlarge | ml.c5d.18xlarge | ml.c5d.2xlarge | ml.c5d.4xlarge | ml.c5d.9xlarge | ml.c5d.large | ml.c5d.xlarge | ml.c6g.12xlarge | ml.c6g.16xlarge | ml.c6g.2xlarge | ml.c6g.4xlarge | ml.c6g.8xlarge | ml.c6g.large | ml.c6g.xlarge | ml.c6gd.12xlarge | ml.c6gd.16xlarge | ml.c6gd.2xlarge | ml.c6gd.4xlarge | ml.c6gd.8xlarge | ml.c6gd.large | ml.c6gd.xlarge | ml.c6gn.12xlarge | ml.c6gn.16xlarge | ml.c6gn.2xlarge | ml.c6gn.4xlarge | ml.c6gn.8xlarge | ml.c6gn.large | ml.c6gn.xlarge | ml.c6i.12xlarge | ml.c6i.16xlarge | ml.c6i.24xlarge | ml.c6i.2xlarge | ml.c6i.32xlarge | ml.c6i.4xlarge | ml.c6i.8xlarge | ml.c6i.large | ml.c6i.xlarge | ml.c7g.12xlarge | ml.c7g.16xlarge | ml.c7g.2xlarge | ml.c7g.4xlarge | ml.c7g.8xlarge | ml.c7g.large | ml.c7g.xlarge | ml.g4dn.12xlarge | ml.g4dn.16xlarge | ml.g4dn.2xlarge | ml.g4dn.4xlarge | ml.g4dn.8xlarge | ml.g4dn.xlarge | ml.g5.12xlarge | ml.g5.16xlarge | ml.g5.24xlarge | ml.g5.2xlarge | ml.g5.48xlarge | ml.g5.4xlarge | ml.g5.8xlarge | ml.g5.xlarge | ml.inf1.24xlarge | ml.inf1.2xlarge | ml.inf1.6xlarge | ml.inf1.xlarge | ml.m4.10xlarge | ml.m4.16xlarge | ml.m4.2xlarge | ml.m4.4xlarge | ml.m4.xlarge | ml.m5.12xlarge | ml.m5.24xlarge | ml.m5.2xlarge | ml.m5.4xlarge | ml.m5.large | ml.m5.xlarge | ml.m5d.12xlarge | ml.m5d.24xlarge | ml.m5d.2xlarge | ml.m5d.4xlarge | ml.m5d.large | ml.m5d.xlarge | ml.m6g.12xlarge | ml.m6g.16xlarge | ml.m6g.2xlarge | ml.m6g.4xlarge | ml.m6g.8xlarge | ml.m6g.large | ml.m6g.xlarge | ml.m6gd.12xlarge | ml.m6gd.16xlarge | ml.m6gd.2xlarge | ml.m6gd.4xlarge | ml.m6gd.8xlarge | ml.m6gd.large | ml.m6gd.xlarge | ml.p2.16xlarge | ml.p2.8xlarge | ml.p2.xlarge | ml.p3.16xlarge | ml.p3.2xlarge | ml.p3.8xlarge | ml.p4d.24xlarge | ml.p4de.24xlarge | ml.r5.12xlarge | ml.r5.24xlarge | ml.r5.2xlarge | ml.r5.4xlarge | ml.r5.large | ml.r5.xlarge | ml.r5d.12xlarge | ml.r5d.24xlarge | ml.r5d.2xlarge | ml.r5d.4xlarge | ml.r5d.large | ml.r5d.xlarge | ml.r6g.12xlarge | ml.r6g.16xlarge | ml.r6g.2xlarge | ml.r6g.4xlarge | ml.r6g.8xlarge | ml.r6g.large | ml.r6g.xlarge | ml.r6gd.12xlarge | ml.r6gd.16xlarge | ml.r6gd.2xlarge | ml.r6gd.4xlarge | ml.r6gd.8xlarge | ml.r6gd.large | ml.r6gd.xlarge | ml.t2.2xlarge | ml.t2.large | ml.t2.medium | ml.t2.xlarge`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  InstanceType?: Value<string>;
  /**
   * The size of the Elastic Inference (EI) instance to use for the production variant. EI instances provide on-demand GPU computing for inference. For more information, see [Using Elastic Inference in Amazon SageMaker](https://docs.aws.amazon.com/sagemaker/latest/dg/ei.html). For more information, see [Using Elastic Inference in Amazon SageMaker](https://docs.aws.amazon.com/sagemaker/latest/dg/ei.html).
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `ml.eia1.large | ml.eia1.medium | ml.eia1.xlarge | ml.eia2.large | ml.eia2.medium | ml.eia2.xlarge`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  AcceleratorType?: Value<string>;
  /**
   * Determines initial traffic distribution among all of the models that you specify in the endpoint configuration. The traffic to a production variant is determined by the ratio of the `VariantWeight` to the sum of all `VariantWeight` values across all ProductionVariants. If unspecified, it defaults to 1.0.
   *
   * _Required_: Yes
   *
   * _Type_: Double
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  InitialVariantWeight: Value<number>;
}

/**
 * The `ClarifyInferenceConfig` property type specifies Property description not available. for an [AWS::SageMaker::EndpointConfig](aws-resource-sagemaker-endpointconfig.md).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-endpointconfig-clarifyinferenceconfig.html}
 **/
export interface SageMakerEndpointConfigClarifyInferenceConfig {
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ContentTemplate?: Value<string>;
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: List of [ClarifyHeader](aws-properties-sagemaker-endpointconfig-clarifyheader.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  LabelHeaders?: List<SageMakerEndpointConfigClarifyHeader>;
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  MaxPayloadInMB?: Value<number>;
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ProbabilityIndex?: Value<number>;
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  LabelAttribute?: Value<string>;
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: List of [ClarifyFeatureType](aws-properties-sagemaker-endpointconfig-clarifyfeaturetype.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  FeatureTypes?: List<SageMakerEndpointConfigClarifyFeatureType>;
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: List of [ClarifyHeader](aws-properties-sagemaker-endpointconfig-clarifyheader.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  FeatureHeaders?: List<SageMakerEndpointConfigClarifyHeader>;
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  LabelIndex?: Value<number>;
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
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  MaxRecordCount?: Value<number>;
}

/**
 *
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-endpointconfig-datacaptureconfig-capturecontenttypeheader.html}
 **/
export interface SageMakerEndpointConfigCaptureContentTypeHeader {
  JsonContentTypes?: List<Value<string>>;
  CsvContentTypes?: List<Value<string>>;
}

/**
 * The `ClarifyShapBaselineConfig` property type specifies Property description not available. for an [AWS::SageMaker::EndpointConfig](aws-resource-sagemaker-endpointconfig.md).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-endpointconfig-clarifyshapbaselineconfig.html}
 **/
export interface SageMakerEndpointConfigClarifyShapBaselineConfig {
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ShapBaseline?: Value<string>;
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ShapBaselineUri?: Value<string>;
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  MimeType?: Value<string>;
}

/**
 * The `ClarifyExplainerConfig` property type specifies Property description not available. for an [AWS::SageMaker::EndpointConfig](aws-resource-sagemaker-endpointconfig.md).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-endpointconfig-clarifyexplainerconfig.html}
 **/
export interface SageMakerEndpointConfigClarifyExplainerConfig {
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: [ClarifyInferenceConfig](aws-properties-sagemaker-endpointconfig-clarifyinferenceconfig.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  InferenceConfig?: SageMakerEndpointConfigClarifyInferenceConfig;
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  EnableExplanations?: Value<string>;
  /**
   * Property description not available.
   *
   * _Required_: Yes
   *
   * _Type_: [ClarifyShapConfig](aws-properties-sagemaker-endpointconfig-clarifyshapconfig.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ShapConfig: SageMakerEndpointConfigClarifyShapConfig;
}

/**
 * The `ClarifyTextConfig` property type specifies Property description not available. for an [AWS::SageMaker::EndpointConfig](aws-resource-sagemaker-endpointconfig.md).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-endpointconfig-clarifytextconfig.html}
 **/
export interface SageMakerEndpointConfigClarifyTextConfig {
  /**
   * Property description not available.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Language: Value<string>;
  /**
   * Property description not available.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Granularity: Value<string>;
}

/**
 *
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-endpointconfig-productionvariant-serverlessconfig.html}
 **/
export interface SageMakerEndpointConfigServerlessConfig {
  MaxConcurrency: Value<number>;
  MemorySizeInMB: Value<number>;
}

/**
 * Configures the behavior of the client used by SageMaker to interact with the model container during asynchronous inference.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-endpointconfig-asyncinferenceclientconfig.html}
 **/
export interface SageMakerEndpointConfigAsyncInferenceClientConfig {
  /**
   * The maximum number of concurrent requests sent by the SageMaker client to the model container. If no value is provided, SageMaker will choose an optimal value for you.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  MaxConcurrentInvocationsPerInstance?: Value<number>;
}
export interface SageMakerEndpointConfigProperties {
  /**
   * Array of `ProductionVariant` objects. There is one for each model that you want to host at this endpoint in shadow mode with production traffic replicated from the model specified on `ProductionVariants`. If you use this field, you can only specify one variant for `ProductionVariants` and one variant for `ShadowProductionVariants`.
   *
   * _Required_: No
   *
   * _Type_: List of [ProductionVariant](aws-properties-sagemaker-endpointconfig-productionvariant.md)
   *
   * _Maximum_: `10`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ShadowProductionVariants?: List<SageMakerEndpointConfigProductionVariant>;
  /**
   * Specifies how to capture endpoint data for model monitor. The data capture configuration applies to all production variants hosted at the endpoint.
   *
   * _Required_: No
   *
   * _Type_: [DataCaptureConfig](aws-properties-sagemaker-endpointconfig-datacaptureconfig.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  DataCaptureConfig?: SageMakerEndpointConfigDataCaptureConfig;
  /**
   * A list of `ProductionVariant` objects, one for each model that you want to host at this endpoint.
   *
   * _Required_: Yes
   *
   * _Type_: List of [ProductionVariant](aws-properties-sagemaker-endpointconfig-productionvariant.md)
   *
   * _Maximum_: `10`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ProductionVariants: List<SageMakerEndpointConfigProductionVariant>;
  /**
   * The Amazon Resource Name (ARN) of an AWS Key Management Service key that Amazon SageMaker uses to encrypt data on the storage volume attached to the ML compute instance that hosts the endpoint.
   */
  KmsKeyId?: Value<string>;
  /**
   * Specifies configuration for how an endpoint performs asynchronous inference.
   *
   * _Required_: No
   *
   * _Type_: [AsyncInferenceConfig](aws-properties-sagemaker-endpointconfig-asyncinferenceconfig.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  AsyncInferenceConfig?: SageMakerEndpointConfigAsyncInferenceConfig;
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
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  EndpointConfigName?: Value<string>;
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: [ExplainerConfig](aws-properties-sagemaker-endpointconfig-explainerconfig.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ExplainerConfig?: SageMakerEndpointConfigExplainerConfig;
  /**
   * A list of key-value pairs to apply to this resource.
   *
   * For more information, see [Resource Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html) and [Using Cost Allocation Tags](https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html#allocation-what).
   *
   * _Required_: No
   *
   * _Type_: List of [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)
   *
   * _Maximum_: `50`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Tags?: List<ResourceTag>;
}

/**
 * The `AWS::SageMaker::EndpointConfig` resource creates a configuration for an Amazon SageMaker endpoint. For more information, see [CreateEndpointConfig](https://docs.aws.amazon.com/sagemaker/latest/dg/API_CreateEndpointConfig.html) in the _SageMaker Developer Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-endpointconfig.html}
 */
export interface SageMakerEndpointConfigResource {
  Type: 'AWS::SageMaker::EndpointConfig';
  Properties: SageMakerEndpointConfigProperties;
}
