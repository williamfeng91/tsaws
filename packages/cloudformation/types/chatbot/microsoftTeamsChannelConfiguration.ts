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

export interface ChatbotMicrosoftTeamsChannelConfigurationProperties {
  /**
   * Enables use of a user role requirement in your chat configuration.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  UserRoleRequired?: Value<boolean>;
  /**
   * Specifies the logging level for this configuration. This property affects the log entries pushed to Amazon CloudWatch Logs.
   *
   * Logging levels include `ERROR`, `INFO`, or `NONE`.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  LoggingLevel?: Value<string>;
  /**
   * The ARNs of the SNS topics that deliver notifications to AWS Chatbot.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SnsTopicArns?: List<Value<string>>;
  /**
   * The list of IAM policy ARNs that are applied as channel guardrails. The AWS managed 'AdministratorAccess' policy is applied as a default if this is not set.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  GuardrailPolicies?: List<Value<string>>;
  /**
   * The ARN of the IAM role that defines the permissions for AWS Chatbot.
   *
   * This is a user-defined role that AWS Chatbot will assume. This is not the service-linked role. For more information, see [IAM Policies for AWS Chatbot](https://docs.aws.amazon.com/chatbot/latest/adminguide/chatbot-iam-policies.html).
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  IamRoleArn: Value<string>;
  /**
   * The ID of the Microsoft Team authorized with AWS Chatbot.
   *
   * To get the team ID, you must perform the initial authorization flow with Microsoft Teams in the AWS Chatbot console. Then you can copy and paste the team ID from the console. For more details, see steps 1-4 in [Get started with Microsoft Teams ](https://docs.aws.amazon.com/chatbot/latest/adminguide/teams-setup.html#teams-client-setup) in the _AWS Chatbot Administrator Guide_.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  TeamId: Value<string>;
  /**
   * The name of the configuration.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ConfigurationName: Value<string>;
  /**
   * The ID of the Microsoft Teams tenant.
   *
   * To get the tenant ID, you must perform the initial authorization flow with Microsoft Teams in the AWS Chatbot console. Then you can copy and paste the tenant ID from the console. For more details, see steps 1-4 in [Get started with Microsoft Teams ](https://docs.aws.amazon.com/chatbot/latest/adminguide/teams-setup.html#teams-client-setup) in the _AWS Chatbot Administrator Guide_.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  TeamsTenantId: Value<string>;
  /**
   * The ID of the Microsoft Teams channel.
   *
   * To get the channel ID, open Microsoft Teams, right click on the channel name in the left pane, then choose Copy. An example of the channel ID syntax is: `19%3ab6ef35dc342d56ba5654e6fc6d25a071%40thread.tacv2`.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TeamsChannelId: Value<string>;
}

/**
 * The `AWS::Chatbot::MicrosoftTeamsChannelConfiguration` resource configures a Microsoft Teams channel to allow users to use AWS Chatbot with AWS CloudFormation templates.
 *
 * This resource requires some setup to be done in the AWS Chatbot console. To provide the required Microsoft Teams team and tenant IDs, you must perform the initial authorization flow with Microsoft Teams in the AWS Chatbot console, then copy and paste the IDs from the console. For more details, see steps 1-4 in [Setting Up AWS Chatbot with Microsoft Teams](https://docs.aws.amazon.com/chatbot/latest/adminguide/teams-setup.html#teams-client-setup) in the _AWS Chatbot Administrator Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-chatbot-microsoftteamschannelconfiguration.html}
 */
export interface ChatbotMicrosoftTeamsChannelConfigurationResource {
  Type: 'AWS::Chatbot::MicrosoftTeamsChannelConfiguration';
  Properties: ChatbotMicrosoftTeamsChannelConfigurationProperties;
}
