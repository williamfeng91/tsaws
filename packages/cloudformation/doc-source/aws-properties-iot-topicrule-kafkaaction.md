# AWS::IoT::TopicRule KafkaAction<a name="aws-properties-iot-topicrule-kafkaaction"></a>

Send messages to an Amazon Managed Streaming for Apache Kafka \(Amazon MSK\) or self\-managed Apache Kafka cluster\.

## Syntax<a name="aws-properties-iot-topicrule-kafkaaction-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-iot-topicrule-kafkaaction-syntax.json"></a>

```
{
  "[ClientProperties](#cfn-iot-topicrule-kafkaaction-clientproperties)" : {Key : Value, ...},
  "[DestinationArn](#cfn-iot-topicrule-kafkaaction-destinationarn)" : String,
  "[Key](#cfn-iot-topicrule-kafkaaction-key)" : String,
  "[Partition](#cfn-iot-topicrule-kafkaaction-partition)" : String,
  "[Topic](#cfn-iot-topicrule-kafkaaction-topic)" : String
}
```

### YAML<a name="aws-properties-iot-topicrule-kafkaaction-syntax.yaml"></a>

```
  [ClientProperties](#cfn-iot-topicrule-kafkaaction-clientproperties):
    Key : Value
  [DestinationArn](#cfn-iot-topicrule-kafkaaction-destinationarn): String
  [Key](#cfn-iot-topicrule-kafkaaction-key): String
  [Partition](#cfn-iot-topicrule-kafkaaction-partition): String
  [Topic](#cfn-iot-topicrule-kafkaaction-topic): String
```

## Properties<a name="aws-properties-iot-topicrule-kafkaaction-properties"></a>

`ClientProperties` <a name="cfn-iot-topicrule-kafkaaction-clientproperties"></a>
Properties of the Apache Kafka producer client\.  
_Required_: Yes  
_Type_: Map of String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`DestinationArn` <a name="cfn-iot-topicrule-kafkaaction-destinationarn"></a>
The ARN of Kafka action's VPC `TopicRuleDestination`\.  
_Required_: Yes  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Key` <a name="cfn-iot-topicrule-kafkaaction-key"></a>
The Kafka message key\.  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Partition` <a name="cfn-iot-topicrule-kafkaaction-partition"></a>
The Kafka message partition\.  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Topic` <a name="cfn-iot-topicrule-kafkaaction-topic"></a>
The Kafka topic for messages to be sent to the Kafka broker\.  
_Required_: Yes  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
