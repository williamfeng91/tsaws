# AWS::DynamoDB::Table LocalSecondaryIndex<a name="aws-properties-dynamodb-table-localsecondaryindex"></a>

Represents the properties of a local secondary index\. A local secondary index can only be created when its parent table is created\.

## Syntax<a name="aws-properties-dynamodb-table-localsecondaryindex-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-dynamodb-table-localsecondaryindex-syntax.json"></a>

```
{
  "[IndexName](#cfn-dynamodb-table-localsecondaryindex-indexname)" : String,
  "[KeySchema](#cfn-dynamodb-table-localsecondaryindex-keyschema)" : [ KeySchema, ... ],
  "[Projection](#cfn-dynamodb-table-localsecondaryindex-projection)" : Projection
}
```

### YAML<a name="aws-properties-dynamodb-table-localsecondaryindex-syntax.yaml"></a>

```
  [IndexName](#cfn-dynamodb-table-localsecondaryindex-indexname): String
  [KeySchema](#cfn-dynamodb-table-localsecondaryindex-keyschema):
    - KeySchema
  [Projection](#cfn-dynamodb-table-localsecondaryindex-projection):
    Projection
```

## Properties<a name="aws-properties-dynamodb-table-localsecondaryindex-properties"></a>

`IndexName` <a name="cfn-dynamodb-table-localsecondaryindex-indexname"></a>
The name of the local secondary index\. The name must be unique among all other indexes on this table\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `3`  
_Maximum_: `255`  
_Pattern_: `[a-zA-Z0-9_.-]+`  
_Update requires_: Updates are not supported\.

`KeySchema` <a name="cfn-dynamodb-table-localsecondaryindex-keyschema"></a>
The complete key schema for the local secondary index, consisting of one or more pairs of attribute names and key types:

- `HASH` \- partition key
- `RANGE` \- sort key
  The partition key of an item is also known as its _hash attribute_\. The term "hash attribute" derives from DynamoDB's usage of an internal hash function to evenly distribute data items across partitions, based on their partition key values\.  
  The sort key of an item is also known as its _range attribute_\. The term "range attribute" derives from the way DynamoDB stores items with the same partition key physically close together, in sorted order by the sort key value\.
  _Required_: Yes  
  _Type_: [List](aws-properties-dynamodb-table-keyschema.md) of [KeySchema](aws-properties-dynamodb-table-keyschema.md)  
  _Maximum_: `2`  
  _Update requires_: Updates are not supported\.

`Projection` <a name="cfn-dynamodb-table-localsecondaryindex-projection"></a>
Represents attributes that are copied \(projected\) from the table into the local secondary index\. These are in addition to the primary key attributes and index key attributes, which are automatically projected\.  
_Required_: Yes  
_Type_: [Projection](aws-properties-dynamodb-table-projection.md)  
_Update requires_: Updates are not supported\.

## See also<a name="aws-properties-dynamodb-table-localsecondaryindex--seealso"></a>

For an example of a declared local secondary index, see [AWS::DynamoDB::Table](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-table.html)\.
