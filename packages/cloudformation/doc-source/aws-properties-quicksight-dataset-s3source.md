# AWS::QuickSight::DataSet S3Source<a name="aws-properties-quicksight-dataset-s3source"></a>

A physical table type for an S3 data source\.

## Syntax<a name="aws-properties-quicksight-dataset-s3source-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-dataset-s3source-syntax.json"></a>

```
{
  "[DataSourceArn](#cfn-quicksight-dataset-s3source-datasourcearn)" : String,
  "[InputColumns](#cfn-quicksight-dataset-s3source-inputcolumns)" : [ InputColumn, ... ],
  "[UploadSettings](#cfn-quicksight-dataset-s3source-uploadsettings)" : UploadSettings
}
```

### YAML<a name="aws-properties-quicksight-dataset-s3source-syntax.yaml"></a>

```
  [DataSourceArn](#cfn-quicksight-dataset-s3source-datasourcearn): String
  [InputColumns](#cfn-quicksight-dataset-s3source-inputcolumns):
    - InputColumn
  [UploadSettings](#cfn-quicksight-dataset-s3source-uploadsettings):
    UploadSettings
```

## Properties<a name="aws-properties-quicksight-dataset-s3source-properties"></a>

`DataSourceArn` <a name="cfn-quicksight-dataset-s3source-datasourcearn"></a>
The Amazon Resource Name \(ARN\) for the data source\.  
_Required_: Yes  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`InputColumns` <a name="cfn-quicksight-dataset-s3source-inputcolumns"></a>
A physical table type for an S3 data source\.  
For files that aren't JSON, only `STRING` data types are supported in input columns\.
_Required_: Yes  
_Type_: List of [InputColumn](aws-properties-quicksight-dataset-inputcolumn.md)  
_Maximum_: `2048`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`UploadSettings` <a name="cfn-quicksight-dataset-s3source-uploadsettings"></a>
Information about the format for the S3 source file or files\.  
_Required_: No  
_Type_: [UploadSettings](aws-properties-quicksight-dataset-uploadsettings.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
