# AWS::QuickSight::Analysis FontConfiguration<a name="aws-properties-quicksight-analysis-fontconfiguration"></a>

Configures the display properties of the given text\.

## Syntax<a name="aws-properties-quicksight-analysis-fontconfiguration-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-analysis-fontconfiguration-syntax.json"></a>

```
{
  "[FontColor](#cfn-quicksight-analysis-fontconfiguration-fontcolor)" : String,
  "[FontDecoration](#cfn-quicksight-analysis-fontconfiguration-fontdecoration)" : String,
  "[FontSize](#cfn-quicksight-analysis-fontconfiguration-fontsize)" : FontSize,
  "[FontStyle](#cfn-quicksight-analysis-fontconfiguration-fontstyle)" : String,
  "[FontWeight](#cfn-quicksight-analysis-fontconfiguration-fontweight)" : FontWeight
}
```

### YAML<a name="aws-properties-quicksight-analysis-fontconfiguration-syntax.yaml"></a>

```
  [FontColor](#cfn-quicksight-analysis-fontconfiguration-fontcolor): String
  [FontDecoration](#cfn-quicksight-analysis-fontconfiguration-fontdecoration): String
  [FontSize](#cfn-quicksight-analysis-fontconfiguration-fontsize):
    FontSize
  [FontStyle](#cfn-quicksight-analysis-fontconfiguration-fontstyle): String
  [FontWeight](#cfn-quicksight-analysis-fontconfiguration-fontweight):
    FontWeight
```

## Properties<a name="aws-properties-quicksight-analysis-fontconfiguration-properties"></a>

`FontColor` <a name="cfn-quicksight-analysis-fontconfiguration-fontcolor"></a>
Determines the color of the text\.  
_Required_: No  
_Type_: String  
_Pattern_: `^#[A-F0-9]{6}$`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`FontDecoration` <a name="cfn-quicksight-analysis-fontconfiguration-fontdecoration"></a>
Determines the appearance of decorative lines on the text\.  
_Required_: No  
_Type_: String  
_Allowed values_: `NONE | UNDERLINE`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`FontSize` <a name="cfn-quicksight-analysis-fontconfiguration-fontsize"></a>
The option that determines the text display size\.  
_Required_: No  
_Type_: [FontSize](aws-properties-quicksight-analysis-fontsize.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`FontStyle` <a name="cfn-quicksight-analysis-fontconfiguration-fontstyle"></a>
Determines the text display face that is inherited by the given font family\.  
_Required_: No  
_Type_: String  
_Allowed values_: `ITALIC | NORMAL`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`FontWeight` <a name="cfn-quicksight-analysis-fontconfiguration-fontweight"></a>
The option that determines the text display weight, or boldness\.  
_Required_: No  
_Type_: [FontWeight](aws-properties-quicksight-analysis-fontweight.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
