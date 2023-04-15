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
 * The `ConfigurationOptionSetting` property type specifies an option for an AWS Elastic Beanstalk configuration template.
 *
 * The `OptionSettings` property of the [AWS::ElasticBeanstalk::ConfigurationTemplate](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-beanstalk-configurationtemplate.html) resource contains a list of `ConfigurationOptionSetting` property types.
 *
 * For a list of possible namespaces and option values, see [Option Values](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/command-options.html) in the _AWS Elastic Beanstalk Developer Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticbeanstalk-configurationtemplate-configurationoptionsetting.html}
 **/
export interface ElasticBeanstalkConfigurationTemplateConfigurationOptionSetting {
  /**
   * A unique resource name for the option setting. Use it for a time–based scaling configuration option.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `256`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ResourceName?: Value<string>;
  /**
   * The current value for the configuration option.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Value?: Value<string>;
  /**
   * A unique namespace that identifies the option's associated AWS resource.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Namespace: Value<string>;
  /**
   * The name of the configuration option.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  OptionName: Value<string>;
}

/**
 * An AWS Elastic Beanstalk configuration template to base a new one on. You can use it to define a [AWS::ElasticBeanstalk::ConfigurationTemplate](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-beanstalk-configurationtemplate.html) resource.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticbeanstalk-configurationtemplate-sourceconfiguration.html}
 **/
export interface ElasticBeanstalkConfigurationTemplateSourceConfiguration {
  /**
   * The name of the application associated with the configuration.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `100`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ApplicationName: Value<string>;
  /**
   * The name of the configuration template.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `100`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  TemplateName: Value<string>;
}
export interface ElasticBeanstalkConfigurationTemplateProperties {
  /**
   * The ID of an environment whose settings you want to use to create the configuration template. You must specify `EnvironmentId` if you don't specify `PlatformArn`, `SolutionStackName`, or `SourceConfiguration`.
   *
   * _Required_: Conditional
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  EnvironmentId?: Value<string>;
  /**
   * The Amazon Resource Name (ARN) of the custom platform. For more information, see [ Custom Platforms](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/custom-platforms.html) in the _ AWS Elastic Beanstalk Developer Guide_.
   *
   * If you specify `PlatformArn`, then don't specify `SolutionStackName`.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  PlatformArn?: Value<string>;
  /**
   * The name of the Elastic Beanstalk application to associate with this configuration template.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `100`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ApplicationName: Value<string>;
  /**
   * An optional description for this configuration.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Maximum_: `200`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Description?: Value<string>;
  /**
   * Option values for the Elastic Beanstalk configuration, such as the instance type. If specified, these values override the values obtained from the solution stack or the source configuration template. For a complete list of Elastic Beanstalk configuration options, see [Option Values](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/command-options.html) in the _ AWS Elastic Beanstalk Developer Guide_.
   *
   * _Required_: No
   *
   * _Type_: List of [ConfigurationOptionSetting](aws-properties-elasticbeanstalk-configurationtemplate-configurationoptionsetting.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  OptionSettings?: List<ElasticBeanstalkConfigurationTemplateConfigurationOptionSetting>;
  /**
   * An Elastic Beanstalk configuration template to base this one on. If specified, Elastic Beanstalk uses the configuration values from the specified configuration template to create a new configuration.
   *
   * Values specified in `OptionSettings` override any values obtained from the `SourceConfiguration`.
   *
   * You must specify `SourceConfiguration` if you don't specify `PlatformArn`, `EnvironmentId`, or `SolutionStackName`.
   *
   * Constraint: If both solution stack name and source configuration are specified, the solution stack of the source configuration template must match the specified solution stack name.
   *
   * _Required_: Conditional
   *
   * _Type_: [SourceConfiguration](aws-properties-elasticbeanstalk-configurationtemplate-sourceconfiguration.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  SourceConfiguration?: ElasticBeanstalkConfigurationTemplateSourceConfiguration;
  /**
   * The name of an Elastic Beanstalk solution stack (platform version) that this configuration uses. For example, `64bit Amazon Linux 2013.09 running Tomcat 7 Java 7`. A solution stack specifies the operating system, runtime, and application server for a configuration template. It also determines the set of configuration options as well as the possible and default values. For more information, see [Supported Platforms](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/concepts.platforms.html) in the _ AWS Elastic Beanstalk Developer Guide_.
   *
   * You must specify `SolutionStackName` if you don't specify `PlatformArn`, `EnvironmentId`, or `SourceConfiguration`.
   *
   * Use the [https://docs.aws.amazon.com/elasticbeanstalk/latest/api/API_ListAvailableSolutionStacks.html](https://docs.aws.amazon.com/elasticbeanstalk/latest/api/API_ListAvailableSolutionStacks.html) API to obtain a list of available solution stacks.
   *
   * _Required_: Conditional
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  SolutionStackName?: Value<string>;
}

/**
 * The AWS::ElasticBeanstalk::ConfigurationTemplate resource is an AWS Elastic Beanstalk resource type that specifies an Elastic Beanstalk configuration template, associated with a specific Elastic Beanstalk application. You define application configuration settings in a configuration template. You can then use the configuration template to deploy different versions of the application with the same configuration settings.
 *
 * **Note**
 *
 * The Elastic Beanstalk console and documentation often refer to configuration templates as _saved configurations_. When you set configuration options in a saved configuration (configuration template), Elastic Beanstalk applies them with a particular precedence as part of applying options from multiple sources. For more information, see [ Configuration Options](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/command-options.html) in the _AWS Elastic Beanstalk Developer Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticbeanstalk-configurationtemplate.html}
 */
export interface ElasticBeanstalkConfigurationTemplateResource {
  Type: 'AWS::ElasticBeanstalk::ConfigurationTemplate';
  Properties: ElasticBeanstalkConfigurationTemplateProperties;
}
