# AWS::ECS::TaskDefinition Device<a name="aws-properties-ecs-taskdefinition-device"></a>

The `Device` property specifies an object representing a container instance host device\.

## Syntax<a name="aws-properties-ecs-taskdefinition-device-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-ecs-taskdefinition-device-syntax.json"></a>

```
{
  "[ContainerPath](#cfn-ecs-taskdefinition-device-containerpath)" : String,
  "[HostPath](#cfn-ecs-taskdefinition-device-hostpath)" : String,
  "[Permissions](#cfn-ecs-taskdefinition-device-permissions)" : [ String, ... ]
}
```

### YAML<a name="aws-properties-ecs-taskdefinition-device-syntax.yaml"></a>

```
  [ContainerPath](#cfn-ecs-taskdefinition-device-containerpath): String
  [HostPath](#cfn-ecs-taskdefinition-device-hostpath): String
  [Permissions](#cfn-ecs-taskdefinition-device-permissions):
    - String
```

## Properties<a name="aws-properties-ecs-taskdefinition-device-properties"></a>

`ContainerPath` <a name="cfn-ecs-taskdefinition-device-containerpath"></a>
The path inside the container at which to expose the host device\.  
_Required_: No  
_Type_: String  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`HostPath` <a name="cfn-ecs-taskdefinition-device-hostpath"></a>
The path for the device on the host container instance\.  
_Required_: No  
_Type_: String  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`Permissions` <a name="cfn-ecs-taskdefinition-device-permissions"></a>
The explicit permissions to provide to the container for the device\. By default, the container has permissions for `read`, `write`, and `mknod` for the device\.  
_Required_: No  
_Type_: List of String  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
