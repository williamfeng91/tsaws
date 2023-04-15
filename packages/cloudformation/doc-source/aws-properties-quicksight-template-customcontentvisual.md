# AWS::QuickSight::Template CustomContentVisual<a name="aws-properties-quicksight-template-customcontentvisual"></a>

A visual that contains custom content\.

For more information, see [Using custom visual content](https://docs.aws.amazon.com/quicksight/latest/user/custom-visual-content.html) in the _Amazon QuickSight User Guide_\.

## Syntax<a name="aws-properties-quicksight-template-customcontentvisual-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-template-customcontentvisual-syntax.json"></a>

```
{
  "[Actions](#cfn-quicksight-template-customcontentvisual-actions)" : [ VisualCustomAction, ... ],
  "[ChartConfiguration](#cfn-quicksight-template-customcontentvisual-chartconfiguration)" : CustomContentConfiguration,
  "[DataSetIdentifier](#cfn-quicksight-template-customcontentvisual-datasetidentifier)" : String,
  "[Subtitle](#cfn-quicksight-template-customcontentvisual-subtitle)" : VisualSubtitleLabelOptions,
  "[Title](#cfn-quicksight-template-customcontentvisual-title)" : VisualTitleLabelOptions,
  "[VisualId](#cfn-quicksight-template-customcontentvisual-visualid)" : String
}
```

### YAML<a name="aws-properties-quicksight-template-customcontentvisual-syntax.yaml"></a>

```
  [Actions](#cfn-quicksight-template-customcontentvisual-actions):
    - VisualCustomAction
  [ChartConfiguration](#cfn-quicksight-template-customcontentvisual-chartconfiguration):
    CustomContentConfiguration
  [DataSetIdentifier](#cfn-quicksight-template-customcontentvisual-datasetidentifier): String
  [Subtitle](#cfn-quicksight-template-customcontentvisual-subtitle):
    VisualSubtitleLabelOptions
  [Title](#cfn-quicksight-template-customcontentvisual-title):
    VisualTitleLabelOptions
  [VisualId](#cfn-quicksight-template-customcontentvisual-visualid): String
```

## Properties<a name="aws-properties-quicksight-template-customcontentvisual-properties"></a>

`Actions` <a name="cfn-quicksight-template-customcontentvisual-actions"></a>
The list of custom actions that are configured for a visual\.  
_Required_: No  
_Type_: List of [VisualCustomAction](aws-properties-quicksight-template-visualcustomaction.md)  
_Maximum_: `10`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`ChartConfiguration` <a name="cfn-quicksight-template-customcontentvisual-chartconfiguration"></a>
The configuration of a `CustomContentVisual`\.  
_Required_: No  
_Type_: [CustomContentConfiguration](aws-properties-quicksight-template-customcontentconfiguration.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`DataSetIdentifier` <a name="cfn-quicksight-template-customcontentvisual-datasetidentifier"></a>
The dataset that is used to create the custom content visual\. You can't create a visual without a dataset\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `2048`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Subtitle` <a name="cfn-quicksight-template-customcontentvisual-subtitle"></a>
The subtitle that is displayed on the visual\.  
_Required_: No  
_Type_: [VisualSubtitleLabelOptions](aws-properties-quicksight-template-visualsubtitlelabeloptions.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Title` <a name="cfn-quicksight-template-customcontentvisual-title"></a>
The title that is displayed on the visual\.  
_Required_: No  
_Type_: [VisualTitleLabelOptions](aws-properties-quicksight-template-visualtitlelabeloptions.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`VisualId` <a name="cfn-quicksight-template-customcontentvisual-visualid"></a>
The unique identifier of a visual\. This identifier must be unique within the context of a dashboard, template, or analysis\. Two dashboards, analyses, or templates can have visuals with the same identifiers\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `512`  
_Pattern_: `[\w\-]+`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
