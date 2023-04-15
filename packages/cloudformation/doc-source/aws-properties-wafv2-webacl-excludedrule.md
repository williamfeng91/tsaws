# AWS::WAFv2::WebACL ExcludedRule<a name="aws-properties-wafv2-webacl-excludedrule"></a>

Specifies a single rule in a rule group whose action you want to override to `Count`\.

**Note**  
Instead of this option, use `RuleActionOverrides`\. It accepts any valid action setting, including `Count`\.

## Syntax<a name="aws-properties-wafv2-webacl-excludedrule-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-wafv2-webacl-excludedrule-syntax.json"></a>

```
{
  "[Name](#cfn-wafv2-webacl-excludedrule-name)" : String
}
```

### YAML<a name="aws-properties-wafv2-webacl-excludedrule-syntax.yaml"></a>

```
  [Name](#cfn-wafv2-webacl-excludedrule-name): String
```

## Properties<a name="aws-properties-wafv2-webacl-excludedrule-properties"></a>

`Name` <a name="cfn-wafv2-webacl-excludedrule-name"></a>
The name of the rule whose action you want to override to `Count`\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `128`  
_Pattern_: `^[\w\-]+$`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
