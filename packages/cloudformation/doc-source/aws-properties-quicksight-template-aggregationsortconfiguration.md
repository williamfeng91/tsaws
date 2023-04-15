# AWS::QuickSight::Template AggregationSortConfiguration<a name="aws-properties-quicksight-template-aggregationsortconfiguration"></a>

The configuration options to sort aggregated values\.

## Syntax<a name="aws-properties-quicksight-template-aggregationsortconfiguration-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-template-aggregationsortconfiguration-syntax.json"></a>

```
{
  "[AggregationFunction](#cfn-quicksight-template-aggregationsortconfiguration-aggregationfunction)" : AggregationFunction,
  "[Column](#cfn-quicksight-template-aggregationsortconfiguration-column)" : ColumnIdentifier,
  "[SortDirection](#cfn-quicksight-template-aggregationsortconfiguration-sortdirection)" : String
}
```

### YAML<a name="aws-properties-quicksight-template-aggregationsortconfiguration-syntax.yaml"></a>

```
  [AggregationFunction](#cfn-quicksight-template-aggregationsortconfiguration-aggregationfunction):
    AggregationFunction
  [Column](#cfn-quicksight-template-aggregationsortconfiguration-column):
    ColumnIdentifier
  [SortDirection](#cfn-quicksight-template-aggregationsortconfiguration-sortdirection): String
```

## Properties<a name="aws-properties-quicksight-template-aggregationsortconfiguration-properties"></a>

`AggregationFunction` <a name="cfn-quicksight-template-aggregationsortconfiguration-aggregationfunction"></a>
The function that aggregates the values in `Column`\.  
_Required_: Yes  
_Type_: [AggregationFunction](aws-properties-quicksight-template-aggregationfunction.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Column` <a name="cfn-quicksight-template-aggregationsortconfiguration-column"></a>
The column that determines the sort order of aggregated values\.  
_Required_: Yes  
_Type_: [ColumnIdentifier](aws-properties-quicksight-template-columnidentifier.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`SortDirection` <a name="cfn-quicksight-template-aggregationsortconfiguration-sortdirection"></a>
The sort direction of values\.

- `ASC`: Sort in ascending order\.
- `DESC`: Sort in descending order\.
  _Required_: Yes  
  _Type_: String  
  _Allowed values_: `ASC | DESC`  
  _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
