# AWS::QuickSight::Analysis LineChartVisual<a name="aws-properties-quicksight-analysis-linechartvisual"></a>

A line chart\.

For more information, see [Using line charts](https://docs.aws.amazon.com/quicksight/latest/user/line-charts.html) in the _Amazon QuickSight User Guide_\.

## Syntax<a name="aws-properties-quicksight-analysis-linechartvisual-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-analysis-linechartvisual-syntax.json"></a>

```
{
  "[Actions](#cfn-quicksight-analysis-linechartvisual-actions)" : [ VisualCustomAction, ... ],
  "[ChartConfiguration](#cfn-quicksight-analysis-linechartvisual-chartconfiguration)" : LineChartConfiguration,
  "[ColumnHierarchies](#cfn-quicksight-analysis-linechartvisual-columnhierarchies)" : [ ColumnHierarchy, ... ],
  "[Subtitle](#cfn-quicksight-analysis-linechartvisual-subtitle)" : VisualSubtitleLabelOptions,
  "[Title](#cfn-quicksight-analysis-linechartvisual-title)" : VisualTitleLabelOptions,
  "[VisualId](#cfn-quicksight-analysis-linechartvisual-visualid)" : String
}
```

### YAML<a name="aws-properties-quicksight-analysis-linechartvisual-syntax.yaml"></a>

```
  [Actions](#cfn-quicksight-analysis-linechartvisual-actions):
    - VisualCustomAction
  [ChartConfiguration](#cfn-quicksight-analysis-linechartvisual-chartconfiguration):
    LineChartConfiguration
  [ColumnHierarchies](#cfn-quicksight-analysis-linechartvisual-columnhierarchies):
    - ColumnHierarchy
  [Subtitle](#cfn-quicksight-analysis-linechartvisual-subtitle):
    VisualSubtitleLabelOptions
  [Title](#cfn-quicksight-analysis-linechartvisual-title):
    VisualTitleLabelOptions
  [VisualId](#cfn-quicksight-analysis-linechartvisual-visualid): String
```

## Properties<a name="aws-properties-quicksight-analysis-linechartvisual-properties"></a>

`Actions` <a name="cfn-quicksight-analysis-linechartvisual-actions"></a>
The list of custom actions that are configured for a visual\.  
_Required_: No  
_Type_: List of [VisualCustomAction](aws-properties-quicksight-analysis-visualcustomaction.md)  
_Maximum_: `10`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`ChartConfiguration` <a name="cfn-quicksight-analysis-linechartvisual-chartconfiguration"></a>
The configuration of a line chart\.  
_Required_: No  
_Type_: [LineChartConfiguration](aws-properties-quicksight-analysis-linechartconfiguration.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`ColumnHierarchies` <a name="cfn-quicksight-analysis-linechartvisual-columnhierarchies"></a>
The column hierarchy that is used during drill\-downs and drill\-ups\.  
_Required_: No  
_Type_: List of [ColumnHierarchy](aws-properties-quicksight-analysis-columnhierarchy.md)  
_Maximum_: `2`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Subtitle` <a name="cfn-quicksight-analysis-linechartvisual-subtitle"></a>
The subtitle that is displayed on the visual\.  
_Required_: No  
_Type_: [VisualSubtitleLabelOptions](aws-properties-quicksight-analysis-visualsubtitlelabeloptions.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Title` <a name="cfn-quicksight-analysis-linechartvisual-title"></a>
The title that is displayed on the visual\.  
_Required_: No  
_Type_: [VisualTitleLabelOptions](aws-properties-quicksight-analysis-visualtitlelabeloptions.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`VisualId` <a name="cfn-quicksight-analysis-linechartvisual-visualid"></a>
The unique identifier of a visual\. This identifier must be unique within the context of a dashboard, template, or analysis\. Two dashboards, analyses, or templates can have visuals with the same identifiers\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `512`  
_Pattern_: `[\w\-]+`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
