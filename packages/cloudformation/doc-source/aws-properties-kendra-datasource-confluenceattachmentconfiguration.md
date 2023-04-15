# AWS::Kendra::DataSource ConfluenceAttachmentConfiguration<a name="aws-properties-kendra-datasource-confluenceattachmentconfiguration"></a>

Configuration of attachment settings for the Confluence data source\. Attachment settings are optional, if you don't specify settings attachments, Amazon Kendra won't index them\.

## Syntax<a name="aws-properties-kendra-datasource-confluenceattachmentconfiguration-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-kendra-datasource-confluenceattachmentconfiguration-syntax.json"></a>

```
{
  "[AttachmentFieldMappings](#cfn-kendra-datasource-confluenceattachmentconfiguration-attachmentfieldmappings)" : [ ConfluenceAttachmentToIndexFieldMapping, ... ],
  "[CrawlAttachments](#cfn-kendra-datasource-confluenceattachmentconfiguration-crawlattachments)" : Boolean
}
```

### YAML<a name="aws-properties-kendra-datasource-confluenceattachmentconfiguration-syntax.yaml"></a>

```
  [AttachmentFieldMappings](#cfn-kendra-datasource-confluenceattachmentconfiguration-attachmentfieldmappings):
    - ConfluenceAttachmentToIndexFieldMapping
  [CrawlAttachments](#cfn-kendra-datasource-confluenceattachmentconfiguration-crawlattachments): Boolean
```

## Properties<a name="aws-properties-kendra-datasource-confluenceattachmentconfiguration-properties"></a>

`AttachmentFieldMappings` <a name="cfn-kendra-datasource-confluenceattachmentconfiguration-attachmentfieldmappings"></a>
Maps attributes or field names of Confluence attachments to Amazon Kendra index field names\. To create custom fields, use the `UpdateIndex` API before you map to Confluence fields\. For more information, see [Mapping data source fields](https://docs.aws.amazon.com/kendra/latest/dg/field-mapping.html)\. The Confluence data source field names must exist in your Confluence custom metadata\.  
If you specify the `AttachentFieldMappings` parameter, you must specify at least one field mapping\.  
_Required_: No  
_Type_: List of [ConfluenceAttachmentToIndexFieldMapping](aws-properties-kendra-datasource-confluenceattachmenttoindexfieldmapping.md)  
_Maximum_: `11`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`CrawlAttachments` <a name="cfn-kendra-datasource-confluenceattachmentconfiguration-crawlattachments"></a>
`TRUE` to index attachments of pages and blogs in Confluence\.  
_Required_: No  
_Type_: Boolean  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
