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

export interface EKSAddonProperties {
  /**
   * Specifying this option preserves the add-on software on your cluster but Amazon EKS stops managing any settings for the add-on. If an IAM account is associated with the add-on, it isn't removed.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PreserveOnDelete?: Value<boolean>;
  /**
   * The version of the add-on.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AddonVersion?: Value<string>;
  /**
   * The Amazon Resource Name (ARN) of an existing IAM role to bind to the add-on's service account. The role must be assigned the IAM permissions required by the add-on. If you don't specify an existing IAM role, then the add-on uses the permissions assigned to the node IAM role. For more information, see [Amazon EKS node IAM role](https://docs.aws.amazon.com/eks/latest/userguide/create-node-role.html) in the _Amazon EKS User Guide_.
   *
   * To specify an existing IAM role, you must have an IAM OpenID Connect (OIDC) provider created for your cluster. For more information, see [Enabling IAM roles for service accounts on your cluster](https://docs.aws.amazon.com/eks/latest/userguide/enable-iam-roles-for-service-accounts.html) in the _Amazon EKS User Guide_.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `255`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ServiceAccountRoleArn?: Value<string>;
  /**
   * The name of the cluster.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `100`
   *
   * _Pattern_: `^[0-9A-Za-z][A-Za-z0-9-_]*`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ClusterName: Value<string>;
  /**
   * The name of the add-on.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  AddonName: Value<string>;
  /**
   * How to resolve field value conflicts for an Amazon EKS add-on. Conflicts are handled based on the value you choose:
   */
  ResolveConflicts?: Value<string>;
  /**
   * The metadata that you apply to the add-on to assist with categorization and organization. Each tag consists of a key and an optional value, both of which you define. Add-on tags do not propagate to any other resources associated with the cluster.
   *
   * _Required_: No
   *
   * _Type_: List of [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Tags?: List<ResourceTag>;
  /**
   * The configuration values that you provided.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ConfigurationValues?: Value<string>;
}

/**
 * Creates an Amazon EKS add-on.
 *
 * Amazon EKS add-ons help to automate the provisioning and lifecycle management of common operational software for Amazon EKS clusters. For more information, see [Amazon EKS add-ons](https://docs.aws.amazon.com/eks/latest/userguide/eks-add-ons.html) in the _Amazon EKS User Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-addon.html}
 */
export interface EKSAddonResource {
  Type: 'AWS::EKS::Addon';
  Properties: EKSAddonProperties;
}
