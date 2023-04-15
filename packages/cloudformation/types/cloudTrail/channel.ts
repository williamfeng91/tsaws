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
 * Contains information about the destination receiving events.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudtrail-channel-destination.html}
 **/
export interface CloudTrailChannelDestination {
  /**
   * The type of destination for events arriving from a channel. For channels used for a CloudTrail Lake integration, the value is `EventDataStore`. For service-linked channels, the value is `AWS_SERVICE`.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Allowed values_: `AWS_SERVICE | EVENT_DATA_STORE`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Type: Value<string>;
  /**
   * For channels used for a CloudTrail Lake integration, the location is the ARN of an event data store that receives events from a channel. For service-linked channels, the location is the name of the AWS service.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `3`
   *
   * _Maximum_: `1024`
   *
   * _Pattern_: `^[a-zA-Z0-9._/-:]+$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Location: Value<string>;
}
export interface CloudTrailChannelProperties {
  /**
   * One or more event data stores to which events arriving through a channel will be logged.
   *
   * _Required_: No
   *
   * _Type_: List of [Destination](aws-properties-cloudtrail-channel-destination.md)
   *
   * _Maximum_: `200`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Destinations?: List<CloudTrailChannelDestination>;
  /**
   * The name of the partner or external event source. You cannot change this name after you create the channel. A maximum of one channel is allowed per source.
   *
   * A source can be either `Custom` for all valid non-AWS events, or the name of a partner event source. For information about the source names for available partners, see [Additional information about integration partners](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/query-event-data-store-integration.html#cloudtrail-lake-partner-information) in the CloudTrail User Guide.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `256`
   *
   * _Pattern_: `.*`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Source?: Value<string>;
  /**
   * A list of tags.
   *
   * _Required_: No
   *
   * _Type_: List of [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)
   *
   * _Maximum_: `200`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Tags?: List<ResourceTag>;
  /**
   * The name of the channel.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `3`
   *
   * _Maximum_: `128`
   *
   * _Pattern_: `^[a-zA-Z0-9._-]+$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Name?: Value<string>;
}

/**
 * Contains information about a returned CloudTrail channel.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudtrail-channel.html}
 */
export interface CloudTrailChannelResource {
  Type: 'AWS::CloudTrail::Channel';
  Properties: CloudTrailChannelProperties;
}
