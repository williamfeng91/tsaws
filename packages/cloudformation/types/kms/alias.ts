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

export interface KMSAliasProperties {
  /**
   * Associates the alias with the specified [customer managed key](https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#customer-cmk). The KMS key must be in the same AWS account and Region.
   *
   * A valid key ID is required. If you supply a null or empty string value, this operation returns an error.
   *
   * For help finding the key ID and ARN, see [Finding the key ID and ARN](https://docs.aws.amazon.com/kms/latest/developerguide/viewing-keys.html#find-cmk-id-arn) in the _AWS Key Management Service Developer Guide_.
   *
   * Specify the key ID or the key ARN of the KMS key.
   *
   * For example:
   */
  TargetKeyId: Value<string>;
  /**
   * Specifies the alias name. This value must begin with `alias/` followed by a name, such as `alias/ExampleAlias`.
   *
   * If you change the value of the `AliasName` property, the existing alias is deleted and a new alias is created for the specified KMS key. This change can disrupt applications that use the alias. It can also allow or deny access to a KMS key affected by attribute-based access control (ABAC).
   *
   * The alias must be string of 1-256 characters. It can contain only alphanumeric characters, forward slashes (/), underscores (_), and dashes (-). The alias name cannot begin with `alias/aws/`. The `alias/aws/` prefix is reserved for [AWS managed keys](https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#aws-managed-cmk).
   *
   * _Pattern_: `^alias/[a-zA-Z0-9/_-]+$`
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `256`
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  AliasName: Value<string>;
}

/**
 * The `AWS::KMS::Alias` resource specifies a display name for a [KMS key](https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#kms_keys). You can use an alias to identify a KMS key in the AWS KMS console, in the [DescribeKey](https://docs.aws.amazon.com/kms/latest/APIReference/API_DescribeKey.html) operation, and in [cryptographic operations](https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#cryptographic-operations), such as [Decrypt](https://docs.aws.amazon.com/kms/latest/APIReference/API_Decrypt.html) and [GenerateDataKey](https://docs.aws.amazon.com/kms/latest/APIReference/API_GenerateDataKey.html).
 *
 * **Note**
 *
 * Adding, deleting, or updating an alias can allow or deny permission to the KMS key. For details, see [ABAC for AWS KMS](https://docs.aws.amazon.com/kms/latest/developerguide/abac.html) in the _AWS Key Management Service Developer Guide_.
 *
 * Using an alias to refer to a KMS key can help you simplify key management. For example, an alias in your code can be associated with different KMS keys in different AWS Regions. For more information, see [Using aliases](https://docs.aws.amazon.com/kms/latest/developerguide/kms-alias.html) in the _AWS Key Management Service Developer Guide_.
 *
 * When specifying an alias, observe the following rules.
 *
 * **Regions**
 *
 * AWS KMS CloudFormation resources are available in all AWS Regions in which AWS KMS and AWS CloudFormation are supported.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kms-alias.html}
 */
export interface KMSAliasResource {
  Type: 'AWS::KMS::Alias';
  Properties: KMSAliasProperties;
}
