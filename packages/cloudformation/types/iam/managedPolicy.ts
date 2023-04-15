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

export interface IAMManagedPolicyProperties {
  /**
   * A friendly description of the policy.
   *
   * Typically used to store information about the permissions defined in the policy. For example, "Grants access to production DynamoDB tables."
   *
   * The policy description is immutable. After a value is assigned, it cannot be changed.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Maximum_: `1000`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Description?: Value<string>;
  /**
   * The name (friendly name, not ARN) of the group to attach the policy to.
   *
   * This parameter allows (through its [regex pattern](http://wikipedia.org/wiki/regex)) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `128`
   *
   * _Pattern_: `[w+=,.@-]+`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Groups?: List<Value<string>>;
  /**
   * The friendly name of the policy.
   *
   * If you specify a name, you cannot perform updates that require replacement of this resource. You can perform updates that require no or some interruption. If you must replace the resource, specify a new name.
   *
   * If you specify a name, you must specify the `CAPABILITY_NAMED_IAM` value to acknowledge your template's capabilities. For more information, see [Acknowledging IAM Resources in AWS CloudFormation Templates](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-iam-template.html#using-iam-capabilities).
   *
   * Naming an IAM resource can cause an unrecoverable error if you reuse the same template in multiple Regions. To prevent this, we recommend using `Fn::Join` and `AWS::Region` to create a Region-specific name, as in the following example: `{"Fn::Join": ["", [{"Ref": "AWS::Region"}, {"Ref": "MyResourceName"}]]}`.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ManagedPolicyName?: Value<string>;
  /**
   * The path for the policy.
   *
   * For more information about paths, see [IAM identifiers](https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html) in the _IAM User Guide_.
   *
   * This parameter is optional. If it is not included, it defaults to a slash (/).
   *
   * This parameter allows (through its [regex pattern](http://wikipedia.org/wiki/regex)) a string of characters consisting of either a forward slash (/) by itself or a string that must begin and end with forward slashes. In addition, it can contain any ASCII character from the ! (`u0021`) through the DEL character (`u007F`), including most punctuation characters, digits, and upper and lowercased letters.
   *
   * You cannot use an asterisk (*) in the path name.
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
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Path?: Value<string>;
  /**
   * The JSON policy document that you want to use as the content for the new policy.
   *
   * You must provide policies in JSON format in IAM. However, for AWS CloudFormation templates formatted in YAML, you can provide the policy in JSON or YAML format. AWS CloudFormation always converts a YAML policy to JSON format before submitting it to IAM.
   *
   * The maximum length of the policy document that you can pass in this operation, including whitespace, is listed below. To view the maximum character counts of a managed policy with no whitespaces, see [IAM and AWS STS character quotas](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-quotas.html#reference_iam-quotas-entity-length).
   *
   * To learn more about JSON policy grammar, see [Grammar of the IAM JSON policy language](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_grammar.html) in the _IAM User Guide_.
   *
   * The [regex pattern](http://wikipedia.org/wiki/regex) used to validate this parameter is a string of characters consisting of the following:
   */
  PolicyDocument: { [key: string]: any };
  /**
   * The name (friendly name, not ARN) of the role to attach the policy to.
   *
   * This parameter allows (per its [regex pattern](http://wikipedia.org/wiki/regex)) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-
   *
   * If an external policy (such as `AWS::IAM::Policy` or `AWS::IAM::ManagedPolicy`) has a `Ref` to a role and if a resource (such as `AWS::ECS::Service`) also has a `Ref` to the same role, add a `DependsOn` attribute to the resource to make the resource depend on the external policy. This dependency ensures that the role's policy is available throughout the resource's lifecycle. For example, when you delete a stack with an `AWS::ECS::Service` resource, the `DependsOn` attribute ensures that AWS CloudFormation deletes the `AWS::ECS::Service` resource before deleting its role's policy.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Roles?: List<Value<string>>;
  /**
   * The name (friendly name, not ARN) of the IAM user to attach the policy to.
   *
   * This parameter allows (through its [regex pattern](http://wikipedia.org/wiki/regex)) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `64`
   *
   * _Pattern_: `[w+=,.@-]+`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Users?: List<Value<string>>;
}

/**
 * Creates a new managed policy for your AWS account.
 *
 * This operation creates a policy version with a version identifier of `v1` and sets v1 as the policy's default version. For more information about policy versions, see [Versioning for managed policies](https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-versions.html) in the _IAM User Guide_.
 *
 * As a best practice, you can validate your IAM policies. To learn more, see [Validating IAM policies](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_policy-validator.html) in the _IAM User Guide_.
 *
 * For more information about managed policies in general, see [Managed policies and inline policies](https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html) in the _IAM User Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-managedpolicy.html}
 */
export interface IAMManagedPolicyResource {
  Type: 'AWS::IAM::ManagedPolicy';
  Properties: IAMManagedPolicyProperties;
}
