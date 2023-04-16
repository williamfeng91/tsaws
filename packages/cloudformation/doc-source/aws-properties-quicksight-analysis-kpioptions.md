# AWS::QuickSight::Analysis KPIOptions<a name="aws-properties-quicksight-analysis-kpioptions"></a>

The options that determine the presentation of a KPI visual\.

## Syntax<a name="aws-properties-quicksight-analysis-kpioptions-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-analysis-kpioptions-syntax.json"></a>

```
{
  "[Comparison](#cfn-quicksight-analysis-kpioptions-comparison)" : ComparisonConfiguration,
  "[PrimaryValueDisplayType](#cfn-quicksight-analysis-kpioptions-primaryvaluedisplaytype)" : String,
  "[PrimaryValueFontConfiguration](#cfn-quicksight-analysis-kpioptions-primaryvaluefontconfiguration)" : FontConfiguration,
  "[ProgressBar](#cfn-quicksight-analysis-kpioptions-progressbar)" : ProgressBarOptions,
  "[SecondaryValue](#cfn-quicksight-analysis-kpioptions-secondaryvalue)" : SecondaryValueOptions,
  "[SecondaryValueFontConfiguration](#cfn-quicksight-analysis-kpioptions-secondaryvaluefontconfiguration)" : FontConfiguration,
  "[TrendArrows](#cfn-quicksight-analysis-kpioptions-trendarrows)" : TrendArrowOptions
}
```

### YAML<a name="aws-properties-quicksight-analysis-kpioptions-syntax.yaml"></a>

```
  [Comparison](#cfn-quicksight-analysis-kpioptions-comparison):
    ComparisonConfiguration
  [PrimaryValueDisplayType](#cfn-quicksight-analysis-kpioptions-primaryvaluedisplaytype): String
  [PrimaryValueFontConfiguration](#cfn-quicksight-analysis-kpioptions-primaryvaluefontconfiguration):
    FontConfiguration
  [ProgressBar](#cfn-quicksight-analysis-kpioptions-progressbar):
    ProgressBarOptions
  [SecondaryValue](#cfn-quicksight-analysis-kpioptions-secondaryvalue):
    SecondaryValueOptions
  [SecondaryValueFontConfiguration](#cfn-quicksight-analysis-kpioptions-secondaryvaluefontconfiguration):
    FontConfiguration
  [TrendArrows](#cfn-quicksight-analysis-kpioptions-trendarrows):
    TrendArrowOptions
```

## Properties<a name="aws-properties-quicksight-analysis-kpioptions-properties"></a>

`Comparison` <a name="cfn-quicksight-analysis-kpioptions-comparison"></a>
The comparison configuration of a KPI visual\.  
_Required_: No  
_Type_: [ComparisonConfiguration](aws-properties-quicksight-analysis-comparisonconfiguration.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`PrimaryValueDisplayType` <a name="cfn-quicksight-analysis-kpioptions-primaryvaluedisplaytype"></a>
The options that determine the primary value display type\.  
_Required_: No  
_Type_: String  
_Allowed values_: `ACTUAL | COMPARISON | HIDDEN`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`PrimaryValueFontConfiguration` <a name="cfn-quicksight-analysis-kpioptions-primaryvaluefontconfiguration"></a>
The options that determine the primary value font configuration\.  
_Required_: No  
_Type_: [FontConfiguration](aws-properties-quicksight-analysis-fontconfiguration.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`ProgressBar` <a name="cfn-quicksight-analysis-kpioptions-progressbar"></a>
The options that determine the presentation of the progress bar of a KPI visual\.  
_Required_: No  
_Type_: [ProgressBarOptions](aws-properties-quicksight-analysis-progressbaroptions.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`SecondaryValue` <a name="cfn-quicksight-analysis-kpioptions-secondaryvalue"></a>
The options that determine the presentation of the secondary value of a KPI visual\.  
_Required_: No  
_Type_: [SecondaryValueOptions](aws-properties-quicksight-analysis-secondaryvalueoptions.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`SecondaryValueFontConfiguration` <a name="cfn-quicksight-analysis-kpioptions-secondaryvaluefontconfiguration"></a>
The options that determine the secondary value font configuration\.  
_Required_: No  
_Type_: [FontConfiguration](aws-properties-quicksight-analysis-fontconfiguration.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`TrendArrows` <a name="cfn-quicksight-analysis-kpioptions-trendarrows"></a>
The options that determine the presentation of trend arrows in a KPI visual\.  
_Required_: No  
_Type_: [TrendArrowOptions](aws-properties-quicksight-analysis-trendarrowoptions.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
