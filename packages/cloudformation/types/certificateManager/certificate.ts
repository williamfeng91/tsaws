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
 * `DomainValidationOption` is a property of the [AWS::CertificateManager::Certificate](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-certificatemanager-certificate.html) resource that specifies the AWS Certificate Manager (ACM) certificate domain to validate. Depending on the chosen validation method, ACM checks the domain's DNS record for a validation CNAME, or it attempts to send a validation email message to the domain owner.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-certificatemanager-certificate-domainvalidationoption.html}
 **/
export interface CertificateManagerCertificateDomainValidationOption {
  /**
   * A fully qualified domain name (FQDN) in the certificate request.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `253`
   *
   * _Pattern_: `^(*.)?(((?!-)[A-Za-z0-9-]{0,62}[A-Za-z0-9]).)+((?!-)[A-Za-z0-9-]{1,62}[A-Za-z0-9])$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DomainName: Value<string>;
  /**
   * The `HostedZoneId` option, which is available if you are using Route 53 as your domain registrar, causes ACM to add your CNAME to the domain record. Your list of `DomainValidationOptions` must contain one and only one of the domain-validation options, and the `HostedZoneId` can be used only when `DNS` is specified as your validation method.
   *
   * Use the Route 53 `ListHostedZones` API to discover IDs for available hosted zones.
   *
   * This option is required for publicly trusted certificates.
   *
   * The `ListHostedZones` API returns IDs in the format "/hostedzone/Z111111QQQQQQQ", but CloudFormation requires the IDs to be in the format "Z111111QQQQQQQ".
   *
   * When you change your `DomainValidationOptions`, a new resource is created.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  HostedZoneId?: Value<string>;
  /**
   * The domain name to which you want ACM to send validation emails. This domain name is the suffix of the email addresses that you want ACM to use. This must be the same as the `DomainName` value or a superdomain of the `DomainName` value. For example, if you request a certificate for `testing.example.com`, you can specify `example.com` as this value. In that case, ACM sends domain validation emails to the following five addresses:
   */
  ValidationDomain?: Value<string>;
}
export interface CertificateManagerCertificateProperties {
  /**
   * The Amazon Resource Name (ARN) of the private certificate authority (CA) that will be used to issue the certificate. If you do not provide an ARN and you are trying to request a private certificate, ACM will attempt to issue a public certificate. For more information about private CAs, see the [AWS Private Certificate Authority](https://docs.aws.amazon.com/privateca/latest/userguide/PcaWelcome.html) user guide. The ARN must have the following form:
   *
   * `arn:aws:acm-pca:region:account:certificate-authority/12345678-1234-1234-1234-123456789012`
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `20`
   *
   * _Maximum_: `2048`
   *
   * _Pattern_: `arn:[w+=/,.@-]+:acm-pca:[w+=/,.@-]*:[0-9]+:[w+=,.@-]+(/[w+=,.@-]+)*`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  CertificateAuthorityArn?: Value<string>;
  /**
   * You can opt out of certificate transparency logging by specifying the `DISABLED` option. Opt in by specifying `ENABLED`.
   *
   * If you do not specify a certificate transparency logging preference on a new CloudFormation template, or if you remove the logging preference from an existing template, this is the same as explicitly enabling the preference.
   *
   * Changing the certificate transparency logging preference will update the existing resource by calling `UpdateCertificateOptions` on the certificate. This action will not create a new resource.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `DISABLED | ENABLED`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CertificateTransparencyLoggingPreference?: Value<string>;
  /**
   * The fully qualified domain name (FQDN), such as www.example.com, with which you want to secure an ACM certificate. Use an asterisk (*) to create a wildcard certificate that protects several sites in the same domain. For example, `*.example.com` protects `www.example.com`, `site.example.com`, and `images.example.com.`
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `253`
   *
   * _Pattern_: `^(*.)?(((?!-)[A-Za-z0-9-]{0,62}[A-Za-z0-9]).)+((?!-)[A-Za-z0-9-]{1,62}[A-Za-z0-9])$`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  DomainName: Value<string>;
  /**
   * Domain information that domain name registrars use to verify your identity.
   *
   * In order for a AWS::CertificateManager::Certificate to be provisioned and validated in CloudFormation automatically, the `DomainName` property needs to be identical to one of the `DomainName` property supplied in DomainValidationOptions, if the ValidationMethod is **DNS**. Failing to keep them like-for-like will result in failure to create the domain validation records in Route53.
   *
   * _Required_: No
   *
   * _Type_: List of [DomainValidationOption](aws-properties-certificatemanager-certificate-domainvalidationoption.md)
   *
   * _Maximum_: `100`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  DomainValidationOptions?: List<CertificateManagerCertificateDomainValidationOption>;
  /**
   * Additional FQDNs to be included in the Subject Alternative Name extension of the ACM certificate. For example, you can add www.example.net to a certificate for which the `DomainName` field is www.example.com if users can reach your site by using either name.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Maximum_: `100`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  SubjectAlternativeNames?: List<Value<string>>;
  /**
   * Key-value pairs that can identify the certificate.
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
  /**
   * The method you want to use to validate that you own or control the domain associated with a public certificate. You can [validate with DNS](https://docs.aws.amazon.com/acm/latest/userguide/gs-acm-validate-dns.html) or [validate with email](https://docs.aws.amazon.com/acm/latest/userguide/gs-acm-validate-email.html). We recommend that you use DNS validation.
   *
   * If not specified, this property defaults to email validation.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `DNS | EMAIL`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ValidationMethod?: Value<string>;
}

/**
 * The `AWS::CertificateManager::Certificate` resource requests an AWS Certificate Manager (ACM) certificate that you can use to enable secure connections. For example, you can deploy an ACM certificate to an Elastic Load Balancer to enable HTTPS support. For more information, see [RequestCertificate](https://docs.aws.amazon.com/acm/latest/APIReference/API_RequestCertificate.html) in the AWS Certificate Manager API Reference.
 *
 * **Important**
 *
 * When you use the `AWS::CertificateManager::Certificate` resource in a CloudFormation stack, domain validation is handled automatically if all three of the following are true: The certificate domain is hosted in Amazon Route 53, the domain resides in your AWS account, and you are using DNS validation.
 *
 * However, if the certificate uses email validation, or if the domain is not hosted in Route 53, then the stack will remain in the `CREATE_IN_PROGRESS` state. Further stack operations are delayed until you validate the certificate request, either by acting upon the instructions in the validation email, or by adding a CNAME record to your DNS configuration. For more information, see [Option 1: DNS Validation](https://docs.aws.amazon.com/acm/latest/userguide/dns-validation.html) and [Option 2: Email Validation](https://docs.aws.amazon.com/acm/latest/userguide/email-validation.html).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-certificatemanager-certificate.html}
 */
export interface CertificateManagerCertificateResource {
  Type: 'AWS::CertificateManager::Certificate';
  Properties: CertificateManagerCertificateProperties;
}
