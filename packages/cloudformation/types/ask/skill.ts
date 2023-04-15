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
 * The `Overrides` property type provides overrides to the skill package to apply when creating or updating the skill. Values provided here do not modify the contents of the original skill package. Currently, only overriding values inside of the skill manifest component of the package is supported.
 *
 * `Overrides` is a property of the `Alexa::ASK::Skill SkillPackage` property type.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ask-skill-overrides.html}
 **/
export interface ASKSkillOverrides {
  /**
   * Overrides to apply to the skill manifest inside of the skill package. The skill manifest contains metadata about the skill. For more information, see [Skill Manifest Schemas](https://developer.amazon.com/docs/smapi/skill-manifest.html).
   *
   * _Required_: No
   *
   * _Type_: Json
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Manifest?: { [key: string]: any };
}

/**
 * The `SkillPackage` property type contains configuration details for the skill package that contains the components of the Alexa skill. Skill packages are retrieved from an Amazon S3 bucket and key and used to create and update the skill. More details about the skill package format are located in the [Skill Package API Reference](https://developer.amazon.com/docs/smapi/skill-package-api-reference.html#skill-package-format).
 *
 * `SkillPackage` is a property of the `Alexa::ASK::Skill` resource.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ask-skill-skillpackage.html}
 **/
export interface ASKSkillSkillPackage {
  /**
   * ARN of the IAM role that grants the Alexa service (`alexa-appkit.amazon.com`) permission to access the bucket and retrieve the skill package. This property is optional. If you do not provide it, the bucket must be publicly accessible or configured with a policy that allows this access. Otherwise, AWS CloudFormation cannot create the skill.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  S3BucketRole?: Value<string>;
  /**
   * If you have S3 versioning enabled, the version ID of the skill package.zip file.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  S3ObjectVersion?: Value<string>;
  /**
   * The name of the Amazon S3 bucket where the .zip file that contains the skill package is stored.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  S3Bucket: Value<string>;
  /**
   * The location and name of the skill package .zip file.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  S3Key: Value<string>;
  /**
   * Overrides to the skill package to apply when creating or updating the skill. Values provided here do not modify the contents of the original skill package. Currently, only overriding values inside of the skill manifest component of the package is supported.
   *
   * _Required_: No
   *
   * _Type_: [Overrides](aws-properties-ask-skill-overrides.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Overrides?: ASKSkillOverrides;
}

/**
 * The `AuthenticationConfiguration` property type specifies the Login with Amazon (LWA) configuration used to authenticate with the Alexa service. Only Login with Amazon security profiles created through the [Build Skills with the Alexa Skills Kit developer documentation](https://developer.amazon.com/docs/ask-overviews/build-skills-with-the-alexa-skills-kit.html) are supported for authentication. A client ID, client secret, and refresh token are required. You can generate a client ID and client secret by creating a new [security profile](https://developer.amazon.com/lwa/sp/create-security-profile.html) on the Amazon Developer Portal or you can retrieve them from an existing profile. You can then retrieve the refresh token using the Alexa Skills Kit CLI. For instructions, see [util-command](https://developer.amazon.com/docs/smapi/ask-cli-command-reference.html#util-command) in the [ASK CLI Command Reference](https://developer.amazon.com/docs/smapi/ask-cli-command-reference.html).
 *
 * `AuthenticationConfiguration` is a property of the `Alexa::ASK::Skill` resource.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ask-skill-authenticationconfiguration.html}
 **/
export interface ASKSkillAuthenticationConfiguration {
  /**
   * Refresh token from Login with Amazon (LWA). This token is secret.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RefreshToken: Value<string>;
  /**
   * Client secret from Login with Amazon (LWA).
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ClientSecret: Value<string>;
  /**
   * Client ID from Login with Amazon (LWA).
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ClientId: Value<string>;
}
export interface ASKSkillProperties {
  /**
   * Login with Amazon (LWA) configuration used to authenticate with the Alexa service. Only Login with Amazon clients created through the [Amazon Developer Console](https://developer.amazon.com/lwa/sp/overview.html) are supported. The client ID, client secret, and refresh token are required.
   *
   * _Required_: Yes
   *
   * _Type_: [AuthenticationConfiguration](aws-properties-ask-skill-authenticationconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AuthenticationConfiguration: ASKSkillAuthenticationConfiguration;
  /**
   * The vendor ID associated with the Amazon developer account that will host the skill. Details for retrieving the vendor ID are in [How to get your vendor ID](https://github.com/alexa/alexa-smarthome/wiki/How-to-get-your-vendor-ID). The provided LWA credentials must be linked to the developer account associated with this vendor ID.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  VendorId: Value<string>;
  /**
   * Configuration for the skill package that contains the components of the Alexa skill. Skill packages are retrieved from an Amazon S3 bucket and key and used to create and update the skill. For more information about the skill package format, see the [Skill Package API Reference](https://developer.amazon.com/docs/smapi/skill-package-api-reference.html#skill-package-format).
   *
   * _Required_: Yes
   *
   * _Type_: [SkillPackage](aws-properties-ask-skill-skillpackage.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SkillPackage: ASKSkillSkillPackage;
}

/**
 * The `Alexa::ASK::Skill` resource creates an Alexa skill that enables customers to access new abilities. For more information about developing a skill, see the [Build Skills with the Alexa Skills Kit developer documentation](https://developer.amazon.com/docs/ask-overviews/build-skills-with-the-alexa-skills-kit.html).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ask-skill.html}
 */
export interface ASKSkillResource {
  Type: 'AWS::ASK::Skill';
  Properties: ASKSkillProperties;
}
