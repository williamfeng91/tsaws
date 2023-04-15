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
 * Specifies the configuration of the AWS managed or customer managed policy that you want to set as a permissions boundary. Specify either `CustomerManagedPolicyReference` to use the name and path of a customer managed policy, or `ManagedPolicyArn` to use the ARN of an AWS managed policy. A permissions boundary represents the maximum permissions that any policy can grant your role. For more information, see [Permissions boundaries for IAM entities](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_boundaries.html) in the _IAM User Guide_.
 *
 * **Important**
 *
 * Policies used as permissions boundaries don't provide permissions. You must also attach an IAM policy to the role. To learn how the effective permissions for a role are evaluated, see [IAM JSON policy evaluation logic](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_evaluation-logic.html) in the _IAM User Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sso-permissionset-permissionsboundary.html}
 **/
export interface SSOPermissionSetPermissionsBoundary {
  /**
   * Specifies the name and path of a customer managed policy. You must have an IAM policy that matches the name and path in each AWS account where you want to deploy your permission set.
   *
   * _Required_: No
   *
   * _Type_: [CustomerManagedPolicyReference](aws-properties-sso-permissionset-customermanagedpolicyreference.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CustomerManagedPolicyReference?: SSOPermissionSetCustomerManagedPolicyReference;
  /**
   * The AWS managed policy ARN that you want to attach to a permission set as a permissions boundary.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `20`
   *
   * _Maximum_: `2048`
   *
   * _Pattern_: `arn:(aws|aws-us-gov|aws-cn|aws-iso|aws-iso-b):iam::aws:policy/[p{L}p{M}p{Z}p{S}p{N}p{P}]+`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ManagedPolicyArn?: Value<string>;
}

/**
 * Specifies the name and path of a customer managed policy. You must have an IAM policy that matches the name and path in each AWS account where you want to deploy your permission set.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sso-permissionset-customermanagedpolicyreference.html}
 **/
export interface SSOPermissionSetCustomerManagedPolicyReference {
  /**
   * The path to the IAM policy that you have configured in each account where you want to deploy your permission set. The default is `/`. For more information, see [Friendly names and paths](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_identifiers.html#identifiers-friendly-names) in the _IAM User Guide_.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `512`
   *
   * _Pattern_: `((/[A-Za-z0-9.,+@=_-]+)*)/`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Path?: Value<string>;
  /**
   * The name of the IAM policy that you have configured in each account where you want to deploy your permission set.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `128`
   *
   * _Pattern_: `[w+=,.@-]+`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Name: Value<string>;
}
export interface SSOPermissionSetProperties {
  /**
   * Used to redirect users within the application during the federation authentication process.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `240`
   *
   * _Pattern_: `[a-zA-Z0-9&$@#/%?=~-_'"|!:,.;*+[] (){}]+`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RelayStateType?: Value<string>;
  /**
   * Specifies the names and paths of the customer managed policies that you have attached to your permission set.
   *
   * _Required_: No
   *
   * _Type_: List of [CustomerManagedPolicyReference](aws-properties-sso-permissionset-customermanagedpolicyreference.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CustomerManagedPolicyReferences?: List<SSOPermissionSetCustomerManagedPolicyReference>;
  /**
   * The length of time that the application user sessions are valid for in the ISO-8601 standard.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `100`
   *
   * _Pattern_: `^(-?)P(?=d|Td)(?:(d+)Y)?(?:(d+)M)?(?:(d+)([DW]))?(?:T(?:(d+)H)?(?:(d+)M)?(?:(d+(?:.d+)?)S)?)?$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SessionDuration?: Value<string>;
  /**
   * The description of the [AWS::SSO::PermissionSet](#aws-resource-sso-permissionset).
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `700`
   *
   * _Pattern_: `[u0009u000Au000Du0020-u007Eu00A1-u00FF]*`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Description?: Value<string>;
  /**
   * The ARN of the IAM Identity Center instance under which the operation will be executed. For more information about ARNs, see [Amazon Resource Names (ARNs) and AWS Service Namespaces](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) in the _AWS General Reference_.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `10`
   *
   * _Maximum_: `1224`
   *
   * _Pattern_: `arn:(aws|aws-us-gov|aws-cn|aws-iso|aws-iso-b):sso:::instance/(sso)?ins-[a-zA-Z0-9-.]{16}`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  InstanceArn: Value<string>;
  /**
   * The inline policy that is attached to the permission set.
   *
   * For `Length Constraints`, if a valid ARN is provided for a permission set, it is possible for an empty inline policy to be returned.
   *
   * _Required_: No
   *
   * _Type_: Json
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `32768`
   *
   * _Pattern_: `[u0009u000Au000Du0020-u00FF]+`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  InlinePolicy?: { [key: string]: any };
  /**
   * A structure that stores the details of the AWS managed policy.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ManagedPolicies?: List<Value<string>>;
  /**
   * The tags to attach to the new [AWS::SSO::PermissionSet](#aws-resource-sso-permissionset).
   *
   * _Required_: No
   *
   * _Type_: List of [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)
   *
   * _Maximum_: `50`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Tags?: List<ResourceTag>;
  /**
   * The name of the permission set.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `32`
   *
   * _Pattern_: `[w+=,.@-]+`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Name: Value<string>;
  /**
   * Specifies the configuration of the AWS managed or customer managed policy that you want to set as a permissions boundary. Specify either `CustomerManagedPolicyReference` to use the name and path of a customer managed policy, or `ManagedPolicyArn` to use the ARN of an AWS managed policy. A permissions boundary represents the maximum permissions that any policy can grant your role. For more information, see [Permissions boundaries for IAM entities](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_boundaries.html) in the _IAM User Guide_.
   *
   * Policies used as permissions boundaries don't provide permissions. You must also attach an IAM policy to the role. To learn how the effective permissions for a role are evaluated, see [IAM JSON policy evaluation logic](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_evaluation-logic.html) in the _IAM User Guide_.
   *
   * _Required_: No
   *
   * _Type_: [PermissionsBoundary](aws-properties-sso-permissionset-permissionsboundary.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PermissionsBoundary?: SSOPermissionSetPermissionsBoundary;
}

/**
 * Specifies a permission set within a specified IAM Identity Center instance.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sso-permissionset.html}
 */
export interface SSOPermissionSetResource {
  Type: 'AWS::SSO::PermissionSet';
  Properties: SSOPermissionSetProperties;
}
