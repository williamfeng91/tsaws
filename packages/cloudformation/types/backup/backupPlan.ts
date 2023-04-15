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
 * Copies backups created by a backup rule to another vault.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-backup-backupplan-copyactionresourcetype.html}
 **/
export interface BackupBackupPlanCopyActionResourceType {
  /**
   * Defines when a protected resource is transitioned to cold storage and when it expires. AWS Backup transitions and expires backups automatically according to the lifecycle that you define. If you do not specify a lifecycle, AWS Backup applies the lifecycle policy of the source backup to the destination backup.
   *
   * Backups transitioned to cold storage must be stored in cold storage for a minimum of 90 days.
   *
   * _Required_: No
   *
   * _Type_: [LifecycleResourceType](aws-properties-backup-backupplan-lifecycleresourcetype.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Lifecycle?: BackupBackupPlanLifecycleResourceType;
  /**
   * An Amazon Resource Name (ARN) that uniquely identifies the destination backup vault for the copied backup. For example, `arn:aws:backup:us-east-1:123456789012:vault:aBackupVault.`
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DestinationBackupVaultArn: Value<string>;
}

/**
 * Specifies an object containing resource type and backup options. This is only supported for Windows VSS backups.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-backup-backupplan-advancedbackupsettingresourcetype.html}
 **/
export interface BackupBackupPlanAdvancedBackupSettingResourceType {
  /**
   * The backup option for the resource. Each option is a key-value pair.
   *
   * _Required_: Yes
   *
   * _Type_: Json
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  BackupOptions: { [key: string]: any };
  /**
   * The name of a resource type. The only supported resource type is EC2.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ResourceType: Value<string>;
}

/**
 * Specifies an object containing an array of `Transition` objects that determine how long in days before a recovery point transitions to cold storage or is deleted.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-backup-backupplan-lifecycleresourcetype.html}
 **/
export interface BackupBackupPlanLifecycleResourceType {
  /**
   * Specifies the number of days after creation that a recovery point is deleted. Must be greater than `MoveToColdStorageAfterDays`.
   *
   * _Required_: No
   *
   * _Type_: Double
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DeleteAfterDays?: Value<number>;
  /**
   * Specifies the number of days after creation that a recovery point is moved to cold storage.
   *
   * _Required_: No
   *
   * _Type_: Double
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MoveToColdStorageAfterDays?: Value<number>;
}

/**
 * Specifies an object containing properties used to create a backup plan.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-backup-backupplan-backupplanresourcetype.html}
 **/
export interface BackupBackupPlanBackupPlanResourceType {
  /**
   * The display name of a backup plan.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  BackupPlanName: Value<string>;
  /**
   * A list of backup options for each resource type.
   *
   * _Required_: No
   *
   * _Type_: List of [AdvancedBackupSettingResourceType](aws-properties-backup-backupplan-advancedbackupsettingresourcetype.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AdvancedBackupSettings?: List<BackupBackupPlanAdvancedBackupSettingResourceType>;
  /**
   * An array of `BackupRule` objects, each of which specifies a scheduled task that is used to back up a selection of resources.
   *
   * _Required_: Yes
   *
   * _Type_: List of [BackupRuleResourceType](aws-properties-backup-backupplan-backupruleresourcetype.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  BackupPlanRule: List<BackupBackupPlanBackupRuleResourceType>;
}

/**
 * Specifies an object containing properties used to schedule a task to back up a selection of resources.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-backup-backupplan-backupruleresourcetype.html}
 **/
export interface BackupBackupPlanBackupRuleResourceType {
  /**
   * A value in minutes after a backup job is successfully started before it must be completed or it is canceled by AWS Backup.
   *
   * _Required_: No
   *
   * _Type_: Double
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CompletionWindowMinutes?: Value<number>;
  /**
   * A CRON expression specifying when AWS Backup initiates a backup job.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ScheduleExpression?: Value<string>;
  /**
   * To help organize your resources, you can assign your own metadata to the resources that you create. Each tag is a key-value pair.
   *
   * _Required_: No
   *
   * _Type_: Map of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RecoveryPointTags?: { [key: string]: Value<string> };
  /**
   * An array of CopyAction objects, which contains the details of the copy operation.
   *
   * _Required_: No
   *
   * _Type_: List of [CopyActionResourceType](aws-properties-backup-backupplan-copyactionresourcetype.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CopyActions?: List<BackupBackupPlanCopyActionResourceType>;
  /**
   * Enables continuous backup and point-in-time restores (PITR).
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  EnableContinuousBackup?: Value<boolean>;
  /**
   * The lifecycle defines when a protected resource is transitioned to cold storage and when it expires. AWS Backup transitions and expires backups automatically according to the lifecycle that you define.
   *
   * _Required_: No
   *
   * _Type_: [LifecycleResourceType](aws-properties-backup-backupplan-lifecycleresourcetype.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Lifecycle?: BackupBackupPlanLifecycleResourceType;
  /**
   * The name of a logical container where backups are stored. Backup vaults are identified by names that are unique to the account used to create them and the AWS Region where they are created. They consist of letters, numbers, and hyphens.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TargetBackupVault: Value<string>;
  /**
   * An optional value that specifies a period of time in minutes after a backup is scheduled before a job is canceled if it doesn't start successfully.
   *
   * If this value is included, it must be at least 60 minutes to avoid errors.
   *
   * _Required_: No
   *
   * _Type_: Double
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  StartWindowMinutes?: Value<number>;
  /**
   * A display name for a backup rule.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RuleName: Value<string>;
}
export interface BackupBackupPlanProperties {
  /**
   * Uniquely identifies the backup plan to be associated with the selection of resources.
   *
   * _Required_: Yes
   *
   * _Type_: [BackupPlanResourceType](aws-properties-backup-backupplan-backupplanresourcetype.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  BackupPlan: BackupBackupPlanBackupPlanResourceType;
  /**
   * To help organize your resources, you can assign your own metadata to the resources that you create. Each tag is a key-value pair. The specified tags are assigned to all backups created with this plan.
   *
   * _Required_: No
   *
   * _Type_: Map of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  BackupPlanTags?: { [key: string]: Value<string> };
}

/**
 * Contains an optional backup plan display name and an array of `BackupRule` objects, each of which specifies a backup rule. Each rule in a backup plan is a separate scheduled task and can back up a different selection of AWS resources.
 *
 * For a sample AWS CloudFormation template, see the [AWS Backup Developer Guide](https://docs.aws.amazon.com/aws-backup/latest/devguide/assigning-resources.html#assigning-resources-cfn).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backup-backupplan.html}
 */
export interface BackupBackupPlanResource {
  Type: 'AWS::Backup::BackupPlan';
  Properties: BackupBackupPlanProperties;
}
