/**
 * Supported regions:
 * - ap-northeast-1 (version 119.1.0)
 * - ap-southeast-1 (version 119.1.0)
 * - ap-southeast-2 (version 119.1.0)
 * - eu-central-1 (version 119.1.0)
 * - eu-west-1 (version 119.1.0)
 * - us-east-1 (version 119.1.0)
 * - us-east-2 (version 119.1.0)
 * - us-west-2 (version 119.1.0)
 */
import { List, Value } from '../../shared-types/dataTypes';
import { ResourceTag } from '../../shared-types/resource';

/**
 * Use this structure to start and stop the launch.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-evidently-launch-executionstatusobject.html}
 **/
export interface EvidentlyLaunchExecutionStatusObject {
  /**
   * To start the launch now, specify `START` for this parameter. If this launch is currently running and you want to stop it now, specify `STOP`.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Status: Value<string>;
  /**
   * If you are using AWS CloudFormation to stop this launch, specify either `COMPLETED` or `CANCELLED` here to indicate how to classify this experiment. If you omit this parameter, the default of `COMPLETED` is used.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DesiredState?: Value<string>;
  /**
   * If you are using AWS CloudFormation to stop this launch, this is an optional field that you can use to record why the launch is being stopped or cancelled.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Reason?: Value<string>;
}

/**
 * A structure that defines one launch group in a launch. A launch group is a variation of the feature that you are including in the launch.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-evidently-launch-launchgroupobject.html}
 **/
export interface EvidentlyLaunchLaunchGroupObject {
  /**
   * A name for this launch group. It can include up to 127 characters.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  GroupName: Value<string>;
  /**
   * A description of the launch group.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Description?: Value<string>;
  /**
   * The feature variation to use for this launch group.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Variation: Value<string>;
  /**
   * The feature that this launch is using.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Feature: Value<string>;
}

/**
 * A structure that defines when each step of the launch is to start, and how much launch traffic is to be allocated to each variation during each step.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-evidently-launch-stepconfig.html}
 **/
export interface EvidentlyLaunchStepConfig {
  /**
   * An array of structures that define how much launch traffic to allocate to each launch group during this step of the launch.
   *
   * _Required_: Yes
   *
   * _Type_: List of [GroupToWeight](aws-properties-evidently-launch-grouptoweight.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  GroupWeights: List<EvidentlyLaunchGroupToWeight>;
  /**
   * An array of structures that you can use to specify different traffic splits for one or more audience _segments_. A segment is a portion of your audience that share one or more characteristics. Examples could be Chrome browser users, users in Europe, or Firefox browser users in Europe who also fit other criteria that your application collects, such as age.
   *
   * For more information, see [ Use segments to focus your audience](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-Evidently-segments.html).
   *
   * _Required_: No
   *
   * _Type_: List of [SegmentOverride](aws-properties-evidently-launch-segmentoverride.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SegmentOverrides?: List<EvidentlyLaunchSegmentOverride>;
  /**
   * The date and time to start this step of the launch. Use UTC format, `yyyy-MM-ddTHH:mm:ssZ`. For example, `2025-11-25T23:59:59Z`
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  StartTime: Value<string>;
}

/**
 * This structure defines a metric that you want to use to evaluate the variations during a launch or experiment.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-evidently-launch-metricdefinitionobject.html}
 **/
export interface EvidentlyLaunchMetricDefinitionObject {
  /**
   * The entity, such as a user or session, that does an action that causes a metric value to be recorded. An example is `userDetails.userID`.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  EntityIdKey: Value<string>;
  /**
   * A name for the metric. It can include up to 255 characters.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MetricName: Value<string>;
  /**
   * The EventBridge event pattern that defines how the metric is recorded.
   *
   * For more information about EventBridge event patterns, see [Amazon EventBridge event patterns](https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-event-patterns.html).
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  EventPattern?: Value<string>;
  /**
   * The value that is tracked to produce the metric.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ValueKey: Value<string>;
  /**
   * A label for the units that the metric is measuring.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  UnitLabel?: Value<string>;
}

/**
 * A structure containing the percentage of launch traffic to allocate to one launch group.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-evidently-launch-grouptoweight.html}
 **/
export interface EvidentlyLaunchGroupToWeight {
  /**
   * The name of the launch group. It can include up to 127 characters.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  GroupName: Value<string>;
  /**
   * The portion of launch traffic to allocate to this launch group.
   *
   * This is represented in thousandths of a percent. For example, specify 20,000 to allocate 20% of the launch audience to this launch group.
   *
   * _Required_: Yes
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SplitWeight: Value<number>;
}

/**
 * Use this structure to specify different traffic splits for one or more audience _segments_. A segment is a portion of your audience that share one or more characteristics. Examples could be Chrome browser users, users in Europe, or Firefox browser users in Europe who also fit other criteria that your application collects, such as age.
 *
 * For more information, see [ Use segments to focus your audience](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-Evidently-segments.html).
 *
 * This sructure is an array of up to six segment override objects. Each of these objects specifies a segment that you have already created, and defines the traffic split for that segment.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-evidently-launch-segmentoverride.html}
 **/
export interface EvidentlyLaunchSegmentOverride {
  /**
   * The traffic allocation percentages among the feature variations to assign to this segment. This is a set of key-value pairs. The keys are variation names. The values represent the amount of traffic to allocate to that variation for this segment. This is expressed in thousandths of a percent, so a weight of 50000 represents 50% of traffic.
   *
   * _Required_: Yes
   *
   * _Type_: List of [GroupToWeight](aws-properties-evidently-launch-grouptoweight.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Weights: List<EvidentlyLaunchGroupToWeight>;
  /**
   * A number indicating the order to use to evaluate segment overrides, if there are more than one. Segment overrides with lower numbers are evaluated first.
   *
   * _Required_: Yes
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  EvaluationOrder: Value<number>;
  /**
   * The ARN of the segment to use for this override.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Segment: Value<string>;
}
export interface EvidentlyLaunchProperties {
  /**
   * The name or ARN of the project that you want to create the launch in.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Project: Value<string>;
  /**
   * An optional description for the launch.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Description?: Value<string>;
  /**
   * A structure that you can use to start and stop the launch.
   *
   * _Required_: No
   *
   * _Type_: [ExecutionStatusObject](aws-properties-evidently-launch-executionstatusobject.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ExecutionStatus?: EvidentlyLaunchExecutionStatusObject;
  /**
   * An array of structures that contains the feature and variations that are to be used for the launch. You can up to five launch groups in a launch.
   *
   * _Required_: Yes
   *
   * _Type_: List of [LaunchGroupObject](aws-properties-evidently-launch-launchgroupobject.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Groups: List<EvidentlyLaunchLaunchGroupObject>;
  /**
   * When Evidently assigns a particular user session to a launch, it must use a randomization ID to determine which variation the user session is served. This randomization ID is a combination of the entity ID and `randomizationSalt`. If you omit `randomizationSalt`, Evidently uses the launch name as the `randomizationsSalt`.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RandomizationSalt?: Value<string>;
  /**
   * An array of structures that define the metrics that will be used to monitor the launch performance. You can have up to three metric monitors in the array.
   *
   * _Required_: No
   *
   * _Type_: List of [MetricDefinitionObject](aws-properties-evidently-launch-metricdefinitionobject.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MetricMonitors?: List<EvidentlyLaunchMetricDefinitionObject>;
  /**
   * An array of structures that define the traffic allocation percentages among the feature variations during each step of the launch.
   *
   * _Required_: Yes
   *
   * _Type_: List of [StepConfig](aws-properties-evidently-launch-stepconfig.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ScheduledSplitsConfig: List<EvidentlyLaunchStepConfig>;
  /**
   * Assigns one or more tags (key-value pairs) to the launch.
   *
   * Tags can help you organize and categorize your resources. You can also use them to scope user permissions by granting a user permission to access or change only resources with certain tag values.
   *
   * Tags don't have any semantic meaning to AWS and are interpreted strictly as strings of characters.
   *
   * You can associate as many as 50 tags with a launch.
   *
   * For more information, see [Tagging AWS resources](https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html).
   *
   * _Required_: No
   *
   * _Type_: List of [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Tags?: List<ResourceTag>;
  /**
   * The name for the launch. It can include up to 127 characters.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Name: Value<string>;
}

/**
 * Creates or updates a _launch_ of a given feature. Before you create a launch, you must create the feature to use for the launch.
 *
 * You can use a launch to safely validate new features by serving them to a specified percentage of your users while you roll out the feature. You can monitor the performance of the new feature to help you decide when to ramp up traffic to more users. This helps you reduce risk and identify unintended consequences before you fully launch the feature.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-evidently-launch.html}
 */
export interface EvidentlyLaunchResource {
  Type: 'AWS::Evidently::Launch';
  Properties: EvidentlyLaunchProperties;
}
