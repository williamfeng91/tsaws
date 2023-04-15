# AWS::KinesisAnalyticsV2::ApplicationReferenceDataSource ReferenceSchema<a name="aws-properties-kinesisanalyticsv2-applicationreferencedatasource-referenceschema"></a>

For a SQL\-based Kinesis Data Analytics application, describes the format of the data in the streaming source, and how each data element maps to corresponding columns created in the in\-application stream\.

## Syntax<a name="aws-properties-kinesisanalyticsv2-applicationreferencedatasource-referenceschema-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-kinesisanalyticsv2-applicationreferencedatasource-referenceschema-syntax.json"></a>

```
{
  "[RecordColumns](#cfn-kinesisanalyticsv2-applicationreferencedatasource-referenceschema-recordcolumns)" : [ RecordColumn, ... ],
  "[RecordEncoding](#cfn-kinesisanalyticsv2-applicationreferencedatasource-referenceschema-recordencoding)" : String,
  "[RecordFormat](#cfn-kinesisanalyticsv2-applicationreferencedatasource-referenceschema-recordformat)" : RecordFormat
}
```

### YAML<a name="aws-properties-kinesisanalyticsv2-applicationreferencedatasource-referenceschema-syntax.yaml"></a>

```
  [RecordColumns](#cfn-kinesisanalyticsv2-applicationreferencedatasource-referenceschema-recordcolumns):
    - RecordColumn
  [RecordEncoding](#cfn-kinesisanalyticsv2-applicationreferencedatasource-referenceschema-recordencoding): String
  [RecordFormat](#cfn-kinesisanalyticsv2-applicationreferencedatasource-referenceschema-recordformat):
    RecordFormat
```

## Properties<a name="aws-properties-kinesisanalyticsv2-applicationreferencedatasource-referenceschema-properties"></a>

`RecordColumns` <a name="cfn-kinesisanalyticsv2-applicationreferencedatasource-referenceschema-recordcolumns"></a>
A list of `RecordColumn` objects\.  
_Required_: Yes  
_Type_: List of [RecordColumn](aws-properties-kinesisanalyticsv2-applicationreferencedatasource-recordcolumn.md)  
_Maximum_: `1000`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`RecordEncoding` <a name="cfn-kinesisanalyticsv2-applicationreferencedatasource-referenceschema-recordencoding"></a>
Specifies the encoding of the records in the streaming source\. For example, UTF\-8\.  
_Required_: No  
_Type_: String  
_Minimum_: `5`  
_Maximum_: `5`  
_Pattern_: `UTF-8`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`RecordFormat` <a name="cfn-kinesisanalyticsv2-applicationreferencedatasource-referenceschema-recordformat"></a>
Specifies the format of the records on the streaming source\.  
_Required_: Yes  
_Type_: [RecordFormat](aws-properties-kinesisanalyticsv2-applicationreferencedatasource-recordformat.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

## See also<a name="aws-properties-kinesisanalyticsv2-applicationreferencedatasource-referenceschema--seealso"></a>

- [SourceSchema](https://docs.aws.amazon.com/kinesisanalytics/latest/apiv2/API_SourceSchema.html) in the _Amazon Kinesis Data Analytics API Reference_
