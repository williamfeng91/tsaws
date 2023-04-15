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
 * The alias of an Object Lambda Access Point. For more information, see [How to use a bucket-style alias for your S3 bucket Object Lambda Access Point](https://docs.aws.amazon.com/AmazonS3/latest/userguide/olap-use.html#ol-access-points-alias).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3objectlambda-accesspoint-alias.html}
 **/
export interface S3ObjectLambdaAccessPointAlias {
  /**
   * The status of the Object Lambda Access Point alias. If the status is `PROVISIONING`, the Object Lambda Access Point is provisioning the alias and the alias is not ready for use yet. If the status is `READY`, the Object Lambda Access Point alias is successfully provisioned and ready for use.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Status?: Value<string>;
  /**
   * The alias value of the Object Lambda Access Point.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Value?: Value<string>;
}

/**
 * Indicates whether this access point policy is public. For more information about how Amazon S3 evaluates policies to determine whether they are public, see [The Meaning of "Public"](https://docs.aws.amazon.com/AmazonS3/latest/dev/access-control-block-public-access.html#access-control-block-public-access-policy-status) in the _Amazon S3 User Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3objectlambda-accesspoint-policystatus.html}
 **/
export interface S3ObjectLambdaAccessPointPolicyStatus {
  /**
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  IsPublic?: Value<boolean>;
}

/**
 * A configuration used when creating an Object Lambda Access Point.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3objectlambda-accesspoint-objectlambdaconfiguration.html}
 **/
export interface S3ObjectLambdaAccessPointObjectLambdaConfiguration {
  /**
   * Standard access point associated with the Object Lambda Access Point.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SupportingAccessPoint: Value<string>;
  /**
   * A container for transformation configurations for an Object Lambda Access Point.
   *
   * _Required_: Yes
   *
   * _Type_: List of [TransformationConfiguration](aws-properties-s3objectlambda-accesspoint-transformationconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TransformationConfigurations: List<S3ObjectLambdaAccessPointTransformationConfiguration>;
  /**
   * A container for allowed features. Valid inputs are `GetObject-Range`, `GetObject-PartNumber`, `HeadObject-Range`, and `HeadObject-PartNumber`.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AllowedFeatures?: List<Value<string>>;
  /**
   * A container for whether the CloudWatch metrics configuration is enabled.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CloudWatchMetricsEnabled?: Value<boolean>;
}

/**
 * A configuration used when creating an Object Lambda Access Point transformation.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3objectlambda-accesspoint-transformationconfiguration.html}
 **/
export interface S3ObjectLambdaAccessPointTransformationConfiguration {
  /**
   * A container for the action of an Object Lambda Access Point configuration. Valid inputs are `GetObject`, `HeadObject`, `ListObject`, and `ListObjectV2`.
   *
   * _Required_: Yes
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Actions: List<Value<string>>;
  /**
   * A container for the content transformation of an Object Lambda Access Point configuration. Can include the FunctionArn and FunctionPayload. For more information, see [AwsLambdaTransformation](https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_AwsLambdaTransformation.html) in the _Amazon S3 API Reference_.
   *
   * _Required_: Yes
   *
   * _Type_: [ContentTransformation](aws-properties-s3objectlambda-accesspoint-contenttransformation.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ContentTransformation: S3ObjectLambdaAccessPointContentTransformation;
}

/**
 * The `ContentTransformation` property type specifies Property description not available. for an [AWS::S3ObjectLambda::AccessPoint](aws-resource-s3objectlambda-accesspoint.md).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3objectlambda-accesspoint-contenttransformation.html}
 **/
export interface S3ObjectLambdaAccessPointContentTransformation {
  /**
   * Property description not available.
   *
   * _Required_: Yes
   *
   * _Type_: [AwsLambda](aws-properties-s3objectlambda-accesspoint-awslambda.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AwsLambda: S3ObjectLambdaAccessPointAwsLambda;
}

/**
 * The `PublicAccessBlock` configuration that you want to apply to this Amazon S3 account. You can enable the configuration options in any combination. For more information about when Amazon S3 considers a bucket or object public, see [The Meaning of "Public"](https://docs.aws.amazon.com/AmazonS3/latest/dev/access-control-block-public-access.html#access-control-block-public-access-policy-status) in the _Amazon S3 User Guide_.
 *
 * This data type is not supported for Amazon S3 on Outposts.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3objectlambda-accesspoint-publicaccessblockconfiguration.html}
 **/
export interface S3ObjectLambdaAccessPointPublicAccessBlockConfiguration {
  /**
   * Specifies whether Amazon S3 should restrict public bucket policies for buckets in this account. Setting this element to `TRUE` restricts access to buckets with public policies to only AWS service principals and authorized users within this account.
   *
   * Enabling this setting doesn't affect previously stored bucket policies, except that public and cross-account access within any public bucket policy, including non-public delegation to specific accounts, is blocked.
   *
   * This property is not supported for Amazon S3 on Outposts.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RestrictPublicBuckets?: Value<boolean>;
  /**
   * Specifies whether Amazon S3 should block public bucket policies for buckets in this account. Setting this element to `TRUE` causes Amazon S3 to reject calls to PUT Bucket policy if the specified bucket policy allows public access.
   *
   * Enabling this setting doesn't affect existing bucket policies.
   *
   * This property is not supported for Amazon S3 on Outposts.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  BlockPublicPolicy?: Value<boolean>;
  /**
   * Specifies whether Amazon S3 should block public access control lists (ACLs) for buckets in this account. Setting this element to `TRUE` causes the following behavior:
   */
  BlockPublicAcls?: Value<boolean>;
  /**
   * Specifies whether Amazon S3 should ignore public ACLs for buckets in this account. Setting this element to `TRUE` causes Amazon S3 to ignore all public ACLs on buckets in this account and any objects that they contain.
   *
   * Enabling this setting doesn't affect the persistence of any existing ACLs and doesn't prevent new public ACLs from being set.
   *
   * This property is not supported for Amazon S3 on Outposts.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  IgnorePublicAcls?: Value<boolean>;
}

/**
 * The `AwsLambda` property type specifies Property description not available. for an [AWS::S3ObjectLambda::AccessPoint](aws-resource-s3objectlambda-accesspoint.md).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3objectlambda-accesspoint-awslambda.html}
 **/
export interface S3ObjectLambdaAccessPointAwsLambda {
  /**
   * Property description not available.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FunctionArn: Value<string>;
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FunctionPayload?: Value<string>;
}
export interface S3ObjectLambdaAccessPointProperties {
  /**
   * A configuration used when creating an Object Lambda Access Point.
   *
   * _Required_: Yes
   *
   * _Type_: [ObjectLambdaConfiguration](aws-properties-s3objectlambda-accesspoint-objectlambdaconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ObjectLambdaConfiguration: S3ObjectLambdaAccessPointObjectLambdaConfiguration;
  /**
   * The name of this access point.
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
 * The `AWS::S3ObjectLambda::AccessPoint` resource specifies an Object Lambda Access Point used to access a bucket.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3objectlambda-accesspoint.html}
 */
export interface S3ObjectLambdaAccessPointResource {
  Type: 'AWS::S3ObjectLambda::AccessPoint';
  Properties: S3ObjectLambdaAccessPointProperties;
}
