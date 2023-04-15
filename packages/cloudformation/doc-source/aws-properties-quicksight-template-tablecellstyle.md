# AWS::QuickSight::Template TableCellStyle<a name="aws-properties-quicksight-template-tablecellstyle"></a>

The table cell style for a cell in pivot table or table visual\.

## Syntax<a name="aws-properties-quicksight-template-tablecellstyle-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-template-tablecellstyle-syntax.json"></a>

```
{
  "[BackgroundColor](#cfn-quicksight-template-tablecellstyle-backgroundcolor)" : String,
  "[Border](#cfn-quicksight-template-tablecellstyle-border)" : GlobalTableBorderOptions,
  "[FontConfiguration](#cfn-quicksight-template-tablecellstyle-fontconfiguration)" : FontConfiguration,
  "[Height](#cfn-quicksight-template-tablecellstyle-height)" : Double,
  "[HorizontalTextAlignment](#cfn-quicksight-template-tablecellstyle-horizontaltextalignment)" : String,
  "[TextWrap](#cfn-quicksight-template-tablecellstyle-textwrap)" : String,
  "[VerticalTextAlignment](#cfn-quicksight-template-tablecellstyle-verticaltextalignment)" : String,
  "[Visibility](#cfn-quicksight-template-tablecellstyle-visibility)" : String
}
```

### YAML<a name="aws-properties-quicksight-template-tablecellstyle-syntax.yaml"></a>

```
  [BackgroundColor](#cfn-quicksight-template-tablecellstyle-backgroundcolor): String
  [Border](#cfn-quicksight-template-tablecellstyle-border):
    GlobalTableBorderOptions
  [FontConfiguration](#cfn-quicksight-template-tablecellstyle-fontconfiguration):
    FontConfiguration
  [Height](#cfn-quicksight-template-tablecellstyle-height): Double
  [HorizontalTextAlignment](#cfn-quicksight-template-tablecellstyle-horizontaltextalignment): String
  [TextWrap](#cfn-quicksight-template-tablecellstyle-textwrap): String
  [VerticalTextAlignment](#cfn-quicksight-template-tablecellstyle-verticaltextalignment): String
  [Visibility](#cfn-quicksight-template-tablecellstyle-visibility): String
```

## Properties<a name="aws-properties-quicksight-template-tablecellstyle-properties"></a>

`BackgroundColor` <a name="cfn-quicksight-template-tablecellstyle-backgroundcolor"></a>
The background color for the table cells\.  
_Required_: No  
_Type_: String  
_Pattern_: `^#[A-F0-9]{6}$`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Border` <a name="cfn-quicksight-template-tablecellstyle-border"></a>
The borders for the table cells\.  
_Required_: No  
_Type_: [GlobalTableBorderOptions](aws-properties-quicksight-template-globaltableborderoptions.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`FontConfiguration` <a name="cfn-quicksight-template-tablecellstyle-fontconfiguration"></a>
The font configuration of the table cells\.  
_Required_: No  
_Type_: [FontConfiguration](aws-properties-quicksight-template-fontconfiguration.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Height` <a name="cfn-quicksight-template-tablecellstyle-height"></a>
The height color for the table cells\.  
_Required_: No  
_Type_: Double  
_Minimum_: `8`  
_Maximum_: `500`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`HorizontalTextAlignment` <a name="cfn-quicksight-template-tablecellstyle-horizontaltextalignment"></a>
The horizontal text alignment \(left, center, right, auto\) for the table cells\.  
_Required_: No  
_Type_: String  
_Allowed values_: `AUTO | CENTER | LEFT | RIGHT`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`TextWrap` <a name="cfn-quicksight-template-tablecellstyle-textwrap"></a>
The text wrap \(none, wrap\) for the table cells\.  
_Required_: No  
_Type_: String  
_Allowed values_: `NONE | WRAP`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`VerticalTextAlignment` <a name="cfn-quicksight-template-tablecellstyle-verticaltextalignment"></a>
The vertical text alignment \(top, middle, bottom\) for the table cells\.  
_Required_: No  
_Type_: String  
_Allowed values_: `BOTTOM | MIDDLE | TOP`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Visibility` <a name="cfn-quicksight-template-tablecellstyle-visibility"></a>
The visibility of the table cells\.  
_Required_: No  
_Type_: String  
_Allowed values_: `HIDDEN | VISIBLE`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
