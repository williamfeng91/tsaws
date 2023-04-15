# AWS::Pipes::Pipe BatchContainerOverrides<a name="aws-properties-pipes-pipe-batchcontaineroverrides"></a>

The overrides that are sent to a container\.

## Syntax<a name="aws-properties-pipes-pipe-batchcontaineroverrides-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-pipes-pipe-batchcontaineroverrides-syntax.json"></a>

```
{
  "[Command](#cfn-pipes-pipe-batchcontaineroverrides-command)" : [ String, ... ],
  "[Environment](#cfn-pipes-pipe-batchcontaineroverrides-environment)" : [ BatchEnvironmentVariable, ... ],
  "[InstanceType](#cfn-pipes-pipe-batchcontaineroverrides-instancetype)" : String,
  "[ResourceRequirements](#cfn-pipes-pipe-batchcontaineroverrides-resourcerequirements)" : [ BatchResourceRequirement, ... ]
}
```

### YAML<a name="aws-properties-pipes-pipe-batchcontaineroverrides-syntax.yaml"></a>

```
  [Command](#cfn-pipes-pipe-batchcontaineroverrides-command):
    - String
  [Environment](#cfn-pipes-pipe-batchcontaineroverrides-environment):
    - BatchEnvironmentVariable
  [InstanceType](#cfn-pipes-pipe-batchcontaineroverrides-instancetype): String
  [ResourceRequirements](#cfn-pipes-pipe-batchcontaineroverrides-resourcerequirements):
    - BatchResourceRequirement
```

## Properties<a name="aws-properties-pipes-pipe-batchcontaineroverrides-properties"></a>

`Command` <a name="cfn-pipes-pipe-batchcontaineroverrides-command"></a>
The command to send to the container that overrides the default command from the Docker image or the task definition\.  
_Required_: No  
_Type_: List of String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Environment` <a name="cfn-pipes-pipe-batchcontaineroverrides-environment"></a>
The environment variables to send to the container\. You can add new environment variables, which are added to the container at launch, or you can override the existing environment variables from the Docker image or the task definition\.  
Environment variables cannot start with "`AWS Batch`"\. This naming convention is reserved for variables that AWS Batch sets\.
_Required_: No  
_Type_: List of [BatchEnvironmentVariable](aws-properties-pipes-pipe-batchenvironmentvariable.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`InstanceType` <a name="cfn-pipes-pipe-batchcontaineroverrides-instancetype"></a>
The instance type to use for a multi\-node parallel job\.  
This parameter isn't applicable to single\-node container jobs or jobs that run on Fargate resources, and shouldn't be provided\.
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`ResourceRequirements` <a name="cfn-pipes-pipe-batchcontaineroverrides-resourcerequirements"></a>
The type and amount of resources to assign to a container\. This overrides the settings in the job definition\. The supported resources include `GPU`, `MEMORY`, and `VCPU`\.  
_Required_: No  
_Type_: List of [BatchResourceRequirement](aws-properties-pipes-pipe-batchresourcerequirement.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
