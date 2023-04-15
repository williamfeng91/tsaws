# AWS::QuickSight::Template FilterRelativeDateTimeControl<a name="aws-properties-quicksight-template-filterrelativedatetimecontrol"></a>

A control from a date filter that is used to specify the relative date\.

## Syntax<a name="aws-properties-quicksight-template-filterrelativedatetimecontrol-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-template-filterrelativedatetimecontrol-syntax.json"></a>

```
{
  "[DisplayOptions](#cfn-quicksight-template-filterrelativedatetimecontrol-displayoptions)" : RelativeDateTimeControlDisplayOptions,
  "[FilterControlId](#cfn-quicksight-template-filterrelativedatetimecontrol-filtercontrolid)" : String,
  "[SourceFilterId](#cfn-quicksight-template-filterrelativedatetimecontrol-sourcefilterid)" : String,
  "[Title](#cfn-quicksight-template-filterrelativedatetimecontrol-title)" : String
}
```

### YAML<a name="aws-properties-quicksight-template-filterrelativedatetimecontrol-syntax.yaml"></a>

```
  [DisplayOptions](#cfn-quicksight-template-filterrelativedatetimecontrol-displayoptions):
    RelativeDateTimeControlDisplayOptions
  [FilterControlId](#cfn-quicksight-template-filterrelativedatetimecontrol-filtercontrolid): String
  [SourceFilterId](#cfn-quicksight-template-filterrelativedatetimecontrol-sourcefilterid): String
  [Title](#cfn-quicksight-template-filterrelativedatetimecontrol-title): String
```

## Properties<a name="aws-properties-quicksight-template-filterrelativedatetimecontrol-properties"></a>

`DisplayOptions` <a name="cfn-quicksight-template-filterrelativedatetimecontrol-displayoptions"></a>
The display options of a control\.  
_Required_: No  
_Type_: [RelativeDateTimeControlDisplayOptions](aws-properties-quicksight-template-relativedatetimecontroldisplayoptions.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`FilterControlId` <a name="cfn-quicksight-template-filterrelativedatetimecontrol-filtercontrolid"></a>
The ID of the `FilterTextAreaControl`\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `512`  
_Pattern_: `[\w\-]+`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`SourceFilterId` <a name="cfn-quicksight-template-filterrelativedatetimecontrol-sourcefilterid"></a>
The source filter ID of the `FilterTextAreaControl`\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `512`  
_Pattern_: `[\w\-]+`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Title` <a name="cfn-quicksight-template-filterrelativedatetimecontrol-title"></a>
The title of the `FilterTextAreaControl`\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `2048`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
