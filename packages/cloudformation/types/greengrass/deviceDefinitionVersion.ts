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

/**
 * A device is an AWS IoT device (thing) that's added to a Greengrass group. Greengrass devices can communicate with the Greengrass core in the same group. For more information, see [What Is AWS IoT Greengrass?](https://docs.aws.amazon.com/greengrass/latest/developerguide/what-is-gg.html) in the _AWS IoT Greengrass Version 1 Developer Guide_.
 *
 * In an AWS CloudFormation template, the `Devices` property of the [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-devicedefinitionversion.html](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-devicedefinitionversion.html) resource contains a list of `Device` property types.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-devicedefinitionversion-device.html}
 **/
export interface GreengrassDeviceDefinitionVersionDevice {
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
   * The Amazon Resource Name (ARN) of the device, which is an AWS IoT device (thing).
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
   * The ARN of the device certificate for the device. This X.509 certificate is used to authenticate the device with AWS IoT and AWS IoT Greengrass services.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  CertificateArn: Value<string>;
}
export interface GreengrassDeviceDefinitionVersionProperties {
  /**
   * The ID of the device definition associated with this version. This value is a GUID.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  DeviceDefinitionId: Value<string>;
  /**
   * The devices in this version.
   *
   * _Required_: Yes
   *
   * _Type_: List of [Device](aws-properties-greengrass-devicedefinitionversion-device.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Devices: List<GreengrassDeviceDefinitionVersionDevice>;
}

/**
 * The `AWS::Greengrass::DeviceDefinitionVersion` resource represents a device definition version for AWS IoT Greengrass. A device definition version contains a list of devices.
 *
 * **Note**
 *
 * To create a device definition version, you must specify the ID of the device definition that you want to associate with the version. For information about creating a device definition, see [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-devicedefinition.html](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-devicedefinition.html).
 *
 * After you create a device definition version that contains the devices you want to deploy, you must add it to your group version. For more information, see [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-group.html](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-group.html).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-devicedefinitionversion.html}
 */
export interface GreengrassDeviceDefinitionVersionResource {
  Type: 'AWS::Greengrass::DeviceDefinitionVersion';
  Properties: GreengrassDeviceDefinitionVersionProperties;
}
