# AWS::Scheduler::Schedule EcsParameters<a name="aws-properties-scheduler-schedule-ecsparameters"></a>

The templated target type for the Amazon ECS [https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_RunTask.html](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_RunTask.html) API operation\.

## Syntax<a name="aws-properties-scheduler-schedule-ecsparameters-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-scheduler-schedule-ecsparameters-syntax.json"></a>

```
{
  "[CapacityProviderStrategy](#cfn-scheduler-schedule-ecsparameters-capacityproviderstrategy)" : [ CapacityProviderStrategyItem, ... ],
  "[EnableECSManagedTags](#cfn-scheduler-schedule-ecsparameters-enableecsmanagedtags)" : Boolean,
  "[EnableExecuteCommand](#cfn-scheduler-schedule-ecsparameters-enableexecutecommand)" : Boolean,
  "[Group](#cfn-scheduler-schedule-ecsparameters-group)" : String,
  "[LaunchType](#cfn-scheduler-schedule-ecsparameters-launchtype)" : String,
  "[NetworkConfiguration](#cfn-scheduler-schedule-ecsparameters-networkconfiguration)" : NetworkConfiguration,
  "[PlacementConstraints](#cfn-scheduler-schedule-ecsparameters-placementconstraints)" : [ PlacementConstraint, ... ],
  "[PlacementStrategy](#cfn-scheduler-schedule-ecsparameters-placementstrategy)" : [ PlacementStrategy, ... ],
  "[PlatformVersion](#cfn-scheduler-schedule-ecsparameters-platformversion)" : String,
  "[PropagateTags](#cfn-scheduler-schedule-ecsparameters-propagatetags)" : String,
  "[ReferenceId](#cfn-scheduler-schedule-ecsparameters-referenceid)" : String,
  "[Tags](#cfn-scheduler-schedule-ecsparameters-tags)" : Json,
  "[TaskCount](#cfn-scheduler-schedule-ecsparameters-taskcount)" : Double,
  "[TaskDefinitionArn](#cfn-scheduler-schedule-ecsparameters-taskdefinitionarn)" : String
}
```

### YAML<a name="aws-properties-scheduler-schedule-ecsparameters-syntax.yaml"></a>

```
  [CapacityProviderStrategy](#cfn-scheduler-schedule-ecsparameters-capacityproviderstrategy):
    - CapacityProviderStrategyItem
  [EnableECSManagedTags](#cfn-scheduler-schedule-ecsparameters-enableecsmanagedtags): Boolean
  [EnableExecuteCommand](#cfn-scheduler-schedule-ecsparameters-enableexecutecommand): Boolean
  [Group](#cfn-scheduler-schedule-ecsparameters-group): String
  [LaunchType](#cfn-scheduler-schedule-ecsparameters-launchtype): String
  [NetworkConfiguration](#cfn-scheduler-schedule-ecsparameters-networkconfiguration):
    NetworkConfiguration
  [PlacementConstraints](#cfn-scheduler-schedule-ecsparameters-placementconstraints):
    - PlacementConstraint
  [PlacementStrategy](#cfn-scheduler-schedule-ecsparameters-placementstrategy):
    - PlacementStrategy
  [PlatformVersion](#cfn-scheduler-schedule-ecsparameters-platformversion): String
  [PropagateTags](#cfn-scheduler-schedule-ecsparameters-propagatetags): String
  [ReferenceId](#cfn-scheduler-schedule-ecsparameters-referenceid): String
  [Tags](#cfn-scheduler-schedule-ecsparameters-tags): Json
  [TaskCount](#cfn-scheduler-schedule-ecsparameters-taskcount): Double
  [TaskDefinitionArn](#cfn-scheduler-schedule-ecsparameters-taskdefinitionarn): String
```

## Properties<a name="aws-properties-scheduler-schedule-ecsparameters-properties"></a>

