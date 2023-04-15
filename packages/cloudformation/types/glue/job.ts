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
 * Specifies code executed when a job is run.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-job-jobcommand.html}
 **/
export interface GlueJobJobCommand {
  /**
   * The Python version being used to execute a Python shell job. Allowed values are 3 or 3.9. Version 2 is deprecated.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PythonVersion?: Value<string>;
  /**
   * Specifies the Amazon Simple Storage Service (Amazon S3) path to a script that executes a job (required).
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ScriptLocation?: Value<string>;
  /**
   * The name of the job command. For an Apache Spark ETL job, this must be `glueetl`. For a Python shell job, it must be `pythonshell`.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Name?: Value<string>;
}

/**
 * Specifies the connections used by a job.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-job-connectionslist.html}
 **/
export interface GlueJobConnectionsList {
  /**
   * A list of connections used by the job.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Connections?: List<Value<string>>;
}

/**
 * An execution property of a job.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-job-executionproperty.html}
 **/
export interface GlueJobExecutionProperty {
  /**
   * The maximum number of concurrent runs allowed for the job. The default is 1. An error is returned when this threshold is reached. The maximum value you can specify is controlled by a service limit.
   *
   * _Required_: No
   *
   * _Type_: Double
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MaxConcurrentRuns?: Value<number>;
}

/**
 * Specifies configuration properties of a notification.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-job-notificationproperty.html}
 **/
export interface GlueJobNotificationProperty {
  /**
   * After a job run starts, the number of minutes to wait before sending a job run delay notification.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  NotifyDelayAfter?: Value<number>;
}
export interface GlueJobProperties {
  /**
   * The connections used for this job.
   *
   * _Required_: No
   *
   * _Type_: [ConnectionsList](aws-properties-glue-job-connectionslist.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Connections?: GlueJobConnectionsList;
  /**
   * The maximum number of times to retry this job after a JobRun fails.
   *
   * _Required_: No
   *
   * _Type_: Double
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MaxRetries?: Value<number>;
  /**
   * A description of the job.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Description?: Value<string>;
  /**
   * The job timeout in minutes. This is the maximum time that a job run can consume resources before it is terminated and enters TIMEOUT status. The default is 2,880 minutes (48 hours).
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Timeout?: Value<number>;
  /**
   * This parameter is no longer supported. Use `MaxCapacity` instead.
   *
   * The number of capacity units that are allocated to this job.
   *
   * _Required_: No
   *
   * _Type_: Double
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AllocatedCapacity?: Value<number>;
  /**
   * The name you assign to this job definition.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Name?: Value<string>;
  /**
   * The name or Amazon Resource Name (ARN) of the IAM role associated with this job.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Role: Value<string>;
  /**
   * The default arguments for this job, specified as name-value pairs.
   *
   * You can specify arguments here that your own job-execution script consumes, in addition to arguments that AWS Glue itself consumes.
   *
   * For information about how to specify and consume your own job arguments, see [Calling AWS Glue APIs in Python](https://docs.aws.amazon.com/glue/latest/dg/aws-glue-programming-python-calling.html) in the _AWS Glue Developer Guide_.
   *
   * For information about the key-value pairs that AWS Glue consumes to set up your job, see [Special Parameters Used by AWS Glue](https://docs.aws.amazon.com/glue/latest/dg/aws-glue-programming-etl-glue-arguments.html) in the _AWS Glue Developer Guide_.
   *
   * _Required_: No
   *
   * _Type_: Json
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DefaultArguments?: { [key: string]: any };
  /**
   * Specifies configuration properties of a notification.
   *
   * _Required_: No
   *
   * _Type_: [NotificationProperty](aws-properties-glue-job-notificationproperty.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  NotificationProperty?: GlueJobNotificationProperty;
  /**
   * The type of predefined worker that is allocated when a job runs. Accepts a value of Standard, G.1X, or G.2X.
   */
  WorkerType?: Value<string>;
  /**
   * Indicates whether the job is run with a standard or flexible execution class. The standard execution class is ideal for time-sensitive workloads that require fast job startup and dedicated resources.
   *
   * The flexible execution class is appropriate for time-insensitive jobs whose start and completion times may vary.
   *
   * Only jobs with AWS Glue version 3.0 and above and command type `glueetl` will be allowed to set `ExecutionClass` to `FLEX`. The flexible execution class is available for Spark jobs.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ExecutionClass?: Value<string>;
  /**
   * This field is reserved for future use.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  LogUri?: Value<string>;
  /**
   * The code that executes a job.
   *
   * _Required_: Yes
   *
   * _Type_: [JobCommand](aws-properties-glue-job-jobcommand.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Command: GlueJobJobCommand;
  /**
   * Glue version determines the versions of Apache Spark and Python that AWS Glue supports. The Python version indicates the version supported for jobs of type Spark.
   *
   * For more information about the available AWS Glue versions and corresponding Spark and Python versions, see [Glue version](https://docs.aws.amazon.com/glue/latest/dg/add-job.html) in the developer guide.
   *
   * Jobs that are created without specifying a Glue version default to Glue 0.9.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  GlueVersion?: Value<string>;
  /**
   * The maximum number of concurrent runs that are allowed for this job.
   *
   * _Required_: No
   *
   * _Type_: [ExecutionProperty](aws-properties-glue-job-executionproperty.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ExecutionProperty?: GlueJobExecutionProperty;
  /**
   * The name of the `SecurityConfiguration` structure to be used with this job.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SecurityConfiguration?: Value<string>;
  /**
   * The number of workers of a defined `workerType` that are allocated when a job runs.
   *
   * The maximum number of workers you can define are 299 for `G.1X`, and 149 for `G.2X`.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  NumberOfWorkers?: Value<number>;
  /**
   * The tags to use with this job.
   *
   * _Required_: No
   *
   * _Type_: Json
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Tags?: { [key: string]: any };
  /**
   * The number of AWS Glue data processing units (DPUs) that can be allocated when this job runs. A DPU is a relative measure of processing power that consists of 4 vCPUs of compute capacity and 16 GB of memory.
   *
   * Do not set `Max Capacity` if using `WorkerType` and `NumberOfWorkers`.
   *
   * The value that can be allocated for `MaxCapacity` depends on whether you are running a Python shell job or an Apache Spark ETL job:
   */
  MaxCapacity?: Value<number>;
  /**
   * Non-overridable arguments for this job, specified as name-value pairs.
   *
   * _Required_: No
   *
   * _Type_: Json
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  NonOverridableArguments?: { [key: string]: any };
}

/**
 * The `AWS::Glue::Job` resource specifies an AWS Glue job in the data catalog. For more information, see [Adding Jobs in AWS Glue](https://docs.aws.amazon.com/glue/latest/dg/add-job.html) and [Job Structure](https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-jobs-job.html#aws-glue-api-jobs-job-Job) in the _AWS Glue Developer Guide._
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-job.html}
 */
export interface GlueJobResource {
  Type: 'AWS::Glue::Job';
  Properties: GlueJobProperties;
}
