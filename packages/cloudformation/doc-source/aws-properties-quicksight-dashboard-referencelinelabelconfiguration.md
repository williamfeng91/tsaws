# AWS::QuickSight::Dashboard ReferenceLineLabelConfiguration<a name="aws-properties-quicksight-dashboard-referencelinelabelconfiguration"></a>

The label configuration of a reference line\.

## Syntax<a name="aws-properties-quicksight-dashboard-referencelinelabelconfiguration-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-dashboard-referencelinelabelconfiguration-syntax.json"></a>

```
{
  "[CustomLabelConfiguration](#cfn-quicksight-dashboard-referencelinelabelconfiguration-customlabelconfiguration)" : ReferenceLineCustomLabelConfiguration,
  "[FontColor](#cfn-quicksight-dashboard-referencelinelabelconfiguration-fontcolor)" : String,
  "[FontConfiguration](#cfn-quicksight-dashboard-referencelinelabelconfiguration-fontconfiguration)" : FontConfiguration,
  "[HorizontalPosition](#cfn-quicksight-dashboard-referencelinelabelconfiguration-horizontalposition)" : String,
  "[ValueLabelConfiguration](#cfn-quicksight-dashboard-referencelinelabelconfiguration-valuelabelconfiguration)" : ReferenceLineValueLabelConfiguration,
  "[VerticalPosition](#cfn-quicksight-dashboard-referencelinelabelconfiguration-verticalposition)" : String
}
```

### YAML<a name="aws-properties-quicksight-dashboard-referencelinelabelconfiguration-syntax.yaml"></a>

```
  [CustomLabelConfiguration](#cfn-quicksight-dashboard-referencelinelabelconfiguration-customlabelconfiguration):
    ReferenceLineCustomLabelConfiguration
  [FontColor](#cfn-quicksight-dashboard-referencelinelabelconfiguration-fontcolor): String
  [FontConfiguration](#cfn-quicksight-dashboard-referencelinelabelconfiguration-fontconfiguration):
    FontConfiguration
  [HorizontalPosition](#cfn-quicksight-dashboard-referencelinelabelconfiguration-horizontalposition): String
  [ValueLabelConfiguration](#cfn-quicksight-dashboard-referencelinelabelconfiguration-valuelabelconfiguration):
    ReferenceLineValueLabelConfiguration
  [VerticalPosition](#cfn-quicksight-dashboard-referencelinelabelconfiguration-verticalposition): String
```

## Properties<a name="aws-properties-quicksight-dashboard-referencelinelabelconfiguration-properties"></a>

`CustomLabelConfiguration` <a name="cfn-quicksight-dashboard-referencelinelabelconfiguration-customlabelconfiguration"></a>
The custom label configuration of the label in a reference line\.  
_Required_: No  
_Type_: [ReferenceLineCustomLabelConfiguration](aws-properties-quicksight-dashboard-referencelinecustomlabelconfiguration.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`FontColor` <a name="cfn-quicksight-dashboard-referencelinelabelconfiguration-fontcolor"></a>
The font color configuration of the label in a reference line\.  
_Required_: No  
_Type_: String  
_Pattern_: `^#[A-F0-9]{6}$`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`FontConfiguration` <a name="cfn-quicksight-dashboard-referencelinelabelconfiguration-fontconfiguration"></a>
The font configuration of the label in a reference line\.  
_Required_: No  
_Type_: [FontConfiguration](aws-properties-quicksight-dashboard-fontconfiguration.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`HorizontalPosition` <a name="cfn-quicksight-dashboard-referencelinelabelconfiguration-horizontalposition"></a>
The horizontal position configuration of the label in a reference line\. Choose one of the following options:

- `LEFT`
- `CENTER`
- `RIGHT`
  _Required_: No  
  _Type_: String  
  _Allowed values_: `CENTER | LEFT | RIGHT`  
  _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`ValueLabelConfiguration` <a name="cfn-quicksight-dashboard-referencelinelabelconfiguration-valuelabelconfiguration"></a>
The value label configuration of the label in a reference line\.  
_Required_: No  
_Type_: [ReferenceLineValueLabelConfiguration](aws-properties-quicksight-dashboard-referencelinevaluelabelconfiguration.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`VerticalPosition` <a name="cfn-quicksight-dashboard-referencelinelabelconfiguration-verticalposition"></a>
The vertical position configuration of the label in a reference line\. Choose one of the following options:

- `ABOVE`
- `BELOW`
  _Required_: No  
  _Type_: String  
  _Allowed values_: `ABOVE | BELOW`  
  _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
