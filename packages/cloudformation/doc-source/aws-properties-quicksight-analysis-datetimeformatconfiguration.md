# AWS::QuickSight::Analysis DateTimeFormatConfiguration<a name="aws-properties-quicksight-analysis-datetimeformatconfiguration"></a>

Formatting configuration for `DateTime` fields\.

## Syntax<a name="aws-properties-quicksight-analysis-datetimeformatconfiguration-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-analysis-datetimeformatconfiguration-syntax.json"></a>

```
{
  "[DateTimeFormat](#cfn-quicksight-analysis-datetimeformatconfiguration-datetimeformat)" : String,
  "[NullValueFormatConfiguration](#cfn-quicksight-analysis-datetimeformatconfiguration-nullvalueformatconfiguration)" : NullValueFormatConfiguration,
  "[NumericFormatConfiguration](#cfn-quicksight-analysis-datetimeformatconfiguration-numericformatconfiguration)" : NumericFormatConfiguration
}
```

### YAML<a name="aws-properties-quicksight-analysis-datetimeformatconfiguration-syntax.yaml"></a>

```
  [DateTimeFormat](#cfn-quicksight-analysis-datetimeformatconfiguration-datetimeformat): String
  [NullValueFormatConfiguration](#cfn-quicksight-analysis-datetimeformatconfiguration-nullvalueformatconfiguration):
    NullValueFormatConfiguration
  [NumericFormatConfiguration](#cfn-quicksight-analysis-datetimeformatconfiguration-numericformatconfiguration):
    NumericFormatConfiguration
```

## Properties<a name="aws-properties-quicksight-analysis-datetimeformatconfiguration-properties"></a>

`DateTimeFormat` <a name="cfn-quicksight-analysis-datetimeformatconfiguration-datetimeformat"></a>
Determines the `DateTime` format\.  
_Required_: No  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `128`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`NullValueFormatConfiguration` <a name="cfn-quicksight-analysis-datetimeformatconfiguration-nullvalueformatconfiguration"></a>
The options that determine the null value format configuration\.  
_Required_: No  
_Type_: [NullValueFormatConfiguration](aws-properties-quicksight-analysis-nullvalueformatconfiguration.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`NumericFormatConfiguration` <a name="cfn-quicksight-analysis-datetimeformatconfiguration-numericformatconfiguration"></a>
The formatting configuration for numeric `DateTime` fields\.  
_Required_: No  
_Type_: [NumericFormatConfiguration](aws-properties-quicksight-analysis-numericformatconfiguration.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
