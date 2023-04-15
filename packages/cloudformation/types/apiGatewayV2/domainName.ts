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
 * If specified, API Gateway performs two-way authentication between the client and the server. Clients must present a trusted certificate to access your API.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigatewayv2-domainname-mutualtlsauthentication.html}
 **/
export interface ApiGatewayV2DomainNameMutualTlsAuthentication {
  /**
   * The version of the S3 object that contains your truststore. To specify a version, you must have versioning enabled for the S3 bucket.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TruststoreVersion?: Value<string>;
  /**
   * An Amazon S3 URL that specifies the truststore for mutual TLS authentication, for example, `s3://bucket-name/key-name `. The truststore can contain certificates from public or private certificate authorities. To update the truststore, upload a new version to S3, and then update your custom domain name to use the new version. To update the truststore, you must have permissions to access the S3 object.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TruststoreUri?: Value<string>;
}

/**
 * The `DomainNameConfiguration` property type specifies the configuration for a an API's domain name.
 *
 * `DomainNameConfiguration` is a property of the [AWS::ApiGatewayV2::DomainName](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-domainname.html) resource.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigatewayv2-domainname-domainnameconfiguration.html}
 **/
export interface ApiGatewayV2DomainNameDomainNameConfiguration {
  /**
   * The Amazon resource name (ARN) for the public certificate issued by AWS Certificate Manager. This ARN is used to validate custom domain ownership. It's required only if you configure mutual TLS and use either an ACM-imported or a private CA certificate ARN as the regionalCertificateArn.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  OwnershipVerificationCertificateArn?: Value<string>;
  /**
   * The Transport Layer Security (TLS) version of the security policy for this domain name. The valid values are `TLS_1_0` and `TLS_1_2`.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SecurityPolicy?: Value<string>;
  /**
   * The endpoint type.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  EndpointType?: Value<string>;
  /**
   * The user-friendly name of the certificate that will be used by the edge-optimized endpoint for this domain name.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CertificateName?: Value<string>;
  /**
   * An AWS-managed certificate that will be used by the edge-optimized endpoint for this domain name. AWS Certificate Manager is the only supported source.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CertificateArn?: Value<string>;
}
export interface ApiGatewayV2DomainNameProperties {
  /**
   * The mutual TLS authentication configuration for a custom domain name.
   *
   * _Required_: No
   *
   * _Type_: [MutualTlsAuthentication](aws-properties-apigatewayv2-domainname-mutualtlsauthentication.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MutualTlsAuthentication?: ApiGatewayV2DomainNameMutualTlsAuthentication;
  /**
   * The custom domain name for your API in Amazon API Gateway. Uppercase letters are not supported.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  DomainName: Value<string>;
  /**
   * The domain name configurations.
   *
   * _Required_: No
   *
   * _Type_: List of [DomainNameConfiguration](aws-properties-apigatewayv2-domainname-domainnameconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DomainNameConfigurations?: List<ApiGatewayV2DomainNameDomainNameConfiguration>;
  /**
   * The collection of tags associated with a domain name.
   *
   * _Required_: No
   *
   * _Type_: Json
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Tags?: { [key: string]: any };
}

/**
 * The `AWS::ApiGatewayV2::DomainName` resource specifies a custom domain name for your API in Amazon API Gateway (API Gateway).
 *
 * You can use a custom domain name to provide a URL that's more intuitive and easier to recall. For more information about using custom domain names, see [Set up Custom Domain Name for an API in API Gateway](https://docs.aws.amazon.com/apigateway/latest/developerguide/how-to-custom-domains.html) in the _API Gateway Developer Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-domainname.html}
 */
export interface ApiGatewayV2DomainNameResource {
  Type: 'AWS::ApiGatewayV2::DomainName';
  Properties: ApiGatewayV2DomainNameProperties;
}
