# AWS::QuickSight::Template GradientColor<a name="aws-properties-quicksight-template-gradientcolor"></a>

Determines the gradient color settings\.

## Syntax<a name="aws-properties-quicksight-template-gradientcolor-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-template-gradientcolor-syntax.json"></a>

```
{
  "[Stops](#cfn-quicksight-template-gradientcolor-stops)" : [ GradientStop, ... ]
}
```

### YAML<a name="aws-properties-quicksight-template-gradientcolor-syntax.yaml"></a>

```
  [Stops](#cfn-quicksight-template-gradientcolor-stops):
    - GradientStop
```

## Properties<a name="aws-properties-quicksight-template-gradientcolor-properties"></a>

`Stops` <a name="cfn-quicksight-template-gradientcolor-stops"></a>
The list of gradient color stops\.  
_Required_: No  
_Type_: List of [GradientStop](aws-properties-quicksight-template-gradientstop.md)  
_Maximum_: `100`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
