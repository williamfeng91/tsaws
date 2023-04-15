/**
 * Supported regions:
 * - us-east-1 (version 119.1.0)
 */
import { List, Value } from '../../shared-types/dataTypes';

/**
 * The recipient of `AnomalySubscription` notifications.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ce-anomalysubscription-subscriber.html}
 **/
export interface CEAnomalySubscriptionSubscriber {
  /**
   * Indicates if the subscriber accepts the notifications.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `CONFIRMED | DECLINED`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Status?: Value<string>;
  /**
   * The notification delivery channel.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Allowed values_: `EMAIL | SNS`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Type: Value<string>;
  /**
   * The email address or SNS Topic Amazon Resource Name (ARN), depending on the `Type`.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `6`
   *
   * _Maximum_: `302`
   *
   * _Pattern_: `(^[a-zA-Z0-9.!#$%&'*+=?^_‘{|}~-]+@[a-zA-Z0-9_-]+(.[a-zA-Z0-9_-]+)+$)|(^arn:(aws[a-zA-Z-]*):sns:[a-zA-Z0-9-]+:[0-9]{12}:[a-zA-Z0-9_-]+(.fifo)?$)`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Address: Value<string>;
}

/**
 * The tag structure that contains a tag key and value.
 *
 * **Note**
 *
 * Tagging is supported only for the following Cost Explorer resource types: [https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_AnomalyMonitor.html](https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_AnomalyMonitor.html), [https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_AnomalySubscription.html](https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_AnomalySubscription.html), [https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_CostCategory.html](https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_CostCategory.html).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ce-anomalysubscription-resourcetag.html}
 **/
export interface CEAnomalySubscriptionResourceTag {
  /**
   * The value that's associated with the tag.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `0`
   *
   * _Maximum_: `256`
   *
   * _Pattern_: `^([p{L}p{Z}p{N}_.:/=+-@]*)$`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Value: Value<string>;
  /**
   * The key that's associated with the tag.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `128`
   *
   * _Pattern_: `^([p{L}p{Z}p{N}_.:/=+-@]*)$`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Key: Value<string>;
}
export interface CEAnomalySubscriptionProperties {
  /**
   * A list of cost anomaly monitors.
   *
   * _Required_: Yes
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MonitorArnList: List<Value<string>>;
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: List of [ResourceTag](aws-properties-ce-anomalysubscription-resourcetag.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ResourceTags?: List<CEAnomalySubscriptionResourceTag>;
  /**
   * The frequency that anomaly notifications are sent. Notifications are sent either over email (for DAILY and WEEKLY frequencies) or SNS (for IMMEDIATE frequency). For more information, see [Creating an Amazon SNS topic for anomaly notifications](https://docs.aws.amazon.com/cost-management/latest/userguide/ad-SNS.html).
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Allowed values_: `DAILY | IMMEDIATE | WEEKLY`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Frequency: Value<string>;
  /**
   * The name for the subscription.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `0`
   *
   * _Maximum_: `1024`
   *
   * _Pattern_: `[Ss]*`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SubscriptionName: Value<string>;
  /**
   * A list of subscribers to notify.
   *
   * _Required_: Yes
   *
   * _Type_: List of [Subscriber](aws-properties-ce-anomalysubscription-subscriber.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Subscribers: List<CEAnomalySubscriptionSubscriber>;
  /**
   * (deprecated)
   *
   * An absolute dollar value that must be exceeded by the anomaly's total impact (see [Impact](https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_Impact.html) for more details) for an anomaly notification to be generated.
   *
   * This field has been deprecated. To specify a threshold, use ThresholdExpression. Continued use of Threshold will be treated as shorthand syntax for a ThresholdExpression.
   *
   * One of Threshold or ThresholdExpression is required for `AWS::CE::AnomalySubscription`. You cannot specify both.
   *
   * _Required_: No
   *
   * _Type_: Double
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Threshold?: Value<number>;
  /**
   * An [Expression](https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_Expression.html) object in JSON string format used to specify the anomalies that you want to generate alerts for. This supports dimensions and nested expressions. The supported dimensions are `ANOMALY_TOTAL_IMPACT_ABSOLUTE` and `ANOMALY_TOTAL_IMPACT_PERCENTAGE`, corresponding to an anomaly’s TotalImpact and TotalImpactPercentage, respectively (see [Impact](https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_Impact.html) for more details). The supported nested expression types are `AND` and `OR`. The match option `GREATER_THAN_OR_EQUAL` is required. Values must be numbers between 0 and 10,000,000,000 in string format.
   *
   * One of Threshold or ThresholdExpression is required for `AWS::CE::AnomalySubscription`. You cannot specify both.
   *
   * For further information, see the [Examples](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ce-anomalysubscription.html#aws-resource-ce-anomalysubscription--examples) section of this page.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ThresholdExpression?: Value<string>;
}

/**
 * The `AWS::CE::AnomalySubscription` resource (also referred to as an alert subscription) is a Cost Explorer resource type that sends notifications about specific anomalies that meet an alerting criteria defined by you.
 *
 * You can specify the frequency of the alerts and the subscribers to notify.
 *
 * Anomaly subscriptions can be associated with one or more [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ce-anomalymonitor.html](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ce-anomalymonitor.html) resources, and they only send notifications about anomalies detected by those associated monitors. You can also configure a threshold to further control which anomalies are included in the notifications.
 *
 * Anomalies that don’t exceed the chosen threshold and therefore don’t trigger notifications from an anomaly subscription will still be available on the console and from the [https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_GetAnomalies.html](https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_GetAnomalies.html) API.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ce-anomalysubscription.html}
 */
export interface CEAnomalySubscriptionResource {
  Type: 'AWS::CE::AnomalySubscription';
  Properties: CEAnomalySubscriptionProperties;
}
