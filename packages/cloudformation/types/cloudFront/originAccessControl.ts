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
 * Creates a new origin access control in CloudFront. After you create an origin access control, you can add it to an origin in a CloudFront distribution so that CloudFront sends authenticated (signed) requests to the origin.
 *
 * This makes it possible to block public access to the origin, allowing viewers (users) to access the origin's content only through CloudFront.
 *
 * For more information about using a CloudFront origin access control, see [Restricting access to an AWS origin](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/private-content-restricting-access-to-origin.html) in the _Amazon CloudFront Developer Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-originaccesscontrol-originaccesscontrolconfig.html}
 **/
export interface CloudFrontOriginAccessControlOriginAccessControlConfig {
  /**
   * Specifies which requests CloudFront signs (adds authentication information to). Specify `always` for the most common use case. For more information, see [origin access control advanced settings](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/private-content-restricting-access-to-s3.html#oac-advanced-settings) in the _Amazon CloudFront Developer Guide_.
   *
   * This field can have one of the following values:
   */
  SigningBehavior: Value<string>;
  /**
   * A description of the origin access control.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Description?: Value<string>;
  /**
   * The type of origin that this origin access control is for.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Allowed values_: `mediastore | s3`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  OriginAccessControlOriginType: Value<string>;
  /**
   * The signing protocol of the origin access control, which determines how CloudFront signs (authenticates) requests. The only valid value is `sigv4`.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Allowed values_: `sigv4`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SigningProtocol: Value<string>;
  /**
   * A name to identify the origin access control.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Name: Value<string>;
}
export interface CloudFrontOriginAccessControlProperties {
  /**
   * The origin access control.
   *
   * _Required_: Yes
   *
   * _Type_: [OriginAccessControlConfig](aws-properties-cloudfront-originaccesscontrol-originaccesscontrolconfig.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  OriginAccessControlConfig: CloudFrontOriginAccessControlOriginAccessControlConfig;
}

/**
 * Creates a new origin access control in CloudFront. After you create an origin access control, you can add it to an origin in a CloudFront distribution so that CloudFront sends authenticated (signed) requests to the origin.
 *
 * This makes it possible to block public access to the origin, allowing viewers (users) to access the origin's content only through CloudFront.
 *
 * For more information about using a CloudFront origin access control, see [Restricting access to an AWS origin](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/private-content-restricting-access-to-origin.html) in the _Amazon CloudFront Developer Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-originaccesscontrol.html}
 */
export interface CloudFrontOriginAccessControlResource {
  Type: 'AWS::CloudFront::OriginAccessControl';
  Properties: CloudFrontOriginAccessControlProperties;
}
