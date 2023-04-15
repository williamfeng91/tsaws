# AWS::Kendra::DataSource SalesforceConfiguration<a name="aws-properties-kendra-datasource-salesforceconfiguration"></a>

Provides the configuration information to connect to Salesforce as your data source\.

## Syntax<a name="aws-properties-kendra-datasource-salesforceconfiguration-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-kendra-datasource-salesforceconfiguration-syntax.json"></a>

```
{
  "[ChatterFeedConfiguration](#cfn-kendra-datasource-salesforceconfiguration-chatterfeedconfiguration)" : SalesforceChatterFeedConfiguration,
  "[CrawlAttachments](#cfn-kendra-datasource-salesforceconfiguration-crawlattachments)" : Boolean,
  "[ExcludeAttachmentFilePatterns](#cfn-kendra-datasource-salesforceconfiguration-excludeattachmentfilepatterns)" : [ String, ... ],
  "[IncludeAttachmentFilePatterns](#cfn-kendra-datasource-salesforceconfiguration-includeattachmentfilepatterns)" : [ String, ... ],
  "[KnowledgeArticleConfiguration](#cfn-kendra-datasource-salesforceconfiguration-knowledgearticleconfiguration)" : SalesforceKnowledgeArticleConfiguration,
  "[SecretArn](#cfn-kendra-datasource-salesforceconfiguration-secretarn)" : String,
  "[ServerUrl](#cfn-kendra-datasource-salesforceconfiguration-serverurl)" : String,
  "[StandardObjectAttachmentConfiguration](#cfn-kendra-datasource-salesforceconfiguration-standardobjectattachmentconfiguration)" : SalesforceStandardObjectAttachmentConfiguration,
  "[StandardObjectConfigurations](#cfn-kendra-datasource-salesforceconfiguration-standardobjectconfigurations)" : [ SalesforceStandardObjectConfiguration, ... ]
}
```

### YAML<a name="aws-properties-kendra-datasource-salesforceconfiguration-syntax.yaml"></a>

```
  [ChatterFeedConfiguration](#cfn-kendra-datasource-salesforceconfiguration-chatterfeedconfiguration):
    SalesforceChatterFeedConfiguration
  [CrawlAttachments](#cfn-kendra-datasource-salesforceconfiguration-crawlattachments): Boolean
  [ExcludeAttachmentFilePatterns](#cfn-kendra-datasource-salesforceconfiguration-excludeattachmentfilepatterns):
    - String
  [IncludeAttachmentFilePatterns](#cfn-kendra-datasource-salesforceconfiguration-includeattachmentfilepatterns):
    - String
  [KnowledgeArticleConfiguration](#cfn-kendra-datasource-salesforceconfiguration-knowledgearticleconfiguration):
    SalesforceKnowledgeArticleConfiguration
  [SecretArn](#cfn-kendra-datasource-salesforceconfiguration-secretarn): String
  [ServerUrl](#cfn-kendra-datasource-salesforceconfiguration-serverurl): String
  [StandardObjectAttachmentConfiguration](#cfn-kendra-datasource-salesforceconfiguration-standardobjectattachmentconfiguration):
    SalesforceStandardObjectAttachmentConfiguration
  [StandardObjectConfigurations](#cfn-kendra-datasource-salesforceconfiguration-standardobjectconfigurations):
    - SalesforceStandardObjectConfiguration
```

## Properties<a name="aws-properties-kendra-datasource-salesforceconfiguration-properties"></a>

`ChatterFeedConfiguration` <a name="cfn-kendra-datasource-salesforceconfiguration-chatterfeedconfiguration"></a>
Configuration information for Salesforce chatter feeds\.  
_Required_: No  
_Type_: [SalesforceChatterFeedConfiguration](aws-properties-kendra-datasource-salesforcechatterfeedconfiguration.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`CrawlAttachments` <a name="cfn-kendra-datasource-salesforceconfiguration-crawlattachments"></a>
Indicates whether Amazon Kendra should index attachments to Salesforce objects\.  
_Required_: No  
_Type_: Boolean  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`ExcludeAttachmentFilePatterns` <a name="cfn-kendra-datasource-salesforceconfiguration-excludeattachmentfilepatterns"></a>
A list of regular expression patterns to exclude certain documents in your Salesforce\. Documents that match the patterns are excluded from the index\. Documents that don't match the patterns are included in the index\. If a document matches both an inclusion and exclusion pattern, the exclusion pattern takes precedence and the document isn't included in the index\.  
The pattern is applied to the name of the attached file\.  
_Required_: No  
_Type_: List of String  
_Maximum_: `100`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`IncludeAttachmentFilePatterns` <a name="cfn-kendra-datasource-salesforceconfiguration-includeattachmentfilepatterns"></a>
A list of regular expression patterns to include certain documents in your Salesforce\. Documents that match the patterns are included in the index\. Documents that don't match the patterns are excluded from the index\. If a document matches both an inclusion and exclusion pattern, the exclusion pattern takes precedence and the document isn't included in the index\.  
The pattern is applied to the name of the attached file\.  
_Required_: No  
_Type_: List of String  
_Maximum_: `100`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`KnowledgeArticleConfiguration` <a name="cfn-kendra-datasource-salesforceconfiguration-knowledgearticleconfiguration"></a>
Configuration information for the knowledge article types that Amazon Kendra indexes\. Amazon Kendra indexes standard knowledge articles and the standard fields of knowledge articles, or the custom fields of custom knowledge articles, but not both\.  
_Required_: No  
_Type_: [SalesforceKnowledgeArticleConfiguration](aws-properties-kendra-datasource-salesforceknowledgearticleconfiguration.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`SecretArn` <a name="cfn-kendra-datasource-salesforceconfiguration-secretarn"></a>
The Amazon Resource Name \(ARN\) of an AWS Secrets Managersecret that contains the key/value pairs required to connect to your Salesforce instance\. The secret must contain a JSON structure with the following keys:

- authenticationUrl \- The OAUTH endpoint that Amazon Kendra connects to get an OAUTH token\.
- consumerKey \- The application public key generated when you created your Salesforce application\.
- consumerSecret \- The application private key generated when you created your Salesforce application\.
- password \- The password associated with the user logging in to the Salesforce instance\.
- securityToken \- The token associated with the user logging in to the Salesforce instance\.
- username \- The user name of the user logging in to the Salesforce instance\.
  _Required_: Yes  
  _Type_: String  
  _Minimum_: `1`  
  _Maximum_: `1284`  
  _Pattern_: `arn:[a-z0-9-\.]{1,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[^/].{0,1023}`  
  _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`ServerUrl` <a name="cfn-kendra-datasource-salesforceconfiguration-serverurl"></a>
The instance URL for the Salesforce site that you want to index\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `2048`  
_Pattern_: `^(https?|ftp|file):\/\/([^\s]*)`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`StandardObjectAttachmentConfiguration` <a name="cfn-kendra-datasource-salesforceconfiguration-standardobjectattachmentconfiguration"></a>
Configuration information for processing attachments to Salesforce standard objects\.  
_Required_: No  
_Type_: [SalesforceStandardObjectAttachmentConfiguration](aws-properties-kendra-datasource-salesforcestandardobjectattachmentconfiguration.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`StandardObjectConfigurations` <a name="cfn-kendra-datasource-salesforceconfiguration-standardobjectconfigurations"></a>
Configuration of the Salesforce standard objects that Amazon Kendra indexes\.  
_Required_: No  
_Type_: List of [SalesforceStandardObjectConfiguration](aws-properties-kendra-datasource-salesforcestandardobjectconfiguration.md)  
_Maximum_: `17`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
