# AWS::Lex::Bot Message<a name="aws-properties-lex-bot-message"></a>

The object that provides message text and its type\.

## Syntax<a name="aws-properties-lex-bot-message-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-lex-bot-message-syntax.json"></a>

```
{
  "[CustomPayload](#cfn-lex-bot-message-custompayload)" : CustomPayload,
  "[ImageResponseCard](#cfn-lex-bot-message-imageresponsecard)" : ImageResponseCard,
  "[PlainTextMessage](#cfn-lex-bot-message-plaintextmessage)" : PlainTextMessage,
  "[SSMLMessage](#cfn-lex-bot-message-ssmlmessage)" : SSMLMessage
}
```

### YAML<a name="aws-properties-lex-bot-message-syntax.yaml"></a>

```
  [CustomPayload](#cfn-lex-bot-message-custompayload):
    CustomPayload
  [ImageResponseCard](#cfn-lex-bot-message-imageresponsecard):
    ImageResponseCard
  [PlainTextMessage](#cfn-lex-bot-message-plaintextmessage):
    PlainTextMessage
  [SSMLMessage](#cfn-lex-bot-message-ssmlmessage):
    SSMLMessage
```

## Properties<a name="aws-properties-lex-bot-message-properties"></a>

`CustomPayload` <a name="cfn-lex-bot-message-custompayload"></a>
A message in a custom format defined by the client application\.  
_Required_: No  
_Type_: [CustomPayload](aws-properties-lex-bot-custompayload.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`ImageResponseCard` <a name="cfn-lex-bot-message-imageresponsecard"></a>
A message that defines a response card that the client application can show to the user\.  
_Required_: No  
_Type_: [ImageResponseCard](aws-properties-lex-bot-imageresponsecard.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`PlainTextMessage` <a name="cfn-lex-bot-message-plaintextmessage"></a>
A message in plain text format\.  
_Required_: No  
_Type_: [PlainTextMessage](aws-properties-lex-bot-plaintextmessage.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`SSMLMessage` <a name="cfn-lex-bot-message-ssmlmessage"></a>
A message in Speech Synthesis Markup Language \(SSML\)\.  
_Required_: No  
_Type_: [SSMLMessage](aws-properties-lex-bot-ssmlmessage.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
