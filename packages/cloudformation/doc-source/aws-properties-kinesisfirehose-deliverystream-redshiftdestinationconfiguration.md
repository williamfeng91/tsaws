# AWS::KinesisFirehose::DeliveryStream RedshiftDestinationConfiguration<a name="aws-properties-kinesisfirehose-deliverystream-redshiftdestinationconfiguration"></a>

The `RedshiftDestinationConfiguration` property type specifies an Amazon Redshift cluster to which Amazon Kinesis Data Firehose \(Kinesis Data Firehose\) delivers data\.

## Syntax<a name="aws-properties-kinesisfirehose-deliverystream-redshiftdestinationconfiguration-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-kinesisfirehose-deliverystream-redshiftdestinationconfiguration-syntax.json"></a>

```
{
  "[CloudWatchLoggingOptions](#cfn-kinesisfirehose-deliverystream-redshiftdestinationconfiguration-cloudwatchloggingoptions)" : CloudWatchLoggingOptions,
  "[ClusterJDBCURL](#cfn-kinesisfirehose-deliverystream-redshiftdestinationconfiguration-clusterjdbcurl)" : String,
  "[CopyCommand](#cfn-kinesisfirehose-deliverystream-redshiftdestinationconfiguration-copycommand)" : CopyCommand,
  "[Password](#cfn-kinesisfirehose-deliverystream-redshiftdestinationconfiguration-password)" : String,
  "[ProcessingConfiguration](#cfn-kinesisfirehose-deliverystream-redshiftdestinationconfiguration-processingconfiguration)" : ProcessingConfiguration,
  "[RetryOptions](#cfn-kinesisfirehose-deliverystream-redshiftdestinationconfiguration-retryoptions)" : RedshiftRetryOptions,
  "[RoleARN](#cfn-kinesisfirehose-deliverystream-redshiftdestinationconfiguration-rolearn)" : String,
  "[S3BackupConfiguration](#cfn-kinesisfirehose-deliverystream-redshiftdestinationconfiguration-s3backupconfiguration)" : S3DestinationConfiguration,
  "[S3BackupMode](#cfn-kinesisfirehose-deliverystream-redshiftdestinationconfiguration-s3backupmode)" : String,
  "[S3Configuration](#cfn-kinesisfirehose-deliverystream-redshiftdestinationconfiguration-s3configuration)" : S3DestinationConfiguration,
  "[Username](#cfn-kinesisfirehose-deliverystream-redshiftdestinationconfiguration-username)" : String
}
```

### YAML<a name="aws-properties-kinesisfirehose-deliverystream-redshiftdestinationconfiguration-syntax.yaml"></a>

```
  [CloudWatchLoggingOptions](#cfn-kinesisfirehose-deliverystream-redshiftdestinationconfiguration-cloudwatchloggingoptions):
    CloudWatchLoggingOptions
  [ClusterJDBCURL](#cfn-kinesisfirehose-deliverystream-redshiftdestinationconfiguration-clusterjdbcurl): String
  [CopyCommand](#cfn-kinesisfirehose-deliverystream-redshiftdestinationconfiguration-copycommand):
    CopyCommand
  [Password](#cfn-kinesisfirehose-deliverystream-redshiftdestinationconfiguration-password): String
  [ProcessingConfiguration](#cfn-kinesisfirehose-deliverystream-redshiftdestinationconfiguration-processingconfiguration):
    ProcessingConfiguration
  [RetryOptions](#cfn-kinesisfirehose-deliverystream-redshiftdestinationconfiguration-retryoptions):
    RedshiftRetryOptions
  [RoleARN](#cfn-kinesisfirehose-deliverystream-redshiftdestinationconfiguration-rolearn): String
  [S3BackupConfiguration](#cfn-kinesisfirehose-deliverystream-redshiftdestinationconfiguration-s3backupconfiguration):
    S3DestinationConfiguration
  [S3BackupMode](#cfn-kinesisfirehose-deliverystream-redshiftdestinationconfiguration-s3backupmode): String
  [S3Configuration](#cfn-kinesisfirehose-deliverystream-redshiftdestinationconfiguration-s3configuration):
    S3DestinationConfiguration
  [Username](#cfn-kinesisfirehose-deliverystream-redshiftdestinationconfiguration-username): String
```

## Properties<a name="aws-properties-kinesisfirehose-deliverystream-redshiftdestinationconfiguration-properties"></a>

