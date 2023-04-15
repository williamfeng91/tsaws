/**
 * Supported regions:
 * - ap-northeast-1 (version 119.1.0)
 * - ap-northeast-2 (version 119.1.0)
 * - ap-northeast-3 (version 119.1.0)
 * - ap-south-1 (version 119.1.0)
 * - ap-southeast-1 (version 119.1.0)
 * - ap-southeast-2 (version 119.1.0)
 * - ca-central-1 (version 119.1.0)
 * - eu-central-1 (version 119.1.0)
 * - eu-west-1 (version 119.1.0)
 * - eu-west-2 (version 119.1.0)
 * - eu-west-3 (version 119.1.0)
 * - sa-east-1 (version 119.1.0)
 * - us-east-1 (version 119.1.0)
 * - us-east-2 (version 119.1.0)
 * - us-west-1 (version 119.1.0)
 * - us-west-2 (version 119.1.0)
 */
import { List, Value } from '../../shared-types/dataTypes';
import { ResourceTag } from '../../shared-types/resource';

/**
 * The name and value pair of a parameter to use to start execution of a SageMaker Model Building Pipeline.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-scheduler-schedule-sagemakerpipelineparameter.html}
 **/
export interface SchedulerScheduleSageMakerPipelineParameter {
  /**
   * Value of parameter to start execution of a SageMaker Model Building Pipeline.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Value: Value<string>;
  /**
   * Name of parameter to start execution of a SageMaker Model Building Pipeline.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Name: Value<string>;
}

/**
 * The templated target type for the Amazon Kinesis [kinesis/latest/APIReference/API_PutRecord.html](kinesis/latest/APIReference/API_PutRecord.html) API operation.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-scheduler-schedule-kinesisparameters.html}
 **/
export interface SchedulerScheduleKinesisParameters {
  /**
   * Specifies the shard to which EventBridge Scheduler sends the event. For more information, see [Amazon Kinesis Data Streams terminology and concepts](https://docs.aws.amazon.com/streams/latest/dev/key-concepts.html) in the _Amazon Kinesis Streams Developer Guide_.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PartitionKey: Value<string>;
}

/**
 * The templated target type for the Amazon ECS [https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_RunTask.html](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_RunTask.html) API operation.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-scheduler-schedule-ecsparameters.html}
 **/
export interface SchedulerScheduleEcsParameters {
  /**
   * Specifies the platform version for the task. Specify only the numeric portion of the platform version, such as `1.1.0`.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PlatformVersion?: Value<string>;
  /**
   * Specifies an ECS task group for the task. The maximum length is 255 characters.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Group?: Value<string>;
  /**
   * Specifies whether to enable Amazon ECS managed tags for the task. For more information, see [Tagging Your Amazon ECS Resources](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-using-tags.html) in the _Amazon ECS Developer Guide_.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  EnableECSManagedTags?: Value<boolean>;
  /**
   * The number of tasks to create based on `TaskDefinition`. The default is `1`.
   *
   * _Required_: No
   *
   * _Type_: Double
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TaskCount?: Value<number>;
  /**
   * Whether or not to enable the execute command functionality for the containers in this task. If true, this enables execute command functionality on all containers in the task.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  EnableExecuteCommand?: Value<boolean>;
  /**
   * An array of placement constraint objects to use for the task. You can specify up to 10 constraints per task (including constraints in the task definition and those specified at runtime).
   *
   * _Required_: No
   *
   * _Type_: List of [PlacementConstraint](aws-properties-scheduler-schedule-placementconstraint.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PlacementConstraints?: List<SchedulerSchedulePlacementConstraint>;
  /**
   * Specifies whether to propagate the tags from the task definition to the task. If no value is specified, the tags are not propagated. Tags can only be propagated to the task during task creation. To add tags to a task after task creation, use Amazon ECS's [https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_TagResource.html](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_TagResource.html) API action.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PropagateTags?: Value<string>;
  /**
   * The task placement strategy for a task or service.
   *
   * _Required_: No
   *
   * _Type_: [List](aws-properties-scheduler-schedule-placementstrategy.md) of [PlacementStrategy](aws-properties-scheduler-schedule-placementstrategy.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PlacementStrategy?: List<SchedulerSchedulePlacementStrategy>;
  /**
   * Specifies the launch type on which your task is running. The launch type that you specify here must match one of the launch type (compatibilities) of the target task. The `FARGATE` value is supported only in the Regions where Fargate with Amazon ECS is supported. For more information, see [AWS Fargate on Amazon ECS](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/AWS_Fargate.html) in the _Amazon ECS Developer Guide_.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  LaunchType?: Value<string>;
  /**
   * The capacity provider strategy to use for the task.
   *
   * _Required_: No
   *
   * _Type_: List of [CapacityProviderStrategyItem](aws-properties-scheduler-schedule-capacityproviderstrategyitem.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CapacityProviderStrategy?: List<SchedulerScheduleCapacityProviderStrategyItem>;
  /**
   * The reference ID to use for the task.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ReferenceId?: Value<string>;
  /**
   * This structure specifies the network configuration for an ECS task.
   *
   * _Required_: No
   *
   * _Type_: [NetworkConfiguration](aws-properties-scheduler-schedule-networkconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  NetworkConfiguration?: SchedulerScheduleNetworkConfiguration;
  /**
   * The metadata that you apply to the task to help you categorize and organize them. Each tag consists of a key and an optional value, both of which you define. For more information, see [https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_RunTask.html](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_RunTask.html) in the _Amazon ECS API Reference_.
   *
   * _Required_: No
   *
   * _Type_: Json
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Tags?: { [key: string]: any };
  /**
   * The Amazon Resource Name (ARN) of the task definition to use if the event target is an Amazon ECS task.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TaskDefinitionArn: Value<string>;
}

/**
 * The details of a capacity provider strategy.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-scheduler-schedule-capacityproviderstrategyitem.html}
 **/
export interface SchedulerScheduleCapacityProviderStrategyItem {
  /**
   * The short name of the capacity provider.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CapacityProvider: Value<string>;
  /**
   * The weight value designates the relative percentage of the total number of tasks launched that should use the specified capacity provider. The weight value is taken into consideration after the base value, if defined, is satisfied.
   *
   * _Required_: No
   *
   * _Type_: Double
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Weight?: Value<number>;
  /**
   * The base value designates how many tasks, at a minimum, to run on the specified capacity provider. Only one capacity provider in a capacity provider strategy can have a base defined. If no value is specified, the default value of `0` is used.
   *
   * _Required_: No
   *
   * _Type_: Double
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Base?: Value<number>;
}

/**
 * An object representing a constraint on task placement.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-scheduler-schedule-placementconstraint.html}
 **/
export interface SchedulerSchedulePlacementConstraint {
  /**
   * The type of constraint. Use `distinctInstance` to ensure that each task in a particular group is running on a different container instance. Use `memberOf` to restrict the selection to a group of valid candidates.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Type?: Value<string>;
  /**
   * A cluster query language expression to apply to the constraint. You cannot specify an expression if the constraint type is `distinctInstance`. For more information, see [Cluster query language](https://docs.aws.amazon.com/latest/developerguide/cluster-query-language.html) in the _Amazon ECS Developer Guide_.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Expression?: Value<string>;
}

/**
 * An object that contains information about an Amazon SQS queue that EventBridge Scheduler uses as a dead-letter queue for your schedule. If specified, EventBridge Scheduler delivers failed events that could not be successfully delivered to a target to the queue.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-scheduler-schedule-deadletterconfig.html}
 **/
export interface SchedulerScheduleDeadLetterConfig {
  /**
   * The Amazon Resource Name (ARN) of the SQS queue specified as the destination for the dead-letter queue.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Arn?: Value<string>;
}

/**
 * Specifies the network configuration for an ECS task.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-scheduler-schedule-networkconfiguration.html}
 **/
export interface SchedulerScheduleNetworkConfiguration {
  /**
   * Specifies the Amazon VPC subnets and security groups for the task, and whether a public IP address is to be used. This structure is relevant only for ECS tasks that use the awsvpc network mode.
   *
   * _Required_: No
   *
   * _Type_: [AwsVpcConfiguration](aws-properties-scheduler-schedule-awsvpcconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AwsvpcConfiguration?: SchedulerScheduleAwsVpcConfiguration;
}

/**
 * The templated target type for the EventBridge [https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_PutEvents.html](https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_PutEvents.html) API operation.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-scheduler-schedule-eventbridgeparameters.html}
 **/
export interface SchedulerScheduleEventBridgeParameters {
  /**
   * A free-form string, with a maximum of 128 characters, used to decide what fields to expect in the event detail.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DetailType: Value<string>;
  /**
   * The source of the event.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Source: Value<string>;
}

/**
 * The schedule's target. EventBridge Scheduler supports templated target that invoke common API operations, as well as universal targets that you can customize to invoke over 6,000 API operations across more than 270 services. You can only specify one templated or universal target for a schedule.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-scheduler-schedule-target.html}
 **/
export interface SchedulerScheduleTarget {
  /**
   * The text, or well-formed JSON, passed to the target. If you are configuring a templated Lambda, AWS Step Functions, or Amazon EventBridge target, the input must be a well-formed JSON. For all other target types, a JSON is not required. If you do not specify anything for this field, Amazon EventBridge Scheduler delivers a default notification to the target.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Input?: Value<string>;
  /**
   * The templated target type for the Amazon SQS [https://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_SendMessage.html](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_SendMessage.html) API operation. Contains the message group ID to use when the target is a FIFO queue. If you specify an Amazon SQS FIFO queue as a target, the queue must have content-based deduplication enabled. For more information, see [Using the Amazon SQS message deduplication ID](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/using-messagededuplicationid-property.html) in the _Amazon SQS Developer Guide_.
   *
   * _Required_: No
   *
   * _Type_: [SqsParameters](aws-properties-scheduler-schedule-sqsparameters.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SqsParameters?: SchedulerScheduleSqsParameters;
  /**
   * An object that contains information about an Amazon SQS queue that EventBridge Scheduler uses as a dead-letter queue for your schedule. If specified, EventBridge Scheduler delivers failed events that could not be successfully delivered to a target to the queue.
   *
   * _Required_: No
   *
   * _Type_: [DeadLetterConfig](aws-properties-scheduler-schedule-deadletterconfig.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DeadLetterConfig?: SchedulerScheduleDeadLetterConfig;
  /**
   * The templated target type for the Amazon ECS [https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_RunTask.html](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_RunTask.html) API operation.
   *
   * _Required_: No
   *
   * _Type_: [EcsParameters](aws-properties-scheduler-schedule-ecsparameters.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  EcsParameters?: SchedulerScheduleEcsParameters;
  /**
   * The templated target type for the EventBridge [https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_PutEvents.html](https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_PutEvents.html) API operation.
   *
   * _Required_: No
   *
   * _Type_: [EventBridgeParameters](aws-properties-scheduler-schedule-eventbridgeparameters.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  EventBridgeParameters?: SchedulerScheduleEventBridgeParameters;
  /**
   * The Amazon Resource Name (ARN) of the target.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Arn: Value<string>;
  /**
   * The templated target type for the Amazon Kinesis [kinesis/latest/APIReference/API_PutRecord.html](kinesis/latest/APIReference/API_PutRecord.html) API operation.
   *
   * _Required_: No
   *
   * _Type_: [KinesisParameters](aws-properties-scheduler-schedule-kinesisparameters.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  KinesisParameters?: SchedulerScheduleKinesisParameters;
  /**
   * The templated target type for the Amazon SageMaker [https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_StartPipelineExecution.html](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_StartPipelineExecution.html) API operation.
   *
   * _Required_: No
   *
   * _Type_: [SageMakerPipelineParameters](aws-properties-scheduler-schedule-sagemakerpipelineparameters.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SageMakerPipelineParameters?: SchedulerScheduleSageMakerPipelineParameters;
  /**
   * A `RetryPolicy` object that includes information about the retry policy settings, including the maximum age of an event, and the maximum number of times EventBridge Scheduler will try to deliver the event to a target.
   *
   * _Required_: No
   *
   * _Type_: [RetryPolicy](aws-properties-scheduler-schedule-retrypolicy.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RetryPolicy?: SchedulerScheduleRetryPolicy;
  /**
   * The Amazon Resource Name (ARN) of the IAM role that EventBridge Scheduler will use for this target when the schedule is invoked.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RoleArn: Value<string>;
}

/**
 * The templated target type for the Amazon SQS [https://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_SendMessage.html](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_SendMessage.html) API operation. Contains the message group ID to use when the target is a FIFO queue. If you specify an Amazon SQS FIFO queue as a target, the queue must have content-based deduplication enabled. For more information, see [Using the Amazon SQS message deduplication ID](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/using-messagededuplicationid-property.html) in the _Amazon SQS Developer Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-scheduler-schedule-sqsparameters.html}
 **/
export interface SchedulerScheduleSqsParameters {
  /**
   * The FIFO message group ID to use as the target.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MessageGroupId?: Value<string>;
}

/**
 * This structure specifies the VPC subnets and security groups for the task, and whether a public IP address is to be used. This structure is relevant only for ECS tasks that use the awsvpc network mode.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-scheduler-schedule-awsvpcconfiguration.html}
 **/
export interface SchedulerScheduleAwsVpcConfiguration {
  /**
   * Specifies the security groups associated with the task. These security groups must all be in the same VPC. You can specify as many as five security groups. If you do not specify a security group, the default security group for the VPC is used.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SecurityGroups?: List<Value<string>>;
  /**
   * Specifies the subnets associated with the task. These subnets must all be in the same VPC. You can specify as many as 16 subnets.
   *
   * _Required_: Yes
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Subnets: List<Value<string>>;
  /**
   * Specifies whether the task's elastic network interface receives a public IP address. You can specify `ENABLED` only when `LaunchType` in `EcsParameters` is set to `FARGATE`.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AssignPublicIp?: Value<string>;
}

/**
 * Allows you to configure a time window during which EventBridge Scheduler invokes the schedule.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-scheduler-schedule-flexibletimewindow.html}
 **/
export interface SchedulerScheduleFlexibleTimeWindow {
  /**
   * Determines whether the schedule is invoked within a flexible time window.
   *
   * _Allowed Values_: `OFF` | `FLEXIBLE`
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Mode: Value<string>;
  /**
   * The maximum time window during which a schedule can be invoked.
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `1440`
   *
   * _Required_: No
   *
   * _Type_: Double
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MaximumWindowInMinutes?: Value<number>;
}

/**
 * The task placement strategy for a task or service.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-scheduler-schedule-placementstrategy.html}
 **/
export interface SchedulerSchedulePlacementStrategy {
  /**
   * The field to apply the placement strategy against. For the spread placement strategy, valid values are `instanceId` (or `instanceId`, which has the same effect), or any platform or custom attribute that is applied to a container instance, such as `attribute:ecs.availability-zone`. For the binpack placement strategy, valid values are `cpu` and `memory`. For the random placement strategy, this field is not used.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Field?: Value<string>;
  /**
   * The type of placement strategy. The random placement strategy randomly places tasks on available candidates. The spread placement strategy spreads placement across available candidates evenly based on the field parameter. The binpack strategy places tasks on available candidates that have the least available amount of the resource that is specified with the field parameter. For example, if you binpack on memory, a task is placed on the instance with the least amount of remaining memory (but still enough to run the task).
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Type?: Value<string>;
}

/**
 * A `RetryPolicy` object that includes information about the retry policy settings, including the maximum age of an event, and the maximum number of times EventBridge Scheduler will try to deliver the event to a target.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-scheduler-schedule-retrypolicy.html}
 **/
export interface SchedulerScheduleRetryPolicy {
  /**
   * The maximum number of retry attempts to make before the request fails. Retry attempts with exponential backoff continue until either the maximum number of attempts is made or until the duration of the `MaximumEventAgeInSeconds` is reached.
   *
   * _Required_: No
   *
   * _Type_: Double
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MaximumRetryAttempts?: Value<number>;
  /**
   * The maximum amount of time, in seconds, to continue to make retry attempts.
   *
   * _Required_: No
   *
   * _Type_: Double
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MaximumEventAgeInSeconds?: Value<number>;
}

/**
 * The templated target type for the Amazon SageMaker [https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_StartPipelineExecution.html](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_StartPipelineExecution.html) API operation.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-scheduler-schedule-sagemakerpipelineparameters.html}
 **/
export interface SchedulerScheduleSageMakerPipelineParameters {
  /**
   * List of parameter names and values to use when executing the SageMaker Model Building Pipeline.
   *
   * _Required_: No
   *
   * _Type_: List of [SageMakerPipelineParameter](aws-properties-scheduler-schedule-sagemakerpipelineparameter.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PipelineParameterList?: List<SchedulerScheduleSageMakerPipelineParameter>;
}
export interface SchedulerScheduleProperties {
  /**
   * The name of the schedule group associated with this schedule.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  GroupName?: Value<string>;
  /**
   * The date, in UTC, after which the schedule can begin invoking its target. Depending on the schedule's recurrence expression, invocations might occur on, or after, the `StartDate` you specify. EventBridge Scheduler ignores `StartDate` for one-time schedules.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  StartDate?: Value<string>;
  /**
   * The expression that defines when the schedule runs. The following formats are supported.
   */
  ScheduleExpression: Value<string>;
  /**
   * The schedule's target details.
   *
   * _Required_: Yes
   *
   * _Type_: [Target](aws-properties-scheduler-schedule-target.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Target: SchedulerScheduleTarget;
  /**
   * The description you specify for the schedule.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Description?: Value<string>;
  /**
   * The Amazon Resource Name (ARN) for the customer managed KMS key that EventBridge Scheduler will use to encrypt and decrypt your data.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  KmsKeyArn?: Value<string>;
  /**
   * Specifies whether the schedule is enabled or disabled.
   *
   * _Allowed Values_: `ENABLED` | `DISABLED`
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  State?: Value<string>;
  /**
   * Allows you to configure a time window during which EventBridge Scheduler invokes the schedule.
   *
   * _Required_: Yes
   *
   * _Type_: [FlexibleTimeWindow](aws-properties-scheduler-schedule-flexibletimewindow.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FlexibleTimeWindow: SchedulerScheduleFlexibleTimeWindow;
  /**
   * The timezone in which the scheduling expression is evaluated.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ScheduleExpressionTimezone?: Value<string>;
  /**
   * The date, in UTC, before which the schedule can invoke its target. Depending on the schedule's recurrence expression, invocations might stop on, or before, the `EndDate` you specify. EventBridge Scheduler ignores `EndDate` for one-time schedules.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  EndDate?: Value<string>;
  /**
   * The name of the schedule.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Name?: Value<string>;
}

/**
 * A _schedule_ is the main resource you create, configure, and manage using Amazon EventBridge Scheduler.
 *
 * Every schedule has a _schedule expression_ that determines when, and with what frequency, the schedule runs. EventBridge Scheduler supports three types of schedules: rate, cron, and one-time schedules. For more information about different schedule types, see [Schedule types](https://docs.aws.amazon.com/scheduler/latest/UserGuide/schedule-types.html) in the _ EventBridge Scheduler User Guide_.
 *
 * When you create a schedule, you configure a target for the schedule to invoke. A target is an API operation that EventBridge Scheduler calls on your behalf every time your schedule runs. EventBridge Scheduler supports two types of targets: _templated_ targets invoke common API operations across a core groups of services, and customizeable _universal_ targets that you can use to call more than 6,000 operations across over 270 services. For more information about configuring targets, see [Managing targets](https://docs.aws.amazon.com/scheduler/latest/UserGuide/managing-targets.html) in the _ EventBridge Scheduler User Guide_.
 *
 * For more information about managing schedules, changing the schedule state, setting up flexible time windows, and configuring a dead-letter queue for a schedule, see [Managing a schedule](https://docs.aws.amazon.com/scheduler/latest/UserGuide/managing-schedule.html) in the _EventBridge Scheduler User Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-scheduler-schedule.html}
 */
export interface SchedulerScheduleResource {
  Type: 'AWS::Scheduler::Schedule';
  Properties: SchedulerScheduleProperties;
}
