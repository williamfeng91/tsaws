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
 * The `EndpointConfiguration` property type specifies the endpoint types of a REST API.
 *
 * `EndpointConfiguration` is a property of the [AWS::ApiGateway::RestApi](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-restapi.html) resource.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigateway-restapi-endpointconfiguration.html}
 **/
export interface ApiGatewayRestApiEndpointConfiguration {
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
  /**
   * A list of VpcEndpointIds of an API (RestApi) against which to create Route53 ALIASes. It is only supported for `PRIVATE` endpoint type.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  VpcEndpointIds?: List<Value<string>>;
}

/**
 * `S3Location` is a property of the [AWS::ApiGateway::RestApi](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-restapi.html) resource that specifies the Amazon S3 location of a OpenAPI (formerly Swagger) file that defines a set of RESTful APIs in JSON or YAML.
 *
 * **Note**
 *
 * On January 1, 2016, the Swagger Specification was donated to the [OpenAPI initiative](https://www.openapis.org/), becoming the foundation of the OpenAPI Specification.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigateway-restapi-s3location.html}
 **/
export interface ApiGatewayRestApiS3Location {
  /**
   * The name of the S3 bucket where the OpenAPI file is stored.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Bucket?: Value<string>;
  /**
   * The Amazon S3 ETag (a file checksum) of the OpenAPI file. If you don't specify a value, API Gateway skips ETag validation of your OpenAPI file.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ETag?: Value<string>;
  /**
   * For versioning-enabled buckets, a specific version of the OpenAPI file.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Version?: Value<string>;
  /**
   * The file name of the OpenAPI file (Amazon S3 object name).
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Key?: Value<string>;
}
export interface ApiGatewayRestApiProperties {
  /**
   * A policy document that contains the permissions for the `RestApi` resource. To set the ARN for the policy, use the `!Join` intrinsic function with `""` as delimiter and values of `"execute-api:/"` and `"*"`.
   *
   * _Required_: No
   *
   * _Type_: Json
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Policy?: { [key: string]: any };
  /**
   * The Amazon Simple Storage Service (Amazon S3) location that points to an OpenAPI file, which defines a set of RESTful APIs in JSON or YAML format.
   *
   * _Required_: No
   *
   * _Type_: [S3Location](aws-properties-apigateway-restapi-s3location.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  BodyS3Location?: ApiGatewayRestApiS3Location;
  /**
   * The description of the RestApi.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Description?: Value<string>;
  /**
   * A nullable integer that is used to enable compression (with non-negative between 0 and 10485760 (10M) bytes, inclusive) or disable compression (with a null value) on an API. When compression is enabled, compression or decompression is not applied on the payload if the payload size is smaller than this value. Setting it to zero allows compression for any payload size.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MinimumCompressionSize?: Value<number>;
  /**
   * Custom header parameters as part of the request. For example, to exclude DocumentationParts from an imported API, set `ignore=documentation` as a `parameters` value, as in the AWS CLI command of `aws apigateway import-rest-api --parameters ignore=documentation --body 'file:///path/to/imported-api-body.json'`.
   *
   * _Required_: No
   *
   * _Type_: Map of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Parameters?: { [key: string]: Value<string> };
  /**
   * The ID of the RestApi that you want to clone from.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CloneFrom?: Value<string>;
  /**
   * This property applies only when you use OpenAPI to define your REST API. The `Mode` determines how API Gateway handles resource updates.
   *
   * Valid values are `overwrite` or `merge`.
   *
   * For `overwrite`, the new API definition replaces the existing one. The existing API identifier remains unchanged.
   *
   * For `merge`, the new API definition takes precedence, but any container types such as endpoint configurations and binary media types are merged with the existing API. Use `merge` to define top-level `RestApi` properties in addition to using OpenAPI. Generally, it's preferred to use API Gateway's OpenAPI extensions to model these properties.
   *
   * If you don't specify this property, a default value is chosen. For REST APIs created before March 29, 2021, the default is `overwrite`. Otherwise, the default value is `merge`.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Mode?: Value<string>;
  /**
   * Specifies whether clients can invoke your API by using the default `execute-api` endpoint. By default, clients can invoke your API with the default `https://{api_id}.execute-api.{region}.amazonaws.com` endpoint. To require that clients use a custom domain name to invoke your API, disable the default endpoint
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DisableExecuteApiEndpoint?: Value<boolean>;
  /**
   * A query parameter to indicate whether to rollback the API update (`true`) or not (`false`) when a warning is encountered. The default value is `false`.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FailOnWarnings?: Value<boolean>;
  /**
   * The list of binary media types supported by the RestApi. By default, the RestApi supports only UTF-8-encoded text payloads.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  BinaryMediaTypes?: List<Value<string>>;
  /**
   * The name of the RestApi.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Name?: Value<string>;
  /**
   * The source of the API key for metering requests according to a usage plan. Valid values are: `HEADER` to read the API key from the `X-API-Key` header of a request. `AUTHORIZER` to read the API key from the `UsageIdentifierKey` from a custom authorizer.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ApiKeySourceType?: Value<string>;
  /**
   * A list of the endpoint types of the API. Use this property when creating an API. When importing an existing API, specify the endpoint configuration types using the `Parameters` property.
   *
   * _Required_: No
   *
   * _Type_: [EndpointConfiguration](aws-properties-apigateway-restapi-endpointconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  EndpointConfiguration?: ApiGatewayRestApiEndpointConfiguration;
  /**
   * An OpenAPI specification that defines a set of RESTful APIs in JSON format. For YAML templates, you can also provide the specification in YAML format.
   *
   * _Required_: No
   *
   * _Type_: Json
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Body?: { [key: string]: any };
  /**
   * The key-value map of strings. The valid character set is [a-zA-Z+-=._:/]. The tag key can be up to 128 characters and must not start with `aws:`. The tag value can be up to 256 characters.
   *
   * _Required_: No
   *
   * _Type_: List of [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Tags?: List<ResourceTag>;
}

/**
 * The `AWS::ApiGateway::RestApi` resource creates a REST API. For more information, see [restapi:create](https://docs.aws.amazon.com/apigateway/latest/api/API_CreateRestApi.html) in the _Amazon API Gateway REST API Reference_.
 *
 * **Note**
 *
 * On January 1, 2016, the Swagger Specification was donated to the [OpenAPI initiative](https://www.openapis.org/), becoming the foundation of the OpenAPI Specification.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-restapi.html}
 */
export interface ApiGatewayRestApiResource {
  Type: 'AWS::ApiGateway::RestApi';
  Properties: ApiGatewayRestApiProperties;
}
