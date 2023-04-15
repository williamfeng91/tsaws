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
 * The container element for a bucket's policy status.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-multiregionaccesspointpolicy-policystatus.html}
 **/
export interface S3MultiRegionAccessPointPolicyPolicyStatus {
  /**
   * The policy status for this bucket. `TRUE` indicates that this bucket is public. `FALSE` indicates that the bucket is not public.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  IsPublic: Value<string>;
}
export interface S3MultiRegionAccessPointPolicyProperties {
  /**
   * The access policy associated with the Multi-Region Access Point.
   *
   * _Required_: Yes
   *
   * _Type_: Json
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Policy: { [key: string]: any };
  /**
   * The name of the Multi-Region Access Point.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  MrapName: Value<string>;
}

/**
 * Applies an Amazon S3 access policy to an Amazon S3 Multi-Region Access Point.
 *
 * It is not possible to delete an access policy for a Multi-Region Access Point from the CloudFormation template. When you attempt to delete the policy, CloudFormation updates the policy using `DeletionPolicy:Retain` and `UpdateReplacePolicy:Retain`. CloudFormation updates the policy to only allow access to the account that created the bucket.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-multiregionaccesspointpolicy.html}
 */
export interface S3MultiRegionAccessPointPolicyResource {
  Type: 'AWS::S3::MultiRegionAccessPointPolicy';
  Properties: S3MultiRegionAccessPointPolicyProperties;
}
