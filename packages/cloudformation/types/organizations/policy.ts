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

export interface OrganizationsPolicyProperties {
  /**
   * The type of policy to create.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Allowed values_: `AISERVICES_OPT_OUT_POLICY | BACKUP_POLICY | SERVICE_CONTROL_POLICY | TAG_POLICY`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Type: Value<string>;
  /**
   * List of unique identifiers (IDs) of the root, OU, or account that you want to attach the policy to. You can get the ID by calling the [ListRoots](https://docs.aws.amazon.com/organizations/latest/APIReference/API_ListRoots.html), [ListOrganizationalUnitsForParent](https://docs.aws.amazon.com/organizations/latest/APIReference/API_ListOrganizationalUnitsForParent.html), or [ListAccounts](https://docs.aws.amazon.com/organizations/latest/APIReference/API_ListAccounts.html) operations. If you don't specify this parameter, the policy is created but not attached to any organization resource.
   *
   * The [regex pattern](http://wikipedia.org/wiki/regex) for a target ID string requires one of the following:
   */
  TargetIds?: List<Value<string>>;
  /**
   * Human readable description of the policy.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Maximum_: `512`
   *
   * _Pattern_: `[sS]*`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Description?: Value<string>;
  /**
   * The policy text content. You can specify the policy content as a JSON object or a JSON string.
   *
   * When you specify the policy content as a JSON string, you can't perform drift detection on the CloudFormation stack. For this reason, we recommend specifying the policy content as a JSON object instead.
   *
   * The text that you supply must adhere to the rules of the policy type you specify in the `Type` parameter. The following AWS Organizations quotas are enforced for the maximum size of a policy document:
   */
  Content: { [key: string]: any };
  /**
   * A list of tags that you want to attach to the newly created policy. For each tag in the list, you must specify both a tag key and a value. You can set the value to an empty string, but you can't set it to `null`. For more information about tagging, see [Tagging AWS Organizations resources](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_tagging.html) in the AWS Organizations User Guide.
   *
   * If any one of the tags is not valid or if you exceed the allowed number of tags for a policy, then the entire request fails and the policy is not created.
   *
   * _Required_: No
   *
   * _Type_: List of [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Tags?: List<ResourceTag>;
  /**
   * Name of the policy.
   *
   * The [regex pattern](http://wikipedia.org/wiki/regex) that is used to validate this parameter is a string of any of the characters in the ASCII character range.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `128`
   *
   * _Pattern_: `[sS]*`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Name: Value<string>;
}

/**
 * Creates a policy of a specified type that you can attach to a root, an organizational unit (OU), or an individual AWS account.
 *
 * For more information about policies and their use, see [Managing Organization Policies](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies.html).
 *
 * If the request includes tags, then the requester must have the `organizations:TagResource` permission.
 *
 * This operation can be called only from the organization's management account.
 *
 * **Note**
 *
 * Before you can create a policy of a given type, you must first [enable that policy type](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_enable-disable.html) in your organization.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-organizations-policy.html}
 */
export interface OrganizationsPolicyResource {
  Type: 'AWS::Organizations::Policy';
  Properties: OrganizationsPolicyProperties;
}
