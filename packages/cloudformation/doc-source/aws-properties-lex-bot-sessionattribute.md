# AWS::Lex::Bot SessionAttribute<a name="aws-properties-lex-bot-sessionattribute"></a>

A key/value pair representing session\-specific context information\. It contains application information passed between Amazon Lex V2 and a client application\.

## Syntax<a name="aws-properties-lex-bot-sessionattribute-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-lex-bot-sessionattribute-syntax.json"></a>

```
{
  "[Key](#cfn-lex-bot-sessionattribute-key)" : String,
  "[Value](#cfn-lex-bot-sessionattribute-value)" : String
}
```

### YAML<a name="aws-properties-lex-bot-sessionattribute-syntax.yaml"></a>

```
  [Key](#cfn-lex-bot-sessionattribute-key): String
  [Value](#cfn-lex-bot-sessionattribute-value): String
```

## Properties<a name="aws-properties-lex-bot-sessionattribute-properties"></a>

`Key` <a name="cfn-lex-bot-sessionattribute-key"></a>
The name of the session attribute\.  
_Required_: Yes  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Value` <a name="cfn-lex-bot-sessionattribute-value"></a>
The session\-specific context information for the session attribute\.  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
