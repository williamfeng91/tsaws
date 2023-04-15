# AWS::QuickSight::Analysis DataColor<a name="aws-properties-quicksight-analysis-datacolor"></a>

Determines the color that is applied to a particular data value\.

## Syntax<a name="aws-properties-quicksight-analysis-datacolor-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-analysis-datacolor-syntax.json"></a>

```
{
  "[Color](#cfn-quicksight-analysis-datacolor-color)" : String,
  "[DataValue](#cfn-quicksight-analysis-datacolor-datavalue)" : Double
}
```

### YAML<a name="aws-properties-quicksight-analysis-datacolor-syntax.yaml"></a>

```
  [Color](#cfn-quicksight-analysis-datacolor-color): String
  [DataValue](#cfn-quicksight-analysis-datacolor-datavalue): Double
```

## Properties<a name="aws-properties-quicksight-analysis-datacolor-properties"></a>

`Color` <a name="cfn-quicksight-analysis-datacolor-color"></a>
The color that is applied to the data value\.  
_Required_: No  
_Type_: String  
_Pattern_: `^#[A-F0-9]{6}$`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`DataValue` <a name="cfn-quicksight-analysis-datacolor-datavalue"></a>
The data value that the color is applied to\.  
_Required_: No  
_Type_: Double  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
