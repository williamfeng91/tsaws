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

export interface SchedulerScheduleGroupProperties {
  /**
   * An array of key-value pairs to apply to this resource.
   *
   * For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html).
   *
   * _Required_: No
   *
   * _Type_: List of [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Tags?: List<ResourceTag>;
  /**
   * The name of the schedule group.
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
 * A _schedule group_ is an Amazon EventBridge Scheduler resource you use to organize your schedules.
 *
 * Your AWS account comes with a `default` scheduler group. You associate a new schedule with the `default` group or with schedule groups that you create and manage. You can create up to [500 schedule groups](https://docs.aws.amazon.com/scheduler/latest/UserGuide/scheduler-quotas.html) in your AWS account. With EventBridge Scheduler, you apply [tags](https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html) to schedule groups, not to individual schedules to organize your resources.
 *
 * For more information about managing schedule groups, see [Managing a schedule group](https://docs.aws.amazon.com/scheduler/latest/UserGuide/managing-schedule-group.html) in the _EventBridge Scheduler User Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-scheduler-schedulegroup.html}
 */
export interface SchedulerScheduleGroupResource {
  Type: 'AWS::Scheduler::ScheduleGroup';
  Properties: SchedulerScheduleGroupProperties;
}
