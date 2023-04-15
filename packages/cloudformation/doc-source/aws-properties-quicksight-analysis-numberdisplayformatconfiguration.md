# AWS::QuickSight::Analysis NumberDisplayFormatConfiguration<a name="aws-properties-quicksight-analysis-numberdisplayformatconfiguration"></a>

The options that determine the number display format configuration\.

## Syntax<a name="aws-properties-quicksight-analysis-numberdisplayformatconfiguration-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-analysis-numberdisplayformatconfiguration-syntax.json"></a>

```
{
  "[DecimalPlacesConfiguration](#cfn-quicksight-analysis-numberdisplayformatconfiguration-decimalplacesconfiguration)" : DecimalPlacesConfiguration,
  "[NegativeValueConfiguration](#cfn-quicksight-analysis-numberdisplayformatconfiguration-negativevalueconfiguration)" : NegativeValueConfiguration,
  "[NullValueFormatConfiguration](#cfn-quicksight-analysis-numberdisplayformatconfiguration-nullvalueformatconfiguration)" : NullValueFormatConfiguration,
  "[NumberScale](#cfn-quicksight-analysis-numberdisplayformatconfiguration-numberscale)" : String,
  "[Prefix](#cfn-quicksight-analysis-numberdisplayformatconfiguration-prefix)" : String,
  "[SeparatorConfiguration](#cfn-quicksight-analysis-numberdisplayformatconfiguration-separatorconfiguration)" : NumericSeparatorConfiguration,
  "[Suffix](#cfn-quicksight-analysis-numberdisplayformatconfiguration-suffix)" : String
}
```

### YAML<a name="aws-properties-quicksight-analysis-numberdisplayformatconfiguration-syntax.yaml"></a>

```
  [DecimalPlacesConfiguration](#cfn-quicksight-analysis-numberdisplayformatconfiguration-decimalplacesconfiguration):
    DecimalPlacesConfiguration
  [NegativeValueConfiguration](#cfn-quicksight-analysis-numberdisplayformatconfiguration-negativevalueconfiguration):
    NegativeValueConfiguration
  [NullValueFormatConfiguration](#cfn-quicksight-analysis-numberdisplayformatconfiguration-nullvalueformatconfiguration):
    NullValueFormatConfiguration
  [NumberScale](#cfn-quicksight-analysis-numberdisplayformatconfiguration-numberscale): String
  [Prefix](#cfn-quicksight-analysis-numberdisplayformatconfiguration-prefix): String
  [SeparatorConfiguration](#cfn-quicksight-analysis-numberdisplayformatconfiguration-separatorconfiguration):
    NumericSeparatorConfiguration
  [Suffix](#cfn-quicksight-analysis-numberdisplayformatconfiguration-suffix): String
```

## Properties<a name="aws-properties-quicksight-analysis-numberdisplayformatconfiguration-properties"></a>

`DecimalPlacesConfiguration` <a name="cfn-quicksight-analysis-numberdisplayformatconfiguration-decimalplacesconfiguration"></a>
The option that determines the decimal places configuration\.  
_Required_: No  
_Type_: [DecimalPlacesConfiguration](aws-properties-quicksight-analysis-decimalplacesconfiguration.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`NegativeValueConfiguration` <a name="cfn-quicksight-analysis-numberdisplayformatconfiguration-negativevalueconfiguration"></a>
The options that determine the negative value configuration\.  
_Required_: No  
_Type_: [NegativeValueConfiguration](aws-properties-quicksight-analysis-negativevalueconfiguration.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`NullValueFormatConfiguration` <a name="cfn-quicksight-analysis-numberdisplayformatconfiguration-nullvalueformatconfiguration"></a>
The options that determine the null value format configuration\.  
_Required_: No  
_Type_: [NullValueFormatConfiguration](aws-properties-quicksight-analysis-nullvalueformatconfiguration.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`NumberScale` <a name="cfn-quicksight-analysis-numberdisplayformatconfiguration-numberscale"></a>
Determines the number scale value of the number format\.  
_Required_: No  
_Type_: String  
_Allowed values_: `AUTO | BILLIONS | MILLIONS | NONE | THOUSANDS | TRILLIONS`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Prefix` <a name="cfn-quicksight-analysis-numberdisplayformatconfiguration-prefix"></a>
Determines the prefix value of the number format\.  
_Required_: No  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `128`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`SeparatorConfiguration` <a name="cfn-quicksight-analysis-numberdisplayformatconfiguration-separatorconfiguration"></a>
The options that determine the numeric separator configuration\.  
_Required_: No  
_Type_: [NumericSeparatorConfiguration](aws-properties-quicksight-analysis-numericseparatorconfiguration.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Suffix` <a name="cfn-quicksight-analysis-numberdisplayformatconfiguration-suffix"></a>
Determines the suffix value of the number format\.  
_Required_: No  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `128`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
