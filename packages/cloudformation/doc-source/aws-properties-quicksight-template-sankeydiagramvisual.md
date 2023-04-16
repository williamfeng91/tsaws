# AWS::QuickSight::Template SankeyDiagramVisual<a name="aws-properties-quicksight-template-sankeydiagramvisual"></a>

A sankey diagram\.

For more information, see [Using Sankey diagrams](https://docs.aws.amazon.com/quicksight/latest/user/sankey-diagram.html) in the _Amazon QuickSight User Guide_\.

## Syntax<a name="aws-properties-quicksight-template-sankeydiagramvisual-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-template-sankeydiagramvisual-syntax.json"></a>

```
{
  "[Actions](#cfn-quicksight-template-sankeydiagramvisual-actions)" : [ VisualCustomAction, ... ],
  "[ChartConfiguration](#cfn-quicksight-template-sankeydiagramvisual-chartconfiguration)" : SankeyDiagramChartConfiguration,
  "[Subtitle](#cfn-quicksight-template-sankeydiagramvisual-subtitle)" : VisualSubtitleLabelOptions,
  "[Title](#cfn-quicksight-template-sankeydiagramvisual-title)" : VisualTitleLabelOptions,
  "[VisualId](#cfn-quicksight-template-sankeydiagramvisual-visualid)" : String
}
```

### YAML<a name="aws-properties-quicksight-template-sankeydiagramvisual-syntax.yaml"></a>

```
  [Actions](#cfn-quicksight-template-sankeydiagramvisual-actions):
    - VisualCustomAction
  [ChartConfiguration](#cfn-quicksight-template-sankeydiagramvisual-chartconfiguration):
    SankeyDiagramChartConfiguration
  [Subtitle](#cfn-quicksight-template-sankeydiagramvisual-subtitle):
    VisualSubtitleLabelOptions
  [Title](#cfn-quicksight-template-sankeydiagramvisual-title):
    VisualTitleLabelOptions
  [VisualId](#cfn-quicksight-template-sankeydiagramvisual-visualid): String
```

## Properties<a name="aws-properties-quicksight-template-sankeydiagramvisual-properties"></a>

`Actions` <a name="cfn-quicksight-template-sankeydiagramvisual-actions"></a>
The list of custom actions that are configured for a visual\.  
_Required_: No  
_Type_: List of [VisualCustomAction](aws-properties-quicksight-template-visualcustomaction.md)  
_Maximum_: `10`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`ChartConfiguration` <a name="cfn-quicksight-template-sankeydiagramvisual-chartconfiguration"></a>
The configuration of a sankey diagram\.  
_Required_: No  
_Type_: [SankeyDiagramChartConfiguration](aws-properties-quicksight-template-sankeydiagramchartconfiguration.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Subtitle` <a name="cfn-quicksight-template-sankeydiagramvisual-subtitle"></a>
The subtitle that is displayed on the visual\.  
_Required_: No  
_Type_: [VisualSubtitleLabelOptions](aws-properties-quicksight-template-visualsubtitlelabeloptions.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Title` <a name="cfn-quicksight-template-sankeydiagramvisual-title"></a>
The title that is displayed on the visual\.  
_Required_: No  
_Type_: [VisualTitleLabelOptions](aws-properties-quicksight-template-visualtitlelabeloptions.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`VisualId` <a name="cfn-quicksight-template-sankeydiagramvisual-visualid"></a>
The unique identifier of a visual\. This identifier must be unique within the context of a dashboard, template, or analysis\. Two dashboards, analyses, or templates can have visuals with the same identifiers\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `512`  
_Pattern_: `[\w\-]+`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
