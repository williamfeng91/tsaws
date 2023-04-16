# AWS::QuickSight::Analysis TreeMapSortConfiguration<a name="aws-properties-quicksight-analysis-treemapsortconfiguration"></a>

The sort configuration of a tree map\.

## Syntax<a name="aws-properties-quicksight-analysis-treemapsortconfiguration-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-analysis-treemapsortconfiguration-syntax.json"></a>

```
{
  "[TreeMapGroupItemsLimitConfiguration](#cfn-quicksight-analysis-treemapsortconfiguration-treemapgroupitemslimitconfiguration)" : ItemsLimitConfiguration,
  "[TreeMapSort](#cfn-quicksight-analysis-treemapsortconfiguration-treemapsort)" : [ FieldSortOptions, ... ]
}
```

### YAML<a name="aws-properties-quicksight-analysis-treemapsortconfiguration-syntax.yaml"></a>

```
  [TreeMapGroupItemsLimitConfiguration](#cfn-quicksight-analysis-treemapsortconfiguration-treemapgroupitemslimitconfiguration):
    ItemsLimitConfiguration
  [TreeMapSort](#cfn-quicksight-analysis-treemapsortconfiguration-treemapsort):
    - FieldSortOptions
```

## Properties<a name="aws-properties-quicksight-analysis-treemapsortconfiguration-properties"></a>

`TreeMapGroupItemsLimitConfiguration` <a name="cfn-quicksight-analysis-treemapsortconfiguration-treemapgroupitemslimitconfiguration"></a>
The limit on the number of groups that are displayed\.  
_Required_: No  
_Type_: [ItemsLimitConfiguration](aws-properties-quicksight-analysis-itemslimitconfiguration.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`TreeMapSort` <a name="cfn-quicksight-analysis-treemapsortconfiguration-treemapsort"></a>
The sort configuration of group by fields\.  
_Required_: No  
_Type_: List of [FieldSortOptions](aws-properties-quicksight-analysis-fieldsortoptions.md)  
_Maximum_: `100`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
