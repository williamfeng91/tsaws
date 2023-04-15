# AWS::QuickSight::Theme<a name="aws-resource-quicksight-theme"></a>

Creates a theme\.

A _theme_ is set of configuration options for color and layout\. Themes apply to analyses and dashboards\. For more information, see [Using Themes in Amazon QuickSight](https://docs.aws.amazon.com/quicksight/latest/user/themes-in-quicksight.html) in the _Amazon QuickSight User Guide_\.

## Syntax<a name="aws-resource-quicksight-theme-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-resource-quicksight-theme-syntax.json"></a>

```
{
  "Type" : "AWS::QuickSight::Theme",
  "Properties" : {
      "[AwsAccountId](#cfn-quicksight-theme-awsaccountid)" : String,
      "[BaseThemeId](#cfn-quicksight-theme-basethemeid)" : String,
      "[Configuration](#cfn-quicksight-theme-configuration)" : ThemeConfiguration,
      "[Name](#cfn-quicksight-theme-name)" : String,
      "[Permissions](#cfn-quicksight-theme-permissions)" : [ ResourcePermission, ... ],
      "[Tags](#cfn-quicksight-theme-tags)" : [ [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html), ... ],
      "[ThemeId](#cfn-quicksight-theme-themeid)" : String,
      "[VersionDescription](#cfn-quicksight-theme-versiondescription)" : String
    }
}
```

### YAML<a name="aws-resource-quicksight-theme-syntax.yaml"></a>

```
Type: AWS::QuickSight::Theme
Properties:
  [AwsAccountId](#cfn-quicksight-theme-awsaccountid): String
  [BaseThemeId](#cfn-quicksight-theme-basethemeid): String
  [Configuration](#cfn-quicksight-theme-configuration):
    ThemeConfiguration
  [Name](#cfn-quicksight-theme-name): String
  [Permissions](#cfn-quicksight-theme-permissions):
    - ResourcePermission
  [Tags](#cfn-quicksight-theme-tags):
    - [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)
  [ThemeId](#cfn-quicksight-theme-themeid): String
  [VersionDescription](#cfn-quicksight-theme-versiondescription): String
```

## Properties<a name="aws-resource-quicksight-theme-properties"></a>

`AwsAccountId` <a name="cfn-quicksight-theme-awsaccountid"></a>
The ID of the AWS account where you want to store the new theme\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `12`  
_Maximum_: `12`  
_Pattern_: `^[0-9]{12}$`  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`BaseThemeId` <a name="cfn-quicksight-theme-basethemeid"></a>
The ID of the theme that a custom theme will inherit from\. All themes inherit from one of the starting themes defined by Amazon QuickSight\. For a list of the starting themes, use `ListThemes` or choose **Themes** from within an analysis\.  
_Required_: No  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `512`  
_Pattern_: `[\w\-]+`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Configuration` <a name="cfn-quicksight-theme-configuration"></a>
The theme configuration, which contains the theme display properties\.  
_Required_: No  
_Type_: [ThemeConfiguration](aws-properties-quicksight-theme-themeconfiguration.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Name` <a name="cfn-quicksight-theme-name"></a>
A display name for the theme\.  
_Required_: No  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `2048`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Permissions` <a name="cfn-quicksight-theme-permissions"></a>
A valid grouping of resource permissions to apply to the new theme\.  
_Required_: No  
_Type_: List of [ResourcePermission](aws-properties-quicksight-theme-resourcepermission.md)  
_Maximum_: `64`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Tags` <a name="cfn-quicksight-theme-tags"></a>
A map of the key\-value pairs for the resource tag or tags that you want to add to the resource\.  
_Required_: No  
_Type_: List of [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)  
_Maximum_: `200`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`ThemeId` <a name="cfn-quicksight-theme-themeid"></a>
An ID for the theme that you want to create\. The theme ID is unique per AWS Region in each AWS account\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `512`  
_Pattern_: `[\w\-]+`  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`VersionDescription` <a name="cfn-quicksight-theme-versiondescription"></a>
A description of the first version of the theme that you're creating\. Every time `UpdateTheme` is called, a new version is created\. Each version of the theme has a description of the version in the `VersionDescription` field\.  
_Required_: No  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `512`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

## Return values<a name="aws-resource-quicksight-theme-return-values"></a>

### Fn::GetAtt<a name="aws-resource-quicksight-theme-return-values-fn--getatt"></a>

#### <a name="aws-resource-quicksight-theme-return-values-fn--getatt-fn--getatt"></a>

`Arn` <a name="Arn-fn::getatt"></a>
The Amazon Resource Name \(ARN\) of the theme\.

`CreatedTime` <a name="CreatedTime-fn::getatt"></a>
The time the theme was created\.

`LastUpdatedTime` <a name="LastUpdatedTime-fn::getatt"></a>
The time the theme was last updated\.

`Type` <a name="Type-fn::getatt"></a>
Theme type\.

`Version` <a name="Version-fn::getatt"></a>
The version of the theme\.

`Version.Arn` <a name="Version.Arn-fn::getatt"></a>
Property description not available\.

`Version.BaseThemeId` <a name="Version.BaseThemeId-fn::getatt"></a>
Property description not available\.

`Version.Configuration` <a name="Version.Configuration-fn::getatt"></a>
Property description not available\.

`Version.Configuration.DataColorPalette` <a name="Version.Configuration.DataColorPalette-fn::getatt"></a>
Property description not available\.

`Version.Configuration.Sheet` <a name="Version.Configuration.Sheet-fn::getatt"></a>
Property description not available\.

`Version.Configuration.Typography` <a name="Version.Configuration.Typography-fn::getatt"></a>
Property description not available\.

`Version.Configuration.UIColorPalette` <a name="Version.Configuration.UIColorPalette-fn::getatt"></a>
Property description not available\.

`Version.CreatedTime` <a name="Version.CreatedTime-fn::getatt"></a>
Property description not available\.

`Version.Description` <a name="Version.Description-fn::getatt"></a>
Property description not available\.

`Version.Errors` <a name="Version.Errors-fn::getatt"></a>
Property description not available\.

`Version.Status` <a name="Version.Status-fn::getatt"></a>
Property description not available\.

`Version.VersionNumber` <a name="Version.VersionNumber-fn::getatt"></a>
Property description not available\.
