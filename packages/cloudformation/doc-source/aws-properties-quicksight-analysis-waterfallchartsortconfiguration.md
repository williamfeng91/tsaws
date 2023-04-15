# AWS::QuickSight::Analysis WaterfallChartSortConfiguration<a name="aws-properties-quicksight-analysis-waterfallchartsortconfiguration"></a>

The sort configuration of a waterfall visual\.

## Syntax<a name="aws-properties-quicksight-analysis-waterfallchartsortconfiguration-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-analysis-waterfallchartsortconfiguration-syntax.json"></a>

```
{
  "[BreakdownItemsLimit](#cfn-quicksight-analysis-waterfallchartsortconfiguration-breakdownitemslimit)" : ItemsLimitConfiguration,
  "[CategorySort](#cfn-quicksight-analysis-waterfallchartsortconfiguration-categorysort)" : [ FieldSortOptions, ... ]
}
```

### YAML<a name="aws-properties-quicksight-analysis-waterfallchartsortconfiguration-syntax.yaml"></a>

```
  [BreakdownItemsLimit](#cfn-quicksight-analysis-waterfallchartsortconfiguration-breakdownitemslimit):
    ItemsLimitConfiguration
  [CategorySort](#cfn-quicksight-analysis-waterfallchartsortconfiguration-categorysort):
    - FieldSortOptions
```

## Properties<a name="aws-properties-quicksight-analysis-waterfallchartsortconfiguration-properties"></a>

`BreakdownItemsLimit` <a name="cfn-quicksight-analysis-waterfallchartsortconfiguration-breakdownitemslimit"></a>
The limit on the number of bar groups that are displayed\.  
_Required_: No  
_Type_: [ItemsLimitConfiguration](aws-properties-quicksight-analysis-itemslimitconfiguration.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`CategorySort` <a name="cfn-quicksight-analysis-waterfallchartsortconfiguration-categorysort"></a>
The sort configuration of the category fields\.  
_Required_: No  
_Type_: List of [FieldSortOptions](aws-properties-quicksight-analysis-fieldsortoptions.md)  
_Maximum_: `100`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
