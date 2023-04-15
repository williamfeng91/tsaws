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
 * In a [CreateResolverEndpoint](https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_CreateResolverEndpoint.html) request, the IP address that DNS queries originate from (for outbound endpoints) or that you forward DNS queries to (for inbound endpoints). `IpAddressRequest` also includes the ID of the subnet that contains the IP address.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53resolver-resolverendpoint-ipaddressrequest.html}
 **/
export interface Route53ResolverResolverEndpointIpAddressRequest {
  /**
   * The IPv6 address that you want to use for DNS queries.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `7`
   *
   * _Maximum_: `39`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Ipv6?: Value<string>;
  /**
   * The IPv4 address that you want to use for DNS queries.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `7`
   *
   * _Maximum_: `36`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Ip?: Value<string>;
  /**
   * The ID of the subnet that contains the IP address.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `32`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SubnetId: Value<string>;
}
export interface Route53ResolverResolverEndpointProperties {
  /**
   * The subnets and IP addresses in your VPC that DNS queries originate from (for outbound endpoints) or that you forward DNS queries to (for inbound endpoints). The subnet ID uniquely identifies a VPC.
   *
   * _Required_: Yes
   *
   * _Type_: List of [IpAddressRequest](aws-properties-route53resolver-resolverendpoint-ipaddressrequest.md)
   *
   * _Maximum_: `20`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  IpAddresses: List<Route53ResolverResolverEndpointIpAddressRequest>;
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  OutpostArn?: Value<string>;
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  PreferredInstanceType?: Value<string>;
  /**
   * The Resolver endpoint IP address type.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `DUALSTACK | IPV4 | IPV6`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ResolverEndpointType?: Value<string>;
  /**
   * Indicates whether the Resolver endpoint allows inbound or outbound DNS queries:
   */
  Direction: Value<string>;
  /**
   * The ID of one or more security groups that control access to this VPC. The security group must include one or more inbound rules (for inbound endpoints) or outbound rules (for outbound endpoints). Inbound and outbound rules must allow TCP and UDP access. For inbound access, open port 53. For outbound access, open the port that you're using for DNS queries on your network.
   *
   * _Required_: Yes
   *
   * _Type_: List of String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  SecurityGroupIds: List<Value<string>>;
  /**
   * Route 53 Resolver doesn't support updating tags through CloudFormation.
   *
   * _Required_: No
   *
   * _Type_: List of [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)
   *
   * _Maximum_: `200`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Tags?: List<ResourceTag>;
  /**
   * A friendly name that lets you easily find a configuration in the Resolver dashboard in the Route 53 console.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Maximum_: `64`
   *
   * _Pattern_: `(?!^[0-9]+$)([a-zA-Z0-9-_' ']+)`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Name?: Value<string>;
}

/**
 * Creates a Resolver endpoint. There are two types of Resolver endpoints, inbound and outbound:
 *
 * **Important**
 *
 * You cannot update `ResolverEndpointType` and `IpAddresses` in the same request.
 *
 * When you update a dual-stack IP address, you must update both IP addresses. You can’t update only an IPv4 or IPv6 and keep an existing IP address.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53resolver-resolverendpoint.html}
 */
export interface Route53ResolverResolverEndpointResource {
  Type: 'AWS::Route53Resolver::ResolverEndpoint';
  Properties: Route53ResolverResolverEndpointProperties;
}
