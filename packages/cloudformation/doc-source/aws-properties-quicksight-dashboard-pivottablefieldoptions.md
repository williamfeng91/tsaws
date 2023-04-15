# AWS::QuickSight::Dashboard PivotTableFieldOptions<a name="aws-properties-quicksight-dashboard-pivottablefieldoptions"></a>

The field options for a pivot table visual\.

## Syntax<a name="aws-properties-quicksight-dashboard-pivottablefieldoptions-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-dashboard-pivottablefieldoptions-syntax.json"></a>

```
{
  "[DataPathOptions](#cfn-quicksight-dashboard-pivottablefieldoptions-datapathoptions)" : [ PivotTableDataPathOption, ... ],
  "[SelectedFieldOptions](#cfn-quicksight-dashboard-pivottablefieldoptions-selectedfieldoptions)" : [ PivotTableFieldOption, ... ]
}
```

### YAML<a name="aws-properties-quicksight-dashboard-pivottablefieldoptions-syntax.yaml"></a>

```
  [DataPathOptions](#cfn-quicksight-dashboard-pivottablefieldoptions-datapathoptions):
    - PivotTableDataPathOption
  [SelectedFieldOptions](#cfn-quicksight-dashboard-pivottablefieldoptions-selectedfieldoptions):
    - PivotTableFieldOption
```

## Properties<a name="aws-properties-quicksight-dashboard-pivottablefieldoptions-properties"></a>

`DataPathOptions` <a name="cfn-quicksight-dashboard-pivottablefieldoptions-datapathoptions"></a>
The data path options for the pivot table field options\.  
_Required_: No  
_Type_: List of [PivotTableDataPathOption](aws-properties-quicksight-dashboard-pivottabledatapathoption.md)  
_Maximum_: `100`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`SelectedFieldOptions` <a name="cfn-quicksight-dashboard-pivottablefieldoptions-selectedfieldoptions"></a>
The selected field options for the pivot table field options\.  
_Required_: No  
_Type_: List of [PivotTableFieldOption](aws-properties-quicksight-dashboard-pivottablefieldoption.md)  
_Maximum_: `100`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
