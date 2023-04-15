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
 * - us-east-1 (version 119.1.0)
 * - us-east-2 (version 119.1.0)
 * - us-west-2 (version 119.1.0)
 */
import { List, Value } from '../../shared-types/dataTypes';

export interface PersonalizeSchemaProperties {
  /**
   * The schema.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Maximum_: `10000`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Schema: Value<string>;
  /**
   * The domain of a schema that you created for a dataset in a Domain dataset group.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `ECOMMERCE | VIDEO_ON_DEMAND`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Domain?: Value<string>;
  /**
   * The name of the schema.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `63`
   *
   * _Pattern_: `^[a-zA-Z0-9][a-zA-Z0-9-_]*`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Name: Value<string>;
}

/**
 * Creates an Amazon Personalize schema from the specified schema string. The schema you create must be in Avro JSON format.
 *
 * Amazon Personalize recognizes three schema variants. Each schema is associated with a dataset type and has a set of required field and keywords. If you are creating a schema for a dataset in a Domain dataset group, you provide the domain of the Domain dataset group. You specify a schema when you call [CreateDataset](https://docs.aws.amazon.com/personalize/latest/dg/API_CreateDataset.html).
 *
 * For more information on schemas, see [Datasets and schemas](https://docs.aws.amazon.com/personalize/latest/dg/how-it-works-dataset-schema.html).
 *
 * **Related APIs**
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-personalize-schema.html}
 */
export interface PersonalizeSchemaResource {
  Type: 'AWS::Personalize::Schema';
  Properties: PersonalizeSchemaProperties;
}