`CloudWatchLoggingOptions` <a name="cfn-kinesisfirehose-deliverystream-redshiftdestinationconfiguration-cloudwatchloggingoptions"></a>
The CloudWatch logging options for your delivery stream\.  
_Required_: No  
_Type_: [CloudWatchLoggingOptions](aws-properties-kinesisfirehose-deliverystream-cloudwatchloggingoptions.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`ClusterJDBCURL` <a name="cfn-kinesisfirehose-deliverystream-redshiftdestinationconfiguration-clusterjdbcurl"></a>
The connection string that Kinesis Data Firehose uses to connect to the Amazon Redshift cluster\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `512`  
_Pattern_: `jdbc:(redshift|postgresql)://((?!-)[A-Za-z0-9-]{1,63}(?<!-)\.)+redshift\.([a-zA-Z0-9\.]+):\d{1,5}/[a-zA-Z0-9_$-]+`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`CopyCommand` <a name="cfn-kinesisfirehose-deliverystream-redshiftdestinationconfiguration-copycommand"></a>
Configures the Amazon Redshift `COPY` command that Kinesis Data Firehose uses to load data into the cluster from the Amazon S3 bucket\.  
_Required_: Yes  
_Type_: [CopyCommand](aws-properties-kinesisfirehose-deliverystream-copycommand.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Password` <a name="cfn-kinesisfirehose-deliverystream-redshiftdestinationconfiguration-password"></a>
The password for the Amazon Redshift user that you specified in the `Username` property\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `6`  
_Maximum_: `512`  
_Pattern_: `.*`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`ProcessingConfiguration` <a name="cfn-kinesisfirehose-deliverystream-redshiftdestinationconfiguration-processingconfiguration"></a>
The data processing configuration for the Kinesis Data Firehose delivery stream\.  
_Required_: No  
_Type_: [ProcessingConfiguration](aws-properties-kinesisfirehose-deliverystream-processingconfiguration.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`RetryOptions` <a name="cfn-kinesisfirehose-deliverystream-redshiftdestinationconfiguration-retryoptions"></a>
The retry behavior in case Kinesis Data Firehose is unable to deliver documents to Amazon Redshift\. Default value is 3600 \(60 minutes\)\.  
_Required_: No  
_Type_: [RedshiftRetryOptions](aws-properties-kinesisfirehose-deliverystream-redshiftretryoptions.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`RoleARN` <a name="cfn-kinesisfirehose-deliverystream-redshiftdestinationconfiguration-rolearn"></a>
The ARN of the AWS Identity and Access Management \(IAM\) role that grants Kinesis Data Firehose access to your Amazon S3 bucket and AWS KMS \(if you enable data encryption\)\. For more information, see [Grant Kinesis Data Firehose Access to an Amazon Redshift Destination](https://docs.aws.amazon.com/firehose/latest/dev/controlling-access.html#using-iam-rs) in the _Amazon Kinesis Data Firehose Developer Guide_\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `512`  
_Pattern_: `arn:.*`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`S3BackupConfiguration` <a name="cfn-kinesisfirehose-deliverystream-redshiftdestinationconfiguration-s3backupconfiguration"></a>
The configuration for backup in Amazon S3\.  
_Required_: No  
_Type_: [S3DestinationConfiguration](aws-properties-kinesisfirehose-deliverystream-s3destinationconfiguration.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`S3BackupMode` <a name="cfn-kinesisfirehose-deliverystream-redshiftdestinationconfiguration-s3backupmode"></a>
The Amazon S3 backup mode\. After you create a delivery stream, you can update it to enable Amazon S3 backup if it is disabled\. If backup is enabled, you can't update the delivery stream to disable it\.  
_Required_: No  
_Type_: String  
_Allowed values_: `Disabled | Enabled`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`S3Configuration` <a name="cfn-kinesisfirehose-deliverystream-redshiftdestinationconfiguration-s3configuration"></a>
The S3 bucket where Kinesis Data Firehose first delivers data\. After the data is in the bucket, Kinesis Data Firehose uses the `COPY` command to load the data into the Amazon Redshift cluster\. For the Amazon S3 bucket's compression format, don't specify `SNAPPY` or `ZIP` because the Amazon Redshift `COPY` command doesn't support them\.  
_Required_: Yes  
_Type_: [S3DestinationConfiguration](aws-properties-kinesisfirehose-deliverystream-s3destinationconfiguration.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Username` <a name="cfn-kinesisfirehose-deliverystream-redshiftdestinationconfiguration-username"></a>
The Amazon Redshift user that has permission to access the Amazon Redshift cluster\. This user must have `INSERT` privileges for copying data from the Amazon S3 bucket to the cluster\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `512`  
_Pattern_: `.*`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
