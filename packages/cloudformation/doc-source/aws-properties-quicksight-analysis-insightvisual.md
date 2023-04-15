# AWS::QuickSight::Analysis InsightVisual<a name="aws-properties-quicksight-analysis-insightvisual"></a>

An insight visual\.

For more information, see [Working with insights](https://docs.aws.amazon.com/quicksight/latest/user/computational-insights.html) in the _Amazon QuickSight User Guide_\.

## Syntax<a name="aws-properties-quicksight-analysis-insightvisual-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-analysis-insightvisual-syntax.json"></a>

```
{
  "[Actions](#cfn-quicksight-analysis-insightvisual-actions)" : [ VisualCustomAction, ... ],
  "[DataSetIdentifier](#cfn-quicksight-analysis-insightvisual-datasetidentifier)" : String,
  "[InsightConfiguration](#cfn-quicksight-analysis-insightvisual-insightconfiguration)" : InsightConfiguration,
  "[Subtitle](#cfn-quicksight-analysis-insightvisual-subtitle)" : VisualSubtitleLabelOptions,
  "[Title](#cfn-quicksight-analysis-insightvisual-title)" : VisualTitleLabelOptions,
  "[VisualId](#cfn-quicksight-analysis-insightvisual-visualid)" : String
}
```

### YAML<a name="aws-properties-quicksight-analysis-insightvisual-syntax.yaml"></a>

```
  [Actions](#cfn-quicksight-analysis-insightvisual-actions):
    - VisualCustomAction
  [DataSetIdentifier](#cfn-quicksight-analysis-insightvisual-datasetidentifier): String
  [InsightConfiguration](#cfn-quicksight-analysis-insightvisual-insightconfiguration):
    InsightConfiguration
  [Subtitle](#cfn-quicksight-analysis-insightvisual-subtitle):
    VisualSubtitleLabelOptions
  [Title](#cfn-quicksight-analysis-insightvisual-title):
    VisualTitleLabelOptions
  [VisualId](#cfn-quicksight-analysis-insightvisual-visualid): String
```

## Properties<a name="aws-properties-quicksight-analysis-insightvisual-properties"></a>

`Actions` <a name="cfn-quicksight-analysis-insightvisual-actions"></a>
The list of custom actions that are configured for a visual\.  
_Required_: No  
_Type_: List of [VisualCustomAction](aws-properties-quicksight-analysis-visualcustomaction.md)  
_Maximum_: `10`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`DataSetIdentifier` <a name="cfn-quicksight-analysis-insightvisual-datasetidentifier"></a>
The dataset that is used in the insight visual\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `2048`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`InsightConfiguration` <a name="cfn-quicksight-analysis-insightvisual-insightconfiguration"></a>
The configuration of an insight visual\.  
_Required_: No  
_Type_: [InsightConfiguration](aws-properties-quicksight-analysis-insightconfiguration.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Subtitle` <a name="cfn-quicksight-analysis-insightvisual-subtitle"></a>
The subtitle that is displayed on the visual\.  
_Required_: No  
_Type_: [VisualSubtitleLabelOptions](aws-properties-quicksight-analysis-visualsubtitlelabeloptions.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Title` <a name="cfn-quicksight-analysis-insightvisual-title"></a>
The title that is displayed on the visual\.  
_Required_: No  
_Type_: [VisualTitleLabelOptions](aws-properties-quicksight-analysis-visualtitlelabeloptions.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`VisualId` <a name="cfn-quicksight-analysis-insightvisual-visualid"></a>
The unique identifier of a visual\. This identifier must be unique within the context of a dashboard, template, or analysis\. Two dashboards, analyses, or templates can have visuals with the same identifiers\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `512`  
_Pattern_: `[\w\-]+`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
