/**
 * Supported regions:
 * - eu-west-1 (version 119.1.0)
 * - us-east-1 (version 119.1.0)
 * - us-west-2 (version 119.1.0)
 */
import { List, Value } from '../../shared-types/dataTypes';

/**
 * When included in a receipt rule, this action rejects the received email by returning a bounce response to the sender and, optionally, publishes a notification to Amazon Simple Notification Service (Amazon SNS).
 *
 * For information about sending a bounce message in response to a received email, see the [Amazon SES Developer Guide](https://docs.aws.amazon.com/ses/latest/dg/receiving-email-action-bounce.html).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-receiptrule-bounceaction.html}
 **/
export interface SESReceiptRuleBounceAction {
  /**
   * The email address of the sender of the bounced email. This is the address from which the bounce message is sent.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Sender: Value<string>;
  /**
   * The SMTP reply code, as defined by [RFC 5321](https://tools.ietf.org/html/rfc5321).
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SmtpReplyCode: Value<string>;
  /**
   * Human-readable text to include in the bounce message.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Message: Value<string>;
  /**
   * The Amazon Resource Name (ARN) of the Amazon SNS topic to notify when the bounce action is taken. You can find the ARN of a topic by using the [ListTopics](https://docs.aws.amazon.com/sns/latest/api/API_ListTopics.html) operation in Amazon SNS.
   *
   * For more information about Amazon SNS topics, see the [Amazon SNS Developer Guide](https://docs.aws.amazon.com/sns/latest/dg/CreateTopic.html).
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TopicArn?: Value<string>;
  /**
   * The SMTP enhanced status code, as defined by [RFC 3463](https://tools.ietf.org/html/rfc3463).
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  StatusCode?: Value<string>;
}

/**
 * An action that Amazon SES can take when it receives an email on behalf of one or more email addresses or domains that you own. An instance of this data type can represent only one action.
 *
 * For information about setting up receipt rules, see the [Amazon SES Developer Guide](https://docs.aws.amazon.com/ses/latest/dg/receiving-email-receipt-rules-console-walkthrough.html).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-receiptrule-action.html}
 **/
export interface SESReceiptRuleAction {
  /**
   * Rejects the received email by returning a bounce response to the sender and, optionally, publishes a notification to Amazon Simple Notification Service (Amazon SNS).
   *
   * _Required_: No
   *
   * _Type_: [BounceAction](aws-properties-ses-receiptrule-bounceaction.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  BounceAction?: SESReceiptRuleBounceAction;
  /**
   * Saves the received message to an Amazon Simple Storage Service (Amazon S3) bucket and, optionally, publishes a notification to Amazon SNS.
   *
   * _Required_: No
   *
   * _Type_: [S3Action](aws-properties-ses-receiptrule-s3action.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  S3Action?: SESReceiptRuleS3Action;
  /**
   * Terminates the evaluation of the receipt rule set and optionally publishes a notification to Amazon SNS.
   *
   * _Required_: No
   *
   * _Type_: [StopAction](aws-properties-ses-receiptrule-stopaction.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  StopAction?: SESReceiptRuleStopAction;
  /**
   * Publishes the email content within a notification to Amazon SNS.
   *
   * _Required_: No
   *
   * _Type_: [SNSAction](aws-properties-ses-receiptrule-snsaction.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SNSAction?: SESReceiptRuleSNSAction;
  /**
   * Calls Amazon WorkMail and, optionally, publishes a notification to Amazon Amazon SNS.
   *
   * _Required_: No
   *
   * _Type_: [WorkmailAction](aws-properties-ses-receiptrule-workmailaction.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  WorkmailAction?: SESReceiptRuleWorkmailAction;
  /**
   * Adds a header to the received email.
   *
   * _Required_: No
   *
   * _Type_: [AddHeaderAction](aws-properties-ses-receiptrule-addheaderaction.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AddHeaderAction?: SESReceiptRuleAddHeaderAction;
  /**
   * Calls an AWS Lambda function, and optionally, publishes a notification to Amazon SNS.
   *
   * _Required_: No
   *
   * _Type_: [LambdaAction](aws-properties-ses-receiptrule-lambdaaction.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  LambdaAction?: SESReceiptRuleLambdaAction;
}

/**
 * When included in a receipt rule, this action calls Amazon WorkMail and, optionally, publishes a notification to Amazon Simple Notification Service (Amazon SNS). It usually isn't necessary to set this up manually, because Amazon WorkMail adds the rule automatically during its setup procedure.
 *
 * For information using a receipt rule to call Amazon WorkMail, see the [Amazon SES Developer Guide](https://docs.aws.amazon.com/ses/latest/dg/receiving-email-action-workmail.html).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-receiptrule-workmailaction.html}
 **/
export interface SESReceiptRuleWorkmailAction {
  /**
   * The Amazon Resource Name (ARN) of the Amazon SNS topic to notify when the WorkMail action is called. You can find the ARN of a topic by using the [ListTopics](https://docs.aws.amazon.com/sns/latest/api/API_ListTopics.html) operation in Amazon SNS.
   *
   * For more information about Amazon SNS topics, see the [Amazon SNS Developer Guide](https://docs.aws.amazon.com/sns/latest/dg/CreateTopic.html).
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TopicArn?: Value<string>;
  /**
   * The Amazon Resource Name (ARN) of the Amazon WorkMail organization. Amazon WorkMail ARNs use the following format:
   *
   * `arn:aws:workmail:<region>:<awsAccountId>:organization/<workmailOrganizationId>`
   *
   * You can find the ID of your organization by using the [ListOrganizations](https://docs.aws.amazon.com/workmail/latest/APIReference/API_ListOrganizations.html) operation in Amazon WorkMail. Amazon WorkMail organization IDs begin with "`m-`", followed by a string of alphanumeric characters.
   *
   * For information about Amazon WorkMail organizations, see the [Amazon WorkMail Administrator Guide](https://docs.aws.amazon.com/workmail/latest/adminguide/organizations_overview.html).
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  OrganizationArn: Value<string>;
}

/**
 * Receipt rules enable you to specify which actions Amazon SES should take when it receives mail on behalf of one or more email addresses or domains that you own.
 *
 * Each receipt rule defines a set of email addresses or domains that it applies to. If the email addresses or domains match at least one recipient address of the message, Amazon SES executes all of the receipt rule's actions on the message.
 *
 * For information about setting up receipt rules, see the [Amazon SES Developer Guide](https://docs.aws.amazon.com/ses/latest/dg/receiving-email-receipt-rules-console-walkthrough.html).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-receiptrule-rule.html}
 **/
export interface SESReceiptRuleRule {
  /**
   * If `true`, then messages that this receipt rule applies to are scanned for spam and viruses. The default value is `false`.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ScanEnabled?: Value<boolean>;
  /**
   * The recipient domains and email addresses that the receipt rule applies to. If this field is not specified, this rule matches all recipients on all verified domains.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Recipients?: List<Value<string>>;
  /**
   * An ordered list of actions to perform on messages that match at least one of the recipient email addresses or domains specified in the receipt rule.
   *
   * _Required_: No
   *
   * _Type_: List of [Action](aws-properties-ses-receiptrule-action.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Actions?: List<SESReceiptRuleAction>;
  /**
   * If `true`, the receipt rule is active. The default value is `false`.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Enabled?: Value<boolean>;
  /**
   * The name of the receipt rule. The name must meet the following requirements:
   */
  Name?: Value<string>;
  /**
   * Specifies whether Amazon SES should require that incoming email is delivered over a connection encrypted with Transport Layer Security (TLS). If this parameter is set to `Require`, Amazon SES bounces emails that are not received over TLS. The default is `Optional`.
   *
   * Valid Values: `Require | Optional`
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TlsPolicy?: Value<string>;
}

/**
 * When included in a receipt rule, this action adds a header to the received email.
 *
 * For information about adding a header using a receipt rule, see the [Amazon SES Developer Guide](https://docs.aws.amazon.com/ses/latest/dg/receiving-email-action-add-header.html).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-receiptrule-addheaderaction.html}
 **/
export interface SESReceiptRuleAddHeaderAction {
  /**
   * The content to include in the header. This value can contain up to 2048 characters. It can't contain newline (`n`) or carriage return (`r`) characters.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  HeaderValue: Value<string>;
  /**
   * The name of the header to add to the incoming message. The name must contain at least one character, and can contain up to 50 characters. It consists of alphanumeric (a–z, A–Z, 0–9) characters and dashes.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  HeaderName: Value<string>;
}

/**
 * When included in a receipt rule, this action terminates the evaluation of the receipt rule set and, optionally, publishes a notification to Amazon Simple Notification Service (Amazon SNS).
 *
 * For information about setting a stop action in a receipt rule, see the [Amazon SES Developer Guide](https://docs.aws.amazon.com/ses/latest/dg/receiving-email-action-stop.html).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-receiptrule-stopaction.html}
 **/
export interface SESReceiptRuleStopAction {
  /**
   * The scope of the StopAction. The only acceptable value is `RuleSet`.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Allowed values_: `RuleSet`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Scope: Value<string>;
  /**
   * The Amazon Resource Name (ARN) of the Amazon SNS topic to notify when the stop action is taken. You can find the ARN of a topic by using the [ListTopics](https://docs.aws.amazon.com/sns/latest/api/API_ListTopics.html) Amazon SNS operation.
   *
   * For more information about Amazon SNS topics, see the [Amazon SNS Developer Guide](https://docs.aws.amazon.com/sns/latest/dg/CreateTopic.html).
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TopicArn?: Value<string>;
}

/**
 * When included in a receipt rule, this action publishes a notification to Amazon Simple Notification Service (Amazon SNS). This action includes a complete copy of the email content in the Amazon SNS notifications. Amazon SNS notifications for all other actions simply provide information about the email. They do not include the email content itself.
 *
 * If you own the Amazon SNS topic, you don't need to do anything to give Amazon SES permission to publish emails to it. However, if you don't own the Amazon SNS topic, you need to attach a policy to the topic to give Amazon SES permissions to access it. For information about giving permissions, see the [Amazon SES Developer Guide](https://docs.aws.amazon.com/ses/latest/dg/receiving-email-permissions.html).
 *
 * **Important**
 *
 * You can only publish emails that are 150 KB or less (including the header) to Amazon SNS. Larger emails bounce. If you anticipate emails larger than 150 KB, use the S3 action instead.
 *
 * For information about using a receipt rule to publish an Amazon SNS notification, see the [Amazon SES Developer Guide](https://docs.aws.amazon.com/ses/latest/dg/receiving-email-action-sns.html).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-receiptrule-snsaction.html}
 **/
export interface SESReceiptRuleSNSAction {
  /**
   * The Amazon Resource Name (ARN) of the Amazon SNS topic to notify. You can find the ARN of a topic by using the [ListTopics](https://docs.aws.amazon.com/sns/latest/api/API_ListTopics.html) operation in Amazon SNS.
   *
   * For more information about Amazon SNS topics, see the [Amazon SNS Developer Guide](https://docs.aws.amazon.com/sns/latest/dg/CreateTopic.html).
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TopicArn?: Value<string>;
  /**
   * The encoding to use for the email within the Amazon SNS notification. UTF-8 is easier to use, but may not preserve all special characters when a message was encoded with a different encoding format. Base64 preserves all special characters. The default value is UTF-8.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `Base64 | UTF-8`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Encoding?: Value<string>;
}

/**
 * When included in a receipt rule, this action saves the received message to an Amazon Simple Storage Service (Amazon S3) bucket and, optionally, publishes a notification to Amazon Simple Notification Service (Amazon SNS).
 *
 * To enable Amazon SES to write emails to your Amazon S3 bucket, use an AWS KMS key to encrypt your emails, or publish to an Amazon SNS topic of another account, Amazon SES must have permission to access those resources. For information about granting permissions, see the [Amazon SES Developer Guide](https://docs.aws.amazon.com/ses/latest/dg/receiving-email-permissions.html).
 *
 * **Note**
 *
 * When you save your emails to an Amazon S3 bucket, the maximum email size (including headers) is 30 MB. Emails larger than that bounces.
 *
 * For information about specifying Amazon S3 actions in receipt rules, see the [Amazon SES Developer Guide](https://docs.aws.amazon.com/ses/latest/dg/receiving-email-action-s3.html).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-receiptrule-s3action.html}
 **/
export interface SESReceiptRuleS3Action {
  /**
   * The name of the Amazon S3 bucket for incoming email.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  BucketName: Value<string>;
  /**
   * The customer master key that Amazon SES should use to encrypt your emails before saving them to the Amazon S3 bucket. You can use the default master key or a custom master key that you created in AWS KMS as follows:
   */
  KmsKeyArn?: Value<string>;
  /**
   * The ARN of the Amazon SNS topic to notify when the message is saved to the Amazon S3 bucket. You can find the ARN of a topic by using the [ListTopics](https://docs.aws.amazon.com/sns/latest/api/API_ListTopics.html) operation in Amazon SNS.
   *
   * For more information about Amazon SNS topics, see the [Amazon SNS Developer Guide](https://docs.aws.amazon.com/sns/latest/dg/CreateTopic.html).
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TopicArn?: Value<string>;
  /**
   * The key prefix of the Amazon S3 bucket. The key prefix is similar to a directory name that enables you to store similar data under the same directory in a bucket.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ObjectKeyPrefix?: Value<string>;
}

/**
 * When included in a receipt rule, this action calls an AWS Lambda function and, optionally, publishes a notification to Amazon Simple Notification Service (Amazon SNS).
 *
 * To enable Amazon SES to call your AWS Lambda function or to publish to an Amazon SNS topic of another account, Amazon SES must have permission to access those resources. For information about giving permissions, see the [Amazon SES Developer Guide](https://docs.aws.amazon.com/ses/latest/dg/receiving-email-permissions.html).
 *
 * For information about using AWS Lambda actions in receipt rules, see the [Amazon SES Developer Guide](https://docs.aws.amazon.com/ses/latest/dg/receiving-email-action-lambda.html).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-receiptrule-lambdaaction.html}
 **/
export interface SESReceiptRuleLambdaAction {
  /**
   * The Amazon Resource Name (ARN) of the AWS Lambda function. An example of an AWS Lambda function ARN is `arn:aws:lambda:us-west-2:account-id:function:MyFunction`. For more information about AWS Lambda, see the [AWS Lambda Developer Guide](https://docs.aws.amazon.com/lambda/latest/dg/welcome.html).
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FunctionArn: Value<string>;
  /**
   * The Amazon Resource Name (ARN) of the Amazon SNS topic to notify when the Lambda action is executed. You can find the ARN of a topic by using the [ListTopics](https://docs.aws.amazon.com/sns/latest/api/API_ListTopics.html) operation in Amazon SNS.
   *
   * For more information about Amazon SNS topics, see the [Amazon SNS Developer Guide](https://docs.aws.amazon.com/sns/latest/dg/CreateTopic.html).
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TopicArn?: Value<string>;
  /**
   * The invocation type of the AWS Lambda function. An invocation type of `RequestResponse` means that the execution of the function immediately results in a response, and a value of `Event` means that the function is invoked asynchronously. The default value is `Event`. For information about AWS Lambda invocation types, see the [AWS Lambda Developer Guide](https://docs.aws.amazon.com/lambda/latest/dg/API_Invoke.html).
   *
   * There is a 30-second timeout on `RequestResponse` invocations. You should use `Event` invocation in most cases. Use `RequestResponse` only to make a mail flow decision, such as whether to stop the receipt rule or the receipt rule set.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `Event | RequestResponse`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  InvocationType?: Value<string>;
}
export interface SESReceiptRuleProperties {
  /**
   * The name of an existing rule after which the new rule is placed. If this parameter is null, the new rule is inserted at the beginning of the rule list.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  After?: Value<string>;
  /**
   * A data structure that contains the specified rule's name, actions, recipients, domains, enabled status, scan status, and TLS policy.
   *
   * _Required_: Yes
   *
   * _Type_: [Rule](aws-properties-ses-receiptrule-rule.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Rule: SESReceiptRuleRule;
  /**
   * The name of the rule set where the receipt rule is added.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  RuleSetName: Value<string>;
}

/**
 * Specifies a receipt rule.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-receiptrule.html}
 */
export interface SESReceiptRuleResource {
  Type: 'AWS::SES::ReceiptRule';
  Properties: SESReceiptRuleProperties;
}
