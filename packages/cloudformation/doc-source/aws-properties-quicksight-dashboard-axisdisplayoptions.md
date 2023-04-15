# AWS::QuickSight::Dashboard AxisDisplayOptions<a name="aws-properties-quicksight-dashboard-axisdisplayoptions"></a>

The display options for the axis label\.

## Syntax<a name="aws-properties-quicksight-dashboard-axisdisplayoptions-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-dashboard-axisdisplayoptions-syntax.json"></a>

```
{
  "[AxisLineVisibility](#cfn-quicksight-dashboard-axisdisplayoptions-axislinevisibility)" : String,
  "[AxisOffset](#cfn-quicksight-dashboard-axisdisplayoptions-axisoffset)" : String,
  "[DataOptions](#cfn-quicksight-dashboard-axisdisplayoptions-dataoptions)" : AxisDataOptions,
  "[GridLineVisibility](#cfn-quicksight-dashboard-axisdisplayoptions-gridlinevisibility)" : String,
  "[ScrollbarOptions](#cfn-quicksight-dashboard-axisdisplayoptions-scrollbaroptions)" : ScrollBarOptions,
  "[TickLabelOptions](#cfn-quicksight-dashboard-axisdisplayoptions-ticklabeloptions)" : AxisTickLabelOptions
}
```

### YAML<a name="aws-properties-quicksight-dashboard-axisdisplayoptions-syntax.yaml"></a>

```
  [AxisLineVisibility](#cfn-quicksight-dashboard-axisdisplayoptions-axislinevisibility): String
  [AxisOffset](#cfn-quicksight-dashboard-axisdisplayoptions-axisoffset): String
  [DataOptions](#cfn-quicksight-dashboard-axisdisplayoptions-dataoptions):
    AxisDataOptions
  [GridLineVisibility](#cfn-quicksight-dashboard-axisdisplayoptions-gridlinevisibility): String
  [ScrollbarOptions](#cfn-quicksight-dashboard-axisdisplayoptions-scrollbaroptions):
    ScrollBarOptions
  [TickLabelOptions](#cfn-quicksight-dashboard-axisdisplayoptions-ticklabeloptions):
    AxisTickLabelOptions
```

## Properties<a name="aws-properties-quicksight-dashboard-axisdisplayoptions-properties"></a>

`AxisLineVisibility` <a name="cfn-quicksight-dashboard-axisdisplayoptions-axislinevisibility"></a>
Determines whether or not the axis line is visible\.  
_Required_: No  
_Type_: String  
_Allowed values_: `HIDDEN | VISIBLE`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`AxisOffset` <a name="cfn-quicksight-dashboard-axisdisplayoptions-axisoffset"></a>
The offset value that determines the starting placement of the axis within a visual's bounds\.  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`DataOptions` <a name="cfn-quicksight-dashboard-axisdisplayoptions-dataoptions"></a>
The data options for an axis\.  
_Required_: No  
_Type_: [AxisDataOptions](aws-properties-quicksight-dashboard-axisdataoptions.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`GridLineVisibility` <a name="cfn-quicksight-dashboard-axisdisplayoptions-gridlinevisibility"></a>
Determines whether or not the grid line is visible\.  
_Required_: No  
_Type_: String  
_Allowed values_: `HIDDEN | VISIBLE`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`ScrollbarOptions` <a name="cfn-quicksight-dashboard-axisdisplayoptions-scrollbaroptions"></a>
The scroll bar options for an axis\.  
_Required_: No  
_Type_: [ScrollBarOptions](aws-properties-quicksight-dashboard-scrollbaroptions.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`TickLabelOptions` <a name="cfn-quicksight-dashboard-axisdisplayoptions-ticklabeloptions"></a>
The tick label options of an axis\.  
_Required_: No  
_Type_: [AxisTickLabelOptions](aws-properties-quicksight-dashboard-axisticklabeloptions.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
