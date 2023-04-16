# AWS::QuickSight::Template KPIOptions<a name="aws-properties-quicksight-template-kpioptions"></a>

The options that determine the presentation of a KPI visual\.

## Syntax<a name="aws-properties-quicksight-template-kpioptions-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-template-kpioptions-syntax.json"></a>

```
{
  "[Comparison](#cfn-quicksight-template-kpioptions-comparison)" : ComparisonConfiguration,
  "[PrimaryValueDisplayType](#cfn-quicksight-template-kpioptions-primaryvaluedisplaytype)" : String,
  "[PrimaryValueFontConfiguration](#cfn-quicksight-template-kpioptions-primaryvaluefontconfiguration)" : FontConfiguration,
  "[ProgressBar](#cfn-quicksight-template-kpioptions-progressbar)" : ProgressBarOptions,
  "[SecondaryValue](#cfn-quicksight-template-kpioptions-secondaryvalue)" : SecondaryValueOptions,
  "[SecondaryValueFontConfiguration](#cfn-quicksight-template-kpioptions-secondaryvaluefontconfiguration)" : FontConfiguration,
  "[TrendArrows](#cfn-quicksight-template-kpioptions-trendarrows)" : TrendArrowOptions
}
```

### YAML<a name="aws-properties-quicksight-template-kpioptions-syntax.yaml"></a>

```
  [Comparison](#cfn-quicksight-template-kpioptions-comparison):
    ComparisonConfiguration
  [PrimaryValueDisplayType](#cfn-quicksight-template-kpioptions-primaryvaluedisplaytype): String
  [PrimaryValueFontConfiguration](#cfn-quicksight-template-kpioptions-primaryvaluefontconfiguration):
    FontConfiguration
  [ProgressBar](#cfn-quicksight-template-kpioptions-progressbar):
    ProgressBarOptions
  [SecondaryValue](#cfn-quicksight-template-kpioptions-secondaryvalue):
    SecondaryValueOptions
  [SecondaryValueFontConfiguration](#cfn-quicksight-template-kpioptions-secondaryvaluefontconfiguration):
    FontConfiguration
  [TrendArrows](#cfn-quicksight-template-kpioptions-trendarrows):
    TrendArrowOptions
```

## Properties<a name="aws-properties-quicksight-template-kpioptions-properties"></a>

`Comparison` <a name="cfn-quicksight-template-kpioptions-comparison"></a>
The comparison configuration of a KPI visual\.  
_Required_: No  
_Type_: [ComparisonConfiguration](aws-properties-quicksight-template-comparisonconfiguration.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`PrimaryValueDisplayType` <a name="cfn-quicksight-template-kpioptions-primaryvaluedisplaytype"></a>
The options that determine the primary value display type\.  
_Required_: No  
_Type_: String  
_Allowed values_: `ACTUAL | COMPARISON | HIDDEN`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`PrimaryValueFontConfiguration` <a name="cfn-quicksight-template-kpioptions-primaryvaluefontconfiguration"></a>
The options that determine the primary value font configuration\.  
_Required_: No  
_Type_: [FontConfiguration](aws-properties-quicksight-template-fontconfiguration.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`ProgressBar` <a name="cfn-quicksight-template-kpioptions-progressbar"></a>
The options that determine the presentation of the progress bar of a KPI visual\.  
_Required_: No  
_Type_: [ProgressBarOptions](aws-properties-quicksight-template-progressbaroptions.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`SecondaryValue` <a name="cfn-quicksight-template-kpioptions-secondaryvalue"></a>
The options that determine the presentation of the secondary value of a KPI visual\.  
_Required_: No  
_Type_: [SecondaryValueOptions](aws-properties-quicksight-template-secondaryvalueoptions.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`SecondaryValueFontConfiguration` <a name="cfn-quicksight-template-kpioptions-secondaryvaluefontconfiguration"></a>
The options that determine the secondary value font configuration\.  
_Required_: No  
_Type_: [FontConfiguration](aws-properties-quicksight-template-fontconfiguration.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`TrendArrows` <a name="cfn-quicksight-template-kpioptions-trendarrows"></a>
The options that determine the presentation of trend arrows in a KPI visual\.  
_Required_: No  
_Type_: [TrendArrowOptions](aws-properties-quicksight-template-trendarrowoptions.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
