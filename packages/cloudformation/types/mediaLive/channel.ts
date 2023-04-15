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
 * - us-west-2 (version 119.1.0)
 */
import { List, Value } from '../../shared-types/dataTypes';
import { ResourceTag } from '../../shared-types/resource';

/**
 * Information about how to connect to the upstream system.
 *
 * The parent of this entity is NetworkInputSettings.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-hlsinputsettings.html}
 **/
export interface MediaLiveChannelHlsInputSettings {
  /**
   * Identifies the source for the SCTE-35 messages that MediaLive will ingest. Messages can be ingested from the content segments (in the stream) or from tags in the playlist (the HLS manifest). MediaLive ignores SCTE-35 information in the source that is not selected.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Scte35Source?: Value<string>;
  /**
   * When specified, reading of the HLS input begins this many buffer segments from the end (most recently written segment). When not specified, the HLS input begins with the first segment specified in the m3u8.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  BufferSegments?: Value<number>;
  /**
   * The number of consecutive times that attempts to read a manifest or segment must fail before the input is considered unavailable.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Retries?: Value<number>;
  /**
   * When specified, the HLS stream with the m3u8 bandwidth that most closely matches this value is chosen. Otherwise, the highest bandwidth stream in the m3u8 is chosen. The bitrate is specified in bits per second, as in an HLS manifest.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Bandwidth?: Value<number>;
  /**
   * The number of seconds between retries when an attempt to read a manifest or segment fails.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RetryInterval?: Value<number>;
}

/**
 * The settings for the video codec in the output.
 *
 * The parent of this entity is VideoDescription.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-videocodecsettings.html}
 **/
export interface MediaLiveChannelVideoCodecSettings {
  /**
   * Settings for video encoded with the MPEG-2 codec.
   *
   * _Required_: No
   *
   * _Type_: [Mpeg2Settings](aws-properties-medialive-channel-mpeg2settings.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Mpeg2Settings?: MediaLiveChannelMpeg2Settings;
  /**
   * The settings for the video codec in a frame capture output.
   *
   * _Required_: No
   *
   * _Type_: [FrameCaptureSettings](aws-properties-medialive-channel-framecapturesettings.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FrameCaptureSettings?: MediaLiveChannelFrameCaptureSettings;
  /**
   * The settings for the H.264 codec in the output.
   *
   * _Required_: No
   *
   * _Type_: [H264Settings](aws-properties-medialive-channel-h264settings.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  H264Settings?: MediaLiveChannelH264Settings;
  /**
   * Settings for video encoded with the H265 codec.
   *
   * _Required_: No
   *
   * _Type_: [H265Settings](aws-properties-medialive-channel-h265settings.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  H265Settings?: MediaLiveChannelH265Settings;
}

/**
 * Settings to enable and configure the motion graphics overlay feature in the channel.
 *
 * The parent of this entity is MotionGraphicsConfiguration.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-motiongraphicssettings.html}
 **/
export interface MediaLiveChannelMotionGraphicsSettings {
  /**
   * Settings to configure the motion graphics overlay to use an HTML asset.
   *
   * _Required_: No
   *
   * _Type_: [HtmlMotionGraphicsSettings](aws-properties-medialive-channel-htmlmotiongraphicssettings.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  HtmlMotionGraphicsSettings?: MediaLiveChannelHtmlMotionGraphicsSettings;
}

/**
 * Settings to configure the destination of a Frame Capture output.
 *
 * The parent of this entity is FrameCaptureGroupSettings.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-framecapturecdnsettings.html}
 **/
export interface MediaLiveChannelFrameCaptureCdnSettings {
  /**
   * Sets up Amazon S3 as the destination for this Frame Capture output.
   *
   * _Required_: No
   *
   * _Type_: [FrameCaptureS3Settings](aws-properties-medialive-channel-framecaptures3settings.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FrameCaptureS3Settings?: MediaLiveChannelFrameCaptureS3Settings;
}

/**
 * Complete these fields only if you want to insert watermarks of type Nielsen NAES II (N2) and Nielsen NAES VI (NW).
 *
 * The parent of this entity is NielsenWatermarksSettings.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-nielsennaesiinw.html}
 **/
export interface MediaLiveChannelNielsenNaesIiNw {
  /**
   * Enter the check digit string for the watermark
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CheckDigitString?: Value<string>;
  /**
   * Enter the Nielsen Source ID (SID) to include in the watermark
   *
   * _Required_: No
   *
   * _Type_: Double
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Sid?: Value<number>;
}

/**
 * The configuration of channel behavior when the input is lost.
 *
 * The parent of this entity is GlobalConfiguration.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-inputlossbehavior.html}
 **/
export interface MediaLiveChannelInputLossBehavior {
  /**
   * When the input loss image type is "color," this field specifies the color to use. Value: 6 hex characters that represent the values of RGB.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  InputLossImageColor?: Value<string>;
  /**
   * On input loss, the number of milliseconds to substitute black into the output before switching to the frame specified by inputLossImageType. A value x, where 0 <= x <= 1,000,000 and a value of 1,000,000, is interpreted as infinite.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  BlackFrameMsec?: Value<number>;
  /**
   * Indicates whether to substitute a solid color or a slate into the output after the input loss exceeds blackFrameMsec.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  InputLossImageType?: Value<string>;
  /**
   * When the input loss image type is "slate," these fields specify the parameters for accessing the slate.
   *
   * _Required_: No
   *
   * _Type_: [InputLocation](aws-properties-medialive-channel-inputlocation.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  InputLossImageSlate?: MediaLiveChannelInputLocation;
  /**
   * On input loss, the number of milliseconds to repeat the previous picture before substituting black into the output. A value x, where 0 <= x <= 1,000,000 and a value of 1,000,000, is interpreted as infinite.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RepeatFrameMsec?: Value<number>;
}

/**
 * The settings for an HLS output.
 *
 * The parent of this entity is OutputSettings.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-hlsoutputsettings.html}
 **/
export interface MediaLiveChannelHlsOutputSettings {
  /**
   * A string that is concatenated to the end of the destination file name. Accepts "Format Identifiers":#formatIdentifierParameters.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  NameModifier?: Value<string>;
  /**
   * The settings regarding the underlying stream. These settings are different for audio-only outputs.
   *
   * _Required_: No
   *
   * _Type_: [HlsSettings](aws-properties-medialive-channel-hlssettings.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  HlsSettings?: MediaLiveChannelHlsSettings;
  /**
   * Only applicable when this output is referencing an H.265 video description. Specifies whether MP4 segments should be packaged as HEV1 or HVC1.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  H265PackagingType?: Value<string>;
  /**
   * A string that is concatenated to the end of segment file names.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SegmentModifier?: Value<string>;
}

/**
 * Sets up Amazon S3 as the destination for this Frame Capture output.
 *
 * The parent of this entity is FrameCaptureCdnSettings.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-framecaptures3settings.html}
 **/
export interface MediaLiveChannelFrameCaptureS3Settings {
  /**
   * Specify the canned ACL to apply to each S3 request. Defaults to none.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CannedAcl?: Value<string>;
}

/**
 * Settings to configure the destination of an Archive output.
 *
 * The parent of this entity is ArchiveGroupSettings.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-archivecdnsettings.html}
 **/
export interface MediaLiveChannelArchiveCdnSettings {
  /**
   * Sets up Amazon S3 as the destination for this Archive output.
   *
   * _Required_: No
   *
   * _Type_: [ArchiveS3Settings](aws-properties-medialive-channel-archives3settings.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ArchiveS3Settings?: MediaLiveChannelArchiveS3Settings;
}

/**
 * Selects a specific PID from within a video source.
 *
 * The parent of this entity is VideoSelectorSettings.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-videoselectorpid.html}
 **/
export interface MediaLiveChannelVideoSelectorPid {
  /**
   * Selects a specific PID from within a video source.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Pid?: Value<number>;
}

/**
 * Failover Condition settings. There can be multiple failover conditions inside AutomaticInputFailoverSettings.
 *
 * The parent of this entity is AutomaticInputFailoverSettings.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-failovercondition.html}
 **/
export interface MediaLiveChannelFailoverCondition {
  /**
   * Settings for a specific failover condition.
   *
   * _Required_: No
   *
   * _Type_: [FailoverConditionSettings](aws-properties-medialive-channel-failoverconditionsettings.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FailoverConditionSettings?: MediaLiveChannelFailoverConditionSettings;
}

/**
 * Hdr10 Settings
 *
 * The parents of this entity are H265ColorSpaceSettings (for color space settings in the output) and VideoSelectorColorSpaceSettings (for color space settings in the input).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-hdr10settings.html}
 **/
export interface MediaLiveChannelHdr10Settings {
  /**
   * Maximum Content Light Level An integer metadata value defining the maximum light level, in nits, of any single pixel within an encoded HDR video stream or file.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MaxCll?: Value<number>;
  /**
   * Maximum Frame Average Light Level An integer metadata value defining the maximum average light level, in nits, for any single frame within an encoded HDR video stream or file.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MaxFall?: Value<number>;
}

/**
 * The static key settings.
 *
 * The parent of this entity is KeyProviderSettings.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-statickeysettings.html}
 **/
export interface MediaLiveChannelStaticKeySettings {
  /**
   * The URL of the license server that is used for protecting content.
   *
   * _Required_: No
   *
   * _Type_: [InputLocation](aws-properties-medialive-channel-inputlocation.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  KeyProviderServer?: MediaLiveChannelInputLocation;
  /**
   * The static key value as a 32 character hexadecimal string.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  StaticKeyValue?: Value<string>;
}

/**
 * Information about the audio language to extract.
 *
 * The parent of this entity is AudioSelectorSettings.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-audiolanguageselection.html}
 **/
export interface MediaLiveChannelAudioLanguageSelection {
  /**
   * Selects a specific three-letter language code from within an audio source.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  LanguageCode?: Value<string>;
  /**
   * When set to "strict," the transport stream demux strictly identifies audio streams by their language descriptor. If a PMT update occurs such that an audio stream matching the initially selected language is no longer present, then mute is encoded until the language returns. If set to "loose," then on a PMT update the demux chooses another audio stream in the program with the same stream type if it can't find one with the same language.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  LanguageSelectionPolicy?: Value<string>;
}

/**
 * Settings to configure the caption rectangle for an output captions that will be created using this Teletext source captions.
 *
 * The parent of this entity is TeletextSourceSettings.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-captionrectangle.html}
 **/
export interface MediaLiveChannelCaptionRectangle {
  /**
   * See the description in leftOffset.
   *
   * For topOffset, specify the position of the top edge of the rectangle, as a percentage of the underlying frame height, and relative to the top edge of the frame. For example, "10" means the measurement is 10% of the underlying frame height. The rectangle top edge starts at that position from the top edge of the frame. This field corresponds to tts:origin - Y in the TTML standard.
   *
   * _Required_: No
   *
   * _Type_: Double
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TopOffset?: Value<number>;
  /**
   * See the description in leftOffset.
   *
   * For height, specify the entire height of the rectangle as a percentage of the underlying frame height. For example, "80" means the rectangle height is 80% of the underlying frame height. The topOffset and rectangleHeight must add up to 100% or less. This field corresponds to tts:extent - Y in the TTML standard.
   *
   * _Required_: No
   *
   * _Type_: Double
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Height?: Value<number>;
  /**
   * See the description in leftOffset.
   *
   * For width, specify the entire width of the rectangle as a percentage of the underlying frame width. For example, "80" means the rectangle width is 80% of the underlying frame width. The leftOffset and rectangleWidth must add up to 100% or less. This field corresponds to tts:extent - X in the TTML standard.
   *
   * _Required_: No
   *
   * _Type_: Double
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Width?: Value<number>;
  /**
   * Applies only if you plan to convert these source captions to EBU-TT-D or TTML in an output. (Make sure to leave the default if you don't have either of these formats in the output.) You can define a display rectangle for the captions that is smaller than the underlying video frame. You define the rectangle by specifying the position of the left edge, top edge, bottom edge, and right edge of the rectangle, all within the underlying video frame. The units for the measurements are percentages. If you specify a value for one of these fields, you must specify a value for all of them.
   *
   * For leftOffset, specify the position of the left edge of the rectangle, as a percentage of the underlying frame width, and relative to the left edge of the frame. For example, "10" means the measurement is 10% of the underlying frame width. The rectangle left edge starts at that position from the left edge of the frame. This field corresponds to tts:origin - X in the TTML standard.
   *
   * _Required_: No
   *
   * _Type_: Double
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  LeftOffset?: Value<number>;
}

/**
 * Sets up Amazon S3 as the destination for this Archive output.
 *
 * The parent of this entity is ArchiveCdnSettings.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-archives3settings.html}
 **/
export interface MediaLiveChannelArchiveS3Settings {
  /**
   * Specify the canned ACL to apply to each S3 request. Defaults to none.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CannedAcl?: Value<string>;
}

/**
 * Information about the ARIB captions to extract from the input.
 *
 * The parent of this entity is CaptionSelectorSettings.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-aribsourcesettings.html}
 **/
export interface MediaLiveChannelAribSourceSettings {}

/**
 * MediaLive will perform a failover if audio is not detected in this input for the specified period.
 *
 * The parent of this entity is FailoverConditionSettings.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-audiosilencefailoversettings.html}
 **/
export interface MediaLiveChannelAudioSilenceFailoverSettings {
  /**
   * The name of the audio selector in the input that MediaLive should monitor to detect silence. Select your most important rendition. If you didn't create an audio selector in this input, leave blank.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AudioSelectorName?: Value<string>;
  /**
   * The amount of time (in milliseconds) that the active input must be silent before automatic input failover occurs. Silence is defined as audio loss or audio quieter than -50 dBFS.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AudioSilenceThresholdMsec?: Value<number>;
}

/**
 * The setup of SCTE-35 splice insert handling.
 *
 * The parent of this entity is AvailSettings.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-scte35spliceinsert.html}
 **/
export interface MediaLiveChannelScte35SpliceInsert {
  /**
   * When specified, this offset (in milliseconds) is added to the input ad avail PTS time. This applies only to embedded SCTE 104/35 messages. It doesn't apply to OOB messages.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AdAvailOffset?: Value<number>;
  /**
   * When set to ignore, segment descriptors with webDeliveryAllowedFlag set to 0 no longer trigger blackouts or ad avail slates.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  WebDeliveryAllowedFlag?: Value<string>;
  /**
   * When set to ignore, segment descriptors with noRegionalBlackoutFlag set to 0 no longer trigger blackouts or ad avail slates.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  NoRegionalBlackoutFlag?: Value<string>;
}

/**
 * The settings for remixing audio.
 *
 * The parent of this entity is RemixSettings.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-audiochannelmapping.html}
 **/
export interface MediaLiveChannelAudioChannelMapping {
  /**
   * The index of the output channel that is being produced.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  OutputChannel?: Value<number>;
  /**
   * The indices and gain values for each input channel that should be remixed into this output channel.
   *
   * _Required_: No
   *
   * _Type_: List of [InputChannelLevel](aws-properties-medialive-channel-inputchannellevel.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  InputChannelLevels?: List<MediaLiveChannelInputChannelLevel>;
}

/**
 * Settings to enable specific features. You can't configure these features until you have enabled them in the channel.
 *
 * The parent of this entity is EncoderSettings.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-featureactivations.html}
 **/
export interface MediaLiveChannelFeatureActivations {
  /**
   * Enables the Input Prepare feature. You can create Input Prepare actions in the schedule only if this feature is enabled. If you disable the feature on an existing schedule, make sure that you first delete all input prepare actions from the schedule.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  InputPrepareScheduleActions?: Value<string>;
}

/**
 * The settings for one UDP output.
 *
 * The parent of this entity is OutputSettings.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-udpoutputsettings.html}
 **/
export interface MediaLiveChannelUdpOutputSettings {
  /**
   * The destination address and port number for RTP or UDP packets. These can be unicast or multicast RTP or UDP (for example, rtp://239.10.10.10:5001 or udp://10.100.100.100:5002).
   *
   * _Required_: No
   *
   * _Type_: [OutputLocationRef](aws-properties-medialive-channel-outputlocationref.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Destination?: MediaLiveChannelOutputLocationRef;
  /**
   * The settings for enabling and adjusting Forward Error Correction on UDP outputs.
   *
   * _Required_: No
   *
   * _Type_: [FecOutputSettings](aws-properties-medialive-channel-fecoutputsettings.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FecOutputSettings?: MediaLiveChannelFecOutputSettings;
  /**
   * The settings for the UDP output.
   *
   * _Required_: No
   *
   * _Type_: [UdpContainerSettings](aws-properties-medialive-channel-udpcontainersettings.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ContainerSettings?: MediaLiveChannelUdpContainerSettings;
  /**
   * The UDP output buffering in milliseconds. Larger values increase latency through the transcoder but simultaneously assist the transcoder in maintaining a constant, low-jitter UDP/RTP output while accommodating clock recovery, input switching, input disruptions, picture reordering, and so on.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  BufferMsec?: Value<number>;
}

/**
 * The settings for a MediaPackage output.
 *
 * The parent of this entity is OutputSettings.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-mediapackageoutputsettings.html}
 **/
export interface MediaLiveChannelMediaPackageOutputSettings {}

/**
 * Rec601 Settings
 *
 * The parents of this entity are H264ColorSpaceSettings and H265ColorSpaceSettings.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-rec601settings.html}
 **/
export interface MediaLiveChannelRec601Settings {}

/**
 * The settings for the MPEG-2 codec in the output.
 *
 * The parent of this entity is VideoCodecSetting.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-mpeg2settings.html}
 **/
export interface MediaLiveChannelMpeg2Settings {
  /**
   * Choose the type of color space conversion to apply to the output. For detailed information on setting up both the input and the output to obtain the desired color space in the output, see the section on "MediaLive Features - Video - color space" in the MediaLive User Guide. PASSTHROUGH: Keep the color space of the input content - do not convert it. AUTO:Convert all content that is SD to rec 601, and convert all content that is HD to rec 709.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ColorSpace?: Value<string>;
  /**
   * Complete this field only when afdSignaling is set to FIXED. Enter the AFD value (4 bits) to write on all frames of the video encode.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FixedAfd?: Value<string>;
  /**
   * Relates to the GOP structure. Specifies whether the gopSize is specified in frames or seconds. If you do not plan to change the default gopSize, leave the default. If you specify SECONDS, MediaLive will internally convert the gop size to a frame count.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  GopSizeUnits?: Value<string>;
  /**
   * The framerate numerator. For example, 24000. The framerate is the numerator divided by the denominator. For example, 24000 / 1001 = 23.976 FPS.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FramerateNumerator?: Value<number>;
  /**
   * MPEG2: default is open GOP.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  GopClosedCadence?: Value<number>;
  /**
   * Indicates the AFD values that MediaLive will write into the video encode. If you do not know what AFD signaling is, or if your downstream system has not given you guidance, choose AUTO. AUTO: MediaLive will try to preserve the input AFD value (in cases where multiple AFD values are valid). FIXED: MediaLive will use the value you specify in fixedAFD.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AfdSignaling?: Value<string>;
  /**
   * Sets the pixel aspect ratio for the encode.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DisplayAspectRatio?: Value<string>;
  /**
   * Set the scan type of the output to PROGRESSIVE or INTERLACED (top field first).
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ScanType?: Value<string>;
  /**
   * Determines how MediaLive inserts timecodes in the output video. For detailed information about setting up the input and the output for a timecode, see the section on "MediaLive Features - Timecode configuration" in the MediaLive User Guide. DISABLED: do not include timecodes. GOP_TIMECODE: Include timecode metadata in the GOP header.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TimecodeInsertion?: Value<string>;
  /**
   * Specifies whether to include the color space metadata. The metadata describes the color space that applies to the video (the colorSpace field). We recommend that you insert the metadata.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ColorMetadata?: Value<string>;
  /**
   * description": "The framerate denominator. For example, 1001. The framerate is the numerator divided by the denominator. For example, 24000 / 1001 = 23.976 FPS.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FramerateDenominator?: Value<number>;
  /**
   * Relates to the GOP structure. The GOP size (keyframe interval) in the units specified in gopSizeUnits. If you do not know what GOP is, use the default. If gopSizeUnits is frames, then the gopSize must be an integer and must be greater than or equal to 1. If gopSizeUnits is seconds, the gopSize must be greater than 0, but does not need to be an integer.
   *
   * _Required_: No
   *
   * _Type_: Double
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  GopSize?: Value<number>;
  /**
   * Choose Off to disable adaptive quantization. Or choose another value to enable the quantizer and set its strength. The strengths are: Auto, Off, Low, Medium, High. When you enable this field, MediaLive allows intra-frame quantizers to vary, which might improve visual quality.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AdaptiveQuantization?: Value<string>;
  /**
   * Relates to the GOP structure. If you do not know what GOP is, use the default. FIXED: Set the number of B-frames in each sub-GOP to the value in gopNumBFrames. DYNAMIC: Let MediaLive optimize the number of B-frames in each sub-GOP, to improve visual quality.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SubgopLength?: Value<string>;
  /**
   * Optionally specify a noise reduction filter, which can improve quality of compressed content. If you do not choose a filter, no filter will be applied. TEMPORAL: This filter is useful for both source content that is noisy (when it has excessive digital artifacts) and source content that is clean. When the content is noisy, the filter cleans up the source content before the encoding phase, with these two effects: First, it improves the output video quality because the content has been cleaned up. Secondly, it decreases the bandwidth because MediaLive does not waste bits on encoding noise. When the content is reasonably clean, the filter tends to decrease the bitrate.
   *
   * _Required_: No
   *
   * _Type_: [Mpeg2FilterSettings](aws-properties-medialive-channel-mpeg2filtersettings.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FilterSettings?: MediaLiveChannelMpeg2FilterSettings;
  /**
   * Relates to the GOP structure. The number of B-frames between reference frames. If you do not know what a B-frame is, use the default.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  GopNumBFrames?: Value<number>;
}

/**
 * Information about the audio to extract from the input.
 *
 * The parent of this entity is AudioSelector.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-audioselectorsettings.html}
 **/
export interface MediaLiveChannelAudioSelectorSettings {
  /**
   * The PID of the audio to select.
   *
   * _Required_: No
   *
   * _Type_: [AudioPidSelection](aws-properties-medialive-channel-audiopidselection.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AudioPidSelection?: MediaLiveChannelAudioPidSelection;
  /**
   * The language code of the audio to select.
   *
   * _Required_: No
   *
   * _Type_: [AudioLanguageSelection](aws-properties-medialive-channel-audiolanguageselection.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AudioLanguageSelection?: MediaLiveChannelAudioLanguageSelection;
  /**
   * Information about the audio track to extract.
   *
   * _Required_: No
   *
   * _Type_: [AudioTrackSelection](aws-properties-medialive-channel-audiotrackselection.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AudioTrackSelection?: MediaLiveChannelAudioTrackSelection;
  /**
   * Selector for HLS audio rendition.
   *
   * _Required_: No
   *
   * _Type_: [AudioHlsRenditionSelection](aws-properties-medialive-channel-audiohlsrenditionselection.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AudioHlsRenditionSelection?: MediaLiveChannelAudioHlsRenditionSelection;
}

/**
 * Information about the video to extract from the input. An input can contain only one video selector.
 *
 * The parent of this entity is InputSettings.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-videoselector.html}
 **/
export interface MediaLiveChannelVideoSelector {
  /**
   * Settings to configure color space settings in the incoming video.
   *
   * _Required_: No
   *
   * _Type_: [VideoSelectorColorSpaceSettings](aws-properties-medialive-channel-videoselectorcolorspacesettings.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ColorSpaceSettings?: MediaLiveChannelVideoSelectorColorSpaceSettings;
  /**
   * Information about the video to select from the content.
   *
   * _Required_: No
   *
   * _Type_: [VideoSelectorSettings](aws-properties-medialive-channel-videoselectorsettings.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SelectorSettings?: MediaLiveChannelVideoSelectorSettings;
  /**
   * Specifies the color space of an input. This setting works in tandem with colorSpaceConversion to determine if MediaLive will perform any conversion.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ColorSpace?: Value<string>;
  /**
   * Applies only if colorSpace is a value other than Follow. This field controls how the value in the colorSpace field is used. Fallback means that when the input does include color space data, that data is used, but when the input has no color space data, the value in colorSpace is used. Choose fallback if your input is sometimes missing color space data, but when it does have color space data, that data is correct. Force means to always use the value in colorSpace. Choose force if your input usually has no color space data or might have unreliable color space data.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ColorSpaceUsage?: Value<string>;
}

/**
 * The DVB Time and Date Table (TDT).
 *
 * The parent of this entity is M2tsSettings.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-dvbtdtsettings.html}
 **/
export interface MediaLiveChannelDvbTdtSettings {
  /**
   * The number of milliseconds between instances of this table in the output transport stream.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RepInterval?: Value<number>;
}

/**
 * The settings for an HLS output group.
 *
 * The parent of this entity is OutputGroupSettings.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-hlsgroupsettings.html}
 **/
export interface MediaLiveChannelHlsGroupSettings {
  /**
   * useInputSegmentation has been deprecated. The configured segment size is always used.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SegmentationMode?: Value<string>;
  /**
   * A directory or HTTP destination for the HLS segments, manifest files, and encryption keys (if enabled).
   *
   * _Required_: No
   *
   * _Type_: [OutputLocationRef](aws-properties-medialive-channel-outputlocationref.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Destination?: MediaLiveChannelOutputLocationRef;
  /**
   * The specification to use (RFC-6381 or the default RFC-4281) during m3u8 playlist generation.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CodecSpecification?: Value<string>;
  /**
   * Used with encryptionType. The IV (initialization vector) is a 128-bit number used in conjunction with the key for encrypting blocks. If this setting is "followsSegmentNumber," it causes the IV to change every segment (to match the segment number). If this is set to "explicit," you must enter a constantIv value.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  IvSource?: Value<string>;
  /**
   * Indicates the ID3 frame that has the timecode.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TimedMetadataId3Frame?: Value<string>;
  /**
   * Either a single positive integer version value or a slash-delimited list of version values (1/2/3).
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  KeyFormatVersions?: Value<string>;
  /**
   * ENABLED: The master manifest (.m3u8 file) for each pipeline includes information about both pipelines: first its own media files, then the media files of the other pipeline. This feature allows a playout device that supports stale manifest detection to switch from one manifest to the other, when the current manifest seems to be stale. There are still two destinations and two master manifests, but both master manifests reference the media files from both pipelines. DISABLED: The master manifest (.m3u8 file) for each pipeline includes information about its own pipeline only. For an HLS output group with MediaPackage as the destination, the DISABLED behavior is always followed. MediaPackage regenerates the manifests it serves to players, so a redundant manifest from MediaLive is irrelevant.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RedundantManifest?: Value<string>;
  /**
   * MANIFESTSANDSEGMENTS: Generates manifests (the master manifest, if applicable, and media manifests) for this output group. SEGMENTSONLY: Doesn't generate any manifests for this output group.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  OutputSelection?: Value<string>;
  /**
   * The key provider settings.
   *
   * _Required_: No
   *
   * _Type_: [KeyProviderSettings](aws-properties-medialive-channel-keyprovidersettings.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  KeyProviderSettings?: MediaLiveChannelKeyProviderSettings;
  /**
   * The include or exclude RESOLUTION attribute for a video in the EXT-X-STREAM-INF tag of a variant manifest.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  StreamInfResolution?: Value<string>;
  /**
   * A mapping of up to 4 captions channels to captions languages. This is meaningful only if captionLanguageSetting is set to "insert."
   *
   * _Required_: No
   *
   * _Type_: List of [CaptionLanguageMapping](aws-properties-medialive-channel-captionlanguagemapping.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CaptionLanguageMappings?: List<MediaLiveChannelCaptionLanguageMapping>;
  /**
   * State of HLS ID3 Segment Tagging
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  HlsId3SegmentTagging?: Value<string>;
  /**
   * DISABLED: Don't create an I-frame-only manifest, but do create the master and media manifests (according to the Output Selection field). STANDARD: Create an I-frame-only manifest for each output that contains video, as well as the other manifests (according to the Output Selection field). The I-frame manifest contains a #EXT-X-I-FRAMES-ONLY tag to indicate it is I-frame only, and one or more #EXT-X-BYTERANGE entries identifying the I-frame position. For example, #EXT-X-BYTERANGE:160364@1461888".
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  IFrameOnlyPlaylists?: Value<string>;
  /**
   * Applies only to 608 embedded output captions. Insert: Include CLOSED-CAPTIONS lines in the manifest. Specify at least one language in the CC1 Language Code field. One CLOSED-CAPTION line is added for each Language Code that you specify. Make sure to specify the languages in the order in which they appear in the original source (if the source is embedded format) or the order of the captions selectors (if the source is other than embedded). Otherwise, languages in the manifest will not match properly with the output captions. None: Include the CLOSED-CAPTIONS=NONE line in the manifest. Omit: Omit any CLOSED-CAPTIONS line from the manifest.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CaptionLanguageSetting?: Value<string>;
  /**
   * Applies only if the Mode field is LIVE. Specifies the number of media segments (.ts files) to retain in the destination directory.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  KeepSegments?: Value<number>;
  /**
   * Used with encryptionType. This is a 128-bit, 16-byte hex value that is represented by a 32-character text string. If ivSource is set to "explicit," this parameter is required and is used as the IV for encryption.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ConstantIv?: Value<string>;
  /**
   * Places segments in subdirectories.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DirectoryStructure?: Value<string>;
  /**
   * Encrypts the segments with the specified encryption scheme. Exclude this parameter if you don't want encryption.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  EncryptionType?: Value<string>;
  /**
   * Chooses one or more ad marker types to pass SCTE35 signals through to this group of Apple HLS outputs.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AdMarkers?: List<Value<string>>;
  /**
   * The parameters that control interactions with the CDN.
   *
   * _Required_: No
   *
   * _Type_: [HlsCdnSettings](aws-properties-medialive-channel-hlscdnsettings.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  HlsCdnSettings?: MediaLiveChannelHlsCdnSettings;
  /**
   * Applies only if the Mode field is LIVE. Specifies the maximum number of segments in the media manifest file. After this maximum, older segments are removed from the media manifest. This number must be less than or equal to the Keep Segments field.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  IndexNSegments?: Value<number>;
  /**
   * Specifies whether to insert EXT-X-DISCONTINUITY tags in the HLS child manifests for this output group. Typically, choose Insert because these tags are required in the manifest (according to the HLS specification) and serve an important purpose. Choose Never Insert only if the downstream system is doing real-time failover (without using the MediaLive automatic failover feature) and only if that downstream system has advised you to exclude the tags.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DiscontinuityTags?: Value<string>;
  /**
   * A parameter that controls output group behavior on an input loss.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  InputLossAction?: Value<string>;
  /**
   * If "vod," all segments are indexed and kept permanently in the destination and manifest. If "live," only the number segments specified in keepSegments and indexNSegments are kept. Newer segments replace older segments, which might prevent players from rewinding all the way to the beginning of the channel. VOD mode uses HLS EXT-X-PLAYLIST-TYPE of EVENT while the channel is running, converting it to a "VOD" type manifest on completion of the stream.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Mode?: Value<string>;
  /**
   * SEGMENTEDFILES: Emits the program as segments -multiple .ts media files. SINGLEFILE: Applies only if the Mode field is VOD. Emits the program as a single .ts media file. The media manifest includes #EXT-X-BYTERANGE tags to index segments for playback. A typical use for this value is when sending the output to AWS Elemental MediaConvert, which can accept only a single media file. Playback while the channel is running is not guaranteed due to HTTP server caching.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TsFileMode?: Value<string>;
  /**
   * Optional. One value per output group. Complete this field only if you are completing Base URL manifest A, and the downstream system has notified you that the child manifest files for pipeline 1 of all outputs are in a location different from the child manifest files for pipeline 0.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  BaseUrlManifest1?: Value<string>;
  /**
   * When set to "disabled," sets the #EXT-X-ALLOW-CACHE:no tag in the manifest, which prevents clients from saving media segments for later replay.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ClientCache?: Value<string>;
  /**
   * When set, minimumSegmentLength is enforced by looking ahead and back within the specified range for a nearby avail and extending the segment size if needed.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MinSegmentLength?: Value<number>;
  /**
   * Specifies how the key is represented in the resource identified by the URI. If the parameter is absent, an implicit value of "identity" is used. A reverse DNS string can also be specified.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  KeyFormat?: Value<string>;
  /**
   * Used with encryptionType. The IV (initialization vector) is a 128-bit number used in conjunction with the key for encrypting blocks. If set to "include," the IV is listed in the manifest. Otherwise, the IV is not in the manifest.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  IvInManifest?: Value<string>;
  /**
   * Optional. One value per output group. This field is required only if you are completing Base URL content A, and the downstream system has notified you that the media files for pipeline 1 of all outputs are in a location different from the media files for pipeline 0.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  BaseUrlContent1?: Value<string>;
  /**
   * Specifies the algorithm used to drive the HLS EXT-X-PROGRAM-DATE-TIME clock. Options include: INITIALIZE_FROM_OUTPUT_TIMECODE: The PDT clock is initialized as a function of the first output timecode, then incremented by the EXTINF duration of each encoded segment. SYSTEM_CLOCK: The PDT clock is initialized as a function of the UTC wall clock, then incremented by the EXTINF duration of each encoded segment. If the PDT clock diverges from the wall clock by more than 500ms, it is resynchronized to the wall clock.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ProgramDateTimeClock?: Value<string>;
  /**
   * When set to gzip, compresses HLS playlist.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ManifestCompression?: Value<string>;
  /**
   * Indicates whether the output manifest should use a floating point or integer values for segment duration.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ManifestDurationFormat?: Value<string>;
  /**
   * The timed metadata interval, in seconds.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TimedMetadataId3Period?: Value<number>;
  /**
   * Specifies whether to include the final (incomplete) segment in the media output when the pipeline stops producing output because of a channel stop, a channel pause or a loss of input to the pipeline. Auto means that MediaLive decides whether to include the final segment, depending on the channel class and the types of output groups. Suppress means to never include the incomplete segment. We recommend you choose Auto and let MediaLive control the behavior.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  IncompleteSegmentBehavior?: Value<string>;
  /**
   * The period of insertion of the EXT-X-PROGRAM-DATE-TIME entry, in seconds.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ProgramDateTimePeriod?: Value<number>;
  /**
   * The length of the MPEG-2 Transport Stream segments to create, in seconds. Note that segments will end on the next keyframe after this number of seconds, so the actual segment length might be longer.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SegmentLength?: Value<number>;
  /**
   * Provides an extra millisecond delta offset to fine tune the timestamps.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TimestampDeltaMilliseconds?: Value<number>;
  /**
   * Includes or excludes the EXT-X-PROGRAM-DATE-TIME tag in .m3u8 manifest files. The value is calculated as follows: Either the program date and time are initialized using the input timecode source, or the time is initialized using the input timecode source and the date is initialized using the timestampOffset.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ProgramDateTime?: Value<string>;
  /**
   * The number of segments to write to a subdirectory before starting a new one. For this setting to have an effect, directoryStructure must be subdirectoryPerStream.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SegmentsPerSubdirectory?: Value<number>;
  /**
   * A partial URI prefix that will be prepended to each output in the media .m3u8 file. The partial URI prefix can be used if the base manifest is delivered from a different URL than the main .m3u8 file.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  BaseUrlContent?: Value<string>;
  /**
   * A partial URI prefix that will be prepended to each output in the media .m3u8 file. The partial URI prefix can be used if the base manifest is delivered from a different URL than the main .m3u8 file.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  BaseUrlManifest?: Value<string>;
}

/**
 * The configuration information for this output.
 *
 * The parent of this entity is OutputDestination.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-outputdestinationsettings.html}
 **/
export interface MediaLiveChannelOutputDestinationSettings {
  /**
   * The stream name for the content. This applies only to RTMP outputs.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  StreamName?: Value<string>;
  /**
   * The user name to connect to the downstream system. This applies only if the downstream system requires credentials.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Username?: Value<string>;
  /**
   * The password parameter that holds the password for accessing the downstream system. This password parameter applies only if the downstream system requires credentials.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PasswordParam?: Value<string>;
  /**
   * The URL for the destination.
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
 * The settings for a Teletext captions output encode.
 *
 * The parent of this entity is CaptionDestinationSettings.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-teletextdestinationsettings.html}
 **/
export interface MediaLiveChannelTeletextDestinationSettings {}

/**
 * The configuration of DVB NIT.
 *
 * The parent of this entity is M2tsSettings.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-dvbnitsettings.html}
 **/
export interface MediaLiveChannelDvbNitSettings {
  /**
   * The network name text placed in the networkNameDescriptor inside the Network Information Table (NIT). The maximum length is 256 characters.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  NetworkName?: Value<string>;
  /**
   * The number of milliseconds between instances of this table in the output transport stream.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RepInterval?: Value<number>;
  /**
   * The numeric value placed in the Network Information Table (NIT).
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  NetworkId?: Value<number>;
}

/**
 * The settings for FEC.
 *
 * The parent of this entity is UdpOutputSettings.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-fecoutputsettings.html}
 **/
export interface MediaLiveChannelFecOutputSettings {
  /**
   * The parameter L from SMPTE 2022-1. The width of the FEC protection matrix. Must be between 1 and 20, inclusive. If only Column FEC is used, then larger values increase robustness. If Row FEC is used, then this is the number of transport stream packets per row error correction packet, and the value must be between 4 and 20, inclusive, if includeFec is columnAndRow. If includeFec is column, this value must be 1 to 20, inclusive.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RowLength?: Value<number>;
  /**
   * The parameter D from SMPTE 2022-1. The height of the FEC protection matrix. The number of transport stream packets per column error correction packet. The number must be between 4 and 20, inclusive.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ColumnDepth?: Value<number>;
  /**
   * Enables column only or column and row-based FEC.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  IncludeFec?: Value<string>;
}

/**
 * Information about the ancillary captions to extract from the input.
 *
 * The parent of this entity is CaptionSelectorSettings.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-ancillarysourcesettings.html}
 **/
export interface MediaLiveChannelAncillarySourceSettings {
  /**
   * Specifies the number (1 to 4) of the captions channel you want to extract from the ancillary captions. If you plan to convert the ancillary captions to another format, complete this field. If you plan to choose Embedded as the captions destination in the output (to pass through all the channels in the ancillary captions), leave this field blank because MediaLive ignores the field.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SourceAncillaryChannelNumber?: Value<number>;
}

/**
 * Information about one caption to extract from the input.
 *
 * The parent of this entity is InputSettings.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-captionselector.html}
 **/
export interface MediaLiveChannelCaptionSelector {
  /**
   * When specified, this field indicates the three-letter language code of the captions track to extract from the source.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  LanguageCode?: Value<string>;
  /**
   * Information about the specific audio to extract from the input.
   *
   * _Required_: No
   *
   * _Type_: [CaptionSelectorSettings](aws-properties-medialive-channel-captionselectorsettings.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SelectorSettings?: MediaLiveChannelCaptionSelectorSettings;
  /**
   * The name identifier for a captions selector. This name is used to associate this captions selector with one or more captions descriptions. Names must be unique within a channel.
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
 * The settings for RTMPCaptionInfo captions encode in the output.
 *
 * The parent of this entity is CaptionDestinationSettings.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-rtmpcaptioninfodestinationsettings.html}
 **/
export interface MediaLiveChannelRtmpCaptionInfoDestinationSettings {}

/**
 * The configuration of the M2TS in the output.
 *
 * The parents of this entity are ArchiveContainerSettings and UdpContainerSettings.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-m2tssettings.html}
 **/
export interface MediaLiveChannelM2tsSettings {
  /**
   * The PID for the input source ETV Platform data to this output. You can enter it as a decimal or hexadecimal value. Valid values are 32 (or 0x20) to 8182 (or 0x1ff6).
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  EtvPlatformPid?: Value<string>;
  /**
   * The number of milliseconds between instances of this table in the output transport stream. Valid values are 0, 10..1000.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PatInterval?: Value<number>;
  /**
   * The value of the program number field in the Program Map Table (PMT).
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ProgramNum?: Value<number>;
  /**
   * When VBR, does not insert null packets into the transport stream to fill the specified bitrate. The bitrate setting acts as the maximum bitrate when VBR is set.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RateMode?: Value<string>;
  /**
   * The PID for the input source KLV data to this output. Multiple values are accepted, and can be entered in ranges or by comma separation. You can enter the value as a decimal or hexadecimal value. Each PID specified must be in the range of 32 (or 0x20)..8182 (or 0x1ff6).
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  KlvDataPids?: Value<string>;
  /**
   * The value, in bits per second, of extra null packets to insert into the transport stream. This can be used if a downstream encryption system requires periodic null packets.
   *
   * _Required_: No
   *
   * _Type_: Double
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  NullPacketBitrate?: Value<number>;
  /**
   * The number of milliseconds between instances of this table in the output transport stream. Valid values are 0, 10..1000.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PmtInterval?: Value<number>;
  /**
   * The PID for ARIB Captions in the transport stream. You can enter the value as a decimal or hexadecimal value. Valid values are 32 (or 0x20)..8182 (or 0x1ff6).
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AribCaptionsPid?: Value<string>;
  /**
   * Includes or excludes the ES Rate field in the PES header.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  EsRateInPes?: Value<string>;
  /**
   * The PID of the elementary video stream in the transport stream. You can enter the value as a decimal or hexadecimal value. Valid values are 32 (or 0x20)..8182 (or 0x1ff6).
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  VideoPid?: Value<string>;
  /**
   * The value of the transport stream ID field in the Program Map Table (PMT).
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TransportStreamId?: Value<number>;
  /**
   * Controls placement of EBP on audio PIDs. If set to videoAndAudioPids, EBP markers are placed on the video PID and all audio PIDs. If set to videoPid, EBP markers are placed on only the video PID.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  EbpPlacement?: Value<string>;
  /**
   * The PID for the input source DVB Subtitle data to this output. Multiple values are accepted, and can be entered in ranges and/or by comma separation. You can enter the value as a decimal or hexadecimal value. Each PID specified must be in the range of 32 (or 0x20)..8182 (or 0x1ff6).
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DvbSubPids?: Value<string>;
  /**
   * The segmentation style parameter controls how segmentation markers are inserted into the transport stream. With avails, it is possible that segments might be truncated, which can influence where future segmentation markers are inserted. When a segmentation style of resetCadence is selected and a segment is truncated due to an avail, we will reset the segmentation cadence. This means the subsequent segment will have a duration of $segmentationTime seconds. When a segmentation style of maintainCadence is selected and a segment is truncated due to an avail, we will not reset the segmentation cadence. This means the subsequent segment will likely be truncated as well. However, all segments after that will have a duration of $segmentationTime seconds. Note that EBP lookahead is a slight exception to this rule.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SegmentationStyle?: Value<string>;
  /**
   * The PID of the SCTE-35 stream in the transport stream. You can enter the value as a decimal or hexadecimal value. Valid values are 32 (or 0x20)..8182 (or 0x1ff6).
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Scte35Pid?: Value<string>;
  /**
   * When set to atsc, uses stream type = 0x81 for AC3 and stream type = 0x87 for EAC3. When set to dvb, uses stream type = 0x06.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AudioStreamType?: Value<string>;
  /**
   * If set to passthrough, passes any KLV data from the input source to this output.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Klv?: Value<string>;
  /**
   * When set, enforces that Encoder Boundary Points do not come within the specified time interval of each other by looking ahead at input video. If another EBP is going to come in within the specified time interval, the current EBP is not emitted, and the segment is "stretched" to the next marker. The lookahead value does not add latency to the system. The channel must be configured elsewhere to create sufficient latency to make the lookahead accurate.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  EbpLookaheadMs?: Value<number>;
  /**
   * Inserts DVB Time and Date Table (TDT) at the specified table repetition interval.
   *
   * _Required_: No
   *
   * _Type_: [DvbTdtSettings](aws-properties-medialive-channel-dvbtdtsettings.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DvbTdtSettings?: MediaLiveChannelDvbTdtSettings;
  /**
   * When set to passthrough, timed metadata is passed through from input to output.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TimedMetadataBehavior?: Value<string>;
  /**
   * When videoAndFixedIntervals is selected, audio EBP markers are added to partitions 3 and 4. The interval between these additional markers is fixed, and is slightly shorter than the video EBP marker interval. This is only available when EBP Cablelabs segmentation markers are selected. Partitions 1 and 2 always follow the video interval.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  EbpAudioInterval?: Value<string>;
  /**
   * The length in seconds of each fragment. This is used only with EBP markers.
   *
   * _Required_: No
   *
   * _Type_: Double
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FragmentTime?: Value<number>;
  /**
   * The PID for the input source DVB Teletext data to this output. You can enter the value as a decimal or hexadecimal value. Valid values are 32 (or 0x20)..8182 (or 0x1ff6).
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DvbTeletextPid?: Value<string>;
  /**
   * Optionally passes SCTE-35 signals from the input source to this output.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Scte35Control?: Value<string>;
  /**
   * The maximum time, in milliseconds, between Program Clock References (PCRs) inserted into the transport stream.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PcrPeriod?: Value<number>;
  /**
   * If set to passthrough, Nielsen inaudible tones for media tracking will be detected in the input audio and an equivalent ID3 tag will be inserted in the output.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  NielsenId3Behavior?: Value<string>;
  /**
   * The PID of the Program Clock Reference (PCR) in the transport stream. When no value is given, MediaLive assigns the same value as the video PID. You can enter the value as a decimal or hexadecimal value. Valid values are 32 (or 0x20)..8182 (or 0x1ff6).
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PcrPid?: Value<string>;
  /**
   * The length, in seconds, of each segment. This is required unless markers is set to None_.
   *
   * _Required_: No
   *
   * _Type_: Double
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SegmentationTime?: Value<number>;
  /**
   * When set to enabled, generates captionServiceDescriptor in PMT.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CcDescriptor?: Value<string>;
  /**
   * The number of audio frames to insert for each PES packet.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AudioFramesPerPes?: Value<number>;
  /**
   * When set to drop, the output audio streams are removed from the program if the selected input audio stream is removed from the input. This allows the output audio configuration to dynamically change based on the input configuration. If this is set to encodeSilence, all output audio streams will output encoded silence when not connected to an active input stream.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AbsentInputAudioBehavior?: Value<string>;
  /**
   * The output bitrate of the transport stream in bits per second. Setting to 0 lets the muxer automatically determine the appropriate bitrate.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Bitrate?: Value<number>;
  /**
   * The PID for the Program Map Table (PMT) in the transport stream. You can enter the value as a decimal or hexadecimal value. Valid values are 32 (or 0x20)..8182 (or 0x1ff6).
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PmtPid?: Value<string>;
  /**
   * The PID for the input source SCTE-27 data to this output. Multiple values are accepted, and can be entered in ranges or by comma separation. You can enter the value as a decimal or hexadecimal value. Each PID specified must be in the range of 32 (or 0x20)..8182 (or 0x1ff6).
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Scte27Pids?: Value<string>;
  /**
   * Inserts segmentation markers at each segmentationTime period. raiSegstart sets the Random Access Indicator bit in the adaptation field. raiAdapt sets the RAI bit and adds the current timecode in the private data bytes. psiSegstart inserts PAT and PMT tables at the start of segments. ebp adds Encoder Boundary Point information to the adaptation field as per OpenCable specification OC-SP-EBP-I01-130118. ebpLegacy adds Encoder Boundary Point information to the adaptation field using a legacy proprietary format.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SegmentationMarkers?: Value<string>;
  /**
   * Inserts a DVB Network Information Table (NIT) at the specified table repetition interval.
   *
   * _Required_: No
   *
   * _Type_: [DvbNitSettings](aws-properties-medialive-channel-dvbnitsettings.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DvbNitSettings?: MediaLiveChannelDvbNitSettings;
  /**
   * Inserts a DVB Service Description Table (SDT) at the specified table repetition interval.
   *
   * _Required_: No
   *
   * _Type_: [DvbSdtSettings](aws-properties-medialive-channel-dvbsdtsettings.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DvbSdtSettings?: MediaLiveChannelDvbSdtSettings;
  /**
   * The PID for input source ETV Signal data to this output. You can enter the value as a decimal or hexadecimal value. Valid values are 32 (or 0x20)..8182 (or 0x1ff6).
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  EtvSignalPid?: Value<string>;
  /**
   * When set to enabled, uses ARIB-compliant field muxing and removes video descriptor.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Arib?: Value<string>;
  /**
   * If set to multiplex, uses the multiplex buffer model for accurate interleaving. Setting to bufferModel to none can lead to lower latency, but low-memory devices might not be able to play back the stream without interruptions.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  BufferModel?: Value<string>;
  /**
   * This field is unused and deprecated.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  EcmPid?: Value<string>;
  /**
   * The PID of the timed metadata stream in the transport stream. You can enter the value as a decimal or hexadecimal value. Valid values are 32 (or 0x20)..8182 (or 0x1ff6).
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TimedMetadataPid?: Value<string>;
  /**
   * The PID of the elementary audio streams in the transport stream. Multiple values are accepted, and can be entered in ranges or by comma separation. You can enter the value as a decimal or hexadecimal value. Each PID specified must be in the range of 32 (or 0x20)..8182 (or 0x1ff6).
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AudioPids?: Value<string>;
  /**
   * When set to dvb, uses the DVB buffer model for Dolby Digital audio. When set to atsc, the ATSC model is used.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AudioBufferModel?: Value<string>;
  /**
   * If set to passthrough, passes any EBIF data from the input source to this output.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Ebif?: Value<string>;
  /**
   * If set to auto, The PID number used for ARIB Captions will be auto-selected from unused PIDs. If set to useConfigured, ARIB captions will be on the configured PID number.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AribCaptionsPidControl?: Value<string>;
  /**
   * When set to pcrEveryPesPacket, a Program Clock Reference value is inserted for every Packetized Elementary Stream (PES) header. This parameter is effective only when the PCR PID is the same as the video or audio elementary stream.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PcrControl?: Value<string>;
}

/**
 * The settings to configure Nielsen watermarks.
 *
 * The parent of this entity is EncoderSettings.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-nielsenconfiguration.html}
 **/
export interface MediaLiveChannelNielsenConfiguration {
  /**
   * Enter the Distributor ID assigned to your organization by Nielsen.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DistributorId?: Value<string>;
  /**
   * Enables Nielsen PCM to ID3 tagging
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  NielsenPcmToId3Tagging?: Value<string>;
}

/**
 * Destination settings for a MediaPackage output.
 *
 * The parent of this entity is OutputDestination.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-mediapackageoutputdestinationsettings.html}
 **/
export interface MediaLiveChannelMediaPackageOutputDestinationSettings {
  /**
   * The ID of the channel in MediaPackage that is the destination for this output group. You don't need to specify the individual inputs in MediaPackage; MediaLive handles the connection of the two MediaLive pipelines to the two MediaPackage inputs. The MediaPackage channel and MediaLive channel must be in the same Region.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ChannelId?: Value<string>;
}

/**
 * A reference to an OutputDestination ID that is defined in the channel.
 *
 * This entity is used by ArchiveGroupSettings, FrameCaptureGroupSettings, HlsGroupSettings, MediaPackageGroupSettings, MSSmoothGroupSettings, RtmpOutputSettings, and UdpOutputSettings.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-outputlocationref.html}
 **/
export interface MediaLiveChannelOutputLocationRef {
  /**
   * A reference ID for this destination.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DestinationRefId?: Value<string>;
}

/**
 * Settings to configure the conditions that will define the input as unhealthy and that will make MediaLive fail over to the other input in the input failover pair.
 *
 * The parent of this entity is InputAttachment.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-automaticinputfailoversettings.html}
 **/
export interface MediaLiveChannelAutomaticInputFailoverSettings {
  /**
   * A list of failover conditions. If any of these conditions occur, MediaLive will perform a failover to the other input.
   *
   * _Required_: No
   *
   * _Type_: List of [FailoverCondition](aws-properties-medialive-channel-failovercondition.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FailoverConditions?: List<MediaLiveChannelFailoverCondition>;
  /**
   * Input preference when deciding which input to make active when a previously failed input has recovered.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  InputPreference?: Value<string>;
  /**
   * The input ID of the secondary input in the automatic input failover pair.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SecondaryInputId?: Value<string>;
  /**
   * This clear time defines the requirement a recovered input must meet to be considered healthy. The input must have no failover conditions for this length of time. Enter a time in milliseconds. This value is particularly important if the input_preference for the failover pair is set to PRIMARY_INPUT_PREFERRED, because after this time, MediaLive will switch back to the primary input.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ErrorClearTimeMsec?: Value<number>;
}

/**
 * The settings for a frame capture output group.
 *
 * The parent of this entity is OutputGroupSettings.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-framecapturegroupsettings.html}
 **/
export interface MediaLiveChannelFrameCaptureGroupSettings {
  /**
   * Settings to configure the destination of a Frame Capture output.
   *
   * _Required_: No
   *
   * _Type_: [FrameCaptureCdnSettings](aws-properties-medialive-channel-framecapturecdnsettings.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FrameCaptureCdnSettings?: MediaLiveChannelFrameCaptureCdnSettings;
  /**
   * The destination for the frame capture files. The destination is either the URI for an Amazon S3 bucket and object, plus a file name prefix (for example, s3ssl://sportsDelivery/highlights/20180820/curling_) or the URI for a MediaStore container, plus a file name prefix (for example, mediastoressl://sportsDelivery/20180820/curling_). The final file names consist of the prefix from the destination field (for example, "curling_") + name modifier + the counter (5 digits, starting from 00001) + extension (which is always .jpg). For example, curlingLow.00001.jpg.
   *
   * _Required_: No
   *
   * _Type_: [OutputLocationRef](aws-properties-medialive-channel-outputlocationref.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Destination?: MediaLiveChannelOutputLocationRef;
}

/**
 * The archive output settings.
 *
 * The parent of this entity is OutputSettings.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-archiveoutputsettings.html}
 **/
export interface MediaLiveChannelArchiveOutputSettings {
  /**
   * The output file extension. If excluded, this is auto-selected from the container type.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Extension?: Value<string>;
  /**
   * A string that is concatenated to the end of the destination file name. The string is required for multiple outputs of the same type.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  NameModifier?: Value<string>;
  /**
   * The settings that are specific to the container type of the file.
   *
   * _Required_: No
   *
   * _Type_: [ArchiveContainerSettings](aws-properties-medialive-channel-archivecontainersettings.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ContainerSettings?: MediaLiveChannelArchiveContainerSettings;
}

/**
 * The container for WAV audio in the output group.
 *
 * The parent of this entity is ArchiveContainerSettings.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-rawsettings.html}
 **/
export interface MediaLiveChannelRawSettings {}

/**
 * Settings to configure Nielsen Watermarks in the audio encode.
 *
 * The parent of this entity is AudioWatermarkSettings.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-nielsenwatermarkssettings.html}
 **/
export interface MediaLiveChannelNielsenWatermarksSettings {
  /**
   * Choose the distribution types that you want to assign to the watermarks: - PROGRAM_CONTENT - FINAL_DISTRIBUTOR
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  NielsenDistributionType?: Value<string>;
  /**
   * Complete these fields only if you want to insert watermarks of type Nielsen CBET
   *
   * _Required_: No
   *
   * _Type_: [NielsenCBET](aws-properties-medialive-channel-nielsencbet.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  NielsenCbetSettings?: MediaLiveChannelNielsenCBET;
  /**
   * Complete these fields only if you want to insert watermarks of type Nielsen NAES II (N2) and Nielsen NAES VI (NW).
   *
   * _Required_: No
   *
   * _Type_: [NielsenNaesIiNw](aws-properties-medialive-channel-nielsennaesiinw.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  NielsenNaesIiNwSettings?: MediaLiveChannelNielsenNaesIiNw;
}

/**
 * An input to attach to this channel.
 *
 * This entity is at the top level in the channel.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-inputattachment.html}
 **/
export interface MediaLiveChannelInputAttachment {
  /**
   * A name for the attachment. This is required if you want to use this input in an input switch action.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  InputAttachmentName?: Value<string>;
  /**
   * The ID of the input to attach.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  InputId?: Value<string>;
  /**
   * Settings to implement automatic input failover in this input.
   *
   * _Required_: No
   *
   * _Type_: [AutomaticInputFailoverSettings](aws-properties-medialive-channel-automaticinputfailoversettings.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AutomaticInputFailoverSettings?: MediaLiveChannelAutomaticInputFailoverSettings;
  /**
   * Information about the content to extract from the input and about the general handling of the content.
   *
   * _Required_: No
   *
   * _Type_: [InputSettings](aws-properties-medialive-channel-inputsettings.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  InputSettings?: MediaLiveChannelInputSettings;
}

/**
 * The configuration of an HLS output that is a standard output (not an audio-only output).
 *
 * The parent of this entity is HlsSettings.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-standardhlssettings.html}
 **/
export interface MediaLiveChannelStandardHlsSettings {
  /**
   * Lists all the audio groups that are used with the video output stream. This inputs all the audio GROUP-IDs that are associated with the video, separated by a comma (,).
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AudioRenditionSets?: Value<string>;
  /**
   * Settings for the M3U8 container.
   *
   * _Required_: No
   *
   * _Type_: [M3u8Settings](aws-properties-medialive-channel-m3u8settings.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  M3u8Settings?: MediaLiveChannelM3u8Settings;
}

/**
 * Information about the embedded captions to extract from the input.
 *
 * The parent of this entity is CaptionSelectorSettings.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-embeddedsourcesettings.html}
 **/
export interface MediaLiveChannelEmbeddedSourceSettings {
  /**
   * Specifies the 608/708 channel number within the video track from which to extract captions. This is unused for passthrough.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Source608ChannelNumber?: Value<number>;
  /**
   * Set to "auto" to handle streams with intermittent or non-aligned SCTE-20 and embedded captions.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Scte20Detection?: Value<string>;
  /**
   * This field is unused and deprecated.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Source608TrackNumber?: Value<number>;
  /**
   * If this is upconvert, 608 data is both passed through the "608 compatibility bytes" fields of the 708 wrapper as well as translated into 708. If 708 data is present in the source content, it is discarded.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Convert608To708?: Value<string>;
}

/**
 * The frame capture output settings.
 *
 * The parent of this entity is OutputSettings.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-framecaptureoutputsettings.html}
 **/
export interface MediaLiveChannelFrameCaptureOutputSettings {
  /**
   * Required if the output group contains more than one output. This modifier forms part of the output file name.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  NameModifier?: Value<string>;
}

/**
 * The settings for the ad avail setup in the output.
 *
 * The parent of this entity is AvailConfiguration.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-availsettings.html}
 **/
export interface MediaLiveChannelAvailSettings {
  /**
   * The setup for SCTE-35 splice insert handling.
   *
   * _Required_: No
   *
   * _Type_: [Scte35SpliceInsert](aws-properties-medialive-channel-scte35spliceinsert.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Scte35SpliceInsert?: MediaLiveChannelScte35SpliceInsert;
  /**
   * The setup for SCTE-35 time signal APOS handling.
   *
   * _Required_: No
   *
   * _Type_: [Scte35TimeSignalApos](aws-properties-medialive-channel-scte35timesignalapos.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Scte35TimeSignalApos?: MediaLiveChannelScte35TimeSignalApos;
}

/**
 * Configuration of a Multiplex output.
 *
 * The parent of this entity is OutputSettings.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-multiplexoutputsettings.html}
 **/
export interface MediaLiveChannelMultiplexOutputSettings {
  /**
   * Destination is a Multiplex.
   *
   * _Required_: No
   *
   * _Type_: [OutputLocationRef](aws-properties-medialive-channel-outputlocationref.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Destination?: MediaLiveChannelOutputLocationRef;
}

/**
 * H265 Color Space Settings
 *
 * The parent of this entity is H265Settings.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-h265colorspacesettings.html}
 **/
export interface MediaLiveChannelH265ColorSpaceSettings {
  /**
   * Settings to configure the handling of Rec601 color space.
   *
   * _Required_: No
   *
   * _Type_: [Rec601Settings](aws-properties-medialive-channel-rec601settings.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Rec601Settings?: MediaLiveChannelRec601Settings;
  /**
   * Settings to configure the handling of Rec709 color space.
   *
   * _Required_: No
   *
   * _Type_: [Rec709Settings](aws-properties-medialive-channel-rec709settings.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Rec709Settings?: MediaLiveChannelRec709Settings;
  /**
   * Passthrough applies no color space conversion to the output.
   *
   * _Required_: No
   *
   * _Type_: [ColorSpacePassthroughSettings](aws-properties-medialive-channel-colorspacepassthroughsettings.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ColorSpacePassthroughSettings?: MediaLiveChannelColorSpacePassthroughSettings;
  /**
   * Settings to configure the handling of HDR10 color space.
   *
   * _Required_: No
   *
   * _Type_: [Hdr10Settings](aws-properties-medialive-channel-hdr10settings.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Hdr10Settings?: MediaLiveChannelHdr10Settings;
}

/**
 * Selector for HLS audio rendition.
 *
 * The parent of this entity is AudioSelectorSettings.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-audiohlsrenditionselection.html}
 **/
export interface MediaLiveChannelAudioHlsRenditionSelection {
  /**
   * Specifies the GROUP-ID in the #EXT-X-MEDIA tag of the target HLS audio rendition.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  GroupId?: Value<string>;
  /**
   * Specifies the NAME in the #EXT-X-MEDIA tag of the target HLS audio rendition.
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
 * The settings for normalizing video.
 *
 * The parent of this entity is AudioDescription.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-audionormalizationsettings.html}
 **/
export interface MediaLiveChannelAudioNormalizationSettings {
  /**
   * The Target LKFS(loudness) to adjust volume to. If no value is entered, a default value is used according to the chosen algorithm. The CALM Act (1770-1) recommends a target of -24 LKFS. The EBU R-128 specification (1770-2) recommends a target of -23 LKFS.
   *
   * _Required_: No
   *
   * _Type_: Double
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TargetLkfs?: Value<number>;
  /**
   * The audio normalization algorithm to use. itu17701 conforms to the CALM Act specification. itu17702 conforms to the EBU R-128 specification.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Algorithm?: Value<string>;
  /**
   * When set to correctAudio, the output audio is corrected using the chosen algorithm. If set to measureOnly, the audio is measured but not adjusted.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AlgorithmControl?: Value<string>;
}

/**
 * Audio Watermark Settings
 *
 * The parent of this entity is AudioDescription.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-audiowatermarksettings.html}
 **/
export interface MediaLiveChannelAudioWatermarkSettings {
  /**
   * Settings to configure Nielsen Watermarks in the audio encode
   *
   * _Required_: No
   *
   * _Type_: [NielsenWatermarksSettings](aws-properties-medialive-channel-nielsenwatermarkssettings.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  NielsenWatermarksSettings?: MediaLiveChannelNielsenWatermarksSettings;
}

/**
 * MediaLive will perform a failover if content is not detected in this input for the specified period.
 *
 * The parent of this entity is FailoverConditionSettings.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-inputlossfailoversettings.html}
 **/
export interface MediaLiveChannelInputLossFailoverSettings {
  /**
   * The amount of time (in milliseconds) that no input is detected. After that time, an input failover will occur.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  InputLossThresholdMsec?: Value<number>;
}

/**
 * Information about one audio to extract from the input.
 *
 * The parent of this entity is InputSettings.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-audioselector.html}
 **/
export interface MediaLiveChannelAudioSelector {
  /**
   * Information about the specific audio to extract from the input.
   *
   * _Required_: No
   *
   * _Type_: [AudioSelectorSettings](aws-properties-medialive-channel-audioselectorsettings.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SelectorSettings?: MediaLiveChannelAudioSelectorSettings;
  /**
   * A name for this AudioSelector.
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
 * Used to extract audio by The PID.
 *
 * The parent of this entity is AudioSelectorSettings.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-audiopidselection.html}
 **/
export interface MediaLiveChannelAudioPidSelection {
  /**
   * Select the audio by this PID.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Pid?: Value<number>;
}

/**
 * Settings to enable VPC mode in the channel, so that the endpoints for all outputs are in your VPC.
 *
 * This entity is at the top level in the channel.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-vpcoutputsettings.html}
 **/
export interface MediaLiveChannelVpcOutputSettings {
  /**
   * List of public address allocation IDs to associate with ENIs that will be created in Output VPC. Must specify one for SINGLE_PIPELINE, two for STANDARD channels
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PublicAddressAllocationIds?: List<Value<string>>;
  /**
   * A list of up to 5 EC2 VPC security group IDs to attach to the Output VPC network interfaces. If none are specified then the VPC default security group will be used
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SecurityGroupIds?: List<Value<string>>;
  /**
   * A list of VPC subnet IDs from the same VPC. If STANDARD channel, subnet IDs must be mapped to two unique availability zones (AZ).
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
 * Information about the Teletext captions to extract from the input.
 *
 * The parent of this entity is CaptionSelectorSettings.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-teletextsourcesettings.html}
 **/
export interface MediaLiveChannelTeletextSourceSettings {
  /**
   * Settings to configure the caption rectangle for an output captions that will be created using this Teletext source captions.
   *
   * _Required_: No
   *
   * _Type_: [CaptionRectangle](aws-properties-medialive-channel-captionrectangle.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  OutputRectangle?: MediaLiveChannelCaptionRectangle;
  /**
   * Specifies the Teletext page number within the data stream from which to extract captions. The range is 0x100 (256) to 0x8FF (2303). This is unused for passthrough. It should be specified as a hexadecimal string with no "0x" prefix.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PageNumber?: Value<string>;
}

/**
 * The encoding information for output captions.
 *
 * The parent of this entity is EncoderSettings.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-captiondescription.html}
 **/
export interface MediaLiveChannelCaptionDescription {
  /**
   * Additional settings for a captions destination that depend on the destination type.
   *
   * _Required_: No
   *
   * _Type_: [CaptionDestinationSettings](aws-properties-medialive-channel-captiondestinationsettings.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DestinationSettings?: MediaLiveChannelCaptionDestinationSettings;
  /**
   * An ISO 639-2 three-digit code. For more information, see http://www.loc.gov/standards/iso639-2/.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  LanguageCode?: Value<string>;
  /**
   * Human-readable information to indicate the captions that are available for players (for example, English or Spanish).
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  LanguageDescription?: Value<string>;
  /**
   * Specifies which input captions selector to use as a captions source when generating output captions. This field should match a captionSelector name.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CaptionSelectorName?: Value<string>;
  /**
   * The name of the captions description. The name is used to associate a captions description with an output. Names must be unique within a channel.
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
 * The output settings.
 *
 * The parent of this entity is OutputGroup.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-output.html}
 **/
export interface MediaLiveChannelOutput {
  /**
   * The output type-specific settings.
   *
   * _Required_: No
   *
   * _Type_: [OutputSettings](aws-properties-medialive-channel-outputsettings.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  OutputSettings?: MediaLiveChannelOutputSettings;
  /**
   * The names of the caption descriptions that are used as captions sources for this output.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CaptionDescriptionNames?: List<Value<string>>;
  /**
   * The names of the audio descriptions that are used as audio sources for this output.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AudioDescriptionNames?: List<Value<string>>;
  /**
   * The name that is used to identify an output.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  OutputName?: Value<string>;
  /**
   * The name of the VideoDescription that is used as the source for this output.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  VideoDescriptionName?: Value<string>;
}

/**
 * Information about how to connect to the upstream system.
 *
 * The parent of this entity is InputSettings.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-networkinputsettings.html}
 **/
export interface MediaLiveChannelNetworkInputSettings {
  /**
   * Checks HTTPS server certificates. When set to checkCryptographyOnly, cryptography in the certificate is checked, but not the server's name. Certain subdomains (notably S3 buckets that use dots in the bucket name) don't strictly match the corresponding certificate's wildcard pattern and would otherwise cause the channel to error. This setting is ignored for protocols that do not use HTTPS.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ServerValidation?: Value<string>;
  /**
   * Information about how to connect to the upstream system.
   *
   * _Required_: No
   *
   * _Type_: [HlsInputSettings](aws-properties-medialive-channel-hlsinputsettings.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  HlsInputSettings?: MediaLiveChannelHlsInputSettings;
}

/**
 * Settings to configure video filters that apply to the H265 codec.
 *
 * The parent of this entity is H265Settings.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-h265filtersettings.html}
 **/
export interface MediaLiveChannelH265FilterSettings {
  /**
   * Settings for applying the temporal filter to the video.
   *
   * _Required_: No
   *
   * _Type_: [TemporalFilterSettings](aws-properties-medialive-channel-temporalfiltersettings.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TemporalFilterSettings?: MediaLiveChannelTemporalFilterSettings;
}

/**
 * Information about the SCTE-20 captions to extract from the input.
 *
 * The parent of this entity is CaptionSelectorSettings.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-scte20sourcesettings.html}
 **/
export interface MediaLiveChannelScte20SourceSettings {
  /**
   * Specifies the 608/708 channel number within the video track from which to extract captions.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Source608ChannelNumber?: Value<number>;
  /**
   * If upconvert, 608 data is both passed through the "608 compatibility bytes" fields of the 708 wrapper as well as translated into 708. Any 708 data present in the source content is discarded.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Convert608To708?: Value<string>;
}

/**
 * Information about one audio track to extract. You can select multiple tracks.
 *
 * The parent of this entity is AudioTrackSelection.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-audiotrack.html}
 **/
export interface MediaLiveChannelAudioTrack {
  /**
   * 1-based integer value that maps to a specific audio track
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Track?: Value<number>;
}

/**
 * The settings for burn-in captions in the output.
 *
 * The parent of this entity is CaptionDestinationSettings.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-burnindestinationsettings.html}
 **/
export interface MediaLiveChannelBurnInDestinationSettings {
  /**
   * Specifies the opacity of the background rectangle. 255 is opaque; 0 is transparent. Keeping this parameter blank is equivalent to setting it to 0 (transparent). All burn-in and DVB-Sub font settings must match.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  BackgroundOpacity?: Value<number>;
  /**
   * The font resolution in DPI (dots per inch). The default is 96 dpi. All burn-in and DVB-Sub font settings must match.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FontResolution?: Value<number>;
  /**
   * Specifies the font outline color. This option is not valid for source captions that are either 608/embedded or Teletext. These source settings are already pre-defined by the captions stream. All burn-in and DVB-Sub font settings must match.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  OutlineColor?: Value<string>;
  /**
   * Specifies the color of the burned-in captions. This option is not valid for source captions that are STL, 608/embedded, or Teletext. These source settings are already pre-defined by the captions stream. All burn-in and DVB-Sub font settings must match.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FontColor?: Value<string>;
  /**
   * Specifies the color of the shadow cast by the captions. All burn-in and DVB-Sub font settings must match.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ShadowColor?: Value<string>;
  /**
   * Specifies the opacity of the shadow. 255 is opaque; 0 is transparent. Keeping this parameter blank is equivalent to setting it to 0 (transparent). All burn-in and DVB-Sub font settings must match.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ShadowOpacity?: Value<number>;
  /**
   * The external font file that is used for captions burn-in. The file extension must be .ttf or .tte. Although you can select output fonts for many different types of input captions, embedded, STL, and Teletext sources use a strict grid system. Using external fonts with these captions sources could cause an unexpected display of proportional fonts. All burn-in and DVB-Sub font settings must match.
   *
   * _Required_: No
   *
   * _Type_: [InputLocation](aws-properties-medialive-channel-inputlocation.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Font?: MediaLiveChannelInputLocation;
  /**
   * Specifies the vertical offset of the shadow that is relative to the captions in pixels. A value of -2 would result in a shadow offset 2 pixels above the text. All burn-in and DVB-Sub font settings must match.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ShadowYOffset?: Value<number>;
  /**
   * If no explicit xPosition or yPosition is provided, setting alignment to centered places the captions at the bottom center of the output. Similarly, setting a left alignment aligns captions to the bottom left of the output. If x and y positions are specified in conjunction with the alignment parameter, the font is justified (either left or centered) relative to those coordinates. Selecting "smart" justification left-justifies live subtitles and center-justifies pre-recorded subtitles. All burn-in and DVB-Sub font settings must match.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Alignment?: Value<string>;
  /**
   * Specifies the horizontal position of the captions relative to the left side of the output in pixels. A value of 10 would result in the captions starting 10 pixels from the left of the output. If no explicit xPosition is provided, the horizontal captions position is determined by the alignment parameter. All burn-in and DVB-Sub font settings must match.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  XPosition?: Value<number>;
  /**
   * When set to auto, fontSize scales depending on the size of the output. Providing a positive integer specifies the exact font size in points. All burn-in and DVB-Sub font settings must match.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FontSize?: Value<string>;
  /**
   * Specifies the vertical position of the captions relative to the top of the output in pixels. A value of 10 would result in the captions starting 10 pixels from the top of the output. If no explicit yPosition is provided, the captions are positioned towards the bottom of the output. All burn-in and DVB-Sub font settings must match.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  YPosition?: Value<number>;
  /**
   * Specifies font outline size in pixels. This option is not valid for source captions that are either 608/embedded or Teletext. These source settings are already pre-defined by the captions stream. All burn-in and DVB-Sub font settings must match.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  OutlineSize?: Value<number>;
  /**
   * Controls whether a fixed grid size is used to generate the output subtitles bitmap. This applies only to Teletext inputs and DVB-Sub/Burn-in outputs.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TeletextGridControl?: Value<string>;
  /**
   * Specifies the opacity of the burned-in captions. 255 is opaque; 0 is transparent. All burn-in and DVB-Sub font settings must match.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FontOpacity?: Value<number>;
  /**
   * Specifies the horizontal offset of the shadow that is relative to the captions in pixels. A value of -2 would result in a shadow offset 2 pixels to the left. All burn-in and DVB-Sub font settings must match.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ShadowXOffset?: Value<number>;
  /**
   * Specifies the color of the rectangle behind the captions. All burn-in and DVB-Sub font settings must match.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  BackgroundColor?: Value<string>;
}

/**
 * The configuration of one captions encode in the output.
 *
 * The parent of this entity is CaptionDescription.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-captiondestinationsettings.html}
 **/
export interface MediaLiveChannelCaptionDestinationSettings {
  /**
   * The configuration of one ARIB captions encode in the output.
   *
   * _Required_: No
   *
   * _Type_: [AribDestinationSettings](aws-properties-medialive-channel-aribdestinationsettings.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AribDestinationSettings?: MediaLiveChannelAribDestinationSettings;
  /**
   * Settings for EBU-TT captions in the output.
   *
   * _Required_: No
   *
   * _Type_: [EbuTtDDestinationSettings](aws-properties-medialive-channel-ebuttddestinationsettings.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  EbuTtDDestinationSettings?: MediaLiveChannelEbuTtDDestinationSettings;
  /**
   * The configuration of one SMPTE-TT captions encode in the output.
   *
   * _Required_: No
   *
   * _Type_: [SmpteTtDestinationSettings](aws-properties-medialive-channel-smptettdestinationsettings.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SmpteTtDestinationSettings?: MediaLiveChannelSmpteTtDestinationSettings;
  /**
   * The configuration of one embedded plus SCTE-20 captions encode in the output.
   *
   * _Required_: No
   *
   * _Type_: [EmbeddedPlusScte20DestinationSettings](aws-properties-medialive-channel-embeddedplusscte20destinationsettings.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  EmbeddedPlusScte20DestinationSettings?: MediaLiveChannelEmbeddedPlusScte20DestinationSettings;
  /**
   * The configuration of one TTML captions encode in the output.
   *
   * _Required_: No
   *
   * _Type_: [TtmlDestinationSettings](aws-properties-medialive-channel-ttmldestinationsettings.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TtmlDestinationSettings?: MediaLiveChannelTtmlDestinationSettings;
  /**
   * The configuration of one SCTE20 plus embedded captions encode in the output.
   *
   * _Required_: No
   *
   * _Type_: [Scte20PlusEmbeddedDestinationSettings](aws-properties-medialive-channel-scte20plusembeddeddestinationsettings.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Scte20PlusEmbeddedDestinationSettings?: MediaLiveChannelScte20PlusEmbeddedDestinationSettings;
  /**
   * The configuration of one DVB Sub captions encode in the output.
   *
   * _Required_: No
   *
   * _Type_: [DvbSubDestinationSettings](aws-properties-medialive-channel-dvbsubdestinationsettings.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DvbSubDestinationSettings?: MediaLiveChannelDvbSubDestinationSettings;
  /**
   * The configuration of one Teletext captions encode in the output.
   *
   * _Required_: No
   *
   * _Type_: [TeletextDestinationSettings](aws-properties-medialive-channel-teletextdestinationsettings.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TeletextDestinationSettings?: MediaLiveChannelTeletextDestinationSettings;
  /**
   * The configuration of one burn-in captions encode in the output.
   *
   * _Required_: No
   *
   * _Type_: [BurnInDestinationSettings](aws-properties-medialive-channel-burnindestinationsettings.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  BurnInDestinationSettings?: MediaLiveChannelBurnInDestinationSettings;
  /**
   * The configuration of one WebVTT captions encode in the output.
   *
   * _Required_: No
   *
   * _Type_: [WebvttDestinationSettings](aws-properties-medialive-channel-webvttdestinationsettings.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  WebvttDestinationSettings?: MediaLiveChannelWebvttDestinationSettings;
  /**
   * The configuration of one embedded captions encode in the output.
   *
   * _Required_: No
   *
   * _Type_: [EmbeddedDestinationSettings](aws-properties-medialive-channel-embeddeddestinationsettings.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  EmbeddedDestinationSettings?: MediaLiveChannelEmbeddedDestinationSettings;
  /**
   * The configuration of one RTMPCaptionInfo captions encode in the output.
   *
   * _Required_: No
   *
   * _Type_: [RtmpCaptionInfoDestinationSettings](aws-properties-medialive-channel-rtmpcaptioninfodestinationsettings.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RtmpCaptionInfoDestinationSettings?: MediaLiveChannelRtmpCaptionInfoDestinationSettings;
  /**
   * The configuration of one SCTE-27 captions encode in the output.
   *
   * _Required_: No
   *
   * _Type_: [Scte27DestinationSettings](aws-properties-medialive-channel-scte27destinationsettings.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Scte27DestinationSettings?: MediaLiveChannelScte27DestinationSettings;
}

/**
 * The settings for a Microsoft Smooth output group.
 *
 * The parent of this entity is OutputGroupSettings.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-mssmoothgroupsettings.html}
 **/
export interface MediaLiveChannelMsSmoothGroupSettings {
  /**
   * useInputSegmentation has been deprecated. The configured segment size is always used.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SegmentationMode?: Value<string>;
  /**
   * The Smooth Streaming publish point on an IIS server. MediaLive acts as a "Push" encoder to IIS.
   *
   * _Required_: No
   *
   * _Type_: [OutputLocationRef](aws-properties-medialive-channel-outputlocationref.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Destination?: MediaLiveChannelOutputLocationRef;
  /**
   * When set to sendEos, sends an EOS signal to an IIS server when stopping the channel.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  EventStopBehavior?: Value<string>;
  /**
   * The size, in seconds, of the file cache for streaming outputs.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FilecacheDuration?: Value<number>;
  /**
   * If set to verifyAuthenticity, verifies the HTTPS certificate chain to a trusted certificate authority (CA). This causes HTTPS outputs to self-signed certificates to fail.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CertificateMode?: Value<string>;
  /**
   * The value of the Acquisition Point Identity element that is used in each message placed in the sparse track. Enabled only if sparseTrackType is not "none."
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AcquisitionPointId?: Value<string>;
  /**
   * When set to send, sends a stream manifest so that the publishing point doesn't start until all streams start.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  StreamManifestBehavior?: Value<string>;
  /**
   * A parameter that controls output group behavior on an input loss.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  InputLossAction?: Value<string>;
  /**
   * The length, in seconds, of mp4 fragments to generate. The fragment length must be compatible with GOP size and frame rate.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FragmentLength?: Value<number>;
  /**
   * The number of seconds before initiating a restart due to output failure, due to exhausting the numRetries on one segment, or exceeding filecacheDuration.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RestartDelay?: Value<number>;
  /**
   * If set to scte35, uses incoming SCTE-35 messages to generate a sparse track in this group of Microsoft Smooth outputs.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SparseTrackType?: Value<string>;
  /**
   * Specifies whether to send a channel ID to the IIS server. If no channel ID is sent and the same channel is used without changing the publishing point, clients might see cached video from the previous run. Options: - "useConfigured" - use the value provided in eventId - "useTimestamp" - generate and send a channel ID based on the current timestamp - "noEventId" - do not send a channel ID to the IIS server.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  EventIdMode?: Value<string>;
  /**
   * The type of timestamp date offset to use. - useEventStartDate: Use the date the channel was started as the offset - useConfiguredOffset: Use an explicitly configured date as the offset.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TimestampOffsetMode?: Value<string>;
  /**
   * If set to passthrough for an audio-only Microsoft Smooth output, the fragment absolute time is set to the current timecode. This option does not write timecodes to the audio elementary stream.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AudioOnlyTimecodeControl?: Value<string>;
  /**
   * The number of retry attempts.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  NumRetries?: Value<number>;
  /**
   * The timestamp offset for the channel. Used only if timestampOffsetMode is set to useConfiguredOffset.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TimestampOffset?: Value<string>;
  /**
   * The Microsoft Smooth channel ID that is sent to the IIS server. Specify the ID only if eventIdMode is set to useConfigured.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  EventId?: Value<string>;
  /**
   * The number of milliseconds to delay the output from the second pipeline.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SendDelayMs?: Value<number>;
  /**
   * The number of seconds to wait before retrying the connection to the IIS server if the connection is lost. Content is cached during this time, and the cache is delivered to the IIS server after the connection is re-established.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ConnectionRetryInterval?: Value<number>;
}

/**
 * The setup of WAV audio in the output.
 *
 * The parent of this entity is AudioCodecSettings.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-wavsettings.html}
 **/
export interface MediaLiveChannelWavSettings {
  /**
   * The audio coding mode for the WAV audio. The mode determines the number of channels in the audio.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CodingMode?: Value<string>;
  /**
   * Sample rate in Hz.
   *
   * _Required_: No
   *
   * _Type_: Double
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SampleRate?: Value<number>;
  /**
   * Bits per sample.
   *
   * _Required_: No
   *
   * _Type_: Double
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  BitDepth?: Value<number>;
}

/**
 * The input specification for this channel. It specifies the key characteristics of CDI inputs for this channel, when those characteristics are different from other inputs.
 *
 * This entity is at the top level in the channel.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-cdiinputspecification.html}
 **/
export interface MediaLiveChannelCdiInputSpecification {
  /**
   * Maximum CDI input resolution
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Resolution?: Value<string>;
}

/**
 * The configuration of the output group.
 *
 * The parent of this entity is OutputGroup.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-outputgroupsettings.html}
 **/
export interface MediaLiveChannelOutputGroupSettings {
  /**
   * The configuration of an HLS output group.
   *
   * _Required_: No
   *
   * _Type_: [HlsGroupSettings](aws-properties-medialive-channel-hlsgroupsettings.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  HlsGroupSettings?: MediaLiveChannelHlsGroupSettings;
  /**
   * The configuration of a frame capture output group.
   *
   * _Required_: No
   *
   * _Type_: [FrameCaptureGroupSettings](aws-properties-medialive-channel-framecapturegroupsettings.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FrameCaptureGroupSettings?: MediaLiveChannelFrameCaptureGroupSettings;
  /**
   * The settings for a Multiplex output group.
   *
   * _Required_: No
   *
   * _Type_: [MultiplexGroupSettings](aws-properties-medialive-channel-multiplexgroupsettings.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MultiplexGroupSettings?: MediaLiveChannelMultiplexGroupSettings;
  /**
   * The configuration of an archive output group.
   *
   * The parent of this entity is OutputGroupSettings.
   *
   * _Required_: No
   *
   * _Type_: [ArchiveGroupSettings](aws-properties-medialive-channel-archivegroupsettings.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ArchiveGroupSettings?: MediaLiveChannelArchiveGroupSettings;
  /**
   * The configuration of a MediaPackage output group.
   *
   * _Required_: No
   *
   * _Type_: [MediaPackageGroupSettings](aws-properties-medialive-channel-mediapackagegroupsettings.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MediaPackageGroupSettings?: MediaLiveChannelMediaPackageGroupSettings;
  /**
   * The configuration of a UDP output group.
   *
   * _Required_: No
   *
   * _Type_: [UdpGroupSettings](aws-properties-medialive-channel-udpgroupsettings.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  UdpGroupSettings?: MediaLiveChannelUdpGroupSettings;
  /**
   * The configuration of a Microsoft Smooth output group.
   *
   * _Required_: No
   *
   * _Type_: [MsSmoothGroupSettings](aws-properties-medialive-channel-mssmoothgroupsettings.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MsSmoothGroupSettings?: MediaLiveChannelMsSmoothGroupSettings;
  /**
   * The configuration of an RTMP output group.
   *
   * _Required_: No
   *
   * _Type_: [RtmpGroupSettings](aws-properties-medialive-channel-rtmpgroupsettings.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RtmpGroupSettings?: MediaLiveChannelRtmpGroupSettings;
}

/**
 * The output settings.
 *
 * The parent of this entity is Output.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-outputsettings.html}
 **/
export interface MediaLiveChannelOutputSettings {
  /**
   * The settings for a MediaPackage output.
   *
   * The parent of this entity is OutputGroupSettings.
   *
   * _Required_: No
   *
   * _Type_: [MediaPackageOutputSettings](aws-properties-medialive-channel-mediapackageoutputsettings.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MediaPackageOutputSettings?: MediaLiveChannelMediaPackageOutputSettings;
  /**
   * The settings for a Microsoft Smooth output.
   *
   * _Required_: No
   *
   * _Type_: [MsSmoothOutputSettings](aws-properties-medialive-channel-mssmoothoutputsettings.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MsSmoothOutputSettings?: MediaLiveChannelMsSmoothOutputSettings;
  /**
   * The settings for a frame capture output.
   *
   * The parent of this entity is OutputGroupSettings.
   *
   * _Required_: No
   *
   * _Type_: [FrameCaptureOutputSettings](aws-properties-medialive-channel-framecaptureoutputsettings.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FrameCaptureOutputSettings?: MediaLiveChannelFrameCaptureOutputSettings;
  /**
   * The settings for an HLS output.
   *
   * The parent of this entity is OutputGroupSettings.
   *
   * _Required_: No
   *
   * _Type_: [HlsOutputSettings](aws-properties-medialive-channel-hlsoutputsettings.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  HlsOutputSettings?: MediaLiveChannelHlsOutputSettings;
  /**
   * The settings for an RTMP output.
   *
   * The parent of this entity is OutputGroupSettings.
   *
   * _Required_: No
   *
   * _Type_: [RtmpOutputSettings](aws-properties-medialive-channel-rtmpoutputsettings.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RtmpOutputSettings?: MediaLiveChannelRtmpOutputSettings;
  /**
   * The settings for a UDP output.
   *
   * The parent of this entity is OutputGroupSettings.
   *
   * _Required_: No
   *
   * _Type_: [UdpOutputSettings](aws-properties-medialive-channel-udpoutputsettings.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  UdpOutputSettings?: MediaLiveChannelUdpOutputSettings;
  /**
   * Configuration of a Multiplex output.
   *
   * _Required_: No
   *
   * _Type_: [MultiplexOutputSettings](aws-properties-medialive-channel-multiplexoutputsettings.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MultiplexOutputSettings?: MediaLiveChannelMultiplexOutputSettings;
  /**
   * The settings for an archive output.
   *
   * _Required_: No
   *
   * _Type_: [ArchiveOutputSettings](aws-properties-medialive-channel-archiveoutputsettings.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ArchiveOutputSettings?: MediaLiveChannelArchiveOutputSettings;
}

/**
 * Encoding information for one output video.
 *
 * The parent of this entity is EncoderSettings.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-videodescription.html}
 **/
export interface MediaLiveChannelVideoDescription {
  /**
   * STRETCHTOOUTPUT configures the output position to stretch the video to the specified output resolution (height and width). This option overrides any position value. DEFAULT might insert black boxes (pillar boxes or letter boxes) around the video to provide the specified output resolution.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ScalingBehavior?: Value<string>;
  /**
   * Indicates how to respond to the AFD values in the input stream. RESPOND causes input video to be clipped, depending on the AFD value, input display aspect ratio, and output display aspect ratio, and (except for the FRAMECAPTURE codec) includes the values in the output. PASSTHROUGH (does not apply to FRAMECAPTURE codec) ignores the AFD values and includes the values in the output, so input video is not clipped. NONE ignores the AFD values and does not include the values through to the output, so input video is not clipped.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RespondToAfd?: Value<string>;
  /**
   * The output video height, in pixels. This must be an even number. For most codecs, you can keep this field and width blank in order to use the height and width (resolution) from the source. Note that we don't recommend keeping the field blank. For the Frame Capture codec, height and width are required.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Height?: Value<number>;
  /**
   * Changes the strength of the anti-alias filter used for scaling. 0 is the softest setting, and 100 is the sharpest. We recommend a setting of 50 for most content.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Sharpness?: Value<number>;
  /**
   * The output video width, in pixels. It must be an even number. For most codecs, you can keep this field and height blank in order to use the height and width (resolution) from the source. Note that we don't recommend keeping the field blank. For the Frame Capture codec, height and width are required.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Width?: Value<number>;
  /**
   * The video codec settings.
   *
   * _Required_: No
   *
   * _Type_: [VideoCodecSettings](aws-properties-medialive-channel-videocodecsettings.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CodecSettings?: MediaLiveChannelVideoCodecSettings;
  /**
   * The name of this VideoDescription. Outputs use this name to uniquely identify this description. Description names should be unique within this channel.
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
 * The settings for a blackout slate.
 *
 * The parent of this entity is EncoderSettings.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-blackoutslate.html}
 **/
export interface MediaLiveChannelBlackoutSlate {
  /**
   * Setting to enabled causes MediaLive to blackout the video, audio, and captions, and raise the "Network Blackout Image" slate when an SCTE104/35 Network End Segmentation Descriptor is encountered. The blackout is lifted when the Network Start Segmentation Descriptor is encountered. The Network End and Network Start descriptors must contain a network ID that matches the value entered in Network ID.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  NetworkEndBlackout?: Value<string>;
  /**
   * When set to enabled, this causes video, audio, and captions to be blanked when indicated by program metadata.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  State?: Value<string>;
  /**
   * Provides a Network ID that matches EIDR ID format (for example, "10.XXXX/XXXX-XXXX-XXXX-XXXX-XXXX-C").
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  NetworkId?: Value<string>;
  /**
   * The path to the local file to use as the Network End Blackout image. The image is scaled to fill the entire output raster.
   *
   * _Required_: No
   *
   * _Type_: [InputLocation](aws-properties-medialive-channel-inputlocation.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  NetworkEndBlackoutImage?: MediaLiveChannelInputLocation;
  /**
   * The blackout slate image to be used. Keep empty for solid black. Only .bmp and .png images are supported.
   *
   * _Required_: No
   *
   * _Type_: [InputLocation](aws-properties-medialive-channel-inputlocation.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  BlackoutSlateImage?: MediaLiveChannelInputLocation;
}

/**
 * The configuration of ARIB captions in the output.
 *
 * The parent of this entity is CaptionDestinationSettings.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-aribdestinationsettings.html}
 **/
export interface MediaLiveChannelAribDestinationSettings {}

/**
 * Settings for a frame capture output in an HLS output group.
 *
 * The parent of this entity is HlsSettings.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-framecapturehlssettings.html}
 **/
export interface MediaLiveChannelFrameCaptureHlsSettings {}

/**
 * The Akamai settings in an HLS output.
 *
 * The parent of this entity is HlsCdnSettings.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-hlsakamaisettings.html}
 **/
export interface MediaLiveChannelHlsAkamaiSettings {
  /**
   * The salt for authenticated Akamai.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Salt?: Value<string>;
  /**
   * The size, in seconds, of the file cache for streaming outputs.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FilecacheDuration?: Value<number>;
  /**
   * The number of retry attempts that will be made before the channel is put into an error state.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  NumRetries?: Value<number>;
  /**
   * The token parameter for authenticated Akamai. If this is not specified, _gda_ is used.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Token?: Value<string>;
  /**
   * If a streaming output fails, the number of seconds to wait until a restart is initiated. A value of 0 means never restart.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RestartDelay?: Value<number>;
  /**
   * The number of seconds to wait before retrying a connection to the CDN if the connection is lost.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ConnectionRetryInterval?: Value<number>;
  /**
   * Specifies whether to use chunked transfer encoding to Akamai. To enable this feature, contact Akamai.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  HttpTransferMode?: Value<string>;
}

/**
 * The settings for DVB Sub captions in the output.
 *
 * The parent of this entity is CaptionDestinationSettings.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-dvbsubdestinationsettings.html}
 **/
export interface MediaLiveChannelDvbSubDestinationSettings {
  /**
   * Specifies the opacity of the background rectangle. 255 is opaque; 0 is transparent. Keeping this parameter blank is equivalent to setting it to 0 (transparent). All burn-in and DVB-Sub font settings must match.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  BackgroundOpacity?: Value<number>;
  /**
   * The font resolution in DPI (dots per inch). The default is 96 dpi. All burn-in and DVB-Sub font settings must match.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FontResolution?: Value<number>;
  /**
   * Specifies the font outline color. This option is not valid for source captions that are either 608/embedded or Teletext. These source settings are already pre-defined by the captions stream. All burn-in and DVB-Sub font settings must match.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  OutlineColor?: Value<string>;
  /**
   * Specifies the color of the burned-in captions. This option is not valid for source captions that are STL, 608/embedded, or Teletext. These source settings are already pre-defined by the captions stream. All burn-in and DVB-Sub font settings must match.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FontColor?: Value<string>;
  /**
   * Specifies the color of the shadow that is cast by the captions. All burn-in and DVB-Sub font settings must match.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ShadowColor?: Value<string>;
  /**
   * Specifies the opacity of the shadow. 255 is opaque; 0 is transparent. Keeping this parameter blank is equivalent to setting it to 0 (transparent). All burn-in and DVB-Sub font settings must match.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ShadowOpacity?: Value<number>;
  /**
   * The external font file that is used for captions burn-in. The file extension must be .ttf or .tte. Although you can select output fonts for many different types of input captions, embedded, STL, and Teletext sources use a strict grid system. Using external fonts with these captions sources could cause an unexpected display of proportional fonts. All burn-in and DVB-Sub font settings must match.
   *
   * _Required_: No
   *
   * _Type_: [InputLocation](aws-properties-medialive-channel-inputlocation.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Font?: MediaLiveChannelInputLocation;
  /**
   * Specifies the vertical offset of the shadow relative to the captions in pixels. A value of -2 would result in a shadow offset 2 pixels above the text. All burn-in and DVB-Sub font settings must match.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ShadowYOffset?: Value<number>;
  /**
   * If no explicit xPosition or yPosition is provided, setting the alignment to centered places the captions at the bottom center of the output. Similarly, setting a left alignment aligns captions to the bottom left of the output. If x and y positions are specified in conjunction with the alignment parameter, the font is justified (either left or centered) relative to those coordinates. Selecting "smart" justification left-justifies live subtitles and center-justifies pre-recorded subtitles. This option is not valid for source captions that are STL or 608/embedded. These source settings are already pre-defined by the captions stream. All burn-in and DVB-Sub font settings must match.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Alignment?: Value<string>;
  /**
   * Specifies the horizontal position of the captions relative to the left side of the output in pixels. A value of 10 would result in the captions starting 10 pixels from the left of the output. If no explicit xPosition is provided, the horizontal captions position is determined by the alignment parameter. This option is not valid for source captions that are STL, 608/embedded, or Teletext. These source settings are already pre-defined by the captions stream. All burn-in and DVB-Sub font settings must match.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  XPosition?: Value<number>;
  /**
   * When set to auto, fontSize scales depending on the size of the output. Providing a positive integer specifies the exact font size in points. All burn-in and DVB-Sub font settings must match.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FontSize?: Value<string>;
  /**
   * Specifies the vertical position of the captions relative to the top of the output in pixels. A value of 10 would result in the captions starting 10 pixels from the top of the output. If no explicit yPosition is provided, the captions are positioned towards the bottom of the output. This option is not valid for source captions that are STL, 608/embedded, or Teletext. These source settings are already pre-defined by the captions stream. All burn-in and DVB-Sub font settings must match.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  YPosition?: Value<number>;
  /**
   * Specifies the font outline size in pixels. This option is not valid for source captions that are either 608/embedded or Teletext. These source settings are already pre-defined by the captions stream. All burn-in and DVB-Sub font settings must match.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  OutlineSize?: Value<number>;
  /**
   * Controls whether a fixed grid size is used to generate the output subtitles bitmap. This applies to only Teletext inputs and DVB-Sub/Burn-in outputs.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TeletextGridControl?: Value<string>;
  /**
   * Specifies the opacity of the burned-in captions. 255 is opaque; 0 is transparent. All burn-in and DVB-Sub font settings must match.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FontOpacity?: Value<number>;
  /**
   * Specifies the horizontal offset of the shadow relative to the captions in pixels. A value of -2 would result in a shadow offset 2 pixels to the left. All burn-in and DVB-Sub font settings must match.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ShadowXOffset?: Value<number>;
  /**
   * Specifies the color of the rectangle behind the captions. All burn-in and DVB-Sub font settings must match.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  BackgroundColor?: Value<string>;
}

/**
 * Rec709 Settings
 *
 * The parents of this entity are H264ColorSpaceSettings and H265ColorSpaceSettings.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-rec709settings.html}
 **/
export interface MediaLiveChannelRec709Settings {}

/**
 * The settings for an HLS output.
 *
 * The parent of this entity is HlsOutputSettings.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-hlssettings.html}
 **/
export interface MediaLiveChannelHlsSettings {
  /**
   * The settings for a standard output (an output that is not audio-only).
   *
   * _Required_: No
   *
   * _Type_: [StandardHlsSettings](aws-properties-medialive-channel-standardhlssettings.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  StandardHlsSettings?: MediaLiveChannelStandardHlsSettings;
  /**
   * The settings for an audio-only output.
   *
   * _Required_: No
   *
   * _Type_: [AudioOnlyHlsSettings](aws-properties-medialive-channel-audioonlyhlssettings.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AudioOnlyHlsSettings?: MediaLiveChannelAudioOnlyHlsSettings;
  /**
   * The settings for an fMP4 container.
   *
   * _Required_: No
   *
   * _Type_: [Fmp4HlsSettings](aws-properties-medialive-channel-fmp4hlssettings.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Fmp4HlsSettings?: MediaLiveChannelFmp4HlsSettings;
  /**
   * Settings for a frame capture output in an HLS output group.
   *
   * _Required_: No
   *
   * _Type_: [FrameCaptureHlsSettings](aws-properties-medialive-channel-framecapturehlssettings.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FrameCaptureHlsSettings?: MediaLiveChannelFrameCaptureHlsSettings;
}

/**
 * The frame capture settings.
 *
 * The parent of this entity is VideoCodecSettings.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-framecapturesettings.html}
 **/
export interface MediaLiveChannelFrameCaptureSettings {
  /**
   * The frequency, in seconds, for capturing frames for inclusion in the output. For example, "10" means capture a frame every 10 seconds.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CaptureInterval?: Value<number>;
  /**
   * Unit for the frame capture interval.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CaptureIntervalUnits?: Value<string>;
}

/**
 * Destination settings for a Multiplex output.
 *
 * The parent of this entity is OutputDestination.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-multiplexprogramchanneldestinationsettings.html}
 **/
export interface MediaLiveChannelMultiplexProgramChannelDestinationSettings {
  /**
   * The ID of the Multiplex that the encoder is providing output to. You do not need to specify the individual inputs to the Multiplex; MediaLive will handle the connection of the two MediaLive pipelines to the two Multiplex instances. The Multiplex must be in the same region as the Channel.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MultiplexId?: Value<string>;
  /**
   * The program name of the Multiplex program that the encoder is providing output to.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ProgramName?: Value<string>;
}

/**
 * The settings for the CDN of an HLS output.
 *
 * The parent of this entity is HlsGroupSettings.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-hlscdnsettings.html}
 **/
export interface MediaLiveChannelHlsCdnSettings {
  /**
   * The settings for Web VTT captions in the HLS output group.
   *
   * The parent of this entity is HlsGroupSettings.
   *
   * _Required_: No
   *
   * _Type_: [HlsWebdavSettings](aws-properties-medialive-channel-hlswebdavsettings.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  HlsWebdavSettings?: MediaLiveChannelHlsWebdavSettings;
  /**
   * Sets up Amazon S3 as the destination for this HLS output.
   *
   * _Required_: No
   *
   * _Type_: [HlsS3Settings](aws-properties-medialive-channel-hlss3settings.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  HlsS3Settings?: MediaLiveChannelHlsS3Settings;
  /**
   * Sets up Akamai as the downstream system for the HLS output group.
   *
   * _Required_: No
   *
   * _Type_: [HlsAkamaiSettings](aws-properties-medialive-channel-hlsakamaisettings.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  HlsAkamaiSettings?: MediaLiveChannelHlsAkamaiSettings;
  /**
   * The settings for Basic Put for the HLS output.
   *
   * _Required_: No
   *
   * _Type_: [HlsBasicPutSettings](aws-properties-medialive-channel-hlsbasicputsettings.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  HlsBasicPutSettings?: MediaLiveChannelHlsBasicPutSettings;
  /**
   * Sets up MediaStore as the destination for the HLS output.
   *
   * _Required_: No
   *
   * _Type_: [HlsMediaStoreSettings](aws-properties-medialive-channel-hlsmediastoresettings.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  HlsMediaStoreSettings?: MediaLiveChannelHlsMediaStoreSettings;
}

/**
 * The settings for embedded plus SCTE-20 captions in the output.
 *
 * The parent of this entity is CaptionDestinationSettings.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-embeddedplusscte20destinationsettings.html}
 **/
export interface MediaLiveChannelEmbeddedPlusScte20DestinationSettings {}

/**
 * Information about the SCTE-27 captions to extract from the input.
 *
 * The parent of this entity is CaptionSelectorSettings.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-scte27sourcesettings.html}
 **/
export interface MediaLiveChannelScte27SourceSettings {
  /**
   * If you will configure a WebVTT caption description that references this caption selector, use this field to provide the language to consider when translating the image-based source to text.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  OcrLanguage?: Value<string>;
  /**
   * The PID field is used in conjunction with the captions selector languageCode field as follows: Specify PID and Language: Extracts captions from that PID; the language is "informational." Specify PID and omit Language: Extracts the specified PID. Omit PID and specify Language: Extracts the specified language, whichever PID that happens to be. Omit PID and omit Language: Valid only if source is DVB-Sub that is being passed through; all languages are passed through.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Pid?: Value<number>;
}

/**
 * Information about the audio track to extract.
 *
 * The parent of this entity is AudioSelectorSettings.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-audiotrackselection.html}
 **/
export interface MediaLiveChannelAudioTrackSelection {
  /**
   * Selects one or more unique audio tracks from within a source.
   *
   * _Required_: No
   *
   * _Type_: List of [AudioTrack](aws-properties-medialive-channel-audiotrack.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Tracks?: List<MediaLiveChannelAudioTrack>;
}

/**
 * Settings for EBU-TT captions in the output.
 *
 * The parent of this entity is CaptionDestinationSettings.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-ebuttddestinationsettings.html}
 **/
export interface MediaLiveChannelEbuTtDDestinationSettings {
  /**
   * Specifies the font family to include in the font data attached to the EBU-TT captions. Valid only if styleControl is set to include. If you leave this field empty, the font family is set to "monospaced". (If styleControl is set to exclude, the font family is always set to "monospaced".) You specify only the font family. All other style information (color, bold, position and so on) is copied from the input captions. The size is always set to 100% to allow the downstream player to choose the size. - Enter a list of font families, as a comma-separated list of font names, in order of preference. The name can be a font family (such as “Arial”), or a generic font family (such as “serif”), or “default” (to let the downstream player choose the font). - Leave blank to set the family to “monospace”.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FontFamily?: Value<string>;
  /**
   * Specifies how to handle the gap between the lines (in multi-line captions). - enabled: Fill with the captions background color (as specified in the input captions). - disabled: Leave the gap unfilled.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FillLineGap?: Value<string>;
  /**
   * Specifies the style information (font color, font position, and so on) to include in the font data that is attached to the EBU-TT captions. - include: Take the style information (font color, font position, and so on) from the source captions and include that information in the font data attached to the EBU-TT captions. This option is valid only if the source captions are Embedded or Teletext. - exclude: In the font data attached to the EBU-TT captions, set the font family to "monospaced". Do not include any other style information.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  StyleControl?: Value<string>;
  /**
   * Applies only if you plan to convert these source captions to EBU-TT-D or TTML in an output. Complete this field if you want to include the name of the copyright holder in the copyright metadata tag in the TTML
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CopyrightHolder?: Value<string>;
}

/**
 * The input location.
 *
 * The parent of this entity is InputLossBehavior.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-inputlocation.html}
 **/
export interface MediaLiveChannelInputLocation {
  /**
   * The user name to connect to the downstream system. This applies only if the downstream system requires credentials.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Username?: Value<string>;
  /**
   * The password parameter that holds the password for accessing the downstream system. This applies only if the downstream system requires credentials.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PasswordParam?: Value<string>;
  /**
   * The URI should be a path to a file that is accessible to the Live system (for example, an http:// URI) depending on the output type. For example, an RTMP destination should have a URI similar to rtmp://fmsserver/live.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Uri?: Value<string>;
}

/**
 * The setup of SMPTE-TT captions in the output.
 *
 * The parent of this entity is CaptionDestinationSettings.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-smptettdestinationsettings.html}
 **/
export interface MediaLiveChannelSmpteTtDestinationSettings {}

/**
 * The configuration for this MP2 audio.
 *
 * The parent of this entity is AudioCodecSettings.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-mp2settings.html}
 **/
export interface MediaLiveChannelMp2Settings {
  /**
   * The MPEG2 Audio coding mode. Valid values are codingMode10 (for mono) or codingMode20 (for stereo).
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CodingMode?: Value<string>;
  /**
   * The sample rate in Hz.
   *
   * _Required_: No
   *
   * _Type_: Double
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SampleRate?: Value<number>;
  /**
   * The average bitrate in bits/second.
   *
   * _Required_: No
   *
   * _Type_: Double
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Bitrate?: Value<number>;
}

/**
 * Settings for the fMP4 containers.
 *
 * The parent of this entity is HlsSettings.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-fmp4hlssettings.html}
 **/
export interface MediaLiveChannelFmp4HlsSettings {
  /**
   * List all the audio groups that are used with the video output stream. Input all the audio GROUP-IDs that are associated to the video, separate by ','.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AudioRenditionSets?: Value<string>;
  /**
   * If set to passthrough, Nielsen inaudible tones for media tracking will be detected in the input audio and an equivalent ID3 tag will be inserted in the output.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  NielsenId3Behavior?: Value<string>;
  /**
   * When set to passthrough, timed metadata is passed through from input to output.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TimedMetadataBehavior?: Value<string>;
}

/**
 * The settings for one output group.
 *
 * The parent of this entity is EncoderSettings.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-outputgroup.html}
 **/
export interface MediaLiveChannelOutputGroup {
  /**
   * The settings for the outputs in the output group.
   *
   * _Required_: No
   *
   * _Type_: List of [Output](aws-properties-medialive-channel-output.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Outputs?: List<MediaLiveChannelOutput>;
  /**
   * The settings associated with the output group.
   *
   * _Required_: No
   *
   * _Type_: [OutputGroupSettings](aws-properties-medialive-channel-outputgroupsettings.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  OutputGroupSettings?: MediaLiveChannelOutputGroupSettings;
  /**
   * A custom output group name that you can optionally define. Only letters, numbers, and the underscore character are allowed. The maximum length is 32 characters.
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
 * The settings for an AC3 audio encode in the output.
 *
 * The parent of this entity is AudioCodecSettings.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-ac3settings.html}
 **/
export interface MediaLiveChannelAc3Settings {
  /**
   * The Dolby Digital coding mode. This determines the number of channels.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CodingMode?: Value<string>;
  /**
   * If set to filmStandard, adds dynamic range compression signaling to the output bitstream as defined in the Dolby Digital specification.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DrcProfile?: Value<string>;
  /**
   * When set to followInput, encoder metadata is sourced from the DD, DD+, or DolbyE decoder that supplies this audio data. If the audio is supplied from one of these streams, the static metadata settings are used.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MetadataControl?: Value<string>;
  /**
   * Sets the dialnorm for the output. If excluded and the input audio is Dolby Digital, dialnorm is passed through.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Dialnorm?: Value<number>;
  /**
   * When set to enabled, applies a 120Hz lowpass filter to the LFE channel prior to encoding. This is valid only in codingMode32Lfe mode.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  LfeFilter?: Value<string>;
  /**
   * Specifies the bitstream mode (bsmod) for the emitted AC-3 stream. For more information about these values, see ATSC A/52-2012.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  BitstreamMode?: Value<string>;
  /**
   * The average bitrate in bits/second. Valid bitrates depend on the coding mode.
   *
   * _Required_: No
   *
   * _Type_: Double
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Bitrate?: Value<number>;
}

/**
 * The settings for an EAC3 audio encode in the output.
 *
 * The parent of this entity is AudioCodecSettings.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-eac3settings.html}
 **/
export interface MediaLiveChannelEac3Settings {
  /**
   * The Dolby Digital Plus coding mode. This mode determines the number of channels.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CodingMode?: Value<string>;
  /**
   * When encoding 2/0 audio, sets whether Dolby Surround is matrix-encoded into the two channels.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SurroundMode?: Value<string>;
  /**
   * When set to whenPossible, input DD+ audio will be passed through if it is present on the input. This detection is dynamic over the life of the transcode. Inputs that alternate between DD+ and non-DD+ content will have a consistent DD+ output as the system alternates between passthrough and encoding.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PassthroughControl?: Value<string>;
  /**
   * Sets the dialnorm for the output. If blank and the input audio is Dolby Digital Plus, dialnorm will be passed through.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Dialnorm?: Value<number>;
  /**
   * The Left only/Right only surround mix level. Used only for a 3/2 coding mode.
   *
   * _Required_: No
   *
   * _Type_: Double
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  LoRoSurroundMixLevel?: Value<number>;
  /**
   * When set to shift90Degrees, applies a 90-degree phase shift to the surround channels. Used only for a 3/2 coding mode.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PhaseControl?: Value<string>;
  /**
   * The Left total/Right total center mix level. Used only for a 3/2 coding mode.
   *
   * _Required_: No
   *
   * _Type_: Double
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  LtRtCenterMixLevel?: Value<number>;
  /**
   * When set to enabled, applies a 120Hz lowpass filter to the LFE channel prior to encoding. Valid only with a codingMode32 coding mode.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  LfeFilter?: Value<string>;
  /**
   * When encoding 3/2 audio, setting to lfe enables the LFE channel.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  LfeControl?: Value<string>;
  /**
   * The average bitrate in bits/second. Valid bitrates depend on the coding mode.
   *
   * _Required_: No
   *
   * _Type_: Double
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Bitrate?: Value<number>;
  /**
   * Sets the Dolby dynamic range compression profile.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DrcLine?: Value<string>;
  /**
   * When set to enabled, activates a DC highpass filter for all input channels.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DcFilter?: Value<string>;
  /**
   * When set to followInput, encoder metadata is sourced from the DD, DD+, or DolbyE decoder that supplies this audio data. If the audio is not supplied from one of these streams, then the static metadata settings are used.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MetadataControl?: Value<string>;
  /**
   * The Left total/Right total surround mix level. Used only for the 3/2 coding mode.
   *
   * _Required_: No
   *
   * _Type_: Double
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  LtRtSurroundMixLevel?: Value<number>;
  /**
   * The Left only/Right only center mix level. Used only for the 3/2 coding mode.
   *
   * _Required_: No
   *
   * _Type_: Double
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  LoRoCenterMixLevel?: Value<number>;
  /**
   * Sets the profile for heavy Dolby dynamic range compression, ensuring that the instantaneous signal peaks do not exceed specified levels.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DrcRf?: Value<string>;
  /**
   * When set to attenuate3Db, applies a 3 dB attenuation to the surround channels. Used only for the 3/2 coding mode.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AttenuationControl?: Value<string>;
  /**
   * Specifies the bitstream mode (bsmod) for the emitted E-AC-3 stream. For more information, see ATSC A/52-2012 (Annex E).
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  BitstreamMode?: Value<string>;
  /**
   * When encoding 3/2 audio, sets whether an extra center back surround channel is matrix encoded into the left and right surround channels.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SurroundExMode?: Value<string>;
  /**
   * A stereo downmix preference. Used only for the 3/2 coding mode.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  StereoDownmix?: Value<string>;
}

/**
 * The settings for the H.264 codec in the output.
 *
 * The parent of this entity is VideoCodecSettings.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-h264settings.html}
 **/
export interface MediaLiveChannelH264Settings {
  /**
   * The number of reference frames to use. The encoder might use more than requested if you use B-frames or interlaced encoding.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  NumRefFrames?: Value<number>;
  /**
   * If set to enabled, adjusts quantization within each frame based on the temporal variation of content complexity.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TemporalAq?: Value<string>;
  /**
   * The number of slices per picture. The number must be less than or equal to the number of macroblock rows for progressive pictures, and less than or equal to half the number of macroblock rows for interlaced pictures. This field is optional. If you don't specify a value, MediaLive chooses the number of slices based on the encode resolution.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Slices?: Value<number>;
  /**
   * Indicates how the output video frame rate is specified. If you select "specified," the output video frame rate is determined by framerateNumerator and framerateDenominator. If you select "initializeFromSource," the output video frame rate is set equal to the input video frame rate of the first input.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FramerateControl?: Value<string>;
  /**
   * Controls the target quality for the video encode. This applies only when the rate control mode is QVBR. Set values for the QVBR quality level field and Max bitrate field that suit your most important viewing devices. Recommended values are: - Primary screen: Quality level: 8 to 10. Max bitrate: 4M - PC or tablet: Quality level: 7. Max bitrate: 1.5M to 3M - Smartphone: Quality level: 6. Max bitrate: 1M to 1.5M.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  QvbrQualityLevel?: Value<number>;
  /**
   * The frame rate numerator. The frame rate is a fraction, for example, 24000/1001 = 23.976 fps.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FramerateNumerator?: Value<number>;
  /**
   * Indicates how the output pixel aspect ratio is specified. If "specified" is selected, the output video pixel aspect ratio is determined by parNumerator and parDenominator. If "initializeFromSource" is selected, the output pixels aspect ratio will be set equal to the input video pixel aspect ratio of the first input.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ParControl?: Value<string>;
  /**
   * The frequency of closed GOPs. In streaming applications, we recommend that you set this to 1 so that a decoder joining mid-stream will receive an IDR frame as quickly as possible. Setting this value to 0 will break output segmenting.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  GopClosedCadence?: Value<number>;
  /**
   * If set to enabled, adjusts the quantization within each frame to reduce flicker or pop on I-frames.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FlickerAq?: Value<string>;
  /**
   * An H.264 profile.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Profile?: Value<string>;
  /**
   * Leave as STANDARD_QUALITY or choose a different value (which might result in additional costs to run the channel). - ENHANCED_QUALITY: Produces a slightly better video quality without an increase in the bitrate. Has an effect only when the Rate control mode is QVBR or CBR. If this channel is in a MediaLive multiplex, the value must be ENHANCED_QUALITY. - STANDARD_QUALITY: Valid for any Rate control mode.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  QualityLevel?: Value<string>;
  /**
   * Meaningful only if sceneChangeDetect is set to enabled. This setting enforces separation between repeated (cadence) I-frames and I-frames inserted by Scene Change Detection. If a scene change I-frame is within I-interval frames of a cadence I-frame, the GOP is shrunk or stretched to the scene change I-frame. GOP stretch requires enabling lookahead as well as setting the I-interval. The normal cadence resumes for the next GOP. Note that the maximum GOP stretch = GOP size + Min-I-interval - 1.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MinIInterval?: Value<number>;
  /**
   * The scene change detection. On: inserts I-frames when the scene change is detected. Off: does not force an I-frame when the scene change is detected.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SceneChangeDetect?: Value<string>;
  /**
   * This setting applies only when scan type is "interlaced." It controls whether coding is performed on a field basis or on a frame basis. (When the video is progressive, the coding is always performed on a frame basis.) enabled: Force MediaLive to code on a field basis, so that odd and even sets of fields are coded separately. disabled: Code the two sets of fields separately (on a field basis) or together (on a frame basis using PAFF), depending on what is most appropriate for the content.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ForceFieldPictures?: Value<string>;
  /**
   * The frame rate denominator.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FramerateDenominator?: Value<number>;
  /**
   * Softness. Selects a quantizer matrix. Larger values reduce high-frequency content in the encoded image.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Softness?: Value<number>;
  /**
   * The GOP size (keyframe interval) in units of either frames or seconds per gopSizeUnits. The value must be greater than zero.
   *
   * _Required_: No
   *
   * _Type_: Double
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  GopSize?: Value<number>;
  /**
   * The adaptive quantization. This allows intra-frame quantizers to vary to improve visual quality.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AdaptiveQuantization?: Value<string>;
  /**
   * Optional filters that you can apply to an encode.
   *
   * _Required_: No
   *
   * _Type_: [H264FilterSettings](aws-properties-medialive-channel-h264filtersettings.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FilterSettings?: MediaLiveChannelH264FilterSettings;
  /**
   * Settings to configure the color space handling for the video.
   *
   * _Required_: No
   *
   * _Type_: [H264ColorSpaceSettings](aws-properties-medialive-channel-h264colorspacesettings.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ColorSpaceSettings?: MediaLiveChannelH264ColorSpaceSettings;
  /**
   * The entropy encoding mode. Use cabac (must be in Main or High profile) or cavlc.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  EntropyEncoding?: Value<string>;
  /**
   * If set to enabled, adjusts quantization within each frame based on the spatial variation of content complexity.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SpatialAq?: Value<string>;
  /**
   * The Pixel Aspect Ratio denominator.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ParDenominator?: Value<number>;
  /**
   * A four-bit AFD value to write on all frames of video in the output stream. Valid only when afdSignaling is set to Fixed.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FixedAfd?: Value<string>;
  /**
   * Indicates if the gopSize is specified in frames or seconds. If seconds, the system converts the gopSize into a frame count at runtime.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  GopSizeUnits?: Value<string>;
  /**
   * Indicates that AFD values will be written into the output stream. If afdSignaling is auto, the system tries to preserve the input AFD value (in cases where multiple AFD values are valid). If set to fixed, the AFD value is the value configured in the fixedAfd parameter.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AfdSignaling?: Value<string>;
  /**
   * The average bitrate in bits/second. This is required when the rate control mode is VBR or CBR. It isn't used for QVBR. In a Microsoft Smooth output group, each output must have a unique value when its bitrate is rounded down to the nearest multiple of 1000.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Bitrate?: Value<number>;
  /**
   * The Pixel Aspect Ratio numerator.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ParNumerator?: Value<number>;
  /**
   * The rate control mode. QVBR: The quality will match the specified quality level except when it is constrained by the maximum bitrate. We recommend this if you or your viewers pay for bandwidth. VBR: The quality and bitrate vary, depending on the video complexity. We recommend this instead of QVBR if you want to maintain a specific average bitrate over the duration of the channel. CBR: The quality varies, depending on the video complexity. We recommend this only if you distribute your assets to devices that can't handle variable bitrates.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RateControlMode?: Value<string>;
  /**
   * Sets the scan type of the output to progressive or top-field-first interlaced.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ScanType?: Value<string>;
  /**
   * The size of the buffer (HRD buffer model) in bits/second.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  BufSize?: Value<number>;
  /**
   * Determines how timecodes should be inserted into the video elementary stream. disabled: don't include timecodes. picTimingSei: pass through picture timing SEI messages from the source specified in Timecode Config.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TimecodeInsertion?: Value<string>;
  /**
   * Includes color space metadata in the output.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ColorMetadata?: Value<string>;
  /**
   * The percentage of the buffer that should initially be filled (HRD buffer model).
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  BufFillPct?: Value<number>;
  /**
   * If enabled, uses reference B frames for GOP structures that have B frames > 1.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  GopBReference?: Value<string>;
  /**
   * The amount of lookahead. A value of low can decrease latency and memory usage, while high can produce better quality for certain content.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  LookAheadRateControl?: Value<string>;
  /**
   * The H.264 level.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Level?: Value<string>;
  /**
   * For QVBR: See the tooltip for Quality level. For VBR: Set the maximum bitrate in order to accommodate expected spikes in the complexity of the video.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MaxBitrate?: Value<number>;
  /**
   * Produces a bitstream that is compliant with SMPTE RP-2027.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Syntax?: Value<string>;
  /**
   * If set to fixed, uses gopNumBFrames B-frames per sub-GOP. If set to dynamic, optimizes the number of B-frames used for each sub-GOP to improve visual quality.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SubgopLength?: Value<string>;
  /**
   * The number of B-frames between reference frames.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  GopNumBFrames?: Value<number>;
}

/**
 * Settings to configure video filters that apply to the H264 codec.
 *
 * The parent of this entity is H264Settings.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-h264filtersettings.html}
 **/
export interface MediaLiveChannelH264FilterSettings {
  /**
   * Settings for applying the temporal filter to the video.
   *
   * _Required_: No
   *
   * _Type_: [TemporalFilterSettings](aws-properties-medialive-channel-temporalfiltersettings.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TemporalFilterSettings?: MediaLiveChannelTemporalFilterSettings;
}

/**
 * Settings for one failover condition.
 *
 * The parent of this entity is FailoverCondition.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-failoverconditionsettings.html}
 **/
export interface MediaLiveChannelFailoverConditionSettings {
  /**
   * MediaLive will perform a failover if the specified audio selector is silent for the specified period.
   *
   * _Required_: No
   *
   * _Type_: [AudioSilenceFailoverSettings](aws-properties-medialive-channel-audiosilencefailoversettings.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AudioSilenceSettings?: MediaLiveChannelAudioSilenceFailoverSettings;
  /**
   * MediaLive will perform a failover if content is considered black for the specified period.
   *
   * _Required_: No
   *
   * _Type_: [VideoBlackFailoverSettings](aws-properties-medialive-channel-videoblackfailoversettings.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  VideoBlackSettings?: MediaLiveChannelVideoBlackFailoverSettings;
  /**
   * MediaLive will perform a failover if content is not detected in this input for the specified period.
   *
   * _Required_: No
   *
   * _Type_: [InputLossFailoverSettings](aws-properties-medialive-channel-inputlossfailoversettings.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  InputLossSettings?: MediaLiveChannelInputLossFailoverSettings;
}

/**
 * The configuration of a UDP output.
 *
 * The parent of this entity is UdpOutputSettings.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-udpcontainersettings.html}
 **/
export interface MediaLiveChannelUdpContainerSettings {
  /**
   * The M2TS configuration for this UDP output.
   *
   * _Required_: No
   *
   * _Type_: [M2tsSettings](aws-properties-medialive-channel-m2tssettings.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  M2tsSettings?: MediaLiveChannelM2tsSettings;
}

/**
 * The configuration of the timecode in the output.
 *
 * The parent of this entity is EncoderSettings.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-timecodeconfig.html}
 **/
export interface MediaLiveChannelTimecodeConfig {
  /**
   * The threshold in frames beyond which output timecode is resynchronized to the input timecode. Discrepancies below this threshold are permitted to avoid unnecessary discontinuities in the output timecode. There is no timecode sync when this is not specified.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SyncThreshold?: Value<number>;
  /**
   * Identifies the source for the timecode that will be associated with the channel outputs. Embedded (embedded): Initialize the output timecode with timecode from the source. If no embedded timecode is detected in the source, the system falls back to using "Start at 0" (zerobased). System Clock (systemclock): Use the UTC time. Start at 0 (zerobased): The time of the first frame of the channel will be 00:00:00:00.
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
 * The setup of ad avail handling in the output.
 *
 * The parent of this entity is EncoderSettings.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-availconfiguration.html}
 **/
export interface MediaLiveChannelAvailConfiguration {
  /**
   * The setup of ad avail handling in the output.
   *
   * _Required_: No
   *
   * _Type_: [AvailSettings](aws-properties-medialive-channel-availsettings.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AvailSettings?: MediaLiveChannelAvailSettings;
}

/**
 * H265 Settings
 *
 * The parent of this entity is VideoCodecSettings.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-h265settings.html}
 **/
export interface MediaLiveChannelH265Settings {
  /**
   * Number of slices per picture. Must be less than or equal to the number of macroblock rows for progressive pictures, and less than or equal to half the number of macroblock rows for interlaced pictures. This field is optional; when no value is specified the encoder will choose the number of slices based on encode resolution.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Slices?: Value<number>;
  /**
   * Controls the target quality for the video encode. Applies only when the rate control mode is QVBR. Set values for the QVBR quality level field and Max bitrate field that suit your most important viewing devices. Recommended values are: - Primary screen: Quality level: 8 to 10. Max bitrate: 4M - PC or tablet: Quality level: 7. Max bitrate: 1.5M to 3M - Smartphone: Quality level: 6. Max bitrate: 1M to 1.5M
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  QvbrQualityLevel?: Value<number>;
  /**
   * Framerate numerator - framerate is a fraction, e.g. 24000 / 1001 = 23.976 fps.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FramerateNumerator?: Value<number>;
  /**
   * Frequency of closed GOPs. In streaming applications, it is recommended that this be set to 1 so a decoder joining mid-stream will receive an IDR frame as quickly as possible. Setting this value to 0 will break output segmenting.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  GopClosedCadence?: Value<number>;
  /**
   * If set to enabled, adjust quantization within each frame to reduce flicker or 'pop' on I-frames.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FlickerAq?: Value<string>;
  /**
   * H.265 Profile.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Profile?: Value<string>;
  /**
   * Only meaningful if sceneChangeDetect is set to enabled. Defaults to 5 if multiplex rate control is used. Enforces separation between repeated (cadence) I-frames and I-frames inserted by Scene Change Detection. If a scene change I-frame is within I-interval frames of a cadence I-frame, the GOP is shrunk and/or stretched to the scene change I-frame. GOP stretch requires enabling lookahead as well as setting I-interval. The normal cadence resumes for the next GOP. Note: Maximum GOP stretch = GOP size + Min-I-interval - 1
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MinIInterval?: Value<number>;
  /**
   * Scene change detection.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SceneChangeDetect?: Value<string>;
  /**
   * Framerate denominator.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FramerateDenominator?: Value<number>;
  /**
   * GOP size (keyframe interval) in units of either frames or seconds per gopSizeUnits. If gopSizeUnits is frames, gopSize must be an integer and must be greater than or equal to 1. If gopSizeUnits is seconds, gopSize must be greater than 0, but need not be an integer.
   *
   * _Required_: No
   *
   * _Type_: Double
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  GopSize?: Value<number>;
  /**
   * Adaptive quantization. Allows intra-frame quantizers to vary to improve visual quality.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AdaptiveQuantization?: Value<string>;
  /**
   * Optional filters that you can apply to an encode.
   *
   * _Required_: No
   *
   * _Type_: [H265FilterSettings](aws-properties-medialive-channel-h265filtersettings.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FilterSettings?: MediaLiveChannelH265FilterSettings;
  /**
   * Whether or not EML should insert an Alternative Transfer Function SEI message to support backwards compatibility with non-HDR decoders and displays.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AlternativeTransferFunction?: Value<string>;
  /**
   * Color Space settings
   *
   * _Required_: No
   *
   * _Type_: [H265ColorSpaceSettings](aws-properties-medialive-channel-h265colorspacesettings.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ColorSpaceSettings?: MediaLiveChannelH265ColorSpaceSettings;
  /**
   * H.265 Tier.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Tier?: Value<string>;
  /**
   * Pixel Aspect Ratio denominator.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ParDenominator?: Value<number>;
  /**
   * Four bit AFD value to write on all frames of video in the output stream. Only valid when afdSignaling is set to 'Fixed'.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FixedAfd?: Value<string>;
  /**
   * Indicates if the gopSize is specified in frames or seconds. If seconds the system will convert the gopSize into a frame count at run time.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  GopSizeUnits?: Value<string>;
  /**
   * Indicates that AFD values will be written into the output stream. If afdSignaling is "auto", the system will try to preserve the input AFD value (in cases where multiple AFD values are valid). If set to "fixed", the AFD value will be the value configured in the fixedAfd parameter.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AfdSignaling?: Value<string>;
  /**
   * Average bitrate in bits/second. Required when the rate control mode is VBR or CBR. Not used for QVBR. In an MS Smooth output group, each output must have a unique value when its bitrate is rounded down to the nearest multiple of 1000.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Bitrate?: Value<number>;
  /**
   * Pixel Aspect Ratio numerator.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ParNumerator?: Value<number>;
  /**
   * Rate control mode. QVBR: Quality will match the specified quality level except when it is constrained by the maximum bitrate. Recommended if you or your viewers pay for bandwidth. CBR: Quality varies, depending on the video complexity. Recommended only if you distribute your assets to devices that cannot handle variable bitrates. Multiplex: This rate control mode is only supported (and is required) when the video is being delivered to a MediaLive Multiplex in which case the rate control configuration is controlled by the properties within the Multiplex Program.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RateControlMode?: Value<string>;
  /**
   * Sets the scan type of the output to progressive or top-field-first interlaced.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ScanType?: Value<string>;
  /**
   * Size of buffer (HRD buffer model) in bits.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  BufSize?: Value<number>;
  /**
   * Determines how timecodes should be inserted into the video elementary stream. - 'disabled': Do not include timecodes - 'picTimingSei': Pass through picture timing SEI messages from the source specified in Timecode Config
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TimecodeInsertion?: Value<string>;
  /**
   * Includes colorspace metadata in the output.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ColorMetadata?: Value<string>;
  /**
   * Amount of lookahead. A value of low can decrease latency and memory usage, while high can produce better quality for certain content.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  LookAheadRateControl?: Value<string>;
  /**
   * H.265 Level.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Level?: Value<string>;
  /**
   * For QVBR: See the tooltip for Quality level
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MaxBitrate?: Value<number>;
}

/**
 * The configuration of the audio codec in the audio output.
 *
 * The parent of this entity is AudioDescription.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-audiocodecsettings.html}
 **/
export interface MediaLiveChannelAudioCodecSettings {
  /**
   * The setup of an EAC3 audio codec in the output.
   *
   * _Required_: No
   *
   * _Type_: [Eac3Settings](aws-properties-medialive-channel-eac3settings.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Eac3Settings?: MediaLiveChannelEac3Settings;
  /**
   * The setup of an AC3 audio codec in the output.
   *
   * _Required_: No
   *
   * _Type_: [Ac3Settings](aws-properties-medialive-channel-ac3settings.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Ac3Settings?: MediaLiveChannelAc3Settings;
  /**
   * The setup of an MP2 audio codec in the output.
   *
   * _Required_: No
   *
   * _Type_: [Mp2Settings](aws-properties-medialive-channel-mp2settings.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Mp2Settings?: MediaLiveChannelMp2Settings;
  /**
   * The setup to pass through the Dolby audio codec to the output.
   *
   * _Required_: No
   *
   * _Type_: [PassThroughSettings](aws-properties-medialive-channel-passthroughsettings.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PassThroughSettings?: MediaLiveChannelPassThroughSettings;
  /**
   * Settings for audio encoded with the WAV codec.
   *
   * _Required_: No
   *
   * _Type_: [WavSettings](aws-properties-medialive-channel-wavsettings.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  WavSettings?: MediaLiveChannelWavSettings;
  /**
   * The setup of the AAC audio codec in the output.
   *
   * _Required_: No
   *
   * _Type_: [AacSettings](aws-properties-medialive-channel-aacsettings.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AacSettings?: MediaLiveChannelAacSettings;
}

/**
 * The configuration of Web VTT captions in the output.
 *
 * The parent of this entity is CaptionDestinationSettings.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-webvttdestinationsettings.html}
 **/
export interface MediaLiveChannelWebvttDestinationSettings {
  /**
   * Controls whether the color and position of the source captions is passed through to the WebVTT output captions. PASSTHROUGH - Valid only if the source captions are EMBEDDED or TELETEXT. NO_STYLE_DATA - Don't pass through the style. The output captions will not contain any font styling information.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  StyleControl?: Value<string>;
}

/**
 * The settings for an AAC audio encode in the output.
 *
 * The parent of this entity is AudioCodecSettings.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-aacsettings.html}
 **/
export interface MediaLiveChannelAacSettings {
  /**
   * Mono, stereo, or 5.1 channel layout. Valid values depend on the rate control mode and profile. The adReceiverMix setting receives a stereo description plus control track, and emits a mono AAC encode of the description track, with control data emitted in the PES header as per ETSI TS 101 154 Annex E.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CodingMode?: Value<string>;
  /**
   * The rate control mode.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RateControlMode?: Value<string>;
  /**
   * The sample rate in Hz. Valid values depend on the rate control mode and profile.
   *
   * _Required_: No
   *
   * _Type_: Double
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SampleRate?: Value<number>;
  /**
   * Set to broadcasterMixedAd when the input contains pre-mixed main audio + AD (narration) as a stereo pair. The Audio Type field (audioType) will be set to 3, which signals to downstream systems that this stream contains broadcaster mixed AD. Note that the input received by the encoder must contain pre-mixed audio; MediaLive does not perform the mixing. The values in audioTypeControl and audioType (in AudioDescription) are ignored when set to broadcasterMixedAd. Leave this set to normal when the input does not contain pre-mixed audio + AD.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  InputType?: Value<string>;
  /**
   * The VBR quality level. This is used only if rateControlMode is VBR.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  VbrQuality?: Value<string>;
  /**
   * Sets the LATM/LOAS AAC output for raw containers.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RawFormat?: Value<string>;
  /**
   * Uses MPEG-2 AAC audio instead of MPEG-4 AAC audio for raw or MPEG-2 Transport Stream containers.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Spec?: Value<string>;
  /**
   * The average bitrate in bits/second. Valid values depend on the rate control mode and profile.
   *
   * _Required_: No
   *
   * _Type_: Double
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Bitrate?: Value<number>;
  /**
   * The AAC profile.
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
 * The settings for the SCTE-35 time signal APOS mode.
 *
 * The parent of this entity is AvailSettings.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-scte35timesignalapos.html}
 **/
export interface MediaLiveChannelScte35TimeSignalApos {
  /**
   * When specified, this offset (in milliseconds) is added to the input ad avail PTS time. This applies only to embedded SCTE 104/35 messages. It doesn't apply to OOB messages.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AdAvailOffset?: Value<number>;
  /**
   * When set to ignore, segment descriptors with webDeliveryAllowedFlag set to 0 no longer trigger blackouts or ad avail slates.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  WebDeliveryAllowedFlag?: Value<string>;
  /**
   * When set to ignore, segment descriptors with noRegionalBlackoutFlag set to 0 no longer trigger blackouts or ad avail slates.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  NoRegionalBlackoutFlag?: Value<string>;
}

/**
 * Configuration information for an output.
 *
 * This entity is at the top level in the channel.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-outputdestination.html}
 **/
export interface MediaLiveChannelOutputDestination {
  /**
   * Destination settings for a Multiplex output; one destination for both encoders.
   *
   * _Required_: No
   *
   * _Type_: [MultiplexProgramChannelDestinationSettings](aws-properties-medialive-channel-multiplexprogramchanneldestinationsettings.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MultiplexSettings?: MediaLiveChannelMultiplexProgramChannelDestinationSettings;
  /**
   * The ID for this destination.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Id?: Value<string>;
  /**
   * The destination settings for an output.
   *
   * _Required_: No
   *
   * _Type_: List of [OutputDestinationSettings](aws-properties-medialive-channel-outputdestinationsettings.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Settings?: List<MediaLiveChannelOutputDestinationSettings>;
  /**
   * The destination settings for a MediaPackage output.
   *
   * _Required_: No
   *
   * _Type_: List of [MediaPackageOutputDestinationSettings](aws-properties-medialive-channel-mediapackageoutputdestinationsettings.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MediaPackageSettings?: List<MediaLiveChannelMediaPackageOutputDestinationSettings>;
}

/**
 * Settings to configure video filters that apply to the MPEG-2 codec.
 *
 * The parent of this entity is Mpeg2FilterSettings.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-mpeg2filtersettings.html}
 **/
export interface MediaLiveChannelMpeg2FilterSettings {
  /**
   * Settings for applying the temporal filter to the video.
   *
   * _Required_: No
   *
   * _Type_: [TemporalFilterSettings](aws-properties-medialive-channel-temporalfiltersettings.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TemporalFilterSettings?: MediaLiveChannelTemporalFilterSettings;
}

/**
 * MediaLive will perform a failover if content is considered black for the specified period.
 *
 * The parent of this entity is FailoverConditionSettings.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-videoblackfailoversettings.html}
 **/
export interface MediaLiveChannelVideoBlackFailoverSettings {
  /**
   * The amount of time (in milliseconds) that the active input must be black before automatic input failover occurs.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  VideoBlackThresholdMsec?: Value<number>;
  /**
   * A value used in calculating the threshold below which MediaLive considers a pixel to be 'black'. For the input to be considered black, every pixel in a frame must be below this threshold. The threshold is calculated as a percentage (expressed as a decimal) of white. Therefore .1 means 10% white (or 90% black). Note how the formula works for any color depth. For example, if you set this field to 0.1 in 10-bit color depth: (1023*0.1=102.3), which means a pixel value of 102 or less is 'black'. If you set this field to .1 in an 8-bit color depth: (255*0.1=25.5), which means a pixel value of 25 or less is 'black'. The range is 0.0 to 1.0, with any number of decimal places.
   *
   * _Required_: No
   *
   * _Type_: Double
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  BlackDetectThreshold?: Value<number>;
}

/**
 * The settings for one RTMP output.
 *
 * The parent of this entity is OutputSettings.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-rtmpoutputsettings.html}
 **/
export interface MediaLiveChannelRtmpOutputSettings {
  /**
   * The RTMP endpoint excluding the stream name (for example, rtmp://host/appname).
   *
   * _Required_: No
   *
   * _Type_: [OutputLocationRef](aws-properties-medialive-channel-outputlocationref.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Destination?: MediaLiveChannelOutputLocationRef;
  /**
   * If set to verifyAuthenticity, verifies the TLS certificate chain to a trusted certificate authority (CA). This causes RTMPS outputs with self-signed certificates to fail.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CertificateMode?: Value<string>;
  /**
   * The number of retry attempts.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  NumRetries?: Value<number>;
  /**
   * The number of seconds to wait before retrying a connection to the Flash Media server if the connection is lost.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ConnectionRetryInterval?: Value<number>;
}

/**
 * The setup of TTML captions in the output.
 *
 * The parent of this entity is CaptionDestinationSettings.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-ttmldestinationsettings.html}
 **/
export interface MediaLiveChannelTtmlDestinationSettings {
  /**
   * When set to passthrough, passes through style and position information from a TTML-like input source (TTML, SMPTE-TT, CFF-TT) to the CFF-TT output or TTML output.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  StyleControl?: Value<string>;
}

/**
 * The configuration of a WebDav server as the downstream system for an HLS output.
 *
 * The parent of this entity is HlsCdnSettings.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-hlswebdavsettings.html}
 **/
export interface MediaLiveChannelHlsWebdavSettings {
  /**
   * The size, in seconds, of the file cache for streaming outputs.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FilecacheDuration?: Value<number>;
  /**
   * The number of retry attempts that are made before the channel is put into an error state.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  NumRetries?: Value<number>;
  /**
   * If a streaming output fails, the number of seconds to wait until a restart is initiated. A value of 0 means never restart.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RestartDelay?: Value<number>;
  /**
   * The number of seconds to wait before retrying a connection to the CDN if the connection is lost.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ConnectionRetryInterval?: Value<number>;
  /**
   * Specifies whether to use chunked transfer encoding to WebDAV.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  HttpTransferMode?: Value<string>;
}

/**
 * The configuration settings that apply to the entire channel.
 *
 * The parent of this entity is EncoderSettings.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-globalconfiguration.html}
 **/
export interface MediaLiveChannelGlobalConfiguration {
  /**
   * Indicates the action to take when the current input completes (for example, end-of-file). When switchAndLoopInputs is configured, MediaLive restarts at the beginning of the first input. When "none" is configured, MediaLive transcodes either black, a solid color, or a user-specified slate images per the "Input Loss Behavior" configuration until the next input switch occurs (which is controlled through the Channel Schedule API).
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  InputEndAction?: Value<string>;
  /**
   * Indicates whether the rate of frames emitted by the Live encoder should be paced by its system clock (which optionally might be locked to another source through NTP) or should be locked to the clock of the source that is providing the input stream.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  OutputTimingSource?: Value<string>;
  /**
   * Indicates how MediaLive pipelines are synchronized. PIPELINELOCKING - MediaLive attempts to synchronize the output of each pipeline to the other. EPOCHLOCKING - MediaLive attempts to synchronize the output of each pipeline to the Unix epoch.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  OutputLockingMode?: Value<string>;
  /**
   * Adjusts the video input buffer for streams with very low video frame rates. This is commonly set to enabled for music channels with less than one video frame per second.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SupportLowFramerateInputs?: Value<string>;
  /**
   * The value to set the initial audio gain for the channel.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  InitialAudioGain?: Value<number>;
  /**
   * The settings for system actions when the input is lost.
   *
   * _Required_: No
   *
   * _Type_: [InputLossBehavior](aws-properties-medialive-channel-inputlossbehavior.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  InputLossBehavior?: MediaLiveChannelInputLossBehavior;
}

/**
 * The configuration of an audio-only HLS output.
 *
 * The parent of this entity is HlsSettings.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-audioonlyhlssettings.html}
 **/
export interface MediaLiveChannelAudioOnlyHlsSettings {
  /**
   * Specifies the segment type.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SegmentType?: Value<string>;
  /**
   * Four types of audio-only tracks are supported: Audio-Only Variant Stream The client can play back this audio-only stream instead of video in low-bandwidth scenarios. Represented as an EXT-X-STREAM-INF in the HLS manifest. Alternate Audio, Auto Select, Default Alternate rendition that the client should try to play back by default. Represented as an EXT-X-MEDIA in the HLS manifest with DEFAULT=YES, AUTOSELECT=YES Alternate Audio, Auto Select, Not Default Alternate rendition that the client might try to play back by default. Represented as an EXT-X-MEDIA in the HLS manifest with DEFAULT=NO, AUTOSELECT=YES Alternate Audio, not Auto Select Alternate rendition that the client will not try to play back by default. Represented as an EXT-X-MEDIA in the HLS manifest with DEFAULT=NO, AUTOSELECT=NO.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AudioTrackType?: Value<string>;
  /**
   * Used with an audio-only stream. It must be a .jpg or .png file. If given, this image is used as the cover art for the audio-only output. Ideally, it should be formatted for an iPhone screen for two reasons. The iPhone does not resize the image; instead, it crops a centered image on the top/bottom and left/right. Additionally, this image file gets saved bit-for-bit into every 10-second segment file, so it increases bandwidth by {image file size} * {segment count} * {user count.}.
   *
   * _Required_: No
   *
   * _Type_: [InputLocation](aws-properties-medialive-channel-inputlocation.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AudioOnlyImage?: MediaLiveChannelInputLocation;
  /**
   * Specifies the group that the audio rendition belongs to.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AudioGroupId?: Value<string>;
}

/**
 * The configuration of SCTE-27 captions in the output.
 *
 * The parent of this entity is CaptionDestinationSettings.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-scte27destinationsettings.html}
 **/
export interface MediaLiveChannelScte27DestinationSettings {}

/**
 * The settings for an archive output group.
 *
 * The parent of this entity is OutputGroupSettings.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-archivegroupsettings.html}
 **/
export interface MediaLiveChannelArchiveGroupSettings {
  /**
   * A directory and base file name where archive files should be written.
   *
   * _Required_: No
   *
   * _Type_: [OutputLocationRef](aws-properties-medialive-channel-outputlocationref.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Destination?: MediaLiveChannelOutputLocationRef;
  /**
   * Settings to configure the destination of an Archive output.
   *
   * _Required_: No
   *
   * _Type_: [ArchiveCdnSettings](aws-properties-medialive-channel-archivecdnsettings.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ArchiveCdnSettings?: MediaLiveChannelArchiveCdnSettings;
  /**
   * The number of seconds to write to an archive file before closing and starting a new one.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RolloverInterval?: Value<number>;
}

/**
 * A DVB Service Description Table (SDT).
 *
 * The parent of this entity is M2tsSettings.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-dvbsdtsettings.html}
 **/
export interface MediaLiveChannelDvbSdtSettings {
  /**
   * The service provider name placed in the serviceDescriptor in the Service Description Table (SDT). The maximum length is 256 characters.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ServiceProviderName?: Value<string>;
  /**
   * Selects a method of inserting SDT information into an output stream. The sdtFollow setting copies SDT information from input stream to output stream. The sdtFollowIfPresent setting copies SDT information from input stream to output stream if SDT information is present in the input. Otherwise, it falls back on the user-defined values. The sdtManual setting means that the user will enter the SDT information. The sdtNone setting means that the output stream will not contain SDT information.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  OutputSdt?: Value<string>;
  /**
   * The service name placed in the serviceDescriptor in the Service Description Table (SDT). The maximum length is 256 characters.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ServiceName?: Value<string>;
  /**
   * The number of milliseconds between instances of this table in the output transport stream.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RepInterval?: Value<number>;
}

/**
 * Used to extract video by the program ID.
 *
 * The parent of this entity is VideoSelectorSettings.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-videoselectorprogramid.html}
 **/
export interface MediaLiveChannelVideoSelectorProgramId {
  /**
   * Selects a specific program from within a multi-program transport stream. If the program doesn't exist, MediaLive selects the first program within the transport stream by default.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ProgramId?: Value<number>;
}

/**
 * The setting to remix the audio.
 *
 * The parent of this entity is AudioChannelMappings.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-inputchannellevel.html}
 **/
export interface MediaLiveChannelInputChannelLevel {
  /**
   * The index of the input channel that is used as a source.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  InputChannel?: Value<number>;
  /**
   * The remixing value. Units are in dB, and acceptable values are within the range from -60 (mute) to 6 dB.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Gain?: Value<number>;
}

/**
 * The settings for passing through audio to the output.
 *
 * The parent of this entity is AudioCodecSettings.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-passthroughsettings.html}
 **/
export interface MediaLiveChannelPassThroughSettings {}

/**
 * Complete these fields only if you want to insert watermarks of type Nielsen CBET
 *
 * The parent of this entity is NielsenWatermarksSettings
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-nielsencbet.html}
 **/
export interface MediaLiveChannelNielsenCBET {
  /**
   * Enter the CBET check digits to use in the watermark.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CbetCheckDigitString?: Value<string>;
  /**
   * Determines the method of CBET insertion mode when prior encoding is detected on the same layer.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CbetStepaside?: Value<string>;
  /**
   * Enter the CBET Source ID (CSID) to use in the watermark
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Csid?: Value<string>;
}

/**
 * The archive container settings.
 *
 * The parent of this entity is ArchiveOutputSettings.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-archivecontainersettings.html}
 **/
export interface MediaLiveChannelArchiveContainerSettings {
  /**
   * The settings for Raw archive output type.
   *
   * _Required_: No
   *
   * _Type_: [RawSettings](aws-properties-medialive-channel-rawsettings.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RawSettings?: MediaLiveChannelRawSettings;
  /**
   * The settings for the M2TS in the archive output.
   *
   * _Required_: No
   *
   * _Type_: [M2tsSettings](aws-properties-medialive-channel-m2tssettings.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  M2tsSettings?: MediaLiveChannelM2tsSettings;
}

/**
 * The input specification for this channel. It specifies the key characteristics of the inputs for this channel: the maximum bitrate, the resolution, and the codec.
 *
 * This entity is at the top level in the channel.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-inputspecification.html}
 **/
export interface MediaLiveChannelInputSpecification {
  /**
   * The codec to include in the input specification for this channel.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Codec?: Value<string>;
  /**
   * The maximum input bitrate for any input attached to this channel.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MaximumBitrate?: Value<string>;
  /**
   * The resolution for any input attached to this channel.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Resolution?: Value<string>;
}

/**
 * The settings for the encoding of outputs.
 *
 * This entity is at the top level in the channel.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-encodersettings.html}
 **/
export interface MediaLiveChannelEncoderSettings {
  /**
   * The encoding information for output audio.
   *
   * _Required_: No
   *
   * _Type_: List of [AudioDescription](aws-properties-medialive-channel-audiodescription.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AudioDescriptions?: List<MediaLiveChannelAudioDescription>;
  /**
   * The encoding information for output videos.
   *
   * _Required_: No
   *
   * _Type_: List of [VideoDescription](aws-properties-medialive-channel-videodescription.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  VideoDescriptions?: List<MediaLiveChannelVideoDescription>;
  /**
   * Settings to enable specific features.
   *
   * _Required_: No
   *
   * _Type_: [FeatureActivations](aws-properties-medialive-channel-featureactivations.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FeatureActivations?: MediaLiveChannelFeatureActivations;
  /**
   * The configuration settings that apply to the entire channel.
   *
   * _Required_: No
   *
   * _Type_: [GlobalConfiguration](aws-properties-medialive-channel-globalconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  GlobalConfiguration?: MediaLiveChannelGlobalConfiguration;
  /**
   * The encoding information for output captions.
   *
   * _Required_: No
   *
   * _Type_: List of [CaptionDescription](aws-properties-medialive-channel-captiondescription.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CaptionDescriptions?: List<MediaLiveChannelCaptionDescription>;
  /**
   * The configuration settings for the ad avail handling.
   *
   * _Required_: No
   *
   * _Type_: [AvailConfiguration](aws-properties-medialive-channel-availconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AvailConfiguration?: MediaLiveChannelAvailConfiguration;
  /**
   * Settings to enable and configure the motion graphics overlay feature in the channel.
   *
   * _Required_: No
   *
   * _Type_: [MotionGraphicsConfiguration](aws-properties-medialive-channel-motiongraphicsconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MotionGraphicsConfiguration?: MediaLiveChannelMotionGraphicsConfiguration;
  /**
   * The settings for the output groups in the channel.
   *
   * _Required_: No
   *
   * _Type_: List of [OutputGroup](aws-properties-medialive-channel-outputgroup.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  OutputGroups?: List<MediaLiveChannelOutputGroup>;
  /**
   * The settings for ad avail blanking.
   *
   * _Required_: No
   *
   * _Type_: [AvailBlanking](aws-properties-medialive-channel-availblanking.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AvailBlanking?: MediaLiveChannelAvailBlanking;
  /**
   * The settings to configure Nielsen watermarks.
   *
   * _Required_: No
   *
   * _Type_: [NielsenConfiguration](aws-properties-medialive-channel-nielsenconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  NielsenConfiguration?: MediaLiveChannelNielsenConfiguration;
  /**
   * The settings for the blackout slate.
   *
   * _Required_: No
   *
   * _Type_: [BlackoutSlate](aws-properties-medialive-channel-blackoutslate.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  BlackoutSlate?: MediaLiveChannelBlackoutSlate;
  /**
   * Contains settings used to acquire and adjust timecode information from the inputs.
   *
   * _Required_: No
   *
   * _Type_: [TimecodeConfig](aws-properties-medialive-channel-timecodeconfig.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TimecodeConfig?: MediaLiveChannelTimecodeConfig;
}

/**
 * Settings for configuring color space in an H264 video encode.
 *
 * The parent of this entity is H264Settings.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-h264colorspacesettings.html}
 **/
export interface MediaLiveChannelH264ColorSpaceSettings {
  /**
   * Settings to configure the handling of Rec601 color space.
   *
   * _Required_: No
   *
   * _Type_: [Rec601Settings](aws-properties-medialive-channel-rec601settings.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Rec601Settings?: MediaLiveChannelRec601Settings;
  /**
   * Settings to configure the handling of Rec709 color space.
   *
   * _Required_: No
   *
   * _Type_: [Rec709Settings](aws-properties-medialive-channel-rec709settings.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Rec709Settings?: MediaLiveChannelRec709Settings;
  /**
   * Passthrough applies no color space conversion to the output.
   *
   * _Required_: No
   *
   * _Type_: [ColorSpacePassthroughSettings](aws-properties-medialive-channel-colorspacepassthroughsettings.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ColorSpacePassthroughSettings?: MediaLiveChannelColorSpacePassthroughSettings;
}

/**
 * The settings for the MediaPackage group.
 *
 * The parent of this entity is OutputGroupSettings.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-mediapackagegroupsettings.html}
 **/
export interface MediaLiveChannelMediaPackageGroupSettings {
  /**
   * The MediaPackage channel destination.
   *
   * _Required_: No
   *
   * _Type_: [OutputLocationRef](aws-properties-medialive-channel-outputlocationref.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Destination?: MediaLiveChannelOutputLocationRef;
}

/**
 * The configuration of embedded captions in the output.
 *
 * The parent of this entity is CaptionDestinationSettings.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-embeddeddestinationsettings.html}
 **/
export interface MediaLiveChannelEmbeddedDestinationSettings {}

/**
 * The configuration of ad avail blanking in the output.
 *
 * The parent of this entity is EncoderSettings.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-availblanking.html}
 **/
export interface MediaLiveChannelAvailBlanking {
  /**
   * When set to enabled, the video, audio, and captions are blanked when insertion metadata is added.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  State?: Value<string>;
  /**
   * The blanking image to be used. Keep empty for solid black. Only .bmp and .png images are supported.
   *
   * _Required_: No
   *
   * _Type_: [InputLocation](aws-properties-medialive-channel-inputlocation.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AvailBlankingImage?: MediaLiveChannelInputLocation;
}

/**
 * Information about extracting content from the input and about handling the content.
 *
 * The parent of this entity is InputAttachment.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-inputsettings.html}
 **/
export interface MediaLiveChannelInputSettings {
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Scte35Pid?: Value<number>;
  /**
   * Enables or disables the deblock filter when filtering.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DeblockFilter?: Value<string>;
  /**
   * Adjusts the magnitude of filtering from 1 (minimal) to 5 (strongest).
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FilterStrength?: Value<number>;
  /**
   * Turns on the filter for this input. MPEG-2 inputs have the deblocking filter enabled by default. 1) auto - filtering is applied depending on input type/quality 2) disabled - no filtering is applied to the input 3) forced - filtering is applied regardless of the input type.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  InputFilter?: Value<string>;
  /**
   * The loop input if it is a file.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SourceEndBehavior?: Value<string>;
  /**
   * Information about one video to extract from the input.
   *
   * _Required_: No
   *
   * _Type_: [VideoSelector](aws-properties-medialive-channel-videoselector.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  VideoSelector?: MediaLiveChannelVideoSelector;
  /**
   * Specifies whether to extract applicable ancillary data from a SMPTE-2038 source in this input. Applicable data types are captions, timecode, AFD, and SCTE-104 messages. - PREFER: Extract from SMPTE-2038 if present in this input, otherwise extract from another source (if any). - IGNORE: Never extract any ancillary data from SMPTE-2038.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Smpte2038DataPreference?: Value<string>;
  /**
   * Information about the specific audio to extract from the input.
   *
   * The parent of this entity is InputSettings.
   *
   * _Required_: No
   *
   * _Type_: List of [AudioSelector](aws-properties-medialive-channel-audioselector.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AudioSelectors?: List<MediaLiveChannelAudioSelector>;
  /**
   * Information about the specific captions to extract from the input.
   *
   * _Required_: No
   *
   * _Type_: List of [CaptionSelector](aws-properties-medialive-channel-captionselector.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CaptionSelectors?: List<MediaLiveChannelCaptionSelector>;
  /**
   * Enables or disables the denoise filter when filtering.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DenoiseFilter?: Value<string>;
  /**
   * Information about how to connect to the upstream system.
   *
   * _Required_: No
   *
   * _Type_: [NetworkInputSettings](aws-properties-medialive-channel-networkinputsettings.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  NetworkInputSettings?: MediaLiveChannelNetworkInputSettings;
}

/**
 * The settings for a Multiplex output group.
 *
 * The parent of this entity is OutputGroupSettings.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-multiplexgroupsettings.html}
 **/
export interface MediaLiveChannelMultiplexGroupSettings {}

/**
 * Maps a captions channel to an ISO 693-2 language code (http://www.loc.gov/standards/iso639-2), with an optional description.
 *
 * The parent of this entity is HlsGroupSettings.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-captionlanguagemapping.html}
 **/
export interface MediaLiveChannelCaptionLanguageMapping {
  /**
   * A three-character ISO 639-2 language code (see http://www.loc.gov/standards/iso639-2).
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  LanguageCode?: Value<string>;
  /**
   * The textual description of language.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  LanguageDescription?: Value<string>;
  /**
   * The closed caption channel being described by this CaptionLanguageMapping. Each channel mapping must have a unique channel number (maximum of 4).
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CaptionChannel?: Value<number>;
}

/**
 * Information about the DVB Sub captions to extract from the input.
 *
 * The parent of this entity is CaptionSelectorSettings.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-dvbsubsourcesettings.html}
 **/
export interface MediaLiveChannelDvbSubSourceSettings {
  /**
   * If you will configure a WebVTT caption description that references this caption selector, use this field to provide the language to consider when translating the image-based source to text.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  OcrLanguage?: Value<string>;
  /**
   * When using DVB-Sub with burn-in or SMPTE-TT, use this PID for the source content. It is unused for DVB-Sub passthrough. All DVB-Sub content is passed through, regardless of selectors.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Pid?: Value<number>;
}

/**
 * Captions Selector Settings
 *
 * The parent of this entity is CaptionSelector.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-captionselectorsettings.html}
 **/
export interface MediaLiveChannelCaptionSelectorSettings {
  /**
   * Information about the DVB Sub captions to extract from the input.
   *
   * _Required_: No
   *
   * _Type_: [DvbSubSourceSettings](aws-properties-medialive-channel-dvbsubsourcesettings.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DvbSubSourceSettings?: MediaLiveChannelDvbSubSourceSettings;
  /**
   * Information about the SCTE-27 captions to extract from the input.
   *
   * _Required_: No
   *
   * _Type_: [Scte27SourceSettings](aws-properties-medialive-channel-scte27sourcesettings.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Scte27SourceSettings?: MediaLiveChannelScte27SourceSettings;
  /**
   * Information about the ARIB captions to extract from the input.
   *
   * _Required_: No
   *
   * _Type_: [AribSourceSettings](aws-properties-medialive-channel-aribsourcesettings.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AribSourceSettings?: MediaLiveChannelAribSourceSettings;
  /**
   * Information about the embedded captions to extract from the input.
   *
   * _Required_: No
   *
   * _Type_: [EmbeddedSourceSettings](aws-properties-medialive-channel-embeddedsourcesettings.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  EmbeddedSourceSettings?: MediaLiveChannelEmbeddedSourceSettings;
  /**
   * Information about the SCTE-20 captions to extract from the input.
   *
   * _Required_: No
   *
   * _Type_: [Scte20SourceSettings](aws-properties-medialive-channel-scte20sourcesettings.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Scte20SourceSettings?: MediaLiveChannelScte20SourceSettings;
  /**
   * Information about the Teletext captions to extract from the input.
   *
   * _Required_: No
   *
   * _Type_: [TeletextSourceSettings](aws-properties-medialive-channel-teletextsourcesettings.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TeletextSourceSettings?: MediaLiveChannelTeletextSourceSettings;
  /**
   * Information about the ancillary captions to extract from the input.
   *
   * _Required_: No
   *
   * _Type_: [AncillarySourceSettings](aws-properties-medialive-channel-ancillarysourcesettings.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AncillarySourceSettings?: MediaLiveChannelAncillarySourceSettings;
}

/**
 * Information about the video to extract from the input.
 *
 * The parent of this entity is VideoSelector.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-videoselectorsettings.html}
 **/
export interface MediaLiveChannelVideoSelectorSettings {
  /**
   * Used to extract video by program ID.
   *
   * _Required_: No
   *
   * _Type_: [VideoSelectorProgramId](aws-properties-medialive-channel-videoselectorprogramid.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  VideoSelectorProgramId?: MediaLiveChannelVideoSelectorProgramId;
  /**
   * Used to extract video by PID.
   *
   * _Required_: No
   *
   * _Type_: [VideoSelectorPid](aws-properties-medialive-channel-videoselectorpid.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  VideoSelectorPid?: MediaLiveChannelVideoSelectorPid;
}

/**
 * Settings to enable and configure the motion graphics overlay feature in the channel.
 *
 * The parent of this entity is EncoderSettings.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-motiongraphicsconfiguration.html}
 **/
export interface MediaLiveChannelMotionGraphicsConfiguration {
  /**
   * Settings to enable and configure the motion graphics overlay feature in the channel.
   *
   * _Required_: No
   *
   * _Type_: [MotionGraphicsSettings](aws-properties-medialive-channel-motiongraphicssettings.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MotionGraphicsSettings?: MediaLiveChannelMotionGraphicsSettings;
  /**
   * Enables or disables the motion graphics overlay feature in the channel.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MotionGraphicsInsertion?: Value<string>;
}

/**
 * Settings to configure color space settings in the incoming video.
 *
 * The parent of this entity is VideoSelector.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-videoselectorcolorspacesettings.html}
 **/
export interface MediaLiveChannelVideoSelectorColorSpaceSettings {
  /**
   * Settings to configure color space settings in the incoming video.
   *
   * _Required_: No
   *
   * _Type_: [Hdr10Settings](aws-properties-medialive-channel-hdr10settings.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Hdr10Settings?: MediaLiveChannelHdr10Settings;
}

/**
 * The configuration of HLS Basic Put Settings.
 *
 * The parent of this entity is HlsCdnSettings.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-hlsbasicputsettings.html}
 **/
export interface MediaLiveChannelHlsBasicPutSettings {
  /**
   * The size, in seconds, of the file cache for streaming outputs.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FilecacheDuration?: Value<number>;
  /**
   * The number of retry attempts that MediaLive makes before the channel is put into an error state.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  NumRetries?: Value<number>;
  /**
   * If a streaming output fails, the number of seconds to wait until a restart is initiated. A value of 0 means never restart.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RestartDelay?: Value<number>;
  /**
   * The number of seconds to wait before retrying a connection to the CDN if the connection is lost.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ConnectionRetryInterval?: Value<number>;
}

/**
 * The configuration of SCTE-20 plus embedded captions in the output.
 *
 * The parent of this entity is CaptionDestinationSettings.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-scte20plusembeddeddestinationsettings.html}
 **/
export interface MediaLiveChannelScte20PlusEmbeddedDestinationSettings {}

/**
 * The encoding information for one output audio.
 *
 * The parent of this entity is EncoderSettings.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-audiodescription.html}
 **/
export interface MediaLiveChannelAudioDescription {
  /**
   * The advanced audio normalization settings.
   *
   * _Required_: No
   *
   * _Type_: [AudioNormalizationSettings](aws-properties-medialive-channel-audionormalizationsettings.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AudioNormalizationSettings?: MediaLiveChannelAudioNormalizationSettings;
  /**
   * Indicates the language of the audio output track. Used only if languageControlMode is useConfigured, or there is no ISO 639 language code specified in the input.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  LanguageCode?: Value<string>;
  /**
   * The settings that control how input audio channels are remixed into the output audio channels.
   *
   * _Required_: No
   *
   * _Type_: [RemixSettings](aws-properties-medialive-channel-remixsettings.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RemixSettings?: MediaLiveChannelRemixSettings;
  /**
   * The name of the AudioSelector that is used as the source for this AudioDescription.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AudioSelectorName?: Value<string>;
  /**
   * Used for Microsoft Smooth and Apple HLS outputs. Indicates the name displayed by the player (for example, English or Director Commentary).
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  StreamName?: Value<string>;
  /**
   * Choosing followInput causes the ISO 639 language code of the output to follow the ISO 639 language code of the input. The languageCode setting is used when useConfigured is set, or when followInput is selected but there is no ISO 639 language code specified by the input.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  LanguageCodeControl?: Value<string>;
  /**
   * Applies only if audioTypeControl is useConfigured. The values for audioType are defined in ISO-IEC 13818-1.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AudioType?: Value<string>;
  /**
   * Determines how audio type is determined. followInput: If the input contains an ISO 639 audioType, then that value is passed through to the output. If the input contains no ISO 639 audioType, the value in Audio Type is included in the output. useConfigured: The value in Audio Type is included in the output. Note that this field and audioType are both ignored if inputType is broadcasterMixedAd.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AudioTypeControl?: Value<string>;
  /**
   * The audio codec settings.
   *
   * _Required_: No
   *
   * _Type_: [AudioCodecSettings](aws-properties-medialive-channel-audiocodecsettings.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CodecSettings?: MediaLiveChannelAudioCodecSettings;
  /**
   * The name of this AudioDescription. Outputs use this name to uniquely identify this AudioDescription. Description names should be unique within this channel.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Name?: Value<string>;
  /**
   * Settings to configure one or more solutions that insert audio watermarks in the audio encode
   *
   * _Required_: No
   *
   * _Type_: [AudioWatermarkSettings](aws-properties-medialive-channel-audiowatermarksettings.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AudioWatermarkingSettings?: MediaLiveChannelAudioWatermarkSettings;
}

/**
 * The configuration of an RTMP output group.
 *
 * The parent of this entity is OutputGroupSettings.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-rtmpgroupsettings.html}
 **/
export interface MediaLiveChannelRtmpGroupSettings {
  /**
   * An authentication scheme to use when connecting with a CDN.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AuthenticationScheme?: Value<string>;
  /**
   * The cache length, in seconds, that is used to calculate buffer size.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CacheLength?: Value<number>;
  /**
   * Choose the ad marker type for this output group. MediaLive will create a message based on the content of each SCTE-35 message, format it for that marker type, and insert it in the datastream.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AdMarkers?: List<Value<string>>;
  /**
   * Controls the behavior of this RTMP group if the input becomes unavailable. emitOutput: Emit a slate until the input returns. pauseOutput: Stop transmitting data until the input returns. This does not close the underlying RTMP connection.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  InputLossAction?: Value<string>;
  /**
   * If a streaming output fails, the number of seconds to wait until a restart is initiated. A value of 0 means never restart.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RestartDelay?: Value<number>;
  /**
   * Controls the types of data that pass to onCaptionInfo outputs. If set to all, 608 and 708 carried DTVCC data is passed. If set to field1AndField2608, DTVCC data is stripped out, but 608 data from both fields is passed. If set to field1608, only the data carried in 608 from field 1 video is passed.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CaptionData?: Value<string>;
  /**
   * Controls behavior when the content cache fills up. If a remote origin server stalls the RTMP connection and doesn't accept content fast enough, the media cache fills up. When the cache reaches the duration specified by cacheLength, the cache stops accepting new content. If set to disconnectImmediately, the RTMP output forces a disconnect. Clear the media cache, and reconnect after restartDelay seconds. If set to waitForServer, the RTMP output waits up to 5 minutes to allow the origin server to begin accepting data again.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CacheFullBehavior?: Value<string>;
}

/**
 * Configuration of a Microsoft Smooth output.
 *
 * The parent of this entity is OutputSettings.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-mssmoothoutputsettings.html}
 **/
export interface MediaLiveChannelMsSmoothOutputSettings {
  /**
   * A string that is concatenated to the end of the destination file name. This is required for multiple outputs of the same type.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  NameModifier?: Value<string>;
  /**
   * Only applicable when this output is referencing an H.265 video description. Specifies whether MP4 segments should be packaged as HEV1 or HVC1.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  H265PackagingType?: Value<string>;
}

/**
 * The configuration of key provider settings.
 *
 * The parent of this entity is HlsGroupSettings.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-keyprovidersettings.html}
 **/
export interface MediaLiveChannelKeyProviderSettings {
  /**
   * The configuration of static key settings.
   *
   * _Required_: No
   *
   * _Type_: [StaticKeySettings](aws-properties-medialive-channel-statickeysettings.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  StaticKeySettings?: MediaLiveChannelStaticKeySettings;
}

/**
 * Settings to configure the motion graphics overlay to use an HTML asset.
 *
 * The parent of this entity is MotionGraphicsSetting.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-htmlmotiongraphicssettings.html}
 **/
export interface MediaLiveChannelHtmlMotionGraphicsSettings {}

/**
 * Sets up Amazon S3 as the destination for this HLS output.
 *
 * The parent of this entity is HlsCdnSettings.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-hlss3settings.html}
 **/
export interface MediaLiveChannelHlsS3Settings {
  /**
   * Specify the canned ACL to apply to each S3 request. Defaults to none.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CannedAcl?: Value<string>;
}

/**
 * Passthrough applies no color space conversion to the output.
 *
 * The parents of this entity are H264ColorSpaceSettings and H265ColorSpaceSettings.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-colorspacepassthroughsettings.html}
 **/
export interface MediaLiveChannelColorSpacePassthroughSettings {}

/**
 * The configuration of a MediaStore container as the destination for an HLS output.
 *
 * The parent of this entity is HlsCdnSettings.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-hlsmediastoresettings.html}
 **/
export interface MediaLiveChannelHlsMediaStoreSettings {
  /**
   * The size, in seconds, of the file cache for streaming outputs.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FilecacheDuration?: Value<number>;
  /**
   * The number of retry attempts that are made before the channel is put into an error state.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  NumRetries?: Value<number>;
  /**
   * When set to temporal, output files are stored in non-persistent memory for faster reading and writing.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MediaStoreStorageClass?: Value<string>;
  /**
   * If a streaming output fails, the number of seconds to wait until a restart is initiated. A value of 0 means never restart.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RestartDelay?: Value<number>;
  /**
   * The number of seconds to wait before retrying a connection to the CDN if the connection is lost.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ConnectionRetryInterval?: Value<number>;
}

/**
 * Settings for the M3U8 container.
 *
 * The parent of this entity is StandardHlsSettings.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-m3u8settings.html}
 **/
export interface MediaLiveChannelM3u8Settings {
  /**
   * The number of milliseconds between instances of this table in the output transport stream. A value of "0" writes out the PMT once per segment file.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PatInterval?: Value<number>;
  /**
   * The value of the program number field in the Program Map Table (PMT).
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ProgramNum?: Value<number>;
  /**
   * The maximum time, in milliseconds, between Program Clock References (PCRs) inserted into the transport stream.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PcrPeriod?: Value<number>;
  /**
   * The number of milliseconds between instances of this table in the output transport stream. A value of "0" writes out the PMT once per segment file.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PmtInterval?: Value<number>;
  /**
   * If set to passthrough, Nielsen inaudible tones for media tracking will be detected in the input audio and an equivalent ID3 tag will be inserted in the output.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  NielsenId3Behavior?: Value<string>;
  /**
   * The PID of the Program Clock Reference (PCR) in the transport stream. When no value is given, MediaLive assigns the same value as the video PID. You can enter the value as a decimal or hexadecimal value.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PcrPid?: Value<string>;
  /**
   * The PID of the elementary video stream in the transport stream. You can enter the value as a decimal or hexadecimal value.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  VideoPid?: Value<string>;
  /**
   * The number of audio frames to insert for each PES packet.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AudioFramesPerPes?: Value<number>;
  /**
   * The value of the transport stream ID field in the Program Map Table (PMT).
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TransportStreamId?: Value<number>;
  /**
   * The PID for the Program Map Table (PMT) in the transport stream. You can enter the value as a decimal or hexadecimal value.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PmtPid?: Value<string>;
  /**
   * The PID of the SCTE-35 stream in the transport stream. You can enter the value as a decimal or hexadecimal value.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Scte35Pid?: Value<string>;
  /**
   * If set to passthrough, passes any SCTE-35 signals from the input source to this output.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Scte35Behavior?: Value<string>;
  /**
   * This parameter is unused and deprecated.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  EcmPid?: Value<string>;
  /**
   * The PID of the timed metadata stream in the transport stream. You can enter the value as a decimal or hexadecimal value. Valid values are 32 (or 0x20)..8182 (or 0x1ff6).
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TimedMetadataPid?: Value<string>;
  /**
   * The PID of the elementary audio streams in the transport stream. Multiple values are accepted, and can be entered in ranges or by comma separation. You can enter the value as a decimal or hexadecimal value.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AudioPids?: Value<string>;
  /**
   * When set to pcrEveryPesPacket, a Program Clock Reference value is inserted for every Packetized Elementary Stream (PES) header. This parameter is effective only when the PCR PID is the same as the video or audio elementary stream.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PcrControl?: Value<string>;
  /**
   * When set to passthrough, timed metadata is passed through from input to output.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TimedMetadataBehavior?: Value<string>;
}

/**
 * The configuration of a UDP output group.
 *
 * The parent of this entity is OutputGroupSettings.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-udpgroupsettings.html}
 **/
export interface MediaLiveChannelUdpGroupSettings {
  /**
   * Indicates the ID3 frame that has the timecode.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TimedMetadataId3Frame?: Value<string>;
  /**
   * The timed metadata interval in seconds.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TimedMetadataId3Period?: Value<number>;
  /**
   * Specifies the behavior of the last resort when the input video is lost, and no more backup inputs are available. When dropTs is selected, the entire transport stream stops emitting. When dropProgram is selected, the program can be dropped from the transport stream (and replaced with null packets to meet the TS bitrate requirement). Or when emitProgram is selected, the transport stream continues to be produced normally with repeat frames, black frames, or slate frames substituted for the absent input video.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  InputLossAction?: Value<string>;
}

/**
 * The settings for remixing audio in the output.
 *
 * The parent of this entity is AudioDescription.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-remixsettings.html}
 **/
export interface MediaLiveChannelRemixSettings {
  /**
   * The number of output channels to be produced. Valid values: 1, 2, 4, 6, 8.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ChannelsOut?: Value<number>;
  /**
   * A mapping of input channels to output channels, with appropriate gain adjustments.
   *
   * _Required_: No
   *
   * _Type_: List of [AudioChannelMapping](aws-properties-medialive-channel-audiochannelmapping.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ChannelMappings?: List<MediaLiveChannelAudioChannelMapping>;
  /**
   * The number of input channels to be used.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ChannelsIn?: Value<number>;
}

/**
 * Settings for the temporal filter to apply to the video.
 *
 * The parents of this entity are H264FilterSettings, H265FilterSettings, and Mpeg2FilterSettings.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-temporalfiltersettings.html}
 **/
export interface MediaLiveChannelTemporalFilterSettings {
  /**
   * If you enable this filter, the results are the following: - If the source content is noisy (it contains excessive digital artifacts), the filter cleans up the source. - If the source content is already clean, the filter tends to decrease the bitrate, especially when the rate control mode is QVBR.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PostFilterSharpening?: Value<string>;
  /**
   * Choose a filter strength. We recommend a strength of 1 or 2. A higher strength might take out good information, resulting in an image that is overly soft.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Strength?: Value<string>;
}
export interface MediaLiveChannelProperties {
  /**
   * The list of input attachments for the channel.
   *
   * _Required_: No
   *
   * _Type_: List of [InputAttachment](aws-properties-medialive-channel-inputattachment.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  InputAttachments?: List<MediaLiveChannelInputAttachment>;
  /**
   * The input specification for this channel. It specifies the key characteristics of the inputs for this channel: the maximum bitrate, the resolution, and the codec.
   *
   * _Required_: No
   *
   * _Type_: [InputSpecification](aws-properties-medialive-channel-inputspecification.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  InputSpecification?: MediaLiveChannelInputSpecification;
  /**
   * The class for this channel. For a channel with two pipelines, the class is STANDARD. For a channel with one pipeline, the class is SINGLE_PIPELINE.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ChannelClass?: Value<string>;
  /**
   * The encoding configuration for the output content.
   *
   * _Required_: No
   *
   * _Type_: [EncoderSettings](aws-properties-medialive-channel-encodersettings.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  EncoderSettings?: MediaLiveChannelEncoderSettings;
  /**
   * The settings that identify the destination for the outputs in this MediaLive output package.
   *
   * _Required_: No
   *
   * _Type_: List of [OutputDestination](aws-properties-medialive-channel-outputdestination.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Destinations?: List<MediaLiveChannelOutputDestination>;
  /**
   * Settings to enable VPC mode in the channel, so that the endpoints for all outputs are in your VPC.
   *
   * _Required_: No
   *
   * _Type_: [VpcOutputSettings](aws-properties-medialive-channel-vpcoutputsettings.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Vpc?: MediaLiveChannelVpcOutputSettings;
  /**
   * Specification of CDI inputs for this channel.
   *
   * _Required_: No
   *
   * _Type_: [CdiInputSpecification](aws-properties-medialive-channel-cdiinputspecification.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CdiInputSpecification?: MediaLiveChannelCdiInputSpecification;
  /**
   * The verbosity for logging activity for this channel. Charges for logging (which are generated through Amazon CloudWatch Logging) are higher for higher verbosities.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  LogLevel?: Value<string>;
  /**
   * The IAM role for MediaLive to assume when running this channel. The role is identified by its ARN.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RoleArn?: Value<string>;
  /**
   * A collection of tags for this channel. Each tag is a key-value pair.
   *
   * _Required_: No
   *
   * _Type_: Json
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Tags?: { [key: string]: any };
  /**
   * A name for this audio selector. The AudioDescription (in an output) references this name in order to identify a specific input audio to include in that output.
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
 * The AWS::MediaLive::Channel resource is a MediaLive resource type that creates a channel.
 *
 * A MediaLive channel ingests and transcodes (decodes and encodes) source content from the inputs that are attached to that channel, and packages the new content into outputs.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-channel.html}
 */
export interface MediaLiveChannelResource {
  Type: 'AWS::MediaLive::Channel';
  Properties: MediaLiveChannelProperties;
}
