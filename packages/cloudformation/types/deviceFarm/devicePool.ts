/**
 * Supported regions:
 * - us-west-2 (version 119.1.0)
 */
import { List, Value } from '../../shared-types/dataTypes';
import { ResourceTag } from '../../shared-types/resource';

/**
 * Represents a condition for a device pool.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-devicefarm-devicepool-rule.html}
 **/
export interface DeviceFarmDevicePoolRule {
  /**
   * Specifies how Device Farm compares the rule's attribute to the value. For the operators that are supported by each attribute, see the attribute descriptions.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `CONTAINS | EQUALS | GREATER_THAN | GREATER_THAN_OR_EQUALS | IN | LESS_THAN | LESS_THAN_OR_EQUALS | NOT_IN`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Operator?: Value<string>;
  /**
   * The rule's stringified attribute. For example, specify the value as `""abc""`.
   *
   * The supported operators for each attribute are provided in the following list.
   *
   * APPIUM_VERSION
   *
   * The Appium version for the test.
   *
   * Supported operators: `CONTAINS`
   *
   * ARN
   *
   * The Amazon Resource Name (ARN) of the device (for example, `arn:aws:devicefarm:us-west-2::device:12345Example`.
   *
   * Supported operators: `EQUALS`, `IN`, `NOT_IN`
   *
   * AVAILABILITY
   *
   * The current availability of the device. Valid values are AVAILABLE, HIGHLY_AVAILABLE, BUSY, or TEMPORARY_NOT_AVAILABLE.
   *
   * Supported operators: `EQUALS`
   *
   * FLEET_TYPE
   *
   * The fleet type. Valid values are PUBLIC or PRIVATE.
   *
   * Supported operators: `EQUALS`
   *
   * FORM_FACTOR
   *
   * The device form factor. Valid values are PHONE or TABLET.
   *
   * Supported operators: `EQUALS`, `IN`, `NOT_IN`
   *
   * INSTANCE_ARN
   *
   * The Amazon Resource Name (ARN) of the device instance.
   *
   * Supported operators: `IN`, `NOT_IN`
   *
   * INSTANCE_LABELS
   *
   * The label of the device instance.
   *
   * Supported operators: `CONTAINS`
   *
   * MANUFACTURER
   *
   * The device manufacturer (for example, Apple).
   *
   * Supported operators: `EQUALS`, `IN`, `NOT_IN`
   *
   * MODEL
   *
   * The device model, such as Apple iPad Air 2 or Google Pixel.
   *
   * Supported operators: `CONTAINS`, `EQUALS`, `IN`, `NOT_IN`
   *
   * OS_VERSION
   *
   * The operating system version (for example, 10.3.2).
   *
   * Supported operators: `EQUALS`, `GREATER_THAN`, `GREATER_THAN_OR_EQUALS`, `IN`, `LESS_THAN`, `LESS_THAN_OR_EQUALS`, `NOT_IN`
   *
   * PLATFORM
   *
   * The device platform. Valid values are ANDROID or IOS.
   *
   * Supported operators: `EQUALS`, `IN`, `NOT_IN`
   *
   * REMOTE_ACCESS_ENABLED
   *
   * Whether the device is enabled for remote access. Valid values are TRUE or FALSE.
   *
   * Supported operators: `EQUALS`
   *
   * REMOTE_DEBUG_ENABLED
   *
   * Whether the device is enabled for remote debugging. Valid values are TRUE or FALSE.
   *
   * Supported operators: `EQUALS`
   *
   * Because remote debugging is [no longer supported](https://docs.aws.amazon.com/devicefarm/latest/developerguide/history.html), this filter is ignored.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `APPIUM_VERSION | ARN | AVAILABILITY | FLEET_TYPE | FORM_FACTOR | INSTANCE_ARN | INSTANCE_LABELS | MANUFACTURER | MODEL | OS_VERSION | PLATFORM | REMOTE_ACCESS_ENABLED | REMOTE_DEBUG_ENABLED`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Attribute?: Value<string>;
  /**
   * The rule's value.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Value?: Value<string>;
}
export interface DeviceFarmDevicePoolProperties {
  /**
   * The ARN of the project for the device pool.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `32`
   *
   * _Maximum_: `1011`
   *
   * _Pattern_: `^arn:.+`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ProjectArn: Value<string>;
  /**
   * The device pool's description.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `0`
   *
   * _Maximum_: `16384`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Description?: Value<string>;
  /**
   * The number of devices that Device Farm can add to your device pool. Device Farm adds devices that are available and meet the criteria that you assign for the `rules` parameter. Depending on how many devices meet these constraints, your device pool might contain fewer devices than the value for this parameter.
   *
   * By specifying the maximum number of devices, you can control the costs that you incur by running tests.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MaxDevices?: Value<number>;
  /**
   * The device pool's rules.
   *
   * _Required_: Yes
   *
   * _Type_: List of [Rule](aws-properties-devicefarm-devicepool-rule.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Rules: List<DeviceFarmDevicePoolRule>;
  /**
   * An array of key-value pairs to apply to this resource.
   *
   * For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html) in the _AWS CloudFormation resource type reference guide_.
   *
   * _Required_: No
   *
   * _Type_: List of [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Tags?: List<ResourceTag>;
  /**
   * The device pool's name.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `0`
   *
   * _Maximum_: `256`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Name: Value<string>;
}

/**
 * Represents a request to the create device pool operation.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-devicefarm-devicepool.html}
 */
export interface DeviceFarmDevicePoolResource {
  Type: 'AWS::DeviceFarm::DevicePool';
  Properties: DeviceFarmDevicePoolProperties;
}
