# AWS::Pipes::Pipe PipeTargetEcsTaskParameters<a name="aws-properties-pipes-pipe-pipetargetecstaskparameters"></a>

The parameters for using an Amazon ECS task as a target\.

## Syntax<a name="aws-properties-pipes-pipe-pipetargetecstaskparameters-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-pipes-pipe-pipetargetecstaskparameters-syntax.json"></a>

```
{
  "[CapacityProviderStrategy](#cfn-pipes-pipe-pipetargetecstaskparameters-capacityproviderstrategy)" : [ CapacityProviderStrategyItem, ... ],
  "[EnableECSManagedTags](#cfn-pipes-pipe-pipetargetecstaskparameters-enableecsmanagedtags)" : Boolean,
  "[EnableExecuteCommand](#cfn-pipes-pipe-pipetargetecstaskparameters-enableexecutecommand)" : Boolean,
  "[Group](#cfn-pipes-pipe-pipetargetecstaskparameters-group)" : String,
  "[LaunchType](#cfn-pipes-pipe-pipetargetecstaskparameters-launchtype)" : String,
  "[NetworkConfiguration](#cfn-pipes-pipe-pipetargetecstaskparameters-networkconfiguration)" : NetworkConfiguration,
  "[Overrides](#cfn-pipes-pipe-pipetargetecstaskparameters-overrides)" : EcsTaskOverride,
  "[PlacementConstraints](#cfn-pipes-pipe-pipetargetecstaskparameters-placementconstraints)" : [ PlacementConstraint, ... ],
  "[PlacementStrategy](#cfn-pipes-pipe-pipetargetecstaskparameters-placementstrategy)" : [ PlacementStrategy, ... ],
  "[PlatformVersion](#cfn-pipes-pipe-pipetargetecstaskparameters-platformversion)" : String,
  "[PropagateTags](#cfn-pipes-pipe-pipetargetecstaskparameters-propagatetags)" : String,
  "[ReferenceId](#cfn-pipes-pipe-pipetargetecstaskparameters-referenceid)" : String,
  "[Tags](#cfn-pipes-pipe-pipetargetecstaskparameters-tags)" : [ [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html), ... ],
  "[TaskCount](#cfn-pipes-pipe-pipetargetecstaskparameters-taskcount)" : Integer,
  "[TaskDefinitionArn](#cfn-pipes-pipe-pipetargetecstaskparameters-taskdefinitionarn)" : String
}
```

### YAML<a name="aws-properties-pipes-pipe-pipetargetecstaskparameters-syntax.yaml"></a>

```
  [CapacityProviderStrategy](#cfn-pipes-pipe-pipetargetecstaskparameters-capacityproviderstrategy):
    - CapacityProviderStrategyItem
  [EnableECSManagedTags](#cfn-pipes-pipe-pipetargetecstaskparameters-enableecsmanagedtags): Boolean
  [EnableExecuteCommand](#cfn-pipes-pipe-pipetargetecstaskparameters-enableexecutecommand): Boolean
  [Group](#cfn-pipes-pipe-pipetargetecstaskparameters-group): String
  [LaunchType](#cfn-pipes-pipe-pipetargetecstaskparameters-launchtype): String
  [NetworkConfiguration](#cfn-pipes-pipe-pipetargetecstaskparameters-networkconfiguration):
    NetworkConfiguration
  [Overrides](#cfn-pipes-pipe-pipetargetecstaskparameters-overrides):
    EcsTaskOverride
  [PlacementConstraints](#cfn-pipes-pipe-pipetargetecstaskparameters-placementconstraints):
    - PlacementConstraint
  [PlacementStrategy](#cfn-pipes-pipe-pipetargetecstaskparameters-placementstrategy):
    - PlacementStrategy
  [PlatformVersion](#cfn-pipes-pipe-pipetargetecstaskparameters-platformversion): String
  [PropagateTags](#cfn-pipes-pipe-pipetargetecstaskparameters-propagatetags): String
  [ReferenceId](#cfn-pipes-pipe-pipetargetecstaskparameters-referenceid): String
  [Tags](#cfn-pipes-pipe-pipetargetecstaskparameters-tags):
    - [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)
  [TaskCount](#cfn-pipes-pipe-pipetargetecstaskparameters-taskcount): Integer
  [TaskDefinitionArn](#cfn-pipes-pipe-pipetargetecstaskparameters-taskdefinitionarn): String
```

## Properties<a name="aws-properties-pipes-pipe-pipetargetecstaskparameters-properties"></a>

