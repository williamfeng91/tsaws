# AWS::QuickSight::Dashboard ParameterSliderControl<a name="aws-properties-quicksight-dashboard-parameterslidercontrol"></a>

A control to display a horizontal toggle bar\. This is used to change a value by sliding the toggle\.

## Syntax<a name="aws-properties-quicksight-dashboard-parameterslidercontrol-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-dashboard-parameterslidercontrol-syntax.json"></a>

```
{
  "[DisplayOptions](#cfn-quicksight-dashboard-parameterslidercontrol-displayoptions)" : SliderControlDisplayOptions,
  "[MaximumValue](#cfn-quicksight-dashboard-parameterslidercontrol-maximumvalue)" : Double,
  "[MinimumValue](#cfn-quicksight-dashboard-parameterslidercontrol-minimumvalue)" : Double,
  "[ParameterControlId](#cfn-quicksight-dashboard-parameterslidercontrol-parametercontrolid)" : String,
  "[SourceParameterName](#cfn-quicksight-dashboard-parameterslidercontrol-sourceparametername)" : String,
  "[StepSize](#cfn-quicksight-dashboard-parameterslidercontrol-stepsize)" : Double,
  "[Title](#cfn-quicksight-dashboard-parameterslidercontrol-title)" : String
}
```

### YAML<a name="aws-properties-quicksight-dashboard-parameterslidercontrol-syntax.yaml"></a>

```
  [DisplayOptions](#cfn-quicksight-dashboard-parameterslidercontrol-displayoptions):
    SliderControlDisplayOptions
  [MaximumValue](#cfn-quicksight-dashboard-parameterslidercontrol-maximumvalue): Double
  [MinimumValue](#cfn-quicksight-dashboard-parameterslidercontrol-minimumvalue): Double
  [ParameterControlId](#cfn-quicksight-dashboard-parameterslidercontrol-parametercontrolid): String
  [SourceParameterName](#cfn-quicksight-dashboard-parameterslidercontrol-sourceparametername): String
  [StepSize](#cfn-quicksight-dashboard-parameterslidercontrol-stepsize): Double
  [Title](#cfn-quicksight-dashboard-parameterslidercontrol-title): String
```

## Properties<a name="aws-properties-quicksight-dashboard-parameterslidercontrol-properties"></a>

`DisplayOptions` <a name="cfn-quicksight-dashboard-parameterslidercontrol-displayoptions"></a>
The display options of a control\.  
_Required_: No  
_Type_: [SliderControlDisplayOptions](aws-properties-quicksight-dashboard-slidercontroldisplayoptions.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`MaximumValue` <a name="cfn-quicksight-dashboard-parameterslidercontrol-maximumvalue"></a>
The smaller value that is displayed at the left of the slider\.  
_Required_: Yes  
_Type_: Double  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`MinimumValue` <a name="cfn-quicksight-dashboard-parameterslidercontrol-minimumvalue"></a>
The larger value that is displayed at the right of the slider\.  
_Required_: Yes  
_Type_: Double  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`ParameterControlId` <a name="cfn-quicksight-dashboard-parameterslidercontrol-parametercontrolid"></a>
The ID of the `ParameterSliderControl`\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `512`  
_Pattern_: `[\w\-]+`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`SourceParameterName` <a name="cfn-quicksight-dashboard-parameterslidercontrol-sourceparametername"></a>
The source parameter name of the `ParameterSliderControl`\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `2048`  
_Pattern_: `^[a-zA-Z0-9]+$`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`StepSize` <a name="cfn-quicksight-dashboard-parameterslidercontrol-stepsize"></a>
The number of increments that the slider bar is divided into\.  
_Required_: Yes  
_Type_: Double  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Title` <a name="cfn-quicksight-dashboard-parameterslidercontrol-title"></a>
The title of the `ParameterSliderControl`\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `2048`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)