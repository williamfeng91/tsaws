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

export interface ACMPCAPermissionProperties {
  /**
   * The Amazon Resource Number (ARN) of the private CA from which the permission was issued.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `5`
   *
   * _Maximum_: `200`
   *
   * _Pattern_: `arn:[w+=/,.@-]+:[w+=/,.@-]+:[w+=/,.@-]*:[0-9]*:[w+=,.@-]+(/[w+=,.@-]+)*`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  CertificateAuthorityArn: Value<string>;
  /**
   * The private CA actions that can be performed by the designated AWS service. Supported actions are `IssueCertificate`, `GetCertificate`, and `ListPermissions`.
   *
   * _Required_: Yes
   *
   * _Type_: List of String
   *
   * _Maximum_: `3`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Actions: List<Value<string>>;
  /**
   * The ID of the account that assigned the permission.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `12`
   *
   * _Maximum_: `12`
   *
   * _Pattern_: `[0-9]+`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  SourceAccount?: Value<string>;
  /**
   * The AWS service or entity that holds the permission. At this time, the only valid principal is `acm.amazonaws.com`.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `0`
   *
   * _Maximum_: `128`
   *
   * _Pattern_: `^[^*]+$`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Principal: Value<string>;
}

/**
 * Grants permissions to the AWS Certificate Manager (ACM) service principal (`acm.amazonaws.com`) to perform [IssueCertificate](https://docs.aws.amazon.com/privateca/latest/APIReference/API_IssueCertificate.html), [GetCertificate](https://docs.aws.amazon.com/privateca/latest/APIReference/API_GetCertificate.html), and [ListPermissions](https://docs.aws.amazon.com/privateca/latest/APIReference/API_ListPermissions.html) actions on a CA. These actions are needed for the ACM principal to renew private PKI certificates requested through ACM and residing in the same AWS account as the CA.
 *
 * **About permissions**
 *
 * **Note**
 *
 * To update an `AWS::ACMPCA::Permission` resource, you must first delete the existing permission resource from the CloudFormation stack and then create a new permission resource with updated properties.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-acmpca-permission.html}
 */
export interface ACMPCAPermissionResource {
  Type: 'AWS::ACMPCA::Permission';
  Properties: ACMPCAPermissionProperties;
}
