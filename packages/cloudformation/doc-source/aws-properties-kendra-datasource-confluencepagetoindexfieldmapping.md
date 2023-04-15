# AWS::Kendra::DataSource ConfluencePageToIndexFieldMapping<a name="aws-properties-kendra-datasource-confluencepagetoindexfieldmapping"></a>

Maps attributes or field names of Confluence pages to Amazon Kendra index field names\. To create custom fields, use the `UpdateIndex` API before you map to Confluence fields\. For more information, see [Mapping data source fields](https://docs.aws.amazon.com/kendra/latest/dg/field-mapping.html)\. The Confluence data source field names must exist in your Confluence custom metadata\.

## Syntax<a name="aws-properties-kendra-datasource-confluencepagetoindexfieldmapping-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-kendra-datasource-confluencepagetoindexfieldmapping-syntax.json"></a>

```
{
  "[DataSourceFieldName](#cfn-kendra-datasource-confluencepagetoindexfieldmapping-datasourcefieldname)" : String,
  "[DateFieldFormat](#cfn-kendra-datasource-confluencepagetoindexfieldmapping-datefieldformat)" : String,
  "[IndexFieldName](#cfn-kendra-datasource-confluencepagetoindexfieldmapping-indexfieldname)" : String
}
```

### YAML<a name="aws-properties-kendra-datasource-confluencepagetoindexfieldmapping-syntax.yaml"></a>

```
  [DataSourceFieldName](#cfn-kendra-datasource-confluencepagetoindexfieldmapping-datasourcefieldname): String
  [DateFieldFormat](#cfn-kendra-datasource-confluencepagetoindexfieldmapping-datefieldformat): String
  [IndexFieldName](#cfn-kendra-datasource-confluencepagetoindexfieldmapping-indexfieldname): String
```

## Properties<a name="aws-properties-kendra-datasource-confluencepagetoindexfieldmapping-properties"></a>

`DataSourceFieldName` <a name="cfn-kendra-datasource-confluencepagetoindexfieldmapping-datasourcefieldname"></a>
The name of the field in the data source\.  
_Required_: Yes  
_Type_: String  
_Allowed values_: `AUTHOR | CONTENT_STATUS | CREATED_DATE | DISPLAY_URL | ITEM_TYPE | LABELS | MODIFIED_DATE | PARENT_ID | SPACE_KEY | SPACE_NAME | URL | VERSION`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`DateFieldFormat` <a name="cfn-kendra-datasource-confluencepagetoindexfieldmapping-datefieldformat"></a>
The format for date fields in the data source\. If the field specified in `DataSourceFieldName` is a date field you must specify the date format\. If the field is not a date field, an exception is thrown\.  
_Required_: No  
_Type_: String  
_Minimum_: `4`  
_Maximum_: `40`  
_Pattern_: `^(?!\s).*(?<!\s)$`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`IndexFieldName` <a name="cfn-kendra-datasource-confluencepagetoindexfieldmapping-indexfieldname"></a>
The name of the index field to map to the Confluence data source field\. The index field type must match the Confluence field type\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `30`  
_Pattern_: `^\P{C}*$`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
