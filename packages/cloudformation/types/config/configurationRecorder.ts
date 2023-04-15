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
 * Specifies which AWS resource types AWS Config records for configuration changes. In the recording group, you specify whether you want to record all supported resource types or only specific types of resources.
 *
 * By default, AWS Config records the configuration changes for all supported types of _regional resources_ that AWS Config discovers in the region in which it is running. Regional resources are tied to a region and can be used only in that region. Examples of regional resources are EC2 instances and EBS volumes.
 *
 * You can also have AWS Config record supported types of _global resources_. Global resources are not tied to a specific region and can be used in all regions. The global resource types that AWS Config supports include IAM users, groups, roles, and customer managed policies.
 *
 * **Important**
 *
 * Global resource types onboarded to AWS Config recording after February 2022 will only be recorded in the service's home region for the commercial partition and AWS GovCloud (US) West for the GovCloud partition. You can view the Configuration Items for these new global resource types only in their home region and AWS GovCloud (US) West.
 *
 * Supported global resource types onboarded before February 2022 such as `AWS::IAM::Group`, `AWS::IAM::Policy`, `AWS::IAM::Role`, `AWS::IAM::User` remain unchanged, and they will continue to deliver Configuration Items in all supported regions in AWS Config. The change will only affect new global resource types onboarded after February 2022.
 *
 * To record global resource types onboarded after February 2022, enable All Supported Resource Types in the home region of the global resource type you want to record.
 *
 * If you don't want AWS Config to record all resources, you can specify which types of resources it will record with the `resourceTypes` parameter.
 *
 * For a list of supported resource types, see [Supported Resource Types](https://docs.aws.amazon.com/config/latest/developerguide/resource-config-reference.html#supported-resources).
 *
 * For more information and a table of the Home Regions for Global Resource Types Onboarded after February 2022, see [Selecting Which Resources AWS Config Records](https://docs.aws.amazon.com/config/latest/developerguide/select-resources.html).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-config-configurationrecorder-recordinggroup.html}
 **/
export interface ConfigConfigurationRecorderRecordingGroup {
  /**
   * Specifies whether AWS Config records configuration changes for every supported type of regional resource.
   *
   * If you set this option to `true`, when AWS Config adds support for a new type of regional resource, it starts recording resources of that type automatically.
   *
   * If you set this option to `true`, you cannot enumerate a list of `resourceTypes`.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AllSupported?: Value<boolean>;
  /**
   * Specifies whether AWS Config includes all supported types of global resources (for example, IAM resources) with the resources that it records.
   *
   * Before you can set this option to `true`, you must set the `AllSupported` option to `true`.
   *
   * If you set this option to `true`, when AWS Config adds support for a new type of global resource, it starts recording resources of that type automatically.
   *
   * The configuration details for any global resource are the same in all regions. To prevent duplicate configuration items, you should consider customizing AWS Config in only one region to record global resources.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  IncludeGlobalResourceTypes?: Value<boolean>;
  /**
   * A comma-separated list that specifies the types of AWS resources for which AWS Config records configuration changes (for example, `AWS::EC2::Instance` or `AWS::CloudTrail::Trail`).
   *
   * To record all configuration changes, you must set the `AllSupported` option to `false`.
   *
   * If you set the `AllSupported` option to false and populate the `ResourceTypes` option with values, when AWS Config adds support for a new type of resource, it will not record resources of that type unless you manually add that type to your recording group.
   *
   * For a list of valid `resourceTypes` values, see the **resourceType Value** column in [Supported AWS Resource Types](https://docs.aws.amazon.com/config/latest/developerguide/resource-config-reference.html#supported-resources).
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ResourceTypes?: List<Value<string>>;
}
export interface ConfigConfigurationRecorderProperties {
  /**
   * A name for the configuration recorder. If you don't specify a name, AWS CloudFormation CloudFormation generates a unique physical ID and uses that ID for the configuration recorder name. For more information, see [Name Type](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-name.html).
   *
   * After you create a configuration recorder, you cannot rename it. If you don't want a name that AWS CloudFormation generates, specify a value for this property.
   *
   * Updates are not supported.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `256`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Name?: Value<string>;
  /**
   * Indicates whether to record configurations for all supported resources or for a list of resource types. The resource types that you list must be supported by AWS Config.
   *
   * _Required_: No
   *
   * _Type_: [RecordingGroup](aws-properties-config-configurationrecorder-recordinggroup.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RecordingGroup?: ConfigConfigurationRecorderRecordingGroup;
  /**
   * The Amazon Resource Name (ARN) of the IAM (IAM) role that is used to make read or write requests to the delivery channel that you specify and to get configuration details for supported AWS resources. For more information, see [Permissions for the IAM Role Assigned](https://docs.aws.amazon.com/config/latest/developerguide/iamrole-permissions.html) to AWS Config in the AWS Config Developer Guide.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RoleARN: Value<string>;
}

/**
 * The AWS::Config::ConfigurationRecorder resource describes the AWS resource types for which AWS Config records configuration changes. The configuration recorder stores the configurations of the supported resources in your account as configuration items.
 *
 * **Note**
 *
 * To enable AWS Config, you must create a configuration recorder and a delivery channel. AWS Config uses the delivery channel to deliver the configuration changes to your Amazon S3 bucket or Amazon SNS topic. For more information, see [AWS::Config::DeliveryChannel](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-config-deliverychannel.html).
 *
 * AWS CloudFormation starts the recorder as soon as the delivery channel is available.
 *
 * To stop the recorder and delete it, delete the configuration recorder from your stack. To stop the recorder without deleting it, call the [StopConfigurationRecorder](https://docs.aws.amazon.com/config/latest/APIReference/API_StopConfigurationRecorder.html) action of the AWS Config API directly.
 *
 * For more information, see [Configuration Recorder](https://docs.aws.amazon.com/config/latest/developerguide/config-concepts.html#config-recorder) in the AWS Config Developer Guide.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-config-configurationrecorder.html}
 */
export interface ConfigConfigurationRecorderResource {
  Type: 'AWS::Config::ConfigurationRecorder';
  Properties: ConfigConfigurationRecorderProperties;
}
