# AWS::Glue::Partition SchemaReference<a name="aws-properties-glue-partition-schemareference"></a>

An object that references a schema stored in the AWS Glue Schema Registry\.

## Syntax<a name="aws-properties-glue-partition-schemareference-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-glue-partition-schemareference-syntax.json"></a>

```
{
  "[SchemaId](#cfn-glue-partition-schemareference-schemaid)" : SchemaId,
  "[SchemaVersionId](#cfn-glue-partition-schemareference-schemaversionid)" : String,
  "[SchemaVersionNumber](#cfn-glue-partition-schemareference-schemaversionnumber)" : Integer
}
```

### YAML<a name="aws-properties-glue-partition-schemareference-syntax.yaml"></a>

```
  [SchemaId](#cfn-glue-partition-schemareference-schemaid):
    SchemaId
  [SchemaVersionId](#cfn-glue-partition-schemareference-schemaversionid): String
  [SchemaVersionNumber](#cfn-glue-partition-schemareference-schemaversionnumber): Integer
```

## Properties<a name="aws-properties-glue-partition-schemareference-properties"></a>

`SchemaId` <a name="cfn-glue-partition-schemareference-schemaid"></a>
A structure that contains schema identity fields\. Either this or the `SchemaVersionId` has to be provided\.  
_Required_: No  
_Type_: [SchemaId](aws-properties-glue-partition-schemaid.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`SchemaVersionId` <a name="cfn-glue-partition-schemareference-schemaversionid"></a>
The unique ID assigned to a version of the schema\. Either this or the `SchemaId` has to be provided\.  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`SchemaVersionNumber` <a name="cfn-glue-partition-schemareference-schemaversionnumber"></a>
The version number of the schema\.  
_Required_: No  
_Type_: Integer  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
