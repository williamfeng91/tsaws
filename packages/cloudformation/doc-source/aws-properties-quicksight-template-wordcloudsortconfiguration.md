# AWS::QuickSight::Template WordCloudSortConfiguration<a name="aws-properties-quicksight-template-wordcloudsortconfiguration"></a>

The sort configuration of a word cloud visual\.

## Syntax<a name="aws-properties-quicksight-template-wordcloudsortconfiguration-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-template-wordcloudsortconfiguration-syntax.json"></a>

```
{
  "[CategoryItemsLimit](#cfn-quicksight-template-wordcloudsortconfiguration-categoryitemslimit)" : ItemsLimitConfiguration,
  "[CategorySort](#cfn-quicksight-template-wordcloudsortconfiguration-categorysort)" : [ FieldSortOptions, ... ]
}
```

### YAML<a name="aws-properties-quicksight-template-wordcloudsortconfiguration-syntax.yaml"></a>

```
  [CategoryItemsLimit](#cfn-quicksight-template-wordcloudsortconfiguration-categoryitemslimit):
    ItemsLimitConfiguration
  [CategorySort](#cfn-quicksight-template-wordcloudsortconfiguration-categorysort):
    - FieldSortOptions
```

## Properties<a name="aws-properties-quicksight-template-wordcloudsortconfiguration-properties"></a>

`CategoryItemsLimit` <a name="cfn-quicksight-template-wordcloudsortconfiguration-categoryitemslimit"></a>
The limit on the number of groups that are displayed in a word cloud\.  
_Required_: No  
_Type_: [ItemsLimitConfiguration](aws-properties-quicksight-template-itemslimitconfiguration.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`CategorySort` <a name="cfn-quicksight-template-wordcloudsortconfiguration-categorysort"></a>
The sort configuration of group by fields\.  
_Required_: No  
_Type_: List of [FieldSortOptions](aws-properties-quicksight-template-fieldsortoptions.md)  
_Maximum_: `100`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
