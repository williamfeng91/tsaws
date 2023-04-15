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
 * Session stickiness provides the ability to define multiple requests from a single viewer as a single session. This prevents the potentially inconsistent experience of sending some of a given user's requests to your staging distribution, while others are sent to your primary distribution. Define the session duration using TTL values.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-continuousdeploymentpolicy-sessionstickinessconfig.html}
 **/
export interface CloudFrontContinuousDeploymentPolicySessionStickinessConfig {
  /**
   * The amount of time after which you want sessions to cease if no requests are received. Allowed values are 300–3600 seconds (5–60 minutes).
   *
   * _Required_: Yes
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  IdleTTL: Value<number>;
  /**
   * The maximum amount of time to consider requests from the viewer as being part of the same session. Allowed values are 300–3600 seconds (5–60 minutes).
   *
   * _Required_: Yes
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MaximumTTL: Value<number>;
}

/**
 * This configuration determines the percentage of HTTP requests that are sent to the staging distribution.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-continuousdeploymentpolicy-singleweightconfig.html}
 **/
export interface CloudFrontContinuousDeploymentPolicySingleWeightConfig {
  /**
   * Session stickiness provides the ability to define multiple requests from a single viewer as a single session. This prevents the potentially inconsistent experience of sending some of a given user's requests to your staging distribution, while others are sent to your primary distribution. Define the session duration using TTL values.
   *
   * _Required_: No
   *
   * _Type_: [SessionStickinessConfig](aws-properties-cloudfront-continuousdeploymentpolicy-sessionstickinessconfig.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SessionStickinessConfig?: CloudFrontContinuousDeploymentPolicySessionStickinessConfig;
  /**
   * The percentage of traffic to send to a staging distribution, expressed as a decimal number between 0 and .15.
   *
   * _Required_: Yes
   *
   * _Type_: Double
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Weight: Value<number>;
}

/**
 * The traffic configuration of your continuous deployment.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-continuousdeploymentpolicy-trafficconfig.html}
 **/
export interface CloudFrontContinuousDeploymentPolicyTrafficConfig {
  /**
   * Contains the percentage of traffic to send to the staging distribution.
   *
   * _Required_: No
   *
   * _Type_: [SingleWeightConfig](aws-properties-cloudfront-continuousdeploymentpolicy-singleweightconfig.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SingleWeightConfig?: CloudFrontContinuousDeploymentPolicySingleWeightConfig;
  /**
   * The type of traffic configuration.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Allowed values_: `SingleHeader | SingleWeight`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Type: Value<string>;
  /**
   * Determines which HTTP requests are sent to the staging distribution.
   *
   * _Required_: No
   *
   * _Type_: [SingleHeaderConfig](aws-properties-cloudfront-continuousdeploymentpolicy-singleheaderconfig.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SingleHeaderConfig?: CloudFrontContinuousDeploymentPolicySingleHeaderConfig;
}

/**
 * Contains the configuration for a continuous deployment policy.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-continuousdeploymentpolicy-continuousdeploymentpolicyconfig.html}
 **/
export interface CloudFrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfig {
  /**
   * A Boolean that indicates whether this continuous deployment policy is enabled (in effect). When this value is `true`, this policy is enabled and in effect. When this value is `false`, this policy is not enabled and has no effect.
   *
   * _Required_: Yes
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Enabled: Value<boolean>;
  /**
   * The CloudFront domain name of the staging distribution. For example: `d111111abcdef8.cloudfront.net`.
   *
   * _Required_: Yes
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  StagingDistributionDnsNames: List<Value<string>>;
  /**
   * Contains the parameters for routing production traffic from your primary to staging distributions.
   *
   * _Required_: No
   *
   * _Type_: [TrafficConfig](aws-properties-cloudfront-continuousdeploymentpolicy-trafficconfig.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TrafficConfig?: CloudFrontContinuousDeploymentPolicyTrafficConfig;
}

/**
 * Determines which HTTP requests are sent to the staging distribution.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-continuousdeploymentpolicy-singleheaderconfig.html}
 **/
export interface CloudFrontContinuousDeploymentPolicySingleHeaderConfig {
  /**
   * The request header name that you want CloudFront to send to your staging distribution. The header must contain the prefix `aws-cf-cd-`.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Header: Value<string>;
  /**
   * The request header value.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Value: Value<string>;
}
export interface CloudFrontContinuousDeploymentPolicyProperties {
  /**
   * Contains the configuration for a continuous deployment policy.
   *
   * _Required_: Yes
   *
   * _Type_: [ContinuousDeploymentPolicyConfig](aws-properties-cloudfront-continuousdeploymentpolicy-continuousdeploymentpolicyconfig.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ContinuousDeploymentPolicyConfig: CloudFrontContinuousDeploymentPolicyContinuousDeploymentPolicyConfig;
}

/**
 * Creates a continuous deployment policy that routes a subset of production traffic from a primary distribution to a staging distribution.
 *
 * After you create and update a staging distribution, you can use a continuous deployment policy to incrementally move traffic to the staging distribution. This enables you to test changes to a distribution's configuration before moving all of your production traffic to the new configuration.
 *
 * For more information, see [Using CloudFront continuous deployment to safely test CDN configuration changes](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/continuous-deployment.html) in the _Amazon CloudFront Developer Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-continuousdeploymentpolicy.html}
 */
export interface CloudFrontContinuousDeploymentPolicyResource {
  Type: 'AWS::CloudFront::ContinuousDeploymentPolicy';
  Properties: CloudFrontContinuousDeploymentPolicyProperties;
}
