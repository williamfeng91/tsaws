# AWS::ECS::TaskDefinition ResourceRequirement<a name="aws-properties-ecs-taskdefinition-resourcerequirement"></a>

The type and amount of a resource to assign to a container\. The supported resource types are GPUs and Elastic Inference accelerators\. For more information, see [Working with GPUs on Amazon ECS](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-gpu.html) or [Working with Amazon Elastic Inference on Amazon ECS](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/url-ecs-dev;ecs-inference.html) in the _Amazon Elastic Container Service Developer Guide_

## Syntax<a name="aws-properties-ecs-taskdefinition-resourcerequirement-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-ecs-taskdefinition-resourcerequirement-syntax.json"></a>

```
{
  "[Type](#cfn-ecs-taskdefinition-resourcerequirement-type)" : String,
  "[Value](#cfn-ecs-taskdefinition-resourcerequirement-value)" : String
}
```

### YAML<a name="aws-properties-ecs-taskdefinition-resourcerequirement-syntax.yaml"></a>

```
  [Type](#cfn-ecs-taskdefinition-resourcerequirement-type): String
  [Value](#cfn-ecs-taskdefinition-resourcerequirement-value): String
```

## Properties<a name="aws-properties-ecs-taskdefinition-resourcerequirement-properties"></a>

`Type` <a name="cfn-ecs-taskdefinition-resourcerequirement-type"></a>
The type of resource to assign to a container\. The supported values are `GPU` or `InferenceAccelerator`\.  
_Required_: Yes  
_Type_: String  
_Allowed values_: `GPU | InferenceAccelerator`  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`Value` <a name="cfn-ecs-taskdefinition-resourcerequirement-value"></a>
The value for the specified resource type\.  
If the `GPU` type is used, the value is the number of physical `GPUs` the Amazon ECS container agent reserves for the container\. The number of GPUs that's reserved for all containers in a task can't exceed the number of available GPUs on the container instance that the task is launched on\.  
If the `InferenceAccelerator` type is used, the `value` matches the `deviceName` for an [InferenceAccelerator](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_InferenceAccelerator.html) specified in a task definition\.  
_Required_: Yes  
_Type_: String  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
