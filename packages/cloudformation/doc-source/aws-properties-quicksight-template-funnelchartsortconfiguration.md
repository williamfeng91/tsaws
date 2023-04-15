# AWS::QuickSight::Template FunnelChartSortConfiguration<a name="aws-properties-quicksight-template-funnelchartsortconfiguration"></a>

The sort configuration of a `FunnelChartVisual`\.

## Syntax<a name="aws-properties-quicksight-template-funnelchartsortconfiguration-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-template-funnelchartsortconfiguration-syntax.json"></a>

```
{
  "[CategoryItemsLimit](#cfn-quicksight-template-funnelchartsortconfiguration-categoryitemslimit)" : ItemsLimitConfiguration,
  "[CategorySort](#cfn-quicksight-template-funnelchartsortconfiguration-categorysort)" : [ FieldSortOptions, ... ]
}
```

### YAML<a name="aws-properties-quicksight-template-funnelchartsortconfiguration-syntax.yaml"></a>

```
  [CategoryItemsLimit](#cfn-quicksight-template-funnelchartsortconfiguration-categoryitemslimit):
    ItemsLimitConfiguration
  [CategorySort](#cfn-quicksight-template-funnelchartsortconfiguration-categorysort):
    - FieldSortOptions
```

## Properties<a name="aws-properties-quicksight-template-funnelchartsortconfiguration-properties"></a>

`CategoryItemsLimit` <a name="cfn-quicksight-template-funnelchartsortconfiguration-categoryitemslimit"></a>
The limit on the number of categories displayed\.  
_Required_: No  
_Type_: [ItemsLimitConfiguration](aws-properties-quicksight-template-itemslimitconfiguration.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`CategorySort` <a name="cfn-quicksight-template-funnelchartsortconfiguration-categorysort"></a>
The sort configuration of the category fields\.  
_Required_: No  
_Type_: List of [FieldSortOptions](aws-properties-quicksight-template-fieldsortoptions.md)  
_Maximum_: `100`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
