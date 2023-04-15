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
 * - us-west-2 (version 119.1.0)
 */
import { List, Value } from '../../shared-types/dataTypes';
import { ResourceTag } from '../../shared-types/resource';

/**
 * The `Font` property type specifies Property description not available. for an [AWS::QuickSight::Theme](aws-resource-quicksight-theme.md).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-theme-font.html}
 **/
export interface QuickSightThemeFont {
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FontFamily?: Value<string>;
}

/**
 * A version of a theme.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-theme-themeversion.html}
 **/
export interface QuickSightThemeThemeVersion {
  /**
   * The status of the theme version.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `CREATION_FAILED | CREATION_IN_PROGRESS | CREATION_SUCCESSFUL | DELETED | UPDATE_FAILED | UPDATE_IN_PROGRESS | UPDATE_SUCCESSFUL`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Status?: Value<string>;
  /**
   * Errors associated with the theme.
   *
   * _Required_: No
   *
   * _Type_: List of [ThemeError](aws-properties-quicksight-theme-themeerror.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Errors?: List<QuickSightThemeThemeError>;
  /**
   * The description of the theme.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `512`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Description?: Value<string>;
  /**
   * The date and time that this theme version was created.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  CreatedTime?: Value<string>;
  /**
   * The theme configuration, which contains all the theme display properties.
   *
   * _Required_: No
   *
   * _Type_: [ThemeConfiguration](aws-properties-quicksight-theme-themeconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Configuration?: QuickSightThemeThemeConfiguration;
  /**
   * The Amazon QuickSight-defined ID of the theme that a custom theme inherits from. All themes initially inherit from a default Amazon QuickSight theme.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `512`
   *
   * _Pattern_: `[w-]+`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  BaseThemeId?: Value<string>;
  /**
   * The Amazon Resource Name (ARN) of the resource.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Arn?: Value<string>;
  /**
   * The version number of the theme.
   *
   * _Required_: No
   *
   * _Type_: Double
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  VersionNumber?: Value<number>;
}

/**
 * The display options for tile borders for visuals.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-theme-borderstyle.html}
 **/
export interface QuickSightThemeBorderStyle {
  /**
   * The option to enable display of borders for visuals.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Show?: Value<boolean>;
}

/**
 * The display options for margins around the outside edge of sheets.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-theme-marginstyle.html}
 **/
export interface QuickSightThemeMarginStyle {
  /**
   * This Boolean value controls whether to display sheet margins.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Show?: Value<boolean>;
}

/**
 * The display options for gutter spacing between tiles on a sheet.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-theme-gutterstyle.html}
 **/
export interface QuickSightThemeGutterStyle {
  /**
   * This Boolean value controls whether to display a gutter space between sheet tiles.
   *
   * _Required_: No
   *
   * _Type_: Boolean
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Show?: Value<boolean>;
}

/**
 * The theme display options for sheets.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-theme-sheetstyle.html}
 **/
export interface QuickSightThemeSheetStyle {
  /**
   * The layout options for tiles.
   *
   * _Required_: No
   *
   * _Type_: [TileLayoutStyle](aws-properties-quicksight-theme-tilelayoutstyle.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  TileLayout?: QuickSightThemeTileLayoutStyle;
  /**
   * The display options for tiles.
   *
   * _Required_: No
   *
   * _Type_: [TileStyle](aws-properties-quicksight-theme-tilestyle.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Tile?: QuickSightThemeTileStyle;
}

/**
 * The display options for the layout of tiles on a sheet.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-theme-tilelayoutstyle.html}
 **/
export interface QuickSightThemeTileLayoutStyle {
  /**
   * The gutter settings that apply between tiles.
   *
   * _Required_: No
   *
   * _Type_: [GutterStyle](aws-properties-quicksight-theme-gutterstyle.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Gutter?: QuickSightThemeGutterStyle;
  /**
   * The margin settings that apply around the outside edge of sheets.
   *
   * _Required_: No
   *
   * _Type_: [MarginStyle](aws-properties-quicksight-theme-marginstyle.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Margin?: QuickSightThemeMarginStyle;
}

/**
 * The `Typography` property type specifies Property description not available. for an [AWS::QuickSight::Theme](aws-resource-quicksight-theme.md).
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-theme-typography.html}
 **/
export interface QuickSightThemeTypography {
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: List of [Font](aws-properties-quicksight-theme-font.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  FontFamilies?: List<QuickSightThemeFont>;
}

/**
 * Theme error.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-theme-themeerror.html}
 **/
export interface QuickSightThemeThemeError {
  /**
   * The type of error.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Allowed values_: `INTERNAL_FAILURE`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Type?: Value<string>;
  /**
   * The error message.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Pattern_: `.*S.*`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Message?: Value<string>;
}

/**
 * Display options related to tiles on a sheet.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-theme-tilestyle.html}
 **/
export interface QuickSightThemeTileStyle {
  /**
   * The border around a tile.
   *
   * _Required_: No
   *
   * _Type_: [BorderStyle](aws-properties-quicksight-theme-borderstyle.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Border?: QuickSightThemeBorderStyle;
}

/**
 * Permission for the resource.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-theme-resourcepermission.html}
 **/
export interface QuickSightThemeResourcePermission {
  /**
   * The IAM action to grant or revoke permissions on.
   *
   * _Required_: Yes
   *
   * _Type_: List of String
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Actions: List<Value<string>>;
  /**
   * The Amazon Resource Name (ARN) of the principal. This can be one of the following:
   */
  Principal: Value<string>;
}

/**
 * The theme colors that are used for data colors in charts. The colors description is a hexadecimal color code that consists of six alphanumerical characters, prefixed with `#`, for example #37BFF5.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-theme-datacolorpalette.html}
 **/
export interface QuickSightThemeDataColorPalette {
  /**
   * The hexadecimal code of a color that applies to charts where a lack of data is highlighted.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Pattern_: `^#[A-F0-9]{6}$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  EmptyFillColor?: Value<string>;
  /**
   * The hexadecimal codes for the colors.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Maximum_: `100`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Colors?: List<Value<string>>;
  /**
   * The minimum and maximum hexadecimal codes that describe a color gradient.
   *
   * _Required_: No
   *
   * _Type_: List of String
   *
   * _Maximum_: `100`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MinMaxGradient?: List<Value<string>>;
}

/**
 * The theme configuration. This configuration contains all of the display properties for a theme.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-theme-themeconfiguration.html}
 **/
export interface QuickSightThemeThemeConfiguration {
  /**
   * Color properties that apply to chart data colors.
   *
   * _Required_: No
   *
   * _Type_: [DataColorPalette](aws-properties-quicksight-theme-datacolorpalette.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DataColorPalette?: QuickSightThemeDataColorPalette;
  /**
   * Color properties that apply to the UI and to charts, excluding the colors that apply to data.
   *
   * _Required_: No
   *
   * _Type_: [UIColorPalette](aws-properties-quicksight-theme-uicolorpalette.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  UIColorPalette?: QuickSightThemeUIColorPalette;
  /**
   * Display options related to sheets.
   *
   * _Required_: No
   *
   * _Type_: [SheetStyle](aws-properties-quicksight-theme-sheetstyle.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Sheet?: QuickSightThemeSheetStyle;
  /**
   * Property description not available.
   *
   * _Required_: No
   *
   * _Type_: [Typography](aws-properties-quicksight-theme-typography.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Typography?: QuickSightThemeTypography;
}

/**
 * The theme colors that apply to UI and to charts, excluding data colors. The colors description is a hexadecimal color code that consists of six alphanumerical characters, prefixed with `#`, for example #37BFF5. For more information, see [Using Themes in Amazon QuickSight](https://docs.aws.amazon.com/quicksight/latest/user/themes-in-quicksight.html) in the _Amazon QuickSight User Guide._
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-quicksight-theme-uicolorpalette.html}
 **/
export interface QuickSightThemeUIColorPalette {
  /**
   * This color that applies to warning and informational messages.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Pattern_: `^#[A-F0-9]{6}$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Warning?: Value<string>;
  /**
   * This color is that applies to selected states and buttons.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Pattern_: `^#[A-F0-9]{6}$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Accent?: Value<string>;
  /**
   * The foreground color that applies to any text or other elements that appear over the accent color.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Pattern_: `^#[A-F0-9]{6}$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  AccentForeground?: Value<string>;
  /**
   * The background color that applies to the sheet background and sheet controls.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Pattern_: `^#[A-F0-9]{6}$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SecondaryBackground?: Value<string>;
  /**
   * The foreground color that applies to any text or other elements that appear over the error color.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Pattern_: `^#[A-F0-9]{6}$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DangerForeground?: Value<string>;
  /**
   * The background color that applies to visuals and other high emphasis UI.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Pattern_: `^#[A-F0-9]{6}$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PrimaryBackground?: Value<string>;
  /**
   * The color that applies to the names of fields that are identified as dimensions.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Pattern_: `^#[A-F0-9]{6}$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Dimension?: Value<string>;
  /**
   * The foreground color that applies to any sheet title, sheet control text, or UI that appears over the secondary background.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Pattern_: `^#[A-F0-9]{6}$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SecondaryForeground?: Value<string>;
  /**
   * The foreground color that applies to any text or other elements that appear over the warning color.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Pattern_: `^#[A-F0-9]{6}$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  WarningForeground?: Value<string>;
  /**
   * The foreground color that applies to any text or other elements that appear over the dimension color.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Pattern_: `^#[A-F0-9]{6}$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  DimensionForeground?: Value<string>;
  /**
   * The color of text and other foreground elements that appear over the primary background regions, such as grid lines, borders, table banding, icons, and so on.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Pattern_: `^#[A-F0-9]{6}$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  PrimaryForeground?: Value<string>;
  /**
   * The color that applies to success messages, for example the check mark for a successful download.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Pattern_: `^#[A-F0-9]{6}$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Success?: Value<string>;
  /**
   * The color that applies to error messages.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Pattern_: `^#[A-F0-9]{6}$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Danger?: Value<string>;
  /**
   * The foreground color that applies to any text or other elements that appear over the success color.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Pattern_: `^#[A-F0-9]{6}$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  SuccessForeground?: Value<string>;
  /**
   * The color that applies to the names of fields that are identified as measures.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Pattern_: `^#[A-F0-9]{6}$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Measure?: Value<string>;
  /**
   * The foreground color that applies to any text or other elements that appear over the measure color.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Pattern_: `^#[A-F0-9]{6}$`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  MeasureForeground?: Value<string>;
}
export interface QuickSightThemeProperties {
  /**
   * An ID for the theme that you want to create. The theme ID is unique per AWS Region in each AWS account.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `512`
   *
   * _Pattern_: `[w-]+`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  ThemeId: Value<string>;
  /**
   * A description of the first version of the theme that you're creating. Every time `UpdateTheme` is called, a new version is created. Each version of the theme has a description of the version in the `VersionDescription` field.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `512`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  VersionDescription?: Value<string>;
  /**
   * The theme configuration, which contains the theme display properties.
   *
   * _Required_: No
   *
   * _Type_: [ThemeConfiguration](aws-properties-quicksight-theme-themeconfiguration.md)
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Configuration?: QuickSightThemeThemeConfiguration;
  /**
   * The ID of the theme that a custom theme will inherit from. All themes inherit from one of the starting themes defined by Amazon QuickSight. For a list of the starting themes, use `ListThemes` or choose **Themes** from within an analysis.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `512`
   *
   * _Pattern_: `[w-]+`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  BaseThemeId?: Value<string>;
  /**
   * The ID of the AWS account where you want to store the new theme.
   *
   * _Required_: Yes
   *
   * _Type_: String
   *
   * _Minimum_: `12`
   *
   * _Maximum_: `12`
   *
   * _Pattern_: `^[0-9]{12}$`
   *
   * _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   */
  AwsAccountId: Value<string>;
  /**
   * A valid grouping of resource permissions to apply to the new theme.
   *
   * _Required_: No
   *
   * _Type_: List of [ResourcePermission](aws-properties-quicksight-theme-resourcepermission.md)
   *
   * _Maximum_: `64`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Permissions?: List<QuickSightThemeResourcePermission>;
  /**
   * A map of the key-value pairs for the resource tag or tags that you want to add to the resource.
   *
   * _Required_: No
   *
   * _Type_: List of [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)
   *
   * _Maximum_: `200`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Tags?: List<ResourceTag>;
  /**
   * A display name for the theme.
   *
   * _Required_: No
   *
   * _Type_: String
   *
   * _Minimum_: `1`
   *
   * _Maximum_: `2048`
   *
   * _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   */
  Name?: Value<string>;
}

/**
 * Creates a theme.
 *
 * A _theme_ is set of configuration options for color and layout. Themes apply to analyses and dashboards. For more information, see [Using Themes in Amazon QuickSight](https://docs.aws.amazon.com/quicksight/latest/user/themes-in-quicksight.html) in the _Amazon QuickSight User Guide_.
 * {@link http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-theme.html}
 */
export interface QuickSightThemeResource {
  Type: 'AWS::QuickSight::Theme';
  Properties: QuickSightThemeProperties;
}
