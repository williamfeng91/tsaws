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

export interface S3OutpostsBucketPolicyProperties {
  /**
   * The name of the Amazon S3 Outposts bucket to which the policy applies.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Bucket: Value<string>;
  /**
   * A policy document containing permissions to add to the specified bucket. In IAM, you must provide policy documents in JSON format. However, in CloudFormation, you can provide the policy in JSON or YAML format because CloudFormation converts YAML to JSON before submitting it to IAM. For more information, see the AWS::IAM::Policy [ PolicyDocument](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-policy.html#cfn-iam-policy-policydocument) resource description in this guide and [ Access Policy Language Overview](https://docs.aws.amazon.com/AmazonS3/latest/userguide/access-policy-language-overview.html).
   *
   * _Required_: Yes
   *
   * _Type_: Json
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PolicyDocument: { [key: string]: any };
}

/**
 * This resource applies a bucket policy to an Amazon S3 on Outposts bucket.
 *
 * If you are using an identity other than the root user of the AWS account that owns the S3 on Outposts bucket, the calling identity must have the `s3-outposts:PutBucketPolicy` permissions on the specified Outposts bucket and belong to the bucket owner's account in order to use this resource.
 *
 * If you don't have `s3-outposts:PutBucketPolicy` permissions, S3 on Outposts returns a `403 Access Denied` error.
 *
 * **Important**
 *
 * The root user of the AWS account that owns an Outposts bucket can _always_ use this resource, even if the policy explicitly denies the root user the ability to perform actions on this resource.
 *
 * For more information, see the AWS::IAM::Policy [ PolicyDocument](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-policy.html#cfn-iam-policy-policydocument) resource description in this guide and [ Access Policy Language Overview](https://docs.aws.amazon.com/AmazonS3/latest/userguide/access-policy-language-overview.html).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3outposts-bucketpolicy.html}
 */
export interface S3OutpostsBucketPolicyResource {
  Type: 'AWS::S3Outposts::BucketPolicy';
  Properties: S3OutpostsBucketPolicyProperties;
}
