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
 * - us-east-1 (version 119.1.0)
 * - us-east-2 (version 119.1.0)
 * - us-west-2 (version 119.1.0)
 */
import { List, Value } from '../../shared-types/dataTypes';
import { ResourceTag } from '../../shared-types/resource';

/**
 * `AccessRules` is a property of the [AWS::Lightsail::Bucket](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-bucket.html) resource. It describes access rules for a bucket.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lightsail-bucket-accessrules.html}
 **/
export interface LightsailBucketAccessRules {
  /**
   * A Boolean value indicating whether the access control list (ACL) permissions that are applied to individual objects override the `GetObject` option that is currently specified.
   *
   * When this is true, you can use the [PutObjectAcl](https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutObjectAcl.html) Amazon S3 API operation to set individual objects to public (read-only) or private, using either the `public-read` ACL or the `private` ACL.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AllowPublicOverrides?: Value<boolean>;
  /**
   * Specifies the anonymous access to all objects in a bucket.
   *
   * The following options can be specified:
   *
   * If the `GetObject` value is set to `public`, then all objects in the bucket default to public regardless of the `allowPublicOverrides` value.
   *
   * If the `GetObject` value is set to `private`, and the `allowPublicOverrides` value is set to `true`, then all objects in the bucket default to private unless they are configured with a `public-read` ACL. Individual objects with a `public-read` ACL are readable by everyone on the internet.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `private | public`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  GetObject?: Value<string>;
}
export interface LightsailBucketProperties {
  /**
   * Indicates whether object versioning is enabled for the bucket.
   *
   * The following options can be configured:
   */
  ObjectVersioning?: Value<boolean>;
  /**
   * An array of AWS account IDs that have read-only access to the bucket.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Maximum_: `10`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ReadOnlyAccessAccounts?: List<Value<string>>;
  /**
   * The bundle ID for the bucket (for example, `small_1_0`).
   *
   * A bucket bundle specifies the monthly cost, storage space, and data transfer quota for a bucket.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Pattern_: `.*S.*`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  BundleId: Value<string>;
  /**
   * The name of the bucket.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  BucketName: Value<string>;
  /**
   * An object that describes the access rules for the bucket.
   *
   * _Required_: No
   *
   * _Type_: [AccessRules](aws-properties-lightsail-bucket-accessrules.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AccessRules?: LightsailBucketAccessRules;
  /**
   * An array of Lightsail instances that have access to the bucket.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ResourcesReceivingAccess?: List<Value<string>>;
  /**
   * An array of key-value pairs to apply to this resource.
   *
   * For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html) in the _AWS CloudFormation User Guide_.
   *
   * The `Value` of `Tags` is optional for Lightsail resources.
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
 * The `AWS::Lightsail::Bucket` resource specifies a bucket.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-bucket.html}
 */
export interface LightsailBucketResource {
  Type: 'AWS::Lightsail::Bucket';
  Properties: LightsailBucketProperties;
}
