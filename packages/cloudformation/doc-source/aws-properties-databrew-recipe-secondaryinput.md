# AWS::DataBrew::Recipe SecondaryInput<a name="aws-properties-databrew-recipe-secondaryinput"></a>

Represents secondary inputs in a UNION transform\.

## Syntax<a name="aws-properties-databrew-recipe-secondaryinput-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-databrew-recipe-secondaryinput-syntax.json"></a>

```
{
  "[DataCatalogInputDefinition](#cfn-databrew-recipe-secondaryinput-datacataloginputdefinition)" : DataCatalogInputDefinition,
  "[S3InputDefinition](#cfn-databrew-recipe-secondaryinput-s3inputdefinition)" : S3Location
}
```

### YAML<a name="aws-properties-databrew-recipe-secondaryinput-syntax.yaml"></a>

```
  [DataCatalogInputDefinition](#cfn-databrew-recipe-secondaryinput-datacataloginputdefinition):
    DataCatalogInputDefinition
  [S3InputDefinition](#cfn-databrew-recipe-secondaryinput-s3inputdefinition):
    S3Location
```

## Properties<a name="aws-properties-databrew-recipe-secondaryinput-properties"></a>

`DataCatalogInputDefinition` <a name="cfn-databrew-recipe-secondaryinput-datacataloginputdefinition"></a>
The AWS Glue Data Catalog parameters for the data\.  
_Required_: No  
_Type_: [DataCatalogInputDefinition](aws-properties-databrew-recipe-datacataloginputdefinition.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`S3InputDefinition` <a name="cfn-databrew-recipe-secondaryinput-s3inputdefinition"></a>
The Amazon S3 location where the data is stored\.  
_Required_: No  
_Type_: [S3Location](aws-properties-databrew-recipe-s3location.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
