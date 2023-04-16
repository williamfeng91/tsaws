# AWS::IoTAnalytics::Datastore TimestampPartition<a name="aws-properties-iotanalytics-datastore-timestamppartition"></a>

A partition dimension defined by a timestamp attribute\.

## Syntax<a name="aws-properties-iotanalytics-datastore-timestamppartition-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-iotanalytics-datastore-timestamppartition-syntax.json"></a>

```
{
  "[AttributeName](#cfn-iotanalytics-datastore-timestamppartition-attributename)" : String,
  "[TimestampFormat](#cfn-iotanalytics-datastore-timestamppartition-timestampformat)" : String
}
```

### YAML<a name="aws-properties-iotanalytics-datastore-timestamppartition-syntax.yaml"></a>

```
  [AttributeName](#cfn-iotanalytics-datastore-timestamppartition-attributename): String
  [TimestampFormat](#cfn-iotanalytics-datastore-timestamppartition-timestampformat): String
```

## Properties<a name="aws-properties-iotanalytics-datastore-timestamppartition-properties"></a>

`AttributeName` <a name="cfn-iotanalytics-datastore-timestamppartition-attributename"></a>
The attribute name of the partition defined by a timestamp\.  
_Required_: Yes  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`TimestampFormat` <a name="cfn-iotanalytics-datastore-timestamppartition-timestampformat"></a>
The timestamp format of a partition defined by a timestamp\. The default format is seconds since epoch \(January 1, 1970 at midnight UTC time\)\.  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
