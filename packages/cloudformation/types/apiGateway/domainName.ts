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
 * The `EndpointConfiguration` property type specifies the endpoint types of an Amazon API Gateway domain name.
 *
 * `EndpointConfiguration` is a property of the [AWS::ApiGateway::DomainName](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-domainname.html) resource.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigateway-domainname-endpointconfiguration.html}
 **/
export interface ApiGatewayDomainNameEndpointConfiguration {
  /**
   * A list of endpoint types of an API (RestApi) or its custom domain name (DomainName). For an edge-optimized API and its custom domain name, the endpoint type is `"EDGE"`. For a regional API and its custom domain name, the endpoint type is `REGIONAL`. For a private API, the endpoint type is `PRIVATE`.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Types?: List<Value<string>>;
}

/**
 * The mutual TLS authentication configuration for a custom domain name. If specified, API Gateway performs two-way authentication between the client and the server. Clients must present a trusted certificate to access your API.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigateway-domainname-mutualtlsauthentication.html}
 **/
export interface ApiGatewayDomainNameMutualTlsAuthentication {
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
   * An Amazon S3 URL that specifies the truststore for mutual TLS authentication, for example `s3://bucket-name/key-name`. The truststore can contain certificates from public or private certificate authorities. To update the truststore, upload a new version to S3, and then update your custom domain name to use the new version. To update the truststore, you must have permissions to access the S3 object.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TruststoreUri?: Value<string>;
}
export interface ApiGatewayDomainNameProperties {
  /**
   * The mutual TLS authentication configuration for a custom domain name. If specified, API Gateway performs two-way authentication between the client and the server. Clients must present a trusted certificate to access your API.
   *
   * _Required_: No
   *
   * _Type_: [MutualTlsAuthentication](aws-properties-apigateway-domainname-mutualtlsauthentication.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MutualTlsAuthentication?: ApiGatewayDomainNameMutualTlsAuthentication;
  /**
   * The ARN of the public certificate issued by ACM to validate ownership of your custom domain. Only required when configuring mutual TLS and using an ACM imported or private CA certificate ARN as the RegionalCertificateArn.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  OwnershipVerificationCertificateArn?: Value<string>;
  /**
   * The custom domain name as an API host name, for example, `my-api.example.com`.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  DomainName?: Value<string>;
  /**
   * The Transport Layer Security (TLS) version + cipher suite for this DomainName. The valid values are `TLS_1_0` and `TLS_1_2`.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `TLS_1_0 | TLS_1_2`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SecurityPolicy?: Value<string>;
  /**
   * The endpoint configuration of this DomainName showing the endpoint types of the domain name.
   *
   * _Required_: No
   *
   * _Type_: [EndpointConfiguration](aws-properties-apigateway-domainname-endpointconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  EndpointConfiguration?: ApiGatewayDomainNameEndpointConfiguration;
  /**
   * The reference to an AWS-managed certificate that will be used for validating the regional domain name. AWS Certificate Manager is the only supported source.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RegionalCertificateArn?: Value<string>;
  /**
   * The collection of tags. Each tag element is associated with a given resource.
   *
   * _Required_: No
   *
   * _Type_: List of [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Tags?: List<ResourceTag>;
  /**
   * The reference to an AWS-managed certificate that will be used by edge-optimized endpoint for this domain name. AWS Certificate Manager is the only supported source.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CertificateArn?: Value<string>;
}

/**
 * The `AWS::ApiGateway::DomainName` resource specifies a custom domain name for your API in API Gateway.
 *
 * You can use a custom domain name to provide a URL that's more intuitive and easier to recall. For more information about using custom domain names, see [Set up Custom Domain Name for an API in API Gateway](https://docs.aws.amazon.com/apigateway/latest/developerguide/how-to-custom-domains.html) in the _API Gateway Developer Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-domainname.html}
 */
export interface ApiGatewayDomainNameResource {
  Type: 'AWS::ApiGateway::DomainName';
  Properties: ApiGatewayDomainNameProperties;
}
