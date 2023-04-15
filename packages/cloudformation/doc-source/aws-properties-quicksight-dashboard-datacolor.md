# AWS::QuickSight::Dashboard DataColor<a name="aws-properties-quicksight-dashboard-datacolor"></a>

Determines the color that is applied to a particular data value\.

## Syntax<a name="aws-properties-quicksight-dashboard-datacolor-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-dashboard-datacolor-syntax.json"></a>

```
{
  "[Color](#cfn-quicksight-dashboard-datacolor-color)" : String,
  "[DataValue](#cfn-quicksight-dashboard-datacolor-datavalue)" : Double
}
```

### YAML<a name="aws-properties-quicksight-dashboard-datacolor-syntax.yaml"></a>

```
  [Color](#cfn-quicksight-dashboard-datacolor-color): String
  [DataValue](#cfn-quicksight-dashboard-datacolor-datavalue): Double
```

## Properties<a name="aws-properties-quicksight-dashboard-datacolor-properties"></a>

`Color` <a name="cfn-quicksight-dashboard-datacolor-color"></a>
The color that is applied to the data value\.  
_Required_: No  
_Type_: String  
_Pattern_: `^#[A-F0-9]{6}$`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`DataValue` <a name="cfn-quicksight-dashboard-datacolor-datavalue"></a>
The data value that the color is applied to\.  
_Required_: No  
_Type_: Double  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
