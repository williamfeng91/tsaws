/**
 * Supported regions:
 * - ap-northeast-1 (version 119.1.0)
 * - eu-central-1 (version 119.1.0)
 * - eu-west-1 (version 119.1.0)
 * - us-east-1 (version 119.1.0)
 * - us-east-2 (version 119.1.0)
 * - us-west-2 (version 119.1.0)
 */
import { List, Value } from '../../shared-types/dataTypes';
import { ResourceTag } from '../../shared-types/resource';

/**
 * The output configuration for storing sample data collected by the fleet.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-devicefleet-edgeoutputconfig.html}
 **/
export interface SageMakerDeviceFleetEdgeOutputConfig {
  /**
   * The AWS Key Management Service (AWS KMS) key that Amazon SageMaker uses to encrypt data on the storage volume after compilation job. If you don't provide a KMS key ID, Amazon SageMaker uses the default KMS key for Amazon S3 for your role's account.
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
   * The Amazon Simple Storage (S3) bucket URI.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Maximum_: `1024`
   *
   * _Pattern_: `^(https|s3)://([^/]+)/?(.*)$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  S3OutputLocation: Value<string>;
}
export interface SageMakerDeviceFleetProperties {
  /**
   * Name of the device fleet.
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
  DeviceFleetName: Value<string>;
  /**
   * A description of the fleet.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Description?: Value<string>;
  /**
   * The output configuration for storing sample data collected by the fleet.
   *
   * _Required_: Yes
   *
   * _Type_: [EdgeOutputConfig](aws-properties-sagemaker-devicefleet-edgeoutputconfig.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  OutputConfig: SageMakerDeviceFleetEdgeOutputConfig;
  /**
   * The Amazon Resource Name (ARN) that has access to AWS Internet of Things (IoT).
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
  /**
   * An array of key-value pairs that contain metadata to help you categorize and organize your device fleets. Each tag consists of a key and a value, both of which you define.
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
 * The `AWS::SageMaker::DeviceFleet` resource is an Amazon SageMaker resource type that allows you to create a DeviceFleet that manages your SageMaker Edge Manager Devices. You must register your devices against the `DeviceFleet` separately.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-devicefleet.html}
 */
export interface SageMakerDeviceFleetResource {
  Type: 'AWS::SageMaker::DeviceFleet';
  Properties: SageMakerDeviceFleetProperties;
}
