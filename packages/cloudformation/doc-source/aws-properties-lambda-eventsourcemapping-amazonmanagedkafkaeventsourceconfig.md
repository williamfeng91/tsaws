# AWS::Lambda::EventSourceMapping AmazonManagedKafkaEventSourceConfig<a name="aws-properties-lambda-eventsourcemapping-amazonmanagedkafkaeventsourceconfig"></a>

Specific configuration settings for an Amazon Managed Streaming for Apache Kafka \(Amazon MSK\) event source\.

## Syntax<a name="aws-properties-lambda-eventsourcemapping-amazonmanagedkafkaeventsourceconfig-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-lambda-eventsourcemapping-amazonmanagedkafkaeventsourceconfig-syntax.json"></a>

```
{
  "[ConsumerGroupId](#cfn-lambda-eventsourcemapping-amazonmanagedkafkaeventsourceconfig-consumergroupid)" : String
}
```

### YAML<a name="aws-properties-lambda-eventsourcemapping-amazonmanagedkafkaeventsourceconfig-syntax.yaml"></a>

```
  [ConsumerGroupId](#cfn-lambda-eventsourcemapping-amazonmanagedkafkaeventsourceconfig-consumergroupid): String
```

## Properties<a name="aws-properties-lambda-eventsourcemapping-amazonmanagedkafkaeventsourceconfig-properties"></a>

`ConsumerGroupId` <a name="cfn-lambda-eventsourcemapping-amazonmanagedkafkaeventsourceconfig-consumergroupid"></a>
The identifier for the Kafka consumer group to join\. The consumer group ID must be unique among all your Kafka event sources\. After creating a Kafka event source mapping with the consumer group ID specified, you cannot update this value\. For more information, see [Customizable consumer group ID](https://docs.aws.amazon.com/lambda/latest/dg/with-msk.html#services-msk-consumer-group-id)\.  
_Required_: No  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `200`  
_Pattern_: `[a-zA-Z0-9-\/*:_+=.@-]*`  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)