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

/**
 * The trust anchor type and its related certificate data.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rolesanywhere-trustanchor-source.html}
 **/
export interface RolesAnywhereTrustAnchorSource {
  /**
   * The type of the TrustAnchor.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `AWS_ACM_PCA | CERTIFICATE_BUNDLE`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SourceType?: Value<string>;
  /**
   * The data field of the trust anchor depending on its type.
   *
   * _Required_: No
   *
   * _Type_: [SourceData](aws-properties-rolesanywhere-trustanchor-sourcedata.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SourceData?: RolesAnywhereTrustAnchorSourceData;
}

/**
 * The data field of the trust anchor depending on its type.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rolesanywhere-trustanchor-sourcedata.html}
 **/
export interface RolesAnywhereTrustAnchorSourceData {
  /**
   * The root certificate of the AWS Private Certificate Authority specified by this ARN is used in trust validation for temporary credential requests. Included for trust anchors of type `AWS_ACM_PCA`.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `1011`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AcmPcaArn?: Value<string>;
  /**
   * The PEM-encoded data for the certificate anchor. Included for trust anchors of type `CERTIFICATE_BUNDLE`.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `8000`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  X509CertificateData?: Value<string>;
}
export interface RolesAnywhereTrustAnchorProperties {
  /**
   * Indicates whether the trust anchor is enabled.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Enabled?: Value<boolean>;
  /**
   * The trust anchor type and its related certificate data.
   *
   * _Required_: Yes
   *
   * _Type_: [Source](aws-properties-rolesanywhere-trustanchor-source.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Source: RolesAnywhereTrustAnchorSource;
  /**
   * The tags to attach to the trust anchor.
   *
   * _Required_: No
   *
   * _Type_: List of [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)
   *
   * _Maximum_: `200`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Tags?: List<ResourceTag>;
  /**
   * The name of the trust anchor.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `255`
   *
   * _Pattern_: `^[ a-zA-Z0-9-_]*$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Name: Value<string>;
}

/**
 * Creates a trust anchor to establish trust between IAM Roles Anywhere and your certificate authority (CA). You can define a trust anchor as a reference to an AWS Private Certificate Authority (AWS Private CA) or by uploading a CA certificate. Your AWS workloads can authenticate with the trust anchor using certificates issued by the CA in exchange for temporary AWS credentials.
 *
 * **Required permissions: **`rolesanywhere:CreateTrustAnchor`.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rolesanywhere-trustanchor.html}
 */
export interface RolesAnywhereTrustAnchorResource {
  Type: 'AWS::RolesAnywhere::TrustAnchor';
  Properties: RolesAnywhereTrustAnchorProperties;
}
