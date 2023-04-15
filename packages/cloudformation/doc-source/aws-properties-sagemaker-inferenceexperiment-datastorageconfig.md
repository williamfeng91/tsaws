# AWS::SageMaker::InferenceExperiment DataStorageConfig<a name="aws-properties-sagemaker-inferenceexperiment-datastorageconfig"></a>

The Amazon S3 location and configuration for storing inference request and response data\.

This is an optional parameter that you can use for data capture\. For more information, see [Capture data](https://docs.aws.amazon.com/sagemaker/latest/dg/model-monitor-data-capture.html)\.

## Syntax<a name="aws-properties-sagemaker-inferenceexperiment-datastorageconfig-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-sagemaker-inferenceexperiment-datastorageconfig-syntax.json"></a>

```
{
  "[ContentType](#cfn-sagemaker-inferenceexperiment-datastorageconfig-contenttype)" : CaptureContentTypeHeader,
  "[Destination](#cfn-sagemaker-inferenceexperiment-datastorageconfig-destination)" : String,
  "[KmsKey](#cfn-sagemaker-inferenceexperiment-datastorageconfig-kmskey)" : String
}
```

### YAML<a name="aws-properties-sagemaker-inferenceexperiment-datastorageconfig-syntax.yaml"></a>

```
  [ContentType](#cfn-sagemaker-inferenceexperiment-datastorageconfig-contenttype):
    CaptureContentTypeHeader
  [Destination](#cfn-sagemaker-inferenceexperiment-datastorageconfig-destination): String
  [KmsKey](#cfn-sagemaker-inferenceexperiment-datastorageconfig-kmskey): String
```

## Properties<a name="aws-properties-sagemaker-inferenceexperiment-datastorageconfig-properties"></a>

`ContentType` <a name="cfn-sagemaker-inferenceexperiment-datastorageconfig-contenttype"></a>
Configuration specifying how to treat different headers\. If no headers are specified SageMaker will by default base64 encode when capturing the data\.  
_Required_: No  
_Type_: [CaptureContentTypeHeader](aws-properties-sagemaker-inferenceexperiment-capturecontenttypeheader.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Destination` <a name="cfn-sagemaker-inferenceexperiment-datastorageconfig-destination"></a>
The Amazon S3 bucket where the inference request and response data is stored\.  
_Required_: Yes  
_Type_: String  
_Maximum_: `512`  
_Pattern_: `^(https|s3)://([^/])/?(.*)$`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`KmsKey` <a name="cfn-sagemaker-inferenceexperiment-datastorageconfig-kmskey"></a>
The AWS Key Management Service key that Amazon SageMaker uses to encrypt captured data at rest using Amazon S3 server\-side encryption\.  
_Required_: No  
_Type_: String  
_Maximum_: `2048`  
_Pattern_: `.*`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
