# AWS::QuickSight::Analysis WordCloudChartConfiguration<a name="aws-properties-quicksight-analysis-wordcloudchartconfiguration"></a>

The configuration of a word cloud visual\.

## Syntax<a name="aws-properties-quicksight-analysis-wordcloudchartconfiguration-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-analysis-wordcloudchartconfiguration-syntax.json"></a>

```
{
  "[CategoryLabelOptions](#cfn-quicksight-analysis-wordcloudchartconfiguration-categorylabeloptions)" : ChartAxisLabelOptions,
  "[FieldWells](#cfn-quicksight-analysis-wordcloudchartconfiguration-fieldwells)" : WordCloudFieldWells,
  "[SortConfiguration](#cfn-quicksight-analysis-wordcloudchartconfiguration-sortconfiguration)" : WordCloudSortConfiguration,
  "[WordCloudOptions](#cfn-quicksight-analysis-wordcloudchartconfiguration-wordcloudoptions)" : WordCloudOptions
}
```

### YAML<a name="aws-properties-quicksight-analysis-wordcloudchartconfiguration-syntax.yaml"></a>

```
  [CategoryLabelOptions](#cfn-quicksight-analysis-wordcloudchartconfiguration-categorylabeloptions):
    ChartAxisLabelOptions
  [FieldWells](#cfn-quicksight-analysis-wordcloudchartconfiguration-fieldwells):
    WordCloudFieldWells
  [SortConfiguration](#cfn-quicksight-analysis-wordcloudchartconfiguration-sortconfiguration):
    WordCloudSortConfiguration
  [WordCloudOptions](#cfn-quicksight-analysis-wordcloudchartconfiguration-wordcloudoptions):
    WordCloudOptions
```

## Properties<a name="aws-properties-quicksight-analysis-wordcloudchartconfiguration-properties"></a>

`CategoryLabelOptions` <a name="cfn-quicksight-analysis-wordcloudchartconfiguration-categorylabeloptions"></a>
The label options \(label text, label visibility, and sort icon visibility\) for the word cloud category\.  
_Required_: No  
_Type_: [ChartAxisLabelOptions](aws-properties-quicksight-analysis-chartaxislabeloptions.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`FieldWells` <a name="cfn-quicksight-analysis-wordcloudchartconfiguration-fieldwells"></a>
The field wells of the visual\.  
_Required_: No  
_Type_: [WordCloudFieldWells](aws-properties-quicksight-analysis-wordcloudfieldwells.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`SortConfiguration` <a name="cfn-quicksight-analysis-wordcloudchartconfiguration-sortconfiguration"></a>
The sort configuration of a word cloud visual\.  
_Required_: No  
_Type_: [WordCloudSortConfiguration](aws-properties-quicksight-analysis-wordcloudsortconfiguration.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`WordCloudOptions` <a name="cfn-quicksight-analysis-wordcloudchartconfiguration-wordcloudoptions"></a>
The options for a word cloud visual\.  
_Required_: No  
_Type_: [WordCloudOptions](aws-properties-quicksight-analysis-wordcloudoptions.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
