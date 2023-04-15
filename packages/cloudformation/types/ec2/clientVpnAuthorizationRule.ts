/**
 * Supported regions:
 * - ap-northeast-1 (version 119.1.0)
 * - ap-northeast-2 (version 119.1.0)
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

export interface EC2ClientVpnAuthorizationRuleProperties {
  /**
   * The ID of the Client VPN endpoint.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ClientVpnEndpointId: Value<string>;
  /**
   * A brief description of the authorization rule.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Description?: Value<string>;
  /**
   * The ID of the group to grant access to, for example, the Active Directory group or identity provider (IdP) group. Required if `AuthorizeAllGroups` is `false` or not specified.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  AccessGroupId?: Value<string>;
  /**
   * The IPv4 address range, in CIDR notation, of the network for which access is being authorized.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  TargetNetworkCidr: Value<string>;
  /**
   * Indicates whether to grant access to all clients. Specify `true` to grant all clients who successfully establish a VPN connection access to the network. Must be set to `true` if `AccessGroupId` is not specified.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  AuthorizeAllGroups?: Value<boolean>;
}

/**
 * Specifies an ingress authorization rule to add to a Client VPN endpoint. Ingress authorization rules act as firewall rules that grant access to networks. You must configure ingress authorization rules to enable clients to access resources in AWS or on-premises networks.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-clientvpnauthorizationrule.html}
 */
export interface EC2ClientVpnAuthorizationRuleResource {
  Type: 'AWS::EC2::ClientVpnAuthorizationRule';
  Properties: EC2ClientVpnAuthorizationRuleProperties;
}
