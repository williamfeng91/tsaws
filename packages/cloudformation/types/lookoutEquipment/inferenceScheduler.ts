/**
 * Supported regions:
 * - ap-northeast-2 (version 119.1.0)
 * - eu-west-1 (version 119.1.0)
 * - us-east-1 (version 119.1.0)
 */
import { List, Value } from '../../shared-types/dataTypes';
import { ResourceTag } from '../../shared-types/resource';

/**
 * The `DataInputConfiguration` property type specifies Property description not available. for an [AWS::LookoutEquipment::InferenceScheduler](aws-resource-lookoutequipment-inferencescheduler.md).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lookoutequipment-inferencescheduler-datainputconfiguration.html}
 **/
export interface LookoutEquipmentInferenceSchedulerDataInputConfiguration {
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: [InputNameConfiguration](aws-properties-lookoutequipment-inferencescheduler-inputnameconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  InferenceInputNameConfiguration?: LookoutEquipmentInferenceSchedulerInputNameConfiguration;
  /**
   * Property description not available.
   *
   * _Required_: Yes
   *
   * _Type_: [S3InputConfiguration](aws-properties-lookoutequipment-inferencescheduler-s3inputconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  S3InputConfiguration: LookoutEquipmentInferenceSchedulerS3InputConfiguration;
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  InputTimeZoneOffset?: Value<string>;
}

/**
 * The `DataOutputConfiguration` property type specifies Property description not available. for an [AWS::LookoutEquipment::InferenceScheduler](aws-resource-lookoutequipment-inferencescheduler.md).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lookoutequipment-inferencescheduler-dataoutputconfiguration.html}
 **/
export interface LookoutEquipmentInferenceSchedulerDataOutputConfiguration {
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  KmsKeyId?: Value<string>;
  /**
   * Property description not available.
   *
   * _Required_: Yes
   *
   * _Type_: [S3OutputConfiguration](aws-properties-lookoutequipment-inferencescheduler-s3outputconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  S3OutputConfiguration: LookoutEquipmentInferenceSchedulerS3OutputConfiguration;
}

/**
 * The `S3OutputConfiguration` property type specifies Property description not available. for an [AWS::LookoutEquipment::InferenceScheduler](aws-resource-lookoutequipment-inferencescheduler.md).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lookoutequipment-inferencescheduler-s3outputconfiguration.html}
 **/
export interface LookoutEquipmentInferenceSchedulerS3OutputConfiguration {
  /**
   * Property description not available.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Bucket: Value<string>;
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Prefix?: Value<string>;
}

/**
 * The `InputNameConfiguration` property type specifies Property description not available. for an [AWS::LookoutEquipment::InferenceScheduler](aws-resource-lookoutequipment-inferencescheduler.md).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lookoutequipment-inferencescheduler-inputnameconfiguration.html}
 **/
export interface LookoutEquipmentInferenceSchedulerInputNameConfiguration {
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ComponentTimestampDelimiter?: Value<string>;
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TimestampFormat?: Value<string>;
}

/**
 * The `S3InputConfiguration` property type specifies Property description not available. for an [AWS::LookoutEquipment::InferenceScheduler](aws-resource-lookoutequipment-inferencescheduler.md).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lookoutequipment-inferencescheduler-s3inputconfiguration.html}
 **/
export interface LookoutEquipmentInferenceSchedulerS3InputConfiguration {
  /**
   * Property description not available.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Bucket: Value<string>;
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Prefix?: Value<string>;
}
export interface LookoutEquipmentInferenceSchedulerProperties {
  /**
   * The name of the inference scheduler.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `200`
   *
   * _Pattern_: `^[0-9a-zA-Z_-]{1,200}$`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  InferenceSchedulerName?: Value<string>;
  /**
   * How often data is uploaded to the source S3 bucket for the input data. This value is the length of time between data uploads. For instance, if you select 5 minutes, Amazon Lookout for Equipment will upload the real-time data to the source bucket once every 5 minutes. This frequency also determines how often Amazon Lookout for Equipment starts a scheduled inference on your data. In this example, it starts once every 5 minutes.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Allowed values_: `PT10M | PT15M | PT1H | PT30M | PT5M`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DataUploadFrequency: Value<string>;
  /**
   * The name of the ML model used for the inference scheduler.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `200`
   *
   * _Pattern_: `^[0-9a-zA-Z_-]{1,200}$`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ModelName: Value<string>;
  /**
   * Specifies configuration information for the input data for the inference scheduler, including delimiter, format, and dataset location.
   *
   * _Required_: Yes
   *
   * _Type_: [DataInputConfiguration](aws-properties-lookoutequipment-inferencescheduler-datainputconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DataInputConfiguration: LookoutEquipmentInferenceSchedulerDataInputConfiguration;
  /**
   * Specifies configuration information for the output results for the inference scheduler, including the Amazon S3 location for the output.
   *
   * _Required_: Yes
   *
   * _Type_: [DataOutputConfiguration](aws-properties-lookoutequipment-inferencescheduler-dataoutputconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DataOutputConfiguration: LookoutEquipmentInferenceSchedulerDataOutputConfiguration;
  /**
   * Provides the identifier of the AWS KMS key used to encrypt inference scheduler data by Amazon Lookout for Equipment.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ServerSideKmsKeyId?: Value<string>;
  /**
   * A period of time (in minutes) by which inference on the data is delayed after the data starts. For instance, if an offset delay time of five minutes was selected, inference will not begin on the data until the first data measurement after the five minute mark. For example, if five minutes is selected, the inference scheduler will wake up at the configured frequency with the additional five minute delay time to check the customer S3 bucket. The customer can upload data at the same frequency and they don't need to stop and restart the scheduler when uploading new data.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DataDelayOffsetInMinutes?: Value<number>;
  /**
   * The Amazon Resource Name (ARN) of a role with permission to access the data source being used for the inference.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RoleArn: Value<string>;
  /**
   * Any tags associated with the inference scheduler.
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
 * Creates a scheduled inference. Scheduling an inference is setting up a continuous real-time inference plan to analyze new measurement data. When setting up the schedule, you provide an Amazon S3 bucket location for the input data, assign it a delimiter between separate entries in the data, set an offset delay if desired, and set the frequency of inferencing. You must also provide an Amazon S3 bucket location for the output data.
 *
 * **Note**
 *
 * Updating some properties below (for example, InferenceSchedulerName and ServerSideKmsKeyId) triggers a resource replacement, which requires a new model. To replace such a property using AWS CloudFormation, but without creating a completely new stack, you must replace ModelName. If you need to replace the property, but want to use the same model, delete the current stack and create a new one with the updated properties.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lookoutequipment-inferencescheduler.html}
 */
export interface LookoutEquipmentInferenceSchedulerResource {
  Type: 'AWS::LookoutEquipment::InferenceScheduler';
  Properties: LookoutEquipmentInferenceSchedulerProperties;
}
