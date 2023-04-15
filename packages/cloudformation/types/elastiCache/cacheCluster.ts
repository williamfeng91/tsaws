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
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticache-cachecluster-logdeliveryconfigurationrequest.html}
 **/
export interface ElastiCacheCacheClusterLogDeliveryConfigurationRequest {
  /**
   * Configuration details of either a CloudWatch Logs destination or Kinesis Data Firehose destination.
   *
   * _Required_: Yes
   *
   * _Type_: [DestinationDetails](aws-properties-elasticache-cachecluster-destinationdetails.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DestinationDetails: ElastiCacheCacheClusterDestinationDetails;
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
 * The configuration details of the Kinesis Data Firehose destination. Note that this field is marked as required but only if Kinesis Data Firehose was chosen as the destination.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticache-cachecluster-kinesisfirehosedestinationdetails.html}
 **/
export interface ElastiCacheCacheClusterKinesisFirehoseDestinationDetails {
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

/**
 * Configuration details of either a CloudWatch Logs destination or Kinesis Data Firehose destination.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticache-cachecluster-destinationdetails.html}
 **/
export interface ElastiCacheCacheClusterDestinationDetails {
  /**
   * The configuration details of the CloudWatch Logs destination. Note that this field is marked as required but only if CloudWatch Logs was chosen as the destination.
   *
   * _Required_: No
   *
   * _Type_: [CloudWatchLogsDestinationDetails](aws-properties-elasticache-cachecluster-cloudwatchlogsdestinationdetails.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CloudWatchLogsDetails?: ElastiCacheCacheClusterCloudWatchLogsDestinationDetails;
  /**
   * The configuration details of the Kinesis Data Firehose destination. Note that this field is marked as required but only if Kinesis Data Firehose was chosen as the destination.
   *
   * _Required_: No
   *
   * _Type_: [KinesisFirehoseDestinationDetails](aws-properties-elasticache-cachecluster-kinesisfirehosedestinationdetails.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  KinesisFirehoseDetails?: ElastiCacheCacheClusterKinesisFirehoseDestinationDetails;
}

/**
 * Configuration details of a CloudWatch Logs destination. Note that this field is marked as required but only if CloudWatch Logs was chosen as the destination.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticache-cachecluster-cloudwatchlogsdestinationdetails.html}
 **/
export interface ElastiCacheCacheClusterCloudWatchLogsDestinationDetails {
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
export interface ElastiCacheCacheClusterProperties {
  AZMode?: Value<string>;
  AutoMinorVersionUpgrade?: Value<boolean>;
  CacheNodeType: Value<string>;
  CacheParameterGroupName?: Value<string>;
  CacheSecurityGroupNames?: List<Value<string>>;
  CacheSubnetGroupName?: Value<string>;
  ClusterName?: Value<string>;
  Engine: Value<string>;
  EngineVersion?: Value<string>;
  IpDiscovery?: Value<string>;
  LogDeliveryConfigurations?: List<ElastiCacheCacheClusterLogDeliveryConfigurationRequest>;
  NetworkType?: Value<string>;
  NotificationTopicArn?: Value<string>;
  NumCacheNodes: Value<number>;
  Port?: Value<number>;
  PreferredAvailabilityZone?: Value<string>;
  PreferredAvailabilityZones?: List<Value<string>>;
  PreferredMaintenanceWindow?: Value<string>;
  SnapshotArns?: List<Value<string>>;
  SnapshotName?: Value<string>;
  SnapshotRetentionLimit?: Value<number>;
  SnapshotWindow?: Value<string>;
  Tags?: List<ResourceTag>;
  TransitEncryptionEnabled?: Value<boolean>;
  VpcSecurityGroupIds?: List<Value<string>>;
}

/**
 *
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticache-cache-cluster.html}
 */
export interface ElastiCacheCacheClusterResource {
  Type: 'AWS::ElastiCache::CacheCluster';
  Properties: ElastiCacheCacheClusterProperties;
}
