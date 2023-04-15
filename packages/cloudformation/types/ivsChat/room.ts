/**
 * Supported regions:
 * - ap-northeast-1 (version 119.1.0)
 * - ap-northeast-2 (version 119.1.0)
 * - ap-south-1 (version 119.1.0)
 * - eu-central-1 (version 119.1.0)
 * - eu-west-1 (version 119.1.0)
 * - us-east-1 (version 119.1.0)
 * - us-west-2 (version 119.1.0)
 */
import { List, Value } from '../../shared-types/dataTypes';
import { ResourceTag } from '../../shared-types/resource';

/**
 * The MessageReviewHandler property type specifies configuration information for optional message review.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ivschat-room-messagereviewhandler.html}
 **/
export interface IVSChatRoomMessageReviewHandler {
  /**
   * Specifies the fallback behavior (whether the message is allowed or denied) if the handler does not return a valid response, encounters an error, or times out. (For the timeout period, see [ Service Quotas](https://docs.aws.amazon.com/ivs/latest/userguide/service-quotas.html).) If allowed, the message is delivered with returned content to all users connected to the room. If denied, the message is not delivered to any user.
   *
   * _Default_: `ALLOW`
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `ALLOW | DENY`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FallbackResult?: Value<string>;
  /**
   * Identifier of the message review handler. Currently this must be an ARN of a lambda function.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `0`
   *
   * _Maximum_: `170`
   *
   * _Pattern_: `^$|^arn:aws:lambda:[a-z0-9-]+:[0-9]{12}:function:.+`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Uri?: Value<string>;
}
export interface IVSChatRoomProperties {
  /**
   * Maximum number of messages per second that can be sent to the room (by all clients).
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MaximumMessageRatePerSecond?: Value<number>;
  /**
   * Maximum number of characters in a single message. Messages are expected to be UTF-8 encoded and this limit applies specifically to rune/code-point count, not number of bytes.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MaximumMessageLength?: Value<number>;
  /**
   * Configuration information for optional review of messages.
   *
   * _Required_: No
   *
   * _Type_: [MessageReviewHandler](aws-properties-ivschat-room-messagereviewhandler.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MessageReviewHandler?: IVSChatRoomMessageReviewHandler;
  /**
   * List of logging-configuration identifiers attached to the room.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Maximum_: `3`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  LoggingConfigurationIdentifiers?: List<Value<string>>;
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
  /**
   * Room name. The value does not need to be unique.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `0`
   *
   * _Maximum_: `128`
   *
   * _Pattern_: `^[a-zA-Z0-9-_]*$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Name?: Value<string>;
}

/**
 * The `AWS::IVSChat::Room` resource specifies an Amazon IVS room that allows clients to connect and pass messages. For more information, see [CreateRoom](https://docs.aws.amazon.com/ivs/latest/ChatAPIReference/API_CreateRoom.html) in the _Amazon Interactive Video Service Chat API Reference_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ivschat-room.html}
 */
export interface IVSChatRoomResource {
  Type: 'AWS::IVSChat::Room';
  Properties: IVSChatRoomProperties;
}
