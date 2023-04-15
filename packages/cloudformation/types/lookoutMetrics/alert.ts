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

/**
 * Contains information about a Lambda configuration.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lookoutmetrics-alert-lambdaconfiguration.html}
 **/
export interface LookoutMetricsAlertLambdaConfiguration {
  /**
   * The ARN of the Lambda function.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  LambdaArn: Value<string>;
  /**
   * The ARN of an IAM role that has permission to invoke the Lambda function.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  RoleArn: Value<string>;
}

/**
 * A configuration that specifies the action to perform when anomalies are detected.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lookoutmetrics-alert-action.html}
 **/
export interface LookoutMetricsAlertAction {
  /**
   * A configuration for an AWS Lambda channel.
   *
   * _Required_: No
   *
   * _Type_: [LambdaConfiguration](aws-properties-lookoutmetrics-alert-lambdaconfiguration.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  LambdaConfiguration?: LookoutMetricsAlertLambdaConfiguration;
  /**
   * A configuration for an Amazon SNS channel.
   *
   * _Required_: No
   *
   * _Type_: [SNSConfiguration](aws-properties-lookoutmetrics-alert-snsconfiguration.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  SNSConfiguration?: LookoutMetricsAlertSNSConfiguration;
}

/**
 * Contains information about the SNS topic to which you want to send your alerts and the IAM role that has access to that topic.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lookoutmetrics-alert-snsconfiguration.html}
 **/
export interface LookoutMetricsAlertSNSConfiguration {
  /**
   * The ARN of the target SNS topic.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  SnsTopicArn: Value<string>;
  /**
   * The ARN of the IAM role that has access to the target SNS topic.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  RoleArn: Value<string>;
}
export interface LookoutMetricsAlertProperties {
  /**
   * A description of the alert.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  AlertDescription?: Value<string>;
  /**
   * Action that will be triggered when there is an alert.
   *
   * _Required_: Yes
   *
   * _Type_: [Action](aws-properties-lookoutmetrics-alert-action.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Action: LookoutMetricsAlertAction;
  /**
   * The name of the alert.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  AlertName?: Value<string>;
  /**
   * An integer from 0 to 100 specifying the alert sensitivity threshold.
   *
   * _Required_: Yes
   *
   * _Type_: Integer
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  AlertSensitivityThreshold: Value<number>;
  /**
   * The ARN of the detector to which the alert is attached.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  AnomalyDetectorArn: Value<string>;
}

/**
 * The `AWS::LookoutMetrics::Alert` type creates an alert for an anomaly detector.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lookoutmetrics-alert.html}
 */
export interface LookoutMetricsAlertResource {
  Type: 'AWS::LookoutMetrics::Alert';
  Properties: LookoutMetricsAlertProperties;
}
