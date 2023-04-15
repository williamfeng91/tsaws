# AWS::Batch::JobDefinition<a name="aws-resource-batch-jobdefinition"></a>

The `AWS::Batch::JobDefinition` resource specifies the parameters for an AWS Batch job definition\. For more information, see [Job Definitions](https://docs.aws.amazon.com/batch/latest/userguide/job_definitions.html) in the _AWS Batch User Guide_\.

## Syntax<a name="aws-resource-batch-jobdefinition-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-resource-batch-jobdefinition-syntax.json"></a>

```
{
  "Type" : "AWS::Batch::JobDefinition",
  "Properties" : {
      "[ContainerProperties](#cfn-batch-jobdefinition-containerproperties)" : ContainerProperties,
      "[EksProperties](#cfn-batch-jobdefinition-eksproperties)" : EksProperties,
      "[JobDefinitionName](#cfn-batch-jobdefinition-jobdefinitionname)" : String,
      "[NodeProperties](#cfn-batch-jobdefinition-nodeproperties)" : NodeProperties,
      "[Parameters](#cfn-batch-jobdefinition-parameters)" : Json,
      "[PlatformCapabilities](#cfn-batch-jobdefinition-platformcapabilities)" : [ String, ... ],
      "[PropagateTags](#cfn-batch-jobdefinition-propagatetags)" : Boolean,
      "[RetryStrategy](#cfn-batch-jobdefinition-retrystrategy)" : RetryStrategy,
      "[SchedulingPriority](#cfn-batch-jobdefinition-schedulingpriority)" : Integer,
      "[Tags](#cfn-batch-jobdefinition-tags)" : Json,
      "[Timeout](#cfn-batch-jobdefinition-timeout)" : Timeout,
      "[Type](#cfn-batch-jobdefinition-type)" : String
    }
}
```

### YAML<a name="aws-resource-batch-jobdefinition-syntax.yaml"></a>

```
Type: AWS::Batch::JobDefinition
Properties:
  [ContainerProperties](#cfn-batch-jobdefinition-containerproperties):
    ContainerProperties
  [EksProperties](#cfn-batch-jobdefinition-eksproperties):
    EksProperties
  [JobDefinitionName](#cfn-batch-jobdefinition-jobdefinitionname): String
  [NodeProperties](#cfn-batch-jobdefinition-nodeproperties):
    NodeProperties
  [Parameters](#cfn-batch-jobdefinition-parameters): Json
  [PlatformCapabilities](#cfn-batch-jobdefinition-platformcapabilities):
    - String
  [PropagateTags](#cfn-batch-jobdefinition-propagatetags): Boolean
  [RetryStrategy](#cfn-batch-jobdefinition-retrystrategy):
    RetryStrategy
  [SchedulingPriority](#cfn-batch-jobdefinition-schedulingpriority): Integer
  [Tags](#cfn-batch-jobdefinition-tags): Json
  [Timeout](#cfn-batch-jobdefinition-timeout):
    Timeout
  [Type](#cfn-batch-jobdefinition-type): String
```

## Properties<a name="aws-resource-batch-jobdefinition-properties"></a>

`ContainerProperties` <a name="cfn-batch-jobdefinition-containerproperties"></a>
An object with various properties specific to Amazon ECS based jobs\. Valid values are `containerProperties`, `eksProperties`, and `nodeProperties`\. Only one can be specified\.  
_Required_: No  
_Type_: [ContainerProperties](aws-properties-batch-jobdefinition-containerproperties.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`EksProperties` <a name="cfn-batch-jobdefinition-eksproperties"></a>
An object with various properties that are specific to Amazon EKS based jobs\. Valid values are `containerProperties`, `eksProperties`, and `nodeProperties`\. Only one can be specified\.  
_Required_: No  
_Type_: [EksProperties](aws-properties-batch-jobdefinition-eksproperties.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`JobDefinitionName` <a name="cfn-batch-jobdefinition-jobdefinitionname"></a>
The name of the job definition\.  
_Required_: No  
_Type_: String  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`NodeProperties` <a name="cfn-batch-jobdefinition-nodeproperties"></a>
An object with various properties that are specific to multi\-node parallel jobs\. Valid values are `containerProperties`, `eksProperties`, and `nodeProperties`\. Only one can be specified\.  
If the job runs on Fargate resources, don't specify `nodeProperties`\. Use `containerProperties` instead\.
_Required_: No  
_Type_: [NodeProperties](aws-properties-batch-jobdefinition-nodeproperties.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Parameters` <a name="cfn-batch-jobdefinition-parameters"></a>
Default parameters or parameter substitution placeholders that are set in the job definition\. Parameters are specified as a key\-value pair mapping\. Parameters in a `SubmitJob` request override any corresponding parameter defaults from the job definition\. For more information about specifying parameters, see [Job definition parameters](https://docs.aws.amazon.com/batch/latest/userguide/job_definition_parameters.html) in the _ AWS Batch User Guide_\.  
_Required_: No  
_Type_: Json  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`PlatformCapabilities` <a name="cfn-batch-jobdefinition-platformcapabilities"></a>
The platform capabilities required by the job definition\. If no value is specified, it defaults to `EC2`\. Jobs run on Fargate resources specify `FARGATE`\.  
_Required_: No  
_Type_: List of String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`PropagateTags` <a name="cfn-batch-jobdefinition-propagatetags"></a>
Specifies whether to propagate the tags from the job or job definition to the corresponding Amazon ECS task\. If no value is specified, the tags aren't propagated\. Tags can only be propagated to the tasks when the tasks are created\. For tags with the same name, job tags are given priority over job definitions tags\. If the total number of combined tags from the job and job definition is over 50, the job is moved to the `FAILED` state\.  
_Required_: No  
_Type_: Boolean  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`RetryStrategy` <a name="cfn-batch-jobdefinition-retrystrategy"></a>
The retry strategy to use for failed jobs that are submitted with this job definition\.  
_Required_: No  
_Type_: [RetryStrategy](aws-properties-batch-jobdefinition-retrystrategy.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`SchedulingPriority` <a name="cfn-batch-jobdefinition-schedulingpriority"></a>
The scheduling priority of the job definition\. This only affects jobs in job queues with a fair share policy\. Jobs with a higher scheduling priority are scheduled before jobs with a lower scheduling priority\.  
_Required_: No  
_Type_: Integer  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Tags` <a name="cfn-batch-jobdefinition-tags"></a>
The tags that are applied to the job definition\.  
_Required_: No  
_Type_: Json  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`Timeout` <a name="cfn-batch-jobdefinition-timeout"></a>
The timeout time for jobs that are submitted with this job definition\. After the amount of time you specify passes, AWS Batch terminates your jobs if they aren't finished\.  
_Required_: No  
_Type_: [Timeout](aws-properties-batch-jobdefinition-timeout.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Type` <a name="cfn-batch-jobdefinition-type"></a>
The type of job definition\. For more information about multi\-node parallel jobs, see [Creating a multi\-node parallel job definition](https://docs.aws.amazon.com/batch/latest/userguide/multi-node-job-def.html) in the _ AWS Batch User Guide_\.  
If the job is run on Fargate resources, then `multinode` isn't supported\.
_Required_: Yes  
_Type_: String  
_Allowed values_: `container | multinode`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

## Return values<a name="aws-resource-batch-jobdefinition-return-values"></a>

### Ref<a name="aws-resource-batch-jobdefinition-return-values-ref"></a>

When you pass the logical ID of this resource to the intrinsic `Ref` function, `Ref` returns the job definition ARN, such as `arn:aws:batch:us-east-1:111122223333:job-definition/test-gpu:2`\.

For more information about using the `Ref` function, see [Ref](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference-ref.html)\.

## Examples<a name="aws-resource-batch-jobdefinition--examples"></a>

### Test nvidia\-smi<a name="aws-resource-batch-jobdefinition--examples--Test_nvidia-smi"></a>

The following example tests the `nvidia-smi` command on a GPU instance to verify that the GPU is working inside the container\. For more information, see [Test GPU Functionality](https://docs.aws.amazon.com/batch/latest/userguide/example-job-definitions.html#example-test-gpu) in the _AWS Batch User Guide_\.

#### JSON<a name="aws-resource-batch-jobdefinition--examples--Test_nvidia-smi--json"></a>

```
{
 "JobDefinition": {
  "Type": "AWS::Batch::JobDefinition",
  "Properties": {
   "Type": "container",
   "JobDefinitionName": "nvidia-smi",
   "ContainerProperties": {
    "MountPoints": [
     {
      "ReadOnly": false,
      "SourceVolume": "nvidia",
      "ContainerPath": "/usr/local/nvidia"
     }
    ],
    "Volumes": [
     {
      "Host": {
        "SourcePath": "/var/lib/nvidia-docker/volumes/nvidia_driver/latest"
      },
      "Name": "nvidia"
     }
    ],
    "Command": [
      "nvidia-smi"
    ],
    "Privileged": true,
    "JobRoleArn": "String",
    "ReadonlyRootFilesystem": true,
    "ResourceRequirements": [
        {
            "Type": "MEMORY",
            "Value": "2000"
        },
        {
            "Type": "VCPU",
            "Value": "2"
        }
    ],
    "Image": "nvidia/cuda"
   }
  }
 }
}
```

#### YAML<a name="aws-resource-batch-jobdefinition--examples--Test_nvidia-smi--yaml"></a>

```
JobDefinition:
  Type: AWS::Batch::JobDefinition
  Properties:
    Type: container
    JobDefinitionName: nvidia-smi
    ContainerProperties:
      MountPoints:
        - ReadOnly: false
          SourceVolume: nvidia
          ContainerPath: /usr/local/nvidia
      Volumes:
        - Host:
            SourcePath: /var/lib/nvidia-docker/volumes/nvidia_driver/latest
          Name: nvidia
      Command:
        - nvidia-smi
      Privileged: true
      JobRoleArn: String
      ReadonlyRootFilesystem: true
      ResourceRequirements:
        - Type: MEMORY
          Value: '2000'
        - Type: VCPU
          Value: '2'
      Image: nvidia/cuda
```

## See also<a name="aws-resource-batch-jobdefinition--seealso"></a>

- [Job Definition Parameters](https://docs.aws.amazon.com/batch/latest/userguide/job_definition_parameters.html) in the _AWS Batch User Guide_\.
