# AWS::QuickSight::Analysis FilterSliderControl<a name="aws-properties-quicksight-analysis-filterslidercontrol"></a>

A control to display a horizontal toggle bar\. This is used to change a value by sliding the toggle\.

## Syntax<a name="aws-properties-quicksight-analysis-filterslidercontrol-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-analysis-filterslidercontrol-syntax.json"></a>

```
{
  "[DisplayOptions](#cfn-quicksight-analysis-filterslidercontrol-displayoptions)" : SliderControlDisplayOptions,
  "[FilterControlId](#cfn-quicksight-analysis-filterslidercontrol-filtercontrolid)" : String,
  "[MaximumValue](#cfn-quicksight-analysis-filterslidercontrol-maximumvalue)" : Double,
  "[MinimumValue](#cfn-quicksight-analysis-filterslidercontrol-minimumvalue)" : Double,
  "[SourceFilterId](#cfn-quicksight-analysis-filterslidercontrol-sourcefilterid)" : String,
  "[StepSize](#cfn-quicksight-analysis-filterslidercontrol-stepsize)" : Double,
  "[Title](#cfn-quicksight-analysis-filterslidercontrol-title)" : String,
  "[Type](#cfn-quicksight-analysis-filterslidercontrol-type)" : String
}
```

### YAML<a name="aws-properties-quicksight-analysis-filterslidercontrol-syntax.yaml"></a>

```
  [DisplayOptions](#cfn-quicksight-analysis-filterslidercontrol-displayoptions):
    SliderControlDisplayOptions
  [FilterControlId](#cfn-quicksight-analysis-filterslidercontrol-filtercontrolid): String
  [MaximumValue](#cfn-quicksight-analysis-filterslidercontrol-maximumvalue): Double
  [MinimumValue](#cfn-quicksight-analysis-filterslidercontrol-minimumvalue): Double
  [SourceFilterId](#cfn-quicksight-analysis-filterslidercontrol-sourcefilterid): String
  [StepSize](#cfn-quicksight-analysis-filterslidercontrol-stepsize): Double
  [Title](#cfn-quicksight-analysis-filterslidercontrol-title): String
  [Type](#cfn-quicksight-analysis-filterslidercontrol-type): String
```

## Properties<a name="aws-properties-quicksight-analysis-filterslidercontrol-properties"></a>

`DisplayOptions` <a name="cfn-quicksight-analysis-filterslidercontrol-displayoptions"></a>
The display options of a control\.  
_Required_: No  
_Type_: [SliderControlDisplayOptions](aws-properties-quicksight-analysis-slidercontroldisplayoptions.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`FilterControlId` <a name="cfn-quicksight-analysis-filterslidercontrol-filtercontrolid"></a>
The ID of the `FilterSliderControl`\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `512`  
_Pattern_: `[\w\-]+`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`MaximumValue` <a name="cfn-quicksight-analysis-filterslidercontrol-maximumvalue"></a>
The smaller value that is displayed at the left of the slider\.  
_Required_: Yes  
_Type_: Double  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`MinimumValue` <a name="cfn-quicksight-analysis-filterslidercontrol-minimumvalue"></a>
The larger value that is displayed at the right of the slider\.  
_Required_: Yes  
_Type_: Double  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`SourceFilterId` <a name="cfn-quicksight-analysis-filterslidercontrol-sourcefilterid"></a>
The source filter ID of the `FilterSliderControl`\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `512`  
_Pattern_: `[\w\-]+`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`StepSize` <a name="cfn-quicksight-analysis-filterslidercontrol-stepsize"></a>
The number of increments that the slider bar is divided into\.  
_Required_: Yes  
_Type_: Double  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Title` <a name="cfn-quicksight-analysis-filterslidercontrol-title"></a>
The title of the `FilterSliderControl`\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `2048`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Type` <a name="cfn-quicksight-analysis-filterslidercontrol-type"></a>
The type of `FilterSliderControl`\. Choose one of the following options:

- `SINGLE_POINT`: Filter against\(equals\) a single data point\.
- `RANGE`: Filter data that is in a specified range\.
  _Required_: No  
  _Type_: String  
  _Allowed values_: `RANGE | SINGLE_POINT`  
  _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
