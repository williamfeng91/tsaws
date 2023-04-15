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
 * The `HlsIngest` property type specifies Property description not available. for an [AWS::MediaPackage::Channel](aws-resource-mediapackage-channel.md).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediapackage-channel-hlsingest.html}
 **/
export interface MediaPackageChannelHlsIngest {
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: List of [IngestEndpoint](aws-properties-mediapackage-channel-ingestendpoint.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ingestEndpoints?: List<MediaPackageChannelIngestEndpoint>;
}

/**
 * The access log configuration parameters for your channel.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediapackage-channel-logconfiguration.html}
 **/
export interface MediaPackageChannelLogConfiguration {
  /**
   * Sets a custom Amazon CloudWatch log group name.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  LogGroupName?: Value<string>;
}

/**
 * The `IngestEndpoint` property type specifies Property description not available. for an [AWS::MediaPackage::Channel](aws-resource-mediapackage-channel.md).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediapackage-channel-ingestendpoint.html}
 **/
export interface MediaPackageChannelIngestEndpoint {
  /**
   * Property description not available.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Username: Value<string>;
  /**
   * Property description not available.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Id: Value<string>;
  /**
   * Property description not available.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Url: Value<string>;
  /**
   * Property description not available.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Password: Value<string>;
}
export interface MediaPackageChannelProperties {
  /**
   * Any descriptive information that you want to add to the channel for future identification purposes.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Description?: Value<string>;
  /**
   * Configures ingress access logs.
   *
   * _Required_: No
   *
   * _Type_: [LogConfiguration](aws-properties-mediapackage-channel-logconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  IngressAccessLogs?: MediaPackageChannelLogConfiguration;
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: [HlsIngest](aws-properties-mediapackage-channel-hlsingest.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  HlsIngest?: MediaPackageChannelHlsIngest;
  /**
   * Unique identifier that you assign to the channel.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Id: Value<string>;
  /**
   * Configures egress access logs.
   *
   * _Required_: No
   *
   * _Type_: [LogConfiguration](aws-properties-mediapackage-channel-logconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  EgressAccessLogs?: MediaPackageChannelLogConfiguration;
  /**
   * The tags to assign to the channel.
   *
   * _Required_: No
   *
   * _Type_: List of [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Tags?: List<ResourceTag>;
}

/**
 * Creates a channel to receive content.
 *
 * After it's created, a channel provides static input URLs. These URLs remain the same throughout the lifetime of the channel, regardless of any failures or upgrades that might occur. Use these URLs to configure the outputs of your upstream encoder.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackage-channel.html}
 */
export interface MediaPackageChannelResource {
  Type: 'AWS::MediaPackage::Channel';
  Properties: MediaPackageChannelProperties;
}
