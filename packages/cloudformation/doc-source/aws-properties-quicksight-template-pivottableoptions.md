# AWS::QuickSight::Template PivotTableOptions<a name="aws-properties-quicksight-template-pivottableoptions"></a>

The table options for a pivot table visual\.

## Syntax<a name="aws-properties-quicksight-template-pivottableoptions-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-template-pivottableoptions-syntax.json"></a>

```
{
  "[CellStyle](#cfn-quicksight-template-pivottableoptions-cellstyle)" : TableCellStyle,
  "[ColumnHeaderStyle](#cfn-quicksight-template-pivottableoptions-columnheaderstyle)" : TableCellStyle,
  "[ColumnNamesVisibility](#cfn-quicksight-template-pivottableoptions-columnnamesvisibility)" : String,
  "[MetricPlacement](#cfn-quicksight-template-pivottableoptions-metricplacement)" : String,
  "[RowAlternateColorOptions](#cfn-quicksight-template-pivottableoptions-rowalternatecoloroptions)" : RowAlternateColorOptions,
  "[RowFieldNamesStyle](#cfn-quicksight-template-pivottableoptions-rowfieldnamesstyle)" : TableCellStyle,
  "[RowHeaderStyle](#cfn-quicksight-template-pivottableoptions-rowheaderstyle)" : TableCellStyle,
  "[SingleMetricVisibility](#cfn-quicksight-template-pivottableoptions-singlemetricvisibility)" : String,
  "[ToggleButtonsVisibility](#cfn-quicksight-template-pivottableoptions-togglebuttonsvisibility)" : String
}
```

### YAML<a name="aws-properties-quicksight-template-pivottableoptions-syntax.yaml"></a>

```
  [CellStyle](#cfn-quicksight-template-pivottableoptions-cellstyle):
    TableCellStyle
  [ColumnHeaderStyle](#cfn-quicksight-template-pivottableoptions-columnheaderstyle):
    TableCellStyle
  [ColumnNamesVisibility](#cfn-quicksight-template-pivottableoptions-columnnamesvisibility): String
  [MetricPlacement](#cfn-quicksight-template-pivottableoptions-metricplacement): String
  [RowAlternateColorOptions](#cfn-quicksight-template-pivottableoptions-rowalternatecoloroptions):
    RowAlternateColorOptions
  [RowFieldNamesStyle](#cfn-quicksight-template-pivottableoptions-rowfieldnamesstyle):
    TableCellStyle
  [RowHeaderStyle](#cfn-quicksight-template-pivottableoptions-rowheaderstyle):
    TableCellStyle
  [SingleMetricVisibility](#cfn-quicksight-template-pivottableoptions-singlemetricvisibility): String
  [ToggleButtonsVisibility](#cfn-quicksight-template-pivottableoptions-togglebuttonsvisibility): String
```

## Properties<a name="aws-properties-quicksight-template-pivottableoptions-properties"></a>

`CellStyle` <a name="cfn-quicksight-template-pivottableoptions-cellstyle"></a>
The table cell style of cells\.  
_Required_: No  
_Type_: [TableCellStyle](aws-properties-quicksight-template-tablecellstyle.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`ColumnHeaderStyle` <a name="cfn-quicksight-template-pivottableoptions-columnheaderstyle"></a>
The table cell style of the column header\.  
_Required_: No  
_Type_: [TableCellStyle](aws-properties-quicksight-template-tablecellstyle.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`ColumnNamesVisibility` <a name="cfn-quicksight-template-pivottableoptions-columnnamesvisibility"></a>
The visibility of the column names\.  
_Required_: No  
_Type_: String  
_Allowed values_: `HIDDEN | VISIBLE`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`MetricPlacement` <a name="cfn-quicksight-template-pivottableoptions-metricplacement"></a>
The metric placement \(row, column\) options\.  
_Required_: No  
_Type_: String  
_Allowed values_: `COLUMN | ROW`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`RowAlternateColorOptions` <a name="cfn-quicksight-template-pivottableoptions-rowalternatecoloroptions"></a>
The row alternate color options \(widget status, row alternate colors\)\.  
_Required_: No  
_Type_: [RowAlternateColorOptions](aws-properties-quicksight-template-rowalternatecoloroptions.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`RowFieldNamesStyle` <a name="cfn-quicksight-template-pivottableoptions-rowfieldnamesstyle"></a>
The table cell style of row field names\.  
_Required_: No  
_Type_: [TableCellStyle](aws-properties-quicksight-template-tablecellstyle.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`RowHeaderStyle` <a name="cfn-quicksight-template-pivottableoptions-rowheaderstyle"></a>
The table cell style of the row headers\.  
_Required_: No  
_Type_: [TableCellStyle](aws-properties-quicksight-template-tablecellstyle.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`SingleMetricVisibility` <a name="cfn-quicksight-template-pivottableoptions-singlemetricvisibility"></a>
The visibility of the single metric options\.  
_Required_: No  
_Type_: String  
_Allowed values_: `HIDDEN | VISIBLE`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`ToggleButtonsVisibility` <a name="cfn-quicksight-template-pivottableoptions-togglebuttonsvisibility"></a>
Determines the visibility of the pivot table\.  
_Required_: No  
_Type_: String  
_Allowed values_: `HIDDEN | VISIBLE`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
