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
 * Specifies the destination, format and type of the logs.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticache-replicationgroup-logdeliveryconfigurationrequest.html}
 **/
export interface ElastiCacheReplicationGroupLogDeliveryConfigurationRequest {
  /**
   * Configuration details of either a CloudWatch Logs destination or Kinesis Data Firehose destination.
   *
   * _Required_: Yes
   *
   * _Type_: [DestinationDetails](aws-properties-elasticache-replicationgroup-destinationdetails.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DestinationDetails: ElastiCacheReplicationGroupDestinationDetails;
  /**
   * Specify either CloudWatch Logs or Kinesis Data Firehose as the destination type. Valid values are either `cloudwatch-logs` or `kinesis-firehose`.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DestinationType: Value<string>;
  /**
   * Valid values are either `json` or `text`.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  LogFormat: Value<string>;
  /**
   * Valid value is either `slow-log`, which refers to [slow-log](https://redis.io/commands/slowlog) or `engine-log`.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  LogType: Value<string>;
}

/**
 * The configuration details of the CloudWatch Logs destination. Note that this field is marked as required but only if CloudWatch Logs was chosen as the destination.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticache-replicationgroup-cloudwatchlogsdestinationdetails.html}
 **/
export interface ElastiCacheReplicationGroupCloudWatchLogsDestinationDetails {
  /**
   * The name of the CloudWatch Logs log group.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  LogGroup: Value<string>;
}

/**
 * Configuration details of either a CloudWatch Logs destination or Kinesis Data Firehose destination.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticache-replicationgroup-destinationdetails.html}
 **/
export interface ElastiCacheReplicationGroupDestinationDetails {
  /**
   * The configuration details of the CloudWatch Logs destination. Note that this field is marked as required but only if CloudWatch Logs was chosen as the destination.
   *
   * _Required_: No
   *
   * _Type_: [CloudWatchLogsDestinationDetails](aws-properties-elasticache-replicationgroup-cloudwatchlogsdestinationdetails.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CloudWatchLogsDetails?: ElastiCacheReplicationGroupCloudWatchLogsDestinationDetails;
  /**
   * The configuration details of the Kinesis Data Firehose destination. Note that this field is marked as required but only if Kinesis Data Firehose was chosen as the destination.
   *
   * _Required_: No
   *
   * _Type_: [KinesisFirehoseDestinationDetails](aws-properties-elasticache-replicationgroup-kinesisfirehosedestinationdetails.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  KinesisFirehoseDetails?: ElastiCacheReplicationGroupKinesisFirehoseDestinationDetails;
}

/**
 * `NodeGroupConfiguration` is a property of the `AWS::ElastiCache::ReplicationGroup` resource that configures an Amazon ElastiCache (ElastiCache) Redis cluster node group.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticache-replicationgroup-nodegroupconfiguration.html}
 **/
export interface ElastiCacheReplicationGroupNodeGroupConfiguration {
  /**
   * Either the ElastiCache for Redis supplied 4-digit id or a user supplied id for the node group these configuration values apply to.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `4`
   *
   * _Pattern_: `d+`
   *
   * _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
   */
  NodeGroupId?: Value<string>;
  /**
   * The Availability Zone where the primary node of this node group (shard) is launched.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  PrimaryAvailabilityZone?: Value<string>;
  /**
   * A list of Availability Zones to be used for the read replicas. The number of Availability Zones in this list must match the value of `ReplicaCount` or `ReplicasPerNodeGroup` if not specified.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ReplicaAvailabilityZones?: List<Value<string>>;
  /**
   * The number of read replica nodes in this node group (shard).
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ReplicaCount?: Value<number>;
  /**
   * A string of comma-separated values where the first set of values are the slot numbers (zero based), and the second set of values are the keyspaces for each slot. The following example specifies three slots (numbered 0, 1, and 2): ` 0,1,2,0-4999,5000-9999,10000-16,383`.
   *
   * If you don't specify a value, ElastiCache allocates keys equally among each slot.
   *
   * When you use an `UseOnlineResharding` update policy to update the number of node groups without interruption, ElastiCache evenly distributes the keyspaces between the specified number of slots. This cannot be updated later. Therefore, after updating the number of node groups in this way, you should remove the value specified for the `Slots` property of each `NodeGroupConfiguration` from the stack template, as it no longer reflects the actual values in each node group. For more information, see [UseOnlineResharding Policy](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-updatepolicy.html#cfn-attributes-updatepolicy-useonlineresharding).
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Slots?: Value<string>;
}

/**
 * The configuration details of the Kinesis Data Firehose destination. Note that this field is marked as required but only if Kinesis Data Firehose was chosen as the destination.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticache-replicationgroup-kinesisfirehosedestinationdetails.html}
 **/
export interface ElastiCacheReplicationGroupKinesisFirehoseDestinationDetails {
  /**
   * The name of the Kinesis Data Firehose delivery stream.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DeliveryStream: Value<string>;
}
export interface ElastiCacheReplicationGroupProperties {
  /**
   * A flag that enables encryption at rest when set to `true`.
   *
   * You cannot modify the value of `AtRestEncryptionEnabled` after the replication group is created. To enable encryption at rest on a replication group you must set `AtRestEncryptionEnabled` to `true` when you create the replication group.
   *
   * **Required:** Only available when creating a replication group in an Amazon VPC using redis version `3.2.6` or `4.x` onward.
   *
   * Default: `false`
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  AtRestEncryptionEnabled?: Value<boolean>;
  /**
   * **Reserved parameter.** The password used to access a password protected server.
   *
   * `AuthToken` can be specified only on replication groups where `TransitEncryptionEnabled` is `true`. For more information, see [Authenticating Users with the Redis AUTH Command](https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/auth.html).
   *
   * For HIPAA compliance, you must specify `TransitEncryptionEnabled` as `true`, an `AuthToken`, and a `CacheSubnetGroup`.
   *
   * Password constraints:
   */
  AuthToken?: Value<string>;
  /**
   * If you are running Redis engine version 6.0 or later, set this parameter to yes if you want to opt-in to the next minor version upgrade campaign. This parameter is disabled for previous versions.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AutoMinorVersionUpgrade?: Value<boolean>;
  /**
   * Specifies whether a read-only replica is automatically promoted to read/write primary if the existing primary fails.
   *
   * `AutomaticFailoverEnabled` must be enabled for Redis (cluster mode enabled) replication groups.
   *
   * Default: false
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AutomaticFailoverEnabled?: Value<boolean>;
  /**
   * The compute and memory capacity of the nodes in the node group (shard).
   *
   * The following node types are supported by ElastiCache. Generally speaking, the current generation types provide more memory and computational power at lower cost when compared to their equivalent previous generation counterparts.
   */
  CacheNodeType?: Value<string>;
  /**
   * The name of the parameter group to associate with this replication group. If this argument is omitted, the default cache parameter group for the specified engine is used.
   *
   * If you are running Redis version 3.2.4 or later, only one node group (shard), and want to use a default parameter group, we recommend that you specify the parameter group by name.
   */
  CacheParameterGroupName?: Value<string>;
  /**
   * A list of cache security group names to associate with this replication group.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CacheSecurityGroupNames?: List<Value<string>>;
  /**
   * The name of the cache subnet group to be used for the replication group.
   *
   * If you're going to launch your cluster in an Amazon VPC, you need to create a subnet group before you start creating a cluster. For more information, see [AWS::ElastiCache::SubnetGroup](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticache-subnetgroup.html).
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  CacheSubnetGroupName?: Value<string>;
  /**
   * Enables data tiering. Data tiering is only supported for replication groups using the r6gd node type. This parameter must be set to true when using r6gd nodes. For more information, see [Data tiering](https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/data-tiering.html).
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  DataTieringEnabled?: Value<boolean>;
  /**
   * The name of the cache engine to be used for the clusters in this replication group. The value must be set to `Redis`.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Engine?: Value<string>;
  /**
   * The version number of the cache engine to be used for the clusters in this replication group. To view the supported cache engine versions, use the `DescribeCacheEngineVersions` operation.
   *
   * **Important:** You can upgrade to a newer engine version (see [Selecting a Cache Engine and Version](https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/SelectEngine.html#VersionManagement)) in the _ElastiCache User Guide_, but you cannot downgrade to an earlier engine version. If you want to use an earlier engine version, you must delete the existing cluster or replication group and create it anew with the earlier engine version.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  EngineVersion?: Value<string>;
  /**
   * The name of the Global datastore
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  GlobalReplicationGroupId?: Value<string>;
  /**
   * The network type you choose when creating a replication group, either `ipv4` | `ipv6`. IPv6 is supported for workloads using Redis engine version 6.2 onward or Memcached engine version 1.6.6 on all instances built on the [Nitro system](http://aws.amazon.com/ec2/nitro/).
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `ipv4 | ipv6`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  IpDiscovery?: Value<string>;
  /**
   * The ID of the KMS key used to encrypt the disk on the cluster.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  KmsKeyId?: Value<string>;
  /**
   * Specifies the destination, format and type of the logs.
   *
   * _Required_: No
   *
   * _Type_: List of [LogDeliveryConfigurationRequest](aws-properties-elasticache-replicationgroup-logdeliveryconfigurationrequest.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  LogDeliveryConfigurations?: List<ElastiCacheReplicationGroupLogDeliveryConfigurationRequest>;
  /**
   * A flag indicating if you have Multi-AZ enabled to enhance fault tolerance. For more information, see [Minimizing Downtime: Multi-AZ](https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/AutoFailover.html).
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MultiAZEnabled?: Value<boolean>;
  /**
   * Must be either `ipv4` | `ipv6` | `dual_stack`. IPv6 is supported for workloads using Redis engine version 6.2 onward or Memcached engine version 1.6.6 on all instances built on the [Nitro system](http://aws.amazon.com/ec2/nitro/).
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `dual_stack | ipv4 | ipv6`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  NetworkType?: Value<string>;
  /**
   * `NodeGroupConfiguration ` is a property of the `AWS::ElastiCache::ReplicationGroup` resource that configures an Amazon ElastiCache (ElastiCache) Redis cluster node group.
   *
   * If you set [UseOnlineResharding](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-updatepolicy.html#cfn-attributes-updatepolicy-useonlineresharding) to `true`, you can update `NodeGroupConfiguration` without interruption. When `UseOnlineResharding` is set to `false`, or is not specified, updating `NodeGroupConfiguration` results in [replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement).
   *
   * _Required_: No
   *
   * _Type_: [List](aws-properties-elasticache-replicationgroup-nodegroupconfiguration.md) of [NodeGroupConfiguration](aws-properties-elasticache-replicationgroup-nodegroupconfiguration.md)
   *
   * _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
   */
  NodeGroupConfiguration?: List<ElastiCacheReplicationGroupNodeGroupConfiguration>;
  /**
   * The Amazon Resource Name (ARN) of the Amazon Simple Notification Service (SNS) topic to which notifications are sent.
   *
   * The Amazon SNS topic owner must be the same as the cluster owner.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  NotificationTopicArn?: Value<string>;
  /**
   * The number of clusters this replication group initially has.
   *
   * This parameter is not used if there is more than one node group (shard). You should use `ReplicasPerNodeGroup` instead.
   *
   * If `AutomaticFailoverEnabled` is `true`, the value of this parameter must be at least 2. If `AutomaticFailoverEnabled` is `false` you can omit this parameter (it will default to 1), or you can explicitly set it to a value between 2 and 6.
   *
   * The maximum permitted value for `NumCacheClusters` is 6 (1 primary plus 5 replicas).
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  NumCacheClusters?: Value<number>;
  /**
   * An optional parameter that specifies the number of node groups (shards) for this Redis (cluster mode enabled) replication group. For Redis (cluster mode disabled) either omit this parameter or set it to 1.
   *
   * If you set [UseOnlineResharding](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-updatepolicy.html#cfn-attributes-updatepolicy-useonlineresharding) to `true`, you can update `NumNodeGroups` without interruption. When `UseOnlineResharding` is set to `false`, or is not specified, updating `NumNodeGroups` results in [replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement).
   *
   * Default: 1
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
   */
  NumNodeGroups?: Value<number>;
  /**
   * The port number on which each member of the replication group accepts connections.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Port?: Value<number>;
  /**
   * A list of EC2 Availability Zones in which the replication group's clusters are created. The order of the Availability Zones in the list is the order in which clusters are allocated. The primary cluster is created in the first AZ in the list.
   *
   * This parameter is not used if there is more than one node group (shard). You should use `NodeGroupConfiguration` instead.
   *
   * If you are creating your replication group in an Amazon VPC (recommended), you can only locate clusters in Availability Zones associated with the subnets in the selected subnet group.
   *
   * The number of Availability Zones listed must equal the value of `NumCacheClusters`.
   *
   * Default: system chosen Availability Zones.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  PreferredCacheClusterAZs?: List<Value<string>>;
  /**
   * Specifies the weekly time range during which maintenance on the cluster is performed. It is specified as a range in the format ddd:hh24:mi-ddd:hh24:mi (24H Clock UTC). The minimum maintenance window is a 60 minute period.
   *
   * Valid values for `ddd` are:
   */
  PreferredMaintenanceWindow?: Value<string>;
  /**
   * The identifier of the cluster that serves as the primary for this replication group. This cluster must already exist and have a status of `available`.
   *
   * This parameter is not required if `NumCacheClusters`, `NumNodeGroups`, or `ReplicasPerNodeGroup` is specified.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PrimaryClusterId?: Value<string>;
  /**
   * An optional parameter that specifies the number of replica nodes in each node group (shard). Valid values are 0 to 5.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ReplicasPerNodeGroup?: Value<number>;
  /**
   * A user-created description for the replication group.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ReplicationGroupDescription: Value<string>;
  /**
   * The replication group identifier. This parameter is stored as a lowercase string.
   *
   * Constraints:
   */
  ReplicationGroupId?: Value<string>;
  /**
   * One or more Amazon VPC security groups associated with this replication group.
   *
   * Use this parameter only when you are creating a replication group in an Amazon Virtual Private Cloud (Amazon VPC).
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SecurityGroupIds?: List<Value<string>>;
  /**
   * A list of Amazon Resource Names (ARN) that uniquely identify the Redis RDB snapshot files stored in Amazon S3. The snapshot files are used to populate the new replication group. The Amazon S3 object name in the ARN cannot contain any commas. The new replication group will have the number of node groups (console: shards) specified by the parameter _NumNodeGroups_ or the number of node groups configured by _NodeGroupConfiguration_ regardless of the number of ARNs specified here.
   *
   * Example of an Amazon S3 ARN: `arn:aws:s3:::my_bucket/snapshot1.rdb`
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  SnapshotArns?: List<Value<string>>;
  /**
   * The name of a snapshot from which to restore data into the new replication group. The snapshot status changes to `restoring` while the new replication group is being created.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  SnapshotName?: Value<string>;
  /**
   * The number of days for which ElastiCache retains automatic snapshots before deleting them. For example, if you set `SnapshotRetentionLimit` to 5, a snapshot that was taken today is retained for 5 days before being deleted.
   *
   * Default: 0 (i.e., automatic backups are disabled for this cluster).
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SnapshotRetentionLimit?: Value<number>;
  /**
   * The daily time range (in UTC) during which ElastiCache begins taking a daily snapshot of your node group (shard).
   *
   * Example: `05:00-09:00`
   *
   * If you do not specify this parameter, ElastiCache automatically chooses an appropriate time range.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SnapshotWindow?: Value<string>;
  /**
   * The cluster ID that is used as the daily snapshot source for the replication group. This parameter cannot be set for Redis (cluster mode enabled) replication groups.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SnapshottingClusterId?: Value<string>;
  /**
   * A list of tags to be added to this resource. Tags are comma-separated key,value pairs (e.g. Key=`myKey`, Value=`myKeyValue`. You can include multiple tags as shown following: Key=`myKey`, Value=`myKeyValue` Key=`mySecondKey`, Value=`mySecondKeyValue`. Tags on replication groups will be replicated to all nodes.
   *
   * _Required_: No
   *
   * _Type_: List of [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Tags?: List<ResourceTag>;
  /**
   * A flag that enables in-transit encryption when set to `true`.
   *
   * You cannot modify the value of `TransitEncryptionEnabled` after the cluster is created. To enable in-transit encryption on a cluster you must set `TransitEncryptionEnabled` to `true` when you create a cluster.
   *
   * This parameter is valid only if the `Engine` parameter is `redis`, the `EngineVersion` parameter is `3.2.6` or `4.x` onward, and the cluster is being created in an Amazon VPC.
   *
   * If you enable in-transit encryption, you must also specify a value for `CacheSubnetGroup`.
   *
   * **Required:** Only available when creating a replication group in an Amazon VPC using redis version `3.2.6` or `4.x` onward.
   *
   * Default: `false`
   *
   * For HIPAA compliance, you must specify `TransitEncryptionEnabled` as `true`, an `AuthToken`, and a `CacheSubnetGroup`.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TransitEncryptionEnabled?: Value<boolean>;
  /**
   * A setting that allows you to migrate your clients to use in-transit encryption, with no downtime.
   *
   * When setting `TransitEncryptionEnabled` to `true`, you can set your `TransitEncryptionMode` to `preferred` in the same request, to allow both encrypted and unencrypted connections at the same time. Once you migrate all your Redis clients to use encrypted connections you can modify the value to `required` to allow encrypted connections only.
   *
   * Setting `TransitEncryptionMode` to `required` is a two-step process that requires you to first set the `TransitEncryptionMode` to `preferred`, after that you can set `TransitEncryptionMode` to `required`.
   *
   * This process will not trigger the replacement of the replication group.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `preferred | required`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TransitEncryptionMode?: Value<string>;
  /**
   * The ID of user group to associate with the replication group.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  UserGroupIds?: List<Value<string>>;
}

/**
 * The `AWS::ElastiCache::ReplicationGroup` resource creates an Amazon ElastiCache Redis replication group. A Redis (cluster mode disabled) replication group is a collection of cache clusters, where one of the clusters is a primary read-write cluster and the others are read-only replicas.
 *
 * A Redis (cluster mode enabled) cluster is comprised of from 1 to 90 shards (API/CLI: node groups). Each shard has a primary node and up to 5 read-only replica nodes. The configuration can range from 90 shards and 0 replicas to 15 shards and 5 replicas, which is the maximum number or replicas allowed.
 *
 * The node or shard limit can be increased to a maximum of 500 per cluster if the Redis engine version is 5.0.6 or higher. For example, you can choose to configure a 500 node cluster that ranges between 83 shards (one primary and 5 replicas per shard) and 500 shards (single primary and no replicas). Make sure there are enough available IP addresses to accommodate the increase. Common pitfalls include the subnets in the subnet group have too small a CIDR range or the subnets are shared and heavily used by other clusters. For more information, see [Creating a Subnet Group](https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/SubnetGroups.Creating.html). For versions below 5.0.6, the limit is 250 per cluster.
 *
 * To request a limit increase, see [Amazon Service Limits](https://docs.aws.amazon.com/general/latest/gr/aws_service_limits.html) and choose the limit type **Nodes per cluster per instance type**.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-replicationgroup.html}
 */
export interface ElastiCacheReplicationGroupResource {
  Type: 'AWS::ElastiCache::ReplicationGroup';
  Properties: ElastiCacheReplicationGroupProperties;
}
