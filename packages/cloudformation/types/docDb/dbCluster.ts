/**
 * Supported regions:
 * - ap-northeast-1 (version 119.1.0)
 * - ap-northeast-2 (version 119.1.0)
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
 * - us-west-2 (version 119.1.0)
 */
import { List, Value } from '../../shared-types/dataTypes';
import { ResourceTag } from '../../shared-types/resource';

export interface DocDBDBClusterProperties {
  /**
   * Specifies whether the cluster is encrypted.
   *
   * _Required_: Conditional
   *
   * _Type_: Boolean
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  StorageEncrypted?: Value<boolean>;
  /**
   * The date and time to restore the cluster to.
   *
   * Valid values: A time in Universal Coordinated Time (UTC) format.
   *
   * Constraints:
   */
  RestoreToTime?: Value<string>;
  /**
   * The version number of the database engine to use. The `--engine-version` will default to the latest major engine version. For production workloads, we recommend explicitly declaring this parameter with the intended major engine version.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  EngineVersion?: Value<string>;
  /**
   * The AWS KMS key identifier for an encrypted cluster.
   *
   * The AWS KMS key identifier is the Amazon Resource Name (ARN) for the AWS KMS encryption key. If you are creating a cluster using the same AWS account that owns the AWS KMS encryption key that is used to encrypt the new cluster, you can use the AWS KMS key alias instead of the ARN for the AWS KMS encryption key.
   *
   * If an encryption key is not specified in `KmsKeyId`:
   */
  KmsKeyId?: Value<string>;
  /**
   * A list of Amazon EC2 Availability Zones that instances in the cluster can be created in.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  AvailabilityZones?: List<Value<string>>;
  /**
   * The identifier for the snapshot or cluster snapshot to restore from.
   *
   * You can use either the name or the Amazon Resource Name (ARN) to specify a cluster snapshot. However, you can use only the ARN to specify a snapshot.
   *
   * Constraints:
   */
  SnapshotIdentifier?: Value<string>;
  /**
   * Specifies the port that the database engine is listening on.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Port?: Value<number>;
  /**
   * The cluster identifier. This parameter is stored as a lowercase string.
   *
   * Constraints:
   */
  DBClusterIdentifier?: Value<string>;
  /**
   * The weekly time range during which system maintenance can occur, in Universal Coordinated Time (UTC).
   *
   * Format: `ddd:hh24:mi-ddd:hh24:mi`
   *
   * The default is a 30-minute window selected at random from an 8-hour block of time for each AWS Region, occurring on a random day of the week.
   *
   * Valid days: Mon, Tue, Wed, Thu, Fri, Sat, Sun
   *
   * Constraints: Minimum 30-minute window.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PreferredMaintenanceWindow?: Value<string>;
  /**
   * A subnet group to associate with this cluster.
   *
   * Constraints: Must match the name of an existing `DBSubnetGroup`. Must not be default.
   *
   * Example: `mySubnetgroup`
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  DBSubnetGroupName?: Value<string>;
  /**
   * Protects clusters from being accidentally deleted. If enabled, the cluster cannot be deleted unless it is modified and `DeletionProtection` is disabled.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DeletionProtection?: Value<boolean>;
  /**
   * The daily time range during which automated backups are created if automated backups are enabled using the `BackupRetentionPeriod` parameter.
   *
   * The default is a 30-minute window selected at random from an 8-hour block of time for each AWS Region.
   *
   * Constraints:
   */
  PreferredBackupWindow?: Value<string>;
  /**
   * A value that is set to `true` to restore the cluster to the latest restorable backup time, and `false` otherwise.
   *
   * Default: `false`
   *
   * Constraints: Cannot be specified if the `RestoreToTime` parameter is provided.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  UseLatestRestorableTime?: Value<boolean>;
  /**
   * The password for the master database user. This password can contain any printable ASCII character except forward slash (/), double quote ("), or the "at" symbol (@).
   *
   * Constraints: Must contain from 8 to 100 characters.
   *
   * _Required_: Conditional
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MasterUserPassword?: Value<string>;
  /**
   * A list of EC2 VPC security groups to associate with this cluster.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  VpcSecurityGroupIds?: List<Value<string>>;
  /**
   * The identifier of the source cluster from which to restore.
   *
   * Constraints:
   */
  SourceDBClusterIdentifier?: Value<string>;
  /**
   * The name of the master user for the cluster.
   *
   * Constraints:
   */
  MasterUsername?: Value<string>;
  /**
   * The name of the cluster parameter group to associate with this cluster.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DBClusterParameterGroupName?: Value<string>;
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CopyTagsToSnapshot?: Value<boolean>;
  /**
   * The number of days for which automated backups are retained. You must specify a minimum value of 1.
   *
   * Default: 1
   *
   * Constraints:
   */
  BackupRetentionPeriod?: Value<number>;
  /**
   * The type of restore to be performed. You can specify one of the following values:
   */
  RestoreType?: Value<string>;
  /**
   * The tags to be assigned to the cluster.
   *
   * _Required_: No
   *
   * _Type_: List of [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Tags?: List<ResourceTag>;
  /**
   * The list of log types that need to be enabled for exporting to Amazon CloudWatch Logs. You can enable audit logs or profiler logs. For more information, see [Auditing Amazon DocumentDB Events](https://docs.aws.amazon.com/documentdb/latest/developerguide/event-auditing.html) and [Profiling Amazon DocumentDB Operations](https://docs.aws.amazon.com/documentdb/latest/developerguide/profiling.html).
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  EnableCloudwatchLogsExports?: List<Value<string>>;
}

/**
 * The `AWS::DocDB::DBCluster` Amazon DocumentDB (with MongoDB compatibility) resource describes a DBCluster. Amazon DocumentDB is a fully managed, MongoDB-compatible document database engine. For more information, see [DBCluster](https://docs.aws.amazon.com/documentdb/latest/developerguide/API_DBCluster.html) in the _Amazon DocumentDB Developer Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-docdb-dbcluster.html}
 */
export interface DocDBDBClusterResource {
  Type: 'AWS::DocDB::DBCluster';
  Properties: DocDBDBClusterProperties;
}
