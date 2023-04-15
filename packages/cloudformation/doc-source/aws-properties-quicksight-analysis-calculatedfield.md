# AWS::QuickSight::Analysis CalculatedField<a name="aws-properties-quicksight-analysis-calculatedfield"></a>

The calculated field of an analysis\.

## Syntax<a name="aws-properties-quicksight-analysis-calculatedfield-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-analysis-calculatedfield-syntax.json"></a>

```
{
  "[DataSetIdentifier](#cfn-quicksight-analysis-calculatedfield-datasetidentifier)" : String,
  "[Expression](#cfn-quicksight-analysis-calculatedfield-expression)" : String,
  "[Name](#cfn-quicksight-analysis-calculatedfield-name)" : String
}
```

### YAML<a name="aws-properties-quicksight-analysis-calculatedfield-syntax.yaml"></a>

```
  [DataSetIdentifier](#cfn-quicksight-analysis-calculatedfield-datasetidentifier): String
  [Expression](#cfn-quicksight-analysis-calculatedfield-expression): String
  [Name](#cfn-quicksight-analysis-calculatedfield-name): String
```

## Properties<a name="aws-properties-quicksight-analysis-calculatedfield-properties"></a>

`DataSetIdentifier` <a name="cfn-quicksight-analysis-calculatedfield-datasetidentifier"></a>
The data set that is used in this calculated field\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `2048`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Expression` <a name="cfn-quicksight-analysis-calculatedfield-expression"></a>
The expression of the calculated field\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `4096`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Name` <a name="cfn-quicksight-analysis-calculatedfield-name"></a>
The name of the calculated field\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `128`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
