# AWS::QuickSight::Template TreeMapVisual<a name="aws-properties-quicksight-template-treemapvisual"></a>

A tree map\.

For more information, see [Using tree maps](https://docs.aws.amazon.com/quicksight/latest/user/tree-map.html) in the _Amazon QuickSight User Guide_\.

## Syntax<a name="aws-properties-quicksight-template-treemapvisual-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-template-treemapvisual-syntax.json"></a>

```
{
  "[Actions](#cfn-quicksight-template-treemapvisual-actions)" : [ VisualCustomAction, ... ],
  "[ChartConfiguration](#cfn-quicksight-template-treemapvisual-chartconfiguration)" : TreeMapConfiguration,
  "[ColumnHierarchies](#cfn-quicksight-template-treemapvisual-columnhierarchies)" : [ ColumnHierarchy, ... ],
  "[Subtitle](#cfn-quicksight-template-treemapvisual-subtitle)" : VisualSubtitleLabelOptions,
  "[Title](#cfn-quicksight-template-treemapvisual-title)" : VisualTitleLabelOptions,
  "[VisualId](#cfn-quicksight-template-treemapvisual-visualid)" : String
}
```

### YAML<a name="aws-properties-quicksight-template-treemapvisual-syntax.yaml"></a>

```
  [Actions](#cfn-quicksight-template-treemapvisual-actions):
    - VisualCustomAction
  [ChartConfiguration](#cfn-quicksight-template-treemapvisual-chartconfiguration):
    TreeMapConfiguration
  [ColumnHierarchies](#cfn-quicksight-template-treemapvisual-columnhierarchies):
    - ColumnHierarchy
  [Subtitle](#cfn-quicksight-template-treemapvisual-subtitle):
    VisualSubtitleLabelOptions
  [Title](#cfn-quicksight-template-treemapvisual-title):
    VisualTitleLabelOptions
  [VisualId](#cfn-quicksight-template-treemapvisual-visualid): String
```

## Properties<a name="aws-properties-quicksight-template-treemapvisual-properties"></a>

`Actions` <a name="cfn-quicksight-template-treemapvisual-actions"></a>
The list of custom actions that are configured for a visual\.  
_Required_: No  
_Type_: List of [VisualCustomAction](aws-properties-quicksight-template-visualcustomaction.md)  
_Maximum_: `10`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`ChartConfiguration` <a name="cfn-quicksight-template-treemapvisual-chartconfiguration"></a>
The configuration settings of the visual\.  
_Required_: No  
_Type_: [TreeMapConfiguration](aws-properties-quicksight-template-treemapconfiguration.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`ColumnHierarchies` <a name="cfn-quicksight-template-treemapvisual-columnhierarchies"></a>
The column hierarchy that is used during drill\-downs and drill\-ups\.  
_Required_: No  
_Type_: List of [ColumnHierarchy](aws-properties-quicksight-template-columnhierarchy.md)  
_Maximum_: `2`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Subtitle` <a name="cfn-quicksight-template-treemapvisual-subtitle"></a>
The subtitle that is displayed on the visual\.  
_Required_: No  
_Type_: [VisualSubtitleLabelOptions](aws-properties-quicksight-template-visualsubtitlelabeloptions.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Title` <a name="cfn-quicksight-template-treemapvisual-title"></a>
The title that is displayed on the visual\.  
_Required_: No  
_Type_: [VisualTitleLabelOptions](aws-properties-quicksight-template-visualtitlelabeloptions.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`VisualId` <a name="cfn-quicksight-template-treemapvisual-visualid"></a>
The unique identifier of a visual\. This identifier must be unique within the context of a dashboard, template, or analysis\. Two dashboards, analyses, or templates can have visuals with the same identifiers\.\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `512`  
_Pattern_: `[\w\-]+`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
