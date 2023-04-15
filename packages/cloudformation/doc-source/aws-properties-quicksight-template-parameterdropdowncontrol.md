# AWS::QuickSight::Template ParameterDropDownControl<a name="aws-properties-quicksight-template-parameterdropdowncontrol"></a>

A control to display a dropdown list with buttons that are used to select a single value\.

## Syntax<a name="aws-properties-quicksight-template-parameterdropdowncontrol-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-template-parameterdropdowncontrol-syntax.json"></a>

```
{
  "[CascadingControlConfiguration](#cfn-quicksight-template-parameterdropdowncontrol-cascadingcontrolconfiguration)" : CascadingControlConfiguration,
  "[DisplayOptions](#cfn-quicksight-template-parameterdropdowncontrol-displayoptions)" : DropDownControlDisplayOptions,
  "[ParameterControlId](#cfn-quicksight-template-parameterdropdowncontrol-parametercontrolid)" : String,
  "[SelectableValues](#cfn-quicksight-template-parameterdropdowncontrol-selectablevalues)" : ParameterSelectableValues,
  "[SourceParameterName](#cfn-quicksight-template-parameterdropdowncontrol-sourceparametername)" : String,
  "[Title](#cfn-quicksight-template-parameterdropdowncontrol-title)" : String,
  "[Type](#cfn-quicksight-template-parameterdropdowncontrol-type)" : String
}
```

### YAML<a name="aws-properties-quicksight-template-parameterdropdowncontrol-syntax.yaml"></a>

```
  [CascadingControlConfiguration](#cfn-quicksight-template-parameterdropdowncontrol-cascadingcontrolconfiguration):
    CascadingControlConfiguration
  [DisplayOptions](#cfn-quicksight-template-parameterdropdowncontrol-displayoptions):
    DropDownControlDisplayOptions
  [ParameterControlId](#cfn-quicksight-template-parameterdropdowncontrol-parametercontrolid): String
  [SelectableValues](#cfn-quicksight-template-parameterdropdowncontrol-selectablevalues):
    ParameterSelectableValues
  [SourceParameterName](#cfn-quicksight-template-parameterdropdowncontrol-sourceparametername): String
  [Title](#cfn-quicksight-template-parameterdropdowncontrol-title): String
  [Type](#cfn-quicksight-template-parameterdropdowncontrol-type): String
```

## Properties<a name="aws-properties-quicksight-template-parameterdropdowncontrol-properties"></a>

`CascadingControlConfiguration` <a name="cfn-quicksight-template-parameterdropdowncontrol-cascadingcontrolconfiguration"></a>
The values that are displayed in a control can be configured to only show values that are valid based on what's selected in other controls\.  
_Required_: No  
_Type_: [CascadingControlConfiguration](aws-properties-quicksight-template-cascadingcontrolconfiguration.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`DisplayOptions` <a name="cfn-quicksight-template-parameterdropdowncontrol-displayoptions"></a>
The display options of a control\.  
_Required_: No  
_Type_: [DropDownControlDisplayOptions](aws-properties-quicksight-template-dropdowncontroldisplayoptions.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`ParameterControlId` <a name="cfn-quicksight-template-parameterdropdowncontrol-parametercontrolid"></a>
The ID of the `ParameterDropDownControl`\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `512`  
_Pattern_: `[\w\-]+`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`SelectableValues` <a name="cfn-quicksight-template-parameterdropdowncontrol-selectablevalues"></a>
A list of selectable values that are used in a control\.  
_Required_: No  
_Type_: [ParameterSelectableValues](aws-properties-quicksight-template-parameterselectablevalues.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`SourceParameterName` <a name="cfn-quicksight-template-parameterdropdowncontrol-sourceparametername"></a>
The source parameter name of the `ParameterDropDownControl`\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `2048`  
_Pattern_: `^[a-zA-Z0-9]+$`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Title` <a name="cfn-quicksight-template-parameterdropdowncontrol-title"></a>
The title of the `ParameterDropDownControl`\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `2048`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Type` <a name="cfn-quicksight-template-parameterdropdowncontrol-type"></a>
The type parameter name of the `ParameterDropDownControl`\.  
_Required_: No  
_Type_: String  
_Allowed values_: `MULTI_SELECT | SINGLE_SELECT`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
