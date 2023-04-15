# AWS::QuickSight::Analysis ParameterListControl<a name="aws-properties-quicksight-analysis-parameterlistcontrol"></a>

A control to display a list with buttons or boxes that are used to select either a single value or multiple values\.

## Syntax<a name="aws-properties-quicksight-analysis-parameterlistcontrol-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-analysis-parameterlistcontrol-syntax.json"></a>

```
{
  "[CascadingControlConfiguration](#cfn-quicksight-analysis-parameterlistcontrol-cascadingcontrolconfiguration)" : CascadingControlConfiguration,
  "[DisplayOptions](#cfn-quicksight-analysis-parameterlistcontrol-displayoptions)" : ListControlDisplayOptions,
  "[ParameterControlId](#cfn-quicksight-analysis-parameterlistcontrol-parametercontrolid)" : String,
  "[SelectableValues](#cfn-quicksight-analysis-parameterlistcontrol-selectablevalues)" : ParameterSelectableValues,
  "[SourceParameterName](#cfn-quicksight-analysis-parameterlistcontrol-sourceparametername)" : String,
  "[Title](#cfn-quicksight-analysis-parameterlistcontrol-title)" : String,
  "[Type](#cfn-quicksight-analysis-parameterlistcontrol-type)" : String
}
```

### YAML<a name="aws-properties-quicksight-analysis-parameterlistcontrol-syntax.yaml"></a>

```
  [CascadingControlConfiguration](#cfn-quicksight-analysis-parameterlistcontrol-cascadingcontrolconfiguration):
    CascadingControlConfiguration
  [DisplayOptions](#cfn-quicksight-analysis-parameterlistcontrol-displayoptions):
    ListControlDisplayOptions
  [ParameterControlId](#cfn-quicksight-analysis-parameterlistcontrol-parametercontrolid): String
  [SelectableValues](#cfn-quicksight-analysis-parameterlistcontrol-selectablevalues):
    ParameterSelectableValues
  [SourceParameterName](#cfn-quicksight-analysis-parameterlistcontrol-sourceparametername): String
  [Title](#cfn-quicksight-analysis-parameterlistcontrol-title): String
  [Type](#cfn-quicksight-analysis-parameterlistcontrol-type): String
```

## Properties<a name="aws-properties-quicksight-analysis-parameterlistcontrol-properties"></a>

`CascadingControlConfiguration` <a name="cfn-quicksight-analysis-parameterlistcontrol-cascadingcontrolconfiguration"></a>
The values that are displayed in a control can be configured to only show values that are valid based on what's selected in other controls\.  
_Required_: No  
_Type_: [CascadingControlConfiguration](aws-properties-quicksight-analysis-cascadingcontrolconfiguration.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`DisplayOptions` <a name="cfn-quicksight-analysis-parameterlistcontrol-displayoptions"></a>
The display options of a control\.  
_Required_: No  
_Type_: [ListControlDisplayOptions](aws-properties-quicksight-analysis-listcontroldisplayoptions.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`ParameterControlId` <a name="cfn-quicksight-analysis-parameterlistcontrol-parametercontrolid"></a>
The ID of the `ParameterListControl`\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `512`  
_Pattern_: `[\w\-]+`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`SelectableValues` <a name="cfn-quicksight-analysis-parameterlistcontrol-selectablevalues"></a>
A list of selectable values that are used in a control\.  
_Required_: No  
_Type_: [ParameterSelectableValues](aws-properties-quicksight-analysis-parameterselectablevalues.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`SourceParameterName` <a name="cfn-quicksight-analysis-parameterlistcontrol-sourceparametername"></a>
The source parameter name of the `ParameterListControl`\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `2048`  
_Pattern_: `^[a-zA-Z0-9]+$`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Title` <a name="cfn-quicksight-analysis-parameterlistcontrol-title"></a>
The title of the `ParameterListControl`\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `2048`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Type` <a name="cfn-quicksight-analysis-parameterlistcontrol-type"></a>
The type of `ParameterListControl`\.  
_Required_: No  
_Type_: String  
_Allowed values_: `MULTI_SELECT | SINGLE_SELECT`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
