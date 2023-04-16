# AWS::QuickSight::Template AxisTickLabelOptions<a name="aws-properties-quicksight-template-axisticklabeloptions"></a>

The tick label options of an axis\.

## Syntax<a name="aws-properties-quicksight-template-axisticklabeloptions-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-template-axisticklabeloptions-syntax.json"></a>

```
{
  "[LabelOptions](#cfn-quicksight-template-axisticklabeloptions-labeloptions)" : LabelOptions,
  "[RotationAngle](#cfn-quicksight-template-axisticklabeloptions-rotationangle)" : Double
}
```

### YAML<a name="aws-properties-quicksight-template-axisticklabeloptions-syntax.yaml"></a>

```
  [LabelOptions](#cfn-quicksight-template-axisticklabeloptions-labeloptions):
    LabelOptions
  [RotationAngle](#cfn-quicksight-template-axisticklabeloptions-rotationangle): Double
```

## Properties<a name="aws-properties-quicksight-template-axisticklabeloptions-properties"></a>

`LabelOptions` <a name="cfn-quicksight-template-axisticklabeloptions-labeloptions"></a>
Determines whether or not the axis ticks are visible\.  
_Required_: No  
_Type_: [LabelOptions](aws-properties-quicksight-template-labeloptions.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`RotationAngle` <a name="cfn-quicksight-template-axisticklabeloptions-rotationangle"></a>
The rotation angle of the axis tick labels\.  
_Required_: No  
_Type_: Double  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
