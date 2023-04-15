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

export interface DMSEventSubscriptionProperties {
  /**
   * The type of AWS DMS resource that generates the events. For example, if you want to be notified of events generated by a replication instance, you set this parameter to `replication-instance`. If this value isn't specified, all events are returned.
   *
   * _Valid values_: `replication-instance` | `replication-task`
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SourceType?: Value<string>;
  /**
   * A list of event categories for a source type that you want to subscribe to. If you don't specify this property, you are notified about all event categories. For more information, see [ Working with Events and Notifications](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Events.html) in the _AWS DMS User Guide_.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  EventCategories?: List<Value<string>>;
  /**
   * Indicates whether to activate the subscription. If you don't specify this property, AWS CloudFormation activates the subscription.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Enabled?: Value<boolean>;
  /**
   * The name of the AWS DMS event notification subscription. This name must be less than 255 characters.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  SubscriptionName?: Value<string>;
  /**
   * The Amazon Resource Name (ARN) of the Amazon SNS topic created for event notification. The ARN is created by Amazon SNS when you create a topic and subscribe to it.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SnsTopicArn: Value<string>;
  /**
   * A list of identifiers for which AWS DMS provides notification events.
   *
   * If you don't specify a value, notifications are provided for all sources.
   *
   * If you specify multiple values, they must be of the same type. For example, if you specify a database instance ID, then all of the other values must be database instance IDs.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  SourceIds?: List<Value<string>>;
  /**
   * One or more tags to be assigned to the event subscription.
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
 * Use the `AWS::DMS::EventSubscription` resource to get notifications for AWS Database Migration Service events through the Amazon Simple Notification Service. For more information, see [Working with events and notifications in AWS Database Migration Service](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Events.html) in the _AWS Database Migration Service User Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-eventsubscription.html}
 */
export interface DMSEventSubscriptionResource {
  Type: 'AWS::DMS::EventSubscription';
  Properties: DMSEventSubscriptionProperties;
}