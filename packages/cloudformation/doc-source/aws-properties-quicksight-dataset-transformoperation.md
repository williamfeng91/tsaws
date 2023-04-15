# AWS::QuickSight::DataSet TransformOperation<a name="aws-properties-quicksight-dataset-transformoperation"></a>

A data transformation on a logical table\. This is a variant type structure\. For this structure to be valid, only one of the attributes can be non\-null\.

## Syntax<a name="aws-properties-quicksight-dataset-transformoperation-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-dataset-transformoperation-syntax.json"></a>

```
{
  "[CastColumnTypeOperation](#cfn-quicksight-dataset-transformoperation-castcolumntypeoperation)" : CastColumnTypeOperation,
  "[CreateColumnsOperation](#cfn-quicksight-dataset-transformoperation-createcolumnsoperation)" : CreateColumnsOperation,
  "[FilterOperation](#cfn-quicksight-dataset-transformoperation-filteroperation)" : FilterOperation,
  "[ProjectOperation](#cfn-quicksight-dataset-transformoperation-projectoperation)" : ProjectOperation,
  "[RenameColumnOperation](#cfn-quicksight-dataset-transformoperation-renamecolumnoperation)" : RenameColumnOperation,
  "[TagColumnOperation](#cfn-quicksight-dataset-transformoperation-tagcolumnoperation)" : TagColumnOperation
}
```

### YAML<a name="aws-properties-quicksight-dataset-transformoperation-syntax.yaml"></a>

```
  [CastColumnTypeOperation](#cfn-quicksight-dataset-transformoperation-castcolumntypeoperation):
    CastColumnTypeOperation
  [CreateColumnsOperation](#cfn-quicksight-dataset-transformoperation-createcolumnsoperation):
    CreateColumnsOperation
  [FilterOperation](#cfn-quicksight-dataset-transformoperation-filteroperation):
    FilterOperation
  [ProjectOperation](#cfn-quicksight-dataset-transformoperation-projectoperation):
    ProjectOperation
  [RenameColumnOperation](#cfn-quicksight-dataset-transformoperation-renamecolumnoperation):
    RenameColumnOperation
  [TagColumnOperation](#cfn-quicksight-dataset-transformoperation-tagcolumnoperation):
    TagColumnOperation
```

## Properties<a name="aws-properties-quicksight-dataset-transformoperation-properties"></a>

`CastColumnTypeOperation` <a name="cfn-quicksight-dataset-transformoperation-castcolumntypeoperation"></a>
A transform operation that casts a column to a different type\.  
_Required_: No  
_Type_: [CastColumnTypeOperation](aws-properties-quicksight-dataset-castcolumntypeoperation.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`CreateColumnsOperation` <a name="cfn-quicksight-dataset-transformoperation-createcolumnsoperation"></a>
An operation that creates calculated columns\. Columns created in one such operation form a lexical closure\.  
_Required_: No  
_Type_: [CreateColumnsOperation](aws-properties-quicksight-dataset-createcolumnsoperation.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`FilterOperation` <a name="cfn-quicksight-dataset-transformoperation-filteroperation"></a>
An operation that filters rows based on some condition\.  
_Required_: No  
_Type_: [FilterOperation](aws-properties-quicksight-dataset-filteroperation.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`ProjectOperation` <a name="cfn-quicksight-dataset-transformoperation-projectoperation"></a>
An operation that projects columns\. Operations that come after a projection can only refer to projected columns\.  
_Required_: No  
_Type_: [ProjectOperation](aws-properties-quicksight-dataset-projectoperation.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`RenameColumnOperation` <a name="cfn-quicksight-dataset-transformoperation-renamecolumnoperation"></a>
An operation that renames a column\.  
_Required_: No  
_Type_: [RenameColumnOperation](aws-properties-quicksight-dataset-renamecolumnoperation.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`TagColumnOperation` <a name="cfn-quicksight-dataset-transformoperation-tagcolumnoperation"></a>
An operation that tags a column with additional information\.  
_Required_: No  
_Type_: [TagColumnOperation](aws-properties-quicksight-dataset-tagcolumnoperation.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
