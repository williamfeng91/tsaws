# AWS::IoTEvents::AlarmModel Lambda<a name="aws-properties-iotevents-alarmmodel-lambda"></a>

Calls a Lambda function, passing in information about the detector model instance and the event that triggered the action\.

## Syntax<a name="aws-properties-iotevents-alarmmodel-lambda-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-iotevents-alarmmodel-lambda-syntax.json"></a>

```
{
  "[FunctionArn](#cfn-iotevents-alarmmodel-lambda-functionarn)" : String,
  "[Payload](#cfn-iotevents-alarmmodel-lambda-payload)" : Payload
}
```

### YAML<a name="aws-properties-iotevents-alarmmodel-lambda-syntax.yaml"></a>

```
  [FunctionArn](#cfn-iotevents-alarmmodel-lambda-functionarn): String
  [Payload](#cfn-iotevents-alarmmodel-lambda-payload):
    Payload
```

## Properties<a name="aws-properties-iotevents-alarmmodel-lambda-properties"></a>

`FunctionArn` <a name="cfn-iotevents-alarmmodel-lambda-functionarn"></a>
The ARN of the Lambda function that is executed\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `2048`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Payload` <a name="cfn-iotevents-alarmmodel-lambda-payload"></a>
You can configure the action payload when you send a message to a Lambda function\.  
_Required_: No  
_Type_: [Payload](aws-properties-iotevents-alarmmodel-payload.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
