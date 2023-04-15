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

export interface OrganizationsResourcePolicyProperties {
  /**
   * The policy text of the organization resource policy. You can specify the resource policy content as a JSON object or a JSON string.
   *
   * When you specify the resource policy content as a JSON string, you can't perform drift detection on the CloudFormation stack. For this reason, we recommend specifying the resource policy content as a JSON object instead.
   *
   * _Required_: Yes
   *
   * _Type_: Json
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `40000`
   *
   * _Pattern_: `[sS]*`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Content: { [key: string]: any };
  /**
   * A list of tags that you want to attach to the newly created resource policy. For each tag in the list, you must specify both a tag key and a value. You can set the value to an empty string, but you can't set it to `null`. For more information about tagging, see [Tagging AWS Organizations resources](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_tagging.html) in the _AWS Organizations User Guide_.
   *
   * If any one of the tags is not valid or if you exceed the allowed number of tags for the resource policy, then the entire request fails and the resource policy is not created.
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
 * Creates or updates a resource-based delegation policy that can be used to delegate policy management for AWS Organizations to specified member accounts to perform policy actions that are by default available only to the management account.
 *
 * For more information about delegated policy management, see [Delegated administrator for AWS Organizations](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_delegate_policies.html) in the _AWS Organizations User Guide_.
 *
 * You can only call this operation from the organization's management account.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-organizations-resourcepolicy.html}
 */
export interface OrganizationsResourcePolicyResource {
  Type: 'AWS::Organizations::ResourcePolicy';
  Properties: OrganizationsResourcePolicyProperties;
}
