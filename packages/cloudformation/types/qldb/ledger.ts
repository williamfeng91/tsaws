/**
 * Supported regions:
 * - ap-northeast-1 (version 119.1.0)
 * - ap-northeast-2 (version 119.1.0)
 * - ap-southeast-1 (version 119.1.0)
 * - ap-southeast-2 (version 119.1.0)
 * - eu-central-1 (version 119.1.0)
 * - eu-west-1 (version 119.1.0)
 * - eu-west-2 (version 119.1.0)
 * - us-east-1 (version 119.1.0)
 * - us-east-2 (version 119.1.0)
 * - us-west-2 (version 119.1.0)
 */
import { List, Value } from '../../shared-types/dataTypes';
import { ResourceTag } from '../../shared-types/resource';

export interface QLDBLedgerProperties {
  /**
   * The permissions mode to assign to the ledger that you want to create. This parameter can have one of the following values:
   *
   * This mode allows users who have the `SendCommand` API permission for this ledger to run all PartiQL commands (hence, `ALLOW_ALL`) on any tables in the specified ledger. This mode disregards any table-level or command-level IAM permissions policies that you create for the ledger.
   *
   * By default, this mode denies all user requests to run any PartiQL commands on any tables in this ledger. To allow PartiQL commands to run, you must create IAM permissions policies for specific table resources and PartiQL actions, in addition to the `SendCommand` API permission for the ledger. For information, see [Getting started with the standard permissions mode](https://docs.aws.amazon.com/qldb/latest/developerguide/getting-started-standard-mode.html) in the _Amazon QLDB Developer Guide_.
   *
   * We strongly recommend using the `STANDARD` permissions mode to maximize the security of your ledger data.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Allowed values_: `ALLOW_ALL | STANDARD`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PermissionsMode: Value<string>;
  /**
   * Specifies whether the ledger is protected from being deleted by any user. If not defined during ledger creation, this feature is enabled (`true`) by default.
   *
   * If deletion protection is enabled, you must first disable it before you can delete the ledger. You can disable it by calling the `UpdateLedger` operation to set this parameter to `false`.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DeletionProtection?: Value<boolean>;
  /**
   * The key in AWS Key Management Service (AWS KMS) to use for encryption of data at rest in the ledger. For more information, see [Encryption at rest](https://docs.aws.amazon.com/qldb/latest/developerguide/encryption-at-rest.html) in the _Amazon QLDB Developer Guide_.
   *
   * Use one of the following options to specify this parameter:
   *
   * Amazon QLDB does not support asymmetric keys. For more information, see [Using symmetric and asymmetric keys](https://docs.aws.amazon.com/kms/latest/developerguide/symmetric-asymmetric.html) in the _ AWS Key Management Service Developer Guide_.
   *
   * To specify a customer managed KMS key, you can use its key ID, Amazon Resource Name (ARN), alias name, or alias ARN. When using an alias name, prefix it with `"alias/"`. To specify a key in a different AWS account, you must use the key ARN or alias ARN.
   *
   * For example:
   */
  KmsKey?: Value<string>;
  /**
   * An array of key-value pairs to apply to this resource.
   *
   * For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html).
   *
   * _Required_: No
   *
   * _Type_: List of [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Tags?: List<ResourceTag>;
  /**
   * The name of the ledger that you want to create. The name must be unique among all of the ledgers in your AWS account in the current Region.
   *
   * Naming constraints for ledger names are defined in [Quotas in Amazon QLDB](https://docs.aws.amazon.com/qldb/latest/developerguide/limits.html#limits.naming) in the _Amazon QLDB Developer Guide_.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `32`
   *
   * _Pattern_: `(?!^.*--)(?!^[0-9]+$)(?!^-)(?!.*-$)^[A-Za-z0-9-]+$`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Name?: Value<string>;
}

/**
 * The `AWS::QLDB::Ledger` resource specifies a new Amazon Quantum Ledger Database (Amazon QLDB) ledger in your AWS account. Amazon QLDB is a fully managed ledger database that provides a transparent, immutable, and cryptographically verifiable transaction log owned by a central trusted authority. You can use QLDB to track all application data changes, and maintain a complete and verifiable history of changes over time.
 *
 * For more information, see [CreateLedger](https://docs.aws.amazon.com/qldb/latest/developerguide/API_CreateLedger.html) in the _Amazon QLDB API Reference_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qldb-ledger.html}
 */
export interface QLDBLedgerResource {
  Type: 'AWS::QLDB::Ledger';
  Properties: QLDBLedgerProperties;
}
