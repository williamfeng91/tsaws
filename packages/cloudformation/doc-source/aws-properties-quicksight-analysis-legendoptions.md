# AWS::QuickSight::Analysis LegendOptions<a name="aws-properties-quicksight-analysis-legendoptions"></a>

The options for the legend setup of a visual\.

## Syntax<a name="aws-properties-quicksight-analysis-legendoptions-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-analysis-legendoptions-syntax.json"></a>

```
{
  "[Height](#cfn-quicksight-analysis-legendoptions-height)" : String,
  "[Position](#cfn-quicksight-analysis-legendoptions-position)" : String,
  "[Title](#cfn-quicksight-analysis-legendoptions-title)" : LabelOptions,
  "[Visibility](#cfn-quicksight-analysis-legendoptions-visibility)" : String,
  "[Width](#cfn-quicksight-analysis-legendoptions-width)" : String
}
```

### YAML<a name="aws-properties-quicksight-analysis-legendoptions-syntax.yaml"></a>

```
  [Height](#cfn-quicksight-analysis-legendoptions-height): String
  [Position](#cfn-quicksight-analysis-legendoptions-position): String
  [Title](#cfn-quicksight-analysis-legendoptions-title):
    LabelOptions
  [Visibility](#cfn-quicksight-analysis-legendoptions-visibility): String
  [Width](#cfn-quicksight-analysis-legendoptions-width): String
```

## Properties<a name="aws-properties-quicksight-analysis-legendoptions-properties"></a>

`Height` <a name="cfn-quicksight-analysis-legendoptions-height"></a>
The height of the legend\. If this value is omitted, a default height is used when rendering\.  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Position` <a name="cfn-quicksight-analysis-legendoptions-position"></a>
The positions for the legend\. Choose one of the following options:

- `AUTO`
- `RIGHT`
- `BOTTOM`
- `LEFT`
  _Required_: No  
  _Type_: String  
  _Allowed values_: `AUTO | BOTTOM | RIGHT | TOP`  
  _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Title` <a name="cfn-quicksight-analysis-legendoptions-title"></a>
The custom title for the legend\.  
_Required_: No  
_Type_: [LabelOptions](aws-properties-quicksight-analysis-labeloptions.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Visibility` <a name="cfn-quicksight-analysis-legendoptions-visibility"></a>
Determines whether or not the legend is visible\.  
_Required_: No  
_Type_: String  
_Allowed values_: `HIDDEN | VISIBLE`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Width` <a name="cfn-quicksight-analysis-legendoptions-width"></a>
The width of the legend\. If this value is omitted, a default width is used when rendering\.  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
