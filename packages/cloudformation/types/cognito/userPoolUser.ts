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
 * Specifies whether the attribute is standard or custom.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-userpooluser-attributetype.html}
 **/
export interface CognitoUserPoolUserAttributeType {
  /**
   * The value of the attribute.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Maximum_: `2048`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Value?: Value<string>;
  /**
   * The name of the attribute.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `32`
   *
   * _Pattern_: `[p{L}p{M}p{S}p{N}p{P}]+`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Name?: Value<string>;
}
export interface CognitoUserPoolUserProperties {
  /**
   * The user's validation data. This is an array of name-value pairs that contain user attributes and attribute values that you can use for custom validation, such as restricting the types of user accounts that can be registered. For example, you might choose to allow or disallow user sign-up based on the user's domain.
   *
   * To configure custom validation, you must create a Pre Sign-up AWS Lambda trigger for the user pool as described in the Amazon Cognito Developer Guide. The Lambda trigger receives the validation data and uses it in the validation process.
   *
   * The user's validation data isn't persisted.
   *
   * _Required_: No
   *
   * _Type_: List of [AttributeType](aws-properties-cognito-userpooluser-attributetype.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ValidationData?: List<CognitoUserPoolUserAttributeType>;
  /**
   * The user pool ID for the user pool where the user will be created.
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
   * The username for the user. Must be unique within the user pool. Must be a UTF-8 string between 1 and 128 characters. After the user is created, the username can't be changed.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `128`
   *
   * _Pattern_: `[p{L}p{M}p{S}p{N}p{P}]+`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Username?: Value<string>;
  /**
   * Set to `RESEND` to resend the invitation message to a user that already exists and reset the expiration limit on the user's account. Set to `SUPPRESS` to suppress sending the message. You can specify only one value.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `RESEND | SUPPRESS`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  MessageAction?: Value<string>;
  /**
   * A map of custom key-value pairs that you can provide as input for the custom workflow that is invoked by the _pre sign-up_ trigger.
   *
   * You create custom workflows by assigning AWS Lambda functions to user pool triggers. When you create a `UserPoolUser` resource and include the `ClientMetadata` property, Amazon Cognito invokes the function that is assigned to the _pre sign-up_ trigger. When Amazon Cognito invokes this function, it passes a JSON payload, which the function receives as input. This payload contains a `clientMetadata` attribute, which provides the data that you assigned to the ClientMetadata property. In your function code in AWS Lambda, you can process the `clientMetadata` value to enhance your workflow for your specific needs.
   *
   * For more information, see [Customizing User Pool Workflows with Lambda Triggers](https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools-working-with-aws-lambda-triggers.html) in the _Amazon Cognito Developer Guide_.
   *
   * Take the following limitations into consideration when you use the ClientMetadata parameter:
   */
  ClientMetadata?: { [key: string]: any };
  /**
   * Specify `"EMAIL"` if email will be used to send the welcome message. Specify `"SMS"` if the phone number will be used. The default value is `"SMS"`. You can specify more than one value.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  DesiredDeliveryMediums?: List<Value<string>>;
  /**
   * This parameter is used only if the `phone_number_verified` or `email_verified` attribute is set to `True`. Otherwise, it is ignored.
   *
   * If this parameter is set to `True` and the phone number or email address specified in the UserAttributes parameter already exists as an alias with a different user, the API call will migrate the alias from the previous user to the newly created user. The previous user will no longer be able to log in using that alias.
   *
   * If this parameter is set to `False`, the API throws an `AliasExistsException` error if the alias already exists. The default value is `False`.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ForceAliasCreation?: Value<boolean>;
  /**
   * The user attributes and attribute values to be set for the user to be created. These are name-value pairs You can create a user without specifying any attributes other than `Username`. However, any attributes that you specify as required (in [https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_CreateUserPool.html](https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_CreateUserPool.html) or in the **Attributes** tab of the console) must be supplied either by you (in your call to `AdminCreateUser`) or by the user (when they sign up in response to your welcome message).
   *
   * For custom attributes, you must prepend the `custom:` prefix to the attribute name.
   *
   * To send a message inviting the user to sign up, you must specify the user's email address or phone number. This can be done in your call to AdminCreateUser or in the **Users** tab of the Amazon Cognito console for managing your user pools.
   *
   * In your call to `AdminCreateUser`, you can set the `email_verified` attribute to `True`, and you can set the `phone_number_verified` attribute to `True`. (You can also do this by calling [https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AdminUpdateUserAttributes.html](https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AdminUpdateUserAttributes.html).)
   */
  UserAttributes?: List<CognitoUserPoolUserAttributeType>;
}

/**
 * The `AWS::Cognito::UserPoolUser` resource creates an Amazon Cognito user pool user.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpooluser.html}
 */
export interface CognitoUserPoolUserResource {
  Type: 'AWS::Cognito::UserPoolUser';
  Properties: CognitoUserPoolUserProperties;
}
