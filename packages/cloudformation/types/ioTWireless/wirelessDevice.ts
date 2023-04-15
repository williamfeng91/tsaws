/**
 * Supported regions:
 * - ap-northeast-1 (version 119.1.0)
 * - ap-southeast-2 (version 119.1.0)
 * - eu-central-1 (version 119.1.0)
 * - eu-west-1 (version 119.1.0)
 * - sa-east-1 (version 119.1.0)
 * - us-east-1 (version 119.1.0)
 * - us-west-2 (version 119.1.0)
 */
import { List, Value } from '../../shared-types/dataTypes';
import { ResourceTag } from '../../shared-types/resource';

/**
 * ABP device object for create APIs for v1.1.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotwireless-wirelessdevice-abpv11.html}
 **/
export interface IoTWirelessWirelessDeviceAbpV11 {
  /**
   * Session keys for ABP v1.1.
   *
   * _Required_: Yes
   *
   * _Type_: [SessionKeysAbpV11](aws-properties-iotwireless-wirelessdevice-sessionkeysabpv11.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SessionKeys: IoTWirelessWirelessDeviceSessionKeysAbpV11;
  /**
   * The DevAddr value.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Pattern_: `[a-fA-F0-9]{8}`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DevAddr: Value<string>;
}

/**
 * LoRaWAN object for create APIs.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotwireless-wirelessdevice-sessionkeysabpv10x.html}
 **/
export interface IoTWirelessWirelessDeviceSessionKeysAbpV10x {
  /**
   * The AppSKey is a secret key, which you should handle in a similar way as you would an application password. You can protect the AppSKey value by storing it in the AWS Secrets Manager and use the [secretsmanager](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/dynamic-references.html#dynamic-references-secretsmanager) to reference this value.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Pattern_: `[a-fA-F0-9]{32}`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AppSKey: Value<string>;
  /**
   * The NwkSKey is a secret key, which you should handle in a similar way as you would an application password. You can protect the NwkSKey value by storing it in the AWS Secrets Manager and use the [secretsmanager](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/dynamic-references.html#dynamic-references-secretsmanager) to reference this value.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Pattern_: `[a-fA-F0-9]{32}`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  NwkSKey: Value<string>;
}

/**
 * LoRaWAN object for create functions.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotwireless-wirelessdevice-lorawandevice.html}
 **/
export interface IoTWirelessWirelessDeviceLoRaWANDevice {
  /**
   * LoRaWAN object for create APIs.
   *
   * _Required_: No
   *
   * _Type_: [AbpV10x](aws-properties-iotwireless-wirelessdevice-abpv10x.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AbpV10x?: IoTWirelessWirelessDeviceAbpV10x;
  /**
   * OTAA device object for v1.1 for create APIs.
   *
   * _Required_: No
   *
   * _Type_: [OtaaV11](aws-properties-iotwireless-wirelessdevice-otaav11.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  OtaaV11?: IoTWirelessWirelessDeviceOtaaV11;
  /**
   * ABP device object for create APIs for v1.1.
   *
   * _Required_: No
   *
   * _Type_: [AbpV11](aws-properties-iotwireless-wirelessdevice-abpv11.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AbpV11?: IoTWirelessWirelessDeviceAbpV11;
  /**
   * The ID of the device profile for the new wireless device.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Maximum_: `256`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DeviceProfileId?: Value<string>;
  /**
   * The DevEUI value.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Pattern_: `[a-fA-F0-9]{16}`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DevEui?: Value<string>;
  /**
   * OTAA device object for create APIs for v1.0.x
   *
   * _Required_: No
   *
   * _Type_: [OtaaV10x](aws-properties-iotwireless-wirelessdevice-otaav10x.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  OtaaV10x?: IoTWirelessWirelessDeviceOtaaV10x;
  /**
   * The ID of the service profile.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Maximum_: `256`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ServiceProfileId?: Value<string>;
}

/**
 * Session keys for ABP v1.1.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotwireless-wirelessdevice-sessionkeysabpv11.html}
 **/
export interface IoTWirelessWirelessDeviceSessionKeysAbpV11 {
  /**
   * The FNwkSIntKey is a secret key, which you should handle in a similar way as you would an application password. You can protect the FNwkSIntKey value by storing it in the AWS Secrets Manager and use the [secretsmanager](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/dynamic-references.html#dynamic-references-secretsmanager) to reference this value.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Pattern_: `[a-fA-F0-9]{32}`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FNwkSIntKey: Value<string>;
  /**
   * The AppSKey is a secret key, which you should handle in a similar way as you would an application password. You can protect the AppSKey value by storing it in the AWS Secrets Manager and use the [secretsmanager](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/dynamic-references.html#dynamic-references-secretsmanager) to reference this value.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Pattern_: `[a-fA-F0-9]{32}`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AppSKey: Value<string>;
  /**
   * The SNwkSIntKey is a secret key, which you should handle in a similar way as you would an application password. You can protect the SNwkSIntKey value by storing it in the AWS Secrets Manager and use the [secretsmanager](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/dynamic-references.html#dynamic-references-secretsmanager) to reference this value.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Pattern_: `[a-fA-F0-9]{32}`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SNwkSIntKey: Value<string>;
  /**
   * The NwkSEncKey is a secret key, which you should handle in a similar way as you would an application password. You can protect the NwkSEncKey value by storing it in the AWS Secrets Manager and use the [secretsmanager](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/dynamic-references.html#dynamic-references-secretsmanager) to reference this value.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Pattern_: `[a-fA-F0-9]{32}`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  NwkSEncKey: Value<string>;
}

/**
 * ABP device object for LoRaWAN specification v1.0.x.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotwireless-wirelessdevice-abpv10x.html}
 **/
export interface IoTWirelessWirelessDeviceAbpV10x {
  /**
   * Session keys for ABP v1.0.x
   *
   * _Required_: Yes
   *
   * _Type_: [SessionKeysAbpV10x](aws-properties-iotwireless-wirelessdevice-sessionkeysabpv10x.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SessionKeys: IoTWirelessWirelessDeviceSessionKeysAbpV10x;
  /**
   * The DevAddr value.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Pattern_: `[a-fA-F0-9]{8}`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DevAddr: Value<string>;
}

/**
 * OTAA device object for v1.1 for create APIs.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotwireless-wirelessdevice-otaav11.html}
 **/
export interface IoTWirelessWirelessDeviceOtaaV11 {
  /**
   * The NwkKey is a secret key, which you should handle in a similar way as you would an application password. You can protect the NwkKey value by storing it in the AWS Secrets Manager and use the [secretsmanager](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/dynamic-references.html#dynamic-references-secretsmanager) to reference this value.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Pattern_: `[a-fA-F0-9]{32}`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  NwkKey: Value<string>;
  /**
   * The AppKey is a secret key, which you should handle in a similar way as you would an application password. You can protect the AppKey value by storing it in the AWS Secrets Manager and use the [secretsmanager](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/dynamic-references.html#dynamic-references-secretsmanager) to reference this value.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Pattern_: `[a-fA-F0-9]{32}`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AppKey: Value<string>;
  /**
   * The JoinEUI value.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Pattern_: `[a-fA-F0-9]{16}`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  JoinEui: Value<string>;
}

/**
 * OTAA device object for create APIs for v1.0.x.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotwireless-wirelessdevice-otaav10x.html}
 **/
export interface IoTWirelessWirelessDeviceOtaaV10x {
  /**
   * The AppEUI value, with pattern of `[a-fA-F0-9]{16}`.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Pattern_: `[a-fA-F0-9]{16}`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AppEui: Value<string>;
  /**
   * The AppKey is a secret key, which you should handle in a similar way as you would an application password. You can protect the AppKey value by storing it in the AWS Secrets Manager and use the [secretsmanager](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/dynamic-references.html#dynamic-references-secretsmanager) to reference this value.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Pattern_: `[a-fA-F0-9]{32}`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AppKey: Value<string>;
}
export interface IoTWirelessWirelessDeviceProperties {
  /**
   * The date and time when the most recent uplink was received.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Pattern_: `^([+-]?d{4}(?!d{2}b))((-?)((0[1-9]|1[0-2])(3([12]d|0[1-9]|3[01]))?|W([0-4]d|5[0-2])(-?[1-7])?|(00[1-9]|0[1-9]d|[12]d{2}|3([0-5]d|6[1-6])))([Ts]((([01]d|2[0-3])((:?)[0-5]d)?|24:?00)([.,]d+(?!:))?)?(17[0-5]d([.,]d+)?)?([zZ]|([+-])([01]d|2[0-3]):?([0-5]d)?)?)?)?$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  LastUplinkReceivedAt?: Value<string>;
  /**
   * The wireless device type.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Allowed values_: `LoRaWAN | Sidewalk`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Type: Value<string>;
  /**
   * The description of the new resource. Maximum length is 2048.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Description?: Value<string>;
  /**
   * The device configuration information to use to create the wireless device. Must be at least one of OtaaV10x, OtaaV11, AbpV11, or AbpV10x.
   *
   * _Required_: No
   *
   * _Type_: [LoRaWANDevice](aws-properties-iotwireless-wirelessdevice-lorawandevice.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  LoRaWAN?: IoTWirelessWirelessDeviceLoRaWANDevice;
  /**
   * The name of the destination to assign to the new wireless device. Can have only have alphanumeric, - (hyphen) and _ (underscore) characters and it can't have any spaces.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Maximum_: `128`
   *
   * _Pattern_: `[a-zA-Z0-9-_]+`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DestinationName: Value<string>;
  /**
   * The ARN of the thing to associate with the wireless device.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ThingArn?: Value<string>;
  /**
   * The tags are an array of key-value pairs to attach to the specified resource. Tags can have a minimum of 0 and a maximum of 50 items.
   *
   * _Required_: No
   *
   * _Type_: List of [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)
   *
   * _Maximum_: `200`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Tags?: List<ResourceTag>;
  /**
   * The name of the new resource.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Maximum_: `256`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Name?: Value<string>;
}

/**
 * Provisions a wireless device.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-wirelessdevice.html}
 */
export interface IoTWirelessWirelessDeviceResource {
  Type: 'AWS::IoTWireless::WirelessDevice';
  Properties: IoTWirelessWirelessDeviceProperties;
}
