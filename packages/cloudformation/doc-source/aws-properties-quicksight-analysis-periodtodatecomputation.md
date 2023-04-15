# AWS::QuickSight::Analysis PeriodToDateComputation<a name="aws-properties-quicksight-analysis-periodtodatecomputation"></a>

The period to date computation configuration\.

## Syntax<a name="aws-properties-quicksight-analysis-periodtodatecomputation-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-analysis-periodtodatecomputation-syntax.json"></a>

```
{
  "[ComputationId](#cfn-quicksight-analysis-periodtodatecomputation-computationid)" : String,
  "[Name](#cfn-quicksight-analysis-periodtodatecomputation-name)" : String,
  "[PeriodTimeGranularity](#cfn-quicksight-analysis-periodtodatecomputation-periodtimegranularity)" : String,
  "[Time](#cfn-quicksight-analysis-periodtodatecomputation-time)" : DimensionField,
  "[Value](#cfn-quicksight-analysis-periodtodatecomputation-value)" : MeasureField
}
```

### YAML<a name="aws-properties-quicksight-analysis-periodtodatecomputation-syntax.yaml"></a>

```
  [ComputationId](#cfn-quicksight-analysis-periodtodatecomputation-computationid): String
  [Name](#cfn-quicksight-analysis-periodtodatecomputation-name): String
  [PeriodTimeGranularity](#cfn-quicksight-analysis-periodtodatecomputation-periodtimegranularity): String
  [Time](#cfn-quicksight-analysis-periodtodatecomputation-time):
    DimensionField
  [Value](#cfn-quicksight-analysis-periodtodatecomputation-value):
    MeasureField
```

## Properties<a name="aws-properties-quicksight-analysis-periodtodatecomputation-properties"></a>

`ComputationId` <a name="cfn-quicksight-analysis-periodtodatecomputation-computationid"></a>
The ID for a computation\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `512`  
_Pattern_: `[\w\-]+`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Name` <a name="cfn-quicksight-analysis-periodtodatecomputation-name"></a>
The name of a computation\.  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`PeriodTimeGranularity` <a name="cfn-quicksight-analysis-periodtodatecomputation-periodtimegranularity"></a>
The time granularity setup of period to date computation\. Choose from the following options:

- YEAR: Year to date\.
- MONTH: Month to date\.
  _Required_: No  
  _Type_: String  
  _Allowed values_: `DAY | HOUR | MILLISECOND | MINUTE | MONTH | QUARTER | SECOND | WEEK | YEAR`  
  _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Time` <a name="cfn-quicksight-analysis-periodtodatecomputation-time"></a>
The time field that is used in a computation\.  
_Required_: Yes  
_Type_: [DimensionField](aws-properties-quicksight-analysis-dimensionfield.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Value` <a name="cfn-quicksight-analysis-periodtodatecomputation-value"></a>
The value field that is used in a computation\.  
_Required_: No  
_Type_: [MeasureField](aws-properties-quicksight-analysis-measurefield.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
