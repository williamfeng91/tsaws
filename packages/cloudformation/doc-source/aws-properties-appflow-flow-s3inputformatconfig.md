# AWS::AppFlow::Flow S3InputFormatConfig<a name="aws-properties-appflow-flow-s3inputformatconfig"></a>

When you use Amazon S3 as the source, the configuration format that you provide the flow input data\.

## Syntax<a name="aws-properties-appflow-flow-s3inputformatconfig-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-appflow-flow-s3inputformatconfig-syntax.json"></a>

```
{
  "[S3InputFileType](#cfn-appflow-flow-s3inputformatconfig-s3inputfiletype)" : String
}
```

### YAML<a name="aws-properties-appflow-flow-s3inputformatconfig-syntax.yaml"></a>

```
  [S3InputFileType](#cfn-appflow-flow-s3inputformatconfig-s3inputfiletype): String
```

## Properties<a name="aws-properties-appflow-flow-s3inputformatconfig-properties"></a>

`S3InputFileType` <a name="cfn-appflow-flow-s3inputformatconfig-s3inputfiletype"></a>
The file type that Amazon AppFlow gets from your Amazon S3 bucket\.  
_Required_: No  
_Type_: String  
_Allowed values_: `CSV | JSON`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
