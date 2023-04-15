/**
 * Supported regions:
 * - ap-northeast-1 (version 119.1.0)
 * - ap-northeast-2 (version 119.1.0)
 * - ap-northeast-3 (version 119.1.0)
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
 * The tunnel options for a single VPN tunnel.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-vpnconnection-vpntunneloptionsspecification.html}
 **/
export interface EC2VPNConnectionVpnTunnelOptionsSpecification {
  /**
   * The pre-shared key (PSK) to establish initial authentication between the virtual private gateway and customer gateway.
   *
   * Constraints: Allowed characters are alphanumeric characters, periods (.), and underscores (_). Must be between 8 and 64 characters in length and cannot start with zero (0).
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  PreSharedKey?: Value<string>;
  /**
   * The range of inside IP addresses for the tunnel. Any specified CIDR blocks must be unique across all VPN connections that use the same virtual private gateway.
   *
   * Constraints: A size /30 CIDR block from the `169.254.0.0/16` range. The following CIDR blocks are reserved and cannot be used:
   */
  TunnelInsideCidr?: Value<string>;
}
export interface EC2VPNConnectionProperties {
  /**
   * The ID of the transit gateway associated with the VPN connection.
   *
   * You must specify either `TransitGatewayId` or `VpnGatewayId`, but not both.
   *
   * _Required_: Conditional
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  TransitGatewayId?: Value<string>;
  /**
   * The type of VPN connection.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Allowed values_: `ipsec.1`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Type: Value<string>;
  /**
   * The tunnel options for the VPN connection.
   *
   * _Required_: No
   *
   * _Type_: List of [VpnTunnelOptionsSpecification](aws-properties-ec2-vpnconnection-vpntunneloptionsspecification.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  VpnTunnelOptionsSpecifications?: List<EC2VPNConnectionVpnTunnelOptionsSpecification>;
  /**
   * The ID of the customer gateway at your end of the VPN connection.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  CustomerGatewayId: Value<string>;
  /**
   * The ID of the virtual private gateway at the AWS side of the VPN connection.
   *
   * You must specify either `TransitGatewayId` or `VpnGatewayId`, but not both.
   *
   * _Required_: Conditional
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  VpnGatewayId?: Value<string>;
  /**
   * Indicates whether the VPN connection uses static routes only. Static routes must be used for devices that don't support BGP.
   *
   * If you are creating a VPN connection for a device that does not support Border Gateway Protocol (BGP), you must specify `true`.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  StaticRoutesOnly?: Value<boolean>;
  /**
   * Any tags assigned to the VPN connection.
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
 * Specifies a VPN connection between a virtual private gateway and a VPN customer gateway or a transit gateway and a VPN customer gateway.
 *
 * To specify a VPN connection between a transit gateway and customer gateway, use the `TransitGatewayId` and `CustomerGatewayId` properties.
 *
 * To specify a VPN connection between a virtual private gateway and customer gateway, use the `VpnGatewayId` and `CustomerGatewayId` properties.
 *
 * For more information, see [AWS Site-to-Site VPN](https://docs.aws.amazon.com/vpn/latest/s2svpn/VPC_VPN.html) in the _AWS Site-to-Site VPN User Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpnconnection.html}
 */
export interface EC2VPNConnectionResource {
  Type: 'AWS::EC2::VPNConnection';
  Properties: EC2VPNConnectionProperties;
}
