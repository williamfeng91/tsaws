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
 * Contains X.509 extension information for a certificate.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-acmpca-certificate-extensions.html}
 **/
export interface ACMPCACertificateExtensions {
  /**
   * Contains a sequence of one or more X.509 extensions, each of which consists of an object identifier (OID), a base64-encoded value, and the critical flag. For more information, see the [Global OID reference database.](https://oidref.com/2.5.29)
   *
   * _Required_: No
   *
   * _Type_: List of [CustomExtension](aws-properties-acmpca-certificate-customextension.md)
   *
   * _Maximum_: `20`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  CustomExtensions?: List<ACMPCACertificateCustomExtension>;
  /**
   * Contains a sequence of one or more policy information terms, each of which consists of an object identifier (OID) and optional qualifiers. For more information, see NIST's definition of [Object Identifier (OID)](https://csrc.nist.gov/glossary/term/Object_Identifier).
   *
   * In an end-entity certificate, these terms indicate the policy under which the certificate was issued and the purposes for which it may be used. In a CA certificate, these terms limit the set of policies for certification paths that include this certificate.
   *
   * _Required_: No
   *
   * _Type_: List of [PolicyInformation](aws-properties-acmpca-certificate-policyinformation.md)
   *
   * _Maximum_: `20`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  CertificatePolicies?: List<ACMPCACertificatePolicyInformation>;
  /**
   * Defines one or more purposes for which the key contained in the certificate can be used. Default value for each option is false.
   *
   * _Required_: No
   *
   * _Type_: [KeyUsage](aws-properties-acmpca-certificate-keyusage.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  KeyUsage?: ACMPCACertificateKeyUsage;
  /**
   * The subject alternative name extension allows identities to be bound to the subject of the certificate. These identities may be included in addition to or in place of the identity in the subject field of the certificate.
   *
   * _Required_: No
   *
   * _Type_: List of [GeneralName](aws-properties-acmpca-certificate-generalname.md)
   *
   * _Maximum_: `20`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  SubjectAlternativeNames?: List<ACMPCACertificateGeneralName>;
  /**
   * Specifies additional purposes for which the certified public key may be used other than basic purposes indicated in the `KeyUsage` extension.
   *
   * _Required_: No
   *
   * _Type_: [List](aws-properties-acmpca-certificate-extendedkeyusage.md) of [ExtendedKeyUsage](aws-properties-acmpca-certificate-extendedkeyusage.md)
   *
   * _Maximum_: `20`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ExtendedKeyUsage?: List<ACMPCACertificateExtendedKeyUsage>;
}

/**
 * Modifies the `CertPolicyId` of a `PolicyInformation` object with a qualifier. AWS Private CA supports the certification practice statement (CPS) qualifier.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-acmpca-certificate-policyqualifierinfo.html}
 **/
export interface ACMPCACertificatePolicyQualifierInfo {
  /**
   * Defines the qualifier type. AWS Private CA supports the use of a URI for a CPS qualifier in this field.
   *
   * _Required_: Yes
   *
   * _Type_: [Qualifier](aws-properties-acmpca-certificate-qualifier.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Qualifier: ACMPCACertificateQualifier;
  /**
   * Identifies the qualifier modifying a `CertPolicyId`.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Allowed values_: `CPS`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  PolicyQualifierId: Value<string>;
}

/**
 * Defines a `PolicyInformation` qualifier. AWS Private CA supports the [certification practice statement (CPS) qualifier](https://datatracker.ietf.org/doc/html/rfc5280#section-4.2.1.4) defined in RFC 5280.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-acmpca-certificate-qualifier.html}
 **/
export interface ACMPCACertificateQualifier {
  /**
   * Contains a pointer to a certification practice statement (CPS) published by the CA.
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
  CpsUri: Value<string>;
}

/**
 * Contains X.509 certificate information to be placed in an issued certificate. An `APIPassthrough` or `APICSRPassthrough` template variant must be selected, or else this parameter is ignored.
 *
 * If conflicting or duplicate certificate information is supplied from other sources, AWS Private CA applies [order of operation rules](https://docs.aws.amazon.com/privateca/latest/userguide/UsingTemplates.html#template-order-of-operations) to determine what information is used.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-acmpca-certificate-apipassthrough.html}
 **/
export interface ACMPCACertificateApiPassthrough {
  /**
   * Specifies X.509 extension information for a certificate.
   *
   * _Required_: No
   *
   * _Type_: [Extensions](aws-properties-acmpca-certificate-extensions.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Extensions?: ACMPCACertificateExtensions;
  /**
   * Contains information about the certificate subject. The Subject field in the certificate identifies the entity that owns or controls the public key in the certificate. The entity can be a user, computer, device, or service. The Subject must contain an X.500 distinguished name (DN). A DN is a sequence of relative distinguished names (RDNs). The RDNs are separated by commas in the certificate.
   *
   * _Required_: No
   *
   * _Type_: [Subject](aws-properties-acmpca-certificate-subject.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Subject?: ACMPCACertificateSubject;
}

/**
 * Specifies the X.509 extension information for a certificate.
 *
 * Extensions present in `CustomExtensions` follow the `ApiPassthrough` [template rules](https://docs.aws.amazon.com/privateca/latest/userguide/UsingTemplates.html#template-order-of-operations).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-acmpca-certificate-customextension.html}
 **/
export interface ACMPCACertificateCustomExtension {
  /**
   * Specifies the base64-encoded value of the X.509 extension.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `4096`
   *
   * _Pattern_: `^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Value: Value<string>;
  /**
   * Specifies the critical flag of the X.509 extension.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Critical?: Value<boolean>;
  /**
   * Specifies the object identifier (OID) of the X.509 extension. For more information, see the [Global OID reference database.](https://oidref.com/2.5.29)
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
 * Defines a custom ASN.1 X.400 `GeneralName` using an object identifier (OID) and value. The OID must satisfy the regular expression shown below. For more information, see NIST's definition of [Object Identifier (OID)](https://csrc.nist.gov/glossary/term/Object_Identifier).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-acmpca-certificate-othername.html}
 **/
export interface ACMPCACertificateOtherName {
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
 * Defines the X.500 relative distinguished name (RDN).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-acmpca-certificate-customattribute.html}
 **/
export interface ACMPCACertificateCustomAttribute {
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
 * Length of time for which the certificate issued by your private certificate authority (CA), or by the private CA itself, is valid in days, months, or years. You can issue a certificate by calling the `IssueCertificate` operation.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-acmpca-certificate-validity.html}
 **/
export interface ACMPCACertificateValidity {
  /**
   * Specifies whether the `Value` parameter represents days, months, or years.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Allowed values_: `ABSOLUTE | DAYS | END_DATE | MONTHS | YEARS`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Type: Value<string>;
  /**
   * A long integer interpreted according to the value of `Type`, below.
   *
   * _Required_: Yes
   *
   * _Type_: Double
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Value: Value<number>;
}

/**
 * Specifies additional purposes for which the certified public key may be used other than basic purposes indicated in the `KeyUsage` extension.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-acmpca-certificate-extendedkeyusage.html}
 **/
export interface ACMPCACertificateExtendedKeyUsage {
  /**
   * Specifies a standard `ExtendedKeyUsage` as defined as in [RFC 5280](https://datatracker.ietf.org/doc/html/rfc5280#section-4.2.1.12).
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `CERTIFICATE_TRANSPARENCY | CLIENT_AUTH | CODE_SIGNING | DOCUMENT_SIGNING | EMAIL_PROTECTION | OCSP_SIGNING | SERVER_AUTH | SMART_CARD_LOGIN | TIME_STAMPING`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ExtendedKeyUsageType?: Value<string>;
  /**
   * Specifies a custom `ExtendedKeyUsage` with an object identifier (OID).
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
  ExtendedKeyUsageObjectIdentifier?: Value<string>;
}

/**
 * Contains information about the certificate subject. The `Subject` field in the certificate identifies the entity that owns or controls the public key in the certificate. The entity can be a user, computer, device, or service. The `Subject `must contain an X.500 distinguished name (DN). A DN is a sequence of relative distinguished names (RDNs). The RDNs are separated by commas in the certificate.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-acmpca-certificate-subject.html}
 **/
export interface ACMPCACertificateSubject {
  /**
   * Legal name of the organization with which the certificate subject is affiliated.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `0`
   *
   * _Maximum_: `64`
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
   * _Minimum_: `0`
   *
   * _Maximum_: `64`
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
   * _Minimum_: `0`
   *
   * _Maximum_: `128`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Locality?: Value<string>;
  /**
   * A title such as Mr. or Ms., which is pre-pended to the name to refer formally to the certificate subject.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `0`
   *
   * _Maximum_: `64`
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
   * _Minimum_: `0`
   *
   * _Maximum_: `16`
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
   * _Minimum_: `0`
   *
   * _Maximum_: `3`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  GenerationQualifier?: Value<string>;
  /**
   * Concatenation that typically contains the first letter of the **GivenName**, the first letter of the middle name if one exists, and the first letter of the **Surname**.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `0`
   *
   * _Maximum_: `5`
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
   * _Type_: List of [CustomAttribute](aws-properties-acmpca-certificate-customattribute.md)
   *
   * _Maximum_: `30`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  CustomAttributes?: List<ACMPCACertificateCustomAttribute>;
  /**
   * The certificate serial number.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `0`
   *
   * _Maximum_: `64`
   *
   * _Pattern_: `[a-zA-Z0-9'()+-.?:/= ]*`
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
   * _Minimum_: `0`
   *
   * _Maximum_: `128`
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
   * _Minimum_: `2`
   *
   * _Maximum_: `2`
   *
   * _Pattern_: `[A-Za-z]{2}`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Country?: Value<string>;
  /**
   * Family name. In the US and the UK, for example, the surname of an individual is ordered last. In Asian cultures the surname is typically ordered first.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `0`
   *
   * _Maximum_: `40`
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
   * _Minimum_: `0`
   *
   * _Maximum_: `64`
   *
   * _Pattern_: `[a-zA-Z0-9'()+-.?:/= ]*`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  DistinguishedNameQualifier?: Value<string>;
  /**
   * For CA and end-entity certificates in a private PKI, the common name (CN) can be any string within the length limit.
   *
   * Note: In publicly trusted certificates, the common name must be a fully qualified domain name (FQDN) associated with the certificate subject.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `0`
   *
   * _Maximum_: `64`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  CommonName?: Value<string>;
  /**
   * Typically a shortened version of a longer **GivenName**. For example, Jonathan is often shortened to John. Elizabeth is often shortened to Beth, Liz, or Eliza.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `0`
   *
   * _Maximum_: `128`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Pseudonym?: Value<string>;
}

/**
 * Defines the X.509 `CertificatePolicies` extension.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-acmpca-certificate-policyinformation.html}
 **/
export interface ACMPCACertificatePolicyInformation {
  /**
   * Specifies the object identifier (OID) of the certificate policy under which the certificate was issued. For more information, see NIST's definition of [Object Identifier (OID)](https://csrc.nist.gov/glossary/term/Object_Identifier).
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
  CertPolicyId: Value<string>;
  /**
   * Modifies the given `CertPolicyId` with a qualifier. AWS Private CA supports the certification practice statement (CPS) qualifier.
   *
   * _Required_: No
   *
   * _Type_: List of [PolicyQualifierInfo](aws-properties-acmpca-certificate-policyqualifierinfo.md)
   *
   * _Maximum_: `20`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  PolicyQualifiers?: List<ACMPCACertificatePolicyQualifierInfo>;
}

/**
 * Describes an ASN.1 X.400 `GeneralName` as defined in [RFC 5280](https://datatracker.ietf.org/doc/html/rfc5280). Only one of the following naming options should be provided. Providing more than one option results in an `InvalidArgsException` error.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-acmpca-certificate-generalname.html}
 **/
export interface ACMPCACertificateGeneralName {
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
   * _Type_: [EdiPartyName](aws-properties-acmpca-certificate-edipartyname.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  EdiPartyName?: ACMPCACertificateEdiPartyName;
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
   * _Type_: [OtherName](aws-properties-acmpca-certificate-othername.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  OtherName?: ACMPCACertificateOtherName;
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
   * _Type_: [Subject](aws-properties-acmpca-certificate-subject.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  DirectoryName?: ACMPCACertificateSubject;
}

/**
 * Describes an Electronic Data Interchange (EDI) entity as described in as defined in [Subject Alternative Name](https://datatracker.ietf.org/doc/html/rfc5280) in RFC 5280.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-acmpca-certificate-edipartyname.html}
 **/
export interface ACMPCACertificateEdiPartyName {
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
 * Defines one or more purposes for which the key contained in the certificate can be used. Default value for each option is false.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-acmpca-certificate-keyusage.html}
 **/
export interface ACMPCACertificateKeyUsage {
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
export interface ACMPCACertificateProperties {
  /**
   * Specifies a custom configuration template to use when issuing a certificate. If this parameter is not provided, AWS Private CA defaults to the `EndEntityCertificate/V1` template. For more information about AWS Private CA templates, see [Using Templates](https://docs.aws.amazon.com/privateca/latest/userguide/UsingTemplates.html).
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  TemplateArn?: Value<string>;
  /**
   * The Amazon Resource Name (ARN) for the private CA issues the certificate.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  CertificateAuthorityArn: Value<string>;
  /**
   * The period of time during which the certificate will be valid.
   *
   * _Required_: Yes
   *
   * _Type_: [Validity](aws-properties-acmpca-certificate-validity.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Validity: ACMPCACertificateValidity;
  /**
   * The certificate signing request (CSR) for the certificate.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  CertificateSigningRequest: Value<string>;
  /**
   * The name of the algorithm that will be used to sign the certificate to be issued.
   *
   * This parameter should not be confused with the `SigningAlgorithm` parameter used to sign a CSR in the `CreateCertificateAuthority` action.
   *
   * The specified signing algorithm family (RSA or ECDSA) must match the algorithm family of the CA's secret key.
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
   * Specifies X.509 certificate information to be included in the issued certificate. An `APIPassthrough` or `APICSRPassthrough` template variant must be selected, or else this parameter is ignored.
   *
   * _Required_: No
   *
   * _Type_: [ApiPassthrough](aws-properties-acmpca-certificate-apipassthrough.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ApiPassthrough?: ACMPCACertificateApiPassthrough;
  /**
   * Information describing the start of the validity period of the certificate. This parameter sets the “Not Before" date for the certificate.
   *
   * By default, when issuing a certificate, AWS Private CA sets the "Not Before" date to the issuance time minus 60 minutes. This compensates for clock inconsistencies across computer systems. The `ValidityNotBefore` parameter can be used to customize the “Not Before” value.
   *
   * Unlike the `Validity` parameter, the `ValidityNotBefore` parameter is optional.
   *
   * The `ValidityNotBefore` value is expressed as an explicit date and time, using the `Validity` type value `ABSOLUTE`.
   *
   * _Required_: No
   *
   * _Type_: [Validity](aws-properties-acmpca-certificate-validity.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ValidityNotBefore?: ACMPCACertificateValidity;
}

/**
 * The `AWS::ACMPCA::Certificate` resource is used to issue a certificate using your private certificate authority. For more information, see the [IssueCertificate](https://docs.aws.amazon.com/privateca/latest/APIReference/API_IssueCertificate.html) action.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-acmpca-certificate.html}
 */
export interface ACMPCACertificateResource {
  Type: 'AWS::ACMPCA::Certificate';
  Properties: ACMPCACertificateProperties;
}
