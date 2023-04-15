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
import { ResourceTag } from '../../shared-types/resource';

/**
 * Describes the configuration of the tracing feature within an AWS App Runner observability configuration.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apprunner-observabilityconfiguration-traceconfiguration.html}
 **/
export interface AppRunnerObservabilityConfigurationTraceConfiguration {
  /**
   * The implementation provider chosen for tracing App Runner services.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Allowed values_: `AWSXRAY`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Vendor: Value<string>;
}
export interface AppRunnerObservabilityConfigurationProperties {
  /**
   * The configuration of the tracing feature within this observability configuration. If you don't specify it, App Runner doesn't enable tracing.
   *
   * _Required_: No
   *
   * _Type_: [TraceConfiguration](aws-properties-apprunner-observabilityconfiguration-traceconfiguration.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  TraceConfiguration?: AppRunnerObservabilityConfigurationTraceConfiguration;
  /**
   * A name for the observability configuration. When you use it for the first time in an AWS Region, App Runner creates revision number `1` of this name. When you use the same name in subsequent calls, App Runner creates incremental revisions of the configuration.
   *
   * The name `DefaultConfiguration` is reserved. You can't use it to create a new observability configuration, and you can't create a revision of it.
   *
   * When you want to use your own observability configuration for your App Runner service, _create a configuration with a different name_, and then provide it when you create or update your service.
   *
   * If you don't specify a name, AWS CloudFormation generates a name for your observability configuration.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `4`
   *
   * _Maximum_: `32`
   *
   * _Pattern_: `[A-Za-z0-9][A-Za-z0-9-_]{3,31}`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ObservabilityConfigurationName?: Value<string>;
  /**
   * A list of metadata items that you can associate with your observability configuration resource. A tag is a key-value pair.
   *
   * _Required_: No
   *
   * _Type_: List of [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Tags?: List<ResourceTag>;
}

/**
 * The `AWS::AppRunner::ObservabilityConfiguration` resource is an AWS App Runner resource type that specifies an App Runner observability configuration.
 *
 * App Runner requires this resource when you specify App Runner services and you want to enable non-default observability features. You can share an observability configuration across multiple services.
 *
 * Create multiple revisions of a configuration by specifying this resource multiple times using the same `ObservabilityConfigurationName`. App Runner creates multiple resources with incremental `ObservabilityConfigurationRevision` values. When you specify a service and configure an observability configuration resource, the service uses the latest active revision of the observability configuration by default. You can optionally configure the service to use a specific revision.
 *
 * The observability configuration resource is designed to configure multiple features (currently one feature, tracing). This resource takes optional parameters that describe the configuration of these features (currently one parameter, `TraceConfiguration`). If you don't specify a feature parameter, App Runner doesn't enable the feature.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apprunner-observabilityconfiguration.html}
 */
export interface AppRunnerObservabilityConfigurationResource {
  Type: 'AWS::AppRunner::ObservabilityConfiguration';
  Properties: AppRunnerObservabilityConfigurationProperties;
}
