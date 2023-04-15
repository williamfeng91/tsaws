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
 * Metadata to assign to the configuration profile. Tags help organize and categorize your AWS AppConfig resources. Each tag consists of a key and an optional value, both of which you define.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appconfig-configurationprofile-tags.html}
 **/
export interface AppConfigConfigurationProfileTags {
  /**
   * The tag value can be up to 256 characters.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Value?: Value<string>;
  /**
   * The key-value string map. The valid character set is `[a-zA-Z+-=._:/]`. The tag key can be up to 128 characters and must not start with `aws:`.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Key?: Value<string>;
}

/**
 * A validator provides a syntactic or semantic check to ensure the configuration that you want to deploy functions as intended. To validate your application configuration data, you provide a schema or an AWS Lambda function that runs against the configuration. The configuration deployment or update can only proceed when the configuration data is valid.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appconfig-configurationprofile-validators.html}
 **/
export interface AppConfigConfigurationProfileValidators {
  /**
   * AWS AppConfig supports validators of type `JSON_SCHEMA` and `LAMBDA`
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `JSON_SCHEMA | LAMBDA`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Type?: Value<string>;
  /**
   * Either the JSON Schema content or the Amazon Resource Name (ARN) of an Lambda function.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `0`
   *
   * _Maximum_: `32768`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Content?: Value<string>;
}
export interface AppConfigConfigurationProfileProperties {
  /**
   * A URI to locate the configuration. You can specify the following:
   */
  LocationUri: Value<string>;
  /**
   * The type of configurations contained in the profile. AWS AppConfig supports `feature flags` and `freeform` configurations. We recommend you create feature flag configurations to enable or disable new features and freeform configurations to distribute configurations to an application. When calling this API, enter one of the following values for `Type`:
   *
   * `AWS.AppConfig.FeatureFlags`
   *
   * `AWS.Freeform`
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Pattern_: `^[a-zA-Z.]+`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Type?: Value<string>;
  /**
   * A description of the configuration profile.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `0`
   *
   * _Maximum_: `1024`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Description?: Value<string>;
  /**
   * A list of methods for validating the configuration.
   *
   * _Required_: No
   *
   * _Type_: [List](aws-properties-appconfig-configurationprofile-validators.md) of [Validators](aws-properties-appconfig-configurationprofile-validators.md)
   *
   * _Maximum_: `2`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Validators?: List<AppConfigConfigurationProfileValidators>;
  /**
   * The ARN of an IAM role with permission to access the configuration at the specified `LocationUri`.
   *
   * A retrieval role ARN is not required for configurations stored in the AWS AppConfig hosted configuration store. It is required for all other sources that store your configuration.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `20`
   *
   * _Maximum_: `2048`
   *
   * _Pattern_: `^((arn):(aws|aws-cn|aws-iso|aws-iso-[a-z]{1}|aws-us-gov):(iam)::d{12}:role[/].*)$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RetrievalRoleArn?: Value<string>;
  /**
   * The application ID.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Pattern_: `[a-z0-9]{4,7}`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ApplicationId: Value<string>;
  /**
   * Metadata to assign to the configuration profile. Tags help organize and categorize your AWS AppConfig resources. Each tag consists of a key and an optional value, both of which you define.
   *
   * _Required_: No
   *
   * _Type_: [List](aws-properties-appconfig-configurationprofile-tags.md) of [Tags](aws-properties-appconfig-configurationprofile-tags.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Tags?: List<AppConfigConfigurationProfileTags>;
  /**
   * A name for the configuration profile.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `128`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Name: Value<string>;
}

/**
 * The `AWS::AppConfig::ConfigurationProfile` resource creates a configuration profile that enables AWS AppConfig to access the configuration source. Valid configuration sources include AWS Systems Manager (SSM) documents, SSM Parameter Store parameters, and Amazon S3. A configuration profile includes the following information.
 *
 * AWS AppConfig requires that you create resources and deploy a configuration in the following order:
 *
 * For more information, see [AWS AppConfig](https://docs.aws.amazon.com/appconfig/latest/userguide/what-is-appconfig.html) in the _AWS AppConfig User Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appconfig-configurationprofile.html}
 */
export interface AppConfigConfigurationProfileResource {
  Type: 'AWS::AppConfig::ConfigurationProfile';
  Properties: AppConfigConfigurationProfileProperties;
}
