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

export interface SecretsManagerResourcePolicyProperties {
  /**
   * Specifies whether to block resource-based policies that allow broad access to the secret. By default, Secrets Manager blocks policies that allow broad access, for example those that use a wildcard for the principal.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  BlockPublicPolicy?: Value<boolean>;
  /**
   * The ARN or name of the secret to attach the resource-based policy.
   *
   * For an ARN, we recommend that you specify a complete ARN rather than a partial ARN.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  SecretId: Value<string>;
  /**
   * A JSON-formatted string for an AWS resource-based policy. For example policies, see [Permissions policy examples](https://docs.aws.amazon.com/secretsmanager/latest/userguide/auth-and-access_examples.html).
   *
   * _Required_: Yes
   *
   * _Type_: Json
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ResourcePolicy: { [key: string]: any };
}

/**
 * Attaches a resource-based permission policy to a secret. A resource-based policy is optional. For more information, see [Authentication and access control for Secrets Manager](https://docs.aws.amazon.com/secretsmanager/latest/userguide/auth-and-access.html)
 *
 * For information about attaching a policy in the console, see [Attach a permissions policy to a secret](https://docs.aws.amazon.com/secretsmanager/latest/userguide/auth-and-access_resource-based-policies.html).
 *
 * **Required permissions: ** `secretsmanager:PutResourcePolicy`. For more information, see [ IAM policy actions for Secrets Manager](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awssecretsmanager.html#awssecretsmanager-actions-as-permissions) and [Authentication and access control in Secrets Manager](https://docs.aws.amazon.com/secretsmanager/latest/userguide/auth-and-access.html).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-secretsmanager-resourcepolicy.html}
 */
export interface SecretsManagerResourcePolicyResource {
  Type: 'AWS::SecretsManager::ResourcePolicy';
  Properties: SecretsManagerResourcePolicyProperties;
}
