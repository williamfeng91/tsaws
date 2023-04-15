/**
 * Supported regions:
 * - eu-west-1 (version 119.1.0)
 * - us-east-1 (version 119.1.0)
 * - us-west-2 (version 119.1.0)
 */
import { List, Value } from '../../shared-types/dataTypes';

/**
 * Specifies an IP address filter.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-receiptfilter-filter.html}
 **/
export interface SESReceiptFilterFilter {
  /**
   * A structure that provides the IP addresses to block or allow, and whether to block or allow incoming mail from them.
   *
   * _Required_: Yes
   *
   * _Type_: [IpFilter](aws-properties-ses-receiptfilter-ipfilter.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  IpFilter: SESReceiptFilterIpFilter;
  /**
   * The name of the IP address filter. The name must meet the following requirements:
   */
  Name?: Value<string>;
}

/**
 * A receipt IP address filter enables you to specify whether to accept or reject mail originating from an IP address or range of IP addresses.
 *
 * For information about setting up IP address filters, see the [Amazon SES Developer Guide](https://docs.aws.amazon.com/ses/latest/dg/receiving-email-ip-filtering-console-walkthrough.html).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-receiptfilter-ipfilter.html}
 **/
export interface SESReceiptFilterIpFilter {
  /**
   * Indicates whether to block or allow incoming mail from the specified IP addresses.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Allowed values_: `Allow | Block`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Policy: Value<string>;
  /**
   * A single IP address or a range of IP addresses to block or allow, specified in Classless Inter-Domain Routing (CIDR) notation. An example of a single email address is 10.0.0.1. An example of a range of IP addresses is 10.0.0.1/24. For more information about CIDR notation, see [RFC 2317](https://tools.ietf.org/html/rfc2317).
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Cidr: Value<string>;
}
export interface SESReceiptFilterProperties {
  /**
   * A data structure that describes the IP address filter to create, which consists of a name, an IP address range, and whether to allow or block mail from it.
   *
   * _Required_: Yes
   *
   * _Type_: [Filter](aws-properties-ses-receiptfilter-filter.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Filter: SESReceiptFilterFilter;
}

/**
 * Specify a new IP address filter. You use IP address filters when you receive email with Amazon SES.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-receiptfilter.html}
 */
export interface SESReceiptFilterResource {
  Type: 'AWS::SES::ReceiptFilter';
  Properties: SESReceiptFilterProperties;
}
