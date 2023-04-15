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
 *
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-loadbalancer-loadbalancerattributes.html}
 **/
export interface ElasticLoadBalancingV2LoadBalancerLoadBalancerAttribute {
  Key?: Value<string>;
  Value?: Value<string>;
}

/**
 * Specifies a subnet for a load balancer.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-loadbalancer-subnetmapping.html}
 **/
export interface ElasticLoadBalancingV2LoadBalancerSubnetMapping {
  /**
   * [Network Load Balancers] The allocation ID of the Elastic IP address for an internet-facing load balancer.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AllocationId?: Value<string>;
  /**
   * [Network Load Balancers] The IPv6 address.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  IPv6Address?: Value<string>;
  /**
   * [Network Load Balancers] The private IPv4 address for an internal load balancer.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PrivateIPv4Address?: Value<string>;
  /**
   * The ID of the subnet.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SubnetId: Value<string>;
}
export interface ElasticLoadBalancingV2LoadBalancerProperties {
  /**
   * The IP address type. The possible values are `ipv4` (for IPv4 addresses) and `dualstack` (for IPv4 and IPv6 addresses). You can’t specify `dualstack` for a load balancer with a UDP or TCP_UDP listener.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `dualstack | ipv4`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  IpAddressType?: Value<string>;
  /**
   * The load balancer attributes.
   *
   * _Required_: No
   *
   * _Type_: List of [LoadBalancerAttribute](aws-properties-elasticloadbalancingv2-loadbalancer-loadbalancerattributes.md)
   *
   * _Maximum_: `20`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  LoadBalancerAttributes?: List<ElasticLoadBalancingV2LoadBalancerLoadBalancerAttribute>;
  /**
   * The name of the load balancer. This name must be unique per region per account, can have a maximum of 32 characters, must contain only alphanumeric characters or hyphens, must not begin or end with a hyphen, and must not begin with "internal-".
   *
   * If you don't specify a name, AWS CloudFormation generates a unique physical ID for the load balancer. If you specify a name, you cannot perform updates that require replacement of this resource, but you can perform other updates. To replace the resource, specify a new name.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Name?: Value<string>;
  /**
   * The nodes of an Internet-facing load balancer have public IP addresses. The DNS name of an Internet-facing load balancer is publicly resolvable to the public IP addresses of the nodes. Therefore, Internet-facing load balancers can route requests from clients over the internet.
   *
   * The nodes of an internal load balancer have only private IP addresses. The DNS name of an internal load balancer is publicly resolvable to the private IP addresses of the nodes. Therefore, internal load balancers can route requests only from clients with access to the VPC for the load balancer.
   *
   * The default is an Internet-facing load balancer.
   *
   * You cannot specify a scheme for a Gateway Load Balancer.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `internal | internet-facing`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Scheme?: Value<string>;
  /**
   * [Application Load Balancers] The IDs of the security groups for the load balancer.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SecurityGroups?: List<Value<string>>;
  /**
   * The IDs of the public subnets. You can specify only one subnet per Availability Zone. You must specify either subnets or subnet mappings, but not both.
   *
   * [Application Load Balancers] You must specify subnets from at least two Availability Zones. You cannot specify Elastic IP addresses for your subnets.
   *
   * [Application Load Balancers on Outposts] You must specify one Outpost subnet.
   *
   * [Application Load Balancers on Local Zones] You can specify subnets from one or more Local Zones.
   *
   * [Network Load Balancers] You can specify subnets from one or more Availability Zones. You can specify one Elastic IP address per subnet if you need static IP addresses for your internet-facing load balancer. For internal load balancers, you can specify one private IP address per subnet from the IPv4 range of the subnet. For internet-facing load balancer, you can specify one IPv6 address per subnet.
   *
   * [Gateway Load Balancers] You can specify subnets from one or more Availability Zones. You cannot specify Elastic IP addresses for your subnets.
   *
   * _Required_: Conditional
   *
   * _Type_: List of [SubnetMapping](aws-properties-elasticloadbalancingv2-loadbalancer-subnetmapping.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SubnetMappings?: List<ElasticLoadBalancingV2LoadBalancerSubnetMapping>;
  /**
   * The IDs of the public subnets. You can specify only one subnet per Availability Zone. You must specify either subnets or subnet mappings, but not both. To specify an Elastic IP address, specify subnet mappings instead of subnets.
   *
   * [Application Load Balancers] You must specify subnets from at least two Availability Zones.
   *
   * [Application Load Balancers on Outposts] You must specify one Outpost subnet.
   *
   * [Application Load Balancers on Local Zones] You can specify subnets from one or more Local Zones.
   *
   * [Network Load Balancers] You can specify subnets from one or more Availability Zones.
   *
   * [Gateway Load Balancers] You can specify subnets from one or more Availability Zones.
   *
   * _Required_: Conditional
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Subnets?: List<Value<string>>;
  /**
   * The tags to assign to the load balancer.
   *
   * _Required_: No
   *
   * _Type_: List of [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Tags?: List<ResourceTag>;
  /**
   * The type of load balancer. The default is `application`.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `application | gateway | network`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Type?: Value<string>;
}

/**
 * Specifies an Application Load Balancer, a Network Load Balancer, or a Gateway Load Balancer.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancingv2-loadbalancer.html}
 */
export interface ElasticLoadBalancingV2LoadBalancerResource {
  Type: 'AWS::ElasticLoadBalancingV2::LoadBalancer';
  Properties: ElasticLoadBalancingV2LoadBalancerProperties;
}
