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

export interface NetworkManagerTransitGatewayRegistrationProperties {
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
   * The Amazon Resource Name (ARN) of the transit gateway.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `0`
   *
   * _Maximum_: `500`
   *
   * _Pattern_: `[sS]*`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  TransitGatewayArn: Value<string>;
}

/**
 * Registers a transit gateway in your global network. Not all Regions support transit gateways for global networks. For a list of the supported Regions, see [Region Availability](https://docs.aws.amazon.com/network-manager/latest/tgwnm/what-are-global-networks.html#nm-available-regions) in the _ AWS Transit Gateways for Global Networks User Guide_. The transit gateway can be in any of the supported AWS Regions, but it must be owned by the same AWS account that owns the global network. You cannot register a transit gateway in more than one global network.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-transitgatewayregistration.html}
 */
export interface NetworkManagerTransitGatewayRegistrationResource {
  Type: 'AWS::NetworkManager::TransitGatewayRegistration';
  Properties: NetworkManagerTransitGatewayRegistrationProperties;
}
