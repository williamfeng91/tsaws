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

export interface LambdaLayerVersionPermissionProperties {
  /**
   * The API action that grants access to the layer. For example, `lambda:GetLayerVersion`.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Maximum_: `22`
   *
   * _Pattern_: `lambda:GetLayerVersion`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Action: Value<string>;
  /**
   * The name or Amazon Resource Name (ARN) of the layer.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `140`
   *
   * _Pattern_: `(arn:[a-zA-Z0-9-]+:lambda:[a-zA-Z0-9-]+:d{12}:layer:[a-zA-Z0-9-_]+)|[a-zA-Z0-9-_]+`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  LayerVersionArn: Value<string>;
  /**
   * With the principal set to `*`, grant permission to all accounts in the specified organization.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Maximum_: `34`
   *
   * _Pattern_: `o-[a-z0-9]{10,32}`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  OrganizationId?: Value<string>;
  /**
   * An account ID, or `*` to grant layer usage permission to all accounts in an organization, or all AWS accounts (if `organizationId` is not specified). For the last case, make sure that you really do want all AWS accounts to have usage permission to this layer.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Pattern_: `d{12}|*|arn:(aws[a-zA-Z-]*):iam::d{12}:root`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Principal: Value<string>;
}

/**
 * The `AWS::Lambda::LayerVersionPermission` resource adds permissions to the resource-based policy of a version of an [Lambda layer](https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html). Use this action to grant layer usage permission to other accounts. You can grant permission to a single account, all AWS accounts, or all accounts in an organization.
 *
 * **Important**
 *
 * Since the release of the [UpdateReplacePolicy](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-updatereplacepolicy.html) both `UpdateReplacePolicy` and `DeletionPolicy` are required to protect your Resources/LayerPermissions from deletion.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-layerversionpermission.html}
 */
export interface LambdaLayerVersionPermissionResource {
  Type: 'AWS::Lambda::LayerVersionPermission';
  Properties: LambdaLayerVersionPermissionProperties;
}
