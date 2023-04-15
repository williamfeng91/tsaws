/**
 * Supported regions:
 * - ap-northeast-1 (version 119.1.0)
 * - ap-southeast-1 (version 119.1.0)
 * - ap-southeast-2 (version 119.1.0)
 * - eu-central-1 (version 119.1.0)
 * - eu-west-1 (version 119.1.0)
 * - eu-west-2 (version 119.1.0)
 * - us-east-1 (version 119.1.0)
 * - us-east-2 (version 119.1.0)
 * - us-west-2 (version 119.1.0)
 */
import { List, Value } from '../../shared-types/dataTypes';
import { ResourceTag } from '../../shared-types/resource';

export interface CodeGuruReviewerRepositoryAssociationProperties {
  /**
   * The type of repository that contains the source code to be reviewed. The valid values are:
   */
  Type: Value<string>;
  /**
   * The owner of the repository. For a GitHub Enterprise Server or Bitbucket repository, this is the username for the account that owns the repository.
   *
   * `Owner` must be specified for Bitbucket and GitHub Enterprise Server repositories. It has no effect if it is specified for an AWS CodeCommit repository.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `100`
   *
   * _Pattern_: `^S(.*S)?$`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Owner?: Value<string>;
  /**
   * The name of the bucket. This is required for your S3Bucket repository. The name must start with the prefix `codeguru-reviewer-*`.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  BucketName?: Value<string>;
  /**
   * The Amazon Resource Name (ARN) of an AWS CodeStar Connections connection. Its format is `arn:aws:codestar-connections:region-id:aws-account_id:connection/connection-id`. For more information, see [Connection](https://docs.aws.amazon.com/codestar-connections/latest/APIReference/API_Connection.html) in the _AWS CodeStar Connections API Reference_.
   *
   * `ConnectionArn` must be specified for Bitbucket and GitHub Enterprise Server repositories. It has no effect if it is specified for an AWS CodeCommit repository.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `0`
   *
   * _Maximum_: `256`
   *
   * _Pattern_: `arn:aws(-[w]+)*:.+:.+:[0-9]{12}:.+`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ConnectionArn?: Value<string>;
  /**
   * An array of key-value pairs used to tag an associated repository. A tag is a custom attribute label with two parts:
   */
  Tags?: List<ResourceTag>;
  /**
   * The name of the repository.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `100`
   *
   * _Pattern_: `^S[w.-]*$`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Name: Value<string>;
}

/**
 * This resource configures how Amazon CodeGuru Reviewer retrieves the source code to be reviewed. You can use an AWS CloudFormation template to create an association with the following repository types:
 *
 * **Note**
 *
 * You cannot use a CloudFormation template to create an association with a GitHub repository.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codegurureviewer-repositoryassociation.html}
 */
export interface CodeGuruReviewerRepositoryAssociationResource {
  Type: 'AWS::CodeGuruReviewer::RepositoryAssociation';
  Properties: CodeGuruReviewerRepositoryAssociationProperties;
}
