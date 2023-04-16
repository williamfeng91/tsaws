# AWS::QuickSight::Dashboard FilterControl<a name="aws-properties-quicksight-dashboard-filtercontrol"></a>

The control of a filter that is used to interact with a dashboard or an analysis\.

This is a union type structure\. For this structure to be valid, only one of the attributes can be defined\.

## Syntax<a name="aws-properties-quicksight-dashboard-filtercontrol-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-dashboard-filtercontrol-syntax.json"></a>

```
{
  "[DateTimePicker](#cfn-quicksight-dashboard-filtercontrol-datetimepicker)" : FilterDateTimePickerControl,
  "[Dropdown](#cfn-quicksight-dashboard-filtercontrol-dropdown)" : FilterDropDownControl,
  "[List](#cfn-quicksight-dashboard-filtercontrol-list)" : FilterListControl,
  "[RelativeDateTime](#cfn-quicksight-dashboard-filtercontrol-relativedatetime)" : FilterRelativeDateTimeControl,
  "[Slider](#cfn-quicksight-dashboard-filtercontrol-slider)" : FilterSliderControl,
  "[TextArea](#cfn-quicksight-dashboard-filtercontrol-textarea)" : FilterTextAreaControl,
  "[TextField](#cfn-quicksight-dashboard-filtercontrol-textfield)" : FilterTextFieldControl
}
```

### YAML<a name="aws-properties-quicksight-dashboard-filtercontrol-syntax.yaml"></a>

```
  [DateTimePicker](#cfn-quicksight-dashboard-filtercontrol-datetimepicker):
    FilterDateTimePickerControl
  [Dropdown](#cfn-quicksight-dashboard-filtercontrol-dropdown):
    FilterDropDownControl
  [List](#cfn-quicksight-dashboard-filtercontrol-list):
    FilterListControl
  [RelativeDateTime](#cfn-quicksight-dashboard-filtercontrol-relativedatetime):
    FilterRelativeDateTimeControl
  [Slider](#cfn-quicksight-dashboard-filtercontrol-slider):
    FilterSliderControl
  [TextArea](#cfn-quicksight-dashboard-filtercontrol-textarea):
    FilterTextAreaControl
  [TextField](#cfn-quicksight-dashboard-filtercontrol-textfield):
    FilterTextFieldControl
```

## Properties<a name="aws-properties-quicksight-dashboard-filtercontrol-properties"></a>

`DateTimePicker` <a name="cfn-quicksight-dashboard-filtercontrol-datetimepicker"></a>
A control from a date filter that is used to specify date and time\.  
_Required_: No  
_Type_: [FilterDateTimePickerControl](aws-properties-quicksight-dashboard-filterdatetimepickercontrol.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Dropdown` <a name="cfn-quicksight-dashboard-filtercontrol-dropdown"></a>
A control to display a dropdown list with buttons that are used to select a single value\.  
_Required_: No  
_Type_: [FilterDropDownControl](aws-properties-quicksight-dashboard-filterdropdowncontrol.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`List` <a name="cfn-quicksight-dashboard-filtercontrol-list"></a>
A control to display a list of buttons or boxes\. This is used to select either a single value or multiple values\.  
_Required_: No  
_Type_: [FilterListControl](aws-properties-quicksight-dashboard-filterlistcontrol.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`RelativeDateTime` <a name="cfn-quicksight-dashboard-filtercontrol-relativedatetime"></a>
A control from a date filter that is used to specify the relative date\.  
_Required_: No  
_Type_: [FilterRelativeDateTimeControl](aws-properties-quicksight-dashboard-filterrelativedatetimecontrol.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Slider` <a name="cfn-quicksight-dashboard-filtercontrol-slider"></a>
A control to display a horizontal toggle bar\. This is used to change a value by sliding the toggle\.  
_Required_: No  
_Type_: [FilterSliderControl](aws-properties-quicksight-dashboard-filterslidercontrol.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`TextArea` <a name="cfn-quicksight-dashboard-filtercontrol-textarea"></a>
A control to display a text box that is used to enter multiple entries\.  
_Required_: No  
_Type_: [FilterTextAreaControl](aws-properties-quicksight-dashboard-filtertextareacontrol.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`TextField` <a name="cfn-quicksight-dashboard-filtercontrol-textfield"></a>
A control to display a text box that is used to enter a single entry\.  
_Required_: No  
_Type_: [FilterTextFieldControl](aws-properties-quicksight-dashboard-filtertextfieldcontrol.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
