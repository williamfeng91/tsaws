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
 * The `Code` property type specifies information about code to be committed.
 *
 * `Code` is a property of the `AWS::CodeStar::GitHubRepository` resource.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codestar-githubrepository-code.html}
 **/
export interface CodeStarGitHubRepositoryCode {
  /**
   * Information about the Amazon S3 bucket that contains a ZIP file of code to be committed to the repository.
   *
   * _Required_: Yes
   *
   * _Type_: [S3](aws-properties-codestar-githubrepository-s3.md)
   *
   * _Update requires_: Updates are not supported.
   */
  S3: CodeStarGitHubRepositoryS3;
}

/**
 * The `S3` property type specifies information about the Amazon S3 bucket that contains the code to be committed to the new repository.
 *
 * `S3` is a property of the `AWS::CodeStar::GitHubRepository` resource.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codestar-githubrepository-s3.html}
 **/
export interface CodeStarGitHubRepositoryS3 {
  /**
   * The object version of the ZIP file, if versioning is enabled for the Amazon S3 bucket.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: Updates are not supported.
   */
  ObjectVersion?: Value<string>;
  /**
   * The name of the Amazon S3 bucket that contains the ZIP file with the content to be committed to the new repository.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: Updates are not supported.
   */
  Bucket: Value<string>;
  /**
   * The S3 object key or file name for the ZIP file.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: Updates are not supported.
   */
  Key: Value<string>;
}
export interface CodeStarGitHubRepositoryProperties {
  /**
   * Indicates whether to enable issues for the GitHub repository. You can use GitHub issues to track information and bugs for your repository.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: Updates are not supported.
   */
  EnableIssues?: Value<boolean>;
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ConnectionArn?: Value<string>;
  /**
   * The name of the repository you want to create in GitHub with AWS CloudFormation stack creation.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: Updates are not supported.
   */
  RepositoryName: Value<string>;
  /**
   * The GitHub user's personal access token for the GitHub repository.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: Updates are not supported.
   */
  RepositoryAccessToken?: Value<string>;
  /**
   * The GitHub user name for the owner of the GitHub repository to be created. If this repository should be owned by a GitHub organization, provide its name.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: Updates are not supported.
   */
  RepositoryOwner: Value<string>;
  /**
   * Indicates whether the GitHub repository is a private repository. If so, you choose who can see and commit to this repository.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: Updates are not supported.
   */
  IsPrivate?: Value<boolean>;
  /**
   * Information about code to be committed to a repository after it is created in an AWS CloudFormation stack.
   *
   * _Required_: No
   *
   * _Type_: [Code](aws-properties-codestar-githubrepository-code.md)
   *
   * _Update requires_: Updates are not supported.
   */
  Code?: CodeStarGitHubRepositoryCode;
  /**
   * A comment or description about the new repository. This description is displayed in GitHub after the repository is created.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: Updates are not supported.
   */
  RepositoryDescription?: Value<string>;
}

/**
 * The `AWS::CodeStar::GitHubRepository` resource creates a GitHub repository where users can store source code for use with AWS workflows. You must provide a location for the source code ZIP file in the AWS CloudFormation template, so the code can be uploaded to the created repository. You must have created a personal access token in GitHub to provide in the AWS CloudFormation template. AWS uses this token to connect to GitHub on your behalf. For more information about using a GitHub source repository with AWS CodeStar projects, see [AWS CodeStar Project Files and Resources](https://docs.aws.amazon.com/codestar/latest/userguide/templates.html#templates-whatis).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codestar-githubrepository.html}
 */
export interface CodeStarGitHubRepositoryResource {
  Type: 'AWS::CodeStar::GitHubRepository';
  Properties: CodeStarGitHubRepositoryProperties;
}
