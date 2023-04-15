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

/**
 * An Amazon CloudWatch alarm configured to monitor metrics on an endpoint.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-endpoint-alarm.html}
 **/
export interface SageMakerEndpointAlarm {
  /**
   * The name of a CloudWatch alarm in your account.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `255`
   *
   * _Pattern_: `^(?!s*$).+`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AlarmName: Value<string>;
}

/**
 * Defines the traffic routing strategy during an endpoint deployment to shift traffic from the old fleet to the new fleet.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-endpoint-trafficroutingconfig.html}
 **/
export interface SageMakerEndpointTrafficRoutingConfig {
  /**
   * Traffic routing strategy type.
   */
  Type: Value<string>;
  /**
   * Batch size for each step to turn on traffic on the new endpoint fleet. `Value` must be 10-50% of the variant's total instance count.
   *
   * _Required_: No
   *
   * _Type_: [CapacitySize](aws-properties-sagemaker-endpoint-capacitysize.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  LinearStepSize?: SageMakerEndpointCapacitySize;
  /**
   * Batch size for the first step to turn on traffic on the new endpoint fleet. `Value` must be less than or equal to 50% of the variant's total instance count.
   *
   * _Required_: No
   *
   * _Type_: [CapacitySize](aws-properties-sagemaker-endpoint-capacitysize.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CanarySize?: SageMakerEndpointCapacitySize;
  /**
   * The waiting time (in seconds) between incremental steps to turn on traffic on the new endpoint fleet.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Minimum_: `0`
   *
   * _Maximum_: `3600`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  WaitIntervalInSeconds?: Value<number>;
}

/**
 * The deployment configuration for an endpoint, which contains the desired deployment strategy and rollback configurations.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-endpoint-deploymentconfig.html}
 **/
export interface SageMakerEndpointDeploymentConfig {
  /**
   * Automatic rollback configuration for handling endpoint deployment failures and recovery.
   *
   * _Required_: No
   *
   * _Type_: [AutoRollbackConfig](aws-properties-sagemaker-endpoint-autorollbackconfig.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AutoRollbackConfiguration?: SageMakerEndpointAutoRollbackConfig;
  /**
   * Update policy for a blue/green deployment. If this update policy is specified, SageMaker creates a new fleet during the deployment while maintaining the old fleet. SageMaker flips traffic to the new fleet according to the specified traffic routing configuration. Only one update policy should be used in the deployment configuration. If no update policy is specified, SageMaker uses a blue/green deployment strategy with all at once traffic shifting by default.
   *
   * _Required_: Yes
   *
   * _Type_: [BlueGreenUpdatePolicy](aws-properties-sagemaker-endpoint-bluegreenupdatepolicy.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  BlueGreenUpdatePolicy: SageMakerEndpointBlueGreenUpdatePolicy;
}

/**
 * Update policy for a blue/green deployment. If this update policy is specified, SageMaker creates a new fleet during the deployment while maintaining the old fleet. SageMaker flips traffic to the new fleet according to the specified traffic routing configuration. Only one update policy should be used in the deployment configuration. If no update policy is specified, SageMaker uses a blue/green deployment strategy with all at once traffic shifting by default.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-endpoint-bluegreenupdatepolicy.html}
 **/
export interface SageMakerEndpointBlueGreenUpdatePolicy {
  /**
   * Maximum execution timeout for the deployment. Note that the timeout value should be larger than the total waiting time specified in `TerminationWaitInSeconds` and `WaitIntervalInSeconds`.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Minimum_: `600`
   *
   * _Maximum_: `14400`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MaximumExecutionTimeoutInSeconds?: Value<number>;
  /**
   * Additional waiting time in seconds after the completion of an endpoint deployment before terminating the old endpoint fleet. Default is 0.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Minimum_: `0`
   *
   * _Maximum_: `3600`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TerminationWaitInSeconds?: Value<number>;
  /**
   * Defines the traffic routing strategy to shift traffic from the old fleet to the new fleet during an endpoint deployment.
   *
   * _Required_: Yes
   *
   * _Type_: [TrafficRoutingConfig](aws-properties-sagemaker-endpoint-trafficroutingconfig.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TrafficRoutingConfiguration: SageMakerEndpointTrafficRoutingConfig;
}

/**
 * Automatic rollback configuration for handling endpoint deployment failures and recovery.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-endpoint-autorollbackconfig.html}
 **/
export interface SageMakerEndpointAutoRollbackConfig {
  /**
   * List of CloudWatch alarms in your account that are configured to monitor metrics on an endpoint. If any alarms are tripped during a deployment, SageMaker rolls back the deployment.
   *
   * _Required_: Yes
   *
   * _Type_: List of [Alarm](aws-properties-sagemaker-endpoint-alarm.md)
   *
   * _Maximum_: `10`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Alarms: List<SageMakerEndpointAlarm>;
}

/**
 * Specifies the endpoint capacity to activate for production.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-endpoint-capacitysize.html}
 **/
export interface SageMakerEndpointCapacitySize {
  /**
   * Specifies the endpoint capacity type.
   */
  Type: Value<string>;
  /**
   * Defines the capacity size, either as a number of instances or a capacity percentage.
   *
   * _Required_: Yes
   *
   * _Type_: Integer
   *
   * _Minimum_: `1`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Value: Value<number>;
}

/**
 * Specifies a production variant property type for an Endpoint.
 *
 * If you are updating an Endpoint with the [RetainAllVariantProperties](https://docs.aws.amazon.com/sagemaker/latest/dg/API_UpdateEndpoint.html#SageMaker-UpdateEndpoint-request-RetainAllVariantProperties) option set to `true`, the `VarientProperty` objects listed in [ExcludeRetainedVariantProperties](https://docs.aws.amazon.com/sagemaker/latest/dg/API_UpdateEndpoint.html#SageMaker-UpdateEndpoint-request-ExcludeRetainedVariantProperties) override the existing variant properties of the Endpoint.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-endpoint-variantproperty.html}
 **/
export interface SageMakerEndpointVariantProperty {
  /**
   * The type of variant property. The supported values are:
   */
  VariantPropertyType?: Value<string>;
}
export interface SageMakerEndpointProperties {
  /**
   * When updating endpoint resources, enables or disables the retention of variant properties, such as the instance count or the variant weight. To retain the variant properties of an endpoint when updating it, set `RetainAllVariantProperties` to `true`. To use the variant properties specified in a new `EndpointConfig` call when updating an endpoint, set `RetainAllVariantProperties` to `false`. Use this property only when updating endpoint resources, not when creating new endpoint resources.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RetainAllVariantProperties?: Value<boolean>;
  /**
   * The name of the endpoint.The name must be unique within an AWS Region in your AWS account. The name is case-insensitive in `CreateEndpoint`, but the case is preserved and must be matched in [https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_runtime_InvokeEndpoint.html](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_runtime_InvokeEndpoint.html).
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Maximum_: `63`
   *
   * _Pattern_: `^[a-zA-Z0-9](-*[a-zA-Z0-9]){0,62}`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  EndpointName?: Value<string>;
  /**
   * When you are updating endpoint resources with [RetainAllVariantProperties](https://docs.aws.amazon.com/sagemaker/latest/dg/API_UpdateEndpoint.html#SageMaker-UpdateEndpoint-request-RetainAllVariantProperties) whose value is set to `true`, `ExcludeRetainedVariantProperties` specifies the list of type [VariantProperty](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sagemaker-endpoint-variantproperty.html) to override with the values provided by `EndpointConfig`. If you don't specify a value for `ExcludeAllVariantProperties`, no variant properties are overridden. Don't use this property when creating new endpoint resources or when `RetainAllVariantProperties` is set to `false`.
   *
   * _Required_: No
   *
   * _Type_: List of [VariantProperty](aws-properties-sagemaker-endpoint-variantproperty.md)
   *
   * _Maximum_: `3`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ExcludeRetainedVariantProperties?: List<SageMakerEndpointVariantProperty>;
  /**
   * The name of the [AWS::SageMaker::EndpointConfig](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-endpointconfig.html) resource that specifies the configuration for the endpoint. For more information, see [CreateEndpointConfig](https://docs.aws.amazon.com/sagemaker/latest/dg/API_CreateEndpointConfig.html).
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Maximum_: `63`
   *
   * _Pattern_: `^[a-zA-Z0-9](-*[a-zA-Z0-9]){0,62}`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  EndpointConfigName: Value<string>;
  /**
   * The deployment configuration for an endpoint, which contains the desired deployment strategy and rollback configurations.
   *
   * _Required_: No
   *
   * _Type_: [DeploymentConfig](aws-properties-sagemaker-endpoint-deploymentconfig.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DeploymentConfig?: SageMakerEndpointDeploymentConfig;
  /**
   * Specifies whether to reuse the last deployment configuration. The default value is false (the configuration is not reused).
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RetainDeploymentConfig?: Value<boolean>;
  /**
   * A list of key-value pairs to apply to this resource.
   *
   * For more information, see [Resource Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html) and [Using Cost Allocation Tags](https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html#allocation-what) in the _ AWS Billing and Cost Management User Guide_.
   *
   * _Required_: No
   *
   * _Type_: List of [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)
   *
   * _Maximum_: `50`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Tags?: List<ResourceTag>;
}

/**
 * Use the `AWS::SageMaker::Endpoint` resource to create an endpoint using the specified configuration in the request. Amazon SageMaker uses the endpoint to provision resources and deploy models. You create the endpoint configuration with the [AWS::SageMaker::EndpointConfig](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-endpointconfig.html) resource. For more information, see [Deploy a Model on Amazon SageMaker Hosting Services](https://docs.aws.amazon.com/sagemaker/latest/dg/how-it-works-hosting.html) in the _Amazon SageMaker Developer Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-endpoint.html}
 */
export interface SageMakerEndpointResource {
  Type: 'AWS::SageMaker::Endpoint';
  Properties: SageMakerEndpointProperties;
}
