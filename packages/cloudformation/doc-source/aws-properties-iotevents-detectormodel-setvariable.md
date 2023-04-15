# AWS::IoTEvents::DetectorModel SetVariable<a name="aws-properties-iotevents-detectormodel-setvariable"></a>

Information about the variable and its new value\.

## Syntax<a name="aws-properties-iotevents-detectormodel-setvariable-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-iotevents-detectormodel-setvariable-syntax.json"></a>

```
{
  "[Value](#cfn-iotevents-detectormodel-setvariable-value)" : String,
  "[VariableName](#cfn-iotevents-detectormodel-setvariable-variablename)" : String
}
```

### YAML<a name="aws-properties-iotevents-detectormodel-setvariable-syntax.yaml"></a>

```
  [Value](#cfn-iotevents-detectormodel-setvariable-value): String
  [VariableName](#cfn-iotevents-detectormodel-setvariable-variablename): String
```

## Properties<a name="aws-properties-iotevents-detectormodel-setvariable-properties"></a>

`Value` <a name="cfn-iotevents-detectormodel-setvariable-value"></a>
The new value of the variable\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `1024`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`VariableName` <a name="cfn-iotevents-detectormodel-setvariable-variablename"></a>
The name of the variable\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `128`  
_Pattern_: `^[a-zA-Z][a-zA-Z0-9_]*$`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