`CapacityProviderStrategy` <a name="cfn-pipes-pipe-pipetargetecstaskparameters-capacityproviderstrategy"></a>
The capacity provider strategy to use for the task\.  
If a `capacityProviderStrategy` is specified, the `launchType` parameter must be omitted\. If no `capacityProviderStrategy` or launchType is specified, the `defaultCapacityProviderStrategy` for the cluster is used\.  
_Required_: No  
_Type_: List of [CapacityProviderStrategyItem](aws-properties-pipes-pipe-capacityproviderstrategyitem.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`EnableECSManagedTags` <a name="cfn-pipes-pipe-pipetargetecstaskparameters-enableecsmanagedtags"></a>
Specifies whether to enable Amazon ECS managed tags for the task\. For more information, see [Tagging Your Amazon ECS Resources](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-using-tags.html) in the Amazon Elastic Container Service Developer Guide\.  
_Required_: No  
_Type_: Boolean  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`EnableExecuteCommand` <a name="cfn-pipes-pipe-pipetargetecstaskparameters-enableexecutecommand"></a>
Whether or not to enable the execute command functionality for the containers in this task\. If true, this enables execute command functionality on all containers in the task\.  
_Required_: No  
_Type_: Boolean  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Group` <a name="cfn-pipes-pipe-pipetargetecstaskparameters-group"></a>
Specifies an Amazon ECS task group for the task\. The maximum length is 255 characters\.  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`LaunchType` <a name="cfn-pipes-pipe-pipetargetecstaskparameters-launchtype"></a>
Specifies the launch type on which your task is running\. The launch type that you specify here must match one of the launch type \(compatibilities\) of the target task\. The `FARGATE` value is supported only in the Regions where AWS Fargate with Amazon ECS is supported\. For more information, see [AWS Fargate on Amazon ECS](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/AWS-Fargate.html) in the _Amazon Elastic Container Service Developer Guide_\.  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`NetworkConfiguration` <a name="cfn-pipes-pipe-pipetargetecstaskparameters-networkconfiguration"></a>
Use this structure if the Amazon ECS task uses the `awsvpc` network mode\. This structure specifies the VPC subnets and security groups associated with the task, and whether a public IP address is to be used\. This structure is required if `LaunchType` is `FARGATE` because the `awsvpc` mode is required for Fargate tasks\.  
If you specify `NetworkConfiguration` when the target ECS task does not use the `awsvpc` network mode, the task fails\.  
_Required_: No  
_Type_: [NetworkConfiguration](aws-properties-pipes-pipe-networkconfiguration.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Overrides` <a name="cfn-pipes-pipe-pipetargetecstaskparameters-overrides"></a>
The overrides that are associated with a task\.  
_Required_: No  
_Type_: [EcsTaskOverride](aws-properties-pipes-pipe-ecstaskoverride.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`PlacementConstraints` <a name="cfn-pipes-pipe-pipetargetecstaskparameters-placementconstraints"></a>
An array of placement constraint objects to use for the task\. You can specify up to 10 constraints per task \(including constraints in the task definition and those specified at runtime\)\.  
_Required_: No  
_Type_: List of [PlacementConstraint](aws-properties-pipes-pipe-placementconstraint.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`PlacementStrategy` <a name="cfn-pipes-pipe-pipetargetecstaskparameters-placementstrategy"></a>
The placement strategy objects to use for the task\. You can specify a maximum of five strategy rules per task\.  
_Required_: No  
_Type_: [List](aws-properties-pipes-pipe-placementstrategy.md) of [PlacementStrategy](aws-properties-pipes-pipe-placementstrategy.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`PlatformVersion` <a name="cfn-pipes-pipe-pipetargetecstaskparameters-platformversion"></a>
Specifies the platform version for the task\. Specify only the numeric portion of the platform version, such as `1.1.0`\.  
This structure is used only if `LaunchType` is `FARGATE`\. For more information about valid platform versions, see [AWS Fargate Platform Versions](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/platform_versions.html) in the _Amazon Elastic Container Service Developer Guide_\.  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`PropagateTags` <a name="cfn-pipes-pipe-pipetargetecstaskparameters-propagatetags"></a>
Specifies whether to propagate the tags from the task definition to the task\. If no value is specified, the tags are not propagated\. Tags can only be propagated to the task during task creation\. To add tags to a task after task creation, use the `TagResource` API action\.  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`ReferenceId` <a name="cfn-pipes-pipe-pipetargetecstaskparameters-referenceid"></a>
The reference ID to use for the task\.  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Tags` <a name="cfn-pipes-pipe-pipetargetecstaskparameters-tags"></a>
The metadata that you apply to the task to help you categorize and organize them\. Each tag consists of a key and an optional value, both of which you define\. To learn more, see [RunTask](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_RunTask.html#ECS-RunTask-request-tags) in the Amazon ECS API Reference\.  
_Required_: No  
_Type_: List of [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`TaskCount` <a name="cfn-pipes-pipe-pipetargetecstaskparameters-taskcount"></a>
The number of tasks to create based on `TaskDefinition`\. The default is 1\.  
_Required_: No  
_Type_: Integer  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`TaskDefinitionArn` <a name="cfn-pipes-pipe-pipetargetecstaskparameters-taskdefinitionarn"></a>
The ARN of the task definition to use if the event target is an Amazon ECS task\.  
_Required_: Yes  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
