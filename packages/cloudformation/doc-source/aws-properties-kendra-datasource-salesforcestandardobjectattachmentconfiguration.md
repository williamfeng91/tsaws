# AWS::Kendra::DataSource SalesforceStandardObjectAttachmentConfiguration<a name="aws-properties-kendra-datasource-salesforcestandardobjectattachmentconfiguration"></a>

Provides the configuration information for processing attachments to Salesforce standard objects\.

## Syntax<a name="aws-properties-kendra-datasource-salesforcestandardobjectattachmentconfiguration-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-kendra-datasource-salesforcestandardobjectattachmentconfiguration-syntax.json"></a>

```
{
  "[DocumentTitleFieldName](#cfn-kendra-datasource-salesforcestandardobjectattachmentconfiguration-documenttitlefieldname)" : String,
  "[FieldMappings](#cfn-kendra-datasource-salesforcestandardobjectattachmentconfiguration-fieldmappings)" : [ DataSourceToIndexFieldMapping, ... ]
}
```

### YAML<a name="aws-properties-kendra-datasource-salesforcestandardobjectattachmentconfiguration-syntax.yaml"></a>

```
  [DocumentTitleFieldName](#cfn-kendra-datasource-salesforcestandardobjectattachmentconfiguration-documenttitlefieldname): String
  [FieldMappings](#cfn-kendra-datasource-salesforcestandardobjectattachmentconfiguration-fieldmappings):
    - DataSourceToIndexFieldMapping
```

## Properties<a name="aws-properties-kendra-datasource-salesforcestandardobjectattachmentconfiguration-properties"></a>

`DocumentTitleFieldName` <a name="cfn-kendra-datasource-salesforcestandardobjectattachmentconfiguration-documenttitlefieldname"></a>
The name of the field used for the document title\.  
_Required_: No  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `100`  
_Pattern_: `^[a-zA-Z][a-zA-Z0-9_.]*$`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`FieldMappings` <a name="cfn-kendra-datasource-salesforcestandardobjectattachmentconfiguration-fieldmappings"></a>
One or more objects that map fields in attachments to Amazon Kendra index fields\.  
_Required_: No  
_Type_: List of [DataSourceToIndexFieldMapping](aws-properties-kendra-datasource-datasourcetoindexfieldmapping.md)  
_Maximum_: `100`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
