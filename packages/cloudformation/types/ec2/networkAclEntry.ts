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

/**
 * Describes a range of ports.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-networkaclentry-portrange.html}
 **/
export interface EC2NetworkAclEntryPortRange {
  /**
   * The first port in the range. Required if you specify 6 (TCP) or 17 (UDP) for the protocol parameter.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  From?: Value<number>;
  /**
   * The last port in the range. Required if you specify 6 (TCP) or 17 (UDP) for the protocol parameter.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  To?: Value<number>;
}

/**
 * Describes the ICMP type and code.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-networkaclentry-icmp.html}
 **/
export interface EC2NetworkAclEntryIcmp {
  /**
   * The Internet Control Message Protocol (ICMP) type. You can use -1 to specify all ICMP types. Conditional requirement: Required if you specify 1 (ICMP) for the `CreateNetworkAclEntry` protocol parameter.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Type?: Value<number>;
  /**
   * The Internet Control Message Protocol (ICMP) code. You can use -1 to specify all ICMP codes for the given ICMP type. Requirement is conditional: Required if you specify 1 (ICMP) for the protocol parameter.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Code?: Value<number>;
}
export interface EC2NetworkAclEntryProperties {
  /**
   * The range of port numbers for the UDP/TCP protocol. Conditional required if specifying 6 (TCP) or 17 (UDP) for the protocol parameter.
   *
   * _Required_: No
   *
   * _Type_: [PortRange](aws-properties-ec2-networkaclentry-portrange.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PortRange?: EC2NetworkAclEntryPortRange;
  /**
   * The ID of the ACL for the entry.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  NetworkAclId: Value<string>;
  /**
   * Whether to allow or deny traffic that matches the rule; valid values are "allow" or "deny".
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Allowed values_: `allow | deny`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RuleAction: Value<string>;
  /**
   * The IPv4 CIDR range to allow or deny, in CIDR notation (for example, 172.16.0.0/24). Requirement is conditional: You must specify the `CidrBlock` or `Ipv6CidrBlock` property.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CidrBlock?: Value<string>;
  /**
   * Whether this rule applies to egress traffic from the subnet (`true`) or ingress traffic to the subnet (`false`). By default, AWS CloudFormation specifies `false`.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Egress?: Value<boolean>;
  /**
   * Rule number to assign to the entry, such as 100. ACL entries are processed in ascending order by rule number. Entries can't use the same rule number unless one is an egress rule and the other is an ingress rule.
   *
   * _Required_: Yes
   *
   * _Type_: Integer
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  RuleNumber: Value<number>;
  /**
   * The IPv6 network range to allow or deny, in CIDR notation. Requirement is conditional: You must specify the `CidrBlock` or `Ipv6CidrBlock` property.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Ipv6CidrBlock?: Value<string>;
  /**
   * The IP protocol that the rule applies to. You must specify -1 or a protocol number. You can specify -1 for all protocols.
   *
   * If you specify -1, all ports are opened and the `PortRange` property is ignored.
   *
   * _Required_: Yes
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Protocol: Value<number>;
  /**
   * The Internet Control Message Protocol (ICMP) code and type. Requirement is conditional: Required if specifying 1 (ICMP) for the protocol parameter.
   *
   * _Required_: No
   *
   * _Type_: [Icmp](aws-properties-ec2-networkaclentry-icmp.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Icmp?: EC2NetworkAclEntryIcmp;
}

/**
 * Specifies an entry, known as a rule, in a network ACL with a rule number you specify. Each network ACL has a set of numbered ingress rules and a separate set of numbered egress rules.
 *
 * For information about the protocol value, see [Protocol Numbers](https://www.iana.org/assignments/protocol-numbers/protocol-numbers.xhtml) on the Internet Assigned Numbers Authority (IANA) website.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-networkaclentry.html}
 */
export interface EC2NetworkAclEntryResource {
  Type: 'AWS::EC2::NetworkAclEntry';
  Properties: EC2NetworkAclEntryProperties;
}
