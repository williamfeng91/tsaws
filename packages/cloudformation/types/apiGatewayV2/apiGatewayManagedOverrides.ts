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
 * The `IntegrationOverrides` property overrides the integration settings for an API Gateway-managed integration. If you remove this property, API Gateway restores the default values.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigatewayv2-apigatewaymanagedoverrides-integrationoverrides.html}
 **/
export interface ApiGatewayV2ApiGatewayManagedOverridesIntegrationOverrides {
  /**
   * The description of the integration.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Description?: Value<string>;
  /**
   * Specifies the format of the payload sent to an integration. Required for HTTP APIs. For HTTP APIs, supported values for Lambda proxy integrations are `1.0` and `2.0`. For all other integrations, `1.0` is the only supported value. To learn more, see [Working with AWS Lambda proxy integrations for HTTP APIs](https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-develop-integrations-lambda.html).
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PayloadFormatVersion?: Value<string>;
  /**
   * Custom timeout between 50 and 29,000 milliseconds for WebSocket APIs and between 50 and 30,000 milliseconds for HTTP APIs. The default timeout is 29 seconds for WebSocket APIs and 30 seconds for HTTP APIs.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TimeoutInMillis?: Value<number>;
  /**
   * Specifies the integration's HTTP method type.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  IntegrationMethod?: Value<string>;
}

/**
 * The `AccessLogSettings` property overrides the access log settings for an API Gateway-managed stage.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigatewayv2-apigatewaymanagedoverrides-accesslogsettings.html}
 **/
export interface ApiGatewayV2ApiGatewayManagedOverridesAccessLogSettings {
  /**
   * A single line format of the access logs of data, as specified by selected $context variables. The format must include at least $context.requestId.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Format?: Value<string>;
  /**
   * The ARN of the CloudWatch Logs log group to receive access logs.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DestinationArn?: Value<string>;
}

/**
 * The `RouteOverrides` property overrides the route configuration for an API Gateway-managed route. If you remove this property, API Gateway restores the default values.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigatewayv2-apigatewaymanagedoverrides-routeoverrides.html}
 **/
export interface ApiGatewayV2ApiGatewayManagedOverridesRouteOverrides {
  /**
   * For HTTP integrations, specify a fully qualified URL. For Lambda integrations, specify a function ARN. The type of the integration will be HTTP_PROXY or AWS_PROXY, respectively.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Target?: Value<string>;
  /**
   * The identifier of the `Authorizer` resource to be associated with this route. The authorizer identifier is generated by API Gateway when you created the authorizer.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AuthorizerId?: Value<string>;
  /**
   * The operation name for the route.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  OperationName?: Value<string>;
  /**
   * The authorization scopes supported by this route.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AuthorizationScopes?: List<Value<string>>;
  /**
   * The authorization type for the route. To learn more, see [AuthorizationType](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-route.html#cfn-apigatewayv2-route-authorizationtype).
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AuthorizationType?: Value<string>;
}

/**
 * The `StageOverrides` property overrides the stage configuration for an API Gateway-managed stage. If you remove this property, API Gateway restores the default values.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigatewayv2-apigatewaymanagedoverrides-stageoverrides.html}
 **/
export interface ApiGatewayV2ApiGatewayManagedOverridesStageOverrides {
  /**
   * The description for the API stage.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Description?: Value<string>;
  /**
   * Settings for logging access in a stage.
   *
   * _Required_: No
   *
   * _Type_: [AccessLogSettings](aws-properties-apigatewayv2-apigatewaymanagedoverrides-accesslogsettings.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AccessLogSettings?: ApiGatewayV2ApiGatewayManagedOverridesAccessLogSettings;
  /**
   * Specifies whether updates to an API automatically trigger a new deployment. The default value is `true`.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AutoDeploy?: Value<boolean>;
  /**
   * Route settings for the stage.
   *
   * _Required_: No
   *
   * _Type_: [Json](aws-properties-apigatewayv2-apigatewaymanagedoverrides-routesettings.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RouteSettings?: { [key: string]: any };
  /**
   * A map that defines the stage variables for a `Stage`. Variable names can have alphanumeric and underscore characters, and the values must match [A-Za-z0-9-._~:/?#&=,]+.
   *
   * _Required_: No
   *
   * _Type_: Json
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  StageVariables?: { [key: string]: any };
  /**
   * The default route settings for the stage.
   *
   * _Required_: No
   *
   * _Type_: [RouteSettings](aws-properties-apigatewayv2-apigatewaymanagedoverrides-routesettings.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DefaultRouteSettings?: ApiGatewayV2ApiGatewayManagedOverridesRouteSettings;
}

/**
 * The `RouteSettings` property overrides the route settings for an API Gateway-managed route.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-apigatewayv2-apigatewaymanagedoverrides-routesettings.html}
 **/
export interface ApiGatewayV2ApiGatewayManagedOverridesRouteSettings {
  /**
   * Specifies the logging level for this route: `INFO`, `ERROR`, or `OFF`. This property affects the log entries pushed to Amazon CloudWatch Logs. Supported only for WebSocket APIs.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  LoggingLevel?: Value<string>;
  /**
   * Specifies whether (`true`) or not (`false`) data trace logging is enabled for this route. This property affects the log entries pushed to Amazon CloudWatch Logs. Supported only for WebSocket APIs.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DataTraceEnabled?: Value<boolean>;
  /**
   * Specifies the throttling burst limit.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ThrottlingBurstLimit?: Value<number>;
  /**
   * Specifies whether detailed metrics are enabled.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DetailedMetricsEnabled?: Value<boolean>;
  /**
   * Specifies the throttling rate limit.
   *
   * _Required_: No
   *
   * _Type_: Double
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ThrottlingRateLimit?: Value<number>;
}
export interface ApiGatewayV2ApiGatewayManagedOverridesProperties {
  /**
   * Overrides the integration configuration for an API Gateway-managed integration.
   *
   * _Required_: No
   *
   * _Type_: [IntegrationOverrides](aws-properties-apigatewayv2-apigatewaymanagedoverrides-integrationoverrides.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Integration?: ApiGatewayV2ApiGatewayManagedOverridesIntegrationOverrides;
  /**
   * Overrides the stage configuration for an API Gateway-managed stage.
   *
   * _Required_: No
   *
   * _Type_: [StageOverrides](aws-properties-apigatewayv2-apigatewaymanagedoverrides-stageoverrides.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Stage?: ApiGatewayV2ApiGatewayManagedOverridesStageOverrides;
  /**
   * The ID of the API for which to override the configuration of API Gateway-managed resources.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ApiId: Value<string>;
  /**
   * Overrides the route configuration for an API Gateway-managed route.
   *
   * _Required_: No
   *
   * _Type_: [RouteOverrides](aws-properties-apigatewayv2-apigatewaymanagedoverrides-routeoverrides.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Route?: ApiGatewayV2ApiGatewayManagedOverridesRouteOverrides;
}

/**
 * The `AWS::ApiGatewayV2::ApiGatewayManagedOverrides` resource overrides the default properties of API Gateway-managed resources that are implicitly configured for you when you use quick create. When you create an API by using quick create, an `AWS::ApiGatewayV2::Route`, `AWS::ApiGatewayV2::Integration`, and `AWS::ApiGatewayV2::Stage` are created for you and associated with your `AWS::ApiGatewayV2::Api`. The `AWS::ApiGatewayV2::ApiGatewayManagedOverrides` resource enables you to set, or override the properties of these implicit resources. Supported only for HTTP APIs.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-apigatewaymanagedoverrides.html}
 */
export interface ApiGatewayV2ApiGatewayManagedOverridesResource {
  Type: 'AWS::ApiGatewayV2::ApiGatewayManagedOverrides';
  Properties: ApiGatewayV2ApiGatewayManagedOverridesProperties;
}
