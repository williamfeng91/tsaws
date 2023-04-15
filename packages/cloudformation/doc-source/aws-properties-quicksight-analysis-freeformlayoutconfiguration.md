# AWS::QuickSight::Analysis FreeFormLayoutConfiguration<a name="aws-properties-quicksight-analysis-freeformlayoutconfiguration"></a>

The configuration of a free\-form layout\.

## Syntax<a name="aws-properties-quicksight-analysis-freeformlayoutconfiguration-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-analysis-freeformlayoutconfiguration-syntax.json"></a>

```
{
  "[CanvasSizeOptions](#cfn-quicksight-analysis-freeformlayoutconfiguration-canvassizeoptions)" : FreeFormLayoutCanvasSizeOptions,
  "[Elements](#cfn-quicksight-analysis-freeformlayoutconfiguration-elements)" : [ FreeFormLayoutElement, ... ]
}
```

### YAML<a name="aws-properties-quicksight-analysis-freeformlayoutconfiguration-syntax.yaml"></a>

```
  [CanvasSizeOptions](#cfn-quicksight-analysis-freeformlayoutconfiguration-canvassizeoptions):
    FreeFormLayoutCanvasSizeOptions
  [Elements](#cfn-quicksight-analysis-freeformlayoutconfiguration-elements):
    - FreeFormLayoutElement
```

## Properties<a name="aws-properties-quicksight-analysis-freeformlayoutconfiguration-properties"></a>

`CanvasSizeOptions` <a name="cfn-quicksight-analysis-freeformlayoutconfiguration-canvassizeoptions"></a>
Property description not available\.  
_Required_: No  
_Type_: [FreeFormLayoutCanvasSizeOptions](aws-properties-quicksight-analysis-freeformlayoutcanvassizeoptions.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Elements` <a name="cfn-quicksight-analysis-freeformlayoutconfiguration-elements"></a>
The elements that are included in a free\-form layout\.  
_Required_: Yes  
_Type_: List of [FreeFormLayoutElement](aws-properties-quicksight-analysis-freeformlayoutelement.md)  
_Maximum_: `430`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
