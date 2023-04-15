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
 * - eu-west-3 (version 119.1.0)
 * - sa-east-1 (version 119.1.0)
 * - us-east-1 (version 119.1.0)
 * - us-east-2 (version 119.1.0)
 * - us-west-2 (version 119.1.0)
 */
import { List, Value } from '../../shared-types/dataTypes';
import { ResourceTag } from '../../shared-types/resource';

/**
 * An IPv4 CIDR range to include in this input security group.
 *
 * The parent of this entity is InputSecurityGroup.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-inputsecuritygroup-inputwhitelistrulecidr.html}
 **/
export interface MediaLiveInputSecurityGroupInputWhitelistRuleCidr {
  /**
   * An IPv4 CIDR range to include in this input security group.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Cidr?: Value<string>;
}
export interface MediaLiveInputSecurityGroupProperties {
  /**
   * The list of IPv4 CIDR addresses to include in the input security group as "allowed" addresses.
   *
   * _Required_: No
   *
   * _Type_: List of [InputWhitelistRuleCidr](aws-properties-medialive-inputsecuritygroup-inputwhitelistrulecidr.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  WhitelistRules?: List<MediaLiveInputSecurityGroupInputWhitelistRuleCidr>;
  /**
   * A collection of tags for this input security group. Each tag is a key-value pair.
   *
   * _Required_: No
   *
   * _Type_: Json
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Tags?: { [key: string]: any };
}

/**
 * The AWS::MediaLive::InputSecurityGroup is a MediaLive resource type that creates an input security group.
 *
 * A MediaLive input security group is associated with a MediaLive input. The input security group is an "allow list" of IP addresses that controls whether an external IP address can push content to the associated MediaLive input.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-inputsecuritygroup.html}
 */
export interface MediaLiveInputSecurityGroupResource {
  Type: 'AWS::MediaLive::InputSecurityGroup';
  Properties: MediaLiveInputSecurityGroupProperties;
}
