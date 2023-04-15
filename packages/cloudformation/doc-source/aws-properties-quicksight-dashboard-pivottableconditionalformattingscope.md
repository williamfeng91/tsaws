# AWS::QuickSight::Dashboard PivotTableConditionalFormattingScope<a name="aws-properties-quicksight-dashboard-pivottableconditionalformattingscope"></a>

The scope of the cell for conditional formatting\.

## Syntax<a name="aws-properties-quicksight-dashboard-pivottableconditionalformattingscope-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-dashboard-pivottableconditionalformattingscope-syntax.json"></a>

```
{
  "[Role](#cfn-quicksight-dashboard-pivottableconditionalformattingscope-role)" : String
}
```

### YAML<a name="aws-properties-quicksight-dashboard-pivottableconditionalformattingscope-syntax.yaml"></a>

```
  [Role](#cfn-quicksight-dashboard-pivottableconditionalformattingscope-role): String
```

## Properties<a name="aws-properties-quicksight-dashboard-pivottableconditionalformattingscope-properties"></a>

`Role` <a name="cfn-quicksight-dashboard-pivottableconditionalformattingscope-role"></a>
The role \(field, field total, grand total\) of the cell for conditional formatting\.  
_Required_: No  
_Type_: String  
_Allowed values_: `FIELD | FIELD_TOTAL | GRAND_TOTAL`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
