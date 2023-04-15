# AWS::Glue::Partition Order<a name="aws-properties-glue-partition-order"></a>

Specifies the sort order of a sorted column\.

## Syntax<a name="aws-properties-glue-partition-order-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-glue-partition-order-syntax.json"></a>

```
{
  "[Column](#cfn-glue-partition-order-column)" : String,
  "[SortOrder](#cfn-glue-partition-order-sortorder)" : Integer
}
```

### YAML<a name="aws-properties-glue-partition-order-syntax.yaml"></a>

```
  [Column](#cfn-glue-partition-order-column): String
  [SortOrder](#cfn-glue-partition-order-sortorder): Integer
```

## Properties<a name="aws-properties-glue-partition-order-properties"></a>

`Column` <a name="cfn-glue-partition-order-column"></a>
The name of the column\.  
_Required_: Yes  
_Type_: [String](aws-properties-glue-partition-column.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`SortOrder` <a name="cfn-glue-partition-order-sortorder"></a>
Indicates that the column is sorted in ascending order \(`== 1`\), or in descending order \(`==0`\)\.  
_Required_: No  
_Type_: Integer  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
