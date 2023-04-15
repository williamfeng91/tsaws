# AWS::Personalize::Dataset DataSource<a name="aws-properties-personalize-dataset-datasource"></a>

Describes the data source that contains the data to upload to a dataset\.

## Syntax<a name="aws-properties-personalize-dataset-datasource-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-personalize-dataset-datasource-syntax.json"></a>

```
{
  "[DataLocation](#cfn-personalize-dataset-datasource-datalocation)" : String
}
```

### YAML<a name="aws-properties-personalize-dataset-datasource-syntax.yaml"></a>

```
  [DataLocation](#cfn-personalize-dataset-datasource-datalocation): String
```

## Properties<a name="aws-properties-personalize-dataset-datasource-properties"></a>

`DataLocation` <a name="cfn-personalize-dataset-datasource-datalocation"></a>
The path to the Amazon S3 bucket where the data that you want to upload to your dataset is stored\. For example:  
 `s3://bucket-name/folder-name/`  
_Required_: No  
_Type_: String  
_Maximum_: `256`  
_Pattern_: `(s3|http|https)://.+`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
