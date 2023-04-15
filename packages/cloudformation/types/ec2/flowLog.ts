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
 * Describes the destination options for a flow log.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-flowlog-destinationoptions.html}
 **/
export interface EC2FlowLogDestinationOptions {
  /**
   * Indicates whether to partition the flow log per hour. This reduces the cost and response time for queries. The default is `false`.
   *
   * _Required_: Yes
   *
   * _Type_: Boolean
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  PerHourPartition: Value<boolean>;
  /**
   * Indicates whether to use Hive-compatible prefixes for flow logs stored in Amazon S3. The default is `false`.
   *
   * _Required_: Yes
   *
   * _Type_: Boolean
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  HiveCompatiblePartitions: Value<boolean>;
  /**
   * The format for the flow log. The default is `plain-text`.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Allowed values_: `parquet | plain-text`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  FileFormat: Value<string>;
}
export interface EC2FlowLogProperties {
  /**
   * The fields to include in the flow log record, in the order in which they should appear. If you omit this parameter, the flow log is created using the default format. If you specify this parameter, you must include at least one field. For more information about the available fields, see [Flow log records](https://docs.aws.amazon.com/vpc/latest/userguide/flow-logs.html#flow-log-records) in the _Amazon VPC User Guide_ or [Transit Gateway Flow Log records](https://docs.aws.amazon.com/vpc/latest/tgw/tgw-flow-logs.html#flow-log-records) in the _AWS Transit Gateway Guide_.
   *
   * Specify the fields using the `${field-id}` format, separated by spaces.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  LogFormat?: Value<string>;
  /**
   * The ID of the resource to monitor. For example, if the resource type is `VPC`, specify the ID of the VPC.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ResourceId: Value<string>;
  /**
   * The maximum interval of time during which a flow of packets is captured and aggregated into a flow log record. The possible values are 60 seconds (1 minute) or 600 seconds (10 minutes). This parameter must be 60 seconds for transit gateway resource types.
   *
   * When a network interface is attached to a [Nitro-based instance](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-types.html#ec2-nitro-instances), the aggregation interval is always 60 seconds or less, regardless of the value that you specify.
   *
   * Default: 600
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  MaxAggregationInterval?: Value<number>;
  /**
   * The destination options. The following options are supported:
   */
  DestinationOptions?: EC2FlowLogDestinationOptions;
  /**
   * The type of resource to monitor.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Allowed values_: `NetworkInterface | Subnet | TransitGateway | TransitGatewayAttachment | VPC`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ResourceType: Value<string>;
  /**
   * The destination for the flow log data. The meaning of this parameter depends on the destination type.
   */
  LogDestination?: Value<string>;
  /**
   * The name of a new or existing CloudWatch Logs log group where Amazon EC2 publishes your flow logs.
   *
   * This parameter is valid only if the destination type is `cloud-watch-logs`.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  LogGroupName?: Value<string>;
  /**
   * The ARN of the IAM role that allows Amazon EC2 to publish flow logs to a CloudWatch Logs log group in your account.
   *
   * This parameter is required if the destination type is `cloud-watch-logs` and unsupported otherwise.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  DeliverLogsPermissionArn?: Value<string>;
  /**
   * The type of destination for the flow log data.
   *
   * Default: `cloud-watch-logs`
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `cloud-watch-logs | kinesis-data-firehose | s3`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  LogDestinationType?: Value<string>;
  /**
   * The tags to apply to the flow logs.
   *
   * _Required_: No
   *
   * _Type_: List of [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Tags?: List<ResourceTag>;
  /**
   * The type of traffic to monitor (accepted traffic, rejected traffic, or all traffic). This parameter is not supported for transit gateway resource types. It is required for the other resource types.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `ACCEPT | ALL | REJECT`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  TrafficType?: Value<string>;
}

/**
 * Specifies a VPC flow log that captures IP traffic for a specified network interface, subnet, or VPC. To view the log data, use Amazon CloudWatch Logs (CloudWatch Logs) to help troubleshoot connection issues. For example, you can use a flow log to investigate why certain traffic isn't reaching an instance, which can help you diagnose overly restrictive security group rules. For more information, see [VPC Flow Logs](https://docs.aws.amazon.com/vpc/latest/userguide/flow-logs.html) in the _Amazon VPC User Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-flowlog.html}
 */
export interface EC2FlowLogResource {
  Type: 'AWS::EC2::FlowLog';
  Properties: EC2FlowLogProperties;
}
