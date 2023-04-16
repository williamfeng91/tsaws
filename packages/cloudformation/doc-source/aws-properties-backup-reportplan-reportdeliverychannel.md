# AWS::Backup::ReportPlan ReportDeliveryChannel<a name="aws-properties-backup-reportplan-reportdeliverychannel"></a>

Contains information from your report plan about where to deliver your reports, specifically your Amazon S3 bucket name, S3 key prefix, and the formats of your reports\.

## Syntax<a name="aws-properties-backup-reportplan-reportdeliverychannel-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-backup-reportplan-reportdeliverychannel-syntax.json"></a>

```
{
  "[Formats](#cfn-backup-reportplan-reportdeliverychannel-formats)" : [ String, ... ],
  "[S3BucketName](#cfn-backup-reportplan-reportdeliverychannel-s3bucketname)" : String,
  "[S3KeyPrefix](#cfn-backup-reportplan-reportdeliverychannel-s3keyprefix)" : String
}
```

### YAML<a name="aws-properties-backup-reportplan-reportdeliverychannel-syntax.yaml"></a>

```
  [Formats](#cfn-backup-reportplan-reportdeliverychannel-formats):
    - String
  [S3BucketName](#cfn-backup-reportplan-reportdeliverychannel-s3bucketname): String
  [S3KeyPrefix](#cfn-backup-reportplan-reportdeliverychannel-s3keyprefix): String
```

## Properties<a name="aws-properties-backup-reportplan-reportdeliverychannel-properties"></a>

`Formats` <a name="cfn-backup-reportplan-reportdeliverychannel-formats"></a>
A list of the format of your reports: `CSV`, `JSON`, or both\. If not specified, the default format is `CSV`\.  
_Required_: No  
_Type_: List of String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`S3BucketName` <a name="cfn-backup-reportplan-reportdeliverychannel-s3bucketname"></a>
The unique name of the S3 bucket that receives your reports\.  
_Required_: Yes  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`S3KeyPrefix` <a name="cfn-backup-reportplan-reportdeliverychannel-s3keyprefix"></a>
The prefix for where AWS Backup Audit Manager delivers your reports to Amazon S3\. The prefix is this part of the following path: s3://your\-bucket\-name/`prefix`/Backup/us\-west\-2/year/month/day/report\-name\. If not specified, there is no prefix\.  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
