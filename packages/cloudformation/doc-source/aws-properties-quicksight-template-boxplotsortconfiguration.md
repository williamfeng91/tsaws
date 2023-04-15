# AWS::QuickSight::Template BoxPlotSortConfiguration<a name="aws-properties-quicksight-template-boxplotsortconfiguration"></a>

The sort configuration of a `BoxPlotVisual`\.

## Syntax<a name="aws-properties-quicksight-template-boxplotsortconfiguration-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-template-boxplotsortconfiguration-syntax.json"></a>

```
{
  "[CategorySort](#cfn-quicksight-template-boxplotsortconfiguration-categorysort)" : [ FieldSortOptions, ... ],
  "[PaginationConfiguration](#cfn-quicksight-template-boxplotsortconfiguration-paginationconfiguration)" : PaginationConfiguration
}
```

### YAML<a name="aws-properties-quicksight-template-boxplotsortconfiguration-syntax.yaml"></a>

```
  [CategorySort](#cfn-quicksight-template-boxplotsortconfiguration-categorysort):
    - FieldSortOptions
  [PaginationConfiguration](#cfn-quicksight-template-boxplotsortconfiguration-paginationconfiguration):
    PaginationConfiguration
```

## Properties<a name="aws-properties-quicksight-template-boxplotsortconfiguration-properties"></a>

`CategorySort` <a name="cfn-quicksight-template-boxplotsortconfiguration-categorysort"></a>
The sort configuration of a group by fields\.  
_Required_: No  
_Type_: List of [FieldSortOptions](aws-properties-quicksight-template-fieldsortoptions.md)  
_Maximum_: `100`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`PaginationConfiguration` <a name="cfn-quicksight-template-boxplotsortconfiguration-paginationconfiguration"></a>
The pagination configuration of a table visual or box plot\.  
_Required_: No  
_Type_: [PaginationConfiguration](aws-properties-quicksight-template-paginationconfiguration.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
