# AWS::Kendra::DataSource SalesforceStandardKnowledgeArticleTypeConfiguration<a name="aws-properties-kendra-datasource-salesforcestandardknowledgearticletypeconfiguration"></a>

Provides the configuration information for standard Salesforce knowledge articles\.

## Syntax<a name="aws-properties-kendra-datasource-salesforcestandardknowledgearticletypeconfiguration-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-kendra-datasource-salesforcestandardknowledgearticletypeconfiguration-syntax.json"></a>

```
{
  "[DocumentDataFieldName](#cfn-kendra-datasource-salesforcestandardknowledgearticletypeconfiguration-documentdatafieldname)" : String,
  "[DocumentTitleFieldName](#cfn-kendra-datasource-salesforcestandardknowledgearticletypeconfiguration-documenttitlefieldname)" : String,
  "[FieldMappings](#cfn-kendra-datasource-salesforcestandardknowledgearticletypeconfiguration-fieldmappings)" : [ DataSourceToIndexFieldMapping, ... ]
}
```

### YAML<a name="aws-properties-kendra-datasource-salesforcestandardknowledgearticletypeconfiguration-syntax.yaml"></a>

```
  [DocumentDataFieldName](#cfn-kendra-datasource-salesforcestandardknowledgearticletypeconfiguration-documentdatafieldname): String
  [DocumentTitleFieldName](#cfn-kendra-datasource-salesforcestandardknowledgearticletypeconfiguration-documenttitlefieldname): String
  [FieldMappings](#cfn-kendra-datasource-salesforcestandardknowledgearticletypeconfiguration-fieldmappings):
    - DataSourceToIndexFieldMapping
```

## Properties<a name="aws-properties-kendra-datasource-salesforcestandardknowledgearticletypeconfiguration-properties"></a>

`DocumentDataFieldName` <a name="cfn-kendra-datasource-salesforcestandardknowledgearticletypeconfiguration-documentdatafieldname"></a>
The name of the field that contains the document data to index\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `100`  
_Pattern_: `^[a-zA-Z][a-zA-Z0-9_.]*$`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`DocumentTitleFieldName` <a name="cfn-kendra-datasource-salesforcestandardknowledgearticletypeconfiguration-documenttitlefieldname"></a>
The name of the field that contains the document title\.  
_Required_: No  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `100`  
_Pattern_: `^[a-zA-Z][a-zA-Z0-9_.]*$`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`FieldMappings` <a name="cfn-kendra-datasource-salesforcestandardknowledgearticletypeconfiguration-fieldmappings"></a>
Maps attributes or field names of the knowledge article to Amazon Kendra index field names\. To create custom fields, use the `UpdateIndex` API before you map to Salesforce fields\. For more information, see [Mapping data source fields](https://docs.aws.amazon.com/kendra/latest/dg/field-mapping.html)\. The Salesforce data source field names must exist in your Salesforce custom metadata\.  
_Required_: No  
_Type_: List of [DataSourceToIndexFieldMapping](aws-properties-kendra-datasource-datasourcetoindexfieldmapping.md)  
_Maximum_: `100`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
