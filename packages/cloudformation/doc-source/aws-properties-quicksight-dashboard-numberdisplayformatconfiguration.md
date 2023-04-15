# AWS::QuickSight::Dashboard NumberDisplayFormatConfiguration<a name="aws-properties-quicksight-dashboard-numberdisplayformatconfiguration"></a>

The options that determine the number display format configuration\.

## Syntax<a name="aws-properties-quicksight-dashboard-numberdisplayformatconfiguration-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-dashboard-numberdisplayformatconfiguration-syntax.json"></a>

```
{
  "[DecimalPlacesConfiguration](#cfn-quicksight-dashboard-numberdisplayformatconfiguration-decimalplacesconfiguration)" : DecimalPlacesConfiguration,
  "[NegativeValueConfiguration](#cfn-quicksight-dashboard-numberdisplayformatconfiguration-negativevalueconfiguration)" : NegativeValueConfiguration,
  "[NullValueFormatConfiguration](#cfn-quicksight-dashboard-numberdisplayformatconfiguration-nullvalueformatconfiguration)" : NullValueFormatConfiguration,
  "[NumberScale](#cfn-quicksight-dashboard-numberdisplayformatconfiguration-numberscale)" : String,
  "[Prefix](#cfn-quicksight-dashboard-numberdisplayformatconfiguration-prefix)" : String,
  "[SeparatorConfiguration](#cfn-quicksight-dashboard-numberdisplayformatconfiguration-separatorconfiguration)" : NumericSeparatorConfiguration,
  "[Suffix](#cfn-quicksight-dashboard-numberdisplayformatconfiguration-suffix)" : String
}
```

### YAML<a name="aws-properties-quicksight-dashboard-numberdisplayformatconfiguration-syntax.yaml"></a>

```
  [DecimalPlacesConfiguration](#cfn-quicksight-dashboard-numberdisplayformatconfiguration-decimalplacesconfiguration):
    DecimalPlacesConfiguration
  [NegativeValueConfiguration](#cfn-quicksight-dashboard-numberdisplayformatconfiguration-negativevalueconfiguration):
    NegativeValueConfiguration
  [NullValueFormatConfiguration](#cfn-quicksight-dashboard-numberdisplayformatconfiguration-nullvalueformatconfiguration):
    NullValueFormatConfiguration
  [NumberScale](#cfn-quicksight-dashboard-numberdisplayformatconfiguration-numberscale): String
  [Prefix](#cfn-quicksight-dashboard-numberdisplayformatconfiguration-prefix): String
  [SeparatorConfiguration](#cfn-quicksight-dashboard-numberdisplayformatconfiguration-separatorconfiguration):
    NumericSeparatorConfiguration
  [Suffix](#cfn-quicksight-dashboard-numberdisplayformatconfiguration-suffix): String
```

## Properties<a name="aws-properties-quicksight-dashboard-numberdisplayformatconfiguration-properties"></a>

`DecimalPlacesConfiguration` <a name="cfn-quicksight-dashboard-numberdisplayformatconfiguration-decimalplacesconfiguration"></a>
The option that determines the decimal places configuration\.  
_Required_: No  
_Type_: [DecimalPlacesConfiguration](aws-properties-quicksight-dashboard-decimalplacesconfiguration.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`NegativeValueConfiguration` <a name="cfn-quicksight-dashboard-numberdisplayformatconfiguration-negativevalueconfiguration"></a>
The options that determine the negative value configuration\.  
_Required_: No  
_Type_: [NegativeValueConfiguration](aws-properties-quicksight-dashboard-negativevalueconfiguration.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`NullValueFormatConfiguration` <a name="cfn-quicksight-dashboard-numberdisplayformatconfiguration-nullvalueformatconfiguration"></a>
The options that determine the null value format configuration\.  
_Required_: No  
_Type_: [NullValueFormatConfiguration](aws-properties-quicksight-dashboard-nullvalueformatconfiguration.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`NumberScale` <a name="cfn-quicksight-dashboard-numberdisplayformatconfiguration-numberscale"></a>
Determines the number scale value of the number format\.  
_Required_: No  
_Type_: String  
_Allowed values_: `AUTO | BILLIONS | MILLIONS | NONE | THOUSANDS | TRILLIONS`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Prefix` <a name="cfn-quicksight-dashboard-numberdisplayformatconfiguration-prefix"></a>
Determines the prefix value of the number format\.  
_Required_: No  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `128`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`SeparatorConfiguration` <a name="cfn-quicksight-dashboard-numberdisplayformatconfiguration-separatorconfiguration"></a>
The options that determine the numeric separator configuration\.  
_Required_: No  
_Type_: [NumericSeparatorConfiguration](aws-properties-quicksight-dashboard-numericseparatorconfiguration.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Suffix` <a name="cfn-quicksight-dashboard-numberdisplayformatconfiguration-suffix"></a>
Determines the suffix value of the number format\.  
_Required_: No  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `128`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
