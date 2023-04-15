/**
 * Supported regions:
 * - ap-northeast-1 (version 119.1.0)
 * - ap-northeast-2 (version 119.1.0)
 * - ap-south-1 (version 119.1.0)
 * - eu-central-1 (version 119.1.0)
 * - us-east-1 (version 119.1.0)
 * - us-west-2 (version 119.1.0)
 */
import { List, Value } from '../../shared-types/dataTypes';
import { ResourceTag } from '../../shared-types/resource';

/**
 * The DestinationConfiguration property type describes a location where chat logs will be stored. Each member represents the configuration of one log destination. For logging, you define only one type of destination.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ivschat-loggingconfiguration-destinationconfiguration.html}
 **/
export interface IVSChatLoggingConfigurationDestinationConfiguration {
  /**
   * An Amazon S3 destination configuration where chat activity will be logged.
   *
   * _Required_: No
   *
   * _Type_: [S3DestinationConfiguration](aws-properties-ivschat-loggingconfiguration-s3destinationconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  S3?: IVSChatLoggingConfigurationS3DestinationConfiguration;
  /**
   * An Amazon Kinesis Data Firehose destination configuration where chat activity will be logged.
   *
   * _Required_: No
   *
   * _Type_: [FirehoseDestinationConfiguration](aws-properties-ivschat-loggingconfiguration-firehosedestinationconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Firehose?: IVSChatLoggingConfigurationFirehoseDestinationConfiguration;
  /**
   * An Amazon CloudWatch Logs destination configuration where chat activity will be logged.
   *
   * _Required_: No
   *
   * _Type_: [CloudWatchLogsDestinationConfiguration](aws-properties-ivschat-loggingconfiguration-cloudwatchlogsdestinationconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CloudWatchLogs?: IVSChatLoggingConfigurationCloudWatchLogsDestinationConfiguration;
}

/**
 * The CloudWatchLogsDestinationConfiguration property type specifies a CloudWatch Logs location where chat logs will be stored.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ivschat-loggingconfiguration-cloudwatchlogsdestinationconfiguration.html}
 **/
export interface IVSChatLoggingConfigurationCloudWatchLogsDestinationConfiguration {
  /**
   * Name of the Amazon Cloudwatch Logs destination where chat activity will be logged.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `512`
   *
   * _Pattern_: `^[.-_/#A-Za-z0-9]+$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  LogGroupName: Value<string>;
}

/**
 * The FirehoseDestinationConfiguration property type specifies a Kinesis Firehose location where chat logs will be stored.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ivschat-loggingconfiguration-firehosedestinationconfiguration.html}
 **/
export interface IVSChatLoggingConfigurationFirehoseDestinationConfiguration {
  /**
   * Name of the Amazon Kinesis Firehose delivery stream where chat activity will be logged.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `64`
   *
   * _Pattern_: `^[a-zA-Z0-9_.-]+$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DeliveryStreamName: Value<string>;
}

/**
 * The S3DestinationConfiguration property type specifies an S3 location where chat logs will be stored.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ivschat-loggingconfiguration-s3destinationconfiguration.html}
 **/
export interface IVSChatLoggingConfigurationS3DestinationConfiguration {
  /**
   * Name of the Amazon S3 bucket where chat activity will be logged.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `3`
   *
   * _Maximum_: `63`
   *
   * _Pattern_: `^[a-z0-9-.]+$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  BucketName: Value<string>;
}
export interface IVSChatLoggingConfigurationProperties {
  /**
   * The DestinationConfiguration is a complex type that contains information about where chat content will be logged.
   *
   * _Required_: Yes
   *
   * _Type_: [DestinationConfiguration](aws-properties-ivschat-loggingconfiguration-destinationconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DestinationConfiguration: IVSChatLoggingConfigurationDestinationConfiguration;
  /**
   * An array of key-value pairs to apply to this resource.
   *
   * For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html).
   *
   * _Required_: No
   *
   * _Type_: List of [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Tags?: List<ResourceTag>;
  /**
   * Logging-configuration name. The value does not need to be unique.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `0`
   *
   * _Maximum_: `128`
   *
   * _Pattern_: `^[a-zA-Z0-9-_]*$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Name?: Value<string>;
}

/**
 * The `AWS::IVSChat::LoggingConfiguration` resource specifies an Amazon IVS logging configuration that allows clients to store and record sent messages. For more information, see [CreateLoggingConfiguration](https://docs.aws.amazon.com/ivs/latest/ChatAPIReference/API_CreateLoggingConfiguration.html) in the _Amazon Interactive Video Service Chat API Reference_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ivschat-loggingconfiguration.html}
 */
export interface IVSChatLoggingConfigurationResource {
  Type: 'AWS::IVSChat::LoggingConfiguration';
  Properties: IVSChatLoggingConfigurationProperties;
}
