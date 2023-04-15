/**
 * Supported regions:
 * - ap-northeast-1 (version 119.1.0)
 * - ap-northeast-2 (version 119.1.0)
 * - ap-south-1 (version 119.1.0)
 * - ap-southeast-1 (version 119.1.0)
 * - ap-southeast-2 (version 119.1.0)
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
 * Parameters for a packaging configuration that uses Dynamic Adaptive Streaming over HTTP (DASH) packaging.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediapackage-packagingconfiguration-dashpackage.html}
 **/
export interface MediaPackagePackagingConfigurationDashPackage {
  /**
   * Controls whether AWS Elemental MediaPackage produces single-period or multi-period DASH manifests. For more information about periods, see [Multi-period DASH in AWS Elemental MediaPackage](https://docs.aws.amazon.com/mediapackage/latest/ug/multi-period.html).
   *
   * Valid values:
   */
  PeriodTriggers?: List<Value<string>>;
  /**
   * This applies only to stream sets with a single video track. When true, the stream set includes an additional I-frame trick-play only stream, along with the other tracks. If false, this extra stream is not included.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  IncludeIframeOnlyStream?: Value<boolean>;
  /**
   * Duration (in seconds) of each fragment. Actual fragments are rounded to the nearest multiple of the source segment duration.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SegmentDurationSeconds?: Value<number>;
  /**
   * Parameters for encrypting content.
   *
   * _Required_: No
   *
   * _Type_: [DashEncryption](aws-properties-mediapackage-packagingconfiguration-dashencryption.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Encryption?: MediaPackagePackagingConfigurationDashEncryption;
  /**
   * Determines the type of SegmentTemplate included in the Media Presentation Description (MPD). When set to **NUMBER_WITH_TIMELINE**, a full timeline is presented in each SegmentTemplate, with $Number$ media URLs. When set to **TIME_WITH_TIMELINE**, a full timeline is presented in each SegmentTemplate, with $Time$ media URLs. When set to **NUMBER_WITH_DURATION**, only a duration is included in each SegmentTemplate, with $Number$ media URLs.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SegmentTemplateFormat?: Value<string>;
  /**
   * When includeEncoderConfigurationInSegments is set to true, AWS Elemental MediaPackage places your encoder's Sequence Parameter Set (SPS), Picture Parameter Set (PPS), and Video Parameter Set (VPS) metadata in every video segment instead of in the init fragment. This lets you use different SPS/PPS/VPS settings for your assets during content playback.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  IncludeEncoderConfigurationInSegments?: Value<boolean>;
  /**
   * A list of DASH manifest configurations that are available from this endpoint.
   *
   * _Required_: Yes
   *
   * _Type_: List of [DashManifest](aws-properties-mediapackage-packagingconfiguration-dashmanifest.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DashManifests: List<MediaPackagePackagingConfigurationDashManifest>;
}

/**
 * Holds encryption information so that access to the content can be controlled by a DRM solution.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediapackage-packagingconfiguration-hlsencryption.html}
 **/
export interface MediaPackagePackagingConfigurationHlsEncryption {
  /**
   * A 128-bit, 16-byte hex value represented by a 32-character string, used with the key for encrypting blocks. If you don't specify a constant initialization vector (IV), AWS Elemental MediaPackage periodically rotates the IV.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ConstantInitializationVector?: Value<string>;
  /**
   * Parameters for the SPEKE key provider.
   *
   * _Required_: Yes
   *
   * _Type_: [SpekeKeyProvider](aws-properties-mediapackage-packagingconfiguration-spekekeyprovider.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SpekeKeyProvider: MediaPackagePackagingConfigurationSpekeKeyProvider;
  /**
   * HLS encryption type.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  EncryptionMethod?: Value<string>;
}

/**
 * Parameters for a packaging configuration that uses Microsoft Smooth Streaming (MSS) packaging.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediapackage-packagingconfiguration-msspackage.html}
 **/
export interface MediaPackagePackagingConfigurationMssPackage {
  /**
   * A list of Microsoft Smooth manifest configurations that are available from this endpoint.
   *
   * _Required_: Yes
   *
   * _Type_: List of [MssManifest](aws-properties-mediapackage-packagingconfiguration-mssmanifest.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MssManifests: List<MediaPackagePackagingConfigurationMssManifest>;
  /**
   * Duration (in seconds) of each fragment. Actual fragments are rounded to the nearest multiple of the source fragment duration.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SegmentDurationSeconds?: Value<number>;
  /**
   * Parameters for encrypting content.
   *
   * _Required_: No
   *
   * _Type_: [MssEncryption](aws-properties-mediapackage-packagingconfiguration-mssencryption.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Encryption?: MediaPackagePackagingConfigurationMssEncryption;
}

/**
 * Parameters for an HLS manifest.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediapackage-packagingconfiguration-hlsmanifest.html}
 **/
export interface MediaPackagePackagingConfigurationHlsManifest {
  /**
   * This setting controls ad markers in the packaged content.
   *
   * Valid values:
   */
  AdMarkers?: Value<string>;
  /**
   * A short string that's appended to the end of the endpoint URL to create a unique path to this packaging configuration.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ManifestName?: Value<string>;
  /**
   * Inserts `EXT-X-PROGRAM-DATE-TIME` tags in the output manifest at the interval that you specify. Additionally, ID3Timed metadata messages are generated every 5 seconds starting when the content was ingested.
   *
   * Irrespective of this parameter, if any ID3Timed metadata is in the HLS input, it is passed through to the HLS output.
   *
   * Omit this attribute or enter `0` to indicate that the `EXT-X-PROGRAM-DATE-TIME` tags are not included in the manifest.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ProgramDateTimeIntervalSeconds?: Value<number>;
  /**
   * Video bitrate limitations for outputs from this packaging configuration.
   *
   * _Required_: No
   *
   * _Type_: [StreamSelection](aws-properties-mediapackage-packagingconfiguration-streamselection.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  StreamSelection?: MediaPackagePackagingConfigurationStreamSelection;
  /**
   * Repeat the `EXT-X-KEY` directive for every media segment. This might result in an increase in client requests to the DRM server.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RepeatExtXKey?: Value<boolean>;
  /**
   * Applies to stream sets with a single video track only. When enabled, the output includes an additional I-frame only stream, along with the other tracks.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  IncludeIframeOnlyStream?: Value<boolean>;
}

/**
 * Use `encryptionContractConfiguration` to configure one or more content encryption keys for your endpoints that use SPEKE Version 2.0. The encryption contract defines the content keys used to encrypt the audio and video tracks in your stream. To configure the encryption contract, specify which audio and video encryption presets to use. For more information about these presets, see [SPEKE Version 2.0 Presets](https://docs.aws.amazon.com/mediapackage/latest/ug/drm-content-speke-v2-presets.html).
 *
 * Note the following considerations when using `encryptionContractConfiguration`:
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediapackage-packagingconfiguration-encryptioncontractconfiguration.html}
 **/
export interface MediaPackagePackagingConfigurationEncryptionContractConfiguration {}

/**
 * Holds encryption information so that access to the content can be controlled by a DRM solution.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediapackage-packagingconfiguration-dashencryption.html}
 **/
export interface MediaPackagePackagingConfigurationDashEncryption {
  /**
   * Parameters for the SPEKE key provider.
   *
   * _Required_: Yes
   *
   * _Type_: [SpekeKeyProvider](aws-properties-mediapackage-packagingconfiguration-spekekeyprovider.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SpekeKeyProvider: MediaPackagePackagingConfigurationSpekeKeyProvider;
}

/**
 * A configuration for accessing an external Secure Packager and Encoder Key Exchange (SPEKE) service that provides encryption keys.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediapackage-packagingconfiguration-spekekeyprovider.html}
 **/
export interface MediaPackagePackagingConfigurationSpekeKeyProvider {
  /**
   * List of unique identifiers for the DRM systems to use, as defined in the CPIX specification.
   *
   * _Required_: Yes
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SystemIds: List<Value<string>>;
  /**
   * Use `encryptionContractConfiguration` to configure one or more content encryption keys for your endpoints that use SPEKE Version 2.0. The encryption contract defines which content keys are used to encrypt the audio and video tracks in your stream. To configure the encryption contract, specify which audio and video encryption presets to use.
   *
   * _Required_: No
   *
   * _Type_: [EncryptionContractConfiguration](aws-properties-mediapackage-packagingconfiguration-encryptioncontractconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  EncryptionContractConfiguration?: MediaPackagePackagingConfigurationEncryptionContractConfiguration;
  /**
   * The ARN for the IAM role that's granted by the key provider to provide access to the key provider API. Valid format: arn:aws:iam::{accountID}:role/{name}
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RoleArn: Value<string>;
  /**
   * URL for the key provider's key retrieval API endpoint. Must start with https://.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Url: Value<string>;
}

/**
 * Parameters for a packaging configuration that uses Common Media Application Format (CMAF) packaging.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediapackage-packagingconfiguration-cmafpackage.html}
 **/
export interface MediaPackagePackagingConfigurationCmafPackage {
  /**
   * Duration (in seconds) of each segment. Actual segments are rounded to the nearest multiple of the source fragment duration.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SegmentDurationSeconds?: Value<number>;
  /**
   * Parameters for encrypting content.
   *
   * _Required_: No
   *
   * _Type_: [CmafEncryption](aws-properties-mediapackage-packagingconfiguration-cmafencryption.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Encryption?: MediaPackagePackagingConfigurationCmafEncryption;
  /**
   * A list of HLS manifest configurations that are available from this endpoint.
   *
   * _Required_: Yes
   *
   * _Type_: List of [HlsManifest](aws-properties-mediapackage-packagingconfiguration-hlsmanifest.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  HlsManifests: List<MediaPackagePackagingConfigurationHlsManifest>;
  /**
   * When includeEncoderConfigurationInSegments is set to true, AWS Elemental MediaPackage places your encoder's Sequence Parameter Set (SPS), Picture Parameter Set (PPS), and Video Parameter Set (VPS) metadata in every video segment instead of in the init fragment. This lets you use different SPS/PPS/VPS settings for your assets during content playback.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  IncludeEncoderConfigurationInSegments?: Value<boolean>;
}

/**
 * Parameters for a DASH manifest.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediapackage-packagingconfiguration-dashmanifest.html}
 **/
export interface MediaPackagePackagingConfigurationDashManifest {
  /**
   * The source of scte markers used.
   *
   * Value description:
   */
  ScteMarkersSource?: Value<string>;
  /**
   * A short string that's appended to the end of the endpoint URL to create a unique path to this packaging configuration.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ManifestName?: Value<string>;
  /**
   * Determines the position of some tags in the Media Presentation Description (MPD). When set to **FULL**, elements like `SegmentTemplate` and `ContentProtection` are included in each `Representation`. When set to **COMPACT**, duplicate elements are combined and presented at the AdaptationSet level.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ManifestLayout?: Value<string>;
  /**
   * Limitations for outputs from the endpoint, based on the video bitrate.
   *
   * _Required_: No
   *
   * _Type_: [StreamSelection](aws-properties-mediapackage-packagingconfiguration-streamselection.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  StreamSelection?: MediaPackagePackagingConfigurationStreamSelection;
  /**
   * Minimum amount of content (measured in seconds) that a player must keep available in the buffer.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MinBufferTimeSeconds?: Value<number>;
  /**
   * The DASH profile type. When set to **HBBTV_1_5**, the content is compliant with HbbTV 1.5.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Profile?: Value<string>;
}

/**
 * Parameters for a Microsoft Smooth manifest.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediapackage-packagingconfiguration-mssmanifest.html}
 **/
export interface MediaPackagePackagingConfigurationMssManifest {
  /**
   * A short string that's appended to the end of the endpoint URL to create a unique path to this packaging configuration.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ManifestName?: Value<string>;
  /**
   * Video bitrate limitations for outputs from this packaging configuration.
   *
   * _Required_: No
   *
   * _Type_: [StreamSelection](aws-properties-mediapackage-packagingconfiguration-streamselection.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  StreamSelection?: MediaPackagePackagingConfigurationStreamSelection;
}

/**
 * Holds encryption information so that access to the content can be controlled by a DRM solution.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediapackage-packagingconfiguration-cmafencryption.html}
 **/
export interface MediaPackagePackagingConfigurationCmafEncryption {
  /**
   * Parameters for the SPEKE key provider.
   *
   * _Required_: Yes
   *
   * _Type_: [SpekeKeyProvider](aws-properties-mediapackage-packagingconfiguration-spekekeyprovider.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SpekeKeyProvider: MediaPackagePackagingConfigurationSpekeKeyProvider;
}

/**
 * Holds encryption information so that access to the content can be controlled by a DRM solution.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediapackage-packagingconfiguration-mssencryption.html}
 **/
export interface MediaPackagePackagingConfigurationMssEncryption {
  /**
   * Parameters for the SPEKE key provider.
   *
   * _Required_: Yes
   *
   * _Type_: [SpekeKeyProvider](aws-properties-mediapackage-packagingconfiguration-spekekeyprovider.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SpekeKeyProvider: MediaPackagePackagingConfigurationSpekeKeyProvider;
}

/**
 * Limitations for outputs from the endpoint, based on the video bitrate.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediapackage-packagingconfiguration-streamselection.html}
 **/
export interface MediaPackagePackagingConfigurationStreamSelection {
  /**
   * The lower limit of the bitrates that this endpoint serves. If the video track is below this threshold, then AWS Elemental MediaPackage excludes it from output. If you don't specify a value, it defaults to 0 bits per second.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MinVideoBitsPerSecond?: Value<number>;
  /**
   * Order in which the different video bitrates are presented to the player.
   *
   * Valid values: **ORIGINAL**, **VIDEO_BITRATE_ASCENDING**, **VIDEO_BITRATE_DESCENDING**.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  StreamOrder?: Value<string>;
  /**
   * The upper limit of the bitrates that this endpoint serves. If the video track exceeds this threshold, then AWS Elemental MediaPackage excludes it from output. If you don't specify a value, it defaults to 2147483647 bits per second.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MaxVideoBitsPerSecond?: Value<number>;
}

/**
 * Parameters for a packaging configuration that uses HTTP Live Streaming (HLS) packaging.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediapackage-packagingconfiguration-hlspackage.html}
 **/
export interface MediaPackagePackagingConfigurationHlsPackage {
  /**
   * When true, AWS Elemental MediaPackage bundles all audio tracks in a rendition group. All other tracks in the stream can be used with any audio rendition from the group.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  UseAudioRenditionGroup?: Value<boolean>;
  /**
   * Duration (in seconds) of each fragment. Actual fragments are rounded to the nearest multiple of the source fragment duration.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SegmentDurationSeconds?: Value<number>;
  /**
   * Parameters for encrypting content.
   *
   * _Required_: No
   *
   * _Type_: [HlsEncryption](aws-properties-mediapackage-packagingconfiguration-hlsencryption.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Encryption?: MediaPackagePackagingConfigurationHlsEncryption;
  /**
   * A list of HLS manifest configurations that are available from this endpoint.
   *
   * _Required_: Yes
   *
   * _Type_: List of [HlsManifest](aws-properties-mediapackage-packagingconfiguration-hlsmanifest.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  HlsManifests: List<MediaPackagePackagingConfigurationHlsManifest>;
  /**
   * When enabled, MediaPackage passes through digital video broadcasting (DVB) subtitles into the output.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  IncludeDvbSubtitles?: Value<boolean>;
}
export interface MediaPackagePackagingConfigurationProperties {
  /**
   * Parameters for Microsoft Smooth Streaming packaging.
   *
   * _Required_: No
   *
   * _Type_: [MssPackage](aws-properties-mediapackage-packagingconfiguration-msspackage.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MssPackage?: MediaPackagePackagingConfigurationMssPackage;
  /**
   * Parameters for CMAF packaging.
   *
   * _Required_: No
   *
   * _Type_: [CmafPackage](aws-properties-mediapackage-packagingconfiguration-cmafpackage.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CmafPackage?: MediaPackagePackagingConfigurationCmafPackage;
  /**
   * Unique identifier that you assign to the packaging configuration.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Id: Value<string>;
  /**
   * Parameters for Apple HLS packaging.
   *
   * _Required_: No
   *
   * _Type_: [HlsPackage](aws-properties-mediapackage-packagingconfiguration-hlspackage.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  HlsPackage?: MediaPackagePackagingConfigurationHlsPackage;
  /**
   * The ID of the packaging group associated with this packaging configuration.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PackagingGroupId: Value<string>;
  /**
   * Parameters for DASH-ISO packaging.
   *
   * _Required_: No
   *
   * _Type_: [DashPackage](aws-properties-mediapackage-packagingconfiguration-dashpackage.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DashPackage?: MediaPackagePackagingConfigurationDashPackage;
  /**
   * The tags to assign to the packaging configuration.
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
 * Creates a packaging configuration in a packaging group.
 *
 * The packaging configuration represents a single delivery point for an asset. It determines the format and setting for the egressing content. Specify only one package format per configuration, such as `HlsPackage`.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackage-packagingconfiguration.html}
 */
export interface MediaPackagePackagingConfigurationResource {
  Type: 'AWS::MediaPackage::PackagingConfiguration';
  Properties: MediaPackagePackagingConfigurationProperties;
}
