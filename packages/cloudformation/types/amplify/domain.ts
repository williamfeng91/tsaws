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
 * The SubDomainSetting property type enables you to connect a subdomain (for example, example.exampledomain.com) to a specific branch.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplify-domain-subdomainsetting.html}
 **/
export interface AmplifyDomainSubDomainSetting {
  /**
   * The prefix setting for the subdomain.
   *
   * _Length Constraints:_ Maximum length of 255.
   *
   * _Pattern:_ (?s).*
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Prefix: Value<string>;
  /**
   * The branch name setting for the subdomain.
   *
   * _Length Constraints:_ Minimum length of 1. Maximum length of 255.
   *
   * _Pattern:_ (?s).+
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  BranchName: Value<string>;
}
export interface AmplifyDomainProperties {
  /**
   * The setting for the subdomain.
   *
   * _Required_: Yes
   *
   * _Type_: List of [SubDomainSetting](aws-properties-amplify-domain-subdomainsetting.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SubDomainSettings: List<AmplifyDomainSubDomainSetting>;
  /**
   * The unique ID for an Amplify app.
   *
   * _Length Constraints:_ Minimum length of 1. Maximum length of 20.
   *
   * _Pattern:_ d[a-z0-9]+
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  AppId: Value<string>;
  /**
   * The required AWS Identity and Access Management (IAM) service role for the Amazon Resource Name (ARN) for automatically creating subdomains.
   *
   * _Length Constraints:_ Maximum length of 1000.
   *
   * _Pattern:_ ^$|^arn:aws:iam::d{12}:role.+
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AutoSubDomainIAMRole?: Value<string>;
  /**
   * The domain name for the domain association.
   *
   * _Length Constraints:_ Maximum length of 255.
   *
   * _Pattern:_ ^(((?!-)[A-Za-z0-9-]{0,62}[A-Za-z0-9]).)+((?!-)[A-Za-z0-9-]{1,62}[A-Za-z0-9])(.)?$
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  DomainName: Value<string>;
  /**
   * Enables the automated creation of subdomains for branches.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  EnableAutoSubDomain?: Value<boolean>;
  /**
   * Sets the branch patterns for automatic subdomain creation.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AutoSubDomainCreationPatterns?: List<Value<string>>;
}

/**
 * The AWS::Amplify::Domain resource allows you to connect a custom domain to your app.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amplify-domain.html}
 */
export interface AmplifyDomainResource {
  Type: 'AWS::Amplify::Domain';
  Properties: AmplifyDomainProperties;
}
