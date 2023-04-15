# AWS::Backup::BackupVault NotificationObjectType<a name="aws-properties-backup-backupvault-notificationobjecttype"></a>

Specifies an object containing SNS event notification properties for the target backup vault\.

## Syntax<a name="aws-properties-backup-backupvault-notificationobjecttype-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-backup-backupvault-notificationobjecttype-syntax.json"></a>

```
{
  "[BackupVaultEvents](#cfn-backup-backupvault-notificationobjecttype-backupvaultevents)" : [ String, ... ],
  "[SNSTopicArn](#cfn-backup-backupvault-notificationobjecttype-snstopicarn)" : String
}
```

### YAML<a name="aws-properties-backup-backupvault-notificationobjecttype-syntax.yaml"></a>

```
  [BackupVaultEvents](#cfn-backup-backupvault-notificationobjecttype-backupvaultevents):
    - String
  [SNSTopicArn](#cfn-backup-backupvault-notificationobjecttype-snstopicarn): String
```

## Properties<a name="aws-properties-backup-backupvault-notificationobjecttype-properties"></a>

`BackupVaultEvents` <a name="cfn-backup-backupvault-notificationobjecttype-backupvaultevents"></a>
An array of events that indicate the status of jobs to back up resources to the backup vault\. For valid events, see [ BackupVaultEvents](https://docs.aws.amazon.com/aws-backup/latest/devguide/API_PutBackupVaultNotifications.html#API_PutBackupVaultNotifications_RequestSyntax) in the _AWS Backup API Guide_\.  
_Required_: Yes  
_Type_: List of String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`SNSTopicArn` <a name="cfn-backup-backupvault-notificationobjecttype-snstopicarn"></a>
An ARN that uniquely identifies an Amazon Simple Notification Service \(Amazon SNS\) topic; for example, `arn:aws:sns:us-west-2:111122223333:MyTopic`\.  
_Required_: Yes  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
