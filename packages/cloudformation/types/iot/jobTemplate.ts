/**
 * Supported regions:
 * - ap-northeast-1 (version 119.1.0)
 * - ap-northeast-2 (version 119.1.0)
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
 * The configuration that determines how many retries are allowed for each failure type for a job.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-jobtemplate-jobexecutionsretryconfig.html}
 **/
export interface IoTJobTemplateJobExecutionsRetryConfig {
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: List of [RetryCriteria](aws-properties-iot-jobtemplate-retrycriteria.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RetryCriteriaList?: List<IoTJobTemplateRetryCriteria>;
}

/**
 * An optional configuration within the `SchedulingConfig` to setup a recurring maintenance window with a predetermined start time and duration for the rollout of a job document to all devices in a target group for a job.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-jobtemplate-maintenancewindow.html}
 **/
export interface IoTJobTemplateMaintenanceWindow {
  /**
   * Displays the duration of the next maintenance window.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DurationInMinutes?: Value<number>;
  /**
   * Displays the start time of the next maintenance window.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  StartTime?: Value<string>;
}

/**
 * The criteria that determine when and how a job abort takes place.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-jobtemplate-abortcriteria.html}
 **/
export interface IoTJobTemplateAbortCriteria {
  /**
   * The type of job action to take to initiate the job abort.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Action: Value<string>;
  /**
   * The type of job execution failures that can initiate a job abort.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  FailureType: Value<string>;
  /**
   * The minimum percentage of job execution failures that must occur to initiate the job abort.
   *
   * AWS IoT Core supports up to two digits after the decimal (for example, 10.9 and 10.99, but not 10.999).
   *
   * _Required_: Yes
   *
   * _Type_: Double
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ThresholdPercentage: Value<number>;
  /**
   * The minimum number of things which must receive job execution notifications before the job can be aborted.
   *
   * _Required_: Yes
   *
   * _Type_: Integer
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  MinNumberOfExecutedThings: Value<number>;
}

/**
 * Allows you to define a criteria to initiate the increase in rate of rollout for a job.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-jobtemplate-rateincreasecriteria.html}
 **/
export interface IoTJobTemplateRateIncreaseCriteria {
  /**
   * The threshold for number of succeeded things that will initiate the increase in rate of rollout.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  NumberOfSucceededThings?: Value<number>;
  /**
   * The threshold for number of notified things that will initiate the increase in rate of rollout.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  NumberOfNotifiedThings?: Value<number>;
}

/**
 * Allows you to create a staged rollout of a job.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-jobtemplate-jobexecutionsrolloutconfig.html}
 **/
export interface IoTJobTemplateJobExecutionsRolloutConfig {
  /**
   * The maximum number of things that will be notified of a pending job, per minute. This parameter allows you to create a staged rollout.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  MaximumPerMinute?: Value<number>;
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: [ExponentialRolloutRate](aws-properties-iot-jobtemplate-exponentialrolloutrate.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ExponentialRolloutRate?: IoTJobTemplateExponentialRolloutRate;
}

/**
 * Specifies the amount of time each device has to finish its execution of the job. A timer is started when the job execution status is set to `IN_PROGRESS`. If the job execution status is not set to another terminal state before the timer expires, it will be automatically set to `TIMED_OUT`.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-jobtemplate-timeoutconfig.html}
 **/
export interface IoTJobTemplateTimeoutConfig {
  /**
   * Specifies the amount of time, in minutes, this device has to finish execution of this job. The timeout interval can be anywhere between 1 minute and 7 days (1 to 10080 minutes). The in progress timer can't be updated and will apply to all job executions for the job. Whenever a job execution remains in the IN_PROGRESS status for longer than this interval, the job execution will fail and switch to the terminal `TIMED_OUT` status.
   *
   * _Required_: Yes
   *
   * _Type_: Integer
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  InProgressTimeoutInMinutes: Value<number>;
}

/**
 * The criteria that determine when and how a job abort takes place.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-jobtemplate-abortconfig.html}
 **/
export interface IoTJobTemplateAbortConfig {
  /**
   * The list of criteria that determine when and how to abort the job.
   *
   * _Required_: Yes
   *
   * _Type_: List of [AbortCriteria](aws-properties-iot-jobtemplate-abortcriteria.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  CriteriaList: List<IoTJobTemplateAbortCriteria>;
}

/**
 * The criteria that determines how many retries are allowed for each failure type for a job.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-jobtemplate-retrycriteria.html}
 **/
export interface IoTJobTemplateRetryCriteria {
  /**
   * The type of job execution failures that can initiate a job retry.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FailureType?: Value<string>;
  /**
   * The number of retries allowed for a failure type for the job.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  NumberOfRetries?: Value<number>;
}

/**
 * Allows you to create an exponential rate of rollout for a job.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-jobtemplate-exponentialrolloutrate.html}
 **/
export interface IoTJobTemplateExponentialRolloutRate {
  /**
   * The criteria to initiate the increase in rate of rollout for a job.
   *
   * _Required_: Yes
   *
   * _Type_: [RateIncreaseCriteria](aws-properties-iot-jobtemplate-rateincreasecriteria.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  RateIncreaseCriteria: IoTJobTemplateRateIncreaseCriteria;
  /**
   * The minimum number of things that will be notified of a pending job, per minute at the start of job rollout. This parameter allows you to define the initial rate of rollout.
   *
   * _Required_: Yes
   *
   * _Type_: Integer
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  BaseRatePerMinute: Value<number>;
  /**
   * The exponential factor to increase the rate of rollout for a job.
   *
   * AWS IoT Core supports up to one digit after the decimal (for example, 1.5, but not 1.55).
   *
   * _Required_: Yes
   *
   * _Type_: Double
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  IncrementFactor: Value<number>;
}

/**
 * Configuration for pre-signed S3 URLs.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-jobtemplate-presignedurlconfig.html}
 **/
export interface IoTJobTemplatePresignedUrlConfig {
  /**
   * How long (in seconds) pre-signed URLs are valid. Valid values are 60 - 3600, the default value is 3600 seconds. Pre-signed URLs are generated when Jobs receives an MQTT request for the job document.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ExpiresInSec?: Value<number>;
  /**
   * The ARN of an IAM role that grants permission to download files from the S3 bucket where the job data/updates are stored. The role must also grant permission for IoT to download the files.
   *
   * For information about addressing the confused deputy problem, see [cross-service confused deputy prevention](https://docs.aws.amazon.com/iot/latest/developerguide/cross-service-confused-deputy-prevention.html) in the _ AWS IoT Core developer guide_.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  RoleArn: Value<string>;
}
export interface IoTJobTemplateProperties {
  /**
   * The ARN of the job to use as the basis for the job template.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  JobArn?: Value<string>;
  /**
   * Specifies the amount of time each device has to finish its execution of the job. A timer is started when the job execution status is set to `IN_PROGRESS`. If the job execution status is not set to another terminal state before the timer expires, it will be automatically set to `TIMED_OUT`.
   *
   * _Required_: No
   *
   * _Type_: [TimeoutConfig](aws-properties-iot-jobtemplate-timeoutconfig.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  TimeoutConfig?: IoTJobTemplateTimeoutConfig;
  /**
   * Allows you to create a staged rollout of a job.
   *
   * _Required_: No
   *
   * _Type_: [JobExecutionsRolloutConfig](aws-properties-iot-jobtemplate-jobexecutionsrolloutconfig.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  JobExecutionsRolloutConfig?: IoTJobTemplateJobExecutionsRolloutConfig;
  /**
   * A description of the job template.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Description: Value<string>;
  /**
   * Allows you to create the criteria to retry a job.
   *
   * _Required_: No
   *
   * _Type_: [JobExecutionsRetryConfig](aws-properties-iot-jobtemplate-jobexecutionsretryconfig.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  JobExecutionsRetryConfig?: IoTJobTemplateJobExecutionsRetryConfig;
  /**
   * An S3 link to the job document to use in the template. Required if you don't specify a value for `document`.
   *
   * If the job document resides in an S3 bucket, you must use a placeholder link when specifying the document.
   *
   * The placeholder link is of the following form:
   *
   * `${aws:iot:s3-presigned-url:https://s3.amazonaws.com/bucket/key}`
   *
   * where _bucket_ is your bucket name and _key_ is the object in the bucket to which you are linking.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  DocumentSource?: Value<string>;
  /**
   * The criteria that determine when and how a job abort takes place.
   *
   * _Required_: No
   *
   * _Type_: [AbortConfig](aws-properties-iot-jobtemplate-abortconfig.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  AbortConfig?: IoTJobTemplateAbortConfig;
  /**
   * An optional configuration within the SchedulingConfig to setup a recurring maintenance window with a predetermined start time and duration for the rollout of a job document to all devices in a target group for a job.
   *
   * _Required_: No
   *
   * _Type_: List of [MaintenanceWindow](aws-properties-iot-jobtemplate-maintenancewindow.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MaintenanceWindows?: List<IoTJobTemplateMaintenanceWindow>;
  /**
   * A unique identifier for the job template. We recommend using a UUID. Alpha-numeric characters, "-", and "_" are valid for use here.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  JobTemplateId: Value<string>;
  /**
   * The job document.
   *
   * Required if you don't specify a value for `documentSource`.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Document?: Value<string>;
  /**
   * Configuration for pre-signed S3 URLs.
   *
   * _Required_: No
   *
   * _Type_: [PresignedUrlConfig](aws-properties-iot-jobtemplate-presignedurlconfig.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  PresignedUrlConfig?: IoTJobTemplatePresignedUrlConfig;
  /**
   * Metadata that can be used to manage the job template.
   *
   * _Required_: No
   *
   * _Type_: List of [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Tags?: List<ResourceTag>;
}

/**
 * Represents a job template.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-jobtemplate.html}
 */
export interface IoTJobTemplateResource {
  Type: 'AWS::IoT::JobTemplate';
  Properties: IoTJobTemplateProperties;
}
