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
 * Not currently supported by AWS CloudFormation.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-cluster-vpcconnectivityiam.html}
 **/
export interface MSKClusterVpcConnectivityIam {
  /**
   * Property description not available.
   *
   * _Required_: Yes
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Enabled: Value<boolean>;
}

/**
 * Not currently supported by AWS CloudFormation.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-cluster-vpcconnectivitysasl.html}
 **/
export interface MSKClusterVpcConnectivitySasl {
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: [VpcConnectivityIam](aws-properties-msk-cluster-vpcconnectivityiam.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Iam?: MSKClusterVpcConnectivityIam;
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: [VpcConnectivityScram](aws-properties-msk-cluster-vpcconnectivityscram.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Scram?: MSKClusterVpcConnectivityScram;
}

/**
 * Specifies whether the cluster's brokers are accessible from the internet. Public access is off by default.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-cluster-publicaccess.html}
 **/
export interface MSKClusterPublicAccess {
  /**
   * Set to `DISABLED` to turn off public access or to `SERVICE_PROVIDED_EIPS` to turn it on. Public access if off by default.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Type?: Value<string>;
}

/**
 * The data volume encryption details.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-cluster-encryptionatrest.html}
 **/
export interface MSKClusterEncryptionAtRest {
  /**
   * The ARN of the Amazon KMS key for encrypting data at rest. If you don't specify a KMS key, MSK creates one for you and uses it on your behalf.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  DataVolumeKMSKeyId: Value<string>;
}

/**
 * The settings for encrypting data in transit.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-cluster-encryptionintransit.html}
 **/
export interface MSKClusterEncryptionInTransit {
  /**
   * Indicates the encryption setting for data in transit between clients and brokers. The following are the possible values.
   */
  ClientBroker?: Value<string>;
  /**
   * When set to true, it indicates that data communication among the broker nodes of the cluster is encrypted. When set to false, the communication happens in plain text. The default value is true.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  InCluster?: Value<boolean>;
}

/**
 * Prometheus settings for open monitoring.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-cluster-prometheus.html}
 **/
export interface MSKClusterPrometheus {
  /**
   * Indicates whether you want to enable or disable the JMX Exporter.
   *
   * _Required_: No
   *
   * _Type_: [JmxExporter](aws-properties-msk-cluster-jmxexporter.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  JmxExporter?: MSKClusterJmxExporter;
  /**
   * Indicates whether you want to enable or disable the Node Exporter.
   *
   * _Required_: No
   *
   * _Type_: [NodeExporter](aws-properties-msk-cluster-nodeexporter.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  NodeExporter?: MSKClusterNodeExporter;
}

/**
 * Specifies whether provisioned throughput is turned on and the volume throughput target.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-cluster-provisionedthroughput.html}
 **/
export interface MSKClusterProvisionedThroughput {
  /**
   * The provisioned throughput rate in MiB per second.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  VolumeThroughput?: Value<number>;
  /**
   * Specifies whether provisioned throughput is turned on for the cluster.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Enabled?: Value<boolean>;
}

/**
 * Includes encryption-related information, such as the Amazon KMS key used for encrypting data at rest and whether you want MSK to encrypt your data in transit.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-cluster-encryptioninfo.html}
 **/
export interface MSKClusterEncryptionInfo {
  /**
   * The data-volume encryption details.
   *
   * _Required_: No
   *
   * _Type_: [EncryptionAtRest](aws-properties-msk-cluster-encryptionatrest.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  EncryptionAtRest?: MSKClusterEncryptionAtRest;
  /**
   * The details for encryption in transit.
   *
   * _Required_: No
   *
   * _Type_: [EncryptionInTransit](aws-properties-msk-cluster-encryptionintransit.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  EncryptionInTransit?: MSKClusterEncryptionInTransit;
}

/**
 * Details for client authentication using SASL. To turn on SASL, you must also turn on `EncryptionInTransit` by setting `inCluster` to true. You must set `clientBroker` to either `TLS` or `TLS_PLAINTEXT`. If you choose `TLS_PLAINTEXT`, then you must also set `unauthenticated` to true.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-cluster-sasl.html}
 **/
export interface MSKClusterSasl {
  /**
   * Details for IAM access control.
   *
   * _Required_: No
   *
   * _Type_: [Iam](aws-properties-msk-cluster-iam.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Iam?: MSKClusterIam;
  /**
   * Details for SASL/SCRAM client authentication.
   *
   * _Required_: No
   *
   * _Type_: [Scram](aws-properties-msk-cluster-scram.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Scram?: MSKClusterScram;
}

/**
 * Not currently supported by AWS CloudFormation.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-cluster-vpcconnectivitytls.html}
 **/
export interface MSKClusterVpcConnectivityTls {
  /**
   * Property description not available.
   *
   * _Required_: Yes
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Enabled: Value<boolean>;
}

/**
 * Indicates whether you want to enable or disable the JMX Exporter.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-cluster-jmxexporter.html}
 **/
export interface MSKClusterJmxExporter {
  /**
   * Indicates whether you want to enable or disable the JMX Exporter.
   *
   * _Required_: Yes
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  EnabledInBroker: Value<boolean>;
}

/**
 * Indicates whether you want to enable or disable the Node Exporter.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-cluster-nodeexporter.html}
 **/
export interface MSKClusterNodeExporter {
  /**
   * Indicates whether you want to enable or disable the Node Exporter.
   *
   * _Required_: Yes
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  EnabledInBroker: Value<boolean>;
}

/**
 * Not currently supported by AWS CloudFormation.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-cluster-vpcconnectivityscram.html}
 **/
export interface MSKClusterVpcConnectivityScram {
  /**
   * Property description not available.
   *
   * _Required_: Yes
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Enabled: Value<boolean>;
}

/**
 * Details of the Kinesis Data Firehose delivery stream that is the destination for broker logs.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-cluster-firehose.html}
 **/
export interface MSKClusterFirehose {
  /**
   * The Kinesis Data Firehose delivery stream that is the destination for broker logs.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DeliveryStream?: Value<string>;
  /**
   * Specifies whether broker logs get sent to the specified Kinesis Data Firehose delivery stream.
   *
   * _Required_: Yes
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Enabled: Value<boolean>;
}

/**
 * Details for client authentication using TLS.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-cluster-tls.html}
 **/
export interface MSKClusterTls {
  /**
   * TLS authentication is enabled or not.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Enabled?: Value<boolean>;
  /**
   * List of ACM Certificate Authority ARNs.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CertificateAuthorityArnList?: List<Value<string>>;
}

/**
 * The details of the Amazon S3 destination for broker logs.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-cluster-s3.html}
 **/
export interface MSKClusterS3 {
  /**
   * The name of the S3 bucket that is the destination for broker logs.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Bucket?: Value<string>;
  /**
   * Specifies whether broker logs get sent to the specified Amazon S3 destination.
   *
   * _Required_: Yes
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Enabled: Value<boolean>;
  /**
   * The S3 prefix that is the destination for broker logs.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Prefix?: Value<string>;
}

/**
 * Details of the CloudWatch Logs destination for broker logs.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-cluster-cloudwatchlogs.html}
 **/
export interface MSKClusterCloudWatchLogs {
  /**
   * The CloudWatch Logs group that is the destination for broker logs.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  LogGroup?: Value<string>;
  /**
   * Specifies whether broker logs get sent to the specified CloudWatch Logs destination.
   *
   * _Required_: Yes
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Enabled: Value<boolean>;
}

/**
 * Details for allowing no client authentication.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-cluster-unauthenticated.html}
 **/
export interface MSKClusterUnauthenticated {
  /**
   * Unauthenticated is enabled or not.
   *
   * _Required_: Yes
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Enabled: Value<boolean>;
}

/**
 * You can configure your Amazon MSK cluster to send broker logs to different destination types. This configuration specifies the details of these destinations.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-cluster-brokerlogs.html}
 **/
export interface MSKClusterBrokerLogs {
  /**
   * Details of the Amazon MSK destination for broker logs.
   *
   * _Required_: No
   *
   * _Type_: [S3](aws-properties-msk-cluster-s3.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  S3?: MSKClusterS3;
  /**
   * Details of the Kinesis Data Firehose delivery stream that is the destination for broker logs.
   *
   * _Required_: No
   *
   * _Type_: [Firehose](aws-properties-msk-cluster-firehose.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Firehose?: MSKClusterFirehose;
  /**
   * Details of the CloudWatch Logs destination for broker logs.
   *
   * _Required_: No
   *
   * _Type_: [CloudWatchLogs](aws-properties-msk-cluster-cloudwatchlogs.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CloudWatchLogs?: MSKClusterCloudWatchLogs;
}

/**
 * You can configure your Amazon MSK cluster to send broker logs to different destination types. This is a container for the configuration details related to broker logs.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-cluster-logginginfo.html}
 **/
export interface MSKClusterLoggingInfo {
  /**
   * You can configure your Amazon MSK cluster to send broker logs to different destination types. This configuration specifies the details of these destinations.
   *
   * _Required_: Yes
   *
   * _Type_: [BrokerLogs](aws-properties-msk-cluster-brokerlogs.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  BrokerLogs: MSKClusterBrokerLogs;
}

/**
 * Details for IAM access control.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-cluster-iam.html}
 **/
export interface MSKClusterIam {
  /**
   * Whether IAM access control is enabled.
   *
   * _Required_: Yes
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Enabled: Value<boolean>;
}

/**
 * Not currently supported by AWS CloudFormation.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-cluster-vpcconnectivityclientauthentication.html}
 **/
export interface MSKClusterVpcConnectivityClientAuthentication {
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: [VpcConnectivitySasl](aws-properties-msk-cluster-vpcconnectivitysasl.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Sasl?: MSKClusterVpcConnectivitySasl;
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: [VpcConnectivityTls](aws-properties-msk-cluster-vpcconnectivitytls.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Tls?: MSKClusterVpcConnectivityTls;
}

/**
 * Specifies the Amazon MSK configuration to use for the brokers.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-cluster-configurationinfo.html}
 **/
export interface MSKClusterConfigurationInfo {
  /**
   * The revision of the Amazon MSK configuration to use.
   *
   * _Required_: Yes
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Revision: Value<number>;
  /**
   * The Amazon Resource Name (ARN) of the MSK configuration to use. For example, `arn:aws:kafka:us-east-1:123456789012:configuration/example-configuration-name/abcdabcd-1234-abcd-1234-abcd123e8e8e-1`.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Arn: Value<string>;
}

/**
 * The setup to be used for brokers in the cluster.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-cluster-brokernodegroupinfo.html}
 **/
export interface MSKClusterBrokerNodeGroupInfo {
  /**
   * The security groups to associate with the elastic network interfaces in order to specify who can connect to and communicate with the Amazon MSK cluster. If you don't specify a security group, Amazon MSK uses the default security group associated with the VPC. If you specify security groups that were shared with you, you must ensure that you have permissions to them. Specifically, you need the `ec2:DescribeSecurityGroups` permission.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  SecurityGroups?: List<Value<string>>;
  /**
   * The list of subnets to connect to in the client virtual private cloud (VPC). Amazon creates elastic network interfaces inside these subnets. Client applications use elastic network interfaces to produce and consume data.
   *
   * If you use the US West (N. California) Region, specify exactly two subnets. For other Regions where Amazon MSK is available, you can specify either two or three subnets. The subnets that you specify must be in distinct Availability Zones. When you create a cluster, Amazon MSK distributes the broker nodes evenly across the subnets that you specify.
   *
   * Client subnets can't occupy the Availability Zone with ID `use1-az3`.
   *
   * _Required_: Yes
   *
   * _Type_: List of String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ClientSubnets: List<Value<string>>;
  /**
   * Information about the cluster's connectivity setting.
   *
   * _Required_: No
   *
   * _Type_: [ConnectivityInfo](aws-properties-msk-cluster-connectivityinfo.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ConnectivityInfo?: MSKClusterConnectivityInfo;
  /**
   * Contains information about storage volumes attached to Amazon MSK broker nodes.
   *
   * _Required_: No
   *
   * _Type_: [StorageInfo](aws-properties-msk-cluster-storageinfo.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  StorageInfo?: MSKClusterStorageInfo;
  /**
   * This parameter is currently not in use.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  BrokerAZDistribution?: Value<string>;
  /**
   * The type of Amazon EC2 instances to use for brokers. The following instance types are allowed: kafka.m5.large, kafka.m5.xlarge, kafka.m5.2xlarge, kafka.m5.4xlarge, kafka.m5.8xlarge, kafka.m5.12xlarge, kafka.m5.16xlarge, kafka.m5.24xlarge, and kafka.t3.small.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  InstanceType: Value<string>;
}

/**
 * Details for SASL/SCRAM client authentication.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-cluster-scram.html}
 **/
export interface MSKClusterScram {
  /**
   * SASL/SCRAM authentication is enabled or not.
   *
   * _Required_: Yes
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Enabled: Value<boolean>;
}

/**
 * The `VpcConnectivity` property type specifies Property description not available. for an [AWS::MSK::Cluster](aws-resource-msk-cluster.md).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-cluster-vpcconnectivity.html}
 **/
export interface MSKClusterVpcConnectivity {
  /**
   * Not currently supported by AWS CloudFormation.
   *
   * _Required_: No
   *
   * _Type_: [VpcConnectivityClientAuthentication](aws-properties-msk-cluster-vpcconnectivityclientauthentication.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ClientAuthentication?: MSKClusterVpcConnectivityClientAuthentication;
}

/**
 * Specifies whether the cluster's brokers are publicly accessible. By default, they are not.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-cluster-connectivityinfo.html}
 **/
export interface MSKClusterConnectivityInfo {
  /**
   * Not currently supported by AWS CloudFormation.
   *
   * _Required_: No
   *
   * _Type_: [VpcConnectivity](aws-properties-msk-cluster-vpcconnectivity.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  VpcConnectivity?: MSKClusterVpcConnectivity;
  /**
   * Specifies whether the cluster's brokers are accessible from the internet. Public access is off by default.
   *
   * _Required_: No
   *
   * _Type_: [PublicAccess](aws-properties-msk-cluster-publicaccess.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PublicAccess?: MSKClusterPublicAccess;
}

/**
 * Contains information about storage volumes attached to Amazon MSK broker nodes.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-cluster-storageinfo.html}
 **/
export interface MSKClusterStorageInfo {
  /**
   * EBS volume information.
   *
   * _Required_: No
   *
   * _Type_: [EBSStorageInfo](aws-properties-msk-cluster-ebsstorageinfo.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  EBSStorageInfo?: MSKClusterEBSStorageInfo;
}

/**
 * Contains information about the EBS storage volumes attached to brokers.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-cluster-ebsstorageinfo.html}
 **/
export interface MSKClusterEBSStorageInfo {
  /**
   * Specifies whether provisioned throughput is turned on and the volume throughput target.
   *
   * _Required_: No
   *
   * _Type_: [ProvisionedThroughput](aws-properties-msk-cluster-provisionedthroughput.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ProvisionedThroughput?: MSKClusterProvisionedThroughput;
  /**
   * The size in GiB of the EBS volume for the data drive on each broker node.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  VolumeSize?: Value<number>;
}

/**
 * Includes information related to client authentication.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-cluster-clientauthentication.html}
 **/
export interface MSKClusterClientAuthentication {
  /**
   * Details for ClientAuthentication using SASL.
   *
   * _Required_: No
   *
   * _Type_: [Sasl](aws-properties-msk-cluster-sasl.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Sasl?: MSKClusterSasl;
  /**
   * Details for ClientAuthentication using no authentication.
   *
   * _Required_: No
   *
   * _Type_: [Unauthenticated](aws-properties-msk-cluster-unauthenticated.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Unauthenticated?: MSKClusterUnauthenticated;
  /**
   * Details for client authentication using TLS.
   *
   * _Required_: No
   *
   * _Type_: [Tls](aws-properties-msk-cluster-tls.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Tls?: MSKClusterTls;
}

/**
 * JMX and Node monitoring for the MSK cluster.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-cluster-openmonitoring.html}
 **/
export interface MSKClusterOpenMonitoring {
  /**
   * Prometheus exporter settings.
   *
   * _Required_: Yes
   *
   * _Type_: [Prometheus](aws-properties-msk-cluster-prometheus.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Prometheus: MSKClusterPrometheus;
}
export interface MSKClusterProperties {
  /**
   * The version of Apache Kafka. For more information, see [Supported Apache Kafka versions](https://docs.aws.amazon.com/msk/latest/developerguide/supported-kafka-versions.html) in the Amazon MSK Developer Guide.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  KafkaVersion: Value<string>;
  /**
   * The number of broker nodes you want in the Amazon MSK cluster. You can submit an update to increase the number of broker nodes in a cluster.
   *
   * _Required_: Yes
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  NumberOfBrokerNodes: Value<number>;
  /**
   * Includes all encryption-related information.
   *
   * _Required_: No
   *
   * _Type_: [EncryptionInfo](aws-properties-msk-cluster-encryptioninfo.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  EncryptionInfo?: MSKClusterEncryptionInfo;
  /**
   * The settings for open monitoring.
   *
   * _Required_: No
   *
   * _Type_: [OpenMonitoring](aws-properties-msk-cluster-openmonitoring.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  OpenMonitoring?: MSKClusterOpenMonitoring;
  /**
   * The version of the cluster that you want to update.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CurrentVersion?: Value<string>;
  /**
   * This controls storage mode for supported storage tiers.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  StorageMode?: Value<string>;
  /**
   * The Amazon MSK configuration to use for the cluster.
   *
   * _Required_: No
   *
   * _Type_: [ConfigurationInfo](aws-properties-msk-cluster-configurationinfo.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ConfigurationInfo?: MSKClusterConfigurationInfo;
  /**
   * The setup to be used for brokers in the cluster.
   *
   * AWS CloudFormation may replace the cluster when you update certain `BrokerNodeGroupInfo` properties. To understand the update behavior for your use case, you should review the child properties for [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-cluster-brokernodegroupinfo.html#aws-properties-msk-cluster-brokernodegroupinfo-properties](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-msk-cluster-brokernodegroupinfo.html#aws-properties-msk-cluster-brokernodegroupinfo-properties).
   *
   * _Required_: Yes
   *
   * _Type_: [BrokerNodeGroupInfo](aws-properties-msk-cluster-brokernodegroupinfo.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  BrokerNodeGroupInfo: MSKClusterBrokerNodeGroupInfo;
  /**
   * Specifies the level of monitoring for the MSK cluster. The possible values are `DEFAULT`, `PER_BROKER`, and `PER_TOPIC_PER_BROKER`.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  EnhancedMonitoring?: Value<string>;
  /**
   * The name of the cluster.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ClusterName: Value<string>;
  /**
   * Includes information related to client authentication.
   *
   * _Required_: No
   *
   * _Type_: [ClientAuthentication](aws-properties-msk-cluster-clientauthentication.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ClientAuthentication?: MSKClusterClientAuthentication;
  /**
   * You can configure your Amazon MSK cluster to send broker logs to different destination types. This is a container for the configuration details related to broker logs.
   *
   * _Required_: No
   *
   * _Type_: [LoggingInfo](aws-properties-msk-cluster-logginginfo.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  LoggingInfo?: MSKClusterLoggingInfo;
  /**
   * A map of key:value pairs to apply to this resource. Both key and value are of type String.
   *
   * _Required_: No
   *
   * _Type_: Map of String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Tags?: { [key: string]: Value<string> };
}

/**
 * The `AWS::MSK::Cluster` resource creates an Amazon MSK cluster. For more information, see [What Is Amazon MSK?](https://docs.aws.amazon.com/msk/latest/developerguide/what-is-msk.html) in the _Amazon MSK Developer Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-cluster.html}
 */
export interface MSKClusterResource {
  Type: 'AWS::MSK::Cluster';
  Properties: MSKClusterProperties;
}
