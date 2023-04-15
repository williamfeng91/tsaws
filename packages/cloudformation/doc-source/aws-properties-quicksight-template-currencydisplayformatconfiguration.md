# AWS::QuickSight::Template CurrencyDisplayFormatConfiguration<a name="aws-properties-quicksight-template-currencydisplayformatconfiguration"></a>

The options that determine the currency display format configuration\.

## Syntax<a name="aws-properties-quicksight-template-currencydisplayformatconfiguration-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-template-currencydisplayformatconfiguration-syntax.json"></a>

```
{
  "[DecimalPlacesConfiguration](#cfn-quicksight-template-currencydisplayformatconfiguration-decimalplacesconfiguration)" : DecimalPlacesConfiguration,
  "[NegativeValueConfiguration](#cfn-quicksight-template-currencydisplayformatconfiguration-negativevalueconfiguration)" : NegativeValueConfiguration,
  "[NullValueFormatConfiguration](#cfn-quicksight-template-currencydisplayformatconfiguration-nullvalueformatconfiguration)" : NullValueFormatConfiguration,
  "[NumberScale](#cfn-quicksight-template-currencydisplayformatconfiguration-numberscale)" : String,
  "[Prefix](#cfn-quicksight-template-currencydisplayformatconfiguration-prefix)" : String,
  "[SeparatorConfiguration](#cfn-quicksight-template-currencydisplayformatconfiguration-separatorconfiguration)" : NumericSeparatorConfiguration,
  "[Suffix](#cfn-quicksight-template-currencydisplayformatconfiguration-suffix)" : String,
  "[Symbol](#cfn-quicksight-template-currencydisplayformatconfiguration-symbol)" : String
}
```

### YAML<a name="aws-properties-quicksight-template-currencydisplayformatconfiguration-syntax.yaml"></a>

```
  [DecimalPlacesConfiguration](#cfn-quicksight-template-currencydisplayformatconfiguration-decimalplacesconfiguration):
    DecimalPlacesConfiguration
  [NegativeValueConfiguration](#cfn-quicksight-template-currencydisplayformatconfiguration-negativevalueconfiguration):
    NegativeValueConfiguration
  [NullValueFormatConfiguration](#cfn-quicksight-template-currencydisplayformatconfiguration-nullvalueformatconfiguration):
    NullValueFormatConfiguration
  [NumberScale](#cfn-quicksight-template-currencydisplayformatconfiguration-numberscale): String
  [Prefix](#cfn-quicksight-template-currencydisplayformatconfiguration-prefix): String
  [SeparatorConfiguration](#cfn-quicksight-template-currencydisplayformatconfiguration-separatorconfiguration):
    NumericSeparatorConfiguration
  [Suffix](#cfn-quicksight-template-currencydisplayformatconfiguration-suffix): String
  [Symbol](#cfn-quicksight-template-currencydisplayformatconfiguration-symbol): String
```

## Properties<a name="aws-properties-quicksight-template-currencydisplayformatconfiguration-properties"></a>

`DecimalPlacesConfiguration` <a name="cfn-quicksight-template-currencydisplayformatconfiguration-decimalplacesconfiguration"></a>
The option that determines the decimal places configuration\.  
_Required_: No  
_Type_: [DecimalPlacesConfiguration](aws-properties-quicksight-template-decimalplacesconfiguration.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`NegativeValueConfiguration` <a name="cfn-quicksight-template-currencydisplayformatconfiguration-negativevalueconfiguration"></a>
The options that determine the negative value configuration\.  
_Required_: No  
_Type_: [NegativeValueConfiguration](aws-properties-quicksight-template-negativevalueconfiguration.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`NullValueFormatConfiguration` <a name="cfn-quicksight-template-currencydisplayformatconfiguration-nullvalueformatconfiguration"></a>
The options that determine the null value format configuration\.  
_Required_: No  
_Type_: [NullValueFormatConfiguration](aws-properties-quicksight-template-nullvalueformatconfiguration.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`NumberScale` <a name="cfn-quicksight-template-currencydisplayformatconfiguration-numberscale"></a>
Determines the number scale value for the currency format\.  
_Required_: No  
_Type_: String  
_Allowed values_: `AUTO | BILLIONS | MILLIONS | NONE | THOUSANDS | TRILLIONS`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Prefix` <a name="cfn-quicksight-template-currencydisplayformatconfiguration-prefix"></a>
Determines the prefix value of the currency format\.  
_Required_: No  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `128`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`SeparatorConfiguration` <a name="cfn-quicksight-template-currencydisplayformatconfiguration-separatorconfiguration"></a>
The options that determine the numeric separator configuration\.  
_Required_: No  
_Type_: [NumericSeparatorConfiguration](aws-properties-quicksight-template-numericseparatorconfiguration.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Suffix` <a name="cfn-quicksight-template-currencydisplayformatconfiguration-suffix"></a>
Determines the suffix value of the currency format\.  
_Required_: No  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `128`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Symbol` <a name="cfn-quicksight-template-currencydisplayformatconfiguration-symbol"></a>
Determines the symbol for the currency format\.  
_Required_: No  
_Type_: String  
_Pattern_: `[A-Z]{3}`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
