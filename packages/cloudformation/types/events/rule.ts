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
 * Name/Value pair of a parameter to start execution of a SageMaker Model Building Pipeline.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-rule-sagemakerpipelineparameter.html}
 **/
export interface EventsRuleSageMakerPipelineParameter {
  /**
   * Name of parameter to start execution of a SageMaker Model Building Pipeline.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `256`
   *
   * _Pattern_: `^[a-zA-Z0-9](-*[a-zA-Z0-9])*$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Name: Value<string>;
  /**
   * Value of parameter to start execution of a SageMaker Model Building Pipeline.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Maximum_: `1024`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Value: Value<string>;
}

/**
 * The retry strategy to use for failed jobs, if the target is an AWS Batch job. If you specify a retry strategy here, it overrides the retry strategy defined in the job definition.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-rule-batchretrystrategy.html}
 **/
export interface EventsRuleBatchRetryStrategy {
  /**
   * The number of times to attempt to retry, if the job fails. Valid values are 1–10.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Attempts?: Value<number>;
}

/**
 * These are custom parameter to be used when the target is an API Gateway APIs or EventBridge ApiDestinations. In the latter case, these are merged with any InvocationParameters specified on the Connection, with any values from the Connection taking precedence.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-rule-httpparameters.html}
 **/
export interface EventsRuleHttpParameters {
  /**
   * The headers that need to be sent as part of request invoking the API Gateway API or EventBridge ApiDestination.
   *
   * _Required_: No
   *
   * _Type_: Map of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  HeaderParameters?: { [key: string]: Value<string> };
  /**
   * The path parameter values to be used to populate API Gateway API or EventBridge ApiDestination path wildcards ("*").
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PathParameterValues?: List<Value<string>>;
  /**
   * The query string keys/values that need to be sent as part of request invoking the API Gateway API or EventBridge ApiDestination.
   *
   * _Required_: No
   *
   * _Type_: Map of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  QueryStringParameters?: { [key: string]: Value<string> };
}

/**
 * The array properties for the submitted job, such as the size of the array. The array size can be between 2 and 10,000. If you specify array properties for a job, it becomes an array job. This parameter is used only if the target is an AWS Batch job.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-rule-batcharrayproperties.html}
 **/
export interface EventsRuleBatchArrayProperties {
  /**
   * The size of the array, if this is an array batch job. Valid values are integers between 2 and 10,000.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Size?: Value<number>;
}

/**
 * The custom parameters to be used when the target is an AWS Batch job.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-rule-batchparameters.html}
 **/
export interface EventsRuleBatchParameters {
  /**
   * The array properties for the submitted job, such as the size of the array. The array size can be between 2 and 10,000. If you specify array properties for a job, it becomes an array job. This parameter is used only if the target is an AWS Batch job.
   *
   * _Required_: No
   *
   * _Type_: [BatchArrayProperties](aws-properties-events-rule-batcharrayproperties.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ArrayProperties?: EventsRuleBatchArrayProperties;
  /**
   * The ARN or name of the job definition to use if the event target is an AWS Batch job. This job definition must already exist.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  JobDefinition: Value<string>;
  /**
   * The name to use for this execution of the job, if the target is an AWS Batch job.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  JobName: Value<string>;
  /**
   * The retry strategy to use for failed jobs, if the target is an AWS Batch job. The retry strategy is the number of times to retry the failed job execution. Valid values are 1–10. When you specify a retry strategy here, it overrides the retry strategy defined in the job definition.
   *
   * _Required_: No
   *
   * _Type_: [BatchRetryStrategy](aws-properties-events-rule-batchretrystrategy.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RetryStrategy?: EventsRuleBatchRetryStrategy;
}

/**
 * This parameter contains the criteria (either InstanceIds or a tag) used to specify which EC2 instances are to be sent the command.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-rule-runcommandparameters.html}
 **/
export interface EventsRuleRunCommandParameters {
  /**
   * Currently, we support including only one RunCommandTarget block, which specifies either an array of InstanceIds or a tag.
   *
   * _Required_: Yes
   *
   * _Type_: List of [RunCommandTarget](aws-properties-events-rule-runcommandtarget.md)
   *
   * _Maximum_: `5`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RunCommandTargets: List<EventsRuleRunCommandTarget>;
}

/**
 * This structure specifies the network configuration for an ECS task.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-rule-networkconfiguration.html}
 **/
export interface EventsRuleNetworkConfiguration {
  /**
   * Use this structure to specify the VPC subnets and security groups for the task, and whether a public IP address is to be used. This structure is relevant only for ECS tasks that use the `awsvpc` network mode.
   *
   * _Required_: No
   *
   * _Type_: [AwsVpcConfiguration](aws-properties-events-rule-awsvpcconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AwsVpcConfiguration?: EventsRuleAwsVpcConfiguration;
}

/**
 * The details of a capacity provider strategy. To learn more, see [CapacityProviderStrategyItem](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_CapacityProviderStrategyItem.html) in the Amazon ECS API Reference.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-rule-capacityproviderstrategyitem.html}
 **/
export interface EventsRuleCapacityProviderStrategyItem {
  /**
   * The base value designates how many tasks, at a minimum, to run on the specified capacity provider. Only one capacity provider in a capacity provider strategy can have a base defined. If no value is specified, the default value of 0 is used.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Minimum_: `0`
   *
   * _Maximum_: `100000`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Base?: Value<number>;
  /**
   * The short name of the capacity provider.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `255`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CapacityProvider: Value<string>;
  /**
   * The weight value designates the relative percentage of the total number of tasks launched that should use the specified capacity provider. The weight value is taken into consideration after the base value, if defined, is satisfied.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Minimum_: `0`
   *
   * _Maximum_: `1000`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Weight?: Value<number>;
}

/**
 * This structure includes the custom parameter to be used when the target is an SQS FIFO queue.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-rule-sqsparameters.html}
 **/
export interface EventsRuleSqsParameters {
  /**
   * The FIFO message group ID to use as the target.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Maximum_: `100`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MessageGroupId: Value<string>;
}

/**
 * The task placement strategy for a task or service. To learn more, see [Task Placement Strategies](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-placement-strategies.html) in the Amazon Elastic Container Service Service Developer Guide.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-rule-placementstrategy.html}
 **/
export interface EventsRulePlacementStrategy {
  /**
   * The field to apply the placement strategy against. For the spread placement strategy, valid values are instanceId (or host, which has the same effect), or any platform or custom attribute that is applied to a container instance, such as attribute:ecs.availability-zone. For the binpack placement strategy, valid values are cpu and memory. For the random placement strategy, this field is not used.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Maximum_: `255`
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
   * _Allowed values_: `binpack | random | spread`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Type?: Value<string>;
}

/**
 * Targets are the resources to be invoked when a rule is triggered. For a complete list of services and resources that can be set as a target, see [PutTargets](https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_PutTargets.html).
 *
 * If you are setting the event bus of another account as the target, and that account granted permission to your account through an organization instead of directly by the account ID, then you must specify a `RoleArn` with proper permissions in the `Target` structure. For more information, see [Sending and Receiving Events Between AWS Accounts](https://docs.aws.amazon.com/eventbridge/latest/userguide/eventbridge-cross-account-event-delivery.html) in the _Amazon EventBridge User Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-rule-target.html}
 **/
export interface EventsRuleTarget {
  /**
   * The Amazon Resource Name (ARN) of the target.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `1600`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Arn: Value<string>;
  /**
   * If the event target is an AWS Batch job, this contains the job definition, job name, and other parameters. For more information, see [Jobs](https://docs.aws.amazon.com/batch/latest/userguide/jobs.html) in the _ AWS Batch User Guide_.
   *
   * _Required_: No
   *
   * _Type_: [BatchParameters](aws-properties-events-rule-batchparameters.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  BatchParameters?: EventsRuleBatchParameters;
  /**
   * The `DeadLetterConfig` that defines the target queue to send dead-letter queue events to.
   *
   * _Required_: No
   *
   * _Type_: [DeadLetterConfig](aws-properties-events-rule-deadletterconfig.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DeadLetterConfig?: EventsRuleDeadLetterConfig;
  /**
   * Contains the Amazon ECS task definition and task count to be used, if the event target is an Amazon ECS task. For more information about Amazon ECS tasks, see [Task Definitions ](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task_defintions.html) in the _Amazon EC2 Container Service Developer Guide_.
   *
   * _Required_: No
   *
   * _Type_: [EcsParameters](aws-properties-events-rule-ecsparameters.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  EcsParameters?: EventsRuleEcsParameters;
  /**
   * Contains the HTTP parameters to use when the target is a API Gateway endpoint or EventBridge ApiDestination.
   *
   * If you specify an API Gateway API or EventBridge ApiDestination as a target, you can use this parameter to specify headers, path parameters, and query string keys/values as part of your target invoking request. If you're using ApiDestinations, the corresponding Connection can also have these values configured. In case of any conflicting keys, values from the Connection take precedence.
   *
   * _Required_: No
   *
   * _Type_: [HttpParameters](aws-properties-events-rule-httpparameters.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  HttpParameters?: EventsRuleHttpParameters;
  /**
   * The ID of the target within the specified rule. Use this ID to reference the target when updating the rule. We recommend using a memorable and unique string.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `64`
   *
   * _Pattern_: `[.-_A-Za-z0-9]+`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Id: Value<string>;
  /**
   * Valid JSON text passed to the target. In this case, nothing from the event itself is passed to the target. For more information, see [The JavaScript Object Notation (JSON) Data Interchange Format](http://www.rfc-editor.org/rfc/rfc7159.txt).
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Maximum_: `8192`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Input?: Value<string>;
  /**
   * The value of the JSONPath that is used for extracting part of the matched event when passing it to the target. You may use JSON dot notation or bracket notation. For more information about JSON paths, see [JSONPath](http://goessner.net/articles/JsonPath/).
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Maximum_: `256`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  InputPath?: Value<string>;
  /**
   * Settings to enable you to provide custom input to a target based on certain event data. You can extract one or more key-value pairs from the event and then use that data to send customized input to the target.
   *
   * _Required_: No
   *
   * _Type_: [InputTransformer](aws-properties-events-rule-inputtransformer.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  InputTransformer?: EventsRuleInputTransformer;
  /**
   * The custom parameter you can use to control the shard assignment, when the target is a Kinesis data stream. If you do not include this parameter, the default is to use the `eventId` as the partition key.
   *
   * _Required_: No
   *
   * _Type_: [KinesisParameters](aws-properties-events-rule-kinesisparameters.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  KinesisParameters?: EventsRuleKinesisParameters;
  /**
   * Contains the Amazon Redshift Data API parameters to use when the target is a Amazon Redshift cluster.
   *
   * If you specify a Amazon Redshift Cluster as a Target, you can use this to specify parameters to invoke the Amazon Redshift Data API ExecuteStatement based on EventBridge events.
   *
   * _Required_: No
   *
   * _Type_: [RedshiftDataParameters](aws-properties-events-rule-redshiftdataparameters.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RedshiftDataParameters?: EventsRuleRedshiftDataParameters;
  /**
   * The `RetryPolicy` object that contains the retry policy configuration to use for the dead-letter queue.
   *
   * _Required_: No
   *
   * _Type_: [RetryPolicy](aws-properties-events-rule-retrypolicy.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RetryPolicy?: EventsRuleRetryPolicy;
  /**
   * The Amazon Resource Name (ARN) of the IAM role to be used for this target when the rule is triggered. If one rule triggers multiple targets, you can use a different IAM role for each target.
   *
   * _Required_: Conditional
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `1600`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RoleArn?: Value<string>;
  /**
   * Parameters used when you are using the rule to invoke Amazon EC2 Run Command.
   *
   * _Required_: No
   *
   * _Type_: [RunCommandParameters](aws-properties-events-rule-runcommandparameters.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RunCommandParameters?: EventsRuleRunCommandParameters;
  /**
   * Contains the SageMaker Model Building Pipeline parameters to start execution of a SageMaker Model Building Pipeline.
   *
   * If you specify a SageMaker Model Building Pipeline as a target, you can use this to specify parameters to start a pipeline execution based on EventBridge events.
   *
   * _Required_: No
   *
   * _Type_: [SageMakerPipelineParameters](aws-properties-events-rule-sagemakerpipelineparameters.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SageMakerPipelineParameters?: EventsRuleSageMakerPipelineParameters;
  /**
   * Contains the message group ID to use when the target is a FIFO queue.
   *
   * If you specify an SQS FIFO queue as a target, the queue must have content-based deduplication enabled.
   *
   * _Required_: No
   *
   * _Type_: [SqsParameters](aws-properties-events-rule-sqsparameters.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SqsParameters?: EventsRuleSqsParameters;
}

/**
 * A key-value pair associated with an ECS Target of an EventBridge rule. The tag will be propagated to ECS by EventBridge when starting an ECS task based on a matched event.
 *
 * **Important**
 *
 * Currently, tags are only available when using ECS with EventBridge.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-rule-tag.html}
 **/
export interface EventsRuleTag {
  /**
   * A string you can use to assign a value. The combination of tag keys and values can help you organize and categorize your resources.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `128`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Key?: Value<string>;
  /**
   * The value for the specified tag key.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `0`
   *
   * _Maximum_: `256`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Value?: Value<string>;
}

/**
 * The custom parameters to be used when the target is an Amazon ECS task.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-rule-ecsparameters.html}
 **/
export interface EventsRuleEcsParameters {
  /**
   * The capacity provider strategy to use for the task.
   *
   * If a `capacityProviderStrategy` is specified, the `launchType` parameter must be omitted. If no `capacityProviderStrategy` or launchType is specified, the `defaultCapacityProviderStrategy` for the cluster is used.
   *
   * _Required_: No
   *
   * _Type_: List of [CapacityProviderStrategyItem](aws-properties-events-rule-capacityproviderstrategyitem.md)
   *
   * _Maximum_: `6`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CapacityProviderStrategy?: List<EventsRuleCapacityProviderStrategyItem>;
  /**
   * Specifies whether to enable Amazon ECS managed tags for the task. For more information, see [Tagging Your Amazon ECS Resources](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-using-tags.html) in the Amazon Elastic Container Service Developer Guide.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  EnableECSManagedTags?: Value<boolean>;
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
   * Specifies the launch type on which your task is running. The launch type that you specify here must match one of the launch type (compatibilities) of the target task. The `FARGATE` value is supported only in the Regions where AWS Fargate with Amazon ECS is supported. For more information, see [AWS Fargate on Amazon ECS](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/AWS-Fargate.html) in the _Amazon Elastic Container Service Developer Guide_.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `EC2 | EXTERNAL | FARGATE`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  LaunchType?: Value<string>;
  /**
   * Use this structure if the Amazon ECS task uses the `awsvpc` network mode. This structure specifies the VPC subnets and security groups associated with the task, and whether a public IP address is to be used. This structure is required if `LaunchType` is `FARGATE` because the `awsvpc` mode is required for Fargate tasks.
   *
   * If you specify `NetworkConfiguration` when the target ECS task does not use the `awsvpc` network mode, the task fails.
   *
   * _Required_: No
   *
   * _Type_: [NetworkConfiguration](aws-properties-events-rule-networkconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  NetworkConfiguration?: EventsRuleNetworkConfiguration;
  /**
   * An array of placement constraint objects to use for the task. You can specify up to 10 constraints per task (including constraints in the task definition and those specified at runtime).
   *
   * _Required_: No
   *
   * _Type_: List of [PlacementConstraint](aws-properties-events-rule-placementconstraint.md)
   *
   * _Maximum_: `10`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PlacementConstraints?: List<EventsRulePlacementConstraint>;
  /**
   * The placement strategy objects to use for the task. You can specify a maximum of five strategy rules per task.
   *
   * _Required_: No
   *
   * _Type_: List of [PlacementStrategy](aws-properties-events-rule-placementstrategy.md)
   *
   * _Maximum_: `5`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PlacementStrategies?: List<EventsRulePlacementStrategy>;
  /**
   * Specifies the platform version for the task. Specify only the numeric portion of the platform version, such as `1.1.0`.
   *
   * This structure is used only if `LaunchType` is `FARGATE`. For more information about valid platform versions, see [AWS Fargate Platform Versions](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/platform_versions.html) in the _Amazon Elastic Container Service Developer Guide_.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PlatformVersion?: Value<string>;
  /**
   * Specifies whether to propagate the tags from the task definition to the task. If no value is specified, the tags are not propagated. Tags can only be propagated to the task during task creation. To add tags to a task after task creation, use the TagResource API action.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `TASK_DEFINITION`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PropagateTags?: Value<string>;
  /**
   * The reference ID to use for the task.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Maximum_: `1024`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ReferenceId?: Value<string>;
  /**
   * The metadata that you apply to the task to help you categorize and organize them. Each tag consists of a key and an optional value, both of which you define. To learn more, see [RunTask](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_RunTask.html#ECS-RunTask-request-tags) in the Amazon ECS API Reference.
   *
   * _Required_: No
   *
   * _Type_: List of [Tag](aws-properties-events-rule-tag.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TagList?: List<ResourceTag>;
  /**
   * The number of tasks to create based on `TaskDefinition`. The default is 1.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Minimum_: `1`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TaskCount?: Value<number>;
  /**
   * The ARN of the task definition to use if the event target is an Amazon ECS task.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `1600`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TaskDefinitionArn: Value<string>;
}

/**
 * An object representing a constraint on task placement. To learn more, see [Task Placement Constraints](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-placement-constraints.html) in the Amazon Elastic Container Service Developer Guide.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-rule-placementconstraint.html}
 **/
export interface EventsRulePlacementConstraint {
  /**
   * A cluster query language expression to apply to the constraint. You cannot specify an expression if the constraint type is `distinctInstance`. To learn more, see [Cluster Query Language](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/cluster-query-language.html) in the Amazon Elastic Container Service Developer Guide.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Maximum_: `2000`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Expression?: Value<string>;
  /**
   * The type of constraint. Use distinctInstance to ensure that each task in a particular group is running on a different container instance. Use memberOf to restrict the selection to a group of valid candidates.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `distinctInstance | memberOf`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Type?: Value<string>;
}

/**
 * A `DeadLetterConfig` object that contains information about a dead-letter queue configuration.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-rule-deadletterconfig.html}
 **/
export interface EventsRuleDeadLetterConfig {
  /**
   * The ARN of the SQS queue specified as the target for the dead-letter queue.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `1600`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Arn?: Value<string>;
}

/**
 * Information about the EC2 instances that are to be sent the command, specified as key-value pairs. Each `RunCommandTarget` block can include only one key, but this key may specify multiple values.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-rule-runcommandtarget.html}
 **/
export interface EventsRuleRunCommandTarget {
  /**
   * Can be either `tag:` _tag-key_ or `InstanceIds`.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `128`
   *
   * _Pattern_: `^[p{L}p{Z}p{N}_.:/=+-@]*$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Key: Value<string>;
  /**
   * If `Key` is `tag:` _tag-key_, `Values` is a list of tag values. If `Key` is `InstanceIds`, `Values` is a list of Amazon EC2 instance IDs.
   *
   * _Required_: Yes
   *
   * _Type_: List of String
   *
   * _Maximum_: `50`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Values: List<Value<string>>;
}

/**
 * Contains the parameters needed for you to provide custom input to a target based on one or more pieces of data extracted from the event.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-rule-inputtransformer.html}
 **/
export interface EventsRuleInputTransformer {
  /**
   * Map of JSON paths to be extracted from the event. You can then insert these in the template in `InputTemplate` to produce the output you want to be sent to the target.
   *
   * `InputPathsMap` is an array key-value pairs, where each value is a valid JSON path. You can have as many as 100 key-value pairs. You must use JSON dot notation, not bracket notation.
   *
   * The keys cannot start with "AWS."
   *
   * _Required_: No
   *
   * _Type_: Map of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  InputPathsMap?: { [key: string]: Value<string> };
  /**
   * Input template where you specify placeholders that will be filled with the values of the keys from `InputPathsMap` to customize the data sent to the target. Enclose each `InputPathsMaps` value in brackets: <_value_>
   *
   * If `InputTemplate` is a JSON object (surrounded by curly braces), the following restrictions apply:
   */
  InputTemplate: Value<string>;
}

/**
 * A `RetryPolicy` object that includes information about the retry policy settings.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-rule-retrypolicy.html}
 **/
export interface EventsRuleRetryPolicy {
  /**
   * The maximum amount of time, in seconds, to continue to make retry attempts.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Minimum_: `60`
   *
   * _Maximum_: `86400`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MaximumEventAgeInSeconds?: Value<number>;
  /**
   * The maximum number of retry attempts to make before the request fails. Retry attempts continue until either the maximum number of attempts is made or until the duration of the `MaximumEventAgeInSeconds` is met.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Minimum_: `0`
   *
   * _Maximum_: `185`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MaximumRetryAttempts?: Value<number>;
}

/**
 * This object enables you to specify a JSON path to extract from the event and use as the partition key for the Amazon Kinesis data stream, so that you can control the shard to which the event goes. If you do not include this parameter, the default is to use the `eventId` as the partition key.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-rule-kinesisparameters.html}
 **/
export interface EventsRuleKinesisParameters {
  /**
   * The JSON path to be extracted from the event and used as the partition key. For more information, see [Amazon Kinesis Streams Key Concepts](https://docs.aws.amazon.com/streams/latest/dev/key-concepts.html#partition-key) in the _Amazon Kinesis Streams Developer Guide_.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Maximum_: `256`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PartitionKeyPath: Value<string>;
}

/**
 * These are custom parameters to use when the target is a SageMaker Model Building Pipeline that starts based on EventBridge events.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-rule-sagemakerpipelineparameters.html}
 **/
export interface EventsRuleSageMakerPipelineParameters {
  /**
   * List of Parameter names and values for SageMaker Model Building Pipeline execution.
   *
   * _Required_: No
   *
   * _Type_: List of [SageMakerPipelineParameter](aws-properties-events-rule-sagemakerpipelineparameter.md)
   *
   * _Maximum_: `200`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PipelineParameterList?: List<EventsRuleSageMakerPipelineParameter>;
}

/**
 * These are custom parameters to be used when the target is a Amazon Redshift cluster to invoke the Amazon Redshift Data API ExecuteStatement based on EventBridge events.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-rule-redshiftdataparameters.html}
 **/
export interface EventsRuleRedshiftDataParameters {
  /**
   * The name of the database. Required when authenticating using temporary credentials.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `64`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Database: Value<string>;
  /**
   * The database user name. Required when authenticating using temporary credentials.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `128`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DbUser?: Value<string>;
  /**
   * The name or ARN of the secret that enables access to the database. Required when authenticating using AWS Secrets Manager.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `1600`
   *
   * _Pattern_: `(^arn:aws([a-z]|-)*:secretsmanager:[a-z0-9-.]+:.*)|($(.[w_-]+([(d+|*)])*)*)`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SecretManagerArn?: Value<string>;
  /**
   * The SQL statement text to run.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `100000`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Sql: Value<string>;
  /**
   * The name of the SQL statement. You can name the SQL statement when you create it to identify the query.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `500`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  StatementName?: Value<string>;
  /**
   * Indicates whether to send an event back to EventBridge after the SQL statement runs.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  WithEvent?: Value<boolean>;
}

/**
 * This structure specifies the VPC subnets and security groups for the task, and whether a public IP address is to be used. This structure is relevant only for ECS tasks that use the `awsvpc` network mode.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-rule-awsvpcconfiguration.html}
 **/
export interface EventsRuleAwsVpcConfiguration {
  /**
   * Specifies whether the task's elastic network interface receives a public IP address. You can specify `ENABLED` only when `LaunchType` in `EcsParameters` is set to `FARGATE`.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `DISABLED | ENABLED`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AssignPublicIp?: Value<string>;
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
}
export interface EventsRuleProperties {
  /**
   * The description of the rule.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Maximum_: `512`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Description?: Value<string>;
  /**
   * The name or ARN of the event bus associated with the rule. If you omit this, the default event bus is used.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `256`
   *
   * _Pattern_: `[/.-_A-Za-z0-9]+`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  EventBusName?: Value<string>;
  /**
   * The event pattern of the rule. For more information, see [Events and Event Patterns](https://docs.aws.amazon.com/eventbridge/latest/userguide/eventbridge-and-event-patterns.html) in the _Amazon EventBridge User Guide_.
   *
   * _Required_: Conditional
   *
   * _Type_: Json
   *
   * _Maximum_: `4096`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  EventPattern?: { [key: string]: any };
  /**
   * The name of the rule.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `64`
   *
   * _Pattern_: `[.-_A-Za-z0-9]+`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Name?: Value<string>;
  /**
   * The Amazon Resource Name (ARN) of the role that is used for target invocation.
   *
   * If you're setting an event bus in another account as the target and that account granted permission to your account through an organization instead of directly by the account ID, you must specify a `RoleArn` with proper permissions in the `Target` structure, instead of here in this parameter.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `1600`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RoleArn?: Value<string>;
  /**
   * The scheduling expression. For example, "cron(0 20 * * ? *)", "rate(5 minutes)". For more information, see [Creating an Amazon EventBridge rule that runs on a schedule](https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-create-rule-schedule.html).
   *
   * _Required_: Conditional
   *
   * _Type_: String
   *
   * _Maximum_: `256`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ScheduleExpression?: Value<string>;
  /**
   * The state of the rule.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `DISABLED | ENABLED`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  State?: Value<string>;
  /**
   * Adds the specified targets to the specified rule, or updates the targets if they are already associated with the rule.
   *
   * Targets are the resources that are invoked when a rule is triggered.
   *
   * The maximum number of entries per request is 10.
   *
   * Each rule can have up to five (5) targets associated with it at one time.
   *
   * For a list of services you can configure as targets for events, see [EventBridge targets](https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-targets.html) in the _Amazon EventBridge User Guide_.
   *
   * Creating rules with built-in targets is supported only in the AWS Management Console. The built-in targets are:
   */
  Targets?: List<EventsRuleTarget>;
}

/**
 * Creates or updates the specified rule. Rules are enabled by default, or based on value of the state. You can disable a rule using [DisableRule](https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_DisableRule.html).
 *
 * A single rule watches for events from a single event bus. Events generated by AWS services go to your account's default event bus. Events generated by SaaS partner services or applications go to the matching partner event bus. If you have custom applications or services, you can specify whether their events go to your default event bus or a custom event bus that you have created. For more information, see [CreateEventBus](https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_CreateEventBus.html).
 *
 * If you are updating an existing rule, the rule is replaced with what you specify in this `PutRule` command. If you omit arguments in `PutRule`, the old values for those arguments are not kept. Instead, they are replaced with null values.
 *
 * When you create or update a rule, incoming events might not immediately start matching to new or updated rules. Allow a short period of time for changes to take effect.
 *
 * A rule must contain at least an EventPattern or ScheduleExpression. Rules with EventPatterns are triggered when a matching event is observed. Rules with ScheduleExpressions self-trigger based on the given schedule. A rule can have both an EventPattern and a ScheduleExpression, in which case the rule triggers on matching events as well as on a schedule.
 *
 * Most services in AWS treat : or / as the same character in Amazon Resource Names (ARNs). However, EventBridge uses an exact match in event patterns and rules. Be sure to use the correct ARN characters when creating event patterns so that they match the ARN syntax in the event you want to match.
 *
 * In EventBridge, it is possible to create rules that lead to infinite loops, where a rule is fired repeatedly. For example, a rule might detect that ACLs have changed on an S3 bucket, and trigger software to change them to the desired state. If the rule is not written carefully, the subsequent change to the ACLs fires the rule again, creating an infinite loop.
 *
 * To prevent this, write the rules so that the triggered actions do not re-fire the same rule. For example, your rule could fire only if ACLs are found to be in a bad state, instead of after any change.
 *
 * An infinite loop can quickly cause higher than expected charges. We recommend that you use budgeting, which alerts you when charges exceed your specified limit. For more information, see [Managing Your Costs with Budgets](https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/budgets-managing-costs.html).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-rule.html}
 */
export interface EventsRuleResource {
  Type: 'AWS::Events::Rule';
  Properties: EventsRuleProperties;
}
