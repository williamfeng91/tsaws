# AWS::IoTAnalytics::Datastore CustomerManagedS3<a name="aws-properties-iotanalytics-datastore-customermanageds3"></a>

S3\-customer\-managed; When you choose customer\-managed storage, the `retentionPeriod` parameter is ignored\. You can't change the choice of Amazon S3 storage after your data store is created\.

## Syntax<a name="aws-properties-iotanalytics-datastore-customermanageds3-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-iotanalytics-datastore-customermanageds3-syntax.json"></a>

```
{
  "[Bucket](#cfn-iotanalytics-datastore-customermanageds3-bucket)" : String,
  "[KeyPrefix](#cfn-iotanalytics-datastore-customermanageds3-keyprefix)" : String,
  "[RoleArn](#cfn-iotanalytics-datastore-customermanageds3-rolearn)" : String
}
```

### YAML<a name="aws-properties-iotanalytics-datastore-customermanageds3-syntax.yaml"></a>

```
  [Bucket](#cfn-iotanalytics-datastore-customermanageds3-bucket): String
  [KeyPrefix](#cfn-iotanalytics-datastore-customermanageds3-keyprefix): String
  [RoleArn](#cfn-iotanalytics-datastore-customermanageds3-rolearn): String
```

## Properties<a name="aws-properties-iotanalytics-datastore-customermanageds3-properties"></a>

`Bucket` <a name="cfn-iotanalytics-datastore-customermanageds3-bucket"></a>
The name of the Amazon S3 bucket where your data is stored\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `3`  
_Maximum_: `255`  
_Pattern_: `^[a-zA-Z0-9.\-_]*$`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`KeyPrefix` <a name="cfn-iotanalytics-datastore-customermanageds3-keyprefix"></a>
\(Optional\) The prefix used to create the keys of the data store data objects\. Each object in an Amazon S3 bucket has a key that is its unique identifier in the bucket\. Each object in a bucket has exactly one key\. The prefix must end with a forward slash \(/\)\.  
_Required_: No  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `255`  
_Pattern_: `^[a-zA-Z0-9!_.*'()/{}:-]*/$`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`RoleArn` <a name="cfn-iotanalytics-datastore-customermanageds3-rolearn"></a>
The ARN of the role that grants AWS IoT Analytics permission to interact with your Amazon S3 resources\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `20`  
_Maximum_: `2048`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
