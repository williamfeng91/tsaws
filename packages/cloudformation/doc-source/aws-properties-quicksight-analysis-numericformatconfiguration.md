# AWS::QuickSight::Analysis NumericFormatConfiguration<a name="aws-properties-quicksight-analysis-numericformatconfiguration"></a>

The options that determine the numeric format configuration\.

This is a union type structure\. For this structure to be valid, only one of the attributes can be defined\.

## Syntax<a name="aws-properties-quicksight-analysis-numericformatconfiguration-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-analysis-numericformatconfiguration-syntax.json"></a>

```
{
  "[CurrencyDisplayFormatConfiguration](#cfn-quicksight-analysis-numericformatconfiguration-currencydisplayformatconfiguration)" : CurrencyDisplayFormatConfiguration,
  "[NumberDisplayFormatConfiguration](#cfn-quicksight-analysis-numericformatconfiguration-numberdisplayformatconfiguration)" : NumberDisplayFormatConfiguration,
  "[PercentageDisplayFormatConfiguration](#cfn-quicksight-analysis-numericformatconfiguration-percentagedisplayformatconfiguration)" : PercentageDisplayFormatConfiguration
}
```

### YAML<a name="aws-properties-quicksight-analysis-numericformatconfiguration-syntax.yaml"></a>

```
  [CurrencyDisplayFormatConfiguration](#cfn-quicksight-analysis-numericformatconfiguration-currencydisplayformatconfiguration):
    CurrencyDisplayFormatConfiguration
  [NumberDisplayFormatConfiguration](#cfn-quicksight-analysis-numericformatconfiguration-numberdisplayformatconfiguration):
    NumberDisplayFormatConfiguration
  [PercentageDisplayFormatConfiguration](#cfn-quicksight-analysis-numericformatconfiguration-percentagedisplayformatconfiguration):
    PercentageDisplayFormatConfiguration
```

## Properties<a name="aws-properties-quicksight-analysis-numericformatconfiguration-properties"></a>

`CurrencyDisplayFormatConfiguration` <a name="cfn-quicksight-analysis-numericformatconfiguration-currencydisplayformatconfiguration"></a>
The options that determine the currency display format configuration\.  
_Required_: No  
_Type_: [CurrencyDisplayFormatConfiguration](aws-properties-quicksight-analysis-currencydisplayformatconfiguration.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`NumberDisplayFormatConfiguration` <a name="cfn-quicksight-analysis-numericformatconfiguration-numberdisplayformatconfiguration"></a>
The options that determine the number display format configuration\.  
_Required_: No  
_Type_: [NumberDisplayFormatConfiguration](aws-properties-quicksight-analysis-numberdisplayformatconfiguration.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`PercentageDisplayFormatConfiguration` <a name="cfn-quicksight-analysis-numericformatconfiguration-percentagedisplayformatconfiguration"></a>
The options that determine the percentage display format configuration\.  
_Required_: No  
_Type_: [PercentageDisplayFormatConfiguration](aws-properties-quicksight-analysis-percentagedisplayformatconfiguration.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
