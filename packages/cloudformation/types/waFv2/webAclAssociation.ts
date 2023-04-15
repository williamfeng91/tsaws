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

export interface WAFv2WebACLAssociationProperties {
  /**
   * The Amazon Resource Name (ARN) of the resource to associate with the web ACL.
   *
   * The ARN must be in one of the following formats:
   */
  ResourceArn: Value<string>;
  /**
   * The Amazon Resource Name (ARN) of the web ACL that you want to associate with the resource.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `20`
   *
   * _Maximum_: `2048`
   *
   * _Pattern_: `.*S.*`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  WebACLArn: Value<string>;
}

/**
 * **Note**
 *
 * This is the latest version of **AWS WAF**, named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the [AWS WAF Developer Guide](https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html).
 *
 * Use a web ACL association to define an association between a web ACL and a regional application resource, to protect the resource. A regional application can be an Application Load Balancer (ALB), an Amazon API Gateway REST API, an AWS AppSync GraphQL API, an Amazon Cognito user pool, or an AWS App Runner service.
 *
 * For Amazon CloudFront, don't use this resource. Instead, use your CloudFront distribution configuration. To associate a web ACL with a distribution, provide the Amazon Resource Name (ARN) of the [AWS::WAFv2::WebACL](aws-resource-wafv2-webacl.md) to your CloudFront distribution configuration. To disassociate a web ACL, provide an empty ARN. For information, see [AWS::CloudFront::Distribution](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-distribution.html).
 *
 * When you create a web ACL or make changes to a web ACL or web ACL components, like rules and rule groups, AWS WAF propagates the changes everywhere that the web ACL and its components are stored and used. Your changes are applied within seconds, but there might be a brief period of inconsistency when the changes have arrived in some places and not in others. So, for example, if you change a rule action setting, the action might be the old action in one area and the new action in another area. Or if you add an IP address to an IP set used in a blocking rule, the new address might briefly be blocked in one area while still allowed in another. This temporary inconsistency can occur when you first associate a web ACL with an AWS resource and when you change a web ACL that is already associated with a resource. Generally, any inconsistencies of this type last only a few seconds.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webaclassociation.html}
 */
export interface WAFv2WebACLAssociationResource {
  Type: 'AWS::WAFv2::WebACLAssociation';
  Properties: WAFv2WebACLAssociationProperties;
}
