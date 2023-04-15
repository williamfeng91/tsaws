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
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancingv2-listener-certificates.html}
 **/
export interface ElasticLoadBalancingV2ListenerCertificateCertificate {
  CertificateArn?: Value<string>;
}
export interface ElasticLoadBalancingV2ListenerCertificateProperties {
  /**
   * The certificate. You can specify one certificate per resource.
   *
   * _Required_: Yes
   *
   * _Type_: List of [Certificate](aws-properties-elasticloadbalancingv2-listener-certificates.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Certificates: List<ElasticLoadBalancingV2ListenerCertificateCertificate>;
  /**
   * The Amazon Resource Name (ARN) of the listener.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ListenerArn: Value<string>;
}

/**
 * Specifies an SSL server certificate to add to the certificate list for an HTTPS or TLS listener.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancingv2-listenercertificate.html}
 */
export interface ElasticLoadBalancingV2ListenerCertificateResource {
  Type: 'AWS::ElasticLoadBalancingV2::ListenerCertificate';
  Properties: ElasticLoadBalancingV2ListenerCertificateProperties;
}
