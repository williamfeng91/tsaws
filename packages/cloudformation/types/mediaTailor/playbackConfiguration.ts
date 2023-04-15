/**
 * Supported regions:
 * - ap-northeast-1 (version 119.1.0)
 * - ap-south-1 (version 119.1.0)
 * - ap-southeast-1 (version 119.1.0)
 * - ap-southeast-2 (version 119.1.0)
 * - eu-central-1 (version 119.1.0)
 * - eu-west-1 (version 119.1.0)
 * - us-east-1 (version 119.1.0)
 * - us-east-2 (version 119.1.0)
 * - us-west-2 (version 119.1.0)
 */
import { List, Value } from '../../shared-types/dataTypes';
import { ResourceTag } from '../../shared-types/resource';

/**
 * The `CdnConfiguration` property type specifies Property description not available. for an [AWS::MediaTailor::PlaybackConfiguration](aws-resource-mediatailor-playbackconfiguration.md).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediatailor-playbackconfiguration-cdnconfiguration.html}
 **/
export interface MediaTailorPlaybackConfigurationCdnConfiguration {
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AdSegmentUrlPrefix?: Value<string>;
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ContentSegmentUrlPrefix?: Value<string>;
}

/**
 * The `ManifestProcessingRules` property type specifies Property description not available. for an [AWS::MediaTailor::PlaybackConfiguration](aws-resource-mediatailor-playbackconfiguration.md).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediatailor-playbackconfiguration-manifestprocessingrules.html}
 **/
export interface MediaTailorPlaybackConfigurationManifestProcessingRules {
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: [AdMarkerPassthrough](aws-properties-mediatailor-playbackconfiguration-admarkerpassthrough.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AdMarkerPassthrough?: MediaTailorPlaybackConfigurationAdMarkerPassthrough;
}

/**
 * The configuration for HLS content.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediatailor-playbackconfiguration-hlsconfiguration.html}
 **/
export interface MediaTailorPlaybackConfigurationHlsConfiguration {
  /**
   * The URL that is used to initiate a playback session for devices that support Apple HLS. The session uses server-side reporting.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ManifestEndpointPrefix?: Value<string>;
}

/**
 * The `AdMarkerPassthrough` property type specifies Property description not available. for an [AWS::MediaTailor::PlaybackConfiguration](aws-resource-mediatailor-playbackconfiguration.md).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediatailor-playbackconfiguration-admarkerpassthrough.html}
 **/
export interface MediaTailorPlaybackConfigurationAdMarkerPassthrough {
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Enabled?: Value<boolean>;
}

/**
 * The `AvailSuppression` property type specifies Property description not available. for an [AWS::MediaTailor::PlaybackConfiguration](aws-resource-mediatailor-playbackconfiguration.md).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediatailor-playbackconfiguration-availsuppression.html}
 **/
export interface MediaTailorPlaybackConfigurationAvailSuppression {
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Mode?: Value<string>;
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Value?: Value<string>;
}

/**
 * The `Bumper` property type specifies Property description not available. for an [AWS::MediaTailor::PlaybackConfiguration](aws-resource-mediatailor-playbackconfiguration.md).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediatailor-playbackconfiguration-bumper.html}
 **/
export interface MediaTailorPlaybackConfigurationBumper {
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  StartUrl?: Value<string>;
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  EndUrl?: Value<string>;
}

/**
 * The configuration for DASH content.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediatailor-playbackconfiguration-dashconfiguration.html}
 **/
export interface MediaTailorPlaybackConfigurationDashConfiguration {
  /**
   * The setting that controls whether MediaTailor includes the Location tag in DASH manifests. MediaTailor populates the Location tag with the URL for manifest update requests, to be used by players that don't support sticky redirects. Disable this if you have CDN routing rules set up for accessing MediaTailor manifests, and you are either using client-side reporting or your players support sticky HTTP redirects. Valid values are `DISABLED` and `EMT_DEFAULT`. The `EMT_DEFAULT` setting enables the inclusion of the tag and is the default value.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MpdLocation?: Value<string>;
  /**
   * The URL generated by MediaTailor to initiate a playback session. The session uses server-side reporting. This setting is ignored in PUT operations.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ManifestEndpointPrefix?: Value<string>;
  /**
   * The setting that controls whether MediaTailor handles manifests from the origin server as multi-period manifests or single-period manifests. If your origin server produces single-period manifests, set this to `SINGLE_PERIOD`. The default setting is `MULTI_PERIOD`. For multi-period manifests, omit this setting or set it to `MULTI_PERIOD`.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  OriginManifestType?: Value<string>;
}

/**
 * The `LivePreRollConfiguration` property type specifies Property description not available. for an [AWS::MediaTailor::PlaybackConfiguration](aws-resource-mediatailor-playbackconfiguration.md).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediatailor-playbackconfiguration-liveprerollconfiguration.html}
 **/
export interface MediaTailorPlaybackConfigurationLivePreRollConfiguration {
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AdDecisionServerUrl?: Value<string>;
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MaxDurationSeconds?: Value<number>;
}
export interface MediaTailorPlaybackConfigurationProperties {
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: [Bumper](aws-properties-mediatailor-playbackconfiguration-bumper.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Bumper?: MediaTailorPlaybackConfigurationBumper;
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: [DashConfiguration](aws-properties-mediatailor-playbackconfiguration-dashconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DashConfiguration?: MediaTailorPlaybackConfigurationDashConfiguration;
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: [CdnConfiguration](aws-properties-mediatailor-playbackconfiguration-cdnconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CdnConfiguration?: MediaTailorPlaybackConfigurationCdnConfiguration;
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: [ManifestProcessingRules](aws-properties-mediatailor-playbackconfiguration-manifestprocessingrules.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ManifestProcessingRules?: MediaTailorPlaybackConfigurationManifestProcessingRules;
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PersonalizationThresholdSeconds?: Value<number>;
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: [LivePreRollConfiguration](aws-properties-mediatailor-playbackconfiguration-liveprerollconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  LivePreRollConfiguration?: MediaTailorPlaybackConfigurationLivePreRollConfiguration;
  /**
   * The configuration for HLS content.
   *
   * _Required_: No
   *
   * _Type_: [HlsConfiguration](aws-properties-mediatailor-playbackconfiguration-hlsconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  HlsConfiguration?: MediaTailorPlaybackConfigurationHlsConfiguration;
  /**
   * Property description not available.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  VideoContentSourceUrl: Value<string>;
  /**
   * Property description not available.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Name: Value<string>;
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TranscodeProfileName?: Value<string>;
  /**
   * The player parameters and aliases used as dynamic variables during session initialization. For more information, see [Domain Variables](https://docs.aws.amazon.com/mediatailor/latest/ug/variables-domain.html).
   *
   * _Required_: No
   *
   * _Type_: Map of Json
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ConfigurationAliases?: { [key: string]: { [key: string]: any } };
  /**
   * Property description not available.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AdDecisionServerUrl: Value<string>;
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SlateAdUrl?: Value<string>;
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: [AvailSuppression](aws-properties-mediatailor-playbackconfiguration-availsuppression.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AvailSuppression?: MediaTailorPlaybackConfigurationAvailSuppression;
  /**
   * Property description not available.
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
 * Adds a new playback configuration to AWS Elemental MediaTailor.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediatailor-playbackconfiguration.html}
 */
export interface MediaTailorPlaybackConfigurationResource {
  Type: 'AWS::MediaTailor::PlaybackConfiguration';
  Properties: MediaTailorPlaybackConfigurationProperties;
}
