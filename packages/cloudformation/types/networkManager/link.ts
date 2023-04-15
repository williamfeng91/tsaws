/**
 * Supported regions:
 * - ap-northeast-1 (version 119.1.0)
 * - ap-northeast-2 (version 119.1.0)
 * - ap-northeast-3 (version 119.1.0)
 * - ap-south-1 (version 119.1.0)
 * - ap-southeast-1 (version 119.1.0)
 * - ap-southeast-2 (version 119.1.0)
 * - ca-central-1 (version 119.1.0)
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
 * Describes bandwidth information.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkmanager-link-bandwidth.html}
 **/
export interface NetworkManagerLinkBandwidth {
  /**
   * Download speed in Mbps.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DownloadSpeed?: Value<number>;
  /**
   * Upload speed in Mbps.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  UploadSpeed?: Value<number>;
}
export interface NetworkManagerLinkProperties {
  /**
   * The ID of the site.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `0`
   *
   * _Maximum_: `50`
   *
   * _Pattern_: `[sS]*`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  SiteId: Value<string>;
  /**
   * The type of the link.
   *
   * Constraints: Maximum length of 128 characters. Cannot include the following characters: |  ^
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `0`
   *
   * _Maximum_: `256`
   *
   * _Pattern_: `[sS]*`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Type?: Value<string>;
  /**
   * The ID of the global network.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `0`
   *
   * _Maximum_: `50`
   *
   * _Pattern_: `[sS]*`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  GlobalNetworkId: Value<string>;
  /**
   * A description of the link.
   *
   * Constraints: Maximum length of 256 characters.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `0`
   *
   * _Maximum_: `256`
   *
   * _Pattern_: `[sS]*`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Description?: Value<string>;
  /**
   * The bandwidth for the link.
   *
   * _Required_: Yes
   *
   * _Type_: [Bandwidth](aws-properties-networkmanager-link-bandwidth.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Bandwidth: NetworkManagerLinkBandwidth;
  /**
   * The tags for the link.
   *
   * _Required_: No
   *
   * _Type_: List of [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Tags?: List<ResourceTag>;
  /**
   * The provider of the link.
   *
   * Constraints: Maximum length of 128 characters. Cannot include the following characters: |  ^
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `0`
   *
   * _Maximum_: `256`
   *
   * _Pattern_: `[sS]*`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Provider?: Value<string>;
}

/**
 * Specifies a link for a site.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-link.html}
 */
export interface NetworkManagerLinkResource {
  Type: 'AWS::NetworkManager::Link';
  Properties: NetworkManagerLinkProperties;
}
