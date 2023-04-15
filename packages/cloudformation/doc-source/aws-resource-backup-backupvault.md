# AWS::Backup::BackupVault<a name="aws-resource-backup-backupvault"></a>

Creates a logical container where backups are stored\. A `CreateBackupVault` request includes a name, optionally one or more resource tags, an encryption key, and a request ID\.

Do not include sensitive data, such as passport numbers, in the name of a backup vault\.

For a sample AWS CloudFormation template, see the [AWS Backup Developer Guide](https://docs.aws.amazon.com/aws-backup/latest/devguide/assigning-resources.html#assigning-resources-cfn)\.

## Syntax<a name="aws-resource-backup-backupvault-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-resource-backup-backupvault-syntax.json"></a>

```
{
  "Type" : "AWS::Backup::BackupVault",
  "Properties" : {
      "[AccessPolicy](#cfn-backup-backupvault-accesspolicy)" : Json,
      "[BackupVaultName](#cfn-backup-backupvault-backupvaultname)" : String,
      "[BackupVaultTags](#cfn-backup-backupvault-backupvaulttags)" : {Key : Value, ...},
      "[EncryptionKeyArn](#cfn-backup-backupvault-encryptionkeyarn)" : String,
      "[LockConfiguration](#cfn-backup-backupvault-lockconfiguration)" : LockConfigurationType,
      "[Notifications](#cfn-backup-backupvault-notifications)" : NotificationObjectType
    }
}
```

### YAML<a name="aws-resource-backup-backupvault-syntax.yaml"></a>

```
Type: AWS::Backup::BackupVault
Properties:
  [AccessPolicy](#cfn-backup-backupvault-accesspolicy): Json
  [BackupVaultName](#cfn-backup-backupvault-backupvaultname): String
  [BackupVaultTags](#cfn-backup-backupvault-backupvaulttags):
    Key : Value
  [EncryptionKeyArn](#cfn-backup-backupvault-encryptionkeyarn): String
  [LockConfiguration](#cfn-backup-backupvault-lockconfiguration):
    LockConfigurationType
  [Notifications](#cfn-backup-backupvault-notifications):
    NotificationObjectType
```

## Properties<a name="aws-resource-backup-backupvault-properties"></a>

`AccessPolicy` <a name="cfn-backup-backupvault-accesspolicy"></a>
A resource\-based policy that is used to manage access permissions on the target backup vault\.  
_Required_: No  
_Type_: Json  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`BackupVaultName` <a name="cfn-backup-backupvault-backupvaultname"></a>
The name of a logical container where backups are stored\. Backup vaults are identified by names that are unique to the account used to create them and the AWS Region where they are created\. They consist of lowercase letters, numbers, and hyphens\.  
_Required_: Yes  
_Type_: String  
_Pattern_: `^[a-zA-Z0-9\-\_]{2,50}$`  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`BackupVaultTags` <a name="cfn-backup-backupvault-backupvaulttags"></a>
Metadata that you can assign to help organize the resources that you create\. Each tag is a key\-value pair\.  
_Required_: No  
_Type_: Map of String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`EncryptionKeyArn` <a name="cfn-backup-backupvault-encryptionkeyarn"></a>
A server\-side encryption key you can specify to encrypt your backups from services that support full AWS Backup management; for example, `arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab`\. If you specify a key, you must specify its ARN, not its alias\. If you do not specify a key, AWS Backup creates a KMS key for you by default\.  
To learn which AWS Backup services support full AWS Backup management and how AWS Backup handles encryption for backups from services that do not yet support full AWS Backup, see [ Encryption for backups in AWS Backup](https://docs.aws.amazon.com/aws-backup/latest/devguide/encryption.html)  
_Required_: No  
_Type_: String  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`LockConfiguration` <a name="cfn-backup-backupvault-lockconfiguration"></a>
Configuration for [AWS Backup Vault Lock](https://docs.aws.amazon.com/aws-backup/latest/devguide/vault-lock.html)\.  
_Required_: No  
_Type_: [LockConfigurationType](aws-properties-backup-backupvault-lockconfigurationtype.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Notifications` <a name="cfn-backup-backupvault-notifications"></a>
The SNS event notifications for the specified backup vault\.  
_Required_: No  
_Type_: [NotificationObjectType](aws-properties-backup-backupvault-notificationobjecttype.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

## Return values<a name="aws-resource-backup-backupvault-return-values"></a>

### Ref<a name="aws-resource-backup-backupvault-return-values-ref"></a>

When you pass the logical ID of this resource to the intrinsic `Ref` function, `Ref` returns `BackupVaultName`\.

### Fn::GetAtt<a name="aws-resource-backup-backupvault-return-values-fn--getatt"></a>

The `Fn::GetAtt` intrinsic function returns a value for a specified attribute of this type\. The following are the available attributes and sample return values\.

For more information about using the `Fn::GetAtt` intrinsic function, see [Fn::GetAtt](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference-getatt.html)\.

#### <a name="aws-resource-backup-backupvault-return-values-fn--getatt-fn--getatt"></a>

`BackupVaultArn` <a name="BackupVaultArn-fn::getatt"></a>
An Amazon Resource Name \(ARN\) that uniquely identifies a backup vault; for example, `arn:aws:backup:us-east-1:123456789012:backup-vault:aBackupVault`\.

`BackupVaultName` <a name="BackupVaultName-fn::getatt"></a>
The name of a logical container where backups are stored\. Backup vaults are identified by names that are unique to the account used to create them and the Region where they are created\. They consist of lowercase and uppercase letters, numbers, and hyphens\.
