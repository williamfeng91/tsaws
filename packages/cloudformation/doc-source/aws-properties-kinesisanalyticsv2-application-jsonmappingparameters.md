# AWS::KinesisAnalyticsV2::Application JSONMappingParameters<a name="aws-properties-kinesisanalyticsv2-application-jsonmappingparameters"></a>

For a SQL\-based Kinesis Data Analytics application, provides additional mapping information when JSON is the record format on the streaming source\.

## Syntax<a name="aws-properties-kinesisanalyticsv2-application-jsonmappingparameters-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-kinesisanalyticsv2-application-jsonmappingparameters-syntax.json"></a>

```
{
  "[RecordRowPath](#cfn-kinesisanalyticsv2-application-jsonmappingparameters-recordrowpath)" : String
}
```

### YAML<a name="aws-properties-kinesisanalyticsv2-application-jsonmappingparameters-syntax.yaml"></a>

```
  [RecordRowPath](#cfn-kinesisanalyticsv2-application-jsonmappingparameters-recordrowpath): String
```

## Properties<a name="aws-properties-kinesisanalyticsv2-application-jsonmappingparameters-properties"></a>

`RecordRowPath` <a name="cfn-kinesisanalyticsv2-application-jsonmappingparameters-recordrowpath"></a>
The path to the top\-level parent that contains the records\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `65535`  
_Pattern_: `^(?=^\$)(?=^\S+$).*$`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

## See also<a name="aws-properties-kinesisanalyticsv2-application-jsonmappingparameters--seealso"></a>

- [JSONMappingParameters](https://docs.aws.amazon.com/kinesisanalytics/latest/apiv2/API_JSONMappingParameters.html) in the _Amazon Kinesis Data Analytics API Reference_
