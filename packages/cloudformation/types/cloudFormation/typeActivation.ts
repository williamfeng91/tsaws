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
 * Contains logging configuration information for an extension.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudformation-typeactivation-loggingconfig.html}
 **/
export interface CloudFormationTypeActivationLoggingConfig {
  /**
   * The Amazon CloudWatch Logs group to which CloudFormation sends error logging information when invoking the extension's handlers.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `512`
   *
   * _Pattern_: `[.-_/#A-Za-z0-9]+`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  LogGroupName?: Value<string>;
  /**
   * The Amazon Resource Name (ARN) of the role that CloudFormation should assume when sending log entries to CloudWatch Logs.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `256`
   *
   * _Pattern_: `arn:.+:iam::[0-9]{12}:role/.+`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  LogRoleArn?: Value<string>;
}
export interface CloudFormationTypeActivationProperties {
  /**
   * The major version of this extension you want to activate, if multiple major versions are available. The default is the latest major version. CloudFormation uses the latest available _minor_ version of the major version selected.
   *
   * You can specify `MajorVersion` or `VersionBump`, but not both.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MajorVersion?: Value<string>;
  /**
   * The name of the IAM execution role to use to activate the extension.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `256`
   *
   * _Pattern_: `arn:.+:iam::[0-9]{12}:role/.+`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ExecutionRoleArn?: Value<string>;
  /**
   * The name of the extension.
   *
   * Conditional: You must specify `PublicTypeArn`, or `TypeName`, `Type`, and `PublisherId`.
   *
   * _Required_: Conditional
   *
   * _Type_: String
   *
   * _Minimum_: `10`
   *
   * _Maximum_: `204`
   *
   * _Pattern_: `[A-Za-z0-9]{2,64}::[A-Za-z0-9]{2,64}::[A-Za-z0-9]{2,64}(::MODULE){0,1}`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  TypeName?: Value<string>;
  /**
   * The extension type.
   *
   * Conditional: You must specify `PublicTypeArn`, or `TypeName`, `Type`, and `PublisherId`.
   *
   * _Required_: Conditional
   *
   * _Type_: String
   *
   * _Allowed values_: `HOOK | MODULE | RESOURCE`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Type?: Value<string>;
  /**
   * The Amazon Resource Number (ARN) of the public extension.
   *
   * Conditional: You must specify `PublicTypeArn`, or `TypeName`, `Type`, and `PublisherId`.
   *
   * _Required_: Conditional
   *
   * _Type_: String
   *
   * _Maximum_: `1024`
   *
   * _Pattern_: `arn:aws[A-Za-z0-9-]{0,64}:cloudformation:[A-Za-z0-9-]{1,64}::type/.+/[0-9a-zA-Z]{12,40}/.+`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  PublicTypeArn?: Value<string>;
  /**
   * Whether to automatically update the extension in this account and Region when a new _minor_ version is published by the extension publisher. Major versions released by the publisher must be manually updated.
   *
   * The default is `true`.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AutoUpdate?: Value<boolean>;
  /**
   * Specifies logging configuration information for an extension.
   *
   * _Required_: No
   *
   * _Type_: [LoggingConfig](aws-properties-cloudformation-typeactivation-loggingconfig.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  LoggingConfig?: CloudFormationTypeActivationLoggingConfig;
  /**
   * The ID of the extension publisher.
   *
   * Conditional: You must specify `PublicTypeArn`, or `TypeName`, `Type`, and `PublisherId`.
   *
   * _Required_: Conditional
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `40`
   *
   * _Pattern_: `[0-9a-zA-Z]{12,40}`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  PublisherId?: Value<string>;
  /**
   * Manually updates a previously-activated type to a new major or minor version, if available. You can also use this parameter to update the value of `AutoUpdate`.
   */
  VersionBump?: Value<string>;
  /**
   * An alias to assign to the public extension, in this account and Region. If you specify an alias for the extension, CloudFormation treats the alias as the extension type name within this account and Region. You must use the alias to refer to the extension in your templates, API calls, and CloudFormation console.
   *
   * An extension alias must be unique within a given account and Region. You can activate the same public resource multiple times in the same account and Region, using different type name aliases.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `10`
   *
   * _Maximum_: `204`
   *
   * _Pattern_: `[A-Za-z0-9]{2,64}::[A-Za-z0-9]{2,64}::[A-Za-z0-9]{2,64}(::MODULE){0,1}`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  TypeNameAlias?: Value<string>;
}

/**
 * Activates a public third-party extension, making it available for use in stack templates. For more information, see [Using public extensions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/registry-public.html) in the _ AWS CloudFormation User Guide_.
 *
 * Once you have activated a public third-party extension in your account and Region, use [SetTypeConfiguration](https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_SetTypeConfiguration.html) to specify configuration properties for the extension. For more information, see [Configuring extensions at the account level](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/registry-register.html#registry-set-configuration) in the _CloudFormation User Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-typeactivation.html}
 */
export interface CloudFormationTypeActivationResource {
  Type: 'AWS::CloudFormation::TypeActivation';
  Properties: CloudFormationTypeActivationProperties;
}
