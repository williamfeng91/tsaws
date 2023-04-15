/**
 * Supported regions:
 * - ap-northeast-1 (version 119.1.0)
 * - eu-central-1 (version 119.1.0)
 * - eu-west-1 (version 119.1.0)
 * - eu-west-2 (version 119.1.0)
 * - us-east-1 (version 119.1.0)
 * - us-east-2 (version 119.1.0)
 * - us-west-2 (version 119.1.0)
 */
import { List, Value } from '../../shared-types/dataTypes';

export interface IoT1ClickDeviceProperties {
  /**
   * The ID of the device, such as `G030PX0312744DWM`.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  DeviceId: Value<string>;
  /**
   * A Boolean value indicating whether the device is enabled (`true`) or not (`false`).
   *
   * _Required_: Yes
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Enabled: Value<boolean>;
}

/**
 * The `AWS::IoT1Click::Device` resource controls the enabled state of an AWS IoT 1-Click compatible device. For more information, see [Device](https://docs.aws.amazon.com/iot-1-click/1.0/devices-apireference/devices-deviceid.html) in the _AWS IoT 1-Click Devices API Reference_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot1click-device.html}
 */
export interface IoT1ClickDeviceResource {
  Type: 'AWS::IoT1Click::Device';
  Properties: IoT1ClickDeviceProperties;
}
