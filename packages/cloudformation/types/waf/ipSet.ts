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
 *
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-waf-ipset-ipsetdescriptors.html}
 **/
export interface WAFIPSetIPSetDescriptor {
  Type: Value<string>;
  Value: Value<string>;
}
export interface WAFIPSetProperties {
  /**
   * The IP address type (`IPV4` or `IPV6`) and the IP address range (in CIDR notation) that web requests originate from. If the `WebACL` is associated with an Amazon CloudFront distribution and the viewer did not use an HTTP proxy or a load balancer to send the request, this is the value of the c-ip field in the CloudFront access logs.
   *
   * _Required_: No
   *
   * _Type_: List of [IPSetDescriptor](aws-properties-waf-ipset-ipsetdescriptors.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  IPSetDescriptors?: List<WAFIPSetIPSetDescriptor>;
  /**
   * The name of the `IPSet`. You can't change the name of an `IPSet` after you create it.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `128`
   *
   * _Pattern_: `.*S.*`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Name: Value<string>;
}

/**
 * **Note**
 *
 * This is ** AWS WAF Classic** documentation. For more information, see [AWS WAF Classic](https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html) in the developer guide.
 *
 * **For the latest version of AWS WAF **, use the AWS WAFV2 API and see the [AWS WAF Developer Guide](https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html). With the latest version, AWS WAF has a single set of endpoints for regional and global use.
 *
 * Contains one or more IP addresses or blocks of IP addresses specified in Classless Inter-Domain Routing (CIDR) notation. AWS WAF supports IPv4 address ranges: /8 and any range between /16 through /32. AWS WAF supports IPv6 address ranges: /24, /32, /48, /56, /64, and /128.
 *
 * To specify an individual IP address, you specify the four-part IP address followed by a `/32`, for example, 192.0.2.0/32. To block a range of IP addresses, you can specify /8 or any range between /16 through /32 (for IPv4) or /24, /32, /48, /56, /64, or /128 (for IPv6). For more information about CIDR notation, see the Wikipedia entry [Classless Inter-Domain Routing](https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-waf-ipset.html}
 */
export interface WAFIPSetResource {
  Type: 'AWS::WAF::IPSet';
  Properties: WAFIPSetProperties;
}
