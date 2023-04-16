# AWS::QuickSight::Dashboard InsightVisual<a name="aws-properties-quicksight-dashboard-insightvisual"></a>

An insight visual\.

For more information, see [Working with insights](https://docs.aws.amazon.com/quicksight/latest/user/computational-insights.html) in the _Amazon QuickSight User Guide_\.

## Syntax<a name="aws-properties-quicksight-dashboard-insightvisual-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-dashboard-insightvisual-syntax.json"></a>

```
{
  "[Actions](#cfn-quicksight-dashboard-insightvisual-actions)" : [ VisualCustomAction, ... ],
  "[DataSetIdentifier](#cfn-quicksight-dashboard-insightvisual-datasetidentifier)" : String,
  "[InsightConfiguration](#cfn-quicksight-dashboard-insightvisual-insightconfiguration)" : InsightConfiguration,
  "[Subtitle](#cfn-quicksight-dashboard-insightvisual-subtitle)" : VisualSubtitleLabelOptions,
  "[Title](#cfn-quicksight-dashboard-insightvisual-title)" : VisualTitleLabelOptions,
  "[VisualId](#cfn-quicksight-dashboard-insightvisual-visualid)" : String
}
```

### YAML<a name="aws-properties-quicksight-dashboard-insightvisual-syntax.yaml"></a>

```
  [Actions](#cfn-quicksight-dashboard-insightvisual-actions):
    - VisualCustomAction
  [DataSetIdentifier](#cfn-quicksight-dashboard-insightvisual-datasetidentifier): String
  [InsightConfiguration](#cfn-quicksight-dashboard-insightvisual-insightconfiguration):
    InsightConfiguration
  [Subtitle](#cfn-quicksight-dashboard-insightvisual-subtitle):
    VisualSubtitleLabelOptions
  [Title](#cfn-quicksight-dashboard-insightvisual-title):
    VisualTitleLabelOptions
  [VisualId](#cfn-quicksight-dashboard-insightvisual-visualid): String
```

## Properties<a name="aws-properties-quicksight-dashboard-insightvisual-properties"></a>

`Actions` <a name="cfn-quicksight-dashboard-insightvisual-actions"></a>
The list of custom actions that are configured for a visual\.  
_Required_: No  
_Type_: List of [VisualCustomAction](aws-properties-quicksight-dashboard-visualcustomaction.md)  
_Maximum_: `10`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`DataSetIdentifier` <a name="cfn-quicksight-dashboard-insightvisual-datasetidentifier"></a>
The dataset that is used in the insight visual\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `2048`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`InsightConfiguration` <a name="cfn-quicksight-dashboard-insightvisual-insightconfiguration"></a>
The configuration of an insight visual\.  
_Required_: No  
_Type_: [InsightConfiguration](aws-properties-quicksight-dashboard-insightconfiguration.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Subtitle` <a name="cfn-quicksight-dashboard-insightvisual-subtitle"></a>
The subtitle that is displayed on the visual\.  
_Required_: No  
_Type_: [VisualSubtitleLabelOptions](aws-properties-quicksight-dashboard-visualsubtitlelabeloptions.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Title` <a name="cfn-quicksight-dashboard-insightvisual-title"></a>
The title that is displayed on the visual\.  
_Required_: No  
_Type_: [VisualTitleLabelOptions](aws-properties-quicksight-dashboard-visualtitlelabeloptions.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`VisualId` <a name="cfn-quicksight-dashboard-insightvisual-visualid"></a>
The unique identifier of a visual\. This identifier must be unique within the context of a dashboard, template, or analysis\. Two dashboards, analyses, or templates can have visuals with the same identifiers\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `512`  
_Pattern_: `[\w\-]+`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
