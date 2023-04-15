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
 * Batch condition that must be met (specified number of events received or batch time window expired) before EventBridge event trigger fires.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-trigger-eventbatchingcondition.html}
 **/
export interface GlueTriggerEventBatchingCondition {
  /**
   * Number of events that must be received from Amazon EventBridge before EventBridge event trigger fires.
   *
   * _Required_: Yes
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  BatchSize: Value<number>;
  /**
   * Window of time in seconds after which EventBridge event trigger fires. Window starts when first event is received.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  BatchWindow?: Value<number>;
}

/**
 * Defines an action to be initiated by a trigger.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-trigger-action.html}
 **/
export interface GlueTriggerAction {
  /**
   * Specifies configuration properties of a job run notification.
   *
   * _Required_: No
   *
   * _Type_: [NotificationProperty](aws-properties-glue-trigger-notificationproperty.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  NotificationProperty?: GlueTriggerNotificationProperty;
  /**
   * The name of the crawler to be used with this action.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CrawlerName?: Value<string>;
  /**
   * The `JobRun` timeout in minutes. This is the maximum time that a job run can consume resources before it is terminated and enters TIMEOUT status. The default is 2,880 minutes (48 hours). This overrides the timeout value set in the parent job.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Timeout?: Value<number>;
  /**
   * The name of a job to be executed.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  JobName?: Value<string>;
  /**
   * The job arguments used when this trigger fires. For this job run, they replace the default arguments set in the job definition itself.
   *
   * You can specify arguments here that your own job-execution script consumes, in addition to arguments that AWS Glue itself consumes.
   *
   * For information about how to specify and consume your own job arguments, see [Calling AWS Glue APIs in Python](https://docs.aws.amazon.com/glue/latest/dg/aws-glue-programming-python-calling.html) in the _AWS Glue Developer Guide_.
   *
   * For information about the key-value pairs that AWS Glue consumes to set up your job, see the [Special Parameters Used by AWS Glue](https://docs.aws.amazon.com/glue/latest/dg/aws-glue-programming-etl-glue-arguments.html) topic in the developer guide.
   *
   * _Required_: No
   *
   * _Type_: Json
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Arguments?: { [key: string]: any };
  /**
   * The name of the `SecurityConfiguration` structure to be used with this action.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SecurityConfiguration?: Value<string>;
}

/**
 * Specifies configuration properties of a job run notification.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-trigger-notificationproperty.html}
 **/
export interface GlueTriggerNotificationProperty {
  /**
   * After a job run starts, the number of minutes to wait before sending a job run delay notification
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  NotifyDelayAfter?: Value<number>;
}

/**
 * Defines a condition under which a trigger fires.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-trigger-condition.html}
 **/
export interface GlueTriggerCondition {
  /**
   * The name of the crawler to which this condition applies.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CrawlerName?: Value<string>;
  /**
   * The condition state. Currently, the values supported are `SUCCEEDED`, `STOPPED`, `TIMEOUT`, and `FAILED`.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  State?: Value<string>;
  /**
   * The state of the crawler to which this condition applies.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CrawlState?: Value<string>;
  /**
   * A logical operator.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  LogicalOperator?: Value<string>;
  /**
   * The name of the job whose `JobRuns` this condition applies to, and on which this trigger waits.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  JobName?: Value<string>;
}

/**
 * Defines the predicate of the trigger, which determines when it fires.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-trigger-predicate.html}
 **/
export interface GlueTriggerPredicate {
  /**
   * An optional field if only one condition is listed. If multiple conditions are listed, then this field is required.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Logical?: Value<string>;
  /**
   * A list of the conditions that determine when the trigger will fire.
   *
   * _Required_: No
   *
   * _Type_: List of [Condition](aws-properties-glue-trigger-condition.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Conditions?: List<GlueTriggerCondition>;
}
export interface GlueTriggerProperties {
  /**
   * The type of trigger that this is.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Type: Value<string>;
  /**
   * Set to true to start `SCHEDULED` and `CONDITIONAL` triggers when created. True is not supported for `ON_DEMAND` triggers.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  StartOnCreation?: Value<boolean>;
  /**
   * A description of this trigger.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Description?: Value<string>;
  /**
   * The actions initiated by this trigger.
   *
   * _Required_: Yes
   *
   * _Type_: List of [Action](aws-properties-glue-trigger-action.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Actions: List<GlueTriggerAction>;
  /**
   * Batch condition that must be met (specified number of events received or batch time window expired) before EventBridge event trigger fires.
   *
   * _Required_: No
   *
   * _Type_: [EventBatchingCondition](aws-properties-glue-trigger-eventbatchingcondition.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  EventBatchingCondition?: GlueTriggerEventBatchingCondition;
  /**
   * The name of the workflow associated with the trigger.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  WorkflowName?: Value<string>;
  /**
   * A `cron` expression used to specify the schedule. For more information, see [Time-Based Schedules for Jobs and Crawlers](https://docs.aws.amazon.com/glue/latest/dg/monitor-data-warehouse-schedule.html) in the _AWS Glue Developer Guide_. For example, to run something every day at 12:15 UTC, specify `cron(15 12 * * ? *)`.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Schedule?: Value<string>;
  /**
   * The tags to use with this trigger.
   *
   * _Required_: No
   *
   * _Type_: Json
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Tags?: { [key: string]: any };
  /**
   * The name of the trigger.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Name?: Value<string>;
  /**
   * The predicate of this trigger, which defines when it will fire.
   *
   * _Required_: No
   *
   * _Type_: [Predicate](aws-properties-glue-trigger-predicate.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Predicate?: GlueTriggerPredicate;
}

/**
 * The `AWS::Glue::Trigger` resource specifies triggers that run AWS Glue jobs. For more information, see [Triggering Jobs in AWS Glue](https://docs.aws.amazon.com/glue/latest/dg/trigger-job.html) and [Trigger Structure](https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-jobs-trigger.html#aws-glue-api-jobs-trigger-Trigger) in the _AWS Glue Developer Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-trigger.html}
 */
export interface GlueTriggerResource {
  Type: 'AWS::Glue::Trigger';
  Properties: GlueTriggerProperties;
}