`CapacityProviderStrategy` <a name="cfn-scheduler-schedule-ecsparameters-capacityproviderstrategy"></a>
The capacity provider strategy to use for the task\.  
_Required_: No  
_Type_: List of [CapacityProviderStrategyItem](aws-properties-scheduler-schedule-capacityproviderstrategyitem.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`EnableECSManagedTags` <a name="cfn-scheduler-schedule-ecsparameters-enableecsmanagedtags"></a>
Specifies whether to enable Amazon ECS managed tags for the task\. For more information, see [Tagging Your Amazon ECS Resources](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-using-tags.html) in the _Amazon ECS Developer Guide_\.  
_Required_: No  
_Type_: Boolean  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`EnableExecuteCommand` <a name="cfn-scheduler-schedule-ecsparameters-enableexecutecommand"></a>
Whether or not to enable the execute command functionality for the containers in this task\. If true, this enables execute command functionality on all containers in the task\.  
_Required_: No  
_Type_: Boolean  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Group` <a name="cfn-scheduler-schedule-ecsparameters-group"></a>
Specifies an ECS task group for the task\. The maximum length is 255 characters\.  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`LaunchType` <a name="cfn-scheduler-schedule-ecsparameters-launchtype"></a>
Specifies the launch type on which your task is running\. The launch type that you specify here must match one of the launch type \(compatibilities\) of the target task\. The `FARGATE` value is supported only in the Regions where Fargate with Amazon ECS is supported\. For more information, see [AWS Fargate on Amazon ECS](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/AWS_Fargate.html) in the _Amazon ECS Developer Guide_\.  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`NetworkConfiguration` <a name="cfn-scheduler-schedule-ecsparameters-networkconfiguration"></a>
This structure specifies the network configuration for an ECS task\.  
_Required_: No  
_Type_: [NetworkConfiguration](aws-properties-scheduler-schedule-networkconfiguration.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`PlacementConstraints` <a name="cfn-scheduler-schedule-ecsparameters-placementconstraints"></a>
An array of placement constraint objects to use for the task\. You can specify up to 10 constraints per task \(including constraints in the task definition and those specified at runtime\)\.  
_Required_: No  
_Type_: List of [PlacementConstraint](aws-properties-scheduler-schedule-placementconstraint.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`PlacementStrategy` <a name="cfn-scheduler-schedule-ecsparameters-placementstrategy"></a>
The task placement strategy for a task or service\.  
_Required_: No  
_Type_: [List](aws-properties-scheduler-schedule-placementstrategy.md) of [PlacementStrategy](aws-properties-scheduler-schedule-placementstrategy.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`PlatformVersion` <a name="cfn-scheduler-schedule-ecsparameters-platformversion"></a>
Specifies the platform version for the task\. Specify only the numeric portion of the platform version, such as `1.1.0`\.  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`PropagateTags` <a name="cfn-scheduler-schedule-ecsparameters-propagatetags"></a>
Specifies whether to propagate the tags from the task definition to the task\. If no value is specified, the tags are not propagated\. Tags can only be propagated to the task during task creation\. To add tags to a task after task creation, use Amazon ECS's [https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_TagResource.html](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_TagResource.html) API action\.  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`ReferenceId` <a name="cfn-scheduler-schedule-ecsparameters-referenceid"></a>
The reference ID to use for the task\.  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Tags` <a name="cfn-scheduler-schedule-ecsparameters-tags"></a>
The metadata that you apply to the task to help you categorize and organize them\. Each tag consists of a key and an optional value, both of which you define\. For more information, see [https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_RunTask.html](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_RunTask.html) in the _Amazon ECS API Reference_\.  
_Required_: No  
_Type_: Json  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`TaskCount` <a name="cfn-scheduler-schedule-ecsparameters-taskcount"></a>
The number of tasks to create based on `TaskDefinition`\. The default is `1`\.  
_Required_: No  
_Type_: Double  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`TaskDefinitionArn` <a name="cfn-scheduler-schedule-ecsparameters-taskdefinitionarn"></a>
The Amazon Resource Name \(ARN\) of the task definition to use if the event target is an Amazon ECS task\.  
_Required_: Yes  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
