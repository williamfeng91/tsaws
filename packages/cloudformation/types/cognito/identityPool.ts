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
 * `PushSync` is a property of the [AWS::Cognito::IdentityPool](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-identitypool.html) resource that defines the configuration options to be applied to an Amazon Cognito identity pool.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-identitypool-pushsync.html}
 **/
export interface CognitoIdentityPoolPushSync {
  /**
   * The ARNs of the Amazon SNS platform applications that could be used by clients.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ApplicationArns?: List<Value<string>>;
  /**
   * An IAM role configured to allow Amazon Cognito to call Amazon SNS on behalf of the developer.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RoleArn?: Value<string>;
}

/**
 * `CognitoStreams` is a property of the [AWS::Cognito::IdentityPool](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-identitypool.html) resource that defines configuration options for Amazon Cognito streams.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-identitypool-cognitostreams.html}
 **/
export interface CognitoIdentityPoolCognitoStreams {
  /**
   * Status of the Amazon Cognito streams. Valid values are: `ENABLED` or `DISABLED`.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  StreamingStatus?: Value<string>;
  /**
   * The name of the Amazon Cognito stream to receive updates. This stream must be in the developer's account and in the same Region as the identity pool.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  StreamName?: Value<string>;
  /**
   * The Amazon Resource Name (ARN) of the role Amazon Cognito can assume to publish to the stream. This role must grant access to Amazon Cognito (cognito-sync) to invoke `PutRecord` on your Amazon Cognito stream.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RoleArn?: Value<string>;
}

/**
 * `CognitoIdentityProvider` is a property of the [AWS::Cognito::IdentityPool](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-identitypool.html) resource that represents an Amazon Cognito user pool and its client ID.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-identitypool-cognitoidentityprovider.html}
 **/
export interface CognitoIdentityPoolCognitoIdentityProvider {
  /**
   * TRUE if server-side token validation is enabled for the identity provider’s token.
   *
   * After you set the `ServerSideTokenCheck` to TRUE for an identity pool, that identity pool checks with the integrated user pools to make sure the user has not been globally signed out or deleted before the identity pool provides an OIDC token or AWS credentials for the user.
   *
   * If the user is signed out or deleted, the identity pool returns a 400 Not Authorized error.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ServerSideTokenCheck?: Value<boolean>;
  /**
   * The provider name for an Amazon Cognito user pool. For example: `cognito-idp.us-east-2.amazonaws.com/us-east-2_123456789`.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ProviderName?: Value<string>;
  /**
   * The client ID for the Amazon Cognito user pool.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ClientId?: Value<string>;
}
export interface CognitoIdentityPoolProperties {
  /**
   * The configuration options to be applied to the identity pool.
   *
   * _Required_: No
   *
   * _Type_: [PushSync](aws-properties-cognito-identitypool-pushsync.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PushSync?: CognitoIdentityPoolPushSync;
  /**
   * The Amazon Cognito user pools and their client IDs.
   *
   * _Required_: No
   *
   * _Type_: List of [CognitoIdentityProvider](aws-properties-cognito-identitypool-cognitoidentityprovider.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CognitoIdentityProviders?: List<CognitoIdentityPoolCognitoIdentityProvider>;
  /**
   * The events to configure.
   *
   * _Required_: No
   *
   * _Type_: Json
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CognitoEvents?: { [key: string]: any };
  /**
   * The "domain" Amazon Cognito uses when referencing your users. This name acts as a placeholder that allows your backend and the Amazon Cognito service to communicate about the developer provider. For the `DeveloperProviderName`, you can use letters and periods (.), underscores (_), and dashes (-).
   *
   * _Minimum length_: 1
   *
   * _Maximum length_: 100
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DeveloperProviderName?: Value<string>;
  /**
   * Configuration options for configuring Amazon Cognito streams.
   *
   * _Required_: No
   *
   * _Type_: [CognitoStreams](aws-properties-cognito-identitypool-cognitostreams.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CognitoStreams?: CognitoIdentityPoolCognitoStreams;
  /**
   * The name of your Amazon Cognito identity pool.
   *
   * _Minimum length_: 1
   *
   * _Maximum length_: 128
   *
   * _Pattern_: `[ws+=,.@-]+`
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  IdentityPoolName?: Value<string>;
  /**
   * Specifies whether the identity pool supports unauthenticated logins.
   *
   * _Required_: Yes
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AllowUnauthenticatedIdentities: Value<boolean>;
  /**
   * Key-value pairs that map provider names to provider app IDs.
   *
   * _Required_: No
   *
   * _Type_: Json
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SupportedLoginProviders?: { [key: string]: any };
  /**
   * The Amazon Resource Names (ARNs) of the Security Assertion Markup Language (SAML) providers.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SamlProviderARNs?: List<Value<string>>;
  /**
   * The Amazon Resource Names (ARNs) of the OpenID connect providers.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  OpenIdConnectProviderARNs?: List<Value<string>>;
  /**
   * Enables the Basic (Classic) authentication flow.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AllowClassicFlow?: Value<boolean>;
}

/**
 * The `AWS::Cognito::IdentityPool` resource creates an Amazon Cognito identity pool.
 *
 * To avoid deleting the resource accidentally from AWS CloudFormation, use [DeletionPolicy Attribute](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-deletionpolicy.html) and the [UpdateReplacePolicy Attribute](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-updatereplacepolicy.html) to retain the resource on deletion or replacement.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-identitypool.html}
 */
export interface CognitoIdentityPoolResource {
  Type: 'AWS::Cognito::IdentityPool';
  Properties: CognitoIdentityPoolProperties;
}
