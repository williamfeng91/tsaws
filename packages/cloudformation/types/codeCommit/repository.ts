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
import { ResourceTag } from '../../shared-types/resource';

/**
 * Information about code to be committed.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codecommit-repository-code.html}
 **/
export interface CodeCommitRepositoryCode {
  /**
   * Information about the Amazon S3 bucket that contains a ZIP file of code to be committed to the repository. Changes to this property are ignored after initial resource creation.
   *
   * _Required_: Yes
   *
   * _Type_: [S3](aws-properties-codecommit-repository-s3.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  S3: CodeCommitRepositoryS3;
  /**
   * Optional. Specifies a branch name to be used as the default branch when importing code into a repository on initial creation. If this property is not set, the name _main_ will be used for the default branch for the repository. Changes to this property are ignored after initial resource creation. We recommend using this parameter to set the name to _main_ to align with the default behavior of CodeCommit unless another name is needed.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  BranchName?: Value<string>;
}

/**
 * Information about the Amazon S3 bucket that contains the code that will be committed to the new repository. Changes to this property are ignored after initial resource creation.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codecommit-repository-s3.html}
 **/
export interface CodeCommitRepositoryS3 {
  /**
   * The object version of the ZIP file, if versioning is enabled for the Amazon S3 bucket. Changes to this property are ignored after initial resource creation.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ObjectVersion?: Value<string>;
  /**
   * The name of the Amazon S3 bucket that contains the ZIP file with the content that will be committed to the new repository. This can be specified using the name of the bucket in the AWS account. Changes to this property are ignored after initial resource creation.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Bucket: Value<string>;
  /**
   * The key to use for accessing the Amazon S3 bucket. Changes to this property are ignored after initial resource creation. For more information, see [Creating object key names](https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-keys.html) and [Uploading objects](https://docs.aws.amazon.com/AmazonS3/latest/userguide/upload-objects.html) in the Amazon S3 User Guide.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Key: Value<string>;
}

/**
 * Information about a trigger for a repository.
 *
 * **Note**
 *
 * If you want to receive notifications about repository events, consider using notifications instead of triggers. For more information, see [Configuring notifications for repository events](https://docs.aws.amazon.com/codecommit/latest/userguide/how-to-repository-email.html).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codecommit-repository-repositorytrigger.html}
 **/
export interface CodeCommitRepositoryRepositoryTrigger {
  /**
   * The repository events that cause the trigger to run actions in another service, such as sending a notification through Amazon SNS.
   *
   * The valid value "all" cannot be used with any other values.
   *
   * _Required_: Yes
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Events: List<Value<string>>;
  /**
   * The branches to be included in the trigger configuration. If you specify an empty array, the trigger applies to all branches.
   *
   * Although no content is required in the array, you must include the array itself.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Branches?: List<Value<string>>;
  /**
   * Any custom data associated with the trigger to be included in the information sent to the target of the trigger.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CustomData?: Value<string>;
  /**
   * The ARN of the resource that is the target for a trigger (for example, the ARN of a topic in Amazon SNS).
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DestinationArn: Value<string>;
  /**
   * The name of the trigger.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Name: Value<string>;
}
export interface CodeCommitRepositoryProperties {
  /**
   * The name of the new repository to be created.
   *
   * The repository name must be unique across the calling AWS account. Repository names are limited to 100 alphanumeric, dash, and underscore characters, and cannot include certain characters. For more information about the limits on repository names, see [Quotas](https://docs.aws.amazon.com/codecommit/latest/userguide/limits.html) in the _ AWS CodeCommit User Guide_. The suffix .git is prohibited.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `100`
   *
   * _Pattern_: `[w.-]+`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RepositoryName: Value<string>;
  /**
   * The JSON block of configuration information for each trigger.
   *
   * _Required_: No
   *
   * _Type_: List of [RepositoryTrigger](aws-properties-codecommit-repository-repositorytrigger.md)
   *
   * _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
   */
  Triggers?: List<CodeCommitRepositoryRepositoryTrigger>;
  /**
   * Information about code to be committed to a repository after it is created in an AWS CloudFormation stack. Information about code is only used in resource creation. Updates to a stack will not reflect changes made to code properties after initial resource creation.
   *
   * You can only use this property to add code when creating a repository with a AWS CloudFormation template at creation time. This property cannot be used for updating code to an existing repository.
   *
   * _Required_: No
   *
   * _Type_: [Code](aws-properties-codecommit-repository-code.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Code?: CodeCommitRepositoryCode;
  /**
   * A comment or description about the new repository.
   *
   * The description field for a repository accepts all HTML characters and all valid Unicode characters. Applications that do not HTML-encode the description and display it in a webpage can expose users to potentially malicious code. Make sure that you HTML-encode the description field in any application that uses this API to display the repository description on a webpage.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Maximum_: `1000`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RepositoryDescription?: Value<string>;
  /**
   * One or more tag key-value pairs to use when tagging this repository.
   *
   * _Required_: No
   *
   * _Type_: List of [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Tags?: List<ResourceTag>;
}

/**
 * Creates a new, empty repository.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codecommit-repository.html}
 */
export interface CodeCommitRepositoryResource {
  Type: 'AWS::CodeCommit::Repository';
  Properties: CodeCommitRepositoryProperties;
}
