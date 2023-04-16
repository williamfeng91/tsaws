# AWS::QuickSight::Analysis PivotTotalOptions<a name="aws-properties-quicksight-analysis-pivottotaloptions"></a>

The optional configuration of totals cells in a `PivotTableVisual`\.

## Syntax<a name="aws-properties-quicksight-analysis-pivottotaloptions-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-analysis-pivottotaloptions-syntax.json"></a>

```
{
  "[CustomLabel](#cfn-quicksight-analysis-pivottotaloptions-customlabel)" : String,
  "[MetricHeaderCellStyle](#cfn-quicksight-analysis-pivottotaloptions-metricheadercellstyle)" : TableCellStyle,
  "[Placement](#cfn-quicksight-analysis-pivottotaloptions-placement)" : String,
  "[ScrollStatus](#cfn-quicksight-analysis-pivottotaloptions-scrollstatus)" : String,
  "[TotalCellStyle](#cfn-quicksight-analysis-pivottotaloptions-totalcellstyle)" : TableCellStyle,
  "[TotalsVisibility](#cfn-quicksight-analysis-pivottotaloptions-totalsvisibility)" : String,
  "[ValueCellStyle](#cfn-quicksight-analysis-pivottotaloptions-valuecellstyle)" : TableCellStyle
}
```

### YAML<a name="aws-properties-quicksight-analysis-pivottotaloptions-syntax.yaml"></a>

```
  [CustomLabel](#cfn-quicksight-analysis-pivottotaloptions-customlabel): String
  [MetricHeaderCellStyle](#cfn-quicksight-analysis-pivottotaloptions-metricheadercellstyle):
    TableCellStyle
  [Placement](#cfn-quicksight-analysis-pivottotaloptions-placement): String
  [ScrollStatus](#cfn-quicksight-analysis-pivottotaloptions-scrollstatus): String
  [TotalCellStyle](#cfn-quicksight-analysis-pivottotaloptions-totalcellstyle):
    TableCellStyle
  [TotalsVisibility](#cfn-quicksight-analysis-pivottotaloptions-totalsvisibility): String
  [ValueCellStyle](#cfn-quicksight-analysis-pivottotaloptions-valuecellstyle):
    TableCellStyle
```

## Properties<a name="aws-properties-quicksight-analysis-pivottotaloptions-properties"></a>

`CustomLabel` <a name="cfn-quicksight-analysis-pivottotaloptions-customlabel"></a>
The custom label string for the total cells\.  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`MetricHeaderCellStyle` <a name="cfn-quicksight-analysis-pivottotaloptions-metricheadercellstyle"></a>
The cell styling options for the total of header cells\.  
_Required_: No  
_Type_: [TableCellStyle](aws-properties-quicksight-analysis-tablecellstyle.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Placement` <a name="cfn-quicksight-analysis-pivottotaloptions-placement"></a>
The placement \(start, end\) for the total cells\.  
_Required_: No  
_Type_: String  
_Allowed values_: `END | START`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`ScrollStatus` <a name="cfn-quicksight-analysis-pivottotaloptions-scrollstatus"></a>
The scroll status \(pinned, scrolled\) for the total cells\.  
_Required_: No  
_Type_: String  
_Allowed values_: `PINNED | SCROLLED`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`TotalCellStyle` <a name="cfn-quicksight-analysis-pivottotaloptions-totalcellstyle"></a>
The cell styling options for the total cells\.  
_Required_: No  
_Type_: [TableCellStyle](aws-properties-quicksight-analysis-tablecellstyle.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`TotalsVisibility` <a name="cfn-quicksight-analysis-pivottotaloptions-totalsvisibility"></a>
The visibility configuration for the total cells\.  
_Required_: No  
_Type_: String  
_Allowed values_: `HIDDEN | VISIBLE`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`ValueCellStyle` <a name="cfn-quicksight-analysis-pivottotaloptions-valuecellstyle"></a>
The cell styling options for the totals of value cells\.  
_Required_: No  
_Type_: [TableCellStyle](aws-properties-quicksight-analysis-tablecellstyle.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
