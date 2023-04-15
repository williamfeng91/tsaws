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
import { ResourceTag } from '../../shared-types/resource';

/**
 * Information about the AWS Chatbot topics or AWS Chatbot clients associated with a notification rule.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codestarnotifications-notificationrule-target.html}
 **/
export interface CodeStarNotificationsNotificationRuleTarget {
  /**
   * The target type. Can be an Amazon Simple Notification Service topic or AWS Chatbot client.
   */
  TargetType: Value<string>;
  /**
   * The Amazon Resource Name (ARN) of the AWS Chatbot topic or AWS Chatbot client.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `320`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TargetAddress: Value<string>;
}
export interface CodeStarNotificationsNotificationRuleProperties {
  /**
   * A list of event types associated with this notification rule. For a complete list of event types and IDs, see [Notification concepts](https://docs.aws.amazon.com/dtconsole/latest/userguide/concepts.html#concepts-api) in the _Developer Tools Console User Guide_.
   *
   * _Required_: Yes
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  EventTypeIds: List<Value<string>>;
  /**
   * The status of the notification rule. The default value is `ENABLED`. If the status is set to `DISABLED`, notifications aren't sent for the notification rule.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `DISABLED | ENABLED`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Status?: Value<string>;
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CreatedBy?: Value<string>;
  /**
   * The level of detail to include in the notifications for this resource. `BASIC` will include only the contents of the event as it would appear in Amazon CloudWatch. `FULL` will include any supplemental information provided by AWS CodeStar Notifications and/or the service for the resource for which the notification is created.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Allowed values_: `BASIC | FULL`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DetailType: Value<string>;
  /**
   * The Amazon Resource Name (ARN) of the resource to associate with the notification rule. Supported resources include pipelines in AWS CodePipeline, repositories in AWS CodeCommit, and build projects in AWS CodeBuild.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Pattern_: `^arn:aws[^:s]*:[^:s]*:[^:s]*:[0-9]{12}:[^s]+$`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Resource: Value<string>;
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  EventTypeId?: Value<string>;
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TargetAddress?: Value<string>;
  /**
   * A list of Amazon Resource Names (ARNs) of Amazon Simple Notification Service topics and AWS Chatbot clients to associate with the notification rule.
   *
   * _Required_: Yes
   *
   * _Type_: List of [Target](aws-properties-codestarnotifications-notificationrule-target.md)
   *
   * _Maximum_: `10`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Targets: List<CodeStarNotificationsNotificationRuleTarget>;
  /**
   * A list of tags to apply to this notification rule. Key names cannot start with "`aws`".
   *
   * _Required_: No
   *
   * _Type_: Map of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Tags?: { [key: string]: Value<string> };
  /**
   * The name for the notification rule. Notification rule names must be unique in your AWS account.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `64`
   *
   * _Pattern_: `[A-Za-z0-9-_ ]+$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Name: Value<string>;
}

/**
 * Creates a notification rule for a resource. The rule specifies the events you want notifications about and the targets (such as AWS Chatbot topics or AWS Chatbot clients configured for Slack) where you want to receive them.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codestarnotifications-notificationrule.html}
 */
export interface CodeStarNotificationsNotificationRuleResource {
  Type: 'AWS::CodeStarNotifications::NotificationRule';
  Properties: CodeStarNotificationsNotificationRuleProperties;
}
