# AWS::QuickSight::Dashboard WordCloudVisual<a name="aws-properties-quicksight-dashboard-wordcloudvisual"></a>

A word cloud\.

For more information, see [Using word clouds](https://docs.aws.amazon.com/quicksight/latest/user/word-cloud.html) in the _Amazon QuickSight User Guide_\.

## Syntax<a name="aws-properties-quicksight-dashboard-wordcloudvisual-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-dashboard-wordcloudvisual-syntax.json"></a>

```
{
  "[Actions](#cfn-quicksight-dashboard-wordcloudvisual-actions)" : [ VisualCustomAction, ... ],
  "[ChartConfiguration](#cfn-quicksight-dashboard-wordcloudvisual-chartconfiguration)" : WordCloudChartConfiguration,
  "[ColumnHierarchies](#cfn-quicksight-dashboard-wordcloudvisual-columnhierarchies)" : [ ColumnHierarchy, ... ],
  "[Subtitle](#cfn-quicksight-dashboard-wordcloudvisual-subtitle)" : VisualSubtitleLabelOptions,
  "[Title](#cfn-quicksight-dashboard-wordcloudvisual-title)" : VisualTitleLabelOptions,
  "[VisualId](#cfn-quicksight-dashboard-wordcloudvisual-visualid)" : String
}
```

### YAML<a name="aws-properties-quicksight-dashboard-wordcloudvisual-syntax.yaml"></a>

```
  [Actions](#cfn-quicksight-dashboard-wordcloudvisual-actions):
    - VisualCustomAction
  [ChartConfiguration](#cfn-quicksight-dashboard-wordcloudvisual-chartconfiguration):
    WordCloudChartConfiguration
  [ColumnHierarchies](#cfn-quicksight-dashboard-wordcloudvisual-columnhierarchies):
    - ColumnHierarchy
  [Subtitle](#cfn-quicksight-dashboard-wordcloudvisual-subtitle):
    VisualSubtitleLabelOptions
  [Title](#cfn-quicksight-dashboard-wordcloudvisual-title):
    VisualTitleLabelOptions
  [VisualId](#cfn-quicksight-dashboard-wordcloudvisual-visualid): String
```

## Properties<a name="aws-properties-quicksight-dashboard-wordcloudvisual-properties"></a>

`Actions` <a name="cfn-quicksight-dashboard-wordcloudvisual-actions"></a>
The list of custom actions that are configured for a visual\.  
_Required_: No  
_Type_: List of [VisualCustomAction](aws-properties-quicksight-dashboard-visualcustomaction.md)  
_Maximum_: `10`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`ChartConfiguration` <a name="cfn-quicksight-dashboard-wordcloudvisual-chartconfiguration"></a>
The configuration settings of the visual\.  
_Required_: No  
_Type_: [WordCloudChartConfiguration](aws-properties-quicksight-dashboard-wordcloudchartconfiguration.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`ColumnHierarchies` <a name="cfn-quicksight-dashboard-wordcloudvisual-columnhierarchies"></a>
The column hierarchy that is used during drill\-downs and drill\-ups\.  
_Required_: No  
_Type_: List of [ColumnHierarchy](aws-properties-quicksight-dashboard-columnhierarchy.md)  
_Maximum_: `2`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Subtitle` <a name="cfn-quicksight-dashboard-wordcloudvisual-subtitle"></a>
The subtitle that is displayed on the visual\.  
_Required_: No  
_Type_: [VisualSubtitleLabelOptions](aws-properties-quicksight-dashboard-visualsubtitlelabeloptions.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Title` <a name="cfn-quicksight-dashboard-wordcloudvisual-title"></a>
The title that is displayed on the visual\.  
_Required_: No  
_Type_: [VisualTitleLabelOptions](aws-properties-quicksight-dashboard-visualtitlelabeloptions.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`VisualId` <a name="cfn-quicksight-dashboard-wordcloudvisual-visualid"></a>
The unique identifier of a visual\. This identifier must be unique within the context of a dashboard, template, or analysis\. Two dashboards, analyses, or templates can have visuals with the same identifiers\.\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `512`  
_Pattern_: `[\w\-]+`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
