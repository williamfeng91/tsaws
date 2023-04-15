# AWS::NetworkFirewall::RuleGroup StatelessRulesAndCustomActions<a name="aws-properties-networkfirewall-rulegroup-statelessrulesandcustomactions"></a>

Stateless inspection criteria\. Each stateless rule group uses exactly one of these data types to define its stateless rules\.

## Syntax<a name="aws-properties-networkfirewall-rulegroup-statelessrulesandcustomactions-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-networkfirewall-rulegroup-statelessrulesandcustomactions-syntax.json"></a>

```
{
  "[CustomActions](#cfn-networkfirewall-rulegroup-statelessrulesandcustomactions-customactions)" : [ CustomAction, ... ],
  "[StatelessRules](#cfn-networkfirewall-rulegroup-statelessrulesandcustomactions-statelessrules)" : [ StatelessRule, ... ]
}
```

### YAML<a name="aws-properties-networkfirewall-rulegroup-statelessrulesandcustomactions-syntax.yaml"></a>

```
  [CustomActions](#cfn-networkfirewall-rulegroup-statelessrulesandcustomactions-customactions):
    - CustomAction
  [StatelessRules](#cfn-networkfirewall-rulegroup-statelessrulesandcustomactions-statelessrules):
    - StatelessRule
```

## Properties<a name="aws-properties-networkfirewall-rulegroup-statelessrulesandcustomactions-properties"></a>

`CustomActions` <a name="cfn-networkfirewall-rulegroup-statelessrulesandcustomactions-customactions"></a>
Defines an array of individual custom action definitions that are available for use by the stateless rules in this `StatelessRulesAndCustomActions` specification\. You name each custom action that you define, and then you can use it by name in your stateless rule [AWS::NetworkFirewall::RuleGroup RuleDefinition](aws-properties-networkfirewall-rulegroup-ruledefinition.md) `Actions` specification\.  
_Required_: No  
_Type_: List of [CustomAction](aws-properties-networkfirewall-rulegroup-customaction.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`StatelessRules` <a name="cfn-networkfirewall-rulegroup-statelessrulesandcustomactions-statelessrules"></a>
Defines the set of stateless rules for use in a stateless rule group\.  
_Required_: Yes  
_Type_: List of [StatelessRule](aws-properties-networkfirewall-rulegroup-statelessrule.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
