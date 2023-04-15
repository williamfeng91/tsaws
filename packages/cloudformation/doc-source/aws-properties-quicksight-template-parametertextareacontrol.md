# AWS::QuickSight::Template ParameterTextAreaControl<a name="aws-properties-quicksight-template-parametertextareacontrol"></a>

A control to display a text box that is used to enter multiple entries\.

## Syntax<a name="aws-properties-quicksight-template-parametertextareacontrol-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-template-parametertextareacontrol-syntax.json"></a>

```
{
  "[Delimiter](#cfn-quicksight-template-parametertextareacontrol-delimiter)" : String,
  "[DisplayOptions](#cfn-quicksight-template-parametertextareacontrol-displayoptions)" : TextAreaControlDisplayOptions,
  "[ParameterControlId](#cfn-quicksight-template-parametertextareacontrol-parametercontrolid)" : String,
  "[SourceParameterName](#cfn-quicksight-template-parametertextareacontrol-sourceparametername)" : String,
  "[Title](#cfn-quicksight-template-parametertextareacontrol-title)" : String
}
```

### YAML<a name="aws-properties-quicksight-template-parametertextareacontrol-syntax.yaml"></a>

```
  [Delimiter](#cfn-quicksight-template-parametertextareacontrol-delimiter): String
  [DisplayOptions](#cfn-quicksight-template-parametertextareacontrol-displayoptions):
    TextAreaControlDisplayOptions
  [ParameterControlId](#cfn-quicksight-template-parametertextareacontrol-parametercontrolid): String
  [SourceParameterName](#cfn-quicksight-template-parametertextareacontrol-sourceparametername): String
  [Title](#cfn-quicksight-template-parametertextareacontrol-title): String
```

## Properties<a name="aws-properties-quicksight-template-parametertextareacontrol-properties"></a>

`Delimiter` <a name="cfn-quicksight-template-parametertextareacontrol-delimiter"></a>
The delimiter that is used to separate the lines in text\.  
_Required_: No  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `2048`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`DisplayOptions` <a name="cfn-quicksight-template-parametertextareacontrol-displayoptions"></a>
The display options of a control\.  
_Required_: No  
_Type_: [TextAreaControlDisplayOptions](aws-properties-quicksight-template-textareacontroldisplayoptions.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`ParameterControlId` <a name="cfn-quicksight-template-parametertextareacontrol-parametercontrolid"></a>
The ID of the `ParameterTextAreaControl`\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `512`  
_Pattern_: `[\w\-]+`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`SourceParameterName` <a name="cfn-quicksight-template-parametertextareacontrol-sourceparametername"></a>
The source parameter name of the `ParameterTextAreaControl`\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `2048`  
_Pattern_: `^[a-zA-Z0-9]+$`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Title` <a name="cfn-quicksight-template-parametertextareacontrol-title"></a>
The title of the `ParameterTextAreaControl`\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `2048`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
