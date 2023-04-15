# AWS::IoT::TopicRule Action<a name="aws-properties-iot-topicrule-action"></a>

Describes the actions associated with a rule\.

## Syntax<a name="aws-properties-iot-topicrule-action-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-iot-topicrule-action-syntax.json"></a>

```
{
  "[CloudwatchAlarm](#cfn-iot-topicrule-action-cloudwatchalarm)" : CloudwatchAlarmAction,
  "[CloudwatchLogs](#cfn-iot-topicrule-action-cloudwatchlogs)" : CloudwatchLogsAction,
  "[CloudwatchMetric](#cfn-iot-topicrule-action-cloudwatchmetric)" : CloudwatchMetricAction,
  "[DynamoDB](#cfn-iot-topicrule-action-dynamodb)" : DynamoDBAction,
  "[DynamoDBv2](#cfn-iot-topicrule-action-dynamodbv2)" : DynamoDBv2Action,
  "[Elasticsearch](#cfn-iot-topicrule-action-elasticsearch)" : ElasticsearchAction,
  "[Firehose](#cfn-iot-topicrule-action-firehose)" : FirehoseAction,
  "[Http](#cfn-iot-topicrule-action-http)" : HttpAction,
  "[IotAnalytics](#cfn-iot-topicrule-action-iotanalytics)" : IotAnalyticsAction,
  "[IotEvents](#cfn-iot-topicrule-action-iotevents)" : IotEventsAction,
  "[IotSiteWise](#cfn-iot-topicrule-action-iotsitewise)" : IotSiteWiseAction,
  "[Kafka](#cfn-iot-topicrule-action-kafka)" : KafkaAction,
  "[Kinesis](#cfn-iot-topicrule-action-kinesis)" : KinesisAction,
  "[Lambda](#cfn-iot-topicrule-action-lambda)" : LambdaAction,
  "[Location](#cfn-iot-topicrule-action-location)" : LocationAction,
  "[OpenSearch](#cfn-iot-topicrule-action-opensearch)" : OpenSearchAction,
  "[Republish](#cfn-iot-topicrule-action-republish)" : RepublishAction,
  "[S3](#cfn-iot-topicrule-action-s3)" : S3Action,
  "[Sns](#cfn-iot-topicrule-action-sns)" : SnsAction,
  "[Sqs](#cfn-iot-topicrule-action-sqs)" : SqsAction,
  "[StepFunctions](#cfn-iot-topicrule-action-stepfunctions)" : StepFunctionsAction,
  "[Timestream](#cfn-iot-topicrule-action-timestream)" : TimestreamAction
}
```

### YAML<a name="aws-properties-iot-topicrule-action-syntax.yaml"></a>

```
  [CloudwatchAlarm](#cfn-iot-topicrule-action-cloudwatchalarm):
    CloudwatchAlarmAction
  [CloudwatchLogs](#cfn-iot-topicrule-action-cloudwatchlogs):
    CloudwatchLogsAction
  [CloudwatchMetric](#cfn-iot-topicrule-action-cloudwatchmetric):
    CloudwatchMetricAction
  [DynamoDB](#cfn-iot-topicrule-action-dynamodb):
    DynamoDBAction
  [DynamoDBv2](#cfn-iot-topicrule-action-dynamodbv2):
    DynamoDBv2Action
  [Elasticsearch](#cfn-iot-topicrule-action-elasticsearch):
    ElasticsearchAction
  [Firehose](#cfn-iot-topicrule-action-firehose):
    FirehoseAction
  [Http](#cfn-iot-topicrule-action-http):
    HttpAction
  [IotAnalytics](#cfn-iot-topicrule-action-iotanalytics):
    IotAnalyticsAction
  [IotEvents](#cfn-iot-topicrule-action-iotevents):
    IotEventsAction
  [IotSiteWise](#cfn-iot-topicrule-action-iotsitewise):
    IotSiteWiseAction
  [Kafka](#cfn-iot-topicrule-action-kafka):
    KafkaAction
  [Kinesis](#cfn-iot-topicrule-action-kinesis):
    KinesisAction
  [Lambda](#cfn-iot-topicrule-action-lambda):
    LambdaAction
  [Location](#cfn-iot-topicrule-action-location):
    LocationAction
  [OpenSearch](#cfn-iot-topicrule-action-opensearch):
    OpenSearchAction
  [Republish](#cfn-iot-topicrule-action-republish):
    RepublishAction
  [S3](#cfn-iot-topicrule-action-s3):
    S3Action
  [Sns](#cfn-iot-topicrule-action-sns):
    SnsAction
  [Sqs](#cfn-iot-topicrule-action-sqs):
    SqsAction
  [StepFunctions](#cfn-iot-topicrule-action-stepfunctions):
    StepFunctionsAction
  [Timestream](#cfn-iot-topicrule-action-timestream):
    TimestreamAction
```

## Properties<a name="aws-properties-iot-topicrule-action-properties"></a>

