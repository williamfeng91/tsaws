# AWS::SageMaker::Domain SharingSettings<a name="aws-properties-sagemaker-domain-sharingsettings"></a>

Specifies options when sharing an Amazon SageMaker Studio notebook\. These settings are specified as part of `DefaultUserSettings` when the [CreateDomain](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateDomain.html) API is called, and as part of `UserSettings` when the [CreateUserProfile](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateUserProfile.html) API is called\.

## Syntax<a name="aws-properties-sagemaker-domain-sharingsettings-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-sagemaker-domain-sharingsettings-syntax.json"></a>

```
{
  "[NotebookOutputOption](#cfn-sagemaker-domain-sharingsettings-notebookoutputoption)" : String,
  "[S3KmsKeyId](#cfn-sagemaker-domain-sharingsettings-s3kmskeyid)" : String,
  "[S3OutputPath](#cfn-sagemaker-domain-sharingsettings-s3outputpath)" : String
}
```

### YAML<a name="aws-properties-sagemaker-domain-sharingsettings-syntax.yaml"></a>

```
  [NotebookOutputOption](#cfn-sagemaker-domain-sharingsettings-notebookoutputoption): String
  [S3KmsKeyId](#cfn-sagemaker-domain-sharingsettings-s3kmskeyid): String
  [S3OutputPath](#cfn-sagemaker-domain-sharingsettings-s3outputpath): String
```

## Properties<a name="aws-properties-sagemaker-domain-sharingsettings-properties"></a>

`NotebookOutputOption` <a name="cfn-sagemaker-domain-sharingsettings-notebookoutputoption"></a>
Whether to include the notebook cell output when sharing the notebook\. The default is `Disabled`\.  
_Required_: No  
_Type_: String  
_Allowed values_: `Allowed | Disabled`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`S3KmsKeyId` <a name="cfn-sagemaker-domain-sharingsettings-s3kmskeyid"></a>
When `NotebookOutputOption` is `Allowed`, the AWS Key Management Service \(KMS\) encryption key ID used to encrypt the notebook cell output in the Amazon S3 bucket\.  
_Required_: No  
_Type_: String  
_Maximum_: `2048`  
_Pattern_: `.*`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`S3OutputPath` <a name="cfn-sagemaker-domain-sharingsettings-s3outputpath"></a>
When `NotebookOutputOption` is `Allowed`, the Amazon S3 bucket used to store the shared notebook snapshots\.  
_Required_: No  
_Type_: String  
_Maximum_: `1024`  
_Pattern_: `^(https|s3)://([^/]+)/?(.*)$`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
