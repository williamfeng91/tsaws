# AWS::ECS::TaskDefinition InferenceAccelerator<a name="aws-properties-ecs-taskdefinition-inferenceaccelerator"></a>

Details on an Elastic Inference accelerator\. For more information, see [Working with Amazon Elastic Inference on Amazon ECS](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-inference.html) in the _Amazon Elastic Container Service Developer Guide_\.

## Syntax<a name="aws-properties-ecs-taskdefinition-inferenceaccelerator-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-ecs-taskdefinition-inferenceaccelerator-syntax.json"></a>

```
{
  "[DeviceName](#cfn-ecs-taskdefinition-inferenceaccelerator-devicename)" : String,
  "[DeviceType](#cfn-ecs-taskdefinition-inferenceaccelerator-devicetype)" : String
}
```

### YAML<a name="aws-properties-ecs-taskdefinition-inferenceaccelerator-syntax.yaml"></a>

```
  [DeviceName](#cfn-ecs-taskdefinition-inferenceaccelerator-devicename): String
  [DeviceType](#cfn-ecs-taskdefinition-inferenceaccelerator-devicetype): String
```

## Properties<a name="aws-properties-ecs-taskdefinition-inferenceaccelerator-properties"></a>

`DeviceName` <a name="cfn-ecs-taskdefinition-inferenceaccelerator-devicename"></a>
The Elastic Inference accelerator device name\. The `deviceName` must also be referenced in a container definition as a [ResourceRequirement](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_ResourceRequirement.html)\.  
_Required_: No  
_Type_: String  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`DeviceType` <a name="cfn-ecs-taskdefinition-inferenceaccelerator-devicetype"></a>
The Elastic Inference accelerator type to use\.  
_Required_: No  
_Type_: String  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
