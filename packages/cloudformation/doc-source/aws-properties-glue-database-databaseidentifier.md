# AWS::Glue::Database DatabaseIdentifier<a name="aws-properties-glue-database-databaseidentifier"></a>

A structure that describes a target database for resource linking\.

## Syntax<a name="aws-properties-glue-database-databaseidentifier-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-glue-database-databaseidentifier-syntax.json"></a>

```
{
  "[CatalogId](#cfn-glue-database-databaseidentifier-catalogid)" : String,
  "[DatabaseName](#cfn-glue-database-databaseidentifier-databasename)" : String
}
```

### YAML<a name="aws-properties-glue-database-databaseidentifier-syntax.yaml"></a>

```
  [CatalogId](#cfn-glue-database-databaseidentifier-catalogid): String
  [DatabaseName](#cfn-glue-database-databaseidentifier-databasename): String
```

## Properties<a name="aws-properties-glue-database-databaseidentifier-properties"></a>

`CatalogId` <a name="cfn-glue-database-databaseidentifier-catalogid"></a>
The ID of the Data Catalog in which the database resides\.  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`DatabaseName` <a name="cfn-glue-database-databaseidentifier-databasename"></a>
The name of the catalog database\.  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
