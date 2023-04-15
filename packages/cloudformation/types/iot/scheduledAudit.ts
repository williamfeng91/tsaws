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
 * - us-east-1 (version 119.1.0)
 * - us-east-2 (version 119.1.0)
 * - us-west-1 (version 119.1.0)
 * - us-west-2 (version 119.1.0)
 */
import { List, Value } from '../../shared-types/dataTypes';
import { ResourceTag } from '../../shared-types/resource';

export interface IoTScheduledAuditProperties {
  /**
   * The day of the week on which the scheduled audit is run (if the `frequency` is "WEEKLY" or "BIWEEKLY").
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DayOfWeek?: Value<string>;
  /**
   * Which checks are performed during the scheduled audit. Checks must be enabled for your account. (Use `DescribeAccountAuditConfiguration` to see the list of all checks, including those that are enabled or use `UpdateAccountAuditConfiguration` to select which checks are enabled.)
   *
   * The following checks are currently aviable:
   */
  TargetCheckNames: List<Value<string>>;
  /**
   * The name of the scheduled audit.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ScheduledAuditName?: Value<string>;
  /**
   * The day of the month on which the scheduled audit is run (if the `frequency` is "MONTHLY"). If days 29-31 are specified, and the month does not have that many days, the audit takes place on the "LAST" day of the month.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DayOfMonth?: Value<string>;
  /**
   * How often the scheduled audit occurs.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Frequency: Value<string>;
  /**
   * Metadata that can be used to manage the scheduled audit.
   *
   * _Required_: No
   *
   * _Type_: List of [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Tags?: List<ResourceTag>;
}

/**
 * Use the `AWS::IoT::ScheduledAudit` resource to create a scheduled audit that is run at a specified time interval. For API reference, see [CreateScheduleAudit](https://docs.aws.amazon.com/iot/latest/apireference/API_CreateScheduledAudit.html) and for general information, see [Audit](https://docs.aws.amazon.com/iot/latest/developerguide/device-defender-audit.html).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-scheduledaudit.html}
 */
export interface IoTScheduledAuditResource {
  Type: 'AWS::IoT::ScheduledAudit';
  Properties: IoTScheduledAuditProperties;
}
