# AWS::QuickSight::Analysis RadarChartSortConfiguration<a name="aws-properties-quicksight-analysis-radarchartsortconfiguration"></a>

The sort configuration of a `RadarChartVisual`\.

## Syntax<a name="aws-properties-quicksight-analysis-radarchartsortconfiguration-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-analysis-radarchartsortconfiguration-syntax.json"></a>

```
{
  "[CategoryItemsLimit](#cfn-quicksight-analysis-radarchartsortconfiguration-categoryitemslimit)" : ItemsLimitConfiguration,
  "[CategorySort](#cfn-quicksight-analysis-radarchartsortconfiguration-categorysort)" : [ FieldSortOptions, ... ],
  "[ColorItemsLimit](#cfn-quicksight-analysis-radarchartsortconfiguration-coloritemslimit)" : ItemsLimitConfiguration,
  "[ColorSort](#cfn-quicksight-analysis-radarchartsortconfiguration-colorsort)" : [ FieldSortOptions, ... ]
}
```

### YAML<a name="aws-properties-quicksight-analysis-radarchartsortconfiguration-syntax.yaml"></a>

```
  [CategoryItemsLimit](#cfn-quicksight-analysis-radarchartsortconfiguration-categoryitemslimit):
    ItemsLimitConfiguration
  [CategorySort](#cfn-quicksight-analysis-radarchartsortconfiguration-categorysort):
    - FieldSortOptions
  [ColorItemsLimit](#cfn-quicksight-analysis-radarchartsortconfiguration-coloritemslimit):
    ItemsLimitConfiguration
  [ColorSort](#cfn-quicksight-analysis-radarchartsortconfiguration-colorsort):
    - FieldSortOptions
```

## Properties<a name="aws-properties-quicksight-analysis-radarchartsortconfiguration-properties"></a>

`CategoryItemsLimit` <a name="cfn-quicksight-analysis-radarchartsortconfiguration-categoryitemslimit"></a>
The category items limit for a radar chart\.  
_Required_: No  
_Type_: [ItemsLimitConfiguration](aws-properties-quicksight-analysis-itemslimitconfiguration.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`CategorySort` <a name="cfn-quicksight-analysis-radarchartsortconfiguration-categorysort"></a>
The category sort options of a radar chart\.  
_Required_: No  
_Type_: List of [FieldSortOptions](aws-properties-quicksight-analysis-fieldsortoptions.md)  
_Maximum_: `100`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`ColorItemsLimit` <a name="cfn-quicksight-analysis-radarchartsortconfiguration-coloritemslimit"></a>
The color items limit of a radar chart\.  
_Required_: No  
_Type_: [ItemsLimitConfiguration](aws-properties-quicksight-analysis-itemslimitconfiguration.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`ColorSort` <a name="cfn-quicksight-analysis-radarchartsortconfiguration-colorsort"></a>
The color sort configuration of a radar chart\.  
_Required_: No  
_Type_: List of [FieldSortOptions](aws-properties-quicksight-analysis-fieldsortoptions.md)  
_Maximum_: `100`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
