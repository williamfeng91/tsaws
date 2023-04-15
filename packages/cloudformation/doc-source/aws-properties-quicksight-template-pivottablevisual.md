# AWS::QuickSight::Template PivotTableVisual<a name="aws-properties-quicksight-template-pivottablevisual"></a>

A pivot table\.

For more information, see [Using pivot tables](https://docs.aws.amazon.com/quicksight/latest/user/pivot-table.html) in the _Amazon QuickSight User Guide_\.

## Syntax<a name="aws-properties-quicksight-template-pivottablevisual-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-template-pivottablevisual-syntax.json"></a>

```
{
  "[Actions](#cfn-quicksight-template-pivottablevisual-actions)" : [ VisualCustomAction, ... ],
  "[ChartConfiguration](#cfn-quicksight-template-pivottablevisual-chartconfiguration)" : PivotTableConfiguration,
  "[ConditionalFormatting](#cfn-quicksight-template-pivottablevisual-conditionalformatting)" : PivotTableConditionalFormatting,
  "[Subtitle](#cfn-quicksight-template-pivottablevisual-subtitle)" : VisualSubtitleLabelOptions,
  "[Title](#cfn-quicksight-template-pivottablevisual-title)" : VisualTitleLabelOptions,
  "[VisualId](#cfn-quicksight-template-pivottablevisual-visualid)" : String
}
```

### YAML<a name="aws-properties-quicksight-template-pivottablevisual-syntax.yaml"></a>

```
  [Actions](#cfn-quicksight-template-pivottablevisual-actions):
    - VisualCustomAction
  [ChartConfiguration](#cfn-quicksight-template-pivottablevisual-chartconfiguration):
    PivotTableConfiguration
  [ConditionalFormatting](#cfn-quicksight-template-pivottablevisual-conditionalformatting):
    PivotTableConditionalFormatting
  [Subtitle](#cfn-quicksight-template-pivottablevisual-subtitle):
    VisualSubtitleLabelOptions
  [Title](#cfn-quicksight-template-pivottablevisual-title):
    VisualTitleLabelOptions
  [VisualId](#cfn-quicksight-template-pivottablevisual-visualid): String
```

## Properties<a name="aws-properties-quicksight-template-pivottablevisual-properties"></a>

`Actions` <a name="cfn-quicksight-template-pivottablevisual-actions"></a>
The list of custom actions that are configured for a visual\.  
_Required_: No  
_Type_: List of [VisualCustomAction](aws-properties-quicksight-template-visualcustomaction.md)  
_Maximum_: `10`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`ChartConfiguration` <a name="cfn-quicksight-template-pivottablevisual-chartconfiguration"></a>
The configuration settings of the visual\.  
_Required_: No  
_Type_: [PivotTableConfiguration](aws-properties-quicksight-template-pivottableconfiguration.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`ConditionalFormatting` <a name="cfn-quicksight-template-pivottablevisual-conditionalformatting"></a>
The conditional formatting for a `PivotTableVisual`\.  
_Required_: No  
_Type_: [PivotTableConditionalFormatting](aws-properties-quicksight-template-pivottableconditionalformatting.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Subtitle` <a name="cfn-quicksight-template-pivottablevisual-subtitle"></a>
The subtitle that is displayed on the visual\.  
_Required_: No  
_Type_: [VisualSubtitleLabelOptions](aws-properties-quicksight-template-visualsubtitlelabeloptions.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Title` <a name="cfn-quicksight-template-pivottablevisual-title"></a>
The title that is displayed on the visual\.  
_Required_: No  
_Type_: [VisualTitleLabelOptions](aws-properties-quicksight-template-visualtitlelabeloptions.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`VisualId` <a name="cfn-quicksight-template-pivottablevisual-visualid"></a>
The unique identifier of a visual\. This identifier must be unique within the context of a dashboard, template, or analysis\. Two dashboards, analyses, or templates can have visuals with the same identifiers\.\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `512`  
_Pattern_: `[\w\-]+`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
