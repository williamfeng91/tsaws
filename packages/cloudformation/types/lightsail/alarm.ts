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
 * - us-west-2 (version 119.1.0)
 */
import { List, Value } from '../../shared-types/dataTypes';

export interface LightsailAlarmProperties {
  /**
   * The name of the metric associated with the alarm.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Allowed values_: `BurstCapacityPercentage | BurstCapacityTime | ClientTLSNegotiationErrorCount | CPUUtilization | DatabaseConnections | DiskQueueDepth | FreeStorageSpace | HealthyHostCount | HTTPCode_Instance_2XX_Count | HTTPCode_Instance_3XX_Count | HTTPCode_Instance_4XX_Count | HTTPCode_Instance_5XX_Count | HTTPCode_LB_4XX_Count | HTTPCode_LB_5XX_Count | InstanceResponseTime | NetworkIn | NetworkOut | NetworkReceiveThroughput | NetworkTransmitThroughput | RejectedConnectionCount | RequestCount | StatusCheckFailed | StatusCheckFailed_Instance | StatusCheckFailed_System | UnhealthyHostCount`
   *
   * _Update requires_: Updates are not supported.
   */
  MetricName: Value<string>;
  /**
   * The arithmetic operation to use when comparing the specified statistic and threshold.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Allowed values_: `GreaterThanOrEqualToThreshold | GreaterThanThreshold | LessThanOrEqualToThreshold | LessThanThreshold`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ComparisonOperator: Value<string>;
  /**
   * Specifies how the alarm handles missing data points.
   *
   * An alarm can treat missing data in the following ways:
   */
  TreatMissingData?: Value<string>;
  /**
   * The name of the alarm.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  AlarmName: Value<string>;
  /**
   * The contact protocols for the alarm, such as `Email`, `SMS` (text messaging), or both.
   *
   * _Allowed Values_: `Email` | `SMS`
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ContactProtocols?: List<Value<string>>;
  /**
   * The name of the Lightsail resource that the alarm monitors.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: Updates are not supported.
   */
  MonitoredResourceName: Value<string>;
  /**
   * The number of periods over which data is compared to the specified threshold.
   *
   * _Required_: Yes
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  EvaluationPeriods: Value<number>;
  /**
   * A Boolean value indicating whether the alarm is enabled.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  NotificationEnabled?: Value<boolean>;
  /**
   * The number of data points within the evaluation periods that must be breaching to cause the alarm to go to the `ALARM` state.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DatapointsToAlarm?: Value<number>;
  /**
   * The alarm states that trigger a notification.
   *
   * To specify the `OK` and `INSUFFICIENT_DATA` values, you must also specify `ContactProtocols` values. Otherwise, the `OK` and `INSUFFICIENT_DATA` values will not take effect and the stack will drift.
   *
   * _Allowed Values_: `OK` | `ALARM` | `INSUFFICIENT_DATA`
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  NotificationTriggers?: List<Value<string>>;
  /**
   * The value against which the specified statistic is compared.
   *
   * _Required_: Yes
   *
   * _Type_: Double
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Threshold: Value<number>;
}

/**
 * The `AWS::Lightsail::Alarm` resource specifies an alarm that can be used to monitor a single metric for one of your Lightsail resources.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-alarm.html}
 */
export interface LightsailAlarmResource {
  Type: 'AWS::Lightsail::Alarm';
  Properties: LightsailAlarmProperties;
}
