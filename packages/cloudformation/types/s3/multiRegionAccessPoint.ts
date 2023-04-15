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

/**
 * A bucket associated with a specific Region when creating Multi-Region Access Points.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-multiregionaccesspoint-region.html}
 **/
export interface S3MultiRegionAccessPointRegion {
  /**
   * The name of the associated bucket for the Region.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Bucket: Value<string>;
  /**
   * The AWS account ID that owns the Amazon S3 bucket that's associated with this Multi-Region Access Point.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  BucketAccountId?: Value<string>;
}

/**
 * The PublicAccessBlock configuration that you want to apply to this Amazon S3 Multi-Region Access Point. You can enable the configuration options in any combination. For more information about when Amazon S3 considers an object public, see [The Meaning of "Public"](https://docs.aws.amazon.com/AmazonS3/latest/dev/access-control-block-public-access.html#access-control-block-public-access-policy-status) in the _Amazon S3 User Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-multiregionaccesspoint-publicaccessblockconfiguration.html}
 **/
export interface S3MultiRegionAccessPointPublicAccessBlockConfiguration {
  /**
   * Specifies whether Amazon S3 should restrict public bucket policies for this bucket. Setting this element to `TRUE` restricts access to this bucket to only AWS service principals and authorized users within this account if the bucket has a public policy.
   *
   * Enabling this setting doesn't affect previously stored bucket policies, except that public and cross-account access within any public bucket policy, including non-public delegation to specific accounts, is blocked.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  RestrictPublicBuckets?: Value<boolean>;
  /**
   * Specifies whether Amazon S3 should block public bucket policies for this bucket. Setting this element to `TRUE` causes Amazon S3 to reject calls to PUT Bucket policy if the specified bucket policy allows public access.
   *
   * Enabling this setting doesn't affect existing bucket policies.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  BlockPublicPolicy?: Value<boolean>;
  /**
   * Specifies whether Amazon S3 should block public access control lists (ACLs) for this bucket and objects in this bucket. Setting this element to `TRUE` causes the following behavior:
   */
  BlockPublicAcls?: Value<boolean>;
  /**
   * Specifies whether Amazon S3 should ignore public ACLs for this bucket and objects in this bucket. Setting this element to `TRUE` causes Amazon S3 to ignore all public ACLs on this bucket and objects in this bucket.
   *
   * Enabling this setting doesn't affect the persistence of any existing ACLs and doesn't prevent new public ACLs from being set.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  IgnorePublicAcls?: Value<boolean>;
}
export interface S3MultiRegionAccessPointProperties {
  /**
   * The PublicAccessBlock configuration that you want to apply to this Multi-Region Access Point. You can enable the configuration options in any combination. For more information about when Amazon S3 considers an object public, see [The Meaning of "Public"](https://docs.aws.amazon.com/AmazonS3/latest/dev/access-control-block-public-access.html#access-control-block-public-access-policy-status) in the _Amazon S3 User Guide_.
   *
   * _Required_: No
   *
   * _Type_: [PublicAccessBlockConfiguration](aws-properties-s3-multiregionaccesspoint-publicaccessblockconfiguration.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  PublicAccessBlockConfiguration?: S3MultiRegionAccessPointPublicAccessBlockConfiguration;
  /**
   * A collection of the Regions and buckets associated with the Multi-Region Access Point.
   *
   * _Required_: Yes
   *
   * _Type_: List of [Region](aws-properties-s3-multiregionaccesspoint-region.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Regions: List<S3MultiRegionAccessPointRegion>;
  /**
   * The name of the Multi-Region Access Point.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Name?: Value<string>;
}

/**
 * The `AWS::S3::MultiRegionAccessPoint` resource creates an Amazon S3 Multi-Region Access Point. To learn more about Multi-Region Access Points, see [ Multi-Region Access Points in Amazon S3](https://docs.aws.amazon.com/AmazonS3/latest/userguide/MultiRegionAccessPoints.html) in the in the _Amazon S3 User Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-multiregionaccesspoint.html}
 */
export interface S3MultiRegionAccessPointResource {
  Type: 'AWS::S3::MultiRegionAccessPoint';
  Properties: S3MultiRegionAccessPointProperties;
}
