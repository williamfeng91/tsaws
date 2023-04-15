# AWS::QuickSight::DataSet LogicalTable<a name="aws-properties-quicksight-dataset-logicaltable"></a>

A _logical table_ is a unit that joins and that data transformations operate on\. A logical table has a source, which can be either a physical table or result of a join\. When a logical table points to a physical table, the logical table acts as a mutable copy of that physical table through transform operations\.

## Syntax<a name="aws-properties-quicksight-dataset-logicaltable-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-dataset-logicaltable-syntax.json"></a>

```
{
  "[Alias](#cfn-quicksight-dataset-logicaltable-alias)" : String,
  "[DataTransforms](#cfn-quicksight-dataset-logicaltable-datatransforms)" : [ TransformOperation, ... ],
  "[Source](#cfn-quicksight-dataset-logicaltable-source)" : LogicalTableSource
}
```

### YAML<a name="aws-properties-quicksight-dataset-logicaltable-syntax.yaml"></a>

```
  [Alias](#cfn-quicksight-dataset-logicaltable-alias): String
  [DataTransforms](#cfn-quicksight-dataset-logicaltable-datatransforms):
    - TransformOperation
  [Source](#cfn-quicksight-dataset-logicaltable-source):
    LogicalTableSource
```

## Properties<a name="aws-properties-quicksight-dataset-logicaltable-properties"></a>

`Alias` <a name="cfn-quicksight-dataset-logicaltable-alias"></a>
A display name for the logical table\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `64`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`DataTransforms` <a name="cfn-quicksight-dataset-logicaltable-datatransforms"></a>
Transform operations that act on this logical table\. For this structure to be valid, only one of the attributes can be non\-null\.  
_Required_: No  
_Type_: List of [TransformOperation](aws-properties-quicksight-dataset-transformoperation.md)  
_Maximum_: `2048`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Source` <a name="cfn-quicksight-dataset-logicaltable-source"></a>
Source of this logical table\.  
_Required_: Yes  
_Type_: [LogicalTableSource](aws-properties-quicksight-dataset-logicaltablesource.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
