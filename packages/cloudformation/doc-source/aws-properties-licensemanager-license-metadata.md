# AWS::LicenseManager::License Metadata<a name="aws-properties-licensemanager-license-metadata"></a>

Describes key/value pairs\.

## Syntax<a name="aws-properties-licensemanager-license-metadata-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-licensemanager-license-metadata-syntax.json"></a>

```
{
  "[Name](#cfn-licensemanager-license-metadata-name)" : String,
  "[Value](#cfn-licensemanager-license-metadata-value)" : String
}
```

### YAML<a name="aws-properties-licensemanager-license-metadata-syntax.yaml"></a>

```
  [Name](#cfn-licensemanager-license-metadata-name): String
  [Value](#cfn-licensemanager-license-metadata-value): String
```

## Properties<a name="aws-properties-licensemanager-license-metadata-properties"></a>

`Name` <a name="cfn-licensemanager-license-metadata-name"></a>
The key name\.  
_Required_: Yes  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Value` <a name="cfn-licensemanager-license-metadata-value"></a>
The value\.  
_Required_: Yes  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
