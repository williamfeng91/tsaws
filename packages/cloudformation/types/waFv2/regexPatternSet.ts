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

export interface WAFv2RegexPatternSetProperties {
  /**
   * A description of the set that helps with identification.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `256`
   *
   * _Pattern_: `^[w+=:#@/-,.][w+=:#@/-,.s]+[w+=:#@/-,.]$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Description?: Value<string>;
  /**
   * The regular expression patterns in the set.
   *
   * _Required_: Yes
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RegularExpressionList: List<Value<string>>;
  /**
   * Specifies whether this is for an Amazon CloudFront distribution or for a regional application. A regional application can be an Application Load Balancer (ALB), an Amazon API Gateway REST API, an AWS AppSync GraphQL API, an Amazon Cognito user pool, or an AWS App Runner service. Valid Values are `CLOUDFRONT` and `REGIONAL`.
   *
   * For `CLOUDFRONT`, you must create your WAFv2 resources in the US East (N. Virginia) Region, `us-east-1`.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Scope: Value<string>;
  /**
   * Key:value pairs associated with an AWS resource. The key:value pair can be anything you define. Typically, the tag key represents a category (such as "environment") and the tag value represents a specific value within that category (such as "test," "development," or "production"). You can add up to 50 tags to each AWS resource.
   *
   * To modify tags on existing resources, use the AWS WAF APIs or command line interface. With AWS CloudFormation, you can only add tags to AWS WAF resources during resource creation.
   *
   * _Required_: No
   *
   * _Type_: List of [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Tags?: List<ResourceTag>;
  /**
   * The name of the set. You cannot change the name after you create the set.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `128`
   *
   * _Pattern_: `^[w-]+$`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Name?: Value<string>;
}

/**
 * **Note**
 *
 * This is the latest version of **AWS WAF**, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the [AWS WAF Developer Guide](https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html).
 *
 * Use an [AWS::WAFv2::RegexPatternSet](#aws-resource-wafv2-regexpatternset) to have AWS WAF inspect a web request component for a specific set of regular expression patterns.
 *
 * You use a regex pattern set by providing its Amazon Resource Name (ARN) to the rule statement `RegexPatternSetReferenceStatement`, when you add a rule to a rule group or web ACL.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-regexpatternset.html}
 */
export interface WAFv2RegexPatternSetResource {
  Type: 'AWS::WAFv2::RegexPatternSet';
  Properties: WAFv2RegexPatternSetProperties;
}
