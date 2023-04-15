/**
 * Supported regions:
 * - eu-west-1 (version 119.1.0)
 * - us-east-1 (version 119.1.0)
 * - us-west-2 (version 119.1.0)
 */
import { List, Value } from '../../shared-types/dataTypes';

export interface SupportAppSlackChannelConfigurationProperties {
  /**
   * The channel name in Slack. This is the channel where you invite the AWS Support App.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ChannelName?: Value<string>;
  /**
   * Whether to get notified when a correspondence is added to your support cases.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  NotifyOnAddCorrespondenceToCase?: Value<boolean>;
  /**
   * The Amazon Resource Name (ARN) of the IAM role for this Slack channel configuration. The AWS Support App uses this role to perform AWS Support and Service Quotas actions on your behalf.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ChannelRoleArn: Value<string>;
  /**
   * Whether to get notified when your support cases are resolved.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  NotifyOnResolveCase?: Value<boolean>;
  /**
   * The case severity for your support cases that you want to receive notifications. You can specify `none`, `all`, or `high`.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  NotifyOnCaseSeverity: Value<string>;
  /**
   * The team ID in Slack. This ID uniquely identifies a Slack workspace.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  TeamId: Value<string>;
  /**
   * The channel ID in Slack. This ID identifies a channel within a Slack workspace.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ChannelId: Value<string>;
  /**
   * Whether to get notified when your support cases are created or reopened
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  NotifyOnCreateOrReopenCase?: Value<boolean>;
}

/**
 * You can use the `AWS::SupportApp::SlackChannelConfiguration` resource to specify your AWS account when you configure the AWS Support App. This resource includes the following information:
 *
 * For more information, see the following topics in the _AWS Support User Guide_:
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-supportapp-slackchannelconfiguration.html}
 */
export interface SupportAppSlackChannelConfigurationResource {
  Type: 'AWS::SupportApp::SlackChannelConfiguration';
  Properties: SupportAppSlackChannelConfigurationProperties;
}
