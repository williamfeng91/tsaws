# AWS::IoTEvents::DetectorModel ClearTimer<a name="aws-properties-iotevents-detectormodel-cleartimer"></a>

Information needed to clear the timer\.

## Syntax<a name="aws-properties-iotevents-detectormodel-cleartimer-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-iotevents-detectormodel-cleartimer-syntax.json"></a>

```
{
  "[TimerName](#cfn-iotevents-detectormodel-cleartimer-timername)" : String
}
```

### YAML<a name="aws-properties-iotevents-detectormodel-cleartimer-syntax.yaml"></a>

```
  [TimerName](#cfn-iotevents-detectormodel-cleartimer-timername): String
```

## Properties<a name="aws-properties-iotevents-detectormodel-cleartimer-properties"></a>

`TimerName` <a name="cfn-iotevents-detectormodel-cleartimer-timername"></a>
The name of the timer to clear\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `128`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
