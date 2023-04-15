# AWS::SageMaker::FeatureGroup OfflineStoreConfig<a name="aws-properties-sagemaker-featuregroup-offlinestoreconfig"></a>

The configuration of an `OfflineStore`\.

Provide an `OfflineStoreConfig` in a request to `CreateFeatureGroup` to create an `OfflineStore`\.

To encrypt an `OfflineStore` using at rest data encryption, specify AWS Key Management Service \(KMS\) key ID, or `KMSKeyId`, in `S3StorageConfig`\.

## Syntax<a name="aws-properties-sagemaker-featuregroup-offlinestoreconfig-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-sagemaker-featuregroup-offlinestoreconfig-syntax.json"></a>

```
{
  "[DataCatalogConfig](#cfn-sagemaker-featuregroup-offlinestoreconfig-datacatalogconfig)" : DataCatalogConfig,
  "[DisableGlueTableCreation](#cfn-sagemaker-featuregroup-offlinestoreconfig-disablegluetablecreation)" : Boolean,
  "[S3StorageConfig](#cfn-sagemaker-featuregroup-offlinestoreconfig-s3storageconfig)" : S3StorageConfig,
  "[TableFormat](#cfn-sagemaker-featuregroup-offlinestoreconfig-tableformat)" : String
}
```

### YAML<a name="aws-properties-sagemaker-featuregroup-offlinestoreconfig-syntax.yaml"></a>

```
  [DataCatalogConfig](#cfn-sagemaker-featuregroup-offlinestoreconfig-datacatalogconfig):
    DataCatalogConfig
  [DisableGlueTableCreation](#cfn-sagemaker-featuregroup-offlinestoreconfig-disablegluetablecreation): Boolean
  [S3StorageConfig](#cfn-sagemaker-featuregroup-offlinestoreconfig-s3storageconfig):
    S3StorageConfig
  [TableFormat](#cfn-sagemaker-featuregroup-offlinestoreconfig-tableformat): String
```

## Properties<a name="aws-properties-sagemaker-featuregroup-offlinestoreconfig-properties"></a>

`DataCatalogConfig` <a name="cfn-sagemaker-featuregroup-offlinestoreconfig-datacatalogconfig"></a>
The meta data of the Glue table that is autogenerated when an `OfflineStore` is created\.  
_Required_: No  
_Type_: [DataCatalogConfig](aws-properties-sagemaker-featuregroup-datacatalogconfig.md)  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`DisableGlueTableCreation` <a name="cfn-sagemaker-featuregroup-offlinestoreconfig-disablegluetablecreation"></a>
Set to `True` to disable the automatic creation of an AWS Glue table when configuring an `OfflineStore`\.  
_Required_: No  
_Type_: Boolean  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`S3StorageConfig` <a name="cfn-sagemaker-featuregroup-offlinestoreconfig-s3storageconfig"></a>
The Amazon Simple Storage \(Amazon S3\) location of `OfflineStore`\.  
_Required_: Yes  
_Type_: [S3StorageConfig](aws-properties-sagemaker-featuregroup-s3storageconfig.md)  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`TableFormat` <a name="cfn-sagemaker-featuregroup-offlinestoreconfig-tableformat"></a>
Property description not available\.  
_Required_: No  
_Type_: String  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)