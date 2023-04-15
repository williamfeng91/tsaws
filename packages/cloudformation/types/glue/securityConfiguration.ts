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
 * Specifies an encryption configuration.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-securityconfiguration-encryptionconfiguration.html}
 **/
export interface GlueSecurityConfigurationEncryptionConfiguration {
  /**
   * The encyption configuration for Amazon Simple Storage Service (Amazon S3) data.
   *
   * _Required_: No
   *
   * _Type_: [S3Encryptions](aws-properties-glue-securityconfiguration-s3encryptions.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  S3Encryptions?: GlueSecurityConfigurationS3Encryptions;
  /**
   * The encryption configuration for Amazon CloudWatch.
   *
   * _Required_: No
   *
   * _Type_: [CloudWatchEncryption](aws-properties-glue-securityconfiguration-cloudwatchencryption.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CloudWatchEncryption?: GlueSecurityConfigurationCloudWatchEncryption;
  /**
   * The encryption configuration for job bookmarks.
   *
   * _Required_: No
   *
   * _Type_: [JobBookmarksEncryption](aws-properties-glue-securityconfiguration-jobbookmarksencryption.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  JobBookmarksEncryption?: GlueSecurityConfigurationJobBookmarksEncryption;
}

/**
 * Specifies how job bookmark data should be encrypted.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-securityconfiguration-jobbookmarksencryption.html}
 **/
export interface GlueSecurityConfigurationJobBookmarksEncryption {
  /**
   * The Amazon Resource Name (ARN) of the KMS key to be used to encrypt the data.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  KmsKeyArn?: Value<string>;
  /**
   * The encryption mode to use for job bookmarks data.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  JobBookmarksEncryptionMode?: Value<string>;
}

/**
 * The `S3Encryptions` property type specifies the encyption configuration for Amazon Simple Storage Service (Amazon S3) data for a security configuration.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-securityconfiguration-s3encryptions.html}
 **/
export type GlueSecurityConfigurationS3Encryptions = List<GlueSecurityConfigurationS3Encryption>;

/**
 * Specifies how Amazon Simple Storage Service (Amazon S3) data should be encrypted.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-securityconfiguration-s3encryption.html}
 **/
export interface GlueSecurityConfigurationS3Encryption {
  /**
   * The Amazon Resource Name (ARN) of the KMS key to be used to encrypt the data.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  KmsKeyArn?: Value<string>;
  /**
   * The encryption mode to use for Amazon S3 data.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  S3EncryptionMode?: Value<string>;
}

/**
 * Specifies how Amazon CloudWatch data should be encrypted.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-securityconfiguration-cloudwatchencryption.html}
 **/
export interface GlueSecurityConfigurationCloudWatchEncryption {
  /**
   * The Amazon Resource Name (ARN) of the KMS key to be used to encrypt the data.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  KmsKeyArn?: Value<string>;
  /**
   * The encryption mode to use for CloudWatch data.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CloudWatchEncryptionMode?: Value<string>;
}
export interface GlueSecurityConfigurationProperties {
  /**
   * The encryption configuration associated with this security configuration.
   *
   * _Required_: Yes
   *
   * _Type_: [EncryptionConfiguration](aws-properties-glue-securityconfiguration-encryptionconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  EncryptionConfiguration: GlueSecurityConfigurationEncryptionConfiguration;
  /**
   * The name of the security configuration.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Name: Value<string>;
}

/**
 * Creates a new security configuration. A security configuration is a set of security properties that can be used by AWS Glue. You can use a security configuration to encrypt data at rest. For information about using security configurations in AWS Glue, see [Encrypting Data Written by Crawlers, Jobs, and Development Endpoints](https://docs.aws.amazon.com/glue/latest/dg/encryption-security-configuration.html).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-securityconfiguration.html}
 */
export interface GlueSecurityConfigurationResource {
  Type: 'AWS::Glue::SecurityConfiguration';
  Properties: GlueSecurityConfigurationProperties;
}
