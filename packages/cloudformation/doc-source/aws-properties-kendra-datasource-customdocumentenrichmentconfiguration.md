# AWS::Kendra::DataSource CustomDocumentEnrichmentConfiguration<a name="aws-properties-kendra-datasource-customdocumentenrichmentconfiguration"></a>

Provides the configuration information for altering document metadata and content during the document ingestion process\.

For more information, see [Customizing document metadata during the ingestion process](https://docs.aws.amazon.com/kendra/latest/dg/custom-document-enrichment.html)\.

## Syntax<a name="aws-properties-kendra-datasource-customdocumentenrichmentconfiguration-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-kendra-datasource-customdocumentenrichmentconfiguration-syntax.json"></a>

```
{
  "[InlineConfigurations](#cfn-kendra-datasource-customdocumentenrichmentconfiguration-inlineconfigurations)" : [ InlineCustomDocumentEnrichmentConfiguration, ... ],
  "[PostExtractionHookConfiguration](#cfn-kendra-datasource-customdocumentenrichmentconfiguration-postextractionhookconfiguration)" : HookConfiguration,
  "[PreExtractionHookConfiguration](#cfn-kendra-datasource-customdocumentenrichmentconfiguration-preextractionhookconfiguration)" : HookConfiguration,
  "[RoleArn](#cfn-kendra-datasource-customdocumentenrichmentconfiguration-rolearn)" : String
}
```

### YAML<a name="aws-properties-kendra-datasource-customdocumentenrichmentconfiguration-syntax.yaml"></a>

```
  [InlineConfigurations](#cfn-kendra-datasource-customdocumentenrichmentconfiguration-inlineconfigurations):
    - InlineCustomDocumentEnrichmentConfiguration
  [PostExtractionHookConfiguration](#cfn-kendra-datasource-customdocumentenrichmentconfiguration-postextractionhookconfiguration):
    HookConfiguration
  [PreExtractionHookConfiguration](#cfn-kendra-datasource-customdocumentenrichmentconfiguration-preextractionhookconfiguration):
    HookConfiguration
  [RoleArn](#cfn-kendra-datasource-customdocumentenrichmentconfiguration-rolearn): String
```

## Properties<a name="aws-properties-kendra-datasource-customdocumentenrichmentconfiguration-properties"></a>

`InlineConfigurations` <a name="cfn-kendra-datasource-customdocumentenrichmentconfiguration-inlineconfigurations"></a>
Configuration information to alter document attributes or metadata fields and content when ingesting documents into Amazon Kendra\.  
_Required_: No  
_Type_: List of [InlineCustomDocumentEnrichmentConfiguration](aws-properties-kendra-datasource-inlinecustomdocumentenrichmentconfiguration.md)  
_Maximum_: `100`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`PostExtractionHookConfiguration` <a name="cfn-kendra-datasource-customdocumentenrichmentconfiguration-postextractionhookconfiguration"></a>
Configuration information for invoking a Lambda function in AWS Lambda on the structured documents with their metadata and text extracted\. You can use a Lambda function to apply advanced logic for creating, modifying, or deleting document metadata and content\. For more information, see [Advanced data manipulation](https://docs.aws.amazon.com/kendra/latest/dg/custom-document-enrichment.html#advanced-data-manipulation)\.  
_Required_: No  
_Type_: [HookConfiguration](aws-properties-kendra-datasource-hookconfiguration.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`PreExtractionHookConfiguration` <a name="cfn-kendra-datasource-customdocumentenrichmentconfiguration-preextractionhookconfiguration"></a>
Configuration information for invoking a Lambda function in AWS Lambda on the original or raw documents before extracting their metadata and text\. You can use a Lambda function to apply advanced logic for creating, modifying, or deleting document metadata and content\. For more information, see [Advanced data manipulation](https://docs.aws.amazon.com/kendra/latest/dg/custom-document-enrichment.html#advanced-data-manipulation)\.  
_Required_: No  
_Type_: [HookConfiguration](aws-properties-kendra-datasource-hookconfiguration.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`RoleArn` <a name="cfn-kendra-datasource-customdocumentenrichmentconfiguration-rolearn"></a>
The Amazon Resource Name \(ARN\) of a role with permission to run `PreExtractionHookConfiguration` and `PostExtractionHookConfiguration` for altering document metadata and content during the document ingestion process\. For more information, see [IAM roles for Amazon Kendra](https://docs.aws.amazon.com/kendra/latest/dg/iam-roles.html)\.  
_Required_: No  
_Type_: String  
_Minimum_: `0`  
_Maximum_: `1284`  
_Pattern_: `arn:[a-z0-9-\.]{1,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[^/].{0,1023}`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
