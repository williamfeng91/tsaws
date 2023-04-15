# AWS::QuickSight::Dashboard NumericFormatConfiguration<a name="aws-properties-quicksight-dashboard-numericformatconfiguration"></a>

The options that determine the numeric format configuration\.

This is a union type structure\. For this structure to be valid, only one of the attributes can be defined\.

## Syntax<a name="aws-properties-quicksight-dashboard-numericformatconfiguration-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-dashboard-numericformatconfiguration-syntax.json"></a>

```
{
  "[CurrencyDisplayFormatConfiguration](#cfn-quicksight-dashboard-numericformatconfiguration-currencydisplayformatconfiguration)" : CurrencyDisplayFormatConfiguration,
  "[NumberDisplayFormatConfiguration](#cfn-quicksight-dashboard-numericformatconfiguration-numberdisplayformatconfiguration)" : NumberDisplayFormatConfiguration,
  "[PercentageDisplayFormatConfiguration](#cfn-quicksight-dashboard-numericformatconfiguration-percentagedisplayformatconfiguration)" : PercentageDisplayFormatConfiguration
}
```

### YAML<a name="aws-properties-quicksight-dashboard-numericformatconfiguration-syntax.yaml"></a>

```
  [CurrencyDisplayFormatConfiguration](#cfn-quicksight-dashboard-numericformatconfiguration-currencydisplayformatconfiguration):
    CurrencyDisplayFormatConfiguration
  [NumberDisplayFormatConfiguration](#cfn-quicksight-dashboard-numericformatconfiguration-numberdisplayformatconfiguration):
    NumberDisplayFormatConfiguration
  [PercentageDisplayFormatConfiguration](#cfn-quicksight-dashboard-numericformatconfiguration-percentagedisplayformatconfiguration):
    PercentageDisplayFormatConfiguration
```

## Properties<a name="aws-properties-quicksight-dashboard-numericformatconfiguration-properties"></a>

`CurrencyDisplayFormatConfiguration` <a name="cfn-quicksight-dashboard-numericformatconfiguration-currencydisplayformatconfiguration"></a>
The options that determine the currency display format configuration\.  
_Required_: No  
_Type_: [CurrencyDisplayFormatConfiguration](aws-properties-quicksight-dashboard-currencydisplayformatconfiguration.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`NumberDisplayFormatConfiguration` <a name="cfn-quicksight-dashboard-numericformatconfiguration-numberdisplayformatconfiguration"></a>
The options that determine the number display format configuration\.  
_Required_: No  
_Type_: [NumberDisplayFormatConfiguration](aws-properties-quicksight-dashboard-numberdisplayformatconfiguration.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`PercentageDisplayFormatConfiguration` <a name="cfn-quicksight-dashboard-numericformatconfiguration-percentagedisplayformatconfiguration"></a>
The options that determine the percentage display format configuration\.  
_Required_: No  
_Type_: [PercentageDisplayFormatConfiguration](aws-properties-quicksight-dashboard-percentagedisplayformatconfiguration.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
