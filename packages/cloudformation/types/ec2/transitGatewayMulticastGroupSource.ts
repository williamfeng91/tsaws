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

export interface EC2TransitGatewayMulticastGroupSourceProperties {
  /**
   * The ID of the transit gateway multicast domain.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  TransitGatewayMulticastDomainId: Value<string>;
  /**
   * The group sources' network interface IDs to register with the transit gateway multicast group.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  NetworkInterfaceId: Value<string>;
  /**
   * The IP address assigned to the transit gateway multicast group.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  GroupIpAddress: Value<string>;
}

/**
 * Registers sources (network interfaces) with the specified transit gateway multicast domain.
 *
 * A multicast source is a network interface attached to a supported instance that sends multicast traffic. For information about supported instances, see [Multicast Considerations](https://docs.aws.amazon.com/vpc/latest/tgw/transit-gateway-limits.html#multicast-limits) in _Amazon VPC Transit Gateways_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-transitgatewaymulticastgroupsource.html}
 */
export interface EC2TransitGatewayMulticastGroupSourceResource {
  Type: 'AWS::EC2::TransitGatewayMulticastGroupSource';
  Properties: EC2TransitGatewayMulticastGroupSourceProperties;
}
