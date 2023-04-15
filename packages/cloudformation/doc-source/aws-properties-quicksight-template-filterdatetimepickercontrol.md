# AWS::QuickSight::Template FilterDateTimePickerControl<a name="aws-properties-quicksight-template-filterdatetimepickercontrol"></a>

A control from a date filter that is used to specify date and time\.

## Syntax<a name="aws-properties-quicksight-template-filterdatetimepickercontrol-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-template-filterdatetimepickercontrol-syntax.json"></a>

```
{
  "[DisplayOptions](#cfn-quicksight-template-filterdatetimepickercontrol-displayoptions)" : DateTimePickerControlDisplayOptions,
  "[FilterControlId](#cfn-quicksight-template-filterdatetimepickercontrol-filtercontrolid)" : String,
  "[SourceFilterId](#cfn-quicksight-template-filterdatetimepickercontrol-sourcefilterid)" : String,
  "[Title](#cfn-quicksight-template-filterdatetimepickercontrol-title)" : String,
  "[Type](#cfn-quicksight-template-filterdatetimepickercontrol-type)" : String
}
```

### YAML<a name="aws-properties-quicksight-template-filterdatetimepickercontrol-syntax.yaml"></a>

```
  [DisplayOptions](#cfn-quicksight-template-filterdatetimepickercontrol-displayoptions):
    DateTimePickerControlDisplayOptions
  [FilterControlId](#cfn-quicksight-template-filterdatetimepickercontrol-filtercontrolid): String
  [SourceFilterId](#cfn-quicksight-template-filterdatetimepickercontrol-sourcefilterid): String
  [Title](#cfn-quicksight-template-filterdatetimepickercontrol-title): String
  [Type](#cfn-quicksight-template-filterdatetimepickercontrol-type): String
```

## Properties<a name="aws-properties-quicksight-template-filterdatetimepickercontrol-properties"></a>

`DisplayOptions` <a name="cfn-quicksight-template-filterdatetimepickercontrol-displayoptions"></a>
The display options of a control\.  
_Required_: No  
_Type_: [DateTimePickerControlDisplayOptions](aws-properties-quicksight-template-datetimepickercontroldisplayoptions.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`FilterControlId` <a name="cfn-quicksight-template-filterdatetimepickercontrol-filtercontrolid"></a>
The ID of the `FilterDateTimePickerControl`\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `512`  
_Pattern_: `[\w\-]+`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`SourceFilterId` <a name="cfn-quicksight-template-filterdatetimepickercontrol-sourcefilterid"></a>
The source filter ID of the `FilterDateTimePickerControl`\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `512`  
_Pattern_: `[\w\-]+`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Title` <a name="cfn-quicksight-template-filterdatetimepickercontrol-title"></a>
The title of the `FilterDateTimePickerControl`\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `2048`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Type` <a name="cfn-quicksight-template-filterdatetimepickercontrol-type"></a>
The date time picker type of a `FilterDateTimePickerControl`\. Choose one of the following options:

- `SINGLE_VALUED`: The filter condition is a fixed date\.
- `DATE_RANGE`: The filter condition is a date time range\.
  _Required_: No  
  _Type_: String  
  _Allowed values_: `DATE_RANGE | SINGLE_VALUED`  
  _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
