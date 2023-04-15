# AWS::QuickSight::Analysis GaugeChartVisual<a name="aws-properties-quicksight-analysis-gaugechartvisual"></a>

A gauge chart\.

For more information, see [Using gauge charts](https://docs.aws.amazon.com/quicksight/latest/user/gauge-chart.html) in the _Amazon QuickSight User Guide_\.

## Syntax<a name="aws-properties-quicksight-analysis-gaugechartvisual-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-analysis-gaugechartvisual-syntax.json"></a>

```
{
  "[Actions](#cfn-quicksight-analysis-gaugechartvisual-actions)" : [ VisualCustomAction, ... ],
  "[ChartConfiguration](#cfn-quicksight-analysis-gaugechartvisual-chartconfiguration)" : GaugeChartConfiguration,
  "[ConditionalFormatting](#cfn-quicksight-analysis-gaugechartvisual-conditionalformatting)" : GaugeChartConditionalFormatting,
  "[Subtitle](#cfn-quicksight-analysis-gaugechartvisual-subtitle)" : VisualSubtitleLabelOptions,
  "[Title](#cfn-quicksight-analysis-gaugechartvisual-title)" : VisualTitleLabelOptions,
  "[VisualId](#cfn-quicksight-analysis-gaugechartvisual-visualid)" : String
}
```

### YAML<a name="aws-properties-quicksight-analysis-gaugechartvisual-syntax.yaml"></a>

```
  [Actions](#cfn-quicksight-analysis-gaugechartvisual-actions):
    - VisualCustomAction
  [ChartConfiguration](#cfn-quicksight-analysis-gaugechartvisual-chartconfiguration):
    GaugeChartConfiguration
  [ConditionalFormatting](#cfn-quicksight-analysis-gaugechartvisual-conditionalformatting):
    GaugeChartConditionalFormatting
  [Subtitle](#cfn-quicksight-analysis-gaugechartvisual-subtitle):
    VisualSubtitleLabelOptions
  [Title](#cfn-quicksight-analysis-gaugechartvisual-title):
    VisualTitleLabelOptions
  [VisualId](#cfn-quicksight-analysis-gaugechartvisual-visualid): String
```

## Properties<a name="aws-properties-quicksight-analysis-gaugechartvisual-properties"></a>

`Actions` <a name="cfn-quicksight-analysis-gaugechartvisual-actions"></a>
The list of custom actions that are configured for a visual\.  
_Required_: No  
_Type_: List of [VisualCustomAction](aws-properties-quicksight-analysis-visualcustomaction.md)  
_Maximum_: `10`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`ChartConfiguration` <a name="cfn-quicksight-analysis-gaugechartvisual-chartconfiguration"></a>
The configuration of a `GaugeChartVisual`\.  
_Required_: No  
_Type_: [GaugeChartConfiguration](aws-properties-quicksight-analysis-gaugechartconfiguration.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`ConditionalFormatting` <a name="cfn-quicksight-analysis-gaugechartvisual-conditionalformatting"></a>
The conditional formatting of a `GaugeChartVisual`\.  
_Required_: No  
_Type_: [GaugeChartConditionalFormatting](aws-properties-quicksight-analysis-gaugechartconditionalformatting.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Subtitle` <a name="cfn-quicksight-analysis-gaugechartvisual-subtitle"></a>
The subtitle that is displayed on the visual\.  
_Required_: No  
_Type_: [VisualSubtitleLabelOptions](aws-properties-quicksight-analysis-visualsubtitlelabeloptions.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Title` <a name="cfn-quicksight-analysis-gaugechartvisual-title"></a>
The title that is displayed on the visual\.  
_Required_: No  
_Type_: [VisualTitleLabelOptions](aws-properties-quicksight-analysis-visualtitlelabeloptions.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`VisualId` <a name="cfn-quicksight-analysis-gaugechartvisual-visualid"></a>
The unique identifier of a visual\. This identifier must be unique within the context of a dashboard, template, or analysis\. Two dashboards, analyses, or templates can have visuals with the same identifiers\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `512`  
_Pattern_: `[\w\-]+`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
