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
import { ResourceTag } from '../../shared-types/resource';

/**
 * The default configuration that applies to all Lambda functions in the function definition version. Individual Lambda functions can override these settings.
 *
 * In an AWS CloudFormation template, `DefaultConfig` is a property of the [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-functiondefinition-functiondefinitionversion.html](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-functiondefinition-functiondefinitionversion.html) property type.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-functiondefinition-defaultconfig.html}
 **/
export interface GreengrassFunctionDefinitionDefaultConfig {
  /**
   * Configuration settings for the Lambda execution environment on the AWS IoT Greengrass core.
   *
   * _Required_: Yes
   *
   * _Type_: [Execution](aws-properties-greengrass-functiondefinition-execution.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Execution: GreengrassFunctionDefinitionExecution;
}

/**
 * Configuration settings for the Lambda execution environment on the AWS IoT Greengrass core.
 *
 * In an AWS CloudFormation template, `Execution` is a property of the [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-functiondefinition-defaultconfig.html](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-functiondefinition-defaultconfig.html) property type for a function definition version and the [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-functiondefinition-environment.html](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-functiondefinition-environment.html) property type for a function.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-functiondefinition-execution.html}
 **/
export interface GreengrassFunctionDefinitionExecution {
  /**
   * The containerization that the Lambda function runs in. Valid values are `GreengrassContainer` or `NoContainer`. Typically, this is `GreengrassContainer`. For more information, see [Containerization](https://docs.aws.amazon.com/greengrass/latest/developerguide/lambda-group-config.html#lambda-function-containerization) in the _AWS IoT Greengrass Version 1 Developer Guide_.
   */
  IsolationMode?: Value<string>;
  /**
   * The user and group permissions used to run the Lambda function. Typically, this is the ggc_user and ggc_group. For more information, see [Run as](https://docs.aws.amazon.com/greengrass/latest/developerguide/lambda-group-config.html#lambda-access-identity.html) in the _AWS IoT Greengrass Version 1 Developer Guide_.
   */
  RunAs?: GreengrassFunctionDefinitionRunAs;
}

/**
 * A function is a Lambda function that's referenced from an AWS IoT Greengrass group. The function is deployed to a Greengrass core where it runs locally. For more information, see [Run Lambda Functions on the AWS IoT Greengrass Core](https://docs.aws.amazon.com/greengrass/latest/developerguide/lambda-functions.html) in the _AWS IoT Greengrass Version 1 Developer Guide_.
 *
 * In an AWS CloudFormation template, the `Functions` property of the [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-functiondefinition-functiondefinitionversion.html](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-functiondefinition-functiondefinitionversion.html) property type contains a list of `Function` property types.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-functiondefinition-function.html}
 **/
export interface GreengrassFunctionDefinitionFunction {
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
   * _Type_: [FunctionConfiguration](aws-properties-greengrass-functiondefinition-functionconfiguration.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  FunctionConfiguration: GreengrassFunctionDefinitionFunctionConfiguration;
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
 * In an AWS CloudFormation template, `ResourceAccessPolicy` is a property of the [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-functiondefinition-environment.html](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-functiondefinition-environment.html) property type.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-functiondefinition-resourceaccesspolicy.html}
 **/
export interface GreengrassFunctionDefinitionResourceAccessPolicy {
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

/**
 * The group-specific configuration settings for a Lambda function. These settings configure the function's behavior in the Greengrass group. For more information, see [Controlling Execution of Greengrass Lambda Functions by Using Group-Specific Configuration](https://docs.aws.amazon.com/greengrass/latest/developerguide/lambda-group-config.html) in the _AWS IoT Greengrass Version 1 Developer Guide_.
 *
 * In an AWS CloudFormation template, `FunctionConfiguration` is a property of the [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-functiondefinition-function.html](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-functiondefinition-function.html) property type.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-functiondefinition-functionconfiguration.html}
 **/
export interface GreengrassFunctionDefinitionFunctionConfiguration {
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
   * _Type_: [Environment](aws-properties-greengrass-functiondefinition-environment.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Environment?: GreengrassFunctionDefinitionEnvironment;
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
 * The environment configuration for a Lambda function on the AWS IoT Greengrass core.
 *
 * In an AWS CloudFormation template, `Environment` is a property of the [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-functiondefinition-functionconfiguration.html](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-functiondefinition-functionconfiguration.html) property type.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-functiondefinition-environment.html}
 **/
export interface GreengrassFunctionDefinitionEnvironment {
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
   * _Type_: [Execution](aws-properties-greengrass-functiondefinition-execution.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Execution?: GreengrassFunctionDefinitionExecution;
  /**
   * A list of the [resources](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-resourcedefinitionversion-resourceinstance.html) in the group that the function can access, with the corresponding read-only or read-write permissions. The maximum is 10 resources.
   *
   * This property applies only for Lambda functions that run in a Greengrass container.
   *
   * _Required_: No
   *
   * _Type_: List of [ResourceAccessPolicy](aws-properties-greengrass-functiondefinition-resourceaccesspolicy.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ResourceAccessPolicies?: List<GreengrassFunctionDefinitionResourceAccessPolicy>;
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
 * A function definition version contains a list of functions.
 *
 * **Note**
 *
 * After you create a function definition version that contains the functions you want to deploy, you must add it to your group version. For more information, see [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-group.html](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-group.html).
 *
 * In an AWS CloudFormation template, `FunctionDefinitionVersion` is the property type of the `InitialVersion` property in the [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-functiondefinition.html](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-functiondefinition.html) resource.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-functiondefinition-functiondefinitionversion.html}
 **/
export interface GreengrassFunctionDefinitionFunctionDefinitionVersion {
  /**
   * The default configuration that applies to all Lambda functions in the group. Individual Lambda functions can override these settings.
   *
   * _Required_: No
   *
   * _Type_: [DefaultConfig](aws-properties-greengrass-functiondefinition-defaultconfig.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  DefaultConfig?: GreengrassFunctionDefinitionDefaultConfig;
  /**
   * The functions in this version.
   *
   * _Required_: Yes
   *
   * _Type_: List of [Function](aws-properties-greengrass-functiondefinition-function.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Functions: List<GreengrassFunctionDefinitionFunction>;
}

/**
 * The access identity whose permissions are used to run the Lambda function. This setting overrides the default access identity that's specified for the group (by default, ggc_user and ggc_group). You can override the user, group, or both. For more information, see [Run as](https://docs.aws.amazon.com/greengrass/latest/developerguide/lambda-group-config.html#lambda-access-identity.html) in the _AWS IoT Greengrass Version 1 Developer Guide_.
 *
 * **Important**
 *
 * Running as the root user increases risks to your data and device. Do not run as root (UID/GID=0) unless your business case requires it. For more information and requirements, see [Running a Lambda Function as Root](https://docs.aws.amazon.com/greengrass/latest/developerguide/lambda-group-config.html#lambda-running-as-root).
 *
 * In an AWS CloudFormation template, `RunAs` is a property of the [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-functiondefinition-execution.html](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-functiondefinition-execution.html) property type.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-functiondefinition-runas.html}
 **/
export interface GreengrassFunctionDefinitionRunAs {
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
export interface GreengrassFunctionDefinitionProperties {
  /**
   * The function definition version to include when the function definition is created. A function definition version contains a list of [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-functiondefinition-function.html](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-functiondefinition-function.html) property types.
   *
   * To associate a function definition version after the function definition is created, create an [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-functiondefinitionversion.html](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-functiondefinitionversion.html) resource and specify the ID of this function definition.
   *
   * _Required_: No
   *
   * _Type_: [FunctionDefinitionVersion](aws-properties-greengrass-functiondefinition-functiondefinitionversion.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  InitialVersion?: GreengrassFunctionDefinitionFunctionDefinitionVersion;
  /**
   * Application-specific metadata to attach to the function definition. You can use tags in IAM policies to control access to AWS IoT Greengrass resources. You can also use tags to categorize your resources. For more information, see [Tagging Your AWS IoT Greengrass Resources](https://docs.aws.amazon.com/greengrass/latest/developerguide/tagging.html) in the _AWS IoT Greengrass Version 1 Developer Guide_.
   *
   * This `Json` property type is processed as a map of key-value pairs. It uses the following format, which is different from most `Tags` implementations in AWS CloudFormation templates.
   *
   * _Required_: No
   *
   * _Type_: Json
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Tags?: { [key: string]: any };
  /**
   * The name of the function definition.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Name: Value<string>;
}

/**
 * The `AWS::Greengrass::FunctionDefinition` resource represents a function definition for AWS IoT Greengrass. Function definitions are used to organize your function definition versions.
 *
 * Function definitions can reference multiple function definition versions. All function definition versions must be associated with a function definition. Each function definition version can contain one or more functions.
 *
 * **Note**
 *
 * When you create a function definition, you can optionally include an initial function definition version. To associate a function definition version later, create an [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-functiondefinitionversion.html](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-functiondefinitionversion.html) resource and specify the ID of this function definition.
 *
 * After you create the function definition version that contains the functions you want to deploy, you must add it to your group version. For more information, see [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-group.html](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-group.html).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-functiondefinition.html}
 */
export interface GreengrassFunctionDefinitionResource {
  Type: 'AWS::Greengrass::FunctionDefinition';
  Properties: GreengrassFunctionDefinitionProperties;
}
