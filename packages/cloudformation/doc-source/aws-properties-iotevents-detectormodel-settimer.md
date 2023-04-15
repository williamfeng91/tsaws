# AWS::IoTEvents::DetectorModel SetTimer<a name="aws-properties-iotevents-detectormodel-settimer"></a>

Information needed to set the timer\.

## Syntax<a name="aws-properties-iotevents-detectormodel-settimer-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-iotevents-detectormodel-settimer-syntax.json"></a>

```
{
  "[DurationExpression](#cfn-iotevents-detectormodel-settimer-durationexpression)" : String,
  "[Seconds](#cfn-iotevents-detectormodel-settimer-seconds)" : Integer,
  "[TimerName](#cfn-iotevents-detectormodel-settimer-timername)" : String
}
```

### YAML<a name="aws-properties-iotevents-detectormodel-settimer-syntax.yaml"></a>

```
  [DurationExpression](#cfn-iotevents-detectormodel-settimer-durationexpression): String
  [Seconds](#cfn-iotevents-detectormodel-settimer-seconds): Integer
  [TimerName](#cfn-iotevents-detectormodel-settimer-timername): String
```

## Properties<a name="aws-properties-iotevents-detectormodel-settimer-properties"></a>

`DurationExpression` <a name="cfn-iotevents-detectormodel-settimer-durationexpression"></a>
The duration of the timer, in seconds\. You can use a string expression that includes numbers, variables \(`$variable.<variable-name>`\), and input values \(`$input.<input-name>.<path-to-datum>`\) as the duration\. The range of the duration is 1\-31622400 seconds\. To ensure accuracy, the minimum duration is 60 seconds\. The evaluated result of the duration is rounded down to the nearest whole number\.  
_Required_: No  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `1024`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Seconds` <a name="cfn-iotevents-detectormodel-settimer-seconds"></a>
The number of seconds until the timer expires\. The minimum value is 60 seconds to ensure accuracy\. The maximum value is 31622400 seconds\.  
_Required_: No  
_Type_: Integer  
_Minimum_: `1`  
_Maximum_: `31622400`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`TimerName` <a name="cfn-iotevents-detectormodel-settimer-timername"></a>
The name of the timer\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `128`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
