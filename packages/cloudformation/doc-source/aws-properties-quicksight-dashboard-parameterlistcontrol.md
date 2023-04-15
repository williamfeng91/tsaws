# AWS::QuickSight::Dashboard ParameterListControl<a name="aws-properties-quicksight-dashboard-parameterlistcontrol"></a>

A control to display a list with buttons or boxes that are used to select either a single value or multiple values\.

## Syntax<a name="aws-properties-quicksight-dashboard-parameterlistcontrol-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-dashboard-parameterlistcontrol-syntax.json"></a>

```
{
  "[CascadingControlConfiguration](#cfn-quicksight-dashboard-parameterlistcontrol-cascadingcontrolconfiguration)" : CascadingControlConfiguration,
  "[DisplayOptions](#cfn-quicksight-dashboard-parameterlistcontrol-displayoptions)" : ListControlDisplayOptions,
  "[ParameterControlId](#cfn-quicksight-dashboard-parameterlistcontrol-parametercontrolid)" : String,
  "[SelectableValues](#cfn-quicksight-dashboard-parameterlistcontrol-selectablevalues)" : ParameterSelectableValues,
  "[SourceParameterName](#cfn-quicksight-dashboard-parameterlistcontrol-sourceparametername)" : String,
  "[Title](#cfn-quicksight-dashboard-parameterlistcontrol-title)" : String,
  "[Type](#cfn-quicksight-dashboard-parameterlistcontrol-type)" : String
}
```

### YAML<a name="aws-properties-quicksight-dashboard-parameterlistcontrol-syntax.yaml"></a>

```
  [CascadingControlConfiguration](#cfn-quicksight-dashboard-parameterlistcontrol-cascadingcontrolconfiguration):
    CascadingControlConfiguration
  [DisplayOptions](#cfn-quicksight-dashboard-parameterlistcontrol-displayoptions):
    ListControlDisplayOptions
  [ParameterControlId](#cfn-quicksight-dashboard-parameterlistcontrol-parametercontrolid): String
  [SelectableValues](#cfn-quicksight-dashboard-parameterlistcontrol-selectablevalues):
    ParameterSelectableValues
  [SourceParameterName](#cfn-quicksight-dashboard-parameterlistcontrol-sourceparametername): String
  [Title](#cfn-quicksight-dashboard-parameterlistcontrol-title): String
  [Type](#cfn-quicksight-dashboard-parameterlistcontrol-type): String
```

## Properties<a name="aws-properties-quicksight-dashboard-parameterlistcontrol-properties"></a>

`CascadingControlConfiguration` <a name="cfn-quicksight-dashboard-parameterlistcontrol-cascadingcontrolconfiguration"></a>
The values that are displayed in a control can be configured to only show values that are valid based on what's selected in other controls\.  
_Required_: No  
_Type_: [CascadingControlConfiguration](aws-properties-quicksight-dashboard-cascadingcontrolconfiguration.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`DisplayOptions` <a name="cfn-quicksight-dashboard-parameterlistcontrol-displayoptions"></a>
The display options of a control\.  
_Required_: No  
_Type_: [ListControlDisplayOptions](aws-properties-quicksight-dashboard-listcontroldisplayoptions.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`ParameterControlId` <a name="cfn-quicksight-dashboard-parameterlistcontrol-parametercontrolid"></a>
The ID of the `ParameterListControl`\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `512`  
_Pattern_: `[\w\-]+`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`SelectableValues` <a name="cfn-quicksight-dashboard-parameterlistcontrol-selectablevalues"></a>
A list of selectable values that are used in a control\.  
_Required_: No  
_Type_: [ParameterSelectableValues](aws-properties-quicksight-dashboard-parameterselectablevalues.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`SourceParameterName` <a name="cfn-quicksight-dashboard-parameterlistcontrol-sourceparametername"></a>
The source parameter name of the `ParameterListControl`\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `2048`  
_Pattern_: `^[a-zA-Z0-9]+$`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Title` <a name="cfn-quicksight-dashboard-parameterlistcontrol-title"></a>
The title of the `ParameterListControl`\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `2048`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Type` <a name="cfn-quicksight-dashboard-parameterlistcontrol-type"></a>
The type of `ParameterListControl`\.  
_Required_: No  
_Type_: String  
_Allowed values_: `MULTI_SELECT | SINGLE_SELECT`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
