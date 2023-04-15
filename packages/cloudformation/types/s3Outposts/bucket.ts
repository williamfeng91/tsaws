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
 * Specifies the days since the initiation of an incomplete multipart upload that Amazon S3 on Outposts waits before permanently removing all parts of the upload. For more information, see [Aborting Incomplete Multipart Uploads Using a Bucket Lifecycle Policy](https://docs.aws.amazon.com/AmazonS3/latest/userguide/mpuoverview.html#mpu-abort-incomplete-mpu-lifecycle-config).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3outposts-bucket-abortincompletemultipartupload.html}
 **/
export interface S3OutpostsBucketAbortIncompleteMultipartUpload {
  /**
   * Specifies the number of days after initiation that Amazon S3 on Outposts aborts an incomplete multipart upload.
   *
   * _Required_: Yes
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DaysAfterInitiation: Value<number>;
}

/**
 * A container for an Amazon S3 on Outposts bucket lifecycle rule.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3outposts-bucket-rule.html}
 **/
export interface S3OutpostsBucketRule {
  /**
   * If `Enabled`, the rule is currently being applied. If `Disabled`, the rule is not currently being applied.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Status: Value<string>;
  /**
   * Specifies the expiration for the lifecycle of the object by specifying an expiry date.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ExpirationDate?: Value<string>;
  /**
   * The container for the filter of the lifecycle rule.
   *
   * _Required_: No
   *
   * _Type_: [Filter](aws-properties-s3outposts-bucket-filter.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Filter?: S3OutpostsBucketFilter;
  /**
   * Specifies the expiration for the lifecycle of the object in the form of days that the object has been in the S3 on Outposts bucket.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ExpirationInDays?: Value<number>;
  /**
   * The unique identifier for the lifecycle rule. The value can't be longer than 255 characters.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Id?: Value<string>;
  /**
   * The container for the abort incomplete multipart upload rule.
   *
   * _Required_: No
   *
   * _Type_: [AbortIncompleteMultipartUpload](aws-properties-s3outposts-bucket-abortincompletemultipartupload.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AbortIncompleteMultipartUpload?: S3OutpostsBucketAbortIncompleteMultipartUpload;
}

/**
 * The container for the lifecycle configuration for the objects stored in an S3 on Outposts bucket.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3outposts-bucket-lifecycleconfiguration.html}
 **/
export interface S3OutpostsBucketLifecycleConfiguration {
  /**
   * The container for the lifecycle configuration rules for the objects stored in the S3 on Outposts bucket.
   *
   * _Required_: Yes
   *
   * _Type_: List of [Rule](aws-properties-s3outposts-bucket-rule.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Rules: List<S3OutpostsBucketRule>;
}

/**
 * The `FilterAndOperator` property type specifies Property description not available. for an [AWS::S3Outposts::Bucket](aws-resource-s3outposts-bucket.md).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3outposts-bucket-filterandoperator.html}
 **/
export interface S3OutpostsBucketFilterAndOperator {
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Prefix?: Value<string>;
  /**
   * Property description not available.
   *
   * _Required_: Yes
   *
   * _Type_: List of [FilterTag](aws-properties-s3outposts-bucket-filtertag.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Tags: List<S3OutpostsBucketFilterTag>;
}

/**
 * The `FilterTag` property type specifies Property description not available. for an [AWS::S3Outposts::Bucket](aws-resource-s3outposts-bucket.md).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3outposts-bucket-filtertag.html}
 **/
export interface S3OutpostsBucketFilterTag {
  /**
   * Property description not available.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Value: Value<string>;
  /**
   * Property description not available.
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
 * The `Filter` property type specifies Property description not available. for an [AWS::S3Outposts::Bucket](aws-resource-s3outposts-bucket.md).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3outposts-bucket-filter.html}
 **/
export interface S3OutpostsBucketFilter {
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: [FilterAndOperator](aws-properties-s3outposts-bucket-filterandoperator.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AndOperator?: S3OutpostsBucketFilterAndOperator;
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Prefix?: Value<string>;
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: [FilterTag](aws-properties-s3outposts-bucket-filtertag.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Tag?: S3OutpostsBucketFilterTag;
}
export interface S3OutpostsBucketProperties {
  /**
   * The ID of the Outpost of the specified bucket.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  OutpostId: Value<string>;
  /**
   * A name for the S3 on Outposts bucket. If you don't specify a name, AWS CloudFormation generates a unique ID and uses that ID for the bucket name. The bucket name must contain only lowercase letters, numbers, periods (.), and dashes (-) and must follow [ Amazon S3 bucket restrictions and limitations](https://docs.aws.amazon.com/AmazonS3/latest/userguide/BucketRestrictions.html). For more information, see [Bucket naming rules](https://docs.aws.amazon.com/AmazonS3/latest/userguide/BucketRestrictions.html#bucketnamingrules).
   *
   * If you specify a name, you can't perform updates that require replacement of this resource. You can perform updates that require no or some interruption. If you need to replace the resource, specify a new name.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  BucketName: Value<string>;
  /**
   * Creates a new lifecycle configuration for the S3 on Outposts bucket or replaces an existing lifecycle configuration. Outposts buckets only support lifecycle configurations that delete/expire objects after a certain period of time and abort incomplete multipart uploads.
   *
   * _Required_: No
   *
   * _Type_: [LifecycleConfiguration](aws-properties-s3outposts-bucket-lifecycleconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  LifecycleConfiguration?: S3OutpostsBucketLifecycleConfiguration;
  /**
   * Sets the tags for an S3 on Outposts bucket. For more information, see [Using Amazon S3 on Outposts](https://docs.aws.amazon.com/AmazonS3/latest/userguide/S3onOutposts.html).
   *
   * Use tags to organize your AWS bill to reflect your own cost structure. To do this, sign up to get your AWS account bill with tag key values included. Then, to see the cost of combined resources, organize your billing information according to resources with the same tag key values. For example, you can tag several resources with a specific application name, and then organize your billing information to see the total cost of that application across several services. For more information, see [Cost allocation and tags](https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html).
   *
   * Within a bucket, if you add a tag that has the same key as an existing tag, the new value overwrites the old value. For more information, see [ Using cost allocation and bucket tags](https://docs.aws.amazon.com/AmazonS3/latest/userguide/CostAllocTagging.html).
   *
   * To use this resource, you must have permissions to perform the `s3-outposts:PutBucketTagging`. The S3 on Outposts bucket owner has this permission by default and can grant this permission to others. For more information about permissions, see [Permissions Related to Bucket Subresource Operations](https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-with-s3-actions.html#using-with-s3-actions-related-to-bucket-subresources) and [Managing access permissions to your Amazon S3 resources](https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-access-control.html).
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
 * The AWS::S3Outposts::Bucket resource specifies a new Amazon S3 on Outposts bucket. To create an S3 on Outposts bucket, you must have S3 on Outposts capacity provisioned on your Outpost. For more information, see [ Using Amazon S3 on Outposts](https://docs.aws.amazon.com/AmazonS3/latest/userguide/S3onOutposts.html).
 *
 * S3 on Outposts buckets support the following:
 *
 * For a complete list of restrictions and Amazon S3 feature limitations on S3 on Outposts, see [ Amazon S3 on Outposts Restrictions and Limitations](https://docs.aws.amazon.com/AmazonS3/latest/userguide/S3OnOutpostsRestrictionsLimitations.html).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3outposts-bucket.html}
 */
export interface S3OutpostsBucketResource {
  Type: 'AWS::S3Outposts::Bucket';
  Properties: S3OutpostsBucketProperties;
}
