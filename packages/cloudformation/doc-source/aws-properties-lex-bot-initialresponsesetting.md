# AWS::Lex::Bot InitialResponseSetting<a name="aws-properties-lex-bot-initialresponsesetting"></a>

Configuration setting for a response sent to the user before Amazon Lex starts eliciting slots\.

## Syntax<a name="aws-properties-lex-bot-initialresponsesetting-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-lex-bot-initialresponsesetting-syntax.json"></a>

```
{
  "[CodeHook](#cfn-lex-bot-initialresponsesetting-codehook)" : DialogCodeHookInvocationSetting,
  "[Conditional](#cfn-lex-bot-initialresponsesetting-conditional)" : ConditionalSpecification,
  "[InitialResponse](#cfn-lex-bot-initialresponsesetting-initialresponse)" : ResponseSpecification,
  "[NextStep](#cfn-lex-bot-initialresponsesetting-nextstep)" : DialogState
}
```

### YAML<a name="aws-properties-lex-bot-initialresponsesetting-syntax.yaml"></a>

```
  [CodeHook](#cfn-lex-bot-initialresponsesetting-codehook):
    DialogCodeHookInvocationSetting
  [Conditional](#cfn-lex-bot-initialresponsesetting-conditional):
    ConditionalSpecification
  [InitialResponse](#cfn-lex-bot-initialresponsesetting-initialresponse):
    ResponseSpecification
  [NextStep](#cfn-lex-bot-initialresponsesetting-nextstep):
    DialogState
```

## Properties<a name="aws-properties-lex-bot-initialresponsesetting-properties"></a>

`CodeHook` <a name="cfn-lex-bot-initialresponsesetting-codehook"></a>
Settings that specify the dialog code hook that is called by Amazon Lex at a step of the conversation\.  
_Required_: No  
_Type_: [DialogCodeHookInvocationSetting](aws-properties-lex-bot-dialogcodehookinvocationsetting.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Conditional` <a name="cfn-lex-bot-initialresponsesetting-conditional"></a>
Provides a list of conditional branches\. Branches are evaluated in the order that they are entered in the list\. The first branch with a condition that evaluates to true is executed\. The last branch in the list is the default branch\. The default branch should not have any condition expression\. The default branch is executed if no other branch has a matching condition\.  
_Required_: No  
_Type_: [ConditionalSpecification](aws-properties-lex-bot-conditionalspecification.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`InitialResponse` <a name="cfn-lex-bot-initialresponsesetting-initialresponse"></a>
Specifies a list of message groups that Amazon Lex uses to respond the user input\.  
_Required_: No  
_Type_: [ResponseSpecification](aws-properties-lex-bot-responsespecification.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`NextStep` <a name="cfn-lex-bot-initialresponsesetting-nextstep"></a>
The next step in the conversation\.  
_Required_: No  
_Type_: [DialogState](aws-properties-lex-bot-dialogstate.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
