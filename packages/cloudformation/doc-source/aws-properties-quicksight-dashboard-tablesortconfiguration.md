# AWS::QuickSight::Dashboard TableSortConfiguration<a name="aws-properties-quicksight-dashboard-tablesortconfiguration"></a>

The sort configuration for a `TableVisual`\.

## Syntax<a name="aws-properties-quicksight-dashboard-tablesortconfiguration-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-dashboard-tablesortconfiguration-syntax.json"></a>

```
{
  "[PaginationConfiguration](#cfn-quicksight-dashboard-tablesortconfiguration-paginationconfiguration)" : PaginationConfiguration,
  "[RowSort](#cfn-quicksight-dashboard-tablesortconfiguration-rowsort)" : [ FieldSortOptions, ... ]
}
```

### YAML<a name="aws-properties-quicksight-dashboard-tablesortconfiguration-syntax.yaml"></a>

```
  [PaginationConfiguration](#cfn-quicksight-dashboard-tablesortconfiguration-paginationconfiguration):
    PaginationConfiguration
  [RowSort](#cfn-quicksight-dashboard-tablesortconfiguration-rowsort):
    - FieldSortOptions
```

## Properties<a name="aws-properties-quicksight-dashboard-tablesortconfiguration-properties"></a>

`PaginationConfiguration` <a name="cfn-quicksight-dashboard-tablesortconfiguration-paginationconfiguration"></a>
The pagination configuration \(page size, page number\) for the table\.  
_Required_: No  
_Type_: [PaginationConfiguration](aws-properties-quicksight-dashboard-paginationconfiguration.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`RowSort` <a name="cfn-quicksight-dashboard-tablesortconfiguration-rowsort"></a>
The field sort options for rows in the table\.  
_Required_: No  
_Type_: List of [FieldSortOptions](aws-properties-quicksight-dashboard-fieldsortoptions.md)  
_Maximum_: `100`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
