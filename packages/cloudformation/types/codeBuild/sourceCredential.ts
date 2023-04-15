/**
 * Supported regions:
 * - ap-northeast-1 (version 119.1.0)
 * - ap-northeast-2 (version 119.1.0)
 * - ap-northeast-3 (version 119.1.0)
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

export interface CodeBuildSourceCredentialProperties {
  /**
   * The type of source provider. The valid options are GITHUB, GITHUB_ENTERPRISE, or BITBUCKET.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Allowed values_: `BITBUCKET | GITHUB | GITHUB_ENTERPRISE`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ServerType: Value<string>;
  /**
   * The Bitbucket username when the `authType` is BASIC_AUTH. This parameter is not valid for other types of source providers or connections.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Username?: Value<string>;
  /**
   * For GitHub or GitHub Enterprise, this is the personal access token. For Bitbucket, this is the app password.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Token: Value<string>;
  /**
   * The type of authentication used by the credentials. Valid options are OAUTH, BASIC_AUTH, or PERSONAL_ACCESS_TOKEN.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Allowed values_: `BASIC_AUTH | OAUTH | PERSONAL_ACCESS_TOKEN`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AuthType: Value<string>;
}

/**
 * Information about the credentials for a GitHub, GitHub Enterprise, or Bitbucket repository. We strongly recommend that you use AWS Secrets Manager to store your credentials. If you use Secrets Manager, you must have secrets in your secrets manager. For more information, see [ Using Dynamic References to Specify Template Values](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/dynamic-references.html#dynamic-references-secretsmanager).
 *
 * **Important**
 *
 * For security purposes, do not use plain text in your AWS CloudFormation template to store your credentials.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codebuild-sourcecredential.html}
 */
export interface CodeBuildSourceCredentialResource {
  Type: 'AWS::CodeBuild::SourceCredential';
  Properties: CodeBuildSourceCredentialProperties;
}
