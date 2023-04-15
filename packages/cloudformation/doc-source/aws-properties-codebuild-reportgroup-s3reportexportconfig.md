# AWS::CodeBuild::ReportGroup S3ReportExportConfig<a name="aws-properties-codebuild-reportgroup-s3reportexportconfig"></a>

Information about the S3 bucket where the raw data of a report are exported\.

## Syntax<a name="aws-properties-codebuild-reportgroup-s3reportexportconfig-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-codebuild-reportgroup-s3reportexportconfig-syntax.json"></a>

```
{
  "[Bucket](#cfn-codebuild-reportgroup-s3reportexportconfig-bucket)" : String,
  "[BucketOwner](#cfn-codebuild-reportgroup-s3reportexportconfig-bucketowner)" : String,
  "[EncryptionDisabled](#cfn-codebuild-reportgroup-s3reportexportconfig-encryptiondisabled)" : Boolean,
  "[EncryptionKey](#cfn-codebuild-reportgroup-s3reportexportconfig-encryptionkey)" : String,
  "[Packaging](#cfn-codebuild-reportgroup-s3reportexportconfig-packaging)" : String,
  "[Path](#cfn-codebuild-reportgroup-s3reportexportconfig-path)" : String
}
```

### YAML<a name="aws-properties-codebuild-reportgroup-s3reportexportconfig-syntax.yaml"></a>

```
  [Bucket](#cfn-codebuild-reportgroup-s3reportexportconfig-bucket): String
  [BucketOwner](#cfn-codebuild-reportgroup-s3reportexportconfig-bucketowner): String
  [EncryptionDisabled](#cfn-codebuild-reportgroup-s3reportexportconfig-encryptiondisabled): Boolean
  [EncryptionKey](#cfn-codebuild-reportgroup-s3reportexportconfig-encryptionkey): String
  [Packaging](#cfn-codebuild-reportgroup-s3reportexportconfig-packaging): String
  [Path](#cfn-codebuild-reportgroup-s3reportexportconfig-path): String
```

## Properties<a name="aws-properties-codebuild-reportgroup-s3reportexportconfig-properties"></a>

`Bucket` <a name="cfn-codebuild-reportgroup-s3reportexportconfig-bucket"></a>
The name of the S3 bucket where the raw data of a report are exported\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`BucketOwner` <a name="cfn-codebuild-reportgroup-s3reportexportconfig-bucketowner"></a>
The AWS account identifier of the owner of the Amazon S3 bucket\. This allows report data to be exported to an Amazon S3 bucket that is owned by an account other than the account running the build\.  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`EncryptionDisabled` <a name="cfn-codebuild-reportgroup-s3reportexportconfig-encryptiondisabled"></a>
A boolean value that specifies if the results of a report are encrypted\.  
_Required_: No  
_Type_: Boolean  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`EncryptionKey` <a name="cfn-codebuild-reportgroup-s3reportexportconfig-encryptionkey"></a>
The encryption key for the report's encrypted raw data\.  
_Required_: No  
_Type_: String  
_Minimum_: `1`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Packaging` <a name="cfn-codebuild-reportgroup-s3reportexportconfig-packaging"></a>
The type of build output artifact to create\. Valid values include:

- `NONE`: CodeBuild creates the raw data in the output bucket\. This is the default if packaging is not specified\.
- `ZIP`: CodeBuild creates a ZIP file with the raw data in the output bucket\.
  _Required_: No  
  _Type_: String  
  _Allowed values_: `NONE | ZIP`  
  _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Path` <a name="cfn-codebuild-reportgroup-s3reportexportconfig-path"></a>
The path to the exported report's raw data results\.  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
