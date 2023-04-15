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

/**
 * A subscription configuration for additional CloudWatch metrics.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-monitoringsubscription-realtimemetricssubscriptionconfig.html}
 **/
export interface CloudFrontMonitoringSubscriptionRealtimeMetricsSubscriptionConfig {
  /**
   * A flag that indicates whether additional CloudWatch metrics are enabled for a given CloudFront distribution.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Allowed values_: `Disabled | Enabled`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RealtimeMetricsSubscriptionStatus: Value<string>;
}

/**
 * A monitoring subscription. This structure contains information about whether additional CloudWatch metrics are enabled for a given CloudFront distribution.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-monitoringsubscription-monitoringsubscription.html}
 **/
export interface CloudFrontMonitoringSubscriptionMonitoringSubscription {
  /**
   * A subscription configuration for additional CloudWatch metrics.
   *
   * _Required_: No
   *
   * _Type_: [RealtimeMetricsSubscriptionConfig](aws-properties-cloudfront-monitoringsubscription-realtimemetricssubscriptionconfig.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RealtimeMetricsSubscriptionConfig?: CloudFrontMonitoringSubscriptionRealtimeMetricsSubscriptionConfig;
}
export interface CloudFrontMonitoringSubscriptionProperties {
  /**
   * A subscription configuration for additional CloudWatch metrics.
   *
   * _Required_: Yes
   *
   * _Type_: [MonitoringSubscription](aws-properties-cloudfront-monitoringsubscription-monitoringsubscription.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MonitoringSubscription: CloudFrontMonitoringSubscriptionMonitoringSubscription;
  /**
   * The ID of the distribution that you are enabling metrics for.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  DistributionId: Value<string>;
}

/**
 * A monitoring subscription. This structure contains information about whether additional CloudWatch metrics are enabled for a given CloudFront distribution.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-monitoringsubscription.html}
 */
export interface CloudFrontMonitoringSubscriptionResource {
  Type: 'AWS::CloudFront::MonitoringSubscription';
  Properties: CloudFrontMonitoringSubscriptionProperties;
}
