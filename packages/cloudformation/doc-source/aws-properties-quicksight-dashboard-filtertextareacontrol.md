# AWS::QuickSight::Dashboard FilterTextAreaControl<a name="aws-properties-quicksight-dashboard-filtertextareacontrol"></a>

A control to display a text box that is used to enter multiple entries\.

## Syntax<a name="aws-properties-quicksight-dashboard-filtertextareacontrol-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-dashboard-filtertextareacontrol-syntax.json"></a>

```
{
  "[Delimiter](#cfn-quicksight-dashboard-filtertextareacontrol-delimiter)" : String,
  "[DisplayOptions](#cfn-quicksight-dashboard-filtertextareacontrol-displayoptions)" : TextAreaControlDisplayOptions,
  "[FilterControlId](#cfn-quicksight-dashboard-filtertextareacontrol-filtercontrolid)" : String,
  "[SourceFilterId](#cfn-quicksight-dashboard-filtertextareacontrol-sourcefilterid)" : String,
  "[Title](#cfn-quicksight-dashboard-filtertextareacontrol-title)" : String
}
```

### YAML<a name="aws-properties-quicksight-dashboard-filtertextareacontrol-syntax.yaml"></a>

```
  [Delimiter](#cfn-quicksight-dashboard-filtertextareacontrol-delimiter): String
  [DisplayOptions](#cfn-quicksight-dashboard-filtertextareacontrol-displayoptions):
    TextAreaControlDisplayOptions
  [FilterControlId](#cfn-quicksight-dashboard-filtertextareacontrol-filtercontrolid): String
  [SourceFilterId](#cfn-quicksight-dashboard-filtertextareacontrol-sourcefilterid): String
  [Title](#cfn-quicksight-dashboard-filtertextareacontrol-title): String
```

## Properties<a name="aws-properties-quicksight-dashboard-filtertextareacontrol-properties"></a>

`Delimiter` <a name="cfn-quicksight-dashboard-filtertextareacontrol-delimiter"></a>
The delimiter that is used to separate the lines in text\.  
_Required_: No  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `2048`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`DisplayOptions` <a name="cfn-quicksight-dashboard-filtertextareacontrol-displayoptions"></a>
The display options of a control\.  
_Required_: No  
_Type_: [TextAreaControlDisplayOptions](aws-properties-quicksight-dashboard-textareacontroldisplayoptions.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`FilterControlId` <a name="cfn-quicksight-dashboard-filtertextareacontrol-filtercontrolid"></a>
The ID of the `FilterTextAreaControl`\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `512`  
_Pattern_: `[\w\-]+`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`SourceFilterId` <a name="cfn-quicksight-dashboard-filtertextareacontrol-sourcefilterid"></a>
The source filter ID of the `FilterTextAreaControl`\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `512`  
_Pattern_: `[\w\-]+`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Title` <a name="cfn-quicksight-dashboard-filtertextareacontrol-title"></a>
The title of the `FilterTextAreaControl`\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `2048`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
