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
import { ResourceTag } from '../../shared-types/resource';

/**
 * Indicates whether client connect options are enabled. The default is `false` (not enabled).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-clientvpnendpoint-clientconnectoptions.html}
 **/
export interface EC2ClientVpnEndpointClientConnectOptions {
  /**
   * The Amazon Resource Name (ARN) of the AWS Lambda function used for connection authorization.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  LambdaFunctionArn?: Value<string>;
  /**
   * Indicates whether client connect options are enabled. The default is `false` (not enabled).
   *
   * _Required_: Yes
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Enabled: Value<boolean>;
}

/**
 * Describes the client connection logging options for the Client VPN endpoint.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-clientvpnendpoint-connectionlogoptions.html}
 **/
export interface EC2ClientVpnEndpointConnectionLogOptions {
  /**
   * The name of the CloudWatch Logs log stream to which the connection data is published.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CloudwatchLogStream?: Value<string>;
  /**
   * Indicates whether connection logging is enabled.
   *
   * _Required_: Yes
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Enabled: Value<boolean>;
  /**
   * The name of the CloudWatch Logs log group. Required if connection logging is enabled.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CloudwatchLogGroup?: Value<string>;
}

/**
 * Options for enabling a customizable text banner that will be displayed on AWS provided clients when a VPN session is established.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-clientvpnendpoint-clientloginbanneroptions.html}
 **/
export interface EC2ClientVpnEndpointClientLoginBannerOptions {
  /**
   * Enable or disable a customizable text banner that will be displayed on AWS provided clients when a VPN session is established.
   *
   * Valid values: `true | false`
   *
   * Default value: `false`
   *
   * _Required_: Yes
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Enabled: Value<boolean>;
  /**
   * Customizable text that will be displayed in a banner on AWS provided clients when a VPN session is established. UTF-8 encoded characters only. Maximum of 1400 characters.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  BannerText?: Value<string>;
}

/**
 * Describes the Active Directory to be used for client authentication.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-clientvpnendpoint-directoryserviceauthenticationrequest.html}
 **/
export interface EC2ClientVpnEndpointDirectoryServiceAuthenticationRequest {
  /**
   * The ID of the Active Directory to be used for authentication.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DirectoryId: Value<string>;
}

/**
 * The tags to apply to a resource when the resource is being created. When you specify a tag, you must specify the resource type to tag, otherwise the request will fail.
 *
 * **Note**
 *
 * The `Valid Values` lists all the resource types that can be tagged. However, the action you're using might not support tagging all of these resource types. If you try to tag a resource type that is unsupported for the action you're using, you'll get an error.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-clientvpnendpoint-tagspecification.html}
 **/
export interface EC2ClientVpnEndpointTagSpecification {
  /**
   * The type of resource to tag.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Allowed values_: `capacity-reservation | capacity-reservation-fleet | carrier-gateway | client-vpn-endpoint | coip-pool | customer-gateway | dedicated-host | dhcp-options | egress-only-internet-gateway | elastic-gpu | elastic-ip | export-image-task | export-instance-task | fleet | fpga-image | host-reservation | image | import-image-task | import-snapshot-task | instance | instance-event-window | internet-gateway | ipam | ipam-pool | ipam-resource-discovery | ipam-resource-discovery-association | ipam-scope | ipv4pool-ec2 | ipv6pool-ec2 | key-pair | launch-template | local-gateway | local-gateway-route-table | local-gateway-route-table-virtual-interface-group-association | local-gateway-route-table-vpc-association | local-gateway-virtual-interface | local-gateway-virtual-interface-group | natgateway | network-acl | network-insights-access-scope | network-insights-access-scope-analysis | network-insights-analysis | network-insights-path | network-interface | placement-group | prefix-list | replace-root-volume-task | reserved-instances | route-table | security-group | security-group-rule | snapshot | spot-fleet-request | spot-instances-request | subnet | subnet-cidr-reservation | traffic-mirror-filter | traffic-mirror-filter-rule | traffic-mirror-session | traffic-mirror-target | transit-gateway | transit-gateway-attachment | transit-gateway-connect-peer | transit-gateway-multicast-domain | transit-gateway-policy-table | transit-gateway-route-table | transit-gateway-route-table-announcement | verified-access-endpoint | verified-access-group | verified-access-instance | verified-access-policy | verified-access-trust-provider | volume | vpc | vpc-block-public-access-exclusion | vpc-endpoint | vpc-endpoint-connection | vpc-endpoint-connection-device-type | vpc-endpoint-service | vpc-endpoint-service-permission | vpc-flow-log | vpc-peering-connection | vpn-connection | vpn-connection-device-type | vpn-gateway`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ResourceType: Value<string>;
  /**
   * The tags to apply to the resource.
   *
   * _Required_: Yes
   *
   * _Type_: List of [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Tags: List<ResourceTag>;
}

/**
 * Describes the authentication method to be used by a Client VPN endpoint. For more information, see [Authentication](https://docs.aws.amazon.com/vpn/latest/clientvpn-admin/authentication-authrization.html#client-authentication) in the _ AWS Client VPN Administrator Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-clientvpnendpoint-clientauthenticationrequest.html}
 **/
export interface EC2ClientVpnEndpointClientAuthenticationRequest {
  /**
   * Information about the authentication certificates to be used, if applicable. You must provide this information if **Type** is `certificate-authentication`.
   *
   * _Required_: No
   *
   * _Type_: [CertificateAuthenticationRequest](aws-properties-ec2-clientvpnendpoint-certificateauthenticationrequest.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MutualAuthentication?: EC2ClientVpnEndpointCertificateAuthenticationRequest;
  /**
   * The type of client authentication to be used.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Allowed values_: `certificate-authentication | directory-service-authentication | federated-authentication`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Type: Value<string>;
  /**
   * Information about the IAM SAML identity provider, if applicable.
   *
   * _Required_: No
   *
   * _Type_: [FederatedAuthenticationRequest](aws-properties-ec2-clientvpnendpoint-federatedauthenticationrequest.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FederatedAuthentication?: EC2ClientVpnEndpointFederatedAuthenticationRequest;
  /**
   * Information about the Active Directory to be used, if applicable. You must provide this information if **Type** is `directory-service-authentication`.
   *
   * _Required_: No
   *
   * _Type_: [DirectoryServiceAuthenticationRequest](aws-properties-ec2-clientvpnendpoint-directoryserviceauthenticationrequest.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ActiveDirectory?: EC2ClientVpnEndpointDirectoryServiceAuthenticationRequest;
}

/**
 * The IAM SAML identity provider used for federated authentication.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-clientvpnendpoint-federatedauthenticationrequest.html}
 **/
export interface EC2ClientVpnEndpointFederatedAuthenticationRequest {
  /**
   * The Amazon Resource Name (ARN) of the IAM SAML identity provider for the self-service portal.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SelfServiceSAMLProviderArn?: Value<string>;
  /**
   * The Amazon Resource Name (ARN) of the IAM SAML identity provider.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SAMLProviderArn: Value<string>;
}

/**
 * Information about the client certificate to be used for authentication.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-clientvpnendpoint-certificateauthenticationrequest.html}
 **/
export interface EC2ClientVpnEndpointCertificateAuthenticationRequest {
  /**
   * The ARN of the client certificate. The certificate must be signed by a certificate authority (CA) and it must be provisioned in AWS Certificate Manager (ACM).
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ClientRootCertificateChainArn: Value<string>;
}
export interface EC2ClientVpnEndpointProperties {
  /**
   * The IPv4 address range, in CIDR notation, from which to assign client IP addresses. The address range cannot overlap with the local CIDR of the VPC in which the associated subnet is located, or the routes that you add manually. The address range cannot be changed after the Client VPN endpoint has been created. Client CIDR range must have a size of at least /22 and must not be greater than /12.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ClientCidrBlock: Value<string>;
  /**
   * The options for managing connection authorization for new client connections.
   *
   * _Required_: No
   *
   * _Type_: [ClientConnectOptions](aws-properties-ec2-clientvpnendpoint-clientconnectoptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ClientConnectOptions?: EC2ClientVpnEndpointClientConnectOptions;
  /**
   * A brief description of the Client VPN endpoint.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Description?: Value<string>;
  /**
   * The tags to apply to the Client VPN endpoint during creation.
   *
   * _Required_: No
   *
   * _Type_: List of [TagSpecification](aws-properties-ec2-clientvpnendpoint-tagspecification.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  TagSpecifications?: List<EC2ClientVpnEndpointTagSpecification>;
  /**
   * Information about the authentication method to be used to authenticate clients.
   *
   * _Required_: Yes
   *
   * _Type_: List of [ClientAuthenticationRequest](aws-properties-ec2-clientvpnendpoint-clientauthenticationrequest.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  AuthenticationOptions: List<EC2ClientVpnEndpointClientAuthenticationRequest>;
  /**
   * The ARN of the server certificate. For more information, see the [AWS Certificate Manager User Guide](https://docs.aws.amazon.com/acm/latest/userguide/).
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ServerCertificateArn: Value<string>;
  /**
   * The maximum VPN session duration time in hours.
   *
   * Valid values: `8 | 10 | 12 | 24`
   *
   * Default value: `24`
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SessionTimeoutHours?: Value<number>;
  /**
   * Information about the DNS servers to be used for DNS resolution. A Client VPN endpoint can have up to two DNS servers. If no DNS server is specified, the DNS address configured on the device is used for the DNS server.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DnsServers?: List<Value<string>>;
  /**
   * The IDs of one or more security groups to apply to the target network. You must also specify the ID of the VPC that contains the security groups.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SecurityGroupIds?: List<Value<string>>;
  /**
   * Information about the client connection logging options.
   *
   * If you enable client connection logging, data about client connections is sent to a Cloudwatch Logs log stream. The following information is logged:
   */
  ConnectionLogOptions: EC2ClientVpnEndpointConnectionLogOptions;
  /**
   * Indicates whether split-tunnel is enabled on the AWS Client VPN endpoint.
   *
   * By default, split-tunnel on a VPN endpoint is disabled.
   *
   * For information about split-tunnel VPN endpoints, see [Split-tunnel AWS Client VPN endpoint](https://docs.aws.amazon.com/vpn/latest/clientvpn-admin/split-tunnel-vpn.html) in the _ AWS Client VPN Administrator Guide_.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SplitTunnel?: Value<boolean>;
  /**
   * Options for enabling a customizable text banner that will be displayed on AWS provided clients when a VPN session is established.
   *
   * _Required_: No
   *
   * _Type_: [ClientLoginBannerOptions](aws-properties-ec2-clientvpnendpoint-clientloginbanneroptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ClientLoginBannerOptions?: EC2ClientVpnEndpointClientLoginBannerOptions;
  /**
   * The ID of the VPC to associate with the Client VPN endpoint. If no security group IDs are specified in the request, the default security group for the VPC is applied.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  VpcId?: Value<string>;
  /**
   * Specify whether to enable the self-service portal for the Client VPN endpoint.
   *
   * Default Value: `enabled`
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `disabled | enabled`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SelfServicePortal?: Value<string>;
  /**
   * The transport protocol to be used by the VPN session.
   *
   * Default value: `udp`
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `tcp | udp`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  TransportProtocol?: Value<string>;
  /**
   * The port number to assign to the Client VPN endpoint for TCP and UDP traffic.
   *
   * Valid Values: `443` | `1194`
   *
   * Default Value: `443`
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  VpnPort?: Value<number>;
}

/**
 * Specifies a Client VPN endpoint. A Client VPN endpoint is the resource you create and configure to enable and manage client VPN sessions. It is the destination endpoint at which all client VPN sessions are terminated.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-clientvpnendpoint.html}
 */
export interface EC2ClientVpnEndpointResource {
  Type: 'AWS::EC2::ClientVpnEndpoint';
  Properties: EC2ClientVpnEndpointProperties;
}
