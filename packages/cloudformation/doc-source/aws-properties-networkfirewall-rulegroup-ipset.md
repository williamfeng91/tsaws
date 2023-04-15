# AWS::NetworkFirewall::RuleGroup IPSet<a name="aws-properties-networkfirewall-rulegroup-ipset"></a>

A list of IP addresses and address ranges, in CIDR notation\. This is part of a [AWS::NetworkFirewall::RuleGroup RuleVariables](aws-properties-networkfirewall-rulegroup-rulevariables.md)\.

## Syntax<a name="aws-properties-networkfirewall-rulegroup-ipset-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-networkfirewall-rulegroup-ipset-syntax.json"></a>

```
{
  "[Definition](#cfn-networkfirewall-rulegroup-ipset-definition)" : [ String, ... ]
}
```

### YAML<a name="aws-properties-networkfirewall-rulegroup-ipset-syntax.yaml"></a>

```
  [Definition](#cfn-networkfirewall-rulegroup-ipset-definition):
    - String
```

## Properties<a name="aws-properties-networkfirewall-rulegroup-ipset-properties"></a>

`Definition` <a name="cfn-networkfirewall-rulegroup-ipset-definition"></a>
The list of IP addresses and address ranges, in CIDR notation\.  
_Required_: No  
_Type_: List of String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
