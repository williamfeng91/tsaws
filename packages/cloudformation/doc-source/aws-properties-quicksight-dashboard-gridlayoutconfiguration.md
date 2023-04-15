# AWS::QuickSight::Dashboard GridLayoutConfiguration<a name="aws-properties-quicksight-dashboard-gridlayoutconfiguration"></a>

The configuration for a grid layout\. Also called a tiled layout\.

Visuals snap to a grid with standard spacing and alignment\. Dashboards are displayed as designed, with options to fit to screen or view at actual size\.

## Syntax<a name="aws-properties-quicksight-dashboard-gridlayoutconfiguration-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-dashboard-gridlayoutconfiguration-syntax.json"></a>

```
{
  "[CanvasSizeOptions](#cfn-quicksight-dashboard-gridlayoutconfiguration-canvassizeoptions)" : GridLayoutCanvasSizeOptions,
  "[Elements](#cfn-quicksight-dashboard-gridlayoutconfiguration-elements)" : [ GridLayoutElement, ... ]
}
```

### YAML<a name="aws-properties-quicksight-dashboard-gridlayoutconfiguration-syntax.yaml"></a>

```
  [CanvasSizeOptions](#cfn-quicksight-dashboard-gridlayoutconfiguration-canvassizeoptions):
    GridLayoutCanvasSizeOptions
  [Elements](#cfn-quicksight-dashboard-gridlayoutconfiguration-elements):
    - GridLayoutElement
```

## Properties<a name="aws-properties-quicksight-dashboard-gridlayoutconfiguration-properties"></a>

`CanvasSizeOptions` <a name="cfn-quicksight-dashboard-gridlayoutconfiguration-canvassizeoptions"></a>
Property description not available\.  
_Required_: No  
_Type_: [GridLayoutCanvasSizeOptions](aws-properties-quicksight-dashboard-gridlayoutcanvassizeoptions.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Elements` <a name="cfn-quicksight-dashboard-gridlayoutconfiguration-elements"></a>
The elements that are included in a grid layout\.  
_Required_: Yes  
_Type_: List of [GridLayoutElement](aws-properties-quicksight-dashboard-gridlayoutelement.md)  
_Maximum_: `430`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
