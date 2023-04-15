# AWS::Lex::Bot BotLocale<a name="aws-properties-lex-bot-botlocale"></a>

Provides configuration information for a locale\.

## Syntax<a name="aws-properties-lex-bot-botlocale-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-lex-bot-botlocale-syntax.json"></a>

```
{
  "[CustomVocabulary](#cfn-lex-bot-botlocale-customvocabulary)" : CustomVocabulary,
  "[Description](#cfn-lex-bot-botlocale-description)" : String,
  "[Intents](#cfn-lex-bot-botlocale-intents)" : [ Intent, ... ],
  "[LocaleId](#cfn-lex-bot-botlocale-localeid)" : String,
  "[NluConfidenceThreshold](#cfn-lex-bot-botlocale-nluconfidencethreshold)" : Double,
  "[SlotTypes](#cfn-lex-bot-botlocale-slottypes)" : [ SlotType, ... ],
  "[VoiceSettings](#cfn-lex-bot-botlocale-voicesettings)" : VoiceSettings
}
```

### YAML<a name="aws-properties-lex-bot-botlocale-syntax.yaml"></a>

```
  [CustomVocabulary](#cfn-lex-bot-botlocale-customvocabulary):
    CustomVocabulary
  [Description](#cfn-lex-bot-botlocale-description): String
  [Intents](#cfn-lex-bot-botlocale-intents):
    - Intent
  [LocaleId](#cfn-lex-bot-botlocale-localeid): String
  [NluConfidenceThreshold](#cfn-lex-bot-botlocale-nluconfidencethreshold): Double
  [SlotTypes](#cfn-lex-bot-botlocale-slottypes):
    - SlotType
  [VoiceSettings](#cfn-lex-bot-botlocale-voicesettings):
    VoiceSettings
```

## Properties<a name="aws-properties-lex-bot-botlocale-properties"></a>

`CustomVocabulary` <a name="cfn-lex-bot-botlocale-customvocabulary"></a>
Specifies a custom vocabulary to use with a specific locale\.  
_Required_: No  
_Type_: [CustomVocabulary](aws-properties-lex-bot-customvocabulary.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Description` <a name="cfn-lex-bot-botlocale-description"></a>
A description of the bot locale\. Use this to help identify the bot locale in lists\.  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Intents` <a name="cfn-lex-bot-botlocale-intents"></a>
One or more intents defined for the locale\.  
_Required_: No  
_Type_: List of [Intent](aws-properties-lex-bot-intent.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`LocaleId` <a name="cfn-lex-bot-botlocale-localeid"></a>
The identifier of the language and locale that the bot will be used in\. The string must match one of the supported locales\.  
_Required_: Yes  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`NluConfidenceThreshold` <a name="cfn-lex-bot-botlocale-nluconfidencethreshold"></a>
Determines the threshold where Amazon Lex will insert the `AMAZON.FallbackIntent`, `AMAZON.KendraSearchIntent`, or both when returning alternative intents\. You must configure an `AMAZON.FallbackIntent`\. `AMAZON.KendraSearchIntent` is only inserted if it is configured for the bot\.  
_Required_: Yes  
_Type_: Double  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`SlotTypes` <a name="cfn-lex-bot-botlocale-slottypes"></a>
One or more slot types defined for the locale\.  
_Required_: No  
_Type_: List of [SlotType](aws-properties-lex-bot-slottype.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`VoiceSettings` <a name="cfn-lex-bot-botlocale-voicesettings"></a>
Defines settings for using an Amazon Polly voice to communicate with a user\.  
_Required_: No  
_Type_: [VoiceSettings](aws-properties-lex-bot-voicesettings.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
