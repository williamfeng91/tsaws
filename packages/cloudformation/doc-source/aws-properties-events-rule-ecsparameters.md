# AWS::Events::Rule EcsParameters<a name="aws-properties-events-rule-ecsparameters"></a>

The custom parameters to be used when the target is an Amazon ECS task\.

## Syntax<a name="aws-properties-events-rule-ecsparameters-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-events-rule-ecsparameters-syntax.json"></a>

```
{
  "[CapacityProviderStrategy](#cfn-events-rule-ecsparameters-capacityproviderstrategy)" : [ CapacityProviderStrategyItem, ... ],
  "[EnableECSManagedTags](#cfn-events-rule-ecsparameters-enableecsmanagedtags)" : Boolean,
  "[EnableExecuteCommand](#cfn-events-rule-ecsparameters-enableexecutecommand)" : Boolean,
  "[Group](#cfn-events-rule-ecsparameters-group)" : String,
  "[LaunchType](#cfn-events-rule-ecsparameters-launchtype)" : String,
  "[NetworkConfiguration](#cfn-events-rule-ecsparameters-networkconfiguration)" : NetworkConfiguration,
  "[PlacementConstraints](#cfn-events-rule-ecsparameters-placementconstraints)" : [ PlacementConstraint, ... ],
  "[PlacementStrategies](#cfn-events-rule-ecsparameters-placementstrategies)" : [ PlacementStrategy, ... ],
  "[PlatformVersion](#cfn-events-rule-ecsparameters-platformversion)" : String,
  "[PropagateTags](#cfn-events-rule-ecsparameters-propagatetags)" : String,
  "[ReferenceId](#cfn-events-rule-ecsparameters-referenceid)" : String,
  "[TagList](#cfn-events-rule-ecsparameters-taglist)" : [ Tag, ... ],
  "[TaskCount](#cfn-events-rule-ecsparameters-taskcount)" : Integer,
  "[TaskDefinitionArn](#cfn-events-rule-ecsparameters-taskdefinitionarn)" : String
}
```

### YAML<a name="aws-properties-events-rule-ecsparameters-syntax.yaml"></a>

```
  [CapacityProviderStrategy](#cfn-events-rule-ecsparameters-capacityproviderstrategy):
    - CapacityProviderStrategyItem
  [EnableECSManagedTags](#cfn-events-rule-ecsparameters-enableecsmanagedtags): Boolean
  [EnableExecuteCommand](#cfn-events-rule-ecsparameters-enableexecutecommand): Boolean
  [Group](#cfn-events-rule-ecsparameters-group): String
  [LaunchType](#cfn-events-rule-ecsparameters-launchtype): String
  [NetworkConfiguration](#cfn-events-rule-ecsparameters-networkconfiguration):
    NetworkConfiguration
  [PlacementConstraints](#cfn-events-rule-ecsparameters-placementconstraints):
    - PlacementConstraint
  [PlacementStrategies](#cfn-events-rule-ecsparameters-placementstrategies):
    - PlacementStrategy
  [PlatformVersion](#cfn-events-rule-ecsparameters-platformversion): String
  [PropagateTags](#cfn-events-rule-ecsparameters-propagatetags): String
  [ReferenceId](#cfn-events-rule-ecsparameters-referenceid): String
  [TagList](#cfn-events-rule-ecsparameters-taglist):
    - Tag
  [TaskCount](#cfn-events-rule-ecsparameters-taskcount): Integer
  [TaskDefinitionArn](#cfn-events-rule-ecsparameters-taskdefinitionarn): String
```

## Properties<a name="aws-properties-events-rule-ecsparameters-properties"></a>

