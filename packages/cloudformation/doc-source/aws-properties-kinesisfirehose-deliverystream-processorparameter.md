# AWS::KinesisFirehose::DeliveryStream ProcessorParameter<a name="aws-properties-kinesisfirehose-deliverystream-processorparameter"></a>

The `ProcessorParameter` property specifies a processor parameter in a data processor for an Amazon Kinesis Data Firehose delivery stream\.

## Syntax<a name="aws-properties-kinesisfirehose-deliverystream-processorparameter-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-kinesisfirehose-deliverystream-processorparameter-syntax.json"></a>

```
{
  "[ParameterName](#cfn-kinesisfirehose-deliverystream-processorparameter-parametername)" : String,
  "[ParameterValue](#cfn-kinesisfirehose-deliverystream-processorparameter-parametervalue)" : String
}
```

### YAML<a name="aws-properties-kinesisfirehose-deliverystream-processorparameter-syntax.yaml"></a>

```
  [ParameterName](#cfn-kinesisfirehose-deliverystream-processorparameter-parametername): String
  [ParameterValue](#cfn-kinesisfirehose-deliverystream-processorparameter-parametervalue): String
```

## Properties<a name="aws-properties-kinesisfirehose-deliverystream-processorparameter-properties"></a>

`ParameterName` <a name="cfn-kinesisfirehose-deliverystream-processorparameter-parametername"></a>
The name of the parameter\. Currently the following default values are supported: 3 for `NumberOfRetries` and 60 for the `BufferIntervalInSeconds`\. The `BufferSizeInMBs` ranges between 0\.2 MB and up to 3MB\. The default buffering hint is 1MB for all destinations, except Splunk\. For Splunk, the default buffering hint is 256 KB\.  
_Required_: Yes  
_Type_: String  
_Allowed values_: `BufferIntervalInSeconds | BufferSizeInMBs | Delimiter | JsonParsingEngine | LambdaArn | MetadataExtractionQuery | NumberOfRetries | RoleArn | SubRecordType`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`ParameterValue` <a name="cfn-kinesisfirehose-deliverystream-processorparameter-parametervalue"></a>
The parameter value\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `5120`  
_Pattern_: `^(?!\s*$).+`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
