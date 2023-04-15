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
 * The S3DestinationConfiguration property type describes an S3 location where recorded videos will be stored.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ivs-recordingconfiguration-s3destinationconfiguration.html}
 **/
export interface IVSRecordingConfigurationS3DestinationConfiguration {
  /**
   * Location (S3 bucket name) where recorded videos will be stored.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `3`
   *
   * _Maximum_: `63`
   *
   * _Pattern_: `^[a-z0-9-.]+$`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  BucketName: Value<string>;
}

/**
 * The DestinationConfiguration property type describes the location where recorded videos will be stored. Each member represents a type of destination configuration. For recording, you define one and only one type of destination configuration.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ivs-recordingconfiguration-destinationconfiguration.html}
 **/
export interface IVSRecordingConfigurationDestinationConfiguration {
  /**
   * An S3 destination configuration where recorded videos will be stored. See the [S3DestinationConfiguration](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ivs-recordingconfiguration-s3destinationconfiguration.html) property type for more information.
   *
   * _Required_: Yes
   *
   * _Type_: [S3DestinationConfiguration](aws-properties-ivs-recordingconfiguration-s3destinationconfiguration.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  S3: IVSRecordingConfigurationS3DestinationConfiguration;
}

/**
 * The ThumbnailConfiguration property type describes a configuration of thumbnails for recorded video.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ivs-recordingconfiguration-thumbnailconfiguration.html}
 **/
export interface IVSRecordingConfigurationThumbnailConfiguration {
  /**
   * The targeted thumbnail-generation interval in seconds. This is configurable (and required) only if [RecordingMode](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ivs-recordingconfiguration-thumbnailconfiguration.html#cfn-ivs-recordingconfiguration-thumbnailconfiguration-recordingmode) is `INTERVAL`.
   *
   * Setting a value for `TargetIntervalSeconds` does not guarantee that thumbnails are generated at the specified interval. For thumbnails to be generated at the `TargetIntervalSeconds` interval, the `IDR/Keyframe` value for the input video must be less than the `TargetIntervalSeconds` value. See [Amazon IVS Streaming Configuration](https://docs.aws.amazon.com/ivs/latest/userguide/streaming-config.html) for information on setting `IDR/Keyframe` to the recommended value in video-encoder settings.
   *
   * _Default_: 60
   *
   * _Valid Range_: Minumum value of 5. Maximum value of 60.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  TargetIntervalSeconds?: Value<number>;
  /**
   * Thumbnail recording mode. Valid values:
   */
  RecordingMode: Value<string>;
}
export interface IVSRecordingConfigurationProperties {
  /**
   * A destination configuration contains information about where recorded video will be stored. See the [ DestinationConfiguration](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ivs-recordingconfiguration-destinationconfiguration.html) property type for more information.
   *
   * _Required_: Yes
   *
   * _Type_: [DestinationConfiguration](aws-properties-ivs-recordingconfiguration-destinationconfiguration.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  DestinationConfiguration: IVSRecordingConfigurationDestinationConfiguration;
  /**
   * If a broadcast disconnects and then reconnects within the specified interval, the multiple streams will be considered a single broadcast and merged together.
   *
   * _Default_: `0`
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Minimum_: `0`
   *
   * _Maximum_: `300`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  RecordingReconnectWindowSeconds?: Value<number>;
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
   * A thumbnail configuration enables/disables the recording of thumbnails for a live session and controls the interval at which thumbnails are generated for the live session. See the [ThumbnailConfiguration](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ivs-recordingconfiguration-thunbnailconfiguration.html) property type for more information.
   *
   * _Required_: No
   *
   * _Type_: [ThumbnailConfiguration](aws-properties-ivs-recordingconfiguration-thumbnailconfiguration.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ThumbnailConfiguration?: IVSRecordingConfigurationThumbnailConfiguration;
  /**
   * Recording-configuration name. The value does not need to be unique.
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
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Name?: Value<string>;
}

/**
 * The `AWS::IVS::RecordingConfiguration` resource specifies an Amazon IVS recording configuration. A recording configuration enables the recording of a channel’s live streams to a data store. Multiple channels can reference the same recording configuration. For more information, see [RecordingConfiguration](https://docs.aws.amazon.com/ivs/latest/APIReference/API_RecordingConfiguration.html) in the _Amazon Interactive Video Service API Reference_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ivs-recordingconfiguration.html}
 */
export interface IVSRecordingConfigurationResource {
  Type: 'AWS::IVS::RecordingConfiguration';
  Properties: IVSRecordingConfigurationProperties;
}
