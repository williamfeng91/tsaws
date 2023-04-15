/**
 * Supported regions:
 * - ap-northeast-1 (version 119.1.0)
 * - ap-northeast-2 (version 119.1.0)
 * - ap-south-1 (version 119.1.0)
 * - ap-southeast-1 (version 119.1.0)
 * - ap-southeast-2 (version 119.1.0)
 * - eu-central-1 (version 119.1.0)
 * - eu-west-1 (version 119.1.0)
 * - eu-west-2 (version 119.1.0)
 * - us-east-1 (version 119.1.0)
 * - us-east-2 (version 119.1.0)
 * - us-west-1 (version 119.1.0)
 * - us-west-2 (version 119.1.0)
 */
import { List, Value } from '../../shared-types/dataTypes';

/**
 * Configuration settings for the Lambda execution environment on the AWS IoT Greengrass core.
 *
 * In an AWS CloudFormation template, `Execution` is a property of the [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-functiondefinitionversion-defaultconfig.html](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-functiondefinitionversion-defaultconfig.html) property type for a function definition version and the [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-functiondefinitionversion-environment.html](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-functiondefinitionversion-environment.html) property type for a function.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-functiondefinitionversion-execution.html}
 **/
export interface GreengrassFunctionDefinitionVersionExecution {
  /**
   * The containerization that the Lambda function runs in. Valid values are `GreengrassContainer` or `NoContainer`. Typically, this is `GreengrassContainer`. For more information, see [Containerization](https://docs.aws.amazon.com/greengrass/latest/developerguide/lambda-group-config.html#lambda-function-containerization) in the _AWS IoT Greengrass Version 1 Developer Guide_.
   */
  IsolationMode?: Value<string>;
  /**
   * The user and group permissions used to run the Lambda function. Typically, this is the ggc_user and ggc_group. For more information, see [Run as](https://docs.aws.amazon.com/greengrass/latest/developerguide/lambda-group-config.html#lambda-access-identity.html) in the _AWS IoT Greengrass Version 1 Developer Guide_.
   */
  RunAs?: GreengrassFunctionDefinitionVersionRunAs;
}

/**
 * The user and group permissions used to run the Lambda function. This setting overrides the default access identity that's specified for the group (by default, ggc_user and ggc_group). You can override the user, group, or both. For more information, see [Run as](https://docs.aws.amazon.com/greengrass/latest/developerguide/lambda-group-config.html#lambda-access-identity.html) in the _AWS IoT Greengrass Version 1 Developer Guide_.
 *
 * **Important**
 *
 * Running as the root user increases risks to your data and device. Do not run as root (UID/GID=0) unless your business case requires it. For more information and requirements, see [Running a Lambda Function as Root](https://docs.aws.amazon.com/greengrass/latest/developerguide/lambda-group-config.html#lambda-running-as-root).
 *
 * In an AWS CloudFormation template, `RunAs` is a property of the [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-functiondefinitionversion-execution.html](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-functiondefinitionversion-execution.html) property type.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-functiondefinitionversion-runas.html}
 **/
