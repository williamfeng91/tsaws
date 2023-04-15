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
 *
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-waf-webacl-action.html}
 **/
export interface WAFWebACLWafAction {
  Type: Value<string>;
}

/**
 *
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-waf-webacl-rules.html}
 **/
export interface WAFWebACLActivatedRule {
  Action?: WAFWebACLWafAction;
  Priority: Value<number>;
  RuleId: Value<string>;
}
export interface WAFWebACLProperties {
  /**
   * The action to perform if none of the `Rules` contained in the `WebACL` match. The action is specified by the `WafAction` object.
   *
   * _Required_: Yes
   *
   * _Type_: [WafAction](aws-properties-waf-webacl-action.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DefaultAction: WAFWebACLWafAction;
  /**
   * The name of the metrics for this `WebACL`. The name can contain only alphanumeric characters (A-Z, a-z, 0-9), with maximum length 128 and minimum length one. It can't contain whitespace or metric names reserved for AWS WAF, including "All" and "Default_Action." You can't change `MetricName` after you create the `WebACL`.
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
   * A friendly name or description of the `WebACL`. You can't change the name of a `WebACL` after you create it.
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
  /**
   * An array that contains the action for each `Rule` in a `WebACL`, the priority of the `Rule`, and the ID of the `Rule`.
   *
   * _Required_: No
   *
   * _Type_: List of [ActivatedRule](aws-properties-waf-webacl-rules.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Rules?: List<WAFWebACLActivatedRule>;
}

/**
 * **Note**
 *
 * This is ** AWS WAF Classic** documentation. For more information, see [AWS WAF Classic](https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html) in the developer guide.
 *
 * **For the latest version of AWS WAF **, use the AWS WAFV2 API and see the [AWS WAF Developer Guide](https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html). With the latest version, AWS WAF has a single set of endpoints for regional and global use.
 *
 * Contains the `Rules` that identify the requests that you want to allow, block, or count. In a `WebACL`, you also specify a default action (`ALLOW` or `BLOCK`), and the action for each `Rule` that you add to a `WebACL`, for example, block requests from specified IP addresses or block requests from specified referrers. You also associate the `WebACL` with a Amazon CloudFront distribution to identify the requests that you want AWS WAF to filter. If you add more than one `Rule` to a `WebACL`, a request needs to match only one of the specifications to be allowed, blocked, or counted.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-waf-webacl.html}
 */
export interface WAFWebACLResource {
  Type: 'AWS::WAF::WebACL';
  Properties: WAFWebACLProperties;
}
