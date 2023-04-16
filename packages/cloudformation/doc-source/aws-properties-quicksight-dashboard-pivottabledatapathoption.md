# AWS::QuickSight::Dashboard PivotTableDataPathOption<a name="aws-properties-quicksight-dashboard-pivottabledatapathoption"></a>

The data path options for the pivot table field options\.

## Syntax<a name="aws-properties-quicksight-dashboard-pivottabledatapathoption-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-dashboard-pivottabledatapathoption-syntax.json"></a>

```
{
  "[DataPathList](#cfn-quicksight-dashboard-pivottabledatapathoption-datapathlist)" : [ DataPathValue, ... ],
  "[Width](#cfn-quicksight-dashboard-pivottabledatapathoption-width)" : String
}
```

### YAML<a name="aws-properties-quicksight-dashboard-pivottabledatapathoption-syntax.yaml"></a>

```
  [DataPathList](#cfn-quicksight-dashboard-pivottabledatapathoption-datapathlist):
    - DataPathValue
  [Width](#cfn-quicksight-dashboard-pivottabledatapathoption-width): String
```

## Properties<a name="aws-properties-quicksight-dashboard-pivottabledatapathoption-properties"></a>

`DataPathList` <a name="cfn-quicksight-dashboard-pivottabledatapathoption-datapathlist"></a>
The list of data path values for the data path options\.  
_Required_: Yes  
_Type_: List of [DataPathValue](aws-properties-quicksight-dashboard-datapathvalue.md)  
_Maximum_: `20`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Width` <a name="cfn-quicksight-dashboard-pivottabledatapathoption-width"></a>
The width of the data path option\.  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
