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

export interface KMSKeyProperties {
  /**
   * Creates a multi-Region primary key that you can replicate in other AWS Regions. You can't change the `MultiRegion` value after the KMS key is created.
   *
   * For a list of AWS Regions in which multi-Region keys are supported, see [Multi-Region keys in AWS KMS](https://docs.aws.amazon.com/kms/latest/developerguide/multi-region-keys-overview.html) in the _AWS Key Management Service Developer Guide_.
   *
   * If you change the value of the `MultiRegion` property on an existing KMS key, the update request fails, regardless of the value of the [`UpdateReplacePolicy` attribute](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-updatereplacepolicy.html). This prevents you from accidentally deleting a KMS key by changing an immutable property value.
   *
   * For a multi-Region key, set to this property to `true`. For a single-Region key, omit this property or set it to `false`. The default value is `false`.
   *
   * _Multi-Region keys_ are an AWS KMS feature that lets you create multiple interoperable KMS keys in different AWS Regions. Because these KMS keys have the same key ID, key material, and other metadata, you can use them to encrypt data in one AWS Region and decrypt it in a different AWS Region without making a cross-Region call or exposing the plaintext data. For more information, see [Multi-Region keys](https://docs.aws.amazon.com/kms/latest/developerguide/multi-region-keys-overview.html) in the _AWS Key Management Service Developer Guide_.
   *
   * You can create a symmetric encryption, HMAC, or asymmetric multi-Region KMS key, and you can create a multi-Region key with imported key material. However, you cannot create a multi-Region key in a custom key store.
   *
   * To create a replica of this primary key in a different AWS Region , create an [AWS::KMS::ReplicaKey](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kms-replicakey.html) resource in a CloudFormation stack in the replica Region. Specify the key ARN of this primary key.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  MultiRegion?: Value<boolean>;
  /**
   * A description of the KMS key. Use a description that helps you to distinguish this KMS key from others in the account, such as its intended use.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `0`
   *
   * _Maximum_: `8192`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Description?: Value<string>;
  /**
   * Specifies the number of days in the waiting period before AWS KMS deletes a KMS key that has been removed from a CloudFormation stack. Enter a value between 7 and 30 days. The default value is 30 days.
   *
   * When you remove a KMS key from a CloudFormation stack, AWS KMS schedules the KMS key for deletion and starts the mandatory waiting period. The `PendingWindowInDays` property determines the length of waiting period. During the waiting period, the key state of KMS key is `Pending Deletion` or `Pending Replica Deletion`, which prevents the KMS key from being used in cryptographic operations. When the waiting period expires, AWS KMS permanently deletes the KMS key.
   *
   * AWS KMS will not delete a [multi-Region primary key](https://docs.aws.amazon.com/kms/latest/developerguide/multi-region-keys-overview.html) that has replica keys. If you remove a multi-Region primary key from a CloudFormation stack, its key state changes to `PendingReplicaDeletion` so it cannot be replicated or used in cryptographic operations. This state can persist indefinitely. When the last of its replica keys is deleted, the key state of the primary key changes to `PendingDeletion` and the waiting period specified by `PendingWindowInDays` begins. When this waiting period expires, AWS KMS deletes the primary key. For details, see [Deleting multi-Region keys](https://docs.aws.amazon.com/kms/latest/developerguide/multi-region-keys-delete.html) in the _AWS Key Management Service Developer Guide_.
   *
   * You cannot use a CloudFormation template to cancel deletion of the KMS key after you remove it from the stack, regardless of the waiting period. If you specify a KMS key in your template, even one with the same name, CloudFormation creates a new KMS key. To cancel deletion of a KMS key, use the AWS KMS console or the [CancelKeyDeletion](https://docs.aws.amazon.com/kms/latest/APIReference/API_CancelKeyDeletion.html) operation.
   *
   * For information about the `Pending Deletion` and `Pending Replica Deletion` key states, see [Key state: Effect on your KMS key](https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html) in the _AWS Key Management Service Developer Guide_. For more information about deleting KMS keys, see the [ScheduleKeyDeletion](https://docs.aws.amazon.com/kms/latest/APIReference/API_ScheduleKeyDeletion.html) operation in the _AWS Key Management Service API Reference_ and [Deleting KMS keys](https://docs.aws.amazon.com/kms/latest/developerguide/deleting-keys.html) in the _AWS Key Management Service Developer Guide_.
   *
   * _Minimum_: 7
   *
   * _Maximum_: 30
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PendingWindowInDays?: Value<number>;
  /**
   * The key policy that authorizes use of the KMS key. The key policy must conform to the following rules.
   */
  KeyPolicy: { [key: string]: any };
  /**
   * Specifies the type of KMS key to create. The default value, `SYMMETRIC_DEFAULT`, creates a KMS key with a 256-bit symmetric key for encryption and decryption. In China Regions, `SYMMETRIC_DEFAULT` creates a 128-bit symmetric key that uses SM4 encryption. You can't change the `KeySpec` value after the KMS key is created. For help choosing a key spec for your KMS key, see [Choosing a KMS key type](https://docs.aws.amazon.com/kms/latest/developerguide/symm-asymm-choose.html) in the _AWS Key Management Service Developer Guide_.
   *
   * The `KeySpec` property determines the type of key material in the KMS key and the algorithms that the KMS key supports. To further restrict the algorithms that can be used with the KMS key, use a condition key in its key policy or IAM policy. For more information, see [AWS KMS condition keys](https://docs.aws.amazon.com/kms/latest/developerguide/policy-conditions.html#conditions-kms) in the _AWS Key Management Service Developer Guide_.
   *
   * If you change the value of the `KeySpec` property on an existing KMS key, the update request fails, regardless of the value of the [`UpdateReplacePolicy` attribute](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-updatereplacepolicy.html). This prevents you from accidentally deleting a KMS key by changing an immutable property value.
   *
   * [AWS services that are integrated with AWS KMS](http://aws.amazon.com/kms/features/#AWS_Service_Integration) use symmetric encryption KMS keys to protect your data. These services do not support encryption with asymmetric KMS keys. For help determining whether a KMS key is asymmetric, see [Identifying asymmetric KMS keys](https://docs.aws.amazon.com/kms/latest/developerguide/find-symm-asymm.html) in the _AWS Key Management Service Developer Guide_.
   *
   * AWS KMS supports the following key specs for KMS keys:
   */
  KeySpec?: Value<string>;
  /**
   * Specifies whether the KMS key is enabled. Disabled KMS keys cannot be used in cryptographic operations.
   *
   * When `Enabled` is `true`, the _key state_ of the KMS key is `Enabled`. When `Enabled` is `false`, the key state of the KMS key is `Disabled`. The default value is `true`.
   *
   * The actual key state of the KMS key might be affected by actions taken outside of CloudFormation, such as running the [EnableKey](https://docs.aws.amazon.com/kms/latest/APIReference/API_EnableKey.html), [DisableKey](https://docs.aws.amazon.com/kms/latest/APIReference/API_DisableKey.html), or [ScheduleKeyDeletion](https://docs.aws.amazon.com/kms/latest/APIReference/API_ScheduleKeyDeletion.html) operations.
   *
   * For information about the key states of a KMS key, see [Key state: Effect on your KMS key](https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html) in the _AWS Key Management Service Developer Guide_.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Enabled?: Value<boolean>;
  /**
   * Enables automatic rotation of the key material for the specified KMS key. By default, automatic key rotation is not enabled.
   *
   * AWS KMS supports automatic rotation only for symmetric encryption KMS keys (`KeySpec` = `SYMMETRIC_DEFAULT`). For asymmetric KMS keys and HMAC KMS keys, omit the `EnableKeyRotation` property or set it to `false`.
   *
   * To enable automatic key rotation of the key material for a multi-Region KMS key, set `EnableKeyRotation` to `true` on the primary key (created by using `AWS::KMS::Key`). AWS KMS copies the rotation status to all replica keys. For details, see [Rotating multi-Region keys](https://docs.aws.amazon.com/kms/latest/developerguide/multi-region-keys-manage.html#multi-region-rotate) in the _AWS Key Management Service Developer Guide_.
   *
   * When you enable automatic rotation, AWS KMS automatically creates new key material for the KMS key one year after the enable date and every year thereafter. AWS KMS retains all key material until you delete the KMS key. For detailed information about automatic key rotation, see [Rotating KMS keys](https://docs.aws.amazon.com/kms/latest/developerguide/rotate-keys.html) in the _AWS Key Management Service Developer Guide_.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  EnableKeyRotation?: Value<boolean>;
  /**
   * Determines the [cryptographic operations](https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#cryptographic-operations) for which you can use the KMS key. The default value is `ENCRYPT_DECRYPT`. This property is required for asymmetric KMS keys and HMAC KMS keys. You can't change the `KeyUsage` value after the KMS key is created.
   *
   * If you change the value of the `KeyUsage` property on an existing KMS key, the update request fails, regardless of the value of the [`UpdateReplacePolicy` attribute](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-updatereplacepolicy.html). This prevents you from accidentally deleting a KMS key by changing an immutable property value.
   *
   * Select only one valid value.
   */
  KeyUsage?: Value<string>;
  /**
   * Assigns one or more tags to the replica key.
   *
   * Tagging or untagging a KMS key can allow or deny permission to the KMS key. For details, see [ABAC for AWS KMS](https://docs.aws.amazon.com/kms/latest/developerguide/abac.html) in the _AWS Key Management Service Developer Guide_.
   *
   * For information about tags in AWS KMS, see [Tagging keys](https://docs.aws.amazon.com/kms/latest/developerguide/tagging-keys.html) in the _AWS Key Management Service Developer Guide_. For information about tags in CloudFormation, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html).
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
 * The `AWS::KMS::Key` resource specifies an [KMS key](https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#kms_keys) in AWS Key Management Service. You can use this resource to create symmetric encryption KMS keys, asymmetric KMS keys for encryption or signing, and symmetric HMAC KMS keys. You can use `AWS::KMS::Key` to create [multi-Region primary keys](https://docs.aws.amazon.com/kms/latest/developerguide/multi-region-keys-overview.html#mrk-primary-key) of all supported types. To replicate a multi-Region key, use the `AWS::KMS::ReplicaKey` resource.
 *
 * **Important**
 *
 * If you change the value of the `KeySpec`, `KeyUsage`, or `MultiRegion` properties of an existing KMS key, the update request fails, regardless of the value of the [`UpdateReplacePolicy` attribute](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-updatereplacepolicy.html). This prevents you from accidentally deleting a KMS key by changing any of its immutable property values.
 *
 * **Note**
 *
 * AWS KMS replaced the term _customer master key (CMK)_ with _AWS KMS key_ and _KMS key_. The concept has not changed. To prevent breaking changes, AWS KMS is keeping some variations of this term.
 *
 * You can use symmetric encryption KMS keys to encrypt and decrypt small amounts of data, but they are more commonly used to generate data keys and data key pairs. You can also use a symmetric encryption KMS key to encrypt data stored in AWS services that are [integrated with AWS KMS](http://aws.amazon.com/kms/features/#AWS_Service_Integration). For more information, see [Symmetric encryption KMS keys](https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#symmetric-cmks) in the _AWS Key Management Service Developer Guide_.
 *
 * You can use asymmetric KMS keys to encrypt and decrypt data or sign messages and verify signatures. To create an asymmetric key, you must specify an asymmetric `KeySpec` value and a `KeyUsage` value. For details, see [Asymmetric keys in AWS KMS](https://docs.aws.amazon.com/kms/latest/developerguide/symmetric-asymmetric.html) in the _AWS Key Management Service Developer Guide_.
 *
 * You can use HMAC KMS keys (which are also symmetric keys) to generate and verify hash-based message authentication codes. To create an HMAC key, you must specify an HMAC `KeySpec` value and a `KeyUsage` value of `GENERATE_VERIFY_MAC`. For details, see [HMAC keys in AWS KMS](https://docs.aws.amazon.com/kms/latest/developerguide/hmac.html) in the _AWS Key Management Service Developer Guide_.
 *
 * You can also create symmetric encryption, asymmetric, and HMAC multi-Region primary keys. To create a multi-Region primary key, set the `MultiRegion` property to `true`. For information about multi-Region keys, see [Multi-Region keys in AWS KMS](https://docs.aws.amazon.com/kms/latest/developerguide/multi-region-keys-overview.html) in the _AWS Key Management Service Developer Guide_.
 *
 * You cannot use the `AWS::KMS::Key` resource to specify a KMS key with [imported key material](https://docs.aws.amazon.com/kms/latest/developerguide/importing-keys.html) or a KMS key in a [custom key store](https://docs.aws.amazon.com/kms/latest/developerguide/custom-key-store-overview.html).
 *
 * **Regions**
 *
 * AWS KMS CloudFormation resources are available in all Regions in which AWS KMS and AWS CloudFormation are supported. You can use the `AWS::KMS::Key` resource to create and manage all KMS key types that are supported in a Region.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kms-key.html}
 */
export interface KMSKeyResource {
  Type: 'AWS::KMS::Key';
  Properties: KMSKeyProperties;
}
