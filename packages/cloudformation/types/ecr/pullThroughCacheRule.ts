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

export interface ECRPullThroughCacheRuleProperties {
  /**
   * The upstream registry URL associated with the pull through cache rule.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  UpstreamRegistryUrl?: Value<string>;
  /**
   * The Amazon ECR repository prefix associated with the pull through cache rule.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `2`
   *
   * _Maximum_: `20`
   *
   * _Pattern_: `[a-z0-9]+(?:[._-][a-z0-9]+)*`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  EcrRepositoryPrefix?: Value<string>;
}

/**
 * Creates a pull through cache rule. A pull through cache rule provides a way to cache images from an external public registry in your Amazon ECR private registry.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecr-pullthroughcacherule.html}
 */
export interface ECRPullThroughCacheRuleResource {
  Type: 'AWS::ECR::PullThroughCacheRule';
  Properties: ECRPullThroughCacheRuleProperties;
}
