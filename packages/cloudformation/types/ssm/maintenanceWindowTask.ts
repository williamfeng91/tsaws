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
 * The `NotificationConfig` property type specifies configurations for sending notifications for a maintenance window task in AWS Systems Manager.
 *
 * `NotificationConfig` is a property of the [MaintenanceWindowRunCommandParameters](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssm-maintenancewindowtask-maintenancewindowruncommandparameters.html) property type.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssm-maintenancewindowtask-notificationconfig.html}
 **/
export interface SSMMaintenanceWindowTaskNotificationConfig {
  /**
   * An Amazon Resource Name (ARN) for an Amazon Simple Notification Service (Amazon SNS) topic. Run Command pushes notifications about command status changes to this topic.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  NotificationArn: Value<string>;
  /**
   * The notification type.
   */
  NotificationType?: Value<string>;
  /**
   * The different events that you can receive notifications for. These events include the following: `All` (events), `InProgress`, `Success`, `TimedOut`, `Cancelled`, `Failed`. To learn more about these events, see [Configuring Amazon SNS Notifications for AWS Systems Manager](https://docs.aws.amazon.com/systems-manager/latest/userguide/monitoring-sns-notifications.html) in the _AWS Systems Manager User Guide_.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  NotificationEvents?: List<Value<string>>;
}

/**
 * The `MaintenanceWindowAutomationParameters` property type specifies the parameters for an `AUTOMATION` task type for a maintenance window task in AWS Systems Manager.
 *
 * `MaintenanceWindowAutomationParameters` is a property of the [TaskInvocationParameters](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssm-maintenancewindowtask-taskinvocationparameters.html) property type.
 *
 * For information about available parameters in Automation runbooks, you can view the content of the runbook itself in the Systems Manager console. For information, see [View runbook content](https://docs.aws.amazon.com/systems-manager/latest/userguide/automation-documents-reference-details.html#view-automation-json) in the _AWS Systems Manager User Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssm-maintenancewindowtask-maintenancewindowautomationparameters.html}
 **/
export interface SSMMaintenanceWindowTaskMaintenanceWindowAutomationParameters {
  /**
   * The parameters for the AUTOMATION task.
   *
   * _Required_: No
   *
   * _Type_: Json
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Parameters?: { [key: string]: any };
  /**
   * The version of an Automation runbook to use during task execution.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Pattern_: `([$]LATEST|[$]DEFAULT|^[1-9][0-9]*$)`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DocumentVersion?: Value<string>;
}

/**
 * The `TaskInvocationParameters` property type specifies the task execution parameters for a maintenance window task in AWS Systems Manager.
 *
 * `TaskInvocationParameters` is a property of the [AWS::SSM::MaintenanceWindowTask](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-maintenancewindowtask.html) property type.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssm-maintenancewindowtask-taskinvocationparameters.html}
 **/
export interface SSMMaintenanceWindowTaskTaskInvocationParameters {
  /**
   * The parameters for a `RUN_COMMAND` task type.
   *
   * _Required_: No
   *
   * _Type_: [MaintenanceWindowRunCommandParameters](aws-properties-ssm-maintenancewindowtask-maintenancewindowruncommandparameters.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MaintenanceWindowRunCommandParameters?: SSMMaintenanceWindowTaskMaintenanceWindowRunCommandParameters;
  /**
   * The parameters for an `AUTOMATION` task type.
   *
   * _Required_: No
   *
   * _Type_: [MaintenanceWindowAutomationParameters](aws-properties-ssm-maintenancewindowtask-maintenancewindowautomationparameters.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MaintenanceWindowAutomationParameters?: SSMMaintenanceWindowTaskMaintenanceWindowAutomationParameters;
  /**
   * The parameters for a `STEP_FUNCTIONS` task type.
   *
   * _Required_: No
   *
   * _Type_: [MaintenanceWindowStepFunctionsParameters](aws-properties-ssm-maintenancewindowtask-maintenancewindowstepfunctionsparameters.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MaintenanceWindowStepFunctionsParameters?: SSMMaintenanceWindowTaskMaintenanceWindowStepFunctionsParameters;
  /**
   * The parameters for a `LAMBDA` task type.
   *
   * _Required_: No
   *
   * _Type_: [MaintenanceWindowLambdaParameters](aws-properties-ssm-maintenancewindowtask-maintenancewindowlambdaparameters.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MaintenanceWindowLambdaParameters?: SSMMaintenanceWindowTaskMaintenanceWindowLambdaParameters;
}

/**
 * The `MaintenanceWindowRunCommandParameters` property type specifies the parameters for a `RUN_COMMAND` task type for a maintenance window task in AWS Systems Manager. This means that these parameters are the same as those for the `SendCommand` API call. For more information about `SendCommand` parameters, see [SendCommand](https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_SendCommand.html) in the _AWS Systems Manager API Reference_.
 *
 * For information about available parameters in SSM Command documents, you can view the content of the document itself in the Systems Manager console. For information, see [Viewing SSM command document content](https://docs.aws.amazon.com/systems-manager/latest/userguide/viewing-ssm-document-content.html) in the _AWS Systems Manager User Guide_.
 *
 * `MaintenanceWindowRunCommandParameters` is a property of the [TaskInvocationParameters](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssm-maintenancewindowtask-taskinvocationparameters.html) property type.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssm-maintenancewindowtask-maintenancewindowruncommandparameters.html}
 **/
export interface SSMMaintenanceWindowTaskMaintenanceWindowRunCommandParameters {
  /**
   * If this time is reached and the command hasn't already started running, it doesn't run.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Minimum_: `30`
   *
   * _Maximum_: `2592000`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TimeoutSeconds?: Value<number>;
  /**
   * Information about the command or commands to run.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Maximum_: `100`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Comment?: Value<string>;
  /**
   * The S3 bucket subfolder.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Maximum_: `500`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  OutputS3KeyPrefix?: Value<string>;
  /**
   * The parameters for the `RUN_COMMAND` task execution.
   *
   * The supported parameters are the same as those for the `SendCommand` API call. For more information, see [SendCommand](https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_SendCommand.html) in the _AWS Systems Manager API Reference_.
   *
   * _Required_: No
   *
   * _Type_: Json
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Parameters?: { [key: string]: any };
  /**
   * Configuration options for sending command output to Amazon CloudWatch Logs.
   *
   * _Required_: No
   *
   * _Type_: [CloudWatchOutputConfig](aws-properties-ssm-maintenancewindowtask-cloudwatchoutputconfig.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CloudWatchOutputConfig?: SSMMaintenanceWindowTaskCloudWatchOutputConfig;
  /**
   * The SHA-256 or SHA-1 hash type. SHA-1 hashes are deprecated.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `Sha1 | Sha256`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DocumentHashType?: Value<string>;
  /**
   * The Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) service role to use to publish Amazon Simple Notification Service (Amazon SNS) notifications for maintenance window Run Command tasks.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ServiceRoleArn?: Value<string>;
  /**
   * Configurations for sending notifications about command status changes on a per-managed node basis.
   *
   * _Required_: No
   *
   * _Type_: [NotificationConfig](aws-properties-ssm-maintenancewindowtask-notificationconfig.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  NotificationConfig?: SSMMaintenanceWindowTaskNotificationConfig;
  /**
   * The AWS Systems Manager document (SSM document) version to use in the request. You can specify `$DEFAULT`, `$LATEST`, or a specific version number. If you run commands by using the AWS CLI, then you must escape the first two options by using a backslash. If you specify a version number, then you don't need to use the backslash. For example:
   *
   * `--document-version "$DEFAULT"`
   *
   * `--document-version "$LATEST"`
   *
   * `--document-version "3"`
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Pattern_: `([$]LATEST|[$]DEFAULT|^[1-9][0-9]*$)`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DocumentVersion?: Value<string>;
  /**
   * The name of the Amazon Simple Storage Service (Amazon S3) bucket.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `3`
   *
   * _Maximum_: `63`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  OutputS3BucketName?: Value<string>;
  /**
   * The SHA-256 or SHA-1 hash created by the system when the document was created. SHA-1 hashes have been deprecated.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Maximum_: `256`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DocumentHash?: Value<string>;
}

/**
 * The `LoggingInfo` property type specifies information about the Amazon S3 bucket to write instance-level logs to.
 *
 * `LoggingInfo` is a property of the [AWS::SSM::MaintenanceWindowTask](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-maintenancewindowtask.html) resource.
 *
 * **Note**
 *
 * `LoggingInfo` has been deprecated. To specify an Amazon S3 bucket to contain logs, instead use the `OutputS3BucketName` and `OutputS3KeyPrefix` options in the `TaskInvocationParameters` structure. For information about how Systems Manager handles these options for the supported maintenance window task types, see [AWS::SSM::MaintenanceWindowTask MaintenanceWindowRunCommandParameters](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssm-maintenancewindowtask-maintenancewindowruncommandparameters.html).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssm-maintenancewindowtask-logginginfo.html}
 **/
export interface SSMMaintenanceWindowTaskLoggingInfo {
  /**
   * The name of an S3 bucket where execution logs are stored.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `3`
   *
   * _Maximum_: `63`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  S3Bucket: Value<string>;
  /**
   * The AWS Region where the S3 bucket is located.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `3`
   *
   * _Maximum_: `20`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Region: Value<string>;
  /**
   * The Amazon S3 bucket subfolder.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Maximum_: `500`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  S3Prefix?: Value<string>;
}

/**
 * The `Target` property type specifies targets (either instances or window target IDs). You specify instances by using `Key=InstanceIds,Values=<instanceid1>,<instanceid2>`. You specify window target IDs using `Key=WindowTargetIds,Values=<window-target-id-1>,<window-target-id-2>` for a maintenance window task in AWS Systems Manager.
 *
 * `Target` is a property of the [AWS::SSM::MaintenanceWindowTask](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-maintenancewindowtask.html) property type.
 *
 * **Note**
 *
 * To use `resource-groups:Name` as the key for a maintenance window target, specify the resource group as a `AWS::SSM::MaintenanceWindowTarget` type, and use the `Ref` function to specify the target for `AWS::SSM::MaintenanceWindowTask`. For an example, see **Create a Run Command task that targets instances using a resource group name** in [AWS::SSM::MaintenanceWindowTask Examples](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-maintenancewindowtask.html#aws-resource-ssm-maintenancewindowtask--examples).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssm-maintenancewindowtask-target.html}
 **/
export interface SSMMaintenanceWindowTaskTarget {
  /**
   * User-defined criteria that maps to `Key`. For example, if you specify `InstanceIds`, you can specify `i-1234567890abcdef0,i-9876543210abcdef0` to run a command on two EC2 instances. For more information about how to target instances within a maintenance window task, see [About 'register-task-with-maintenance-window' Options and Values](https://docs.aws.amazon.com/systems-manager/latest/userguide/register-tasks-options.html) in the _AWS Systems Manager User Guide_.
   *
   * _Required_: Yes
   *
   * _Type_: List of String
   *
   * _Maximum_: `50`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Values: List<Value<string>>;
  /**
   * User-defined criteria for sending commands that target instances that meet the criteria. `Key` can be `InstanceIds` or `WindowTargetIds`. For more information about how to target instances within a maintenance window task, see [About 'register-task-with-maintenance-window' Options and Values](https://docs.aws.amazon.com/systems-manager/latest/userguide/register-tasks-options.html) in the _AWS Systems Manager User Guide_.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `163`
   *
   * _Pattern_: `^[p{L}p{Z}p{N}_.:/=-@]*$|resource-groups:ResourceTypeFilters|resource-groups:Name`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Key: Value<string>;
}

/**
 * Configuration options for sending command output to Amazon CloudWatch Logs.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssm-maintenancewindowtask-cloudwatchoutputconfig.html}
 **/
export interface SSMMaintenanceWindowTaskCloudWatchOutputConfig {
  /**
   * Enables Systems Manager to send command output to CloudWatch Logs.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CloudWatchOutputEnabled?: Value<boolean>;
  /**
   * The name of the CloudWatch Logs log group where you want to send command output. If you don't specify a group name, AWS Systems Manager automatically creates a log group for you. The log group uses the following naming format:
   *
   * `aws/ssm/SystemsManagerDocumentName `
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `512`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CloudWatchLogGroupName?: Value<string>;
}

/**
 * The `MaintenanceWindowStepFunctionsParameters` property type specifies the parameters for the execution of a `STEP_FUNCTIONS` task in a Systems Manager maintenance window.
 *
 * `MaintenanceWindowStepFunctionsParameters` is a property of the [TaskInvocationParameters](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssm-maintenancewindowtask-taskinvocationparameters.html) property type.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssm-maintenancewindowtask-maintenancewindowstepfunctionsparameters.html}
 **/
export interface SSMMaintenanceWindowTaskMaintenanceWindowStepFunctionsParameters {
  /**
   * The inputs for the `STEP_FUNCTIONS` task.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Maximum_: `4096`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Input?: Value<string>;
  /**
   * The name of the `STEP_FUNCTIONS` task.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `80`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Name?: Value<string>;
}

/**
 * The `MaintenanceWindowLambdaParameters` property type specifies the parameters for a `LAMBDA` task type for a maintenance window task in AWS Systems Manager.
 *
 * `MaintenanceWindowLambdaParameters` is a property of the [TaskInvocationParameters](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssm-maintenancewindowtask-taskinvocationparameters.html) property type.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssm-maintenancewindowtask-maintenancewindowlambdaparameters.html}
 **/
export interface SSMMaintenanceWindowTaskMaintenanceWindowLambdaParameters {
  /**
   * Client-specific information to pass to the AWS Lambda function that you're invoking. You can then use the `context` variable to process the client information in your AWS Lambda function.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `8000`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ClientContext?: Value<string>;
  /**
   * An AWS Lambda function version or alias name. If you specify a function version, the action uses the qualified function Amazon Resource Name (ARN) to invoke a specific Lambda function. If you specify an alias name, the action uses the alias ARN to invoke the Lambda function version that the alias points to.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `128`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Qualifier?: Value<string>;
  /**
   * JSON to provide to your AWS Lambda function as input.
   *
   * Although `Type` is listed as "String" for this property, the payload content must be formatted as a Base64-encoded binary data object.
   *
   * _Length Constraint:_ 4096
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Payload?: Value<string>;
}
export interface SSMMaintenanceWindowTaskProperties {
  /**
   * The maximum number of errors allowed before this task stops being scheduled.
   *
   * Although this element is listed as "Required: No", a value can be omitted only when you are registering or updating a [targetless task](https://docs.aws.amazon.com/systems-manager/latest/userguide/maintenance-windows-targetless-tasks.html) You must provide a value in all other cases.
   *
   * For maintenance window tasks without a target specified, you can't supply a value for this option. Instead, the system inserts a placeholder value of `1`. This value doesn't affect the running of your task.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `7`
   *
   * _Pattern_: `^([1-9][0-9]*|[0]|[1-9][0-9]%|[0-9]%|100%)$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MaxErrors?: Value<string>;
  /**
   * A description of the task.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `128`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Description?: Value<string>;
  /**
   * The Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) service role to use to publish Amazon Simple Notification Service (Amazon SNS) notifications for maintenance window Run Command tasks.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ServiceRoleArn?: Value<string>;
  /**
   * The priority of the task in the maintenance window. The lower the number, the higher the priority. Tasks that have the same priority are scheduled in parallel.
   *
   * _Required_: Yes
   *
   * _Type_: Integer
   *
   * _Minimum_: `0`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Priority: Value<number>;
  /**
   * The maximum number of targets this task can be run for, in parallel.
   *
   * Although this element is listed as "Required: No", a value can be omitted only when you are registering or updating a [targetless task](https://docs.aws.amazon.com/systems-manager/latest/userguide/maintenance-windows-targetless-tasks.html) You must provide a value in all other cases.
   *
   * For maintenance window tasks without a target specified, you can't supply a value for this option. Instead, the system inserts a placeholder value of `1`. This value doesn't affect the running of your task.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `7`
   *
   * _Pattern_: `^([1-9][0-9]*|[1-9][0-9]%|[1-9]%|100%)$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MaxConcurrency?: Value<string>;
  /**
   * The targets, either instances or window target IDs.
   */
  Targets?: List<SSMMaintenanceWindowTaskTarget>;
  /**
   * The task name.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `3`
   *
   * _Maximum_: `128`
   *
   * _Pattern_: `^[a-zA-Z0-9_-.]{3,128}$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Name?: Value<string>;
  /**
   * The resource that the task uses during execution.
   *
   * For `RUN_COMMAND` and `AUTOMATION` task types, `TaskArn` is the SSM document name or Amazon Resource Name (ARN).
   *
   * For `LAMBDA` tasks, `TaskArn` is the function name or ARN.
   *
   * For `STEP_FUNCTIONS` tasks, `TaskArn` is the state machine ARN.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `1600`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TaskArn: Value<string>;
  /**
   * The parameters to pass to the task when it runs. Populate only the fields that match the task type. All other fields should be empty.
   *
   * When you update a maintenance window task that has options specified in `TaskInvocationParameters`, you must provide again all the `TaskInvocationParameters` values that you want to retain. The values you do not specify again are removed. For example, suppose that when you registered a Run Command task, you specified `TaskInvocationParameters` values for `Comment`, `NotificationConfig`, and `OutputS3BucketName`. If you update the maintenance window task and specify only a different `OutputS3BucketName` value, the values for `Comment` and `NotificationConfig` are removed.
   *
   * _Required_: No
   *
   * _Type_: [TaskInvocationParameters](aws-properties-ssm-maintenancewindowtask-taskinvocationparameters.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TaskInvocationParameters?: SSMMaintenanceWindowTaskTaskInvocationParameters;
  /**
   * The ID of the maintenance window where the task is registered.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `20`
   *
   * _Maximum_: `20`
   *
   * _Pattern_: `^mw-[0-9a-f]{17}$`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  WindowId: Value<string>;
  /**
   * The parameters to pass to the task when it runs.
   *
   * `TaskParameters` has been deprecated. To specify parameters to pass to a task when it runs, instead use the `Parameters` option in the `TaskInvocationParameters` structure. For information about how Systems Manager handles these options for the supported maintenance window task types, see [MaintenanceWindowTaskInvocationParameters](https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_MaintenanceWindowTaskInvocationParameters.html).
   *
   * _Required_: No
   *
   * _Type_: Json
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TaskParameters?: { [key: string]: any };
  /**
   * The type of task. Valid values: `RUN_COMMAND`, `AUTOMATION`, `LAMBDA`, `STEP_FUNCTIONS`.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Allowed values_: `AUTOMATION | LAMBDA | RUN_COMMAND | STEP_FUNCTIONS`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  TaskType: Value<string>;
  /**
   * The specification for whether tasks should continue to run after the cutoff time specified in the maintenance windows is reached.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `CANCEL_TASK | CONTINUE_TASK`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CutoffBehavior?: Value<string>;
  /**
   * Information about an Amazon S3 bucket to write Run Command task-level logs to.
   *
   * `LoggingInfo` has been deprecated. To specify an Amazon S3 bucket to contain logs for Run Command tasks, instead use the `OutputS3BucketName` and `OutputS3KeyPrefix` options in the `TaskInvocationParameters` structure. For information about how Systems Manager handles these options for the supported maintenance window task types, see [AWS::SSM::MaintenanceWindowTask MaintenanceWindowRunCommandParameters](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssm-maintenancewindowtask-maintenancewindowruncommandparameters.html).
   *
   * _Required_: No
   *
   * _Type_: [LoggingInfo](aws-properties-ssm-maintenancewindowtask-logginginfo.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  LoggingInfo?: SSMMaintenanceWindowTaskLoggingInfo;
}

/**
 * The `AWS::SSM::MaintenanceWindowTask` resource defines information about a task for an AWS Systems Manager maintenance window. For more information, see [RegisterTaskWithMaintenanceWindow](https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_RegisterTaskWithMaintenanceWindow.html) in the _AWS Systems Manager API Reference_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-maintenancewindowtask.html}
 */
export interface SSMMaintenanceWindowTaskResource {
  Type: 'AWS::SSM::MaintenanceWindowTask';
  Properties: SSMMaintenanceWindowTaskProperties;
}
