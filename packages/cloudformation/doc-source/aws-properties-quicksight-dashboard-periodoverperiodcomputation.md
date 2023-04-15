# AWS::QuickSight::Dashboard PeriodOverPeriodComputation<a name="aws-properties-quicksight-dashboard-periodoverperiodcomputation"></a>

The period over period computation configuration\.

## Syntax<a name="aws-properties-quicksight-dashboard-periodoverperiodcomputation-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-dashboard-periodoverperiodcomputation-syntax.json"></a>

```
{
  "[ComputationId](#cfn-quicksight-dashboard-periodoverperiodcomputation-computationid)" : String,
  "[Name](#cfn-quicksight-dashboard-periodoverperiodcomputation-name)" : String,
  "[Time](#cfn-quicksight-dashboard-periodoverperiodcomputation-time)" : DimensionField,
  "[Value](#cfn-quicksight-dashboard-periodoverperiodcomputation-value)" : MeasureField
}
```

### YAML<a name="aws-properties-quicksight-dashboard-periodoverperiodcomputation-syntax.yaml"></a>

```
  [ComputationId](#cfn-quicksight-dashboard-periodoverperiodcomputation-computationid): String
  [Name](#cfn-quicksight-dashboard-periodoverperiodcomputation-name): String
  [Time](#cfn-quicksight-dashboard-periodoverperiodcomputation-time):
    DimensionField
  [Value](#cfn-quicksight-dashboard-periodoverperiodcomputation-value):
    MeasureField
```

## Properties<a name="aws-properties-quicksight-dashboard-periodoverperiodcomputation-properties"></a>

`ComputationId` <a name="cfn-quicksight-dashboard-periodoverperiodcomputation-computationid"></a>
The ID for a computation\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `512`  
_Pattern_: `[\w\-]+`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Name` <a name="cfn-quicksight-dashboard-periodoverperiodcomputation-name"></a>
The name of a computation\.  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Time` <a name="cfn-quicksight-dashboard-periodoverperiodcomputation-time"></a>
The time field that is used in a computation\.  
_Required_: Yes  
_Type_: [DimensionField](aws-properties-quicksight-dashboard-dimensionfield.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Value` <a name="cfn-quicksight-dashboard-periodoverperiodcomputation-value"></a>
The value field that is used in a computation\.  
_Required_: No  
_Type_: [MeasureField](aws-properties-quicksight-dashboard-measurefield.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
