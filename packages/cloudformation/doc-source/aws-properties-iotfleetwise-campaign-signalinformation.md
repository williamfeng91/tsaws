# AWS::IoTFleetWise::Campaign SignalInformation<a name="aws-properties-iotfleetwise-campaign-signalinformation"></a>

Information about a signal\.

## Syntax<a name="aws-properties-iotfleetwise-campaign-signalinformation-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-iotfleetwise-campaign-signalinformation-syntax.json"></a>

```
{
  "[MaxSampleCount](#cfn-iotfleetwise-campaign-signalinformation-maxsamplecount)" : Double,
  "[MinimumSamplingIntervalMs](#cfn-iotfleetwise-campaign-signalinformation-minimumsamplingintervalms)" : Double,
  "[Name](#cfn-iotfleetwise-campaign-signalinformation-name)" : String
}
```

### YAML<a name="aws-properties-iotfleetwise-campaign-signalinformation-syntax.yaml"></a>

```
  [MaxSampleCount](#cfn-iotfleetwise-campaign-signalinformation-maxsamplecount): Double
  [MinimumSamplingIntervalMs](#cfn-iotfleetwise-campaign-signalinformation-minimumsamplingintervalms): Double
  [Name](#cfn-iotfleetwise-campaign-signalinformation-name): String
```

## Properties<a name="aws-properties-iotfleetwise-campaign-signalinformation-properties"></a>

`MaxSampleCount` <a name="cfn-iotfleetwise-campaign-signalinformation-maxsamplecount"></a>
The maximum number of samples to collect\.  
_Required_: No  
_Type_: Double  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`MinimumSamplingIntervalMs` <a name="cfn-iotfleetwise-campaign-signalinformation-minimumsamplingintervalms"></a>
The minimum duration of time \(in milliseconds\) between two triggering events to collect data\.  
If a signal changes often, you might want to collect data at a slower rate\.
_Required_: No  
_Type_: Double  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Name` <a name="cfn-iotfleetwise-campaign-signalinformation-name"></a>
The name of the signal\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `150`  
_Pattern_: `[\w|*|-]+(\.[\w|*|-]+)*`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
