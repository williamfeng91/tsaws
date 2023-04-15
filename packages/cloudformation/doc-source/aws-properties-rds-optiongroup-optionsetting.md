# AWS::RDS::OptionGroup OptionSetting<a name="aws-properties-rds-optiongroup-optionsetting"></a>

The `OptionSetting` property type specifies the value for an option within an `OptionSetting` property\.

## Syntax<a name="aws-properties-rds-optiongroup-optionsetting-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-rds-optiongroup-optionsetting-syntax.json"></a>

```
{
  "[Name](#cfn-rds-optiongroup-optionsetting-name)" : String,
  "[Value](#cfn-rds-optiongroup-optionsetting-value)" : String
}
```

### YAML<a name="aws-properties-rds-optiongroup-optionsetting-syntax.yaml"></a>

```
  [Name](#cfn-rds-optiongroup-optionsetting-name): String
  [Value](#cfn-rds-optiongroup-optionsetting-value): String
```

## Properties<a name="aws-properties-rds-optiongroup-optionsetting-properties"></a>

`Name` <a name="cfn-rds-optiongroup-optionsetting-name"></a>
The name of the option that has settings that you can set\.  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Value` <a name="cfn-rds-optiongroup-optionsetting-value"></a>
The current value of the option setting\.  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
