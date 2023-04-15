/**
 * Supported regions:
 * - ap-northeast-1 (version 119.1.0)
 * - ap-northeast-2 (version 119.1.0)
 * - ap-south-1 (version 119.1.0)
 * - ap-southeast-1 (version 119.1.0)
 * - ap-southeast-2 (version 119.1.0)
 * - ca-central-1 (version 119.1.0)
 * - eu-central-1 (version 119.1.0)
 * - eu-west-1 (version 119.1.0)
 * - eu-west-2 (version 119.1.0)
 * - eu-west-3 (version 119.1.0)
 * - us-east-1 (version 119.1.0)
 * - us-east-2 (version 119.1.0)
 * - us-west-2 (version 119.1.0)
 */
import { List, Value } from '../../shared-types/dataTypes';
import { ResourceTag } from '../../shared-types/resource';

/**
 * The `Location` property type specifies Property description not available. for an [AWS::Lightsail::Disk](aws-resource-lightsail-disk.md).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lightsail-disk-location.html}
 **/
export interface LightsailDiskLocation {
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RegionName?: Value<string>;
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AvailabilityZone?: Value<string>;
}

/**
 * `AddOn` is a property of the [AWS::Lightsail::Disk](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-disk.html) resource. It describes the add-ons for a disk.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lightsail-disk-addon.html}
 **/
export interface LightsailDiskAddOn {
  /**
   * The status of the add-on.
   *
   * Valid Values: `Enabled` | `Disabled`
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Status?: Value<string>;
  /**
   * The add-on type (for example, `AutoSnapshot`).
   *
   * `AutoSnapshot` is the only add-on that can be enabled for a disk.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AddOnType: Value<string>;
  /**
   * The parameters for the automatic snapshot add-on, such as the daily time when an automatic snapshot will be created.
   *
   * _Required_: No
   *
   * _Type_: [AutoSnapshotAddOn](aws-properties-lightsail-disk-autosnapshotaddon.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AutoSnapshotAddOnRequest?: LightsailDiskAutoSnapshotAddOn;
}

/**
 * `AutoSnapshotAddOn` is a property of the [AddOn](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lightsail-disk-addon.html) property. It describes the automatic snapshot add-on for a disk.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lightsail-disk-autosnapshotaddon.html}
 **/
export interface LightsailDiskAutoSnapshotAddOn {
  /**
   * The daily time when an automatic snapshot will be created.
   *
   * Constraints:
   */
  SnapshotTimeOfDay?: Value<string>;
}
export interface LightsailDiskProperties {
  /**
   * The size of the disk in GB.
   *
   * _Required_: Yes
   *
   * _Type_: Integer
   *
   * _Update requires_: Updates are not supported.
   */
  SizeInGb: Value<number>;
  /**
   * The AWS Region and Availability Zone location for the disk (for example, `us-east-1a`).
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: Updates are not supported.
   */
  AvailabilityZone?: Value<string>;
  /**
   * An array of add-ons for the disk.
   *
   * If the disk has an add-on enabled when performing a delete disk request, the add-on is automatically disabled before the disk is deleted.
   *
   * _Required_: No
   *
   * _Type_: List of [AddOn](aws-properties-lightsail-disk-addon.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AddOns?: List<LightsailDiskAddOn>;
  /**
   * The name of the disk.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Pattern_: `w[w-]*w`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  DiskName: Value<string>;
  /**
   * An array of key-value pairs to apply to this resource.
   *
   * For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html) in the _AWS CloudFormation User Guide_.
   *
   * The `Value` of `Tags` is optional for Lightsail resources.
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
 * The `AWS::Lightsail::Disk` resource specifies a disk that can be attached to an Amazon Lightsail instance that is in the same AWS Region and Availability Zone.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-disk.html}
 */
export interface LightsailDiskResource {
  Type: 'AWS::Lightsail::Disk';
  Properties: LightsailDiskProperties;
}
