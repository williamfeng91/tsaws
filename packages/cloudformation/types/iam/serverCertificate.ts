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

export interface IAMServerCertificateProperties {
  /**
   * The contents of the public key certificate.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `16384`
   *
   * _Pattern_: `[u0009u000Au000Du0020-u00FF]+`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  CertificateBody?: Value<string>;
  /**
   * The path for the server certificate. For more information about paths, see [IAM identifiers](https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html) in the _IAM User Guide_.
   *
   * This parameter is optional. If it is not included, it defaults to a slash (/). This parameter allows (through its [regex pattern](http://wikipedia.org/wiki/regex)) a string of characters consisting of either a forward slash (/) by itself or a string that must begin and end with forward slashes. In addition, it can contain any ASCII character from the ! (`u0021`) through the DEL character (`u007F`), including most punctuation characters, digits, and upper and lowercased letters.
   *
   * If you are uploading a server certificate specifically for use with Amazon CloudFront distributions, you must specify a path using the `path` parameter. The path must begin with `/cloudfront` and must include a trailing slash (for example, `/cloudfront/test/`).
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `512`
   *
   * _Pattern_: `(u002F)|(u002F[u0021-u007E]+u002F)`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Path?: Value<string>;
  /**
   * The contents of the private key in PEM-encoded format.
   *
   * The [regex pattern](http://wikipedia.org/wiki/regex) used to validate this parameter is a string of characters consisting of the following:
   */
  PrivateKey?: Value<string>;
  /**
   * The contents of the public key certificate chain.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `2097152`
   *
   * _Pattern_: `[u0009u000Au000Du0020-u00FF]+`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  CertificateChain?: Value<string>;
  /**
   * The name for the server certificate. Do not include the path in this value. The name of the certificate cannot contain any spaces.
   *
   * This parameter allows (through its [regex pattern](http://wikipedia.org/wiki/regex)) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `128`
   *
   * _Pattern_: `[w+=,.@-]+`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ServerCertificateName?: Value<string>;
  /**
   * A list of tags that are attached to the server certificate. For more information about tagging, see [Tagging IAM resources](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html) in the _IAM User Guide_.
   *
   * _Required_: No
   *
   * _Type_: List of [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)
   *
   * _Maximum_: `50`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Tags?: List<ResourceTag>;
}

/**
 * Uploads a server certificate entity for the AWS account. The server certificate entity includes a public key certificate, a private key, and an optional certificate chain, which should all be PEM-encoded.
 *
 * We recommend that you use [AWS Certificate Manager](https://docs.aws.amazon.com/acm/) to provision, manage, and deploy your server certificates. With ACM you can request a certificate, deploy it to AWS resources, and let ACM handle certificate renewals for you. Certificates provided by ACM are free. For more information about using ACM, see the [AWS Certificate Manager User Guide](https://docs.aws.amazon.com/acm/latest/userguide/).
 *
 * For more information about working with server certificates, see [Working with server certificates](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_server-certs.html) in the _IAM User Guide_. This topic includes a list of AWS services that can use the server certificates that you manage with IAM.
 *
 * For information about the number of server certificates you can upload, see [IAM and AWS STS quotas](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-quotas.html) in the _IAM User Guide_.
 *
 * **Note**
 *
 * Because the body of the public key certificate, private key, and the certificate chain can be large, you should use POST rather than GET when calling `UploadServerCertificate`. For information about setting up signatures and authorization through the API, see [Signing AWS API requests](https://docs.aws.amazon.com/general/latest/gr/signing_aws_api_requests.html) in the _ AWS General Reference_. For general information about using the Query API with IAM, see [Calling the API by making HTTP query requests](https://docs.aws.amazon.com/IAM/latest/UserGuide/programming.html) in the _IAM User Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-servercertificate.html}
 */
export interface IAMServerCertificateResource {
  Type: 'AWS::IAM::ServerCertificate';
  Properties: IAMServerCertificateProperties;
}
