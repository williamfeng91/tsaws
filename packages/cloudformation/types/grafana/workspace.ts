/**
 * Supported regions:
 * - ap-northeast-1 (version 119.1.0)
 * - ap-northeast-2 (version 119.1.0)
 * - ap-southeast-1 (version 119.1.0)
 * - ap-southeast-2 (version 119.1.0)
 * - eu-central-1 (version 119.1.0)
 * - eu-west-1 (version 119.1.0)
 * - eu-west-2 (version 119.1.0)
 * - us-east-1 (version 119.1.0)
 * - us-east-2 (version 119.1.0)
 * - us-west-2 (version 119.1.0)
 */
import { List, Value } from '../../shared-types/dataTypes';

/**
 * A structure containing the identity provider (IdP) metadata used to integrate the identity provider with this workspace. You can specify the metadata either by providing a URL to its location in the `url` parameter, or by specifying the full metadata in XML format in the `xml` parameter. Specifying both will cause an error.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-grafana-workspace-idpmetadata.html}
 **/
export interface GrafanaWorkspaceIdpMetadata {
  /**
   * The full IdP metadata, in XML format.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Xml?: Value<string>;
  /**
   * The URL of the location containing the IdP metadata.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `2048`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Url?: Value<string>;
}

/**
 * This structure defines which groups defined in the SAML assertion attribute are to be mapped to the Grafana `Admin` and `Editor` roles in the workspace. SAML authenticated users not part of `Admin` or `Editor` role groups have `Viewer` permission over the workspace.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-grafana-workspace-rolevalues.html}
 **/
export interface GrafanaWorkspaceRoleValues {
  /**
   * A list of groups from the SAML assertion attribute to grant the Grafana `Editor` role to.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Editor?: List<Value<string>>;
  /**
   * A list of groups from the SAML assertion attribute to grant the Grafana `Admin` role to.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Admin?: List<Value<string>>;
}

/**
 * The configuration settings for an Amazon VPC that contains data sources for your Grafana workspace to connect to.
 *
 * **Note**
 *
 * Provided `securityGroupIds` and `subnetIds` must be part of the same VPC.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-grafana-workspace-vpcconfiguration.html}
 **/
export interface GrafanaWorkspaceVpcConfiguration {
  /**
   * The list of Amazon EC2 security group IDs attached to the Amazon VPC for your Grafana workspace to connect. Duplicates not allowed.
   *
   * _Array Members_: Minimum number of 1 items. Maximum number of 5 items.
   *
   * _Length_: Minimum length of 0. Maximum length of 255.
   *
   * _Required_: Yes
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SecurityGroupIds: List<Value<string>>;
  /**
   * The list of Amazon EC2 subnet IDs created in the Amazon VPC for your Grafana workspace to connect. Duplicates not allowed.
   *
   * _Array Members_: Minimum number of 2 items. Maximum number of 6 items.
   *
   * _Length_: Minimum length of 0. Maximum length of 255.
   *
   * _Required_: Yes
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SubnetIds: List<Value<string>>;
}

/**
 * A structure that defines which attributes in the IdP assertion are to be used to define information about the users authenticated by the IdP to use the workspace.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-grafana-workspace-assertionattributes.html}
 **/
export interface GrafanaWorkspaceAssertionAttributes {
  /**
   * The name of the attribute within the SAML assertion to use as the user roles.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `256`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Role?: Value<string>;
  /**
   * The name of the attribute within the SAML assertion to use as the email names for SAML users.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `256`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Email?: Value<string>;
  /**
   * The name of the attribute within the SAML assertion to use as the user full "friendly" names for the users' organizations.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `256`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Org?: Value<string>;
  /**
   * The name of the attribute within the SAML assertion to use as the user full "friendly" names for user groups.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `256`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Groups?: Value<string>;
  /**
   * The name of the attribute within the SAML assertion to use as the login names for SAML users.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `256`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Login?: Value<string>;
  /**
   * The name of the attribute within the SAML assertion to use as the user full "friendly" names for SAML users.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `256`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Name?: Value<string>;
}

/**
 * A structure containing information about how this workspace works with SAML.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-grafana-workspace-samlconfiguration.html}
 **/
export interface GrafanaWorkspaceSamlConfiguration {
  /**
   * How long a sign-on session by a SAML user is valid, before the user has to sign on again.
   *
   * _Required_: No
   *
   * _Type_: Double
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  LoginValidityDuration?: Value<number>;
  /**
   * A structure containing arrays that map group names in the SAML assertion to the Grafana `Admin` and `Editor` roles in the workspace.
   *
   * _Required_: No
   *
   * _Type_: [RoleValues](aws-properties-grafana-workspace-rolevalues.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RoleValues?: GrafanaWorkspaceRoleValues;
  /**
   * A structure containing the identity provider (IdP) metadata used to integrate the identity provider with this workspace.
   *
   * _Required_: Yes
   *
   * _Type_: [IdpMetadata](aws-properties-grafana-workspace-idpmetadata.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  IdpMetadata: GrafanaWorkspaceIdpMetadata;
  /**
   * A structure that defines which attributes in the SAML assertion are to be used to define information about the users authenticated by that IdP to use the workspace.
   *
   * _Required_: No
   *
   * _Type_: [AssertionAttributes](aws-properties-grafana-workspace-assertionattributes.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AssertionAttributes?: GrafanaWorkspaceAssertionAttributes;
  /**
   * Lists which organizations defined in the SAML assertion are allowed to use the Amazon Managed Grafana workspace. If this is empty, all organizations in the assertion attribute have access.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AllowedOrganizations?: List<Value<string>>;
}

/**
 *
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-grafana-workspace-networkaccesscontrol.html}
 **/
export interface GrafanaWorkspaceNetworkAccessControl {
  PrefixListIds?: List<Value<string>>;
  VpceIds?: List<Value<string>>;
}
export interface GrafanaWorkspaceProperties {
  /**
   * The AWS notification channels that Amazon Managed Grafana can automatically create IAM roles and permissions for, to allow Amazon Managed Grafana to use these channels.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  NotificationDestinations?: List<Value<string>>;
  /**
   * The user-defined description of the workspace.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `0`
   *
   * _Maximum_: `2048`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Description?: Value<string>;
  /**
   * If this is `SERVICE_MANAGED`, and the workplace was created through the Amazon Managed Grafana console, then Amazon Managed Grafana automatically creates the IAM roles and provisions the permissions that the workspace needs to use AWS data sources and notification channels.
   *
   * If this is `CUSTOMER_MANAGED`, you must manage those roles and permissions yourself.
   *
   * If you are working with a workspace in a member account of an organization and that account is not a delegated administrator account, and you want the workspace to access data sources in other AWS accounts in the organization, this parameter must be set to `CUSTOMER_MANAGED`.
   *
   * For more information about converting between customer and service managed, see [Managing permissions for data sources and notification channels](https://docs.aws.amazon.com/grafana/latest/userguide/AMG-datasource-and-notification.html). For more information about the roles and permissions that must be managed for customer managed workspaces, see [Amazon Managed Grafana permissions and policies for AWS data sources and notification channels](https://docs.aws.amazon.com/grafana/latest/userguide/AMG-manage-permissions.html)
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `CUSTOMER_MANAGED | SERVICE_MANAGED`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PermissionType: Value<string>;
  /**
   * Specifies whether the workspace can access AWS resources in this AWS account only, or whether it can also access AWS resources in other accounts in the same organization. If this is `ORGANIZATION`, the `workspaceOrganizationalUnits` parameter specifies which organizational units the workspace can access.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `CURRENT_ACCOUNT | ORGANIZATION`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AccountAccessType: Value<string>;
  /**
   * The name of the AWS CloudFormation stack set that is used to generate IAM roles to be used for this workspace.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  StackSetName?: Value<string>;
  /**
   * If the workspace uses SAML, use this structure to map SAML assertion attributes to workspace user information and define which groups in the assertion attribute are to have the `Admin` and `Editor` roles in the workspace.
   *
   * _Required_: No
   *
   * _Type_: [SamlConfiguration](aws-properties-grafana-workspace-samlconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SamlConfiguration?: GrafanaWorkspaceSamlConfiguration;
  /**
   * Specifies the organizational units that this workspace is allowed to use data sources from, if this workspace is in an account that is part of an organization.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  OrganizationalUnits?: List<Value<string>>;
  /**
   * The IAM role that grants permissions to the AWS resources that the workspace will view data from. This role must already exist.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `2048`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RoleArn?: Value<string>;
  /**
   * The name of the workspace.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Pattern_: `^[a-zA-Z0-9-._~]{1,255}$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Name?: Value<string>;
  /**
   * Specifies the AWS data sources that have been configured to have IAM roles and permissions created to allow Amazon Managed Grafana to read data from these sources.
   *
   * This list is only used when the workspace was created through the AWS console, and the `permissionType` is `SERVICE_MANAGED`.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DataSources?: List<Value<string>>;
  /**
   * Specifies whether this workspace uses SAML 2.0, AWS IAM Identity Center (successor to AWS Single Sign-On), or both to authenticate users for using the Grafana console within a workspace. For more information, see [User authentication in Amazon Managed Grafana](https://docs.aws.amazon.com/grafana/latest/userguide/authentication-in-AMG.html).
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AuthenticationProviders: List<Value<string>>;
  /**
   * The name of the IAM role that is used to access resources through Organizations.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `2048`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  OrganizationRoleName?: Value<string>;
  /**
   * The configuration for connecting to data sources in a private VPC (Amazon Virtual Private Cloud).
   *
   * _Required_: No
   *
   * _Type_: [VpcConfiguration](aws-properties-grafana-workspace-vpcconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  VpcConfiguration?: GrafanaWorkspaceVpcConfiguration;
  /**
   * A unique, case-sensitive, user-provided identifier to ensure the idempotency of the request.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Pattern_: `^[!-~]{1,64}$`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ClientToken?: Value<string>;
  NetworkAccessControl?: GrafanaWorkspaceNetworkAccessControl;
}

/**
 * Specifies a _workspace_. In a workspace, you can create Grafana dashboards and visualizations to analyze your metrics, logs, and traces. You don't have to build, package, or deploy any hardware to run the Grafana server.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-grafana-workspace.html}
 */
export interface GrafanaWorkspaceResource {
  Type: 'AWS::Grafana::Workspace';
  Properties: GrafanaWorkspaceProperties;
}
