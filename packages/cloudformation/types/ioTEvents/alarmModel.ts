/**
 * Supported regions:
 * - ap-northeast-1 (version 119.1.0)
 * - ap-northeast-2 (version 119.1.0)
 * - ap-south-1 (version 119.1.0)
 * - ap-southeast-1 (version 119.1.0)
 * - ap-southeast-2 (version 119.1.0)
 * - ca-central-1 (version 119.1.0)
 * - eu-central-1 (version 119.1.0)
 * - eu-west-1 (version 119.1.0)
 * - eu-west-2 (version 119.1.0)
 * - us-east-1 (version 119.1.0)
 * - us-east-2 (version 119.1.0)
 * - us-west-2 (version 119.1.0)
 */
import { List, Value } from '../../shared-types/dataTypes';
import { ResourceTag } from '../../shared-types/resource';

/**
 * Defines when your alarm is invoked.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-alarmmodel-alarmrule.html}
 **/
export interface IoTEventsAlarmModelAlarmRule {
  /**
   * A rule that compares an input property value to a threshold value with a comparison operator.
   *
   * _Required_: No
   *
   * _Type_: [SimpleRule](aws-properties-iotevents-alarmmodel-simplerule.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SimpleRule?: IoTEventsAlarmModelSimpleRule;
}

/**
 * A structure that contains timestamp information. For more information, see [TimeInNanos](https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_TimeInNanos.html) in the _ AWS IoT SiteWise API Reference_.
 *
 * You must use expressions for all parameters in `AssetPropertyTimestamp`. The expressions accept literals, operators, functions, references, and substitution templates.
 *
 * **Examples**
 *
 * For more information, see [Expressions](https://docs.aws.amazon.com/iotevents/latest/developerguide/iotevents-expressions.html) in the _ AWS IoT Events Developer Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-alarmmodel-assetpropertytimestamp.html}
 **/
export interface IoTEventsAlarmModelAssetPropertyTimestamp {
  /**
   * The timestamp, in seconds, in the Unix epoch format. The valid range is between 1-31556889864403199.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TimeInSeconds: Value<string>;
  /**
   * The nanosecond offset converted from `timeInSeconds`. The valid range is between 0-999999999.
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
 * Specifies the default alarm state. The configuration applies to all alarms that were created based on this alarm model.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-alarmmodel-initializationconfiguration.html}
 **/
export interface IoTEventsAlarmModelInitializationConfiguration {
  /**
   * The value must be `TRUE` or `FALSE`. If `FALSE`, all alarm instances created based on the alarm model are activated. The default value is `TRUE`.
   *
   * _Required_: Yes
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DisabledOnInitialization: Value<boolean>;
}

/**
 * Information required to publish the Amazon SNS message.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-alarmmodel-sns.html}
 **/
export interface IoTEventsAlarmModelSns {
  /**
   * The ARN of the Amazon SNS target where the message is sent.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `2048`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TargetArn: Value<string>;
  /**
   * You can configure the action payload when you send a message as an Amazon SNS push notification.
   *
   * _Required_: No
   *
   * _Type_: [Payload](aws-properties-iotevents-alarmmodel-payload.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Payload?: IoTEventsAlarmModelPayload;
}

/**
 * Contains the configuration information of alarm state changes.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-alarmmodel-alarmcapabilities.html}
 **/
export interface IoTEventsAlarmModelAlarmCapabilities {
  /**
   * Specifies whether to get notified for alarm state changes.
   *
   * _Required_: No
   *
   * _Type_: [AcknowledgeFlow](aws-properties-iotevents-alarmmodel-acknowledgeflow.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AcknowledgeFlow?: IoTEventsAlarmModelAcknowledgeFlow;
  /**
   * Specifies the default alarm state. The configuration applies to all alarms that were created based on this alarm model.
   *
   * _Required_: No
   *
   * _Type_: [InitializationConfiguration](aws-properties-iotevents-alarmmodel-initializationconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  InitializationConfiguration?: IoTEventsAlarmModelInitializationConfiguration;
}

/**
 * Sends information about the detector model instance and the event that triggered the action to an Amazon SQS queue.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-alarmmodel-sqs.html}
 **/
export interface IoTEventsAlarmModelSqs {
  /**
   * Set this to TRUE if you want the data to be base-64 encoded before it is written to the queue. Otherwise, set this to FALSE.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  UseBase64?: Value<boolean>;
  /**
   * You can configure the action payload when you send a message to an Amazon SQS queue.
   *
   * _Required_: No
   *
   * _Type_: [Payload](aws-properties-iotevents-alarmmodel-payload.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Payload?: IoTEventsAlarmModelPayload;
  /**
   * The URL of the SQS queue where the data is written.
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
 * Specifies one of the following actions to receive notifications when the alarm state changes.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-alarmmodel-alarmaction.html}
 **/
export interface IoTEventsAlarmModelAlarmAction {
  /**
   * Defines an action to write to the Amazon DynamoDB table that you created. The default action payload contains all the information about the detector model instance and the event that triggered the action. You can customize the [payload](https://docs.aws.amazon.com/iotevents/latest/apireference/API_Payload.html). A separate column of the DynamoDB table receives one attribute-value pair in the payload that you specify.
   *
   * You must use expressions for all parameters in `DynamoDBv2Action`. The expressions accept literals, operators, functions, references, and substitution templates.
   *
   * **Examples**
   */
  DynamoDBv2?: IoTEventsAlarmModelDynamoDBv2;
  /**
   * Sends an AWS IoT Events input, passing in information about the detector model instance and the event that triggered the action.
   *
   * _Required_: No
   *
   * _Type_: [IotEvents](aws-properties-iotevents-alarmmodel-iotevents.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  IotEvents?: IoTEventsAlarmModelIotEvents;
  /**
   * Sends information about the detector model instance and the event that triggered the action to a specified asset property in AWS IoT SiteWise.
   *
   * You must use expressions for all parameters in `IotSiteWiseAction`. The expressions accept literals, operators, functions, references, and substitutions templates.
   *
   * **Examples**
   */
  IotSiteWise?: IoTEventsAlarmModelIotSiteWise;
  /**
   * Sends information about the detector model instance and the event that triggered the action to an Amazon SQS queue.
   *
   * _Required_: No
   *
   * _Type_: [Sqs](aws-properties-iotevents-alarmmodel-sqs.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Sqs?: IoTEventsAlarmModelSqs;
  /**
   * Sends information about the detector model instance and the event that triggered the action to an Amazon Kinesis Data Firehose delivery stream.
   *
   * _Required_: No
   *
   * _Type_: [Firehose](aws-properties-iotevents-alarmmodel-firehose.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Firehose?: IoTEventsAlarmModelFirehose;
  /**
   * Defines an action to write to the Amazon DynamoDB table that you created. The standard action payload contains all the information about the detector model instance and the event that triggered the action. You can customize the [payload](https://docs.aws.amazon.com/iotevents/latest/apireference/API_Payload.html). One column of the DynamoDB table receives all attribute-value pairs in the payload that you specify.
   *
   * You must use expressions for all parameters in `DynamoDBAction`. The expressions accept literals, operators, functions, references, and substitution templates.
   *
   * **Examples**
   */
  DynamoDB?: IoTEventsAlarmModelDynamoDB;
  /**
   * Information required to publish the MQTT message through the AWS IoT message broker.
   *
   * _Required_: No
   *
   * _Type_: [IotTopicPublish](aws-properties-iotevents-alarmmodel-iottopicpublish.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  IotTopicPublish?: IoTEventsAlarmModelIotTopicPublish;
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: [Sns](aws-properties-iotevents-alarmmodel-sns.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Sns?: IoTEventsAlarmModelSns;
  /**
   * Calls a Lambda function, passing in information about the detector model instance and the event that triggered the action.
   *
   * _Required_: No
   *
   * _Type_: [Lambda](aws-properties-iotevents-alarmmodel-lambda.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Lambda?: IoTEventsAlarmModelLambda;
}

/**
 * Sends information about the detector model instance and the event that triggered the action to an Amazon Kinesis Data Firehose delivery stream.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-alarmmodel-firehose.html}
 **/
export interface IoTEventsAlarmModelFirehose {
  /**
   * The name of the Kinesis Data Firehose delivery stream where the data is written.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DeliveryStreamName: Value<string>;
  /**
   * You can configure the action payload when you send a message to an Amazon Kinesis Data Firehose delivery stream.
   *
   * _Required_: No
   *
   * _Type_: [Payload](aws-properties-iotevents-alarmmodel-payload.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Payload?: IoTEventsAlarmModelPayload;
  /**
   * A character separator that is used to separate records written to the Kinesis Data Firehose delivery stream. Valid values are: 'n' (newline), 't' (tab), 'rn' (Windows newline), ',' (comma).
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Pattern_: `([nt])|(rn)|(,)`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Separator?: Value<string>;
}

/**
 * A rule that compares an input property value to a threshold value with a comparison operator.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-alarmmodel-simplerule.html}
 **/
export interface IoTEventsAlarmModelSimpleRule {
  /**
   * The comparison operator.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Allowed values_: `EQUAL | GREATER | GREATER_OR_EQUAL | LESS | LESS_OR_EQUAL | NOT_EQUAL`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ComparisonOperator: Value<string>;
  /**
   * The value on the left side of the comparison operator. You can specify an AWS IoT Events input attribute as an input property.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `512`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  InputProperty: Value<string>;
  /**
   * The value on the right side of the comparison operator. You can enter a number or specify an AWS IoT Events input attribute.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `512`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Threshold: Value<string>;
}

/**
 * Specifies whether to get notified for alarm state changes.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-alarmmodel-acknowledgeflow.html}
 **/
export interface IoTEventsAlarmModelAcknowledgeFlow {
  /**
   * The value must be `TRUE` or `FALSE`. If `TRUE`, you receive a notification when the alarm state changes. You must choose to acknowledge the notification before the alarm state can return to `NORMAL`. If `FALSE`, you won't receive notifications. The alarm automatically changes to the `NORMAL` state when the input property value returns to the specified range.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Enabled?: Value<boolean>;
}

/**
 * Calls a Lambda function, passing in information about the detector model instance and the event that triggered the action.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-alarmmodel-lambda.html}
 **/
export interface IoTEventsAlarmModelLambda {
  /**
   * The ARN of the Lambda function that is executed.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `2048`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FunctionArn: Value<string>;
  /**
   * You can configure the action payload when you send a message to a Lambda function.
   *
   * _Required_: No
   *
   * _Type_: [Payload](aws-properties-iotevents-alarmmodel-payload.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Payload?: IoTEventsAlarmModelPayload;
}

/**
 * A structure that contains an asset property value. For more information, see [Variant](https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_Variant.html) in the _ AWS IoT SiteWise API Reference_.
 *
 * You must use expressions for all parameters in `AssetPropertyVariant`. The expressions accept literals, operators, functions, references, and substitution templates.
 *
 * **Examples**
 *
 * For more information, see [Expressions](https://docs.aws.amazon.com/iotevents/latest/developerguide/iotevents-expressions.html) in the _ AWS IoT Events Developer Guide_.
 *
 * You must specify one of the following value types, depending on the `dataType` of the specified asset property. For more information, see [AssetProperty](https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_AssetProperty.html) in the _ AWS IoT SiteWise API Reference_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-alarmmodel-assetpropertyvariant.html}
 **/
export interface IoTEventsAlarmModelAssetPropertyVariant {
  /**
   * The asset property value is a double. You must use an expression, and the evaluated result should be a double.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DoubleValue?: Value<string>;
  /**
   * The asset property value is a Boolean value that must be `'TRUE'` or `'FALSE'`. You must use an expression, and the evaluated result should be a Boolean value.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  BooleanValue?: Value<string>;
  /**
   * The asset property value is an integer. You must use an expression, and the evaluated result should be an integer.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  IntegerValue?: Value<string>;
  /**
   * The asset property value is a string. You must use an expression, and the evaluated result should be a string.
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
 * Contains information about one or more alarm actions.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-alarmmodel-alarmeventactions.html}
 **/
export interface IoTEventsAlarmModelAlarmEventActions {
  /**
   * Specifies one or more supported actions to receive notifications when the alarm state changes.
   *
   * _Required_: No
   *
   * _Type_: List of [AlarmAction](aws-properties-iotevents-alarmmodel-alarmaction.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AlarmActions?: List<IoTEventsAlarmModelAlarmAction>;
}

/**
 * Defines an action to write to the Amazon DynamoDB table that you created. The default action payload contains all the information about the detector model instance and the event that triggered the action. You can customize the [payload](https://docs.aws.amazon.com/iotevents/latest/apireference/API_Payload.html). A separate column of the DynamoDB table receives one attribute-value pair in the payload that you specify.
 *
 * You must use expressions for all parameters in `DynamoDBv2Action`. The expressions accept literals, operators, functions, references, and substitution templates.
 *
 * **Examples**
 *
 * For more information, see [Expressions](https://docs.aws.amazon.com/iotevents/latest/developerguide/iotevents-expressions.html) in the _ AWS IoT Events Developer Guide_.
 *
 * The value for the `type` parameter in `Payload` must be `JSON`.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-alarmmodel-dynamodbv2.html}
 **/
export interface IoTEventsAlarmModelDynamoDBv2 {
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
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: [Payload](aws-properties-iotevents-alarmmodel-payload.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Payload?: IoTEventsAlarmModelPayload;
}

/**
 * Information required to publish the MQTT message through the AWS IoT message broker.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-alarmmodel-iottopicpublish.html}
 **/
export interface IoTEventsAlarmModelIotTopicPublish {
  /**
   * The MQTT topic of the message. You can use a string expression that includes variables (`$variable.<variable-name>`) and input values (`$input.<input-name>.<path-to-datum>`) as the topic string.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `128`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MqttTopic: Value<string>;
  /**
   * You can configure the action payload when you publish a message to an AWS IoT Core topic.
   *
   * _Required_: No
   *
   * _Type_: [Payload](aws-properties-iotevents-alarmmodel-payload.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Payload?: IoTEventsAlarmModelPayload;
}

/**
 * A structure that contains value information. For more information, see [AssetPropertyValue](https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_AssetPropertyValue.html) in the _ AWS IoT SiteWise API Reference_.
 *
 * You must use expressions for all parameters in `AssetPropertyValue`. The expressions accept literals, operators, functions, references, and substitution templates.
 *
 * **Examples**
 *
 * For more information, see [Expressions](https://docs.aws.amazon.com/iotevents/latest/developerguide/iotevents-expressions.html) in the _ AWS IoT Events Developer Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-alarmmodel-assetpropertyvalue.html}
 **/
export interface IoTEventsAlarmModelAssetPropertyValue {
  /**
   * The quality of the asset property value. The value must be `'GOOD'`, `'BAD'`, or `'UNCERTAIN'`.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Quality?: Value<string>;
  /**
   * The value to send to an asset property.
   *
   * _Required_: Yes
   *
   * _Type_: [AssetPropertyVariant](aws-properties-iotevents-alarmmodel-assetpropertyvariant.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Value: IoTEventsAlarmModelAssetPropertyVariant;
  /**
   * The timestamp associated with the asset property value. The default is the current event time.
   *
   * _Required_: No
   *
   * _Type_: [AssetPropertyTimestamp](aws-properties-iotevents-alarmmodel-assetpropertytimestamp.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Timestamp?: IoTEventsAlarmModelAssetPropertyTimestamp;
}

/**
 * Sends an AWS IoT Events input, passing in information about the detector model instance and the event that triggered the action.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-alarmmodel-iotevents.html}
 **/
export interface IoTEventsAlarmModelIotEvents {
  /**
   * The name of the AWS IoT Events input where the data is sent.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `128`
   *
   * _Pattern_: `^[a-zA-Z][a-zA-Z0-9_]*$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  InputName: Value<string>;
  /**
   * You can configure the action payload when you send a message to an AWS IoT Events input.
   *
   * _Required_: No
   *
   * _Type_: [Payload](aws-properties-iotevents-alarmmodel-payload.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Payload?: IoTEventsAlarmModelPayload;
}

/**
 * Information needed to configure the payload.
 *
 * By default, AWS IoT Events generates a standard payload in JSON for any action. This action payload contains all attribute-value pairs that have the information about the detector model instance and the event triggered the action. To configure the action payload, you can use `contentExpression`.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-alarmmodel-payload.html}
 **/
export interface IoTEventsAlarmModelPayload {
  /**
   * The content of the payload. You can use a string expression that includes quoted strings (`'<string>'`), variables (`$variable.<variable-name>`), input values (`$input.<input-name>.<path-to-datum>`), string concatenations, and quoted strings that contain `${}` as the content. The recommended maximum size of a content expression is 1 KB.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ContentExpression: Value<string>;
  /**
   * The value of the payload type can be either `STRING` or `JSON`.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Allowed values_: `JSON | STRING`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Type: Value<string>;
}

/**
 * Defines an action to write to the Amazon DynamoDB table that you created. The standard action payload contains all the information about the detector model instance and the event that triggered the action. You can customize the [payload](https://docs.aws.amazon.com/iotevents/latest/apireference/API_Payload.html). One column of the DynamoDB table receives all attribute-value pairs in the payload that you specify.
 *
 * You must use expressions for all parameters in `DynamoDBAction`. The expressions accept literals, operators, functions, references, and substitution templates.
 *
 * **Examples**
 *
 * For more information, see [Expressions](https://docs.aws.amazon.com/iotevents/latest/developerguide/iotevents-expressions.html) in the _ AWS IoT Events Developer Guide_.
 *
 * If the defined payload type is a string, `DynamoDBAction` writes non-JSON data to the DynamoDB table as binary data. The DynamoDB console displays the data as Base64-encoded text. The value for the `payloadField` parameter is `<payload-field>_raw`.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-alarmmodel-dynamodb.html}
 **/
export interface IoTEventsAlarmModelDynamoDB {
  /**
   * The name of the DynamoDB table. The `tableName` value must match the table name of the target DynamoDB table.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TableName: Value<string>;
  /**
   * The name of the DynamoDB column that receives the action payload.
   *
   * If you don't specify this parameter, the name of the DynamoDB column is `payload`.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PayloadField?: Value<string>;
  /**
   * The name of the range key (also called the sort key). The `rangeKeyField` value must match the sort key of the target DynamoDB table.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RangeKeyField?: Value<string>;
  /**
   * The name of the hash key (also called the partition key). The `hashKeyField` value must match the partition key of the target DynamoDB table.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  HashKeyField: Value<string>;
  /**
   * The value of the range key (also called the sort key).
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RangeKeyValue?: Value<string>;
  /**
   * The data type for the range key (also called the sort key), You can specify the following values:
   */
  RangeKeyType?: Value<string>;
  /**
   * The data type for the hash key (also called the partition key). You can specify the following values:
   */
  HashKeyType?: Value<string>;
  /**
   * The value of the hash key (also called the partition key).
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  HashKeyValue: Value<string>;
  /**
   * Information needed to configure the payload.
   *
   * By default, AWS IoT Events generates a standard payload in JSON for any action. This action payload contains all attribute-value pairs that have the information about the detector model instance and the event triggered the action. To configure the action payload, you can use `contentExpression`.
   *
   * _Required_: No
   *
   * _Type_: [Payload](aws-properties-iotevents-alarmmodel-payload.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Payload?: IoTEventsAlarmModelPayload;
  /**
   * The type of operation to perform. You can specify the following values:
   */
  Operation?: Value<string>;
}

/**
 * Sends information about the detector model instance and the event that triggered the action to a specified asset property in AWS IoT SiteWise.
 *
 * You must use expressions for all parameters in `IotSiteWiseAction`. The expressions accept literals, operators, functions, references, and substitutions templates.
 *
 * **Examples**
 *
 * You must specify either `propertyAlias` or both `assetId` and `propertyId` to identify the target asset property in AWS IoT SiteWise.
 *
 * For more information, see [Expressions](https://docs.aws.amazon.com/iotevents/latest/developerguide/iotevents-expressions.html) in the _ AWS IoT Events Developer Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-alarmmodel-iotsitewise.html}
 **/
export interface IoTEventsAlarmModelIotSiteWise {
  /**
   * A unique identifier for this entry. You can use the entry ID to track which data entry causes an error in case of failure. The default is a new unique identifier.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  EntryId?: Value<string>;
  /**
   * The alias of the asset property.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PropertyAlias?: Value<string>;
  /**
   * The value to send to the asset property. This value contains timestamp, quality, and value (TQV) information.
   *
   * _Required_: No
   *
   * _Type_: [AssetPropertyValue](aws-properties-iotevents-alarmmodel-assetpropertyvalue.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PropertyValue?: IoTEventsAlarmModelAssetPropertyValue;
  /**
   * The ID of the asset that has the specified property.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AssetId?: Value<string>;
  /**
   * The ID of the asset property.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PropertyId?: Value<string>;
}
export interface IoTEventsAlarmModelProperties {
  /**
   * Defines when your alarm is invoked.
   *
   * _Required_: Yes
   *
   * _Type_: [AlarmRule](aws-properties-iotevents-alarmmodel-alarmrule.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AlarmRule: IoTEventsAlarmModelAlarmRule;
  /**
   * The name of the alarm model.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `128`
   *
   * _Pattern_: `^[a-zA-Z0-9_-]+$`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  AlarmModelName?: Value<string>;
  /**
   * The description of the alarm model.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Maximum_: `128`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AlarmModelDescription?: Value<string>;
  /**
   * A non-negative integer that reflects the severity level of the alarm.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Severity?: Value<number>;
  /**
   * Contains the configuration information of alarm state changes.
   *
   * _Required_: No
   *
   * _Type_: [AlarmCapabilities](aws-properties-iotevents-alarmmodel-alarmcapabilities.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AlarmCapabilities?: IoTEventsAlarmModelAlarmCapabilities;
  /**
   * The ARN of the IAM role that allows the alarm to perform actions and access AWS resources. For more information, see [Amazon Resource Names (ARNs)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) in the _ AWS General Reference_.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `2048`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RoleArn: Value<string>;
  /**
   * An input attribute used as a key to create an alarm. AWS IoT Events routes [inputs](https://docs.aws.amazon.com/iotevents/latest/apireference/API_Input.html) associated with this key to the alarm.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `128`
   *
   * _Pattern_: `^((`[w- ]+`)|([w-]+))(.((`[w- ]+`)|([w-]+)))*$`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Key?: Value<string>;
  /**
   * Contains information about one or more alarm actions.
   *
   * _Required_: No
   *
   * _Type_: [AlarmEventActions](aws-properties-iotevents-alarmmodel-alarmeventactions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AlarmEventActions?: IoTEventsAlarmModelAlarmEventActions;
  /**
   * A list of key-value pairs that contain metadata for the alarm model. The tags help you manage the alarm model. For more information, see [Tagging your AWS IoT Events resources](https://docs.aws.amazon.com/iotevents/latest/developerguide/tagging-iotevents.html) in the _ AWS IoT Events Developer Guide_.
   *
   * You can create up to 50 tags for one alarm model.
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
 * Represents an alarm model to monitor an AWS IoT Events input attribute. You can use the alarm to get notified when the value is outside a specified range. For more information, see [Create an alarm model](https://docs.aws.amazon.com/iotevents/latest/developerguide/create-alarms.html) in the _ AWS IoT Events Developer Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotevents-alarmmodel.html}
 */
export interface IoTEventsAlarmModelResource {
  Type: 'AWS::IoTEvents::AlarmModel';
  Properties: IoTEventsAlarmModelProperties;
}
