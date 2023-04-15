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
 * Logging configuration information for a resource.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudformation-resourceversion-loggingconfig.html}
 **/
export interface CloudFormationResourceVersionLoggingConfig {
  /**
   * The Amazon CloudWatch logs group to which CloudFormation sends error logging information when invoking the type's handlers.
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
   * The ARN of the role that CloudFormation should assume when sending log entries to CloudWatch logs.
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
export interface CloudFormationResourceVersionProperties {
  /**
   * The Amazon Resource Name (ARN) of the IAM role for CloudFormation to assume when invoking the resource. If your resource calls AWS APIs in any of its handlers, you must create an _[IAM execution role](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles.html)_ that includes the necessary permissions to call those AWS APIs, and provision that execution role in your account. When CloudFormation needs to invoke the resource type handler, CloudFormation assumes this execution role to create a temporary session token, which it then passes to the resource type handler, thereby supplying your resource type with the appropriate credentials.
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
   * The name of the resource being registered.
   *
   * We recommend that resource names adhere to the following pattern: _company_or_organization_::_service_::_type_.
   *
   * The following organization namespaces are reserved and can't be used in your resource names:
   */
  TypeName: Value<string>;
  /**
   * Logging configuration information for a resource.
   *
   * _Required_: No
   *
   * _Type_: [LoggingConfig](aws-properties-cloudformation-resourceversion-loggingconfig.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  LoggingConfig?: CloudFormationResourceVersionLoggingConfig;
  /**
   * A URL to the S3 bucket containing the resource project package that contains the necessary files for the resource you want to register.
   *
   * For information on generating a schema handler package for the resource you want to register, see [submit](https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/resource-type-cli-submit.html) in the _CloudFormation CLI User Guide_.
   *
   * The user registering the resource must be able to access the package in the S3 bucket. That is, the user needs to have [GetObject](https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObject.html) permissions for the schema handler package. For more information, see [Actions, Resources, and Condition Keys for Amazon S3](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazons3.html) in the _AWS Identity and Access Management User Guide_.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `4096`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  SchemaHandlerPackage: Value<string>;
}

/**
 * Registers a resource version with the CloudFormation service. Registering a resource version makes it available for use in CloudFormation templates in your AWS account, and includes:
 *
 * For more information on how to develop resources and ready them for registration, see [Creating Resource Providers](https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/resource-types.html) in the _CloudFormation CLI User Guide_.
 *
 * You can have a maximum of 50 resource versions registered at a time. This maximum is per account and per Region.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-resourceversion.html}
 */
export interface CloudFormationResourceVersionResource {
  Type: 'AWS::CloudFormation::ResourceVersion';
  Properties: CloudFormationResourceVersionProperties;
}
