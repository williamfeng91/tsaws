# AWS::WAFv2::LoggingConfiguration Filter<a name="aws-properties-wafv2-loggingconfiguration-filter"></a>

A single logging filter, used in `LoggingFilter`\.

## Syntax<a name="aws-properties-wafv2-loggingconfiguration-filter-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-wafv2-loggingconfiguration-filter-syntax.json"></a>

```
{
  "[Behavior](#cfn-wafv2-loggingconfiguration-filter-behavior)" : String,
  "[Conditions](#cfn-wafv2-loggingconfiguration-filter-conditions)" : [ Condition, ... ],
  "[Requirement](#cfn-wafv2-loggingconfiguration-filter-requirement)" : String
}
```

### YAML<a name="aws-properties-wafv2-loggingconfiguration-filter-syntax.yaml"></a>

```
  [Behavior](#cfn-wafv2-loggingconfiguration-filter-behavior): String
  [Conditions](#cfn-wafv2-loggingconfiguration-filter-conditions):
    - Condition
  [Requirement](#cfn-wafv2-loggingconfiguration-filter-requirement): String
```

## Properties<a name="aws-properties-wafv2-loggingconfiguration-filter-properties"></a>

`Behavior` <a name="cfn-wafv2-loggingconfiguration-filter-behavior"></a>
How to handle logs that satisfy the filter's conditions and requirement\.  
_Required_: Yes  
_Type_: String  
_Allowed values_: `DROP | KEEP`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Conditions` <a name="cfn-wafv2-loggingconfiguration-filter-conditions"></a>
Match conditions for the filter\.  
_Required_: Yes  
_Type_: List of [Condition](aws-properties-wafv2-loggingconfiguration-condition.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Requirement` <a name="cfn-wafv2-loggingconfiguration-filter-requirement"></a>
Logic to apply to the filtering conditions\. You can specify that, in order to satisfy the filter, a log must match all conditions or must match at least one condition\.  
_Required_: Yes  
_Type_: String  
_Allowed values_: `MEETS_ALL | MEETS_ANY`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
