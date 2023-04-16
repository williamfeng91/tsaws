# AWS::Kendra::DataSource SalesforceCustomKnowledgeArticleTypeConfiguration<a name="aws-properties-kendra-datasource-salesforcecustomknowledgearticletypeconfiguration"></a>

Provides the configuration information for indexing Salesforce custom articles\.

## Syntax<a name="aws-properties-kendra-datasource-salesforcecustomknowledgearticletypeconfiguration-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-kendra-datasource-salesforcecustomknowledgearticletypeconfiguration-syntax.json"></a>

```
{
  "[DocumentDataFieldName](#cfn-kendra-datasource-salesforcecustomknowledgearticletypeconfiguration-documentdatafieldname)" : String,
  "[DocumentTitleFieldName](#cfn-kendra-datasource-salesforcecustomknowledgearticletypeconfiguration-documenttitlefieldname)" : String,
  "[FieldMappings](#cfn-kendra-datasource-salesforcecustomknowledgearticletypeconfiguration-fieldmappings)" : [ DataSourceToIndexFieldMapping, ... ],
  "[Name](#cfn-kendra-datasource-salesforcecustomknowledgearticletypeconfiguration-name)" : String
}
```

### YAML<a name="aws-properties-kendra-datasource-salesforcecustomknowledgearticletypeconfiguration-syntax.yaml"></a>

```
  [DocumentDataFieldName](#cfn-kendra-datasource-salesforcecustomknowledgearticletypeconfiguration-documentdatafieldname): String
  [DocumentTitleFieldName](#cfn-kendra-datasource-salesforcecustomknowledgearticletypeconfiguration-documenttitlefieldname): String
  [FieldMappings](#cfn-kendra-datasource-salesforcecustomknowledgearticletypeconfiguration-fieldmappings):
    - DataSourceToIndexFieldMapping
  [Name](#cfn-kendra-datasource-salesforcecustomknowledgearticletypeconfiguration-name): String
```

## Properties<a name="aws-properties-kendra-datasource-salesforcecustomknowledgearticletypeconfiguration-properties"></a>

`DocumentDataFieldName` <a name="cfn-kendra-datasource-salesforcecustomknowledgearticletypeconfiguration-documentdatafieldname"></a>
The name of the field in the custom knowledge article that contains the document data to index\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `100`  
_Pattern_: `^[a-zA-Z][a-zA-Z0-9_.]*$`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`DocumentTitleFieldName` <a name="cfn-kendra-datasource-salesforcecustomknowledgearticletypeconfiguration-documenttitlefieldname"></a>
The name of the field in the custom knowledge article that contains the document title\.  
_Required_: No  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `100`  
_Pattern_: `^[a-zA-Z][a-zA-Z0-9_.]*$`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`FieldMappings` <a name="cfn-kendra-datasource-salesforcecustomknowledgearticletypeconfiguration-fieldmappings"></a>
Maps attributes or field names of the custom knowledge article to Amazon Kendra index field names\. To create custom fields, use the `UpdateIndex` API before you map to Salesforce fields\. For more information, see [Mapping data source fields](https://docs.aws.amazon.com/kendra/latest/dg/field-mapping.html)\. The Salesforce data source field names must exist in your Salesforce custom metadata\.  
_Required_: No  
_Type_: List of [DataSourceToIndexFieldMapping](aws-properties-kendra-datasource-datasourcetoindexfieldmapping.md)  
_Maximum_: `100`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Name` <a name="cfn-kendra-datasource-salesforcecustomknowledgearticletypeconfiguration-name"></a>
The name of the configuration\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `100`  
_Pattern_: `^[a-zA-Z][a-zA-Z0-9_]*$`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
