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
 * The `LoggingConfig` property type specifies logging configuration information for an extension.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudformation-hookversion-loggingconfig.html}
 **/
export interface CloudFormationHookVersionLoggingConfig {
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
export interface CloudFormationHookVersionProperties {
  /**
   * The Amazon Resource Name (ARN) of the task execution role that grants the hook permission.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ExecutionRoleArn?: Value<string>;
  /**
   * The unique name for your hook. Specifies a three-part namespace for your hook, with a recommended pattern of `Organization::Service::Hook`.
   *
   * The following organization namespaces are reserved and can't be used in your hook type names:
   */
  TypeName: Value<string>;
  /**
   * Contains logging configuration information for an extension.
   *
   * _Required_: No
   *
   * _Type_: [LoggingConfig](aws-properties-cloudformation-hookversion-loggingconfig.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  LoggingConfig?: CloudFormationHookVersionLoggingConfig;
  /**
   * A URL to the Amazon S3 bucket containing the hook project package that contains the necessary files for the hook you want to register.
   *
   * For information on generating a schema handler package for the resource you want to register, see [submit](https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/resource-type-cli-submit.html) in the _CloudFormation CLI User Guide for Extension Development_.
   *
   * The user registering the resource must be able to access the package in the S3 bucket. That's, the user must have [GetObject](https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObject.html) permissions for the schema handler package. For more information, see [Actions, Resources, and Condition Keys for Amazon S3](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazons3.html) in the _AWS Identity and Access Management User Guide_.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  SchemaHandlerPackage: Value<string>;
}

/**
 * The `HookVersion` resource publishes new or first hook version to the AWS CloudFormation registry.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-hookversion.html}
 */
export interface CloudFormationHookVersionResource {
  Type: 'AWS::CloudFormation::HookVersion';
  Properties: CloudFormationHookVersionProperties;
}
