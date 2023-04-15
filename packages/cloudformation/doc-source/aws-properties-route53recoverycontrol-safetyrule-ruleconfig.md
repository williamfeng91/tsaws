# AWS::Route53RecoveryControl::SafetyRule RuleConfig<a name="aws-properties-route53recoverycontrol-safetyrule-ruleconfig"></a>

The rule configuration for an assertion rule\. That is, the criteria that you set for specific assertion controls \(routing controls\) that specify how many controls must be enabled after a transaction completes\.

## Syntax<a name="aws-properties-route53recoverycontrol-safetyrule-ruleconfig-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-route53recoverycontrol-safetyrule-ruleconfig-syntax.json"></a>

```
{
  "[Inverted](#cfn-route53recoverycontrol-safetyrule-ruleconfig-inverted)" : Boolean,
  "[Threshold](#cfn-route53recoverycontrol-safetyrule-ruleconfig-threshold)" : Integer,
  "[Type](#cfn-route53recoverycontrol-safetyrule-ruleconfig-type)" : String
}
```

### YAML<a name="aws-properties-route53recoverycontrol-safetyrule-ruleconfig-syntax.yaml"></a>

```
  [Inverted](#cfn-route53recoverycontrol-safetyrule-ruleconfig-inverted): Boolean
  [Threshold](#cfn-route53recoverycontrol-safetyrule-ruleconfig-threshold): Integer
  [Type](#cfn-route53recoverycontrol-safetyrule-ruleconfig-type): String
```

## Properties<a name="aws-properties-route53recoverycontrol-safetyrule-ruleconfig-properties"></a>

`Inverted` <a name="cfn-route53recoverycontrol-safetyrule-ruleconfig-inverted"></a>
Logical negation of the rule\. If the rule would usually evaluate true, it's evaluated as false, and vice versa\.  
_Required_: Yes  
_Type_: Boolean  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`Threshold` <a name="cfn-route53recoverycontrol-safetyrule-ruleconfig-threshold"></a>
The value of N, when you specify an `ATLEAST` rule type\. That is, `Threshold` is the number of controls that must be set when you specify an `ATLEAST` type\.  
_Required_: Yes  
_Type_: Integer  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`Type` <a name="cfn-route53recoverycontrol-safetyrule-ruleconfig-type"></a>
A rule can be one of the following: `ATLEAST`, `AND`, or `OR`\.  
_Required_: Yes  
_Type_: String  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
