# AWS::QuickSight::Template PieChartVisual<a name="aws-properties-quicksight-template-piechartvisual"></a>

A pie or donut chart\.

The `PieChartVisual` structure describes a visual that is a member of the pie chart family\.

The following charts can be described by using this structure:

- Pie charts
- Donut charts

For more information, see [Using pie charts](https://docs.aws.amazon.com/quicksight/latest/user/pie-chart.html) in the _Amazon QuickSight User Guide_\.

For more information, see [Using donut charts](https://docs.aws.amazon.com/quicksight/latest/user/donut-chart.html) in the _Amazon QuickSight User Guide_\.

## Syntax<a name="aws-properties-quicksight-template-piechartvisual-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-template-piechartvisual-syntax.json"></a>

```
{
  "[Actions](#cfn-quicksight-template-piechartvisual-actions)" : [ VisualCustomAction, ... ],
  "[ChartConfiguration](#cfn-quicksight-template-piechartvisual-chartconfiguration)" : PieChartConfiguration,
  "[ColumnHierarchies](#cfn-quicksight-template-piechartvisual-columnhierarchies)" : [ ColumnHierarchy, ... ],
  "[Subtitle](#cfn-quicksight-template-piechartvisual-subtitle)" : VisualSubtitleLabelOptions,
  "[Title](#cfn-quicksight-template-piechartvisual-title)" : VisualTitleLabelOptions,
  "[VisualId](#cfn-quicksight-template-piechartvisual-visualid)" : String
}
```

### YAML<a name="aws-properties-quicksight-template-piechartvisual-syntax.yaml"></a>

```
  [Actions](#cfn-quicksight-template-piechartvisual-actions):
    - VisualCustomAction
  [ChartConfiguration](#cfn-quicksight-template-piechartvisual-chartconfiguration):
    PieChartConfiguration
  [ColumnHierarchies](#cfn-quicksight-template-piechartvisual-columnhierarchies):
    - ColumnHierarchy
  [Subtitle](#cfn-quicksight-template-piechartvisual-subtitle):
    VisualSubtitleLabelOptions
  [Title](#cfn-quicksight-template-piechartvisual-title):
    VisualTitleLabelOptions
  [VisualId](#cfn-quicksight-template-piechartvisual-visualid): String
```

## Properties<a name="aws-properties-quicksight-template-piechartvisual-properties"></a>

`Actions` <a name="cfn-quicksight-template-piechartvisual-actions"></a>
The list of custom actions that are configured for a visual\.  
_Required_: No  
_Type_: List of [VisualCustomAction](aws-properties-quicksight-template-visualcustomaction.md)  
_Maximum_: `10`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`ChartConfiguration` <a name="cfn-quicksight-template-piechartvisual-chartconfiguration"></a>
The configuration of a pie chart\.  
_Required_: No  
_Type_: [PieChartConfiguration](aws-properties-quicksight-template-piechartconfiguration.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`ColumnHierarchies` <a name="cfn-quicksight-template-piechartvisual-columnhierarchies"></a>
The column hierarchy that is used during drill\-downs and drill\-ups\.  
_Required_: No  
_Type_: List of [ColumnHierarchy](aws-properties-quicksight-template-columnhierarchy.md)  
_Maximum_: `2`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Subtitle` <a name="cfn-quicksight-template-piechartvisual-subtitle"></a>
The subtitle that is displayed on the visual\.  
_Required_: No  
_Type_: [VisualSubtitleLabelOptions](aws-properties-quicksight-template-visualsubtitlelabeloptions.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Title` <a name="cfn-quicksight-template-piechartvisual-title"></a>
The title that is displayed on the visual\.  
_Required_: No  
_Type_: [VisualTitleLabelOptions](aws-properties-quicksight-template-visualtitlelabeloptions.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`VisualId` <a name="cfn-quicksight-template-piechartvisual-visualid"></a>
The unique identifier of a visual\. This identifier must be unique within the context of a dashboard, template, or analysis\. Two dashboards, analyses, or templates can have visuals with the same identifiers\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `512`  
_Pattern_: `[\w\-]+`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
