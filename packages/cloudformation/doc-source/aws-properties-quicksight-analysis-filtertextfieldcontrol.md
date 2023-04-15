# AWS::QuickSight::Analysis FilterTextFieldControl<a name="aws-properties-quicksight-analysis-filtertextfieldcontrol"></a>

A control to display a text box that is used to enter a single entry\.

## Syntax<a name="aws-properties-quicksight-analysis-filtertextfieldcontrol-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-analysis-filtertextfieldcontrol-syntax.json"></a>

```
{
  "[DisplayOptions](#cfn-quicksight-analysis-filtertextfieldcontrol-displayoptions)" : TextFieldControlDisplayOptions,
  "[FilterControlId](#cfn-quicksight-analysis-filtertextfieldcontrol-filtercontrolid)" : String,
  "[SourceFilterId](#cfn-quicksight-analysis-filtertextfieldcontrol-sourcefilterid)" : String,
  "[Title](#cfn-quicksight-analysis-filtertextfieldcontrol-title)" : String
}
```

### YAML<a name="aws-properties-quicksight-analysis-filtertextfieldcontrol-syntax.yaml"></a>

```
  [DisplayOptions](#cfn-quicksight-analysis-filtertextfieldcontrol-displayoptions):
    TextFieldControlDisplayOptions
  [FilterControlId](#cfn-quicksight-analysis-filtertextfieldcontrol-filtercontrolid): String
  [SourceFilterId](#cfn-quicksight-analysis-filtertextfieldcontrol-sourcefilterid): String
  [Title](#cfn-quicksight-analysis-filtertextfieldcontrol-title): String
```

## Properties<a name="aws-properties-quicksight-analysis-filtertextfieldcontrol-properties"></a>

`DisplayOptions` <a name="cfn-quicksight-analysis-filtertextfieldcontrol-displayoptions"></a>
The display options of a control\.  
_Required_: No  
_Type_: [TextFieldControlDisplayOptions](aws-properties-quicksight-analysis-textfieldcontroldisplayoptions.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`FilterControlId` <a name="cfn-quicksight-analysis-filtertextfieldcontrol-filtercontrolid"></a>
The ID of the `FilterTextFieldControl`\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `512`  
_Pattern_: `[\w\-]+`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`SourceFilterId` <a name="cfn-quicksight-analysis-filtertextfieldcontrol-sourcefilterid"></a>
The source filter ID of the `FilterTextFieldControl`\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `512`  
_Pattern_: `[\w\-]+`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Title` <a name="cfn-quicksight-analysis-filtertextfieldcontrol-title"></a>
The title of the `FilterTextFieldControl`\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `2048`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
