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
 * Provides a description of Amazon CloudWatch logging options, including the log stream Amazon Resource Name (ARN).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-applicationcloudwatchloggingoption-cloudwatchloggingoption.html}
 **/
export interface KinesisAnalyticsV2ApplicationCloudWatchLoggingOptionCloudWatchLoggingOption {
  /**
   * The ARN of the CloudWatch log to receive application messages.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `2048`
   *
   * _Pattern_: `arn:.*`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  LogStreamARN: Value<string>;
}
export interface KinesisAnalyticsV2ApplicationCloudWatchLoggingOptionProperties {
  /**
   * The name of the application.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `128`
   *
   * _Pattern_: `[a-zA-Z0-9_.-]+`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ApplicationName: Value<string>;
  /**
   * Provides a description of Amazon CloudWatch logging options, including the log stream Amazon Resource Name (ARN).
   *
   * _Required_: Yes
   *
   * _Type_: [CloudWatchLoggingOption](aws-properties-kinesisanalyticsv2-applicationcloudwatchloggingoption-cloudwatchloggingoption.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CloudWatchLoggingOption: KinesisAnalyticsV2ApplicationCloudWatchLoggingOptionCloudWatchLoggingOption;
}

/**
 * Adds an Amazon CloudWatch log stream to monitor application configuration errors.
 *
 * **Note**
 *
 * Only one _ApplicationCloudWatchLoggingOption_ resource can be attached per application.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalyticsv2-applicationcloudwatchloggingoption.html}
 */
export interface KinesisAnalyticsV2ApplicationCloudWatchLoggingOptionResource {
  Type: 'AWS::KinesisAnalyticsV2::ApplicationCloudWatchLoggingOption';
  Properties: KinesisAnalyticsV2ApplicationCloudWatchLoggingOptionProperties;
}
