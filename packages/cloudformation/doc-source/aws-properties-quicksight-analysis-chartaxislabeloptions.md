# AWS::QuickSight::Analysis ChartAxisLabelOptions<a name="aws-properties-quicksight-analysis-chartaxislabeloptions"></a>

The label options for an axis on a chart\.

## Syntax<a name="aws-properties-quicksight-analysis-chartaxislabeloptions-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-analysis-chartaxislabeloptions-syntax.json"></a>

```
{
  "[AxisLabelOptions](#cfn-quicksight-analysis-chartaxislabeloptions-axislabeloptions)" : [ AxisLabelOptions, ... ],
  "[SortIconVisibility](#cfn-quicksight-analysis-chartaxislabeloptions-sorticonvisibility)" : String,
  "[Visibility](#cfn-quicksight-analysis-chartaxislabeloptions-visibility)" : String
}
```

### YAML<a name="aws-properties-quicksight-analysis-chartaxislabeloptions-syntax.yaml"></a>

```
  [AxisLabelOptions](#cfn-quicksight-analysis-chartaxislabeloptions-axislabeloptions):
    - AxisLabelOptions
  [SortIconVisibility](#cfn-quicksight-analysis-chartaxislabeloptions-sorticonvisibility): String
  [Visibility](#cfn-quicksight-analysis-chartaxislabeloptions-visibility): String
```

## Properties<a name="aws-properties-quicksight-analysis-chartaxislabeloptions-properties"></a>

`AxisLabelOptions` <a name="cfn-quicksight-analysis-chartaxislabeloptions-axislabeloptions"></a>
The label options for a chart axis\.  
_Required_: No  
_Type_: [List](aws-properties-quicksight-analysis-axislabeloptions.md) of [AxisLabelOptions](aws-properties-quicksight-analysis-axislabeloptions.md)  
_Maximum_: `100`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`SortIconVisibility` <a name="cfn-quicksight-analysis-chartaxislabeloptions-sorticonvisibility"></a>
The visibility configuration of the sort icon on a chart's axis label\.  
_Required_: No  
_Type_: String  
_Allowed values_: `HIDDEN | VISIBLE`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Visibility` <a name="cfn-quicksight-analysis-chartaxislabeloptions-visibility"></a>
The visibility of an axis label on a chart\. Choose one of the following options:

- `VISIBLE`: Shows the axis\.
- `HIDDEN`: Hides the axis\.
  _Required_: No  
  _Type_: String  
  _Allowed values_: `HIDDEN | VISIBLE`  
  _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
