# AWS::QuickSight::Dashboard SankeyDiagramSortConfiguration<a name="aws-properties-quicksight-dashboard-sankeydiagramsortconfiguration"></a>

The sort configuration of a sankey diagram\.

## Syntax<a name="aws-properties-quicksight-dashboard-sankeydiagramsortconfiguration-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-dashboard-sankeydiagramsortconfiguration-syntax.json"></a>

```
{
  "[DestinationItemsLimit](#cfn-quicksight-dashboard-sankeydiagramsortconfiguration-destinationitemslimit)" : ItemsLimitConfiguration,
  "[SourceItemsLimit](#cfn-quicksight-dashboard-sankeydiagramsortconfiguration-sourceitemslimit)" : ItemsLimitConfiguration,
  "[WeightSort](#cfn-quicksight-dashboard-sankeydiagramsortconfiguration-weightsort)" : [ FieldSortOptions, ... ]
}
```

### YAML<a name="aws-properties-quicksight-dashboard-sankeydiagramsortconfiguration-syntax.yaml"></a>

```
  [DestinationItemsLimit](#cfn-quicksight-dashboard-sankeydiagramsortconfiguration-destinationitemslimit):
    ItemsLimitConfiguration
  [SourceItemsLimit](#cfn-quicksight-dashboard-sankeydiagramsortconfiguration-sourceitemslimit):
    ItemsLimitConfiguration
  [WeightSort](#cfn-quicksight-dashboard-sankeydiagramsortconfiguration-weightsort):
    - FieldSortOptions
```

## Properties<a name="aws-properties-quicksight-dashboard-sankeydiagramsortconfiguration-properties"></a>

`DestinationItemsLimit` <a name="cfn-quicksight-dashboard-sankeydiagramsortconfiguration-destinationitemslimit"></a>
The limit on the number of destination nodes that are displayed in a sankey diagram\.  
_Required_: No  
_Type_: [ItemsLimitConfiguration](aws-properties-quicksight-dashboard-itemslimitconfiguration.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`SourceItemsLimit` <a name="cfn-quicksight-dashboard-sankeydiagramsortconfiguration-sourceitemslimit"></a>
The limit on the number of source nodes that are displayed in a sankey diagram\.  
_Required_: No  
_Type_: [ItemsLimitConfiguration](aws-properties-quicksight-dashboard-itemslimitconfiguration.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`WeightSort` <a name="cfn-quicksight-dashboard-sankeydiagramsortconfiguration-weightsort"></a>
The sort configuration of the weight fields\.  
_Required_: No  
_Type_: List of [FieldSortOptions](aws-properties-quicksight-dashboard-fieldsortoptions.md)  
_Maximum_: `100`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
