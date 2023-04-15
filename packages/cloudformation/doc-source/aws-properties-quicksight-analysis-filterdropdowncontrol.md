# AWS::QuickSight::Analysis FilterDropDownControl<a name="aws-properties-quicksight-analysis-filterdropdowncontrol"></a>

A control to display a dropdown list with buttons that are used to select a single value\.

## Syntax<a name="aws-properties-quicksight-analysis-filterdropdowncontrol-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-analysis-filterdropdowncontrol-syntax.json"></a>

```
{
  "[CascadingControlConfiguration](#cfn-quicksight-analysis-filterdropdowncontrol-cascadingcontrolconfiguration)" : CascadingControlConfiguration,
  "[DisplayOptions](#cfn-quicksight-analysis-filterdropdowncontrol-displayoptions)" : DropDownControlDisplayOptions,
  "[FilterControlId](#cfn-quicksight-analysis-filterdropdowncontrol-filtercontrolid)" : String,
  "[SelectableValues](#cfn-quicksight-analysis-filterdropdowncontrol-selectablevalues)" : FilterSelectableValues,
  "[SourceFilterId](#cfn-quicksight-analysis-filterdropdowncontrol-sourcefilterid)" : String,
  "[Title](#cfn-quicksight-analysis-filterdropdowncontrol-title)" : String,
  "[Type](#cfn-quicksight-analysis-filterdropdowncontrol-type)" : String
}
```

### YAML<a name="aws-properties-quicksight-analysis-filterdropdowncontrol-syntax.yaml"></a>

```
  [CascadingControlConfiguration](#cfn-quicksight-analysis-filterdropdowncontrol-cascadingcontrolconfiguration):
    CascadingControlConfiguration
  [DisplayOptions](#cfn-quicksight-analysis-filterdropdowncontrol-displayoptions):
    DropDownControlDisplayOptions
  [FilterControlId](#cfn-quicksight-analysis-filterdropdowncontrol-filtercontrolid): String
  [SelectableValues](#cfn-quicksight-analysis-filterdropdowncontrol-selectablevalues):
    FilterSelectableValues
  [SourceFilterId](#cfn-quicksight-analysis-filterdropdowncontrol-sourcefilterid): String
  [Title](#cfn-quicksight-analysis-filterdropdowncontrol-title): String
  [Type](#cfn-quicksight-analysis-filterdropdowncontrol-type): String
```

## Properties<a name="aws-properties-quicksight-analysis-filterdropdowncontrol-properties"></a>

`CascadingControlConfiguration` <a name="cfn-quicksight-analysis-filterdropdowncontrol-cascadingcontrolconfiguration"></a>
The values that are displayed in a control can be configured to only show values that are valid based on what's selected in other controls\.  
_Required_: No  
_Type_: [CascadingControlConfiguration](aws-properties-quicksight-analysis-cascadingcontrolconfiguration.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`DisplayOptions` <a name="cfn-quicksight-analysis-filterdropdowncontrol-displayoptions"></a>
The display options of the `FilterDropDownControl`\.  
_Required_: No  
_Type_: [DropDownControlDisplayOptions](aws-properties-quicksight-analysis-dropdowncontroldisplayoptions.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`FilterControlId` <a name="cfn-quicksight-analysis-filterdropdowncontrol-filtercontrolid"></a>
The ID of the `FilterDropDownControl`\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `512`  
_Pattern_: `[\w\-]+`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`SelectableValues` <a name="cfn-quicksight-analysis-filterdropdowncontrol-selectablevalues"></a>
A list of selectable values that are used in a control\.  
_Required_: No  
_Type_: [FilterSelectableValues](aws-properties-quicksight-analysis-filterselectablevalues.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`SourceFilterId` <a name="cfn-quicksight-analysis-filterdropdowncontrol-sourcefilterid"></a>
The source filter ID of the `FilterDropDownControl`\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `512`  
_Pattern_: `[\w\-]+`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Title` <a name="cfn-quicksight-analysis-filterdropdowncontrol-title"></a>
The title of the `FilterDropDownControl`\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `2048`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Type` <a name="cfn-quicksight-analysis-filterdropdowncontrol-type"></a>
The type of the `FilterDropDownControl`\. Choose one of the following options:

- `MULTI_SELECT`: The user can select multiple entries from a dropdown menu\.
- `SINGLE_SELECT`: The user can select a single entry from a dropdown menu\.
  _Required_: No  
  _Type_: String  
  _Allowed values_: `MULTI_SELECT | SINGLE_SELECT`  
  _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
