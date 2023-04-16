# AWS::KinesisFirehose::DeliveryStream CopyCommand<a name="aws-properties-kinesisfirehose-deliverystream-copycommand"></a>

The `CopyCommand` property type configures the Amazon Redshift `COPY` command that Amazon Kinesis Data Firehose \(Kinesis Data Firehose\) uses to load data into an Amazon Redshift cluster from an Amazon S3 bucket\.

## Syntax<a name="aws-properties-kinesisfirehose-deliverystream-copycommand-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-kinesisfirehose-deliverystream-copycommand-syntax.json"></a>

```
{
  "[CopyOptions](#cfn-kinesisfirehose-deliverystream-copycommand-copyoptions)" : String,
  "[DataTableColumns](#cfn-kinesisfirehose-deliverystream-copycommand-datatablecolumns)" : String,
  "[DataTableName](#cfn-kinesisfirehose-deliverystream-copycommand-datatablename)" : String
}
```

### YAML<a name="aws-properties-kinesisfirehose-deliverystream-copycommand-syntax.yaml"></a>

```
  [CopyOptions](#cfn-kinesisfirehose-deliverystream-copycommand-copyoptions): String
  [DataTableColumns](#cfn-kinesisfirehose-deliverystream-copycommand-datatablecolumns): String
  [DataTableName](#cfn-kinesisfirehose-deliverystream-copycommand-datatablename): String
```

## Properties<a name="aws-properties-kinesisfirehose-deliverystream-copycommand-properties"></a>

`CopyOptions` <a name="cfn-kinesisfirehose-deliverystream-copycommand-copyoptions"></a>
Parameters to use with the Amazon Redshift `COPY` command\. For examples, see the `CopyOptions` content for the [CopyCommand](https://docs.aws.amazon.com/firehose/latest/APIReference/API_CopyCommand.html) data type in the _Amazon Kinesis Data Firehose API Reference_\.  
_Required_: No  
_Type_: String  
_Minimum_: `0`  
_Maximum_: `204800`  
_Pattern_: `.*`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`DataTableColumns` <a name="cfn-kinesisfirehose-deliverystream-copycommand-datatablecolumns"></a>
A comma\-separated list of column names\.  
_Required_: No  
_Type_: String  
_Minimum_: `0`  
_Maximum_: `204800`  
_Pattern_: `.*`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`DataTableName` <a name="cfn-kinesisfirehose-deliverystream-copycommand-datatablename"></a>
The name of the target table\. The table must already exist in the database\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `512`  
_Pattern_: `.*`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
