# AWS::Lex::Bot CustomVocabularyItem<a name="aws-properties-lex-bot-customvocabularyitem"></a>

Specifies an entry in a custom vocabulary\.

## Syntax<a name="aws-properties-lex-bot-customvocabularyitem-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-lex-bot-customvocabularyitem-syntax.json"></a>

```
{
  "[DisplayAs](#cfn-lex-bot-customvocabularyitem-displayas)" : String,
  "[Phrase](#cfn-lex-bot-customvocabularyitem-phrase)" : String,
  "[Weight](#cfn-lex-bot-customvocabularyitem-weight)" : Integer
}
```

### YAML<a name="aws-properties-lex-bot-customvocabularyitem-syntax.yaml"></a>

```
  [DisplayAs](#cfn-lex-bot-customvocabularyitem-displayas): String
  [Phrase](#cfn-lex-bot-customvocabularyitem-phrase): String
  [Weight](#cfn-lex-bot-customvocabularyitem-weight): Integer
```

## Properties<a name="aws-properties-lex-bot-customvocabularyitem-properties"></a>

`DisplayAs` <a name="cfn-lex-bot-customvocabularyitem-displayas"></a>
The DisplayAs value for the custom vocabulary item from the custom vocabulary list\.  
_Required_: No  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `100`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Phrase` <a name="cfn-lex-bot-customvocabularyitem-phrase"></a>
Specifies 1 \- 4 words that should be recognized\.  
_Required_: Yes  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Weight` <a name="cfn-lex-bot-customvocabularyitem-weight"></a>
Specifies the degree to which the phrase recognition is boosted\. The default value is 1\.  
_Required_: No  
_Type_: Integer  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
