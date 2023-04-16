# AWS::KafkaConnect::Connector WorkerLogDelivery<a name="aws-properties-kafkaconnect-connector-workerlogdelivery"></a>

Workers can send worker logs to different destination types\. This configuration specifies the details of these destinations\.

## Syntax<a name="aws-properties-kafkaconnect-connector-workerlogdelivery-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-kafkaconnect-connector-workerlogdelivery-syntax.json"></a>

```
{
  "[CloudWatchLogs](#cfn-kafkaconnect-connector-workerlogdelivery-cloudwatchlogs)" : CloudWatchLogsLogDelivery,
  "[Firehose](#cfn-kafkaconnect-connector-workerlogdelivery-firehose)" : FirehoseLogDelivery,
  "[S3](#cfn-kafkaconnect-connector-workerlogdelivery-s3)" : S3LogDelivery
}
```

### YAML<a name="aws-properties-kafkaconnect-connector-workerlogdelivery-syntax.yaml"></a>

```
  [CloudWatchLogs](#cfn-kafkaconnect-connector-workerlogdelivery-cloudwatchlogs):
    CloudWatchLogsLogDelivery
  [Firehose](#cfn-kafkaconnect-connector-workerlogdelivery-firehose):
    FirehoseLogDelivery
  [S3](#cfn-kafkaconnect-connector-workerlogdelivery-s3):
    S3LogDelivery
```

## Properties<a name="aws-properties-kafkaconnect-connector-workerlogdelivery-properties"></a>

`CloudWatchLogs` <a name="cfn-kafkaconnect-connector-workerlogdelivery-cloudwatchlogs"></a>
Details about delivering logs to Amazon CloudWatch Logs\.  
_Required_: No  
_Type_: [CloudWatchLogsLogDelivery](aws-properties-kafkaconnect-connector-cloudwatchlogslogdelivery.md)  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`Firehose` <a name="cfn-kafkaconnect-connector-workerlogdelivery-firehose"></a>
Details about delivering logs to Amazon Kinesis Data Firehose\.  
_Required_: No  
_Type_: [FirehoseLogDelivery](aws-properties-kafkaconnect-connector-firehoselogdelivery.md)  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`S3` <a name="cfn-kafkaconnect-connector-workerlogdelivery-s3"></a>
Details about delivering logs to Amazon S3\.  
_Required_: No  
_Type_: [S3LogDelivery](aws-properties-kafkaconnect-connector-s3logdelivery.md)  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
