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
import { ResourceTag } from '../../shared-types/resource';

/**
 * The `ComponentBindingPropertiesValueProperties` property specifies the data binding configuration for a specific property using data stored in AWS. For AWS connected properties, you can bind a property to data stored in an Amazon S3 bucket, an Amplify DataStore model or an authenticated user attribute.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-component-componentbindingpropertiesvalueproperties.html}
 **/
export interface AmplifyUIBuilderComponentComponentBindingPropertiesValueProperties {
  /**
   * The field to bind the data to.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Field?: Value<string>;
  /**
   * The default value to assign to the property.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DefaultValue?: Value<string>;
  /**
   * An Amazon S3 bucket.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Bucket?: Value<string>;
  /**
   * An authenticated user attribute.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  UserAttribute?: Value<string>;
  /**
   * An Amplify DataStore model.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Model?: Value<string>;
  /**
   * A list of predicates for binding a component's properties to data.
   *
   * _Required_: No
   *
   * _Type_: List of [Predicate](aws-properties-amplifyuibuilder-component-predicate.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Predicates?: List<AmplifyUIBuilderComponentPredicate>;
  /**
   * The storage key for an Amazon S3 bucket.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Key?: Value<string>;
}

/**
 * The `ComponentDataConfiguration` property specifies the configuration for binding a component's properties to data.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-component-componentdataconfiguration.html}
 **/
export interface AmplifyUIBuilderComponentComponentDataConfiguration {
  /**
   * The name of the data model to use to bind data to a component.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Model: Value<string>;
  /**
   * Describes how to sort the component's properties.
   *
   * _Required_: No
   *
   * _Type_: List of [SortProperty](aws-properties-amplifyuibuilder-component-sortproperty.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Sort?: List<AmplifyUIBuilderComponentSortProperty>;
  /**
   * A list of IDs to use to bind data to a component. Use this property to bind specifically chosen data, rather than data retrieved from a query.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Identifiers?: List<Value<string>>;
  /**
   * Represents the conditional logic to use when binding data to a component. Use this property to retrieve only a subset of the data in a collection.
   *
   * _Required_: No
   *
   * _Type_: [Predicate](aws-properties-amplifyuibuilder-component-predicate.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Predicate?: AmplifyUIBuilderComponentPredicate;
}

/**
 * Describes how to bind a component property to form data.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-component-formbindingelement.html}
 **/
export interface AmplifyUIBuilderComponentFormBindingElement {
  /**
   * The name of the component to retrieve a value from.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Element: Value<string>;
  /**
   * The property to retrieve a value from.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Property: Value<string>;
}

/**
 * The `ComponentConditionProperty` property specifies a conditional expression for setting a component property. Use `ComponentConditionProperty` to set a property to different values conditionally, based on the value of another property.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-component-componentconditionproperty.html}
 **/
export interface AmplifyUIBuilderComponentComponentConditionProperty {
  /**
   * The operator to use to perform the evaluation, such as `eq` to represent equals.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Operator?: Value<string>;
  /**
   * The name of a field. Specify this when the property is a data model.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Field?: Value<string>;
  /**
   * The value of the property to evaluate.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Operand?: Value<string>;
  /**
   * The type of the property to evaluate.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  OperandType?: Value<string>;
  /**
   * The value to assign to the property if the condition is not met.
   *
   * _Required_: No
   *
   * _Type_: [ComponentProperty](aws-properties-amplifyuibuilder-component-componentproperty.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Else?: AmplifyUIBuilderComponentComponentProperty;
  /**
   * The value to assign to the property if the condition is met.
   *
   * _Required_: No
   *
   * _Type_: [ComponentProperty](aws-properties-amplifyuibuilder-component-componentproperty.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Then?: AmplifyUIBuilderComponentComponentProperty;
  /**
   * The name of the conditional property.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Property?: Value<string>;
}

/**
 * The `ComponentVariant` property specifies the style configuration of a unique variation of a main component.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-component-componentvariant.html}
 **/
export interface AmplifyUIBuilderComponentComponentVariant {
  /**
   * The combination of variants that comprise this variant.
   *
   * _Required_: No
   *
   * _Type_: Map of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  VariantValues?: { [key: string]: Value<string> };
  /**
   * The properties of the component variant that can be overriden when customizing an instance of the component. You can't specify `tags` as a valid property for `overrides`.
   *
   * _Required_: No
   *
   * _Type_: Json
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Overrides?: { [key: string]: any };
}

/**
 * The `ComponentProperty` property specifies the configuration for all of a component's properties. Use `ComponentProperty` to specify the values to render or bind by default.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-component-componentproperty.html}
 **/
export interface AmplifyUIBuilderComponentComponentProperty {
  /**
   * The conditional expression to use to assign a value to the component property.
   *
   * _Required_: No
   *
   * _Type_: [ComponentConditionProperty](aws-properties-amplifyuibuilder-component-componentconditionproperty.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Condition?: AmplifyUIBuilderComponentComponentConditionProperty;
  /**
   * An authenticated user attribute to use to assign a value to the component property.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  UserAttribute?: Value<string>;
  /**
   * The default value assigned to the property when the component is imported into an app.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ImportedValue?: Value<string>;
  /**
   * The information to bind the component property to data at runtime.
   *
   * _Required_: No
   *
   * _Type_: [ComponentPropertyBindingProperties](aws-properties-amplifyuibuilder-component-componentpropertybindingproperties.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  BindingProperties?: AmplifyUIBuilderComponentComponentPropertyBindingProperties;
  /**
   * The information to bind the component property to form data.
   *
   * _Required_: No
   *
   * _Type_: Map of [FormBindingElement](aws-properties-amplifyuibuilder-component-formbindingelement.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Bindings?: { [key: string]: AmplifyUIBuilderComponentFormBindingElement };
  /**
   * Specifies whether the user configured the property in Amplify Studio after importing it.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Configured?: Value<boolean>;
  /**
   * A list of component properties to concatenate to create the value to assign to this component property.
   *
   * _Required_: No
   *
   * _Type_: List of [ComponentProperty](#aws-properties-amplifyuibuilder-component-componentproperty)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Concat?: List<AmplifyUIBuilderComponentComponentProperty>;
  /**
   * The default value to assign to the component property.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DefaultValue?: Value<string>;
  /**
   * The component type.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Type?: Value<string>;
  /**
   * The value to assign to the component property.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Value?: Value<string>;
  /**
   * The data model to use to assign a value to the component property.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Model?: Value<string>;
  /**
   * The information to bind the component property to data at runtime. Use this for collection components.
   *
   * _Required_: No
   *
   * _Type_: [ComponentPropertyBindingProperties](aws-properties-amplifyuibuilder-component-componentpropertybindingproperties.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CollectionBindingProperties?: AmplifyUIBuilderComponentComponentPropertyBindingProperties;
  /**
   * An event that occurs in your app. Use this for workflow data binding.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Event?: Value<string>;
  /**
   * The name of the component that is affected by an event.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ComponentName?: Value<string>;
  /**
   * The name of the component's property that is affected by an event.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Property?: Value<string>;
}

/**
 * The `Predicate` property specifies information for generating Amplify DataStore queries. Use `Predicate` to retrieve a subset of the data in a collection.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-component-predicate.html}
 **/
export interface AmplifyUIBuilderComponentPredicate {
  /**
   * The operator to use to perform the evaluation.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Operator?: Value<string>;
  /**
   * The field to query.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Field?: Value<string>;
  /**
   * A list of predicates to combine logically.
   *
   * _Required_: No
   *
   * _Type_: List of [Predicate](#aws-properties-amplifyuibuilder-component-predicate)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Or?: List<AmplifyUIBuilderComponentPredicate>;
  /**
   * A list of predicates to combine logically.
   *
   * _Required_: No
   *
   * _Type_: List of [Predicate](#aws-properties-amplifyuibuilder-component-predicate)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  And?: List<AmplifyUIBuilderComponentPredicate>;
  /**
   * The value to use when performing the evaluation.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Operand?: Value<string>;
}

/**
 * The `SortProperty` property specifies how to sort the data that you bind to a component.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-component-sortproperty.html}
 **/
export interface AmplifyUIBuilderComponentSortProperty {
  /**
   * The field to perform the sort on.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Field: Value<string>;
  /**
   * The direction of the sort, either ascending or descending.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Direction: Value<string>;
}

/**
 * The `ActionParameters` property specifies the event action configuration for an element of a `Component` or `ComponentChild`. Use for the workflow feature in Amplify Studio that allows you to bind events and actions to components. `ActionParameters` defines the action that is performed when an event occurs on the component.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-component-actionparameters.html}
 **/
export interface AmplifyUIBuilderComponentActionParameters {
  /**
   * The type of navigation action. Valid values are `url` and `anchor`. This value is required for a navigation action.
   *
   * _Required_: No
   *
   * _Type_: [ComponentProperty](aws-properties-amplifyuibuilder-component-componentproperty.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Type?: AmplifyUIBuilderComponentComponentProperty;
  /**
   * The HTML anchor link to the location to open. Specify this value for a navigation action.
   *
   * _Required_: No
   *
   * _Type_: [ComponentProperty](aws-properties-amplifyuibuilder-component-componentproperty.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Anchor?: AmplifyUIBuilderComponentComponentProperty;
  /**
   * The element within the same component to modify when the action occurs.
   *
   * _Required_: No
   *
   * _Type_: [ComponentProperty](aws-properties-amplifyuibuilder-component-componentproperty.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Target?: AmplifyUIBuilderComponentComponentProperty;
  /**
   * A dictionary of key-value pairs mapping Amplify Studio properties to fields in a data model. Use when the action performs an operation on an Amplify DataStore model.
   *
   * _Required_: No
   *
   * _Type_: Map of [ComponentProperty](aws-properties-amplifyuibuilder-component-componentproperty.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Fields?: { [key: string]: AmplifyUIBuilderComponentComponentProperty };
  /**
   * A key-value pair that specifies the state property name and its initial value.
   *
   * _Required_: No
   *
   * _Type_: [MutationActionSetStateParameter](aws-properties-amplifyuibuilder-component-mutationactionsetstateparameter.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  State?: AmplifyUIBuilderComponentMutationActionSetStateParameter;
  /**
   * The name of the data model. Use when the action performs an operation on an Amplify DataStore model.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Model?: Value<string>;
  /**
   * The unique ID of the component that the `ActionParameters` apply to.
   *
   * _Required_: No
   *
   * _Type_: [ComponentProperty](aws-properties-amplifyuibuilder-component-componentproperty.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Id?: AmplifyUIBuilderComponentComponentProperty;
  /**
   * The URL to the location to open. Specify this value for a navigation action.
   *
   * _Required_: No
   *
   * _Type_: [ComponentProperty](aws-properties-amplifyuibuilder-component-componentproperty.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Url?: AmplifyUIBuilderComponentComponentProperty;
  /**
   * Specifies whether the user should be signed out globally. Specify this value for an auth sign out action.
   *
   * _Required_: No
   *
   * _Type_: [ComponentProperty](aws-properties-amplifyuibuilder-component-componentproperty.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Global?: AmplifyUIBuilderComponentComponentProperty;
}

/**
 * The `ComponentChild` property specifies a nested UI configuration within a parent `Component`.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-component-componentchild.html}
 **/
export interface AmplifyUIBuilderComponentComponentChild {
  /**
   * The type of the child component.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ComponentType: Value<string>;
  /**
   * Describes the events that can be raised on the child component. Use for the workflow feature in Amplify Studio that allows you to bind events and actions to components.
   *
   * _Required_: No
   *
   * _Type_: Map of [ComponentEvent](aws-properties-amplifyuibuilder-component-componentevent.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Events?: { [key: string]: AmplifyUIBuilderComponentComponentEvent };
  /**
   * The list of `ComponentChild` instances for this component.
   *
   * _Required_: No
   *
   * _Type_: List of [ComponentChild](#aws-properties-amplifyuibuilder-component-componentchild)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Children?: List<AmplifyUIBuilderComponentComponentChild>;
  /**
   * Describes the properties of the child component. You can't specify `tags` as a valid property for `properties`.
   *
   * _Required_: Yes
   *
   * _Type_: Map of [ComponentProperty](aws-properties-amplifyuibuilder-component-componentproperty.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Properties: { [key: string]: AmplifyUIBuilderComponentComponentProperty };
  /**
   * The name of the child component.
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
 * The `ComponentBindingPropertiesValue` property specifies the data binding configuration for a component at runtime. You can use `ComponentBindingPropertiesValue` to add exposed properties to a component to allow different values to be entered when a component is reused in different places in an app.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-component-componentbindingpropertiesvalue.html}
 **/
export interface AmplifyUIBuilderComponentComponentBindingPropertiesValue {
  /**
   * The default value of the property.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DefaultValue?: Value<string>;
  /**
   * The property type.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Type?: Value<string>;
  /**
   * Describes the properties to customize with data at runtime.
   *
   * _Required_: No
   *
   * _Type_: [ComponentBindingPropertiesValueProperties](aws-properties-amplifyuibuilder-component-componentbindingpropertiesvalueproperties.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  BindingProperties?: AmplifyUIBuilderComponentComponentBindingPropertiesValueProperties;
}

/**
 * The `MutationActionSetStateParameter` property specifies the state configuration when an action modifies a property of another element within the same component.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-component-mutationactionsetstateparameter.html}
 **/
export interface AmplifyUIBuilderComponentMutationActionSetStateParameter {
  /**
   * The state configuration to assign to the property.
   *
   * _Required_: Yes
   *
   * _Type_: [ComponentProperty](aws-properties-amplifyuibuilder-component-componentproperty.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Set: AmplifyUIBuilderComponentComponentProperty;
  /**
   * The name of the component that is being modified.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ComponentName: Value<string>;
  /**
   * The name of the component property to apply the state configuration to.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Property: Value<string>;
}

/**
 * The `ComponentEvent` property specifies the configuration of an event. You can bind an event and a corresponding action to a `Component` or a `ComponentChild`. A button click is an example of an event.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-component-componentevent.html}
 **/
export interface AmplifyUIBuilderComponentComponentEvent {
  /**
   * The action to perform when a specific event is raised.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Action?: Value<string>;
  /**
   * Describes information about the action.
   *
   * _Required_: No
   *
   * _Type_: [ActionParameters](aws-properties-amplifyuibuilder-component-actionparameters.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Parameters?: AmplifyUIBuilderComponentActionParameters;
}

/**
 * The `ComponentPropertyBindingProperties` property specifies a component property to associate with a binding property. This enables exposed properties on the top level component to propagate data to the component's property values.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-component-componentpropertybindingproperties.html}
 **/
export interface AmplifyUIBuilderComponentComponentPropertyBindingProperties {
  /**
   * The data field to bind the property to.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Field?: Value<string>;
  /**
   * The component property to bind to the data field.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Property: Value<string>;
}
export interface AmplifyUIBuilderComponentProperties {
  /**
   * The type of the component. This can be an Amplify custom UI component or another custom component.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ComponentType: Value<string>;
  /**
   * The schema version of the component when it was imported.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SchemaVersion?: Value<string>;
  /**
   * The name of the backend environment that is a part of the Amplify app.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  EnvironmentName?: Value<string>;
  /**
   * The information to connect a component's properties to data at runtime. You can't specify `tags` as a valid property for `bindingProperties`.
   *
   * _Required_: Yes
   *
   * _Type_: Map of [ComponentBindingPropertiesValue](aws-properties-amplifyuibuilder-component-componentbindingpropertiesvalue.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  BindingProperties: { [key: string]: AmplifyUIBuilderComponentComponentBindingPropertiesValue };
  /**
   * The unique ID of the component in its original source system, such as Figma.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SourceId?: Value<string>;
  /**
   * Describes the component's properties. You can't specify `tags` as a valid property for `properties`.
   *
   * _Required_: Yes
   *
   * _Type_: Map of [ComponentProperty](aws-properties-amplifyuibuilder-component-componentproperty.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Properties: { [key: string]: AmplifyUIBuilderComponentComponentProperty };
  /**
   * The data binding configuration for the component's properties. Use this for a collection component. You can't specify `tags` as a valid property for `collectionProperties`.
   *
   * _Required_: No
   *
   * _Type_: Map of [ComponentDataConfiguration](aws-properties-amplifyuibuilder-component-componentdataconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CollectionProperties?: { [key: string]: AmplifyUIBuilderComponentComponentDataConfiguration };
  /**
   * The name of the component.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Name: Value<string>;
  /**
   * A list of the component's variants. A variant is a unique style configuration of a main component.
   *
   * _Required_: Yes
   *
   * _Type_: List of [ComponentVariant](aws-properties-amplifyuibuilder-component-componentvariant.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Variants: List<AmplifyUIBuilderComponentComponentVariant>;
  /**
   * The unique ID of the Amplify app associated with the component.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AppId?: Value<string>;
  /**
   * Describes the events that can be raised on the component. Use for the workflow feature in Amplify Studio that allows you to bind events and actions to components.
   *
   * _Required_: No
   *
   * _Type_: Map of [ComponentEvent](aws-properties-amplifyuibuilder-component-componentevent.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Events?: { [key: string]: AmplifyUIBuilderComponentComponentEvent };
  /**
   * Describes the component's properties that can be overriden in a customized instance of the component. You can't specify `tags` as a valid property for `overrides`.
   *
   * _Required_: Yes
   *
   * _Type_: Json
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Overrides: { [key: string]: any };
  /**
   * A list of the component's `ComponentChild` instances.
   *
   * _Required_: No
   *
   * _Type_: List of [ComponentChild](aws-properties-amplifyuibuilder-component-componentchild.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Children?: List<AmplifyUIBuilderComponentComponentChild>;
  /**
   * One or more key-value pairs to use when tagging the component.
   *
   * _Required_: No
   *
   * _Type_: Map of String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Tags?: { [key: string]: Value<string> };
}

/**
 * The AWS::AmplifyUIBuilder::Component resource specifies a component within an Amplify app. A component is a user interface (UI) element that you can customize. Use `ComponentChild` to configure an instance of a `Component`. A `ComponentChild` instance inherits the configuration of the main `Component`.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amplifyuibuilder-component.html}
 */
export interface AmplifyUIBuilderComponentResource {
  Type: 'AWS::AmplifyUIBuilder::Component';
  Properties: AmplifyUIBuilderComponentProperties;
}
