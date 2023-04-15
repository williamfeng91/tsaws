/**
 * Supported regions:
 * - ap-northeast-1 (version 119.1.0)
 * - ap-northeast-2 (version 119.1.0)
 * - ap-southeast-1 (version 119.1.0)
 * - ap-southeast-2 (version 119.1.0)
 * - ca-central-1 (version 119.1.0)
 * - eu-central-1 (version 119.1.0)
 * - eu-west-1 (version 119.1.0)
 * - eu-west-2 (version 119.1.0)
 * - us-east-1 (version 119.1.0)
 * - us-west-2 (version 119.1.0)
 */
import { List, Value } from '../../shared-types/dataTypes';
import { ResourceTag } from '../../shared-types/resource';

/**
 * Specifies settings that are unique to a locale. For example, you can use different Lambda function depending on the bot's locale.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-botalias-botaliaslocalesettings.html}
 **/
export interface LexBotAliasBotAliasLocaleSettings {
  /**
   * Specifies the Lambda function that should be used in the locale.
   *
   * _Required_: No
   *
   * _Type_: [CodeHookSpecification](aws-properties-lex-botalias-codehookspecification.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CodeHookSpecification?: LexBotAliasCodeHookSpecification;
  /**
   * Determines whether the locale is enabled for the bot. If the value is `false`, the locale isn't available for use.
   *
   * _Required_: Yes
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Enabled: Value<boolean>;
}

/**
 * Configures conversation logging that saves audio, text, and metadata for the conversations with your users.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-botalias-conversationlogsettings.html}
 **/
export interface LexBotAliasConversationLogSettings {
  /**
   * The Amazon CloudWatch Logs settings for logging text and metadata.
   *
   * _Required_: No
   *
   * _Type_: List of [TextLogSetting](aws-properties-lex-botalias-textlogsetting.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TextLogSettings?: List<LexBotAliasTextLogSetting>;
  /**
   * The Amazon S3 settings for logging audio to an S3 bucket.
   *
   * _Required_: No
   *
   * _Type_: List of [AudioLogSetting](aws-properties-lex-botalias-audiologsetting.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AudioLogSettings?: List<LexBotAliasAudioLogSetting>;
}

/**
 * The Amazon CloudWatch Logs log group where the text and metadata logs are delivered. The log group must exist before you enable logging.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-botalias-cloudwatchloggrouplogdestination.html}
 **/
export interface LexBotAliasCloudWatchLogGroupLogDestination {
  /**
   * The Amazon Resource Name (ARN) of the log group where text and metadata logs are delivered.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CloudWatchLogGroupArn: Value<string>;
  /**
   * The prefix of the log stream name within the log group that you specified
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  LogPrefix: Value<string>;
}

/**
 * Specifies a Lambda function that verifies requests to a bot or fulfills the user's request to a bot.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-botalias-lambdacodehook.html}
 **/
export interface LexBotAliasLambdaCodeHook {
  /**
   * The Amazon Resource Name (ARN) of the Lambda function.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  LambdaArn: Value<string>;
  /**
   * The version of the request-response that you want Amazon Lex to use to invoke your Lambda function.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CodeHookInterfaceVersion: Value<string>;
}

/**
 * Defines settings to enable text conversation logs.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-botalias-textlogsetting.html}
 **/
export interface LexBotAliasTextLogSetting {
  /**
   * Defines the Amazon CloudWatch Logs destination log group for conversation text logs.
   *
   * _Required_: Yes
   *
   * _Type_: [TextLogDestination](aws-properties-lex-botalias-textlogdestination.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Destination: LexBotAliasTextLogDestination;
  /**
   * Determines whether conversation logs should be stored for an alias.
   *
   * _Required_: Yes
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Enabled: Value<boolean>;
}

/**
 * Determines whether Amazon Lex will use Amazon Comprehend to detect the sentiment of user utterances.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-botalias-sentimentanalysissettings.html}
 **/
export interface LexBotAliasSentimentAnalysisSettings {
  /**
   * Sets whether Amazon Lex uses Amazon Comprehend to detect the sentiment of user utterances.
   *
   * _Required_: Yes
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DetectSentiment: Value<boolean>;
}

/**
 * Defines the Amazon CloudWatch Logs destination log group for conversation text logs.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-botalias-textlogdestination.html}
 **/
export interface LexBotAliasTextLogDestination {
  /**
   * Defines the Amazon CloudWatch Logs log group where text and metadata logs are delivered.
   *
   * _Required_: Yes
   *
   * _Type_: [CloudWatchLogGroupLogDestination](aws-properties-lex-botalias-cloudwatchloggrouplogdestination.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CloudWatch: LexBotAliasCloudWatchLogGroupLogDestination;
}

/**
 * Contains information about code hooks that Amazon Lex calls during a conversation.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-botalias-codehookspecification.html}
 **/
export interface LexBotAliasCodeHookSpecification {
  /**
   * Specifies a Lambda function that verifies requests to a bot or fulfills the user's request to a bot.
   *
   * _Required_: Yes
   *
   * _Type_: [LambdaCodeHook](aws-properties-lex-botalias-lambdacodehook.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  LambdaCodeHook: LexBotAliasLambdaCodeHook;
}

/**
 * Specifies the S3 bucket location where audio logs are stored.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-botalias-audiologdestination.html}
 **/
export interface LexBotAliasAudioLogDestination {
  /**
   * The S3 bucket location where audio logs are stored.
   *
   * _Required_: Yes
   *
   * _Type_: [S3BucketLogDestination](aws-properties-lex-botalias-s3bucketlogdestination.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  S3Bucket: LexBotAliasS3BucketLogDestination;
}

/**
 * Settings for logging audio of conversations between Amazon Lex and a user. You specify whether to log audio and the Amazon S3 bucket where the audio file is stored.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-botalias-audiologsetting.html}
 **/
export interface LexBotAliasAudioLogSetting {
  /**
   * The location of audio log files collected when conversation logging is enabled for a bot.
   *
   * _Required_: Yes
   *
   * _Type_: [AudioLogDestination](aws-properties-lex-botalias-audiologdestination.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Destination: LexBotAliasAudioLogDestination;
  /**
   * Determines whether audio logging in enabled for the bot.
   *
   * _Required_: Yes
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Enabled: Value<boolean>;
}

/**
 * Specifies settings that are unique to a locale. For example, you can use different Lambda function depending on the bot's locale.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-botalias-botaliaslocalesettingsitem.html}
 **/
export interface LexBotAliasBotAliasLocaleSettingsItem {
  /**
   * The unique identifier of the locale.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  LocaleId: Value<string>;
  /**
   * Specifies settings that are unique to a locale.
   *
   * _Required_: Yes
   *
   * _Type_: [BotAliasLocaleSettings](aws-properties-lex-botalias-botaliaslocalesettings.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  BotAliasLocaleSetting: LexBotAliasBotAliasLocaleSettings;
}

/**
 * Specifies an Amazon S3 bucket for logging audio conversations
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lex-botalias-s3bucketlogdestination.html}
 **/
export interface LexBotAliasS3BucketLogDestination {
  /**
   * The Amazon Resource Name (ARN) of an AWS Key Management Service (KMS) key for encrypting audio log files stored in an Amazon S3 bucket.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  KmsKeyArn?: Value<string>;
  /**
   * The S3 prefix to assign to audio log files.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  LogPrefix: Value<string>;
  /**
   * The Amazon Resource Name (ARN) of an Amazon S3 bucket where audio log files are stored.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  S3BucketArn: Value<string>;
}
export interface LexBotAliasProperties {
  /**
   * The version of the bot that the bot alias references.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `5`
   *
   * _Pattern_: `^(DRAFT|[0-9]+)$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  BotVersion?: Value<string>;
  /**
   * The description of the bot alias.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `0`
   *
   * _Maximum_: `200`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Description?: Value<string>;
  /**
   * The unique identifier of the bot.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  BotId: Value<string>;
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: [List](aws-properties-lex-botalias-botaliaslocalesettings.md) of [BotAliasLocaleSettingsItem](aws-properties-lex-botalias-botaliaslocalesettingsitem.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  BotAliasLocaleSettings?: List<LexBotAliasBotAliasLocaleSettingsItem>;
  /**
   * Specifies whether Amazon Lex logs text and audio for conversations with the bot. When you enable conversation logs, text logs store text input, transcripts of audio input, and associated metadata in Amazon CloudWatch logs. Audio logs store input in Amazon S3.
   *
   * _Required_: No
   *
   * _Type_: [ConversationLogSettings](aws-properties-lex-botalias-conversationlogsettings.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ConversationLogSettings?: LexBotAliasConversationLogSettings;
  /**
   * Determines whether Amazon Lex will use Amazon Comprehend to detect the sentiment of user utterances.
   *
   * _Required_: No
   *
   * _Type_: [SentimentAnalysisSettings](aws-properties-lex-botalias-sentimentanalysissettings.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SentimentAnalysisSettings?: LexBotAliasSentimentAnalysisSettings;
  /**
   * The name of the bot alias.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `100`
   *
   * _Pattern_: `^([0-9a-zA-Z][_-]?)+$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  BotAliasName: Value<string>;
  /**
   * An array of key-value pairs to apply to this resource.
   *
   * You can only add tags when you specify an alias.
   *
   * For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html).
   *
   * _Required_: No
   *
   * _Type_: List of [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  BotAliasTags?: List<ResourceTag>;
}

/**
 * **Note**
 *
 * Amazon Lex V2 is the only supported version in AWS CloudFormation.
 *
 * Specifies an alias for the specified version of a bot. Use an alias to enable you to change the version of a bot without updating applications that use the bot.
 *
 * For example, you can specify an alias called "PROD" that your applications use to call the Amazon Lex bot.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-botalias.html}
 */
export interface LexBotAliasResource {
  Type: 'AWS::Lex::BotAlias';
  Properties: LexBotAliasProperties;
}
