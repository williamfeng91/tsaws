/**
 * Supported regions:
 * - ap-northeast-1 (version 119.1.0)
 * - ap-south-1 (version 119.1.0)
 * - ap-southeast-1 (version 119.1.0)
 * - ap-southeast-2 (version 119.1.0)
 * - ca-central-1 (version 119.1.0)
 * - eu-central-1 (version 119.1.0)
 * - eu-west-2 (version 119.1.0)
 * - us-east-1 (version 119.1.0)
 * - us-west-2 (version 119.1.0)
 */
import { List, Value } from '../../shared-types/dataTypes';
import { ResourceTag } from '../../shared-types/resource';

/**
 * Contains information about a queue for a quick connect. The flow must be of type Transfer to Queue.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-quickconnect-queuequickconnectconfig.html}
 **/
export interface ConnectQuickConnectQueueQuickConnectConfig {
  /**
   * The Amazon Resource Name (ARN) of the flow.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Maximum_: `500`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ContactFlowArn: Value<string>;
  /**
   * The Amazon Resource Name (ARN) of the queue.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  QueueArn: Value<string>;
}

/**
 * Contains information about a phone number for a quick connect.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-quickconnect-phonenumberquickconnectconfig.html}
 **/
export interface ConnectQuickConnectPhoneNumberQuickConnectConfig {
  /**
   * The phone number in E.164 format.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Pattern_: `+[1-9]d{1,14}$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PhoneNumber: Value<string>;
}

/**
 * Contains configuration settings for a quick connect.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-quickconnect-quickconnectconfig.html}
 **/
export interface ConnectQuickConnectQuickConnectConfig {
  /**
   * The queue configuration. This is required only if QuickConnectType is QUEUE.
   *
   * _Required_: No
   *
   * _Type_: [QueueQuickConnectConfig](aws-properties-connect-quickconnect-queuequickconnectconfig.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  QueueConfig?: ConnectQuickConnectQueueQuickConnectConfig;
  /**
   * The phone configuration. This is required only if QuickConnectType is PHONE_NUMBER.
   *
   * _Required_: No
   *
   * _Type_: [PhoneNumberQuickConnectConfig](aws-properties-connect-quickconnect-phonenumberquickconnectconfig.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PhoneConfig?: ConnectQuickConnectPhoneNumberQuickConnectConfig;
  /**
   * The type of quick connect. In the Amazon Connect console, when you create a quick connect, you are prompted to assign one of the following types: Agent (USER), External (PHONE_NUMBER), or Queue (QUEUE).
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Allowed values_: `PHONE_NUMBER | QUEUE | USER`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  QuickConnectType: Value<string>;
  /**
   * The user configuration. This is required only if QuickConnectType is USER.
   *
   * _Required_: No
   *
   * _Type_: [UserQuickConnectConfig](aws-properties-connect-quickconnect-userquickconnectconfig.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  UserConfig?: ConnectQuickConnectUserQuickConnectConfig;
}

/**
 * Contains information about the quick connect configuration settings for a user. The contact flow must be of type Transfer to Agent.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-quickconnect-userquickconnectconfig.html}
 **/
export interface ConnectQuickConnectUserQuickConnectConfig {
  /**
   * The Amazon Resource Name (ARN) of the user.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  UserArn: Value<string>;
  /**
   * The Amazon Resource Name (ARN) of the flow.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Maximum_: `500`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ContactFlowArn: Value<string>;
}
export interface ConnectQuickConnectProperties {
  /**
   * The description of the quick connect.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `250`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Description?: Value<string>;
  /**
   * Contains information about the quick connect.
   *
   * _Required_: Yes
   *
   * _Type_: [QuickConnectConfig](aws-properties-connect-quickconnect-quickconnectconfig.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  QuickConnectConfig: ConnectQuickConnectQuickConnectConfig;
  /**
   * The Amazon Resource Name (ARN) of the instance.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  InstanceArn: Value<string>;
  /**
   * The tags used to organize, track, or control access for this resource. For example, { "tags": {"key1":"value1", "key2":"value2"} }.
   *
   * _Required_: No
   *
   * _Type_: List of [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Tags?: List<ResourceTag>;
  /**
   * The name of the quick connect.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `127`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Name: Value<string>;
}

/**
 * Specifies a quick connect for an Amazon Connect instance.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-quickconnect.html}
 */
export interface ConnectQuickConnectResource {
  Type: 'AWS::Connect::QuickConnect';
  Properties: ConnectQuickConnectProperties;
}
