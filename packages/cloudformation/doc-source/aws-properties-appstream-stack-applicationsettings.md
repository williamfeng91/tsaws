# AWS::AppStream::Stack ApplicationSettings<a name="aws-properties-appstream-stack-applicationsettings"></a>

The persistent application settings for users of a stack\.

## Syntax<a name="aws-properties-appstream-stack-applicationsettings-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-appstream-stack-applicationsettings-syntax.json"></a>

```
{
  "[Enabled](#cfn-appstream-stack-applicationsettings-enabled)" : Boolean,
  "[SettingsGroup](#cfn-appstream-stack-applicationsettings-settingsgroup)" : String
}
```

### YAML<a name="aws-properties-appstream-stack-applicationsettings-syntax.yaml"></a>

```
  [Enabled](#cfn-appstream-stack-applicationsettings-enabled): Boolean
  [SettingsGroup](#cfn-appstream-stack-applicationsettings-settingsgroup): String
```

## Properties<a name="aws-properties-appstream-stack-applicationsettings-properties"></a>

`Enabled` <a name="cfn-appstream-stack-applicationsettings-enabled"></a>
Enables or disables persistent application settings for users during their streaming sessions\.  
_Required_: Yes  
_Type_: Boolean  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`SettingsGroup` <a name="cfn-appstream-stack-applicationsettings-settingsgroup"></a>
The path prefix for the S3 bucket where users’ persistent application settings are stored\. You can allow the same persistent application settings to be used across multiple stacks by specifying the same settings group for each stack\.  
_Required_: No  
_Type_: String  
_Maximum_: `100`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
