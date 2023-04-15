/**
 * Supported regions:
 * - ap-northeast-1 (version 119.1.0)
 * - ap-southeast-1 (version 119.1.0)
 * - ap-southeast-2 (version 119.1.0)
 * - eu-central-1 (version 119.1.0)
 * - eu-west-1 (version 119.1.0)
 * - us-east-1 (version 119.1.0)
 * - us-east-2 (version 119.1.0)
 * - us-west-2 (version 119.1.0)
 */
import { List, Value } from '../../shared-types/dataTypes';
import { ResourceTag } from '../../shared-types/resource';

/**
 * This structure contains the name and variation value of one variation of a feature. It can contain only one of the following parameters: `BooleanValue`, `DoubleValue`, `LongValue` or `StringValue`.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-evidently-feature-variationobject.html}
 **/
export interface EvidentlyFeatureVariationObject {
  /**
   * A name for the variation. It can include up to 127 characters.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  VariationName: Value<string>;
  /**
   * The value assigned to this variation, if the variation type is a double.
   *
   * _Required_: No
   *
   * _Type_: Double
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DoubleValue?: Value<number>;
  /**
   * The value assigned to this variation, if the variation type is boolean.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  BooleanValue?: Value<boolean>;
  /**
   * The value assigned to this variation, if the variation type is a long.
   *
   * _Required_: No
   *
   * _Type_: Double
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  LongValue?: Value<number>;
  /**
   * The value assigned to this variation, if the variation type is a string.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  StringValue?: Value<string>;
}

/**
 * A set of key-value pairs that specify users who should always be served a specific variation of a feature. Each key specifies a user using their user ID, account ID, or some other identifier. The value specifies the name of the variation that the user is to be served.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-evidently-feature-entityoverride.html}
 **/
export interface EvidentlyFeatureEntityOverride {
  /**
   * The entity ID to be served the variation specified in `Variation`.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  EntityId?: Value<string>;
  /**
   * The name of the variation to serve to the user session that matches the `EntityId`.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Variation?: Value<string>;
}
export interface EvidentlyFeatureProperties {
  /**
   * The name or ARN of the project that is to contain the new feature.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Project: Value<string>;
  /**
   * An optional description of the feature.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Description?: Value<string>;
  /**
   * Specify `ALL_RULES` to activate the traffic allocation specified by any ongoing launches or experiments. Specify `DEFAULT_VARIATION` to serve the default variation to all users instead.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  EvaluationStrategy?: Value<string>;
  /**
   * The name of the variation to use as the default variation. The default variation is served to users who are not allocated to any ongoing launches or experiments of this feature.
   *
   * This variation must also be listed in the `Variations` structure.
   *
   * If you omit `DefaultVariation`, the first variation listed in the `Variations` structure is used as the default variation.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DefaultVariation?: Value<string>;
  /**
   * Specify users that should always be served a specific variation of a feature. Each user is specified by a key-value pair . For each key, specify a user by entering their user ID, account ID, or some other identifier. For the value, specify the name of the variation that they are to be served.
   *
   * _Required_: No
   *
   * _Type_: List of [EntityOverride](aws-properties-evidently-feature-entityoverride.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  EntityOverrides?: List<EvidentlyFeatureEntityOverride>;
  /**
   * An array of structures that contain the configuration of the feature's different variations.
   *
   * Each `VariationObject` in the `Variations` array for a feature must have the same type of value (`BooleanValue`, `DoubleValue`, `LongValue` or `StringValue`).
   *
   * _Required_: Yes
   *
   * _Type_: List of [VariationObject](aws-properties-evidently-feature-variationobject.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Variations: List<EvidentlyFeatureVariationObject>;
  /**
   * Assigns one or more tags (key-value pairs) to the feature.
   *
   * Tags can help you organize and categorize your resources. You can also use them to scope user permissions by granting a user permission to access or change only resources with certain tag values.
   *
   * Tags don't have any semantic meaning to AWS and are interpreted strictly as strings of characters.
   *
   * You can associate as many as 50 tags with a feature.
   *
   * For more information, see [Tagging AWS resources](https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html).
   *
   * _Required_: No
   *
   * _Type_: List of [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Tags?: List<ResourceTag>;
  /**
   * The name for the feature. It can include up to 127 characters.
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
 * Creates or updates an Evidently _feature_ that you want to launch or test. You can define up to five variations of a feature, and use these variations in your launches and experiments. A feature must be created in a project. For information about creating a project, see [CreateProject](https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_CreateProject.html).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-evidently-feature.html}
 */
export interface EvidentlyFeatureResource {
  Type: 'AWS::Evidently::Feature';
  Properties: EvidentlyFeatureProperties;
}
