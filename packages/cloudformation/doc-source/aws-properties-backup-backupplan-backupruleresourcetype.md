# AWS::Backup::BackupPlan BackupRuleResourceType<a name="aws-properties-backup-backupplan-backupruleresourcetype"></a>

Specifies an object containing properties used to schedule a task to back up a selection of resources\.

## Syntax<a name="aws-properties-backup-backupplan-backupruleresourcetype-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-backup-backupplan-backupruleresourcetype-syntax.json"></a>

```
{
  "[CompletionWindowMinutes](#cfn-backup-backupplan-backupruleresourcetype-completionwindowminutes)" : Double,
  "[CopyActions](#cfn-backup-backupplan-backupruleresourcetype-copyactions)" : [ CopyActionResourceType, ... ],
  "[EnableContinuousBackup](#cfn-backup-backupplan-backupruleresourcetype-enablecontinuousbackup)" : Boolean,
  "[Lifecycle](#cfn-backup-backupplan-backupruleresourcetype-lifecycle)" : LifecycleResourceType,
  "[RecoveryPointTags](#cfn-backup-backupplan-backupruleresourcetype-recoverypointtags)" : {Key : Value, ...},
  "[RuleName](#cfn-backup-backupplan-backupruleresourcetype-rulename)" : String,
  "[ScheduleExpression](#cfn-backup-backupplan-backupruleresourcetype-scheduleexpression)" : String,
  "[StartWindowMinutes](#cfn-backup-backupplan-backupruleresourcetype-startwindowminutes)" : Double,
  "[TargetBackupVault](#cfn-backup-backupplan-backupruleresourcetype-targetbackupvault)" : String
}
```

### YAML<a name="aws-properties-backup-backupplan-backupruleresourcetype-syntax.yaml"></a>

```
  [CompletionWindowMinutes](#cfn-backup-backupplan-backupruleresourcetype-completionwindowminutes): Double
  [CopyActions](#cfn-backup-backupplan-backupruleresourcetype-copyactions):
    - CopyActionResourceType
  [EnableContinuousBackup](#cfn-backup-backupplan-backupruleresourcetype-enablecontinuousbackup): Boolean
  [Lifecycle](#cfn-backup-backupplan-backupruleresourcetype-lifecycle):
    LifecycleResourceType
  [RecoveryPointTags](#cfn-backup-backupplan-backupruleresourcetype-recoverypointtags):
    Key : Value
  [RuleName](#cfn-backup-backupplan-backupruleresourcetype-rulename): String
  [ScheduleExpression](#cfn-backup-backupplan-backupruleresourcetype-scheduleexpression): String
  [StartWindowMinutes](#cfn-backup-backupplan-backupruleresourcetype-startwindowminutes): Double
  [TargetBackupVault](#cfn-backup-backupplan-backupruleresourcetype-targetbackupvault): String
```

## Properties<a name="aws-properties-backup-backupplan-backupruleresourcetype-properties"></a>

`CompletionWindowMinutes` <a name="cfn-backup-backupplan-backupruleresourcetype-completionwindowminutes"></a>
A value in minutes after a backup job is successfully started before it must be completed or it is canceled by AWS Backup\.  
_Required_: No  
_Type_: Double  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`CopyActions` <a name="cfn-backup-backupplan-backupruleresourcetype-copyactions"></a>
An array of CopyAction objects, which contains the details of the copy operation\.  
_Required_: No  
_Type_: List of [CopyActionResourceType](aws-properties-backup-backupplan-copyactionresourcetype.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`EnableContinuousBackup` <a name="cfn-backup-backupplan-backupruleresourcetype-enablecontinuousbackup"></a>
Enables continuous backup and point\-in\-time restores \(PITR\)\.  
_Required_: No  
_Type_: Boolean  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Lifecycle` <a name="cfn-backup-backupplan-backupruleresourcetype-lifecycle"></a>
The lifecycle defines when a protected resource is transitioned to cold storage and when it expires\. AWS Backup transitions and expires backups automatically according to the lifecycle that you define\.  
_Required_: No  
_Type_: [LifecycleResourceType](aws-properties-backup-backupplan-lifecycleresourcetype.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`RecoveryPointTags` <a name="cfn-backup-backupplan-backupruleresourcetype-recoverypointtags"></a>
To help organize your resources, you can assign your own metadata to the resources that you create\. Each tag is a key\-value pair\.  
_Required_: No  
_Type_: Map of String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`RuleName` <a name="cfn-backup-backupplan-backupruleresourcetype-rulename"></a>
A display name for a backup rule\.  
_Required_: Yes  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`ScheduleExpression` <a name="cfn-backup-backupplan-backupruleresourcetype-scheduleexpression"></a>
A CRON expression specifying when AWS Backup initiates a backup job\.  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`StartWindowMinutes` <a name="cfn-backup-backupplan-backupruleresourcetype-startwindowminutes"></a>
An optional value that specifies a period of time in minutes after a backup is scheduled before a job is canceled if it doesn't start successfully\.  
If this value is included, it must be at least 60 minutes to avoid errors\.  
_Required_: No  
_Type_: Double  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`TargetBackupVault` <a name="cfn-backup-backupplan-backupruleresourcetype-targetbackupvault"></a>
The name of a logical container where backups are stored\. Backup vaults are identified by names that are unique to the account used to create them and the AWS Region where they are created\. They consist of letters, numbers, and hyphens\.  
_Required_: Yes  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)