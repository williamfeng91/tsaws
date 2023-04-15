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
 * Metadata to assign to the environment. Tags help organize and categorize your AWS AppConfig resources. Each tag consists of a key and an optional value, both of which you define.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appconfig-environment-tags.html}
 **/
export interface AppConfigEnvironmentTags {
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
 * Amazon CloudWatch alarms to monitor during the deployment process.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appconfig-environment-monitors.html}
 **/
export interface AppConfigEnvironmentMonitors {
  /**
   * Amazon Resource Name (ARN) of the Amazon CloudWatch alarm.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `2048`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AlarmArn?: Value<string>;
  /**
   * ARN of an AWS Identity and Access Management (IAM) role for AWS AppConfig to monitor `AlarmArn`.
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
  AlarmRoleArn?: Value<string>;
}
export interface AppConfigEnvironmentProperties {
  /**
   * A description of the environment.
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
   * Amazon CloudWatch alarms to monitor during the deployment process.
   *
   * _Required_: No
   *
   * _Type_: [List](aws-properties-appconfig-environment-monitors.md) of [Monitors](aws-properties-appconfig-environment-monitors.md)
   *
   * _Maximum_: `5`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Monitors?: List<AppConfigEnvironmentMonitors>;
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
   * Metadata to assign to the environment. Tags help organize and categorize your AWS AppConfig resources. Each tag consists of a key and an optional value, both of which you define.
   *
   * _Required_: No
   *
   * _Type_: [List](aws-properties-appconfig-environment-tags.md) of [Tags](aws-properties-appconfig-environment-tags.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Tags?: List<AppConfigEnvironmentTags>;
  /**
   * A name for the environment.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `64`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Name: Value<string>;
}

/**
 * The `AWS::AppConfig::Environment` resource creates an environment, which is a logical deployment group of AWS AppConfig targets, such as applications in a `Beta` or `Production` environment. You define one or more environments for each AWS AppConfig application. You can also define environments for application subcomponents such as the `Web`, `Mobile` and `Back-end` components for your application. You can configure Amazon CloudWatch alarms for each environment. The system monitors alarms during a configuration deployment. If an alarm is triggered, the system rolls back the configuration.
 *
 * AWS AppConfig requires that you create resources and deploy a configuration in the following order:
 *
 * For more information, see [AWS AppConfig](https://docs.aws.amazon.com/appconfig/latest/userguide/what-is-appconfig.html) in the _AWS AppConfig User Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appconfig-environment.html}
 */
export interface AppConfigEnvironmentResource {
  Type: 'AWS::AppConfig::Environment';
  Properties: AppConfigEnvironmentProperties;
}
