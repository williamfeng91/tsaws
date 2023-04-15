# AWS::Kendra::DataSource ServiceNowKnowledgeArticleConfiguration<a name="aws-properties-kendra-datasource-servicenowknowledgearticleconfiguration"></a>

Provides the configuration information for crawling knowledge articles in the ServiceNow site\.

## Syntax<a name="aws-properties-kendra-datasource-servicenowknowledgearticleconfiguration-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-kendra-datasource-servicenowknowledgearticleconfiguration-syntax.json"></a>

```
{
  "[CrawlAttachments](#cfn-kendra-datasource-servicenowknowledgearticleconfiguration-crawlattachments)" : Boolean,
  "[DocumentDataFieldName](#cfn-kendra-datasource-servicenowknowledgearticleconfiguration-documentdatafieldname)" : String,
  "[DocumentTitleFieldName](#cfn-kendra-datasource-servicenowknowledgearticleconfiguration-documenttitlefieldname)" : String,
  "[ExcludeAttachmentFilePatterns](#cfn-kendra-datasource-servicenowknowledgearticleconfiguration-excludeattachmentfilepatterns)" : [ String, ... ],
  "[FieldMappings](#cfn-kendra-datasource-servicenowknowledgearticleconfiguration-fieldmappings)" : [ DataSourceToIndexFieldMapping, ... ],
  "[FilterQuery](#cfn-kendra-datasource-servicenowknowledgearticleconfiguration-filterquery)" : String,
  "[IncludeAttachmentFilePatterns](#cfn-kendra-datasource-servicenowknowledgearticleconfiguration-includeattachmentfilepatterns)" : [ String, ... ]
}
```

### YAML<a name="aws-properties-kendra-datasource-servicenowknowledgearticleconfiguration-syntax.yaml"></a>

```
  [CrawlAttachments](#cfn-kendra-datasource-servicenowknowledgearticleconfiguration-crawlattachments): Boolean
  [DocumentDataFieldName](#cfn-kendra-datasource-servicenowknowledgearticleconfiguration-documentdatafieldname): String
  [DocumentTitleFieldName](#cfn-kendra-datasource-servicenowknowledgearticleconfiguration-documenttitlefieldname): String
  [ExcludeAttachmentFilePatterns](#cfn-kendra-datasource-servicenowknowledgearticleconfiguration-excludeattachmentfilepatterns):
    - String
  [FieldMappings](#cfn-kendra-datasource-servicenowknowledgearticleconfiguration-fieldmappings):
    - DataSourceToIndexFieldMapping
  [FilterQuery](#cfn-kendra-datasource-servicenowknowledgearticleconfiguration-filterquery): String
  [IncludeAttachmentFilePatterns](#cfn-kendra-datasource-servicenowknowledgearticleconfiguration-includeattachmentfilepatterns):
    - String
```

## Properties<a name="aws-properties-kendra-datasource-servicenowknowledgearticleconfiguration-properties"></a>

`CrawlAttachments` <a name="cfn-kendra-datasource-servicenowknowledgearticleconfiguration-crawlattachments"></a>
`TRUE` to index attachments to knowledge articles\.  
_Required_: No  
_Type_: Boolean  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`DocumentDataFieldName` <a name="cfn-kendra-datasource-servicenowknowledgearticleconfiguration-documentdatafieldname"></a>
The name of the ServiceNow field that is mapped to the index document contents field in the Amazon Kendra index\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `100`  
_Pattern_: `^[a-zA-Z][a-zA-Z0-9_.]*$`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`DocumentTitleFieldName` <a name="cfn-kendra-datasource-servicenowknowledgearticleconfiguration-documenttitlefieldname"></a>
The name of the ServiceNow field that is mapped to the index document title field\.  
_Required_: No  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `100`  
_Pattern_: `^[a-zA-Z][a-zA-Z0-9_.]*$`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`ExcludeAttachmentFilePatterns` <a name="cfn-kendra-datasource-servicenowknowledgearticleconfiguration-excludeattachmentfilepatterns"></a>
A list of regular expression patterns to exclude certain attachments of knowledge articles in your ServiceNow\. Item that match the patterns are excluded from the index\. Items that don't match the patterns are included in the index\. If an item matches both an inclusion and exclusion pattern, the exclusion pattern takes precedence and the item isn't included in the index\.  
The regex is applied to the field specified in the `PatternTargetField`\.  
_Required_: No  
_Type_: List of String  
_Maximum_: `100`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`FieldMappings` <a name="cfn-kendra-datasource-servicenowknowledgearticleconfiguration-fieldmappings"></a>
Maps attributes or field names of knoweldge articles to Amazon Kendra index field names\. To create custom fields, use the `UpdateIndex` API before you map to ServiceNow fields\. For more information, see [Mapping data source fields](https://docs.aws.amazon.com/kendra/latest/dg/field-mapping.html)\. The ServiceNow data source field names must exist in your ServiceNow custom metadata\.  
_Required_: No  
_Type_: List of [DataSourceToIndexFieldMapping](aws-properties-kendra-datasource-datasourcetoindexfieldmapping.md)  
_Maximum_: `100`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`FilterQuery` <a name="cfn-kendra-datasource-servicenowknowledgearticleconfiguration-filterquery"></a>
A query that selects the knowledge articles to index\. The query can return articles from multiple knowledge bases, and the knowledge bases can be public or private\.  
The query string must be one generated by the ServiceNow console\. For more information, see [Specifying documents to index with a query](https://docs.aws.amazon.com/kendra/latest/dg/servicenow-query.html)\.  
_Required_: No  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `2048`  
_Pattern_: `^\P{C}*$`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`IncludeAttachmentFilePatterns` <a name="cfn-kendra-datasource-servicenowknowledgearticleconfiguration-includeattachmentfilepatterns"></a>
A list of regular expression patterns to include certain attachments of knowledge articles in your ServiceNow\. Item that match the patterns are included in the index\. Items that don't match the patterns are excluded from the index\. If an item matches both an inclusion and exclusion pattern, the exclusion pattern takes precedence and the item isn't included in the index\.  
The regex is applied to the field specified in the `PatternTargetField`\.  
_Required_: No  
_Type_: List of String  
_Maximum_: `100`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
