# AWS::KinesisAnalyticsV2::ApplicationReferenceDataSource CSVMappingParameters<a name="aws-properties-kinesisanalyticsv2-applicationreferencedatasource-csvmappingparameters"></a>

For a SQL\-based Kinesis Data Analytics application, provides additional mapping information when the record format uses delimiters, such as CSV\. For example, the following sample records use CSV format, where the records use the _'\\n'_ as the row delimiter and a comma \(","\) as the column delimiter:

`"name1", "address1"`

`"name2", "address2"`

## Syntax<a name="aws-properties-kinesisanalyticsv2-applicationreferencedatasource-csvmappingparameters-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-kinesisanalyticsv2-applicationreferencedatasource-csvmappingparameters-syntax.json"></a>

```
{
  "[RecordColumnDelimiter](#cfn-kinesisanalyticsv2-applicationreferencedatasource-csvmappingparameters-recordcolumndelimiter)" : String,
  "[RecordRowDelimiter](#cfn-kinesisanalyticsv2-applicationreferencedatasource-csvmappingparameters-recordrowdelimiter)" : String
}
```

### YAML<a name="aws-properties-kinesisanalyticsv2-applicationreferencedatasource-csvmappingparameters-syntax.yaml"></a>

```
  [RecordColumnDelimiter](#cfn-kinesisanalyticsv2-applicationreferencedatasource-csvmappingparameters-recordcolumndelimiter): String
  [RecordRowDelimiter](#cfn-kinesisanalyticsv2-applicationreferencedatasource-csvmappingparameters-recordrowdelimiter): String
```

## Properties<a name="aws-properties-kinesisanalyticsv2-applicationreferencedatasource-csvmappingparameters-properties"></a>

`RecordColumnDelimiter` <a name="cfn-kinesisanalyticsv2-applicationreferencedatasource-csvmappingparameters-recordcolumndelimiter"></a>
The column delimiter\. For example, in a CSV format, a comma \(","\) is the typical column delimiter\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `1024`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`RecordRowDelimiter` <a name="cfn-kinesisanalyticsv2-applicationreferencedatasource-csvmappingparameters-recordrowdelimiter"></a>
The row delimiter\. For example, in a CSV format, _'\\n'_ is the typical row delimiter\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `1024`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

## See also<a name="aws-properties-kinesisanalyticsv2-applicationreferencedatasource-csvmappingparameters--seealso"></a>

- [CSVMappingParameters](https://docs.aws.amazon.com/kinesisanalytics/latest/apiv2/API_CSVMappingParameters.html) in the _Amazon Kinesis Data Analytics API Reference_
