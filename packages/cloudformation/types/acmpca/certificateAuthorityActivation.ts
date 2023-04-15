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

export interface ACMPCACertificateAuthorityActivationProperties {
  /**
   * Status of your private CA.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Status?: Value<string>;
  /**
   * The Amazon Resource Name (ARN) of your private CA.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  CertificateAuthorityArn: Value<string>;
  /**
   * The Base64 PEM-encoded certificate chain that chains up to the root CA certificate that you used to sign your private CA certificate.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CertificateChain?: Value<string>;
  /**
   * The Base64 PEM-encoded certificate authority certificate.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Certificate: Value<string>;
}

/**
 * The `AWS::ACMPCA::CertificateAuthorityActivation` resource creates and installs a CA certificate on a CA. If no status is specified, the `AWS::ACMPCA::CertificateAuthorityActivation` resource status defaults to ACTIVE. Once the CA has a CA certificate installed, you can use the resource to toggle the CA status field between `ACTIVE` and `DISABLED`.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-acmpca-certificateauthorityactivation.html}
 */
export interface ACMPCACertificateAuthorityActivationResource {
  Type: 'AWS::ACMPCA::CertificateAuthorityActivation';
  Properties: ACMPCACertificateAuthorityActivationProperties;
}
