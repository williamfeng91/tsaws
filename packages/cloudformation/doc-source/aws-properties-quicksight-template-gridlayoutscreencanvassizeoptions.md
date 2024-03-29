# AWS::QuickSight::Template GridLayoutScreenCanvasSizeOptions<a name="aws-properties-quicksight-template-gridlayoutscreencanvassizeoptions"></a>

The options that determine the sizing of the canvas used in a grid layout\.

## Syntax<a name="aws-properties-quicksight-template-gridlayoutscreencanvassizeoptions-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-template-gridlayoutscreencanvassizeoptions-syntax.json"></a>

```
{
  "[OptimizedViewPortWidth](#cfn-quicksight-template-gridlayoutscreencanvassizeoptions-optimizedviewportwidth)" : String,
  "[ResizeOption](#cfn-quicksight-template-gridlayoutscreencanvassizeoptions-resizeoption)" : String
}
```

### YAML<a name="aws-properties-quicksight-template-gridlayoutscreencanvassizeoptions-syntax.yaml"></a>

```
  [OptimizedViewPortWidth](#cfn-quicksight-template-gridlayoutscreencanvassizeoptions-optimizedviewportwidth): String
  [ResizeOption](#cfn-quicksight-template-gridlayoutscreencanvassizeoptions-resizeoption): String
```

## Properties<a name="aws-properties-quicksight-template-gridlayoutscreencanvassizeoptions-properties"></a>

`OptimizedViewPortWidth` <a name="cfn-quicksight-template-gridlayoutscreencanvassizeoptions-optimizedviewportwidth"></a>
The width that the view port will be optimized for when the layout renders\.  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`ResizeOption` <a name="cfn-quicksight-template-gridlayoutscreencanvassizeoptions-resizeoption"></a>
This value determines the layout behavior when the viewport is resized\.

- `FIXED`: A fixed width will be used when optimizing the layout\. In the Amazon QuickSight console, this option is called `Classic`\.
- `RESPONSIVE`: The width of the canvas will be responsive and optimized to the view port\. In the Amazon QuickSight console, this option is called `Tiled`\.
  _Required_: Yes  
  _Type_: String  
  _Allowed values_: `FIXED | RESPONSIVE`  
  _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
