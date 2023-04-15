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
 * The Amazon Pinpoint analytics configuration necessary to collect metrics for a user pool.
 *
 * **Note**
 *
 * In Regions where Amazon Pinpoint isn't available, user pools only support sending events to Amazon Pinpoint projects in us-east-1. In Regions where Amazon Pinpoint is available, user pools support sending events to Amazon Pinpoint projects within that same Region.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-userpoolclient-analyticsconfiguration.html}
 **/
export interface CognitoUserPoolClientAnalyticsConfiguration {
  /**
   * The Amazon Resource Name (ARN) of an Amazon Pinpoint project. You can use the Amazon Pinpoint project for integration with the chosen user pool client. Amazon Cognito publishes events to the Amazon Pinpoint project that the app ARN declares.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ApplicationArn?: Value<string>;
  /**
   * If `UserDataShared` is `true`, Amazon Cognito includes user data in the events that it publishes to Amazon Pinpoint analytics.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  UserDataShared?: Value<boolean>;
  /**
   * The external ID.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ExternalId?: Value<string>;
  /**
   * The application ID for an Amazon Pinpoint application.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Pattern_: `^[0-9a-fA-F]+$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ApplicationId?: Value<string>;
  /**
   * The ARN of an AWS Identity and Access Management role that authorizes Amazon Cognito to publish events to Amazon Pinpoint analytics.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `20`
   *
   * _Maximum_: `2048`
   *
   * _Pattern_: `arn:[w+=/,.@-]+:[w+=/,.@-]+:([w+=/,.@-]*)?:[0-9]+:[w+=/,.@-]+(:[w+=/,.@-]+)?(:[w+=/,.@-]+)?`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RoleArn?: Value<string>;
}

/**
 * The time units you use when you set the duration of ID, access, and refresh tokens. The default unit for RefreshToken is days, and the default for ID and access tokens is hours.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-userpoolclient-tokenvalidityunits.html}
 **/
export interface CognitoUserPoolClientTokenValidityUnits {
  /**
   * A time unit of `seconds`, `minutes`, `hours`, or `days` for the value that you set in the `IdTokenValidity` parameter. The default `IdTokenValidity` time unit is hours. `IdTokenValidity` duration can range from five minutes to one day.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `days | hours | minutes | seconds`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  IdToken?: Value<string>;
  /**
   * A time unit of `seconds`, `minutes`, `hours`, or `days` for the value that you set in the `RefreshTokenValidity` parameter. The default `RefreshTokenValidity` time unit is days. `RefreshTokenValidity` duration can range from 60 minutes to 10 years.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `days | hours | minutes | seconds`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RefreshToken?: Value<string>;
  /**
   * A time unit of `seconds`, `minutes`, `hours`, or `days` for the value that you set in the `AccessTokenValidity` parameter. The default `AccessTokenValidity` time unit is hours. `AccessTokenValidity` duration can range from five minutes to one day.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `days | hours | minutes | seconds`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AccessToken?: Value<string>;
}
export interface CognitoUserPoolClientProperties {
  /**
   * The user pool analytics configuration for collecting metrics and sending them to your Amazon Pinpoint campaign.
   *
   * In AWS Regions where Amazon Pinpoint isn't available, user pools only support sending events to Amazon Pinpoint projects in AWS Region us-east-1. In Regions where Amazon Pinpoint is available, user pools support sending events to Amazon Pinpoint projects within that same Region.
   *
   * _Required_: No
   *
   * _Type_: [AnalyticsConfiguration](aws-properties-cognito-userpoolclient-analyticsconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AnalyticsConfiguration?: CognitoUserPoolClientAnalyticsConfiguration;
  /**
   * Boolean to specify whether you want to generate a secret for the user pool client being created.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  GenerateSecret?: Value<boolean>;
  /**
   * A list of allowed redirect (callback) URLs for the IdPs.
   *
   * A redirect URI must:
   */
  CallbackURLs?: List<Value<string>>;
  /**
   * Activates the propagation of additional user context data. For more information about propagation of user context data, see [ Adding advanced security to a user pool](https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pool-settings-advanced-security.html). If you don’t include this parameter, you can't send device fingerprint information, including source IP address, to Amazon Cognito advanced security. You can only activate `EnablePropagateAdditionalUserContextData` in an app client that has a client secret.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  EnablePropagateAdditionalUserContextData?: Value<boolean>;
  /**
   * The ID token time limit. After this limit expires, your user can't use their ID token. To specify the time unit for `IdTokenValidity` as `seconds`, `minutes`, `hours`, or `days`, set a `TokenValidityUnits` value in your API request.
   *
   * For example, when you set `IdTokenValidity` as `10` and `TokenValidityUnits` as `hours`, your user can authenticate their session with their ID token for 10 hours.
   *
   * The default time unit for `IdTokenValidity` in an API request is hours.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  IdTokenValidity?: Value<number>;
  /**
   * Amazon Cognito creates a session token for each API request in an authentication flow. `AuthSessionValidity` is the duration, in minutes, of that session token. Your user pool native user must respond to each authentication challenge before the session expires.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Minimum_: `3`
   *
   * _Maximum_: `15`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AuthSessionValidity?: Value<number>;
  /**
   * The allowed OAuth scopes. Possible values provided by OAuth are `phone`, `email`, `openid`, and `profile`. Possible values provided by AWS are `aws.cognito.signin.user.admin`. Custom scopes created in Resource Servers are also supported.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Maximum_: `50`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AllowedOAuthScopes?: List<Value<string>>;
  /**
   * The units in which the validity times are represented. The default unit for RefreshToken is days, and default for ID and access tokens are hours.
   *
   * _Required_: No
   *
   * _Type_: [TokenValidityUnits](aws-properties-cognito-userpoolclient-tokenvalidityunits.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TokenValidityUnits?: CognitoUserPoolClientTokenValidityUnits;
  /**
   * The read attributes.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ReadAttributes?: List<Value<string>>;
  /**
   * Set to true if the client is allowed to follow the OAuth protocol when interacting with Amazon Cognito user pools.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AllowedOAuthFlowsUserPoolClient?: Value<boolean>;
  /**
   * The default redirect URI. Must be in the `CallbackURLs` list.
   *
   * A redirect URI must:
   */
  DefaultRedirectURI?: Value<string>;
  /**
   * A list of provider names for the identity providers (IdPs) that are supported on this client. The following are supported: `COGNITO`, `Facebook`, `Google`, `SignInWithApple`, and `LoginWithAmazon`. You can also specify the names that you configured for the SAML and OIDC IdPs in your user pool, for example `MySAMLIdP` or `MyOIDCIdP`.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SupportedIdentityProviders?: List<Value<string>>;
  /**
   * The client name for the user pool client you would like to create.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `128`
   *
   * _Pattern_: `[ws+=,.@-]+`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ClientName?: Value<string>;
  /**
   * The user pool ID for the user pool where you want to create a user pool client.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `55`
   *
   * _Pattern_: `[w-]+_[0-9a-zA-Z]+`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  UserPoolId: Value<string>;
  /**
   * The allowed OAuth flows.
   *
   * code
   *
   * Use a code grant flow, which provides an authorization code as the response. This code can be exchanged for access tokens with the `/oauth2/token` endpoint.
   *
   * implicit
   *
   * Issue the access token (and, optionally, ID token, based on scopes) directly to your user.
   *
   * client_credentials
   *
   * Issue the access token from the `/oauth2/token` endpoint directly to a non-person user using a combination of the client ID and client secret.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Maximum_: `3`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AllowedOAuthFlows?: List<Value<string>>;
  /**
   * The authentication flows that you want your user pool client to support. For each app client in your user pool, you can sign in your users with any combination of one or more flows, including with a user name and Secure Remote Password (SRP), a user name and password, or a custom authentication process that you define with Lambda functions.
   *
   * If you don't specify a value for `ExplicitAuthFlows`, your user client supports `ALLOW_REFRESH_TOKEN_AUTH`, `ALLOW_USER_SRP_AUTH`, and `ALLOW_CUSTOM_AUTH`.
   *
   * Valid values include:
   */
  ExplicitAuthFlows?: List<Value<string>>;
  /**
   * A list of allowed logout URLs for the IdPs.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Maximum_: `100`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  LogoutURLs?: List<Value<string>>;
  /**
   * The access token time limit. After this limit expires, your user can't use their access token. To specify the time unit for `AccessTokenValidity` as `seconds`, `minutes`, `hours`, or `days`, set a `TokenValidityUnits` value in your API request.
   *
   * For example, when you set `AccessTokenValidity` to `10` and `TokenValidityUnits` to `hours`, your user can authorize access with their access token for 10 hours.
   *
   * The default time unit for `AccessTokenValidity` in an API request is hours.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AccessTokenValidity?: Value<number>;
  /**
   * The refresh token time limit. After this limit expires, your user can't use their refresh token. To specify the time unit for `RefreshTokenValidity` as `seconds`, `minutes`, `hours`, or `days`, set a `TokenValidityUnits` value in your API request.
   *
   * For example, when you set `RefreshTokenValidity` as `10` and `TokenValidityUnits` as `days`, your user can refresh their session and retrieve new access and ID tokens for 10 days.
   *
   * The default time unit for `RefreshTokenValidity` in an API request is days. You can't set `RefreshTokenValidity` to 0. If you do, Amazon Cognito overrides the value with the default value of 30 days.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RefreshTokenValidity?: Value<number>;
  /**
   * The user pool attributes that the app client can write to.
   *
   * If your app client allows users to sign in through an IdP, this array must include all attributes that you have mapped to IdP attributes. Amazon Cognito updates mapped attributes when users sign in to your application through an IdP. If your app client does not have write access to a mapped attribute, Amazon Cognito throws an error when it tries to update the attribute. For more information, see [Specifying IdP Attribute Mappings for Your user pool](https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pools-specifying-attribute-mapping.html).
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  WriteAttributes?: List<Value<string>>;
  /**
   * Use this setting to choose which errors and responses are returned by Cognito APIs during authentication, account confirmation, and password recovery when the user does not exist in the user pool. When set to `ENABLED` and the user does not exist, authentication returns an error indicating either the username or password was incorrect, and account confirmation and password recovery return a response indicating a code was sent to a simulated destination. When set to `LEGACY`, those APIs will return a `UserNotFoundException` exception if the user does not exist in the user pool.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `ENABLED | LEGACY`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PreventUserExistenceErrors?: Value<string>;
  /**
   * Activates or deactivates token revocation. For more information about revoking tokens, see [RevokeToken](https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_RevokeToken.html).
   *
   * If you don't include this parameter, token revocation is automatically activated for the new user pool client.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  EnableTokenRevocation?: Value<boolean>;
}

/**
 * The `AWS::Cognito::UserPoolClient` resource specifies an Amazon Cognito user pool client.
 *
 * **Note**
 *
 * If you don't specify a value for a parameter, Amazon Cognito sets it to a default value.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpoolclient.html}
 */
export interface CognitoUserPoolClientResource {
  Type: 'AWS::Cognito::UserPoolClient';
  Properties: CognitoUserPoolClientProperties;
}
