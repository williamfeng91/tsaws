# AWS::QuickSight::Template BarChartSortConfiguration<a name="aws-properties-quicksight-template-barchartsortconfiguration"></a>

sort\-configuration\-description

## Syntax<a name="aws-properties-quicksight-template-barchartsortconfiguration-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-template-barchartsortconfiguration-syntax.json"></a>

```
{
  "[CategoryItemsLimit](#cfn-quicksight-template-barchartsortconfiguration-categoryitemslimit)" : ItemsLimitConfiguration,
  "[CategorySort](#cfn-quicksight-template-barchartsortconfiguration-categorysort)" : [ FieldSortOptions, ... ],
  "[ColorItemsLimit](#cfn-quicksight-template-barchartsortconfiguration-coloritemslimit)" : ItemsLimitConfiguration,
  "[ColorSort](#cfn-quicksight-template-barchartsortconfiguration-colorsort)" : [ FieldSortOptions, ... ],
  "[SmallMultiplesLimitConfiguration](#cfn-quicksight-template-barchartsortconfiguration-smallmultipleslimitconfiguration)" : ItemsLimitConfiguration,
  "[SmallMultiplesSort](#cfn-quicksight-template-barchartsortconfiguration-smallmultiplessort)" : [ FieldSortOptions, ... ]
}
```

### YAML<a name="aws-properties-quicksight-template-barchartsortconfiguration-syntax.yaml"></a>

```
  [CategoryItemsLimit](#cfn-quicksight-template-barchartsortconfiguration-categoryitemslimit):
    ItemsLimitConfiguration
  [CategorySort](#cfn-quicksight-template-barchartsortconfiguration-categorysort):
    - FieldSortOptions
  [ColorItemsLimit](#cfn-quicksight-template-barchartsortconfiguration-coloritemslimit):
    ItemsLimitConfiguration
  [ColorSort](#cfn-quicksight-template-barchartsortconfiguration-colorsort):
    - FieldSortOptions
  [SmallMultiplesLimitConfiguration](#cfn-quicksight-template-barchartsortconfiguration-smallmultipleslimitconfiguration):
    ItemsLimitConfiguration
  [SmallMultiplesSort](#cfn-quicksight-template-barchartsortconfiguration-smallmultiplessort):
    - FieldSortOptions
```

## Properties<a name="aws-properties-quicksight-template-barchartsortconfiguration-properties"></a>

`CategoryItemsLimit` <a name="cfn-quicksight-template-barchartsortconfiguration-categoryitemslimit"></a>
The limit on the number of categories displayed in a bar chart\.  
_Required_: No  
_Type_: [ItemsLimitConfiguration](aws-properties-quicksight-template-itemslimitconfiguration.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`CategorySort` <a name="cfn-quicksight-template-barchartsortconfiguration-categorysort"></a>
The sort configuration of category fields\.  
_Required_: No  
_Type_: List of [FieldSortOptions](aws-properties-quicksight-template-fieldsortoptions.md)  
_Maximum_: `100`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`ColorItemsLimit` <a name="cfn-quicksight-template-barchartsortconfiguration-coloritemslimit"></a>
The limit on the number of values displayed in a bar chart\.  
_Required_: No  
_Type_: [ItemsLimitConfiguration](aws-properties-quicksight-template-itemslimitconfiguration.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`ColorSort` <a name="cfn-quicksight-template-barchartsortconfiguration-colorsort"></a>
The sort configuration of color fields in a bar chart\.  
_Required_: No  
_Type_: List of [FieldSortOptions](aws-properties-quicksight-template-fieldsortoptions.md)  
_Maximum_: `100`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`SmallMultiplesLimitConfiguration` <a name="cfn-quicksight-template-barchartsortconfiguration-smallmultipleslimitconfiguration"></a>
The limit on the number of small multiples panels that are displayed\.  
_Required_: No  
_Type_: [ItemsLimitConfiguration](aws-properties-quicksight-template-itemslimitconfiguration.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`SmallMultiplesSort` <a name="cfn-quicksight-template-barchartsortconfiguration-smallmultiplessort"></a>
The sort configuration of the small multiples field\.  
_Required_: No  
_Type_: List of [FieldSortOptions](aws-properties-quicksight-template-fieldsortoptions.md)  
_Maximum_: `100`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
