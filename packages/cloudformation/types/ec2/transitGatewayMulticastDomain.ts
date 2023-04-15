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
 * - sa-east-1 (version 119.1.0)
 * - us-east-1 (version 119.1.0)
 * - us-east-2 (version 119.1.0)
 * - us-west-1 (version 119.1.0)
 * - us-west-2 (version 119.1.0)
 */
import { List, Value } from '../../shared-types/dataTypes';
import { ResourceTag } from '../../shared-types/resource';

/**
 * The options for the transit gateway multicast domain.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-transitgatewaymulticastdomain-options.html}
 **/
export interface EC2TransitGatewayMulticastDomainOptions {
  /**
   * Specify whether to enable support for statically configuring multicast group sources for a domain.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `disable | enable`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  StaticSourcesSupport?: Value<string>;
  /**
   * Indicates whether to automatically accept cross-account subnet associations that are associated with the transit gateway multicast domain.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `disable | enable`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AutoAcceptSharedAssociations?: Value<string>;
  /**
   * Specify whether to enable Internet Group Management Protocol (IGMP) version 2 for the transit gateway multicast domain.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `disable | enable`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Igmpv2Support?: Value<string>;
}
export interface EC2TransitGatewayMulticastDomainProperties {
  /**
   * The options for the transit gateway multicast domain.
   */
  Options?: EC2TransitGatewayMulticastDomainOptions;
  /**
   * The ID of the transit gateway.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  TransitGatewayId: Value<string>;
  /**
   * The tags for the transit gateway multicast domain.
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
 * Creates a multicast domain using the specified transit gateway.
 *
 * The transit gateway must be in the available state before you create a domain.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-transitgatewaymulticastdomain.html}
 */
export interface EC2TransitGatewayMulticastDomainResource {
  Type: 'AWS::EC2::TransitGatewayMulticastDomain';
  Properties: EC2TransitGatewayMulticastDomainProperties;
}
