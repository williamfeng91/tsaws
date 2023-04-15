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
 * The `ThemeValues` property specifies key-value pair that defines a property of a theme.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-theme-themevalues.html}
 **/
export interface AmplifyUIBuilderThemeThemeValues {
  /**
   * The value of the property.
   *
   * _Required_: No
   *
   * _Type_: [ThemeValue](aws-properties-amplifyuibuilder-theme-themevalue.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Value?: AmplifyUIBuilderThemeThemeValue;
  /**
   * The name of the property.
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
 * The `ThemeValue` property specifies the configuration of a theme's properties.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-amplifyuibuilder-theme-themevalue.html}
 **/
export interface AmplifyUIBuilderThemeThemeValue {
  /**
   * The value of a theme property.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Value?: Value<string>;
  /**
   * A list of key-value pairs that define the theme's properties.
   *
   * _Required_: No
   *
   * _Type_: List of [ThemeValues](aws-properties-amplifyuibuilder-theme-themevalues.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Children?: List<AmplifyUIBuilderThemeThemeValues>;
}
export interface AmplifyUIBuilderThemeProperties {
  /**
   * The unique ID for the Amplify app associated with the theme.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AppId?: Value<string>;
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
   * A list of key-value pairs that defines the properties of the theme.
   *
   * _Required_: Yes
   *
   * _Type_: List of [ThemeValues](aws-properties-amplifyuibuilder-theme-themevalues.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Values: List<AmplifyUIBuilderThemeThemeValues>;
  /**
   * Describes the properties that can be overriden to customize a theme.
   *
   * _Required_: No
   *
   * _Type_: List of [ThemeValues](aws-properties-amplifyuibuilder-theme-themevalues.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Overrides?: List<AmplifyUIBuilderThemeThemeValues>;
  /**
   * One or more key-value pairs to use when tagging the theme.
   *
   * _Required_: No
   *
   * _Type_: Map of String
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  Tags?: { [key: string]: Value<string> };
  /**
   * The name of the theme.
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
 * The AWS::AmplifyUIBuilder::Theme resource specifies a theme within an Amplify app. A theme is a collection of style settings that apply globally to the components associated with the app.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amplifyuibuilder-theme.html}
 */
export interface AmplifyUIBuilderThemeResource {
  Type: 'AWS::AmplifyUIBuilder::Theme';
  Properties: AmplifyUIBuilderThemeProperties;
}
