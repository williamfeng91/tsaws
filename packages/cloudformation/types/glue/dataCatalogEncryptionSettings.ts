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
 * Contains configuration information for maintaining Data Catalog security.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-datacatalogencryptionsettings-datacatalogencryptionsettings.html}
 **/
export interface GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettings {
  /**
   * When connection password protection is enabled, the Data Catalog uses a customer-provided key to encrypt the password as part of `CreateConnection` or `UpdateConnection` and store it in the `ENCRYPTED_PASSWORD` field in the connection properties. You can enable catalog encryption or only password encryption.
   *
   * _Required_: No
   *
   * _Type_: [ConnectionPasswordEncryption](aws-properties-glue-datacatalogencryptionsettings-connectionpasswordencryption.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ConnectionPasswordEncryption?: GlueDataCatalogEncryptionSettingsConnectionPasswordEncryption;
  /**
   * Specifies the encryption-at-rest configuration for the Data Catalog.
   *
   * _Required_: No
   *
   * _Type_: [EncryptionAtRest](aws-properties-glue-datacatalogencryptionsettings-encryptionatrest.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  EncryptionAtRest?: GlueDataCatalogEncryptionSettingsEncryptionAtRest;
}

/**
 * Specifies the encryption-at-rest configuration for the Data Catalog.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-datacatalogencryptionsettings-encryptionatrest.html}
 **/
export interface GlueDataCatalogEncryptionSettingsEncryptionAtRest {
  /**
   * The encryption-at-rest mode for encrypting Data Catalog data.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CatalogEncryptionMode?: Value<string>;
  /**
   * The ID of the AWS KMS key to use for encryption at rest.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SseAwsKmsKeyId?: Value<string>;
}

/**
 * The data structure used by the Data Catalog to encrypt the password as part of `CreateConnection` or `UpdateConnection` and store it in the `ENCRYPTED_PASSWORD` field in the connection properties. You can enable catalog encryption or only password encryption.
 *
 * When a `CreationConnection` request arrives containing a password, the Data Catalog first encrypts the password using your AWS KMS key. It then encrypts the whole connection object again if catalog encryption is also enabled.
 *
 * This encryption requires that you set AWS KMS key permissions to enable or restrict access on the password key according to your security requirements. For example, you might want only administrators to have decrypt permission on the password key.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-datacatalogencryptionsettings-connectionpasswordencryption.html}
 **/
export interface GlueDataCatalogEncryptionSettingsConnectionPasswordEncryption {
  /**
   * When the `ReturnConnectionPasswordEncrypted` flag is set to "true", passwords remain encrypted in the responses of `GetConnection` and `GetConnections`. This encryption takes effect independently from catalog encryption.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ReturnConnectionPasswordEncrypted?: Value<boolean>;
  /**
   * An AWS KMS key that is used to encrypt the connection password.
   *
   * If connection password protection is enabled, the caller of `CreateConnection` and `UpdateConnection` needs at least `kms:Encrypt` permission on the specified AWS KMS key, to encrypt passwords before storing them in the Data Catalog. You can set the decrypt permission to enable or restrict access on the password key according to your security requirements.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  KmsKeyId?: Value<string>;
}
export interface GlueDataCatalogEncryptionSettingsProperties {
  /**
   * Contains configuration information for maintaining Data Catalog security.
   *
   * _Required_: Yes
   *
   * _Type_: [DataCatalogEncryptionSettings](aws-properties-glue-datacatalogencryptionsettings-datacatalogencryptionsettings.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DataCatalogEncryptionSettings: GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettings;
  /**
   * The ID of the Data Catalog in which the settings are created.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  CatalogId: Value<string>;
}

/**
 * Sets the security configuration for a specified catalog. After the configuration has been set, the specified encryption is applied to every catalog write thereafter.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-datacatalogencryptionsettings.html}
 */
export interface GlueDataCatalogEncryptionSettingsResource {
  Type: 'AWS::Glue::DataCatalogEncryptionSettings';
  Properties: GlueDataCatalogEncryptionSettingsProperties;
}
