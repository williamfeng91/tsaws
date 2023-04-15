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
 * A logger represents logging settings for the AWS IoT Greengrass group, which can be stored in CloudWatch and the local file system of your core device. All log entries include a timestamp, log level, and information about the event. For more information, see [Monitoring with AWS IoT Greengrass Logs](https://docs.aws.amazon.com/greengrass/latest/developerguide/greengrass-logs-overview.html) in the _AWS IoT Greengrass Version 1 Developer Guide_.
 *
 * In an AWS CloudFormation template, the `Loggers` property of the [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-loggerdefinition-loggerdefinitionversion.html](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-loggerdefinition-loggerdefinitionversion.html) property type contains a list of `Logger` property types.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-loggerdefinition-logger.html}
 **/
export interface GreengrassLoggerDefinitionLogger {
  /**
   * The amount of file space (in KB) to use when writing logs to the local file system. This property does not apply for CloudWatch Logs.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Space?: Value<number>;
  /**
   * The storage mechanism for log events. Valid values are `FileSystem` or `AWSCloudWatch`. When `AWSCloudWatch` is used, log events are sent to CloudWatch Logs. When `FileSystem` is used, log events are stored on the local file system.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Type: Value<string>;
  /**
   * The log-level threshold. Log events below this threshold are filtered out and aren't stored. Valid values are `DEBUG`, `INFO` (recommended), `WARN`, `ERROR`, or `FATAL`.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Level: Value<string>;
  /**
   * A descriptive or arbitrary ID for the logger. This value must be unique within the logger definition version. Maximum length is 128 characters with pattern `[a-zA-Z0-9:_-]+`.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Id: Value<string>;
  /**
   * The source of the log event. Valid values are `GreengrassSystem` or `Lambda`. When `GreengrassSystem` is used, events from Greengrass system components are logged. When `Lambda` is used, events from user-defined Lambda functions are logged.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Component: Value<string>;
}

/**
 * A logger definition version contains a list of [loggers](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-loggerdefinition-logger.html).
 *
 * **Note**
 *
 * After you create a logger definition version that contains the loggers you want to deploy, you must add it to your group version. For more information, see [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-group.html](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-group.html).
 *
 * In an AWS CloudFormation template, `LoggerDefinitionVersion` is the property type of the `InitialVersion` property in the [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-loggerdefinition.html](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-loggerdefinition.html) resource.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-loggerdefinition-loggerdefinitionversion.html}
 **/
export interface GreengrassLoggerDefinitionLoggerDefinitionVersion {
  /**
   * The loggers in this version.
   *
   * _Required_: Yes
   *
   * _Type_: List of [Logger](aws-properties-greengrass-loggerdefinition-logger.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Loggers: List<GreengrassLoggerDefinitionLogger>;
}
export interface GreengrassLoggerDefinitionProperties {
  /**
   * The logger definition version to include when the logger definition is created. A logger definition version contains a list of [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-loggerdefinition-logger.html](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-loggerdefinition-logger.html) property types.
   *
   * To associate a logger definition version after the logger definition is created, create an [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-loggerdefinitionversion.html](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-loggerdefinitionversion.html) resource and specify the ID of this logger definition.
   *
   * _Required_: No
   *
   * _Type_: [LoggerDefinitionVersion](aws-properties-greengrass-loggerdefinition-loggerdefinitionversion.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  InitialVersion?: GreengrassLoggerDefinitionLoggerDefinitionVersion;
  /**
   * Application-specific metadata to attach to the logger definition. You can use tags in IAM policies to control access to AWS IoT Greengrass resources. You can also use tags to categorize your resources. For more information, see [Tagging Your AWS IoT Greengrass Resources](https://docs.aws.amazon.com/greengrass/latest/developerguide/tagging.html) in the _AWS IoT Greengrass Version 1 Developer Guide_.
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
   * The name of the logger definition.
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
 * The `AWS::Greengrass::LoggerDefinition` resource represents a logger definition for AWS IoT Greengrass. Logger definitions are used to organize your logger definition versions.
 *
 * Logger definitions can reference multiple logger definition versions. All logger definition versions must be associated with a logger definition. Each logger definition version can contain one or more loggers.
 *
 * **Note**
 *
 * When you create a logger definition, you can optionally include an initial logger definition version. To associate a logger definition version later, create an [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-loggerdefinitionversion.html](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-loggerdefinitionversion.html) resource and specify the ID of this logger definition.
 *
 * After you create the logger definition version that contains the loggers you want to deploy, you must add it to your group version. For more information, see [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-group.html](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-group.html).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-loggerdefinition.html}
 */
export interface GreengrassLoggerDefinitionResource {
  Type: 'AWS::Greengrass::LoggerDefinition';
  Properties: GreengrassLoggerDefinitionProperties;
}
