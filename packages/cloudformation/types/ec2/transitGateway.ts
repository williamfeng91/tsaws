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

export interface EC2TransitGatewayProperties {
  /**
   * Enable or disable automatic propagation of routes to the default propagation route table. Enabled by default.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `disable | enable`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DefaultRouteTablePropagation?: Value<string>;
  /**
   * The description of the transit gateway.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Description?: Value<string>;
  /**
   * The transit gateway CIDR blocks.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TransitGatewayCidrBlocks?: List<Value<string>>;
  /**
   * The ID of the default association route table.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AssociationDefaultRouteTableId?: Value<string>;
  /**
   * Enable or disable automatic acceptance of attachment requests. Disabled by default.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `disable | enable`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AutoAcceptSharedAttachments?: Value<string>;
  /**
   * The ID of the default propagation route table.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PropagationDefaultRouteTableId?: Value<string>;
  /**
   * Enable or disable automatic association with the default association route table. Enabled by default.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `disable | enable`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DefaultRouteTableAssociation?: Value<string>;
  /**
   * Enable or disable Equal Cost Multipath Protocol support. Enabled by default.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `disable | enable`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  VpnEcmpSupport?: Value<string>;
  /**
   * Enable or disable DNS support. Enabled by default.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `disable | enable`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DnsSupport?: Value<string>;
  /**
   * Indicates whether multicast is enabled on the transit gateway
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `disable | enable`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  MulticastSupport?: Value<string>;
  /**
   * A private Autonomous System Number (ASN) for the Amazon side of a BGP session. The range is 64512 to 65534 for 16-bit ASNs. The default is 64512.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  AmazonSideAsn?: Value<number>;
  /**
   * The tags for the transit gateway.
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
 * Specifies a transit gateway.
 *
 * You can use a transit gateway to interconnect your virtual private clouds (VPC) and on-premises networks. After the transit gateway enters the `available` state, you can attach your VPCs and VPN connections to the transit gateway.
 *
 * To attach your VPCs, use [AWS::EC2::TransitGatewayAttachment](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-transitgatewayattachment.html).
 *
 * To attach a VPN connection, use [AWS::EC2::CustomerGateway](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-customer-gateway.html) to create a customer gateway and specify the ID of the customer gateway and the ID of the transit gateway in a call to [AWS::EC2::VPNConnection](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpn-connection.html).
 *
 * When you create a transit gateway, we create a default transit gateway route table and use it as the default association route table and the default propagation route table. You can use [AWS::EC2::TransitGatewayRouteTable](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-transitgatewayroutetable.html) to create additional transit gateway route tables. If you disable automatic route propagation, we do not create a default transit gateway route table. You can use [AWS::EC2::TransitGatewayRouteTablePropagation](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-transitgatewayroutetablepropagation.html) to propagate routes from a resource attachment to a transit gateway route table. If you disable automatic associations, you can use [AWS::EC2::TransitGatewayRouteTableAssociation](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-transitgatewayroutetableassociation.html) to associate a resource attachment with a transit gateway route table.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-transitgateway.html}
 */
export interface EC2TransitGatewayResource {
  Type: 'AWS::EC2::TransitGateway';
  Properties: EC2TransitGatewayProperties;
}
