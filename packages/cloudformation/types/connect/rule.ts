/**
 * Supported regions:
 * - ap-northeast-1 (version 119.1.0)
 * - ap-northeast-2 (version 119.1.0)
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
 * The EventBridge action definition.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-rule-eventbridgeaction.html}
 **/
export interface ConnectRuleEventBridgeAction {
  /**
   * The name.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Name: Value<string>;
}

/**
 * Information about the task action. This field is required if `TriggerEventSource` is one of the following values: `OnZendeskTicketCreate` | `OnZendeskTicketStatusUpdate` | `OnSalesforceCaseCreate`
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-rule-taskaction.html}
 **/
export interface ConnectRuleTaskAction {
  /**
   * The description. Supports variable injection. For more information, see [JSONPath reference](https://docs.aws.amazon.com/connect/latest/adminguide/contact-lens-variable-injection.html) in the _Amazon Connect Administrators Guide_.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Description?: Value<string>;
  /**
   * Information about the reference when the `referenceType` is `URL`. Otherwise, null. `URL` is the only accepted type. (Supports variable injection in the `Value` field.)
   *
   * _Required_: No
   *
   * _Type_: Map of [Reference](aws-properties-connect-rule-reference.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  References?: { [key: string]: ConnectRuleReference };
  /**
   * The Amazon Resource Name (ARN) of the flow.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ContactFlowArn: Value<string>;
  /**
   * The name. Supports variable injection. For more information, see [JSONPath reference](https://docs.aws.amazon.com/connect/latest/adminguide/contact-lens-variable-injection.html) in the _Amazon Connect Administrators Guide_.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Name: Value<string>;
}

/**
 * The type of notification recipient.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-rule-notificationrecipienttype.html}
 **/
export interface ConnectRuleNotificationRecipientType {
  /**
   * The tags used to organize, track, or control access for this resource. For example, { "tags": {"key1":"value1", "key2":"value2"} }. Amazon Connect users with the specified tags will be notified.
   *
   * _Required_: No
   *
   * _Type_: Map of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  UserTags?: { [key: string]: Value<string> };
  /**
   * The Amazon Resource Name (ARN) of the user account.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  UserArns?: List<Value<string>>;
}

/**
 * Information about the reference when the `referenceType` is `URL`. Otherwise, null. (Supports variable injection in the `Value` field.)
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-rule-reference.html}
 **/
export interface ConnectRuleReference {
  /**
   * The type of the reference. `DATE` must be of type Epoch timestamp.
   *
   * _Allowed values_: `URL` | `ATTACHMENT` | `NUMBER` | `STRING` | `DATE` | `EMAIL`
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Type: Value<string>;
  /**
   * A valid value for the reference. For example, for a URL reference, a formatted URL that is displayed to an agent in the Contact Control Panel (CCP).
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Value: Value<string>;
}

/**
 * A list of actions to be run when the rule is triggered.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-rule-actions.html}
 **/
export interface ConnectRuleActions {
  /**
   * Information about the EventBridge action.
   *
   * _Required_: No
   *
   * _Type_: List of [EventBridgeAction](aws-properties-connect-rule-eventbridgeaction.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  EventBridgeActions?: List<ConnectRuleEventBridgeAction>;
  /**
   * Information about the contact category action. The syntax can be empty, for example, `{}`.
   *
   * _Required_: No
   *
   * _Type_: List of Json
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AssignContactCategoryActions?: List<{ [key: string]: any }>;
  /**
   * Information about the task action. This field is required if `TriggerEventSource` is one of the following values: `OnZendeskTicketCreate` | `OnZendeskTicketStatusUpdate` | `OnSalesforceCaseCreate`
   *
   * _Required_: No
   *
   * _Type_: List of [TaskAction](aws-properties-connect-rule-taskaction.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TaskActions?: List<ConnectRuleTaskAction>;
  /**
   * Information about the send notification action.
   *
   * _Required_: No
   *
   * _Type_: List of [SendNotificationAction](aws-properties-connect-rule-sendnotificationaction.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SendNotificationActions?: List<ConnectRuleSendNotificationAction>;
}

/**
 * The name of the event source.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-rule-ruletriggereventsource.html}
 **/
export interface ConnectRuleRuleTriggerEventSource {
  /**
   * The Amazon Resource Name (ARN) for the integration association. `IntegrationAssociationArn` is required if `TriggerEventSource` is one of the following values: `OnZendeskTicketCreate` | `OnZendeskTicketStatusUpdate` | `OnSalesforceCaseCreate`
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  IntegrationAssociationArn?: Value<string>;
  /**
   * The name of the event source.
   *
   * _Allowed values_: `OnPostCallAnalysisAvailable` | `OnRealTimeCallAnalysisAvailable` | `OnPostChatAnalysisAvailable` | `OnZendeskTicketCreate` | `OnZendeskTicketStatusUpdate` | `OnSalesforceCaseCreate`
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  EventSourceName: Value<string>;
}

/**
 * Information about the send notification action.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-rule-sendnotificationaction.html}
 **/
export interface ConnectRuleSendNotificationAction {
  /**
   * Notification delivery method.
   *
   * _Allowed value_: `EMAIL`
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DeliveryMethod: Value<string>;
  /**
   * Content type format.
   *
   * _Allowed value_: `PLAIN_TEXT`
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ContentType: Value<string>;
  /**
   * Notification content. Supports variable injection. For more information, see [JSONPath reference](https://docs.aws.amazon.com/connect/latest/adminguide/contact-lens-variable-injection.html) in the _Amazon Connect Administrators Guide_.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Content: Value<string>;
  /**
   * Notification recipient.
   *
   * _Required_: Yes
   *
   * _Type_: [NotificationRecipientType](aws-properties-connect-rule-notificationrecipienttype.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Recipient: ConnectRuleNotificationRecipientType;
  /**
   * The subject of the email if the delivery method is `EMAIL`. Supports variable injection. For more information, see [JSONPath reference](https://docs.aws.amazon.com/connect/latest/adminguide/contact-lens-variable-injection.html) in the _Amazon Connect Administrators Guide_.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Subject?: Value<string>;
}
export interface ConnectRuleProperties {
  /**
   * The conditions of the rule.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Function: Value<string>;
  /**
   * The event source to trigger the rule.
   *
   * _Required_: Yes
   *
   * _Type_: [RuleTriggerEventSource](aws-properties-connect-rule-ruletriggereventsource.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  TriggerEventSource: ConnectRuleRuleTriggerEventSource;
  /**
   * A list of actions to be run when the rule is triggered.
   *
   * _Required_: Yes
   *
   * _Type_: [Actions](aws-properties-connect-rule-actions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Actions: ConnectRuleActions;
  /**
   * The Amazon Resource Name (ARN) of the instance.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
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
   * The name of the rule.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Name: Value<string>;
  /**
   * The publish status of the rule.
   *
   * _Allowed values_: `DRAFT` | `PUBLISHED`
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PublishStatus: Value<string>;
}

/**
 * Creates a rule for the specified Amazon Connect instance.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-rule.html}
 */
export interface ConnectRuleResource {
  Type: 'AWS::Connect::Rule';
  Properties: ConnectRuleProperties;
}
