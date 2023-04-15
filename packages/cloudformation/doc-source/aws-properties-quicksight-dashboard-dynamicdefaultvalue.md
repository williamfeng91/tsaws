# AWS::QuickSight::Dashboard DynamicDefaultValue<a name="aws-properties-quicksight-dashboard-dynamicdefaultvalue"></a>

Defines different defaults to the users or groups based on mapping\.

## Syntax<a name="aws-properties-quicksight-dashboard-dynamicdefaultvalue-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-dashboard-dynamicdefaultvalue-syntax.json"></a>

```
{
  "[DefaultValueColumn](#cfn-quicksight-dashboard-dynamicdefaultvalue-defaultvaluecolumn)" : ColumnIdentifier,
  "[GroupNameColumn](#cfn-quicksight-dashboard-dynamicdefaultvalue-groupnamecolumn)" : ColumnIdentifier,
  "[UserNameColumn](#cfn-quicksight-dashboard-dynamicdefaultvalue-usernamecolumn)" : ColumnIdentifier
}
```

### YAML<a name="aws-properties-quicksight-dashboard-dynamicdefaultvalue-syntax.yaml"></a>

```
  [DefaultValueColumn](#cfn-quicksight-dashboard-dynamicdefaultvalue-defaultvaluecolumn):
    ColumnIdentifier
  [GroupNameColumn](#cfn-quicksight-dashboard-dynamicdefaultvalue-groupnamecolumn):
    ColumnIdentifier
  [UserNameColumn](#cfn-quicksight-dashboard-dynamicdefaultvalue-usernamecolumn):
    ColumnIdentifier
```

## Properties<a name="aws-properties-quicksight-dashboard-dynamicdefaultvalue-properties"></a>

`DefaultValueColumn` <a name="cfn-quicksight-dashboard-dynamicdefaultvalue-defaultvaluecolumn"></a>
The column that contains the default value of each user or group\.  
_Required_: Yes  
_Type_: [ColumnIdentifier](aws-properties-quicksight-dashboard-columnidentifier.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`GroupNameColumn` <a name="cfn-quicksight-dashboard-dynamicdefaultvalue-groupnamecolumn"></a>
The column that contains the group name\.  
_Required_: No  
_Type_: [ColumnIdentifier](aws-properties-quicksight-dashboard-columnidentifier.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`UserNameColumn` <a name="cfn-quicksight-dashboard-dynamicdefaultvalue-usernamecolumn"></a>
The column that contains the username\.  
_Required_: No  
_Type_: [ColumnIdentifier](aws-properties-quicksight-dashboard-columnidentifier.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
