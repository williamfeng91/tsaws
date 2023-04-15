# AWS::QuickSight::Analysis VisualTitleLabelOptions<a name="aws-properties-quicksight-analysis-visualtitlelabeloptions"></a>

The title label options for a visual\.

## Syntax<a name="aws-properties-quicksight-analysis-visualtitlelabeloptions-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-analysis-visualtitlelabeloptions-syntax.json"></a>

```
{
  "[FormatText](#cfn-quicksight-analysis-visualtitlelabeloptions-formattext)" : ShortFormatText,
  "[Visibility](#cfn-quicksight-analysis-visualtitlelabeloptions-visibility)" : String
}
```

### YAML<a name="aws-properties-quicksight-analysis-visualtitlelabeloptions-syntax.yaml"></a>

```
  [FormatText](#cfn-quicksight-analysis-visualtitlelabeloptions-formattext):
    ShortFormatText
  [Visibility](#cfn-quicksight-analysis-visualtitlelabeloptions-visibility): String
```

## Properties<a name="aws-properties-quicksight-analysis-visualtitlelabeloptions-properties"></a>

`FormatText` <a name="cfn-quicksight-analysis-visualtitlelabeloptions-formattext"></a>
The short text format of the title label, such as plain text or rich text\.  
_Required_: No  
_Type_: [ShortFormatText](aws-properties-quicksight-analysis-shortformattext.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Visibility` <a name="cfn-quicksight-analysis-visualtitlelabeloptions-visibility"></a>
The visibility of the title label\.  
_Required_: No  
_Type_: String  
_Allowed values_: `HIDDEN | VISIBLE`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
