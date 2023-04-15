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
 * The configuration for a custom domain that hosts the sign-up and sign-in webpages for your application.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cognito-userpooldomain-customdomainconfigtype.html}
 **/
export interface CognitoUserPoolDomainCustomDomainConfigType {
  /**
   * The Amazon Resource Name (ARN) of an AWS Certificate Manager SSL certificate. You use this certificate for the subdomain of your custom domain.
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
  CertificateArn?: Value<string>;
}
export interface CognitoUserPoolDomainProperties {
  /**
   * The user pool ID for the user pool where you want to associate a user pool domain.
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
   * The configuration for a custom domain that hosts the sign-up and sign-in pages for your application. Use this object to specify an SSL certificate that is managed by ACM.
   *
   * _Required_: No
   *
   * _Type_: [CustomDomainConfigType](aws-properties-cognito-userpooldomain-customdomainconfigtype.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CustomDomainConfig?: CognitoUserPoolDomainCustomDomainConfigType;
  /**
   * The domain name for the domain that hosts the sign-up and sign-in pages for your application. For example: `auth.example.com`. If you're using a prefix domain, this field denotes the first part of the domain before `.auth.[region].amazoncognito.com`.
   *
   * This string can include only lowercase letters, numbers, and hyphens. Don't use a hyphen for the first or last character. Use periods to separate subdomain names.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `63`
   *
   * _Pattern_: `^[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?$`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Domain: Value<string>;
}

/**
 * The AWS::Cognito::UserPoolDomain resource creates a new domain for a user pool.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpooldomain.html}
 */
export interface CognitoUserPoolDomainResource {
  Type: 'AWS::Cognito::UserPoolDomain';
  Properties: CognitoUserPoolDomainProperties;
}
