# AWS::QuickSight::Analysis WordCloudSortConfiguration<a name="aws-properties-quicksight-analysis-wordcloudsortconfiguration"></a>

The sort configuration of a word cloud visual\.

## Syntax<a name="aws-properties-quicksight-analysis-wordcloudsortconfiguration-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-analysis-wordcloudsortconfiguration-syntax.json"></a>

```
{
  "[CategoryItemsLimit](#cfn-quicksight-analysis-wordcloudsortconfiguration-categoryitemslimit)" : ItemsLimitConfiguration,
  "[CategorySort](#cfn-quicksight-analysis-wordcloudsortconfiguration-categorysort)" : [ FieldSortOptions, ... ]
}
```

### YAML<a name="aws-properties-quicksight-analysis-wordcloudsortconfiguration-syntax.yaml"></a>

```
  [CategoryItemsLimit](#cfn-quicksight-analysis-wordcloudsortconfiguration-categoryitemslimit):
    ItemsLimitConfiguration
  [CategorySort](#cfn-quicksight-analysis-wordcloudsortconfiguration-categorysort):
    - FieldSortOptions
```

## Properties<a name="aws-properties-quicksight-analysis-wordcloudsortconfiguration-properties"></a>

`CategoryItemsLimit` <a name="cfn-quicksight-analysis-wordcloudsortconfiguration-categoryitemslimit"></a>
The limit on the number of groups that are displayed in a word cloud\.  
_Required_: No  
_Type_: [ItemsLimitConfiguration](aws-properties-quicksight-analysis-itemslimitconfiguration.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`CategorySort` <a name="cfn-quicksight-analysis-wordcloudsortconfiguration-categorysort"></a>
The sort configuration of group by fields\.  
_Required_: No  
_Type_: List of [FieldSortOptions](aws-properties-quicksight-analysis-fieldsortoptions.md)  
_Maximum_: `100`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
