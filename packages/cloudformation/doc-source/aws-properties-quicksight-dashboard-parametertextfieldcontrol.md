# AWS::QuickSight::Dashboard ParameterTextFieldControl<a name="aws-properties-quicksight-dashboard-parametertextfieldcontrol"></a>

A control to display a text box that is used to enter a single entry\.

## Syntax<a name="aws-properties-quicksight-dashboard-parametertextfieldcontrol-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-dashboard-parametertextfieldcontrol-syntax.json"></a>

```
{
  "[DisplayOptions](#cfn-quicksight-dashboard-parametertextfieldcontrol-displayoptions)" : TextFieldControlDisplayOptions,
  "[ParameterControlId](#cfn-quicksight-dashboard-parametertextfieldcontrol-parametercontrolid)" : String,
  "[SourceParameterName](#cfn-quicksight-dashboard-parametertextfieldcontrol-sourceparametername)" : String,
  "[Title](#cfn-quicksight-dashboard-parametertextfieldcontrol-title)" : String
}
```

### YAML<a name="aws-properties-quicksight-dashboard-parametertextfieldcontrol-syntax.yaml"></a>

```
  [DisplayOptions](#cfn-quicksight-dashboard-parametertextfieldcontrol-displayoptions):
    TextFieldControlDisplayOptions
  [ParameterControlId](#cfn-quicksight-dashboard-parametertextfieldcontrol-parametercontrolid): String
  [SourceParameterName](#cfn-quicksight-dashboard-parametertextfieldcontrol-sourceparametername): String
  [Title](#cfn-quicksight-dashboard-parametertextfieldcontrol-title): String
```

## Properties<a name="aws-properties-quicksight-dashboard-parametertextfieldcontrol-properties"></a>

`DisplayOptions` <a name="cfn-quicksight-dashboard-parametertextfieldcontrol-displayoptions"></a>
The display options of a control\.  
_Required_: No  
_Type_: [TextFieldControlDisplayOptions](aws-properties-quicksight-dashboard-textfieldcontroldisplayoptions.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`ParameterControlId` <a name="cfn-quicksight-dashboard-parametertextfieldcontrol-parametercontrolid"></a>
The ID of the `ParameterTextFieldControl`\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `512`  
_Pattern_: `[\w\-]+`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`SourceParameterName` <a name="cfn-quicksight-dashboard-parametertextfieldcontrol-sourceparametername"></a>
The source parameter name of the `ParameterTextFieldControl`\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `2048`  
_Pattern_: `^[a-zA-Z0-9]+$`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Title` <a name="cfn-quicksight-dashboard-parametertextfieldcontrol-title"></a>
The title of the `ParameterTextFieldControl`\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `2048`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)