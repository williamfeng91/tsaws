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
 * - eu-west-3 (version 119.1.0)
 * - sa-east-1 (version 119.1.0)
 * - us-east-1 (version 119.1.0)
 * - us-east-2 (version 119.1.0)
 * - us-west-1 (version 119.1.0)
 * - us-west-2 (version 119.1.0)
 */
import { List, Value } from '../../shared-types/dataTypes';

/**
 * A wrapper structure to contain schema identity fields. Either `SchemaArn`, or `SchemaName` and `RegistryName` has to be provided.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-glue-schemaversion-schema.html}
 **/
export interface GlueSchemaVersionSchema {
  /**
   * The name of the registry where the schema is stored. Either `SchemaArn`, or `SchemaName` and `RegistryName` has to be provided.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  RegistryName?: Value<string>;
  /**
   * The Amazon Resource Name (ARN) of the schema. Either `SchemaArn`, or `SchemaName` and `RegistryName` has to be provided.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  SchemaArn?: Value<string>;
  /**
   * The name of the schema. Either `SchemaArn`, or `SchemaName` and `RegistryName` has to be provided.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  SchemaName?: Value<string>;
}
export interface GlueSchemaVersionProperties {
  /**
   * The schema definition for the schema version.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  SchemaDefinition: Value<string>;
  /**
   * The schema that includes the schema version.
   *
   * _Required_: Yes
   *
   * _Type_: [Schema](aws-properties-glue-schemaversion-schema.md)
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Schema: GlueSchemaVersionSchema;
}

/**
 * The `AWS::Glue::SchemaVersion` is an AWS Glue resource type that manages schema versions of schemas in the AWS Glue Schema Registry.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-schemaversion.html}
 */
export interface GlueSchemaVersionResource {
  Type: 'AWS::Glue::SchemaVersion';
  Properties: GlueSchemaVersionProperties;
}
