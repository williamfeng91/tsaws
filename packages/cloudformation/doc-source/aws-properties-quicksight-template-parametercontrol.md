# AWS::QuickSight::Template ParameterControl<a name="aws-properties-quicksight-template-parametercontrol"></a>

The control of a parameter that users can interact with in a dashboard or an analysis\.

This is a union type structure\. For this structure to be valid, only one of the attributes can be defined\.

## Syntax<a name="aws-properties-quicksight-template-parametercontrol-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-template-parametercontrol-syntax.json"></a>

```
{
  "[DateTimePicker](#cfn-quicksight-template-parametercontrol-datetimepicker)" : ParameterDateTimePickerControl,
  "[Dropdown](#cfn-quicksight-template-parametercontrol-dropdown)" : ParameterDropDownControl,
  "[List](#cfn-quicksight-template-parametercontrol-list)" : ParameterListControl,
  "[Slider](#cfn-quicksight-template-parametercontrol-slider)" : ParameterSliderControl,
  "[TextArea](#cfn-quicksight-template-parametercontrol-textarea)" : ParameterTextAreaControl,
  "[TextField](#cfn-quicksight-template-parametercontrol-textfield)" : ParameterTextFieldControl
}
```

### YAML<a name="aws-properties-quicksight-template-parametercontrol-syntax.yaml"></a>

```
  [DateTimePicker](#cfn-quicksight-template-parametercontrol-datetimepicker):
    ParameterDateTimePickerControl
  [Dropdown](#cfn-quicksight-template-parametercontrol-dropdown):
    ParameterDropDownControl
  [List](#cfn-quicksight-template-parametercontrol-list):
    ParameterListControl
  [Slider](#cfn-quicksight-template-parametercontrol-slider):
    ParameterSliderControl
  [TextArea](#cfn-quicksight-template-parametercontrol-textarea):
    ParameterTextAreaControl
  [TextField](#cfn-quicksight-template-parametercontrol-textfield):
    ParameterTextFieldControl
```

## Properties<a name="aws-properties-quicksight-template-parametercontrol-properties"></a>

`DateTimePicker` <a name="cfn-quicksight-template-parametercontrol-datetimepicker"></a>
A control from a date parameter that specifies date and time\.  
_Required_: No  
_Type_: [ParameterDateTimePickerControl](aws-properties-quicksight-template-parameterdatetimepickercontrol.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Dropdown` <a name="cfn-quicksight-template-parametercontrol-dropdown"></a>
A control to display a dropdown list with buttons that are used to select a single value\.  
_Required_: No  
_Type_: [ParameterDropDownControl](aws-properties-quicksight-template-parameterdropdowncontrol.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`List` <a name="cfn-quicksight-template-parametercontrol-list"></a>
A control to display a list with buttons or boxes that are used to select either a single value or multiple values\.  
_Required_: No  
_Type_: [ParameterListControl](aws-properties-quicksight-template-parameterlistcontrol.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Slider` <a name="cfn-quicksight-template-parametercontrol-slider"></a>
A control to display a horizontal toggle bar\. This is used to change a value by sliding the toggle\.  
_Required_: No  
_Type_: [ParameterSliderControl](aws-properties-quicksight-template-parameterslidercontrol.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`TextArea` <a name="cfn-quicksight-template-parametercontrol-textarea"></a>
A control to display a text box that is used to enter multiple entries\.  
_Required_: No  
_Type_: [ParameterTextAreaControl](aws-properties-quicksight-template-parametertextareacontrol.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`TextField` <a name="cfn-quicksight-template-parametercontrol-textfield"></a>
A control to display a text box that is used to enter a single entry\.  
_Required_: No  
_Type_: [ParameterTextFieldControl](aws-properties-quicksight-template-parametertextfieldcontrol.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
