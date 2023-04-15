/**
 * Supported regions:
 * - ap-northeast-1 (version 119.1.0)
 * - ap-northeast-2 (version 119.1.0)
 * - ap-south-1 (version 119.1.0)
 * - ap-southeast-1 (version 119.1.0)
 * - ap-southeast-2 (version 119.1.0)
 * - ca-central-1 (version 119.1.0)
 * - eu-central-1 (version 119.1.0)
 * - eu-west-2 (version 119.1.0)
 * - us-east-1 (version 119.1.0)
 * - us-west-2 (version 119.1.0)
 */
import { List, Value } from '../../shared-types/dataTypes';
import { ResourceTag } from '../../shared-types/resource';

/**
 * Describes a default field and its corresponding value.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-tasktemplate-defaultfieldvalue.html}
 **/
export interface ConnectTaskTemplateDefaultFieldValue {
  /**
   * Default value for the field.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DefaultValue: Value<string>;
  /**
   * Identifier of a field.
   *
   * _Required_: Yes
   *
   * _Type_: [FieldIdentifier](aws-properties-connect-tasktemplate-fieldidentifier.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Id: ConnectTaskTemplateFieldIdentifier;
}

/**
 * The identifier of the task template field.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-tasktemplate-fieldidentifier.html}
 **/
export interface ConnectTaskTemplateFieldIdentifier {
  /**
   * The name of the task template field.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Name: Value<string>;
}

/**
 * Information about a required field.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-tasktemplate-requiredfieldinfo.html}
 **/
export interface ConnectTaskTemplateRequiredFieldInfo {
  /**
   * The unique identifier for the field.
   *
   * _Required_: Yes
   *
   * _Type_: [FieldIdentifier](aws-properties-connect-tasktemplate-fieldidentifier.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Id: ConnectTaskTemplateFieldIdentifier;
}

/**
 * Describes a single task template field.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-tasktemplate-field.html}
 **/
export interface ConnectTaskTemplateField {
  /**
   * Indicates the type of field. Following are the valid field types: `NAME` `DESCRIPTION` | `SCHEDULED_TIME` | `QUICK_CONNECT` | `URL` | `NUMBER` | `TEXT` | `TEXT_AREA` | `DATE_TIME` | `BOOLEAN` | `SINGLE_SELECT` | `EMAIL`
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Type: Value<string>;
  /**
   * The description of the field.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Description?: Value<string>;
  /**
   * The unique identifier for the field.
   *
   * _Required_: Yes
   *
   * _Type_: [FieldIdentifier](aws-properties-connect-tasktemplate-fieldidentifier.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Id: ConnectTaskTemplateFieldIdentifier;
  /**
   * A list of options for a single select field.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SingleSelectOptions?: List<Value<string>>;
}

/**
 * The `Constraints` property type specifies Property description not available. for an [AWS::Connect::TaskTemplate](aws-resource-connect-tasktemplate.md).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-tasktemplate-constraints.html}
 **/
export interface ConnectTaskTemplateConstraints {
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: List of [ReadOnlyFieldInfo](aws-properties-connect-tasktemplate-readonlyfieldinfo.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ReadOnlyFields?: List<ConnectTaskTemplateReadOnlyFieldInfo>;
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: List of [InvisibleFieldInfo](aws-properties-connect-tasktemplate-invisiblefieldinfo.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  InvisibleFields?: List<ConnectTaskTemplateInvisibleFieldInfo>;
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: List of [RequiredFieldInfo](aws-properties-connect-tasktemplate-requiredfieldinfo.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RequiredFields?: List<ConnectTaskTemplateRequiredFieldInfo>;
}

/**
 * A field that is invisible to an agent.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-tasktemplate-invisiblefieldinfo.html}
 **/
export interface ConnectTaskTemplateInvisibleFieldInfo {
  /**
   * Identifier of the invisible field.
   *
   * _Required_: Yes
   *
   * _Type_: [FieldIdentifier](aws-properties-connect-tasktemplate-fieldidentifier.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Id: ConnectTaskTemplateFieldIdentifier;
}

/**
 * Indicates a field that is read-only to an agent.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connect-tasktemplate-readonlyfieldinfo.html}
 **/
export interface ConnectTaskTemplateReadOnlyFieldInfo {
  /**
   * Identifier of the read-only field.
   *
   * _Required_: Yes
   *
   * _Type_: [FieldIdentifier](aws-properties-connect-tasktemplate-fieldidentifier.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Id: ConnectTaskTemplateFieldIdentifier;
}
export interface ConnectTaskTemplateProperties {
  /**
   * The status of the task template.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Status?: Value<string>;
  /**
   * The description of the task template.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Description?: Value<string>;
  /**
   * Constraints that are applicable to the fields listed.
   *
   * The values can be represented in either JSON or YAML format. For an example of the JSON configuration, see _Examples_ at the bottom of this page.
   *
   * _Required_: No
   *
   * _Type_: [Constraints](aws-properties-connect-tasktemplate-constraints.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Constraints?: ConnectTaskTemplateConstraints;
  /**
   * The default values for fields when a task is created by referencing this template.
   *
   * _Required_: No
   *
   * _Type_: List of [DefaultFieldValue](aws-properties-connect-tasktemplate-defaultfieldvalue.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Defaults?: List<ConnectTaskTemplateDefaultFieldValue>;
  /**
   * Fields that are part of the template. A template requires at least one field that has type `Name`.
   *
   * _Required_: No
   *
   * _Type_: List of [Field](aws-properties-connect-tasktemplate-field.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Fields?: List<ConnectTaskTemplateField>;
  /**
   * The Amazon Resource Name (ARN) of the Amazon Connect instance.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  InstanceArn: Value<string>;
  /**
   * The Amazon Resource Name (ARN) of the flow that runs by default when a task is created by referencing this template. `ContactFlowArn` is not required when there is a field with `fieldType` = `QUICK_CONNECT`.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ContactFlowArn?: Value<string>;
  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ClientToken?: Value<string>;
  /**
   * The tags used to organize, track, or control access for this resource.
   *
   * _Required_: No
   *
   * _Type_: List of [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Tags?: List<ResourceTag>;
  /**
   * The name of the task template.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Name?: Value<string>;
}

/**
 * Specifies a task template for a Amazon Connect instance.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-tasktemplate.html}
 */
export interface ConnectTaskTemplateResource {
  Type: 'AWS::Connect::TaskTemplate';
  Properties: ConnectTaskTemplateProperties;
}
