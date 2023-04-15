# AWS::QuickSight::Dashboard PivotTableSortBy<a name="aws-properties-quicksight-dashboard-pivottablesortby"></a>

The sort by field for the field sort options\.

## Syntax<a name="aws-properties-quicksight-dashboard-pivottablesortby-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-dashboard-pivottablesortby-syntax.json"></a>

```
{
  "[Column](#cfn-quicksight-dashboard-pivottablesortby-column)" : ColumnSort,
  "[DataPath](#cfn-quicksight-dashboard-pivottablesortby-datapath)" : DataPathSort,
  "[Field](#cfn-quicksight-dashboard-pivottablesortby-field)" : FieldSort
}
```

### YAML<a name="aws-properties-quicksight-dashboard-pivottablesortby-syntax.yaml"></a>

```
  [Column](#cfn-quicksight-dashboard-pivottablesortby-column):
    ColumnSort
  [DataPath](#cfn-quicksight-dashboard-pivottablesortby-datapath):
    DataPathSort
  [Field](#cfn-quicksight-dashboard-pivottablesortby-field):
    FieldSort
```

## Properties<a name="aws-properties-quicksight-dashboard-pivottablesortby-properties"></a>

`Column` <a name="cfn-quicksight-dashboard-pivottablesortby-column"></a>
The column sort \(field id, direction\) for the pivot table sort by options\.  
_Required_: No  
_Type_: [ColumnSort](aws-properties-quicksight-dashboard-columnsort.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`DataPath` <a name="cfn-quicksight-dashboard-pivottablesortby-datapath"></a>
The data path sort \(data path value, direction\) for the pivot table sort by options\.  
_Required_: No  
_Type_: [DataPathSort](aws-properties-quicksight-dashboard-datapathsort.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Field` <a name="cfn-quicksight-dashboard-pivottablesortby-field"></a>
The field sort \(field id, direction\) for the pivot table sort by options\.  
_Required_: No  
_Type_: [FieldSort](aws-properties-quicksight-dashboard-fieldsort.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
