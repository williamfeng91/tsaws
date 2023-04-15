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

export interface ApiGatewayV2IntegrationResponseProperties {
  /**
   * The collection of response templates for the integration response as a string-to-string map of key-value pairs. Response templates are represented as a key/value map, with a content-type as the key and a template as the value.
   *
   * _Required_: No
   *
   * _Type_: Json
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ResponseTemplates?: { [key: string]: any };
  /**
   * The template selection expression for the integration response. Supported only for WebSocket APIs.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TemplateSelectionExpression?: Value<string>;
  /**
   * A key-value map specifying response parameters that are passed to the method response from the backend. The key is a method response header parameter name and the mapped value is an integration response header value, a static value enclosed within a pair of single quotes, or a JSON expression from the integration response body. The mapping key must match the pattern of `method.response.header.{name} `, where name is a valid and unique header name. The mapped non-static value must match the pattern of `integration.response.header.{name} ` or `integration.response.body.{JSON-expression} `, where `{name}` is a valid and unique response header name and `{JSON-expression}` is a valid JSON expression without the `$` prefix.
   *
   * _Required_: No
   *
   * _Type_: Json
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ResponseParameters?: { [key: string]: any };
  /**
   * Supported only for WebSocket APIs. Specifies how to handle response payload content type conversions. Supported values are `CONVERT_TO_BINARY` and `CONVERT_TO_TEXT`, with the following behaviors:
   *
   * `CONVERT_TO_BINARY`: Converts a response payload from a Base64-encoded string to the corresponding binary blob.
   *
   * `CONVERT_TO_TEXT`: Converts a response payload from a binary blob to a Base64-encoded string.
   *
   * If this property is not defined, the response payload will be passed through from the integration response to the route response or method response without modification.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ContentHandlingStrategy?: Value<string>;
  /**
   * The integration ID.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  IntegrationId: Value<string>;
  /**
   * The integration response key.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  IntegrationResponseKey: Value<string>;
  /**
   * The API identifier.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ApiId: Value<string>;
}

/**
 * The `AWS::ApiGatewayV2::IntegrationResponse` resource updates an integration response for an WebSocket API. For more information, see [Set up WebSocket API Integration Responses in API Gateway](https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-integration-responses.html) in the _API Gateway Developer Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-integrationresponse.html}
 */
export interface ApiGatewayV2IntegrationResponseResource {
  Type: 'AWS::ApiGatewayV2::IntegrationResponse';
  Properties: ApiGatewayV2IntegrationResponseProperties;
}
