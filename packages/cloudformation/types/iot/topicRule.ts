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
 * A key-value pair that you define in the header.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-userproperty.html}
 **/
export interface IoTTopicRuleUserProperty {
  /**
   * A value to be specified in `UserProperty`.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Value: Value<string>;
  /**
   * A key to be specified in `UserProperty`.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Key: Value<string>;
}

/**
 * For more information, see [Signature Version 4 signing process](https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-sigv4authorization.html}
 **/
export interface IoTTopicRuleSigV4Authorization {
  /**
   * The service name to use while signing with Sig V4.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ServiceName: Value<string>;
  /**
   * The signing region.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SigningRegion: Value<string>;
  /**
   * The ARN of the signing role.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RoleArn: Value<string>;
}

/**
 * Describes an action to publish data to an Amazon SQS queue.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-sqsaction.html}
 **/
export interface IoTTopicRuleSqsAction {
  /**
   * Specifies whether to use Base64 encoding.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  UseBase64?: Value<boolean>;
  /**
   * The ARN of the IAM role that grants access.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RoleArn: Value<string>;
  /**
   * The URL of the Amazon SQS queue.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  QueueUrl: Value<string>;
}

/**
 * The input for the DynamoActionVS action that specifies the DynamoDB table to which the message data will be written.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-putiteminput.html}
 **/
export interface IoTTopicRulePutItemInput {
  /**
   * The table where the message data will be written.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TableName: Value<string>;
}

/**
 * Describes an action that writes data to an Amazon OpenSearch Service domain.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-opensearchaction.html}
 **/
export interface IoTTopicRuleOpenSearchAction {
  /**
   * The type of document you are storing.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Type: Value<string>;
  /**
   * The endpoint of your OpenSearch domain.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Endpoint: Value<string>;
  /**
   * The OpenSearch index where you want to store your data.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Index: Value<string>;
  /**
   * The unique identifier for the document you are storing.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Id: Value<string>;
  /**
   * The IAM role ARN that has access to OpenSearch.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RoleArn: Value<string>;
}

/**
 * Send data to an HTTPS endpoint.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-httpaction.html}
 **/
export interface IoTTopicRuleHttpAction {
  /**
   * The HTTP headers to send with the message data.
   *
   * _Required_: No
   *
   * _Type_: List of [HttpActionHeader](aws-properties-iot-topicrule-httpactionheader.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Headers?: List<IoTTopicRuleHttpActionHeader>;
  /**
   * The authentication method to use when sending data to an HTTPS endpoint.
   *
   * _Required_: No
   *
   * _Type_: [HttpAuthorization](aws-properties-iot-topicrule-httpauthorization.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Auth?: IoTTopicRuleHttpAuthorization;
  /**
   * The URL to which AWS IoT sends a confirmation message. The value of the confirmation URL must be a prefix of the endpoint URL. If you do not specify a confirmation URL AWS IoT uses the endpoint URL as the confirmation URL. If you use substitution templates in the confirmationUrl, you must create and enable topic rule destinations that match each possible value of the substitution template before traffic is allowed to your endpoint URL.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ConfirmationUrl?: Value<string>;
  /**
   * The endpoint URL. If substitution templates are used in the URL, you must also specify a `confirmationUrl`. If this is a new destination, a new `TopicRuleDestination` is created if possible.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Url: Value<string>;
}

/**
 * Describes an action to send device location updates from an MQTT message to an Amazon Location tracker resource.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-locationaction.html}
 **/
export interface IoTTopicRuleLocationAction {
  /**
   * The name of the tracker resource in Amazon Location in which the location is updated.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TrackerName: Value<string>;
  /**
   * The unique ID of the device providing the location data.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DeviceId: Value<string>;
  /**
   * A string that evaluates to a double value that represents the latitude of the device's location.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Latitude: Value<string>;
  /**
   * A string that evaluates to a double value that represents the longitude of the device's location.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Longitude: Value<string>;
  /**
   * The time that the location data was sampled. The default value is the time the MQTT message was processed.
   *
   * _Required_: No
   *
   * _Type_: [Timestamp](aws-properties-iot-topicrule-timestamp.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Timestamp?: IoTTopicRuleTimestamp;
  /**
   * The IAM role that grants permission to write to the Amazon Location resource.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RoleArn: Value<string>;
}

/**
 * Describes how to interpret an application-defined timestamp value from an MQTT message payload and the precision of that value.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-timestamp.html}
 **/
export interface IoTTopicRuleTimestamp {
  /**
   * An expression that returns a long epoch time value.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Value: Value<string>;
  /**
   * The precision of the timestamp value that results from the expression described in `value`.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Unit?: Value<string>;
}

/**
 * Describes an action to write to a DynamoDB table.
 *
 * The `tableName`, `hashKeyField`, and `rangeKeyField` values must match the values used when you created the table.
 *
 * The `hashKeyValue` and `rangeKeyvalue` fields use a substitution template syntax. These templates provide data at runtime. The syntax is as follows: ${_sql-expression_}.
 *
 * You can specify any valid expression in a WHERE or SELECT clause, including JSON properties, comparisons, calculations, and functions. For example, the following field uses the third level of the topic:
 *
 * `"hashKeyValue": "${topic(3)}"`
 *
 * The following field uses the timestamp:
 *
 * `"rangeKeyValue": "${timestamp()}"`
 *
 * For more information, see [DynamoDBv2 Action](https://docs.aws.amazon.com/iot/latest/developerguide/iot-rule-actions.html) in the _AWS IoT Developer Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-dynamodbaction.html}
 **/
export interface IoTTopicRuleDynamoDBAction {
  /**
   * The name of the DynamoDB table.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TableName: Value<string>;
  /**
   * The action payload. This name can be customized.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PayloadField?: Value<string>;
  /**
   * The range key name.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RangeKeyField?: Value<string>;
  /**
   * The hash key name.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  HashKeyField: Value<string>;
  /**
   * The range key value.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RangeKeyValue?: Value<string>;
  /**
   * The range key type. Valid values are "STRING" or "NUMBER"
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RangeKeyType?: Value<string>;
  /**
   * The hash key type. Valid values are "STRING" or "NUMBER"
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  HashKeyType?: Value<string>;
  /**
   * The hash key value.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  HashKeyValue: Value<string>;
  /**
   * The ARN of the IAM role that grants access to the DynamoDB table.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RoleArn: Value<string>;
}

/**
 * Specifies MQTT Version 5.0 headers information. For more information, see [MQTT](https://docs.aws.amazon.com/iot/latest/developerguide/mqtt.html) in the IoT Core Developer Guide.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-republishactionheaders.html}
 **/
export interface IoTTopicRuleRepublishActionHeaders {
  /**
   * The base64-encoded binary data used by the sender of the request message to identify which request the response message is for.
   *
   * For more information, see [ Correlation Data](https://docs.oasis-open.org/mqtt/mqtt/v5.0/os/mqtt-v5.0-os.html#_Toc3901115) in the MQTT Version 5.0 specification.
   *
   * Supports [substitution templates](https://docs.aws.amazon.com/iot/latest/developerguide/iot-substitution-templates.html).
   *
   * This binary data must be base64-encoded.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CorrelationData?: Value<string>;
  /**
   * An array of key-value pairs that you define in the MQTT5 header.
   *
   * _Required_: No
   *
   * _Type_: List of [UserProperty](aws-properties-iot-topicrule-userproperty.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  UserProperties?: List<IoTTopicRuleUserProperty>;
  /**
   * An `Enum` string value that indicates whether the payload is formatted as UTF-8.
   *
   * Valid values are `UNSPECIFIED_BYTES` and `UTF8_DATA`.
   *
   * For more information, see [ Payload Format Indicator](https://docs.oasis-open.org/mqtt/mqtt/v5.0/os/mqtt-v5.0-os.html#_Toc3901111) from the MQTT Version 5.0 specification.
   *
   * Supports [substitution templates](https://docs.aws.amazon.com/iot/latest/developerguide/iot-substitution-templates.html).
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PayloadFormatIndicator?: Value<string>;
  /**
   * A UTF-8 encoded string that describes the content of the publishing message.
   *
   * For more information, see [ Content Type](https://docs.oasis-open.org/mqtt/mqtt/v5.0/os/mqtt-v5.0-os.html#_Toc3901118) in the MQTT Version 5.0 specification.
   *
   * Supports [substitution templates](https://docs.aws.amazon.com/iot/latest/developerguide/iot-substitution-templates.html).
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ContentType?: Value<string>;
  /**
   * A user-defined integer value that represents the message expiry interval at the broker. If the messages haven't been sent to the subscribers within that interval, the message expires and is removed. The value of `messageExpiry` represents the number of seconds before it expires. For more information about the limits of `messageExpiry`, see [Message broker and protocol limits and quotas](https://docs.aws.amazon.com/general/latest/gr/iot-core.html#limits_iot) in the IoT Core Reference Guide.
   *
   * Supports [substitution templates](https://docs.aws.amazon.com/iot/latest/developerguide/iot-substitution-templates.html).
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MessageExpiry?: Value<string>;
  /**
   * A UTF-8 encoded string that's used as the topic name for a response message. The response topic is used to describe the topic to which the receiver should publish as part of the request-response flow. The topic must not contain wildcard characters.
   *
   * For more information, see [ Response Topic](https://docs.oasis-open.org/mqtt/mqtt/v5.0/os/mqtt-v5.0-os.html#_Toc3901114) in the MQTT Version 5.0 specification.
   *
   * Supports [substitution templates](https://docs.aws.amazon.com/iot/latest/developerguide/iot-substitution-templates.html).
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ResponseTopic?: Value<string>;
}

/**
 * Describes an action that writes records into an Amazon Timestream table.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-timestreamaction.html}
 **/
export interface IoTTopicRuleTimestreamAction {
  /**
   * The table where the message data will be written.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TableName: Value<string>;
  /**
   * The name of an Amazon Timestream database that has the table to write records into.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DatabaseName: Value<string>;
  /**
   * Metadata attributes of the time series that are written in each measure record.
   *
   * _Required_: Yes
   *
   * _Type_: List of [TimestreamDimension](aws-properties-iot-topicrule-timestreamdimension.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Dimensions: List<IoTTopicRuleTimestreamDimension>;
  /**
   * The value to use for the entry's timestamp. If blank, the time that the entry was processed is used.
   *
   * _Required_: No
   *
   * _Type_: [TimestreamTimestamp](aws-properties-iot-topicrule-timestreamtimestamp.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Timestamp?: IoTTopicRuleTimestreamTimestamp;
  /**
   * The Amazon Resource Name (ARN) of the role that grants AWS IoT permission to write to the Timestream database table.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RoleArn: Value<string>;
}

/**
 * Describes an action to send data from an MQTT message that triggered the rule to AWS IoT SiteWise asset properties.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-iotsitewiseaction.html}
 **/
export interface IoTTopicRuleIotSiteWiseAction {
  /**
   * A list of asset property value entries.
   *
   * _Required_: Yes
   *
   * _Type_: List of [PutAssetPropertyValueEntry](aws-properties-iot-topicrule-putassetpropertyvalueentry.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PutAssetPropertyValueEntries: List<IoTTopicRulePutAssetPropertyValueEntry>;
  /**
   * The ARN of the role that grants AWS IoT permission to send an asset property value to AWS IoT SiteWise. (`"Action": "iotsitewise:BatchPutAssetPropertyValue"`). The trust policy can restrict access to specific asset hierarchy paths.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RoleArn: Value<string>;
}

/**
 * Describes an action to write to a DynamoDB table.
 *
 * This DynamoDB action writes each attribute in the message payload into it's own column in the DynamoDB table.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-dynamodbv2action.html}
 **/
export interface IoTTopicRuleDynamoDBv2Action {
  /**
   * Specifies the DynamoDB table to which the message data will be written. For example:
   *
   * `{ "dynamoDBv2": { "roleArn": "aws:iam:12341251:my-role" "putItem": { "tableName": "my-table" } } }`
   *
   * Each attribute in the message payload will be written to a separate column in the DynamoDB database.
   *
   * _Required_: No
   *
   * _Type_: [PutItemInput](aws-properties-iot-topicrule-putiteminput.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PutItem?: IoTTopicRulePutItemInput;
  /**
   * The ARN of the IAM role that grants access to the DynamoDB table.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RoleArn?: Value<string>;
}

/**
 * Describes an action that captures a CloudWatch metric.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-cloudwatchmetricaction.html}
 **/
export interface IoTTopicRuleCloudwatchMetricAction {
  /**
   * The CloudWatch metric name.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MetricName: Value<string>;
  /**
   * The CloudWatch metric value.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MetricValue: Value<string>;
  /**
   * The CloudWatch metric namespace name.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MetricNamespace: Value<string>;
  /**
   * The [metric unit](https://docs.aws.amazon.com/AmazonCloudWatch/latest/DeveloperGuide/cloudwatch_concepts.html#Unit) supported by CloudWatch.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MetricUnit: Value<string>;
  /**
   * The IAM role that allows access to the CloudWatch metric.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RoleArn: Value<string>;
  /**
   * An optional [Unix timestamp](https://docs.aws.amazon.com/AmazonCloudWatch/latest/DeveloperGuide/cloudwatch_concepts.html#about_timestamp).
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MetricTimestamp?: Value<string>;
}

/**
 * Describes an action to write data to an Amazon S3 bucket.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-s3action.html}
 **/
export interface IoTTopicRuleS3Action {
  /**
   * The Amazon S3 bucket.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  BucketName: Value<string>;
  /**
   * The Amazon S3 canned ACL that controls access to the object identified by the object key. For more information, see [S3 canned ACLs](https://docs.aws.amazon.com/AmazonS3/latest/dev/acl-overview.html#canned-acl).
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CannedAcl?: Value<string>;
  /**
   * The object key. For more information, see [Actions, resources, and condition keys for Amazon S3](https://docs.aws.amazon.com/AmazonS3/latest/dev/list_amazons3.html).
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Key: Value<string>;
  /**
   * The ARN of the IAM role that grants access.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RoleArn: Value<string>;
}

/**
 * An asset property timestamp entry containing the following information.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-assetpropertytimestamp.html}
 **/
export interface IoTTopicRuleAssetPropertyTimestamp {
  /**
   * A string that contains the time in seconds since epoch. Accepts substitution templates.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TimeInSeconds: Value<string>;
  /**
   * Optional. A string that contains the nanosecond time offset. Accepts substitution templates.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  OffsetInNanos?: Value<string>;
}

/**
 * Describes an action that writes data to an Amazon OpenSearch Service domain.
 *
 * **Note**
 *
 * The `Elasticsearch` action can only be used by existing rule actions. To create a new rule action or to update an existing rule action, use the `OpenSearch` rule action instead. For more information, see [OpenSearchAction](https://docs.aws.amazon.com/iot/latest/apireference/API_OpenSearchAction.html).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-elasticsearchaction.html}
 **/
export interface IoTTopicRuleElasticsearchAction {
  /**
   * The type of document you are storing.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Type: Value<string>;
  /**
   * The endpoint of your OpenSearch domain.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Endpoint: Value<string>;
  /**
   * The index where you want to store your data.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Index: Value<string>;
  /**
   * The unique identifier for the document you are storing.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Id: Value<string>;
  /**
   * The IAM role ARN that has access to OpenSearch.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RoleArn: Value<string>;
}

/**
 * Describes an action to write data to an Amazon Kinesis stream.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-kinesisaction.html}
 **/
export interface IoTTopicRuleKinesisAction {
  /**
   * The name of the Amazon Kinesis stream.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  StreamName: Value<string>;
  /**
   * The partition key.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PartitionKey?: Value<string>;
  /**
   * The ARN of the IAM role that grants access to the Amazon Kinesis stream.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RoleArn: Value<string>;
}

/**
 * Describes the actions associated with a rule.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-action.html}
 **/
export interface IoTTopicRuleAction {
  /**
   * Write to an Amazon S3 bucket.
   *
   * _Required_: No
   *
   * _Type_: [S3Action](aws-properties-iot-topicrule-s3action.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  S3?: IoTTopicRuleS3Action;
  /**
   * Change the state of a CloudWatch alarm.
   *
   * _Required_: No
   *
   * _Type_: [CloudwatchAlarmAction](aws-properties-iot-topicrule-cloudwatchalarmaction.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CloudwatchAlarm?: IoTTopicRuleCloudwatchAlarmAction;
  /**
   * Sends an input to an AWS IoT Events detector.
   *
   * _Required_: No
   *
   * _Type_: [IotEventsAction](aws-properties-iot-topicrule-ioteventsaction.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  IotEvents?: IoTTopicRuleIotEventsAction;
  /**
   * Write to an Amazon Kinesis Firehose stream.
   *
   * _Required_: No
   *
   * _Type_: [FirehoseAction](aws-properties-iot-topicrule-firehoseaction.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Firehose?: IoTTopicRuleFirehoseAction;
  /**
   * Publish to another MQTT topic.
   *
   * _Required_: No
   *
   * _Type_: [RepublishAction](aws-properties-iot-topicrule-republishaction.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Republish?: IoTTopicRuleRepublishAction;
  /**
   * Starts execution of a Step Functions state machine.
   *
   * _Required_: No
   *
   * _Type_: [StepFunctionsAction](aws-properties-iot-topicrule-stepfunctionsaction.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  StepFunctions?: IoTTopicRuleStepFunctionsAction;
  /**
   * Send messages to an Amazon Managed Streaming for Apache Kafka (Amazon MSK) or self-managed Apache Kafka cluster.
   *
   * _Required_: No
   *
   * _Type_: [KafkaAction](aws-properties-iot-topicrule-kafkaaction.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Kafka?: IoTTopicRuleKafkaAction;
  /**
   * Write to a DynamoDB table.
   *
   * _Required_: No
   *
   * _Type_: [DynamoDBAction](aws-properties-iot-topicrule-dynamodbaction.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DynamoDB?: IoTTopicRuleDynamoDBAction;
  /**
   * Send data to an HTTPS endpoint.
   *
   * _Required_: No
   *
   * _Type_: [HttpAction](aws-properties-iot-topicrule-httpaction.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Http?: IoTTopicRuleHttpAction;
  /**
   * Write data to an Amazon OpenSearch Service domain.
   *
   * _Required_: No
   *
   * _Type_: [OpenSearchAction](aws-properties-iot-topicrule-opensearchaction.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  OpenSearch?: IoTTopicRuleOpenSearchAction;
  /**
   * Write to a DynamoDB table. This is a new version of the DynamoDB action. It allows you to write each attribute in an MQTT message payload into a separate DynamoDB column.
   *
   * _Required_: No
   *
   * _Type_: [DynamoDBv2Action](aws-properties-iot-topicrule-dynamodbv2action.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DynamoDBv2?: IoTTopicRuleDynamoDBv2Action;
  /**
   * Capture a CloudWatch metric.
   *
   * _Required_: No
   *
   * _Type_: [CloudwatchMetricAction](aws-properties-iot-topicrule-cloudwatchmetricaction.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CloudwatchMetric?: IoTTopicRuleCloudwatchMetricAction;
  /**
   * Sends data from the MQTT message that triggered the rule to AWS IoT SiteWise asset properties.
   *
   * _Required_: No
   *
   * _Type_: [IotSiteWiseAction](aws-properties-iot-topicrule-iotsitewiseaction.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  IotSiteWise?: IoTTopicRuleIotSiteWiseAction;
  /**
   * Write data to an Amazon OpenSearch Service domain.
   *
   * The `Elasticsearch` action can only be used by existing rule actions. To create a new rule action or to update an existing rule action, use the `OpenSearch` rule action instead. For more information, see [OpenSearchAction](https://docs.aws.amazon.com/iot/latest/apireference/API_OpenSearchAction.html).
   *
   * _Required_: No
   *
   * _Type_: [ElasticsearchAction](aws-properties-iot-topicrule-elasticsearchaction.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Elasticsearch?: IoTTopicRuleElasticsearchAction;
  /**
   * Publish to an Amazon SQS queue.
   *
   * _Required_: No
   *
   * _Type_: [SqsAction](aws-properties-iot-topicrule-sqsaction.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Sqs?: IoTTopicRuleSqsAction;
  /**
   * Write data to an Amazon Kinesis stream.
   *
   * _Required_: No
   *
   * _Type_: [KinesisAction](aws-properties-iot-topicrule-kinesisaction.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Kinesis?: IoTTopicRuleKinesisAction;
  /**
   * Sends data to CloudWatch.
   *
   * _Required_: No
   *
   * _Type_: [CloudwatchLogsAction](aws-properties-iot-topicrule-cloudwatchlogsaction.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CloudwatchLogs?: IoTTopicRuleCloudwatchLogsAction;
  /**
   * Writes attributes from an MQTT message.
   *
   * _Required_: No
   *
   * _Type_: [TimestreamAction](aws-properties-iot-topicrule-timestreamaction.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Timestream?: IoTTopicRuleTimestreamAction;
  /**
   * Sends message data to an AWS IoT Analytics channel.
   *
   * _Required_: No
   *
   * _Type_: [IotAnalyticsAction](aws-properties-iot-topicrule-iotanalyticsaction.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  IotAnalytics?: IoTTopicRuleIotAnalyticsAction;
  /**
   * Publish to an Amazon SNS topic.
   *
   * _Required_: No
   *
   * _Type_: [SnsAction](aws-properties-iot-topicrule-snsaction.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Sns?: IoTTopicRuleSnsAction;
  /**
   * Invoke a Lambda function.
   *
   * _Required_: No
   *
   * _Type_: [LambdaAction](aws-properties-iot-topicrule-lambdaaction.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Lambda?: IoTTopicRuleLambdaAction;
  /**
   * Sends device location data to [Amazon Location Service](https://docs.aws.amazon.com/location/latest/developerguide/welcome.html).
   *
   * _Required_: No
   *
   * _Type_: [LocationAction](aws-properties-iot-topicrule-locationaction.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Location?: IoTTopicRuleLocationAction;
}

/**
 * Describes a rule.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-topicrulepayload.html}
 **/
export interface IoTTopicRuleTopicRulePayload {
  /**
   * Specifies whether the rule is disabled.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RuleDisabled?: Value<boolean>;
  /**
   * The action to take when an error occurs.
   *
   * _Required_: No
   *
   * _Type_: [Action](aws-properties-iot-topicrule-action.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ErrorAction?: IoTTopicRuleAction;
  /**
   * The description of the rule.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Description?: Value<string>;
  /**
   * The version of the SQL rules engine to use when evaluating the rule.
   *
   * The default value is 2015-10-08.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AwsIotSqlVersion?: Value<string>;
  /**
   * The actions associated with the rule.
   *
   * _Required_: Yes
   *
   * _Type_: List of [Action](aws-properties-iot-topicrule-action.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Actions: List<IoTTopicRuleAction>;
  /**
   * The SQL statement used to query the topic. For more information, see [AWS IoT SQL Reference](https://docs.aws.amazon.com/iot/latest/developerguide/iot-sql-reference.html) in the _ AWS IoT Developer Guide_.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Sql: Value<string>;
}

/**
 * Describes an action that updates a CloudWatch alarm.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-cloudwatchalarmaction.html}
 **/
export interface IoTTopicRuleCloudwatchAlarmAction {
  /**
   * The CloudWatch alarm name.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AlarmName: Value<string>;
  /**
   * The reason for the alarm change.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  StateReason: Value<string>;
  /**
   * The value of the alarm state. Acceptable values are: OK, ALARM, INSUFFICIENT_DATA.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  StateValue: Value<string>;
  /**
   * The IAM role that allows access to the CloudWatch alarm.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RoleArn: Value<string>;
}

/**
 * Describes an action that updates a CloudWatch log.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-cloudwatchlogsaction.html}
 **/
export interface IoTTopicRuleCloudwatchLogsAction {
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  BatchMode?: Value<boolean>;
  /**
   * The CloudWatch log name.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  LogGroupName: Value<string>;
  /**
   * The IAM role that allows access to the CloudWatch log.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RoleArn: Value<string>;
}

/**
 * Metadata attributes of the time series that are written in each measure record.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-timestreamdimension.html}
 **/
export interface IoTTopicRuleTimestreamDimension {
  /**
   * The value to write in this column of the database record.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Value: Value<string>;
  /**
   * The metadata dimension name. This is the name of the column in the Amazon Timestream database table record.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Name: Value<string>;
}

/**
 * The value to use for the entry's timestamp. If blank, the time that the entry was processed is used.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-timestreamtimestamp.html}
 **/
export interface IoTTopicRuleTimestreamTimestamp {
  /**
   * An expression that returns a long epoch time value.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Value: Value<string>;
  /**
   * The precision of the timestamp value that results from the expression described in `value`.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Unit: Value<string>;
}

/**
 * Contains an asset property value (of a single type).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-assetpropertyvariant.html}
 **/
export interface IoTTopicRuleAssetPropertyVariant {
  /**
   * Optional. A string that contains the double value of the value entry. Accepts substitution templates.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DoubleValue?: Value<string>;
  /**
   * Optional. A string that contains the boolean value (`true` or `false`) of the value entry. Accepts substitution templates.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  BooleanValue?: Value<string>;
  /**
   * Optional. A string that contains the integer value of the value entry. Accepts substitution templates.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  IntegerValue?: Value<string>;
  /**
   * Optional. The string value of the value entry. Accepts substitution templates.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  StringValue?: Value<string>;
}

/**
 * Describes an action to publish to an Amazon SNS topic.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-snsaction.html}
 **/
export interface IoTTopicRuleSnsAction {
  /**
   * (Optional) The message format of the message to publish. Accepted values are "JSON" and "RAW". The default value of the attribute is "RAW". SNS uses this setting to determine if the payload should be parsed and relevant platform-specific bits of the payload should be extracted. For more information, see [Amazon SNS Message and JSON Formats](https://docs.aws.amazon.com/sns/latest/dg/json-formats.html) in the _Amazon Simple Notification Service Developer Guide_.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MessageFormat?: Value<string>;
  /**
   * The ARN of the SNS topic.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TargetArn: Value<string>;
  /**
   * The ARN of the IAM role that grants access.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RoleArn: Value<string>;
}

/**
 * An asset property value entry containing the following information.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-putassetpropertyvalueentry.html}
 **/
export interface IoTTopicRulePutAssetPropertyValueEntry {
  /**
   * A list of property values to insert that each contain timestamp, quality, and value (TQV) information.
   *
   * _Required_: Yes
   *
   * _Type_: List of [AssetPropertyValue](aws-properties-iot-topicrule-assetpropertyvalue.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PropertyValues: List<IoTTopicRuleAssetPropertyValue>;
  /**
   * Optional. A unique identifier for this entry that you can define to better track which message caused an error in case of failure. Accepts substitution templates. Defaults to a new UUID.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  EntryId?: Value<string>;
  /**
   * The name of the property alias associated with your asset property. You must specify either a `propertyAlias` or both an `aliasId` and a `propertyId`. Accepts substitution templates.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PropertyAlias?: Value<string>;
  /**
   * The ID of the AWS IoT SiteWise asset. You must specify either a `propertyAlias` or both an `aliasId` and a `propertyId`. Accepts substitution templates.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AssetId?: Value<string>;
  /**
   * The ID of the asset's property. You must specify either a `propertyAlias` or both an `aliasId` and a `propertyId`. Accepts substitution templates.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PropertyId?: Value<string>;
}

/**
 * Describes an action to invoke a Lambda function.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-lambdaaction.html}
 **/
export interface IoTTopicRuleLambdaAction {
  /**
   * The ARN of the Lambda function.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FunctionArn?: Value<string>;
}

/**
 * Sends message data to an AWS IoT Analytics channel.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-iotanalyticsaction.html}
 **/
export interface IoTTopicRuleIotAnalyticsAction {
  /**
   * The name of the IoT Analytics channel to which message data will be sent.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ChannelName: Value<string>;
  /**
   * Whether to process the action as a batch. The default value is `false`.
   *
   * When `batchMode` is `true` and the rule SQL statement evaluates to an Array, each Array element is delivered as a separate message when passed by [https://docs.aws.amazon.com/iotanalytics/latest/APIReference/API_BatchPutMessage.html](https://docs.aws.amazon.com/iotanalytics/latest/APIReference/API_BatchPutMessage.html) The resulting array can't have more than 100 messages.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  BatchMode?: Value<boolean>;
  /**
   * The ARN of the role which has a policy that grants IoT Analytics permission to send message data via IoT Analytics (iotanalytics:BatchPutMessage).
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RoleArn: Value<string>;
}

/**
 * Sends an input to an AWS IoT Events detector.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-ioteventsaction.html}
 **/
export interface IoTTopicRuleIotEventsAction {
  /**
   * The name of the AWS IoT Events input.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  InputName: Value<string>;
  /**
   * Whether to process the event actions as a batch. The default value is `false`.
   *
   * When `batchMode` is `true`, you can't specify a `messageId`.
   *
   * When `batchMode` is `true` and the rule SQL statement evaluates to an Array, each Array element is treated as a separate message when Events by calling [https://docs.aws.amazon.com/iotevents/latest/apireference/API_iotevents-data_BatchPutMessage.html](https://docs.aws.amazon.com/iotevents/latest/apireference/API_iotevents-data_BatchPutMessage.html). The resulting array can't have more than 10 messages.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  BatchMode?: Value<boolean>;
  /**
   * The ARN of the role that grants AWS IoT permission to send an input to an AWS IoT Events detector. ("Action":"iotevents:BatchPutMessage").
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RoleArn: Value<string>;
  /**
   * The ID of the message. The default `messageId` is a new UUID value.
   *
   * When `batchMode` is `true`, you can't specify a `messageId`--a new UUID value will be assigned.
   *
   * Assign a value to this property to ensure that only one input (message) with a given `messageId` will be processed by an AWS IoT Events detector.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MessageId?: Value<string>;
}

/**
 * Send messages to an Amazon Managed Streaming for Apache Kafka (Amazon MSK) or self-managed Apache Kafka cluster.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-kafkaaction.html}
 **/
export interface IoTTopicRuleKafkaAction {
  /**
   * The Kafka message partition.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Partition?: Value<string>;
  /**
   * Properties of the Apache Kafka producer client.
   *
   * _Required_: Yes
   *
   * _Type_: Map of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ClientProperties: { [key: string]: Value<string> };
  /**
   * The Kafka topic for messages to be sent to the Kafka broker.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Topic: Value<string>;
  /**
   * The ARN of Kafka action's VPC `TopicRuleDestination`.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DestinationArn: Value<string>;
  /**
   * The Kafka message key.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Key?: Value<string>;
}

/**
 * Describes an action that writes data to an Amazon Kinesis Firehose stream.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-firehoseaction.html}
 **/
export interface IoTTopicRuleFirehoseAction {
  /**
   * The delivery stream name.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DeliveryStreamName: Value<string>;
  /**
   * Whether to deliver the Kinesis Data Firehose stream as a batch by using [https://docs.aws.amazon.com/firehose/latest/APIReference/API_PutRecordBatch.html](https://docs.aws.amazon.com/firehose/latest/APIReference/API_PutRecordBatch.html). The default value is `false`.
   *
   * When `batchMode` is `true` and the rule's SQL statement evaluates to an Array, each Array element forms one record in the [https://docs.aws.amazon.com/firehose/latest/APIReference/API_PutRecordBatch.html](https://docs.aws.amazon.com/firehose/latest/APIReference/API_PutRecordBatch.html) request. The resulting array can't have more than 500 records.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  BatchMode?: Value<boolean>;
  /**
   * The IAM role that grants access to the Amazon Kinesis Firehose stream.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RoleArn: Value<string>;
  /**
   * A character separator that will be used to separate records written to the Firehose stream. Valid values are: 'n' (newline), 't' (tab), 'rn' (Windows newline), ',' (comma).
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Separator?: Value<string>;
}

/**
 * An asset property value entry containing the following information.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-assetpropertyvalue.html}
 **/
export interface IoTTopicRuleAssetPropertyValue {
  /**
   * Optional. A string that describes the quality of the value. Accepts substitution templates. Must be `GOOD`, `BAD`, or `UNCERTAIN`.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Quality?: Value<string>;
  /**
   * The value of the asset property.
   *
   * _Required_: Yes
   *
   * _Type_: [AssetPropertyVariant](aws-properties-iot-topicrule-assetpropertyvariant.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Value: IoTTopicRuleAssetPropertyVariant;
  /**
   * The asset property value timestamp.
   *
   * _Required_: Yes
   *
   * _Type_: [AssetPropertyTimestamp](aws-properties-iot-topicrule-assetpropertytimestamp.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Timestamp: IoTTopicRuleAssetPropertyTimestamp;
}

/**
 * The authorization method used to send messages.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-httpauthorization.html}
 **/
export interface IoTTopicRuleHttpAuthorization {
  /**
   * Use Sig V4 authorization. For more information, see [Signature Version 4 Signing Process](https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html).
   *
   * _Required_: No
   *
   * _Type_: [SigV4Authorization](aws-properties-iot-topicrule-sigv4authorization.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Sigv4?: IoTTopicRuleSigV4Authorization;
}

/**
 * The HTTP action header.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-httpactionheader.html}
 **/
export interface IoTTopicRuleHttpActionHeader {
  /**
   * The HTTP header value. Substitution templates are supported.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Value: Value<string>;
  /**
   * The HTTP header key.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Key: Value<string>;
}

/**
 * Describes an action to republish to another topic.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-republishaction.html}
 **/
export interface IoTTopicRuleRepublishAction {
  /**
   * The Quality of Service (QoS) level to use when republishing messages. The default value is 0.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Qos?: Value<number>;
  /**
   * MQTT Version 5.0 headers information. For more information, see [MQTT](https://docs.aws.amazon.com/iot/latest/developerguide/mqtt.html) in the IoT Core Developer Guide.
   *
   * _Required_: No
   *
   * _Type_: [RepublishActionHeaders](aws-properties-iot-topicrule-republishactionheaders.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Headers?: IoTTopicRuleRepublishActionHeaders;
  /**
   * The name of the MQTT topic.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Topic: Value<string>;
  /**
   * The ARN of the IAM role that grants access.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RoleArn: Value<string>;
}

/**
 * Starts execution of a Step Functions state machine.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-topicrule-stepfunctionsaction.html}
 **/
export interface IoTTopicRuleStepFunctionsAction {
  /**
   * (Optional) A name will be given to the state machine execution consisting of this prefix followed by a UUID. Step Functions automatically creates a unique name for each state machine execution if one is not provided.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ExecutionNamePrefix?: Value<string>;
  /**
   * The name of the Step Functions state machine whose execution will be started.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  StateMachineName: Value<string>;
  /**
   * The ARN of the role that grants IoT permission to start execution of a state machine ("Action":"states:StartExecution").
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RoleArn: Value<string>;
}
export interface IoTTopicRuleProperties {
  /**
   * The rule payload.
   *
   * _Required_: Yes
   *
   * _Type_: [TopicRulePayload](aws-properties-iot-topicrule-topicrulepayload.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TopicRulePayload: IoTTopicRuleTopicRulePayload;
  /**
   * The name of the rule.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  RuleName?: Value<string>;
  /**
   * Metadata which can be used to manage the topic rule.
   *
   * For URI Request parameters use format: ...key1=value1&key2=value2...
   *
   * For the CLI command-line parameter use format: --tags "key1=value1&key2=value2..."
   *
   * For the cli-input-json file use format: "tags": "key1=value1&key2=value2..."
   *
   * _Required_: No
   *
   * _Type_: List of [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Tags?: List<ResourceTag>;
}

/**
 * Use the `AWS::IoT::TopicRule` resource to declare an AWS IoT rule. For information about working with AWS IoT rules, see [Rules for AWS IoT](https://docs.aws.amazon.com/iot/latest/developerguide/iot-rules.html) in the _AWS IoT Developer Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-topicrule.html}
 */
export interface IoTTopicRuleResource {
  Type: 'AWS::IoT::TopicRule';
  Properties: IoTTopicRuleProperties;
}
