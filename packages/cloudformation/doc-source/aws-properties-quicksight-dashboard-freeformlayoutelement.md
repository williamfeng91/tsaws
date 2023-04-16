# AWS::QuickSight::Dashboard FreeFormLayoutElement<a name="aws-properties-quicksight-dashboard-freeformlayoutelement"></a>

An element within a free\-form layout\.

## Syntax<a name="aws-properties-quicksight-dashboard-freeformlayoutelement-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-dashboard-freeformlayoutelement-syntax.json"></a>

```
{
  "[BackgroundStyle](#cfn-quicksight-dashboard-freeformlayoutelement-backgroundstyle)" : FreeFormLayoutElementBackgroundStyle,
  "[BorderStyle](#cfn-quicksight-dashboard-freeformlayoutelement-borderstyle)" : FreeFormLayoutElementBorderStyle,
  "[ElementId](#cfn-quicksight-dashboard-freeformlayoutelement-elementid)" : String,
  "[ElementType](#cfn-quicksight-dashboard-freeformlayoutelement-elementtype)" : String,
  "[Height](#cfn-quicksight-dashboard-freeformlayoutelement-height)" : String,
  "[LoadingAnimation](#cfn-quicksight-dashboard-freeformlayoutelement-loadinganimation)" : LoadingAnimation,
  "[RenderingRules](#cfn-quicksight-dashboard-freeformlayoutelement-renderingrules)" : [ SheetElementRenderingRule, ... ],
  "[SelectedBorderStyle](#cfn-quicksight-dashboard-freeformlayoutelement-selectedborderstyle)" : FreeFormLayoutElementBorderStyle,
  "[Visibility](#cfn-quicksight-dashboard-freeformlayoutelement-visibility)" : String,
  "[Width](#cfn-quicksight-dashboard-freeformlayoutelement-width)" : String,
  "[XAxisLocation](#cfn-quicksight-dashboard-freeformlayoutelement-xaxislocation)" : String,
  "[YAxisLocation](#cfn-quicksight-dashboard-freeformlayoutelement-yaxislocation)" : String
}
```

### YAML<a name="aws-properties-quicksight-dashboard-freeformlayoutelement-syntax.yaml"></a>

```
  [BackgroundStyle](#cfn-quicksight-dashboard-freeformlayoutelement-backgroundstyle):
    FreeFormLayoutElementBackgroundStyle
  [BorderStyle](#cfn-quicksight-dashboard-freeformlayoutelement-borderstyle):
    FreeFormLayoutElementBorderStyle
  [ElementId](#cfn-quicksight-dashboard-freeformlayoutelement-elementid): String
  [ElementType](#cfn-quicksight-dashboard-freeformlayoutelement-elementtype): String
  [Height](#cfn-quicksight-dashboard-freeformlayoutelement-height): String
  [LoadingAnimation](#cfn-quicksight-dashboard-freeformlayoutelement-loadinganimation):
    LoadingAnimation
  [RenderingRules](#cfn-quicksight-dashboard-freeformlayoutelement-renderingrules):
    - SheetElementRenderingRule
  [SelectedBorderStyle](#cfn-quicksight-dashboard-freeformlayoutelement-selectedborderstyle):
    FreeFormLayoutElementBorderStyle
  [Visibility](#cfn-quicksight-dashboard-freeformlayoutelement-visibility): String
  [Width](#cfn-quicksight-dashboard-freeformlayoutelement-width): String
  [XAxisLocation](#cfn-quicksight-dashboard-freeformlayoutelement-xaxislocation): String
  [YAxisLocation](#cfn-quicksight-dashboard-freeformlayoutelement-yaxislocation): String
```

## Properties<a name="aws-properties-quicksight-dashboard-freeformlayoutelement-properties"></a>

`BackgroundStyle` <a name="cfn-quicksight-dashboard-freeformlayoutelement-backgroundstyle"></a>
The background style configuration of a free\-form layout element\.  
_Required_: No  
_Type_: [FreeFormLayoutElementBackgroundStyle](aws-properties-quicksight-dashboard-freeformlayoutelementbackgroundstyle.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`BorderStyle` <a name="cfn-quicksight-dashboard-freeformlayoutelement-borderstyle"></a>
The border style configuration of a free\-form layout element\.  
_Required_: No  
_Type_: [FreeFormLayoutElementBorderStyle](aws-properties-quicksight-dashboard-freeformlayoutelementborderstyle.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`ElementId` <a name="cfn-quicksight-dashboard-freeformlayoutelement-elementid"></a>
A unique identifier for an element within a free\-form layout\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `512`  
_Pattern_: `[\w\-]+`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`ElementType` <a name="cfn-quicksight-dashboard-freeformlayoutelement-elementtype"></a>
The type of element\.  
_Required_: Yes  
_Type_: String  
_Allowed values_: `FILTER_CONTROL | PARAMETER_CONTROL | TEXT_BOX | VISUAL`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Height` <a name="cfn-quicksight-dashboard-freeformlayoutelement-height"></a>
The height of an element within a free\-form layout\.  
_Required_: Yes  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`LoadingAnimation` <a name="cfn-quicksight-dashboard-freeformlayoutelement-loadinganimation"></a>
The loading animation configuration of a free\-form layout element\.  
_Required_: No  
_Type_: [LoadingAnimation](aws-properties-quicksight-dashboard-loadinganimation.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`RenderingRules` <a name="cfn-quicksight-dashboard-freeformlayoutelement-renderingrules"></a>
The rendering rules that determine when an element should be displayed within a free\-form layout\.  
_Required_: No  
_Type_: List of [SheetElementRenderingRule](aws-properties-quicksight-dashboard-sheetelementrenderingrule.md)  
_Maximum_: `10000`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`SelectedBorderStyle` <a name="cfn-quicksight-dashboard-freeformlayoutelement-selectedborderstyle"></a>
The border style configuration of a free\-form layout element\. This border style is used when the element is selected\.  
_Required_: No  
_Type_: [FreeFormLayoutElementBorderStyle](aws-properties-quicksight-dashboard-freeformlayoutelementborderstyle.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Visibility` <a name="cfn-quicksight-dashboard-freeformlayoutelement-visibility"></a>
The visibility of an element within a free\-form layout\.  
_Required_: No  
_Type_: String  
_Allowed values_: `HIDDEN | VISIBLE`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Width` <a name="cfn-quicksight-dashboard-freeformlayoutelement-width"></a>
The width of an element within a free\-form layout\.  
_Required_: Yes  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`XAxisLocation` <a name="cfn-quicksight-dashboard-freeformlayoutelement-xaxislocation"></a>
The x\-axis coordinate of the element\.  
_Required_: Yes  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`YAxisLocation` <a name="cfn-quicksight-dashboard-freeformlayoutelement-yaxislocation"></a>
The y\-axis coordinate of the element\.  
_Required_: Yes  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
