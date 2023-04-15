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

/**
 * Specifies the `ByteMatchSet`, `IPSet`, `SqlInjectionMatchSet`, `XssMatchSet`, `RegexMatchSet`, `GeoMatchSet`, and `SizeConstraintSet` objects that you want to add to a `Rule` and, for each object, indicates whether you want to negate the settings, for example, requests that do NOT originate from the IP address 192.0.2.44.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafregional-ratebasedrule-predicate.html}
 **/
export interface WAFRegionalRateBasedRulePredicate {
  /**
   * The type of predicate in a `Rule`, such as `ByteMatch` or `IPSet`.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Allowed values_: `ByteMatch | GeoMatch | IPMatch | RegexMatch | SizeConstraint | SqlInjectionMatch | XssMatch`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Type: Value<string>;
  /**
   * A unique identifier for a predicate in a `Rule`, such as `ByteMatchSetId` or `IPSetId`. The ID is returned by the corresponding `Create` or `List` command.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `128`
   *
   * _Pattern_: `.*S.*`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DataId: Value<string>;
  /**
   * Set `Negated` to `False` if you want AWS WAF to allow, block, or count requests based on the settings in the specified `ByteMatchSet`, `IPSet`, `SqlInjectionMatchSet`, `XssMatchSet`, `RegexMatchSet`, `GeoMatchSet`, or `SizeConstraintSet`. For example, if an `IPSet` includes the IP address `192.0.2.44`, AWS WAF will allow or block requests based on that IP address.
   *
   * Set `Negated` to `True` if you want AWS WAF to allow or block a request based on the negation of the settings in the `ByteMatchSet`, `IPSet`, `SqlInjectionMatchSet`, `XssMatchSet`, `RegexMatchSet`, `GeoMatchSet`, or `SizeConstraintSet`>. For example, if an `IPSet` includes the IP address `192.0.2.44`, AWS WAF will allow, block, or count requests based on all IP addresses _except_ `192.0.2.44`.
   *
   * _Required_: Yes
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Negated: Value<boolean>;
}
export interface WAFRegionalRateBasedRuleProperties {
  /**
   * A name for the metrics for a `RateBasedRule`. The name can contain only alphanumeric characters (A-Z, a-z, 0-9), with maximum length 128 and minimum length one. It can't contain whitespace or metric names reserved for AWS WAF, including "All" and "Default_Action." You can't change the name of the metric after you create the `RateBasedRule`.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `128`
   *
   * _Pattern_: `.*S.*`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  MetricName: Value<string>;
  /**
   * The maximum number of requests, which have an identical value in the field specified by the `RateKey`, allowed in a five-minute period. If the number of requests exceeds the `RateLimit` and the other predicates specified in the rule are also met, AWS WAF triggers the action that is specified for this rule.
   *
   * _Required_: Yes
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RateLimit: Value<number>;
  /**
   * The `Predicates` object contains one `Predicate` element for each `ByteMatchSet`, `IPSet`, or `SqlInjectionMatchSet>` object that you want to include in a `RateBasedRule`.
   *
   * _Required_: No
   *
   * _Type_: List of [Predicate](aws-properties-wafregional-ratebasedrule-predicate.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MatchPredicates?: List<WAFRegionalRateBasedRulePredicate>;
  /**
   * The field that AWS WAF uses to determine if requests are likely arriving from single source and thus subject to rate monitoring. The only valid value for `RateKey` is `IP`. `IP` indicates that requests arriving from the same IP address are subject to the `RateLimit` that is specified in the `RateBasedRule`.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Allowed values_: `IP`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  RateKey: Value<string>;
  /**
   * A friendly name or description for a `RateBasedRule`. You can't change the name of a `RateBasedRule` after you create it.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `128`
   *
   * _Pattern_: `.*S.*`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Name: Value<string>;
}

/**
 * **Note**
 *
 * This is ** AWS WAF Classic** documentation. For more information, see [AWS WAF Classic](https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html) in the developer guide.
 *
 * **For the latest version of AWS WAF **, use the AWS WAFV2 API and see the [AWS WAF Developer Guide](https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html). With the latest version, AWS WAF has a single set of endpoints for regional and global use.
 *
 * A `RateBasedRule` is identical to a regular `Rule`, with one addition: a `RateBasedRule` counts the number of requests that arrive from a specified IP address every five minutes. For example, based on recent requests that you've seen from an attacker, you might create a `RateBasedRule` that includes the following conditions:
 *
 * In the rule, you also define the rate limit as 15,000.
 *
 * Requests that meet both of these conditions and exceed 15,000 requests every five minutes trigger the rule's action (block or count), which is defined in the web ACL.
 *
 * Note you can only create rate-based rules using an AWS CloudFormation template. To add the rate-based rules created through AWS CloudFormation to a web ACL, use the AWS WAF console, API, or command line interface (CLI). For more information, see [UpdateWebACL](https://docs.aws.amazon.com/waf/latest/APIReference/API_regional_UpdateWebACL.html).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafregional-ratebasedrule.html}
 */
export interface WAFRegionalRateBasedRuleResource {
  Type: 'AWS::WAFRegional::RateBasedRule';
  Properties: WAFRegionalRateBasedRuleProperties;
}
