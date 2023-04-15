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
 * A structure that contains the configuration of which variation to use as the "control" version. The "control" version is used for comparison with other variations. This structure also specifies how much experiment traffic is allocated to each variation.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-evidently-experiment-onlineabconfigobject.html}
 **/
export interface EvidentlyExperimentOnlineAbConfigObject {
  /**
   * A set of key-value pairs. The keys are treatment names, and the values are the portion of experiment traffic to be assigned to that treatment. Specify the traffic portion in thousandths of a percent, so 20,000 for a variation would allocate 20% of the experiment traffic to that variation.
   *
   * _Required_: No
   *
   * _Type_: List of [TreatmentToWeight](aws-properties-evidently-experiment-treatmenttoweight.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TreatmentWeights?: List<EvidentlyExperimentTreatmentToWeight>;
  /**
   * The name of the variation that is to be the default variation that the other variations are compared to.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ControlTreatmentName?: Value<string>;
}

/**
 * A structure that defines one treatment in an experiment. A treatment is a variation of the feature that you are including in the experiment.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-evidently-experiment-treatmentobject.html}
 **/
export interface EvidentlyExperimentTreatmentObject {
  /**
   * The description of the treatment.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Description?: Value<string>;
  /**
   * The name of the variation to use for this treatment.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Variation: Value<string>;
  /**
   * The name of the feature for this experiment.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Feature: Value<string>;
  /**
   * A name for this treatment. It can include up to 127 characters.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TreatmentName: Value<string>;
}

/**
 * Use this structure to tell Evidently whether higher or lower values are desired for a metric that is used in an experiment.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-evidently-experiment-metricgoalobject.html}
 **/
export interface EvidentlyExperimentMetricGoalObject {
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
   * `INCREASE` means that a variation with a higher number for this metric is performing better.
   *
   * `DECREASE` means that a variation with a lower number for this metric is performing better.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DesiredChange: Value<string>;
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
   * The JSON path to reference the numerical metric value in the event.
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
 * This structure defines how much experiment traffic to allocate to one treatment used in the experiment.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-evidently-experiment-treatmenttoweight.html}
 **/
export interface EvidentlyExperimentTreatmentToWeight {
  /**
   * The name of the treatment.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Treatment: Value<string>;
  /**
   * The portion of experiment traffic to allocate to this treatment. Specify the traffic portion in thousandths of a percent, so 20,000 allocated to a treatment would allocate 20% of the experiment traffic to that treatment.
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
 * Use this structure to start and stop the experiment.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-evidently-experiment-runningstatusobject.html}
 **/
export interface EvidentlyExperimentRunningStatusObject {
  /**
   * To start the experiment now, specify `START` for this parameter. If this experiment is currently running and you want to stop it now, specify `STOP`.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Status: Value<string>;
  /**
   * If you are using AWS CloudFormation to stop this experiment, specify either `COMPLETED` or `CANCELLED` here to indicate how to classify this experiment.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DesiredState?: Value<string>;
  /**
   * If you are using AWS CloudFormation to start the experiment, use this field to specify when the experiment is to end. The format is as a UNIX timestamp. For more information about this format, see [The Current Epoch Unix Timestamp](https://www.unixtimestamp.com/index.php).
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AnalysisCompleteTime?: Value<string>;
  /**
   * If you are using AWS CloudFormation to stop this experiment, this is an optional field that you can use to record why the experiment is being stopped or cancelled.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Reason?: Value<string>;
}
export interface EvidentlyExperimentProperties {
  /**
   * The name or the ARN of the project where this experiment is to be created.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Project: Value<string>;
  /**
   * A structure that you can use to start and stop the experiment.
   *
   * _Required_: No
   *
   * _Type_: [RunningStatusObject](aws-properties-evidently-experiment-runningstatusobject.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RunningStatus?: EvidentlyExperimentRunningStatusObject;
  /**
   * An optional description of the experiment.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Description?: Value<string>;
  /**
   * An array of structures that defines the metrics used for the experiment, and whether a higher or lower value for each metric is the goal. You can use up to three metrics in an experiment.
   *
   * _Required_: Yes
   *
   * _Type_: List of [MetricGoalObject](aws-properties-evidently-experiment-metricgoalobject.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MetricGoals: List<EvidentlyExperimentMetricGoalObject>;
  /**
   * A structure that contains the configuration of which variation to use as the "control" version. The "control" version is used for comparison with other variations. This structure also specifies how much experiment traffic is allocated to each variation.
   *
   * _Required_: Yes
   *
   * _Type_: [OnlineAbConfigObject](aws-properties-evidently-experiment-onlineabconfigobject.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  OnlineAbConfig: EvidentlyExperimentOnlineAbConfigObject;
  /**
   * Set this to `true` to remove the segment that is associated with this experiment. You can't use this parameter if the experiment is currently running.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RemoveSegment?: Value<boolean>;
  /**
   * When Evidently assigns a particular user session to an experiment, it must use a randomization ID to determine which variation the user session is served. This randomization ID is a combination of the entity ID and `randomizationSalt`. If you omit `randomizationSalt`, Evidently uses the experiment name as the `randomizationSalt`.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RandomizationSalt?: Value<string>;
  /**
   * An array of structures that describe the configuration of each feature variation used in the experiment.
   *
   * _Required_: Yes
   *
   * _Type_: List of [TreatmentObject](aws-properties-evidently-experiment-treatmentobject.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Treatments: List<EvidentlyExperimentTreatmentObject>;
  /**
   * The portion of the available audience that you want to allocate to this experiment, in thousandths of a percent. The available audience is the total audience minus the audience that you have allocated to overrides or current launches of this feature.
   *
   * This is represented in thousandths of a percent. For example, specify 10,000 to allocate 10% of the available audience.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SamplingRate?: Value<number>;
  /**
   * Specifies an audience _segment_ to use in the experiment. When a segment is used in an experiment, only user sessions that match the segment pattern are used in the experiment.
   *
   * For more information, see [ Segment rule pattern syntax](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-Evidently-segments-syntax.html).
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Segment?: Value<string>;
  /**
   * Assigns one or more tags (key-value pairs) to the experiment.
   *
   * Tags can help you organize and categorize your resources. You can also use them to scope user permissions by granting a user permission to access or change only resources with certain tag values.
   *
   * Tags don't have any semantic meaning to AWS and are interpreted strictly as strings of characters.
   *
   * You can associate as many as 50 tags with an experiment.
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
   * A name for the new experiment.
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
 * Creates or updates an Evidently _experiment_. Before you create an experiment, you must create the feature to use for the experiment.
 *
 * An experiment helps you make feature design decisions based on evidence and data. An experiment can test as many as five variations at once. Evidently collects experiment data and analyzes it by statistical methods, and provides clear recommendations about which variations perform better.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-evidently-experiment.html}
 */
export interface EvidentlyExperimentResource {
  Type: 'AWS::Evidently::Experiment';
  Properties: EvidentlyExperimentProperties;
}
