# AWS::QuickSight::Dashboard PivotTableConfiguration<a name="aws-properties-quicksight-dashboard-pivottableconfiguration"></a>

The configuration for a `PivotTableVisual`\.

## Syntax<a name="aws-properties-quicksight-dashboard-pivottableconfiguration-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-dashboard-pivottableconfiguration-syntax.json"></a>

```
{
  "[FieldOptions](#cfn-quicksight-dashboard-pivottableconfiguration-fieldoptions)" : PivotTableFieldOptions,
  "[FieldWells](#cfn-quicksight-dashboard-pivottableconfiguration-fieldwells)" : PivotTableFieldWells,
  "[PaginatedReportOptions](#cfn-quicksight-dashboard-pivottableconfiguration-paginatedreportoptions)" : PivotTablePaginatedReportOptions,
  "[SortConfiguration](#cfn-quicksight-dashboard-pivottableconfiguration-sortconfiguration)" : PivotTableSortConfiguration,
  "[TableOptions](#cfn-quicksight-dashboard-pivottableconfiguration-tableoptions)" : PivotTableOptions,
  "[TotalOptions](#cfn-quicksight-dashboard-pivottableconfiguration-totaloptions)" : PivotTableTotalOptions
}
```

### YAML<a name="aws-properties-quicksight-dashboard-pivottableconfiguration-syntax.yaml"></a>

```
  [FieldOptions](#cfn-quicksight-dashboard-pivottableconfiguration-fieldoptions):
    PivotTableFieldOptions
  [FieldWells](#cfn-quicksight-dashboard-pivottableconfiguration-fieldwells):
    PivotTableFieldWells
  [PaginatedReportOptions](#cfn-quicksight-dashboard-pivottableconfiguration-paginatedreportoptions):
    PivotTablePaginatedReportOptions
  [SortConfiguration](#cfn-quicksight-dashboard-pivottableconfiguration-sortconfiguration):
    PivotTableSortConfiguration
  [TableOptions](#cfn-quicksight-dashboard-pivottableconfiguration-tableoptions):
    PivotTableOptions
  [TotalOptions](#cfn-quicksight-dashboard-pivottableconfiguration-totaloptions):
    PivotTableTotalOptions
```

## Properties<a name="aws-properties-quicksight-dashboard-pivottableconfiguration-properties"></a>

`FieldOptions` <a name="cfn-quicksight-dashboard-pivottableconfiguration-fieldoptions"></a>
The field options for a pivot table visual\.  
_Required_: No  
_Type_: [PivotTableFieldOptions](aws-properties-quicksight-dashboard-pivottablefieldoptions.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`FieldWells` <a name="cfn-quicksight-dashboard-pivottableconfiguration-fieldwells"></a>
The field wells of the visual\.  
_Required_: No  
_Type_: [PivotTableFieldWells](aws-properties-quicksight-dashboard-pivottablefieldwells.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`PaginatedReportOptions` <a name="cfn-quicksight-dashboard-pivottableconfiguration-paginatedreportoptions"></a>
The paginated report options for a pivot table visual\.  
_Required_: No  
_Type_: [PivotTablePaginatedReportOptions](aws-properties-quicksight-dashboard-pivottablepaginatedreportoptions.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`SortConfiguration` <a name="cfn-quicksight-dashboard-pivottableconfiguration-sortconfiguration"></a>
The sort configuration for a `PivotTableVisual`\.  
_Required_: No  
_Type_: [PivotTableSortConfiguration](aws-properties-quicksight-dashboard-pivottablesortconfiguration.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`TableOptions` <a name="cfn-quicksight-dashboard-pivottableconfiguration-tableoptions"></a>
The table options for a pivot table visual\.  
_Required_: No  
_Type_: [PivotTableOptions](aws-properties-quicksight-dashboard-pivottableoptions.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`TotalOptions` <a name="cfn-quicksight-dashboard-pivottableconfiguration-totaloptions"></a>
The total options for a pivot table visual\.  
_Required_: No  
_Type_: [PivotTableTotalOptions](aws-properties-quicksight-dashboard-pivottabletotaloptions.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
