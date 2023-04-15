# AWS::QuickSight::Dashboard ColorScale<a name="aws-properties-quicksight-dashboard-colorscale"></a>

Determines the color scale that is applied to the visual\.

## Syntax<a name="aws-properties-quicksight-dashboard-colorscale-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-dashboard-colorscale-syntax.json"></a>

```
{
  "[ColorFillType](#cfn-quicksight-dashboard-colorscale-colorfilltype)" : String,
  "[Colors](#cfn-quicksight-dashboard-colorscale-colors)" : [ DataColor, ... ],
  "[NullValueColor](#cfn-quicksight-dashboard-colorscale-nullvaluecolor)" : DataColor
}
```

### YAML<a name="aws-properties-quicksight-dashboard-colorscale-syntax.yaml"></a>

```
  [ColorFillType](#cfn-quicksight-dashboard-colorscale-colorfilltype): String
  [Colors](#cfn-quicksight-dashboard-colorscale-colors):
    - DataColor
  [NullValueColor](#cfn-quicksight-dashboard-colorscale-nullvaluecolor):
    DataColor
```

## Properties<a name="aws-properties-quicksight-dashboard-colorscale-properties"></a>

`ColorFillType` <a name="cfn-quicksight-dashboard-colorscale-colorfilltype"></a>
Determines the color fill type\.  
_Required_: Yes  
_Type_: String  
_Allowed values_: `DISCRETE | GRADIENT`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Colors` <a name="cfn-quicksight-dashboard-colorscale-colors"></a>
Determines the list of colors that are applied to the visual\.  
_Required_: Yes  
_Type_: List of [DataColor](aws-properties-quicksight-dashboard-datacolor.md)  
_Maximum_: `3`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`NullValueColor` <a name="cfn-quicksight-dashboard-colorscale-nullvaluecolor"></a>
Determines the color that is applied to null values\.  
_Required_: No  
_Type_: [DataColor](aws-properties-quicksight-dashboard-datacolor.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
