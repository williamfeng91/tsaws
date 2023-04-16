# AWS::IoTEvents::Input InputDefinition<a name="aws-properties-iotevents-input-inputdefinition"></a>

The definition of the input\.

## Syntax<a name="aws-properties-iotevents-input-inputdefinition-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-iotevents-input-inputdefinition-syntax.json"></a>

```
{
  "[Attributes](#cfn-iotevents-input-inputdefinition-attributes)" : [ Attribute, ... ]
}
```

### YAML<a name="aws-properties-iotevents-input-inputdefinition-syntax.yaml"></a>

```
  [Attributes](#cfn-iotevents-input-inputdefinition-attributes):
    - Attribute
```

## Properties<a name="aws-properties-iotevents-input-inputdefinition-properties"></a>

`Attributes` <a name="cfn-iotevents-input-inputdefinition-attributes"></a>
The attributes from the JSON payload that are made available by the input\. Inputs are derived from messages sent to the AWS IoT Events system using `BatchPutMessage`\. Each such message contains a JSON payload, and those attributes \(and their paired values\) specified here are available for use in the `condition` expressions used by detectors that monitor this input\.  
_Required_: Yes  
_Type_: List of [Attribute](aws-properties-iotevents-input-attribute.md)  
_Maximum_: `200`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
