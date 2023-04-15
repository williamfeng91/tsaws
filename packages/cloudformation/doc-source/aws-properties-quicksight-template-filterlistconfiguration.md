# AWS::QuickSight::Template FilterListConfiguration<a name="aws-properties-quicksight-template-filterlistconfiguration"></a>

A list of filter configurations\.

## Syntax<a name="aws-properties-quicksight-template-filterlistconfiguration-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-template-filterlistconfiguration-syntax.json"></a>

```
{
  "[CategoryValues](#cfn-quicksight-template-filterlistconfiguration-categoryvalues)" : [ String, ... ],
  "[MatchOperator](#cfn-quicksight-template-filterlistconfiguration-matchoperator)" : String,
  "[SelectAllOptions](#cfn-quicksight-template-filterlistconfiguration-selectalloptions)" : String
}
```

### YAML<a name="aws-properties-quicksight-template-filterlistconfiguration-syntax.yaml"></a>

```
  [CategoryValues](#cfn-quicksight-template-filterlistconfiguration-categoryvalues):
    - String
  [MatchOperator](#cfn-quicksight-template-filterlistconfiguration-matchoperator): String
  [SelectAllOptions](#cfn-quicksight-template-filterlistconfiguration-selectalloptions): String
```

## Properties<a name="aws-properties-quicksight-template-filterlistconfiguration-properties"></a>

`CategoryValues` <a name="cfn-quicksight-template-filterlistconfiguration-categoryvalues"></a>
The list of category values for the filter\.  
_Required_: No  
_Type_: List of String  
_Maximum_: `100000`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`MatchOperator` <a name="cfn-quicksight-template-filterlistconfiguration-matchoperator"></a>
The match operator that is used to determine if a filter should be applied\.  
_Required_: Yes  
_Type_: String  
_Allowed values_: `CONTAINS | DOES_NOT_CONTAIN | DOES_NOT_EQUAL | ENDS_WITH | EQUALS | STARTS_WITH`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`SelectAllOptions` <a name="cfn-quicksight-template-filterlistconfiguration-selectalloptions"></a>
Select all of the values\. Null is not the assigned value of select all\.

- `FILTER_ALL_VALUES`
  _Required_: No  
  _Type_: String  
  _Allowed values_: `FILTER_ALL_VALUES`  
  _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
