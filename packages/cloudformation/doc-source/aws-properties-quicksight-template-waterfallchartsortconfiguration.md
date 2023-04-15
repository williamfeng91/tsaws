# AWS::QuickSight::Template WaterfallChartSortConfiguration<a name="aws-properties-quicksight-template-waterfallchartsortconfiguration"></a>

The sort configuration of a waterfall visual\.

## Syntax<a name="aws-properties-quicksight-template-waterfallchartsortconfiguration-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-template-waterfallchartsortconfiguration-syntax.json"></a>

```
{
  "[BreakdownItemsLimit](#cfn-quicksight-template-waterfallchartsortconfiguration-breakdownitemslimit)" : ItemsLimitConfiguration,
  "[CategorySort](#cfn-quicksight-template-waterfallchartsortconfiguration-categorysort)" : [ FieldSortOptions, ... ]
}
```

### YAML<a name="aws-properties-quicksight-template-waterfallchartsortconfiguration-syntax.yaml"></a>

```
  [BreakdownItemsLimit](#cfn-quicksight-template-waterfallchartsortconfiguration-breakdownitemslimit):
    ItemsLimitConfiguration
  [CategorySort](#cfn-quicksight-template-waterfallchartsortconfiguration-categorysort):
    - FieldSortOptions
```

## Properties<a name="aws-properties-quicksight-template-waterfallchartsortconfiguration-properties"></a>

`BreakdownItemsLimit` <a name="cfn-quicksight-template-waterfallchartsortconfiguration-breakdownitemslimit"></a>
The limit on the number of bar groups that are displayed\.  
_Required_: No  
_Type_: [ItemsLimitConfiguration](aws-properties-quicksight-template-itemslimitconfiguration.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`CategorySort` <a name="cfn-quicksight-template-waterfallchartsortconfiguration-categorysort"></a>
The sort configuration of the category fields\.  
_Required_: No  
_Type_: List of [FieldSortOptions](aws-properties-quicksight-template-fieldsortoptions.md)  
_Maximum_: `100`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
