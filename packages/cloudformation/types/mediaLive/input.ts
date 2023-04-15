/**
 * Supported regions:
 * - ap-northeast-1 (version 119.1.0)
 * - ap-northeast-2 (version 119.1.0)
 * - ap-south-1 (version 119.1.0)
 * - ap-southeast-1 (version 119.1.0)
 * - ap-southeast-2 (version 119.1.0)
 * - eu-central-1 (version 119.1.0)
 * - eu-west-1 (version 119.1.0)
 * - sa-east-1 (version 119.1.0)
 * - us-east-1 (version 119.1.0)
 * - us-west-2 (version 119.1.0)
 */
import { List, Value } from '../../shared-types/dataTypes';
import { ResourceTag } from '../../shared-types/resource';

/**
 * Settings that apply only if the input is an push input where the source is on Amazon VPC.
 *
 * The parent of this entity is Input.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-input-inputvpcrequest.html}
 **/
export interface MediaLiveInputInputVpcRequest {
  /**
   * The list of up to five VPC security group IDs to attach to the input VPC network interfaces. The security groups require subnet IDs. If none are specified, MediaLive uses the VPC default security group.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SecurityGroupIds?: List<Value<string>>;
  /**
   * The list of two VPC subnet IDs from the same VPC. You must associate subnet IDs to two unique Availability Zones.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SubnetIds?: List<Value<string>>;
}

/**
 * Settings that apply only if the input is a pull type of input.
 *
 * The parent of this entity is Input.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-input-inputsourcerequest.html}
 **/
export interface MediaLiveInputInputSourceRequest {
  /**
   * The user name to connect to the upstream system. The user name applies only if the upstream system requires credentials.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Username?: Value<string>;
  /**
   * The password parameter that holds the password for accessing the upstream system. The password parameter applies only if the upstream system requires credentials.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PasswordParam?: Value<string>;
  /**
   * For a pull input, the URL where MediaLive pulls the source content from.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Url?: Value<string>;
}

/**
 * This entity is not used. Ignore it.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-input-inputdevicerequest.html}
 **/
export interface MediaLiveInputInputDeviceRequest {
  /**
   * This property is not used. Ignore it.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Id?: Value<string>;
}

/**
 * Settings that apply only if the input is an Elemental Link input.
 *
 * The parent of this entity is Input.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-input-inputdevicesettings.html}
 **/
export interface MediaLiveInputInputDeviceSettings {
  /**
   * The unique ID for the device.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Id?: Value<string>;
}

/**
 * Settings that apply only if the input is a push type of input.
 *
 * The parent of this entity is Input.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-input-inputdestinationrequest.html}
 **/
export interface MediaLiveInputInputDestinationRequest {
  /**
   * The stream name (application name/application instance) for the location the RTMP source content will be pushed to in MediaLive.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  StreamName?: Value<string>;
}

/**
 * Settings that apply only if the input is a MediaConnect input.
 *
 * The parent of this entity is Input.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-input-mediaconnectflowrequest.html}
 **/
export interface MediaLiveInputMediaConnectFlowRequest {
  /**
   * The ARN of one or two MediaConnect flows that are the sources for this MediaConnect input.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FlowArn?: Value<string>;
}
export interface MediaLiveInputProperties {
  /**
   * The type for this input.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Type?: Value<string>;
  /**
   * Settings that apply only if the input is a push type of input.
   *
   * _Required_: No
   *
   * _Type_: List of [InputDestinationRequest](aws-properties-medialive-input-inputdestinationrequest.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Destinations?: List<MediaLiveInputInputDestinationRequest>;
  /**
   * Settings that apply only if the input is an push input where the source is on Amazon VPC.
   *
   * _Required_: No
   *
   * _Type_: [InputVpcRequest](aws-properties-medialive-input-inputvpcrequest.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Vpc?: MediaLiveInputInputVpcRequest;
  /**
   * Settings that apply only if the input is a MediaConnect input.
   *
   * _Required_: No
   *
   * _Type_: List of [MediaConnectFlowRequest](aws-properties-medialive-input-mediaconnectflowrequest.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MediaConnectFlows?: List<MediaLiveInputMediaConnectFlowRequest>;
  /**
   * The list of input security groups (referenced by IDs) to attach to the input if the input is a push type.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  InputSecurityGroups?: List<Value<string>>;
  /**
   * Settings that apply only if the input is an Elemental Link input.
   *
   * _Required_: No
   *
   * _Type_: List of [InputDeviceSettings](aws-properties-medialive-input-inputdevicesettings.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  InputDevices?: List<MediaLiveInputInputDeviceSettings>;
  /**
   * Settings that apply only if the input is a pull type of input.
   *
   * _Required_: No
   *
   * _Type_: List of [InputSourceRequest](aws-properties-medialive-input-inputsourcerequest.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Sources?: List<MediaLiveInputInputSourceRequest>;
  /**
   * The IAM role for MediaLive to assume when creating a MediaConnect input or Amazon VPC input. This doesn't apply to other types of inputs. The role is identified by its ARN.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RoleArn?: Value<string>;
  /**
   * A collection of tags for this input. Each tag is a key-value pair.
   *
   * _Required_: No
   *
   * _Type_: Json
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Tags?: { [key: string]: any };
  /**
   * A name for the input.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Name?: Value<string>;
}

/**
 * The AWS::MediaLive::Input resource is a MediaLive resource type that creates an input.
 *
 * A MediaLive input holds information that describes how the MediaLive channel is connected to the upstream system that is providing the source content that is to be transcoded.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-input.html}
 */
export interface MediaLiveInputResource {
  Type: 'AWS::MediaLive::Input';
  Properties: MediaLiveInputProperties;
}
