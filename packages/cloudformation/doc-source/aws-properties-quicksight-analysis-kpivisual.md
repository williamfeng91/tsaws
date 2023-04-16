# AWS::QuickSight::Analysis KPIVisual<a name="aws-properties-quicksight-analysis-kpivisual"></a>

A key performance indicator \(KPI\)\.

For more information, see [Using KPIs](https://docs.aws.amazon.com/quicksight/latest/user/kpi.html) in the _Amazon QuickSight User Guide_\.

## Syntax<a name="aws-properties-quicksight-analysis-kpivisual-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-analysis-kpivisual-syntax.json"></a>

```
{
  "[Actions](#cfn-quicksight-analysis-kpivisual-actions)" : [ VisualCustomAction, ... ],
  "[ChartConfiguration](#cfn-quicksight-analysis-kpivisual-chartconfiguration)" : KPIConfiguration,
  "[ColumnHierarchies](#cfn-quicksight-analysis-kpivisual-columnhierarchies)" : [ ColumnHierarchy, ... ],
  "[ConditionalFormatting](#cfn-quicksight-analysis-kpivisual-conditionalformatting)" : KPIConditionalFormatting,
  "[Subtitle](#cfn-quicksight-analysis-kpivisual-subtitle)" : VisualSubtitleLabelOptions,
  "[Title](#cfn-quicksight-analysis-kpivisual-title)" : VisualTitleLabelOptions,
  "[VisualId](#cfn-quicksight-analysis-kpivisual-visualid)" : String
}
```

### YAML<a name="aws-properties-quicksight-analysis-kpivisual-syntax.yaml"></a>

```
  [Actions](#cfn-quicksight-analysis-kpivisual-actions):
    - VisualCustomAction
  [ChartConfiguration](#cfn-quicksight-analysis-kpivisual-chartconfiguration):
    KPIConfiguration
  [ColumnHierarchies](#cfn-quicksight-analysis-kpivisual-columnhierarchies):
    - ColumnHierarchy
  [ConditionalFormatting](#cfn-quicksight-analysis-kpivisual-conditionalformatting):
    KPIConditionalFormatting
  [Subtitle](#cfn-quicksight-analysis-kpivisual-subtitle):
    VisualSubtitleLabelOptions
  [Title](#cfn-quicksight-analysis-kpivisual-title):
    VisualTitleLabelOptions
  [VisualId](#cfn-quicksight-analysis-kpivisual-visualid): String
```

## Properties<a name="aws-properties-quicksight-analysis-kpivisual-properties"></a>

`Actions` <a name="cfn-quicksight-analysis-kpivisual-actions"></a>
The list of custom actions that are configured for a visual\.  
_Required_: No  
_Type_: List of [VisualCustomAction](aws-properties-quicksight-analysis-visualcustomaction.md)  
_Maximum_: `10`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`ChartConfiguration` <a name="cfn-quicksight-analysis-kpivisual-chartconfiguration"></a>
The configuration of a KPI visual\.  
_Required_: No  
_Type_: [KPIConfiguration](aws-properties-quicksight-analysis-kpiconfiguration.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`ColumnHierarchies` <a name="cfn-quicksight-analysis-kpivisual-columnhierarchies"></a>
The column hierarchy that is used during drill\-downs and drill\-ups\.  
_Required_: No  
_Type_: List of [ColumnHierarchy](aws-properties-quicksight-analysis-columnhierarchy.md)  
_Maximum_: `2`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`ConditionalFormatting` <a name="cfn-quicksight-analysis-kpivisual-conditionalformatting"></a>
The conditional formatting of a KPI visual\.  
_Required_: No  
_Type_: [KPIConditionalFormatting](aws-properties-quicksight-analysis-kpiconditionalformatting.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Subtitle` <a name="cfn-quicksight-analysis-kpivisual-subtitle"></a>
The subtitle that is displayed on the visual\.  
_Required_: No  
_Type_: [VisualSubtitleLabelOptions](aws-properties-quicksight-analysis-visualsubtitlelabeloptions.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Title` <a name="cfn-quicksight-analysis-kpivisual-title"></a>
The title that is displayed on the visual\.  
_Required_: No  
_Type_: [VisualTitleLabelOptions](aws-properties-quicksight-analysis-visualtitlelabeloptions.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`VisualId` <a name="cfn-quicksight-analysis-kpivisual-visualid"></a>
The unique identifier of a visual\. This identifier must be unique within the context of a dashboard, template, or analysis\. Two dashboards, analyses, or templates can have visuals with the same identifiers\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `512`  
_Pattern_: `[\w\-]+`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
