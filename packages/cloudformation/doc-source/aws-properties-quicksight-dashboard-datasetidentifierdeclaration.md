# AWS::QuickSight::Dashboard DataSetIdentifierDeclaration<a name="aws-properties-quicksight-dashboard-datasetidentifierdeclaration"></a>

A data set\.

## Syntax<a name="aws-properties-quicksight-dashboard-datasetidentifierdeclaration-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-dashboard-datasetidentifierdeclaration-syntax.json"></a>

```
{
  "[DataSetArn](#cfn-quicksight-dashboard-datasetidentifierdeclaration-datasetarn)" : String,
  "[Identifier](#cfn-quicksight-dashboard-datasetidentifierdeclaration-identifier)" : String
}
```

### YAML<a name="aws-properties-quicksight-dashboard-datasetidentifierdeclaration-syntax.yaml"></a>

```
  [DataSetArn](#cfn-quicksight-dashboard-datasetidentifierdeclaration-datasetarn): String
  [Identifier](#cfn-quicksight-dashboard-datasetidentifierdeclaration-identifier): String
```

## Properties<a name="aws-properties-quicksight-dashboard-datasetidentifierdeclaration-properties"></a>

`DataSetArn` <a name="cfn-quicksight-dashboard-datasetidentifierdeclaration-datasetarn"></a>
The Amazon Resource Name \(ARN\) of the data set\.  
_Required_: Yes  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Identifier` <a name="cfn-quicksight-dashboard-datasetidentifierdeclaration-identifier"></a>
The identifier of the data set, typically the data set's name\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `2048`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
