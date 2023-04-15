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
 * - us-east-1 (version 119.1.0)
 * - us-east-2 (version 119.1.0)
 * - us-west-2 (version 119.1.0)
 */
import { List, Value } from '../../shared-types/dataTypes';

export interface LightsailLoadBalancerTlsCertificateProperties {
  /**
   * The name of the load balancer that the SSL/TLS certificate is attached to.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Pattern_: `w[w-]*w`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  LoadBalancerName: Value<string>;
  /**
   * The domain name for the SSL/TLS certificate. For example, `example.com` or `www.example.com`.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: Updates are not supported.
   */
  CertificateDomainName: Value<string>;
  /**
   * A Boolean value indicating whether the SSL/TLS certificate is attached to a Lightsail load balancer.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  IsAttached?: Value<boolean>;
  /**
   * An array of alternative domain names and subdomain names for your SSL/TLS certificate.
   *
   * In addition to the primary domain name, you can have up to nine alternative domain names. Wildcards (such as `*.example.com`) are not supported.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: Updates are not supported.
   */
  CertificateAlternativeNames?: List<Value<string>>;
  /**
   * A Boolean value indicating whether HTTPS redirection is enabled for the load balancer that the TLS certificate is attached to.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  HttpsRedirectionEnabled?: Value<boolean>;
  /**
   * The name of the SSL/TLS certificate.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  CertificateName: Value<string>;
}

/**
 * The `AWS::Lightsail::LoadBalancerTlsCertificate` resource specifies a TLS certificate that can be used with a Lightsail load balancer.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-loadbalancertlscertificate.html}
 */
export interface LightsailLoadBalancerTlsCertificateResource {
  Type: 'AWS::Lightsail::LoadBalancerTlsCertificate';
  Properties: LightsailLoadBalancerTlsCertificateProperties;
}
