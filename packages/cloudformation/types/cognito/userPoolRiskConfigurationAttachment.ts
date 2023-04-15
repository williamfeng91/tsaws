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
 * Account takeover actions type.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-userpoolriskconfigurationattachment-accounttakeoveractionstype.html}
 **/
export interface CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverActionsType {
  /**
   * Action to take for a high risk.
   *
   * _Required_: No
   *
   * _Type_: [AccountTakeoverActionType](aws-properties-cognito-userpoolriskconfigurationattachment-accounttakeoveractiontype.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  HighAction?: CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverActionType;
  /**
   * Action to take for a low risk.
   *
   * _Required_: No
   *
   * _Type_: [AccountTakeoverActionType](aws-properties-cognito-userpoolriskconfigurationattachment-accounttakeoveractiontype.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  LowAction?: CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverActionType;
  /**
   * Action to take for a medium risk.
   *
   * _Required_: No
   *
   * _Type_: [AccountTakeoverActionType](aws-properties-cognito-userpoolriskconfigurationattachment-accounttakeoveractiontype.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MediumAction?: CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverActionType;
}

/**
 * The type of the configuration to override the risk decision.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-userpoolriskconfigurationattachment-riskexceptionconfigurationtype.html}
 **/
export interface CognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfigurationType {
  /**
   * Overrides the risk decision to always block the pre-authentication requests. The IP range is in CIDR notation, a compact representation of an IP address and its routing prefix.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Maximum_: `200`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  BlockedIPRangeList?: List<Value<string>>;
  /**
   * Risk detection isn't performed on the IP addresses in this range list. The IP range is in CIDR notation.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Maximum_: `200`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SkippedIPRangeList?: List<Value<string>>;
}

/**
 * Account takeover action type.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-userpoolriskconfigurationattachment-accounttakeoveractiontype.html}
 **/
export interface CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverActionType {
  /**
   * Flag specifying whether to send a notification.
   *
   * _Required_: Yes
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Notify: Value<boolean>;
  /**
   * The action to take in response to the account takeover action. Valid values are as follows:
   */
  EventAction: Value<string>;
}

/**
 * The compromised credentials risk configuration type.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-userpoolriskconfigurationattachment-compromisedcredentialsriskconfigurationtype.html}
 **/
export interface CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationType {
  /**
   * The compromised credentials risk configuration actions.
   *
   * _Required_: Yes
   *
   * _Type_: [CompromisedCredentialsActionsType](aws-properties-cognito-userpoolriskconfigurationattachment-compromisedcredentialsactionstype.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Actions: CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsActionsType;
  /**
   * Perform the action for these events. The default is to perform all events if no event filter is specified.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  EventFilter?: List<Value<string>>;
}

/**
 * The compromised credentials actions type.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-userpoolriskconfigurationattachment-compromisedcredentialsactionstype.html}
 **/
export interface CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsActionsType {
  /**
   * The event action.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Allowed values_: `BLOCK | NO_ACTION`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  EventAction: Value<string>;
}

/**
 * The notify configuration type.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-userpoolriskconfigurationattachment-notifyconfigurationtype.html}
 **/
export interface CognitoUserPoolRiskConfigurationAttachmentNotifyConfigurationType {
  /**
   * Email template used when a detected risk event is blocked.
   *
   * _Required_: No
   *
   * _Type_: [NotifyEmailType](aws-properties-cognito-userpoolriskconfigurationattachment-notifyemailtype.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  BlockEmail?: CognitoUserPoolRiskConfigurationAttachmentNotifyEmailType;
  /**
   * The destination to which the receiver of an email should reply to.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ReplyTo?: Value<string>;
  /**
   * The Amazon Resource Name (ARN) of the identity that is associated with the sending authorization policy. This identity permits Amazon Cognito to send for the email address specified in the `From` parameter.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `20`
   *
   * _Maximum_: `2048`
   *
   * _Pattern_: `arn:[w+=/,.@-]+:[w+=/,.@-]+:([w+=/,.@-]*)?:[0-9]+:[w+=/,.@-]+(:[w+=/,.@-]+)?(:[w+=/,.@-]+)?`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SourceArn: Value<string>;
  /**
   * The email template used when a detected risk event is allowed.
   *
   * _Required_: No
   *
   * _Type_: [NotifyEmailType](aws-properties-cognito-userpoolriskconfigurationattachment-notifyemailtype.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  NoActionEmail?: CognitoUserPoolRiskConfigurationAttachmentNotifyEmailType;
  /**
   * The email address that is sending the email. The address must be either individually verified with Amazon Simple Email Service, or from a domain that has been verified with Amazon SES.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  From?: Value<string>;
  /**
   * The multi-factor authentication (MFA) email template used when MFA is challenged as part of a detected risk.
   *
   * _Required_: No
   *
   * _Type_: [NotifyEmailType](aws-properties-cognito-userpoolriskconfigurationattachment-notifyemailtype.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MfaEmail?: CognitoUserPoolRiskConfigurationAttachmentNotifyEmailType;
}

/**
 * The notify email type.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-userpoolriskconfigurationattachment-notifyemailtype.html}
 **/
export interface CognitoUserPoolRiskConfigurationAttachmentNotifyEmailType {
  /**
   * The email text body.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `6`
   *
   * _Maximum_: `20000`
   *
   * _Pattern_: `[p{L}p{M}p{S}p{N}p{P}s*]+`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TextBody?: Value<string>;
  /**
   * The email HTML body.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `6`
   *
   * _Maximum_: `20000`
   *
   * _Pattern_: `[p{L}p{M}p{S}p{N}p{P}s*]+`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  HtmlBody?: Value<string>;
  /**
   * The email subject.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `140`
   *
   * _Pattern_: `[p{L}p{M}p{S}p{N}p{P}s]+`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Subject: Value<string>;
}

/**
 * Configuration for mitigation actions and notification for different levels of risk detected for a potential account takeover.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-userpoolriskconfigurationattachment-accounttakeoverriskconfigurationtype.html}
 **/
export interface CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationType {
  /**
   * Account takeover risk configuration actions.
   *
   * _Required_: Yes
   *
   * _Type_: [AccountTakeoverActionsType](aws-properties-cognito-userpoolriskconfigurationattachment-accounttakeoveractionstype.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Actions: CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverActionsType;
  /**
   * The notify configuration used to construct email notifications.
   *
   * _Required_: No
   *
   * _Type_: [NotifyConfigurationType](aws-properties-cognito-userpoolriskconfigurationattachment-notifyconfigurationtype.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  NotifyConfiguration?: CognitoUserPoolRiskConfigurationAttachmentNotifyConfigurationType;
}
export interface CognitoUserPoolRiskConfigurationAttachmentProperties {
  /**
   * The compromised credentials risk configuration object, including the `EventFilter` and the `EventAction`.
   *
   * _Required_: No
   *
   * _Type_: [CompromisedCredentialsRiskConfigurationType](aws-properties-cognito-userpoolriskconfigurationattachment-compromisedcredentialsriskconfigurationtype.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CompromisedCredentialsRiskConfiguration?: CognitoUserPoolRiskConfigurationAttachmentCompromisedCredentialsRiskConfigurationType;
  /**
   * The user pool ID.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `55`
   *
   * _Pattern_: `[w-]+_[0-9a-zA-Z]+`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  UserPoolId: Value<string>;
  /**
   * The app client ID. You can specify the risk configuration for a single client (with a specific ClientId) or for all clients (by setting the ClientId to `ALL`).
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `128`
   *
   * _Pattern_: `[w+]+`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ClientId: Value<string>;
  /**
   * The account takeover risk configuration object, including the `NotifyConfiguration` object and `Actions` to take if there is an account takeover.
   *
   * _Required_: No
   *
   * _Type_: [AccountTakeoverRiskConfigurationType](aws-properties-cognito-userpoolriskconfigurationattachment-accounttakeoverriskconfigurationtype.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AccountTakeoverRiskConfiguration?: CognitoUserPoolRiskConfigurationAttachmentAccountTakeoverRiskConfigurationType;
  /**
   * The configuration to override the risk decision.
   *
   * _Required_: No
   *
   * _Type_: [RiskExceptionConfigurationType](aws-properties-cognito-userpoolriskconfigurationattachment-riskexceptionconfigurationtype.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RiskExceptionConfiguration?: CognitoUserPoolRiskConfigurationAttachmentRiskExceptionConfigurationType;
}

/**
 * The `AWS::Cognito::UserPoolRiskConfigurationAttachment` resource sets the risk configuration that is used for Amazon Cognito advanced security features.
 *
 * You can specify risk configuration for a single client (with a specific `clientId`) or for all clients (by setting the `clientId` to `ALL`). If you specify `ALL`, the default configuration is used for every client that has had no risk configuration set previously. If you specify risk configuration for a particular client, it no longer falls back to the `ALL` configuration.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpoolriskconfigurationattachment.html}
 */
export interface CognitoUserPoolRiskConfigurationAttachmentResource {
  Type: 'AWS::Cognito::UserPoolRiskConfigurationAttachment';
  Properties: CognitoUserPoolRiskConfigurationAttachmentProperties;
}
