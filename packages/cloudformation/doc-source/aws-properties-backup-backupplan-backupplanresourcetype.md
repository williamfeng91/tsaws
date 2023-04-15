# AWS::Backup::BackupPlan BackupPlanResourceType<a name="aws-properties-backup-backupplan-backupplanresourcetype"></a>

Specifies an object containing properties used to create a backup plan\.

## Syntax<a name="aws-properties-backup-backupplan-backupplanresourcetype-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-backup-backupplan-backupplanresourcetype-syntax.json"></a>

```
{
  "[AdvancedBackupSettings](#cfn-backup-backupplan-backupplanresourcetype-advancedbackupsettings)" : [ AdvancedBackupSettingResourceType, ... ],
  "[BackupPlanName](#cfn-backup-backupplan-backupplanresourcetype-backupplanname)" : String,
  "[BackupPlanRule](#cfn-backup-backupplan-backupplanresourcetype-backupplanrule)" : [ BackupRuleResourceType, ... ]
}
```

### YAML<a name="aws-properties-backup-backupplan-backupplanresourcetype-syntax.yaml"></a>

```
  [AdvancedBackupSettings](#cfn-backup-backupplan-backupplanresourcetype-advancedbackupsettings):
    - AdvancedBackupSettingResourceType
  [BackupPlanName](#cfn-backup-backupplan-backupplanresourcetype-backupplanname): String
  [BackupPlanRule](#cfn-backup-backupplan-backupplanresourcetype-backupplanrule):
    - BackupRuleResourceType
```

## Properties<a name="aws-properties-backup-backupplan-backupplanresourcetype-properties"></a>

`AdvancedBackupSettings` <a name="cfn-backup-backupplan-backupplanresourcetype-advancedbackupsettings"></a>
A list of backup options for each resource type\.  
_Required_: No  
_Type_: List of [AdvancedBackupSettingResourceType](aws-properties-backup-backupplan-advancedbackupsettingresourcetype.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`BackupPlanName` <a name="cfn-backup-backupplan-backupplanresourcetype-backupplanname"></a>
The display name of a backup plan\.  
_Required_: Yes  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`BackupPlanRule` <a name="cfn-backup-backupplan-backupplanresourcetype-backupplanrule"></a>
An array of `BackupRule` objects, each of which specifies a scheduled task that is used to back up a selection of resources\.  
_Required_: Yes  
_Type_: List of [BackupRuleResourceType](aws-properties-backup-backupplan-backupruleresourcetype.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
