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

export interface EC2EnclaveCertificateIamRoleAssociationProperties {
  /**
   * The ARN of the IAM role to associate with the ACM certificate. You can associate up to 16 IAM roles with an ACM certificate.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  RoleArn: Value<string>;
  /**
   * The ARN of the ACM certificate with which to associate the IAM role.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  CertificateArn: Value<string>;
}

/**
 * Associates an AWS Identity and Access Management (IAM) role with an AWS Certificate Manager (ACM) certificate. This enables the certificate to be used by the ACM for Nitro Enclaves application inside an enclave. For more information, see [AWS Certificate Manager for Nitro Enclaves](https://docs.aws.amazon.com/enclaves/latest/user/nitro-enclave-refapp.html) in the _ AWS Nitro Enclaves User Guide_.
 *
 * When the IAM role is associated with the ACM certificate, the certificate, certificate chain, and encrypted private key are placed in an Amazon S3 location that only the associated IAM role can access. The private key of the certificate is encrypted with an AWS managed key that has an attached attestation-based key policy.
 *
 * To enable the IAM role to access the Amazon S3 object, you must grant it permission to call `s3:GetObject` on the Amazon S3 bucket returned by the command. To enable the IAM role to access the KMS key, you must grant it permission to call `kms:Decrypt` on the KMS key returned by the command. For more information, see [ Grant the role permission to access the certificate and encryption key](https://docs.aws.amazon.com/enclaves/latest/user/nitro-enclave-refapp.html#add-policy) in the _ AWS Nitro Enclaves User Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-enclavecertificateiamroleassociation.html}
 */
export interface EC2EnclaveCertificateIamRoleAssociationResource {
  Type: 'AWS::EC2::EnclaveCertificateIamRoleAssociation';
  Properties: EC2EnclaveCertificateIamRoleAssociationProperties;
}
