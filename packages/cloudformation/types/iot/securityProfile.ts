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

/**
 * The metric you want to retain. Dimensions are optional.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-securityprofile-metrictoretain.html}
 **/
export interface IoTSecurityProfileMetricToRetain {
  /**
   * A standard of measurement.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Metric: Value<string>;
  /**
   * The dimension of the metric.
   *
   * _Required_: No
   *
   * _Type_: [MetricDimension](aws-properties-iot-securityprofile-metricdimension.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MetricDimension?: IoTSecurityProfileMetricDimension;
}

/**
 * A structure containing the alert target ARN and the role ARN.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-securityprofile-alerttarget.html}
 **/
export interface IoTSecurityProfileAlertTarget {
  /**
   * The Amazon Resource Name (ARN) of the notification target to which alerts are sent.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AlertTargetArn: Value<string>;
  /**
   * The ARN of the role that grants permission to send alerts to the notification target.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RoleArn: Value<string>;
}

/**
 * A Device Defender security profile behavior.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-securityprofile-behavior.html}
 **/
export interface IoTSecurityProfileBehavior {
  /**
   * The alert status. If you set the value to `true`, alerts will be suppressed.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SuppressAlerts?: Value<boolean>;
  /**
   * What is measured by the behavior.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Metric?: Value<string>;
  /**
   * The criteria that determine if a device is behaving normally in regard to the `metric`.
   *
   * _Required_: No
   *
   * _Type_: [BehaviorCriteria](aws-properties-iot-securityprofile-behaviorcriteria.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Criteria?: IoTSecurityProfileBehaviorCriteria;
  /**
   * The dimension of the metric.
   *
   * _Required_: No
   *
   * _Type_: [MetricDimension](aws-properties-iot-securityprofile-metricdimension.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MetricDimension?: IoTSecurityProfileMetricDimension;
  /**
   * The name you've given to the behavior.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Name: Value<string>;
}

/**
 * A statistical ranking (percentile) that indicates a threshold value by which a behavior is determined to be in compliance or in violation of the behavior.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-securityprofile-statisticalthreshold.html}
 **/
export interface IoTSecurityProfileStatisticalThreshold {
  /**
   * The percentile that resolves to a threshold value by which compliance with a behavior is determined. Metrics are collected over the specified period (`durationSeconds`) from all reporting devices in your account and statistical ranks are calculated. Then, the measurements from a device are collected over the same period. If the accumulated measurements from the device fall above or below (`comparisonOperator`) the value associated with the percentile specified, then the device is considered to be in compliance with the behavior, otherwise a violation occurs.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Statistic?: Value<string>;
}

/**
 * The `MachineLearningDetectionConfig` property type controls confidence of the machine learning model.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-securityprofile-machinelearningdetectionconfig.html}
 **/
export interface IoTSecurityProfileMachineLearningDetectionConfig {
  /**
   * The model confidence level.
   *
   * There are three levels of confidence, `"high"`, `"medium"`, and `"low"`.
   *
   * The higher the confidence level, the lower the sensitivity, and the lower the alarm frequency will be.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ConfidenceLevel?: Value<string>;
}

/**
 * The dimension of the metric.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-securityprofile-metricdimension.html}
 **/
export interface IoTSecurityProfileMetricDimension {
  /**
   * Operators are constructs that perform logical operations. Valid values are `IN` and `NOT_IN`.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Operator?: Value<string>;
  /**
   * The name of the dimension.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DimensionName: Value<string>;
}

/**
 * The value to be compared with the `metric`.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-securityprofile-metricvalue.html}
 **/
export interface IoTSecurityProfileMetricValue {
  /**
   * The numeric value of a metric.
   *
   * _Required_: No
   *
   * _Type_: List of Double
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Numbers?: List<Value<number>>;
  /**
   * The numeric values of a metric.
   *
   * _Required_: No
   *
   * _Type_: Double
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Number?: Value<number>;
  /**
   * If the `comparisonOperator` calls for a set of ports, use this to specify that set to be compared with the `metric`.
   *
   * _Required_: No
   *
   * _Type_: List of Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Ports?: List<Value<number>>;
  /**
   * If the `comparisonOperator` calls for a numeric value, use this to specify that numeric value to be compared with the `metric`.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Count?: Value<string>;
  /**
   * The string values of a metric.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Strings?: List<Value<string>>;
  /**
   * If the `comparisonOperator` calls for a set of CIDRs, use this to specify that set to be compared with the `metric`.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Cidrs?: List<Value<string>>;
}

/**
 * The criteria by which the behavior is determined to be normal.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-securityprofile-behaviorcriteria.html}
 **/
export interface IoTSecurityProfileBehaviorCriteria {
  /**
   * The operator that relates the thing measured (`metric`) to the criteria (containing a `value` or `statisticalThreshold`). Valid operators include:
   */
  ComparisonOperator?: Value<string>;
  /**
   * The confidence level of the detection model.
   *
   * _Required_: No
   *
   * _Type_: [MachineLearningDetectionConfig](aws-properties-iot-securityprofile-machinelearningdetectionconfig.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MlDetectionConfig?: IoTSecurityProfileMachineLearningDetectionConfig;
  /**
   * The value to be compared with the `metric`.
   *
   * _Required_: No
   *
   * _Type_: [MetricValue](aws-properties-iot-securityprofile-metricvalue.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Value?: IoTSecurityProfileMetricValue;
  /**
   * A statistical ranking (percentile)that indicates a threshold value by which a behavior is determined to be in compliance or in violation of the behavior.
   *
   * _Required_: No
   *
   * _Type_: [StatisticalThreshold](aws-properties-iot-securityprofile-statisticalthreshold.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  StatisticalThreshold?: IoTSecurityProfileStatisticalThreshold;
  /**
   * Use this to specify the time duration over which the behavior is evaluated, for those criteria that have a time dimension (for example, `NUM_MESSAGES_SENT`). For a `statisticalThreshhold` metric comparison, measurements from all devices are accumulated over this time duration before being used to calculate percentiles, and later, measurements from an individual device are also accumulated over this time duration before being given a percentile rank. Cannot be used with list-based metric datatypes.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DurationSeconds?: Value<number>;
  /**
   * If a device is in violation of the behavior for the specified number of consecutive datapoints, an alarm occurs. If not specified, the default is 1.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ConsecutiveDatapointsToAlarm?: Value<number>;
  /**
   * If an alarm has occurred and the offending device is no longer in violation of the behavior for the specified number of consecutive datapoints, the alarm is cleared. If not specified, the default is 1.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ConsecutiveDatapointsToClear?: Value<number>;
}
export interface IoTSecurityProfileProperties {
  /**
   * A list of metrics whose data is retained (stored). By default, data is retained for any metric used in the profile's `behaviors`, but it's also retained for any metric specified here. Can be used with custom metrics; can't be used with dimensions.
   *
   * _Required_: No
   *
   * _Type_: List of [MetricToRetain](aws-properties-iot-securityprofile-metrictoretain.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AdditionalMetricsToRetainV2?: List<IoTSecurityProfileMetricToRetain>;
  /**
   * A description of the security profile.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SecurityProfileDescription?: Value<string>;
  /**
   * Specifies the behaviors that, when violated by a device (thing), cause an alert.
   *
   * _Required_: No
   *
   * _Type_: List of [Behavior](aws-properties-iot-securityprofile-behavior.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Behaviors?: List<IoTSecurityProfileBehavior>;
  /**
   * The name you gave to the security profile.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  SecurityProfileName?: Value<string>;
  /**
   * Specifies the destinations to which alerts are sent. (Alerts are always sent to the console.) Alerts are generated when a device (thing) violates a behavior.
   *
   * _Required_: No
   *
   * _Type_: Map of [AlertTarget](aws-properties-iot-securityprofile-alerttarget.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AlertTargets?: { [key: string]: IoTSecurityProfileAlertTarget };
  /**
   * The ARN of the target (thing group) to which the security profile is attached.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TargetArns?: List<Value<string>>;
  /**
   * Metadata that can be used to manage the security profile.
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
 * Use the `AWS::IoT::SecurityProfile` resource to create a Device Defender security profile. For API reference, see [CreateSecurityProfile](https://docs.aws.amazon.com/iot/latest/apireference/API_CreateSecurityProfile.html) and for general information, see [Detect](https://docs.aws.amazon.com/iot/latest/developerguide/device-defender-detect.html).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-securityprofile.html}
 */
export interface IoTSecurityProfileResource {
  Type: 'AWS::IoT::SecurityProfile';
  Properties: IoTSecurityProfileProperties;
}
