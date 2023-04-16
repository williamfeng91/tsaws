# AWS::IoTEvents::DetectorModel Sqs<a name="aws-properties-iotevents-detectormodel-sqs"></a>

Sends information about the detector model instance and the event that triggered the action to an Amazon SQS queue\.

## Syntax<a name="aws-properties-iotevents-detectormodel-sqs-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-iotevents-detectormodel-sqs-syntax.json"></a>

```
{
  "[Payload](#cfn-iotevents-detectormodel-sqs-payload)" : Payload,
  "[QueueUrl](#cfn-iotevents-detectormodel-sqs-queueurl)" : String,
  "[UseBase64](#cfn-iotevents-detectormodel-sqs-usebase64)" : Boolean
}
```

### YAML<a name="aws-properties-iotevents-detectormodel-sqs-syntax.yaml"></a>

```
  [Payload](#cfn-iotevents-detectormodel-sqs-payload):
    Payload
  [QueueUrl](#cfn-iotevents-detectormodel-sqs-queueurl): String
  [UseBase64](#cfn-iotevents-detectormodel-sqs-usebase64): Boolean
```

## Properties<a name="aws-properties-iotevents-detectormodel-sqs-properties"></a>

`Payload` <a name="cfn-iotevents-detectormodel-sqs-payload"></a>
You can configure the action payload when you send a message to an Amazon SQS queue\.  
_Required_: No  
_Type_: [Payload](aws-properties-iotevents-detectormodel-payload.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`QueueUrl` <a name="cfn-iotevents-detectormodel-sqs-queueurl"></a>
The URL of the SQS queue where the data is written\.  
_Required_: Yes  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`UseBase64` <a name="cfn-iotevents-detectormodel-sqs-usebase64"></a>
Set this to TRUE if you want the data to be base\-64 encoded before it is written to the queue\. Otherwise, set this to FALSE\.  
_Required_: No  
_Type_: Boolean  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
