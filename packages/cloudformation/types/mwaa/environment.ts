/**
 * Supported regions:
 * - ap-northeast-1 (version 119.1.0)
 * - ap-northeast-2 (version 119.1.0)
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
 * - us-west-2 (version 119.1.0)
 */
import { List, Value } from '../../shared-types/dataTypes';
import { ResourceTag } from '../../shared-types/resource';

/**
 * The VPC networking components used to secure and enable network traffic between the AWS resources for your environment. To learn more, see [About networking on Amazon MWAA](https://docs.aws.amazon.com/mwaa/latest/userguide/networking-about.html).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mwaa-environment-networkconfiguration.html}
 **/
export interface MWAAEnvironmentNetworkConfiguration {
  /**
   * A list of subnet IDs. **Required** to create an environment. Must be private subnets in two different availability zones. A subnet must be attached to the same VPC as the security group. To learn more, see [About networking on Amazon MWAA](https://docs.aws.amazon.com/mwaa/latest/userguide/networking-about.html).
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  SubnetIds?: List<Value<string>>;
  /**
   * A list of one or more security group IDs. Accepts up to 5 security group IDs. A security group must be attached to the same VPC as the subnets. To learn more, see [Security in your VPC on Amazon MWAA](https://docs.aws.amazon.com/mwaa/latest/userguide/vpc-security.html).
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SecurityGroupIds?: List<Value<string>>;
}

/**
 * Defines the type of logs to send for the Apache Airflow log type (e.g. `DagProcessingLogs`).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mwaa-environment-moduleloggingconfiguration.html}
 **/
export interface MWAAEnvironmentModuleLoggingConfiguration {
  /**
   * The ARN of the CloudWatch Logs log group for each type of Apache Airflow log type that you have enabled.
   *
   * `CloudWatchLogGroupArn` is available only as a return value, accessible when specified as an attribute in the [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mwaa-environment.html#aws-resource-mwaa-environment-return-values](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mwaa-environment.html#aws-resource-mwaa-environment-return-values) intrinsic function. Any value you provide for `CloudWatchLogGroupArn` is discarded by Amazon MWAA.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CloudWatchLogGroupArn?: Value<string>;
  /**
   * Indicates whether to enable the Apache Airflow log type (e.g. `DagProcessingLogs`) in CloudWatch Logs.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Enabled?: Value<boolean>;
  /**
   * Defines the Apache Airflow logs to send for the log type (e.g. `DagProcessingLogs`) to CloudWatch Logs. Valid values: `CRITICAL`, `ERROR`, `WARNING`, `INFO`.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  LogLevel?: Value<string>;
}

/**
 * The type of Apache Airflow logs to send to CloudWatch Logs.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mwaa-environment-loggingconfiguration.html}
 **/
export interface MWAAEnvironmentLoggingConfiguration {
  /**
   * Defines the scheduler logs sent to CloudWatch Logs and the logging level to send.
   *
   * _Required_: No
   *
   * _Type_: [ModuleLoggingConfiguration](aws-properties-mwaa-environment-moduleloggingconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SchedulerLogs?: MWAAEnvironmentModuleLoggingConfiguration;
  /**
   * Defines the task logs sent to CloudWatch Logs and the logging level to send.
   *
   * _Required_: No
   *
   * _Type_: [ModuleLoggingConfiguration](aws-properties-mwaa-environment-moduleloggingconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TaskLogs?: MWAAEnvironmentModuleLoggingConfiguration;
  /**
   * Defines the processing logs sent to CloudWatch Logs and the logging level to send.
   *
   * _Required_: No
   *
   * _Type_: [ModuleLoggingConfiguration](aws-properties-mwaa-environment-moduleloggingconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DagProcessingLogs?: MWAAEnvironmentModuleLoggingConfiguration;
  /**
   * Defines the web server logs sent to CloudWatch Logs and the logging level to send.
   *
   * _Required_: No
   *
   * _Type_: [ModuleLoggingConfiguration](aws-properties-mwaa-environment-moduleloggingconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  WebserverLogs?: MWAAEnvironmentModuleLoggingConfiguration;
  /**
   * Defines the worker logs sent to CloudWatch Logs and the logging level to send.
   *
   * _Required_: No
   *
   * _Type_: [ModuleLoggingConfiguration](aws-properties-mwaa-environment-moduleloggingconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  WorkerLogs?: MWAAEnvironmentModuleLoggingConfiguration;
}
export interface MWAAEnvironmentProperties {
  /**
   * A list of key-value pairs containing the Airflow configuration options for your environment. For example, `core.default_timezone: utc`. To learn more, see [Apache Airflow configuration options](https://docs.aws.amazon.com/mwaa/latest/userguide/configuring-env-variables.html).
   *
   * _Required_: No
   *
   * _Type_: Json
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AirflowConfigurationOptions?: { [key: string]: any };
  /**
   * The maximum number of workers that you want to run in your environment. MWAA scales the number of Apache Airflow workers up to the number you specify in the `MaxWorkers` field. For example, `20`. When there are no more tasks running, and no more in the queue, MWAA disposes of the extra workers leaving the one worker that is included with your environment, or the number you specify in `MinWorkers`.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MaxWorkers?: Value<number>;
  /**
   * The environment class type. Valid values: `mw1.small`, `mw1.medium`, `mw1.large`. To learn more, see [Amazon MWAA environment class](https://docs.aws.amazon.com/mwaa/latest/userguide/environment-class.html).
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  EnvironmentClass?: Value<string>;
  /**
   * The number of schedulers that you want to run in your environment. Valid values:
   */
  Schedulers?: Value<number>;
  /**
   * The relative path to the `requirements.txt` file on your Amazon S3 bucket. For example, `requirements.txt`. To learn more, see [Installing Python dependencies](https://docs.aws.amazon.com/mwaa/latest/userguide/working-dags-dependencies.html).
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RequirementsS3Path?: Value<string>;
  /**
   * The relative path to the `plugins.zip` file on your Amazon S3 bucket. For example, `plugins.zip`. To learn more, see [Installing custom plugins](https://docs.aws.amazon.com/mwaa/latest/userguide/configuring-dag-import-plugins.html).
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PluginsS3Path?: Value<string>;
  /**
   * The minimum number of workers that you want to run in your environment. MWAA scales the number of Apache Airflow workers up to the number you specify in the `MaxWorkers` field. When there are no more tasks running, and no more in the queue, MWAA disposes of the extra workers leaving the worker count you specify in the `MinWorkers` field. For example, `2`.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MinWorkers?: Value<number>;
  /**
   * The version of Apache Airflow to use for the environment. If no value is specified, defaults to the latest version. Valid values: `2.0.2`, `1.10.12`, `2.2.2`, and `2.4.3`.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AirflowVersion?: Value<string>;
  StartupScriptS3Path?: Value<string>;
  /**
   * The name of your Amazon MWAA environment.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Name: Value<string>;
  /**
   * The version of the requirements.txt file on your Amazon S3 bucket. To learn more, see [Installing Python dependencies](https://docs.aws.amazon.com/mwaa/latest/userguide/working-dags-dependencies.html).
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RequirementsS3ObjectVersion?: Value<string>;
  /**
   * The Amazon Resource Name (ARN) of the Amazon S3 bucket where your DAG code and supporting files are stored. For example, `arn:aws:s3:::my-airflow-bucket-unique-name`. To learn more, see [Create an Amazon S3 bucket for Amazon MWAA](https://docs.aws.amazon.com/mwaa/latest/userguide/mwaa-s3-bucket.html).
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SourceBucketArn?: Value<string>;
  /**
   * The Amazon Resource Name (ARN) of the execution role in IAM that allows MWAA to access AWS resources in your environment. For example, `arn:aws:iam::123456789:role/my-execution-role`. To learn more, see [Amazon MWAA Execution role](https://docs.aws.amazon.com/mwaa/latest/userguide/mwaa-create-role.html).
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ExecutionRoleArn?: Value<string>;
  /**
   * The day and time of the week to start weekly maintenance updates of your environment in the following format: `DAY:HH:MM`. For example: `TUE:03:30`. You can specify a start time in 30 minute increments only. Supported input includes the following:
   */
  WeeklyMaintenanceWindowStart?: Value<string>;
  /**
   * The version of the plugins.zip file on your Amazon S3 bucket. To learn more, see [Installing custom plugins](https://docs.aws.amazon.com/mwaa/latest/userguide/configuring-dag-import-plugins.html).
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PluginsS3ObjectVersion?: Value<string>;
  StartupScriptS3ObjectVersion?: Value<string>;
  /**
   * The relative path to the DAGs folder on your Amazon S3 bucket. For example, `dags`. To learn more, see [Adding or updating DAGs](https://docs.aws.amazon.com/mwaa/latest/userguide/configuring-dag-folder.html).
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DagS3Path?: Value<string>;
  /**
   * The Apache Airflow logs being sent to CloudWatch Logs: `DagProcessingLogs`, `SchedulerLogs`, `TaskLogs`, `WebserverLogs`, `WorkerLogs`.
   *
   * _Required_: No
   *
   * _Type_: [LoggingConfiguration](aws-properties-mwaa-environment-loggingconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  LoggingConfiguration?: MWAAEnvironmentLoggingConfiguration;
  /**
   * The Apache Airflow _Web server_ access mode. To learn more, see [Apache Airflow access modes](https://docs.aws.amazon.com/mwaa/latest/userguide/configuring-networking.html). Valid values: `PRIVATE_ONLY` or `PUBLIC_ONLY`.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  WebserverAccessMode?: Value<string>;
  /**
   * The VPC networking components used to secure and enable network traffic between the AWS resources for your environment. To learn more, see [About networking on Amazon MWAA](https://docs.aws.amazon.com/mwaa/latest/userguide/networking-about.html).
   *
   * _Required_: No
   *
   * _Type_: [NetworkConfiguration](aws-properties-mwaa-environment-networkconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  NetworkConfiguration?: MWAAEnvironmentNetworkConfiguration;
  /**
   * The AWS Key Management Service (KMS) key to encrypt and decrypt the data in your environment. You can use an AWS KMS key managed by MWAA, or a customer-managed KMS key (advanced).
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  KmsKey?: Value<string>;
  /**
   * The key-value tag pairs associated to your environment. For example, `"Environment": "Staging"`. To learn more, see [Tagging](https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html).
   *
   * _Required_: No
   *
   * _Type_: Json
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Tags?: { [key: string]: any };
}

/**
 * The `AWS::MWAA::Environment` resource creates an Amazon Managed Workflows for Apache Airflow (MWAA) environment.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mwaa-environment.html}
 */
export interface MWAAEnvironmentResource {
  Type: 'AWS::MWAA::Environment';
  Properties: MWAAEnvironmentProperties;
}
