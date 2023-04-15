# AWS::QuickSight::Dashboard TableFieldOptions<a name="aws-properties-quicksight-dashboard-tablefieldoptions"></a>

The field options for a table visual\.

## Syntax<a name="aws-properties-quicksight-dashboard-tablefieldoptions-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-dashboard-tablefieldoptions-syntax.json"></a>

```
{
  "[Order](#cfn-quicksight-dashboard-tablefieldoptions-order)" : [ String, ... ],
  "[SelectedFieldOptions](#cfn-quicksight-dashboard-tablefieldoptions-selectedfieldoptions)" : [ TableFieldOption, ... ]
}
```

### YAML<a name="aws-properties-quicksight-dashboard-tablefieldoptions-syntax.yaml"></a>

```
  [Order](#cfn-quicksight-dashboard-tablefieldoptions-order):
    - String
  [SelectedFieldOptions](#cfn-quicksight-dashboard-tablefieldoptions-selectedfieldoptions):
    - TableFieldOption
```

## Properties<a name="aws-properties-quicksight-dashboard-tablefieldoptions-properties"></a>

`Order` <a name="cfn-quicksight-dashboard-tablefieldoptions-order"></a>
The order of field IDs of the field options for a table visual\.  
_Required_: No  
_Type_: List of String  
_Maximum_: `100`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`SelectedFieldOptions` <a name="cfn-quicksight-dashboard-tablefieldoptions-selectedfieldoptions"></a>
The selected field options for the table field options\.  
_Required_: No  
_Type_: List of [TableFieldOption](aws-properties-quicksight-dashboard-tablefieldoption.md)  
_Maximum_: `100`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
