# AWS::IoTEvents::DetectorModel Firehose<a name="aws-properties-iotevents-detectormodel-firehose"></a>

Sends information about the detector model instance and the event that triggered the action to an Amazon Kinesis Data Firehose delivery stream\.

## Syntax<a name="aws-properties-iotevents-detectormodel-firehose-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-iotevents-detectormodel-firehose-syntax.json"></a>

```
{
  "[DeliveryStreamName](#cfn-iotevents-detectormodel-firehose-deliverystreamname)" : String,
  "[Payload](#cfn-iotevents-detectormodel-firehose-payload)" : Payload,
  "[Separator](#cfn-iotevents-detectormodel-firehose-separator)" : String
}
```

### YAML<a name="aws-properties-iotevents-detectormodel-firehose-syntax.yaml"></a>

```
  [DeliveryStreamName](#cfn-iotevents-detectormodel-firehose-deliverystreamname): String
  [Payload](#cfn-iotevents-detectormodel-firehose-payload):
    Payload
  [Separator](#cfn-iotevents-detectormodel-firehose-separator): String
```

## Properties<a name="aws-properties-iotevents-detectormodel-firehose-properties"></a>

`DeliveryStreamName` <a name="cfn-iotevents-detectormodel-firehose-deliverystreamname"></a>
The name of the Kinesis Data Firehose delivery stream where the data is written\.  
_Required_: Yes  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Payload` <a name="cfn-iotevents-detectormodel-firehose-payload"></a>
You can configure the action payload when you send a message to an Amazon Kinesis Data Firehose delivery stream\.  
_Required_: No  
_Type_: [Payload](aws-properties-iotevents-detectormodel-payload.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Separator` <a name="cfn-iotevents-detectormodel-firehose-separator"></a>
A character separator that is used to separate records written to the Kinesis Data Firehose delivery stream\. Valid values are: '\\n' \(newline\), '\\t' \(tab\), '\\r\\n' \(Windows newline\), ',' \(comma\)\.  
_Required_: No  
_Type_: String  
_Pattern_: `([\n\t])|(\r\n)|(,)`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
