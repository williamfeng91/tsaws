# AWS::QuickSight::Analysis ColorScale<a name="aws-properties-quicksight-analysis-colorscale"></a>

Determines the color scale that is applied to the visual\.

## Syntax<a name="aws-properties-quicksight-analysis-colorscale-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-analysis-colorscale-syntax.json"></a>

```
{
  "[ColorFillType](#cfn-quicksight-analysis-colorscale-colorfilltype)" : String,
  "[Colors](#cfn-quicksight-analysis-colorscale-colors)" : [ DataColor, ... ],
  "[NullValueColor](#cfn-quicksight-analysis-colorscale-nullvaluecolor)" : DataColor
}
```

### YAML<a name="aws-properties-quicksight-analysis-colorscale-syntax.yaml"></a>

```
  [ColorFillType](#cfn-quicksight-analysis-colorscale-colorfilltype): String
  [Colors](#cfn-quicksight-analysis-colorscale-colors):
    - DataColor
  [NullValueColor](#cfn-quicksight-analysis-colorscale-nullvaluecolor):
    DataColor
```

## Properties<a name="aws-properties-quicksight-analysis-colorscale-properties"></a>

`ColorFillType` <a name="cfn-quicksight-analysis-colorscale-colorfilltype"></a>
Determines the color fill type\.  
_Required_: Yes  
_Type_: String  
_Allowed values_: `DISCRETE | GRADIENT`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Colors` <a name="cfn-quicksight-analysis-colorscale-colors"></a>
Determines the list of colors that are applied to the visual\.  
_Required_: Yes  
_Type_: List of [DataColor](aws-properties-quicksight-analysis-datacolor.md)  
_Maximum_: `3`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`NullValueColor` <a name="cfn-quicksight-analysis-colorscale-nullvaluecolor"></a>
Determines the color that is applied to null values\.  
_Required_: No  
_Type_: [DataColor](aws-properties-quicksight-analysis-datacolor.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
