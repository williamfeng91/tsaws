# AWS::QuickSight::Template GradientStop<a name="aws-properties-quicksight-template-gradientstop"></a>

Determines the gradient stop configuration\.

## Syntax<a name="aws-properties-quicksight-template-gradientstop-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-template-gradientstop-syntax.json"></a>

```
{
  "[Color](#cfn-quicksight-template-gradientstop-color)" : String,
  "[DataValue](#cfn-quicksight-template-gradientstop-datavalue)" : Double,
  "[GradientOffset](#cfn-quicksight-template-gradientstop-gradientoffset)" : Double
}
```

### YAML<a name="aws-properties-quicksight-template-gradientstop-syntax.yaml"></a>

```
  [Color](#cfn-quicksight-template-gradientstop-color): String
  [DataValue](#cfn-quicksight-template-gradientstop-datavalue): Double
  [GradientOffset](#cfn-quicksight-template-gradientstop-gradientoffset): Double
```

## Properties<a name="aws-properties-quicksight-template-gradientstop-properties"></a>

`Color` <a name="cfn-quicksight-template-gradientstop-color"></a>
Determines the color\.  
_Required_: No  
_Type_: String  
_Pattern_: `^#[A-F0-9]{6}$`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`DataValue` <a name="cfn-quicksight-template-gradientstop-datavalue"></a>
Determines the data value\.  
_Required_: No  
_Type_: Double  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`GradientOffset` <a name="cfn-quicksight-template-gradientstop-gradientoffset"></a>
Determines gradient offset value\.  
_Required_: Yes  
_Type_: Double  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
