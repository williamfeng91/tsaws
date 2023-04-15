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
 * Limitations for outputs from the endpoint, based on the video bitrate.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediapackage-originendpoint-streamselection.html}
 **/
export interface MediaPackageOriginEndpointStreamSelection {
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
 * Parameters for Common Media Application Format (CMAF) packaging.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediapackage-originendpoint-cmafpackage.html}
 **/
export interface MediaPackageOriginEndpointCmafPackage {
  /**
   * An optional custom string that is prepended to the name of each segment. If not specified, the segment prefix defaults to the ChannelId.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SegmentPrefix?: Value<string>;
  /**
   * Limitations for outputs from the endpoint, based on the video bitrate.
   *
   * _Required_: No
   *
   * _Type_: [StreamSelection](aws-properties-mediapackage-originendpoint-streamselection.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  StreamSelection?: MediaPackageOriginEndpointStreamSelection;
  /**
   * Duration (in seconds) of each segment. Actual segments are rounded to the nearest multiple of the source segment duration.
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
   * _Type_: [CmafEncryption](aws-properties-mediapackage-originendpoint-cmafencryption.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Encryption?: MediaPackageOriginEndpointCmafEncryption;
  /**
   * A list of HLS manifest configurations that are available from this endpoint.
   *
   * _Required_: No
   *
   * _Type_: List of [HlsManifest](aws-properties-mediapackage-originendpoint-hlsmanifest.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  HlsManifests?: List<MediaPackageOriginEndpointHlsManifest>;
}

/**
 * Holds encryption information so that access to the content can be controlled by a DRM solution.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediapackage-originendpoint-mssencryption.html}
 **/
export interface MediaPackageOriginEndpointMssEncryption {
  /**
   * Parameters for the SPEKE key provider.
   *
   * _Required_: Yes
   *
   * _Type_: [SpekeKeyProvider](aws-properties-mediapackage-originendpoint-spekekeyprovider.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SpekeKeyProvider: MediaPackageOriginEndpointSpekeKeyProvider;
}

/**
 * Keyprovider settings for DRM.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediapackage-originendpoint-spekekeyprovider.html}
 **/
export interface MediaPackageOriginEndpointSpekeKeyProvider {
  /**
   * Unique identifier for this endpoint, as it is configured in the key provider service.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ResourceId: Value<string>;
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
   * _Type_: [EncryptionContractConfiguration](aws-properties-mediapackage-originendpoint-encryptioncontractconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  EncryptionContractConfiguration?: MediaPackageOriginEndpointEncryptionContractConfiguration;
  /**
   * URL for the key provider’s key retrieval API endpoint. Must start with https://.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Url: Value<string>;
  /**
   * The ARN for the IAM role that's granted by the key provider to provide access to the key provider API. This role must have a trust policy that allows AWS Elemental MediaPackage to assume the role, and it must have a sufficient permissions policy to allow access to the specific key retrieval URL. Valid format: arn:aws:iam::{accountID}:role/{name}
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RoleArn: Value<string>;
  /**
   * The Amazon Resource Name (ARN) for the certificate that you imported to AWS Certificate Manager to add content key encryption to this endpoint. For this feature to work, your DRM key provider must support content key encryption.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CertificateArn?: Value<string>;
}

/**
 * Holds encryption information so that access to the content can be controlled by a DRM solution.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediapackage-originendpoint-cmafencryption.html}
 **/
export interface MediaPackageOriginEndpointCmafEncryption {
  /**
   * Number of seconds before AWS Elemental MediaPackage rotates to a new key. By default, rotation is set to 60 seconds. Set to `0` to disable key rotation.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  KeyRotationIntervalSeconds?: Value<number>;
  /**
   * Parameters for the SPEKE key provider.
   *
   * _Required_: Yes
   *
   * _Type_: [SpekeKeyProvider](aws-properties-mediapackage-originendpoint-spekekeyprovider.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SpekeKeyProvider: MediaPackageOriginEndpointSpekeKeyProvider;
  /**
   * An optional 128-bit, 16-byte hex value represented by a 32-character string, used in conjunction with the key for encrypting blocks. If you don't specify a value, then AWS Elemental MediaPackage creates the constant initialization vector (IV).
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ConstantInitializationVector?: Value<string>;
  /**
   * Property description not available.
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
 * Holds encryption information so that access to the content can be controlled by a DRM solution.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediapackage-originendpoint-hlsencryption.html}
 **/
export interface MediaPackageOriginEndpointHlsEncryption {
  /**
   * Number of seconds before AWS Elemental MediaPackage rotates to a new key. By default, rotation is set to 60 seconds. Set to `0` to disable key rotation.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  KeyRotationIntervalSeconds?: Value<number>;
  /**
   * Repeat the `EXT-X-KEY `directive for every media segment. This might result in an increase in client requests to the DRM server.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RepeatExtXKey?: Value<boolean>;
  /**
   * A 128-bit, 16-byte hex value represented by a 32-character string, used with the key for encrypting blocks.
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
   * _Type_: [SpekeKeyProvider](aws-properties-mediapackage-originendpoint-spekekeyprovider.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SpekeKeyProvider: MediaPackageOriginEndpointSpekeKeyProvider;
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
 * Parameters for Apple HLS packaging.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediapackage-originendpoint-hlspackage.html}
 **/
export interface MediaPackageOriginEndpointHlsPackage {
  /**
   * The flags on SCTE-35 segmentation descriptors that have to be present for AWS Elemental MediaPackage to insert ad markers in the output manifest. For information about SCTE-35 in AWS Elemental MediaPackage, see [SCTE-35 Message Options in AWS Elemental MediaPackage](https://docs.aws.amazon.com/mediapackage/latest/ug/scte.html).
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AdsOnDeliveryRestrictions?: Value<string>;
  /**
   * Controls how ad markers are included in the packaged endpoint.
   *
   * Valid values:
   */
  AdMarkers?: Value<string>;
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
   * Limitations for outputs from the endpoint, based on the video bitrate.
   *
   * _Required_: No
   *
   * _Type_: [StreamSelection](aws-properties-mediapackage-originendpoint-streamselection.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  StreamSelection?: MediaPackageOriginEndpointStreamSelection;
  /**
   * Time window (in seconds) contained in each parent manifest.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PlaylistWindowSeconds?: Value<number>;
  /**
   * Only applies to stream sets with a single video track. When true, the stream set includes an additional I-frame only stream, along with the other tracks. If false, this extra stream is not included.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  IncludeIframeOnlyStream?: Value<boolean>;
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
   * _Type_: [HlsEncryption](aws-properties-mediapackage-originendpoint-hlsencryption.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Encryption?: MediaPackageOriginEndpointHlsEncryption;
  /**
   * When specified as either `event` or `vod`, a corresponding `EXT-X-PLAYLIST-TYPE` entry is included in the media playlist. Indicates if the playlist is live-to-VOD content.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PlaylistType?: Value<string>;
  /**
   * Specifies the SCTE-35 message types that AWS Elemental MediaPackage treats as ad markers in the output manifest.
   *
   * Valid values:
   */
  AdTriggers?: List<Value<string>>;
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

/**
 * Parameters for enabling CDN authorization on the endpoint.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediapackage-originendpoint-authorization.html}
 **/
export interface MediaPackageOriginEndpointAuthorization {
  /**
   * The Amazon Resource Name (ARN) for the IAM role that allows AWS Elemental MediaPackage to communicate with AWS Secrets Manager.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SecretsRoleArn: Value<string>;
  /**
   * The Amazon Resource Name (ARN) for the secret in AWS Secrets Manager that your Content Delivery Network (CDN) uses for authorization to access your endpoint.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CdnIdentifierSecret: Value<string>;
}

/**
 * Parameters for DASH packaging.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediapackage-originendpoint-dashpackage.html}
 **/
export interface MediaPackageOriginEndpointDashPackage {
  /**
   * Time window (in seconds) contained in each manifest.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ManifestWindowSeconds?: Value<number>;
  /**
   * The flags on SCTE-35 segmentation descriptors that have to be present for AWS Elemental MediaPackage to insert ad markers in the output manifest. For information about SCTE-35 in AWS Elemental MediaPackage, see [SCTE-35 Message Options in AWS Elemental MediaPackage](https://docs.aws.amazon.com/mediapackage/latest/ug/scte.html).
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AdsOnDeliveryRestrictions?: Value<string>;
  /**
   * Determines the position of some tags in the manifest.
   *
   * Valid values:
   */
  ManifestLayout?: Value<string>;
  /**
   * Limitations for outputs from the endpoint, based on the video bitrate.
   *
   * _Required_: No
   *
   * _Type_: [StreamSelection](aws-properties-mediapackage-originendpoint-streamselection.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  StreamSelection?: MediaPackageOriginEndpointStreamSelection;
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
   * Determines the type of variable used in the `media` URL of the `SegmentTemplate` tag in the manifest. Also specifies if segment timeline information is included in `SegmentTimeline` or `SegmentTemplate`.
   *
   * Valid values:
   */
  SegmentTemplateFormat?: Value<string>;
  /**
   * Parameters for encrypting content.
   *
   * _Required_: No
   *
   * _Type_: [DashEncryption](aws-properties-mediapackage-originendpoint-dashencryption.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Encryption?: MediaPackageOriginEndpointDashEncryption;
  /**
   * Specifies the SCTE-35 message types that AWS Elemental MediaPackage treats as ad markers in the output manifest.
   *
   * Valid values:
   */
  AdTriggers?: List<Value<string>>;
  /**
   * The DASH profile for the output.
   *
   * Valid values:
   */
  Profile?: Value<string>;
  /**
   * Controls whether AWS Elemental MediaPackage produces single-period or multi-period DASH manifests. For more information about periods, see [Multi-period DASH in AWS Elemental MediaPackage](https://docs.aws.amazon.com/mediapackage/latest/ug/multi-period.html).
   *
   * Valid values:
   */
  PeriodTriggers?: List<Value<string>>;
  /**
   * Amount of time (in seconds) that the player should be from the live point at the end of the manifest.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SuggestedPresentationDelaySeconds?: Value<number>;
  /**
   * Determines the type of UTC timing included in the DASH Media Presentation Description (MPD).
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  UtcTiming?: Value<string>;
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
   * Minimum amount of time (in seconds) that the player should wait before requesting updates to the manifest.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MinUpdatePeriodSeconds?: Value<number>;
  /**
   * Specifies the value attribute of the UTC timing field when utcTiming is set to HTTP-ISO or HTTP-HEAD.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  UtcTimingUri?: Value<string>;
}

/**
 * Holds encryption information so that access to the content can be controlled by a DRM solution.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediapackage-originendpoint-dashencryption.html}
 **/
export interface MediaPackageOriginEndpointDashEncryption {
  /**
   * Number of seconds before AWS Elemental MediaPackage rotates to a new key. By default, rotation is set to 60 seconds. Set to `0` to disable key rotation.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  KeyRotationIntervalSeconds?: Value<number>;
  /**
   * Parameters for the SPEKE key provider.
   *
   * _Required_: Yes
   *
   * _Type_: [SpekeKeyProvider](aws-properties-mediapackage-originendpoint-spekekeyprovider.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SpekeKeyProvider: MediaPackageOriginEndpointSpekeKeyProvider;
}

/**
 * An HTTP Live Streaming (HLS) manifest configuration on a CMAF endpoint.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediapackage-originendpoint-hlsmanifest.html}
 **/
export interface MediaPackageOriginEndpointHlsManifest {
  /**
   * The flags on SCTE-35 segmentation descriptors that have to be present for AWS Elemental MediaPackage to insert ad markers in the output manifest. For information about SCTE-35 in AWS Elemental MediaPackage, see [SCTE-35 Message Options in AWS Elemental MediaPackage](https://docs.aws.amazon.com/mediapackage/latest/ug/scte.html).
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AdsOnDeliveryRestrictions?: Value<string>;
  /**
   * A short string that's appended to the end of the endpoint URL to create a unique path to this endpoint. The manifestName on the HLSManifest object overrides the manifestName that you provided on the originEndpoint object.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ManifestName?: Value<string>;
  /**
   * Controls how ad markers are included in the packaged endpoint.
   *
   * Valid values:
   */
  AdMarkers?: Value<string>;
  /**
   * Inserts `EXT-X-PROGRAM-DATE-TIME `tags in the output manifest at the interval that you specify. Additionally, ID3Timed metadata messages are generated every 5 seconds starting when the content was ingested.
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
   * Time window (in seconds) contained in each parent manifest.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PlaylistWindowSeconds?: Value<number>;
  /**
   * Applies to stream sets with a single video track only. When true, the stream set includes an additional I-frame only stream, along with the other tracks. If false, this extra stream is not included.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  IncludeIframeOnlyStream?: Value<boolean>;
  /**
   * The manifest ID is required and must be unique within the OriginEndpoint. The ID can't be changed after the endpoint is created.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Id: Value<string>;
  /**
   * When specified as either `event` or `vod`, a corresponding `EXT-X-PLAYLIST-TYPE` entry is included in the media playlist. Indicates if the playlist is live-to-VOD content.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PlaylistType?: Value<string>;
  /**
   * Specifies the SCTE-35 message types that AWS Elemental MediaPackage treats as ad markers in the output manifest.
   *
   * Valid values:
   */
  AdTriggers?: List<Value<string>>;
  /**
   * The URL that's used to request this manifest from this endpoint.
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
 * Parameters for Microsoft Smooth Streaming packaging.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediapackage-originendpoint-msspackage.html}
 **/
export interface MediaPackageOriginEndpointMssPackage {
  /**
   * Time window (in seconds) contained in each manifest.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ManifestWindowSeconds?: Value<number>;
  /**
   * Limitations for outputs from the endpoint, based on the video bitrate.
   *
   * _Required_: No
   *
   * _Type_: [StreamSelection](aws-properties-mediapackage-originendpoint-streamselection.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  StreamSelection?: MediaPackageOriginEndpointStreamSelection;
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
   * _Type_: [MssEncryption](aws-properties-mediapackage-originendpoint-mssencryption.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Encryption?: MediaPackageOriginEndpointMssEncryption;
}

/**
 * Use `encryptionContractConfiguration` to configure one or more content encryption keys for your endpoints that use SPEKE Version 2.0. The encryption contract defines the content keys used to encrypt the audio and video tracks in your stream. To configure the encryption contract, specify which audio and video encryption presets to use. For more information about these presets, see [SPEKE Version 2.0 Presets](https://docs.aws.amazon.com/mediapackage/latest/ug/drm-content-speke-v2-presets.html).
 *
 * Note the following considerations when using `encryptionContractConfiguration`:
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediapackage-originendpoint-encryptioncontractconfiguration.html}
 **/
export interface MediaPackageOriginEndpointEncryptionContractConfiguration {}
export interface MediaPackageOriginEndpointProperties {
  /**
   * Parameters for Microsoft Smooth Streaming packaging.
   *
   * _Required_: No
   *
   * _Type_: [MssPackage](aws-properties-mediapackage-originendpoint-msspackage.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MssPackage?: MediaPackageOriginEndpointMssPackage;
  /**
   * Any descriptive information that you want to add to the endpoint for future identification purposes.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Description?: Value<string>;
  /**
   * The ID of the channel associated with this endpoint.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ChannelId: Value<string>;
  /**
   * Minimum duration (seconds) of delay to enforce on the playback of live content. Omit this attribute or enter `0` to indicate that there is no time delay in effect for this endpoint.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TimeDelaySeconds?: Value<number>;
  /**
   * Controls video origination from this endpoint.
   *
   * Valid values:
   */
  Origination?: Value<string>;
  /**
   * Parameters for CDN authorization.
   *
   * _Required_: No
   *
   * _Type_: [Authorization](aws-properties-mediapackage-originendpoint-authorization.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Authorization?: MediaPackageOriginEndpointAuthorization;
  /**
   * A short string that's appended to the end of the endpoint URL to create a unique path to this endpoint.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ManifestName?: Value<string>;
  /**
   * Parameters for Common Media Application Format (CMAF) packaging.
   *
   * _Required_: No
   *
   * _Type_: [CmafPackage](aws-properties-mediapackage-originendpoint-cmafpackage.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CmafPackage?: MediaPackageOriginEndpointCmafPackage;
  /**
   * The IP addresses that can access this endpoint.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Whitelist?: List<Value<string>>;
  /**
   * The manifest ID is required and must be unique within the OriginEndpoint. The ID can't be changed after the endpoint is created.
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
   * _Type_: [HlsPackage](aws-properties-mediapackage-originendpoint-hlspackage.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  HlsPackage?: MediaPackageOriginEndpointHlsPackage;
  /**
   * Parameters for DASH packaging.
   *
   * _Required_: No
   *
   * _Type_: [DashPackage](aws-properties-mediapackage-originendpoint-dashpackage.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DashPackage?: MediaPackageOriginEndpointDashPackage;
  /**
   * The tags to assign to the endpoint.
   *
   * _Required_: No
   *
   * _Type_: List of [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Tags?: List<ResourceTag>;
  /**
   * Maximum duration (seconds) of content to retain for startover playback. Omit this attribute or enter `0` to indicate that startover playback is disabled for this endpoint.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  StartoverWindowSeconds?: Value<number>;
}

/**
 * Create an endpoint on an AWS Elemental MediaPackage channel.
 *
 * An endpoint represents a single delivery point of a channel, and defines content output handling through various components, such as packaging protocols, DRM and encryption integration, and more.
 *
 * After it's created, an endpoint provides a fixed public URL. This URL remains the same throughout the lifetime of the endpoint, regardless of any failures or upgrades that might occur. Integrate the URL with a downstream CDN (such as Amazon CloudFront) or playback device.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackage-originendpoint.html}
 */
export interface MediaPackageOriginEndpointResource {
  Type: 'AWS::MediaPackage::OriginEndpoint';
  Properties: MediaPackageOriginEndpointProperties;
}
