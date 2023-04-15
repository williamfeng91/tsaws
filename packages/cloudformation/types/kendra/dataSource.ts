/**
 * Supported regions:
 * - ap-northeast-1 (version 119.1.0)
 * - ap-south-1 (version 119.1.0)
 * - ap-southeast-1 (version 119.1.0)
 * - ap-southeast-2 (version 119.1.0)
 * - ca-central-1 (version 119.1.0)
 * - eu-west-1 (version 119.1.0)
 * - us-east-1 (version 119.1.0)
 * - us-east-2 (version 119.1.0)
 * - us-west-2 (version 119.1.0)
 */
import { List, Value } from '../../shared-types/dataTypes';
import { ResourceTag } from '../../shared-types/resource';

/**
 * Provides the configuration information to connect to websites that require basic user authentication.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-webcrawlerbasicauthentication.html}
 **/
export interface KendraDataSourceWebCrawlerBasicAuthentication {
  /**
   * The port number of the website host you want to connect to using authentication credentials.
   *
   * For example, the port for https://a.example.com/page1.html is 443, the standard port for HTTPS.
   *
   * _Required_: Yes
   *
   * _Type_: Integer
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `65535`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Port: Value<number>;
  /**
   * The name of the website host you want to connect to using authentication credentials.
   *
   * For example, the host name of https://a.example.com/page1.html is "a.example.com".
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `253`
   *
   * _Pattern_: `([^s]*)`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Host: Value<string>;
  /**
   * Your secret ARN, which you can create in [AWS Secrets Manager](https://docs.aws.amazon.com/secretsmanager/latest/userguide/intro.html)
   *
   * You use a secret if basic authentication credentials are required to connect to a website. The secret stores your credentials of user name and password.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `1284`
   *
   * _Pattern_: `arn:[a-z0-9-.]{1,63}:[a-z0-9-.]{0,63}:[a-z0-9-.]{0,63}:[a-z0-9-.]{0,63}:[^/].{0,1023}`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Credentials: Value<string>;
}

/**
 * Specifies the seed or starting point URLs of the websites or the sitemap URLs of the websites you want to crawl.
 *
 * You can include website subdomains. You can list up to 100 seed URLs and up to three sitemap URLs.
 *
 * You can only crawl websites that use the secure communication protocol, Hypertext Transfer Protocol Secure (HTTPS). If you receive an error when crawling a website, it could be that the website is blocked from crawling.
 *
 * _When selecting websites to index, you must adhere to the [Amazon Acceptable Use Policy](http://aws.amazon.com/aup/) and all other Amazon terms. Remember that you must only use the Amazon Kendra web crawler to index your own webpages, or webpages that you have authorization to index._
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-webcrawlerurls.html}
 **/
export interface KendraDataSourceWebCrawlerUrls {
  /**
   * Configuration of the sitemap URLs of the websites you want to crawl.
   *
   * Only URLs belonging to the same website host names are crawled. You can list up to three sitemap URLs.
   *
   * _Required_: No
   *
   * _Type_: [WebCrawlerSiteMapsConfiguration](aws-properties-kendra-datasource-webcrawlersitemapsconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SiteMapsConfiguration?: KendraDataSourceWebCrawlerSiteMapsConfiguration;
  /**
   * Configuration of the seed or starting point URLs of the websites you want to crawl.
   *
   * You can choose to crawl only the website host names, or the website host names with subdomains, or the website host names with subdomains and other domains that the web pages link to.
   *
   * You can list up to 100 seed URLs.
   *
   * _Required_: No
   *
   * _Type_: [WebCrawlerSeedUrlConfiguration](aws-properties-kendra-datasource-webcrawlerseedurlconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SeedUrlConfiguration?: KendraDataSourceWebCrawlerSeedUrlConfiguration;
}

/**
 * Provides the configuration information of the seed or starting point URLs to crawl.
 *
 * _When selecting websites to index, you must adhere to the [Amazon Acceptable Use Policy](http://aws.amazon.com/aup/) and all other Amazon terms. Remember that you must only use the Amazon Kendra web crawler to index your own webpages, or webpages that you have authorization to index._
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-webcrawlerseedurlconfiguration.html}
 **/
export interface KendraDataSourceWebCrawlerSeedUrlConfiguration {
  /**
   * You can choose one of the following modes:
   */
  WebCrawlerMode?: Value<string>;
  /**
   * The list of seed or starting point URLs of the websites you want to crawl.
   *
   * The list can include a maximum of 100 seed URLs.
   *
   * _Required_: Yes
   *
   * _Type_: List of String
   *
   * _Maximum_: `100`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SeedUrls: List<Value<string>>;
}

/**
 * Specifies configuration information for indexing a single standard object.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-salesforcestandardobjectconfiguration.html}
 **/
export interface KendraDataSourceSalesforceStandardObjectConfiguration {
  /**
   * The name of the field in the standard object table that contains the document title.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `100`
   *
   * _Pattern_: `^[a-zA-Z][a-zA-Z0-9_.]*$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DocumentTitleFieldName?: Value<string>;
  /**
   * Maps attributes or field names of the standard object to Amazon Kendra index field names. To create custom fields, use the `UpdateIndex` API before you map to Salesforce fields. For more information, see [Mapping data source fields](https://docs.aws.amazon.com/kendra/latest/dg/field-mapping.html). The Salesforce data source field names must exist in your Salesforce custom metadata.
   *
   * _Required_: No
   *
   * _Type_: List of [DataSourceToIndexFieldMapping](aws-properties-kendra-datasource-datasourcetoindexfieldmapping.md)
   *
   * _Maximum_: `100`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FieldMappings?: List<KendraDataSourceDataSourceToIndexFieldMapping>;
  /**
   * The name of the standard object.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Allowed values_: `ACCOUNT | CAMPAIGN | CASE | CONTACT | CONTRACT | DOCUMENT | GROUP | IDEA | LEAD | OPPORTUNITY | PARTNER | PRICEBOOK | PRODUCT | PROFILE | SOLUTION | TASK | USER`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Name: Value<string>;
  /**
   * The name of the field in the standard object table that contains the document contents.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `100`
   *
   * _Pattern_: `^[a-zA-Z][a-zA-Z0-9_.]*$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DocumentDataFieldName: Value<string>;
}

/**
 * The configuration information for syncing a Salesforce chatter feed. The contents of the object comes from the Salesforce FeedItem table.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-salesforcechatterfeedconfiguration.html}
 **/
export interface KendraDataSourceSalesforceChatterFeedConfiguration {
  /**
   * The name of the column in the Salesforce FeedItem table that contains the title of the document. This is typically the `Title` column.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `100`
   *
   * _Pattern_: `^[a-zA-Z][a-zA-Z0-9_.]*$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DocumentTitleFieldName?: Value<string>;
  /**
   * Filters the documents in the feed based on status of the user. When you specify `ACTIVE_USERS` only documents from users who have an active account are indexed. When you specify `STANDARD_USER` only documents for Salesforce standard users are documented. You can specify both.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Maximum_: `2`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  IncludeFilterTypes?: List<Value<string>>;
  /**
   * Maps fields from a Salesforce chatter feed into Amazon Kendra index fields.
   *
   * _Required_: No
   *
   * _Type_: List of [DataSourceToIndexFieldMapping](aws-properties-kendra-datasource-datasourcetoindexfieldmapping.md)
   *
   * _Maximum_: `100`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FieldMappings?: List<KendraDataSourceDataSourceToIndexFieldMapping>;
  /**
   * The name of the column in the Salesforce FeedItem table that contains the content to index. Typically this is the `Body` column.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `100`
   *
   * _Pattern_: `^[a-zA-Z][a-zA-Z0-9_.]*$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DocumentDataFieldName: Value<string>;
}

/**
 * Provides the configuration information for altering document metadata and content during the document ingestion process.
 *
 * For more information, see [Customizing document metadata during the ingestion process](https://docs.aws.amazon.com/kendra/latest/dg/custom-document-enrichment.html).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-customdocumentenrichmentconfiguration.html}
 **/
export interface KendraDataSourceCustomDocumentEnrichmentConfiguration {
  /**
   * Configuration information to alter document attributes or metadata fields and content when ingesting documents into Amazon Kendra.
   *
   * _Required_: No
   *
   * _Type_: List of [InlineCustomDocumentEnrichmentConfiguration](aws-properties-kendra-datasource-inlinecustomdocumentenrichmentconfiguration.md)
   *
   * _Maximum_: `100`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  InlineConfigurations?: List<KendraDataSourceInlineCustomDocumentEnrichmentConfiguration>;
  /**
   * Configuration information for invoking a Lambda function in AWS Lambda on the original or raw documents before extracting their metadata and text. You can use a Lambda function to apply advanced logic for creating, modifying, or deleting document metadata and content. For more information, see [Advanced data manipulation](https://docs.aws.amazon.com/kendra/latest/dg/custom-document-enrichment.html#advanced-data-manipulation).
   *
   * _Required_: No
   *
   * _Type_: [HookConfiguration](aws-properties-kendra-datasource-hookconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PreExtractionHookConfiguration?: KendraDataSourceHookConfiguration;
  /**
   * Configuration information for invoking a Lambda function in AWS Lambda on the structured documents with their metadata and text extracted. You can use a Lambda function to apply advanced logic for creating, modifying, or deleting document metadata and content. For more information, see [Advanced data manipulation](https://docs.aws.amazon.com/kendra/latest/dg/custom-document-enrichment.html#advanced-data-manipulation).
   *
   * _Required_: No
   *
   * _Type_: [HookConfiguration](aws-properties-kendra-datasource-hookconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PostExtractionHookConfiguration?: KendraDataSourceHookConfiguration;
  /**
   * The Amazon Resource Name (ARN) of a role with permission to run `PreExtractionHookConfiguration` and `PostExtractionHookConfiguration` for altering document metadata and content during the document ingestion process. For more information, see [IAM roles for Amazon Kendra](https://docs.aws.amazon.com/kendra/latest/dg/iam-roles.html).
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `0`
   *
   * _Maximum_: `1284`
   *
   * _Pattern_: `arn:[a-z0-9-.]{1,63}:[a-z0-9-.]{0,63}:[a-z0-9-.]{0,63}:[a-z0-9-.]{0,63}:[^/].{0,1023}`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RoleArn?: Value<string>;
}

/**
 * Provides the configuration information to connect to Salesforce as your data source.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-salesforceconfiguration.html}
 **/
export interface KendraDataSourceSalesforceConfiguration {
  /**
   * The Amazon Resource Name (ARN) of an AWS Secrets Managersecret that contains the key/value pairs required to connect to your Salesforce instance. The secret must contain a JSON structure with the following keys:
   */
  SecretArn: Value<string>;
  /**
   * The instance URL for the Salesforce site that you want to index.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `2048`
   *
   * _Pattern_: `^(https?|ftp|file)://([^s]*)`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ServerUrl: Value<string>;
  /**
   * A list of regular expression patterns to include certain documents in your Salesforce. Documents that match the patterns are included in the index. Documents that don't match the patterns are excluded from the index. If a document matches both an inclusion and exclusion pattern, the exclusion pattern takes precedence and the document isn't included in the index.
   *
   * The pattern is applied to the name of the attached file.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Maximum_: `100`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  IncludeAttachmentFilePatterns?: List<Value<string>>;
  /**
   * Configuration of the Salesforce standard objects that Amazon Kendra indexes.
   *
   * _Required_: No
   *
   * _Type_: List of [SalesforceStandardObjectConfiguration](aws-properties-kendra-datasource-salesforcestandardobjectconfiguration.md)
   *
   * _Maximum_: `17`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  StandardObjectConfigurations?: List<KendraDataSourceSalesforceStandardObjectConfiguration>;
  /**
   * Configuration information for processing attachments to Salesforce standard objects.
   *
   * _Required_: No
   *
   * _Type_: [SalesforceStandardObjectAttachmentConfiguration](aws-properties-kendra-datasource-salesforcestandardobjectattachmentconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  StandardObjectAttachmentConfiguration?: KendraDataSourceSalesforceStandardObjectAttachmentConfiguration;
  /**
   * A list of regular expression patterns to exclude certain documents in your Salesforce. Documents that match the patterns are excluded from the index. Documents that don't match the patterns are included in the index. If a document matches both an inclusion and exclusion pattern, the exclusion pattern takes precedence and the document isn't included in the index.
   *
   * The pattern is applied to the name of the attached file.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Maximum_: `100`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ExcludeAttachmentFilePatterns?: List<Value<string>>;
  /**
   * Indicates whether Amazon Kendra should index attachments to Salesforce objects.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CrawlAttachments?: Value<boolean>;
  /**
   * Configuration information for Salesforce chatter feeds.
   *
   * _Required_: No
   *
   * _Type_: [SalesforceChatterFeedConfiguration](aws-properties-kendra-datasource-salesforcechatterfeedconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ChatterFeedConfiguration?: KendraDataSourceSalesforceChatterFeedConfiguration;
  /**
   * Configuration information for the knowledge article types that Amazon Kendra indexes. Amazon Kendra indexes standard knowledge articles and the standard fields of knowledge articles, or the custom fields of custom knowledge articles, but not both.
   *
   * _Required_: No
   *
   * _Type_: [SalesforceKnowledgeArticleConfiguration](aws-properties-kendra-datasource-salesforceknowledgearticleconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  KnowledgeArticleConfiguration?: KendraDataSourceSalesforceKnowledgeArticleConfiguration;
}

/**
 * Configuration information for indexing Confluence spaces.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-confluencespaceconfiguration.html}
 **/
export interface KendraDataSourceConfluenceSpaceConfiguration {
  /**
   * A list of space keys of Confluence spaces. If you include a key, the blogs, documents, and attachments in the space are not indexed. If a space is in both the `ExcludeSpaces` and the `IncludeSpaces` list, the space is excluded.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ExcludeSpaces?: List<Value<string>>;
  /**
   * Maps attributes or field names of Confluence spaces to Amazon Kendra index field names. To create custom fields, use the `UpdateIndex` API before you map to Confluence fields. For more information, see [Mapping data source fields](https://docs.aws.amazon.com/kendra/latest/dg/field-mapping.html). The Confluence data source field names must exist in your Confluence custom metadata.
   *
   * If you specify the `SpaceFieldMappings` parameter, you must specify at least one field mapping.
   *
   * _Required_: No
   *
   * _Type_: List of [ConfluenceSpaceToIndexFieldMapping](aws-properties-kendra-datasource-confluencespacetoindexfieldmapping.md)
   *
   * _Maximum_: `4`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SpaceFieldMappings?: List<KendraDataSourceConfluenceSpaceToIndexFieldMapping>;
  /**
   * `TRUE` to index personal spaces. You can add restrictions to items in personal spaces. If personal spaces are indexed, queries without user context information may return restricted items from a personal space in their results. For more information, see [Filtering on user context](https://docs.aws.amazon.com/kendra/latest/dg/user-context-filter.html).
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CrawlPersonalSpaces?: Value<boolean>;
  /**
   * `TRUE` to index archived spaces.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CrawlArchivedSpaces?: Value<boolean>;
  /**
   * A list of space keys for Confluence spaces. If you include a key, the blogs, documents, and attachments in the space are indexed. Spaces that aren't in the list aren't indexed. A space in the list must exist. Otherwise, Amazon Kendra logs an error when the data source is synchronized. If a space is in both the `IncludeSpaces` and the `ExcludeSpaces` list, the space is excluded.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  IncludeSpaces?: List<Value<string>>;
}

/**
 * Provides the configuration information to connect to Google Drive as your data source.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-googledriveconfiguration.html}
 **/
export interface KendraDataSourceGoogleDriveConfiguration {
  /**
   * The Amazon Resource Name (ARN) of a AWS Secrets Managersecret that contains the credentials required to connect to Google Drive. For more information, see [Using a Google Workspace Drive data source](https://docs.aws.amazon.com/kendra/latest/dg/data-source-google-drive.html).
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `1284`
   *
   * _Pattern_: `arn:[a-z0-9-.]{1,63}:[a-z0-9-.]{0,63}:[a-z0-9-.]{0,63}:[a-z0-9-.]{0,63}:[^/].{0,1023}`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SecretArn: Value<string>;
  /**
   * A list of identifiers or shared drives to exclude from the index. All files and folders stored on the shared drive are excluded.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Maximum_: `100`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ExcludeSharedDrives?: List<Value<string>>;
  /**
   * A list of email addresses of the users. Documents owned by these users are excluded from the index. Documents shared with excluded users are indexed unless they are excluded in another way.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Maximum_: `100`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ExcludeUserAccounts?: List<Value<string>>;
  /**
   * A list of regular expression patterns to include certain items in your Google Drive, including shared drives and users' My Drives. Items that match the patterns are included in the index. Items that don't match the patterns are excluded from the index. If an item matches both an inclusion and exclusion pattern, the exclusion pattern takes precedence and the item isn't included in the index.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Maximum_: `100`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  InclusionPatterns?: List<Value<string>>;
  /**
   * A list of MIME types to exclude from the index. All documents matching the specified MIME type are excluded.
   *
   * For a list of MIME types, see [Using a Google Workspace Drive data source](https://docs.aws.amazon.com/kendra/latest/dg/data-source-google-drive.html).
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Maximum_: `30`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ExcludeMimeTypes?: List<Value<string>>;
  /**
   * Maps Google Drive data source attributes or field names to Amazon Kendra index field names. To create custom fields, use the `UpdateIndex` API before you map to Google Drive fields. For more information, see [Mapping data source fields](https://docs.aws.amazon.com/kendra/latest/dg/field-mapping.html). The Google Drive data source field names must exist in your Google Drive custom metadata.
   *
   * _Required_: No
   *
   * _Type_: List of [DataSourceToIndexFieldMapping](aws-properties-kendra-datasource-datasourcetoindexfieldmapping.md)
   *
   * _Maximum_: `100`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FieldMappings?: List<KendraDataSourceDataSourceToIndexFieldMapping>;
  /**
   * A list of regular expression patterns to exclude certain items in your Google Drive, including shared drives and users' My Drives. Items that match the patterns are excluded from the index. Items that don't match the patterns are included in the index. If an item matches both an inclusion and exclusion pattern, the exclusion pattern takes precedence and the item isn't included in the index.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Maximum_: `100`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ExclusionPatterns?: List<Value<string>>;
}

/**
 * Information required to find a specific file in an Amazon S3 bucket.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-s3path.html}
 **/
export interface KendraDataSourceS3Path {
  /**
   * The name of the S3 bucket that contains the file.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `3`
   *
   * _Maximum_: `63`
   *
   * _Pattern_: `[a-z0-9][.-a-z0-9]{1,61}[a-z0-9]`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Bucket: Value<string>;
  /**
   * The name of the file.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `1024`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Key: Value<string>;
}

/**
 * Provides the configuration information to connect to Confluence as your data source.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-confluenceconfiguration.html}
 **/
export interface KendraDataSourceConfluenceConfiguration {
  /**
   * The Amazon Resource Name (ARN) of an AWS Secrets Manager secret that contains the user name and password required to connect to the Confluence instance. If you use Confluence Cloud, you use a generated API token as the password.
   *
   * You can also provide authentication credentials in the form of a personal access token. For more information, see [Using a Confluence data source](https://docs.aws.amazon.com/kendra/latest/dg/data-source-confluence.html).
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `1284`
   *
   * _Pattern_: `arn:[a-z0-9-.]{1,63}:[a-z0-9-.]{0,63}:[a-z0-9-.]{0,63}:[a-z0-9-.]{0,63}:[^/].{0,1023}`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SecretArn: Value<string>;
  /**
   * Configuration information for indexing attachments to Confluence blogs and pages.
   *
   * _Required_: No
   *
   * _Type_: [ConfluenceAttachmentConfiguration](aws-properties-kendra-datasource-confluenceattachmentconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AttachmentConfiguration?: KendraDataSourceConfluenceAttachmentConfiguration;
  /**
   * The URL of your Confluence instance. Use the full URL of the server. For example, _https://server.example.com:port/_. You can also use an IP address, for example, _https://192.168.1.113/_.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `2048`
   *
   * _Pattern_: `^(https?|ftp|file)://([^s]*)`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ServerUrl: Value<string>;
  /**
   * Configuration information for indexing Confluence pages.
   *
   * _Required_: No
   *
   * _Type_: [ConfluencePageConfiguration](aws-properties-kendra-datasource-confluencepageconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PageConfiguration?: KendraDataSourceConfluencePageConfiguration;
  /**
   * Configuration information for indexing Confluence blogs.
   *
   * _Required_: No
   *
   * _Type_: [ConfluenceBlogConfiguration](aws-properties-kendra-datasource-confluenceblogconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  BlogConfiguration?: KendraDataSourceConfluenceBlogConfiguration;
  /**
   * The version or the type of Confluence installation to connect to.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Allowed values_: `CLOUD | SERVER`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Version: Value<string>;
  /**
   * Configuration information for an Amazon Virtual Private Cloud to connect to your Confluence. For more information, see [Configuring a VPC](https://docs.aws.amazon.com/kendra/latest/dg/vpc-configuration.html).
   *
   * _Required_: No
   *
   * _Type_: [DataSourceVpcConfiguration](aws-properties-kendra-datasource-datasourcevpcconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  VpcConfiguration?: KendraDataSourceDataSourceVpcConfiguration;
  /**
   * A list of regular expression patterns to include certain blog posts, pages, spaces, or attachments in your Confluence. Content that matches the patterns are included in the index. Content that doesn't match the patterns is excluded from the index. If content matches both an inclusion and exclusion pattern, the exclusion pattern takes precedence and the content isn't included in the index.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Maximum_: `100`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  InclusionPatterns?: List<Value<string>>;
  /**
   * A list of regular expression patterns to exclude certain blog posts, pages, spaces, or attachments in your Confluence. Content that matches the patterns are excluded from the index. Content that doesn't match the patterns is included in the index. If content matches both an inclusion and exclusion pattern, the exclusion pattern takes precedence and the content isn't included in the index.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Maximum_: `100`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ExclusionPatterns?: List<Value<string>>;
  /**
   * Configuration information for indexing Confluence spaces.
   *
   * _Required_: No
   *
   * _Type_: [ConfluenceSpaceConfiguration](aws-properties-kendra-datasource-confluencespaceconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SpaceConfiguration?: KendraDataSourceConfluenceSpaceConfiguration;
}

/**
 * The condition used for the target document attribute or metadata field when ingesting documents into Amazon Kendra. You use this with [DocumentAttributeTarget to apply the condition](https://docs.aws.amazon.com/kendra/latest/dg/API_DocumentAttributeTarget.html).
 *
 * For example, you can create the 'Department' target field and have it prefill department names associated with the documents based on information in the 'Source_URI' field. Set the condition that if the 'Source_URI' field contains 'financial' in its URI value, then prefill the target field 'Department' with the target value 'Finance' for the document.
 *
 * Amazon Kendra cannot create a target field if it has not already been created as an index field. After you create your index field, you can create a document metadata field using `DocumentAttributeTarget`. Amazon Kendra then will map your newly created metadata field to your index field.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-documentattributecondition.html}
 **/
export interface KendraDataSourceDocumentAttributeCondition {
  /**
   * The condition operator.
   *
   * For example, you can use 'Contains' to partially match a string.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Allowed values_: `BeginsWith | Contains | Equals | Exists | GreaterThan | GreaterThanOrEquals | LessThan | LessThanOrEquals | NotContains | NotEquals | NotExists`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Operator: Value<string>;
  /**
   * The identifier of the document attribute used for the condition.
   *
   * For example, 'Source_URI' could be an identifier for the attribute or metadata field that contains source URIs associated with the documents.
   *
   * Amazon Kendra currently does not support `_document_body` as an attribute key used for the condition.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `200`
   *
   * _Pattern_: `[a-zA-Z0-9_][a-zA-Z0-9_-]*`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ConditionDocumentAttributeKey: Value<string>;
  /**
   * The value used by the operator.
   *
   * For example, you can specify the value 'financial' for strings in the 'Source_URI' field that partially match or contain this value.
   *
   * _Required_: No
   *
   * _Type_: [DocumentAttributeValue](aws-properties-kendra-datasource-documentattributevalue.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ConditionOnValue?: KendraDataSourceDocumentAttributeValue;
}

/**
 * Provides information that configures Amazon Kendra to use a SQL database.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-sqlconfiguration.html}
 **/
export interface KendraDataSourceSqlConfiguration {
  /**
   * Determines whether Amazon Kendra encloses SQL identifiers for tables and column names in double quotes (") when making a database query. You can set the value to `DOUBLE_QUOTES` or `NONE`.
   *
   * By default, Amazon Kendra passes SQL identifiers the way that they are entered into the data source configuration. It does not change the case of identifiers or enclose them in quotes.
   *
   * PostgreSQL internally converts uppercase characters to lower case characters in identifiers unless they are quoted. Choosing this option encloses identifiers in quotes so that PostgreSQL does not convert the character's case.
   *
   * For MySQL databases, you must enable the ansi_quotes option when you set this field to `DOUBLE_QUOTES`.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  QueryIdentifiersEnclosingOption?: Value<string>;
}

/**
 * Provides the configuration information that's required to connect to a database.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-connectionconfiguration.html}
 **/
export interface KendraDataSourceConnectionConfiguration {
  /**
   * The Amazon Resource Name (ARN) of credentials stored in AWS Secrets Manager. The credentials should be a user/password pair. For more information, see [Using a Database Data Source](https://docs.aws.amazon.com/kendra/latest/dg/data-source-database.html). For more information about AWS Secrets Manager, see [ What Is AWS Secrets Manager](https://docs.aws.amazon.com/secretsmanager/latest/userguide/intro.html) in the _ AWS Secrets Manager _ user guide.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `1284`
   *
   * _Pattern_: `arn:[a-z0-9-.]{1,63}:[a-z0-9-.]{0,63}:[a-z0-9-.]{0,63}:[a-z0-9-.]{0,63}:[^/].{0,1023}`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SecretArn: Value<string>;
  /**
   * The name of the table that contains the document data.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `100`
   *
   * _Pattern_: `^[a-zA-Z][a-zA-Z0-9_]*$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TableName: Value<string>;
  /**
   * The port that the database uses for connections.
   *
   * _Required_: Yes
   *
   * _Type_: Integer
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `65535`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DatabasePort: Value<number>;
  /**
   * The name of the host for the database. Can be either a string (host.subdomain.domain.tld) or an IPv4 or IPv6 address.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `253`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DatabaseHost: Value<string>;
  /**
   * The name of the database containing the document data.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `100`
   *
   * _Pattern_: `^[a-zA-Z][a-zA-Z0-9_]*$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DatabaseName: Value<string>;
}

/**
 * Provides the configuration information for indexing Salesforce custom articles.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-salesforcecustomknowledgearticletypeconfiguration.html}
 **/
export interface KendraDataSourceSalesforceCustomKnowledgeArticleTypeConfiguration {
  /**
   * The name of the field in the custom knowledge article that contains the document title.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `100`
   *
   * _Pattern_: `^[a-zA-Z][a-zA-Z0-9_.]*$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DocumentTitleFieldName?: Value<string>;
  /**
   * Maps attributes or field names of the custom knowledge article to Amazon Kendra index field names. To create custom fields, use the `UpdateIndex` API before you map to Salesforce fields. For more information, see [Mapping data source fields](https://docs.aws.amazon.com/kendra/latest/dg/field-mapping.html). The Salesforce data source field names must exist in your Salesforce custom metadata.
   *
   * _Required_: No
   *
   * _Type_: List of [DataSourceToIndexFieldMapping](aws-properties-kendra-datasource-datasourcetoindexfieldmapping.md)
   *
   * _Maximum_: `100`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FieldMappings?: List<KendraDataSourceDataSourceToIndexFieldMapping>;
  /**
   * The name of the configuration.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `100`
   *
   * _Pattern_: `^[a-zA-Z][a-zA-Z0-9_]*$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Name: Value<string>;
  /**
   * The name of the field in the custom knowledge article that contains the document data to index.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `100`
   *
   * _Pattern_: `^[a-zA-Z][a-zA-Z0-9_.]*$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DocumentDataFieldName: Value<string>;
}

/**
 * Provides the configuration information for applying basic logic to alter document metadata and content when ingesting documents into Amazon Kendra. To apply advanced logic, to go beyond what you can do with basic logic, see [HookConfiguration](https://docs.aws.amazon.com/kendra/latest/dg/API_HookConfiguration.html).
 *
 * For more information, see [Customizing document metadata during the ingestion process](https://docs.aws.amazon.com/kendra/latest/dg/custom-document-enrichment.html).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-inlinecustomdocumentenrichmentconfiguration.html}
 **/
export interface KendraDataSourceInlineCustomDocumentEnrichmentConfiguration {
  /**
   * Configuration of the condition used for the target document attribute or metadata field when ingesting documents into Amazon Kendra.
   *
   * _Required_: No
   *
   * _Type_: [DocumentAttributeCondition](aws-properties-kendra-datasource-documentattributecondition.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Condition?: KendraDataSourceDocumentAttributeCondition;
  /**
   * Configuration of the target document attribute or metadata field when ingesting documents into Amazon Kendra. You can also include a value.
   *
   * _Required_: No
   *
   * _Type_: [DocumentAttributeTarget](aws-properties-kendra-datasource-documentattributetarget.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Target?: KendraDataSourceDocumentAttributeTarget;
  /**
   * `TRUE` to delete content if the condition used for the target attribute is met.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DocumentContentDeletion?: Value<boolean>;
}

/**
 * Provides the configuration information required for Amazon Kendra Web Crawler.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-webcrawlerconfiguration.html}
 **/
export interface KendraDataSourceWebCrawlerConfiguration {
  /**
   * Configuration information required to connect to websites using authentication.
   *
   * You can connect to websites using basic authentication of user name and password. You use a secret in [AWS Secrets Manager](https://docs.aws.amazon.com/secretsmanager/latest/userguide/intro.html) to store your authentication credentials.
   *
   * You must provide the website host name and port number. For example, the host name of https://a.example.com/page1.html is "a.example.com" and the port is 443, the standard port for HTTPS.
   *
   * _Required_: No
   *
   * _Type_: [WebCrawlerAuthenticationConfiguration](aws-properties-kendra-datasource-webcrawlerauthenticationconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AuthenticationConfiguration?: KendraDataSourceWebCrawlerAuthenticationConfiguration;
  /**
   * The maximum number of URLs on a web page to include when crawling a website. This number is per web page.
   *
   * As a website’s web pages are crawled, any URLs the web pages link to are also crawled. URLs on a web page are crawled in order of appearance.
   *
   * The default maximum links per page is 100.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `1000`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MaxLinksPerPage?: Value<number>;
  /**
   * Configuration information required to connect to your internal websites via a web proxy.
   *
   * You must provide the website host name and port number. For example, the host name of https://a.example.com/page1.html is "a.example.com" and the port is 443, the standard port for HTTPS.
   *
   * Web proxy credentials are optional and you can use them to connect to a web proxy server that requires basic authentication. To store web proxy credentials, you use a secret in [AWS Secrets Manager](https://docs.aws.amazon.com/secretsmanager/latest/userguide/intro.html).
   *
   * _Required_: No
   *
   * _Type_: [ProxyConfiguration](aws-properties-kendra-datasource-proxyconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ProxyConfiguration?: KendraDataSourceProxyConfiguration;
  /**
   * A list of regular expression patterns to exclude certain URLs to crawl. URLs that match the patterns are excluded from the index. URLs that don't match the patterns are included in the index. If a URL matches both an inclusion and exclusion pattern, the exclusion pattern takes precedence and the URL file isn't included in the index.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Maximum_: `100`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  UrlExclusionPatterns?: List<Value<string>>;
  /**
   * The maximum number of URLs crawled per website host per minute.
   *
   * A minimum of one URL is required.
   *
   * The default maximum number of URLs crawled per website host per minute is 300.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `300`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MaxUrlsPerMinuteCrawlRate?: Value<number>;
  /**
   * A list of regular expression patterns to include certain URLs to crawl. URLs that match the patterns are included in the index. URLs that don't match the patterns are excluded from the index. If a URL matches both an inclusion and exclusion pattern, the exclusion pattern takes precedence and the URL file isn't included in the index.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Maximum_: `100`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  UrlInclusionPatterns?: List<Value<string>>;
  /**
   * Specifies the seed or starting point URLs of the websites or the sitemap URLs of the websites you want to crawl.
   *
   * You can include website subdomains. You can list up to 100 seed URLs and up to three sitemap URLs.
   *
   * You can only crawl websites that use the secure communication protocol, Hypertext Transfer Protocol Secure (HTTPS). If you receive an error when crawling a website, it could be that the website is blocked from crawling.
   *
   * _When selecting websites to index, you must adhere to the [Amazon Acceptable Use Policy](http://aws.amazon.com/aup/) and all other Amazon terms. Remember that you must only use Amazon Kendra Web Crawler to index your own webpages, or webpages that you have authorization to index._
   *
   * _Required_: Yes
   *
   * _Type_: [WebCrawlerUrls](aws-properties-kendra-datasource-webcrawlerurls.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Urls: KendraDataSourceWebCrawlerUrls;
  /**
   * The maximum size (in MB) of a web page or attachment to crawl.
   *
   * Files larger than this size (in MB) are skipped/not crawled.
   *
   * The default maximum size of a web page or attachment is set to 50 MB.
   *
   * _Required_: No
   *
   * _Type_: Double
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MaxContentSizePerPageInMegaBytes?: Value<number>;
  /**
   * Specifies the number of levels in a website that you want to crawl.
   *
   * The first level begins from the website seed or starting point URL. For example, if a website has three levels—index level (the seed in this example), sections level, and subsections level—and you are only interested in crawling information up to the sections level (levels 0-1), you can set your depth to 1.
   *
   * The default crawl depth is set to 2.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Minimum_: `0`
   *
   * _Maximum_: `10`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CrawlDepth?: Value<number>;
}

/**
 * Configuration of attachment settings for the Confluence data source. Attachment settings are optional, if you don't specify settings attachments, Amazon Kendra won't index them.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-confluenceattachmentconfiguration.html}
 **/
export interface KendraDataSourceConfluenceAttachmentConfiguration {
  /**
   * Maps attributes or field names of Confluence attachments to Amazon Kendra index field names. To create custom fields, use the `UpdateIndex` API before you map to Confluence fields. For more information, see [Mapping data source fields](https://docs.aws.amazon.com/kendra/latest/dg/field-mapping.html). The Confluence data source field names must exist in your Confluence custom metadata.
   *
   * If you specify the `AttachentFieldMappings` parameter, you must specify at least one field mapping.
   *
   * _Required_: No
   *
   * _Type_: List of [ConfluenceAttachmentToIndexFieldMapping](aws-properties-kendra-datasource-confluenceattachmenttoindexfieldmapping.md)
   *
   * _Maximum_: `11`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AttachmentFieldMappings?: List<KendraDataSourceConfluenceAttachmentToIndexFieldMapping>;
  /**
   * `TRUE` to index attachments of pages and blogs in Confluence.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CrawlAttachments?: Value<boolean>;
}

/**
 * Provides the configuration information for an Amazon Kendra data source.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-datasourceconfiguration.html}
 **/
export interface KendraDataSourceDataSourceConfiguration {
  /**
   * Provides the configuration information to connect to Google Drive as your data source.
   *
   * _Required_: No
   *
   * _Type_: [GoogleDriveConfiguration](aws-properties-kendra-datasource-googledriveconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  GoogleDriveConfiguration?: KendraDataSourceGoogleDriveConfiguration;
  /**
   * Provides the configuration information required for Amazon Kendra Web Crawler.
   *
   * _Required_: No
   *
   * _Type_: [WebCrawlerConfiguration](aws-properties-kendra-datasource-webcrawlerconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  WebCrawlerConfiguration?: KendraDataSourceWebCrawlerConfiguration;
  /**
   * Provides the configuration information to connect to an Amazon S3 bucket as your data source.
   *
   * _Required_: No
   *
   * _Type_: [S3DataSourceConfiguration](aws-properties-kendra-datasource-s3datasourceconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  S3Configuration?: KendraDataSourceS3DataSourceConfiguration;
  /**
   * Provides the configuration information to connect to Salesforce as your data source.
   *
   * _Required_: No
   *
   * _Type_: [SalesforceConfiguration](aws-properties-kendra-datasource-salesforceconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SalesforceConfiguration?: KendraDataSourceSalesforceConfiguration;
  /**
   * Provides the configuration information to connect to a database as your data source.
   *
   * _Required_: No
   *
   * _Type_: [DatabaseConfiguration](aws-properties-kendra-datasource-databaseconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DatabaseConfiguration?: KendraDataSourceDatabaseConfiguration;
  /**
   * Provides the configuration information to connect to Microsoft SharePoint as your data source.
   *
   * _Required_: No
   *
   * _Type_: [SharePointConfiguration](aws-properties-kendra-datasource-sharepointconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SharePointConfiguration?: KendraDataSourceSharePointConfiguration;
  /**
   * Provides the configuration information to connect to Confluence as your data source.
   *
   * _Required_: No
   *
   * _Type_: [ConfluenceConfiguration](aws-properties-kendra-datasource-confluenceconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ConfluenceConfiguration?: KendraDataSourceConfluenceConfiguration;
  /**
   * Provides the configuration information to connect to Amazon WorkDocs as your data source.
   *
   * _Required_: No
   *
   * _Type_: [WorkDocsConfiguration](aws-properties-kendra-datasource-workdocsconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  WorkDocsConfiguration?: KendraDataSourceWorkDocsConfiguration;
  /**
   * Provides the configuration information to connect to Microsoft OneDrive as your data source.
   *
   * _Required_: No
   *
   * _Type_: [OneDriveConfiguration](aws-properties-kendra-datasource-onedriveconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  OneDriveConfiguration?: KendraDataSourceOneDriveConfiguration;
  /**
   * Provides the configuration information to connect to ServiceNow as your data source.
   *
   * _Required_: No
   *
   * _Type_: [ServiceNowConfiguration](aws-properties-kendra-datasource-servicenowconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ServiceNowConfiguration?: KendraDataSourceServiceNowConfiguration;
}

/**
 * Provides the configuration information for invoking a Lambda function in AWS Lambda to alter document metadata and content when ingesting documents into Amazon Kendra. You can configure your Lambda function using [PreExtractionHookConfiguration](https://docs.aws.amazon.com/kendra/latest/dg/API_CustomDocumentEnrichmentConfiguration.html) if you want to apply advanced alterations on the original or raw documents. If you want to apply advanced alterations on the Amazon Kendra structured documents, you must configure your Lambda function using [PostExtractionHookConfiguration](https://docs.aws.amazon.com/kendra/latest/dg/API_CustomDocumentEnrichmentConfiguration.html). You can only invoke one Lambda function. However, this function can invoke other functions it requires.
 *
 * For more information, see [Customizing document metadata during the ingestion process](https://docs.aws.amazon.com/kendra/latest/dg/custom-document-enrichment.html).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-hookconfiguration.html}
 **/
export interface KendraDataSourceHookConfiguration {
  /**
   * Stores the original, raw documents or the structured, parsed documents before and after altering them. For more information, see [Data contracts for Lambda functions](https://docs.aws.amazon.com/kendra/latest/dg/custom-document-enrichment.html#cde-data-contracts-lambda).
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `3`
   *
   * _Maximum_: `63`
   *
   * _Pattern_: `[a-z0-9][.-a-z0-9]{1,61}[a-z0-9]`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  S3Bucket: Value<string>;
  /**
   * The Amazon Resource Name (ARN) of a role with permission to run a Lambda function during ingestion. For more information, see [IAM roles for Amazon Kendra](https://docs.aws.amazon.com/kendra/latest/dg/iam-roles.html).
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `2048`
   *
   * _Pattern_: `/arn:aws[a-zA-Z-]*:lambda:[a-z]+-[a-z]+-[0-9]:[0-9]{12}:function:[a-zA-Z0-9-_]+(/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})?(:[a-zA-Z0-9-_]+)?/`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  LambdaArn: Value<string>;
  /**
   * The condition used for when a Lambda function should be invoked.
   *
   * For example, you can specify a condition that if there are empty date-time values, then Amazon Kendra should invoke a function that inserts the current date-time.
   *
   * _Required_: No
   *
   * _Type_: [DocumentAttributeCondition](aws-properties-kendra-datasource-documentattributecondition.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  InvocationCondition?: KendraDataSourceDocumentAttributeCondition;
}

/**
 * Provides the configuration information to connect to Microsoft SharePoint as your data source.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-sharepointconfiguration.html}
 **/
export interface KendraDataSourceSharePointConfiguration {
  /**
   * The Amazon Resource Name (ARN) of an AWS Secrets Manager secret that contains the user name and password required to connect to the SharePoint instance. For more information, see [Microsoft SharePoint](https://docs.aws.amazon.com/kendra/latest/dg/data-source-sharepoint.html).
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `1284`
   *
   * _Pattern_: `arn:[a-z0-9-.]{1,63}:[a-z0-9-.]{0,63}:[a-z0-9-.]{0,63}:[a-z0-9-.]{0,63}:[^/].{0,1023}`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SecretArn: Value<string>;
  /**
   * The Microsoft SharePoint attribute field that contains the title of the document.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `100`
   *
   * _Pattern_: `^[a-zA-Z][a-zA-Z0-9_.]*$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DocumentTitleFieldName?: Value<string>;
  /**
   * Information required to find a specific file in an Amazon S3 bucket.
   *
   * _Required_: No
   *
   * _Type_: [S3Path](aws-properties-kendra-datasource-s3path.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SslCertificateS3Path?: KendraDataSourceS3Path;
  /**
   * `TRUE` to disable local groups information.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DisableLocalGroups?: Value<boolean>;
  /**
   * `TRUE` to index document attachments.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CrawlAttachments?: Value<boolean>;
  /**
   * A list of regular expression patterns to include certain documents in your SharePoint. Documents that match the patterns are included in the index. Documents that don't match the patterns are excluded from the index. If a document matches both an inclusion and exclusion pattern, the exclusion pattern takes precedence and the document isn't included in the index.
   *
   * The regex applies to the display URL of the SharePoint document.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Maximum_: `100`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  InclusionPatterns?: List<Value<string>>;
  /**
   * Provides information for connecting to an Amazon VPC.
   *
   * _Required_: No
   *
   * _Type_: [DataSourceVpcConfiguration](aws-properties-kendra-datasource-datasourcevpcconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  VpcConfiguration?: KendraDataSourceDataSourceVpcConfiguration;
  /**
   * The Microsoft SharePoint site URLs for the documents you want to index.
   *
   * _Required_: Yes
   *
   * _Type_: List of String
   *
   * _Maximum_: `100`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Urls: List<Value<string>>;
  /**
   * `TRUE` to use the SharePoint change log to determine which documents require updating in the index. Depending on the change log's size, it may take longer for Amazon Kendra to use the change log than to scan all of your documents in SharePoint.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  UseChangeLog?: Value<boolean>;
  /**
   * A list of `DataSourceToIndexFieldMapping` objects that map Microsoft SharePoint attributes or fields to Amazon Kendra index fields. You must first create the index fields using the [UpdateIndex](https://docs.aws.amazon.com/kendra/latest/dg/API_UpdateIndex.html) operation before you map SharePoint attributes. For more information, see [Mapping Data Source Fields](https://docs.aws.amazon.com/kendra/latest/dg/field-mapping.html).
   *
   * _Required_: No
   *
   * _Type_: List of [DataSourceToIndexFieldMapping](aws-properties-kendra-datasource-datasourcetoindexfieldmapping.md)
   *
   * _Maximum_: `100`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FieldMappings?: List<KendraDataSourceDataSourceToIndexFieldMapping>;
  /**
   * A list of regular expression patterns. Documents that match the patterns are excluded from the index. Documents that don't match the patterns are included in the index. If a document matches both an exclusion pattern and an inclusion pattern, the document is not included in the index.
   *
   * The regex is applied to the display URL of the SharePoint document.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Maximum_: `100`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ExclusionPatterns?: List<Value<string>>;
  /**
   * The version of Microsoft SharePoint that you use.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Allowed values_: `SHAREPOINT_2013 | SHAREPOINT_2016 | SHAREPOINT_2019 | SHAREPOINT_ONLINE`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SharePointVersion: Value<string>;
}

/**
 * Maps attributes or field names of Confluence attachments to Amazon Kendra index field names. To create custom fields, use the `UpdateIndex` API before you map to Confluence fields. For more information, see [Mapping data source fields](https://docs.aws.amazon.com/kendra/latest/dg/field-mapping.html). The Confuence data source field names must exist in your Confluence custom metadata.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-confluenceattachmenttoindexfieldmapping.html}
 **/
export interface KendraDataSourceConfluenceAttachmentToIndexFieldMapping {
  /**
   * The format for date fields in the data source. If the field specified in `DataSourceFieldName` is a date field you must specify the date format. If the field is not a date field, an exception is thrown.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `4`
   *
   * _Maximum_: `40`
   *
   * _Pattern_: `^(?!s).*(?<!s)$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DateFieldFormat?: Value<string>;
  /**
   * The name of the index field to map to the Confluence data source field. The index field type must match the Confluence field type.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `30`
   *
   * _Pattern_: `^P{C}*$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  IndexFieldName: Value<string>;
  /**
   * The name of the field in the data source.
   *
   * You must first create the index field using the `UpdateIndex` API.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Allowed values_: `AUTHOR | CONTENT_TYPE | CREATED_DATE | DISPLAY_URL | FILE_SIZE | ITEM_TYPE | PARENT_ID | SPACE_KEY | SPACE_NAME | URL | VERSION`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DataSourceFieldName: Value<string>;
}

/**
 * Provides information about how Amazon Kendra should use the columns of a database in an index.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-columnconfiguration.html}
 **/
export interface KendraDataSourceColumnConfiguration {
  /**
   * One to five columns that indicate when a document in the database has changed.
   *
   * _Required_: Yes
   *
   * _Type_: List of String
   *
   * _Maximum_: `5`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ChangeDetectingColumns: List<Value<string>>;
  /**
   * The column that contains the title of the document.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `100`
   *
   * _Pattern_: `^[a-zA-Z][a-zA-Z0-9_]*$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DocumentTitleColumnName?: Value<string>;
  /**
   * The column that provides the document's identifier.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `100`
   *
   * _Pattern_: `^[a-zA-Z][a-zA-Z0-9_]*$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DocumentIdColumnName: Value<string>;
  /**
   * The column that contains the contents of the document.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `100`
   *
   * _Pattern_: `^[a-zA-Z][a-zA-Z0-9_]*$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DocumentDataColumnName: Value<string>;
  /**
   * An array of objects that map database column names to the corresponding fields in an index. You must first create the fields in the index using the [UpdateIndex](https://docs.aws.amazon.com/kendra/latest/dg/API_UpdateIndex.html) operation.
   *
   * _Required_: No
   *
   * _Type_: List of [DataSourceToIndexFieldMapping](aws-properties-kendra-datasource-datasourcetoindexfieldmapping.md)
   *
   * _Maximum_: `100`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FieldMappings?: List<KendraDataSourceDataSourceToIndexFieldMapping>;
}

/**
 * Provides the configuration information for crawling knowledge articles in the ServiceNow site.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-servicenowknowledgearticleconfiguration.html}
 **/
export interface KendraDataSourceServiceNowKnowledgeArticleConfiguration {
  /**
   * The name of the ServiceNow field that is mapped to the index document title field.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `100`
   *
   * _Pattern_: `^[a-zA-Z][a-zA-Z0-9_.]*$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DocumentTitleFieldName?: Value<string>;
  /**
   * A list of regular expression patterns to include certain attachments of knowledge articles in your ServiceNow. Item that match the patterns are included in the index. Items that don't match the patterns are excluded from the index. If an item matches both an inclusion and exclusion pattern, the exclusion pattern takes precedence and the item isn't included in the index.
   *
   * The regex is applied to the field specified in the `PatternTargetField`.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Maximum_: `100`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  IncludeAttachmentFilePatterns?: List<Value<string>>;
  /**
   * A list of regular expression patterns to exclude certain attachments of knowledge articles in your ServiceNow. Item that match the patterns are excluded from the index. Items that don't match the patterns are included in the index. If an item matches both an inclusion and exclusion pattern, the exclusion pattern takes precedence and the item isn't included in the index.
   *
   * The regex is applied to the field specified in the `PatternTargetField`.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Maximum_: `100`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ExcludeAttachmentFilePatterns?: List<Value<string>>;
  /**
   * A query that selects the knowledge articles to index. The query can return articles from multiple knowledge bases, and the knowledge bases can be public or private.
   *
   * The query string must be one generated by the ServiceNow console. For more information, see [Specifying documents to index with a query](https://docs.aws.amazon.com/kendra/latest/dg/servicenow-query.html).
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `2048`
   *
   * _Pattern_: `^P{C}*$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FilterQuery?: Value<string>;
  /**
   * `TRUE` to index attachments to knowledge articles.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CrawlAttachments?: Value<boolean>;
  /**
   * Maps attributes or field names of knoweldge articles to Amazon Kendra index field names. To create custom fields, use the `UpdateIndex` API before you map to ServiceNow fields. For more information, see [Mapping data source fields](https://docs.aws.amazon.com/kendra/latest/dg/field-mapping.html). The ServiceNow data source field names must exist in your ServiceNow custom metadata.
   *
   * _Required_: No
   *
   * _Type_: List of [DataSourceToIndexFieldMapping](aws-properties-kendra-datasource-datasourcetoindexfieldmapping.md)
   *
   * _Maximum_: `100`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FieldMappings?: List<KendraDataSourceDataSourceToIndexFieldMapping>;
  /**
   * The name of the ServiceNow field that is mapped to the index document contents field in the Amazon Kendra index.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `100`
   *
   * _Pattern_: `^[a-zA-Z][a-zA-Z0-9_.]*$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DocumentDataFieldName: Value<string>;
}

/**
 * The target document attribute or metadata field you want to alter when ingesting documents into Amazon Kendra.
 *
 * For example, you can delete customer identification numbers associated with the documents, stored in the document metadata field called 'Customer_ID'. You set the target key as 'Customer_ID' and the deletion flag to `TRUE`. This removes all customer ID values in the field 'Customer_ID'. This would scrub personally identifiable information from each document's metadata.
 *
 * Amazon Kendra cannot create a target field if it has not already been created as an index field. After you create your index field, you can create a document metadata field using `DocumentAttributeTarget`. Amazon Kendra then will map your newly created metadata field to your index field.
 *
 * You can also use this with [DocumentAttributeCondition](https://docs.aws.amazon.com/kendra/latest/dg/API_DocumentAttributeCondition.html).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-documentattributetarget.html}
 **/
export interface KendraDataSourceDocumentAttributeTarget {
  /**
   * The identifier of the target document attribute or metadata field.
   *
   * For example, 'Department' could be an identifier for the target attribute or metadata field that includes the department names associated with the documents.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `200`
   *
   * _Pattern_: `[a-zA-Z0-9_][a-zA-Z0-9_-]*`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TargetDocumentAttributeKey: Value<string>;
  /**
   * `TRUE` to delete the existing target value for your specified target attribute key. You cannot create a target value and set this to `TRUE`. To create a target value (`TargetDocumentAttributeValue`), set this to `FALSE`.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TargetDocumentAttributeValueDeletion?: Value<boolean>;
  /**
   * The target value you want to create for the target attribute.
   *
   * For example, 'Finance' could be the target value for the target attribute key 'Department'.
   *
   * _Required_: No
   *
   * _Type_: [DocumentAttributeValue](aws-properties-kendra-datasource-documentattributevalue.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TargetDocumentAttributeValue?: KendraDataSourceDocumentAttributeValue;
}

/**
 * Provides the configuration information to connect to Amazon WorkDocs as your data source.
 *
 * Amazon WorkDocs connector is available in Oregon, North Virginia, Sydney, Singapore and Ireland regions.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-workdocsconfiguration.html}
 **/
export interface KendraDataSourceWorkDocsConfiguration {
  /**
   * `TRUE` to include comments on documents in your index. Including comments in your index means each comment is a document that can be searched on.
   *
   * The default is set to `FALSE`.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CrawlComments?: Value<boolean>;
  /**
   * The identifier of the directory corresponding to your Amazon WorkDocs site repository.
   *
   * You can find the organization ID in the [AWS Directory Service](https://console.aws.amazon.com/directoryservicev2/) by going to **Active Directory**, then **Directories**. Your Amazon WorkDocs site directory has an ID, which is the organization ID. You can also set up a new Amazon WorkDocs directory in the AWS Directory Service console and enable a Amazon WorkDocs site for the directory in the Amazon WorkDocs console.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `12`
   *
   * _Maximum_: `12`
   *
   * _Pattern_: `d-[0-9a-fA-F]{10}`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  OrganizationId: Value<string>;
  /**
   * A list of regular expression patterns to include certain files in your Amazon WorkDocs site repository. Files that match the patterns are included in the index. Files that don't match the patterns are excluded from the index. If a file matches both an inclusion and exclusion pattern, the exclusion pattern takes precedence and the file isn't included in the index.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Maximum_: `100`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  InclusionPatterns?: List<Value<string>>;
  /**
   * `TRUE` to use the Amazon WorkDocs change log to determine which documents require updating in the index. Depending on the change log's size, it may take longer for Amazon Kendra to use the change log than to scan all of your documents in Amazon WorkDocs.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  UseChangeLog?: Value<boolean>;
  /**
   * A list of `DataSourceToIndexFieldMapping` objects that map Amazon WorkDocs data source attributes or field names to Amazon Kendra index field names. To create custom fields, use the `UpdateIndex` API before you map to Amazon WorkDocs fields. For more information, see [Mapping data source fields](https://docs.aws.amazon.com/kendra/latest/dg/field-mapping.html). The Amazon WorkDocs data source field names must exist in your Amazon WorkDocs custom metadata.
   *
   * _Required_: No
   *
   * _Type_: List of [DataSourceToIndexFieldMapping](aws-properties-kendra-datasource-datasourcetoindexfieldmapping.md)
   *
   * _Maximum_: `100`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FieldMappings?: List<KendraDataSourceDataSourceToIndexFieldMapping>;
  /**
   * A list of regular expression patterns to exclude certain files in your Amazon WorkDocs site repository. Files that match the patterns are excluded from the index. Files that don’t match the patterns are included in the index. If a file matches both an inclusion and exclusion pattern, the exclusion pattern takes precedence and the file isn't included in the index.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Maximum_: `100`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ExclusionPatterns?: List<Value<string>>;
}

/**
 * Provides the configuration information for a web proxy to connect to website hosts.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-proxyconfiguration.html}
 **/
export interface KendraDataSourceProxyConfiguration {
  /**
   * The port number of the website host you want to connect to via a web proxy server.
   *
   * For example, the port for https://a.example.com/page1.html is 443, the standard port for HTTPS.
   *
   * _Required_: Yes
   *
   * _Type_: Integer
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `65535`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Port: Value<number>;
  /**
   * The name of the website host you want to connect to via a web proxy server.
   *
   * For example, the host name of https://a.example.com/page1.html is "a.example.com".
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `253`
   *
   * _Pattern_: `([^s]*)`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Host: Value<string>;
  /**
   * Your secret ARN, which you can create in [AWS Secrets Manager](https://docs.aws.amazon.com/secretsmanager/latest/userguide/intro.html)
   *
   * The credentials are optional. You use a secret if web proxy credentials are required to connect to a website host. Amazon Kendra currently support basic authentication to connect to a web proxy server. The secret stores your credentials.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `1284`
   *
   * _Pattern_: `arn:[a-z0-9-.]{1,63}:[a-z0-9-.]{0,63}:[a-z0-9-.]{0,63}:[a-z0-9-.]{0,63}:[^/].{0,1023}`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Credentials?: Value<string>;
}

/**
 * Provides the configuration information to connect to ServiceNow as your data source.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-servicenowconfiguration.html}
 **/
export interface KendraDataSourceServiceNowConfiguration {
  /**
   * The Amazon Resource Name (ARN) of the AWS Secrets Manager secret that contains the user name and password required to connect to the ServiceNow instance. You can also provide OAuth authentication credentials of user name, password, client ID, and client secret. For more information, see [Using a ServiceNow data source](https://docs.aws.amazon.com/kendra/latest/dg/data-source-servicenow.html).
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `1284`
   *
   * _Pattern_: `arn:[a-z0-9-.]{1,63}:[a-z0-9-.]{0,63}:[a-z0-9-.]{0,63}:[a-z0-9-.]{0,63}:[^/].{0,1023}`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SecretArn: Value<string>;
  /**
   * The ServiceNow instance that the data source connects to. The host endpoint should look like the following: _{instance}.service-now.com._
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `2048`
   *
   * _Pattern_: `^(?!(^(https?|ftp|file)://))[a-z0-9-]+(.service-now.com)$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  HostUrl: Value<string>;
  /**
   * Configuration information for crawling service catalogs in the ServiceNow site.
   *
   * _Required_: No
   *
   * _Type_: [ServiceNowServiceCatalogConfiguration](aws-properties-kendra-datasource-servicenowservicecatalogconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ServiceCatalogConfiguration?: KendraDataSourceServiceNowServiceCatalogConfiguration;
  /**
   * The identifier of the release that the ServiceNow host is running. If the host is not running the `LONDON` release, use `OTHERS`.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Allowed values_: `LONDON | OTHERS`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ServiceNowBuildVersion: Value<string>;
  /**
   * Configuration information for crawling knowledge articles in the ServiceNow site.
   *
   * _Required_: No
   *
   * _Type_: [ServiceNowKnowledgeArticleConfiguration](aws-properties-kendra-datasource-servicenowknowledgearticleconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  KnowledgeArticleConfiguration?: KendraDataSourceServiceNowKnowledgeArticleConfiguration;
  /**
   * The type of authentication used to connect to the ServiceNow instance. If you choose `HTTP_BASIC`, Amazon Kendra is authenticated using the user name and password provided in the AWS Secrets Manager secret in the `SecretArn` field. If you choose `OAUTH2`, Amazon Kendra is authenticated using the credentials of client ID, client secret, user name and password.
   *
   * When you use `OAUTH2` authentication, you must generate a token and a client secret using the ServiceNow console. For more information, see [Using a ServiceNow data source](https://docs.aws.amazon.com/kendra/latest/dg/data-source-servicenow.html).
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `HTTP_BASIC | OAUTH2`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AuthenticationType?: Value<string>;
}

/**
 * Maps attributes or field names of Confluence pages to Amazon Kendra index field names. To create custom fields, use the `UpdateIndex` API before you map to Confluence fields. For more information, see [Mapping data source fields](https://docs.aws.amazon.com/kendra/latest/dg/field-mapping.html). The Confluence data source field names must exist in your Confluence custom metadata.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-confluencepagetoindexfieldmapping.html}
 **/
export interface KendraDataSourceConfluencePageToIndexFieldMapping {
  /**
   * The format for date fields in the data source. If the field specified in `DataSourceFieldName` is a date field you must specify the date format. If the field is not a date field, an exception is thrown.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `4`
   *
   * _Maximum_: `40`
   *
   * _Pattern_: `^(?!s).*(?<!s)$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DateFieldFormat?: Value<string>;
  /**
   * The name of the index field to map to the Confluence data source field. The index field type must match the Confluence field type.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `30`
   *
   * _Pattern_: `^P{C}*$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  IndexFieldName: Value<string>;
  /**
   * The name of the field in the data source.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Allowed values_: `AUTHOR | CONTENT_STATUS | CREATED_DATE | DISPLAY_URL | ITEM_TYPE | LABELS | MODIFIED_DATE | PARENT_ID | SPACE_KEY | SPACE_NAME | URL | VERSION`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DataSourceFieldName: Value<string>;
}

/**
 * Provides the configuration information to connect to a index.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-databaseconfiguration.html}
 **/
export interface KendraDataSourceDatabaseConfiguration {
  /**
   * Provides information about how Amazon Kendra uses quote marks around SQL identifiers when querying a database data source.
   *
   * _Required_: No
   *
   * _Type_: [SqlConfiguration](aws-properties-kendra-datasource-sqlconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SqlConfiguration?: KendraDataSourceSqlConfiguration;
  /**
   * The type of database engine that runs the database.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Allowed values_: `RDS_AURORA_MYSQL | RDS_AURORA_POSTGRESQL | RDS_MYSQL | RDS_POSTGRESQL`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DatabaseEngineType: Value<string>;
  /**
   * Configuration information that's required to connect to a database.
   *
   * _Required_: Yes
   *
   * _Type_: [ConnectionConfiguration](aws-properties-kendra-datasource-connectionconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ConnectionConfiguration: KendraDataSourceConnectionConfiguration;
  /**
   * Information about where the index should get the document information from the database.
   *
   * _Required_: Yes
   *
   * _Type_: [ColumnConfiguration](aws-properties-kendra-datasource-columnconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ColumnConfiguration: KendraDataSourceColumnConfiguration;
  /**
   * Provides information for connecting to an Amazon VPC.
   *
   * _Required_: No
   *
   * _Type_: [DataSourceVpcConfiguration](aws-properties-kendra-datasource-datasourcevpcconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  VpcConfiguration?: KendraDataSourceDataSourceVpcConfiguration;
  /**
   * Information about the database column that provides information for user context filtering.
   *
   * _Required_: No
   *
   * _Type_: [AclConfiguration](aws-properties-kendra-datasource-aclconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AclConfiguration?: KendraDataSourceAclConfiguration;
}

/**
 * Provides the configuration information to connect to an Amazon S3 bucket.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-s3datasourceconfiguration.html}
 **/
export interface KendraDataSourceS3DataSourceConfiguration {
  /**
   * The name of the bucket that contains the documents.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `3`
   *
   * _Maximum_: `63`
   *
   * _Pattern_: `[a-z0-9][.-a-z0-9]{1,61}[a-z0-9]`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  BucketName: Value<string>;
  /**
   * A list of glob patterns for documents that should be indexed. If a document that matches an inclusion pattern also matches an exclusion pattern, the document is not indexed.
   *
   * Some [examples](https://docs.aws.amazon.com/cli/latest/reference/s3/#use-of-exclude-and-include-filters) are:
   */
  InclusionPatterns?: List<Value<string>>;
  /**
   * A list of S3 prefixes for the documents that should be included in the index.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Maximum_: `100`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  InclusionPrefixes?: List<Value<string>>;
  /**
   * Provides the path to the S3 bucket that contains the user context filtering files for the data source. For the format of the file, see [Access control for S3 data sources](https://docs.aws.amazon.com/kendra/latest/dg/s3-acl.html).
   *
   * _Required_: No
   *
   * _Type_: [AccessControlListConfiguration](aws-properties-kendra-datasource-accesscontrollistconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AccessControlListConfiguration?: KendraDataSourceAccessControlListConfiguration;
  /**
   * A list of glob patterns for documents that should not be indexed. If a document that matches an inclusion prefix or inclusion pattern also matches an exclusion pattern, the document is not indexed.
   *
   * Some [examples](https://docs.aws.amazon.com/cli/latest/reference/s3/#use-of-exclude-and-include-filters) are:
   */
  ExclusionPatterns?: List<Value<string>>;
  /**
   * Specifies document metadata files that contain information such as the document access control information, source URI, document author, and custom attributes. Each metadata file contains metadata about a single document.
   *
   * _Required_: No
   *
   * _Type_: [DocumentsMetadataConfiguration](aws-properties-kendra-datasource-documentsmetadataconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DocumentsMetadataConfiguration?: KendraDataSourceDocumentsMetadataConfiguration;
}

/**
 * Configuration of blog settings for the Confluence data source. Blogs are always indexed unless filtered from the index by the `ExclusionPatterns` or `InclusionPatterns` fields in the `ConfluenceConfiguration` object.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-confluenceblogconfiguration.html}
 **/
export interface KendraDataSourceConfluenceBlogConfiguration {
  /**
   * Maps attributes or field names of Confluence blogs to Amazon Kendra index field names. To create custom fields, use the `UpdateIndex` API before you map to Confluence fields. For more information, see [Mapping data source fields](https://docs.aws.amazon.com/kendra/latest/dg/field-mapping.html). The Confluence data source field names must exist in your Confluence custom metadata.
   *
   * If you specify the `BlogFieldMappings` parameter, you must specify at least one field mapping.
   *
   * _Required_: No
   *
   * _Type_: List of [ConfluenceBlogToIndexFieldMapping](aws-properties-kendra-datasource-confluenceblogtoindexfieldmapping.md)
   *
   * _Maximum_: `9`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  BlogFieldMappings?: List<KendraDataSourceConfluenceBlogToIndexFieldMapping>;
}

/**
 * Configuration of the page settings for the Confluence data source.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-confluencepageconfiguration.html}
 **/
export interface KendraDataSourceConfluencePageConfiguration {
  /**
   * Maps attributes or field names of Confluence pages to Amazon Kendra index field names. To create custom fields, use the `UpdateIndex` API before you map to Confluence fields. For more information, see [Mapping data source fields](https://docs.aws.amazon.com/kendra/latest/dg/field-mapping.html). The Confluence data source field names must exist in your Confluence custom metadata.
   *
   * If you specify the `PageFieldMappings` parameter, you must specify at least one field mapping.
   *
   * _Required_: No
   *
   * _Type_: List of [ConfluencePageToIndexFieldMapping](aws-properties-kendra-datasource-confluencepagetoindexfieldmapping.md)
   *
   * _Maximum_: `12`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PageFieldMappings?: List<KendraDataSourceConfluencePageToIndexFieldMapping>;
}

/**
 * Provides the configuration information for crawling service catalog items in the ServiceNow site
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-servicenowservicecatalogconfiguration.html}
 **/
export interface KendraDataSourceServiceNowServiceCatalogConfiguration {
  /**
   * The name of the ServiceNow field that is mapped to the index document title field.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `100`
   *
   * _Pattern_: `^[a-zA-Z][a-zA-Z0-9_.]*$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DocumentTitleFieldName?: Value<string>;
  /**
   * A list of regular expression patterns to include certain attachments of catalogs in your ServiceNow. Item that match the patterns are included in the index. Items that don't match the patterns are excluded from the index. If an item matches both an inclusion and exclusion pattern, the exclusion pattern takes precedence and the item isn't included in the index.
   *
   * The regex is applied to the file name of the attachment.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Maximum_: `100`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  IncludeAttachmentFilePatterns?: List<Value<string>>;
  /**
   * A list of regular expression patterns to exclude certain attachments of catalogs in your ServiceNow. Item that match the patterns are excluded from the index. Items that don't match the patterns are included in the index. If an item matches both an inclusion and exclusion pattern, the exclusion pattern takes precedence and the item isn't included in the index.
   *
   * The regex is applied to the file name of the attachment.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Maximum_: `100`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ExcludeAttachmentFilePatterns?: List<Value<string>>;
  /**
   * `TRUE` to index attachments to service catalog items.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CrawlAttachments?: Value<boolean>;
  /**
   * Maps attributes or field names of catalogs to Amazon Kendra index field names. To create custom fields, use the `UpdateIndex` API before you map to ServiceNow fields. For more information, see [Mapping data source fields](https://docs.aws.amazon.com/kendra/latest/dg/field-mapping.html). The ServiceNow data source field names must exist in your ServiceNow custom metadata.
   *
   * _Required_: No
   *
   * _Type_: List of [DataSourceToIndexFieldMapping](aws-properties-kendra-datasource-datasourcetoindexfieldmapping.md)
   *
   * _Maximum_: `100`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FieldMappings?: List<KendraDataSourceDataSourceToIndexFieldMapping>;
  /**
   * The name of the ServiceNow field that is mapped to the index document contents field in the Amazon Kendra index.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `100`
   *
   * _Pattern_: `^[a-zA-Z][a-zA-Z0-9_.]*$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DocumentDataFieldName: Value<string>;
}

/**
 * Provides the configuration information for processing attachments to Salesforce standard objects.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-salesforcestandardobjectattachmentconfiguration.html}
 **/
export interface KendraDataSourceSalesforceStandardObjectAttachmentConfiguration {
  /**
   * The name of the field used for the document title.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `100`
   *
   * _Pattern_: `^[a-zA-Z][a-zA-Z0-9_.]*$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DocumentTitleFieldName?: Value<string>;
  /**
   * One or more objects that map fields in attachments to Amazon Kendra index fields.
   *
   * _Required_: No
   *
   * _Type_: List of [DataSourceToIndexFieldMapping](aws-properties-kendra-datasource-datasourcetoindexfieldmapping.md)
   *
   * _Maximum_: `100`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FieldMappings?: List<KendraDataSourceDataSourceToIndexFieldMapping>;
}

/**
 * Maps attributes or field names of Confluence blog to Amazon Kendra index field names. To create custom fields, use the `UpdateIndex` API before you map to Confluence fields. For more information, see [Mapping data source fields](https://docs.aws.amazon.com/kendra/latest/dg/field-mapping.html). The Confluence data source field names must exist in your Confluence custom metadata.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-confluenceblogtoindexfieldmapping.html}
 **/
export interface KendraDataSourceConfluenceBlogToIndexFieldMapping {
  /**
   * The format for date fields in the data source. If the field specified in `DataSourceFieldName` is a date field you must specify the date format. If the field is not a date field, an exception is thrown.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `4`
   *
   * _Maximum_: `40`
   *
   * _Pattern_: `^(?!s).*(?<!s)$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DateFieldFormat?: Value<string>;
  /**
   * The name of the index field to map to the Confluence data source field. The index field type must match the Confluence field type.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `30`
   *
   * _Pattern_: `^P{C}*$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  IndexFieldName: Value<string>;
  /**
   * The name of the field in the data source.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Allowed values_: `AUTHOR | DISPLAY_URL | ITEM_TYPE | LABELS | PUBLISH_DATE | SPACE_KEY | SPACE_NAME | URL | VERSION`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DataSourceFieldName: Value<string>;
}

/**
 * The value of a document attribute. You can only provide one value for a document attribute.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-documentattributevalue.html}
 **/
export interface KendraDataSourceDocumentAttributeValue {
  /**
   * A date expressed as an ISO 8601 string.
   *
   * It is important for the time zone to be included in the ISO 8601 date-time format. For example, 2012-03-25T12:30:10+01:00 is the ISO 8601 date-time format for March 25th 2012 at 12:30PM (plus 10 seconds) in Central European Time.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DateValue?: Value<string>;
  /**
   * A long integer value.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  LongValue?: Value<number>;
  /**
   * A string, such as "department".
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `2048`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  StringValue?: Value<string>;
  /**
   * A list of strings. The default maximum length or number of strings is 10.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  StringListValue?: List<Value<string>>;
}

/**
 * Provides the configuration information of the sitemap URLs to crawl.
 *
 * _When selecting websites to index, you must adhere to the [Amazon Acceptable Use Policy](http://aws.amazon.com/aup/) and all other Amazon terms. Remember that you must only use the Amazon Kendra web crawler to index your own webpages, or webpages that you have authorization to index._
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-webcrawlersitemapsconfiguration.html}
 **/
export interface KendraDataSourceWebCrawlerSiteMapsConfiguration {
  /**
   * The list of sitemap URLs of the websites you want to crawl.
   *
   * The list can include a maximum of three sitemap URLs.
   *
   * _Required_: Yes
   *
   * _Type_: List of String
   *
   * _Maximum_: `3`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SiteMaps: List<Value<string>>;
}

/**
 * User accounts whose documents should be indexed.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-onedriveusers.html}
 **/
export interface KendraDataSourceOneDriveUsers {
  /**
   * A list of users whose documents should be indexed. Specify the user names in email format, for example, `username@tenantdomain`. If you need to index the documents of more than 100 users, use the `OneDriveUserS3Path` field to specify the location of a file containing a list of users.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Maximum_: `100`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  OneDriveUserList?: List<Value<string>>;
  /**
   * The S3 bucket location of a file containing a list of users whose documents should be indexed.
   *
   * _Required_: No
   *
   * _Type_: [S3Path](aws-properties-kendra-datasource-s3path.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  OneDriveUserS3Path?: KendraDataSourceS3Path;
}

/**
 * Provides information about the column that should be used for filtering the query response by groups.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-aclconfiguration.html}
 **/
export interface KendraDataSourceAclConfiguration {
  /**
   * A list of groups, separated by semi-colons, that filters a query response based on user context. The document is only returned to users that are in one of the groups specified in the `UserContext` field of the [Query](https://docs.aws.amazon.com/kendra/latest/dg/API_Query.html) operation.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `100`
   *
   * _Pattern_: `^[a-zA-Z][a-zA-Z0-9_]*$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AllowedGroupsColumnName: Value<string>;
}

/**
 * Provides the configuration information for standard Salesforce knowledge articles.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-salesforcestandardknowledgearticletypeconfiguration.html}
 **/
export interface KendraDataSourceSalesforceStandardKnowledgeArticleTypeConfiguration {
  /**
   * The name of the field that contains the document title.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `100`
   *
   * _Pattern_: `^[a-zA-Z][a-zA-Z0-9_.]*$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DocumentTitleFieldName?: Value<string>;
  /**
   * Maps attributes or field names of the knowledge article to Amazon Kendra index field names. To create custom fields, use the `UpdateIndex` API before you map to Salesforce fields. For more information, see [Mapping data source fields](https://docs.aws.amazon.com/kendra/latest/dg/field-mapping.html). The Salesforce data source field names must exist in your Salesforce custom metadata.
   *
   * _Required_: No
   *
   * _Type_: List of [DataSourceToIndexFieldMapping](aws-properties-kendra-datasource-datasourcetoindexfieldmapping.md)
   *
   * _Maximum_: `100`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FieldMappings?: List<KendraDataSourceDataSourceToIndexFieldMapping>;
  /**
   * The name of the field that contains the document data to index.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `100`
   *
   * _Pattern_: `^[a-zA-Z][a-zA-Z0-9_.]*$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DocumentDataFieldName: Value<string>;
}

/**
 * Provides the configuration information to connect to an Amazon VPC.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-datasourcevpcconfiguration.html}
 **/
export interface KendraDataSourceDataSourceVpcConfiguration {
  /**
   * A list of identifiers for subnets within your Amazon VPC. The subnets should be able to connect to each other in the VPC, and they should have outgoing access to the Internet through a NAT device.
   *
   * _Required_: Yes
   *
   * _Type_: List of String
   *
   * _Maximum_: `6`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SubnetIds: List<Value<string>>;
  /**
   * A list of identifiers of security groups within your Amazon VPC. The security groups should enable Amazon Kendra to connect to the data source.
   *
   * _Required_: Yes
   *
   * _Type_: List of String
   *
   * _Maximum_: `10`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SecurityGroupIds: List<Value<string>>;
}

/**
 * Provides the configuration information to connect to websites that require user authentication.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-webcrawlerauthenticationconfiguration.html}
 **/
export interface KendraDataSourceWebCrawlerAuthenticationConfiguration {
  /**
   * The list of configuration information that's required to connect to and crawl a website host using basic authentication credentials.
   *
   * The list includes the name and port number of the website host.
   *
   * _Required_: No
   *
   * _Type_: List of [WebCrawlerBasicAuthentication](aws-properties-kendra-datasource-webcrawlerbasicauthentication.md)
   *
   * _Maximum_: `10`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  BasicAuthentication?: List<KendraDataSourceWebCrawlerBasicAuthentication>;
}

/**
 * Provides the configuration information for the knowledge article types that Amazon Kendra indexes. Amazon Kendra indexes standard knowledge articles and the standard fields of knowledge articles, or the custom fields of custom knowledge articles, but not both
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-salesforceknowledgearticleconfiguration.html}
 **/
export interface KendraDataSourceSalesforceKnowledgeArticleConfiguration {
  /**
   * Specifies the document states that should be included when Amazon Kendra indexes knowledge articles. You must specify at least one state.
   *
   * _Required_: Yes
   *
   * _Type_: List of String
   *
   * _Maximum_: `3`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  IncludedStates: List<Value<string>>;
  /**
   * Configuration information for standard Salesforce knowledge articles.
   *
   * _Required_: No
   *
   * _Type_: [SalesforceStandardKnowledgeArticleTypeConfiguration](aws-properties-kendra-datasource-salesforcestandardknowledgearticletypeconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  StandardKnowledgeArticleTypeConfiguration?: KendraDataSourceSalesforceStandardKnowledgeArticleTypeConfiguration;
  /**
   * Configuration information for custom Salesforce knowledge articles.
   *
   * _Required_: No
   *
   * _Type_: List of [SalesforceCustomKnowledgeArticleTypeConfiguration](aws-properties-kendra-datasource-salesforcecustomknowledgearticletypeconfiguration.md)
   *
   * _Maximum_: `10`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CustomKnowledgeArticleTypeConfigurations?: List<KendraDataSourceSalesforceCustomKnowledgeArticleTypeConfiguration>;
}

/**
 * Specifies access control list files for the documents in a data source.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-accesscontrollistconfiguration.html}
 **/
export interface KendraDataSourceAccessControlListConfiguration {
  /**
   * Path to the AWS S3 bucket that contains the access control list files.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `1024`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  KeyPath?: Value<string>;
}

/**
 * Maps a column or attribute in the data source to an index field. You must first create the fields in the index using the [UpdateIndex](https://docs.aws.amazon.com/kendra/latest/dg/API_UpdateIndex.html) operation.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-datasourcetoindexfieldmapping.html}
 **/
export interface KendraDataSourceDataSourceToIndexFieldMapping {
  /**
   * The type of data stored in the column or attribute.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `4`
   *
   * _Maximum_: `40`
   *
   * _Pattern_: `^(?!s).*(?<!s)$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DateFieldFormat?: Value<string>;
  /**
   * The name of the field in the index.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `30`
   *
   * _Pattern_: `^P{C}*$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  IndexFieldName: Value<string>;
  /**
   * The name of the column or attribute in the data source.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `100`
   *
   * _Pattern_: `^[a-zA-Z][a-zA-Z0-9_.]*$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DataSourceFieldName: Value<string>;
}

/**
 * Maps attributes or field names of Confluence spaces to Amazon Kendra index field names. To create custom fields, use the `UpdateIndex` API before you map to Confluence fields. For more information, see [Mapping data source fields](https://docs.aws.amazon.com/kendra/latest/dg/field-mapping.html). The Confluence data source field names must exist in your Confluence custom metadata.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-confluencespacetoindexfieldmapping.html}
 **/
export interface KendraDataSourceConfluenceSpaceToIndexFieldMapping {
  /**
   * The format for date fields in the data source. If the field specified in `DataSourceFieldName` is a date field you must specify the date format. If the field is not a date field, an exception is thrown.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `4`
   *
   * _Maximum_: `40`
   *
   * _Pattern_: `^(?!s).*(?<!s)$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DateFieldFormat?: Value<string>;
  /**
   * The name of the index field to map to the Confluence data source field. The index field type must match the Confluence field type.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `30`
   *
   * _Pattern_: `^P{C}*$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  IndexFieldName: Value<string>;
  /**
   * The name of the field in the data source.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Allowed values_: `DISPLAY_URL | ITEM_TYPE | SPACE_KEY | URL`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DataSourceFieldName: Value<string>;
}

/**
 * Provides the configuration information to connect to OneDrive as your data source.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-onedriveconfiguration.html}
 **/
export interface KendraDataSourceOneDriveConfiguration {
  /**
   * The Azure Active Directory domain of the organization.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `256`
   *
   * _Pattern_: `^([a-zA-Z0-9]+(-[a-zA-Z0-9]+)*.)+[a-z]{2,}$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TenantDomain: Value<string>;
  /**
   * The Amazon Resource Name (ARN) of an AWS Secrets Manager secret that contains the user name and password to connect to OneDrive. The user name should be the application ID for the OneDrive application, and the password is the application key for the OneDrive application.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `1284`
   *
   * _Pattern_: `arn:[a-z0-9-.]{1,63}:[a-z0-9-.]{0,63}:[a-z0-9-.]{0,63}:[a-z0-9-.]{0,63}:[^/].{0,1023}`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SecretArn: Value<string>;
  /**
   * `TRUE` to disable local groups information.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DisableLocalGroups?: Value<boolean>;
  /**
   * A list of user accounts whose documents should be indexed.
   *
   * _Required_: Yes
   *
   * _Type_: [OneDriveUsers](aws-properties-kendra-datasource-onedriveusers.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  OneDriveUsers: KendraDataSourceOneDriveUsers;
  /**
   * A list of regular expression patterns to include certain documents in your OneDrive. Documents that match the patterns are included in the index. Documents that don't match the patterns are excluded from the index. If a document matches both an inclusion and exclusion pattern, the exclusion pattern takes precedence and the document isn't included in the index.
   *
   * The pattern is applied to the file name.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Maximum_: `100`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  InclusionPatterns?: List<Value<string>>;
  /**
   * A list of `DataSourceToIndexFieldMapping` objects that map OneDrive data source attributes or field names to Amazon Kendra index field names. To create custom fields, use the `UpdateIndex` API before you map to OneDrive fields. For more information, see [Mapping data source fields](https://docs.aws.amazon.com/kendra/latest/dg/field-mapping.html). The OneDrive data source field names must exist in your OneDrive custom metadata.
   *
   * _Required_: No
   *
   * _Type_: List of [DataSourceToIndexFieldMapping](aws-properties-kendra-datasource-datasourcetoindexfieldmapping.md)
   *
   * _Maximum_: `100`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FieldMappings?: List<KendraDataSourceDataSourceToIndexFieldMapping>;
  /**
   * A list of regular expression patterns to exclude certain documents in your OneDrive. Documents that match the patterns are excluded from the index. Documents that don't match the patterns are included in the index. If a document matches both an inclusion and exclusion pattern, the exclusion pattern takes precedence and the document isn't included in the index.
   *
   * The pattern is applied to the file name.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Maximum_: `100`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ExclusionPatterns?: List<Value<string>>;
}

/**
 * Document metadata files that contain information such as the document access control information, source URI, document author, and custom attributes. Each metadata file contains metadata about a single document.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kendra-datasource-documentsmetadataconfiguration.html}
 **/
export interface KendraDataSourceDocumentsMetadataConfiguration {
  /**
   * A prefix used to filter metadata configuration files in the AWS S3 bucket. The S3 bucket might contain multiple metadata files. Use `S3Prefix` to include only the desired metadata files.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `1024`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  S3Prefix?: Value<string>;
}
export interface KendraDataSourceProperties {
  /**
   * Configuration information for altering document metadata and content during the document ingestion process.
   *
   * _Required_: No
   *
   * _Type_: [CustomDocumentEnrichmentConfiguration](aws-properties-kendra-datasource-customdocumentenrichmentconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CustomDocumentEnrichmentConfiguration?: KendraDataSourceCustomDocumentEnrichmentConfiguration;
  /**
   * The identifier of the index you want to use with the data source connector.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  IndexId: Value<string>;
  /**
   * The type of the data source.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Allowed values_: `ALFRESCO | BOX | CONFLUENCE | CUSTOM | DATABASE | FSX | GITHUB | GOOGLEDRIVE | JIRA | ONEDRIVE | QUIP | S3 | SALESFORCE | SERVICENOW | SHAREPOINT | SLACK | TEMPLATE | WEBCRAWLER | WORKDOCS`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Type: Value<string>;
  /**
   * A description for the data source connector.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Description?: Value<string>;
  /**
   * Sets the frequency that Amazon Kendra checks the documents in your data source and updates the index. If you don't set a schedule, Amazon Kendra doesn't periodically update the index.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Schedule?: Value<string>;
  /**
   * Configuration information for an Amazon Kendra data source. The contents of the configuration depend on the type of data source. You can only specify one type of data source in the configuration.
   *
   * You can't specify the `Configuration` parameter when the `Type` parameter is set to `CUSTOM`.
   *
   * The `Configuration` parameter is required for all other data sources.
   *
   * _Required_: No
   *
   * _Type_: [DataSourceConfiguration](aws-properties-kendra-datasource-datasourceconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DataSourceConfiguration?: KendraDataSourceDataSourceConfiguration;
  /**
   * The Amazon Resource Name (ARN) of a role with permission to access the data source.
   *
   * You can't specify the `RoleArn` parameter when the `Type` parameter is set to `CUSTOM`.
   *
   * The `RoleArn` parameter is required for all other data sources.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RoleArn?: Value<string>;
  /**
   * An array of key-value pairs to apply to this resource
   *
   * For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html).
   *
   * _Required_: No
   *
   * _Type_: List of [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Tags?: List<ResourceTag>;
  /**
   * The name of the data source.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `1000`
   *
   * _Pattern_: `[a-zA-Z0-9][a-zA-Z0-9_-]*`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Name: Value<string>;
}

/**
 * Creates a data source connector that you want to use with an Amazon Kendra index.
 *
 * You specify a name, data source connector type and description for your data source. You also specify configuration information for the data source connector.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kendra-datasource.html}
 */
export interface KendraDataSourceResource {
  Type: 'AWS::Kendra::DataSource';
  Properties: KendraDataSourceProperties;
}
