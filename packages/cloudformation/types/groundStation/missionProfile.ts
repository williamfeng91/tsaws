/**
 * Supported regions:
 * - ap-northeast-2 (version 119.1.0)
 * - ap-southeast-1 (version 119.1.0)
 * - ap-southeast-2 (version 119.1.0)
 * - eu-central-1 (version 119.1.0)
 * - eu-west-1 (version 119.1.0)
 * - sa-east-1 (version 119.1.0)
 * - us-east-1 (version 119.1.0)
 * - us-east-2 (version 119.1.0)
 * - us-west-2 (version 119.1.0)
 */
import { List, Value } from '../../shared-types/dataTypes';
import { ResourceTag } from '../../shared-types/resource';

/**
 * A dataflow edge defines from where and to where data will flow during a contact.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-groundstation-missionprofile-dataflowedge.html}
 **/
export interface GroundStationMissionProfileDataflowEdge {
  /**
   * The ARN of the destination for this dataflow edge. For example, specify the ARN of a dataflow endpoint config for a downlink edge or an antenna uplink config for an uplink edge.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Destination?: Value<string>;
  /**
   * The ARN of the source for this dataflow edge. For example, specify the ARN of an antenna downlink config for a downlink edge or a dataflow endpoint config for an uplink edge.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Source?: Value<string>;
}

/**
 *
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-groundstation-missionprofile-streamskmskey.html}
 **/
export interface GroundStationMissionProfileStreamsKmsKey {
  KmsKeyArn?: Value<string>;
  KmsAliasArn?: Value<string>;
}
export interface GroundStationMissionProfileProperties {
  StreamsKmsKey?: GroundStationMissionProfileStreamsKmsKey;
  /**
   * Amount of time in seconds after a contact ends that you’d like to receive a CloudWatch Event indicating the pass has finished. For more information on CloudWatch Events, see the [What Is CloudWatch Events?](https://docs.aws.amazon.com/AmazonCloudWatch/latest/events/WhatIsCloudWatchEvents.html)
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ContactPostPassDurationSeconds?: Value<number>;
  /**
   * Minimum length of a contact in seconds that Ground Station will return when listing contacts. Ground Station will not return contacts shorter than this duration.
   *
   * _Required_: Yes
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MinimumViableContactDurationSeconds: Value<number>;
  /**
   * A list containing lists of config ARNs. Each list of config ARNs is an edge, with a "from" config and a "to" config.
   *
   * _Required_: Yes
   *
   * _Type_: List of [DataflowEdge](aws-properties-groundstation-missionprofile-dataflowedge.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DataflowEdges: List<GroundStationMissionProfileDataflowEdge>;
  StreamsKmsRole?: Value<string>;
  /**
   * The ARN of a tracking config objects that defines how to track the satellite through the sky during a contact.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TrackingConfigArn: Value<string>;
  /**
   * Tags assigned to the mission profile.
   *
   * _Required_: No
   *
   * _Type_: List of [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Tags?: List<ResourceTag>;
  /**
   * The name of the mission profile.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Name: Value<string>;
  /**
   * Amount of time in seconds prior to contact start that you'd like to receive a CloudWatch Event indicating an upcoming pass. For more information on CloudWatch Events, see the [What Is CloudWatch Events?](https://docs.aws.amazon.com/AmazonCloudWatch/latest/events/WhatIsCloudWatchEvents.html)
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ContactPrePassDurationSeconds?: Value<number>;
}

/**
 * Mission profiles specify parameters and provide references to config objects to define how Ground Station lists and executes contacts.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-groundstation-missionprofile.html}
 */
export interface GroundStationMissionProfileResource {
  Type: 'AWS::GroundStation::MissionProfile';
  Properties: GroundStationMissionProfileProperties;
}
