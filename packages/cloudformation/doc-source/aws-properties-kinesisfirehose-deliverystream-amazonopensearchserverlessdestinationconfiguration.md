# AWS::KinesisFirehose::DeliveryStream AmazonOpenSearchServerlessDestinationConfiguration<a name="aws-properties-kinesisfirehose-deliverystream-amazonopensearchserverlessdestinationconfiguration"></a>

Describes the configuration of a destination in the Serverless offering for Amazon OpenSearch Service\.

## Syntax<a name="aws-properties-kinesisfirehose-deliverystream-amazonopensearchserverlessdestinationconfiguration-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-kinesisfirehose-deliverystream-amazonopensearchserverlessdestinationconfiguration-syntax.json"></a>

```
{
  "[BufferingHints](#cfn-kinesisfirehose-deliverystream-amazonopensearchserverlessdestinationconfiguration-bufferinghints)" : AmazonOpenSearchServerlessBufferingHints,
  "[CloudWatchLoggingOptions](#cfn-kinesisfirehose-deliverystream-amazonopensearchserverlessdestinationconfiguration-cloudwatchloggingoptions)" : CloudWatchLoggingOptions,
  "[CollectionEndpoint](#cfn-kinesisfirehose-deliverystream-amazonopensearchserverlessdestinationconfiguration-collectionendpoint)" : String,
  "[IndexName](#cfn-kinesisfirehose-deliverystream-amazonopensearchserverlessdestinationconfiguration-indexname)" : String,
  "[ProcessingConfiguration](#cfn-kinesisfirehose-deliverystream-amazonopensearchserverlessdestinationconfiguration-processingconfiguration)" : ProcessingConfiguration,
  "[RetryOptions](#cfn-kinesisfirehose-deliverystream-amazonopensearchserverlessdestinationconfiguration-retryoptions)" : AmazonOpenSearchServerlessRetryOptions,
  "[RoleARN](#cfn-kinesisfirehose-deliverystream-amazonopensearchserverlessdestinationconfiguration-rolearn)" : String,
  "[S3BackupMode](#cfn-kinesisfirehose-deliverystream-amazonopensearchserverlessdestinationconfiguration-s3backupmode)" : String,
  "[S3Configuration](#cfn-kinesisfirehose-deliverystream-amazonopensearchserverlessdestinationconfiguration-s3configuration)" : S3DestinationConfiguration,
  "[VpcConfiguration](#cfn-kinesisfirehose-deliverystream-amazonopensearchserverlessdestinationconfiguration-vpcconfiguration)" : VpcConfiguration
}
```

### YAML<a name="aws-properties-kinesisfirehose-deliverystream-amazonopensearchserverlessdestinationconfiguration-syntax.yaml"></a>

```
  [BufferingHints](#cfn-kinesisfirehose-deliverystream-amazonopensearchserverlessdestinationconfiguration-bufferinghints):
    AmazonOpenSearchServerlessBufferingHints
  [CloudWatchLoggingOptions](#cfn-kinesisfirehose-deliverystream-amazonopensearchserverlessdestinationconfiguration-cloudwatchloggingoptions):
    CloudWatchLoggingOptions
  [CollectionEndpoint](#cfn-kinesisfirehose-deliverystream-amazonopensearchserverlessdestinationconfiguration-collectionendpoint): String
  [IndexName](#cfn-kinesisfirehose-deliverystream-amazonopensearchserverlessdestinationconfiguration-indexname): String
  [ProcessingConfiguration](#cfn-kinesisfirehose-deliverystream-amazonopensearchserverlessdestinationconfiguration-processingconfiguration):
    ProcessingConfiguration
  [RetryOptions](#cfn-kinesisfirehose-deliverystream-amazonopensearchserverlessdestinationconfiguration-retryoptions):
    AmazonOpenSearchServerlessRetryOptions
  [RoleARN](#cfn-kinesisfirehose-deliverystream-amazonopensearchserverlessdestinationconfiguration-rolearn): String
  [S3BackupMode](#cfn-kinesisfirehose-deliverystream-amazonopensearchserverlessdestinationconfiguration-s3backupmode): String
  [S3Configuration](#cfn-kinesisfirehose-deliverystream-amazonopensearchserverlessdestinationconfiguration-s3configuration):
    S3DestinationConfiguration
  [VpcConfiguration](#cfn-kinesisfirehose-deliverystream-amazonopensearchserverlessdestinationconfiguration-vpcconfiguration):
    VpcConfiguration
```

