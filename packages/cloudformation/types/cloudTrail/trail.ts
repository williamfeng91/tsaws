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
 * Use event selectors to further specify the management and data event settings for your trail. By default, trails created without specific event selectors will be configured to log all read and write management events, and no data events. When an event occurs in your account, CloudTrail evaluates the event selector for all trails. For each trail, if the event matches any event selector, the trail processes and logs the event. If the event doesn't match any event selector, the trail doesn't log the event.
 *
 * You can configure up to five event selectors for a trail.
 *
 * You cannot apply both event selectors and advanced event selectors to a trail.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudtrail-trail-eventselector.html}
 **/
export interface CloudTrailTrailEventSelector {
  /**
   * Specify if you want your event selector to include management events for your trail.
   *
   * For more information, see [Management Events](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/logging-management-events-with-cloudtrail.html) in the _ AWS CloudTrail User Guide_.
   *
   * By default, the value is `true`.
   *
   * The first copy of management events is free. You are charged for additional copies of management events that you are logging on any subsequent trail in the same region. For more information about CloudTrail pricing, see [AWS CloudTrail Pricing](http://aws.amazon.com/cloudtrail/pricing/).
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  IncludeManagementEvents?: Value<boolean>;
  /**
   * Specify if you want your trail to log read-only events, write-only events, or all. For example, the EC2 `GetConsoleOutput` is a read-only API operation and `RunInstances` is a write-only API operation.
   *
   * By default, the value is `All`.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `All | ReadOnly | WriteOnly`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ReadWriteType?: Value<string>;
  /**
   * An optional list of service event sources from which you do not want management events to be logged on your trail. In this release, the list can be empty (disables the filter), or it can filter out AWS Key Management Service or Amazon RDS Data API events by containing `kms.amazonaws.com` or `rdsdata.amazonaws.com`. By default, `ExcludeManagementEventSources` is empty, and AWS KMS and Amazon RDS Data API events are logged to your trail. You can exclude management event sources only in regions that support the event source.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ExcludeManagementEventSources?: List<Value<string>>;
  /**
   * In AWS CloudFormation, CloudTrail supports data event logging for Amazon S3 objects, Amazon DynamoDB tables, and AWS Lambda functions. Currently, advanced event selectors for data events are not supported in AWS CloudFormation templates. You can specify up to 250 resources for an individual event selector, but the total number of data resources cannot exceed 250 across all event selectors in a trail. This limit does not apply if you configure resource logging for all data events.
   *
   * For more information, see [Logging data events](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/logging-data-events-with-cloudtrail.html) and [Limits in AWS CloudTrail](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/WhatIsCloudTrail-Limits.html) in the _AWS CloudTrail User Guide_.
   *
   * _Required_: Conditional
   *
   * _Type_: List of [DataResource](aws-properties-cloudtrail-trail-dataresource.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DataResources?: List<CloudTrailTrailDataResource>;
}

/**
 * The Amazon S3 buckets, AWS Lambda functions, or Amazon DynamoDB tables that you specify in event selectors in your AWS CloudFormation template for your trail to log data events. Data events provide information about the resource operations performed on or within a resource itself. These are also known as data plane operations. You can specify up to 250 data resources for a trail. Currently, advanced event selectors for data events are not supported in AWS CloudFormation templates.
 *
 * **Note**
 *
 * The total number of allowed data resources is 250. This number can be distributed between 1 and 5 event selectors, but the total cannot exceed 250 across all selectors.
 *
 * The following example demonstrates how logging works when you configure logging of all data events for an S3 bucket named `bucket-1`. In this example, the CloudTrail user specified an empty prefix, and the option to log both `Read` and `Write` data events.
 *
 * The following example demonstrates how logging works when you configure logging of AWS Lambda data events for a Lambda function named _MyLambdaFunction_, but not for all Lambda functions.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudtrail-trail-dataresource.html}
 **/
export interface CloudTrailTrailDataResource {
  /**
   * The resource type in which you want to log data events. You can specify the following _basic_ event selector resource types:
   */
  Type: Value<string>;
  /**
   * An array of Amazon Resource Name (ARN) strings or partial ARN strings for the specified objects.
   */
  Values?: List<Value<string>>;
}

/**
 * A JSON string that contains a list of Insights types that are logged on a trail.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudtrail-trail-insightselector.html}
 **/
export interface CloudTrailTrailInsightSelector {
  /**
   * The type of Insights events to log on a trail. `ApiCallRateInsight` and `ApiErrorRateInsight` are valid Insight types.
   *
   * The `ApiCallRateInsight` Insights type analyzes write-only management API calls that are aggregated per minute against a baseline API call volume.
   *
   * The `ApiErrorRateInsight` Insights type analyzes management API calls that result in error codes. The error is shown if the API call is unsuccessful.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `ApiCallRateInsight | ApiErrorRateInsight`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  InsightType?: Value<string>;
}
export interface CloudTrailTrailProperties {
  /**
   * Specifies whether the trail is publishing events from global services such as IAM to the log files.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  IncludeGlobalServiceEvents?: Value<boolean>;
  /**
   * Use event selectors to further specify the management and data event settings for your trail. By default, trails created without specific event selectors will be configured to log all read and write management events, and no data events. When an event occurs in your account, CloudTrail evaluates the event selector for all trails. For each trail, if the event matches any event selector, the trail processes and logs the event. If the event doesn't match any event selector, the trail doesn't log the event.
   *
   * You can configure up to five event selectors for a trail.
   *
   * For more information about how to configure event selectors, see [Examples](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudtrail-trail.html#aws-resource-cloudtrail-trail--examples) and [Configuring event selectors](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-additional-cli-commands.html#configuring-event-selector-examples) in the _AWS CloudTrail User Guide_.
   *
   * _Required_: No
   *
   * _Type_: List of [EventSelector](aws-properties-cloudtrail-trail-eventselector.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  EventSelectors?: List<CloudTrailTrailEventSelector>;
  /**
   * Specifies the AWS KMS key ID to use to encrypt the logs delivered by CloudTrail. The value can be an alias name prefixed by "alias/", a fully specified ARN to an alias, a fully specified ARN to a key, or a globally unique identifier.
   *
   * CloudTrail also supports AWS KMS multi-Region keys. For more information about multi-Region keys, see [Using multi-Region keys](https://docs.aws.amazon.com/kms/latest/developerguide/multi-region-keys-overview.html) in the _ AWS Key Management Service Developer Guide_.
   *
   * Examples:
   */
  KMSKeyId?: Value<string>;
  /**
   * Specifies the role for the CloudWatch Logs endpoint to assume to write to a user's log group. You must use a role that exists in your account.
   *
   * _Required_: Conditional
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CloudWatchLogsRoleArn?: Value<string>;
  /**
   * Specifies the Amazon S3 key prefix that comes after the name of the bucket you have designated for log file delivery. For more information, see [Finding Your CloudTrail Log Files](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-find-log-files.html). The maximum length is 200 characters.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  S3KeyPrefix?: Value<string>;
  /**
   * Specifies the name of the trail. The name must meet the following requirements:
   */
  TrailName?: Value<string>;
  /**
   * Specifies whether the trail is applied to all accounts in an organization in AWS Organizations, or only for the current AWS account. The default is false, and cannot be true unless the call is made on behalf of an AWS account that is the management account or delegated administrator account for an organization in AWS Organizations. If the trail is not an organization trail and this is set to `true`, the trail will be created in all AWS accounts that belong to the organization. If the trail is an organization trail and this is set to `false`, the trail will remain in the current AWS account but be deleted from all member accounts in the organization.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  IsOrganizationTrail?: Value<boolean>;
  /**
   * A JSON string that contains the insight types you want to log on a trail. `ApiCallRateInsight` and `ApiErrorRateInsight` are valid Insight types.
   *
   * The `ApiCallRateInsight` Insights type analyzes write-only management API calls that are aggregated per minute against a baseline API call volume.
   *
   * The `ApiErrorRateInsight` Insights type analyzes management API calls that result in error codes. The error is shown if the API call is unsuccessful.
   *
   * _Required_: No
   *
   * _Type_: List of [InsightSelector](aws-properties-cloudtrail-trail-insightselector.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  InsightSelectors?: List<CloudTrailTrailInsightSelector>;
  /**
   * Specifies a log group name using an Amazon Resource Name (ARN), a unique identifier that represents the log group to which CloudTrail logs are delivered. You must use a log group that exists in your account.
   *
   * Not required unless you specify `CloudWatchLogsRoleArn`.
   *
   * _Required_: Conditional
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CloudWatchLogsLogGroupArn?: Value<string>;
  /**
   * Specifies the name of the Amazon SNS topic defined for notification of log file delivery. The maximum length is 256 characters.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SnsTopicName?: Value<string>;
  /**
   * Specifies whether the trail applies only to the current region or to all regions. The default is false. If the trail exists only in the current region and this value is set to true, shadow trails (replications of the trail) will be created in the other regions. If the trail exists in all regions and this value is set to false, the trail will remain in the region where it was created, and its shadow trails in other regions will be deleted. As a best practice, consider using trails that log events in all regions.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  IsMultiRegionTrail?: Value<boolean>;
  /**
   * Specifies the name of the Amazon S3 bucket designated for publishing log files. See [Amazon S3 Bucket Naming Requirements](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/create_trail_naming_policy.html).
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  S3BucketName: Value<string>;
  /**
   * Specifies whether log file validation is enabled. The default is false.
   *
   * When you disable log file integrity validation, the chain of digest files is broken after one hour. CloudTrail does not create digest files for log files that were delivered during a period in which log file integrity validation was disabled. For example, if you enable log file integrity validation at noon on January 1, disable it at noon on January 2, and re-enable it at noon on January 10, digest files will not be created for the log files delivered from noon on January 2 to noon on January 10. The same applies whenever you stop CloudTrail logging or delete a trail.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  EnableLogFileValidation?: Value<boolean>;
  /**
   * A custom set of tags (key-value pairs) for this trail.
   *
   * _Required_: No
   *
   * _Type_: List of [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Tags?: List<ResourceTag>;
  /**
   * Whether the CloudTrail trail is currently logging AWS API calls.
   *
   * _Required_: Yes
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  IsLogging: Value<boolean>;
}

/**
 * Creates a trail that specifies the settings for delivery of log data to an Amazon S3 bucket.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudtrail-trail.html}
 */
export interface CloudTrailTrailResource {
  Type: 'AWS::CloudTrail::Trail';
  Properties: CloudTrailTrailProperties;
}
