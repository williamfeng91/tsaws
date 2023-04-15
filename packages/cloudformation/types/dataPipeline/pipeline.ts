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
 * PipelineObject is property of the AWS::DataPipeline::Pipeline resource that contains information about a pipeline object. This can be a logical, physical, or physical attempt pipeline object. The complete set of components of a pipeline defines the pipeline.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datapipeline-pipeline-pipelineobject.html}
 **/
export interface DataPipelinePipelinePipelineObject {
  /**
   * Key-value pairs that define the properties of the object.
   *
   * _Required_: Yes
   *
   * _Type_: List of [Field](aws-properties-datapipeline-pipeline-field.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Fields: List<DataPipelinePipelineField>;
  /**
   * The ID of the object.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `1024`
   *
   * _Pattern_: `[u0020-uD7FFuE000-uFFFDuD800uDC00-uDBFFuDFFFnt]*`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Id: Value<string>;
  /**
   * The name of the object.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `1024`
   *
   * _Pattern_: `[u0020-uD7FFuE000-uFFFDuD800uDC00-uDBFFuDFFFnt]*`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Name: Value<string>;
}

/**
 * `Attribute` is a property of `ParameterObject` that defines the attributes of a parameter object as key-value pairs.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datapipeline-pipeline-parameterattribute.html}
 **/
export interface DataPipelinePipelineParameterAttribute {
  /**
   * The field value, expressed as a String.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `0`
   *
   * _Maximum_: `10240`
   *
   * _Pattern_: `[u0020-uD7FFuE000-uFFFDuD800uDC00-uDBFFuDFFFrnt]*`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  StringValue: Value<string>;
  /**
   * The field identifier.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `256`
   *
   * _Pattern_: `[u0020-uD7FFuE000-uFFFDuD800uDC00-uDBFFuDFFFrnt]*`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Key: Value<string>;
}

/**
 * A list of arbitrary tags (key-value pairs) to associate with the pipeline, which you can use to control permissions. For more information, see [Controlling Access to Pipelines and Resources](https://docs.aws.amazon.com/datapipeline/latest/DeveloperGuide/dp-control-access.html) in the _AWS Data Pipeline Developer Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datapipeline-pipeline-pipelinetag.html}
 **/
export interface DataPipelinePipelinePipelineTag {
  /**
   * The value to associate with the key name.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Value: Value<string>;
  /**
   * The key name of a tag.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Key: Value<string>;
}

/**
 * Contains information about a parameter object.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datapipeline-pipeline-parameterobject.html}
 **/
export interface DataPipelinePipelineParameterObject {
  /**
   * The attributes of the parameter object.
   *
   * _Required_: Yes
   *
   * _Type_: List of [ParameterAttribute](aws-properties-datapipeline-pipeline-parameterattribute.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Attributes: List<DataPipelinePipelineParameterAttribute>;
  /**
   * The ID of the parameter object.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `256`
   *
   * _Pattern_: `[u0020-uD7FFuE000-uFFFDuD800uDC00-uDBFFuDFFFrnt]*`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Id: Value<string>;
}

/**
 * A value or list of parameter values.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datapipeline-pipeline-parametervalue.html}
 **/
export interface DataPipelinePipelineParameterValue {
  /**
   * The ID of the parameter value.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `256`
   *
   * _Pattern_: `[u0020-uD7FFuE000-uFFFDuD800uDC00-uDBFFuDFFFrnt]*`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Id: Value<string>;
  /**
   * The field value, expressed as a String.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `0`
   *
   * _Maximum_: `10240`
   *
   * _Pattern_: `[u0020-uD7FFuE000-uFFFDuD800uDC00-uDBFFuDFFFrnt]*`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  StringValue: Value<string>;
}

/**
 * A key-value pair that describes a property of a `PipelineObject`. The value is specified as either a string value (`StringValue`) or a reference to another object (`RefValue`) but not as both. To view fields for a data pipeline object, see [Pipeline Object Reference](https://docs.aws.amazon.com/datapipeline/latest/DeveloperGuide/dp-pipeline-objects.html) in the _AWS Data Pipeline Developer Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-datapipeline-pipeline-field.html}
 **/
export interface DataPipelinePipelineField {
  /**
   * A field value that you specify as an identifier of another object in the same pipeline definition.
   *
   * You can specify the field value as either a string value (`StringValue`) or a reference to another object (`RefValue`), but not both.
   *
   * Required if the key that you are using requires it.
   *
   * _Required_: Conditional
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `256`
   *
   * _Pattern_: `[u0020-uD7FFuE000-uFFFDuD800uDC00-uDBFFuDFFFrnt]*`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RefValue?: Value<string>;
  /**
   * A field value that you specify as a string. To view valid values for a particular field, see [Pipeline Object Reference](https://docs.aws.amazon.com/datapipeline/latest/DeveloperGuide/dp-pipeline-objects.html) in the _AWS Data Pipeline Developer Guide_.
   *
   * You can specify the field value as either a string value (`StringValue`) or a reference to another object (`RefValue`), but not both.
   *
   * Required if the key that you are using requires it.
   *
   * _Required_: Conditional
   *
   * _Type_: String
   *
   * _Minimum_: `0`
   *
   * _Maximum_: `10240`
   *
   * _Pattern_: `[u0020-uD7FFuE000-uFFFDuD800uDC00-uDBFFuDFFFrnt]*`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  StringValue?: Value<string>;
  /**
   * Specifies the name of a field for a particular object. To view valid values for a particular field, see [Pipeline Object Reference](https://docs.aws.amazon.com/datapipeline/latest/DeveloperGuide/dp-pipeline-objects.html) in the _AWS Data Pipeline Developer Guide_.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `256`
   *
   * _Pattern_: `[u0020-uD7FFuE000-uFFFDuD800uDC00-uDBFFuDFFFrnt]*`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Key: Value<string>;
}
export interface DataPipelinePipelineProperties {
  /**
   * A list of arbitrary tags (key-value pairs) to associate with the pipeline, which you can use to control permissions. For more information, see [Controlling Access to Pipelines and Resources](https://docs.aws.amazon.com/datapipeline/latest/DeveloperGuide/dp-control-access.html) in the _AWS Data Pipeline Developer Guide_.
   *
   * _Required_: No
   *
   * _Type_: List of [PipelineTag](aws-properties-datapipeline-pipeline-pipelinetag.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PipelineTags?: List<DataPipelinePipelinePipelineTag>;
  /**
   * The parameter objects used with the pipeline.
   *
   * _Required_: No
   *
   * _Type_: List of [ParameterObject](aws-properties-datapipeline-pipeline-parameterobject.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ParameterObjects?: List<DataPipelinePipelineParameterObject>;
  /**
   * A description of the pipeline.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `0`
   *
   * _Maximum_: `1024`
   *
   * _Pattern_: `[u0020-uD7FFuE000-uFFFDuD800uDC00-uDBFFuDFFFrnt]*`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Description?: Value<string>;
  /**
   * Indicates whether to validate and start the pipeline or stop an active pipeline. By default, the value is set to `true`.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Activate?: Value<boolean>;
  /**
   * The objects that define the pipeline. These objects overwrite the existing pipeline definition. Not all objects, fields, and values can be updated. For information about restrictions, see [Editing Your Pipeline](https://docs.aws.amazon.com/datapipeline/latest/DeveloperGuide/dp-manage-pipeline-modify-console.html) in the _AWS Data Pipeline Developer Guide_.
   *
   * _Required_: No
   *
   * _Type_: List of [PipelineObject](aws-properties-datapipeline-pipeline-pipelineobject.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PipelineObjects?: List<DataPipelinePipelinePipelineObject>;
  /**
   * The parameter values used with the pipeline.
   *
   * _Required_: No
   *
   * _Type_: List of [ParameterValue](aws-properties-datapipeline-pipeline-parametervalue.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ParameterValues?: List<DataPipelinePipelineParameterValue>;
  /**
   * The name of the pipeline.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `1024`
   *
   * _Pattern_: `[u0020-uD7FFuE000-uFFFDuD800uDC00-uDBFFuDFFFnt]*`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Name: Value<string>;
}

/**
 * The AWS::DataPipeline::Pipeline resource specifies a data pipeline that you can use to automate the movement and transformation of data. In each pipeline, you define pipeline objects, such as activities, schedules, data nodes, and resources. For information about pipeline objects and components that you can use, see [Pipeline Object Reference](https://docs.aws.amazon.com/datapipeline/latest/DeveloperGuide/dp-pipeline-objects.html) in the _AWS Data Pipeline Developer Guide_.
 *
 * The `AWS::DataPipeline::Pipeline` resource adds tasks, schedules, and preconditions to the specified pipeline. You can use `PutPipelineDefinition` to populate a new pipeline.
 *
 * `PutPipelineDefinition` also validates the configuration as it adds it to the pipeline. Changes to the pipeline are saved unless one of the following validation errors exist in the pipeline.
 *
 * Pipeline object definitions are passed to the [PutPipelineDefinition](https://docs.aws.amazon.com/datapipeline/latest/APIReference/API_PutPipelineDefinition.html) action and returned by the [GetPipelineDefinition](https://docs.aws.amazon.com/datapipeline/latest/APIReference/API_GetPipelineDefinition.html) action.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datapipeline-pipeline.html}
 */
export interface DataPipelinePipelineResource {
  Type: 'AWS::DataPipeline::Pipeline';
  Properties: DataPipelinePipelineProperties;
}
