# AWS::SageMaker::FeatureGroup FeatureDefinition<a name="aws-properties-sagemaker-featuregroup-featuredefinition"></a>

A list of features\. You must include `FeatureName` and `FeatureType`\. Valid feature `FeatureType`s are `Integral`, `Fractional` and `String`\.

## Syntax<a name="aws-properties-sagemaker-featuregroup-featuredefinition-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-sagemaker-featuregroup-featuredefinition-syntax.json"></a>

```
{
  "[FeatureName](#cfn-sagemaker-featuregroup-featuredefinition-featurename)" : String,
  "[FeatureType](#cfn-sagemaker-featuregroup-featuredefinition-featuretype)" : String
}
```

### YAML<a name="aws-properties-sagemaker-featuregroup-featuredefinition-syntax.yaml"></a>

```
  [FeatureName](#cfn-sagemaker-featuregroup-featuredefinition-featurename): String
  [FeatureType](#cfn-sagemaker-featuregroup-featuredefinition-featuretype): String
```

## Properties<a name="aws-properties-sagemaker-featuregroup-featuredefinition-properties"></a>

`FeatureName` <a name="cfn-sagemaker-featuregroup-featuredefinition-featurename"></a>
The name of a feature\. The type must be a string\. `FeatureName` cannot be any of the following: `is_deleted`, `write_time`, `api_invocation_time`\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `64`  
_Pattern_: `^[a-zA-Z0-9]([-_]*[a-zA-Z0-9]){0,63}`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`FeatureType` <a name="cfn-sagemaker-featuregroup-featuredefinition-featuretype"></a>
The value type of a feature\. Valid values are Integral, Fractional, or String\.  
_Required_: Yes  
_Type_: String  
_Allowed values_: `Fractional | Integral | String`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
