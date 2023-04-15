# AWS::QuickSight::Dashboard FilledMapVisual<a name="aws-properties-quicksight-dashboard-filledmapvisual"></a>

A filled map\.

For more information, see [Creating filled maps](https://docs.aws.amazon.com/quicksight/latest/user/filled-maps.html) in the _Amazon QuickSight User Guide_\.

## Syntax<a name="aws-properties-quicksight-dashboard-filledmapvisual-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-dashboard-filledmapvisual-syntax.json"></a>

```
{
  "[Actions](#cfn-quicksight-dashboard-filledmapvisual-actions)" : [ VisualCustomAction, ... ],
  "[ChartConfiguration](#cfn-quicksight-dashboard-filledmapvisual-chartconfiguration)" : FilledMapConfiguration,
  "[ColumnHierarchies](#cfn-quicksight-dashboard-filledmapvisual-columnhierarchies)" : [ ColumnHierarchy, ... ],
  "[ConditionalFormatting](#cfn-quicksight-dashboard-filledmapvisual-conditionalformatting)" : FilledMapConditionalFormatting,
  "[Subtitle](#cfn-quicksight-dashboard-filledmapvisual-subtitle)" : VisualSubtitleLabelOptions,
  "[Title](#cfn-quicksight-dashboard-filledmapvisual-title)" : VisualTitleLabelOptions,
  "[VisualId](#cfn-quicksight-dashboard-filledmapvisual-visualid)" : String
}
```

### YAML<a name="aws-properties-quicksight-dashboard-filledmapvisual-syntax.yaml"></a>

```
  [Actions](#cfn-quicksight-dashboard-filledmapvisual-actions):
    - VisualCustomAction
  [ChartConfiguration](#cfn-quicksight-dashboard-filledmapvisual-chartconfiguration):
    FilledMapConfiguration
  [ColumnHierarchies](#cfn-quicksight-dashboard-filledmapvisual-columnhierarchies):
    - ColumnHierarchy
  [ConditionalFormatting](#cfn-quicksight-dashboard-filledmapvisual-conditionalformatting):
    FilledMapConditionalFormatting
  [Subtitle](#cfn-quicksight-dashboard-filledmapvisual-subtitle):
    VisualSubtitleLabelOptions
  [Title](#cfn-quicksight-dashboard-filledmapvisual-title):
    VisualTitleLabelOptions
  [VisualId](#cfn-quicksight-dashboard-filledmapvisual-visualid): String
```

## Properties<a name="aws-properties-quicksight-dashboard-filledmapvisual-properties"></a>

`Actions` <a name="cfn-quicksight-dashboard-filledmapvisual-actions"></a>
The list of custom actions that are configured for a visual\.  
_Required_: No  
_Type_: List of [VisualCustomAction](aws-properties-quicksight-dashboard-visualcustomaction.md)  
_Maximum_: `10`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`ChartConfiguration` <a name="cfn-quicksight-dashboard-filledmapvisual-chartconfiguration"></a>
The configuration settings of the visual\.  
_Required_: No  
_Type_: [FilledMapConfiguration](aws-properties-quicksight-dashboard-filledmapconfiguration.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`ColumnHierarchies` <a name="cfn-quicksight-dashboard-filledmapvisual-columnhierarchies"></a>
The column hierarchy that is used during drill\-downs and drill\-ups\.  
_Required_: No  
_Type_: List of [ColumnHierarchy](aws-properties-quicksight-dashboard-columnhierarchy.md)  
_Maximum_: `2`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`ConditionalFormatting` <a name="cfn-quicksight-dashboard-filledmapvisual-conditionalformatting"></a>
The conditional formatting of a `FilledMapVisual`\.  
_Required_: No  
_Type_: [FilledMapConditionalFormatting](aws-properties-quicksight-dashboard-filledmapconditionalformatting.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Subtitle` <a name="cfn-quicksight-dashboard-filledmapvisual-subtitle"></a>
The subtitle that is displayed on the visual\.  
_Required_: No  
_Type_: [VisualSubtitleLabelOptions](aws-properties-quicksight-dashboard-visualsubtitlelabeloptions.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Title` <a name="cfn-quicksight-dashboard-filledmapvisual-title"></a>
The title that is displayed on the visual\.  
_Required_: No  
_Type_: [VisualTitleLabelOptions](aws-properties-quicksight-dashboard-visualtitlelabeloptions.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`VisualId` <a name="cfn-quicksight-dashboard-filledmapvisual-visualid"></a>
The unique identifier of a visual\. This identifier must be unique within the context of a dashboard, template, or analysis\. Two dashboards, analyses, or templates can have visuals with the same identifiers\.\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `512`  
_Pattern_: `[\w\-]+`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
