# AWS::DynamoDB::GlobalTable AttributeDefinition<a name="aws-properties-dynamodb-globaltable-attributedefinition"></a>

Represents an attribute for describing the key schema for the table and indexes\.

## Syntax<a name="aws-properties-dynamodb-globaltable-attributedefinition-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-dynamodb-globaltable-attributedefinition-syntax.json"></a>

```
{
  "[AttributeName](#cfn-dynamodb-globaltable-attributedefinition-attributename)" : String,
  "[AttributeType](#cfn-dynamodb-globaltable-attributedefinition-attributetype)" : String
}
```

### YAML<a name="aws-properties-dynamodb-globaltable-attributedefinition-syntax.yaml"></a>

```
  [AttributeName](#cfn-dynamodb-globaltable-attributedefinition-attributename): String
  [AttributeType](#cfn-dynamodb-globaltable-attributedefinition-attributetype): String
```

## Properties<a name="aws-properties-dynamodb-globaltable-attributedefinition-properties"></a>

`AttributeName` <a name="cfn-dynamodb-globaltable-attributedefinition-attributename"></a>
A name for the attribute\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `255`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`AttributeType` <a name="cfn-dynamodb-globaltable-attributedefinition-attributetype"></a>
The data type for the attribute, where:

- `S` \- the attribute is of type String
- `N` \- the attribute is of type Number
- `B` \- the attribute is of type Binary
  _Required_: Yes  
  _Type_: String  
  _Allowed values_: `B | N | S`  
  _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)