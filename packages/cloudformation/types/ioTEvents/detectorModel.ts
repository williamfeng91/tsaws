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
 * Information needed to set the timer.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-detectormodel-settimer.html}
 **/
export interface IoTEventsDetectorModelSetTimer {
  /**
   * The number of seconds until the timer expires. The minimum value is 60 seconds to ensure accuracy. The maximum value is 31622400 seconds.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `31622400`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Seconds?: Value<number>;
  /**
   * The name of the timer.
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
  TimerName: Value<string>;
  /**
   * The duration of the timer, in seconds. You can use a string expression that includes numbers, variables (`$variable.<variable-name>`), and input values (`$input.<input-name>.<path-to-datum>`) as the duration. The range of the duration is 1-31622400 seconds. To ensure accuracy, the minimum duration is 60 seconds. The evaluated result of the duration is rounded down to the nearest whole number.
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
  DurationExpression?: Value<string>;
}

/**
 * Information required to reset the timer. The timer is reset to the previously evaluated result of the duration. The duration expression isn't reevaluated when you reset the timer.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-detectormodel-resettimer.html}
 **/
export interface IoTEventsDetectorModelResetTimer {
  /**
   * The name of the timer to reset.
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
  TimerName: Value<string>;
}

/**
 * Information needed to clear the timer.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-detectormodel-cleartimer.html}
 **/
export interface IoTEventsDetectorModelClearTimer {
  /**
   * The name of the timer to clear.
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
  TimerName: Value<string>;
}

/**
 * Specifies the `actions` to be performed when the `condition` evaluates to TRUE.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-detectormodel-event.html}
 **/
export interface IoTEventsDetectorModelEvent {
  /**
   * Optional. The Boolean expression that, when TRUE, causes the `actions` to be performed. If not present, the actions are performed (=TRUE). If the expression result is not a Boolean value, the actions are not performed (=FALSE).
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Maximum_: `512`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Condition?: Value<string>;
  /**
   * The actions to be performed.
   *
   * _Required_: No
   *
   * _Type_: List of [Action](aws-properties-iotevents-detectormodel-action.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Actions?: List<IoTEventsDetectorModelAction>;
  /**
   * The name of the event.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Maximum_: `128`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  EventName: Value<string>;
}

/**
 * Information that defines how a detector operates.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-detectormodel-detectormodeldefinition.html}
 **/
export interface IoTEventsDetectorModelDetectorModelDefinition {
  /**
   * Information about the states of the detector.
   *
   * _Required_: Yes
   *
   * _Type_: List of [State](aws-properties-iotevents-detectormodel-state.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  States: List<IoTEventsDetectorModelState>;
  /**
   * The state that is entered at the creation of each detector (instance).
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
  InitialStateName: Value<string>;
}

/**
 * Information required to publish the MQTT message through the AWS IoT message broker.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-detectormodel-iottopicpublish.html}
 **/
export interface IoTEventsDetectorModelIotTopicPublish {
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
   * _Type_: [Payload](aws-properties-iotevents-detectormodel-payload.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Payload?: IoTEventsDetectorModelPayload;
}

/**
 * Specifies the actions performed when the `condition` evaluates to TRUE.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-detectormodel-oninput.html}
 **/
export interface IoTEventsDetectorModelOnInput {
  /**
   * Specifies the actions performed when the `condition` evaluates to TRUE.
   *
   * _Required_: No
   *
   * _Type_: List of [Event](aws-properties-iotevents-detectormodel-event.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Events?: List<IoTEventsDetectorModelEvent>;
  /**
   * Specifies the actions performed, and the next state entered, when a `condition` evaluates to TRUE.
   *
   * _Required_: No
   *
   * _Type_: List of [TransitionEvent](aws-properties-iotevents-detectormodel-transitionevent.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TransitionEvents?: List<IoTEventsDetectorModelTransitionEvent>;
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
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-detectormodel-assetpropertyvariant.html}
 **/
export interface IoTEventsDetectorModelAssetPropertyVariant {
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
 * Information about the variable and its new value.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-detectormodel-setvariable.html}
 **/
export interface IoTEventsDetectorModelSetVariable {
  /**
   * The new value of the variable.
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
  Value: Value<string>;
  /**
   * The name of the variable.
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
  VariableName: Value<string>;
}

/**
 * Information needed to configure the payload.
 *
 * By default, AWS IoT Events generates a standard payload in JSON for any action. This action payload contains all attribute-value pairs that have the information about the detector model instance and the event triggered the action. To configure the action payload, you can use `contentExpression`.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-detectormodel-payload.html}
 **/
export interface IoTEventsDetectorModelPayload {
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
 * Calls a Lambda function, passing in information about the detector model instance and the event that triggered the action.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-detectormodel-lambda.html}
 **/
export interface IoTEventsDetectorModelLambda {
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
   * _Type_: [Payload](aws-properties-iotevents-detectormodel-payload.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Payload?: IoTEventsDetectorModelPayload;
}

/**
 * Sends an AWS IoT Events input, passing in information about the detector model instance and the event that triggered the action.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-detectormodel-iotevents.html}
 **/
export interface IoTEventsDetectorModelIotEvents {
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
   * _Type_: [Payload](aws-properties-iotevents-detectormodel-payload.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Payload?: IoTEventsDetectorModelPayload;
}

/**
 * Specifies the actions performed and the next state entered when a `condition` evaluates to TRUE.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-detectormodel-transitionevent.html}
 **/
export interface IoTEventsDetectorModelTransitionEvent {
  /**
   * Required. A Boolean expression that when TRUE causes the actions to be performed and the `nextState` to be entered.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Maximum_: `512`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Condition: Value<string>;
  /**
   * The actions to be performed.
   *
   * _Required_: No
   *
   * _Type_: List of [Action](aws-properties-iotevents-detectormodel-action.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Actions?: List<IoTEventsDetectorModelAction>;
  /**
   * The next state to enter.
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
  NextState: Value<string>;
  /**
   * The name of the transition event.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Maximum_: `128`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  EventName: Value<string>;
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
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-detectormodel-iotsitewise.html}
 **/
export interface IoTEventsDetectorModelIotSiteWise {
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
   * _Required_: Yes
   *
   * _Type_: [AssetPropertyValue](aws-properties-iotevents-detectormodel-assetpropertyvalue.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PropertyValue: IoTEventsDetectorModelAssetPropertyValue;
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
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-detectormodel-dynamodb.html}
 **/
export interface IoTEventsDetectorModelDynamoDB {
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
   * _Type_: [Payload](aws-properties-iotevents-detectormodel-payload.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Payload?: IoTEventsDetectorModelPayload;
  /**
   * The type of operation to perform. You can specify the following values:
   */
  Operation?: Value<string>;
}

/**
 * Sends information about the detector model instance and the event that triggered the action to an Amazon Kinesis Data Firehose delivery stream.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-detectormodel-firehose.html}
 **/
export interface IoTEventsDetectorModelFirehose {
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
   * _Type_: [Payload](aws-properties-iotevents-detectormodel-payload.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Payload?: IoTEventsDetectorModelPayload;
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
 * Information that defines a state of a detector.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-detectormodel-state.html}
 **/
export interface IoTEventsDetectorModelState {
  /**
   * When an input is received and the `condition` is TRUE, perform the specified `actions`.
   *
   * _Required_: No
   *
   * _Type_: [OnInput](aws-properties-iotevents-detectormodel-oninput.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  OnInput?: IoTEventsDetectorModelOnInput;
  /**
   * When exiting this state, perform these `actions` if the specified `condition` is `TRUE`.
   *
   * _Required_: No
   *
   * _Type_: [OnExit](aws-properties-iotevents-detectormodel-onexit.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  OnExit?: IoTEventsDetectorModelOnExit;
  /**
   * The name of the state.
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
  StateName: Value<string>;
  /**
   * When entering this state, perform these `actions` if the `condition` is TRUE.
   *
   * _Required_: No
   *
   * _Type_: [OnEnter](aws-properties-iotevents-detectormodel-onenter.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  OnEnter?: IoTEventsDetectorModelOnEnter;
}

/**
 * Information required to publish the Amazon SNS message.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-detectormodel-sns.html}
 **/
export interface IoTEventsDetectorModelSns {
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
   * _Type_: [Payload](aws-properties-iotevents-detectormodel-payload.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Payload?: IoTEventsDetectorModelPayload;
}

/**
 * When exiting this state, perform these `actions` if the specified `condition` is `TRUE`.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-detectormodel-onexit.html}
 **/
export interface IoTEventsDetectorModelOnExit {
  /**
   * Specifies the `actions` that are performed when the state is exited and the `condition` is `TRUE`.
   *
   * _Required_: No
   *
   * _Type_: List of [Event](aws-properties-iotevents-detectormodel-event.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Events?: List<IoTEventsDetectorModelEvent>;
}

/**
 * Sends information about the detector model instance and the event that triggered the action to an Amazon SQS queue.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-detectormodel-sqs.html}
 **/
export interface IoTEventsDetectorModelSqs {
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
   * _Type_: [Payload](aws-properties-iotevents-detectormodel-payload.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Payload?: IoTEventsDetectorModelPayload;
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
 * An action to be performed when the `condition` is TRUE.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-detectormodel-action.html}
 **/
export interface IoTEventsDetectorModelAction {
  /**
   * Sends AWS IoT Events input, which passes information about the detector model instance and the event that triggered the action.
   *
   * _Required_: No
   *
   * _Type_: [IotEvents](aws-properties-iotevents-detectormodel-iotevents.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  IotEvents?: IoTEventsDetectorModelIotEvents;
  /**
   * Sends information about the detector model instance and the event that triggered the action to an Amazon Kinesis Data Firehose delivery stream.
   *
   * _Required_: No
   *
   * _Type_: [Firehose](aws-properties-iotevents-detectormodel-firehose.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Firehose?: IoTEventsDetectorModelFirehose;
  /**
   * Writes to the DynamoDB table that you created. The default action payload contains all attribute-value pairs that have the information about the detector model instance and the event that triggered the action. You can customize the [payload](https://docs.aws.amazon.com/iotevents/latest/apireference/API_Payload.html). One column of the DynamoDB table receives all attribute-value pairs in the payload that you specify. For more information, see [Actions](https://docs.aws.amazon.com/iotevents/latest/developerguide/iotevents-event-actions.html) in _ AWS IoT Events Developer Guide_.
   *
   * _Required_: No
   *
   * _Type_: [DynamoDB](aws-properties-iotevents-detectormodel-dynamodb.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DynamoDB?: IoTEventsDetectorModelDynamoDB;
  /**
   * Publishes an MQTT message with the given topic to the AWS IoT message broker.
   *
   * _Required_: No
   *
   * _Type_: [IotTopicPublish](aws-properties-iotevents-detectormodel-iottopicpublish.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  IotTopicPublish?: IoTEventsDetectorModelIotTopicPublish;
  /**
   * Writes to the DynamoDB table that you created. The default action payload contains all attribute-value pairs that have the information about the detector model instance and the event that triggered the action. You can customize the [payload](https://docs.aws.amazon.com/iotevents/latest/apireference/API_Payload.html). A separate column of the DynamoDB table receives one attribute-value pair in the payload that you specify. For more information, see [Actions](https://docs.aws.amazon.com/iotevents/latest/developerguide/iotevents-event-actions.html) in _ AWS IoT Events Developer Guide_.
   *
   * _Required_: No
   *
   * _Type_: [DynamoDBv2](aws-properties-iotevents-detectormodel-dynamodbv2.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DynamoDBv2?: IoTEventsDetectorModelDynamoDBv2;
  /**
   * Sends information about the detector model instance and the event that triggered the action to an asset property in AWS IoT SiteWise .
   *
   * _Required_: No
   *
   * _Type_: [IotSiteWise](aws-properties-iotevents-detectormodel-iotsitewise.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  IotSiteWise?: IoTEventsDetectorModelIotSiteWise;
  /**
   * Information needed to reset the timer.
   *
   * _Required_: No
   *
   * _Type_: [ResetTimer](aws-properties-iotevents-detectormodel-resettimer.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ResetTimer?: IoTEventsDetectorModelResetTimer;
  /**
   * Sends an Amazon SNS message.
   *
   * _Required_: No
   *
   * _Type_: [Sqs](aws-properties-iotevents-detectormodel-sqs.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Sqs?: IoTEventsDetectorModelSqs;
  /**
   * Information needed to set the timer.
   *
   * _Required_: No
   *
   * _Type_: [SetTimer](aws-properties-iotevents-detectormodel-settimer.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SetTimer?: IoTEventsDetectorModelSetTimer;
  /**
   * Sends an Amazon SNS message.
   *
   * _Required_: No
   *
   * _Type_: [Sns](aws-properties-iotevents-detectormodel-sns.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Sns?: IoTEventsDetectorModelSns;
  /**
   * Information needed to clear the timer.
   *
   * _Required_: No
   *
   * _Type_: [ClearTimer](aws-properties-iotevents-detectormodel-cleartimer.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ClearTimer?: IoTEventsDetectorModelClearTimer;
  /**
   * Calls a Lambda function, passing in information about the detector model instance and the event that triggered the action.
   *
   * _Required_: No
   *
   * _Type_: [Lambda](aws-properties-iotevents-detectormodel-lambda.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Lambda?: IoTEventsDetectorModelLambda;
  /**
   * Sets a variable to a specified value.
   *
   * _Required_: No
   *
   * _Type_: [SetVariable](aws-properties-iotevents-detectormodel-setvariable.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SetVariable?: IoTEventsDetectorModelSetVariable;
}

/**
 * A structure that contains timestamp information. For more information, see [TimeInNanos](https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_TimeInNanos.html) in the _ AWS IoT SiteWise API Reference_.
 *
 * You must use expressions for all parameters in `AssetPropertyTimestamp`. The expressions accept literals, operators, functions, references, and substitution templates.
 *
 * **Examples**
 *
 * For more information, see [Expressions](https://docs.aws.amazon.com/iotevents/latest/developerguide/iotevents-expressions.html) in the _ AWS IoT Events Developer Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-detectormodel-assetpropertytimestamp.html}
 **/
export interface IoTEventsDetectorModelAssetPropertyTimestamp {
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
 * Defines an action to write to the Amazon DynamoDB table that you created. The default action payload contains all the information about the detector model instance and the event that triggered the action. You can customize the [payload](https://docs.aws.amazon.com/iotevents/latest/apireference/API_Payload.html). A separate column of the DynamoDB table receives one attribute-value pair in the payload that you specify.
 *
 * You must use expressions for all parameters in `DynamoDBv2Action`. The expressions accept literals, operators, functions, references, and substitution templates.
 *
 * **Examples**
 *
 * For more information, see [Expressions](https://docs.aws.amazon.com/iotevents/latest/developerguide/iotevents-expressions.html) in the _ AWS IoT Events Developer Guide_.
 *
 * The value for the `type` parameter in `Payload` must be `JSON`.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-detectormodel-dynamodbv2.html}
 **/
export interface IoTEventsDetectorModelDynamoDBv2 {
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
   * Information needed to configure the payload.
   *
   * By default, AWS IoT Events generates a standard payload in JSON for any action. This action payload contains all attribute-value pairs that have the information about the detector model instance and the event triggered the action. To configure the action payload, you can use `contentExpression`.
   *
   * _Required_: No
   *
   * _Type_: [Payload](aws-properties-iotevents-detectormodel-payload.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Payload?: IoTEventsDetectorModelPayload;
}

/**
 * When entering this state, perform these `actions` if the `condition` is TRUE.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-detectormodel-onenter.html}
 **/
export interface IoTEventsDetectorModelOnEnter {
  /**
   * Specifies the actions that are performed when the state is entered and the `condition` is `TRUE`.
   *
   * _Required_: No
   *
   * _Type_: List of [Event](aws-properties-iotevents-detectormodel-event.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Events?: List<IoTEventsDetectorModelEvent>;
}

/**
 * A structure that contains value information. For more information, see [AssetPropertyValue](https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_AssetPropertyValue.html) in the _ AWS IoT SiteWise API Reference_.
 *
 * You must use expressions for all parameters in `AssetPropertyValue`. The expressions accept literals, operators, functions, references, and substitution templates.
 *
 * **Examples**
 *
 * For more information, see [Expressions](https://docs.aws.amazon.com/iotevents/latest/developerguide/iotevents-expressions.html) in the _ AWS IoT Events Developer Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iotevents-detectormodel-assetpropertyvalue.html}
 **/
export interface IoTEventsDetectorModelAssetPropertyValue {
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
   * _Type_: [AssetPropertyVariant](aws-properties-iotevents-detectormodel-assetpropertyvariant.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Value: IoTEventsDetectorModelAssetPropertyVariant;
  /**
   * The timestamp associated with the asset property value. The default is the current event time.
   *
   * _Required_: No
   *
   * _Type_: [AssetPropertyTimestamp](aws-properties-iotevents-detectormodel-assetpropertytimestamp.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Timestamp?: IoTEventsDetectorModelAssetPropertyTimestamp;
}
export interface IoTEventsDetectorModelProperties {
  /**
   * Information that defines how a detector operates.
   *
   * _Required_: Yes
   *
   * _Type_: [DetectorModelDefinition](aws-properties-iotevents-detectormodel-detectormodeldefinition.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DetectorModelDefinition: IoTEventsDetectorModelDetectorModelDefinition;
  /**
   * Information about the order in which events are evaluated and how actions are executed.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `BATCH | SERIAL`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  EvaluationMethod?: Value<string>;
  /**
   * The name of the detector model.
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
  DetectorModelName?: Value<string>;
  /**
   * A brief description of the detector model.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Maximum_: `128`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DetectorModelDescription?: Value<string>;
  /**
   * The value used to identify a detector instance. When a device or system sends input, a new detector instance with a unique key value is created. AWS IoT Events can continue to route input to its corresponding detector instance based on this identifying information.
   *
   * This parameter uses a JSON-path expression to select the attribute-value pair in the message payload that is used for identification. To route the message to the correct detector instance, the device must send a message payload that contains the same attribute-value.
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
   * The ARN of the role that grants permission to AWS IoT Events to perform its operations.
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
   * An array of key-value pairs to apply to this resource.
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
}

/**
 * The AWS::IoTEvents::DetectorModel resource creates a detector model. You create a _detector model_ (a model of your equipment or process) using _states_. For each state, you define conditional (Boolean) logic that evaluates the incoming inputs to detect significant events. When an event is detected, it can change the state or trigger custom-built or predefined actions using other AWS services. You can define additional events that trigger actions when entering or exiting a state and, optionally, when a condition is met. For more information, see [ How to Use AWS IoT Events](https://docs.aws.amazon.com/iotevents/latest/developerguide/how-to-use-iotevents.html) in the _AWS IoT Events Developer Guide_.
 *
 * **Note**
 *
 * When you successfully update a detector model (using the AWS IoT Events console, AWS IoT Events API or CLI commands, or AWS CloudFormation) all detector instances created by the model are reset to their initial states. (The detector's `state`, and the values of any variables and timers are reset.)
 *
 * When you successfully update a detector model (using the AWS IoT Events console, AWS IoT Events API or CLI commands, or AWS CloudFormation) the version number of the detector model is incremented. (A detector model with version number 1 before the update has version number 2 after the update succeeds.)
 *
 * If you attempt to update a detector model using AWS CloudFormation and the update does not succeed, the system may, in some cases, restore the original detector model. When this occurs, the detector model's version is incremented twice (for example, from version 1 to version 3) and the detector instances are reset.
 *
 * Also, be aware that if you attempt to update several detector models at once using AWS CloudFormation, some updates may succeed and others fail. In this case, the effects on each detector model's detector instances and version number depend on whether the update succeeded or failed, with the results as stated.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotevents-detectormodel.html}
 */
export interface IoTEventsDetectorModelResource {
  Type: 'AWS::IoTEvents::DetectorModel';
  Properties: IoTEventsDetectorModelProperties;
}
