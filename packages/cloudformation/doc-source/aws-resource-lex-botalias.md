# AWS::Lex::BotAlias<a name="aws-resource-lex-botalias"></a>

**Note**  
Amazon Lex V2 is the only supported version in AWS CloudFormation\.

Specifies an alias for the specified version of a bot\. Use an alias to enable you to change the version of a bot without updating applications that use the bot\.

For example, you can specify an alias called "PROD" that your applications use to call the Amazon Lex bot\.

## Syntax<a name="aws-resource-lex-botalias-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-resource-lex-botalias-syntax.json"></a>

```
{
  "Type" : "AWS::Lex::BotAlias",
  "Properties" : {
      "[BotAliasLocaleSettings](#cfn-lex-botalias-botaliaslocalesettings)" : [ BotAliasLocaleSettingsItem, ... ],
      "[BotAliasName](#cfn-lex-botalias-botaliasname)" : String,
      "[BotAliasTags](#cfn-lex-botalias-botaliastags)" : [ [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html), ... ],
      "[BotId](#cfn-lex-botalias-botid)" : String,
      "[BotVersion](#cfn-lex-botalias-botversion)" : String,
      "[ConversationLogSettings](#cfn-lex-botalias-conversationlogsettings)" : ConversationLogSettings,
      "[Description](#cfn-lex-botalias-description)" : String,
      "[SentimentAnalysisSettings](#cfn-lex-botalias-sentimentanalysissettings)" : SentimentAnalysisSettings
    }
}
```

### YAML<a name="aws-resource-lex-botalias-syntax.yaml"></a>

```
Type: AWS::Lex::BotAlias
Properties:
  [BotAliasLocaleSettings](#cfn-lex-botalias-botaliaslocalesettings):
    - BotAliasLocaleSettingsItem
  [BotAliasName](#cfn-lex-botalias-botaliasname): String
  [BotAliasTags](#cfn-lex-botalias-botaliastags):
    - [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)
  [BotId](#cfn-lex-botalias-botid): String
  [BotVersion](#cfn-lex-botalias-botversion): String
  [ConversationLogSettings](#cfn-lex-botalias-conversationlogsettings):
    ConversationLogSettings
  [Description](#cfn-lex-botalias-description): String
  [SentimentAnalysisSettings](#cfn-lex-botalias-sentimentanalysissettings):
    SentimentAnalysisSettings
```

## Properties<a name="aws-resource-lex-botalias-properties"></a>

`BotAliasLocaleSettings` <a name="cfn-lex-botalias-botaliaslocalesettings"></a>
Property description not available\.  
_Required_: No  
_Type_: [List](aws-properties-lex-botalias-botaliaslocalesettings.md) of [BotAliasLocaleSettingsItem](aws-properties-lex-botalias-botaliaslocalesettingsitem.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`BotAliasName` <a name="cfn-lex-botalias-botaliasname"></a>
The name of the bot alias\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `100`  
_Pattern_: `^([0-9a-zA-Z][_-]?)+$`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`BotAliasTags` <a name="cfn-lex-botalias-botaliastags"></a>
An array of key\-value pairs to apply to this resource\.  
You can only add tags when you specify an alias\.  
For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)\.  
_Required_: No  
_Type_: List of [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`BotId` <a name="cfn-lex-botalias-botid"></a>
The unique identifier of the bot\.  
_Required_: Yes  
_Type_: String  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`BotVersion` <a name="cfn-lex-botalias-botversion"></a>
The version of the bot that the bot alias references\.  
_Required_: No  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `5`  
_Pattern_: `^(DRAFT|[0-9]+)$`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`ConversationLogSettings` <a name="cfn-lex-botalias-conversationlogsettings"></a>
Specifies whether Amazon Lex logs text and audio for conversations with the bot\. When you enable conversation logs, text logs store text input, transcripts of audio input, and associated metadata in Amazon CloudWatch logs\. Audio logs store input in Amazon S3\.  
_Required_: No  
_Type_: [ConversationLogSettings](aws-properties-lex-botalias-conversationlogsettings.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Description` <a name="cfn-lex-botalias-description"></a>
The description of the bot alias\.  
_Required_: No  
_Type_: String  
_Minimum_: `0`  
_Maximum_: `200`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`SentimentAnalysisSettings` <a name="cfn-lex-botalias-sentimentanalysissettings"></a>
Determines whether Amazon Lex will use Amazon Comprehend to detect the sentiment of user utterances\.  
_Required_: No  
_Type_: [SentimentAnalysisSettings](aws-properties-lex-botalias-sentimentanalysissettings.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

## Return values<a name="aws-resource-lex-botalias-return-values"></a>

### Fn::GetAtt<a name="aws-resource-lex-botalias-return-values-fn--getatt"></a>

#### <a name="aws-resource-lex-botalias-return-values-fn--getatt-fn--getatt"></a>

`Arn` <a name="Arn-fn::getatt"></a>
The Amazon Resource Name \(ARN\) of the bot alias\.

`BotAliasId` <a name="BotAliasId-fn::getatt"></a>
The unique identifier of the bot alias\.

`BotAliasStatus` <a name="BotAliasStatus-fn::getatt"></a>
The current status of the bot alias\. When the status is Available the alias is ready for use with your bot\.
