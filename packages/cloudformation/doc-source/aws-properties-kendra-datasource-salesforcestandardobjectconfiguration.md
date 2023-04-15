# AWS::Kendra::DataSource SalesforceStandardObjectConfiguration<a name="aws-properties-kendra-datasource-salesforcestandardobjectconfiguration"></a>

Specifies configuration information for indexing a single standard object\.

## Syntax<a name="aws-properties-kendra-datasource-salesforcestandardobjectconfiguration-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-kendra-datasource-salesforcestandardobjectconfiguration-syntax.json"></a>

```
{
  "[DocumentDataFieldName](#cfn-kendra-datasource-salesforcestandardobjectconfiguration-documentdatafieldname)" : String,
  "[DocumentTitleFieldName](#cfn-kendra-datasource-salesforcestandardobjectconfiguration-documenttitlefieldname)" : String,
  "[FieldMappings](#cfn-kendra-datasource-salesforcestandardobjectconfiguration-fieldmappings)" : [ DataSourceToIndexFieldMapping, ... ],
  "[Name](#cfn-kendra-datasource-salesforcestandardobjectconfiguration-name)" : String
}
```

### YAML<a name="aws-properties-kendra-datasource-salesforcestandardobjectconfiguration-syntax.yaml"></a>

```
  [DocumentDataFieldName](#cfn-kendra-datasource-salesforcestandardobjectconfiguration-documentdatafieldname): String
  [DocumentTitleFieldName](#cfn-kendra-datasource-salesforcestandardobjectconfiguration-documenttitlefieldname): String
  [FieldMappings](#cfn-kendra-datasource-salesforcestandardobjectconfiguration-fieldmappings):
    - DataSourceToIndexFieldMapping
  [Name](#cfn-kendra-datasource-salesforcestandardobjectconfiguration-name): String
```

## Properties<a name="aws-properties-kendra-datasource-salesforcestandardobjectconfiguration-properties"></a>

`DocumentDataFieldName` <a name="cfn-kendra-datasource-salesforcestandardobjectconfiguration-documentdatafieldname"></a>
The name of the field in the standard object table that contains the document contents\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `100`  
_Pattern_: `^[a-zA-Z][a-zA-Z0-9_.]*$`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`DocumentTitleFieldName` <a name="cfn-kendra-datasource-salesforcestandardobjectconfiguration-documenttitlefieldname"></a>
The name of the field in the standard object table that contains the document title\.  
_Required_: No  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `100`  
_Pattern_: `^[a-zA-Z][a-zA-Z0-9_.]*$`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`FieldMappings` <a name="cfn-kendra-datasource-salesforcestandardobjectconfiguration-fieldmappings"></a>
Maps attributes or field names of the standard object to Amazon Kendra index field names\. To create custom fields, use the `UpdateIndex` API before you map to Salesforce fields\. For more information, see [Mapping data source fields](https://docs.aws.amazon.com/kendra/latest/dg/field-mapping.html)\. The Salesforce data source field names must exist in your Salesforce custom metadata\.  
_Required_: No  
_Type_: List of [DataSourceToIndexFieldMapping](aws-properties-kendra-datasource-datasourcetoindexfieldmapping.md)  
_Maximum_: `100`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Name` <a name="cfn-kendra-datasource-salesforcestandardobjectconfiguration-name"></a>
The name of the standard object\.  
_Required_: Yes  
_Type_: String  
_Allowed values_: `ACCOUNT | CAMPAIGN | CASE | CONTACT | CONTRACT | DOCUMENT | GROUP | IDEA | LEAD | OPPORTUNITY | PARTNER | PRICEBOOK | PRODUCT | PROFILE | SOLUTION | TASK | USER`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
