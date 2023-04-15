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

/**
 * An object representing the configuration for an OpenID Connect (OIDC) identity provider.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-eks-identityproviderconfig-oidcidentityproviderconfig.html}
 **/
export interface EKSIdentityProviderConfigOidcIdentityProviderConfig {
  /**
   * The prefix that is prepended to username claims to prevent clashes with existing names. The prefix can't contain `system:`
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  UsernamePrefix?: Value<string>;
  /**
   * The prefix that is prepended to group claims to prevent clashes with existing names (such as `system:` groups). For example, the value` oidc:` creates group names like `oidc:engineering` and `oidc:infra`. The prefix can't contain `system:`
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  GroupsPrefix?: Value<string>;
  /**
   * The URL of the OIDC identity provider that allows the API server to discover public signing keys for verifying tokens.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  IssuerUrl: Value<string>;
  /**
   * The key-value pairs that describe required claims in the identity token. If set, each claim is verified to be present in the token with a matching value.
   *
   * _Required_: No
   *
   * _Type_: List of [RequiredClaim](aws-properties-eks-identityproviderconfig-requiredclaim.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  RequiredClaims?: List<EKSIdentityProviderConfigRequiredClaim>;
  /**
   * This is also known as _audience_. The ID of the client application that makes authentication requests to the OIDC identity provider.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ClientId: Value<string>;
  /**
   * The JSON web token (JWT) claim that the provider uses to return your groups.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  GroupsClaim?: Value<string>;
  /**
   * The JSON Web token (JWT) claim that is used as the username.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  UsernameClaim?: Value<string>;
}

/**
 * A key-value pair that describes a required claim in the identity token. If set, each claim is verified to be present in the token with a matching value.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-eks-identityproviderconfig-requiredclaim.html}
 **/
export interface EKSIdentityProviderConfigRequiredClaim {
  /**
   * The value for the key from the token.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Value: Value<string>;
  /**
   * The key to match from the token.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Key: Value<string>;
}
export interface EKSIdentityProviderConfigProperties {
  /**
   * The type of the identity provider configuration. The only type available is `oidc`.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Type: Value<string>;
  /**
   * The cluster that the configuration is associated to.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ClusterName: Value<string>;
  /**
   * The name of the configuration.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  IdentityProviderConfigName?: Value<string>;
  /**
   * An object representing an OpenID Connect (OIDC) identity provider configuration.
   *
   * _Required_: No
   *
   * _Type_: [OidcIdentityProviderConfig](aws-properties-eks-identityproviderconfig-oidcidentityproviderconfig.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Oidc?: EKSIdentityProviderConfigOidcIdentityProviderConfig;
  /**
   * The metadata to apply to the provider configuration to assist with categorization and organization. Each tag consists of a key and an optional value. You define both.
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
 * Associate an identity provider configuration to a cluster.
 *
 * If you want to authenticate identities using an identity provider, you can create an identity provider configuration and associate it to your cluster. After configuring authentication to your cluster you can create Kubernetes `roles` and `clusterroles` to assign permissions to the roles, and then bind the roles to the identities using Kubernetes `rolebindings` and `clusterrolebindings`. For more information see [Using RBAC Authorization](https://kubernetes.io/docs/reference/access-authn-authz/rbac/) in the Kubernetes documentation.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-identityproviderconfig.html}
 */
export interface EKSIdentityProviderConfigResource {
  Type: 'AWS::EKS::IdentityProviderConfig';
  Properties: EKSIdentityProviderConfigProperties;
}
