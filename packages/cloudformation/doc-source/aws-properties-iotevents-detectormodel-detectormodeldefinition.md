# AWS::IoTEvents::DetectorModel DetectorModelDefinition<a name="aws-properties-iotevents-detectormodel-detectormodeldefinition"></a>

Information that defines how a detector operates\.

## Syntax<a name="aws-properties-iotevents-detectormodel-detectormodeldefinition-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-iotevents-detectormodel-detectormodeldefinition-syntax.json"></a>

```
{
  "[InitialStateName](#cfn-iotevents-detectormodel-detectormodeldefinition-initialstatename)" : String,
  "[States](#cfn-iotevents-detectormodel-detectormodeldefinition-states)" : [ State, ... ]
}
```

### YAML<a name="aws-properties-iotevents-detectormodel-detectormodeldefinition-syntax.yaml"></a>

```
  [InitialStateName](#cfn-iotevents-detectormodel-detectormodeldefinition-initialstatename): String
  [States](#cfn-iotevents-detectormodel-detectormodeldefinition-states):
    - State
```

## Properties<a name="aws-properties-iotevents-detectormodel-detectormodeldefinition-properties"></a>

`InitialStateName` <a name="cfn-iotevents-detectormodel-detectormodeldefinition-initialstatename"></a>
The state that is entered at the creation of each detector \(instance\)\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `128`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`States` <a name="cfn-iotevents-detectormodel-detectormodeldefinition-states"></a>
Information about the states of the detector\.  
_Required_: Yes  
_Type_: List of [State](aws-properties-iotevents-detectormodel-state.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
