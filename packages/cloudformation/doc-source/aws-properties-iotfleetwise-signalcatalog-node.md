# AWS::IoTFleetWise::SignalCatalog Node<a name="aws-properties-iotfleetwise-signalcatalog-node"></a>

A general abstraction of a signal\. A node can be specified as an actuator, attribute, branch, or sensor\.

## Syntax<a name="aws-properties-iotfleetwise-signalcatalog-node-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-iotfleetwise-signalcatalog-node-syntax.json"></a>

```
{
  "[Actuator](#cfn-iotfleetwise-signalcatalog-node-actuator)" : Actuator,
  "[Attribute](#cfn-iotfleetwise-signalcatalog-node-attribute)" : Attribute,
  "[Branch](#cfn-iotfleetwise-signalcatalog-node-branch)" : Branch,
  "[Sensor](#cfn-iotfleetwise-signalcatalog-node-sensor)" : Sensor
}
```

### YAML<a name="aws-properties-iotfleetwise-signalcatalog-node-syntax.yaml"></a>

```
  [Actuator](#cfn-iotfleetwise-signalcatalog-node-actuator):
    Actuator
  [Attribute](#cfn-iotfleetwise-signalcatalog-node-attribute):
    Attribute
  [Branch](#cfn-iotfleetwise-signalcatalog-node-branch):
    Branch
  [Sensor](#cfn-iotfleetwise-signalcatalog-node-sensor):
    Sensor
```

## Properties<a name="aws-properties-iotfleetwise-signalcatalog-node-properties"></a>

`Actuator` <a name="cfn-iotfleetwise-signalcatalog-node-actuator"></a>
Information about a node specified as an actuator\.  
An actuator is a digital representation of a vehicle device\.
_Required_: No  
_Type_: [Actuator](aws-properties-iotfleetwise-signalcatalog-actuator.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Attribute` <a name="cfn-iotfleetwise-signalcatalog-node-attribute"></a>
Information about a node specified as an attribute\.  
An attribute represents static information about a vehicle\.
_Required_: No  
_Type_: [Attribute](aws-properties-iotfleetwise-signalcatalog-attribute.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Branch` <a name="cfn-iotfleetwise-signalcatalog-node-branch"></a>
Information about a node specified as a branch\.  
A group of signals that are defined in a hierarchical structure\.
_Required_: No  
_Type_: [Branch](aws-properties-iotfleetwise-signalcatalog-branch.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Sensor` <a name="cfn-iotfleetwise-signalcatalog-node-sensor"></a>
Property description not available\.  
_Required_: No  
_Type_: [Sensor](aws-properties-iotfleetwise-signalcatalog-sensor.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
