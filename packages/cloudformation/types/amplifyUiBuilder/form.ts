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
 * Represents the data binding configuration for a value map.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-form-valuemappings.html}
 **/
export interface AmplifyUIBuilderFormValueMappings {
  /**
   * The value and display value pairs.
   *
   * _Required_: Yes
   *
   * _Type_: List of [ValueMapping](aws-properties-amplifyuibuilder-form-valuemapping.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Values: List<AmplifyUIBuilderFormValueMapping>;
}

/**
 * Describes the configuration for the form's style.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-form-formstyle.html}
 **/
export interface AmplifyUIBuilderFormFormStyle {
  /**
   * The spacing for the vertical gap.
   *
   * _Required_: No
   *
   * _Type_: [FormStyleConfig](aws-properties-amplifyuibuilder-form-formstyleconfig.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  VerticalGap?: AmplifyUIBuilderFormFormStyleConfig;
  /**
   * The size of the outer padding for the form.
   *
   * _Required_: No
   *
   * _Type_: [FormStyleConfig](aws-properties-amplifyuibuilder-form-formstyleconfig.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  OuterPadding?: AmplifyUIBuilderFormFormStyleConfig;
  /**
   * The spacing for the horizontal gap.
   *
   * _Required_: No
   *
   * _Type_: [FormStyleConfig](aws-properties-amplifyuibuilder-form-formstyleconfig.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  HorizontalGap?: AmplifyUIBuilderFormFormStyleConfig;
}

/**
 * Stores the configuration information for a visual helper element for a form. A sectional element can be a header, a text block, or a divider. These elements are static and not associated with any data.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-form-sectionalelement.html}
 **/
export interface AmplifyUIBuilderFormSectionalElement {
  /**
   * The type of sectional element. Valid values are `Heading`, `Text`, and `Divider`.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Type: Value<string>;
  /**
   * Specifies the position of the text in a field for a `Text` sectional element.
   *
   * _Required_: No
   *
   * _Type_: [FieldPosition](aws-properties-amplifyuibuilder-form-fieldposition.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Position?: AmplifyUIBuilderFormFieldPosition;
  /**
   * The text for a `Text` sectional element.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Text?: Value<string>;
  /**
   * Specifies the size of the font for a `Heading` sectional element. Valid values are `1 | 2 | 3 | 4 | 5 | 6`.
   *
   * _Required_: No
   *
   * _Type_: Double
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Level?: Value<number>;
  /**
   * Specifies the orientation for a `Divider` sectional element. Valid values are `horizontal` or `vertical`.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Orientation?: Value<string>;
  /**
   * Excludes a sectional element that was generated by default for a specified data model.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Excluded?: Value<boolean>;
}

/**
 * Describes the call to action button configuration for the form.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-form-formcta.html}
 **/
export interface AmplifyUIBuilderFormFormCTA {
  /**
   * The position of the button.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Position?: Value<string>;
  /**
   * Displays a cancel button.
   *
   * _Required_: No
   *
   * _Type_: [FormButton](aws-properties-amplifyuibuilder-form-formbutton.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Cancel?: AmplifyUIBuilderFormFormButton;
  /**
   * Displays a submit button.
   *
   * _Required_: No
   *
   * _Type_: [FormButton](aws-properties-amplifyuibuilder-form-formbutton.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Submit?: AmplifyUIBuilderFormFormButton;
  /**
   * Displays a clear button.
   *
   * _Required_: No
   *
   * _Type_: [FormButton](aws-properties-amplifyuibuilder-form-formbutton.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Clear?: AmplifyUIBuilderFormFormButton;
}

/**
 * Describes the configuration for a button UI element that is a part of a form.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-form-formbutton.html}
 **/
export interface AmplifyUIBuilderFormFormButton {
  /**
   * The position of the button.
   *
   * _Required_: No
   *
   * _Type_: [FieldPosition](aws-properties-amplifyuibuilder-form-fieldposition.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Position?: AmplifyUIBuilderFormFieldPosition;
  /**
   * Describes the button's properties.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Children?: Value<string>;
  /**
   * Specifies whether the button is visible on the form.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Excluded?: Value<boolean>;
}

/**
 * Describes the field position.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-form-fieldposition.html}
 **/
export interface AmplifyUIBuilderFormFieldPosition {
  /**
   * The field position is below the field specified by the string.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Below?: Value<string>;
  /**
   * The field position is to the right of the field specified by the string.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  RightOf?: Value<string>;
  /**
   * The field position is fixed and doesn't change in relation to other fields.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Fixed?: Value<string>;
}

/**
 * Describes the configuration information for a field in a table.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-form-fieldconfig.html}
 **/
export interface AmplifyUIBuilderFormFieldConfig {
  /**
   * The validations to perform on the value in the field.
   *
   * _Required_: No
   *
   * _Type_: List of [FieldValidationConfiguration](aws-properties-amplifyuibuilder-form-fieldvalidationconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Validations?: List<AmplifyUIBuilderFormFieldValidationConfiguration>;
  /**
   * Describes the configuration for the default input value to display for a field.
   *
   * _Required_: No
   *
   * _Type_: [FieldInputConfig](aws-properties-amplifyuibuilder-form-fieldinputconfig.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  InputType?: AmplifyUIBuilderFormFieldInputConfig;
  /**
   * Specifies the field position.
   *
   * _Required_: No
   *
   * _Type_: [FieldPosition](aws-properties-amplifyuibuilder-form-fieldposition.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Position?: AmplifyUIBuilderFormFieldPosition;
  /**
   * The label for the field.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Label?: Value<string>;
  /**
   * Specifies whether to hide a field.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Excluded?: Value<boolean>;
}

/**
 * Describes the data type configuration for the data source associated with a form.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-form-formdatatypeconfig.html}
 **/
export interface AmplifyUIBuilderFormFormDataTypeConfig {
  /**
   * The data source type, either an Amplify DataStore model or a custom data type.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DataSourceType: Value<string>;
  /**
   * The unique name of the data type you are using as the data source for the form.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DataTypeName: Value<string>;
}

/**
 * Describes the configuration for the default input values to display for a field.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-form-fieldinputconfig.html}
 **/
export interface AmplifyUIBuilderFormFieldInputConfig {
  /**
   * Specifies a read only field.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ReadOnly?: Value<boolean>;
  /**
   * The text to display as a placeholder for the field.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Placeholder?: Value<string>;
  /**
   * Specifies whether to render the field as an array. This property is ignored if the `dataSourceType` for the form is a Data Store.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  IsArray?: Value<boolean>;
  /**
   * The information to use to customize the input fields with data at runtime.
   *
   * _Required_: No
   *
   * _Type_: [ValueMappings](aws-properties-amplifyuibuilder-form-valuemappings.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ValueMappings?: AmplifyUIBuilderFormValueMappings;
  /**
   * The default country code for a phone number.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DefaultCountryCode?: Value<string>;
  /**
   * The maximum value to display for the field.
   *
   * _Required_: No
   *
   * _Type_: Double
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MaxValue?: Value<number>;
  /**
   * The stepping increment for a numeric value in a field.
   *
   * _Required_: No
   *
   * _Type_: Double
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Step?: Value<number>;
  /**
   * The name of the field.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Name?: Value<string>;
  /**
   * The default value for the field.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DefaultValue?: Value<string>;
  /**
   * The text to display to describe the field.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DescriptiveText?: Value<string>;
  /**
   * The input type for the field.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Type: Value<string>;
  /**
   * Specifies a field that requires input.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Required?: Value<boolean>;
  /**
   * The minimum value to display for the field.
   *
   * _Required_: No
   *
   * _Type_: Double
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MinValue?: Value<number>;
  /**
   * The value for the field.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Value?: Value<string>;
  /**
   * Specifies whether a field has a default value.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DefaultChecked?: Value<boolean>;
}

/**
 * Describes the configuration settings for the form's style properties.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-form-formstyleconfig.html}
 **/
export interface AmplifyUIBuilderFormFormStyleConfig {
  /**
   * The value of the style setting.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Value?: Value<string>;
  /**
   * A reference to a design token to use to bind the form's style properties to an existing theme.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TokenReference?: Value<string>;
}

/**
 * Describes the validation configuration for a field.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-form-fieldvalidationconfiguration.html}
 **/
export interface AmplifyUIBuilderFormFieldValidationConfiguration {
  /**
   * The validation to perform on an object type.``
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Type: Value<string>;
  /**
   * The validation message to display.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  ValidationMessage?: Value<string>;
  /**
   * The validation to perform on a string value.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  StrValues?: List<Value<string>>;
  /**
   * The validation to perform on a number value.
   *
   * _Required_: No
   *
   * _Type_: List of Double
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  NumValues?: List<Value<number>>;
}

/**
 * Describes the configuration for an input field on a form. Use `FormInputValueProperty` to specify the values to render or bind by default.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-form-forminputvalueproperty.html}
 **/
export interface AmplifyUIBuilderFormFormInputValueProperty {
  /**
   * The value to assign to the input field.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Value?: Value<string>;
}

/**
 * Associates a complex object with a display value. Use `ValueMapping` to store how to represent complex objects when they are displayed.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-form-valuemapping.html}
 **/
export interface AmplifyUIBuilderFormValueMapping {
  /**
   * The value to display for the complex object.
   *
   * _Required_: No
   *
   * _Type_: [FormInputValueProperty](aws-properties-amplifyuibuilder-form-forminputvalueproperty.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DisplayValue?: AmplifyUIBuilderFormFormInputValueProperty;
  /**
   * The complex object.
   *
   * _Required_: Yes
   *
   * _Type_: [FormInputValueProperty](aws-properties-amplifyuibuilder-form-forminputvalueproperty.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Value: AmplifyUIBuilderFormFormInputValueProperty;
}
export interface AmplifyUIBuilderFormProperties {
  /**
   * The operation to perform on the specified form.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FormActionType: Value<string>;
  /**
   * Stores the call to action configuration for the form.
   *
   * _Required_: No
   *
   * _Type_: [FormCTA](aws-properties-amplifyuibuilder-form-formcta.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Cta?: AmplifyUIBuilderFormFormCTA;
  /**
   * Stores the information about the form's fields.
   *
   * _Required_: Yes
   *
   * _Type_: Map of [FieldConfig](aws-properties-amplifyuibuilder-form-fieldconfig.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Fields: { [key: string]: AmplifyUIBuilderFormFieldConfig };
  /**
   * The unique ID of the Amplify app associated with the form.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AppId?: Value<string>;
  /**
   * The schema version of the form when it was imported.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SchemaVersion: Value<string>;
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
   * Stores the visual helper elements for the form that are not associated with any data.
   *
   * _Required_: Yes
   *
   * _Type_: Map of [SectionalElement](aws-properties-amplifyuibuilder-form-sectionalelement.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SectionalElements: { [key: string]: AmplifyUIBuilderFormSectionalElement };
  /**
   * The type of data source to use to create the form.
   *
   * _Required_: Yes
   *
   * _Type_: [FormDataTypeConfig](aws-properties-amplifyuibuilder-form-formdatatypeconfig.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DataType: AmplifyUIBuilderFormFormDataTypeConfig;
  /**
   * Stores the configuration for the form's style.
   *
   * _Required_: Yes
   *
   * _Type_: [FormStyle](aws-properties-amplifyuibuilder-form-formstyle.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Style: AmplifyUIBuilderFormFormStyle;
  /**
   * One or more key-value pairs to use when tagging the form.
   *
   * _Required_: No
   *
   * _Type_: Map of String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Tags?: { [key: string]: Value<string> };
  /**
   * The name of the form.
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
 * Contains the configuration settings for a `Form` user interface (UI) element for an Amplify app. A form is a component you can add to your project by specifying a data source as the default configuration for the form.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amplifyuibuilder-form.html}
 */
export interface AmplifyUIBuilderFormResource {
  Type: 'AWS::AmplifyUIBuilder::Form';
  Properties: AmplifyUIBuilderFormProperties;
}
