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

export interface EC2NetworkPerformanceMetricSubscriptionProperties {
  /**
   * The Region or Availability Zone that's the target for the subscription. For example, `eu-west-1`.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Destination: Value<string>;
  /**
   * The statistic used for the subscription.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Allowed values_: `p50`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Statistic: Value<string>;
  /**
   * The metric used for the subscription.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Allowed values_: `aggregate-latency`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Metric: Value<string>;
  /**
   * The Region or Availability Zone that's the source for the subscription. For example, `us-east-1`.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Source: Value<string>;
}

/**
 * Describes Infrastructure Performance subscriptions.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-networkperformancemetricsubscription.html}
 */
export interface EC2NetworkPerformanceMetricSubscriptionResource {
  Type: 'AWS::EC2::NetworkPerformanceMetricSubscription';
  Properties: EC2NetworkPerformanceMetricSubscriptionProperties;
}
