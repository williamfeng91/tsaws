/**
 * Supported regions:
 * - ap-northeast-1 (version 119.1.0)
 * - ap-northeast-2 (version 119.1.0)
 * - ap-southeast-1 (version 119.1.0)
 * - ap-southeast-2 (version 119.1.0)
 * - ca-central-1 (version 119.1.0)
 * - eu-central-1 (version 119.1.0)
 * - eu-west-1 (version 119.1.0)
 * - eu-west-2 (version 119.1.0)
 * - sa-east-1 (version 119.1.0)
 * - us-east-1 (version 119.1.0)
 * - us-west-2 (version 119.1.0)
 */
import { List, Value } from '../../shared-types/dataTypes';
import { ResourceTag } from '../../shared-types/resource';

/**
 * Describes a connection alias association that is used for cross-Region redirection. For more information, see [ Cross-Region Redirection for Amazon WorkSpaces](https://docs.aws.amazon.com/workspaces/latest/adminguide/cross-region-redirection.html).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-workspaces-connectionalias-connectionaliasassociation.html}
 **/
export interface WorkSpacesConnectionAliasConnectionAliasAssociation {
  /**
   * The identifier of the AWS account that associated the connection alias with a directory.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Pattern_: `^d{12}$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AssociatedAccountId?: Value<string>;
  /**
   * The identifier of the directory associated with a connection alias.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ResourceId?: Value<string>;
  /**
   * The identifier of the connection alias association. You use the connection identifier in the DNS TXT record when you're configuring your DNS routing policies.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `20`
   *
   * _Pattern_: `^[a-zA-Z0-9]+$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ConnectionIdentifier?: Value<string>;
  /**
   * The association status of the connection alias.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `ASSOCIATED_WITH_OWNER_ACCOUNT | ASSOCIATED_WITH_SHARED_ACCOUNT | NOT_ASSOCIATED | PENDING_ASSOCIATION | PENDING_DISASSOCIATION`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AssociationStatus?: Value<string>;
}
export interface WorkSpacesConnectionAliasProperties {
  /**
   * The connection string specified for the connection alias. The connection string must be in the form of a fully qualified domain name (FQDN), such as `www.example.com`.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `255`
   *
   * _Pattern_: `^[.0-9a-zA-Z-]{1,255}$`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ConnectionString: Value<string>;
  /**
   * The tags to associate with the connection alias.
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
 * The `AWS::WorkSpaces::ConnectionAlias` resource specifies a connection alias. Connection aliases are used for cross-Region redirection. For more information, see [ Cross-Region Redirection for Amazon WorkSpaces](https://docs.aws.amazon.com/workspaces/latest/adminguide/cross-region-redirection.html).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspaces-connectionalias.html}
 */
export interface WorkSpacesConnectionAliasResource {
  Type: 'AWS::WorkSpaces::ConnectionAlias';
  Properties: WorkSpacesConnectionAliasProperties;
}
