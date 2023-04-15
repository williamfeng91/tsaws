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
 * A member of a Global datastore. It contains the Replication Group Id, the Amazon region and the role of the replication group.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticache-globalreplicationgroup-globalreplicationgroupmember.html}
 **/
export interface ElastiCacheGlobalReplicationGroupGlobalReplicationGroupMember {
  /**
   * Indicates the role of the replication group, `PRIMARY` or `SECONDARY`.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Role?: Value<string>;
  /**
   * The Amazon region of the Global datastore member.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ReplicationGroupRegion?: Value<string>;
  /**
   * The replication group id of the Global datastore member.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ReplicationGroupId?: Value<string>;
}

/**
 * A list of the replication groups
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticache-globalreplicationgroup-regionalconfiguration.html}
 **/
export interface ElastiCacheGlobalReplicationGroupRegionalConfiguration {
  /**
   * The Amazon region where the cluster is stored
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ReplicationGroupRegion?: Value<string>;
  /**
   * The name of the secondary cluster
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ReplicationGroupId?: Value<string>;
  /**
   * A list of PreferredAvailabilityZones objects that specifies the configuration of a node group in the resharded cluster.
   *
   * _Required_: No
   *
   * _Type_: List of [ReshardingConfiguration](aws-properties-elasticache-globalreplicationgroup-reshardingconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ReshardingConfigurations?: List<ElastiCacheGlobalReplicationGroupReshardingConfiguration>;
}

/**
 * A list of `PreferredAvailabilityZones` objects that specifies the configuration of a node group in the resharded cluster.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticache-globalreplicationgroup-reshardingconfiguration.html}
 **/
export interface ElastiCacheGlobalReplicationGroupReshardingConfiguration {
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
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  NodeGroupId?: Value<string>;
  /**
   * A list of preferred availability zones for the nodes in this cluster.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PreferredAvailabilityZones?: List<Value<string>>;
}
export interface ElastiCacheGlobalReplicationGroupProperties {
  /**
   * The suffix name of a Global Datastore. The suffix guarantees uniqueness of the Global Datastore name across multiple regions.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  GlobalReplicationGroupIdSuffix?: Value<string>;
  /**
   * The cache node type of the Global datastore
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CacheNodeType?: Value<string>;
  /**
   * The Elasticache Redis engine version.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  EngineVersion?: Value<string>;
  /**
   * The optional description of the Global datastore
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  GlobalReplicationGroupDescription?: Value<string>;
  /**
   * The Regions that comprise the Global Datastore.
   *
   * _Required_: No
   *
   * _Type_: List of [RegionalConfiguration](aws-properties-elasticache-globalreplicationgroup-regionalconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RegionalConfigurations?: List<ElastiCacheGlobalReplicationGroupRegionalConfiguration>;
  /**
   * The name of the cache parameter group to use with the Global datastore. It must be compatible with the major engine version used by the Global datastore.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CacheParameterGroupName?: Value<string>;
  /**
   * The replication groups that comprise the Global datastore.
   *
   * _Required_: Yes
   *
   * _Type_: List of [GlobalReplicationGroupMember](aws-properties-elasticache-globalreplicationgroup-globalreplicationgroupmember.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Members: List<ElastiCacheGlobalReplicationGroupGlobalReplicationGroupMember>;
  /**
   * Specifies whether a read-only replica is automatically promoted to read/write primary if the existing primary fails.
   *
   * `AutomaticFailoverEnabled` must be enabled for Redis (cluster mode enabled) replication groups.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AutomaticFailoverEnabled?: Value<boolean>;
  /**
   * The number of node groups that comprise the Global Datastore.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  GlobalNodeGroupCount?: Value<number>;
}

/**
 * Consists of a primary cluster that accepts writes and an associated secondary cluster that resides in a different Amazon region. The secondary cluster accepts only reads. The primary cluster automatically replicates updates to the secondary cluster.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-globalreplicationgroup.html}
 */
export interface ElastiCacheGlobalReplicationGroupResource {
  Type: 'AWS::ElastiCache::GlobalReplicationGroup';
  Properties: ElastiCacheGlobalReplicationGroupProperties;
}