## Properties<a name="aws-properties-kinesisfirehose-deliverystream-amazonopensearchserverlessdestinationconfiguration-properties"></a>

`BufferingHints` <a name="cfn-kinesisfirehose-deliverystream-amazonopensearchserverlessdestinationconfiguration-bufferinghints"></a>
The buffering options\. If no value is specified, the default values for AmazonopensearchserviceBufferingHints are used\.  
_Required_: No  
_Type_: [AmazonOpenSearchServerlessBufferingHints](aws-properties-kinesisfirehose-deliverystream-amazonopensearchserverlessbufferinghints.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`CloudWatchLoggingOptions` <a name="cfn-kinesisfirehose-deliverystream-amazonopensearchserverlessdestinationconfiguration-cloudwatchloggingoptions"></a>
Property description not available\.  
_Required_: No  
_Type_: [CloudWatchLoggingOptions](aws-properties-kinesisfirehose-deliverystream-cloudwatchloggingoptions.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`CollectionEndpoint` <a name="cfn-kinesisfirehose-deliverystream-amazonopensearchserverlessdestinationconfiguration-collectionendpoint"></a>
The endpoint to use when communicating with the collection in the Serverless offering for Amazon OpenSearch Service\.  
_Required_: No  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `512`  
_Pattern_: `https:.*`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`IndexName` <a name="cfn-kinesisfirehose-deliverystream-amazonopensearchserverlessdestinationconfiguration-indexname"></a>
The Serverless offering for Amazon OpenSearch Service index name\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `80`  
_Pattern_: `.*`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`ProcessingConfiguration` <a name="cfn-kinesisfirehose-deliverystream-amazonopensearchserverlessdestinationconfiguration-processingconfiguration"></a>
Property description not available\.  
_Required_: No  
_Type_: [ProcessingConfiguration](aws-properties-kinesisfirehose-deliverystream-processingconfiguration.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`RetryOptions` <a name="cfn-kinesisfirehose-deliverystream-amazonopensearchserverlessdestinationconfiguration-retryoptions"></a>
The retry behavior in case Kinesis Data Firehose is unable to deliver documents to the Serverless offering for Amazon OpenSearch Service\. The default value is 300 \(5 minutes\)\.  
_Required_: No  
_Type_: [AmazonOpenSearchServerlessRetryOptions](aws-properties-kinesisfirehose-deliverystream-amazonopensearchserverlessretryoptions.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`RoleARN` <a name="cfn-kinesisfirehose-deliverystream-amazonopensearchserverlessdestinationconfiguration-rolearn"></a>
The Amazon Resource Name \(ARN\) of the IAM role to be assumed by Kinesis Data Firehose for calling the Serverless offering for Amazon OpenSearch Service Configuration API and for indexing documents\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `512`  
_Pattern_: `arn:.*`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`S3BackupMode` <a name="cfn-kinesisfirehose-deliverystream-amazonopensearchserverlessdestinationconfiguration-s3backupmode"></a>
Defines how documents should be delivered to Amazon S3\. When it is set to FailedDocumentsOnly, Kinesis Data Firehose writes any documents that could not be indexed to the configured Amazon S3 destination, with AmazonOpenSearchService\-failed/ appended to the key prefix\. When set to AllDocuments, Kinesis Data Firehose delivers all incoming records to Amazon S3, and also writes failed documents with AmazonOpenSearchService\-failed/ appended to the prefix\.  
_Required_: No  
_Type_: String  
_Allowed values_: `AllDocuments | FailedDocumentsOnly`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`S3Configuration` <a name="cfn-kinesisfirehose-deliverystream-amazonopensearchserverlessdestinationconfiguration-s3configuration"></a>
Property description not available\.  
_Required_: Yes  
_Type_: [S3DestinationConfiguration](aws-properties-kinesisfirehose-deliverystream-s3destinationconfiguration.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`VpcConfiguration` <a name="cfn-kinesisfirehose-deliverystream-amazonopensearchserverlessdestinationconfiguration-vpcconfiguration"></a>
Property description not available\.  
_Required_: No  
_Type_: [VpcConfiguration](aws-properties-kinesisfirehose-deliverystream-vpcconfiguration.md)  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)