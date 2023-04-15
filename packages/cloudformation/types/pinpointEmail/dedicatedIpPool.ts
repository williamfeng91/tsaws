/**
 * Supported regions:
 * - ap-south-1 (version 119.1.0)
 * - ap-southeast-2 (version 119.1.0)
 * - eu-central-1 (version 119.1.0)
 * - eu-west-1 (version 119.1.0)
 * - us-east-1 (version 119.1.0)
 * - us-west-2 (version 119.1.0)
 */
import { List, Value } from '../../shared-types/dataTypes';
import { ResourceTag } from '../../shared-types/resource';

/**
 * An object that defines the tags (keys and values) that you want to associate with the dedicated IP pool.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpointemail-dedicatedippool-tags.html}
 **/
export interface PinpointEmailDedicatedIpPoolTags {
  /**
   * The optional part of a key-value pair that defines a tag. The maximum length of a tag value is 256 characters. The minimum length is 0 characters. If you don’t want a resource to have a specific tag value, don’t specify a value for this parameter. Amazon Pinpoint will set the value to an empty string.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Value?: Value<string>;
  /**
   * One part of a key-value pair that defines a tag. The maximum length of a tag key is 128 characters. The minimum length is 1 character.
   *
   * If you specify tags for the dedicated IP pool, then this value is required.
   *
   * _Required_: Conditional
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Key?: Value<string>;
}
export interface PinpointEmailDedicatedIpPoolProperties {
  /**
   * The name of the dedicated IP pool.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  PoolName?: Value<string>;
  /**
   * An object that defines the tags (keys and values) that you want to associate with the dedicated IP pool.
   *
   * _Required_: No
   *
   * _Type_: [List](aws-properties-pinpointemail-dedicatedippool-tags.md) of [Tags](aws-properties-pinpointemail-dedicatedippool-tags.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Tags?: List<PinpointEmailDedicatedIpPoolTags>;
}

/**
 * A request to create a new dedicated IP pool.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpointemail-dedicatedippool.html}
 */
export interface PinpointEmailDedicatedIpPoolResource {
  Type: 'AWS::PinpointEmail::DedicatedIpPool';
  Properties: PinpointEmailDedicatedIpPoolProperties;
}
