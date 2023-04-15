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

export interface ApiGatewayGatewayResponseProperties {
  /**
   * Response templates of the GatewayResponse as a string-to-string map of key-value pairs.
   *
   * _Required_: No
   *
   * _Type_: Map of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ResponseTemplates?: { [key: string]: Value<string> };
  /**
   * Response parameters (paths, query strings and headers) of the GatewayResponse as a string-to-string map of key-value pairs.
   *
   * _Required_: No
   *
   * _Type_: Map of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ResponseParameters?: { [key: string]: Value<string> };
  /**
   * The string identifier of the associated RestApi.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  RestApiId: Value<string>;
  /**
   * The HTTP status code for this GatewayResponse.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  StatusCode?: Value<string>;
  /**
   * The response type of the associated GatewayResponse.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Allowed values_: `ACCESS_DENIED | API_CONFIGURATION_ERROR | AUTHORIZER_CONFIGURATION_ERROR | AUTHORIZER_FAILURE | BAD_REQUEST_BODY | BAD_REQUEST_PARAMETERS | DEFAULT_4XX | DEFAULT_5XX | EXPIRED_TOKEN | INTEGRATION_FAILURE | INTEGRATION_TIMEOUT | INVALID_API_KEY | INVALID_SIGNATURE | MISSING_AUTHENTICATION_TOKEN | QUOTA_EXCEEDED | REQUEST_TOO_LARGE | RESOURCE_NOT_FOUND | THROTTLED | UNAUTHORIZED | UNSUPPORTED_MEDIA_TYPE`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ResponseType: Value<string>;
}

/**
 * The `AWS::ApiGateway::GatewayResponse` resource creates a gateway response for your API. For more information, see [API Gateway Responses](https://docs.aws.amazon.com/apigateway/latest/developerguide/customize-gateway-responses.html#api-gateway-gatewayResponse-definition) in the _API Gateway Developer Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-gatewayresponse.html}
 */
export interface ApiGatewayGatewayResponseResource {
  Type: 'AWS::ApiGateway::GatewayResponse';
  Properties: ApiGatewayGatewayResponseProperties;
}
