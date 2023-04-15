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
 * The `ScalingConfiguration` property type specifies the scaling configuration of an Aurora Serverless DB cluster.
 *
 * For more information, see [Using Amazon Aurora Serverless](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-serverless.html) in the _Amazon Aurora User Guide_.
 *
 * This property is only supported for Aurora Serverless v1. For Aurora Serverless v2, use `ServerlessV2ScalingConfiguration` property.
 *
 * Valid for: Aurora DB clusters only
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rds-dbcluster-scalingconfiguration.html}
 **/
export interface RDSDBClusterScalingConfiguration {
  /**
   * The action to take when the timeout is reached, either `ForceApplyCapacityChange` or `RollbackCapacityChange`.
   *
   * `ForceApplyCapacityChange` sets the capacity to the specified value as soon as possible.
   *
   * `RollbackCapacityChange`, the default, ignores the capacity change if a scaling point isn't found in the timeout period.
   *
   * If you specify `ForceApplyCapacityChange`, connections that prevent Aurora Serverless v1 from finding a scaling point might be dropped.
   *
   * For more information, see [ Autoscaling for Aurora Serverless v1](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-serverless.how-it-works.html#aurora-serverless.how-it-works.auto-scaling) in the _Amazon Aurora User Guide_.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TimeoutAction?: Value<string>;
  /**
   * The amount of time, in seconds, that Aurora Serverless v1 tries to find a scaling point to perform seamless scaling before enforcing the timeout action. The default is 300.
   *
   * Specify a value between 60 and 600 seconds.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SecondsBeforeTimeout?: Value<number>;
  /**
   * The time, in seconds, before an Aurora DB cluster in `serverless` mode is paused.
   *
   * Specify a value between 300 and 86,400 seconds.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SecondsUntilAutoPause?: Value<number>;
  /**
   * A value that indicates whether to allow or disallow automatic pause for an Aurora DB cluster in `serverless` DB engine mode. A DB cluster can be paused only when it's idle (it has no connections).
   *
   * If a DB cluster is paused for more than seven days, the DB cluster might be backed up with a snapshot. In this case, the DB cluster is restored when there is a request to connect to it.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AutoPause?: Value<boolean>;
  /**
   * The minimum capacity for an Aurora DB cluster in `serverless` DB engine mode.
   *
   * For Aurora MySQL, valid capacity values are `1`, `2`, `4`, `8`, `16`, `32`, `64`, `128`, and `256`.
   *
   * For Aurora PostgreSQL, valid capacity values are `2`, `4`, `8`, `16`, `32`, `64`, `192`, and `384`.
   *
   * The minimum capacity must be less than or equal to the maximum capacity.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MinCapacity?: Value<number>;
  /**
   * The maximum capacity for an Aurora DB cluster in `serverless` DB engine mode.
   *
   * For Aurora MySQL, valid capacity values are `1`, `2`, `4`, `8`, `16`, `32`, `64`, `128`, and `256`.
   *
   * For Aurora PostgreSQL, valid capacity values are `2`, `4`, `8`, `16`, `32`, `64`, `192`, and `384`.
   *
   * The maximum capacity must be greater than or equal to the minimum capacity.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MaxCapacity?: Value<number>;
}

/**
 * Specifies the connection endpoint for the primary instance of the DB cluster.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rds-dbcluster-endpoint.html}
 **/
export interface RDSDBClusterEndpoint {
  /**
   * Specifies the connection endpoint for the primary instance of the DB cluster.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Address?: Value<string>;
  /**
   * Specifies the port that the database engine is listening on.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Port?: Value<string>;
}

/**
 * The `ServerlessV2ScalingConfiguration` property type specifies the scaling configuration of an Aurora Serverless V2 DB cluster.
 *
 * For more information, see [Using Amazon Aurora Serverless v2](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-serverless-v2.html) in the _Amazon Aurora User Guide_.
 *
 * If you have an Aurora cluster, you must set the `ScalingConfigurationInfo` attribute before you add a DB instance that uses the `db.serverless` DB instance class. For more information, see [Clusters that use Aurora Serverless v2 must have a capacity range specified](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-serverless-v2.requirements.html#aurora-serverless-v2.requirements.capacity-range) in the _Amazon Aurora User Guide_.
 *
 * This property is only supported for Aurora Serverless v2. For Aurora Serverless v1, use `ScalingConfiguration` property.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rds-dbcluster-serverlessv2scalingconfiguration.html}
 **/
export interface RDSDBClusterServerlessV2ScalingConfiguration {
  /**
   * The minimum number of Aurora capacity units (ACUs) for a DB instance in an Aurora Serverless v2 cluster. You can specify ACU values in half-step increments, such as 8, 8.5, 9, and so on. The smallest value that you can use is 0.5.
   *
   * _Required_: No
   *
   * _Type_: Double
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MinCapacity?: Value<number>;
  /**
   * The maximum number of Aurora capacity units (ACUs) for a DB instance in an Aurora Serverless v2 cluster. You can specify ACU values in half-step increments, such as 40, 40.5, 41, and so on. The largest value that you can use is 128.
   *
   * The maximum capacity must be higher than 0.5 ACUs. For more information, see [ Choosing the maximum Aurora Serverless v2 capacity setting for a cluster](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-serverless-v2.setting-capacity.html#aurora-serverless-v2.max_capacity_considerations) in the _Amazon Aurora User Guide_.
   *
   * _Required_: No
   *
   * _Type_: Double
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MaxCapacity?: Value<number>;
}

/**
 * The `ReadEndpoint` return value specifies the reader endpoint for the DB cluster.
 *
 * The reader endpoint for a DB cluster load-balances connections across the Aurora Replicas that are available in a DB cluster. As clients request new connections to the reader endpoint, Aurora distributes the connection requests among the Aurora Replicas in the DB cluster. This functionality can help balance your read workload across multiple Aurora Replicas in your DB cluster.
 *
 * If a failover occurs, and the Aurora Replica that you are connected to is promoted to be the primary instance, your connection is dropped. To continue sending your read workload to other Aurora Replicas in the cluster, you can then reconnect to the reader endpoint.
 *
 * For more information about Aurora endpoints, see [Amazon Aurora connection management](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Aurora.Overview.Endpoints.html) in the _Amazon Aurora User Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rds-dbcluster-readendpoint.html}
 **/
export interface RDSDBClusterReadEndpoint {
  /**
   * The host address of the reader endpoint.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Address?: Value<string>;
}

/**
 * The `MasterUserSecret` return value specifies the secret managed by RDS in AWS Secrets Manager for the master user password.
 *
 * For more information, see [Password management with AWS Secrets Manager](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/rds-secrets-manager.html) in the _Amazon RDS User Guide_ and [Password management with AWS Secrets Manager](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/rds-secrets-manager.html) in the _Amazon Aurora User Guide._
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rds-dbcluster-masterusersecret.html}
 **/
export interface RDSDBClusterMasterUserSecret {
  /**
   * The Amazon Resource Name (ARN) of the secret.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SecretArn?: Value<string>;
  /**
   * The AWS KMS key identifier that is used to encrypt the secret.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  KmsKeyId?: Value<string>;
}

/**
 * Describes an AWS Identity and Access Management (IAM) role that is associated with a DB cluster.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rds-dbcluster-dbclusterrole.html}
 **/
export interface RDSDBClusterDBClusterRole {
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
   * The name of the feature associated with the AWS Identity and Access Management (IAM) role. IAM roles that are associated with a DB cluster grant permission for the DB cluster to access other AWS services on your behalf. For the list of supported feature names, see the `SupportedFeatureNames` description in [DBEngineVersion](https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DBEngineVersion.html) in the _Amazon RDS API Reference_.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FeatureName?: Value<string>;
}
export interface RDSDBClusterProperties {
  /**
   * Indicates whether the DB cluster is encrypted.
   *
   * If you specify the `KmsKeyId` property, then you must enable encryption.
   *
   * If you specify the `SourceDBClusterIdentifier` property, don't specify this property. The value is inherited from the source DB cluster, and if the DB cluster is encrypted, the specified `KmsKeyId` property is used.
   *
   * If you specify the `SnapshotIdentifier` and the specified snapshot is encrypted, don't specify this property. The value is inherited from the snapshot, and the specified `KmsKeyId` property is used.
   *
   * If you specify the `SnapshotIdentifier` and the specified snapshot isn't encrypted, you can use this property to specify that the restored DB cluster is encrypted. Specify the `KmsKeyId` property for the KMS key to use for encryption. If you don't want the restored DB cluster to be encrypted, then don't set this property or set it to `false`.
   *
   * Valid for: Aurora DB clusters and Multi-AZ DB clusters
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  StorageEncrypted?: Value<boolean>;
  /**
   * Reserved for future use.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  DBSystemId?: Value<string>;
  /**
   * The date and time to restore the DB cluster to.
   *
   * Valid Values: Value must be a time in Universal Coordinated Time (UTC) format
   *
   * Constraints:
   */
  RestoreToTime?: Value<string>;
  /**
   * The DB engine mode of the DB cluster, either `provisioned`, `serverless`, `parallelquery`, `global`, or `multimaster`.
   *
   * The `serverless` engine mode only applies for Aurora Serverless v1 DB clusters.
   *
   * The `parallelquery` engine mode isn't required for Aurora MySQL version 1.23 and higher 1.x versions, and version 2.09 and higher 2.x versions.
   *
   * The `global` engine mode isn't required for Aurora MySQL version 1.22 and higher 1.x versions, and `global` engine mode isn't required for any 2.x versions.
   *
   * The `multimaster` engine mode only applies for DB clusters created with Aurora MySQL version 5.6.10a.
   *
   * For Aurora PostgreSQL, the `global` engine mode isn't required, and both the `parallelquery` and the `multimaster` engine modes currently aren't supported.
   *
   * Limitations and requirements apply to some DB engine modes. For more information, see the following sections in the _Amazon Aurora User Guide_:
   */
  EngineMode?: Value<string>;
  /**
   * The port number on which the DB instances in the DB cluster accept connections.
   *
   * Default:
   */
  Port?: Value<number>;
  /**
   * The DB cluster identifier. This parameter is stored as a lowercase string.
   *
   * Constraints:
   */
  DBClusterIdentifier?: Value<string>;
  /**
   * The interval, in seconds, between points when Enhanced Monitoring metrics are collected for the DB cluster. To turn off collecting Enhanced Monitoring metrics, specify 0. The default is 0.
   *
   * If `MonitoringRoleArn` is specified, also set `MonitoringInterval` to a value other than 0.
   *
   * Valid Values: `0, 1, 5, 10, 15, 30, 60`
   *
   * Valid for: Multi-AZ DB clusters only
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MonitoringInterval?: Value<number>;
  /**
   * The Amazon Resource Name (ARN) of the source DB instance or DB cluster if this DB cluster is created as a read replica.
   *
   * Valid for: Aurora DB clusters only
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ReplicationSourceIdentifier?: Value<string>;
  /**
   * The name of the database engine to be used for this DB cluster.
   *
   * Valid Values:
   */
  Engine?: Value<string>;
  /**
   * An optional array of key-value pairs to apply to this DB cluster.
   *
   * Valid for: Aurora DB clusters and Multi-AZ DB clusters
   *
   * _Required_: No
   *
   * _Type_: List of [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Tags?: List<ResourceTag>;
  /**
   * The version number of the database engine to use.
   *
   * To list all of the available engine versions for `aurora` (for MySQL 5.6-compatible Aurora), use the following command:
   *
   * `aws rds describe-db-engine-versions --engine aurora --query "DBEngineVersions[].EngineVersion"`
   *
   * To list all of the available engine versions for `aurora-mysql` (for MySQL 5.7-compatible Aurora), use the following command:
   *
   * `aws rds describe-db-engine-versions --engine aurora-mysql --query "DBEngineVersions[].EngineVersion"`
   *
   * To list all of the available engine versions for `aurora-postgresql`, use the following command:
   *
   * `aws rds describe-db-engine-versions --engine aurora-postgresql --query "DBEngineVersions[].EngineVersion"`
   *
   * Valid for: Aurora DB clusters and Multi-AZ DB clusters
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
   */
  EngineVersion?: Value<string>;
  /**
   * Specifies the storage type to be associated with the DB cluster.
   *
   * This setting is required to create a Multi-AZ DB cluster.
   *
   * Valid values: `io1`
   *
   * When specified, a value for the `Iops` parameter is required.
   *
   * Default: `io1`
   *
   * Valid for: Multi-AZ DB clusters only
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  StorageType?: Value<string>;
  /**
   * The Amazon Resource Name (ARN) of the AWS KMS key that is used to encrypt the database instances in the DB cluster, such as `arn:aws:kms:us-east-1:012345678910:key/abcd1234-a123-456a-a12b-a123b4cd56ef`. If you enable the `StorageEncrypted` property but don't specify this property, the default KMS key is used. If you specify this property, you must set the `StorageEncrypted` property to `true`.
   *
   * If you specify the `SnapshotIdentifier` property, the `StorageEncrypted` property value is inherited from the snapshot, and if the DB cluster is encrypted, the specified `KmsKeyId` property is used.
   *
   * Valid for: Aurora DB clusters and Multi-AZ DB clusters
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  KmsKeyId?: Value<string>;
  /**
   * The `ServerlessV2ScalingConfiguration` property type specifies the scaling configuration of an Aurora Serverless V2 DB cluster.
   *
   * This property is only supported for Aurora Serverless v2. For Aurora Serverless v1, use `ScalingConfiguration` property.
   *
   * Valid for: Aurora DB clusters only
   *
   * _Required_: No
   *
   * _Type_: [ServerlessV2ScalingConfiguration](aws-properties-rds-dbcluster-serverlessv2scalingconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ServerlessV2ScalingConfiguration?: RDSDBClusterServerlessV2ScalingConfiguration;
  /**
   * The number of days to retain Performance Insights data. The default is 7 days. The following values are valid:
   */
  PerformanceInsightsRetentionPeriod?: Value<number>;
  /**
   * The name of your database. If you don't provide a name, then Amazon RDS won't create a database in this DB cluster. For naming constraints, see [Naming Constraints](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_Limits.html#RDS_Limits.Constraints) in the _Amazon Aurora User Guide_.
   *
   * Valid for: Aurora DB clusters and Multi-AZ DB clusters
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  DatabaseName?: Value<string>;
  /**
   * A value that indicates whether minor engine upgrades are applied automatically to the DB cluster during the maintenance window. By default, minor engine upgrades are applied automatically.
   *
   * Valid for: Multi-AZ DB clusters only
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AutoMinorVersionUpgrade?: Value<boolean>;
  /**
   * A DB subnet group that you want to associate with this DB cluster.
   *
   * If you are restoring a DB cluster to a point in time with `RestoreType` set to `copy-on-write`, and don't specify a DB subnet group name, then the DB cluster is restored with a default DB subnet group.
   *
   * Valid for: Aurora DB clusters and Multi-AZ DB clusters
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  DBSubnetGroupName?: Value<string>;
  /**
   * A value that indicates whether the DB cluster has deletion protection enabled. The database can't be deleted when deletion protection is enabled. By default, deletion protection is disabled.
   *
   * Valid for: Aurora DB clusters and Multi-AZ DB clusters
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DeletionProtection?: Value<boolean>;
  /**
   * The amount of storage in gibibytes (GiB) to allocate to each DB instance in the Multi-AZ DB cluster.
   *
   * This setting is required to create a Multi-AZ DB cluster.
   *
   * Valid for: Multi-AZ DB clusters only
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AllocatedStorage?: Value<number>;
  /**
   * The master password for the DB instance.
   *
   * If you specify the `SourceDBClusterIdentifier`, `SnapshotIdentifier`, or `GlobalClusterIdentifier` property, don't specify this property. The value is inherited from the source DB cluster, the snapshot, or the primary DB cluster for the global database cluster, respectively.
   *
   * Valid for: Aurora DB clusters and Multi-AZ DB clusters
   *
   * _Required_: Conditional
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MasterUserPassword?: Value<string>;
  /**
   * Contains the secret managed by RDS in AWS Secrets Manager for the master user password.
   *
   * For more information, see [Password management with AWS Secrets Manager](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/rds-secrets-manager.html) in the _Amazon RDS User Guide_ and [Password management with AWS Secrets Manager](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/rds-secrets-manager.html) in the _Amazon Aurora User Guide._
   *
   * _Required_: No
   *
   * _Type_: [MasterUserSecret](aws-properties-rds-dbcluster-masterusersecret.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MasterUserSecret?: RDSDBClusterMasterUserSecret;
  /**
   * When restoring a DB cluster to a point in time, the identifier of the source DB cluster from which to restore.
   *
   * Constraints:
   */
  SourceDBClusterIdentifier?: Value<string>;
  /**
   * The name of the master user for the DB cluster.
   *
   * If you specify the `SourceDBClusterIdentifier`, `SnapshotIdentifier`, or `GlobalClusterIdentifier` property, don't specify this property. The value is inherited from the source DB cluster, the snapshot, or the primary DB cluster for the global database cluster, respectively.
   *
   * Valid for: Aurora DB clusters and Multi-AZ DB clusters
   *
   * _Required_: Conditional
   *
   * _Type_: String
   *
   * _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
   */
  MasterUsername?: Value<string>;
  /**
   * The `ScalingConfiguration` property type specifies the scaling configuration of an Aurora Serverless DB cluster.
   *
   * This property is only supported for Aurora Serverless v1. For Aurora Serverless v2, use `ServerlessV2ScalingConfiguration` property.
   *
   * Valid for: Aurora DB clusters only
   *
   * _Required_: No
   *
   * _Type_: [ScalingConfiguration](aws-properties-rds-dbcluster-scalingconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ScalingConfiguration?: RDSDBClusterScalingConfiguration;
  /**
   * The AWS KMS key identifier for encryption of Performance Insights data.
   *
   * The AWS KMS key identifier is the key ARN, key ID, alias ARN, or alias name for the KMS key.
   *
   * If you don't specify a value for `PerformanceInsightsKMSKeyId`, then Amazon RDS uses your default KMS key. There is a default KMS key for your AWS account. Your AWS account has a different default KMS key for each AWS Region.
   *
   * Valid for: Multi-AZ DB clusters only
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PerformanceInsightsKmsKeyId?: Value<string>;
  /**
   * A value that indicates whether the DB cluster is publicly accessible.
   *
   * When the DB cluster is publicly accessible, its Domain Name System (DNS) endpoint resolves to the private IP address from within the DB cluster's virtual private cloud (VPC). It resolves to the public IP address from outside of the DB cluster's VPC. Access to the DB cluster is ultimately controlled by the security group it uses. That public access isn't permitted if the security group assigned to the DB cluster doesn't permit it.
   *
   * When the DB cluster isn't publicly accessible, it is an internal DB cluster with a DNS name that resolves to a private IP address.
   *
   * Default: The default behavior varies depending on whether `DBSubnetGroupName` is specified.
   *
   * If `DBSubnetGroupName` isn't specified, and `PubliclyAccessible` isn't specified, the following applies:
   */
  PubliclyAccessible?: Value<boolean>;
  /**
   * Indicates the directory ID of the Active Directory to create the DB cluster.
   *
   * For Amazon Aurora DB clusters, Amazon RDS can use Kerberos authentication to authenticate users that connect to the DB cluster.
   *
   * For more information, see [Kerberos authentication](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/kerberos-authentication.html) in the _Amazon Aurora User Guide_.
   *
   * Valid for: Aurora DB clusters only
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Domain?: Value<string>;
  /**
   * The target backtrack window, in seconds. To disable backtracking, set this value to 0.
   *
   * Currently, Backtrack is only supported for Aurora MySQL DB clusters.
   *
   * Default: 0
   *
   * Constraints:
   */
  BacktrackWindow?: Value<number>;
  /**
   * The name of the DB parameter group to apply to all instances of the DB cluster.
   *
   * When you apply a parameter group using the `DBInstanceParameterGroupName` parameter, the DB cluster isn't rebooted automatically. Also, parameter changes are applied immediately rather than during the next maintenance window.
   *
   * Default: The existing name setting
   *
   * Constraints:
   */
  DBInstanceParameterGroupName?: Value<string>;
  /**
   * The Amazon Resource Name (ARN) for the IAM role that permits RDS to send Enhanced Monitoring metrics to Amazon CloudWatch Logs. An example is `arn:aws:iam:123456789012:role/emaccess`. For information on creating a monitoring role, see [Setting up and enabling Enhanced Monitoring](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Monitoring.OS.html#USER_Monitoring.OS.Enabling) in the _Amazon RDS User Guide_.
   *
   * If `MonitoringInterval` is set to a value other than 0, supply a `MonitoringRoleArn` value.
   *
   * Valid for: Multi-AZ DB clusters only
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MonitoringRoleArn?: Value<string>;
  /**
   * Provides a list of the AWS Identity and Access Management (IAM) roles that are associated with the DB cluster. IAM roles that are associated with a DB cluster grant permission for the DB cluster to access other Amazon Web Services on your behalf.
   *
   * Valid for: Aurora DB clusters and Multi-AZ DB clusters
   *
   * _Required_: No
   *
   * _Type_: List of [DBClusterRole](aws-properties-rds-dbcluster-dbclusterrole.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AssociatedRoles?: List<RDSDBClusterDBClusterRole>;
  /**
   * A value that indicates whether to enable the HTTP endpoint for an Aurora Serverless DB cluster. By default, the HTTP endpoint is disabled.
   *
   * When enabled, the HTTP endpoint provides a connectionless web service API for running SQL queries on the Aurora Serverless DB cluster. You can also query your database from inside the RDS console with the query editor.
   *
   * For more information, see [Using the Data API for Aurora Serverless](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/data-api.html) in the _Amazon Aurora User Guide_.
   *
   * Valid for: Aurora DB clusters only
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  EnableHttpEndpoint?: Value<boolean>;
  /**
   * The identifier for the DB snapshot or DB cluster snapshot to restore from.
   *
   * You can use either the name or the Amazon Resource Name (ARN) to specify a DB cluster snapshot. However, you can use only the ARN to specify a DB snapshot.
   *
   * After you restore a DB cluster with a `SnapshotIdentifier` property, you must specify the same `SnapshotIdentifier` property for any future updates to the DB cluster. When you specify this property for an update, the DB cluster is not restored from the snapshot again, and the data in the database is not changed. However, if you don't specify the `SnapshotIdentifier` property, an empty DB cluster is created, and the original DB cluster is deleted. If you specify a property that is different from the previous snapshot restore property, a new DB cluster is restored from the specified `SnapshotIdentifier` property, and the original DB cluster is deleted.
   *
   * If you specify the `SnapshotIdentifier` property to restore a DB cluster (as opposed to specifying it for DB cluster updates), then don't specify the following properties:
   */
  SnapshotIdentifier?: Value<string>;
  /**
   * The daily time range during which automated backups are created. For more information, see [ Backup Window](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Aurora.Managing.Backups.html#Aurora.Managing.Backups.BackupWindow) in the _Amazon Aurora User Guide._
   *
   * Constraints:
   */
  PreferredBackupWindow?: Value<string>;
  /**
   * The network type of the DB cluster.
   *
   * Valid values:
   */
  NetworkType?: Value<string>;
  /**
   * A list of EC2 VPC security groups to associate with this DB cluster.
   *
   * If you plan to update the resource, don't specify VPC security groups in a shared VPC.
   *
   * Valid for: Aurora DB clusters and Multi-AZ DB clusters
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  VpcSecurityGroupIds?: List<Value<string>>;
  /**
   * A value that indicates whether to copy all tags from the DB cluster to snapshots of the DB cluster. The default is not to copy them.
   *
   * Valid for: Aurora DB clusters and Multi-AZ DB clusters
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CopyTagsToSnapshot?: Value<boolean>;
  /**
   * If you are configuring an Aurora global database cluster and want your Aurora DB cluster to be a secondary member in the global database cluster, specify the global cluster ID of the global database cluster. To define the primary database cluster of the global cluster, use the [AWS::RDS::GlobalCluster](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-globalcluster.html) resource.
   *
   * If you aren't configuring a global database cluster, don't specify this property.
   *
   * To remove the DB cluster from a global database cluster, specify an empty value for the `GlobalClusterIdentifier` property.
   *
   * For information about Aurora global databases, see [ Working with Amazon Aurora Global Databases](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-global-database.html) in the _Amazon Aurora User Guide_.
   *
   * Valid for: Aurora DB clusters only
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
   */
  GlobalClusterIdentifier?: Value<string>;
  /**
   * The type of restore to be performed. You can specify one of the following values:
   */
  RestoreType?: Value<string>;
  /**
   * Specifies the name of the IAM role to use when making API calls to the Directory Service.
   *
   * Valid for: Aurora DB clusters only
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DomainIAMRoleName?: Value<string>;
  /**
   * The compute and memory capacity of each DB instance in the Multi-AZ DB cluster, for example db.m6gd.xlarge. Not all DB instance classes are available in all AWS Regions, or for all database engines.
   *
   * For the full list of DB instance classes and availability for your engine, see [DB instance class](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.DBInstanceClass.html) in the _Amazon RDS User Guide_.
   *
   * This setting is required to create a Multi-AZ DB cluster.
   *
   * Valid for: Multi-AZ DB clusters only
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DBClusterInstanceClass?: Value<string>;
  /**
   * A list of Availability Zones (AZs) where instances in the DB cluster can be created. For information on AWS Regions and Availability Zones, see [Choosing the Regions and Availability Zones](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Concepts.RegionsAndAvailabilityZones.html) in the _Amazon Aurora User Guide_.
   *
   * Valid for: Aurora DB clusters only
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  AvailabilityZones?: List<Value<string>>;
  /**
   * The weekly time range during which system maintenance can occur, in Universal Coordinated Time (UTC).
   *
   * Format: `ddd:hh24:mi-ddd:hh24:mi`
   *
   * The default is a 30-minute window selected at random from an 8-hour block of time for each AWS Region, occurring on a random day of the week. To see the time blocks available, see [ Adjusting the Preferred DB Cluster Maintenance Window](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_UpgradeDBInstance.Maintenance.html#AdjustingTheMaintenanceWindow.Aurora) in the _Amazon Aurora User Guide._
   *
   * Valid Days: Mon, Tue, Wed, Thu, Fri, Sat, Sun.
   *
   * Constraints: Minimum 30-minute window.
   *
   * Valid for: Aurora DB clusters and Multi-AZ DB clusters
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PreferredMaintenanceWindow?: Value<string>;
  /**
   * The amount of Provisioned IOPS (input/output operations per second) to be initially allocated for each DB instance in the Multi-AZ DB cluster.
   *
   * For information about valid IOPS values, see [Provisioned IOPS storage](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_Storage.html#USER_PIOPS) in the _Amazon RDS User Guide_.
   *
   * This setting is required to create a Multi-AZ DB cluster.
   *
   * Constraints: Must be a multiple between .5 and 50 of the storage amount for the DB cluster.
   *
   * Valid for: Multi-AZ DB clusters only
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Iops?: Value<number>;
  /**
   * The AWS Region which contains the source DB cluster when replicating a DB cluster. For example, `us-east-1`.
   *
   * Valid for: Aurora DB clusters only
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  SourceRegion?: Value<string>;
  /**
   * A value that indicates whether to restore the DB cluster to the latest restorable backup time. By default, the DB cluster is not restored to the latest restorable backup time.
   *
   * Valid for: Aurora DB clusters and Multi-AZ DB clusters
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  UseLatestRestorableTime?: Value<boolean>;
  /**
   * A value that indicates whether to manage the master user password with AWS Secrets Manager.
   *
   * For more information, see [Password management with AWS Secrets Manager](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/rds-secrets-manager.html) in the _Amazon RDS User Guide_ and [Password management with AWS Secrets Manager](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/rds-secrets-manager.html) in the _Amazon Aurora User Guide._
   *
   * Constraints:
   */
  ManageMasterUserPassword?: Value<boolean>;
  /**
   * A value that indicates whether to enable mapping of AWS Identity and Access Management (IAM) accounts to database accounts. By default, mapping is disabled.
   *
   * For more information, see [ IAM Database Authentication](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/UsingWithRDS.IAMDBAuth.html) in the _Amazon Aurora User Guide._
   *
   * Valid for: Aurora DB clusters only
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  EnableIAMDatabaseAuthentication?: Value<boolean>;
  /**
   * The name of the DB cluster parameter group to associate with this DB cluster.
   *
   * If you apply a parameter group to an existing DB cluster, then its DB instances might need to reboot. This can result in an outage while the DB instances are rebooting.
   *
   * If you apply a change to parameter group associated with a stopped DB cluster, then the update stack waits until the DB cluster is started.
   *
   * To list all of the available DB cluster parameter group names, use the following command:
   *
   * `aws rds describe-db-cluster-parameter-groups --query "DBClusterParameterGroups[].DBClusterParameterGroupName" --output text`
   *
   * Valid for: Aurora DB clusters and Multi-AZ DB clusters
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DBClusterParameterGroupName?: Value<string>;
  /**
   * A value that indicates whether to turn on Performance Insights for the DB cluster.
   *
   * For more information, see [ Using Amazon Performance Insights](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_PerfInsights.html) in the _Amazon RDS User Guide_.
   *
   * Valid for: Multi-AZ DB clusters only
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PerformanceInsightsEnabled?: Value<boolean>;
  /**
   * The number of days for which automated backups are retained.
   *
   * Default: 1
   *
   * Constraints:
   */
  BackupRetentionPeriod?: Value<number>;
  /**
   * The list of log types that need to be enabled for exporting to CloudWatch Logs. The values in the list depend on the DB engine being used. For more information, see [ Publishing Database Logs to Amazon CloudWatch Logs](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_LogAccess.html#USER_LogAccess.Procedural.UploadtoCloudWatch) in the _Amazon Aurora User Guide_.
   *
   * **Aurora MySQL**
   *
   * Valid values: `audit`, `error`, `general`, `slowquery`
   *
   * **Aurora PostgreSQL**
   *
   * Valid values: `postgresql`
   *
   * Valid for: Aurora DB clusters and Multi-AZ DB clusters
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
 * The `AWS::RDS::DBCluster` resource creates an Amazon Aurora DB cluster or Multi-AZ DB cluster.
 *
 * For more information about creating an Aurora DB cluster, see [ Creating an Amazon Aurora DB cluster](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Aurora.CreateInstance.html) in the _Amazon Aurora User Guide_.
 *
 * For more information about creating a Multi-AZ DB cluster, see [Creating a Multi-AZ DB cluster](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/create-multi-az-db-cluster.html) in the _Amazon RDS User Guide_.
 *
 * **Note**
 *
 * You can only create this resource in AWS Regions where Amazon Aurora or Multi-AZ DB clusters are supported.
 *
 * **Updating DB clusters**
 *
 * When properties labeled "_Update requires:_ [ Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)" are updated, AWS CloudFormation first creates a replacement DB cluster, then changes references from other dependent resources to point to the replacement DB cluster, and finally deletes the old DB cluster.
 *
 * **Important**
 *
 * We highly recommend that you take a snapshot of the database before updating the stack. If you don't, you lose the data when AWS CloudFormation replaces your DB cluster. To preserve your data, perform the following procedure:
 *
 * Deactivate any applications that are using the DB cluster so that there's no activity on the DB instance.
 *
 * Create a snapshot of the DB cluster. For more information, see [Creating a DB Cluster Snapshot](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_CreateSnapshotCluster.html).
 *
 * If you want to restore your DB cluster using a DB cluster snapshot, modify the updated template with your DB cluster changes and add the `SnapshotIdentifier` property with the ID of the DB cluster snapshot that you want to use.
 *
 * After you restore a DB cluster with a `SnapshotIdentifier` property, you must specify the same `SnapshotIdentifier` property for any future updates to the DB cluster. When you specify this property for an update, the DB cluster is not restored from the DB cluster snapshot again, and the data in the database is not changed. However, if you don't specify the `SnapshotIdentifier` property, an empty DB cluster is created, and the original DB cluster is deleted. If you specify a property that is different from the previous snapshot restore property, a new DB cluster is restored from the specified `SnapshotIdentifier` property, and the original DB cluster is deleted.
 *
 * Update the stack.
 *
 * Currently, when you are updating the stack for an Aurora Serverless DB cluster, you can't include changes to any other properties when you specify one of the following properties: `PreferredBackupWindow`, `PreferredMaintenanceWindow`, and `Port`. This limitation doesn't apply to provisioned DB clusters.
 *
 * For more information about updating other properties of this resource, see ` [ModifyDBCluster](https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_ModifyDBCluster.html)`. For more information about updating stacks, see [AWS CloudFormation Stacks Updates](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks.html).
 *
 * **Deleting DB clusters**
 *
 * The default `DeletionPolicy` for `AWS::RDS::DBCluster` resources is `Snapshot`. For more information about how AWS CloudFormation deletes resources, see [ DeletionPolicy Attribute](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-deletionpolicy.html).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbcluster.html}
 */
export interface RDSDBClusterResource {
  Type: 'AWS::RDS::DBCluster';
  Properties: RDSDBClusterProperties;
}
