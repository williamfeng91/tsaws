# AWS::QuickSight::Dashboard UniqueValuesComputation<a name="aws-properties-quicksight-dashboard-uniquevaluescomputation"></a>

The unique values computation configuration\.

## Syntax<a name="aws-properties-quicksight-dashboard-uniquevaluescomputation-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-dashboard-uniquevaluescomputation-syntax.json"></a>

```
{
  "[Category](#cfn-quicksight-dashboard-uniquevaluescomputation-category)" : DimensionField,
  "[ComputationId](#cfn-quicksight-dashboard-uniquevaluescomputation-computationid)" : String,
  "[Name](#cfn-quicksight-dashboard-uniquevaluescomputation-name)" : String
}
```

### YAML<a name="aws-properties-quicksight-dashboard-uniquevaluescomputation-syntax.yaml"></a>

```
  [Category](#cfn-quicksight-dashboard-uniquevaluescomputation-category):
    DimensionField
  [ComputationId](#cfn-quicksight-dashboard-uniquevaluescomputation-computationid): String
  [Name](#cfn-quicksight-dashboard-uniquevaluescomputation-name): String
```

## Properties<a name="aws-properties-quicksight-dashboard-uniquevaluescomputation-properties"></a>

`Category` <a name="cfn-quicksight-dashboard-uniquevaluescomputation-category"></a>
The category field that is used in a computation\.  
_Required_: Yes  
_Type_: [DimensionField](aws-properties-quicksight-dashboard-dimensionfield.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`ComputationId` <a name="cfn-quicksight-dashboard-uniquevaluescomputation-computationid"></a>
The ID for a computation\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `512`  
_Pattern_: `[\w\-]+`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Name` <a name="cfn-quicksight-dashboard-uniquevaluescomputation-name"></a>
The name of a computation\.  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
