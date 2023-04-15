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

export interface EC2DHCPOptionsProperties {
  /**
   * The IPv4 addresses of up to four NetBIOS name servers.
   *
   * _Required_: Conditional
   *
   * _Type_: List of String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  NetbiosNameServers?: List<Value<string>>;
  /**
   * The IPv4 addresses of up to four Network Time Protocol (NTP) servers.
   *
   * _Required_: Conditional
   *
   * _Type_: List of String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  NtpServers?: List<Value<string>>;
  /**
   * This value is used to complete unqualified DNS hostnames. If you're using AmazonProvidedDNS in `us-east-1`, specify `ec2.internal`. If you're using AmazonProvidedDNS in another Region, specify _region_.`compute.internal` (for example, `ap-northeast-1.compute.internal`). Otherwise, specify a domain name (for example, _MyCompany.com_).
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  DomainName?: Value<string>;
  /**
   * The NetBIOS node type (1, 2, 4, or 8). We recommend that you specify 2 (broadcast and multicast are not currently supported).
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  NetbiosNodeType?: Value<number>;
  /**
   * The IPv4 addresses of up to four domain name servers, or `AmazonProvidedDNS`. The default is `AmazonProvidedDNS`. To have your instance receive a custom DNS hostname as specified in `DomainName`, you must set this property to a custom DNS server.
   *
   * _Required_: Conditional
   *
   * _Type_: List of String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  DomainNameServers?: List<Value<string>>;
  /**
   * Any tags assigned to the DHCP options set.
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
 * Specifies a set of DHCP options for your VPC.
 *
 * You must specify at least one of the following properties: `DomainNameServers`, `NetbiosNameServers`, `NtpServers`. If you specify `NetbiosNameServers`, you must specify `NetbiosNodeType`.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-dhcpoptions.html}
 */
export interface EC2DHCPOptionsResource {
  Type: 'AWS::EC2::DHCPOptions';
  Properties: EC2DHCPOptionsProperties;
}
