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
 * Defines one or more purposes for which the key contained in the certificate can be used. Default value for each option is false.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-acmpca-certificateauthority-keyusage.html}
 **/
export interface ACMPCACertificateAuthorityKeyUsage {
  /**
   * Key can be used to encipher data.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  KeyEncipherment?: Value<boolean>;
  /**
   * Key can be used to decipher data.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  DataEncipherment?: Value<boolean>;
  /**
   * Key can be used for digital signing.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  DigitalSignature?: Value<boolean>;
  /**
   * Key can be used to sign certificates.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  KeyCertSign?: Value<boolean>;
  /**
   * Key can be used only to decipher data.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  DecipherOnly?: Value<boolean>;
  /**
   * Key can be used in a key-agreement protocol.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  KeyAgreement?: Value<boolean>;
  /**
   * Key can be used for non-repudiation.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  NonRepudiation?: Value<boolean>;
  /**
   * Key can be used to sign CRLs.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  CRLSign?: Value<boolean>;
  /**
   * Key can be used only to encipher data.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  EncipherOnly?: Value<boolean>;
}

/**
 * Describes the certificate extensions to be added to the certificate signing request (CSR).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-acmpca-certificateauthority-csrextensions.html}
 **/
export interface ACMPCACertificateAuthorityCsrExtensions {
  /**
   * Indicates the purpose of the certificate and of the key contained in the certificate.
   *
   * _Required_: No
   *
   * _Type_: [KeyUsage](aws-properties-acmpca-certificateauthority-keyusage.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  KeyUsage?: ACMPCACertificateAuthorityKeyUsage;
  /**
   * For CA certificates, provides a path to additional information pertaining to the CA, such as revocation and policy. For more information, see [Subject Information Access](https://datatracker.ietf.org/doc/html/rfc5280#section-4.2.2.2) in RFC 5280.
   *
   * _Required_: No
   *
   * _Type_: List of [AccessDescription](aws-properties-acmpca-certificateauthority-accessdescription.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  SubjectInformationAccess?: List<ACMPCACertificateAuthorityAccessDescription>;
}

/**
 * Defines the X.500 relative distinguished name (RDN).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-acmpca-certificateauthority-customattribute.html}
 **/
export interface ACMPCACertificateAuthorityCustomAttribute {
  /**
   * Specifies the attribute value of relative distinguished name (RDN).
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `256`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Value: Value<string>;
  /**
   * Specifies the object identifier (OID) of the attribute type of the relative distinguished name (RDN).
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `0`
   *
   * _Maximum_: `64`
   *
   * _Pattern_: `^([0-2]).([0-9]|([0-3][0-9]))((.([0-9]+)){0,126})$`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ObjectIdentifier: Value<string>;
}

/**
 * Contains information to enable and configure Online Certificate Status Protocol (OCSP) for validating certificate revocation status.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-acmpca-certificateauthority-ocspconfiguration.html}
 **/
export interface ACMPCACertificateAuthorityOcspConfiguration {
  /**
   * By default, AWS Private CA injects an Amazon domain into certificates being validated by the Online Certificate Status Protocol (OCSP). A customer can alternatively use this object to define a CNAME specifying a customized OCSP domain.
   *
   * The content of a Canonical Name (CNAME) record must conform to [RFC2396](https://www.ietf.org/rfc/rfc2396.txt) restrictions on the use of special characters in URIs. Additionally, the value of the CNAME must not include a protocol prefix such as "http://" or "https://".
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `0`
   *
   * _Maximum_: `253`
   *
   * _Pattern_: `^[-a-zA-Z0-9;/?:@&=+$,%_.!~*()']*$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  OcspCustomCname?: Value<string>;
  /**
   * Flag enabling use of the Online Certificate Status Protocol (OCSP) for validating certificate revocation status.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Enabled?: Value<boolean>;
}

/**
 * Describes an Electronic Data Interchange (EDI) entity as described in as defined in [Subject Alternative Name](https://datatracker.ietf.org/doc/html/rfc5280) in RFC 5280.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-acmpca-certificateauthority-edipartyname.html}
 **/
export interface ACMPCACertificateAuthorityEdiPartyName {
  /**
   * Specifies the party name.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `0`
   *
   * _Maximum_: `256`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  PartyName: Value<string>;
  /**
   * Specifies the name assigner.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `0`
   *
   * _Maximum_: `256`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  NameAssigner: Value<string>;
}

/**
 * Describes the type and format of extension access. Only one of `CustomObjectIdentifier` or `AccessMethodType` may be provided. Providing both results in `InvalidArgsException`.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-acmpca-certificateauthority-accessmethod.html}
 **/
export interface ACMPCACertificateAuthorityAccessMethod {
  /**
   * An object identifier (OID) specifying the `AccessMethod`. The OID must satisfy the regular expression shown below. For more information, see NIST's definition of [Object Identifier (OID)](https://csrc.nist.gov/glossary/term/Object_Identifier).
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `0`
   *
   * _Maximum_: `64`
   *
   * _Pattern_: `^([0-2]).([0-9]|([0-3][0-9]))((.([0-9]+)){0,126})$`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  CustomObjectIdentifier?: Value<string>;
  /**
   * Specifies the `AccessMethod`.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `CA_REPOSITORY | RESOURCE_PKI_MANIFEST | RESOURCE_PKI_NOTIFY`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  AccessMethodType?: Value<string>;
}

/**
 * Contains configuration information for a certificate revocation list (CRL). Your private certificate authority (CA) creates base CRLs. Delta CRLs are not supported. You can enable CRLs for your new or an existing private CA by setting the **Enabled** parameter to `true`. Your private CA writes CRLs to an S3 bucket that you specify in the **S3BucketName** parameter. You can hide the name of your bucket by specifying a value for the **CustomCname** parameter. Your private CA copies the CNAME or the S3 bucket name to the **CRL Distribution Points** extension of each certificate it issues. Your S3 bucket policy must give write permission to AWS Private CA.
 *
 * AWS Private CA assets that are stored in Amazon S3 can be protected with encryption. For more information, see [Encrypting Your CRLs](https://docs.aws.amazon.com/privateca/latest/userguide/PcaCreateCa.html#crl-encryption).
 *
 * Your private CA uses the value in the **ExpirationInDays** parameter to calculate the **nextUpdate** field in the CRL. The CRL is refreshed prior to a certificate's expiration date or when a certificate is revoked. When a certificate is revoked, it appears in the CRL until the certificate expires, and then in one additional CRL after expiration, and it always appears in the audit report.
 *
 * A CRL is typically updated approximately 30 minutes after a certificate is revoked. If for any reason a CRL update fails, AWS Private CA makes further attempts every 15 minutes.
 *
 * CRLs contain the following fields:
 *
 * Certificate revocation lists created by AWS Private CA are DER-encoded. You can use the following OpenSSL command to list a CRL.
 *
 * `openssl crl -inform DER -text -in crl_path -noout`
 *
 * For more information, see [Planning a certificate revocation list (CRL)](https://docs.aws.amazon.com/privateca/latest/userguide/crl-planning.html) in the _ AWS Private Certificate Authority User Guide_
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-acmpca-certificateauthority-crlconfiguration.html}
 **/
export interface ACMPCACertificateAuthorityCrlConfiguration {
  /**
   * Name inserted into the certificate **CRL Distribution Points** extension that enables the use of an alias for the CRL distribution point. Use this value if you don't want the name of your S3 bucket to be public.
   *
   * The content of a Canonical Name (CNAME) record must conform to [RFC2396](https://www.ietf.org/rfc/rfc2396.txt) restrictions on the use of special characters in URIs. Additionally, the value of the CNAME must not include a protocol prefix such as "http://" or "https://".
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `0`
   *
   * _Maximum_: `253`
   *
   * _Pattern_: `^[-a-zA-Z0-9;/?:@&=+$,%_.!~*()']*$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CustomCname?: Value<string>;
  /**
   * Determines whether the CRL will be publicly readable or privately held in the CRL Amazon S3 bucket. If you choose PUBLIC_READ, the CRL will be accessible over the public internet. If you choose BUCKET_OWNER_FULL_CONTROL, only the owner of the CRL S3 bucket can access the CRL, and your PKI clients may need an alternative method of access.
   *
   * If no value is specified, the default is PUBLIC_READ.
   *
   * _Note:_ This default can cause CA creation to fail in some circumstances. If you have have enabled the Block Public Access (BPA) feature in your S3 account, then you must specify the value of this parameter as `BUCKET_OWNER_FULL_CONTROL`, and not doing so results in an error. If you have disabled BPA in S3, then you can specify either `BUCKET_OWNER_FULL_CONTROL` or `PUBLIC_READ` as the value.
   *
   * For more information, see [Blocking public access to the S3 bucket](https://docs.aws.amazon.com/privateca/latest/userguide/PcaCreateCa.html#s3-bpa).
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  S3ObjectAcl?: Value<string>;
  /**
   * Validity period of the CRL in days.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `5000`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ExpirationInDays?: Value<number>;
  /**
   * Boolean value that specifies whether certificate revocation lists (CRLs) are enabled. You can use this value to enable certificate revocation for a new CA when you call the `CreateCertificateAuthority` operation or for an existing CA when you call the `UpdateCertificateAuthority` operation.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Enabled?: Value<boolean>;
  /**
   * Name of the S3 bucket that contains the CRL. If you do not provide a value for the **CustomCname** argument, the name of your S3 bucket is placed into the **CRL Distribution Points** extension of the issued certificate. You can change the name of your bucket by calling the [UpdateCertificateAuthority](https://docs.aws.amazon.com/privateca/latest/APIReference/API_UpdateCertificateAuthority.html) operation. You must specify a [bucket policy](https://docs.aws.amazon.com/privateca/latest/userguide/PcaCreateCa.html#s3-policies) that allows AWS Private CA to write the CRL to your bucket.
   *
   * The `S3BucketName` parameter must conform to the [S3 bucket naming rules](https://docs.aws.amazon.com/AmazonS3/latest/userguide/bucketnamingrules.html).
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `3`
   *
   * _Maximum_: `255`
   *
   * _Pattern_: `^[-a-zA-Z0-9._/]+$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  S3BucketName?: Value<string>;
}

/**
 * Certificate revocation information used by the [CreateCertificateAuthority](https://docs.aws.amazon.com/privateca/latest/APIReference/API_CreateCertificateAuthority.html) and [UpdateCertificateAuthority](https://docs.aws.amazon.com/privateca/latest/APIReference/API_UpdateCertificateAuthority.html) actions. Your private certificate authority (CA) can configure Online Certificate Status Protocol (OCSP) support and/or maintain a certificate revocation list (CRL). OCSP returns validation information about certificates as requested by clients, and a CRL contains an updated list of certificates revoked by your CA. For more information, see [RevokeCertificate](https://docs.aws.amazon.com/privateca/latest/APIReference/API_RevokeCertificate.html) in the _AWS Private CA API Reference_ and [Setting up a certificate revocation method](https://docs.aws.amazon.com/privateca/latest/userguide/revocation-setup.html) in the _AWS Private CA User Guide_.
 *
 * **Note**
 *
 * The following requirements apply to revocation configurations.
 *
 * A configuration disabling CRLs or OCSP must contain only the `Enabled=False` parameter, and will fail if other parameters such as `CustomCname` or `ExpirationInDays` are included.
 *
 * In a CRL configuration, the `S3BucketName` parameter must conform to the [Amazon S3 bucket naming rules](https://docs.aws.amazon.com/AmazonS3/latest/userguide/bucketnamingrules.html).
 *
 * A configuration containing a custom Canonical Name (CNAME) parameter for CRLs or OCSP must conform to [RFC2396](https://www.ietf.org/rfc/rfc2396.txt) restrictions on the use of special characters in a CNAME.
 *
 * In a CRL or OCSP configuration, the value of a CNAME parameter must not include a protocol prefix such as "http://" or "https://".
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-acmpca-certificateauthority-revocationconfiguration.html}
 **/
export interface ACMPCACertificateAuthorityRevocationConfiguration {
  /**
   * Configuration of Online Certificate Status Protocol (OCSP) support, if any, maintained by your private CA.
   *
   * _Required_: No
   *
   * _Type_: [OcspConfiguration](aws-properties-acmpca-certificateauthority-ocspconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  OcspConfiguration?: ACMPCACertificateAuthorityOcspConfiguration;
  /**
   * Configuration of the certificate revocation list (CRL), if any, maintained by your private CA.
   *
   * _Required_: No
   *
   * _Type_: [CrlConfiguration](aws-properties-acmpca-certificateauthority-crlconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CrlConfiguration?: ACMPCACertificateAuthorityCrlConfiguration;
}

/**
 * Provides access information used by the `authorityInfoAccess` and `subjectInfoAccess` extensions described in [RFC 5280](https://datatracker.ietf.org/doc/html/rfc5280).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-acmpca-certificateauthority-accessdescription.html}
 **/
export interface ACMPCACertificateAuthorityAccessDescription {
  /**
   * The type and format of `AccessDescription` information.
   *
   * _Required_: Yes
   *
   * _Type_: [AccessMethod](aws-properties-acmpca-certificateauthority-accessmethod.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  AccessMethod: ACMPCACertificateAuthorityAccessMethod;
  /**
   * The location of `AccessDescription` information.
   *
   * _Required_: Yes
   *
   * _Type_: [GeneralName](aws-properties-acmpca-certificateauthority-generalname.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  AccessLocation: ACMPCACertificateAuthorityGeneralName;
}

/**
 * ASN1 subject for the certificate authority.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-acmpca-certificateauthority-subject.html}
 **/
export interface ACMPCACertificateAuthoritySubject {
  /**
   * Legal name of the organization with which the certificate subject is affiliated.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Organization?: Value<string>;
  /**
   * A subdivision or unit of the organization (such as sales or finance) with which the certificate subject is affiliated.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  OrganizationalUnit?: Value<string>;
  /**
   * The locality (such as a city or town) in which the certificate subject is located.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Locality?: Value<string>;
  /**
   * A personal title such as Mr.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Title?: Value<string>;
  /**
   * First name.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  GivenName?: Value<string>;
  /**
   * Typically a qualifier appended to the name of an individual. Examples include Jr. for junior, Sr. for senior, and III for third.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  GenerationQualifier?: Value<string>;
  /**
   * Concatenation that typically contains the first letter of the GivenName, the first letter of the middle name if one exists, and the first letter of the SurName.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Initials?: Value<string>;
  /**
   * Contains a sequence of one or more X.500 relative distinguished names (RDNs), each of which consists of an object identifier (OID) and a value. For more information, see NIST’s definition of [Object Identifier (OID)](https://csrc.nist.gov/glossary/term/Object_Identifier).
   *
   * Custom attributes cannot be used in combination with standard attributes.
   *
   * _Required_: No
   *
   * _Type_: List of [CustomAttribute](aws-properties-acmpca-certificateauthority-customattribute.md)
   *
   * _Maximum_: `30`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  CustomAttributes?: List<ACMPCACertificateAuthorityCustomAttribute>;
  /**
   * The certificate serial number.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  SerialNumber?: Value<string>;
  /**
   * State in which the subject of the certificate is located.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  State?: Value<string>;
  /**
   * Two-digit code that specifies the country in which the certificate subject located.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Country?: Value<string>;
  /**
   * Family name.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Surname?: Value<string>;
  /**
   * Disambiguating information for the certificate subject.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  DistinguishedNameQualifier?: Value<string>;
  /**
   * Fully qualified domain name (FQDN) associated with the certificate subject.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  CommonName?: Value<string>;
  /**
   * Typically a shortened version of a longer GivenName. For example, Jonathan is often shortened to John. Elizabeth is often shortened to Beth, Liz, or Eliza.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Pseudonym?: Value<string>;
}

/**
 * Defines a custom ASN.1 X.400 `GeneralName` using an object identifier (OID) and value. The OID must satisfy the regular expression shown below. For more information, see NIST's definition of [Object Identifier (OID)](https://csrc.nist.gov/glossary/term/Object_Identifier).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-acmpca-certificateauthority-othername.html}
 **/
export interface ACMPCACertificateAuthorityOtherName {
  /**
   * Specifies an OID.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `0`
   *
   * _Maximum_: `64`
   *
   * _Pattern_: `^([0-2]).([0-9]|([0-3][0-9]))((.([0-9]+)){0,126})$`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  TypeId: Value<string>;
  /**
   * Specifies an OID value.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `0`
   *
   * _Maximum_: `256`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Value: Value<string>;
}

/**
 * Describes an ASN.1 X.400 `GeneralName` as defined in [RFC 5280](https://datatracker.ietf.org/doc/html/rfc5280). Only one of the following naming options should be provided. Providing more than one option results in an `InvalidArgsException` error.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-acmpca-certificateauthority-generalname.html}
 **/
export interface ACMPCACertificateAuthorityGeneralName {
  /**
   * Represents `GeneralName` as a URI.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `0`
   *
   * _Maximum_: `253`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  UniformResourceIdentifier?: Value<string>;
  /**
   * Represents `GeneralName` as a DNS name.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `0`
   *
   * _Maximum_: `253`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  DnsName?: Value<string>;
  /**
   * Represents `GeneralName` as an `EdiPartyName` object.
   *
   * _Required_: No
   *
   * _Type_: [EdiPartyName](aws-properties-acmpca-certificateauthority-edipartyname.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  EdiPartyName?: ACMPCACertificateAuthorityEdiPartyName;
  /**
   * Represents `GeneralName` as an object identifier (OID).
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `0`
   *
   * _Maximum_: `64`
   *
   * _Pattern_: `^([0-2]).([0-9]|([0-3][0-9]))((.([0-9]+)){0,126})$`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  RegisteredId?: Value<string>;
  /**
   * Represents `GeneralName` as an [RFC 822](https://datatracker.ietf.org/doc/html/rfc822) email address.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `0`
   *
   * _Maximum_: `256`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Rfc822Name?: Value<string>;
  /**
   * Represents `GeneralName` using an `OtherName` object.
   *
   * _Required_: No
   *
   * _Type_: [OtherName](aws-properties-acmpca-certificateauthority-othername.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  OtherName?: ACMPCACertificateAuthorityOtherName;
  /**
   * Represents `GeneralName` as an IPv4 or IPv6 address.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `0`
   *
   * _Maximum_: `39`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  IpAddress?: Value<string>;
  /**
   * Contains information about the certificate subject. The certificate can be one issued by your private certificate authority (CA) or it can be your private CA certificate. The Subject field in the certificate identifies the entity that owns or controls the public key in the certificate. The entity can be a user, computer, device, or service. The Subject must contain an X.500 distinguished name (DN). A DN is a sequence of relative distinguished names (RDNs). The RDNs are separated by commas in the certificate. The DN must be unique for each entity, but your private CA can issue more than one certificate with the same DN to the same entity.
   *
   * _Required_: No
   *
   * _Type_: [Subject](aws-properties-acmpca-certificateauthority-subject.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  DirectoryName?: ACMPCACertificateAuthoritySubject;
}
export interface ACMPCACertificateAuthorityProperties {
  /**
   * Specifies information to be added to the extension section of the certificate signing request (CSR).
   *
   * _Required_: No
   *
   * _Type_: [CsrExtensions](aws-properties-acmpca-certificateauthority-csrextensions.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  CsrExtensions?: ACMPCACertificateAuthorityCsrExtensions;
  /**
   * Type of your private CA.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Allowed values_: `ROOT | SUBORDINATE`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Type: Value<string>;
  /**
   * Certificate revocation information used by the [CreateCertificateAuthority](https://docs.aws.amazon.com/privateca/latest/APIReference/API_CreateCertificateAuthority.html) and [UpdateCertificateAuthority](https://docs.aws.amazon.com/privateca/latest/APIReference/API_UpdateCertificateAuthority.html) actions. Your private certificate authority (CA) can configure Online Certificate Status Protocol (OCSP) support and/or maintain a certificate revocation list (CRL). OCSP returns validation information about certificates as requested by clients, and a CRL contains an updated list of certificates revoked by your CA. For more information, see [RevokeCertificate](https://docs.aws.amazon.com/privateca/latest/APIReference/API_RevokeCertificate.html) in the _AWS Private CA API Reference_ and [Setting up a certificate revocation method](https://docs.aws.amazon.com/privateca/latest/userguide/revocation-setup.html) in the _AWS Private CA User Guide_.
   *
   * The following requirements apply to revocation configurations.
   */
  RevocationConfiguration?: ACMPCACertificateAuthorityRevocationConfiguration;
  /**
   * Specifies whether the CA issues general-purpose certificates that typically require a revocation mechanism, or short-lived certificates that may optionally omit revocation because they expire quickly. Short-lived certificate validity is limited to seven days.
   *
   * The default value is GENERAL_PURPOSE.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `GENERAL_PURPOSE | SHORT_LIVED_CERTIFICATE`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  UsageMode?: Value<string>;
  /**
   * Name of the algorithm your private CA uses to sign certificate requests.
   *
   * This parameter should not be confused with the `SigningAlgorithm` parameter used to sign certificates when they are issued.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Allowed values_: `SHA256WITHECDSA | SHA256WITHRSA | SHA384WITHECDSA | SHA384WITHRSA | SHA512WITHECDSA | SHA512WITHRSA`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  SigningAlgorithm: Value<string>;
  /**
   * Specifies a cryptographic key management compliance standard used for handling CA keys.
   *
   * Default: FIPS_140_2_LEVEL_3_OR_HIGHER
   *
   * Some AWS Regions do not support the default. When creating a CA in these Regions, you must provide `FIPS_140_2_LEVEL_2_OR_HIGHER` as the argument for `KeyStorageSecurityStandard`. Failure to do this results in an `InvalidArgsException` with the message, "A certificate authority cannot be created in this region with the specified security standard."
   *
   * For information about security standard support in various Regions, see [Storage and security compliance of AWS Private CA private keys](https://docs.aws.amazon.com/privateca/latest/userguide/data-protection.html#private-keys).
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `FIPS_140_2_LEVEL_2_OR_HIGHER | FIPS_140_2_LEVEL_3_OR_HIGHER`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  KeyStorageSecurityStandard?: Value<string>;
  /**
   * Structure that contains X.500 distinguished name information for your private CA.
   *
   * _Required_: Yes
   *
   * _Type_: [Subject](aws-properties-acmpca-certificateauthority-subject.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Subject: ACMPCACertificateAuthoritySubject;
  /**
   * Key-value pairs that will be attached to the new private CA. You can associate up to 50 tags with a private CA. For information using tags with IAM to manage permissions, see [Controlling Access Using IAM Tags](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_iam-tags.html).
   *
   * _Required_: No
   *
   * _Type_: List of [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Tags?: List<ResourceTag>;
  /**
   * Type of the public key algorithm and size, in bits, of the key pair that your CA creates when it issues a certificate. When you create a subordinate CA, you must use a key algorithm supported by the parent CA.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Allowed values_: `EC_prime256v1 | EC_secp384r1 | RSA_2048 | RSA_4096`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  KeyAlgorithm: Value<string>;
}

/**
 * Use the `AWS::ACMPCA::CertificateAuthority` resource to create a private CA. Once the CA exists, you can use the `AWS::ACMPCA::Certificate` resource to issue a new CA certificate. Alternatively, you can issue a CA certificate using an on-premises CA, and then use the `AWS::ACMPCA::CertificateAuthorityActivation` resource to import the new CA certificate and activate the CA.
 *
 * **Note**
 *
 * Before removing a `AWS::ACMPCA::CertificateAuthority` resource from the CloudFormation stack, disable the affected CA. Otherwise, the action will fail. You can disable the CA by removing its associated `AWS::ACMPCA::CertificateAuthorityActivation` resource from CloudFormation.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-acmpca-certificateauthority.html}
 */
export interface ACMPCACertificateAuthorityResource {
  Type: 'AWS::ACMPCA::CertificateAuthority';
  Properties: ACMPCACertificateAuthorityProperties;
}
