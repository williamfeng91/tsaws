/**
 * Supported regions:
 * - ap-northeast-1 (version 119.1.0)
 * - ap-south-1 (version 119.1.0)
 * - ap-southeast-1 (version 119.1.0)
 * - ap-southeast-2 (version 119.1.0)
 * - ca-central-1 (version 119.1.0)
 * - eu-central-1 (version 119.1.0)
 * - eu-west-1 (version 119.1.0)
 * - eu-west-2 (version 119.1.0)
 * - sa-east-1 (version 119.1.0)
 * - us-east-1 (version 119.1.0)
 * - us-east-2 (version 119.1.0)
 * - us-west-2 (version 119.1.0)
 */
import { List, Value } from '../../shared-types/dataTypes';

export interface LocationTrackerConsumerProperties {
  /**
   * The name for the tracker resource.
   *
   * Requirements:
   */
  TrackerName: Value<string>;
  /**
   * The Amazon Resource Name (ARN) for the geofence collection to be associated to tracker resource. Used when you need to specify a resource across all AWS.
   */
  ConsumerArn: Value<string>;
}

/**
 * The `AWS::Location::TrackerConsumer` resource specifies an association between a geofence collection and a tracker resource. The geofence collection is referred to as the _consumer_ of the tracker. This allows the tracker resource to communicate location data to the linked geofence collection.
 *
 * **Note**
 *
 * Currently not supported — Cross-account configurations, such as creating associations between a tracker resource in one account and a geofence collection in another account.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-location-trackerconsumer.html}
 */
export interface LocationTrackerConsumerResource {
  Type: 'AWS::Location::TrackerConsumer';
  Properties: LocationTrackerConsumerProperties;
}
