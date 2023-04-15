# AWS::CodePipeline::Pipeline ArtifactStore<a name="aws-properties-codepipeline-pipeline-artifactstore"></a>

The S3 bucket where artifacts for the pipeline are stored\.

**Note**  
You must include either `artifactStore` or `artifactStores` in your pipeline, but you cannot use both\. If you create a cross\-region action in your pipeline, you must use `artifactStores`\.

## Syntax<a name="aws-properties-codepipeline-pipeline-artifactstore-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-codepipeline-pipeline-artifactstore-syntax.json"></a>

```
{
  "[EncryptionKey](#cfn-codepipeline-pipeline-artifactstore-encryptionkey)" : EncryptionKey,
  "[Location](#cfn-codepipeline-pipeline-artifactstore-location)" : String,
  "[Type](#cfn-codepipeline-pipeline-artifactstore-type)" : String
}
```

### YAML<a name="aws-properties-codepipeline-pipeline-artifactstore-syntax.yaml"></a>

```
  [EncryptionKey](#cfn-codepipeline-pipeline-artifactstore-encryptionkey):
    EncryptionKey
  [Location](#cfn-codepipeline-pipeline-artifactstore-location): String
  [Type](#cfn-codepipeline-pipeline-artifactstore-type): String
```

## Properties<a name="aws-properties-codepipeline-pipeline-artifactstore-properties"></a>

`EncryptionKey` <a name="cfn-codepipeline-pipeline-artifactstore-encryptionkey"></a>
The encryption key used to encrypt the data in the artifact store, such as an AWS Key Management Service \(AWS KMS\) key\. If this is undefined, the default key for Amazon S3 is used\. To see an example artifact store encryption key field, see the example structure here: [AWS::CodePipeline::Pipeline](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codepipeline-pipeline.html)\.  
_Required_: No  
_Type_: [EncryptionKey](aws-properties-codepipeline-pipeline-artifactstore-encryptionkey.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Location` <a name="cfn-codepipeline-pipeline-artifactstore-location"></a>
The S3 bucket used for storing the artifacts for a pipeline\. You can specify the name of an S3 bucket but not a folder in the bucket\. A folder to contain the pipeline artifacts is created for you based on the name of the pipeline\. You can use any S3 bucket in the same AWS Region as the pipeline to store your pipeline artifacts\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `3`  
_Maximum_: `63`  
_Pattern_: `[a-zA-Z0-9\-\.]+`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Type` <a name="cfn-codepipeline-pipeline-artifactstore-type"></a>
The type of the artifact store, such as S3\.  
_Required_: Yes  
_Type_: String  
_Allowed values_: `S3`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
