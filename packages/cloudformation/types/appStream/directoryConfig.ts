/**
 * Supported regions:
 * - ap-northeast-1 (version 119.1.0)
 * - ap-northeast-2 (version 119.1.0)
 * - ap-south-1 (version 119.1.0)
 * - ap-southeast-1 (version 119.1.0)
 * - ap-southeast-2 (version 119.1.0)
 * - ca-central-1 (version 119.1.0)
 * - eu-central-1 (version 119.1.0)
 * - eu-west-1 (version 119.1.0)
 * - eu-west-2 (version 119.1.0)
 * - sa-east-1 (version 119.1.0)
 * - us-east-1 (version 119.1.0)
 * - us-east-2 (version 119.1.0)
 * - us-west-1 (version 119.1.0)
 * - us-west-2 (version 119.1.0)
 */
import { List, Value } from '../../shared-types/dataTypes';

/**
 * The certificate-based authentication properties used to authenticate SAML 2.0 Identity Provider (IdP) user identities to Active Directory domain-joined streaming instances.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appstream-directoryconfig-certificatebasedauthproperties.html}
 **/
export interface AppStreamDirectoryConfigCertificateBasedAuthProperties {
  /**
   * The status of the certificate-based authentication properties. Fallback is turned on by default when certificate-based authentication is **Enabled**. Fallback allows users to log in using their AD domain password if certificate-based authentication is unsuccessful, or to unlock a desktop lock screen. **Enabled_no_directory_login_fallback** enables certificate-based authentication, but does not allow users to log in using their AD domain password. Users will be disconnected to re-authenticate using certificates.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `DISABLED | ENABLED | ENABLED_NO_DIRECTORY_LOGIN_FALLBACK`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Status?: Value<string>;
  /**
   * The ARN of the AWS Certificate Manager Private CA resource.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Pattern_: `^arn:aws(?:-cn|-iso-b|-iso|-us-gov)?:[A-Za-z0-9][A-Za-z0-9_/.-]{0,62}:[A-Za-z0-9_/.-]{0,63}:[A-Za-z0-9_/.-]{0,63}:[A-Za-z0-9][A-Za-z0-9:_/+=,@.-]{0,1023}$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CertificateAuthorityArn?: Value<string>;
}

/**
 * The credentials for the service account used by the streaming instance to connect to the directory.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appstream-directoryconfig-serviceaccountcredentials.html}
 **/
export interface AppStreamDirectoryConfigServiceAccountCredentials {
  /**
   * The user name of the account. This account must have the following privileges: create computer objects, join computers to the domain, and change/reset the password on descendant computer objects for the organizational units specified.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AccountName: Value<string>;
  /**
   * The password for the account.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `127`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AccountPassword: Value<string>;
}
export interface AppStreamDirectoryConfigProperties {
  /**
   * The distinguished names of the organizational units for computer accounts.
   *
   * _Required_: Yes
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  OrganizationalUnitDistinguishedNames: List<Value<string>>;
  /**
   * The credentials for the service account used by the streaming instance to connect to the directory. Do not use this parameter directly. Use `ServiceAccountCredentials` as an input parameter with `noEcho` as shown in the [Parameters](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/parameters-section-structure.html). For best practices information, see [Do Not Embed Credentials in Your Templates](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/best-practices.html#creds).
   *
   * _Required_: Yes
   *
   * _Type_: [ServiceAccountCredentials](aws-properties-appstream-directoryconfig-serviceaccountcredentials.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ServiceAccountCredentials: AppStreamDirectoryConfigServiceAccountCredentials;
  /**
   * The certificate-based authentication properties used to authenticate SAML 2.0 Identity Provider (IdP) user identities to Active Directory domain-joined streaming instances.
   *
   * _Required_: No
   *
   * _Type_: [CertificateBasedAuthProperties](aws-properties-appstream-directoryconfig-certificatebasedauthproperties.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CertificateBasedAuthProperties?: AppStreamDirectoryConfigCertificateBasedAuthProperties;
  /**
   * The fully qualified name of the directory (for example, corp.example.com).
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  DirectoryName: Value<string>;
}

/**
 * The `AWS::AppStream::DirectoryConfig` resource specifies the configuration information required to join Amazon AppStream 2.0 fleets and image builders to Microsoft Active Directory domains.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-directoryconfig.html}
 */
export interface AppStreamDirectoryConfigResource {
  Type: 'AWS::AppStream::DirectoryConfig';
  Properties: AppStreamDirectoryConfigProperties;
}
