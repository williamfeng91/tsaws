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

export interface SSMResourcePolicyProperties {
  /**
   * A policy you want to associate with a resource.
   *
   * _Required_: Yes
   *
   * _Type_: Json
   *
   * _Pattern_: `S+`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Policy: { [key: string]: any };
  /**
   * Amazon Resource Name (ARN) of the resource to which you want to attach a policy.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `20`
   *
   * _Maximum_: `2048`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ResourceArn: Value<string>;
}

/**
 * Creates or updates a Systems Manager resource policy. A resource policy helps you to define the IAM entity (for example, an AWS account) that can manage your Systems Manager resources. Currently, `OpsItemGroup` is the only resource that supports Systems Manager resource policies. The resource policy for `OpsItemGroup` enables AWS accounts to view and interact with OpsCenter operational work items (OpsItems). OpsCenter is a capability of Systems Manager.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-resourcepolicy.html}
 */
export interface SSMResourcePolicyResource {
  Type: 'AWS::SSM::ResourcePolicy';
  Properties: SSMResourcePolicyProperties;
}
