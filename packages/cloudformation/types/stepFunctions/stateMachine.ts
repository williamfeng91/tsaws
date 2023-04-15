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
 * Defines a destination for `LoggingConfiguration`.
 *
 * **Note**
 *
 * For more information on logging with `EXPRESS` workflows, see [Logging Express Workflows Using CloudWatch Logs](https://docs.aws.amazon.com/step-functions/latest/dg/cw-logs.html).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-stepfunctions-statemachine-logdestination.html}
 **/
export interface StepFunctionsStateMachineLogDestination {
  /**
   * An object describing a CloudWatch log group. For more information, see [AWS::Logs::LogGroup](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-loggroup.html) in the AWS CloudFormation User Guide.
   *
   * _Required_: No
   *
   * _Type_: [CloudWatchLogsLogGroup](aws-properties-stepfunctions-statemachine-cloudwatchlogsloggroup.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CloudWatchLogsLogGroup?: StepFunctionsStateMachineCloudWatchLogsLogGroup;
}

/**
 * The `TagsEntry` property specifies _tags_ to identify a state machine.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-stepfunctions-statemachine-tagsentry.html}
 **/
export interface StepFunctionsStateMachineTagsEntry {
  /**
   * The `value` for a key-value pair in a tag entry.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Value: Value<string>;
  /**
   * The `key` for a key-value pair in a tag entry.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Key: Value<string>;
}

/**
 * Defines what execution history events are logged and where they are logged.
 *
 * **Note**
 *
 * By default, the `level` is set to `OFF`. For more information see [Log Levels](https://docs.aws.amazon.com/step-functions/latest/dg/cloudwatch-log-level.html) in the AWS Step Functions User Guide.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-stepfunctions-statemachine-loggingconfiguration.html}
 **/
export interface StepFunctionsStateMachineLoggingConfiguration {
  /**
   * Determines whether execution data is included in your log. When set to `false`, data is excluded.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  IncludeExecutionData?: Value<boolean>;
  /**
   * An array of objects that describes where your execution history events will be logged. Limited to size 1. Required, if your log level is not set to `OFF`.
   *
   * _Required_: No
   *
   * _Type_: List of [LogDestination](aws-properties-stepfunctions-statemachine-logdestination.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Destinations?: List<StepFunctionsStateMachineLogDestination>;
  /**
   * Defines which category of execution history events are logged.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Level?: Value<string>;
}

/**
 * Defines a CloudWatch log group.
 *
 * **Note**
 *
 * For more information see [Standard Versus Express Workflows](https://docs.aws.amazon.com/step-functions/latest/dg/concepts-standard-vs-express.html) in the AWS Step Functions Developer Guide.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-stepfunctions-statemachine-cloudwatchlogsloggroup.html}
 **/
export interface StepFunctionsStateMachineCloudWatchLogsLogGroup {
  /**
   * The ARN of the the CloudWatch log group to which you want your logs emitted to. The ARN must end with `:*`
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  LogGroupArn?: Value<string>;
}

/**
 * Selects whether or not the state machine's AWS X-Ray tracing is enabled. To configure your state machine to send trace data to X-Ray, set `Enabled` to `true`.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-stepfunctions-statemachine-tracingconfiguration.html}
 **/
export interface StepFunctionsStateMachineTracingConfiguration {
  /**
   * When set to `true`, X-Ray tracing is enabled.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Enabled?: Value<boolean>;
}

/**
 * Defines the S3 bucket location where a state machine definition is stored. The state machine definition must be a JSON or YAML file.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-stepfunctions-statemachine-s3location.html}
 **/
export interface StepFunctionsStateMachineS3Location {
  /**
   * The name of the S3 bucket where the state machine definition JSON or YAML file is stored.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Bucket: Value<string>;
  /**
   * For versioning-enabled buckets, a specific version of the state machine definition.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Version?: Value<string>;
  /**
   * The name of the state machine definition file (Amazon S3 object name).
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Key: Value<string>;
}
export interface StepFunctionsStateMachineProperties {
  /**
   * The Amazon States Language definition of the state machine. The state machine definition must be in JSON. See [Amazon States Language](https://docs.aws.amazon.com/step-functions/latest/dg/concepts-amazon-states-language.html).
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DefinitionString?: Value<string>;
  /**
   * Defines what execution history events are logged and where they are logged.
   *
   * By default, the `level` is set to `OFF`. For more information see [Log Levels](https://docs.aws.amazon.com/step-functions/latest/dg/cloudwatch-log-level.html) in the AWS Step Functions User Guide.
   *
   * _Required_: No
   *
   * _Type_: [LoggingConfiguration](aws-properties-stepfunctions-statemachine-loggingconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  LoggingConfiguration?: StepFunctionsStateMachineLoggingConfiguration;
  /**
   * A map (string to string) that specifies the mappings for placeholder variables in the state machine definition. This enables the customer to inject values obtained at runtime, for example from intrinsic functions, in the state machine definition. Variables can be template parameter names, resource logical IDs, resource attributes, or a variable in a key-value map.
   *
   * _Required_: No
   *
   * _Type_: Map of Json
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DefinitionSubstitutions?: { [key: string]: { [key: string]: any } };
  /**
   * The Amazon States Language definition of the state machine. The state machine definition must be in JSON or YAML, and the format of the object must match the format of your AWS Step Functions template file. See [Amazon States Language](https://docs.aws.amazon.com/step-functions/latest/dg/concepts-amazon-states-language.html).
   *
   * _Required_: No
   *
   * _Type_: Json
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Definition?: { [key: string]: any };
  /**
   * The name of the S3 bucket where the state machine definition is stored. The state machine definition must be a JSON or YAML file.
   *
   * _Required_: No
   *
   * _Type_: [S3Location](aws-properties-stepfunctions-statemachine-s3location.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DefinitionS3Location?: StepFunctionsStateMachineS3Location;
  /**
   * The name of the state machine.
   *
   * A name must _not_ contain:
   */
  StateMachineName?: Value<string>;
  /**
   * The Amazon Resource Name (ARN) of the IAM role to use for this state machine.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RoleArn: Value<string>;
  /**
   * The list of tags to add to a resource.
   *
   * Tags may only contain Unicode letters, digits, white space, or these symbols: `_ . : / = + - @`.
   *
   * _Required_: No
   *
   * _Type_: List of [TagsEntry](aws-properties-stepfunctions-statemachine-tagsentry.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Tags?: List<StepFunctionsStateMachineTagsEntry>;
  /**
   * Determines whether a `STANDARD` or `EXPRESS` state machine is created. The default is `STANDARD`. You cannot update the `type` of a state machine once it has been created. For more information on `STANDARD` and `EXPRESS` workflows, see [Standard Versus Express Workflows](https://docs.aws.amazon.com/step-functions/latest/dg/concepts-standard-vs-express.html) in the AWS Step Functions Developer Guide.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  StateMachineType?: Value<string>;
  /**
   * Selects whether or not the state machine's AWS X-Ray tracing is enabled.
   *
   * _Required_: No
   *
   * _Type_: [TracingConfiguration](aws-properties-stepfunctions-statemachine-tracingconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TracingConfiguration?: StepFunctionsStateMachineTracingConfiguration;
}

/**
 * Provisions a state machine. A state machine consists of a collection of states that can do work (`Task` states), determine to which states to transition next (`Choice` states), stop an execution with an error (`Fail` states), and so on. State machines are specified using a JSON-based, structured language.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-stepfunctions-statemachine.html}
 */
export interface StepFunctionsStateMachineResource {
  Type: 'AWS::StepFunctions::StateMachine';
  Properties: StepFunctionsStateMachineProperties;
}
