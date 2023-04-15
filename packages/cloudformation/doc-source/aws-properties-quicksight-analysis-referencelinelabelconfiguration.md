# AWS::QuickSight::Analysis ReferenceLineLabelConfiguration<a name="aws-properties-quicksight-analysis-referencelinelabelconfiguration"></a>

The label configuration of a reference line\.

## Syntax<a name="aws-properties-quicksight-analysis-referencelinelabelconfiguration-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-analysis-referencelinelabelconfiguration-syntax.json"></a>

```
{
  "[CustomLabelConfiguration](#cfn-quicksight-analysis-referencelinelabelconfiguration-customlabelconfiguration)" : ReferenceLineCustomLabelConfiguration,
  "[FontColor](#cfn-quicksight-analysis-referencelinelabelconfiguration-fontcolor)" : String,
  "[FontConfiguration](#cfn-quicksight-analysis-referencelinelabelconfiguration-fontconfiguration)" : FontConfiguration,
  "[HorizontalPosition](#cfn-quicksight-analysis-referencelinelabelconfiguration-horizontalposition)" : String,
  "[ValueLabelConfiguration](#cfn-quicksight-analysis-referencelinelabelconfiguration-valuelabelconfiguration)" : ReferenceLineValueLabelConfiguration,
  "[VerticalPosition](#cfn-quicksight-analysis-referencelinelabelconfiguration-verticalposition)" : String
}
```

### YAML<a name="aws-properties-quicksight-analysis-referencelinelabelconfiguration-syntax.yaml"></a>

```
  [CustomLabelConfiguration](#cfn-quicksight-analysis-referencelinelabelconfiguration-customlabelconfiguration):
    ReferenceLineCustomLabelConfiguration
  [FontColor](#cfn-quicksight-analysis-referencelinelabelconfiguration-fontcolor): String
  [FontConfiguration](#cfn-quicksight-analysis-referencelinelabelconfiguration-fontconfiguration):
    FontConfiguration
  [HorizontalPosition](#cfn-quicksight-analysis-referencelinelabelconfiguration-horizontalposition): String
  [ValueLabelConfiguration](#cfn-quicksight-analysis-referencelinelabelconfiguration-valuelabelconfiguration):
    ReferenceLineValueLabelConfiguration
  [VerticalPosition](#cfn-quicksight-analysis-referencelinelabelconfiguration-verticalposition): String
```

## Properties<a name="aws-properties-quicksight-analysis-referencelinelabelconfiguration-properties"></a>

`CustomLabelConfiguration` <a name="cfn-quicksight-analysis-referencelinelabelconfiguration-customlabelconfiguration"></a>
The custom label configuration of the label in a reference line\.  
_Required_: No  
_Type_: [ReferenceLineCustomLabelConfiguration](aws-properties-quicksight-analysis-referencelinecustomlabelconfiguration.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`FontColor` <a name="cfn-quicksight-analysis-referencelinelabelconfiguration-fontcolor"></a>
The font color configuration of the label in a reference line\.  
_Required_: No  
_Type_: String  
_Pattern_: `^#[A-F0-9]{6}$`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`FontConfiguration` <a name="cfn-quicksight-analysis-referencelinelabelconfiguration-fontconfiguration"></a>
The font configuration of the label in a reference line\.  
_Required_: No  
_Type_: [FontConfiguration](aws-properties-quicksight-analysis-fontconfiguration.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`HorizontalPosition` <a name="cfn-quicksight-analysis-referencelinelabelconfiguration-horizontalposition"></a>
The horizontal position configuration of the label in a reference line\. Choose one of the following options:

- `LEFT`
- `CENTER`
- `RIGHT`
  _Required_: No  
  _Type_: String  
  _Allowed values_: `CENTER | LEFT | RIGHT`  
  _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`ValueLabelConfiguration` <a name="cfn-quicksight-analysis-referencelinelabelconfiguration-valuelabelconfiguration"></a>
The value label configuration of the label in a reference line\.  
_Required_: No  
_Type_: [ReferenceLineValueLabelConfiguration](aws-properties-quicksight-analysis-referencelinevaluelabelconfiguration.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`VerticalPosition` <a name="cfn-quicksight-analysis-referencelinelabelconfiguration-verticalposition"></a>
The vertical position configuration of the label in a reference line\. Choose one of the following options:

- `ABOVE`
- `BELOW`
  _Required_: No  
  _Type_: String  
  _Allowed values_: `ABOVE | BELOW`  
  _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