`CapacityProviderStrategy` <a name="cfn-events-rule-ecsparameters-capacityproviderstrategy"></a>
The capacity provider strategy to use for the task\.  
If a `capacityProviderStrategy` is specified, the `launchType` parameter must be omitted\. If no `capacityProviderStrategy` or launchType is specified, the `defaultCapacityProviderStrategy` for the cluster is used\.  
_Required_: No  
_Type_: List of [CapacityProviderStrategyItem](aws-properties-events-rule-capacityproviderstrategyitem.md)  
_Maximum_: `6`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`EnableECSManagedTags` <a name="cfn-events-rule-ecsparameters-enableecsmanagedtags"></a>
Specifies whether to enable Amazon ECS managed tags for the task\. For more information, see [Tagging Your Amazon ECS Resources](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-using-tags.html) in the Amazon Elastic Container Service Developer Guide\.  
_Required_: No  
_Type_: Boolean  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`EnableExecuteCommand` <a name="cfn-events-rule-ecsparameters-enableexecutecommand"></a>
Whether or not to enable the execute command functionality for the containers in this task\. If true, this enables execute command functionality on all containers in the task\.  
_Required_: No  
_Type_: Boolean  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Group` <a name="cfn-events-rule-ecsparameters-group"></a>
Specifies an ECS task group for the task\. The maximum length is 255 characters\.  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`LaunchType` <a name="cfn-events-rule-ecsparameters-launchtype"></a>
Specifies the launch type on which your task is running\. The launch type that you specify here must match one of the launch type \(compatibilities\) of the target task\. The `FARGATE` value is supported only in the Regions where AWS Fargate with Amazon ECS is supported\. For more information, see [AWS Fargate on Amazon ECS](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/AWS-Fargate.html) in the _Amazon Elastic Container Service Developer Guide_\.  
_Required_: No  
_Type_: String  
_Allowed values_: `EC2 | EXTERNAL | FARGATE`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`NetworkConfiguration` <a name="cfn-events-rule-ecsparameters-networkconfiguration"></a>
Use this structure if the Amazon ECS task uses the `awsvpc` network mode\. This structure specifies the VPC subnets and security groups associated with the task, and whether a public IP address is to be used\. This structure is required if `LaunchType` is `FARGATE` because the `awsvpc` mode is required for Fargate tasks\.  
If you specify `NetworkConfiguration` when the target ECS task does not use the `awsvpc` network mode, the task fails\.  
_Required_: No  
_Type_: [NetworkConfiguration](aws-properties-events-rule-networkconfiguration.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`PlacementConstraints` <a name="cfn-events-rule-ecsparameters-placementconstraints"></a>
An array of placement constraint objects to use for the task\. You can specify up to 10 constraints per task \(including constraints in the task definition and those specified at runtime\)\.  
_Required_: No  
_Type_: List of [PlacementConstraint](aws-properties-events-rule-placementconstraint.md)  
_Maximum_: `10`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`PlacementStrategies` <a name="cfn-events-rule-ecsparameters-placementstrategies"></a>
The placement strategy objects to use for the task\. You can specify a maximum of five strategy rules per task\.  
_Required_: No  
_Type_: List of [PlacementStrategy](aws-properties-events-rule-placementstrategy.md)  
_Maximum_: `5`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`PlatformVersion` <a name="cfn-events-rule-ecsparameters-platformversion"></a>
Specifies the platform version for the task\. Specify only the numeric portion of the platform version, such as `1.1.0`\.  
This structure is used only if `LaunchType` is `FARGATE`\. For more information about valid platform versions, see [AWS Fargate Platform Versions](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/platform_versions.html) in the _Amazon Elastic Container Service Developer Guide_\.  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`PropagateTags` <a name="cfn-events-rule-ecsparameters-propagatetags"></a>
Specifies whether to propagate the tags from the task definition to the task\. If no value is specified, the tags are not propagated\. Tags can only be propagated to the task during task creation\. To add tags to a task after task creation, use the TagResource API action\.  
_Required_: No  
_Type_: String  
_Allowed values_: `TASK_DEFINITION`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`ReferenceId` <a name="cfn-events-rule-ecsparameters-referenceid"></a>
The reference ID to use for the task\.  
_Required_: No  
_Type_: String  
_Maximum_: `1024`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`TagList` <a name="cfn-events-rule-ecsparameters-taglist"></a>
The metadata that you apply to the task to help you categorize and organize them\. Each tag consists of a key and an optional value, both of which you define\. To learn more, see [RunTask](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_RunTask.html#ECS-RunTask-request-tags) in the Amazon ECS API Reference\.  
_Required_: No  
_Type_: List of [Tag](aws-properties-events-rule-tag.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`TaskCount` <a name="cfn-events-rule-ecsparameters-taskcount"></a>
The number of tasks to create based on `TaskDefinition`\. The default is 1\.  
_Required_: No  
_Type_: Integer  
_Minimum_: `1`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`TaskDefinitionArn` <a name="cfn-events-rule-ecsparameters-taskdefinitionarn"></a>
The ARN of the task definition to use if the event target is an Amazon ECS task\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `1600`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

## Examples<a name="aws-properties-events-rule-ecsparameters--examples"></a>

### ECS example<a name="aws-properties-events-rule-ecsparameters--examples--ECS_example"></a>

The following example defines the ECS parameters\.

#### JSON<a name="aws-properties-events-rule-ecsparameters--examples--ECS_example--json"></a>

```
{
  "LaunchType": "FARGATE",
  "NetworkConfiguration": {
    "AwsVpcConfiguration": {
      "AssignPublicIp": "DISABLED",
      "SecurityGroups": [
        {
          "Fn: : GetAtt": [
            "ScheduledFargateTaskScheduledTaskDefSecurityGroupE075BC19",
            "GroupId"
          ]
        }
      ],
      "Subnets": [
        {
          "Ref": "Vpc01"
        }
      ]
    }
  },
  "TaskCount": 2,
  "TaskDefinitionArn": {
     "Ref": "ScheduledFargateTaskScheduledTaskDef521FA675"
  },
  "enableECSManagedTags": true,
  "placementConstraints": [
    {
        "expression": "attribute:ecs.instance-type == t2.small",
        "type": "memberOf"
    }
  ],
  "placementStrategy": [
  {
     "field": "instanceId",
     "type ": "binpack"
  }
  ],
  "propagateTags": "TASK_DEFINITION",
  "referenceId": "idopsks",
  "startedBy": "user1",
  "tags": [
      {
          "key": "maintask",
          "value ": "taskvalue"
      }
  ]
}
```

#### YAML<a name="aws-properties-events-rule-ecsparameters--examples--ECS_example--yaml"></a>

```
LaunchType: "FARGATE"
NetworkConfiguration:
  AwsVpcConfiguration:
    AssignPublicIp: "DISABLED"
    SecurityGroups:
      Fn: : GetAtt:
        "ScheduledFargateTaskScheduledTaskDefSecurityGroupE075BC19",
        "GroupId"
    Subnets:
      Ref:
        "Vpc01"
TaskCount: 2
TaskDefinitionArn:
  Ref:
    "ScheduledFargateTaskScheduledTaskDef521FA675"
enableECSManagedTags: true
placementConstraints:
  expression:
    "attribute:ecs.instance-type == t2.small"
  type:
    "memberOf"
placementStrategy:
  field:
    "instanceId"
  type:
    "binpack"
propagateTags:
  "TASK_DEFINITION"
referenceId:
  "idopsks"
startedBy:
  "user1"
tags:
  key:
    "maintask"
  value:
    "taskvalue"
```
