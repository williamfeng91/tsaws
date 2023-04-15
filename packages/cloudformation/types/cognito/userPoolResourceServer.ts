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
 * A resource server scope.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-userpoolresourceserver-resourceserverscopetype.html}
 **/
export interface CognitoUserPoolResourceServerResourceServerScopeType {
  /**
   * The name of the scope.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `256`
   *
   * _Pattern_: `[x21x23-x2Ex30-x5Bx5D-x7E]+`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ScopeName: Value<string>;
  /**
   * A description of the scope.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `256`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ScopeDescription: Value<string>;
}
export interface CognitoUserPoolResourceServerProperties {
  /**
   * The user pool ID for the user pool.
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
   * A unique resource server identifier for the resource server. This could be an HTTPS endpoint where the resource server is located. For example: `https://my-weather-api.example.com`.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `256`
   *
   * _Pattern_: `[x21x23-x5Bx5D-x7E]+`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Identifier: Value<string>;
  /**
   * A list of scopes. Each scope is a map with keys `ScopeName` and `ScopeDescription`.
   *
   * _Required_: No
   *
   * _Type_: List of [ResourceServerScopeType](aws-properties-cognito-userpoolresourceserver-resourceserverscopetype.md)
   *
   * _Maximum_: `100`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Scopes?: List<CognitoUserPoolResourceServerResourceServerScopeType>;
  /**
   * A friendly name for the resource server.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `256`
   *
   * _Pattern_: `[ws+=,.@-]+`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Name: Value<string>;
}

/**
 * The `AWS::Cognito::UserPoolResourceServer` resource creates a new OAuth2.0 resource server and defines custom scopes in it.
 *
 * **Note**
 *
 * If you don't specify a value for a parameter, Amazon Cognito sets it to a default value.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpoolresourceserver.html}
 */
export interface CognitoUserPoolResourceServerResource {
  Type: 'AWS::Cognito::UserPoolResourceServer';
  Properties: CognitoUserPoolResourceServerProperties;
}
