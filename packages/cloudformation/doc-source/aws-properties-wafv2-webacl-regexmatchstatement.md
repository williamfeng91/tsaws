# AWS::WAFv2::WebACL RegexMatchStatement<a name="aws-properties-wafv2-webacl-regexmatchstatement"></a>

A rule statement used to search web request components for a match against a single regular expression\.

## Syntax<a name="aws-properties-wafv2-webacl-regexmatchstatement-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-wafv2-webacl-regexmatchstatement-syntax.json"></a>

```
{
  "[FieldToMatch](#cfn-wafv2-webacl-regexmatchstatement-fieldtomatch)" : FieldToMatch,
  "[RegexString](#cfn-wafv2-webacl-regexmatchstatement-regexstring)" : String,
  "[TextTransformations](#cfn-wafv2-webacl-regexmatchstatement-texttransformations)" : [ TextTransformation, ... ]
}
```

### YAML<a name="aws-properties-wafv2-webacl-regexmatchstatement-syntax.yaml"></a>

```
  [FieldToMatch](#cfn-wafv2-webacl-regexmatchstatement-fieldtomatch):
    FieldToMatch
  [RegexString](#cfn-wafv2-webacl-regexmatchstatement-regexstring):
    String
  [TextTransformations](#cfn-wafv2-webacl-regexmatchstatement-texttransformations):
    - TextTransformation
```

## Properties<a name="aws-properties-wafv2-webacl-regexmatchstatement-properties"></a>

`FieldToMatch` <a name="cfn-wafv2-webacl-regexmatchstatement-fieldtomatch"></a>
The part of the web request that you want AWS WAF to inspect\.  
_Required_: Yes  
_Type_: [FieldToMatch](aws-properties-wafv2-webacl-fieldtomatch.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`RegexString` <a name="cfn-wafv2-webacl-regexmatchstatement-regexstring"></a>
The string representing the regular expression\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `512`  
_Pattern_: `.*`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`TextTransformations` <a name="cfn-wafv2-webacl-regexmatchstatement-texttransformations"></a>
Text transformations eliminate some of the unusual formatting that attackers use in web requests in an effort to bypass detection\. If you specify one or more transformations in a rule statement, AWS WAF performs all transformations on the content of the request component identified by `FieldToMatch`, starting from the lowest priority setting, before inspecting the content for a match\.  
_Required_: Yes  
_Type_: List of [TextTransformation](aws-properties-wafv2-webacl-texttransformation.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