export interface GreengrassFunctionDefinitionVersionRunAs {
  /**
   * The user ID whose permissions are used to run the Lambda function. You can use the getent passwd command on your core device to look up the user ID.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Uid?: Value<number>;
  /**
   * The group ID whose permissions are used to run the Lambda function. You can use the getent group command on your core device to look up the group ID.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Gid?: Value<number>;
}

/**
 * The environment configuration for a Lambda function on the AWS IoT Greengrass core.
 *
 * In an AWS CloudFormation template, `Environment` is a property of the [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-functiondefinitionversion-functionconfiguration.html](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-functiondefinitionversion-functionconfiguration.html) property type.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-functiondefinitionversion-environment.html}
 **/
export interface GreengrassFunctionDefinitionVersionEnvironment {
  /**
   * Environment variables for the Lambda function.
   *
   * _Required_: No
   *
   * _Type_: Json
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Variables?: { [key: string]: any };
  /**
   * Settings for the Lambda execution environment in AWS IoT Greengrass.
   *
   * _Required_: No
   *
   * _Type_: [Execution](aws-properties-greengrass-functiondefinitionversion-execution.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Execution?: GreengrassFunctionDefinitionVersionExecution;
  /**
   * A list of the [resources](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-resourcedefinitionversion-resourceinstance.html) in the group that the function can access, with the corresponding read-only or read-write permissions. The maximum is 10 resources.
   *
   * This property applies only to Lambda functions that run in a Greengrass container.
   *
   * _Required_: No
   *
   * _Type_: List of [ResourceAccessPolicy](aws-properties-greengrass-functiondefinitionversion-resourceaccesspolicy.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ResourceAccessPolicies?: List<GreengrassFunctionDefinitionVersionResourceAccessPolicy>;
  /**
   * Indicates whether the function is allowed to access the `/sys` directory on the core device, which allows the read device information from `/sys`.
   *
   * This property applies only to Lambda functions that run in a Greengrass container.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  AccessSysfs?: Value<boolean>;
}

/**
 * The group-specific configuration settings for a Lambda function. These settings configure the function's behavior in the Greengrass group. For more information, see [Controlling Execution of Greengrass Lambda Functions by Using Group-Specific Configuration](https://docs.aws.amazon.com/greengrass/latest/developerguide/lambda-group-config.html) in the _AWS IoT Greengrass Version 1 Developer Guide_.
 *
 * In an AWS CloudFormation template, `FunctionConfiguration` is a property of the [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-functiondefinitionversion-function.html](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-functiondefinitionversion-function.html) property type.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-functiondefinitionversion-functionconfiguration.html}
 **/
export interface GreengrassFunctionDefinitionVersionFunctionConfiguration {
  /**
   * The memory size (in KB) required by the function.
   *
   * This property applies only to Lambda functions that run in a Greengrass container.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  MemorySize?: Value<number>;
  /**
   * Indicates whether the function is pinned (or _long-lived_). Pinned functions start when the core starts and process all requests in the same container. The default value is false.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Pinned?: Value<boolean>;
  /**
   * The execution arguments.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ExecArgs?: Value<string>;
  /**
   * The allowed execution time (in seconds) after which the function should terminate. For pinned functions, this timeout applies for each request.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Timeout?: Value<number>;
  /**
   * The expected encoding type of the input payload for the function. Valid values are `json` (default) and `binary`.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  EncodingType?: Value<string>;
  /**
   * The environment configuration of the function.
   *
   * _Required_: No
   *
   * _Type_: [Environment](aws-properties-greengrass-functiondefinitionversion-environment.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Environment?: GreengrassFunctionDefinitionVersionEnvironment;
  /**
   * The name of the function executable.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Executable?: Value<string>;
}

/**
 * The default configuration that applies to all Lambda functions in the function definition version. Individual Lambda functions can override these settings.
 *
 * In an AWS CloudFormation template, `DefaultConfig` is a property of the [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-functiondefinitionversion.html](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-functiondefinitionversion.html) resource.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-functiondefinitionversion-defaultconfig.html}
 **/
export interface GreengrassFunctionDefinitionVersionDefaultConfig {
  /**
   * Configuration settings for the Lambda execution environment on the AWS IoT Greengrass core.
   *
   * _Required_: Yes
   *
   * _Type_: [Execution](aws-properties-greengrass-functiondefinitionversion-execution.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Execution: GreengrassFunctionDefinitionVersionExecution;
}

/**
 * A function is a Lambda function that's referenced from an AWS IoT Greengrass group. The function is deployed to a Greengrass core where it runs locally. For more information, see [Run Lambda Functions on the AWS IoT Greengrass Core](https://docs.aws.amazon.com/greengrass/latest/developerguide/lambda-functions.html) in the _AWS IoT Greengrass Version 1 Developer Guide_.
 *
 * In an AWS CloudFormation template, the `Functions` property of the [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-functiondefinitionversion.html](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-functiondefinitionversion.html) resource contains a list of `Function` property types.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-functiondefinitionversion-function.html}
 **/
export interface GreengrassFunctionDefinitionVersionFunction {
  /**
   * The Amazon Resource Name (ARN) of the alias (recommended) or version of the referenced Lambda function.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  FunctionArn: Value<string>;
  /**
   * The group-specific settings of the Lambda function. These settings configure the function's behavior in the Greengrass group.
   *
   * _Required_: Yes
   *
   * _Type_: [FunctionConfiguration](aws-properties-greengrass-functiondefinitionversion-functionconfiguration.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  FunctionConfiguration: GreengrassFunctionDefinitionVersionFunctionConfiguration;
  /**
   * A descriptive or arbitrary ID for the function. This value must be unique within the function definition version. Maximum length is 128 characters with pattern `[a-zA-Z0-9:_-]+`.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Id: Value<string>;
}

/**
 * A list of the [resources](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-resourcedefinitionversion-resourceinstance.html) in the group that the function can access, with the corresponding read-only or read-write permissions. The maximum is 10 resources.
 *
 * **Note**
 *
 * This property applies only to Lambda functions that run in a Greengrass container.
 *
 * In an AWS CloudFormation template, `ResourceAccessPolicy` is a property of the [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-functiondefinitionversion-environment.html](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-functiondefinitionversion-environment.html) property type.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-functiondefinitionversion-resourceaccesspolicy.html}
 **/
export interface GreengrassFunctionDefinitionVersionResourceAccessPolicy {
  /**
   * The ID of the resource. This ID is assigned to the resource when you create the resource definition.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ResourceId: Value<string>;
  /**
   * The read-only or read-write access that the Lambda function has to the resource. Valid values are `ro` or `rw`.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Permission?: Value<string>;
}
export interface GreengrassFunctionDefinitionVersionProperties {
  /**
   * The default configuration that applies to all Lambda functions in the group. Individual Lambda functions can override these settings.
   *
   * _Required_: No
   *
   * _Type_: [DefaultConfig](aws-properties-greengrass-functiondefinitionversion-defaultconfig.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  DefaultConfig?: GreengrassFunctionDefinitionVersionDefaultConfig;
  /**
   * The functions in this version.
   *
   * _Required_: Yes
   *
   * _Type_: List of [Function](aws-properties-greengrass-functiondefinitionversion-function.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Functions: List<GreengrassFunctionDefinitionVersionFunction>;
  /**
   * The ID of the function definition associated with this version. This value is a GUID.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  FunctionDefinitionId: Value<string>;
}

/**
 * The `AWS::Greengrass::FunctionDefinitionVersion` resource represents a function definition version for AWS IoT Greengrass. A function definition version contains contain a list of functions.
 *
 * **Note**
 *
 * To create a function definition version, you must specify the ID of the function definition that you want to associate with the version. For information about creating a function definition, see [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-functiondefinition.html](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-functiondefinition.html).
 *
 * After you create a function definition version that contains the functions you want to deploy, you must add it to your group version. For more information, see [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-group.html](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-group.html).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-functiondefinitionversion.html}
 */
export interface GreengrassFunctionDefinitionVersionResource {
  Type: 'AWS::Greengrass::FunctionDefinitionVersion';
  Properties: GreengrassFunctionDefinitionVersionProperties;
}
