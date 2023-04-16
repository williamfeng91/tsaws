# AWS::QuickSight::Analysis ParameterDropDownControl<a name="aws-properties-quicksight-analysis-parameterdropdowncontrol"></a>

A control to display a dropdown list with buttons that are used to select a single value\.

## Syntax<a name="aws-properties-quicksight-analysis-parameterdropdowncontrol-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-analysis-parameterdropdowncontrol-syntax.json"></a>

```
{
  "[CascadingControlConfiguration](#cfn-quicksight-analysis-parameterdropdowncontrol-cascadingcontrolconfiguration)" : CascadingControlConfiguration,
  "[DisplayOptions](#cfn-quicksight-analysis-parameterdropdowncontrol-displayoptions)" : DropDownControlDisplayOptions,
  "[ParameterControlId](#cfn-quicksight-analysis-parameterdropdowncontrol-parametercontrolid)" : String,
  "[SelectableValues](#cfn-quicksight-analysis-parameterdropdowncontrol-selectablevalues)" : ParameterSelectableValues,
  "[SourceParameterName](#cfn-quicksight-analysis-parameterdropdowncontrol-sourceparametername)" : String,
  "[Title](#cfn-quicksight-analysis-parameterdropdowncontrol-title)" : String,
  "[Type](#cfn-quicksight-analysis-parameterdropdowncontrol-type)" : String
}
```

### YAML<a name="aws-properties-quicksight-analysis-parameterdropdowncontrol-syntax.yaml"></a>

```
  [CascadingControlConfiguration](#cfn-quicksight-analysis-parameterdropdowncontrol-cascadingcontrolconfiguration):
    CascadingControlConfiguration
  [DisplayOptions](#cfn-quicksight-analysis-parameterdropdowncontrol-displayoptions):
    DropDownControlDisplayOptions
  [ParameterControlId](#cfn-quicksight-analysis-parameterdropdowncontrol-parametercontrolid): String
  [SelectableValues](#cfn-quicksight-analysis-parameterdropdowncontrol-selectablevalues):
    ParameterSelectableValues
  [SourceParameterName](#cfn-quicksight-analysis-parameterdropdowncontrol-sourceparametername): String
  [Title](#cfn-quicksight-analysis-parameterdropdowncontrol-title): String
  [Type](#cfn-quicksight-analysis-parameterdropdowncontrol-type): String
```

## Properties<a name="aws-properties-quicksight-analysis-parameterdropdowncontrol-properties"></a>

`CascadingControlConfiguration` <a name="cfn-quicksight-analysis-parameterdropdowncontrol-cascadingcontrolconfiguration"></a>
The values that are displayed in a control can be configured to only show values that are valid based on what's selected in other controls\.  
_Required_: No  
_Type_: [CascadingControlConfiguration](aws-properties-quicksight-analysis-cascadingcontrolconfiguration.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`DisplayOptions` <a name="cfn-quicksight-analysis-parameterdropdowncontrol-displayoptions"></a>
The display options of a control\.  
_Required_: No  
_Type_: [DropDownControlDisplayOptions](aws-properties-quicksight-analysis-dropdowncontroldisplayoptions.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`ParameterControlId` <a name="cfn-quicksight-analysis-parameterdropdowncontrol-parametercontrolid"></a>
The ID of the `ParameterDropDownControl`\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `512`  
_Pattern_: `[\w\-]+`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`SelectableValues` <a name="cfn-quicksight-analysis-parameterdropdowncontrol-selectablevalues"></a>
A list of selectable values that are used in a control\.  
_Required_: No  
_Type_: [ParameterSelectableValues](aws-properties-quicksight-analysis-parameterselectablevalues.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`SourceParameterName` <a name="cfn-quicksight-analysis-parameterdropdowncontrol-sourceparametername"></a>
The source parameter name of the `ParameterDropDownControl`\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `2048`  
_Pattern_: `^[a-zA-Z0-9]+$`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Title` <a name="cfn-quicksight-analysis-parameterdropdowncontrol-title"></a>
The title of the `ParameterDropDownControl`\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `2048`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Type` <a name="cfn-quicksight-analysis-parameterdropdowncontrol-type"></a>
The type parameter name of the `ParameterDropDownControl`\.  
_Required_: No  
_Type_: String  
_Allowed values_: `MULTI_SELECT | SINGLE_SELECT`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
