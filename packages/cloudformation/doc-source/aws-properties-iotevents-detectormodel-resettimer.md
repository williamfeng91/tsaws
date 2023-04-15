# AWS::IoTEvents::DetectorModel ResetTimer<a name="aws-properties-iotevents-detectormodel-resettimer"></a>

Information required to reset the timer\. The timer is reset to the previously evaluated result of the duration\. The duration expression isn't reevaluated when you reset the timer\.

## Syntax<a name="aws-properties-iotevents-detectormodel-resettimer-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-iotevents-detectormodel-resettimer-syntax.json"></a>

```
{
  "[TimerName](#cfn-iotevents-detectormodel-resettimer-timername)" : String
}
```

### YAML<a name="aws-properties-iotevents-detectormodel-resettimer-syntax.yaml"></a>

```
  [TimerName](#cfn-iotevents-detectormodel-resettimer-timername): String
```

## Properties<a name="aws-properties-iotevents-detectormodel-resettimer-properties"></a>

`TimerName` <a name="cfn-iotevents-detectormodel-resettimer-timername"></a>
The name of the timer to reset\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `128`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
