# AWS::QuickSight::Template CustomFilterListConfiguration<a name="aws-properties-quicksight-template-customfilterlistconfiguration"></a>

A list of custom filter values\.

## Syntax<a name="aws-properties-quicksight-template-customfilterlistconfiguration-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-template-customfilterlistconfiguration-syntax.json"></a>

```
{
  "[CategoryValues](#cfn-quicksight-template-customfilterlistconfiguration-categoryvalues)" : [ String, ... ],
  "[MatchOperator](#cfn-quicksight-template-customfilterlistconfiguration-matchoperator)" : String,
  "[NullOption](#cfn-quicksight-template-customfilterlistconfiguration-nulloption)" : String,
  "[SelectAllOptions](#cfn-quicksight-template-customfilterlistconfiguration-selectalloptions)" : String
}
```

### YAML<a name="aws-properties-quicksight-template-customfilterlistconfiguration-syntax.yaml"></a>

```
  [CategoryValues](#cfn-quicksight-template-customfilterlistconfiguration-categoryvalues):
    - String
  [MatchOperator](#cfn-quicksight-template-customfilterlistconfiguration-matchoperator): String
  [NullOption](#cfn-quicksight-template-customfilterlistconfiguration-nulloption): String
  [SelectAllOptions](#cfn-quicksight-template-customfilterlistconfiguration-selectalloptions): String
```

## Properties<a name="aws-properties-quicksight-template-customfilterlistconfiguration-properties"></a>

`CategoryValues` <a name="cfn-quicksight-template-customfilterlistconfiguration-categoryvalues"></a>
The list of category values for the filter\.  
_Required_: No  
_Type_: List of String  
_Maximum_: `100000`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`MatchOperator` <a name="cfn-quicksight-template-customfilterlistconfiguration-matchoperator"></a>
The match operator that is used to determine if a filter should be applied\.  
_Required_: Yes  
_Type_: String  
_Allowed values_: `CONTAINS | DOES_NOT_CONTAIN | DOES_NOT_EQUAL | ENDS_WITH | EQUALS | STARTS_WITH`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`NullOption` <a name="cfn-quicksight-template-customfilterlistconfiguration-nulloption"></a>
This option determines how null values should be treated when filtering data\.

- `ALL_VALUES`: Include null values in filtered results\.
- `NULLS_ONLY`: Only include null values in filtered results\.
- `NON_NULLS_ONLY`: Exclude null values from filtered results\.
  _Required_: Yes  
  _Type_: String  
  _Allowed values_: `ALL_VALUES | NON_NULLS_ONLY | NULLS_ONLY`  
  _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`SelectAllOptions` <a name="cfn-quicksight-template-customfilterlistconfiguration-selectalloptions"></a>
Select all of the values\. Null is not the assigned value of select all\.

- `FILTER_ALL_VALUES`
  _Required_: No  
  _Type_: String  
  _Allowed values_: `FILTER_ALL_VALUES`  
  _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)