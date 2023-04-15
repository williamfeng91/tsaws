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
 * The password policy type.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-userpool-passwordpolicy.html}
 **/
export interface CognitoUserPoolPasswordPolicy {
  /**
   * In the password policy that you have set, refers to whether you have required users to use at least one number in their password.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RequireNumbers?: Value<boolean>;
  /**
   * The minimum length of the password in the policy that you have set. This value can't be less than 6.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Minimum_: `6`
   *
   * _Maximum_: `99`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MinimumLength?: Value<number>;
  /**
   * The number of days a temporary password is valid in the password policy. If the user doesn't sign in during this time, an administrator must reset their password.
   *
   * When you set `TemporaryPasswordValidityDays` for a user pool, you can no longer set a value for the legacy `UnusedAccountValidityDays` parameter in that user pool.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Minimum_: `0`
   *
   * _Maximum_: `365`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TemporaryPasswordValidityDays?: Value<number>;
  /**
   * In the password policy that you have set, refers to whether you have required users to use at least one uppercase letter in their password.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RequireUppercase?: Value<boolean>;
  /**
   * In the password policy that you have set, refers to whether you have required users to use at least one lowercase letter in their password.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RequireLowercase?: Value<boolean>;
  /**
   * In the password policy that you have set, refers to whether you have required users to use at least one symbol in their password.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RequireSymbols?: Value<boolean>;
}

/**
 * A map containing a priority as a key, and recovery method name as a value.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-userpool-recoveryoption.html}
 **/
export interface CognitoUserPoolRecoveryOption {
  /**
   * A positive integer specifying priority of a method with 1 being the highest priority.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `2`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Priority?: Value<number>;
  /**
   * Specifies the recovery method for a user.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `admin_only | verified_email | verified_phone_number`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Name?: Value<string>;
}

/**
 * The template for verification messages.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-userpool-verificationmessagetemplate.html}
 **/
export interface CognitoUserPoolVerificationMessageTemplate {
  /**
   * The email message template for sending a confirmation link to the user. You can set an `EmailMessageByLink` template only if the value of [ EmailSendingAccount](https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_EmailConfigurationType.html#CognitoUserPools-Type-EmailConfigurationType-EmailSendingAccount) is `DEVELOPER`. When your [EmailSendingAccount](https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_EmailConfigurationType.html#CognitoUserPools-Type-EmailConfigurationType-EmailSendingAccount) is `DEVELOPER`, your user pool sends email messages with your own Amazon SES configuration.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `6`
   *
   * _Maximum_: `20000`
   *
   * _Pattern_: `[p{L}p{M}p{S}p{N}p{P}s*]*{##[p{L}p{M}p{S}p{N}p{P}s*]*##}[p{L}p{M}p{S}p{N}p{P}s*]*`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  EmailMessageByLink?: Value<string>;
  /**
   * The template for email messages that Amazon Cognito sends to your users. You can set an `EmailMessage` template only if the value of [ EmailSendingAccount](https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_EmailConfigurationType.html#CognitoUserPools-Type-EmailConfigurationType-EmailSendingAccount) is `DEVELOPER`. When your [EmailSendingAccount](https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_EmailConfigurationType.html#CognitoUserPools-Type-EmailConfigurationType-EmailSendingAccount) is `DEVELOPER`, your user pool sends email messages with your own Amazon SES configuration.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `6`
   *
   * _Maximum_: `20000`
   *
   * _Pattern_: `[p{L}p{M}p{S}p{N}p{P}s*]*{####}[p{L}p{M}p{S}p{N}p{P}s*]*`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  EmailMessage?: Value<string>;
  /**
   * The template for SMS messages that Amazon Cognito sends to your users.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `6`
   *
   * _Maximum_: `140`
   *
   * _Pattern_: `.*{####}.*`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SmsMessage?: Value<string>;
  /**
   * The subject line for the email message template. You can set an `EmailSubject` template only if the value of [ EmailSendingAccount](https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_EmailConfigurationType.html#CognitoUserPools-Type-EmailConfigurationType-EmailSendingAccount) is `DEVELOPER`. When your [EmailSendingAccount](https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_EmailConfigurationType.html#CognitoUserPools-Type-EmailConfigurationType-EmailSendingAccount) is `DEVELOPER`, your user pool sends email messages with your own Amazon SES configuration.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `140`
   *
   * _Pattern_: `[p{L}p{M}p{S}p{N}p{P}s]+`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  EmailSubject?: Value<string>;
  /**
   * The default email option.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `CONFIRM_WITH_CODE | CONFIRM_WITH_LINK`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DefaultEmailOption?: Value<string>;
  /**
   * The subject line for the email message template for sending a confirmation link to the user. You can set an `EmailSubjectByLink` template only if the value of [ EmailSendingAccount](https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_EmailConfigurationType.html#CognitoUserPools-Type-EmailConfigurationType-EmailSendingAccount) is `DEVELOPER`. When your [EmailSendingAccount](https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_EmailConfigurationType.html#CognitoUserPools-Type-EmailConfigurationType-EmailSendingAccount) is `DEVELOPER`, your user pool sends email messages with your own Amazon SES configuration.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `140`
   *
   * _Pattern_: `[p{L}p{M}p{S}p{N}p{P}s]+`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  EmailSubjectByLink?: Value<string>;
}

/**
 * Specifies the configuration for AWS Lambda triggers.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-userpool-lambdaconfig.html}
 **/
export interface CognitoUserPoolLambdaConfig {
  /**
   * Creates an authentication challenge.
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
  CreateAuthChallenge?: Value<string>;
  /**
   * A pre-registration AWS Lambda trigger.
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
  PreSignUp?: Value<string>;
  /**
   * The Amazon Resource Name of a AWS Key Management Service (AWS KMS) key. Amazon Cognito uses the key to encrypt codes and temporary passwords sent to `CustomEmailSender` and `CustomSMSSender`.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  KMSKeyID?: Value<string>;
  /**
   * The user migration Lambda config type.
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
  UserMigration?: Value<string>;
  /**
   * A post-authentication AWS Lambda trigger.
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
  PostAuthentication?: Value<string>;
  /**
   * Verifies the authentication challenge response.
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
  VerifyAuthChallengeResponse?: Value<string>;
  /**
   * A pre-authentication AWS Lambda trigger.
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
  PreAuthentication?: Value<string>;
  /**
   * Defines the authentication challenge.
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
  DefineAuthChallenge?: Value<string>;
  /**
   * A Lambda trigger that is invoked before token generation.
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
  PreTokenGeneration?: Value<string>;
  /**
   * A custom SMS sender AWS Lambda trigger.
   *
   * _Required_: No
   *
   * _Type_: [CustomSMSSender](aws-properties-cognito-userpool-customsmssender.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CustomSMSSender?: CognitoUserPoolCustomSMSSender;
  /**
   * A post-confirmation AWS Lambda trigger.
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
  PostConfirmation?: Value<string>;
  /**
   * A custom Message AWS Lambda trigger.
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
  CustomMessage?: Value<string>;
  /**
   * A custom email sender AWS Lambda trigger.
   *
   * _Required_: No
   *
   * _Type_: [CustomEmailSender](aws-properties-cognito-userpool-customemailsender.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CustomEmailSender?: CognitoUserPoolCustomEmailSender;
}

/**
 * Contains information about the schema attribute.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-userpool-schemaattribute.html}
 **/
export interface CognitoUserPoolSchemaAttribute {
  /**
   * We recommend that you use [WriteAttributes](https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_UserPoolClientType.html#CognitoUserPools-Type-UserPoolClientType-WriteAttributes) in the user pool client to control how attributes can be mutated for new use cases instead of using `DeveloperOnlyAttribute`.
   *
   * Specifies whether the attribute type is developer only. This attribute can only be modified by an administrator. Users will not be able to modify this attribute using their access token.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DeveloperOnlyAttribute?: Value<boolean>;
  /**
   * Specifies whether the value of the attribute can be changed.
   *
   * For any user pool attribute that is mapped to an IdP attribute, you must set this parameter to `true`. Amazon Cognito updates mapped attributes when users sign in to your application through an IdP. If an attribute is immutable, Amazon Cognito throws an error when it attempts to update the attribute. For more information, see [Specifying Identity Provider Attribute Mappings for Your User Pool](https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pools-specifying-attribute-mapping.html).
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Mutable?: Value<boolean>;
  /**
   * The attribute data type.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `Boolean | DateTime | Number | String`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AttributeDataType?: Value<string>;
  /**
   * Specifies the constraints for an attribute of the string type.
   *
   * _Required_: No
   *
   * _Type_: [StringAttributeConstraints](aws-properties-cognito-userpool-stringattributeconstraints.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  StringAttributeConstraints?: CognitoUserPoolStringAttributeConstraints;
  /**
   * Specifies whether a user pool attribute is required. If the attribute is required and the user doesn't provide a value, registration or sign-in will fail.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Required?: Value<boolean>;
  /**
   * Specifies the constraints for an attribute of the number type.
   *
   * _Required_: No
   *
   * _Type_: [NumberAttributeConstraints](aws-properties-cognito-userpool-numberattributeconstraints.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  NumberAttributeConstraints?: CognitoUserPoolNumberAttributeConstraints;
  /**
   * A schema attribute of the name type.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `20`
   *
   * _Pattern_: `[p{L}p{M}p{S}p{N}p{P}]+`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Name?: Value<string>;
}

/**
 * The minimum and maximum values of an attribute that is of the number data type.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-userpool-numberattributeconstraints.html}
 **/
export interface CognitoUserPoolNumberAttributeConstraints {
  /**
   * The minimum value of an attribute that is of the number data type.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MinValue?: Value<string>;
  /**
   * The maximum value of an attribute that is of the number data type.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MaxValue?: Value<string>;
}

/**
 * The user pool add-ons type.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-userpool-userpooladdons.html}
 **/
export interface CognitoUserPoolUserPoolAddOns {
  /**
   * The advanced security mode.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `AUDIT | ENFORCED | OFF`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AdvancedSecurityMode?: Value<string>;
}

/**
 * The policy associated with a user pool.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-userpool-policies.html}
 **/
export interface CognitoUserPoolPolicies {
  /**
   * The password policy.
   *
   * _Required_: No
   *
   * _Type_: [PasswordPolicy](aws-properties-cognito-userpool-passwordpolicy.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PasswordPolicy?: CognitoUserPoolPasswordPolicy;
}

/**
 * A custom email sender AWS Lambda trigger.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-userpool-customemailsender.html}
 **/
export interface CognitoUserPoolCustomEmailSender {
  /**
   * The Amazon Resource Name (ARN) of the AWS Lambda function that Amazon Cognito triggers to send email notifications to users.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  LambdaArn?: Value<string>;
  /**
   * The Lambda version represents the signature of the "request" attribute in the "event" information that Amazon Cognito passes to your custom email sender AWS Lambda function. The only supported value is `V1_0`.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  LambdaVersion?: Value<string>;
}

/**
 * The `UsernameConfiguration` property type specifies case sensitivity on the username input for the selected sign-in option.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-userpool-usernameconfiguration.html}
 **/
export interface CognitoUserPoolUsernameConfiguration {
  /**
   * Specifies whether user name case sensitivity will be applied for all users in the user pool through Amazon Cognito APIs. For most use cases, set case sensitivity to `False` (case insensitive) as a best practice. When usernames and email addresses are case insensitive, users can sign in as the same user when they enter a different capitalization of their user name.
   *
   * Valid values include:
   *
   * True
   *
   * Enables case sensitivity for all username input. When this option is set to `True`, users must sign in using the exact capitalization of their given username, such as “UserName”. This is the default value.
   *
   * False
   *
   * Enables case insensitivity for all username input. For example, when this option is set to `False`, users can sign in using `username`, `USERNAME`, or `UserName`. This option also enables both `preferred_username` and `email` alias to be case insensitive, in addition to the `username` attribute.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CaseSensitive?: Value<boolean>;
}

/**
 * The configuration for `AdminCreateUser` requests.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-userpool-admincreateuserconfig.html}
 **/
export interface CognitoUserPoolAdminCreateUserConfig {
  /**
   * The message template to be used for the welcome message to new users.
   *
   * See also [Customizing User Invitation Messages](https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pool-settings-message-customizations.html#cognito-user-pool-settings-user-invitation-message-customization).
   *
   * _Required_: No
   *
   * _Type_: [InviteMessageTemplate](aws-properties-cognito-userpool-invitemessagetemplate.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  InviteMessageTemplate?: CognitoUserPoolInviteMessageTemplate;
  /**
   * The user account expiration limit, in days, after which a new account that hasn't signed in is no longer usable. To reset the account after that time limit, you must call `AdminCreateUser` again, specifying `"RESEND"` for the `MessageAction` parameter. The default value for this parameter is 7.
   *
   * If you set a value for `TemporaryPasswordValidityDays` in `PasswordPolicy`, that value will be used, and `UnusedAccountValidityDays` will be no longer be an available parameter for that user pool.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Minimum_: `0`
   *
   * _Maximum_: `365`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  UnusedAccountValidityDays?: Value<number>;
  /**
   * Set to `True` if only the administrator is allowed to create user profiles. Set to `False` if users can sign themselves up via an app.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AllowAdminCreateUserOnly?: Value<boolean>;
}

/**
 * The SMS configuration type that includes the settings the Cognito User Pool needs to call for the Amazon SNS service to send an SMS message from your AWS account. The Cognito User Pool makes the request to the Amazon SNS Service by using an IAM role that you provide for your AWS account.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-userpool-smsconfiguration.html}
 **/
export interface CognitoUserPoolSmsConfiguration {
  /**
   * The AWS Region to use with Amazon SNS integration. You can choose the same Region as your user pool, or a supported **Legacy Amazon SNS alternate Region**.
   *
   * Amazon Cognito resources in the Asia Pacific (Seoul) AWS Region must use your Amazon SNS configuration in the Asia Pacific (Tokyo) Region. For more information, see [SMS message settings for Amazon Cognito user pools](https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-sms-settings.html).
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `5`
   *
   * _Maximum_: `32`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SnsRegion?: Value<string>;
  /**
   * The external ID is a value. We recommend you use `ExternalId`to add security to your IAM role, which is used to call Amazon SNS to send SMS messages for your user pool. If you provide an `ExternalId`, the Cognito User Pool uses it when attempting to assume your IAM role. You can also set your roles trust policy to require the `ExternalID`. If you use the Cognito Management Console to create a role for SMS MFA, Cognito creates a role with the required permissions and a trust policy that uses `ExternalId`.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ExternalId?: Value<string>;
  /**
   * The Amazon Resource Name (ARN) of the Amazon SNS caller. This is the ARN of the IAM role in your AWS account that Amazon Cognito will use to send SMS messages. SMS messages are subject to a [spending limit](https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-settings-email-phone-verification.html).
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
  SnsCallerArn?: Value<string>;
}

/**
 * The `StringAttributeConstraints` property type defines the string attribute constraints of an Amazon Cognito user pool. `StringAttributeConstraints` is a subproperty of the [SchemaAttribute](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-userpool-schemaattribute.html) property type.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-userpool-stringattributeconstraints.html}
 **/
export interface CognitoUserPoolStringAttributeConstraints {
  /**
   * The minimum length.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MinLength?: Value<string>;
  /**
   * The maximum length.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MaxLength?: Value<string>;
}

/**
 * The message template to be used for the welcome message to new users.
 *
 * See also [Customizing User Invitation Messages](https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pool-settings-message-customizations.html#cognito-user-pool-settings-user-invitation-message-customization).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-userpool-invitemessagetemplate.html}
 **/
export interface CognitoUserPoolInviteMessageTemplate {
  /**
   * The message template for email messages. EmailMessage is allowed only if [EmailSendingAccount](https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_EmailConfigurationType.html#CognitoUserPools-Type-EmailConfigurationType-EmailSendingAccount) is DEVELOPER.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `6`
   *
   * _Maximum_: `20000`
   *
   * _Pattern_: `[p{L}p{M}p{S}p{N}p{P}s*]*{####}[p{L}p{M}p{S}p{N}p{P}s*]*`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  EmailMessage?: Value<string>;
  /**
   * The message template for SMS messages.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `6`
   *
   * _Maximum_: `140`
   *
   * _Pattern_: `.*{####}.*`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SMSMessage?: Value<string>;
  /**
   * The subject line for email messages. EmailSubject is allowed only if [EmailSendingAccount](https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_EmailConfigurationType.html#CognitoUserPools-Type-EmailConfigurationType-EmailSendingAccount) is DEVELOPER.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `140`
   *
   * _Pattern_: `[p{L}p{M}p{S}p{N}p{P}s]+`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  EmailSubject?: Value<string>;
}

/**
 * The settings for updates to user attributes. These settings include the property `AttributesRequireVerificationBeforeUpdate`, a user-pool setting that tells Amazon Cognito how to handle changes to the value of your users' email address and phone number attributes. For more information, see [ Verifying updates to email addresses and phone numbers](https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-settings-email-phone-verification.html#user-pool-settings-verifications-verify-attribute-updates).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-userpool-userattributeupdatesettings.html}
 **/
export interface CognitoUserPoolUserAttributeUpdateSettings {
  /**
   * Requires that your user verifies their email address, phone number, or both before Amazon Cognito updates the value of that attribute. When you update a user attribute that has this option activated, Amazon Cognito sends a verification message to the new phone number or email address. Amazon Cognito doesn’t change the value of the attribute until your user responds to the verification message and confirms the new value.
   *
   * You can verify an updated email address or phone number with a [VerifyUserAttribute](https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_VerifyUserAttribute.html) API request. You can also call the [AdminUpdateUserAttributes](https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AdminUpdateUserAttributes.html) API and set `email_verified` or `phone_number_verified` to true.
   *
   * When `AttributesRequireVerificationBeforeUpdate` is false, your user pool doesn't require that your users verify attribute changes before Amazon Cognito updates them. In a user pool where `AttributesRequireVerificationBeforeUpdate` is false, API operations that change attribute values can immediately update a user’s `email` or `phone_number` attribute.
   *
   * _Required_: Yes
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AttributesRequireVerificationBeforeUpdate: List<Value<string>>;
}

/**
 * The email configuration of your user pool. The email configuration type sets your preferred sending method, AWS Region, and sender for messages from your user pool.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-userpool-emailconfiguration.html}
 **/
export interface CognitoUserPoolEmailConfiguration {
  /**
   * The destination to which the receiver of the email should reply.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Pattern_: `[p{L}p{M}p{S}p{N}p{P}]+@[p{L}p{M}p{S}p{N}p{P}]+`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ReplyToEmailAddress?: Value<string>;
  /**
   * The set of configuration rules that can be applied to emails sent using Amazon SES. A configuration set is applied to an email by including a reference to the configuration set in the headers of the email. Once applied, all of the rules in that configuration set are applied to the email. Configuration sets can be used to apply the following types of rules to emails:
   */
  ConfigurationSet?: Value<string>;
  /**
   * Specifies whether Amazon Cognito uses its built-in functionality to send your users email messages, or uses your Amazon Simple Email Service email configuration. Specify one of the following values:
   *
   * COGNITO_DEFAULT
   *
   * When Amazon Cognito emails your users, it uses its built-in email functionality. When you use the default option, Amazon Cognito allows only a limited number of emails each day for your user pool. For typical production environments, the default email limit is less than the required delivery volume. To achieve a higher delivery volume, specify DEVELOPER to use your Amazon SES email configuration.
   *
   * To look up the email delivery limit for the default option, see [Limits](https://docs.aws.amazon.com/cognito/latest/developerguide/limits.html) in the _Amazon Cognito Developer Guide_.
   *
   * The default FROM address is `no-reply@verificationemail.com`. To customize the FROM address, provide the Amazon Resource Name (ARN) of an Amazon SES verified email address for the `SourceArn` parameter.
   *
   * DEVELOPER
   *
   * When Amazon Cognito emails your users, it uses your Amazon SES configuration. Amazon Cognito calls Amazon SES on your behalf to send email from your verified email address. When you use this option, the email delivery limits are the same limits that apply to your Amazon SES verified email address in your AWS account.
   *
   * If you use this option, provide the ARN of an Amazon SES verified email address for the `SourceArn` parameter.
   *
   * Before Amazon Cognito can email your users, it requires additional permissions to call Amazon SES on your behalf. When you update your user pool with this option, Amazon Cognito creates a _service-linked role_, which is a type of role in your AWS account. This role contains the permissions that allow you to access Amazon SES and send email messages from your email address. For more information about the service-linked role that Amazon Cognito creates, see [Using Service-Linked Roles for Amazon Cognito](https://docs.aws.amazon.com/cognito/latest/developerguide/using-service-linked-roles.html) in the _Amazon Cognito Developer Guide_.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `COGNITO_DEFAULT | DEVELOPER`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  EmailSendingAccount?: Value<string>;
  /**
   * The ARN of a verified email address in Amazon SES. Amazon Cognito uses this email address in one of the following ways, depending on the value that you specify for the `EmailSendingAccount` parameter:
   */
  SourceArn?: Value<string>;
  /**
   * Identifies either the sender's email address or the sender's name with their email address. For example, `testuser@example.com` or `Test User <testuser@example.com>`. This address appears before the body of the email.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  From?: Value<string>;
}

/**
 * A custom SMS sender AWS Lambda trigger.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-userpool-customsmssender.html}
 **/
export interface CognitoUserPoolCustomSMSSender {
  /**
   * The Amazon Resource Name (ARN) of the AWS Lambda function that Amazon Cognito triggers to send SMS notifications to users.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  LambdaArn?: Value<string>;
  /**
   * The Lambda version represents the signature of the "request" attribute in the "event" information Amazon Cognito passes to your custom SMS sender Lambda function. The only supported value is `V1_0`.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  LambdaVersion?: Value<string>;
}

/**
 * Use this setting to define which verified available method a user can use to recover their password when they call `ForgotPassword`. It allows you to define a preferred method when a user has more than one method available. With this setting, SMS does not qualify for a valid password recovery mechanism if the user also has SMS MFA enabled. In the absence of this setting, Cognito uses the legacy behavior to determine the recovery method where SMS is preferred over email.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-userpool-accountrecoverysetting.html}
 **/
export interface CognitoUserPoolAccountRecoverySetting {
  /**
   * The list of `RecoveryOptionTypes`.
   *
   * _Required_: No
   *
   * _Type_: List of [RecoveryOption](aws-properties-cognito-userpool-recoveryoption.md)
   *
   * _Maximum_: `2`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RecoveryMechanisms?: List<CognitoUserPoolRecoveryOption>;
}

/**
 * The device-remembering configuration for a user pool. A [ DescribeUserPool](https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_DescribeUserPool.html) request returns a null value for this object when the user pool isn't configured to remember devices. When device remembering is active, you can remember a user's device with a [ConfirmDevice](https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_ConfirmDevice.html) API request. Additionally. when the property `DeviceOnlyRememberedOnUserPrompt` is `true`, you must follow `ConfirmDevice` with an [UpdateDeviceStatus](https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_UpdateDeviceStatus.html) API request that sets the user's device to `remembered` or `not_remembered`.
 *
 * To sign in with a remembered device, include `DEVICE_KEY` in the authentication parameters in your user's [ InitiateAuth](https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_InitiateAuth.html) request. If your app doesn't include a `DEVICE_KEY` parameter, the [response](https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_InitiateAuth.html#API_InitiateAuth_ResponseSyntax) from Amazon Cognito includes newly-generated `DEVICE_KEY` and `DEVICE_GROUP_KEY` values under `NewDeviceMetadata`. Store these values to use in future device-authentication requests.
 *
 * **Note**
 *
 * When you provide a value for any property of `DeviceConfiguration`, you activate the device remembering for the user pool.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-userpool-deviceconfiguration.html}
 **/
export interface CognitoUserPoolDeviceConfiguration {
  /**
   * When true, Amazon Cognito doesn't automatically remember a user's device when your app sends a [ ConfirmDevice](https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_ConfirmDevice.html) API request. In your app, create a prompt for your user to choose whether they want to remember their device. Return the user's choice in an [ UpdateDeviceStatus](https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_UpdateDeviceStatus.html) API request.
   *
   * When `DeviceOnlyRememberedOnUserPrompt` is `false`, Amazon Cognito immediately remembers devices that you register in a `ConfirmDevice` API request.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DeviceOnlyRememberedOnUserPrompt?: Value<boolean>;
  /**
   * When true, a remembered device can sign in with device authentication instead of SMS and time-based one-time password (TOTP) factors for multi-factor authentication (MFA).
   *
   * Whether or not `ChallengeRequiredOnNewDevice` is true, users who sign in with devices that have not been confirmed or remembered must still provide a second factor in a user pool that requires MFA.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ChallengeRequiredOnNewDevice?: Value<boolean>;
}
export interface CognitoUserPoolProperties {
  /**
   * The tag keys and values to assign to the user pool. A tag is a label that you can use to categorize and manage user pools in different ways, such as by purpose, owner, environment, or other criteria.
   *
   * _Required_: No
   *
   * _Type_: Json
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  UserPoolTags?: { [key: string]: any };
  /**
   * The policy associated with a user pool.
   *
   * _Required_: No
   *
   * _Type_: [Policies](aws-properties-cognito-userpool-policies.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Policies?: CognitoUserPoolPolicies;
  /**
   * The template for the verification message that the user sees when the app requests permission to access the user's information.
   *
   * _Required_: No
   *
   * _Type_: [VerificationMessageTemplate](aws-properties-cognito-userpool-verificationmessagetemplate.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  VerificationMessageTemplate?: CognitoUserPoolVerificationMessageTemplate;
  /**
   * The multi-factor authentication (MFA) configuration. Valid values include:
   */
  MfaConfiguration?: Value<string>;
  /**
   * The schema attributes for the new user pool. These attributes can be standard or custom attributes.
   *
   * During a user pool update, you can add new schema attributes but you cannot modify or delete an existing schema attribute.
   *
   * _Required_: No
   *
   * _Type_: List of [SchemaAttribute](aws-properties-cognito-userpool-schemaattribute.md)
   *
   * _Maximum_: `50`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Schema?: List<CognitoUserPoolSchemaAttribute>;
  /**
   * The configuration for creating a new user profile.
   *
   * _Required_: No
   *
   * _Type_: [AdminCreateUserConfig](aws-properties-cognito-userpool-admincreateuserconfig.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AdminCreateUserConfig?: CognitoUserPoolAdminCreateUserConfig;
  /**
   * When active, `DeletionProtection` prevents accidental deletion of your user pool. Before you can delete a user pool that you have protected against deletion, you must deactivate this feature.
   *
   * When you try to delete a protected user pool in a `DeleteUserPool` API request, Amazon Cognito returns an `InvalidParameterException` error. To delete a protected user pool, send a new `DeleteUserPool` request after you deactivate deletion protection in an `UpdateUserPool` API request.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `ACTIVE | INACTIVE`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DeletionProtection?: Value<string>;
  /**
   * A string representing the SMS authentication message.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `6`
   *
   * _Maximum_: `140`
   *
   * _Pattern_: `.*{####}.*`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SmsAuthenticationMessage?: Value<string>;
  /**
   * You can choose to set case sensitivity on the username input for the selected sign-in option. For example, when this is set to `False`, users will be able to sign in using either "username" or "Username". This configuration is immutable once it has been set.
   *
   * _Required_: No
   *
   * _Type_: [UsernameConfiguration](aws-properties-cognito-userpool-usernameconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  UsernameConfiguration?: CognitoUserPoolUsernameConfiguration;
  /**
   * A string used to name the user pool.
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
  UserPoolName?: Value<string>;
  /**
   * This parameter is no longer used. See [VerificationMessageTemplateType](https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_VerificationMessageTemplateType.html).
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `6`
   *
   * _Maximum_: `140`
   *
   * _Pattern_: `.*{####}.*`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SmsVerificationMessage?: Value<string>;
  /**
   * Enables advanced security risk detection. Set the key `AdvancedSecurityMode` to the value "AUDIT".
   *
   * _Required_: No
   *
   * _Type_: [UserPoolAddOns](aws-properties-cognito-userpool-userpooladdons.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  UserPoolAddOns?: CognitoUserPoolUserPoolAddOns;
  /**
   * The settings for updates to user attributes. These settings include the property `AttributesRequireVerificationBeforeUpdate`, a user-pool setting that tells Amazon Cognito how to handle changes to the value of your users' email address and phone number attributes. For more information, see [ Verifying updates to email addresses and phone numbers](https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-settings-email-phone-verification.html#user-pool-settings-verifications-verify-attribute-updates).
   *
   * _Required_: No
   *
   * _Type_: [UserAttributeUpdateSettings](aws-properties-cognito-userpool-userattributeupdatesettings.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  UserAttributeUpdateSettings?: CognitoUserPoolUserAttributeUpdateSettings;
  /**
   * The email configuration of your user pool. The email configuration type sets your preferred sending method, AWS Region, and sender for messages from your user pool.
   *
   * _Required_: No
   *
   * _Type_: [EmailConfiguration](aws-properties-cognito-userpool-emailconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  EmailConfiguration?: CognitoUserPoolEmailConfiguration;
  /**
   * The SMS configuration with the settings that your Amazon Cognito user pool must use to send an SMS message from your AWS account through Amazon Simple Notification Service. To send SMS messages with Amazon SNS in the AWS Region that you want, the Amazon Cognito user pool uses an AWS Identity and Access Management (IAM) role in your AWS account.
   *
   * _Required_: No
   *
   * _Type_: [SmsConfiguration](aws-properties-cognito-userpool-smsconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SmsConfiguration?: CognitoUserPoolSmsConfiguration;
  /**
   * Attributes supported as an alias for this user pool. Possible values: **phone_number**, **email**, or **preferred_username**.
   *
   * This user pool property cannot be updated.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AliasAttributes?: List<Value<string>>;
  /**
   * Enables MFA on a specified user pool. To disable all MFAs after it has been enabled, set MfaConfiguration to “OFF” and remove EnabledMfas. MFAs can only be all disabled if MfaConfiguration is OFF. Once SMS_MFA is enabled, SMS_MFA can only be disabled by setting MfaConfiguration to “OFF”. Can be one of the following values:
   */
  EnabledMfas?: List<Value<string>>;
  /**
   * This parameter is no longer used. See [VerificationMessageTemplateType](https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_VerificationMessageTemplateType.html).
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `140`
   *
   * _Pattern_: `[p{L}p{M}p{S}p{N}p{P}s]+`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  EmailVerificationSubject?: Value<string>;
  /**
   * The Lambda trigger configuration information for the new user pool.
   *
   * In a push model, event sources (such as Amazon S3 and custom applications) need permission to invoke a function. So you must make an extra call to add permission for these event sources to invoke your Lambda function.
   *
   * For more information on using the Lambda API to add permission, see[ AddPermission ](https://docs.aws.amazon.com/lambda/latest/dg/API_AddPermission.html).
   *
   * For adding permission using the AWS CLI, see[ add-permission ](https://docs.aws.amazon.com/cli/latest/reference/lambda/add-permission.html).
   *
   * _Required_: No
   *
   * _Type_: [LambdaConfig](aws-properties-cognito-userpool-lambdaconfig.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  LambdaConfig?: CognitoUserPoolLambdaConfig;
  /**
   * Determines whether email addresses or phone numbers can be specified as user names when a user signs up. Possible values: `phone_number` or `email`.
   *
   * This user pool property cannot be updated.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  UsernameAttributes?: List<Value<string>>;
  /**
   * The attributes to be auto-verified. Possible values: **email**, **phone_number**.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AutoVerifiedAttributes?: List<Value<string>>;
  /**
   * The device-remembering configuration for a user pool. A null value indicates that you have deactivated device remembering in your user pool.
   *
   * When you provide a value for any `DeviceConfiguration` field, you activate the Amazon Cognito device-remembering feature.
   *
   * _Required_: No
   *
   * _Type_: [DeviceConfiguration](aws-properties-cognito-userpool-deviceconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DeviceConfiguration?: CognitoUserPoolDeviceConfiguration;
  /**
   * This parameter is no longer used. See [VerificationMessageTemplateType](https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_VerificationMessageTemplateType.html).
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `6`
   *
   * _Maximum_: `20000`
   *
   * _Pattern_: `[p{L}p{M}p{S}p{N}p{P}s*]*{####}[p{L}p{M}p{S}p{N}p{P}s*]*`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  EmailVerificationMessage?: Value<string>;
  /**
   * Use this setting to define which verified available method a user can use to recover their password when they call `ForgotPassword`. It allows you to define a preferred method when a user has more than one method available. With this setting, SMS does not qualify for a valid password recovery mechanism if the user also has SMS MFA enabled. In the absence of this setting, Cognito uses the legacy behavior to determine the recovery method where SMS is preferred over email.
   *
   * _Required_: No
   *
   * _Type_: [AccountRecoverySetting](aws-properties-cognito-userpool-accountrecoverysetting.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AccountRecoverySetting?: CognitoUserPoolAccountRecoverySetting;
}

/**
 * The `AWS::Cognito::UserPool` resource creates an Amazon Cognito user pool. For more information on working with Amazon Cognito user pools, see [Amazon Cognito User Pools](https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools.html) and [CreateUserPool](https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_CreateUserPool.html).
 *
 * **Note**
 *
 * If you don't specify a value for a parameter, Amazon Cognito sets it to a default value.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpool.html}
 */
export interface CognitoUserPoolResource {
  Type: 'AWS::Cognito::UserPool';
  Properties: CognitoUserPoolProperties;
}
