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
 * Contains information about the Amazon Kinesis data stream where you are sending real-time log data in a real-time log configuration.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-realtimelogconfig-endpoint.html}
 **/
export interface CloudFrontRealtimeLogConfigEndPoint {
  /**
   * Contains information about the Amazon Kinesis data stream where you are sending real-time log data.
   *
   * _Required_: Yes
   *
   * _Type_: [KinesisStreamConfig](aws-properties-cloudfront-realtimelogconfig-kinesisstreamconfig.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  KinesisStreamConfig: CloudFrontRealtimeLogConfigKinesisStreamConfig;
  /**
   * The type of data stream where you are sending real-time log data. The only valid value is `Kinesis`.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  StreamType: Value<string>;
}

/**
 * Contains information about the Amazon Kinesis data stream where you are sending real-time log data.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-realtimelogconfig-kinesisstreamconfig.html}
 **/
export interface CloudFrontRealtimeLogConfigKinesisStreamConfig {
  /**
   * The Amazon Resource Name (ARN) of the Kinesis data stream where you are sending real-time log data.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  StreamArn: Value<string>;
  /**
   * The Amazon Resource Name (ARN) of an AWS Identity and Access Management (IAM) role that CloudFront can use to send real-time log data to your Kinesis data stream.
   *
   * For more information the IAM role, see [Real-time log configuration IAM role](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/real-time-logs.html#understand-real-time-log-config-iam-role) in the _Amazon CloudFront Developer Guide_.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RoleArn: Value<string>;
}
export interface CloudFrontRealtimeLogConfigProperties {
  /**
   * A list of fields that are included in each real-time log record. In an API response, the fields are provided in the same order in which they are sent to the Amazon Kinesis data stream.
   *
   * For more information about fields, see [Real-time log configuration fields](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/real-time-logs.html#understand-real-time-log-config-fields) in the _Amazon CloudFront Developer Guide_.
   *
   * _Required_: Yes
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Fields: List<Value<string>>;
  /**
   * Contains information about the Amazon Kinesis data stream where you are sending real-time log data for this real-time log configuration.
   *
   * _Required_: Yes
   *
   * _Type_: List of [EndPoint](aws-properties-cloudfront-realtimelogconfig-endpoint.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  EndPoints: List<CloudFrontRealtimeLogConfigEndPoint>;
  /**
   * The sampling rate for this real-time log configuration. The sampling rate determines the percentage of viewer requests that are represented in the real-time log data. The sampling rate is an integer between 1 and 100, inclusive.
   *
   * _Required_: Yes
   *
   * _Type_: Double
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SamplingRate: Value<number>;
  /**
   * The unique name of this real-time log configuration.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Name: Value<string>;
}

/**
 * A real-time log configuration.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-realtimelogconfig.html}
 */
export interface CloudFrontRealtimeLogConfigResource {
  Type: 'AWS::CloudFront::RealtimeLogConfig';
  Properties: CloudFrontRealtimeLogConfigProperties;
}
