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

export interface LakeFormationTagProperties {
  /**
   * UTF-8 string, not less than 1 or more than 255 bytes long, matching the [single-line string pattern](lake-formation/latest/dg/aws-lake-formation-api-aws-lake-formation-api-common.html#aws-glue-api-regex-oneLine).
   *
   * The key-name for the LF-tag.
   *
   * For more information about using the `Ref` function, see [Ref](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference-ref.html).
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  TagKey: Value<string>;
  /**
   * Catalog id string, not less than 1 or more than 255 bytes long, matching the [single-line string pattern](lake-formation/latest/dg/aws-lake-formation-api-aws-lake-formation-api-common.html#aws-glue-api-regex-oneLine).
   *
   * The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your AWS Lake Formation environment.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  CatalogId?: Value<string>;
  /**
   * An array of UTF-8 strings, not less than 1 or more than 50 strings.
   *
   * A list of possible values of the corresponding `TagKey` of an LF-tag key-value pair.
   *
   * _Required_: Yes
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TagValues: List<Value<string>>;
}

/**
 * The `AWS::LakeFormation::Tag` resource represents an LF-tag, which consists of a key and one or more possible values for the key. During a stack operation, AWS CloudFormation calls the AWS Lake Formation `CreateLFTag` API to create a tag, and `UpdateLFTag` API to update a tag resource, and a `DeleteLFTag` to delete it.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lakeformation-tag.html}
 */
export interface LakeFormationTagResource {
  Type: 'AWS::LakeFormation::Tag';
  Properties: LakeFormationTagProperties;
}
