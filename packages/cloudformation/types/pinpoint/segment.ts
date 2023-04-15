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
 * - us-west-2 (version 119.1.0)
 */
import { List, Value } from '../../shared-types/dataTypes';
import { ResourceTag } from '../../shared-types/resource';

/**
 *
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-segment-segmentdimensions-behavior-recency.html}
 **/
export interface PinpointSegmentRecency {
  Duration: Value<string>;
  RecencyType: Value<string>;
}

/**
 *
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-segment-segmentgroups-groups.html}
 **/
export interface PinpointSegmentGroups {
  Type?: Value<string>;
  SourceType?: Value<string>;
  Dimensions?: List<PinpointSegmentSegmentDimensions>;
  SourceSegments?: List<PinpointSegmentSourceSegments>;
}

/**
 * Specifies the set of segment criteria to evaluate when handling segment groups for the segment.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-segment-segmentgroups.html}
 **/
export interface PinpointSegmentSegmentGroups {
  /**
   * Specifies the set of segment criteria to evaluate when handling segment groups for the segment.
   *
   * _Required_: No
   *
   * _Type_: [List](aws-properties-pinpoint-segment-segmentgroups-groups.md) of [Groups](aws-properties-pinpoint-segment-segmentgroups-groups.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Groups?: List<PinpointSegmentGroups>;
  /**
   * Specifies how to handle multiple segment groups for the segment. For example, if the segment includes three segment groups, whether the resulting segment includes endpoints that match all, any, or none of the segment groups.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Include?: Value<string>;
}

/**
 *
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-segment-segmentdimensions-location-gpspoint.html}
 **/
export interface PinpointSegmentGPSPoint {
  RangeInKilometers: Value<number>;
  Coordinates: PinpointSegmentCoordinates;
}

/**
 *
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-segment-segmentdimensions-demographic.html}
 **/
export interface PinpointSegmentDemographic {
  AppVersion?: PinpointSegmentSetDimension;
  DeviceType?: PinpointSegmentSetDimension;
  Platform?: PinpointSegmentSetDimension;
  Channel?: PinpointSegmentSetDimension;
  Model?: PinpointSegmentSetDimension;
  Make?: PinpointSegmentSetDimension;
}

/**
 * Specifies the dimension type and values for a segment dimension.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-segment-setdimension.html}
 **/
export interface PinpointSegmentSetDimension {
  /**
   * The type of segment dimension to use. Valid values are: `INCLUSIVE`, endpoints that match the criteria are included in the segment; and, `EXCLUSIVE`, endpoints that match the criteria are excluded from the segment.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DimensionType?: Value<string>;
  /**
   * The criteria values to use for the segment dimension. Depending on the value of the `DimensionType` property, endpoints are included or excluded from the segment if their values match the criteria values.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Values?: List<Value<string>>;
}

/**
 * Specifies attribute-based criteria for including or excluding endpoints from a segment.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-segment-attributedimension.html}
 **/
export interface PinpointSegmentAttributeDimension {
  /**
   * The type of segment dimension to use. Valid values are:
   */
  AttributeType?: Value<string>;
  /**
   * The criteria values to use for the segment dimension. Depending on the value of the `AttributeType` property, endpoints are included or excluded from the segment if their attribute values match the criteria values.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Values?: List<Value<string>>;
}

/**
 *
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-segment-segmentdimensions-location.html}
 **/
export interface PinpointSegmentLocation {
  GPSPoint?: PinpointSegmentGPSPoint;
  Country?: PinpointSegmentSetDimension;
}

/**
 *
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-segment-segmentdimensions-location-gpspoint-coordinates.html}
 **/
export interface PinpointSegmentCoordinates {
  Latitude: Value<number>;
  Longitude: Value<number>;
}

/**
 * Specifies the dimension settings for a segment.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-segment-segmentdimensions.html}
 **/
export interface PinpointSegmentSegmentDimensions {
  /**
   * The demographic-based criteria, such as device platform, for the segment.
   *
   * _Required_: No
   *
   * _Type_: [Demographic](aws-properties-pinpoint-segment-segmentdimensions-demographic.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Demographic?: PinpointSegmentDemographic;
  /**
   * One or more custom metrics to use as criteria for the segment.
   *
   * _Required_: No
   *
   * _Type_: Json
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Metrics?: { [key: string]: any };
  /**
   * One or more custom attributes to use as criteria for the segment.
   *
   * _Required_: No
   *
   * _Type_: Json
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Attributes?: { [key: string]: any };
  /**
   * The behavior-based criteria, such as how recently users have used your app, for the segment.
   *
   * _Required_: No
   *
   * _Type_: [Behavior](aws-properties-pinpoint-segment-segmentdimensions-behavior.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Behavior?: PinpointSegmentBehavior;
  /**
   * One or more custom user attributes to use as criteria for the segment.
   *
   * _Required_: No
   *
   * _Type_: Json
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  UserAttributes?: { [key: string]: any };
  /**
   * The location-based criteria, such as region or GPS coordinates, for the segment.
   *
   * _Required_: No
   *
   * _Type_: [Location](aws-properties-pinpoint-segment-segmentdimensions-location.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Location?: PinpointSegmentLocation;
}

/**
 *
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-segment-segmentgroups-groups-sourcesegments.html}
 **/
export interface PinpointSegmentSourceSegments {
  Version?: Value<number>;
  Id: Value<string>;
}

/**
 *
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpoint-segment-segmentdimensions-behavior.html}
 **/
export interface PinpointSegmentBehavior {
  Recency?: PinpointSegmentRecency;
}
export interface PinpointSegmentProperties {
  /**
   * The segment group to use and the dimensions to apply to the group's base segments in order to build the segment. A segment group can consist of zero or more base segments. Your request can include only one segment group.
   *
   * _Required_: No
   *
   * _Type_: [SegmentGroups](aws-properties-pinpoint-segment-segmentgroups.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SegmentGroups?: PinpointSegmentSegmentGroups;
  /**
   * The criteria that define the dimensions for the segment.
   *
   * _Required_: No
   *
   * _Type_: [SegmentDimensions](aws-properties-pinpoint-segment-segmentdimensions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Dimensions?: PinpointSegmentSegmentDimensions;
  /**
   * The unique identifier for the Amazon Pinpoint application that the segment is associated with.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ApplicationId: Value<string>;
  /**
   * An array of key-value pairs to apply to this resource.
   *
   * For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html).
   *
   * _Required_: No
   *
   * _Type_: Json
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Tags?: { [key: string]: any };
  /**
   * The name of the segment.
   *
   * A segment must have a name otherwise it will not appear in the Amazon Pinpoint console.
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
 * Updates the configuration, dimension, and other settings for an existing segment.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-segment.html}
 */
export interface PinpointSegmentResource {
  Type: 'AWS::Pinpoint::Segment';
  Properties: PinpointSegmentProperties;
}
