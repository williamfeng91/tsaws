# AWS::QuickSight::Analysis SubtotalOptions<a name="aws-properties-quicksight-analysis-subtotaloptions"></a>

The subtotal options\.

## Syntax<a name="aws-properties-quicksight-analysis-subtotaloptions-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-analysis-subtotaloptions-syntax.json"></a>

```
{
  "[CustomLabel](#cfn-quicksight-analysis-subtotaloptions-customlabel)" : String,
  "[FieldLevel](#cfn-quicksight-analysis-subtotaloptions-fieldlevel)" : String,
  "[FieldLevelOptions](#cfn-quicksight-analysis-subtotaloptions-fieldleveloptions)" : [ PivotTableFieldSubtotalOptions, ... ],
  "[MetricHeaderCellStyle](#cfn-quicksight-analysis-subtotaloptions-metricheadercellstyle)" : TableCellStyle,
  "[TotalCellStyle](#cfn-quicksight-analysis-subtotaloptions-totalcellstyle)" : TableCellStyle,
  "[TotalsVisibility](#cfn-quicksight-analysis-subtotaloptions-totalsvisibility)" : String,
  "[ValueCellStyle](#cfn-quicksight-analysis-subtotaloptions-valuecellstyle)" : TableCellStyle
}
```

### YAML<a name="aws-properties-quicksight-analysis-subtotaloptions-syntax.yaml"></a>

```
  [CustomLabel](#cfn-quicksight-analysis-subtotaloptions-customlabel): String
  [FieldLevel](#cfn-quicksight-analysis-subtotaloptions-fieldlevel): String
  [FieldLevelOptions](#cfn-quicksight-analysis-subtotaloptions-fieldleveloptions):
    - PivotTableFieldSubtotalOptions
  [MetricHeaderCellStyle](#cfn-quicksight-analysis-subtotaloptions-metricheadercellstyle):
    TableCellStyle
  [TotalCellStyle](#cfn-quicksight-analysis-subtotaloptions-totalcellstyle):
    TableCellStyle
  [TotalsVisibility](#cfn-quicksight-analysis-subtotaloptions-totalsvisibility): String
  [ValueCellStyle](#cfn-quicksight-analysis-subtotaloptions-valuecellstyle):
    TableCellStyle
```

## Properties<a name="aws-properties-quicksight-analysis-subtotaloptions-properties"></a>

`CustomLabel` <a name="cfn-quicksight-analysis-subtotaloptions-customlabel"></a>
The custom label string for the subtotal cells\.  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`FieldLevel` <a name="cfn-quicksight-analysis-subtotaloptions-fieldlevel"></a>
The field level \(all, custom, last\) for the subtotal cells\.  
_Required_: No  
_Type_: String  
_Allowed values_: `ALL | CUSTOM | LAST`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`FieldLevelOptions` <a name="cfn-quicksight-analysis-subtotaloptions-fieldleveloptions"></a>
The optional configuration of subtotal cells\.  
_Required_: No  
_Type_: List of [PivotTableFieldSubtotalOptions](aws-properties-quicksight-analysis-pivottablefieldsubtotaloptions.md)  
_Maximum_: `100`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`MetricHeaderCellStyle` <a name="cfn-quicksight-analysis-subtotaloptions-metricheadercellstyle"></a>
The cell styling options for the subtotals of header cells\.  
_Required_: No  
_Type_: [TableCellStyle](aws-properties-quicksight-analysis-tablecellstyle.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`TotalCellStyle` <a name="cfn-quicksight-analysis-subtotaloptions-totalcellstyle"></a>
The cell styling options for the subtotal cells\.  
_Required_: No  
_Type_: [TableCellStyle](aws-properties-quicksight-analysis-tablecellstyle.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`TotalsVisibility` <a name="cfn-quicksight-analysis-subtotaloptions-totalsvisibility"></a>
The visibility configuration for the subtotal cells\.  
_Required_: No  
_Type_: String  
_Allowed values_: `HIDDEN | VISIBLE`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`ValueCellStyle` <a name="cfn-quicksight-analysis-subtotaloptions-valuecellstyle"></a>
The cell styling options for the subtotals of value cells\.  
_Required_: No  
_Type_: [TableCellStyle](aws-properties-quicksight-analysis-tablecellstyle.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
