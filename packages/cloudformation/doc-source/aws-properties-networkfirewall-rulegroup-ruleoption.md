# AWS::NetworkFirewall::RuleGroup RuleOption<a name="aws-properties-networkfirewall-rulegroup-ruleoption"></a>

Additional settings for a stateful rule\.

## Syntax<a name="aws-properties-networkfirewall-rulegroup-ruleoption-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-networkfirewall-rulegroup-ruleoption-syntax.json"></a>

```
{
  "[Keyword](#cfn-networkfirewall-rulegroup-ruleoption-keyword)" : String,
  "[Settings](#cfn-networkfirewall-rulegroup-ruleoption-settings)" : [ String, ... ]
}
```

### YAML<a name="aws-properties-networkfirewall-rulegroup-ruleoption-syntax.yaml"></a>

```
  [Keyword](#cfn-networkfirewall-rulegroup-ruleoption-keyword): String
  [Settings](#cfn-networkfirewall-rulegroup-ruleoption-settings):
    - String
```

## Properties<a name="aws-properties-networkfirewall-rulegroup-ruleoption-properties"></a>

`Keyword` <a name="cfn-networkfirewall-rulegroup-ruleoption-keyword"></a>

_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `128`  
_Pattern_: `.*`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Settings` <a name="cfn-networkfirewall-rulegroup-ruleoption-settings"></a>

_Required_: No  
_Type_: List of String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)