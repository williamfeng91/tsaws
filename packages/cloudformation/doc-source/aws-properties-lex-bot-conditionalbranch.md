# AWS::Lex::Bot ConditionalBranch<a name="aws-properties-lex-bot-conditionalbranch"></a>

A set of actions that Amazon Lex should run if the condition is matched\.

## Syntax<a name="aws-properties-lex-bot-conditionalbranch-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-lex-bot-conditionalbranch-syntax.json"></a>

```
{
  "[Condition](#cfn-lex-bot-conditionalbranch-condition)" : Condition,
  "[Name](#cfn-lex-bot-conditionalbranch-name)" : String,
  "[NextStep](#cfn-lex-bot-conditionalbranch-nextstep)" : DialogState,
  "[Response](#cfn-lex-bot-conditionalbranch-response)" : ResponseSpecification
}
```

### YAML<a name="aws-properties-lex-bot-conditionalbranch-syntax.yaml"></a>

```
  [Condition](#cfn-lex-bot-conditionalbranch-condition):
    Condition
  [Name](#cfn-lex-bot-conditionalbranch-name): String
  [NextStep](#cfn-lex-bot-conditionalbranch-nextstep):
    DialogState
  [Response](#cfn-lex-bot-conditionalbranch-response):
    ResponseSpecification
```

## Properties<a name="aws-properties-lex-bot-conditionalbranch-properties"></a>

`Condition` <a name="cfn-lex-bot-conditionalbranch-condition"></a>
Contains the expression to evaluate\. If the condition is true, the branch's actions are taken\.  
_Required_: Yes  
_Type_: [Condition](aws-properties-lex-bot-condition.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Name` <a name="cfn-lex-bot-conditionalbranch-name"></a>
The name of the branch\.  
_Required_: Yes  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`NextStep` <a name="cfn-lex-bot-conditionalbranch-nextstep"></a>
The next step in the conversation\.  
_Required_: Yes  
_Type_: [DialogState](aws-properties-lex-bot-dialogstate.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Response` <a name="cfn-lex-bot-conditionalbranch-response"></a>
Specifies a list of message groups that Amazon Lex uses to respond the user input\.  
_Required_: No  
_Type_: [ResponseSpecification](aws-properties-lex-bot-responsespecification.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
