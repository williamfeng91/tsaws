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
 * Describes a network access control (ACL) rule.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-networkinsightsanalysis-analysisaclrule.html}
 **/
export interface EC2NetworkInsightsAnalysisAnalysisAclRule {
  /**
   * The range of ports.
   *
   * _Required_: No
   *
   * _Type_: [PortRange](aws-properties-ec2-networkinsightsanalysis-portrange.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PortRange?: EC2NetworkInsightsAnalysisPortRange;
  /**
   * The IPv4 address range, in CIDR notation.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Cidr?: Value<string>;
  /**
   * Indicates whether to allow or deny traffic that matches the rule.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RuleAction?: Value<string>;
  /**
   * Indicates whether the rule is an outbound rule.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Egress?: Value<boolean>;
  /**
   * The rule number.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RuleNumber?: Value<number>;
  /**
   * The protocol.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Protocol?: Value<string>;
}

/**
 * Describes an potential intermediate component of a feasible path.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-networkinsightsanalysis-alternatepathhint.html}
 **/
export interface EC2NetworkInsightsAnalysisAlternatePathHint {
  /**
   * The Amazon Resource Name (ARN) of the component.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ComponentArn?: Value<string>;
  /**
   * The ID of the component.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ComponentId?: Value<string>;
}

/**
 * Describes a load balancer listener.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-networkinsightsanalysis-analysisloadbalancerlistener.html}
 **/
export interface EC2NetworkInsightsAnalysisAnalysisLoadBalancerListener {
  /**
   * [Classic Load Balancers] The back-end port for the listener.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Minimum_: `0`
   *
   * _Maximum_: `65535`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  InstancePort?: Value<number>;
  /**
   * The port on which the load balancer is listening.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Minimum_: `0`
   *
   * _Maximum_: `65535`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  LoadBalancerPort?: Value<number>;
}

/**
 * Describes an additional detail for a path analysis. For more information, see [Reachability Analyzer additional detail codes](https://docs.aws.amazon.com/vpc/latest/reachability/additional-detail-codes.html).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-networkinsightsanalysis-additionaldetail.html}
 **/
export interface EC2NetworkInsightsAnalysisAdditionalDetail {
  /**
   * The name of the VPC endpoint service.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ServiceName?: Value<string>;
  /**
   * The additional detail code.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AdditionalDetailType?: Value<string>;
  /**
   * The load balancers.
   *
   * _Required_: No
   *
   * _Type_: List of [AnalysisComponent](aws-properties-ec2-networkinsightsanalysis-analysiscomponent.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  LoadBalancers?: List<EC2NetworkInsightsAnalysisAnalysisComponent>;
  /**
   * The path component.
   *
   * _Required_: No
   *
   * _Type_: [AnalysisComponent](aws-properties-ec2-networkinsightsanalysis-analysiscomponent.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Component?: EC2NetworkInsightsAnalysisAnalysisComponent;
}

/**
 * Describes a route table route.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-networkinsightsanalysis-analysisroutetableroute.html}
 **/
export interface EC2NetworkInsightsAnalysisAnalysisRouteTableRoute {
  /**
   * Describes how the route was created. The following are the possible values:
   */
  Origin?: Value<string>;
  /**
   * The prefix of the AWS service.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  destinationPrefixListId?: Value<string>;
  /**
   * The ID of a transit gateway.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TransitGatewayId?: Value<string>;
  /**
   * The ID of a VPC peering connection.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  VpcPeeringConnectionId?: Value<string>;
  /**
   * The ID of the instance, such as a NAT instance.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  instanceId?: Value<string>;
  /**
   * The state. The following are the possible values:
   */
  State?: Value<string>;
  /**
   * The ID of an egress-only internet gateway.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  egressOnlyInternetGatewayId?: Value<string>;
  /**
   * The destination IPv4 address, in CIDR notation.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  destinationCidr?: Value<string>;
  /**
   * The ID of a network interface.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  NetworkInterfaceId?: Value<string>;
  /**
   * The ID of a NAT gateway.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  NatGatewayId?: Value<string>;
  /**
   * The ID of the gateway, such as an internet gateway or virtual private gateway.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  gatewayId?: Value<string>;
}

/**
 * Describes a header. Reflects any changes made by a component as traffic passes through. The fields of an inbound header are null except for the first component of a path.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-networkinsightsanalysis-analysispacketheader.html}
 **/
export interface EC2NetworkInsightsAnalysisAnalysisPacketHeader {
  /**
   * The destination port ranges.
   *
   * _Required_: No
   *
   * _Type_: List of [PortRange](aws-properties-ec2-networkinsightsanalysis-portrange.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DestinationPortRanges?: List<EC2NetworkInsightsAnalysisPortRange>;
  /**
   * The source port ranges.
   *
   * _Required_: No
   *
   * _Type_: List of [PortRange](aws-properties-ec2-networkinsightsanalysis-portrange.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SourcePortRanges?: List<EC2NetworkInsightsAnalysisPortRange>;
  /**
   * The destination addresses.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DestinationAddresses?: List<Value<string>>;
  /**
   * The protocol.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Protocol?: Value<string>;
  /**
   * The source addresses.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SourceAddresses?: List<Value<string>>;
}

/**
 * Describes a path component.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-networkinsightsanalysis-pathcomponent.html}
 **/
export interface EC2NetworkInsightsAnalysisPathComponent {
  /**
   * The additional details.
   *
   * _Required_: No
   *
   * _Type_: List of [AdditionalDetail](aws-properties-ec2-networkinsightsanalysis-additionaldetail.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AdditionalDetails?: List<EC2NetworkInsightsAnalysisAdditionalDetail>;
  /**
   * The inbound header.
   *
   * _Required_: No
   *
   * _Type_: [AnalysisPacketHeader](aws-properties-ec2-networkinsightsanalysis-analysispacketheader.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  InboundHeader?: EC2NetworkInsightsAnalysisAnalysisPacketHeader;
  /**
   * The component VPC.
   *
   * _Required_: No
   *
   * _Type_: [AnalysisComponent](aws-properties-ec2-networkinsightsanalysis-analysiscomponent.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Vpc?: EC2NetworkInsightsAnalysisAnalysisComponent;
  /**
   * The destination VPC.
   *
   * _Required_: No
   *
   * _Type_: [AnalysisComponent](aws-properties-ec2-networkinsightsanalysis-analysiscomponent.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DestinationVpc?: EC2NetworkInsightsAnalysisAnalysisComponent;
  /**
   * The security group rule.
   *
   * _Required_: No
   *
   * _Type_: [AnalysisSecurityGroupRule](aws-properties-ec2-networkinsightsanalysis-analysissecuritygrouprule.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SecurityGroupRule?: EC2NetworkInsightsAnalysisAnalysisSecurityGroupRule;
  /**
   * The transit gateway.
   *
   * _Required_: No
   *
   * _Type_: [AnalysisComponent](aws-properties-ec2-networkinsightsanalysis-analysiscomponent.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TransitGateway?: EC2NetworkInsightsAnalysisAnalysisComponent;
  /**
   * The load balancer listener.
   *
   * _Required_: No
   *
   * _Type_: [AnalysisComponent](aws-properties-ec2-networkinsightsanalysis-analysiscomponent.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ElasticLoadBalancerListener?: EC2NetworkInsightsAnalysisAnalysisComponent;
  /**
   * The explanation codes.
   *
   * _Required_: No
   *
   * _Type_: List of [Explanation](aws-properties-ec2-networkinsightsanalysis-explanation.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Explanations?: List<EC2NetworkInsightsAnalysisExplanation>;
  /**
   * The name of the VPC endpoint service.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ServiceName?: Value<string>;
  /**
   * The sequence number.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SequenceNumber?: Value<number>;
  /**
   * The source VPC.
   *
   * _Required_: No
   *
   * _Type_: [AnalysisComponent](aws-properties-ec2-networkinsightsanalysis-analysiscomponent.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SourceVpc?: EC2NetworkInsightsAnalysisAnalysisComponent;
  /**
   * The outbound header.
   *
   * _Required_: No
   *
   * _Type_: [AnalysisPacketHeader](aws-properties-ec2-networkinsightsanalysis-analysispacketheader.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  OutboundHeader?: EC2NetworkInsightsAnalysisAnalysisPacketHeader;
  /**
   * The network ACL rule.
   *
   * _Required_: No
   *
   * _Type_: [AnalysisAclRule](aws-properties-ec2-networkinsightsanalysis-analysisaclrule.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AclRule?: EC2NetworkInsightsAnalysisAnalysisAclRule;
  /**
   * The route in a transit gateway route table.
   *
   * _Required_: No
   *
   * _Type_: [TransitGatewayRouteTableRoute](aws-properties-ec2-networkinsightsanalysis-transitgatewayroutetableroute.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TransitGatewayRouteTableRoute?: EC2NetworkInsightsAnalysisTransitGatewayRouteTableRoute;
  /**
   * The component.
   *
   * _Required_: No
   *
   * _Type_: [AnalysisComponent](aws-properties-ec2-networkinsightsanalysis-analysiscomponent.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Component?: EC2NetworkInsightsAnalysisAnalysisComponent;
  /**
   * The subnet.
   *
   * _Required_: No
   *
   * _Type_: [AnalysisComponent](aws-properties-ec2-networkinsightsanalysis-analysiscomponent.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Subnet?: EC2NetworkInsightsAnalysisAnalysisComponent;
  /**
   * The route table route.
   *
   * _Required_: No
   *
   * _Type_: [AnalysisRouteTableRoute](aws-properties-ec2-networkinsightsanalysis-analysisroutetableroute.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RouteTableRoute?: EC2NetworkInsightsAnalysisAnalysisRouteTableRoute;
}

/**
 * Describes a path component.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-networkinsightsanalysis-analysiscomponent.html}
 **/
export interface EC2NetworkInsightsAnalysisAnalysisComponent {
  /**
   * The ID of the component.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Id?: Value<string>;
  /**
   * The Amazon Resource Name (ARN) of the component.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Arn?: Value<string>;
}

/**
 * Describes a range of ports.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-networkinsightsanalysis-portrange.html}
 **/
export interface EC2NetworkInsightsAnalysisPortRange {
  /**
   * The first port in the range.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  From?: Value<number>;
  /**
   * The last port in the range.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  To?: Value<number>;
}

/**
 * Describes a route in a transit gateway route table.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-networkinsightsanalysis-transitgatewayroutetableroute.html}
 **/
export interface EC2NetworkInsightsAnalysisTransitGatewayRouteTableRoute {
  /**
   * The ID of the prefix list.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PrefixListId?: Value<string>;
  /**
   * The ID of the resource for the route attachment.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ResourceId?: Value<string>;
  /**
   * The state of the route.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  State?: Value<string>;
  /**
   * The resource type for the route attachment.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ResourceType?: Value<string>;
  /**
   * The route origin. The following are the possible values:
   */
  RouteOrigin?: Value<string>;
  /**
   * The CIDR block used for destination matches.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DestinationCidr?: Value<string>;
  /**
   * The ID of the route attachment.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AttachmentId?: Value<string>;
}

/**
 * Describes an explanation code for an unreachable path. For more information, see [Reachability Analyzer explanation codes](https://docs.aws.amazon.com/vpc/latest/reachability/explanation-codes.html).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-networkinsightsanalysis-explanation.html}
 **/
export interface EC2NetworkInsightsAnalysisExplanation {
  /**
   * The VPN gateway.
   *
   * _Required_: No
   *
   * _Type_: [AnalysisComponent](aws-properties-ec2-networkinsightsanalysis-analysiscomponent.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  VpnGateway?: EC2NetworkInsightsAnalysisAnalysisComponent;
  /**
   * The packet field.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PacketField?: Value<string>;
  /**
   * The transit gateway attachment.
   *
   * _Required_: No
   *
   * _Type_: [AnalysisComponent](aws-properties-ec2-networkinsightsanalysis-analysiscomponent.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TransitGatewayAttachment?: EC2NetworkInsightsAnalysisAnalysisComponent;
  /**
   * The protocols.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Protocols?: List<Value<string>>;
  /**
   * The route table.
   *
   * _Required_: No
   *
   * _Type_: [AnalysisComponent](aws-properties-ec2-networkinsightsanalysis-analysiscomponent.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  IngressRouteTable?: EC2NetworkInsightsAnalysisAnalysisComponent;
  /**
   * The listener for a Classic Load Balancer.
   *
   * _Required_: No
   *
   * _Type_: [AnalysisLoadBalancerListener](aws-properties-ec2-networkinsightsanalysis-analysisloadbalancerlistener.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ClassicLoadBalancerListener?: EC2NetworkInsightsAnalysisAnalysisLoadBalancerListener;
  /**
   * The VPC peering connection.
   *
   * _Required_: No
   *
   * _Type_: [AnalysisComponent](aws-properties-ec2-networkinsightsanalysis-analysiscomponent.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  VpcPeeringConnection?: EC2NetworkInsightsAnalysisAnalysisComponent;
  /**
   * The IPv4 address, in CIDR notation.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `0`
   *
   * _Maximum_: `15`
   *
   * _Pattern_: `^([0-9]{1,3}.){3}[0-9]{1,3}$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Address?: Value<string>;
  /**
   * The port.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Minimum_: `0`
   *
   * _Maximum_: `65535`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Port?: Value<number>;
  /**
   * The IPv4 addresses, in CIDR notation.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Addresses?: List<Value<string>>;
  /**
   * The load balancer listener.
   *
   * _Required_: No
   *
   * _Type_: [AnalysisComponent](aws-properties-ec2-networkinsightsanalysis-analysiscomponent.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ElasticLoadBalancerListener?: EC2NetworkInsightsAnalysisAnalysisComponent;
  /**
   * The transit gateway route table.
   *
   * _Required_: No
   *
   * _Type_: [AnalysisComponent](aws-properties-ec2-networkinsightsanalysis-analysiscomponent.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TransitGatewayRouteTable?: EC2NetworkInsightsAnalysisAnalysisComponent;
  /**
   * The explanation code.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ExplanationCode?: Value<string>;
  /**
   * The internet gateway.
   *
   * _Required_: No
   *
   * _Type_: [AnalysisComponent](aws-properties-ec2-networkinsightsanalysis-analysiscomponent.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  InternetGateway?: EC2NetworkInsightsAnalysisAnalysisComponent;
  /**
   * The source VPC.
   *
   * _Required_: No
   *
   * _Type_: [AnalysisComponent](aws-properties-ec2-networkinsightsanalysis-analysiscomponent.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SourceVpc?: EC2NetworkInsightsAnalysisAnalysisComponent;
  /**
   * The resource to which the component is attached.
   *
   * _Required_: No
   *
   * _Type_: [AnalysisComponent](aws-properties-ec2-networkinsightsanalysis-analysiscomponent.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AttachedTo?: EC2NetworkInsightsAnalysisAnalysisComponent;
  /**
   * The prefix list.
   *
   * _Required_: No
   *
   * _Type_: [AnalysisComponent](aws-properties-ec2-networkinsightsanalysis-analysiscomponent.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PrefixList?: EC2NetworkInsightsAnalysisAnalysisComponent;
  /**
   * The transit gateway route table route.
   *
   * _Required_: No
   *
   * _Type_: [TransitGatewayRouteTableRoute](aws-properties-ec2-networkinsightsanalysis-transitgatewayroutetableroute.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TransitGatewayRouteTableRoute?: EC2NetworkInsightsAnalysisTransitGatewayRouteTableRoute;
  /**
   * The Region for the component.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Pattern_: `[a-z]{2}-[a-z]+-[1-9]+`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ComponentRegion?: Value<string>;
  /**
   * The target group.
   *
   * _Required_: No
   *
   * _Type_: [AnalysisComponent](aws-properties-ec2-networkinsightsanalysis-analysiscomponent.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  LoadBalancerTargetGroup?: EC2NetworkInsightsAnalysisAnalysisComponent;
  /**
   * The network interface.
   *
   * _Required_: No
   *
   * _Type_: [AnalysisComponent](aws-properties-ec2-networkinsightsanalysis-analysiscomponent.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  NetworkInterface?: EC2NetworkInsightsAnalysisAnalysisComponent;
  /**
   * The customer gateway.
   *
   * _Required_: No
   *
   * _Type_: [AnalysisComponent](aws-properties-ec2-networkinsightsanalysis-analysiscomponent.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CustomerGateway?: EC2NetworkInsightsAnalysisAnalysisComponent;
  /**
   * The destination VPC.
   *
   * _Required_: No
   *
   * _Type_: [AnalysisComponent](aws-properties-ec2-networkinsightsanalysis-analysiscomponent.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DestinationVpc?: EC2NetworkInsightsAnalysisAnalysisComponent;
  /**
   * The security group.
   *
   * _Required_: No
   *
   * _Type_: [AnalysisComponent](aws-properties-ec2-networkinsightsanalysis-analysiscomponent.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SecurityGroup?: EC2NetworkInsightsAnalysisAnalysisComponent;
  /**
   * The transit gateway.
   *
   * _Required_: No
   *
   * _Type_: [AnalysisComponent](aws-properties-ec2-networkinsightsanalysis-analysiscomponent.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TransitGateway?: EC2NetworkInsightsAnalysisAnalysisComponent;
  /**
   * The route table.
   *
   * _Required_: No
   *
   * _Type_: [AnalysisComponent](aws-properties-ec2-networkinsightsanalysis-analysiscomponent.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RouteTable?: EC2NetworkInsightsAnalysisAnalysisComponent;
  /**
   * The state.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  State?: Value<string>;
  /**
   * The listener port of the load balancer.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Minimum_: `0`
   *
   * _Maximum_: `65535`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  LoadBalancerListenerPort?: Value<number>;
  /**
   * The VPC endpoint.
   *
   * _Required_: No
   *
   * _Type_: [AnalysisComponent](aws-properties-ec2-networkinsightsanalysis-analysiscomponent.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  vpcEndpoint?: EC2NetworkInsightsAnalysisAnalysisComponent;
  /**
   * The subnet.
   *
   * _Required_: No
   *
   * _Type_: [AnalysisComponent](aws-properties-ec2-networkinsightsanalysis-analysiscomponent.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Subnet?: EC2NetworkInsightsAnalysisAnalysisComponent;
  /**
   * The CIDR ranges.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Cidrs?: List<Value<string>>;
  /**
   * The destination.
   *
   * _Required_: No
   *
   * _Type_: [AnalysisComponent](aws-properties-ec2-networkinsightsanalysis-analysiscomponent.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Destination?: EC2NetworkInsightsAnalysisAnalysisComponent;
  /**
   * The security groups.
   *
   * _Required_: No
   *
   * _Type_: List of [AnalysisComponent](aws-properties-ec2-networkinsightsanalysis-analysiscomponent.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SecurityGroups?: List<EC2NetworkInsightsAnalysisAnalysisComponent>;
  /**
   * The AWS account for the component.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Pattern_: `d{12}`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ComponentAccount?: Value<string>;
  /**
   * The VPN connection.
   *
   * _Required_: No
   *
   * _Type_: [AnalysisComponent](aws-properties-ec2-networkinsightsanalysis-analysiscomponent.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  VpnConnection?: EC2NetworkInsightsAnalysisAnalysisComponent;
  /**
   * The component VPC.
   *
   * _Required_: No
   *
   * _Type_: [AnalysisComponent](aws-properties-ec2-networkinsightsanalysis-analysiscomponent.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Vpc?: EC2NetworkInsightsAnalysisAnalysisComponent;
  /**
   * The NAT gateway.
   *
   * _Required_: No
   *
   * _Type_: [AnalysisComponent](aws-properties-ec2-networkinsightsanalysis-analysiscomponent.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  NatGateway?: EC2NetworkInsightsAnalysisAnalysisComponent;
  /**
   * The direction. The following are the possible values:
   */
  Direction?: Value<string>;
  /**
   * The target port.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Minimum_: `0`
   *
   * _Maximum_: `65535`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  LoadBalancerTargetPort?: Value<number>;
  /**
   * The target.
   *
   * _Required_: No
   *
   * _Type_: [AnalysisLoadBalancerTarget](aws-properties-ec2-networkinsightsanalysis-analysisloadbalancertarget.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  LoadBalancerTarget?: EC2NetworkInsightsAnalysisAnalysisLoadBalancerTarget;
  /**
   * The target groups.
   *
   * _Required_: No
   *
   * _Type_: List of [AnalysisComponent](aws-properties-ec2-networkinsightsanalysis-analysiscomponent.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  LoadBalancerTargetGroups?: List<EC2NetworkInsightsAnalysisAnalysisComponent>;
  /**
   * The component.
   *
   * _Required_: No
   *
   * _Type_: [AnalysisComponent](aws-properties-ec2-networkinsightsanalysis-analysiscomponent.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Component?: EC2NetworkInsightsAnalysisAnalysisComponent;
  /**
   * The missing component.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MissingComponent?: Value<string>;
  /**
   * The route table route.
   *
   * _Required_: No
   *
   * _Type_: [AnalysisRouteTableRoute](aws-properties-ec2-networkinsightsanalysis-analysisroutetableroute.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RouteTableRoute?: EC2NetworkInsightsAnalysisAnalysisRouteTableRoute;
  /**
   * The Availability Zones.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AvailabilityZones?: List<Value<string>>;
  /**
   * The port ranges.
   *
   * _Required_: No
   *
   * _Type_: List of [PortRange](aws-properties-ec2-networkinsightsanalysis-portrange.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PortRanges?: List<EC2NetworkInsightsAnalysisPortRange>;
  /**
   * The network ACL.
   *
   * _Required_: No
   *
   * _Type_: [AnalysisComponent](aws-properties-ec2-networkinsightsanalysis-analysiscomponent.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Acl?: EC2NetworkInsightsAnalysisAnalysisComponent;
  /**
   * The security group rule.
   *
   * _Required_: No
   *
   * _Type_: [AnalysisSecurityGroupRule](aws-properties-ec2-networkinsightsanalysis-analysissecuritygrouprule.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SecurityGroupRule?: EC2NetworkInsightsAnalysisAnalysisSecurityGroupRule;
  /**
   * The route table for the subnet.
   *
   * _Required_: No
   *
   * _Type_: [AnalysisComponent](aws-properties-ec2-networkinsightsanalysis-analysiscomponent.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SubnetRouteTable?: EC2NetworkInsightsAnalysisAnalysisComponent;
  /**
   * The Amazon Resource Name (ARN) of the load balancer.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `1283`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  LoadBalancerArn?: Value<string>;
  /**
   * The network ACL rule.
   *
   * _Required_: No
   *
   * _Type_: [AnalysisAclRule](aws-properties-ec2-networkinsightsanalysis-analysisaclrule.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AclRule?: EC2NetworkInsightsAnalysisAnalysisAclRule;
}

/**
 * Describes a load balancer target.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-networkinsightsanalysis-analysisloadbalancertarget.html}
 **/
export interface EC2NetworkInsightsAnalysisAnalysisLoadBalancerTarget {
  /**
   * The IP address.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `0`
   *
   * _Maximum_: `15`
   *
   * _Pattern_: `^([0-9]{1,3}.){3}[0-9]{1,3}$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Address?: Value<string>;
  /**
   * Information about the instance.
   *
   * _Required_: No
   *
   * _Type_: [AnalysisComponent](aws-properties-ec2-networkinsightsanalysis-analysiscomponent.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Instance?: EC2NetworkInsightsAnalysisAnalysisComponent;
  /**
   * The port on which the target is listening.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Minimum_: `0`
   *
   * _Maximum_: `65535`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Port?: Value<number>;
  /**
   * The Availability Zone.
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
 * Describes a security group rule.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-networkinsightsanalysis-analysissecuritygrouprule.html}
 **/
export interface EC2NetworkInsightsAnalysisAnalysisSecurityGroupRule {
  /**
   * The port range.
   *
   * _Required_: No
   *
   * _Type_: [PortRange](aws-properties-ec2-networkinsightsanalysis-portrange.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PortRange?: EC2NetworkInsightsAnalysisPortRange;
  /**
   * The IPv4 address range, in CIDR notation.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Cidr?: Value<string>;
  /**
   * The prefix list ID.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PrefixListId?: Value<string>;
  /**
   * The security group ID.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SecurityGroupId?: Value<string>;
  /**
   * The protocol name.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Protocol?: Value<string>;
  /**
   * The direction. The following are the possible values:
   */
  Direction?: Value<string>;
}
export interface EC2NetworkInsightsAnalysisProperties {
  /**
   * The ID of the path.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  NetworkInsightsPathId: Value<string>;
  /**
   * The Amazon Resource Names (ARN) of the resources that the path must traverse.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  FilterInArns?: List<Value<string>>;
  /**
   * The member accounts that contain resources that the path can traverse.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AdditionalAccounts?: List<Value<string>>;
  /**
   * The tags to apply.
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
 * Specifies a network insights analysis.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-networkinsightsanalysis.html}
 */
export interface EC2NetworkInsightsAnalysisResource {
  Type: 'AWS::EC2::NetworkInsightsAnalysis';
  Properties: EC2NetworkInsightsAnalysisProperties;
}
