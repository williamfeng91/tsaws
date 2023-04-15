# AWS::QuickSight::Dashboard ParameterDateTimePickerControl<a name="aws-properties-quicksight-dashboard-parameterdatetimepickercontrol"></a>

A control from a date parameter that specifies date and time\.

## Syntax<a name="aws-properties-quicksight-dashboard-parameterdatetimepickercontrol-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-dashboard-parameterdatetimepickercontrol-syntax.json"></a>

```
{
  "[DisplayOptions](#cfn-quicksight-dashboard-parameterdatetimepickercontrol-displayoptions)" : DateTimePickerControlDisplayOptions,
  "[ParameterControlId](#cfn-quicksight-dashboard-parameterdatetimepickercontrol-parametercontrolid)" : String,
  "[SourceParameterName](#cfn-quicksight-dashboard-parameterdatetimepickercontrol-sourceparametername)" : String,
  "[Title](#cfn-quicksight-dashboard-parameterdatetimepickercontrol-title)" : String
}
```

### YAML<a name="aws-properties-quicksight-dashboard-parameterdatetimepickercontrol-syntax.yaml"></a>

```
  [DisplayOptions](#cfn-quicksight-dashboard-parameterdatetimepickercontrol-displayoptions):
    DateTimePickerControlDisplayOptions
  [ParameterControlId](#cfn-quicksight-dashboard-parameterdatetimepickercontrol-parametercontrolid): String
  [SourceParameterName](#cfn-quicksight-dashboard-parameterdatetimepickercontrol-sourceparametername): String
  [Title](#cfn-quicksight-dashboard-parameterdatetimepickercontrol-title): String
```

## Properties<a name="aws-properties-quicksight-dashboard-parameterdatetimepickercontrol-properties"></a>

`DisplayOptions` <a name="cfn-quicksight-dashboard-parameterdatetimepickercontrol-displayoptions"></a>
The display options of a control\.  
_Required_: No  
_Type_: [DateTimePickerControlDisplayOptions](aws-properties-quicksight-dashboard-datetimepickercontroldisplayoptions.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`ParameterControlId` <a name="cfn-quicksight-dashboard-parameterdatetimepickercontrol-parametercontrolid"></a>
The ID of the `ParameterDateTimePickerControl`\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `512`  
_Pattern_: `[\w\-]+`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`SourceParameterName` <a name="cfn-quicksight-dashboard-parameterdatetimepickercontrol-sourceparametername"></a>
The name of the `ParameterDateTimePickerControl`\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `2048`  
_Pattern_: `^[a-zA-Z0-9]+$`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Title` <a name="cfn-quicksight-dashboard-parameterdatetimepickercontrol-title"></a>
The title of the `ParameterDateTimePickerControl`\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `2048`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)