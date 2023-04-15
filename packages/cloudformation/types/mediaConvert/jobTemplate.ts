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
 * Optional. Configuration for a destination queue to which the job can hop once a customer-defined minimum wait time has passed. For more information, see [Setting Up Queue Hopping to Avoid Long Waits](https://docs.aws.amazon.com/mediaconvert/latest/ug/setting-up-queue-hopping-to-avoid-long-waits.html) in the _AWS Elemental MediaConvert User Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconvert-jobtemplate-hopdestination.html}
 **/
export interface MediaConvertJobTemplateHopDestination {
  /**
   * Required for setting up a job to use queue hopping. Minimum wait time in minutes until the job can hop to the destination queue. Valid range is 1 to 1440 minutes, inclusive.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  WaitMinutes?: Value<number>;
  /**
   * Optional. When you set up a job to use queue hopping, you can specify a different relative priority for the job in the destination queue. If you don't specify, the relative priority will remain the same as in the previous queue.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Priority?: Value<number>;
  /**
   * Optional unless the job is submitted on the default queue. When you set up a job to use queue hopping, you can specify a destination queue. This queue cannot be the original queue to which the job is submitted. If the original queue isn't the default queue and you don't specify the destination queue, the job will move to the default queue.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Queue?: Value<string>;
}

/**
 * Accelerated transcoding can significantly speed up jobs with long, visually complex content. Outputs that use this feature incur pro-tier pricing. For information about feature limitations, For more information, see [Job Limitations for Accelerated Transcoding in AWS Elemental MediaConvert](https://docs.aws.amazon.com/mediaconvert/latest/ug/job-requirements.html) in the _AWS Elemental MediaConvert User Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconvert-jobtemplate-accelerationsettings.html}
 **/
export interface MediaConvertJobTemplateAccelerationSettings {
  /**
   * Specify the conditions when the service will run your job with accelerated transcoding.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Mode: Value<string>;
}
export interface MediaConvertJobTemplateProperties {
  /**
   * Optional. A category for the job template you are creating
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Category?: Value<string>;
  /**
   * Optional. A description of the job template you are creating.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Description?: Value<string>;
  /**
   * Accelerated transcoding can significantly speed up jobs with long, visually complex content. Outputs that use this feature incur pro-tier pricing. For information about feature limitations, For more information, see [Job Limitations for Accelerated Transcoding in AWS Elemental MediaConvert](https://docs.aws.amazon.com/mediaconvert/latest/ug/job-requirements.html) in the _AWS Elemental MediaConvert User Guide_.
   *
   * _Required_: No
   *
   * _Type_: [AccelerationSettings](aws-properties-mediaconvert-jobtemplate-accelerationsettings.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AccelerationSettings?: MediaConvertJobTemplateAccelerationSettings;
  /**
   * Specify the relative priority for this job. In any given queue, the service begins processing the job with the highest value first. When more than one job has the same priority, the service begins processing the job that you submitted first. If you don't specify a priority, the service uses the default value 0. Minimum: -50 Maximum: 50
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Priority?: Value<number>;
  /**
   * Specify how often MediaConvert sends STATUS_UPDATE events to Amazon CloudWatch Events. Set the interval, in seconds, between status updates. MediaConvert sends an update at this interval from the time the service begins processing your job to the time it completes the transcode or encounters an error.
   *
   * Specify one of the following enums:
   *
   * SECONDS_10
   *
   * SECONDS_12
   *
   * SECONDS_15
   *
   * SECONDS_20
   *
   * SECONDS_30
   *
   * SECONDS_60
   *
   * SECONDS_120
   *
   * SECONDS_180
   *
   * SECONDS_240
   *
   * SECONDS_300
   *
   * SECONDS_360
   *
   * SECONDS_420
   *
   * SECONDS_480
   *
   * SECONDS_540
   *
   * SECONDS_600
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  StatusUpdateInterval?: Value<string>;
  /**
   * Specify, in JSON format, the transcoding job settings for this job template. This specification must conform to the AWS Elemental MediaConvert job validation. For information about forming this specification, see the Remarks section later in this topic.
   *
   * For more information about MediaConvert job templates, see [Working with AWS Elemental MediaConvert Job Templates](https://docs.aws.amazon.com/mediaconvert/latest/ug/working-with-job-templates.html) in the _AWS Elemental MediaConvert User Guide_.
   *
   * _Required_: Yes
   *
   * _Type_: Json
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SettingsJson: { [key: string]: any };
  /**
   * Optional. The queue that jobs created from this template are assigned to. Specify the Amazon Resource Name (ARN) of the queue. For example, arn:aws:mediaconvert:us-west-2:505474453218:queues/Default. If you don't specify this, jobs will go to the default queue.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Queue?: Value<string>;
  /**
   * Optional. Configuration for a destination queue to which the job can hop once a customer-defined minimum wait time has passed. For more information, see [Setting Up Queue Hopping to Avoid Long Waits](https://docs.aws.amazon.com/mediaconvert/latest/ug/setting-up-queue-hopping-to-avoid-long-waits.html) in the _AWS Elemental MediaConvert User Guide_.
   *
   * _Required_: No
   *
   * _Type_: List of [HopDestination](aws-properties-mediaconvert-jobtemplate-hopdestination.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  HopDestinations?: List<MediaConvertJobTemplateHopDestination>;
  /**
   * An array of key-value pairs to apply to this resource.
   *
   * For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html).
   *
   * _Required_: No
   *
   * _Type_: Json
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Tags?: { [key: string]: any };
  /**
   * The name of the job template you are creating.
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
 * The AWS::MediaConvert::JobTemplate resource is an AWS Elemental MediaConvert resource type that you can use to generate transcoding jobs.
 *
 * When you declare this entity in your AWS CloudFormation template, you pass in your transcoding job settings in JSON or YAML format. This settings specification must be formed in a particular way that conforms to AWS Elemental MediaConvert job validation. For more information about creating a job template model for the `SettingsJson` property, see the Remarks section later in this topic.
 *
 * For information about job templates, see [Working with AWS Elemental MediaConvert Job Templates](https://docs.aws.amazon.com/mediaconvert/latest/ug/working-with-job-templates.html) in the _AWS Elemental MediaConvert User Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconvert-jobtemplate.html}
 */
export interface MediaConvertJobTemplateResource {
  Type: 'AWS::MediaConvert::JobTemplate';
  Properties: MediaConvertJobTemplateProperties;
}
