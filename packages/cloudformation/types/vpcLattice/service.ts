/**
 * Supported regions:
 * - ap-northeast-1 (version 119.1.0)
 * - ap-southeast-1 (version 119.1.0)
 * - ap-southeast-2 (version 119.1.0)
 * - eu-west-1 (version 119.1.0)
 * - us-east-1 (version 119.1.0)
 * - us-east-2 (version 119.1.0)
 * - us-west-2 (version 119.1.0)
 */
import { List, Value } from '../../shared-types/dataTypes';
import { ResourceTag } from '../../shared-types/resource';

/**
 * Describes the DNS information of a service.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-vpclattice-service-dnsentry.html}
 **/
export interface VpcLatticeServiceDnsEntry {
  /**
   * The domain name of the service.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DomainName?: Value<string>;
  /**
   * The ID of the hosted zone.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  HostedZoneId?: Value<string>;
}
export interface VpcLatticeServiceProperties {
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: [DnsEntry](aws-properties-vpclattice-service-dnsentry.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DnsEntry?: VpcLatticeServiceDnsEntry;
  /**
   * The custom domain name of the service.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  CustomDomainName?: Value<string>;
  /**
   * The type of IAM policy.
   */
  AuthType?: Value<string>;
  /**
   * The tags for the service.
   *
   * _Required_: No
   *
   * _Type_: List of [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Tags?: List<ResourceTag>;
  /**
   * The name of the service. The name must be unique within the account. The valid characters are a-z, 0-9, and hyphens (-). You can't use a hyphen as the first or last character, or immediately after another hyphen.
   *
   * If you don't specify a name, CloudFormation generates one. However, if you specify a name, and later want to replace the resource, you must specify a new name.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Name?: Value<string>;
  /**
   * The Amazon Resource Name (ARN) of the certificate.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CertificateArn?: Value<string>;
}

/**
 * Creates a service. A service is any software application that can run on instances containers, or serverless functions within an account or virtual private cloud (VPC).
 *
 * For more information, see [Services](https://docs.aws.amazon.com/vpc-lattice/latest/ug/services.html) in the _Amazon VPC Lattice User Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-vpclattice-service.html}
 */
export interface VpcLatticeServiceResource {
  Type: 'AWS::VpcLattice::Service';
  Properties: VpcLatticeServiceProperties;
}
