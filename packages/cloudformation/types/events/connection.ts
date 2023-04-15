/**
 * Supported regions:
 * - ap-northeast-1 (version 119.1.0)
 * - ap-northeast-2 (version 119.1.0)
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
 * Contains the authorization parameters to use for the connection.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-connection-authparameters.html}
 **/
export interface EventsConnectionAuthParameters {
  /**
   * Additional parameters for the connection that are passed through with every invocation to the HTTP endpoint.
   *
   * _Required_: No
   *
   * _Type_: [ConnectionHttpParameters](aws-properties-events-connection-connectionhttpparameters.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  InvocationHttpParameters?: EventsConnectionConnectionHttpParameters;
  /**
   * The authorization parameters for Basic authorization.
   *
   * _Required_: No
   *
   * _Type_: [BasicAuthParameters](aws-properties-events-connection-basicauthparameters.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  BasicAuthParameters?: EventsConnectionBasicAuthParameters;
  /**
   * The API Key parameters to use for authorization.
   *
   * _Required_: No
   *
   * _Type_: [ApiKeyAuthParameters](aws-properties-events-connection-apikeyauthparameters.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ApiKeyAuthParameters?: EventsConnectionApiKeyAuthParameters;
  /**
   * The OAuth parameters to use for authorization.
   *
   * _Required_: No
   *
   * _Type_: [OAuthParameters](aws-properties-events-connection-oauthparameters.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  OAuthParameters?: EventsConnectionOAuthParameters;
}

/**
 * Contains the Basic authorization parameters for the connection.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-connection-basicauthparameters.html}
 **/
export interface EventsConnectionBasicAuthParameters {
  /**
   * The user name to use for Basic authorization.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `512`
   *
   * _Pattern_: `^[ t]*[^x00-x1F:x7F]+([ t]+[^x00-x1F:x7F]+)*[ t]*$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Username: Value<string>;
  /**
   * The password associated with the user name to use for Basic authorization.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `512`
   *
   * _Pattern_: `^[ t]*[^x00-x1F:x7F]+([ t]+[^x00-x1F:x7F]+)*[ t]*$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Password: Value<string>;
}

/**
 * Additional query string parameter for the connection. You can include up to 100 additional query string parameters per request. Each additional parameter counts towards the event payload size, which cannot exceed 64 KB.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-connection-parameter.html}
 **/
export interface EventsConnectionParameter {
  /**
   * The value associated with the key for the query string parameter.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Maximum_: `512`
   *
   * _Pattern_: `[^x00-x09x0Bx0Cx0E-x1Fx7F]+`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Value: Value<string>;
  /**
   * Specifies whether the value is secret.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  IsValueSecret?: Value<boolean>;
  /**
   * The key for a query string parameter.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Maximum_: `512`
   *
   * _Pattern_: `[^x00-x1Fx7F]+`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Key: Value<string>;
}

/**
 * Contains the OAuth authorization parameters to use for the connection.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-connection-oauthparameters.html}
 **/
export interface EventsConnectionOAuthParameters {
  /**
   * A `CreateConnectionOAuthClientRequestParameters` object that contains the client parameters for OAuth authorization.
   *
   * _Required_: Yes
   *
   * _Type_: [ClientParameters](aws-properties-events-connection-clientparameters.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ClientParameters: EventsConnectionClientParameters;
  /**
   * A `ConnectionHttpParameters` object that contains details about the additional parameters to use for the connection.
   *
   * _Required_: No
   *
   * _Type_: [ConnectionHttpParameters](aws-properties-events-connection-connectionhttpparameters.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  OAuthHttpParameters?: EventsConnectionConnectionHttpParameters;
  /**
   * The URL to the authorization endpoint when OAuth is specified as the authorization type.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `2048`
   *
   * _Pattern_: `^((%[0-9A-Fa-f]{2}|[-()_.!~*';/?:@x26=+$,A-Za-z0-9])+)([).!';/?:,])?$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AuthorizationEndpoint: Value<string>;
  /**
   * The method to use for the authorization request.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Allowed values_: `GET | POST | PUT`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  HttpMethod: Value<string>;
}

/**
 * Contains the OAuth authorization parameters to use for the connection.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-connection-clientparameters.html}
 **/
export interface EventsConnectionClientParameters {
  /**
   * The client secret assciated with the client ID to use for OAuth authorization.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `512`
   *
   * _Pattern_: `^[ t]*[^x00-x1F:x7F]+([ t]+[^x00-x1F:x7F]+)*[ t]*$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ClientSecret: Value<string>;
  /**
   * The client ID to use for OAuth authorization.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `512`
   *
   * _Pattern_: `^[ t]*[^x00-x1F:x7F]+([ t]+[^x00-x1F:x7F]+)*[ t]*$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ClientID: Value<string>;
}

/**
 * Contains additional parameters for the connection.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-connection-connectionhttpparameters.html}
 **/
export interface EventsConnectionConnectionHttpParameters {
  /**
   * Contains additional header parameters for the connection.
   *
   * _Required_: No
   *
   * _Type_: List of [Parameter](aws-properties-events-connection-parameter.md)
   *
   * _Maximum_: `100`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  HeaderParameters?: List<EventsConnectionParameter>;
  /**
   * Contains additional query string parameters for the connection.
   *
   * _Required_: No
   *
   * _Type_: List of [Parameter](aws-properties-events-connection-parameter.md)
   *
   * _Maximum_: `100`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  QueryStringParameters?: List<EventsConnectionParameter>;
  /**
   * Contains additional body string parameters for the connection.
   *
   * _Required_: No
   *
   * _Type_: List of [Parameter](aws-properties-events-connection-parameter.md)
   *
   * _Maximum_: `100`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  BodyParameters?: List<EventsConnectionParameter>;
}

/**
 * Contains the API key authorization parameters for the connection.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-events-connection-apikeyauthparameters.html}
 **/
export interface EventsConnectionApiKeyAuthParameters {
  /**
   * The value for the API key to use for authorization.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `512`
   *
   * _Pattern_: `^[ t]*[^x00-x1F:x7F]+([ t]+[^x00-x1F:x7F]+)*[ t]*$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ApiKeyValue: Value<string>;
  /**
   * The name of the API key to use for authorization.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `512`
   *
   * _Pattern_: `^[ t]*[^x00-x1F:x7F]+([ t]+[^x00-x1F:x7F]+)*[ t]*$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ApiKeyName: Value<string>;
}
export interface EventsConnectionProperties {
  /**
   * A `CreateConnectionAuthRequestParameters` object that contains the authorization parameters to use to authorize with the endpoint.
   *
   * _Required_: Yes
   *
   * _Type_: [AuthParameters](aws-properties-events-connection-authparameters.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AuthParameters: EventsConnectionAuthParameters;
  /**
   * A description for the connection to create.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Maximum_: `512`
   *
   * _Pattern_: `.*`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Description?: Value<string>;
  /**
   * The type of authorization to use for the connection.
   *
   * OAUTH tokens are refreshed when a 401 or 407 response is returned.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Allowed values_: `API_KEY | BASIC | OAUTH_CLIENT_CREDENTIALS`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AuthorizationType: Value<string>;
  /**
   * The name for the connection to create.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `64`
   *
   * _Pattern_: `[.-_A-Za-z0-9]+`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Name?: Value<string>;
}

/**
 * Creates a connection. A connection defines the authorization type and credentials to use for authorization with an API destination HTTP endpoint.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-connection.html}
 */
export interface EventsConnectionResource {
  Type: 'AWS::Events::Connection';
  Properties: EventsConnectionProperties;
}
