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
 * Contains the virtual private cloud (VPC) configuration for the specified access point.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3outposts-accesspoint-vpcconfiguration.html}
 **/
export interface S3OutpostsAccessPointVpcConfiguration {
  /**
   * The ID of the VPC configuration.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  VpcId?: Value<string>;
}
export interface S3OutpostsAccessPointProperties {
  /**
   * The access point policy associated with this access point.
   *
   * _Required_: No
   *
   * _Type_: Json
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Policy?: { [key: string]: any };
  /**
   * The Amazon Resource Name (ARN) of the S3 on Outposts bucket that is associated with this access point.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Bucket: Value<string>;
  /**
   * The virtual private cloud (VPC) configuration for this access point, if one exists.
   *
   * _Required_: Yes
   *
   * _Type_: [VpcConfiguration](aws-properties-s3outposts-accesspoint-vpcconfiguration.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  VpcConfiguration: S3OutpostsAccessPointVpcConfiguration;
  /**
   * The name of this access point.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Name: Value<string>;
}

/**
 * The AWS::S3Outposts::AccessPoint resource specifies an access point and associates it with the specified Amazon S3 on Outposts bucket. For more information, see [Managing data access with Amazon S3 access points](https://docs.aws.amazon.com/AmazonS3/latest/userguide/access-points.html).
 *
 * **Note**
 *
 * S3 on Outposts supports only VPC-style access points.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3outposts-accesspoint.html}
 */
export interface S3OutpostsAccessPointResource {
  Type: 'AWS::S3Outposts::AccessPoint';
  Properties: S3OutpostsAccessPointProperties;
}
