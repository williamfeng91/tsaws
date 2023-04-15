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
 * The encryption configuration for the repository. This determines how the contents of your repository are encrypted at rest.
 *
 * By default, when no encryption configuration is set or the `AES256` encryption type is used, Amazon ECR uses server-side encryption with Amazon S3-managed encryption keys which encrypts your data at rest using an AES-256 encryption algorithm. This does not require any action on your part.
 *
 * For more control over the encryption of the contents of your repository, you can use server-side encryption with AWS Key Management Service key stored in AWS Key Management Service (AWS KMS) to encrypt your images. For more information, see [Amazon ECR encryption at rest](https://docs.aws.amazon.com/AmazonECR/latest/userguide/encryption-at-rest.html) in the _Amazon Elastic Container Registry User Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecr-repository-encryptionconfiguration.html}
 **/
export interface ECRRepositoryEncryptionConfiguration {
  /**
   * The encryption type to use.
   *
   * If you use the `KMS` encryption type, the contents of the repository will be encrypted using server-side encryption with AWS Key Management Service key stored in AWS KMS. When you use AWS KMS to encrypt your data, you can either use the default AWS managed AWS KMS key for Amazon ECR, or specify your own AWS KMS key, which you already created. For more information, see [Protecting data using server-side encryption with an AWS KMS key stored in AWS Key Management Service (SSE-KMS)](https://docs.aws.amazon.com/AmazonS3/latest/dev/UsingKMSEncryption.html) in the _Amazon Simple Storage Service Console Developer Guide_.
   *
   * If you use the `AES256` encryption type, Amazon ECR uses server-side encryption with Amazon S3-managed encryption keys which encrypts the images in the repository using an AES-256 encryption algorithm. For more information, see [Protecting data using server-side encryption with Amazon S3-managed encryption keys (SSE-S3)](https://docs.aws.amazon.com/AmazonS3/latest/dev/UsingServerSideEncryption.html) in the _Amazon Simple Storage Service Console Developer Guide_.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Allowed values_: `AES256 | KMS`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  EncryptionType: Value<string>;
  /**
   * If you use the `KMS` encryption type, specify the AWS KMS key to use for encryption. The alias, key ID, or full ARN of the AWS KMS key can be specified. The key must exist in the same Region as the repository. If no key is specified, the default AWS managed AWS KMS key for Amazon ECR will be used.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `2048`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  KmsKey?: Value<string>;
}

/**
 * The `LifecyclePolicy` property type specifies a lifecycle policy. For information about lifecycle policy syntax, see [Lifecycle policy template](https://docs.aws.amazon.com/AmazonECR/latest/userguide/LifecyclePolicies.html) in the _Amazon ECR User Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecr-repository-lifecyclepolicy.html}
 **/
export interface ECRRepositoryLifecyclePolicy {
  /**
   * The JSON repository policy text to apply to the repository.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `100`
   *
   * _Maximum_: `30720`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  LifecyclePolicyText?: Value<string>;
  /**
   * The AWS account ID associated with the registry that contains the repository. If you do  not specify a registry, the default registry is assumed.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Pattern_: `[0-9]{12}`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RegistryId?: Value<string>;
}

/**
 * The image scanning configuration for a repository.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecr-repository-imagescanningconfiguration.html}
 **/
export interface ECRRepositoryImageScanningConfiguration {
  /**
   * The setting that determines whether images are scanned after being pushed to a repository. If set to `true`, images will be scanned after being pushed. If this parameter is not specified, it will default to `false` and images will not be scanned unless a scan is manually started.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ScanOnPush?: Value<boolean>;
}
export interface ECRRepositoryProperties {
  /**
   * The image scanning configuration for the repository. This determines whether images are scanned for known vulnerabilities after being pushed to the repository.
   *
   * _Required_: No
   *
   * _Type_: [ImageScanningConfiguration](aws-properties-ecr-repository-imagescanningconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ImageScanningConfiguration?: ECRRepositoryImageScanningConfiguration;
  /**
   * The encryption configuration for the repository. This determines how the contents of your repository are encrypted at rest.
   *
   * _Required_: No
   *
   * _Type_: [EncryptionConfiguration](aws-properties-ecr-repository-encryptionconfiguration.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  EncryptionConfiguration?: ECRRepositoryEncryptionConfiguration;
  /**
   * The JSON repository policy text to apply to the repository. For more information, see [Amazon ECR repository policies](https://docs.aws.amazon.com/AmazonECR/latest/userguide/repository-policy-examples.html) in the _Amazon Elastic Container Registry User Guide_.
   *
   * _Required_: No
   *
   * _Type_: Json
   *
   * _Minimum_: `0`
   *
   * _Maximum_: `10240`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RepositoryPolicyText?: { [key: string]: any };
  /**
   * Creates or updates a lifecycle policy. For information about lifecycle policy syntax, see [Lifecycle policy template](https://docs.aws.amazon.com/AmazonECR/latest/userguide/LifecyclePolicies.html).
   *
   * _Required_: No
   *
   * _Type_: [LifecyclePolicy](aws-properties-ecr-repository-lifecyclepolicy.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  LifecyclePolicy?: ECRRepositoryLifecyclePolicy;
  /**
   * The name to use for the repository. The repository name may be specified on its own (such as `nginx-web-app`) or it can be prepended with a namespace to group the repository into a category (such as `project-a/nginx-web-app`). If you don't specify a name, AWS CloudFormation generates a unique physical ID and uses that ID for the repository name. For more information, see [Name type](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-name.html).
   *
   * If you specify a name, you cannot perform updates that require replacement of this resource. You can perform updates that require no or some interruption. If you must replace the resource, specify a new name.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `2`
   *
   * _Maximum_: `256`
   *
   * _Pattern_: `(?:[a-z0-9]+(?:[._-][a-z0-9]+)*\/)*[a-z0-9]+(?:[._-][a-z0-9]+)*`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  RepositoryName?: Value<string>;
  /**
   * An array of key-value pairs to apply to this resource.
   *
   * _Required_: No
   *
   * _Type_: List of [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Tags?: List<ResourceTag>;
  /**
   * The tag mutability setting for the repository. If this parameter is omitted, the default setting of `MUTABLE` will be used which will allow image tags to be overwritten. If `IMMUTABLE` is specified, all image tags within the repository will be immutable which will prevent them from being overwritten.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `IMMUTABLE | MUTABLE`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ImageTagMutability?: Value<string>;
}

/**
 * The `AWS::ECR::Repository` resource specifies an Amazon Elastic Container Registry (Amazon ECR) repository, where users can push and pull Docker images, Open Container Initiative (OCI) images, and OCI compatible artifacts. For more information, see [Amazon ECR private repositories](https://docs.aws.amazon.com/AmazonECR/latest/userguide/Repositories.html) in the _Amazon ECR User Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecr-repository.html}
 */
export interface ECRRepositoryResource {
  Type: 'AWS::ECR::Repository';
  Properties: ECRRepositoryProperties;
}
