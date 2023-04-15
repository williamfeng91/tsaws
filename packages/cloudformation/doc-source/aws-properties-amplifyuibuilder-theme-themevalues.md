# AWS::AmplifyUIBuilder::Theme ThemeValues<a name="aws-properties-amplifyuibuilder-theme-themevalues"></a>

The `ThemeValues` property specifies key\-value pair that defines a property of a theme\.

## Syntax<a name="aws-properties-amplifyuibuilder-theme-themevalues-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-amplifyuibuilder-theme-themevalues-syntax.json"></a>

```
{
  "[Key](#cfn-amplifyuibuilder-theme-themevalues-key)" : String,
  "[Value](#cfn-amplifyuibuilder-theme-themevalues-value)" : ThemeValue
}
```

### YAML<a name="aws-properties-amplifyuibuilder-theme-themevalues-syntax.yaml"></a>

```
  [Key](#cfn-amplifyuibuilder-theme-themevalues-key): String
  [Value](#cfn-amplifyuibuilder-theme-themevalues-value):
    ThemeValue
```

## Properties<a name="aws-properties-amplifyuibuilder-theme-themevalues-properties"></a>

`Key` <a name="cfn-amplifyuibuilder-theme-themevalues-key"></a>
The name of the property\.  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Value` <a name="cfn-amplifyuibuilder-theme-themevalues-value"></a>
The value of the property\.  
_Required_: No  
_Type_: [ThemeValue](aws-properties-amplifyuibuilder-theme-themevalue.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
