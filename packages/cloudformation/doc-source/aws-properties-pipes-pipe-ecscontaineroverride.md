# AWS::Pipes::Pipe EcsContainerOverride<a name="aws-properties-pipes-pipe-ecscontaineroverride"></a>

The overrides that are sent to a container\. An empty container override can be passed in\. An example of an empty container override is `{"containerOverrides": [ ] }`\. If a non\-empty container override is specified, the `name` parameter must be included\.

## Syntax<a name="aws-properties-pipes-pipe-ecscontaineroverride-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-pipes-pipe-ecscontaineroverride-syntax.json"></a>

```
{
  "[Command](#cfn-pipes-pipe-ecscontaineroverride-command)" : [ String, ... ],
  "[Cpu](#cfn-pipes-pipe-ecscontaineroverride-cpu)" : Integer,
  "[Environment](#cfn-pipes-pipe-ecscontaineroverride-environment)" : [ EcsEnvironmentVariable, ... ],
  "[EnvironmentFiles](#cfn-pipes-pipe-ecscontaineroverride-environmentfiles)" : [ EcsEnvironmentFile, ... ],
  "[Memory](#cfn-pipes-pipe-ecscontaineroverride-memory)" : Integer,
  "[MemoryReservation](#cfn-pipes-pipe-ecscontaineroverride-memoryreservation)" : Integer,
  "[Name](#cfn-pipes-pipe-ecscontaineroverride-name)" : String,
  "[ResourceRequirements](#cfn-pipes-pipe-ecscontaineroverride-resourcerequirements)" : [ EcsResourceRequirement, ... ]
}
```

### YAML<a name="aws-properties-pipes-pipe-ecscontaineroverride-syntax.yaml"></a>

```
  [Command](#cfn-pipes-pipe-ecscontaineroverride-command):
    - String
  [Cpu](#cfn-pipes-pipe-ecscontaineroverride-cpu): Integer
  [Environment](#cfn-pipes-pipe-ecscontaineroverride-environment):
    - EcsEnvironmentVariable
  [EnvironmentFiles](#cfn-pipes-pipe-ecscontaineroverride-environmentfiles):
    - EcsEnvironmentFile
  [Memory](#cfn-pipes-pipe-ecscontaineroverride-memory): Integer
  [MemoryReservation](#cfn-pipes-pipe-ecscontaineroverride-memoryreservation): Integer
  [Name](#cfn-pipes-pipe-ecscontaineroverride-name): String
  [ResourceRequirements](#cfn-pipes-pipe-ecscontaineroverride-resourcerequirements):
    - EcsResourceRequirement
```

## Properties<a name="aws-properties-pipes-pipe-ecscontaineroverride-properties"></a>

`Command` <a name="cfn-pipes-pipe-ecscontaineroverride-command"></a>
The command to send to the container that overrides the default command from the Docker image or the task definition\. You must also specify a container name\.  
_Required_: No  
_Type_: List of String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Cpu` <a name="cfn-pipes-pipe-ecscontaineroverride-cpu"></a>
The number of `cpu` units reserved for the container, instead of the default value from the task definition\. You must also specify a container name\.  
_Required_: No  
_Type_: Integer  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Environment` <a name="cfn-pipes-pipe-ecscontaineroverride-environment"></a>
The environment variables to send to the container\. You can add new environment variables, which are added to the container at launch, or you can override the existing environment variables from the Docker image or the task definition\. You must also specify a container name\.  
_Required_: No  
_Type_: List of [EcsEnvironmentVariable](aws-properties-pipes-pipe-ecsenvironmentvariable.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`EnvironmentFiles` <a name="cfn-pipes-pipe-ecscontaineroverride-environmentfiles"></a>
A list of files containing the environment variables to pass to a container, instead of the value from the container definition\.  
_Required_: No  
_Type_: List of [EcsEnvironmentFile](aws-properties-pipes-pipe-ecsenvironmentfile.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Memory` <a name="cfn-pipes-pipe-ecscontaineroverride-memory"></a>
The hard limit \(in MiB\) of memory to present to the container, instead of the default value from the task definition\. If your container attempts to exceed the memory specified here, the container is killed\. You must also specify a container name\.  
_Required_: No  
_Type_: Integer  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`MemoryReservation` <a name="cfn-pipes-pipe-ecscontaineroverride-memoryreservation"></a>
The soft limit \(in MiB\) of memory to reserve for the container, instead of the default value from the task definition\. You must also specify a container name\.  
_Required_: No  
_Type_: Integer  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Name` <a name="cfn-pipes-pipe-ecscontaineroverride-name"></a>
The name of the container that receives the override\. This parameter is required if any override is specified\.  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`ResourceRequirements` <a name="cfn-pipes-pipe-ecscontaineroverride-resourcerequirements"></a>
The type and amount of a resource to assign to a container, instead of the default value from the task definition\. The only supported resource is a GPU\.  
_Required_: No  
_Type_: List of [EcsResourceRequirement](aws-properties-pipes-pipe-ecsresourcerequirement.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