`CloudwatchAlarm` <a name="cfn-iot-topicrule-action-cloudwatchalarm"></a>
Change the state of a CloudWatch alarm\.  
_Required_: No  
_Type_: [CloudwatchAlarmAction](aws-properties-iot-topicrule-cloudwatchalarmaction.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`CloudwatchLogs` <a name="cfn-iot-topicrule-action-cloudwatchlogs"></a>
Sends data to CloudWatch\.  
_Required_: No  
_Type_: [CloudwatchLogsAction](aws-properties-iot-topicrule-cloudwatchlogsaction.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`CloudwatchMetric` <a name="cfn-iot-topicrule-action-cloudwatchmetric"></a>
Capture a CloudWatch metric\.  
_Required_: No  
_Type_: [CloudwatchMetricAction](aws-properties-iot-topicrule-cloudwatchmetricaction.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`DynamoDB` <a name="cfn-iot-topicrule-action-dynamodb"></a>
Write to a DynamoDB table\.  
_Required_: No  
_Type_: [DynamoDBAction](aws-properties-iot-topicrule-dynamodbaction.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`DynamoDBv2` <a name="cfn-iot-topicrule-action-dynamodbv2"></a>
Write to a DynamoDB table\. This is a new version of the DynamoDB action\. It allows you to write each attribute in an MQTT message payload into a separate DynamoDB column\.  
_Required_: No  
_Type_: [DynamoDBv2Action](aws-properties-iot-topicrule-dynamodbv2action.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Elasticsearch` <a name="cfn-iot-topicrule-action-elasticsearch"></a>
Write data to an Amazon OpenSearch Service domain\.  
The `Elasticsearch` action can only be used by existing rule actions\. To create a new rule action or to update an existing rule action, use the `OpenSearch` rule action instead\. For more information, see [OpenSearchAction](https://docs.aws.amazon.com/iot/latest/apireference/API_OpenSearchAction.html)\.
_Required_: No  
_Type_: [ElasticsearchAction](aws-properties-iot-topicrule-elasticsearchaction.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Firehose` <a name="cfn-iot-topicrule-action-firehose"></a>
Write to an Amazon Kinesis Firehose stream\.  
_Required_: No  
_Type_: [FirehoseAction](aws-properties-iot-topicrule-firehoseaction.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Http` <a name="cfn-iot-topicrule-action-http"></a>
Send data to an HTTPS endpoint\.  
_Required_: No  
_Type_: [HttpAction](aws-properties-iot-topicrule-httpaction.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`IotAnalytics` <a name="cfn-iot-topicrule-action-iotanalytics"></a>
Sends message data to an AWS IoT Analytics channel\.  
_Required_: No  
_Type_: [IotAnalyticsAction](aws-properties-iot-topicrule-iotanalyticsaction.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`IotEvents` <a name="cfn-iot-topicrule-action-iotevents"></a>
Sends an input to an AWS IoT Events detector\.  
_Required_: No  
_Type_: [IotEventsAction](aws-properties-iot-topicrule-ioteventsaction.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`IotSiteWise` <a name="cfn-iot-topicrule-action-iotsitewise"></a>
Sends data from the MQTT message that triggered the rule to AWS IoT SiteWise asset properties\.  
_Required_: No  
_Type_: [IotSiteWiseAction](aws-properties-iot-topicrule-iotsitewiseaction.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Kafka` <a name="cfn-iot-topicrule-action-kafka"></a>
Send messages to an Amazon Managed Streaming for Apache Kafka \(Amazon MSK\) or self\-managed Apache Kafka cluster\.  
_Required_: No  
_Type_: [KafkaAction](aws-properties-iot-topicrule-kafkaaction.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Kinesis` <a name="cfn-iot-topicrule-action-kinesis"></a>
Write data to an Amazon Kinesis stream\.  
_Required_: No  
_Type_: [KinesisAction](aws-properties-iot-topicrule-kinesisaction.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Lambda` <a name="cfn-iot-topicrule-action-lambda"></a>
Invoke a Lambda function\.  
_Required_: No  
_Type_: [LambdaAction](aws-properties-iot-topicrule-lambdaaction.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Location` <a name="cfn-iot-topicrule-action-location"></a>
Sends device location data to [Amazon Location Service](https://docs.aws.amazon.com/location/latest/developerguide/welcome.html)\.  
_Required_: No  
_Type_: [LocationAction](aws-properties-iot-topicrule-locationaction.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`OpenSearch` <a name="cfn-iot-topicrule-action-opensearch"></a>
Write data to an Amazon OpenSearch Service domain\.  
_Required_: No  
_Type_: [OpenSearchAction](aws-properties-iot-topicrule-opensearchaction.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Republish` <a name="cfn-iot-topicrule-action-republish"></a>
Publish to another MQTT topic\.  
_Required_: No  
_Type_: [RepublishAction](aws-properties-iot-topicrule-republishaction.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`S3` <a name="cfn-iot-topicrule-action-s3"></a>
Write to an Amazon S3 bucket\.  
_Required_: No  
_Type_: [S3Action](aws-properties-iot-topicrule-s3action.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Sns` <a name="cfn-iot-topicrule-action-sns"></a>
Publish to an Amazon SNS topic\.  
_Required_: No  
_Type_: [SnsAction](aws-properties-iot-topicrule-snsaction.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Sqs` <a name="cfn-iot-topicrule-action-sqs"></a>
Publish to an Amazon SQS queue\.  
_Required_: No  
_Type_: [SqsAction](aws-properties-iot-topicrule-sqsaction.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`StepFunctions` <a name="cfn-iot-topicrule-action-stepfunctions"></a>
Starts execution of a Step Functions state machine\.  
_Required_: No  
_Type_: [StepFunctionsAction](aws-properties-iot-topicrule-stepfunctionsaction.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Timestream` <a name="cfn-iot-topicrule-action-timestream"></a>
Writes attributes from an MQTT message\.  
_Required_: No  
_Type_: [TimestreamAction](aws-properties-iot-topicrule-timestreamaction.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
