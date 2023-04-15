# AWS::QuickSight::Analysis FunnelChartDataLabelOptions<a name="aws-properties-quicksight-analysis-funnelchartdatalabeloptions"></a>

The options that determine the presentation of the data labels\.

## Syntax<a name="aws-properties-quicksight-analysis-funnelchartdatalabeloptions-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-analysis-funnelchartdatalabeloptions-syntax.json"></a>

```
{
  "[CategoryLabelVisibility](#cfn-quicksight-analysis-funnelchartdatalabeloptions-categorylabelvisibility)" : String,
  "[LabelColor](#cfn-quicksight-analysis-funnelchartdatalabeloptions-labelcolor)" : String,
  "[LabelFontConfiguration](#cfn-quicksight-analysis-funnelchartdatalabeloptions-labelfontconfiguration)" : FontConfiguration,
  "[MeasureDataLabelStyle](#cfn-quicksight-analysis-funnelchartdatalabeloptions-measuredatalabelstyle)" : String,
  "[MeasureLabelVisibility](#cfn-quicksight-analysis-funnelchartdatalabeloptions-measurelabelvisibility)" : String,
  "[Position](#cfn-quicksight-analysis-funnelchartdatalabeloptions-position)" : String,
  "[Visibility](#cfn-quicksight-analysis-funnelchartdatalabeloptions-visibility)" : String
}
```

### YAML<a name="aws-properties-quicksight-analysis-funnelchartdatalabeloptions-syntax.yaml"></a>

```
  [CategoryLabelVisibility](#cfn-quicksight-analysis-funnelchartdatalabeloptions-categorylabelvisibility): String
  [LabelColor](#cfn-quicksight-analysis-funnelchartdatalabeloptions-labelcolor): String
  [LabelFontConfiguration](#cfn-quicksight-analysis-funnelchartdatalabeloptions-labelfontconfiguration):
    FontConfiguration
  [MeasureDataLabelStyle](#cfn-quicksight-analysis-funnelchartdatalabeloptions-measuredatalabelstyle): String
  [MeasureLabelVisibility](#cfn-quicksight-analysis-funnelchartdatalabeloptions-measurelabelvisibility): String
  [Position](#cfn-quicksight-analysis-funnelchartdatalabeloptions-position): String
  [Visibility](#cfn-quicksight-analysis-funnelchartdatalabeloptions-visibility): String
```

## Properties<a name="aws-properties-quicksight-analysis-funnelchartdatalabeloptions-properties"></a>

`CategoryLabelVisibility` <a name="cfn-quicksight-analysis-funnelchartdatalabeloptions-categorylabelvisibility"></a>
The visibility of the category labels within the data labels\.  
_Required_: No  
_Type_: String  
_Allowed values_: `HIDDEN | VISIBLE`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`LabelColor` <a name="cfn-quicksight-analysis-funnelchartdatalabeloptions-labelcolor"></a>
The color of the data label text\.  
_Required_: No  
_Type_: String  
_Pattern_: `^#[A-F0-9]{6}$`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`LabelFontConfiguration` <a name="cfn-quicksight-analysis-funnelchartdatalabeloptions-labelfontconfiguration"></a>
The font configuration for the data labels\.  
Only the `FontSize` attribute of the font configuration is used for data labels\.  
_Required_: No  
_Type_: [FontConfiguration](aws-properties-quicksight-analysis-fontconfiguration.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`MeasureDataLabelStyle` <a name="cfn-quicksight-analysis-funnelchartdatalabeloptions-measuredatalabelstyle"></a>
Determines the style of the metric labels\.  
_Required_: No  
_Type_: String  
_Allowed values_: `PERCENTAGE_BY_FIRST_STAGE | PERCENTAGE_BY_PREVIOUS_STAGE | VALUE_AND_PERCENTAGE_BY_FIRST_STAGE | VALUE_AND_PERCENTAGE_BY_PREVIOUS_STAGE | VALUE_ONLY`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`MeasureLabelVisibility` <a name="cfn-quicksight-analysis-funnelchartdatalabeloptions-measurelabelvisibility"></a>
The visibility of the measure labels within the data labels\.  
_Required_: No  
_Type_: String  
_Allowed values_: `HIDDEN | VISIBLE`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Position` <a name="cfn-quicksight-analysis-funnelchartdatalabeloptions-position"></a>
Determines the positioning of the data label relative to a section of the funnel\.  
_Required_: No  
_Type_: String  
_Allowed values_: `BOTTOM | INSIDE | LEFT | OUTSIDE | RIGHT | TOP`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Visibility` <a name="cfn-quicksight-analysis-funnelchartdatalabeloptions-visibility"></a>
The visibility option that determines if data labels are displayed\.  
_Required_: No  
_Type_: String  
_Allowed values_: `HIDDEN | VISIBLE`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
