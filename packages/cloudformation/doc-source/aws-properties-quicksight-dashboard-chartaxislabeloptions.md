# AWS::QuickSight::Dashboard ChartAxisLabelOptions<a name="aws-properties-quicksight-dashboard-chartaxislabeloptions"></a>

The label options for an axis on a chart\.

## Syntax<a name="aws-properties-quicksight-dashboard-chartaxislabeloptions-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-dashboard-chartaxislabeloptions-syntax.json"></a>

```
{
  "[AxisLabelOptions](#cfn-quicksight-dashboard-chartaxislabeloptions-axislabeloptions)" : [ AxisLabelOptions, ... ],
  "[SortIconVisibility](#cfn-quicksight-dashboard-chartaxislabeloptions-sorticonvisibility)" : String,
  "[Visibility](#cfn-quicksight-dashboard-chartaxislabeloptions-visibility)" : String
}
```

### YAML<a name="aws-properties-quicksight-dashboard-chartaxislabeloptions-syntax.yaml"></a>

```
  [AxisLabelOptions](#cfn-quicksight-dashboard-chartaxislabeloptions-axislabeloptions):
    - AxisLabelOptions
  [SortIconVisibility](#cfn-quicksight-dashboard-chartaxislabeloptions-sorticonvisibility): String
  [Visibility](#cfn-quicksight-dashboard-chartaxislabeloptions-visibility): String
```

## Properties<a name="aws-properties-quicksight-dashboard-chartaxislabeloptions-properties"></a>

`AxisLabelOptions` <a name="cfn-quicksight-dashboard-chartaxislabeloptions-axislabeloptions"></a>
The label options for a chart axis\.  
_Required_: No  
_Type_: [List](aws-properties-quicksight-dashboard-axislabeloptions.md) of [AxisLabelOptions](aws-properties-quicksight-dashboard-axislabeloptions.md)  
_Maximum_: `100`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`SortIconVisibility` <a name="cfn-quicksight-dashboard-chartaxislabeloptions-sorticonvisibility"></a>
The visibility configuration of the sort icon on a chart's axis label\.  
_Required_: No  
_Type_: String  
_Allowed values_: `HIDDEN | VISIBLE`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Visibility` <a name="cfn-quicksight-dashboard-chartaxislabeloptions-visibility"></a>
The visibility of an axis label on a chart\. Choose one of the following options:

- `VISIBLE`: Shows the axis\.
- `HIDDEN`: Hides the axis\.
  _Required_: No  
  _Type_: String  
  _Allowed values_: `HIDDEN | VISIBLE`  
  _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
