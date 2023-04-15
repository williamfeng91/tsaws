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

export interface LocationTrackerProperties {
  /**
   * The name for the tracker resource.
   *
   * Requirements:
   */
  TrackerName: Value<string>;
  /**
   * An optional description for the tracker resource.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `0`
   *
   * _Maximum_: `1000`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Description?: Value<string>;
  /**
   * A key identifier for an [AWS KMS customer managed key](https://docs.aws.amazon.com/kms/latest/developerguide/create-keys.html). Enter a key ID, key ARN, alias name, or alias ARN.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `2048`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  KmsKeyId?: Value<string>;
  /**
   * Specifies the position filtering for the tracker resource.
   *
   * Valid values:
   */
  PositionFiltering?: Value<string>;
}

/**
 * Specifies a tracker resource in your AWS account, which lets you receive current and historical location of devices.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-location-tracker.html}
 */
export interface LocationTrackerResource {
  Type: 'AWS::Location::Tracker';
  Properties: LocationTrackerProperties;
}
