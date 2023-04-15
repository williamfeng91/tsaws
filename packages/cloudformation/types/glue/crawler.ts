/**
 * Supported regions:
 * - ap-northeast-1 (version 119.1.0)
 * - ap-northeast-2 (version 119.1.0)
 * - ap-northeast-3 (version 119.1.0)
 * - ap-south-1 (version 119.1.0)
 * - ap-southeast-1 (version 119.1.0)
 * - ap-southeast-2 (version 119.1.0)
 * - ca-central-1 (version 119.1.0)
 * - eu-central-1 (version 119.1.0)
 * - eu-west-1 (version 119.1.0)
 * - eu-west-2 (version 119.1.0)
 * - eu-west-3 (version 119.1.0)
 * - sa-east-1 (version 119.1.0)
 * - us-east-1 (version 119.1.0)
 * - us-east-2 (version 119.1.0)
 * - us-west-1 (version 119.1.0)
 * - us-west-2 (version 119.1.0)
 */
import { List, Value } from '../../shared-types/dataTypes';
import { ResourceTag } from '../../shared-types/resource';

/**
 * Specifies an AWS Glue Data Catalog target.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-crawler-catalogtarget.html}
 **/
export interface GlueCrawlerCatalogTarget {
  /**
   * The name of the database to be synchronized.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DatabaseName?: Value<string>;
  /**
   * A list of the tables to be synchronized.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Tables?: List<Value<string>>;
}

/**
 * Specifies a JDBC data store to crawl.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-crawler-jdbctarget.html}
 **/
export interface GlueCrawlerJdbcTarget {
  /**
   * The name of the connection to use to connect to the JDBC target.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ConnectionName?: Value<string>;
  /**
   * The path of the JDBC target.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Path?: Value<string>;
  /**
   * A list of glob patterns used to exclude from the crawl. For more information, see [Catalog Tables with a Crawler](https://docs.aws.amazon.com/glue/latest/dg/add-crawler.html).
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Exclusions?: List<Value<string>>;
}

/**
 * Specifies an Amazon DynamoDB table to crawl.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-crawler-dynamodbtarget.html}
 **/
export interface GlueCrawlerDynamoDBTarget {
  /**
   * The name of the DynamoDB table to crawl.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Path?: Value<string>;
}

/**
 * Specifies a data store in Amazon Simple Storage Service (Amazon S3).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-crawler-s3target.html}
 **/
export interface GlueCrawlerS3Target {
  /**
   * The name of a connection which allows a job or crawler to access data in Amazon S3 within an Amazon Virtual Private Cloud environment (Amazon VPC).
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ConnectionName?: Value<string>;
  /**
   * The path to the Amazon S3 target.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Path?: Value<string>;
  /**
   * Sets the number of files in each leaf folder to be crawled when crawling sample files in a dataset. If not set, all the files are crawled. A valid value is an integer between 1 and 249.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SampleSize?: Value<number>;
  /**
   * A list of glob patterns used to exclude from the crawl. For more information, see [Catalog Tables with a Crawler](https://docs.aws.amazon.com/glue/latest/dg/add-crawler.html).
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Exclusions?: List<Value<string>>;
  /**
   * A valid Amazon dead-letter SQS ARN. For example, `arn:aws:sqs:region:account:deadLetterQueue`.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DlqEventQueueArn?: Value<string>;
  /**
   * A valid Amazon SQS ARN. For example, `arn:aws:sqs:region:account:sqs`.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  EventQueueArn?: Value<string>;
}

/**
 * When crawling an Amazon S3 data source after the first crawl is complete, specifies whether to crawl the entire dataset again or to crawl only folders that were added since the last crawler run. For more information, see [Incremental Crawls in AWS Glue](https://docs.aws.amazon.com/glue/latest/dg/incremental-crawls.html) in the developer guide.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-crawler-recrawlpolicy.html}
 **/
export interface GlueCrawlerRecrawlPolicy {
  /**
   * Specifies whether to crawl the entire dataset again or to crawl only folders that were added since the last crawler run.
   *
   * A value of `CRAWL_EVERYTHING` specifies crawling the entire dataset again.
   *
   * A value of `CRAWL_NEW_FOLDERS_ONLY` specifies crawling only folders that were added since the last crawler run.
   *
   * A value of `CRAWL_EVENT_MODE` specifies crawling only the changes identified by Amazon S3 events.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RecrawlBehavior?: Value<string>;
}

/**
 * A scheduling object using a `cron` statement to schedule an event.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-crawler-schedule.html}
 **/
export interface GlueCrawlerSchedule {
  /**
   * A `cron` expression used to specify the schedule. For more information, see [Time-Based Schedules for Jobs and Crawlers](https://docs.aws.amazon.com/glue/latest/dg/monitor-data-warehouse-schedule.html). For example, to run something every day at 12:15 UTC, specify `cron(15 12 * * ? *)`.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ScheduleExpression?: Value<string>;
}

/**
 * The policy that specifies update and delete behaviors for the crawler. The policy tells the crawler what to do in the event that it detects a change in a table that already exists in the customer's database at the time of the crawl. The `SchemaChangePolicy` does not affect whether or how new tables and partitions are added. New tables and partitions are always created regardless of the `SchemaChangePolicy` on a crawler.
 *
 * The SchemaChangePolicy consists of two components, `UpdateBehavior` and `DeleteBehavior`.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-crawler-schemachangepolicy.html}
 **/
export interface GlueCrawlerSchemaChangePolicy {
  /**
   * The update behavior when the crawler finds a changed schema.
   *
   * A value of `LOG` specifies that if a table or a partition already exists, and a change is detected, do not update it, only log that a change was detected. Add new tables and new partitions (including on existing tables).
   *
   * A value of `UPDATE_IN_DATABASE` specifies that if a table or partition already exists, and a change is detected, update it. Add new tables and partitions.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  UpdateBehavior?: Value<string>;
  /**
   * The deletion behavior when the crawler finds a deleted object.
   *
   * A value of `LOG` specifies that if a table or partition is found to no longer exist, do not delete it, only log that it was found to no longer exist.
   *
   * A value of `DELETE_FROM_DATABASE` specifies that if a table or partition is found to have been removed, delete it from the database.
   *
   * A value of `DEPRECATE_IN_DATABASE` specifies that if a table has been found to no longer exist, to add a property to the table that says "DEPRECATED" and includes a timestamp with the time of deprecation.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DeleteBehavior?: Value<string>;
}

/**
 *
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-crawler-deltatarget.html}
 **/
export interface GlueCrawlerDeltaTarget {
  ConnectionName?: Value<string>;
  CreateNativeDeltaTable?: Value<boolean>;
  WriteManifest?: Value<boolean>;
  DeltaTables?: List<Value<string>>;
}

/**
 * Specifies an Amazon DocumentDB or MongoDB data store to crawl.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-crawler-mongodbtarget.html}
 **/
export interface GlueCrawlerMongoDBTarget {
  /**
   * The name of the connection to use to connect to the Amazon DocumentDB or MongoDB target.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ConnectionName?: Value<string>;
  /**
   * The path of the Amazon DocumentDB or MongoDB target (database/collection).
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Path?: Value<string>;
}

/**
 * Specifies data stores to crawl.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-crawler-targets.html}
 **/
export interface GlueCrawlerTargets {
  /**
   * Specifies Amazon Simple Storage Service (Amazon S3) targets.
   *
   * _Required_: No
   *
   * _Type_: List of [S3Target](aws-properties-glue-crawler-s3target.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  S3Targets?: List<GlueCrawlerS3Target>;
  /**
   * Specifies AWS Glue Data Catalog targets.
   *
   * _Required_: No
   *
   * _Type_: List of [CatalogTarget](aws-properties-glue-crawler-catalogtarget.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CatalogTargets?: List<GlueCrawlerCatalogTarget>;
  DeltaTargets?: List<GlueCrawlerDeltaTarget>;
  /**
   * A list of Mongo DB targets.
   *
   * _Required_: No
   *
   * _Type_: List of [MongoDBTarget](aws-properties-glue-crawler-mongodbtarget.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MongoDBTargets?: List<GlueCrawlerMongoDBTarget>;
  /**
   * Specifies JDBC targets.
   *
   * _Required_: No
   *
   * _Type_: List of [JdbcTarget](aws-properties-glue-crawler-jdbctarget.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  JdbcTargets?: List<GlueCrawlerJdbcTarget>;
  /**
   * Specifies Amazon DynamoDB targets.
   *
   * _Required_: No
   *
   * _Type_: List of [DynamoDBTarget](aws-properties-glue-crawler-dynamodbtarget.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DynamoDBTargets?: List<GlueCrawlerDynamoDBTarget>;
}
export interface GlueCrawlerProperties {
  /**
   * A list of UTF-8 strings that specify the names of custom classifiers that are associated with the crawler.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Classifiers?: List<Value<string>>;
  /**
   * A description of the crawler.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Description?: Value<string>;
  /**
   * The policy that specifies update and delete behaviors for the crawler. The policy tells the crawler what to do in the event that it detects a change in a table that already exists in the customer's database at the time of the crawl. The `SchemaChangePolicy` does not affect whether or how new tables and partitions are added. New tables and partitions are always created regardless of the `SchemaChangePolicy` on a crawler.
   *
   * The SchemaChangePolicy consists of two components, `UpdateBehavior` and `DeleteBehavior`.
   *
   * _Required_: No
   *
   * _Type_: [SchemaChangePolicy](aws-properties-glue-crawler-schemachangepolicy.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SchemaChangePolicy?: GlueCrawlerSchemaChangePolicy;
  /**
   * Crawler configuration information. This versioned JSON string allows users to specify aspects of a crawler's behavior. For more information, see [Configuring a Crawler](https://docs.aws.amazon.com/glue/latest/dg/crawler-configuration.html).
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Configuration?: Value<string>;
  /**
   * A policy that specifies whether to crawl the entire dataset again, or to crawl only folders that were added since the last crawler run.
   *
   * _Required_: No
   *
   * _Type_: [RecrawlPolicy](aws-properties-glue-crawler-recrawlpolicy.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RecrawlPolicy?: GlueCrawlerRecrawlPolicy;
  /**
   * The name of the database in which the crawler's output is stored.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DatabaseName?: Value<string>;
  /**
   * A collection of targets to crawl.
   *
   * _Required_: Yes
   *
   * _Type_: [Targets](aws-properties-glue-crawler-targets.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Targets: GlueCrawlerTargets;
  /**
   * The name of the `SecurityConfiguration` structure to be used by this crawler.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CrawlerSecurityConfiguration?: Value<string>;
  /**
   * The name of the crawler.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Name?: Value<string>;
  /**
   * The Amazon Resource Name (ARN) of an IAM role that's used to access customer resources, such as Amazon Simple Storage Service (Amazon S3) data.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Role: Value<string>;
  /**
   * For scheduled crawlers, the schedule when the crawler runs.
   *
   * _Required_: No
   *
   * _Type_: [Schedule](aws-properties-glue-crawler-schedule.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Schedule?: GlueCrawlerSchedule;
  /**
   * The prefix added to the names of tables that are created.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TablePrefix?: Value<string>;
  /**
   * The tags to use with this crawler.
   *
   * _Required_: No
   *
   * _Type_: Json
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Tags?: { [key: string]: any };
}

/**
 * The `AWS::Glue::Crawler` resource specifies an AWS Glue crawler. For more information, see [Cataloging Tables with a Crawler](https://docs.aws.amazon.com/glue/latest/dg/add-crawler.html) and [Crawler Structure](https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-crawler-crawling.html#aws-glue-api-crawler-crawling-Crawler) in the _AWS Glue Developer Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-crawler.html}
 */
export interface GlueCrawlerResource {
  Type: 'AWS::Glue::Crawler';
  Properties: GlueCrawlerProperties;
}
