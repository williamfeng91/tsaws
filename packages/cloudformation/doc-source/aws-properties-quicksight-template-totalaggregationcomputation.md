# AWS::QuickSight::Template TotalAggregationComputation<a name="aws-properties-quicksight-template-totalaggregationcomputation"></a>

The total aggregation computation configuration\.

## Syntax<a name="aws-properties-quicksight-template-totalaggregationcomputation-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-template-totalaggregationcomputation-syntax.json"></a>

```
{
  "[ComputationId](#cfn-quicksight-template-totalaggregationcomputation-computationid)" : String,
  "[Name](#cfn-quicksight-template-totalaggregationcomputation-name)" : String,
  "[Value](#cfn-quicksight-template-totalaggregationcomputation-value)" : MeasureField
}
```

### YAML<a name="aws-properties-quicksight-template-totalaggregationcomputation-syntax.yaml"></a>

```
  [ComputationId](#cfn-quicksight-template-totalaggregationcomputation-computationid): String
  [Name](#cfn-quicksight-template-totalaggregationcomputation-name): String
  [Value](#cfn-quicksight-template-totalaggregationcomputation-value):
    MeasureField
```

## Properties<a name="aws-properties-quicksight-template-totalaggregationcomputation-properties"></a>

`ComputationId` <a name="cfn-quicksight-template-totalaggregationcomputation-computationid"></a>
The ID for a computation\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `512`  
_Pattern_: `[\w\-]+`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Name` <a name="cfn-quicksight-template-totalaggregationcomputation-name"></a>
The name of a computation\.  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Value` <a name="cfn-quicksight-template-totalaggregationcomputation-value"></a>
The value field that is used in a computation\.  
_Required_: Yes  
_Type_: [MeasureField](aws-properties-quicksight-template-measurefield.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
