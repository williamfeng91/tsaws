/**
 * Supported regions:
 * - ap-southeast-1 (version 119.1.0)
 * - ap-southeast-2 (version 119.1.0)
 * - eu-central-1 (version 119.1.0)
 * - eu-west-1 (version 119.1.0)
 * - us-east-1 (version 119.1.0)
 * - us-west-2 (version 119.1.0)
 */
import { List, Value } from '../../shared-types/dataTypes';
import { ResourceTag } from '../../shared-types/resource';

/**
 * PropertyDefinition is an object that maps strings to the property definitions in the component type.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iottwinmaker-componenttype-propertydefinition.html}
 **/
export interface IoTTwinMakerComponentTypePropertyDefinition {
  /**
   * A boolean value that specifies whether the property ID comes from an external data store.
   *
   * _Required_: No
   *
   * _Type_: [DataValue](aws-properties-iottwinmaker-componenttype-datavalue.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DefaultValue?: IoTTwinMakerComponentTypeDataValue;
  /**
   * A boolean value that specifies whether the property ID comes from an external data store.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  IsExternalId?: Value<boolean>;
  /**
   * A boolean value that specifies whether the property is stored externally.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  IsStoredExternally?: Value<boolean>;
  /**
   * A boolean value that specifies whether the property consists of time series data.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  IsTimeSeries?: Value<boolean>;
  /**
   * A boolean value that specifies whether the property is required in an entity.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  IsRequiredInEntity?: Value<boolean>;
  /**
   * _Required_: No
   *
   * _Type_: [DataType](aws-properties-iottwinmaker-componenttype-datatype.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DataType?: IoTTwinMakerComponentTypeDataType;
  /**
   * A mapping that specifies configuration information about the property.
   *
   * _Required_: No
   *
   * _Type_: Map of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Configurations?: { [key: string]: Value<string> };
}

/**
 * An object that specifies the data type of a property.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iottwinmaker-componenttype-datatype.html}
 **/
export interface IoTTwinMakerComponentTypeDataType {
  /**
   * The underlying type of the data type.
   *
   * Valid Values: `RELATIONSHIP | STRING | LONG | BOOLEAN | INTEGER | DOUBLE | LIST | MAP`
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Type: Value<string>;
  /**
   * The allowed values for this data type.
   *
   * _Required_: No
   *
   * _Type_: List of [DataValue](aws-properties-iottwinmaker-componenttype-datavalue.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AllowedValues?: List<IoTTwinMakerComponentTypeDataValue>;
  /**
   * The unit of measure used in this data type.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  UnitOfMeasure?: Value<string>;
  /**
   * A relationship that associates a component with another component.
   *
   * _Required_: No
   *
   * _Type_: [Relationship](aws-properties-iottwinmaker-componenttype-relationship.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Relationship?: IoTTwinMakerComponentTypeRelationship;
  /**
   * The nested type in the data type.
   *
   * _Required_: No
   *
   * _Type_: [DataType](#aws-properties-iottwinmaker-componenttype-datatype)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  NestedType?: IoTTwinMakerComponentTypeDataType;
}

/**
 * An object that specifies a relationship with another component type.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iottwinmaker-componenttype-relationship.html}
 **/
export interface IoTTwinMakerComponentTypeRelationship {
  /**
   * The type of the relationship.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RelationshipType?: Value<string>;
  /**
   * The ID of the target component type associated with this relationship.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TargetComponentTypeId?: Value<string>;
}

/**
 * The `RelationshipValue` property type specifies Property description not available. for an [AWS::IoTTwinMaker::ComponentType](aws-resource-iottwinmaker-componenttype.md).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iottwinmaker-componenttype-relationshipvalue.html}
 **/
export interface IoTTwinMakerComponentTypeRelationshipValue {
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TargetComponentName?: Value<string>;
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TargetEntityId?: Value<string>;
}

/**
 * An object that specifies a value for a property.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iottwinmaker-componenttype-datavalue.html}
 **/
export interface IoTTwinMakerComponentTypeDataValue {
  /**
   * A double value.
   *
   * _Required_: No
   *
   * _Type_: Double
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DoubleValue?: Value<number>;
  /**
   * An expression that produces the value.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Expression?: Value<string>;
  /**
   * A boolean value.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  BooleanValue?: Value<boolean>;
  /**
   * An integer value.
   *
   * _Required_: No
   *
   * _Type_: Integer
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  IntegerValue?: Value<number>;
  /**
   * A list of multiple values.
   *
   * _Required_: No
   *
   * _Type_: List of [DataValue](#aws-properties-iottwinmaker-componenttype-datavalue)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ListValue?: List<IoTTwinMakerComponentTypeDataValue>;
  /**
   * A long value.
   *
   * _Required_: No
   *
   * _Type_: Double
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  LongValue?: Value<number>;
  /**
   * An object that maps strings to multiple `DataValue` objects.
   *
   * _Required_: No
   *
   * _Type_: Map of [DataValue](#aws-properties-iottwinmaker-componenttype-datavalue)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MapValue?: { [key: string]: IoTTwinMakerComponentTypeDataValue };
  /**
   * A value that relates a component to another component.
   *
   * _Required_: No
   *
   * _Type_: [RelationshipValue](aws-properties-iottwinmaker-componenttype-relationshipvalue.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RelationshipValue?: IoTTwinMakerComponentTypeRelationshipValue;
  /**
   * A string value.
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
 * The `Status` property type specifies Property description not available. for an [AWS::IoTTwinMaker::ComponentType](aws-resource-iottwinmaker-componenttype.md).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iottwinmaker-componenttype-status.html}
 **/
export interface IoTTwinMakerComponentTypeStatus {
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  State?: Value<string>;
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: [Error](aws-properties-iottwinmaker-componenttype-error.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Error?: IoTTwinMakerComponentTypeError;
}

/**
 * The data connector.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iottwinmaker-componenttype-dataconnector.html}
 **/
export interface IoTTwinMakerComponentTypeDataConnector {
  /**
   * A boolean value that specifies whether the data connector is native to IoT TwinMaker.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  IsNative?: Value<boolean>;
  /**
   * The Lambda function associated with the data connector.
   *
   * _Required_: No
   *
   * _Type_: [LambdaFunction](aws-properties-iottwinmaker-componenttype-lambdafunction.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Lambda?: IoTTwinMakerComponentTypeLambdaFunction;
}

/**
 * The property group.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iottwinmaker-componenttype-propertygroup.html}
 **/
export interface IoTTwinMakerComponentTypePropertyGroup {
  /**
   * The group type.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  GroupType?: Value<string>;
  /**
   * The property names.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PropertyNames?: List<Value<string>>;
}

/**
 * The `Error` property type specifies Property description not available. for an [AWS::IoTTwinMaker::ComponentType](aws-resource-iottwinmaker-componenttype.md).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iottwinmaker-componenttype-error.html}
 **/
export interface IoTTwinMakerComponentTypeError {
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Message?: Value<string>;
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Code?: Value<string>;
}

/**
 * The Lambda function.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iottwinmaker-componenttype-lambdafunction.html}
 **/
export interface IoTTwinMakerComponentTypeLambdaFunction {
  /**
   * The Lambda function ARN.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Arn: Value<string>;
}

/**
 * The function body.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iottwinmaker-componenttype-function.html}
 **/
export interface IoTTwinMakerComponentTypeFunction {
  /**
   * The scope of the function.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Scope?: Value<string>;
  /**
   * The required properties of the function.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RequiredProperties?: List<Value<string>>;
  /**
   * The data connector.
   *
   * _Required_: No
   *
   * _Type_: [DataConnector](aws-properties-iottwinmaker-componenttype-dataconnector.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ImplementedBy?: IoTTwinMakerComponentTypeDataConnector;
}
export interface IoTTwinMakerComponentTypeProperties {
  /**
   * The name of the parent component type that this component type extends.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ExtendsFrom?: List<Value<string>>;
  /**
   * The description of the component type.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Description?: Value<string>;
  /**
   * A boolean value that specifies whether an entity can have more than one component of this type.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  IsSingleton?: Value<boolean>;
  /**
   * An object that maps strings to the property definitions in the component type. Each string in the mapping must be unique to this object.
   *
   * For information about the PropertyDefinitionResponse object, see the [PropertyDefinitionResponse](https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_PropertyDefinitionResponse.html) API reference.
   *
   * _Required_: No
   *
   * _Type_: Map of [PropertyDefinition](aws-properties-iottwinmaker-componenttype-propertydefinition.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PropertyDefinitions?: { [key: string]: IoTTwinMakerComponentTypePropertyDefinition };
  /**
   * An object that maps strings to the property groups in the component type. Each string in the mapping must be unique to this object.
   *
   * _Required_: No
   *
   * _Type_: Map of [PropertyGroup](aws-properties-iottwinmaker-componenttype-propertygroup.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PropertyGroups?: { [key: string]: IoTTwinMakerComponentTypePropertyGroup };
  /**
   * The ID of the workspace.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  WorkspaceId: Value<string>;
  /**
   * The ID of the component type.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ComponentTypeId: Value<string>;
  /**
   * An object that maps strings to the functions in the component type. Each string in the mapping must be unique to this object.
   *
   * For information on the FunctionResponse object see the [FunctionResponse](https://docs.aws.amazon.com/iot-twinmaker/latest/apireference/API_FunctionResponse.html) API reference.
   *
   * _Required_: No
   *
   * _Type_: Map of [Function](aws-properties-iottwinmaker-componenttype-function.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Functions?: { [key: string]: IoTTwinMakerComponentTypeFunction };
  /**
   * The ComponentType tags.
   *
   * _Required_: No
   *
   * _Type_: Map of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Tags?: { [key: string]: Value<string> };
}

/**
 * Use the `AWS::IoTTwinMaker::ComponentType` resource to declare a component type.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iottwinmaker-componenttype.html}
 */
export interface IoTTwinMakerComponentTypeResource {
  Type: 'AWS::IoTTwinMaker::ComponentType';
  Properties: IoTTwinMakerComponentTypeProperties;
}
