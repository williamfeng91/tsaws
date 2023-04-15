# AWS::AmplifyUIBuilder::Theme<a name="aws-resource-amplifyuibuilder-theme"></a>

The AWS::AmplifyUIBuilder::Theme resource specifies a theme within an Amplify app\. A theme is a collection of style settings that apply globally to the components associated with the app\.

## Syntax<a name="aws-resource-amplifyuibuilder-theme-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-resource-amplifyuibuilder-theme-syntax.json"></a>

```
{
  "Type" : "AWS::AmplifyUIBuilder::Theme",
  "Properties" : {
      "[AppId](#cfn-amplifyuibuilder-theme-appid)" : String,
      "[EnvironmentName](#cfn-amplifyuibuilder-theme-environmentname)" : String,
      "[Name](#cfn-amplifyuibuilder-theme-name)" : String,
      "[Overrides](#cfn-amplifyuibuilder-theme-overrides)" : [ ThemeValues, ... ],
      "[Tags](#cfn-amplifyuibuilder-theme-tags)" : {Key : Value, ...},
      "[Values](#cfn-amplifyuibuilder-theme-values)" : [ ThemeValues, ... ]
    }
}
```

### YAML<a name="aws-resource-amplifyuibuilder-theme-syntax.yaml"></a>

```
Type: AWS::AmplifyUIBuilder::Theme
Properties:
  [AppId](#cfn-amplifyuibuilder-theme-appid): String
  [EnvironmentName](#cfn-amplifyuibuilder-theme-environmentname): String
  [Name](#cfn-amplifyuibuilder-theme-name): String
  [Overrides](#cfn-amplifyuibuilder-theme-overrides):
    - ThemeValues
  [Tags](#cfn-amplifyuibuilder-theme-tags):
    Key : Value
  [Values](#cfn-amplifyuibuilder-theme-values):
    - ThemeValues
```

## Properties<a name="aws-resource-amplifyuibuilder-theme-properties"></a>

`AppId` <a name="cfn-amplifyuibuilder-theme-appid"></a>
The unique ID for the Amplify app associated with the theme\.  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`EnvironmentName` <a name="cfn-amplifyuibuilder-theme-environmentname"></a>
The name of the backend environment that is a part of the Amplify app\.  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Name` <a name="cfn-amplifyuibuilder-theme-name"></a>
The name of the theme\.  
_Required_: Yes  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Overrides` <a name="cfn-amplifyuibuilder-theme-overrides"></a>
Describes the properties that can be overriden to customize a theme\.  
_Required_: No  
_Type_: List of [ThemeValues](aws-properties-amplifyuibuilder-theme-themevalues.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Tags` <a name="cfn-amplifyuibuilder-theme-tags"></a>
One or more key\-value pairs to use when tagging the theme\.  
_Required_: No  
_Type_: Map of String  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`Values` <a name="cfn-amplifyuibuilder-theme-values"></a>
A list of key\-value pairs that defines the properties of the theme\.  
_Required_: Yes  
_Type_: List of [ThemeValues](aws-properties-amplifyuibuilder-theme-themevalues.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

## Return values<a name="aws-resource-amplifyuibuilder-theme-return-values"></a>

### Ref<a name="aws-resource-amplifyuibuilder-theme-return-values-ref"></a>

### Fn::GetAtt<a name="aws-resource-amplifyuibuilder-theme-return-values-fn--getatt"></a>

The `Fn::GetAtt` intrinsic function returns a value for a specified attribute of this type\. The following are the available attributes and sample return values\.

For more information about using the `Fn::GetAtt` intrinsic function, see [Fn::GetAtt](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference-getatt.html)\.

#### <a name="aws-resource-amplifyuibuilder-theme-return-values-fn--getatt-fn--getatt"></a>

`Id` <a name="Id-fn::getatt"></a>
The ID for the theme\.
