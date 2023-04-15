# AWS::QuickSight::Dashboard FormatConfiguration<a name="aws-properties-quicksight-dashboard-formatconfiguration"></a>

The formatting configuration for all types of field\.

## Syntax<a name="aws-properties-quicksight-dashboard-formatconfiguration-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-dashboard-formatconfiguration-syntax.json"></a>

```
{
  "[DateTimeFormatConfiguration](#cfn-quicksight-dashboard-formatconfiguration-datetimeformatconfiguration)" : DateTimeFormatConfiguration,
  "[NumberFormatConfiguration](#cfn-quicksight-dashboard-formatconfiguration-numberformatconfiguration)" : NumberFormatConfiguration,
  "[StringFormatConfiguration](#cfn-quicksight-dashboard-formatconfiguration-stringformatconfiguration)" : StringFormatConfiguration
}
```

### YAML<a name="aws-properties-quicksight-dashboard-formatconfiguration-syntax.yaml"></a>

```
  [DateTimeFormatConfiguration](#cfn-quicksight-dashboard-formatconfiguration-datetimeformatconfiguration):
    DateTimeFormatConfiguration
  [NumberFormatConfiguration](#cfn-quicksight-dashboard-formatconfiguration-numberformatconfiguration):
    NumberFormatConfiguration
  [StringFormatConfiguration](#cfn-quicksight-dashboard-formatconfiguration-stringformatconfiguration):
    StringFormatConfiguration
```

## Properties<a name="aws-properties-quicksight-dashboard-formatconfiguration-properties"></a>

`DateTimeFormatConfiguration` <a name="cfn-quicksight-dashboard-formatconfiguration-datetimeformatconfiguration"></a>
Formatting configuration for `DateTime` fields\.  
_Required_: No  
_Type_: [DateTimeFormatConfiguration](aws-properties-quicksight-dashboard-datetimeformatconfiguration.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`NumberFormatConfiguration` <a name="cfn-quicksight-dashboard-formatconfiguration-numberformatconfiguration"></a>
Formatting configuration for number fields\.  
_Required_: No  
_Type_: [NumberFormatConfiguration](aws-properties-quicksight-dashboard-numberformatconfiguration.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`StringFormatConfiguration` <a name="cfn-quicksight-dashboard-formatconfiguration-stringformatconfiguration"></a>
Formatting configuration for string fields\.  
_Required_: No  
_Type_: [StringFormatConfiguration](aws-properties-quicksight-dashboard-stringformatconfiguration.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
