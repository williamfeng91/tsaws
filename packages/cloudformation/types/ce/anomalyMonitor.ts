/**
 * Supported regions:
 * - us-east-1 (version 119.1.0)
 */
import { List, Value } from '../../shared-types/dataTypes';

/**
 * The tag structure that contains a tag key and value.
 *
 * **Note**
 *
 * Tagging is supported only for the following Cost Explorer resource types: [https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_AnomalyMonitor.html](https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_AnomalyMonitor.html), [https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_AnomalySubscription.html](https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_AnomalySubscription.html), [https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_CostCategory.html](https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_CostCategory.html).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ce-anomalymonitor-resourcetag.html}
 **/
export interface CEAnomalyMonitorResourceTag {
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
export interface CEAnomalyMonitorProperties {
  /**
   * The possible type values.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Allowed values_: `CUSTOM | DIMENSIONAL`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  MonitorType: Value<string>;
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: List of [ResourceTag](aws-properties-ce-anomalymonitor-resourcetag.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ResourceTags?: List<CEAnomalyMonitorResourceTag>;
  /**
   * The name of the monitor.
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
  MonitorName: Value<string>;
  /**
   * The array of `MonitorSpecification` in JSON array format. For instance, you can use `MonitorSpecification` to specify a tag, Cost Category, or linked account for your custom anomaly monitor. For further information, see the [Examples](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ce-anomalymonitor.html#aws-resource-ce-anomalymonitor--examples) section of this page.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  MonitorSpecification?: Value<string>;
  /**
   * The dimensions to evaluate.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `SERVICE`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  MonitorDimension?: Value<string>;
}

/**
 * The `AWS::CE::AnomalyMonitor` resource is a Cost Explorer resource type that continuously inspects your account's cost data for anomalies, based on `MonitorType` and `MonitorSpecification`. The content consists of detailed metadata and the current status of the monitor object.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ce-anomalymonitor.html}
 */
export interface CEAnomalyMonitorResource {
  Type: 'AWS::CE::AnomalyMonitor';
  Properties: CEAnomalyMonitorProperties;
}
