# AWS::SageMaker::ModelQualityJobDefinition EndpointInput<a name="aws-properties-sagemaker-modelqualityjobdefinition-endpointinput"></a>

Input object for the endpoint

## Syntax<a name="aws-properties-sagemaker-modelqualityjobdefinition-endpointinput-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-sagemaker-modelqualityjobdefinition-endpointinput-syntax.json"></a>

```
{
  "[EndpointName](#cfn-sagemaker-modelqualityjobdefinition-endpointinput-endpointname)" : String,
  "[EndTimeOffset](#cfn-sagemaker-modelqualityjobdefinition-endpointinput-endtimeoffset)" : String,
  "[InferenceAttribute](#cfn-sagemaker-modelqualityjobdefinition-endpointinput-inferenceattribute)" : String,
  "[LocalPath](#cfn-sagemaker-modelqualityjobdefinition-endpointinput-localpath)" : String,
  "[ProbabilityAttribute](#cfn-sagemaker-modelqualityjobdefinition-endpointinput-probabilityattribute)" : String,
  "[ProbabilityThresholdAttribute](#cfn-sagemaker-modelqualityjobdefinition-endpointinput-probabilitythresholdattribute)" : Double,
  "[S3DataDistributionType](#cfn-sagemaker-modelqualityjobdefinition-endpointinput-s3datadistributiontype)" : String,
  "[S3InputMode](#cfn-sagemaker-modelqualityjobdefinition-endpointinput-s3inputmode)" : String,
  "[StartTimeOffset](#cfn-sagemaker-modelqualityjobdefinition-endpointinput-starttimeoffset)" : String
}
```

### YAML<a name="aws-properties-sagemaker-modelqualityjobdefinition-endpointinput-syntax.yaml"></a>

```
  [EndpointName](#cfn-sagemaker-modelqualityjobdefinition-endpointinput-endpointname): String
  [EndTimeOffset](#cfn-sagemaker-modelqualityjobdefinition-endpointinput-endtimeoffset): String
  [InferenceAttribute](#cfn-sagemaker-modelqualityjobdefinition-endpointinput-inferenceattribute): String
  [LocalPath](#cfn-sagemaker-modelqualityjobdefinition-endpointinput-localpath): String
  [ProbabilityAttribute](#cfn-sagemaker-modelqualityjobdefinition-endpointinput-probabilityattribute): String
  [ProbabilityThresholdAttribute](#cfn-sagemaker-modelqualityjobdefinition-endpointinput-probabilitythresholdattribute): Double
  [S3DataDistributionType](#cfn-sagemaker-modelqualityjobdefinition-endpointinput-s3datadistributiontype): String
  [S3InputMode](#cfn-sagemaker-modelqualityjobdefinition-endpointinput-s3inputmode): String
  [StartTimeOffset](#cfn-sagemaker-modelqualityjobdefinition-endpointinput-starttimeoffset): String
```

## Properties<a name="aws-properties-sagemaker-modelqualityjobdefinition-endpointinput-properties"></a>

`EndpointName` <a name="cfn-sagemaker-modelqualityjobdefinition-endpointinput-endpointname"></a>
An endpoint in customer's account which has enabled `DataCaptureConfig` enabled\.  
_Required_: Yes  
_Type_: String  
_Maximum_: `63`  
_Pattern_: `^[a-zA-Z0-9](-*[a-zA-Z0-9]){0,62}`  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`EndTimeOffset` <a name="cfn-sagemaker-modelqualityjobdefinition-endpointinput-endtimeoffset"></a>
If specified, monitoring jobs substract this time from the end time\. For information about using offsets for scheduling monitoring jobs, see [Schedule Model Quality Monitoring Jobs](https://docs.aws.amazon.com/sagemaker/latest/dg/model-monitor-model-quality-schedule.html)\.  
_Required_: No  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `15`  
_Pattern_: `^.?P.*`  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`InferenceAttribute` <a name="cfn-sagemaker-modelqualityjobdefinition-endpointinput-inferenceattribute"></a>
The attribute of the input data that represents the ground truth label\.  
_Required_: No  
_Type_: String  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`LocalPath` <a name="cfn-sagemaker-modelqualityjobdefinition-endpointinput-localpath"></a>
Path to the filesystem where the endpoint data is available to the container\.  
_Required_: Yes  
_Type_: String  
_Maximum_: `256`  
_Pattern_: `.*`  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`ProbabilityAttribute` <a name="cfn-sagemaker-modelqualityjobdefinition-endpointinput-probabilityattribute"></a>
In a classification problem, the attribute that represents the class probability\.  
_Required_: No  
_Type_: String  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`ProbabilityThresholdAttribute` <a name="cfn-sagemaker-modelqualityjobdefinition-endpointinput-probabilitythresholdattribute"></a>
The threshold for the class probability to be evaluated as a positive result\.  
_Required_: No  
_Type_: Double  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`S3DataDistributionType` <a name="cfn-sagemaker-modelqualityjobdefinition-endpointinput-s3datadistributiontype"></a>
Whether input data distributed in Amazon S3 is fully replicated or sharded by an S3 key\. Defaults to `FullyReplicated`  
_Required_: No  
_Type_: String  
_Allowed values_: `FullyReplicated | ShardedByS3Key`  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`S3InputMode` <a name="cfn-sagemaker-modelqualityjobdefinition-endpointinput-s3inputmode"></a>
Whether the `Pipe` or `File` is used as the input mode for transferring data for the monitoring job\. `Pipe` mode is recommended for large datasets\. `File` mode is useful for small files that fit in memory\. Defaults to `File`\.  
_Required_: No  
_Type_: String  
_Allowed values_: `File | Pipe`  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`StartTimeOffset` <a name="cfn-sagemaker-modelqualityjobdefinition-endpointinput-starttimeoffset"></a>
If specified, monitoring jobs substract this time from the start time\. For information about using offsets for scheduling monitoring jobs, see [Schedule Model Quality Monitoring Jobs](https://docs.aws.amazon.com/sagemaker/latest/dg/model-monitor-model-quality-schedule.html)\.  
_Required_: No  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `15`  
_Pattern_: `^.?P.*`  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
