/**
 * Supported regions:
 * - ap-south-1 (version 119.1.0)
 * - us-east-1 (version 119.1.0)
 * - us-east-2 (version 119.1.0)
 * - us-west-2 (version 119.1.0)
 */
import { List, Value } from '../../shared-types/dataTypes';
import { ResourceTag } from '../../shared-types/resource';

/**
 * The `CreatedAt` property type specifies Property description not available. for an [AWS::HealthLake::FHIRDatastore](aws-resource-healthlake-fhirdatastore.md).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-healthlake-fhirdatastore-createdat.html}
 **/
export interface HealthLakeFHIRDatastoreCreatedAt {
  /**
   * Property description not available.
   *
   * _Required_: Yes
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Nanos: Value<number>;
  /**
   * Property description not available.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Seconds: Value<string>;
}

/**
 * The server-side encryption key configuration for a customer provided encryption key.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-healthlake-fhirdatastore-sseconfiguration.html}
 **/
export interface HealthLakeFHIRDatastoreSseConfiguration {
  /**
   * The server-side encryption key configuration for a customer provided encryption key (CMK).
   *
   * _Required_: Yes
   *
   * _Type_: [KmsEncryptionConfig](aws-properties-healthlake-fhirdatastore-kmsencryptionconfig.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  KmsEncryptionConfig: HealthLakeFHIRDatastoreKmsEncryptionConfig;
}

/**
 * Optional parameter to preload data upon creation of the Data Store. Currently, the only supported preloaded data is synthetic data generated from Synthea.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-healthlake-fhirdatastore-preloaddataconfig.html}
 **/
export interface HealthLakeFHIRDatastorePreloadDataConfig {
  /**
   * The type of preloaded data. Only Synthea preloaded data is supported.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Allowed values_: `SYNTHEA`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  PreloadDataType: Value<string>;
}

/**
 * The customer-managed-key(CMK) used when creating a Data Store. If a customer owned key is not specified, an Amazon owned key will be used for encryption.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-healthlake-fhirdatastore-kmsencryptionconfig.html}
 **/
export interface HealthLakeFHIRDatastoreKmsEncryptionConfig {
  /**
   * The KMS encryption key id/alias used to encrypt the Data Store contents at rest.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `400`
   *
   * _Pattern_: `(arn:aws((-us-gov)|(-iso)|(-iso-b)|(-cn))?:kms:)?([a-z]{2}-[a-z]+(-[a-z]+)?-d:)?(d{12}:)?(((key/)?[a-zA-Z0-9-_]+)|(alias/[a-zA-Z0-9:/_-]+))`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  KmsKeyId?: Value<string>;
  /**
   * The type of customer-managed-key(CMK) used for encryption. The two types of supported CMKs are customer owned CMKs and Amazon owned CMKs. For more information on CMK types, see [KmsEncryptionConfig](https://docs.aws.amazon.com/healthlake/latest/APIReference/API_KmsEncryptionConfig.html#HealthLake-Type-KmsEncryptionConfig-CmkType).
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  CmkType: Value<string>;
}
export interface HealthLakeFHIRDatastoreProperties {
  /**
   * The FHIR version of the Data Store. The only supported version is R4.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Allowed values_: `R4`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  DatastoreTypeVersion: Value<string>;
  /**
   * The user generated name for the Data Store.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `256`
   *
   * _Pattern_: `^([p{L}p{Z}p{N}_.:/=+-%@]*)$`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  DatastoreName?: Value<string>;
  /**
   * An array of key-value pairs to apply to this resource.
   *
   * For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html).
   *
   * _Required_: No
   *
   * _Type_: List of [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Tags?: List<ResourceTag>;
  /**
   * The preloaded data configuration for the Data Store. Only data preloaded from Synthea is supported.
   *
   * _Required_: No
   *
   * _Type_: [PreloadDataConfig](aws-properties-healthlake-fhirdatastore-preloaddataconfig.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  PreloadDataConfig?: HealthLakeFHIRDatastorePreloadDataConfig;
  /**
   * The server-side encryption key configuration for a customer provided encryption key specified for creating a Data Store.
   *
   * _Required_: No
   *
   * _Type_: [SseConfiguration](aws-properties-healthlake-fhirdatastore-sseconfiguration.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  SseConfiguration?: HealthLakeFHIRDatastoreSseConfiguration;
}

/**
 * Creates a Data Store that can ingest and export FHIR formatted data.
 *
 * **Important**
 *
 * Please note that when a user tries to do an Update operation via CloudFormation, changes to the Data Store name, Type Version, PreloadDataConfig, or SSEConfiguration will delete their existing Data Store for the stack and create a new one. This will lead to potential loss of data.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-healthlake-fhirdatastore.html}
 */
export interface HealthLakeFHIRDatastoreResource {
  Type: 'AWS::HealthLake::FHIRDatastore';
  Properties: HealthLakeFHIRDatastoreProperties;
}
