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

/**
 * A tag is a key-value pair attached to a file system. Allowed characters in the `Key` and `Value` properties are letters, white space, and numbers that can be represented in UTF-8, and the following characters:` + - = . _ : /`
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-efs-filesystem-elasticfilesystemtag.html}
 **/
export interface EFSFileSystemElasticFileSystemTag {
  /**
   * The value of the tag key.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Maximum_: `256`
   *
   * _Pattern_: `^([p{L}p{Z}p{N}_.:/=+-@]*)$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Value: Value<string>;
  /**
   * The tag key (String). The key can't start with `aws:`.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `128`
   *
   * _Pattern_: `^(?![aA]{1}[wW]{1}[sS]{1}:)([p{L}p{Z}p{N}_.:/=+-@]+)$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Key: Value<string>;
}

/**
 * Describes a policy used by EFS lifecycle management and EFS Intelligent-Tiering that specifies when to transition files into and out of the file system's Infrequent Access (IA) storage class. For more information, see [EFS Intelligent‐Tiering and EFS Lifecycle Management](https://docs.aws.amazon.com/efs/latest/ug/lifecycle-management-efs.html).
 *
 * **Note**
 *
 * Each `LifecyclePolicy` object can have only a single transition. This means that in a request body, `LifecyclePolicies` must be structured as an array of `LifecyclePolicy` objects, one object for each transition, `TransitionToIA`, `TransitionToPrimaryStorageClass`.
 *
 * See the AWS::EFS::FileSystem examples for the correct `LifecyclePolicy` structure. Do not use the syntax shown on this page.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-efs-filesystem-lifecyclepolicy.html}
 **/
export interface EFSFileSystemLifecyclePolicy {
  /**
   * Describes the period of time that a file is not accessed, after which it transitions to IA storage. Metadata operations such as listing the contents of a directory don't count as file access events.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `AFTER_14_DAYS | AFTER_1_DAY | AFTER_30_DAYS | AFTER_60_DAYS | AFTER_7_DAYS | AFTER_90_DAYS`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TransitionToIA?: Value<string>;
  /**
   * Describes when to transition a file from IA storage to primary storage. Metadata operations such as listing the contents of a directory don't count as file access events.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `AFTER_1_ACCESS`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TransitionToPrimaryStorageClass?: Value<string>;
}

/**
 * The backup policy turns automatic backups for the file system on or off.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-efs-filesystem-backuppolicy.html}
 **/
export interface EFSFileSystemBackupPolicy {
  /**
   * Set the backup policy status for the file system.
   */
  Status: Value<string>;
}
export interface EFSFileSystemProperties {
  /**
   * The ID of the AWS KMS key to be used to protect the encrypted file system. This parameter is only required if you want to use a nondefault KMS key. If this parameter is not specified, the default KMS key for Amazon EFS is used. This ID can be in one of the following formats:
   */
  KmsKeyId?: Value<string>;
  /**
   * The performance mode of the file system. We recommend `generalPurpose` performance mode for most file systems. File systems using the `maxIO` performance mode can scale to higher levels of aggregate throughput and operations per second with a tradeoff of slightly higher latencies for most file operations. The performance mode can't be changed after the file system has been created.
   *
   * The `maxIO` mode is not supported on file systems using One Zone storage classes.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `generalPurpose | maxIO`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  PerformanceMode?: Value<string>;
  /**
   * A Boolean value that, if true, creates an encrypted file system. When creating an encrypted file system, you have the option of specifying a KmsKeyId for an existing AWS KMS key. If you don't specify a KMS key, then the default KMS key for Amazon EFS, `/aws/elasticfilesystem`, is used to protect the encrypted file system.
   *
   * _Required_: Conditional
   *
   * _Type_: Boolean
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Encrypted?: Value<boolean>;
  /**
   * (Optional) A boolean that specifies whether or not to bypass the `FileSystemPolicy` lockout safety check. The lockout safety check determines whether the policy in the request will lock out, or prevent, the IAM principal that is making the request from making future `PutFileSystemPolicy` requests on this file system. Set `BypassPolicyLockoutSafetyCheck` to `True` only when you intend to prevent the IAM principal that is making the request from making subsequent `PutFileSystemPolicy` requests on this file system. The default value is `False`.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  BypassPolicyLockoutSafetyCheck?: Value<boolean>;
  /**
   * Use to create one or more tags associated with the file system. Each tag is a user-defined key-value pair. Name your file system on creation by including a `"Key":"Name","Value":"{value}"` key-value pair. Each key must be unique. For more information, see [Tagging AWS resources](https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html) in the _ AWS General Reference Guide_.
   *
   * _Required_: No
   *
   * _Type_: List of [ElasticFileSystemTag](aws-properties-efs-filesystem-elasticfilesystemtag.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FileSystemTags?: List<EFSFileSystemElasticFileSystemTag>;
  /**
   * The throughput, measured in MiB/s, that you want to provision for a file system that you're creating. Valid values are 1-1024. Required if `ThroughputMode` is set to `provisioned`. The upper limit for throughput is 1024 MiB/s. To increase this limit, contact AWS Support. For more information, see [Amazon EFS quotas that you can increase](https://docs.aws.amazon.com/efs/latest/ug/limits.html#soft-limits) in the _Amazon EFS User Guide_.
   *
   * _Required_: Conditional
   *
   * _Type_: Double
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ProvisionedThroughputInMibps?: Value<number>;
  /**
   * The `FileSystemPolicy` for the EFS file system. A file system policy is an IAM resource policy used to control NFS access to an EFS file system. For more information, see [Using IAM to control NFS access to Amazon EFS](https://docs.aws.amazon.com/efs/latest/ug/iam-access-control-nfs-efs.html) in the _Amazon EFS User Guide_.
   *
   * _Required_: No
   *
   * _Type_: Json
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `20000`
   *
   * _Pattern_: `[sS]+`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FileSystemPolicy?: { [key: string]: any };
  /**
   * Used to create a file system that uses One Zone storage classes. It specifies the AWS Availability Zone in which to create the file system. Use the format `us-east-1a` to specify the Availability Zone. For more information about One Zone storage classes, see [Using EFS storage classes](https://docs.aws.amazon.com/efs/latest/ug/storage-classes.html) in the _Amazon EFS User Guide_.
   *
   * One Zone storage classes are not available in all Availability Zones in AWS Regions where Amazon EFS is available.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `64`
   *
   * _Pattern_: `.+`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  AvailabilityZoneName?: Value<string>;
  /**
   * An array of `LifecyclePolicy` objects that define the file system's `LifecycleConfiguration` object. A `LifecycleConfiguration` object informs EFS lifecycle management and intelligent tiering of the following:
   */
  LifecyclePolicies?: List<EFSFileSystemLifecyclePolicy>;
  /**
   * Specifies the throughput mode for the file system. The mode can be `bursting`, `provisioned`, or `elastic`. If you set `ThroughputMode` to `provisioned`, you must also set a value for `ProvisionedThroughputInMibps`. After you create the file system, you can decrease your file system's throughput in Provisioned Throughput mode or change between the throughput modes, with certain time restrictions. For more information, see [Specifying throughput with provisioned mode](https://docs.aws.amazon.com/efs/latest/ug/performance.html#provisioned-throughput) in the _Amazon EFS User Guide_.
   *
   * Default is `bursting`.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `bursting | elastic | provisioned`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ThroughputMode?: Value<string>;
  /**
   * Use the `BackupPolicy` to turn automatic backups on or off for the file system.
   *
   * _Required_: No
   *
   * _Type_: [BackupPolicy](aws-properties-efs-filesystem-backuppolicy.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  BackupPolicy?: EFSFileSystemBackupPolicy;
}

/**
 * The `AWS::EFS::FileSystem` resource creates a new, empty file system in Amazon Elastic File System (Amazon EFS). You must create a mount target ([AWS::EFS::MountTarget](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-efs-mounttarget.html)) to mount your EFS file system on an Amazon EC2 or other AWS cloud compute resource.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-efs-filesystem.html}
 */
export interface EFSFileSystemResource {
  Type: 'AWS::EFS::FileSystem';
  Properties: EFSFileSystemProperties;
}
