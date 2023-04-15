# AWS::DataBrew::Dataset DatabaseInputDefinition<a name="aws-properties-databrew-dataset-databaseinputdefinition"></a>

Connection information for dataset input files stored in a database\.

## Syntax<a name="aws-properties-databrew-dataset-databaseinputdefinition-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-databrew-dataset-databaseinputdefinition-syntax.json"></a>

```
{
  "[DatabaseTableName](#cfn-databrew-dataset-databaseinputdefinition-databasetablename)" : String,
  "[GlueConnectionName](#cfn-databrew-dataset-databaseinputdefinition-glueconnectionname)" : String,
  "[QueryString](#cfn-databrew-dataset-databaseinputdefinition-querystring)" : String,
  "[TempDirectory](#cfn-databrew-dataset-databaseinputdefinition-tempdirectory)" : S3Location
}
```

### YAML<a name="aws-properties-databrew-dataset-databaseinputdefinition-syntax.yaml"></a>

```
  [DatabaseTableName](#cfn-databrew-dataset-databaseinputdefinition-databasetablename): String
  [GlueConnectionName](#cfn-databrew-dataset-databaseinputdefinition-glueconnectionname): String
  [QueryString](#cfn-databrew-dataset-databaseinputdefinition-querystring):
    String
  [TempDirectory](#cfn-databrew-dataset-databaseinputdefinition-tempdirectory):
    S3Location
```

## Properties<a name="aws-properties-databrew-dataset-databaseinputdefinition-properties"></a>

`DatabaseTableName` <a name="cfn-databrew-dataset-databaseinputdefinition-databasetablename"></a>
The table within the target database\.  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`GlueConnectionName` <a name="cfn-databrew-dataset-databaseinputdefinition-glueconnectionname"></a>
The AWS Glue Connection that stores the connection information for the target database\.  
_Required_: Yes  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`QueryString` <a name="cfn-databrew-dataset-databaseinputdefinition-querystring"></a>
Custom SQL to run against the provided AWS Glue connection\. This SQL will be used as the input for DataBrew projects and jobs\.  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`TempDirectory` <a name="cfn-databrew-dataset-databaseinputdefinition-tempdirectory"></a>
An Amazon location that AWS Glue Data Catalog can use as a temporary directory\.  
_Required_: No  
_Type_: [S3Location](aws-properties-databrew-dataset-s3location.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
