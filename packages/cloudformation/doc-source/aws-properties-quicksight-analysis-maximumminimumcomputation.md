# AWS::QuickSight::Analysis MaximumMinimumComputation<a name="aws-properties-quicksight-analysis-maximumminimumcomputation"></a>

The maximum and minimum computation configuration\.

## Syntax<a name="aws-properties-quicksight-analysis-maximumminimumcomputation-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-analysis-maximumminimumcomputation-syntax.json"></a>

```
{
  "[ComputationId](#cfn-quicksight-analysis-maximumminimumcomputation-computationid)" : String,
  "[Name](#cfn-quicksight-analysis-maximumminimumcomputation-name)" : String,
  "[Time](#cfn-quicksight-analysis-maximumminimumcomputation-time)" : DimensionField,
  "[Type](#cfn-quicksight-analysis-maximumminimumcomputation-type)" : String,
  "[Value](#cfn-quicksight-analysis-maximumminimumcomputation-value)" : MeasureField
}
```

### YAML<a name="aws-properties-quicksight-analysis-maximumminimumcomputation-syntax.yaml"></a>

```
  [ComputationId](#cfn-quicksight-analysis-maximumminimumcomputation-computationid): String
  [Name](#cfn-quicksight-analysis-maximumminimumcomputation-name): String
  [Time](#cfn-quicksight-analysis-maximumminimumcomputation-time):
    DimensionField
  [Type](#cfn-quicksight-analysis-maximumminimumcomputation-type): String
  [Value](#cfn-quicksight-analysis-maximumminimumcomputation-value):
    MeasureField
```

## Properties<a name="aws-properties-quicksight-analysis-maximumminimumcomputation-properties"></a>

`ComputationId` <a name="cfn-quicksight-analysis-maximumminimumcomputation-computationid"></a>
The ID for a computation\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `512`  
_Pattern_: `[\w\-]+`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Name` <a name="cfn-quicksight-analysis-maximumminimumcomputation-name"></a>
The name of a computation\.  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Time` <a name="cfn-quicksight-analysis-maximumminimumcomputation-time"></a>
The time field that is used in a computation\.  
_Required_: Yes  
_Type_: [DimensionField](aws-properties-quicksight-analysis-dimensionfield.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Type` <a name="cfn-quicksight-analysis-maximumminimumcomputation-type"></a>
The type of computation\. Choose one of the following options:

- MAXIMUM: A maximum computation\.
- MINIMUM: A minimum computation\.
  _Required_: Yes  
  _Type_: String  
  _Allowed values_: `MAXIMUM | MINIMUM`  
  _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Value` <a name="cfn-quicksight-analysis-maximumminimumcomputation-value"></a>
The value field that is used in a computation\.  
_Required_: No  
_Type_: [MeasureField](aws-properties-quicksight-analysis-measurefield.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
