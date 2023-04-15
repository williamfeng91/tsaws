# AWS::QuickSight::Analysis DynamicDefaultValue<a name="aws-properties-quicksight-analysis-dynamicdefaultvalue"></a>

Defines different defaults to the users or groups based on mapping\.

## Syntax<a name="aws-properties-quicksight-analysis-dynamicdefaultvalue-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-analysis-dynamicdefaultvalue-syntax.json"></a>

```
{
  "[DefaultValueColumn](#cfn-quicksight-analysis-dynamicdefaultvalue-defaultvaluecolumn)" : ColumnIdentifier,
  "[GroupNameColumn](#cfn-quicksight-analysis-dynamicdefaultvalue-groupnamecolumn)" : ColumnIdentifier,
  "[UserNameColumn](#cfn-quicksight-analysis-dynamicdefaultvalue-usernamecolumn)" : ColumnIdentifier
}
```

### YAML<a name="aws-properties-quicksight-analysis-dynamicdefaultvalue-syntax.yaml"></a>

```
  [DefaultValueColumn](#cfn-quicksight-analysis-dynamicdefaultvalue-defaultvaluecolumn):
    ColumnIdentifier
  [GroupNameColumn](#cfn-quicksight-analysis-dynamicdefaultvalue-groupnamecolumn):
    ColumnIdentifier
  [UserNameColumn](#cfn-quicksight-analysis-dynamicdefaultvalue-usernamecolumn):
    ColumnIdentifier
```

## Properties<a name="aws-properties-quicksight-analysis-dynamicdefaultvalue-properties"></a>

`DefaultValueColumn` <a name="cfn-quicksight-analysis-dynamicdefaultvalue-defaultvaluecolumn"></a>
The column that contains the default value of each user or group\.  
_Required_: Yes  
_Type_: [ColumnIdentifier](aws-properties-quicksight-analysis-columnidentifier.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`GroupNameColumn` <a name="cfn-quicksight-analysis-dynamicdefaultvalue-groupnamecolumn"></a>
The column that contains the group name\.  
_Required_: No  
_Type_: [ColumnIdentifier](aws-properties-quicksight-analysis-columnidentifier.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`UserNameColumn` <a name="cfn-quicksight-analysis-dynamicdefaultvalue-usernamecolumn"></a>
The column that contains the username\.  
_Required_: No  
_Type_: [ColumnIdentifier](aws-properties-quicksight-analysis-columnidentifier.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
