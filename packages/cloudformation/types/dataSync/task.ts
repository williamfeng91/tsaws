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
 * Specifies the schedule you want your task to use for repeated executions. For more information, see [Schedule Expressions for Rules](https://docs.aws.amazon.com/AmazonCloudWatch/latest/events/ScheduledEvents.html).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datasync-task-taskschedule.html}
 **/
export interface DataSyncTaskTaskSchedule {
  /**
   * A cron expression that specifies when AWS DataSync initiates a scheduled transfer from a source to a destination location.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Maximum_: `256`
   *
   * _Pattern_: `^[a-zA-Z0-9 _*?,|^-/#s()+]*$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ScheduleExpression: Value<string>;
}

/**
 * Specifies which files, folders, and objects to include or exclude when transferring files from source to destination.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datasync-task-filterrule.html}
 **/
export interface DataSyncTaskFilterRule {
  /**
   * The type of filter rule to apply. AWS DataSync only supports the SIMPLE_PATTERN rule type.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `SIMPLE_PATTERN`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FilterType?: Value<string>;
  /**
   * A single filter string that consists of the patterns to include or exclude. The patterns are delimited by "|" (that is, a pipe), for example: `/folder1|/folder2`
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Maximum_: `102400`
   *
   * _Pattern_: `^[^x00]+$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Value?: Value<string>;
}

/**
 * Represents the options that are available to control the behavior of a [StartTaskExecution](https://docs.aws.amazon.com/datasync/latest/userguide/API_StartTaskExecution.html) operation. This behavior includes preserving metadata, such as user ID (UID), group ID (GID), and file permissions; overwriting files in the destination; data integrity verification; and so on.
 *
 * A task has a set of default options associated with it. If you don't specify an option in [StartTaskExecution](https://docs.aws.amazon.com/datasync/latest/userguide/API_StartTaskExecution.html), the default value is used. You can override the default options on each task execution by specifying an overriding `Options` value to [StartTaskExecution](https://docs.aws.amazon.com/datasync/latest/userguide/API_StartTaskExecution.html).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datasync-task-options.html}
 **/
export interface DataSyncTaskOptions {
  /**
   * A value that determines whether a data integrity verification is performed at the end of a task execution after all data and metadata have been transferred. For more information, see [Configure task settings](https://docs.aws.amazon.com/datasync/latest/userguide/create-task.html).
   *
   * Default value: `POINT_IN_TIME_CONSISTENT`
   *
   * `ONLY_FILES_TRANSFERRED` (recommended): Perform verification only on files that were transferred.
   *
   * `POINT_IN_TIME_CONSISTENT`: Scan the entire source and entire destination at the end of the transfer to verify that the source and destination are fully synchronized. This option isn't supported when transferring to S3 Glacier or S3 Glacier Deep Archive storage classes.
   *
   * `NONE`: No additional verification is done at the end of the transfer, but all data transmissions are integrity-checked with checksum verification during the transfer.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `NONE | ONLY_FILES_TRANSFERRED | POINT_IN_TIME_CONSISTENT`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  VerifyMode?: Value<string>;
  /**
   * The group ID (GID) of the file's owners.
   *
   * Default value: `INT_VALUE`
   *
   * `INT_VALUE`: Preserve the integer value of the user ID (UID) and group ID (GID) (recommended).
   *
   * `NAME`: Currently not supported.
   *
   * `NONE`: Ignore the UID and GID.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `BOTH | INT_VALUE | NAME | NONE`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Gid?: Value<string>;
  /**
   * A file metadata value that shows the last time that a file was accessed (that is, when the file was read or written to). If you set `Atime` to `BEST_EFFORT`, AWS DataSync attempts to preserve the original `Atime` attribute on all source files (that is, the version before the PREPARING phase). However, `Atime`'s behavior is not fully standard across platforms, so AWS DataSync can only do this on a best-effort basis.
   *
   * Default value: `BEST_EFFORT`
   *
   * `BEST_EFFORT`: Attempt to preserve the per-file `Atime` value (recommended).
   *
   * `NONE`: Ignore `Atime`.
   *
   * If `Atime` is set to `BEST_EFFORT`, `Mtime` must be set to `PRESERVE`.
   *
   * If `Atime` is set to `NONE`, `Mtime` must also be `NONE`.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `BEST_EFFORT | NONE`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Atime?: Value<string>;
  /**
   * Specifies whether data at the destination location should be overwritten or preserved. If set to `NEVER`, a destination file for example will not be replaced by a source file (even if the destination file differs from the source file). If you modify files in the destination and you sync the files, you can use this value to protect against overwriting those changes.
   *
   * Some storage classes have specific behaviors that can affect your Amazon S3 storage cost. For detailed information, see [Considerations when working with Amazon S3 storage classes in DataSync](https://docs.aws.amazon.com/datasync/latest/userguide/create-s3-location.html#using-storage-classes).
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `ALWAYS | NEVER`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  OverwriteMode?: Value<string>;
  /**
   * A value that determines whether AWS DataSync should preserve the metadata of block and character devices in the source file system, and re-create the files with that device name and metadata on the destination. DataSync does not copy the contents of such devices, only the name and metadata.
   *
   * AWS DataSync can't sync the actual contents of such devices, because they are nonterminal and don't return an end-of-file (EOF) marker.
   *
   * Default value: `NONE`
   *
   * `NONE`: Ignore special devices (recommended).
   *
   * `PRESERVE`: Preserve character and block device metadata. This option isn't currently supported for Amazon EFS.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `NONE | PRESERVE`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PreserveDevices?: Value<string>;
  /**
   * A value that indicates the last time that a file was modified (that is, a file was written to) before the PREPARING phase. This option is required for cases when you need to run the same task more than one time.
   *
   * Default value: `PRESERVE`
   *
   * `PRESERVE`: Preserve original `Mtime` (recommended)
   *
   * `NONE`: Ignore `Mtime`.
   *
   * If `Mtime` is set to `PRESERVE`, `Atime` must be set to `BEST_EFFORT`.
   *
   * If `Mtime` is set to `NONE`, `Atime` must also be set to `NONE`.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `NONE | PRESERVE`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Mtime?: Value<string>;
  /**
   * Specifies whether tasks should be queued before executing the tasks. The default is `ENABLED`, which means the tasks will be queued.
   *
   * If you use the same agent to run multiple tasks, you can enable the tasks to run in series. For more information, see [Queueing task executions](https://docs.aws.amazon.com/datasync/latest/userguide/run-task.html#queue-task-execution).
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `DISABLED | ENABLED`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TaskQueueing?: Value<string>;
  /**
   * A value that determines whether DataSync transfers only the data and metadata that differ between the source and the destination location, or whether DataSync transfers all the content from the source, without comparing it to the destination location.
   *
   * `CHANGED`: DataSync copies only data or metadata that is new or different from the source location to the destination location.
   *
   * `ALL`: DataSync copies all source location content to the destination, without comparing it to existing content on the destination.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `ALL | CHANGED`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TransferMode?: Value<string>;
  /**
   * Specifies the type of logs that DataSync publishes to a Amazon CloudWatch Logs log group. To specify the log group, see [CloudWatchLogGroupArn](https://docs.aws.amazon.com/datasync/latest/userguide/API_CreateTask.html#DataSync-CreateTask-request-CloudWatchLogGroupArn).
   *
   * If you set `LogLevel` to `OFF`, no logs are published. `BASIC` publishes logs on errors for individual files transferred. `TRANSFER` publishes logs for every file or object that is transferred and integrity checked.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `BASIC | OFF | TRANSFER`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  LogLevel?: Value<string>;
  /**
   * Specifies whether object tags are preserved when transferring between object storage systems. If you want your DataSync task to ignore object tags, specify the `NONE` value.
   *
   * Default Value: `PRESERVE`
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `NONE | PRESERVE`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ObjectTags?: Value<string>;
  /**
   * The user ID (UID) of the file's owner.
   *
   * Default value: `INT_VALUE`
   *
   * `INT_VALUE`: Preserve the integer value of the UID and group ID (GID) (recommended).
   *
   * `NAME`: Currently not supported
   *
   * `NONE`: Ignore the UID and GID.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `BOTH | INT_VALUE | NAME | NONE`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Uid?: Value<string>;
  /**
   * A value that limits the bandwidth used by AWS DataSync. For example, if you want AWS DataSync to use a maximum of 1 MB, set this value to `1048576` (=1024*1024).
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  BytesPerSecond?: Value<number>;
  /**
   * A value that determines which users or groups can access a file for a specific purpose, such as reading, writing, or execution of the file. This option should be set only for Network File System (NFS), Amazon EFS, and Amazon S3 locations. For more information about what metadata is copied by DataSync, see [Metadata Copied by DataSync](https://docs.aws.amazon.com/datasync/latest/userguide/special-files.html#metadata-copied).
   *
   * Default value: `PRESERVE`
   *
   * `PRESERVE`: Preserve POSIX-style permissions (recommended).
   *
   * `NONE`: Ignore permissions.
   *
   * AWS DataSync can preserve extant permissions of a source location.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `NONE | PRESERVE`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PosixPermissions?: Value<string>;
  /**
   * A value that specifies whether files in the destination that don't exist in the source file system are preserved. This option can affect your storage costs. If your task deletes objects, you might incur minimum storage duration charges for certain storage classes. For detailed information, see [Considerations when working with Amazon S3 storage classes in DataSync ](https://docs.aws.amazon.com/datasync/latest/userguide/create-s3-location.html#using-storage-classes) in the _ AWS DataSync User Guide_.
   *
   * Default value: `PRESERVE`
   *
   * `PRESERVE`: Ignore destination files that aren't present in the source (recommended).
   *
   * `REMOVE`: Delete destination files that aren't present in the source.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `PRESERVE | REMOVE`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PreserveDeletedFiles?: Value<string>;
  /**
   * A value that determines which components of the SMB security descriptor are copied from source to destination objects.
   *
   * This value is only used for transfers between SMB and Amazon FSx for Windows File Server locations, or between two Amazon FSx for Windows File Server locations. For more information about how DataSync handles metadata, see [How DataSync Handles Metadata and Special Files](https://docs.aws.amazon.com/datasync/latest/userguide/special-files.html).
   *
   * Default value: `OWNER_DACL`
   *
   * `OWNER_DACL`: For each copied object, DataSync copies the following metadata:
   */
  SecurityDescriptorCopyFlags?: Value<string>;
}
export interface DataSyncTaskProperties {
  /**
   * Specifies a list of filter rules that include specific data during your transfer. For more information and examples, see [Filtering data transferred by DataSync](https://docs.aws.amazon.com/datasync/latest/userguide/filtering.html).
   *
   * _Required_: No
   *
   * _Type_: List of [FilterRule](aws-properties-datasync-task-filterrule.md)
   *
   * _Maximum_: `1`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Includes?: List<DataSyncTaskFilterRule>;
  /**
   * The Amazon Resource Name (ARN) of an AWS storage resource's location.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  DestinationLocationArn: Value<string>;
  /**
   * Specifies the configuration options for a task. Some options include preserving file or object metadata and verifying data integrity.
   *
   * You can also override these options before starting an individual run of a task (also known as a _task execution_). For more information, see [StartTaskExecution](https://docs.aws.amazon.com/datasync/latest/userguide/API_StartTaskExecution.html).
   *
   * _Required_: No
   *
   * _Type_: [Options](aws-properties-datasync-task-options.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Options?: DataSyncTaskOptions;
  /**
   * Specifies a schedule used to periodically transfer files from a source to a destination location. The schedule should be specified in UTC time. For more information, see [Scheduling your task](https://docs.aws.amazon.com/datasync/latest/userguide/task-scheduling.html).
   *
   * _Required_: No
   *
   * _Type_: [TaskSchedule](aws-properties-datasync-task-taskschedule.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Schedule?: DataSyncTaskTaskSchedule;
  /**
   * The Amazon Resource Name (ARN) of the Amazon CloudWatch log group that is used to monitor and log events in the task.
   *
   * For more information about how to use CloudWatch Logs with DataSync, see [Monitoring Your Task](https://docs.aws.amazon.com/datasync/latest/userguide/monitor-datasync.html#cloudwatchlogs) in the _ AWS DataSync User Guide._
   *
   * For more information about these groups, see [Working with Log Groups and Log Streams](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/Working-with-log-groups-and-streams.html) in the _Amazon CloudWatch Logs User Guide_.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Maximum_: `562`
   *
   * _Pattern_: `^arn:(aws|aws-cn|aws-us-gov|aws-iso|aws-iso-b):logs:[a-z-0-9]*:[0-9]{12}:log-group:([^:*]*)(:*)?$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CloudWatchLogGroupArn?: Value<string>;
  /**
   * The Amazon Resource Name (ARN) of the source location for the task.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Maximum_: `128`
   *
   * _Pattern_: `^arn:(aws|aws-cn|aws-us-gov|aws-iso|aws-iso-b):datasync:[a-z-0-9]+:[0-9]{12}:location/loc-[0-9a-z]{17}$`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  SourceLocationArn: Value<string>;
  /**
   * Specifies a list of filter rules that exclude specific data during your transfer. For more information and examples, see [Filtering data transferred by DataSync](https://docs.aws.amazon.com/datasync/latest/userguide/filtering.html).
   *
   * _Required_: No
   *
   * _Type_: List of [FilterRule](aws-properties-datasync-task-filterrule.md)
   *
   * _Maximum_: `1`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Excludes?: List<DataSyncTaskFilterRule>;
  /**
   * Specifies the tags that you want to apply to the Amazon Resource Name (ARN) representing the task.
   *
   * _Tags_ are key-value pairs that help you manage, filter, and search for your DataSync resources.
   *
   * _Required_: No
   *
   * _Type_: List of [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)
   *
   * _Maximum_: `50`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Tags?: List<ResourceTag>;
  /**
   * The name of a task. This value is a text reference that is used to identify the task in the console.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `256`
   *
   * _Pattern_: `^[a-zA-Z0-9s+=._:@/-]+$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Name?: Value<string>;
}

/**
 * The `AWS::DataSync::Task` resource specifies a task. A task is a set of two locations (source and destination) and a set of `Options` that you use to control the behavior of a task. If you don't specify `Options` when you create a task, AWS DataSync populates them with service defaults.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-task.html}
 */
export interface DataSyncTaskResource {
  Type: 'AWS::DataSync::Task';
  Properties: DataSyncTaskProperties;
}
