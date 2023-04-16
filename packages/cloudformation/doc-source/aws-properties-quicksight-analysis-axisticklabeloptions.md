# AWS::QuickSight::Analysis AxisTickLabelOptions<a name="aws-properties-quicksight-analysis-axisticklabeloptions"></a>

The tick label options of an axis\.

## Syntax<a name="aws-properties-quicksight-analysis-axisticklabeloptions-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-analysis-axisticklabeloptions-syntax.json"></a>

```
{
  "[LabelOptions](#cfn-quicksight-analysis-axisticklabeloptions-labeloptions)" : LabelOptions,
  "[RotationAngle](#cfn-quicksight-analysis-axisticklabeloptions-rotationangle)" : Double
}
```

### YAML<a name="aws-properties-quicksight-analysis-axisticklabeloptions-syntax.yaml"></a>

```
  [LabelOptions](#cfn-quicksight-analysis-axisticklabeloptions-labeloptions):
    LabelOptions
  [RotationAngle](#cfn-quicksight-analysis-axisticklabeloptions-rotationangle): Double
```

## Properties<a name="aws-properties-quicksight-analysis-axisticklabeloptions-properties"></a>

`LabelOptions` <a name="cfn-quicksight-analysis-axisticklabeloptions-labeloptions"></a>
Determines whether or not the axis ticks are visible\.  
_Required_: No  
_Type_: [LabelOptions](aws-properties-quicksight-analysis-labeloptions.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`RotationAngle` <a name="cfn-quicksight-analysis-axisticklabeloptions-rotationangle"></a>
The rotation angle of the axis tick labels\.  
_Required_: No  
_Type_: Double  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
