# AWS::SageMaker::ModelQualityJobDefinition BatchTransformInput<a name="aws-properties-sagemaker-modelqualityjobdefinition-batchtransforminput"></a>

<a name="aws-properties-sagemaker-modelqualityjobdefinition-batchtransforminput-description"></a>The `BatchTransformInput` property type specifies Property description not available\. for an [AWS::SageMaker::ModelQualityJobDefinition](aws-resource-sagemaker-modelqualityjobdefinition.md)\.

## Syntax<a name="aws-properties-sagemaker-modelqualityjobdefinition-batchtransforminput-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-sagemaker-modelqualityjobdefinition-batchtransforminput-syntax.json"></a>

```
{
  "[DataCapturedDestinationS3Uri](#cfn-sagemaker-modelqualityjobdefinition-batchtransforminput-datacaptureddestinations3uri)" : String,
  "[DatasetFormat](#cfn-sagemaker-modelqualityjobdefinition-batchtransforminput-datasetformat)" : DatasetFormat,
  "[EndTimeOffset](#cfn-sagemaker-modelqualityjobdefinition-batchtransforminput-endtimeoffset)" : String,
  "[InferenceAttribute](#cfn-sagemaker-modelqualityjobdefinition-batchtransforminput-inferenceattribute)" : String,
  "[LocalPath](#cfn-sagemaker-modelqualityjobdefinition-batchtransforminput-localpath)" : String,
  "[ProbabilityAttribute](#cfn-sagemaker-modelqualityjobdefinition-batchtransforminput-probabilityattribute)" : String,
  "[ProbabilityThresholdAttribute](#cfn-sagemaker-modelqualityjobdefinition-batchtransforminput-probabilitythresholdattribute)" : Double,
  "[S3DataDistributionType](#cfn-sagemaker-modelqualityjobdefinition-batchtransforminput-s3datadistributiontype)" : String,
  "[S3InputMode](#cfn-sagemaker-modelqualityjobdefinition-batchtransforminput-s3inputmode)" : String,
  "[StartTimeOffset](#cfn-sagemaker-modelqualityjobdefinition-batchtransforminput-starttimeoffset)" : String
}
```

### YAML<a name="aws-properties-sagemaker-modelqualityjobdefinition-batchtransforminput-syntax.yaml"></a>

```
  [DataCapturedDestinationS3Uri](#cfn-sagemaker-modelqualityjobdefinition-batchtransforminput-datacaptureddestinations3uri): String
  [DatasetFormat](#cfn-sagemaker-modelqualityjobdefinition-batchtransforminput-datasetformat):
    DatasetFormat
  [EndTimeOffset](#cfn-sagemaker-modelqualityjobdefinition-batchtransforminput-endtimeoffset): String
  [InferenceAttribute](#cfn-sagemaker-modelqualityjobdefinition-batchtransforminput-inferenceattribute): String
  [LocalPath](#cfn-sagemaker-modelqualityjobdefinition-batchtransforminput-localpath): String
  [ProbabilityAttribute](#cfn-sagemaker-modelqualityjobdefinition-batchtransforminput-probabilityattribute): String
  [ProbabilityThresholdAttribute](#cfn-sagemaker-modelqualityjobdefinition-batchtransforminput-probabilitythresholdattribute): Double
  [S3DataDistributionType](#cfn-sagemaker-modelqualityjobdefinition-batchtransforminput-s3datadistributiontype): String
  [S3InputMode](#cfn-sagemaker-modelqualityjobdefinition-batchtransforminput-s3inputmode): String
  [StartTimeOffset](#cfn-sagemaker-modelqualityjobdefinition-batchtransforminput-starttimeoffset): String
```

## Properties<a name="aws-properties-sagemaker-modelqualityjobdefinition-batchtransforminput-properties"></a>

`DataCapturedDestinationS3Uri` <a name="cfn-sagemaker-modelqualityjobdefinition-batchtransforminput-datacaptureddestinations3uri"></a>
Property description not available\.  
_Required_: Yes  
_Type_: String  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`DatasetFormat` <a name="cfn-sagemaker-modelqualityjobdefinition-batchtransforminput-datasetformat"></a>
Property description not available\.  
_Required_: Yes  
_Type_: [DatasetFormat](aws-properties-sagemaker-modelqualityjobdefinition-datasetformat.md)  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`EndTimeOffset` <a name="cfn-sagemaker-modelqualityjobdefinition-batchtransforminput-endtimeoffset"></a>
Property description not available\.  
_Required_: No  
_Type_: String  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`InferenceAttribute` <a name="cfn-sagemaker-modelqualityjobdefinition-batchtransforminput-inferenceattribute"></a>
Property description not available\.  
_Required_: No  
_Type_: String  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`LocalPath` <a name="cfn-sagemaker-modelqualityjobdefinition-batchtransforminput-localpath"></a>
Property description not available\.  
_Required_: Yes  
_Type_: String  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`ProbabilityAttribute` <a name="cfn-sagemaker-modelqualityjobdefinition-batchtransforminput-probabilityattribute"></a>
Property description not available\.  
_Required_: No  
_Type_: String  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`ProbabilityThresholdAttribute` <a name="cfn-sagemaker-modelqualityjobdefinition-batchtransforminput-probabilitythresholdattribute"></a>
Property description not available\.  
_Required_: No  
_Type_: Double  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`S3DataDistributionType` <a name="cfn-sagemaker-modelqualityjobdefinition-batchtransforminput-s3datadistributiontype"></a>
Property description not available\.  
_Required_: No  
_Type_: String  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`S3InputMode` <a name="cfn-sagemaker-modelqualityjobdefinition-batchtransforminput-s3inputmode"></a>
Property description not available\.  
_Required_: No  
_Type_: String  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`StartTimeOffset` <a name="cfn-sagemaker-modelqualityjobdefinition-batchtransforminput-starttimeoffset"></a>
Property description not available\.  
_Required_: No  
_Type_: String  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
