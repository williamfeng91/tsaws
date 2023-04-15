# AWS::QuickSight::Template FilterListControl<a name="aws-properties-quicksight-template-filterlistcontrol"></a>

A control to display a list of buttons or boxes\. This is used to select either a single value or multiple values\.

## Syntax<a name="aws-properties-quicksight-template-filterlistcontrol-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-template-filterlistcontrol-syntax.json"></a>

```
{
  "[CascadingControlConfiguration](#cfn-quicksight-template-filterlistcontrol-cascadingcontrolconfiguration)" : CascadingControlConfiguration,
  "[DisplayOptions](#cfn-quicksight-template-filterlistcontrol-displayoptions)" : ListControlDisplayOptions,
  "[FilterControlId](#cfn-quicksight-template-filterlistcontrol-filtercontrolid)" : String,
  "[SelectableValues](#cfn-quicksight-template-filterlistcontrol-selectablevalues)" : FilterSelectableValues,
  "[SourceFilterId](#cfn-quicksight-template-filterlistcontrol-sourcefilterid)" : String,
  "[Title](#cfn-quicksight-template-filterlistcontrol-title)" : String,
  "[Type](#cfn-quicksight-template-filterlistcontrol-type)" : String
}
```

### YAML<a name="aws-properties-quicksight-template-filterlistcontrol-syntax.yaml"></a>

```
  [CascadingControlConfiguration](#cfn-quicksight-template-filterlistcontrol-cascadingcontrolconfiguration):
    CascadingControlConfiguration
  [DisplayOptions](#cfn-quicksight-template-filterlistcontrol-displayoptions):
    ListControlDisplayOptions
  [FilterControlId](#cfn-quicksight-template-filterlistcontrol-filtercontrolid): String
  [SelectableValues](#cfn-quicksight-template-filterlistcontrol-selectablevalues):
    FilterSelectableValues
  [SourceFilterId](#cfn-quicksight-template-filterlistcontrol-sourcefilterid): String
  [Title](#cfn-quicksight-template-filterlistcontrol-title): String
  [Type](#cfn-quicksight-template-filterlistcontrol-type): String
```

## Properties<a name="aws-properties-quicksight-template-filterlistcontrol-properties"></a>

`CascadingControlConfiguration` <a name="cfn-quicksight-template-filterlistcontrol-cascadingcontrolconfiguration"></a>
The values that are displayed in a control can be configured to only show values that are valid based on what's selected in other controls\.  
_Required_: No  
_Type_: [CascadingControlConfiguration](aws-properties-quicksight-template-cascadingcontrolconfiguration.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`DisplayOptions` <a name="cfn-quicksight-template-filterlistcontrol-displayoptions"></a>
The display options of a control\.  
_Required_: No  
_Type_: [ListControlDisplayOptions](aws-properties-quicksight-template-listcontroldisplayoptions.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`FilterControlId` <a name="cfn-quicksight-template-filterlistcontrol-filtercontrolid"></a>
The ID of the `FilterListControl`\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `512`  
_Pattern_: `[\w\-]+`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`SelectableValues` <a name="cfn-quicksight-template-filterlistcontrol-selectablevalues"></a>
A list of selectable values that are used in a control\.  
_Required_: No  
_Type_: [FilterSelectableValues](aws-properties-quicksight-template-filterselectablevalues.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`SourceFilterId` <a name="cfn-quicksight-template-filterlistcontrol-sourcefilterid"></a>
The source filter ID of the `FilterListControl`\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `512`  
_Pattern_: `[\w\-]+`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Title` <a name="cfn-quicksight-template-filterlistcontrol-title"></a>
The title of the `FilterListControl`\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `2048`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Type` <a name="cfn-quicksight-template-filterlistcontrol-type"></a>
The type of `FilterListControl`\. Choose one of the following options:

- `MULTI_SELECT`: The user can select multiple entries from the list\.
- `SINGLE_SELECT`: The user can select a single entry from the list\.
  _Required_: No  
  _Type_: String  
  _Allowed values_: `MULTI_SELECT | SINGLE_SELECT`  
  _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
