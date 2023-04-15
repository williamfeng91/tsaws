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

export interface AutoScalingScheduledActionProperties {
  /**
   * The minimum size of the Auto Scaling group.
   *
   * _Required_: Conditional
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MinSize?: Value<number>;
  /**
   * The recurring schedule for this action. This format consists of five fields separated by white spaces: [Minute] [Hour] [Day_of_Month] [Month_of_Year] [Day_of_Week]. The value must be in quotes (for example, `"30 0 1 1,6,12 *"`). For more information about this format, see [Crontab](http://crontab.org).
   *
   * When `StartTime` and `EndTime` are specified with `Recurrence`, they form the boundaries of when the recurring action starts and stops.
   *
   * Cron expressions use Universal Coordinated Time (UTC) by default.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Recurrence?: Value<string>;
  /**
   * Specifies the time zone for a cron expression. If a time zone is not provided, UTC is used by default.
   *
   * Valid values are the canonical names of the IANA time zones, derived from the IANA Time Zone Database (such as `Etc/GMT+9` or `Pacific/Tahiti`). For more information, see [https://en.wikipedia.org/wiki/List_of_tz_database_time_zones](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones).
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TimeZone?: Value<string>;
  /**
   * The date and time for the recurring schedule to end, in UTC. For example, `"2021-06-01T00:00:00Z"`.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  EndTime?: Value<string>;
  /**
   * The name of the Auto Scaling group.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `255`
   *
   * _Pattern_: `[u0020-uD7FFuE000-uFFFDuD800uDC00-uDBFFuDFFFrnt]*`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  AutoScalingGroupName: Value<string>;
  /**
   * The date and time for this action to start, in YYYY-MM-DDThh:mm:ssZ format in UTC/GMT only and in quotes (for example, `"2021-06-01T00:00:00Z"`).
   *
   * If you specify `Recurrence` and `StartTime`, Amazon EC2 Auto Scaling performs the action at this time, and then performs the action based on the specified recurrence.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  StartTime?: Value<string>;
  /**
   * The desired capacity is the initial capacity of the Auto Scaling group after the scheduled action runs and the capacity it attempts to maintain. It can scale beyond this capacity if you add more scaling conditions.
   *
   * You must specify at least one of the following properties: `MaxSize`, `MinSize`, or `DesiredCapacity`.
   *
   * _Required_: Conditional
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DesiredCapacity?: Value<number>;
  /**
   * The maximum size of the Auto Scaling group.
   *
   * _Required_: Conditional
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MaxSize?: Value<number>;
}

/**
 * The `AWS::AutoScaling::ScheduledAction` resource specifies an Amazon EC2 Auto Scaling scheduled action so that the Auto Scaling group can change the number of instances available for your application in response to predictable load changes.
 *
 * When you update a stack with an Auto Scaling group and scheduled action, CloudFormation always sets the min size, max size, and desired capacity properties of your group to the values that are defined in the `AWS::AutoScaling::AutoScalingGroup` section of your template. However, you might not want CloudFormation to do that when you have a scheduled action in effect. You can use an [UpdatePolicy attribute](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-updatepolicy.html) to prevent CloudFormation from changing the min size, max size, or desired capacity property values during a stack update unless you modified the individual values in your template. If you have rolling updates enabled, before you can update the Auto Scaling group, you must suspend scheduled actions by specifying an [UpdatePolicy attribute](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-updatepolicy.html) for the Auto Scaling group. You can find a sample update policy for rolling updates in [Auto scaling template snippets](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/quickref-autoscaling.html).
 *
 * For more information, see [Scheduled scaling](https://docs.aws.amazon.com/autoscaling/ec2/userguide/schedule_time.html) and [Suspending and resuming scaling processes](https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-suspend-resume-processes.html) in the _Amazon EC2 Auto Scaling User Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-autoscaling-scheduledaction.html}
 */
export interface AutoScalingScheduledActionResource {
  Type: 'AWS::AutoScaling::ScheduledAction';
  Properties: AutoScalingScheduledActionProperties;
}
