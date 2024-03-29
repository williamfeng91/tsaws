# AWS::QuickSight::Template NumericRangeFilterValue<a name="aws-properties-quicksight-template-numericrangefiltervalue"></a>

The value input pf the numeric range filter\.

## Syntax<a name="aws-properties-quicksight-template-numericrangefiltervalue-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-template-numericrangefiltervalue-syntax.json"></a>

```
{
  "[Parameter](#cfn-quicksight-template-numericrangefiltervalue-parameter)" : String,
  "[StaticValue](#cfn-quicksight-template-numericrangefiltervalue-staticvalue)" : Double
}
```

### YAML<a name="aws-properties-quicksight-template-numericrangefiltervalue-syntax.yaml"></a>

```
  [Parameter](#cfn-quicksight-template-numericrangefiltervalue-parameter): String
  [StaticValue](#cfn-quicksight-template-numericrangefiltervalue-staticvalue): Double
```

## Properties<a name="aws-properties-quicksight-template-numericrangefiltervalue-properties"></a>

`Parameter` <a name="cfn-quicksight-template-numericrangefiltervalue-parameter"></a>
The parameter that is used in the numeric range\.  
_Required_: No  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `2048`  
_Pattern_: `^[a-zA-Z0-9]+$`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`StaticValue` <a name="cfn-quicksight-template-numericrangefiltervalue-staticvalue"></a>
The static value of the numeric range filter\.  
_Required_: No  
_Type_: Double  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
