# AWS::WAFv2::WebACL Label<a name="aws-properties-wafv2-webacl-label"></a>

A single label container\. This is used as an element of a label array in `RuleLabels` inside a rule\.

## Syntax<a name="aws-properties-wafv2-webacl-label-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-wafv2-webacl-label-syntax.json"></a>

```
{
  "[Name](#cfn-wafv2-webacl-label-name)" : String
}
```

### YAML<a name="aws-properties-wafv2-webacl-label-syntax.yaml"></a>

```
  [Name](#cfn-wafv2-webacl-label-name): String
```

## Properties<a name="aws-properties-wafv2-webacl-label-properties"></a>

`Name` <a name="cfn-wafv2-webacl-label-name"></a>
The label string\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `1024`  
_Pattern_: `^[0-9A-Za-z_\-:]+$`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
