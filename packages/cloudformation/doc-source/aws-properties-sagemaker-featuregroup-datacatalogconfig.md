# AWS::SageMaker::FeatureGroup DataCatalogConfig<a name="aws-properties-sagemaker-featuregroup-datacatalogconfig"></a>

The meta data of the Glue table which serves as data catalog for the `OfflineStore`\.

## Syntax<a name="aws-properties-sagemaker-featuregroup-datacatalogconfig-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-sagemaker-featuregroup-datacatalogconfig-syntax.json"></a>

```
{
  "[Catalog](#cfn-sagemaker-featuregroup-datacatalogconfig-catalog)" : String,
  "[Database](#cfn-sagemaker-featuregroup-datacatalogconfig-database)" : String,
  "[TableName](#cfn-sagemaker-featuregroup-datacatalogconfig-tablename)" : String
}
```

### YAML<a name="aws-properties-sagemaker-featuregroup-datacatalogconfig-syntax.yaml"></a>

```
  [Catalog](#cfn-sagemaker-featuregroup-datacatalogconfig-catalog): String
  [Database](#cfn-sagemaker-featuregroup-datacatalogconfig-database): String
  [TableName](#cfn-sagemaker-featuregroup-datacatalogconfig-tablename): String
```

## Properties<a name="aws-properties-sagemaker-featuregroup-datacatalogconfig-properties"></a>

`Catalog` <a name="cfn-sagemaker-featuregroup-datacatalogconfig-catalog"></a>
The name of the Glue table catalog\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `255`  
_Pattern_: `[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\t]*`  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`Database` <a name="cfn-sagemaker-featuregroup-datacatalogconfig-database"></a>
The name of the Glue table database\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `255`  
_Pattern_: `[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\t]*`  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`TableName` <a name="cfn-sagemaker-featuregroup-datacatalogconfig-tablename"></a>
The name of the Glue table\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `255`  
_Pattern_: `[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\t]*`  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
