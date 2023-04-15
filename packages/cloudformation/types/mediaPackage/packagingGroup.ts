/**
 * Supported regions:
 * - ap-northeast-1 (version 119.1.0)
 * - ap-northeast-2 (version 119.1.0)
 * - ap-south-1 (version 119.1.0)
 * - ap-southeast-1 (version 119.1.0)
 * - ap-southeast-2 (version 119.1.0)
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
 * Sets a custom Amazon CloudWatch log group name for egress logs. If a log group name isn't specified, the default name is used: /aws/MediaPackage/EgressAccessLogs.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediapackage-packaginggroup-logconfiguration.html}
 **/
export interface MediaPackagePackagingGroupLogConfiguration {
  /**
   * Sets a custom Amazon CloudWatch log group name for egress logs. If a log group name isn't specified, the default name is used: /aws/MediaPackage/EgressAccessLogs.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  LogGroupName?: Value<string>;
}

/**
 * Parameters for enabling CDN authorization.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediapackage-packaginggroup-authorization.html}
 **/
export interface MediaPackagePackagingGroupAuthorization {
  /**
   * The Amazon Resource Name (ARN) for the IAM role that allows AWS Elemental MediaPackage to communicate with AWS Secrets Manager.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SecretsRoleArn: Value<string>;
  /**
   * The Amazon Resource Name (ARN) for the secret in AWS Secrets Manager that is used for CDN authorization.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CdnIdentifierSecret: Value<string>;
}
export interface MediaPackagePackagingGroupProperties {
  /**
   * Parameters for CDN authorization.
   *
   * _Required_: No
   *
   * _Type_: [Authorization](aws-properties-mediapackage-packaginggroup-authorization.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Authorization?: MediaPackagePackagingGroupAuthorization;
  /**
   * Unique identifier that you assign to the packaging group.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Id: Value<string>;
  /**
   * The configuration parameters for egress access logging.
   *
   * _Required_: No
   *
   * _Type_: [LogConfiguration](aws-properties-mediapackage-packaginggroup-logconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  EgressAccessLogs?: MediaPackagePackagingGroupLogConfiguration;
  /**
   * The tags to assign to the packaging group.
   *
   * _Required_: No
   *
   * _Type_: List of [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Tags?: List<ResourceTag>;
}

/**
 * Creates a packaging group.
 *
 * The packaging group holds one or more packaging configurations. When you create an asset, you specify the packaging group associated with the asset. The asset has playback endpoints for each packaging configuration within the group.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediapackage-packaginggroup.html}
 */
export interface MediaPackagePackagingGroupResource {
  Type: 'AWS::MediaPackage::PackagingGroup';
  Properties: MediaPackagePackagingGroupProperties;
}
