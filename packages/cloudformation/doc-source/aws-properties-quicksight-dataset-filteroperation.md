# AWS::QuickSight::DataSet FilterOperation<a name="aws-properties-quicksight-dataset-filteroperation"></a>

A transform operation that filters rows based on a condition\.

## Syntax<a name="aws-properties-quicksight-dataset-filteroperation-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-dataset-filteroperation-syntax.json"></a>

```
{
  "[ConditionExpression](#cfn-quicksight-dataset-filteroperation-conditionexpression)" : String
}
```

### YAML<a name="aws-properties-quicksight-dataset-filteroperation-syntax.yaml"></a>

```
  [ConditionExpression](#cfn-quicksight-dataset-filteroperation-conditionexpression): String
```

## Properties<a name="aws-properties-quicksight-dataset-filteroperation-properties"></a>

`ConditionExpression` <a name="cfn-quicksight-dataset-filteroperation-conditionexpression"></a>
An expression that must evaluate to a Boolean value\. Rows for which the expression evaluates to true are kept in the dataset\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `4096`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
