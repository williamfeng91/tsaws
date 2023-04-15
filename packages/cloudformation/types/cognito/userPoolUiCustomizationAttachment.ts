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

export interface CognitoUserPoolUICustomizationAttachmentProperties {
  /**
   * The CSS values in the UI customization.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CSS?: Value<string>;
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
   * The client ID for the client app. You can specify the UI customization settings for a single client (with a specific clientId) or for all clients (by setting the clientId to `ALL`).
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `128`
   *
   * _Pattern_: `[w+]+`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ClientId: Value<string>;
}

/**
 * The `AWS::Cognito::UserPoolUICustomizationAttachment` resource sets the UI customization information for a user pool's built-in app UI.
 *
 * You can specify app UI customization settings for a single client (with a specific `clientId`) or for all clients (by setting the `clientId` to `ALL`). If you specify `ALL`, the default configuration is used for every client that has had no UI customization set previously. If you specify UI customization settings for a particular client, it no longer falls back to the `ALL` configuration.
 *
 * **Note**
 *
 * Before you create this resource, your user pool must have a domain associated with it. You can create an `AWS::Cognito::UserPoolDomain` resource first in this user pool.
 *
 * Setting a logo image isn't supported from AWS CloudFormation. Use the Amazon Cognito [SetUICustomization](https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_SetUICustomization.html#API_SetUICustomization_RequestSyntax) API operation to set the image.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpooluicustomizationattachment.html}
 */
export interface CognitoUserPoolUICustomizationAttachmentResource {
  Type: 'AWS::Cognito::UserPoolUICustomizationAttachment';
  Properties: CognitoUserPoolUICustomizationAttachmentProperties;
}
