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

/**
 * The self-managed Apache Kafka cluster for your event source.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-eventsourcemapping-selfmanagedeventsource.html}
 **/
export interface LambdaEventSourceMappingSelfManagedEventSource {
  /**
   * The list of bootstrap servers for your Kafka brokers in the following format: `"KafkaBootstrapServers": ["abc.xyz.com:xxxx","abc2.xyz.com:xxxx"]`.
   *
   * _Required_: No
   *
   * _Type_: [Endpoints](aws-properties-lambda-eventsourcemapping-endpoints.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Endpoints?: LambdaEventSourceMappingEndpoints;
}

/**
 * A structure within a `FilterCriteria` object that defines an event filtering pattern.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-eventsourcemapping-filter.html}
 **/
export interface LambdaEventSourceMappingFilter {
  /**
   * A filter pattern. For more information on the syntax of a filter pattern, see [ Filter rule syntax](https://docs.aws.amazon.com/lambda/latest/dg/invocation-eventfiltering.html#filtering-syntax).
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `0`
   *
   * _Maximum_: `4096`
   *
   * _Pattern_: `.*`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Pattern?: Value<string>;
}

/**
 * A destination for events that failed processing.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-eventsourcemapping-onfailure.html}
 **/
export interface LambdaEventSourceMappingOnFailure {
  /**
   * The Amazon Resource Name (ARN) of the destination resource.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `0`
   *
   * _Maximum_: `350`
   *
   * _Pattern_: `^$|arn:(aws[a-zA-Z0-9-]*):([a-zA-Z0-9-])+:([a-z]{2}(-gov)?-[a-z]+-d{1})?:(d{12})?:(.*)`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Destination?: Value<string>;
}

/**
 * An array of the authentication protocol, VPC components, or virtual host to secure and define your event source.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-eventsourcemapping-sourceaccessconfiguration.html}
 **/
export interface LambdaEventSourceMappingSourceAccessConfiguration {
  /**
   * The type of authentication protocol, VPC components, or virtual host for your event source. For example: `"Type":"SASL_SCRAM_512_AUTH"`.
   */
  Type?: Value<string>;
  /**
   * The value for your chosen configuration in `Type`. For example: `"URI": "arn:aws:secretsmanager:us-east-1:01234567890:secret:MyBrokerSecretName"`.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `200`
   *
   * _Pattern_: `[a-zA-Z0-9-/*:_+=.@-]*`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  URI?: Value<string>;
}

/**
 * The list of bootstrap servers for your Kafka brokers in the following format: `"KafkaBootstrapServers": ["abc.xyz.com:xxxx","abc2.xyz.com:xxxx"]`.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-eventsourcemapping-endpoints.html}
 **/
export interface LambdaEventSourceMappingEndpoints {
  /**
   * The list of bootstrap servers for your Kafka brokers in the following format: `"KafkaBootstrapServers": ["abc.xyz.com:xxxx","abc2.xyz.com:xxxx"]`.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  KafkaBootstrapServers?: List<Value<string>>;
}

/**
 * A configuration object that specifies the destination of an event after Lambda processes it.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-eventsourcemapping-destinationconfig.html}
 **/
export interface LambdaEventSourceMappingDestinationConfig {
  /**
   * The destination configuration for failed invocations.
   *
   * _Required_: No
   *
   * _Type_: [OnFailure](aws-properties-lambda-eventsourcemapping-onfailure.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  OnFailure?: LambdaEventSourceMappingOnFailure;
}

/**
 * Specific configuration settings for a self-managed Apache Kafka event source.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-eventsourcemapping-selfmanagedkafkaeventsourceconfig.html}
 **/
export interface LambdaEventSourceMappingSelfManagedKafkaEventSourceConfig {
  /**
   * The identifier for the Kafka consumer group to join. The consumer group ID must be unique among all your Kafka event sources. After creating a Kafka event source mapping with the consumer group ID specified, you cannot update this value. For more information, see [Customizable consumer group ID](https://docs.aws.amazon.com/lambda/latest/dg/with-msk.html#services-msk-consumer-group-id).
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `200`
   *
   * _Pattern_: `[a-zA-Z0-9-/*:_+=.@-]*`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ConsumerGroupId?: Value<string>;
}

/**
 * Specific configuration settings for an Amazon Managed Streaming for Apache Kafka (Amazon MSK) event source.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-eventsourcemapping-amazonmanagedkafkaeventsourceconfig.html}
 **/
export interface LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfig {
  /**
   * The identifier for the Kafka consumer group to join. The consumer group ID must be unique among all your Kafka event sources. After creating a Kafka event source mapping with the consumer group ID specified, you cannot update this value. For more information, see [Customizable consumer group ID](https://docs.aws.amazon.com/lambda/latest/dg/with-msk.html#services-msk-consumer-group-id).
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `200`
   *
   * _Pattern_: `[a-zA-Z0-9-/*:_+=.@-]*`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ConsumerGroupId?: Value<string>;
}

/**
 * An object that contains the filters for an event source.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-eventsourcemapping-filtercriteria.html}
 **/
export interface LambdaEventSourceMappingFilterCriteria {
  /**
   * A list of filters.
   *
   * _Required_: No
   *
   * _Type_: List of [Filter](aws-properties-lambda-eventsourcemapping-filter.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Filters?: List<LambdaEventSourceMappingFilter>;
}

/**
 * Specific configuration settings for a DocumentDB event source.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-eventsourcemapping-documentdbeventsourceconfig.html}
 **/
export interface LambdaEventSourceMappingDocumentDBEventSourceConfig {
  /**
   * Determines what DocumentDB sends to your event stream during document update operations. If set to UpdateLookup, DocumentDB sends a delta describing the changes, along with a copy of the entire document. Otherwise, DocumentDB sends only a partial document that contains the changes.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `Default | UpdateLookup`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FullDocument?: Value<string>;
  /**
   * The name of the collection to consume within the database. If you do not specify a collection, Lambda consumes all collections.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `57`
   *
   * _Pattern_: `(^(?!(systemx2e)))(^[_a-zA-Z0-9])([^$]*)`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CollectionName?: Value<string>;
  /**
   * The name of the database to consume within the DocumentDB cluster.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `63`
   *
   * _Pattern_: `[^ /.$x22]*`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DatabaseName?: Value<string>;
}

/**
 * (Amazon Simple Queue Service only) The scaling configuration for the event source. For more information, see [Configuring maximum concurrency for Amazon SQS event sources](https://docs.aws.amazon.com/lambda/latest/dg/with-sqs.html#events-sqs-max-concurrency).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-eventsourcemapping-scalingconfig.html}
 **/
export interface LambdaEventSourceMappingScalingConfig {
  /**
   * Limits the number of concurrent instances that the Amazon SQS event source can invoke.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Minimum_: `2`
   *
   * _Maximum_: `1000`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MaximumConcurrency?: Value<number>;
}
export interface LambdaEventSourceMappingProperties {
  /**
   * The position in a stream from which to start reading. Required for Amazon Kinesis and Amazon DynamoDB.
   */
  StartingPosition?: Value<string>;
  /**
   * The maximum number of records in each batch that Lambda pulls from your stream or queue and sends to your function. Lambda passes all of the records in the batch to the function in a single call, up to the payload limit for synchronous invocation (6 MB).
   */
  BatchSize?: Value<number>;
  /**
   * (Kinesis and DynamoDB Streams only) Discard records after the specified number of retries. The default value is -1, which sets the maximum number of retries to infinite. When MaximumRetryAttempts is infinite, Lambda retries failed records until the record expires in the event source.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Minimum_: `-1`
   *
   * _Maximum_: `10000`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MaximumRetryAttempts?: Value<number>;
  /**
   * The name of the Kafka topic.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Maximum_: `1`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Topics?: List<Value<string>>;
  /**
   * (Amazon Simple Queue Service only) The scaling configuration for the event source. For more information, see [Configuring maximum concurrency for Amazon SQS event sources](https://docs.aws.amazon.com/lambda/latest/dg/with-sqs.html#events-sqs-max-concurrency).
   *
   * _Required_: No
   *
   * _Type_: [ScalingConfig](aws-properties-lambda-eventsourcemapping-scalingconfig.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ScalingConfig?: LambdaEventSourceMappingScalingConfig;
  /**
   * The self-managed Apache Kafka cluster for your event source.
   *
   * _Required_: No
   *
   * _Type_: [SelfManagedEventSource](aws-properties-lambda-eventsourcemapping-selfmanagedeventsource.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  SelfManagedEventSource?: LambdaEventSourceMappingSelfManagedEventSource;
  /**
   * (Kinesis and DynamoDB Streams only) The number of batches to process concurrently from each shard. The default value is 1.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `10`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ParallelizationFactor?: Value<number>;
  /**
   * When true, the event source mapping is active. When false, Lambda pauses polling and invocation.
   *
   * Default: True
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Enabled?: Value<boolean>;
  /**
   * An object that defines the filter criteria that determine whether Lambda should process an event. For more information, see [Lambda event filtering](https://docs.aws.amazon.com/lambda/latest/dg/invocation-eventfiltering.html).
   *
   * _Required_: No
   *
   * _Type_: [FilterCriteria](aws-properties-lambda-eventsourcemapping-filtercriteria.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FilterCriteria?: LambdaEventSourceMappingFilterCriteria;
  /**
   * The Amazon Resource Name (ARN) of the event source.
   */
  EventSourceArn?: Value<string>;
  /**
   * Specific configuration settings for a self-managed Apache Kafka event source.
   *
   * _Required_: No
   *
   * _Type_: [SelfManagedKafkaEventSourceConfig](aws-properties-lambda-eventsourcemapping-selfmanagedkafkaeventsourceconfig.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  SelfManagedKafkaEventSourceConfig?: LambdaEventSourceMappingSelfManagedKafkaEventSourceConfig;
  /**
   * Specific configuration settings for a DocumentDB event source.
   *
   * _Required_: No
   *
   * _Type_: [DocumentDBEventSourceConfig](aws-properties-lambda-eventsourcemapping-documentdbeventsourceconfig.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DocumentDBEventSourceConfig?: LambdaEventSourceMappingDocumentDBEventSourceConfig;
  /**
   * The name of the Lambda function.
   *
   * **Name formats**
   */
  FunctionName: Value<string>;
  /**
   * (Kinesis and DynamoDB Streams only) The duration in seconds of a processing window for DynamoDB and Kinesis Streams event sources. A value of 0 seconds indicates no tumbling window.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Minimum_: `0`
   *
   * _Maximum_: `900`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TumblingWindowInSeconds?: Value<number>;
  /**
   * (Kinesis and DynamoDB Streams only) If the function returns an error, split the batch in two and retry. The default value is false.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  BisectBatchOnFunctionError?: Value<boolean>;
  /**
   * (Kinesis and DynamoDB Streams only) An Amazon SQS queue or Amazon SNS topic destination for discarded records.
   *
   * _Required_: No
   *
   * _Type_: [DestinationConfig](aws-properties-lambda-eventsourcemapping-destinationconfig.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DestinationConfig?: LambdaEventSourceMappingDestinationConfig;
  /**
   * Specific configuration settings for an Amazon Managed Streaming for Apache Kafka (Amazon MSK) event source.
   *
   * _Required_: No
   *
   * _Type_: [AmazonManagedKafkaEventSourceConfig](aws-properties-lambda-eventsourcemapping-amazonmanagedkafkaeventsourceconfig.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  AmazonManagedKafkaEventSourceConfig?: LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfig;
  /**
   * (Kinesis and DynamoDB Streams only) Discard records older than the specified age. The default value is -1, which sets the maximum age to infinite. When the value is set to infinite, Lambda never discards old records.
   *
   * The minimum value that can be set is 60 seconds.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Minimum_: `-1`
   *
   * _Maximum_: `604800`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MaximumRecordAgeInSeconds?: Value<number>;
  /**
   * With `StartingPosition` set to `AT_TIMESTAMP`, the time from which to start reading, in Unix time seconds.
   *
   * _Required_: No
   *
   * _Type_: Double
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  StartingPositionTimestamp?: Value<number>;
  /**
   * (Amazon MQ) The name of the Amazon MQ broker destination queue to consume.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Maximum_: `1`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Queues?: List<Value<string>>;
  /**
   * An array of the authentication protocol, VPC components, or virtual host to secure and define your event source.
   *
   * _Required_: No
   *
   * _Type_: List of [SourceAccessConfiguration](aws-properties-lambda-eventsourcemapping-sourceaccessconfiguration.md)
   *
   * _Maximum_: `22`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SourceAccessConfigurations?: List<LambdaEventSourceMappingSourceAccessConfiguration>;
  /**
   * (Streams and SQS) A list of current response type enums applied to the event source mapping.
   *
   * Valid Values: `ReportBatchItemFailures`
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Maximum_: `1`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FunctionResponseTypes?: List<Value<string>>;
  /**
   * The maximum amount of time, in seconds, that Lambda spends gathering records before invoking the function.
   *
   * **Default (Kinesis, DynamoDB, Amazon SQS event sources)**: 0
   *
   * **Default (Amazon MSK, Kafka, Amazon MQ, Amazon DocumentDB event sources)**: 500 ms
   *
   * **Related setting: ** For Amazon SQS event sources, when you set `BatchSize` to a value greater than 10, you must set `MaximumBatchingWindowInSeconds` to at least 1.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Minimum_: `0`
   *
   * _Maximum_: `300`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MaximumBatchingWindowInSeconds?: Value<number>;
}

/**
 * The `AWS::Lambda::EventSourceMapping` resource creates a mapping between an event source and an AWS Lambda function. Lambda reads items from the event source and triggers the function.
 *
 * For details about each event source type, see the following topics. In particular, each of the topics describes the required and optional parameters for the specific event source.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-eventsourcemapping.html}
 */
export interface LambdaEventSourceMappingResource {
  Type: 'AWS::Lambda::EventSourceMapping';
  Properties: LambdaEventSourceMappingProperties;
}
