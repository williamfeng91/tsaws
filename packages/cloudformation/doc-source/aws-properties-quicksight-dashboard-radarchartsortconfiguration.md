# AWS::QuickSight::Dashboard RadarChartSortConfiguration<a name="aws-properties-quicksight-dashboard-radarchartsortconfiguration"></a>

The sort configuration of a `RadarChartVisual`\.

## Syntax<a name="aws-properties-quicksight-dashboard-radarchartsortconfiguration-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-dashboard-radarchartsortconfiguration-syntax.json"></a>

```
{
  "[CategoryItemsLimit](#cfn-quicksight-dashboard-radarchartsortconfiguration-categoryitemslimit)" : ItemsLimitConfiguration,
  "[CategorySort](#cfn-quicksight-dashboard-radarchartsortconfiguration-categorysort)" : [ FieldSortOptions, ... ],
  "[ColorItemsLimit](#cfn-quicksight-dashboard-radarchartsortconfiguration-coloritemslimit)" : ItemsLimitConfiguration,
  "[ColorSort](#cfn-quicksight-dashboard-radarchartsortconfiguration-colorsort)" : [ FieldSortOptions, ... ]
}
```

### YAML<a name="aws-properties-quicksight-dashboard-radarchartsortconfiguration-syntax.yaml"></a>

```
  [CategoryItemsLimit](#cfn-quicksight-dashboard-radarchartsortconfiguration-categoryitemslimit):
    ItemsLimitConfiguration
  [CategorySort](#cfn-quicksight-dashboard-radarchartsortconfiguration-categorysort):
    - FieldSortOptions
  [ColorItemsLimit](#cfn-quicksight-dashboard-radarchartsortconfiguration-coloritemslimit):
    ItemsLimitConfiguration
  [ColorSort](#cfn-quicksight-dashboard-radarchartsortconfiguration-colorsort):
    - FieldSortOptions
```

## Properties<a name="aws-properties-quicksight-dashboard-radarchartsortconfiguration-properties"></a>

`CategoryItemsLimit` <a name="cfn-quicksight-dashboard-radarchartsortconfiguration-categoryitemslimit"></a>
The category items limit for a radar chart\.  
_Required_: No  
_Type_: [ItemsLimitConfiguration](aws-properties-quicksight-dashboard-itemslimitconfiguration.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`CategorySort` <a name="cfn-quicksight-dashboard-radarchartsortconfiguration-categorysort"></a>
The category sort options of a radar chart\.  
_Required_: No  
_Type_: List of [FieldSortOptions](aws-properties-quicksight-dashboard-fieldsortoptions.md)  
_Maximum_: `100`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`ColorItemsLimit` <a name="cfn-quicksight-dashboard-radarchartsortconfiguration-coloritemslimit"></a>
The color items limit of a radar chart\.  
_Required_: No  
_Type_: [ItemsLimitConfiguration](aws-properties-quicksight-dashboard-itemslimitconfiguration.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`ColorSort` <a name="cfn-quicksight-dashboard-radarchartsortconfiguration-colorsort"></a>
The color sort configuration of a radar chart\.  
_Required_: No  
_Type_: List of [FieldSortOptions](aws-properties-quicksight-dashboard-fieldsortoptions.md)  
_Maximum_: `100`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
