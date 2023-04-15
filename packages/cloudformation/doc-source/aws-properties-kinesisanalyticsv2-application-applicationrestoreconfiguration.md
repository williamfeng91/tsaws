# AWS::KinesisAnalyticsV2::Application ApplicationRestoreConfiguration<a name="aws-properties-kinesisanalyticsv2-application-applicationrestoreconfiguration"></a>

Specifies the method and snapshot to use when restarting an application using previously saved application state\.

## Syntax<a name="aws-properties-kinesisanalyticsv2-application-applicationrestoreconfiguration-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-kinesisanalyticsv2-application-applicationrestoreconfiguration-syntax.json"></a>

```
{
  "[ApplicationRestoreType](#cfn-kinesisanalyticsv2-application-applicationrestoreconfiguration-applicationrestoretype)" : String,
  "[SnapshotName](#cfn-kinesisanalyticsv2-application-applicationrestoreconfiguration-snapshotname)" : String
}
```

### YAML<a name="aws-properties-kinesisanalyticsv2-application-applicationrestoreconfiguration-syntax.yaml"></a>

```
  [ApplicationRestoreType](#cfn-kinesisanalyticsv2-application-applicationrestoreconfiguration-applicationrestoretype): String
  [SnapshotName](#cfn-kinesisanalyticsv2-application-applicationrestoreconfiguration-snapshotname): String
```

## Properties<a name="aws-properties-kinesisanalyticsv2-application-applicationrestoreconfiguration-properties"></a>

`ApplicationRestoreType` <a name="cfn-kinesisanalyticsv2-application-applicationrestoreconfiguration-applicationrestoretype"></a>
Specifies how the application should be restored\.  
_Required_: Yes  
_Type_: String  
_Allowed values_: `RESTORE_FROM_CUSTOM_SNAPSHOT | RESTORE_FROM_LATEST_SNAPSHOT | SKIP_RESTORE_FROM_SNAPSHOT`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`SnapshotName` <a name="cfn-kinesisanalyticsv2-application-applicationrestoreconfiguration-snapshotname"></a>
The identifier of an existing snapshot of application state to use to restart an application\. The application uses this value if `RESTORE_FROM_CUSTOM_SNAPSHOT` is specified for the `ApplicationRestoreType`\.  
_Required_: No  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `256`  
_Pattern_: `[a-zA-Z0-9_.-]+`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
