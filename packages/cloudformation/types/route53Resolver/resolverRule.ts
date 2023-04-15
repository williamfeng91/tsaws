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
 * In a [CreateResolverRule](https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_CreateResolverRule.html) request, an array of the IPs that you want to forward DNS queries to.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53resolver-resolverrule-targetaddress.html}
 **/
export interface Route53ResolverResolverRuleTargetAddress {
  /**
   * One IPv6 address that you want to forward DNS queries to.
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
   * One IPv4 address that you want to forward DNS queries to.
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
   * The port at `Ip` that you want to forward DNS queries to.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `0`
   *
   * _Maximum_: `65535`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Port?: Value<string>;
}
export interface Route53ResolverResolverRuleProperties {
  /**
   * The ID of the endpoint that the rule is associated with.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `64`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ResolverEndpointId?: Value<string>;
  /**
   * DNS queries for this domain name are forwarded to the IP addresses that are specified in `TargetIps`. If a query matches multiple Resolver rules (example.com and www.example.com), the query is routed using the Resolver rule that contains the most specific domain name (www.example.com).
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `256`
   *
   * _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
   */
  DomainName: Value<string>;
  /**
   * When you want to forward DNS queries for specified domain name to resolvers on your network, specify `FORWARD`.
   *
   * When you have a forwarding rule to forward DNS queries for a domain to your network and you want Resolver to process queries for a subdomain of that domain, specify `SYSTEM`.
   *
   * For example, to forward DNS queries for example.com to resolvers on your network, you create a rule and specify `FORWARD` for `RuleType`. To then have Resolver process queries for apex.example.com, you create a rule and specify `SYSTEM` for `RuleType`.
   *
   * Currently, only Resolver can create rules that have a value of `RECURSIVE` for `RuleType`.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Allowed values_: `FORWARD | RECURSIVE | SYSTEM`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  RuleType: Value<string>;
  /**
   * Tags help organize and categorize your Resolver rules. Each tag consists of a key and an optional value, both of which you define.
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
   * An array that contains the IP addresses and ports that an outbound endpoint forwards DNS queries to. Typically, these are the IP addresses of DNS resolvers on your network.
   *
   * _Required_: No
   *
   * _Type_: List of [TargetAddress](aws-properties-route53resolver-resolverrule-targetaddress.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TargetIps?: List<Route53ResolverResolverRuleTargetAddress>;
  /**
   * The name for the Resolver rule, which you specified when you created the Resolver rule.
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
 * For DNS queries that originate in your VPCs, specifies which Resolver endpoint the queries pass through, one domain name that you want to forward to your network, and the IP addresses of the DNS resolvers in your network.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53resolver-resolverrule.html}
 */
export interface Route53ResolverResolverRuleResource {
  Type: 'AWS::Route53Resolver::ResolverRule';
  Properties: Route53ResolverResolverRuleProperties;
}
