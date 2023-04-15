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

export interface IVSChannelProperties {
  /**
   * The channel type, which determines the allowable resolution and bitrate. _If you exceed the allowable resolution or bitrate, the stream probably will disconnect immediately._ Valid values:
   */
  Type?: Value<string>;
  /**
   * The ARN of a RecordingConfiguration resource. An empty string indicates that recording is disabled for the channel. A RecordingConfiguration ARN indicates that recording is enabled using the specified recording configuration. See the [ RecordingConfiguration](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ivs-recordingconfiguration.html) resource for more information and an example.
   *
   * _Default_: "" (empty string, recording is disabled)
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `0`
   *
   * _Maximum_: `128`
   *
   * _Pattern_: `^$|^arn:aws:ivs:[a-z0-9-]+:[0-9]+:recording-configuration/[a-zA-Z0-9-]+$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RecordingConfigurationArn?: Value<string>;
  /**
   * Whether the channel is authorized.
   *
   * _Default_: `false`
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Authorized?: Value<boolean>;
  /**
   * Channel latency mode. Valid values:
   */
  LatencyMode?: Value<string>;
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
   * Channel name.
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
 * The `AWS::IVS::Channel` resource specifies an Amazon IVS channel. A channel stores configuration information related to your live stream. For more information, see [CreateChannel](https://docs.aws.amazon.com/ivs/latest/APIReference/API_CreateChannel.html) in the _Amazon Interactive Video Service API Reference_.
 *
 * **Note**
 *
 * By default, the IVS API CreateChannel endpoint creates a stream key in addition to a channel. The Amazon IVS Channel resource _does not_ create a stream key; to create a stream key, use the StreamKey resource instead.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ivs-channel.html}
 */
export interface IVSChannelResource {
  Type: 'AWS::IVS::Channel';
  Properties: IVSChannelProperties;
}
