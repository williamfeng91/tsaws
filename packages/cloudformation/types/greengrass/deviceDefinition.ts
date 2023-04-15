/**
 * Supported regions:
 * - ap-northeast-1 (version 119.1.0)
 * - ap-northeast-2 (version 119.1.0)
 * - ap-south-1 (version 119.1.0)
 * - ap-southeast-1 (version 119.1.0)
 * - ap-southeast-2 (version 119.1.0)
 * - eu-central-1 (version 119.1.0)
 * - eu-west-1 (version 119.1.0)
 * - eu-west-2 (version 119.1.0)
 * - us-east-1 (version 119.1.0)
 * - us-east-2 (version 119.1.0)
 * - us-west-1 (version 119.1.0)
 * - us-west-2 (version 119.1.0)
 */
import { List, Value } from '../../shared-types/dataTypes';
import { ResourceTag } from '../../shared-types/resource';

/**
 * A device is an AWS IoT device (thing) that's added to a Greengrass group. Greengrass devices can communicate with the Greengrass core in the same group. For more information, see [What Is AWS IoT Greengrass?](https://docs.aws.amazon.com/greengrass/latest/developerguide/what-is-gg.html) in the _AWS IoT Greengrass Version 1 Developer Guide_.
 *
 * In an AWS CloudFormation template, the `Devices` property of the [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-devicedefinition-devicedefinitionversion.html](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-devicedefinition-devicedefinitionversion.html) property type contains a list of `Device` property types.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-devicedefinition-device.html}
 **/
export interface GreengrassDeviceDefinitionDevice {
  /**
   * Indicates whether the device's local shadow is synced with the cloud automatically.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  SyncShadow?: Value<boolean>;
  /**
   * The ARN of the device, which is an AWS IoT device (thing).
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ThingArn: Value<string>;
  /**
   * A descriptive or arbitrary ID for the device. This value must be unique within the device definition version. Maximum length is 128 characters with pattern `[a-zA-Z0-9:_-]+`.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Id: Value<string>;
  /**
   * The Amazon Resource Name (ARN) of the device certificate for the device. This X.509 certificate is used to authenticate the device with AWS IoT and AWS IoT Greengrass services.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  CertificateArn: Value<string>;
}

/**
 * A device definition version contains a list of [devices](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-devicedefinition-device.html).
 *
 * **Note**
 *
 * After you create a device definition version that contains the devices you want to deploy, you must add it to your group version. For more information, see [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-group.html](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-group.html).
 *
 * In an AWS CloudFormation template, `DeviceDefinitionVersion` is the property type of the `InitialVersion` property in the [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-devicedefinition.html](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-devicedefinition.html) resource.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-devicedefinition-devicedefinitionversion.html}
 **/
export interface GreengrassDeviceDefinitionDeviceDefinitionVersion {
  /**
   * The devices in this version.
   *
   * _Required_: Yes
   *
   * _Type_: List of [Device](aws-properties-greengrass-devicedefinition-device.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Devices: List<GreengrassDeviceDefinitionDevice>;
}
export interface GreengrassDeviceDefinitionProperties {
  /**
   * The device definition version to include when the device definition is created. A device definition version contains a list of [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-devicedefinition-device.html](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-devicedefinition-device.html) property types.
   *
   * To associate a device definition version after the device definition is created, create an [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-devicedefinitionversion.html](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-devicedefinitionversion.html) resource and specify the ID of this device definition.
   *
   * _Required_: No
   *
   * _Type_: [DeviceDefinitionVersion](aws-properties-greengrass-devicedefinition-devicedefinitionversion.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  InitialVersion?: GreengrassDeviceDefinitionDeviceDefinitionVersion;
  /**
   * Application-specific metadata to attach to the device definition. You can use tags in IAM policies to control access to AWS IoT Greengrass resources. You can also use tags to categorize your resources. For more information, see [Tagging Your AWS IoT Greengrass Resources](https://docs.aws.amazon.com/greengrass/latest/developerguide/tagging.html) in the _AWS IoT Greengrass Version 1 Developer Guide_.
   *
   * This `Json` property type is processed as a map of key-value pairs. It uses the following format, which is different from most `Tags` implementations in AWS CloudFormation templates.
   *
   * _Required_: No
   *
   * _Type_: Json
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Tags?: { [key: string]: any };
  /**
   * The name of the device definition.
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
 * The `AWS::Greengrass::DeviceDefinition` resource represents a device definition for AWS IoT Greengrass. Device definitions are used to organize your device definition versions.
 *
 * Device definitions can reference multiple device definition versions. All device definition versions must be associated with a device definition. Each device definition version can contain one or more devices.
 *
 * **Note**
 *
 * When you create a device definition, you can optionally include an initial device definition version. To associate a device definition version later, create an [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-devicedefinitionversion.html](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-devicedefinitionversion.html) resource and specify the ID of this device definition.
 *
 * After you create the device definition version that contains the devices you want to deploy, you must add it to your group version. For more information, see [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-group.html](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-group.html).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-devicedefinition.html}
 */
export interface GreengrassDeviceDefinitionResource {
  Type: 'AWS::Greengrass::DeviceDefinition';
  Properties: GreengrassDeviceDefinitionProperties;
}
