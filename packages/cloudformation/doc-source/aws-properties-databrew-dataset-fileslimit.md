# AWS::DataBrew::Dataset FilesLimit<a name="aws-properties-databrew-dataset-fileslimit"></a>

Represents a limit imposed on number of Amazon S3 files that should be selected for a dataset from a connected Amazon S3 path\.

## Syntax<a name="aws-properties-databrew-dataset-fileslimit-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-databrew-dataset-fileslimit-syntax.json"></a>

```
{
  "[MaxFiles](#cfn-databrew-dataset-fileslimit-maxfiles)" : Integer,
  "[Order](#cfn-databrew-dataset-fileslimit-order)" : String,
  "[OrderedBy](#cfn-databrew-dataset-fileslimit-orderedby)" : String
}
```

### YAML<a name="aws-properties-databrew-dataset-fileslimit-syntax.yaml"></a>

```
  [MaxFiles](#cfn-databrew-dataset-fileslimit-maxfiles): Integer
  [Order](#cfn-databrew-dataset-fileslimit-order): String
  [OrderedBy](#cfn-databrew-dataset-fileslimit-orderedby): String
```

## Properties<a name="aws-properties-databrew-dataset-fileslimit-properties"></a>

`MaxFiles` <a name="cfn-databrew-dataset-fileslimit-maxfiles"></a>
The number of Amazon S3 files to select\.  
_Required_: Yes  
_Type_: Integer  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Order` <a name="cfn-databrew-dataset-fileslimit-order"></a>
A criteria to use for Amazon S3 files sorting before their selection\. By default uses DESCENDING order, i\.e\. most recent files are selected first\. Anotherpossible value is ASCENDING\.  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`OrderedBy` <a name="cfn-databrew-dataset-fileslimit-orderedby"></a>
A criteria to use for Amazon S3 files sorting before their selection\. By default uses LAST_MODIFIED_DATE as a sorting criteria\. Currently it's the only allowed value\.  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
