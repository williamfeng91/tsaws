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
 * - us-west-1 (version 119.1.0)
 * - us-west-2 (version 119.1.0)
 */
import { List, Value } from '../../shared-types/dataTypes';
import { ResourceTag } from '../../shared-types/resource';

/**
 * Describes an Amazon Identity and Access Management (IAM) role that is associated with a DB cluster.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-neptune-dbcluster-dbclusterrole.html}
 **/
export interface NeptuneDBClusterDBClusterRole {
  /**
   * The Amazon Resource Name (ARN) of the IAM role that is associated with the DB cluster.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RoleArn: Value<string>;
  /**
   * The name of the feature associated with the Amazon Identity and Access Management (IAM) role. For the list of supported feature names, see [DescribeDBEngineVersions](https://docs.aws.amazon.com/neptune/latest/userguide/api-other-apis.html#DescribeDBEngineVersions).
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FeatureName?: Value<string>;
}
export interface NeptuneDBClusterProperties {
  /**
   * Indicates whether the DB cluster is encrypted.
   *
   * If you specify the `DBClusterIdentifier`, `DBSnapshotIdentifier`, or `SourceDBInstanceIdentifier` property, don't specify this property. The value is inherited from the cluster, snapshot, or source DB instance. If you specify the `KmsKeyId` property, you must enable encryption.
   *
   * If you specify the `KmsKeyId`, you must enable encryption by setting `StorageEncrypted` to true.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  StorageEncrypted?: Value<boolean>;
  /**
   * Creates a new DB cluster from a DB snapshot or DB cluster snapshot.
   *
   * If a DB snapshot is specified, the target DB cluster is created from the source DB snapshot with a default configuration and default security group.
   *
   * If a DB cluster snapshot is specified, the target DB cluster is created from the source DB cluster restore point with the same configuration as the original source DB cluster, except that the new DB cluster is created with the default security group.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  RestoreToTime?: Value<string>;
  /**
   * Indicates the database engine version.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  EngineVersion?: Value<string>;
  /**
   * If `StorageEncrypted` is true, the Amazon KMS key identifier for the encrypted DB cluster.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  KmsKeyId?: Value<string>;
  /**
   * Provides a list of the Amazon Identity and Access Management (IAM) roles that are associated with the DB cluster. IAM roles that are associated with a DB cluster grant permission for the DB cluster to access other Amazon services on your behalf.
   *
   * _Required_: No
   *
   * _Type_: List of [DBClusterRole](aws-properties-neptune-dbcluster-dbclusterrole.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AssociatedRoles?: List<NeptuneDBClusterDBClusterRole>;
  /**
   * Specifies the identifier for a DB cluster snapshot. Must match the identifier of an existing snapshot.
   *
   * After you restore a DB cluster using a `SnapshotIdentifier`, you must specify the same `SnapshotIdentifier` for any future updates to the DB cluster. When you specify this property for an update, the DB cluster is not restored from the snapshot again, and the data in the database is not changed.
   *
   * However, if you don't specify the `SnapshotIdentifier`, an empty DB cluster is created, and the original DB cluster is deleted. If you specify a property that is different from the previous snapshot restore property, the DB cluster is restored from the snapshot specified by the `SnapshotIdentifier`, and the original DB cluster is deleted.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  SnapshotIdentifier?: Value<string>;
  /**
   * Provides the list of EC2 Availability Zones that instances in the DB cluster can be created in.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  AvailabilityZones?: List<Value<string>>;
  /**
   * Contains a user-supplied DB cluster identifier. This identifier is the unique key that identifies a DB cluster.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  DBClusterIdentifier?: Value<string>;
  /**
   * Specifies the weekly time range during which system maintenance can occur, in Universal Coordinated Time (UTC).
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PreferredMaintenanceWindow?: Value<string>;
  /**
   * True if mapping of Amazon Identity and Access Management (IAM) accounts to database accounts is enabled, and otherwise false.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  IamAuthEnabled?: Value<boolean>;
  /**
   * Specifies information on the subnet group associated with the DB cluster, including the name, description, and subnets in the subnet group.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  DBSubnetGroupName?: Value<string>;
  /**
   * Indicates whether or not the DB cluster has deletion protection enabled. The database can't be deleted when deletion protection is enabled.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DeletionProtection?: Value<boolean>;
  /**
   * Specifies the daily time range during which automated backups are created if automated backups are enabled, as determined by the `BackupRetentionPeriod`.
   *
   * An update may require some interruption.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PreferredBackupWindow?: Value<string>;
  /**
   * Creates a new DB cluster from a DB snapshot or DB cluster snapshot.
   *
   * If a DB snapshot is specified, the target DB cluster is created from the source DB snapshot with a default configuration and default security group.
   *
   * If a DB cluster snapshot is specified, the target DB cluster is created from the source DB cluster restore point with the same configuration as the original source DB cluster, except that the new DB cluster is created with the default security group.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  UseLatestRestorableTime?: Value<boolean>;
  /**
   * Provides a list of VPC security groups that the DB cluster belongs to.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  VpcSecurityGroupIds?: List<Value<string>>;
  /**
   * Creates a new DB cluster from a DB snapshot or DB cluster snapshot.
   *
   * If a DB snapshot is specified, the target DB cluster is created from the source DB snapshot with a default configuration and default security group.
   *
   * If a DB cluster snapshot is specified, the target DB cluster is created from the source DB cluster restore point with the same configuration as the original source DB cluster, except that the new DB cluster is created with the default security group.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  SourceDBClusterIdentifier?: Value<string>;
  /**
   * Provides the name of the DB cluster parameter group.
   *
   * An update may require some interruption. See [ModifyDBInstance](https://docs.aws.amazon.com/neptune/latest/userguide/api-instances.html#ModifyDBInstance) in the Amazon Neptune User Guide for more information.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DBClusterParameterGroupName?: Value<string>;
  /**
   * Specifies the number of days for which automatic DB snapshots are retained.
   *
   * An update may require some interruption. See [ModifyDBInstance](https://docs.aws.amazon.com/neptune/latest/userguide/api-instances.html#ModifyDBInstance) in the Amazon Neptune User Guide for more information.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  BackupRetentionPeriod?: Value<number>;
  /**
   * Creates a new DB cluster from a DB snapshot or DB cluster snapshot.
   *
   * If a DB snapshot is specified, the target DB cluster is created from the source DB snapshot with a default configuration and default security group.
   *
   * If a DB cluster snapshot is specified, the target DB cluster is created from the source DB cluster restore point with the same configuration as the original source DB cluster, except that the new DB cluster is created with the default security group.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  RestoreType?: Value<string>;
  /**
   * The tags assigned to this cluster.
   *
   * _Required_: No
   *
   * _Type_: List of [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Tags?: List<ResourceTag>;
  /**
   * Specifies a list of log types that are enabled for export to CloudWatch Logs.
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
 * The `AWS::Neptune::DBCluster` resource creates an Amazon Neptune DB cluster. Neptune is a fully managed graph database.
 *
 * **Note**
 *
 * Currently, you can create this resource only in AWS Regions in which Amazon Neptune is supported.
 *
 * If no `DeletionPolicy` is set for `AWS::Neptune::DBCluster` resources, the default deletion behavior is that the entire volume will be deleted without a snapshot. To retain a backup of the volume, the `DeletionPolicy` should be set to `Snapshot`. For more information about how AWS CloudFormation deletes resources, see [DeletionPolicy Attribute](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-deletionpolicy.html).
 *
 * You can use `AWS::Neptune::DBCluster.DeletionProtection` to help guard against unintended deletion of your DB cluster.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-neptune-dbcluster.html}
 */
export interface NeptuneDBClusterResource {
  Type: 'AWS::Neptune::DBCluster';
  Properties: NeptuneDBClusterProperties;
}
