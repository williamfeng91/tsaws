# AWS::QuickSight::Template PieChartSortConfiguration<a name="aws-properties-quicksight-template-piechartsortconfiguration"></a>

The sort configuration of a pie chart\.

## Syntax<a name="aws-properties-quicksight-template-piechartsortconfiguration-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-template-piechartsortconfiguration-syntax.json"></a>

```
{
  "[CategoryItemsLimit](#cfn-quicksight-template-piechartsortconfiguration-categoryitemslimit)" : ItemsLimitConfiguration,
  "[CategorySort](#cfn-quicksight-template-piechartsortconfiguration-categorysort)" : [ FieldSortOptions, ... ],
  "[SmallMultiplesLimitConfiguration](#cfn-quicksight-template-piechartsortconfiguration-smallmultipleslimitconfiguration)" : ItemsLimitConfiguration,
  "[SmallMultiplesSort](#cfn-quicksight-template-piechartsortconfiguration-smallmultiplessort)" : [ FieldSortOptions, ... ]
}
```

### YAML<a name="aws-properties-quicksight-template-piechartsortconfiguration-syntax.yaml"></a>

```
  [CategoryItemsLimit](#cfn-quicksight-template-piechartsortconfiguration-categoryitemslimit):
    ItemsLimitConfiguration
  [CategorySort](#cfn-quicksight-template-piechartsortconfiguration-categorysort):
    - FieldSortOptions
  [SmallMultiplesLimitConfiguration](#cfn-quicksight-template-piechartsortconfiguration-smallmultipleslimitconfiguration):
    ItemsLimitConfiguration
  [SmallMultiplesSort](#cfn-quicksight-template-piechartsortconfiguration-smallmultiplessort):
    - FieldSortOptions
```

## Properties<a name="aws-properties-quicksight-template-piechartsortconfiguration-properties"></a>

`CategoryItemsLimit` <a name="cfn-quicksight-template-piechartsortconfiguration-categoryitemslimit"></a>
The limit on the number of categories that are displayed in a pie chart\.  
_Required_: No  
_Type_: [ItemsLimitConfiguration](aws-properties-quicksight-template-itemslimitconfiguration.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`CategorySort` <a name="cfn-quicksight-template-piechartsortconfiguration-categorysort"></a>
The sort configuration of the category fields\.  
_Required_: No  
_Type_: List of [FieldSortOptions](aws-properties-quicksight-template-fieldsortoptions.md)  
_Maximum_: `100`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`SmallMultiplesLimitConfiguration` <a name="cfn-quicksight-template-piechartsortconfiguration-smallmultipleslimitconfiguration"></a>
The limit on the number of small multiples panels that are displayed\.  
_Required_: No  
_Type_: [ItemsLimitConfiguration](aws-properties-quicksight-template-itemslimitconfiguration.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`SmallMultiplesSort` <a name="cfn-quicksight-template-piechartsortconfiguration-smallmultiplessort"></a>
The sort configuration of the small multiples field\.  
_Required_: No  
_Type_: List of [FieldSortOptions](aws-properties-quicksight-template-fieldsortoptions.md)  
_Maximum_: `100`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
