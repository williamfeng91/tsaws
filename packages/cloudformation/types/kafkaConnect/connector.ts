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

/**
 * The details of the Apache Kafka cluster to which the connector is connected.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kafkaconnect-connector-apachekafkacluster.html}
 **/
export interface KafkaConnectConnectorApacheKafkaCluster {
  /**
   * Details of an Amazon VPC which has network connectivity to the Apache Kafka cluster.
   *
   * _Required_: Yes
   *
   * _Type_: [Vpc](aws-properties-kafkaconnect-connector-vpc.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Vpc: KafkaConnectConnectorVpc;
  /**
   * The bootstrap servers of the cluster.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  BootstrapServers: Value<string>;
}

/**
 * The configuration of the workers, which are the processes that run the connector logic.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kafkaconnect-connector-workerconfiguration.html}
 **/
export interface KafkaConnectConnectorWorkerConfiguration {
  /**
   * The revision of the worker configuration.
   *
   * _Required_: Yes
   *
   * _Type_: Integer
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Revision: Value<number>;
  /**
   * The Amazon Resource Name (ARN) of the worker configuration.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  WorkerConfigurationArn: Value<string>;
}

/**
 * The scale-in policy for the connector.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kafkaconnect-connector-scaleinpolicy.html}
 **/
export interface KafkaConnectConnectorScaleInPolicy {
  /**
   * Specifies the CPU utilization percentage threshold at which you want connector scale in to be triggered.
   *
   * _Required_: Yes
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CpuUtilizationPercentage: Value<number>;
}

/**
 * Information about the capacity of the connector, whether it is auto scaled or provisioned.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kafkaconnect-connector-capacity.html}
 **/
export interface KafkaConnectConnectorCapacity {
  /**
   * Details about a fixed capacity allocated to a connector.
   *
   * _Required_: No
   *
   * _Type_: [ProvisionedCapacity](aws-properties-kafkaconnect-connector-provisionedcapacity.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ProvisionedCapacity?: KafkaConnectConnectorProvisionedCapacity;
  /**
   * Information about the auto scaling parameters for the connector.
   *
   * _Required_: No
   *
   * _Type_: [AutoScaling](aws-properties-kafkaconnect-connector-autoscaling.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AutoScaling?: KafkaConnectConnectorAutoScaling;
}

/**
 * Details about log delivery.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kafkaconnect-connector-logdelivery.html}
 **/
export interface KafkaConnectConnectorLogDelivery {
  /**
   * The workers can send worker logs to different destination types. This configuration specifies the details of these destinations.
   *
   * _Required_: Yes
   *
   * _Type_: [WorkerLogDelivery](aws-properties-kafkaconnect-connector-workerlogdelivery.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  WorkerLogDelivery: KafkaConnectConnectorWorkerLogDelivery;
}

/**
 * The settings for delivering logs to Amazon Kinesis Data Firehose.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kafkaconnect-connector-firehoselogdelivery.html}
 **/
export interface KafkaConnectConnectorFirehoseLogDelivery {
  /**
   * The name of the Kinesis Data Firehose delivery stream that is the destination for log delivery.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  DeliveryStream?: Value<string>;
  /**
   * Specifies whether connector logs get delivered to Amazon Kinesis Data Firehose.
   *
   * _Required_: Yes
   *
   * _Type_: Boolean
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Enabled: Value<boolean>;
}

/**
 * Information about the VPC in which the connector resides.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kafkaconnect-connector-vpc.html}
 **/
export interface KafkaConnectConnectorVpc {
  /**
   * The security groups for the connector.
   *
   * _Required_: Yes
   *
   * _Type_: List of String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  SecurityGroups: List<Value<string>>;
  /**
   * The subnets for the connector.
   *
   * _Required_: Yes
   *
   * _Type_: List of String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Subnets: List<Value<string>>;
}

/**
 * Details about delivering logs to Amazon S3.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kafkaconnect-connector-s3logdelivery.html}
 **/
export interface KafkaConnectConnectorS3LogDelivery {
  /**
   * The name of the S3 bucket that is the destination for log delivery.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Bucket?: Value<string>;
  /**
   * Specifies whether connector logs get sent to the specified Amazon S3 destination.
   *
   * _Required_: Yes
   *
   * _Type_: Boolean
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Enabled: Value<boolean>;
  /**
   * The S3 prefix that is the destination for log delivery.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Prefix?: Value<string>;
}

/**
 * Specifies how the connector scales.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kafkaconnect-connector-autoscaling.html}
 **/
export interface KafkaConnectConnectorAutoScaling {
  /**
   * The sacle-out policy for the connector.
   *
   * _Required_: Yes
   *
   * _Type_: [ScaleOutPolicy](aws-properties-kafkaconnect-connector-scaleoutpolicy.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ScaleOutPolicy: KafkaConnectConnectorScaleOutPolicy;
  /**
   * The sacle-in policy for the connector.
   *
   * _Required_: Yes
   *
   * _Type_: [ScaleInPolicy](aws-properties-kafkaconnect-connector-scaleinpolicy.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ScaleInPolicy: KafkaConnectConnectorScaleInPolicy;
  /**
   * The maximum number of workers allocated to the connector.
   *
   * _Required_: Yes
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MaxWorkerCount: Value<number>;
  /**
   * The minimum number of workers allocated to the connector.
   *
   * _Required_: Yes
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MinWorkerCount: Value<number>;
  /**
   * The number of microcontroller units (MCUs) allocated to each connector worker. The valid values are 1,2,4,8.
   *
   * _Required_: Yes
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  McuCount: Value<number>;
}

/**
 * Details of encryption in transit to the Apache Kafka cluster.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kafkaconnect-connector-kafkaclusterencryptionintransit.html}
 **/
export interface KafkaConnectConnectorKafkaClusterEncryptionInTransit {
  /**
   * The type of encryption in transit to the Apache Kafka cluster.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  EncryptionType: Value<string>;
}

/**
 * Workers can send worker logs to different destination types. This configuration specifies the details of these destinations.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kafkaconnect-connector-workerlogdelivery.html}
 **/
export interface KafkaConnectConnectorWorkerLogDelivery {
  /**
   * Details about delivering logs to Amazon S3.
   *
   * _Required_: No
   *
   * _Type_: [S3LogDelivery](aws-properties-kafkaconnect-connector-s3logdelivery.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  S3?: KafkaConnectConnectorS3LogDelivery;
  /**
   * Details about delivering logs to Amazon Kinesis Data Firehose.
   *
   * _Required_: No
   *
   * _Type_: [FirehoseLogDelivery](aws-properties-kafkaconnect-connector-firehoselogdelivery.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Firehose?: KafkaConnectConnectorFirehoseLogDelivery;
  /**
   * Details about delivering logs to Amazon CloudWatch Logs.
   *
   * _Required_: No
   *
   * _Type_: [CloudWatchLogsLogDelivery](aws-properties-kafkaconnect-connector-cloudwatchlogslogdelivery.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  CloudWatchLogs?: KafkaConnectConnectorCloudWatchLogsLogDelivery;
}

/**
 * The scale-out policy for the connector.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kafkaconnect-connector-scaleoutpolicy.html}
 **/
export interface KafkaConnectConnectorScaleOutPolicy {
  /**
   * The CPU utilization percentage threshold at which you want connector scale out to be triggered.
   *
   * _Required_: Yes
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CpuUtilizationPercentage: Value<number>;
}

/**
 * The details of the Apache Kafka cluster to which the connector is connected.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kafkaconnect-connector-kafkacluster.html}
 **/
export interface KafkaConnectConnectorKafkaCluster {
  /**
   * The Apache Kafka cluster to which the connector is connected.
   *
   * _Required_: Yes
   *
   * _Type_: [ApacheKafkaCluster](aws-properties-kafkaconnect-connector-apachekafkacluster.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ApacheKafkaCluster: KafkaConnectConnectorApacheKafkaCluster;
}

/**
 * Details about a connector's provisioned capacity.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kafkaconnect-connector-provisionedcapacity.html}
 **/
export interface KafkaConnectConnectorProvisionedCapacity {
  /**
   * The number of workers that are allocated to the connector.
   *
   * _Required_: Yes
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  WorkerCount: Value<number>;
  /**
   * The number of microcontroller units (MCUs) allocated to each connector worker. The valid values are 1,2,4,8.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  McuCount?: Value<number>;
}

/**
 * The settings for delivering connector logs to Amazon CloudWatch Logs.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kafkaconnect-connector-cloudwatchlogslogdelivery.html}
 **/
export interface KafkaConnectConnectorCloudWatchLogsLogDelivery {
  /**
   * The name of the CloudWatch log group that is the destination for log delivery.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  LogGroup?: Value<string>;
  /**
   * Whether log delivery to Amazon CloudWatch Logs is enabled.
   *
   * _Required_: Yes
   *
   * _Type_: Boolean
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Enabled: Value<boolean>;
}

/**
 * A plugin is an AWS resource that contains the code that defines a connector's logic.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kafkaconnect-connector-customplugin.html}
 **/
export interface KafkaConnectConnectorCustomPlugin {
  /**
   * The Amazon Resource Name (ARN) of the custom plugin.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  CustomPluginArn: Value<string>;
  /**
   * The revision of the custom plugin.
   *
   * _Required_: Yes
   *
   * _Type_: Integer
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Revision: Value<number>;
}

/**
 * A plugin is an AWS resource that contains the code that defines your connector logic.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kafkaconnect-connector-plugin.html}
 **/
export interface KafkaConnectConnectorPlugin {
  /**
   * Details about a custom plugin.
   *
   * _Required_: Yes
   *
   * _Type_: [CustomPlugin](aws-properties-kafkaconnect-connector-customplugin.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  CustomPlugin: KafkaConnectConnectorCustomPlugin;
}

/**
 * The client authentication information used in order to authenticate with the Apache Kafka cluster.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kafkaconnect-connector-kafkaclusterclientauthentication.html}
 **/
export interface KafkaConnectConnectorKafkaClusterClientAuthentication {
  /**
   * The type of client authentication used to connect to the Apache Kafka cluster. Value NONE means that no client authentication is used.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  AuthenticationType: Value<string>;
}
export interface KafkaConnectConnectorProperties {
  /**
   * The details of the Apache Kafka cluster to which the connector is connected.
   *
   * _Required_: Yes
   *
   * _Type_: [KafkaCluster](aws-properties-kafkaconnect-connector-kafkacluster.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  KafkaCluster: KafkaConnectConnectorKafkaCluster;
  /**
   * The version of Kafka Connect. It has to be compatible with both the Apache Kafka cluster's version and the plugins.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  KafkaConnectVersion: Value<string>;
  /**
   * The worker configurations that are in use with the connector.
   *
   * _Required_: No
   *
   * _Type_: [WorkerConfiguration](aws-properties-kafkaconnect-connector-workerconfiguration.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  WorkerConfiguration?: KafkaConnectConnectorWorkerConfiguration;
  /**
   * The connector's compute capacity settings.
   *
   * _Required_: Yes
   *
   * _Type_: [Capacity](aws-properties-kafkaconnect-connector-capacity.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Capacity: KafkaConnectConnectorCapacity;
  /**
   * Details of encryption in transit to the Apache Kafka cluster.
   *
   * _Required_: Yes
   *
   * _Type_: [KafkaClusterEncryptionInTransit](aws-properties-kafkaconnect-connector-kafkaclusterencryptionintransit.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  KafkaClusterEncryptionInTransit: KafkaConnectConnectorKafkaClusterEncryptionInTransit;
  /**
   * The description of the connector.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ConnectorDescription?: Value<string>;
  /**
   * The type of client authentication used to connect to the Apache Kafka cluster. The value is NONE when no client authentication is used.
   *
   * _Required_: Yes
   *
   * _Type_: [KafkaClusterClientAuthentication](aws-properties-kafkaconnect-connector-kafkaclusterclientauthentication.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  KafkaClusterClientAuthentication: KafkaConnectConnectorKafkaClusterClientAuthentication;
  /**
   * The name of the connector.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ConnectorName: Value<string>;
  /**
   * The Amazon Resource Name (ARN) of the IAM role used by the connector to access Amazon Web Services resources.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ServiceExecutionRoleArn: Value<string>;
  /**
   * The configuration of the connector.
   *
   * _Required_: Yes
   *
   * _Type_: Map of String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ConnectorConfiguration: { [key: string]: Value<string> };
  /**
   * The settings for delivering connector logs to Amazon CloudWatch Logs.
   *
   * _Required_: No
   *
   * _Type_: [LogDelivery](aws-properties-kafkaconnect-connector-logdelivery.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  LogDelivery?: KafkaConnectConnectorLogDelivery;
  /**
   * Specifies which plugin to use for the connector. You must specify a single-element list. Amazon MSK Connect does not currently support specifying multiple plugins.
   *
   * _Required_: Yes
   *
   * _Type_: List of [Plugin](aws-properties-kafkaconnect-connector-plugin.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Plugins: List<KafkaConnectConnectorPlugin>;
}

/**
 * Creates a connector using the specified properties.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kafkaconnect-connector.html}
 */
export interface KafkaConnectConnectorResource {
  Type: 'AWS::KafkaConnect::Connector';
  Properties: KafkaConnectConnectorProperties;
}
