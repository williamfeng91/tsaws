/**
 * Supported regions:
 * - ca-central-1 (version 119.1.0)
 * - eu-west-1 (version 119.1.0)
 * - us-east-1 (version 119.1.0)
 * - us-east-2 (version 119.1.0)
 * - us-west-2 (version 119.1.0)
 */
import { List, Value } from '../../shared-types/dataTypes';

/**
 * Configuration information when authentication mode is FEDERATED.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-finspace-environment-federationparameters.html}
 **/
export interface FinSpaceEnvironmentFederationParameters {
  /**
   * SAML attribute name and value. The name must always be `Email` and the value should be set to the attribute definition in which user email is set. For example, name would be `Email` and value `http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress`. Please check your SAML 2.0 compliant identity provider (IdP) documentation for details.
   *
   * _Required_: No
   *
   * _Type_: Json
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AttributeMap?: { [key: string]: any };
  /**
   * Name of the identity provider (IdP).
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `32`
   *
   * _Pattern_: `[^_p{Z}][p{L}p{M}p{S}p{N}p{P}][^_p{Z}]+`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FederationProviderName?: Value<string>;
  /**
   * Provide the metadata URL from your SAML 2.0 compliant identity provider (IdP).
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `1000`
   *
   * _Pattern_: `^https?://[-a-zA-Z0-9+&@#/%?=~_|!:,.;]*[-a-zA-Z0-9+&@#/%=~_|]`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SamlMetadataURL?: Value<string>;
  /**
   * The Uniform Resource Name (URN). Also referred as Service Provider URN or Audience URI or Service Provider Entity ID.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `255`
   *
   * _Pattern_: `^[A-Za-z0-9._-:/#+]+$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FederationURN?: Value<string>;
  /**
   * SAML 2.0 Metadata document from identity provider (IdP).
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1000`
   *
   * _Maximum_: `10000000`
   *
   * _Pattern_: `.*`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SamlMetadataDocument?: Value<string>;
  /**
   * The redirect or sign-in URL that should be entered into the SAML 2.0 compliant identity provider configuration (IdP).
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `1000`
   *
   * _Pattern_: `^https?://[-a-zA-Z0-9+&@#/%?=~_|!:,.;]*[-a-zA-Z0-9+&@#/%=~_|]`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ApplicationCallBackURL?: Value<string>;
}

/**
 * Configuration information for the superuser.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-finspace-environment-superuserparameters.html}
 **/
export interface FinSpaceEnvironmentSuperuserParameters {
  /**
   * The first name of the superuser.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `50`
   *
   * _Pattern_: `^[a-zA-Z0-9]{1,50}$`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  FirstName?: Value<string>;
  /**
   * The last name of the superuser.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `50`
   *
   * _Pattern_: `^[a-zA-Z0-9]{1,50}$`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  LastName?: Value<string>;
  /**
   * The email address of the superuser.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `128`
   *
   * _Pattern_: `[A-Z0-9a-z._%+-]+@[A-Za-z0-9.-]+[.]+[A-Za-z]+`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  EmailAddress?: Value<string>;
}
export interface FinSpaceEnvironmentProperties {
  /**
   * The list of Amazon Resource Names (ARN) of the data bundles to install. Currently supported data bundle ARNs:
   */
  DataBundles?: List<Value<string>>;
  /**
   * The description of the FinSpace environment.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `1000`
   *
   * _Pattern_: `^[a-zA-Z0-9. ]{1,1000}$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Description?: Value<string>;
  /**
   * The KMS key id used to encrypt in the FinSpace environment.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `1000`
   *
   * _Pattern_: `^[a-zA-Z-0-9-:/]*$`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  KmsKeyId?: Value<string>;
  /**
   * Configuration information when authentication mode is FEDERATED.
   *
   * _Required_: No
   *
   * _Type_: [FederationParameters](aws-properties-finspace-environment-federationparameters.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FederationParameters?: FinSpaceEnvironmentFederationParameters;
  /**
   * The authentication mode for the environment.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `FEDERATED | LOCAL`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FederationMode?: Value<string>;
  /**
   * Configuration information for the superuser.
   *
   * _Required_: No
   *
   * _Type_: [SuperuserParameters](aws-properties-finspace-environment-superuserparameters.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  SuperuserParameters?: FinSpaceEnvironmentSuperuserParameters;
  /**
   * The name of the FinSpace environment.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `255`
   *
   * _Pattern_: `^[a-zA-Z0-9]+[a-zA-Z0-9-]*[a-zA-Z0-9]$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Name: Value<string>;
}

/**
 * The `AWS::FinSpace::Environment` resource represents an Amazon FinSpace environment.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-finspace-environment.html}
 */
export interface FinSpaceEnvironmentResource {
  Type: 'AWS::FinSpace::Environment';
  Properties: FinSpaceEnvironmentProperties;
}
