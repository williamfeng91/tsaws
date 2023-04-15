# AWS::QuickSight::Dashboard CustomActionURLOperation<a name="aws-properties-quicksight-dashboard-customactionurloperation"></a>

The URL operation that opens a link to another webpage\.

## Syntax<a name="aws-properties-quicksight-dashboard-customactionurloperation-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-dashboard-customactionurloperation-syntax.json"></a>

```
{
  "[URLTarget](#cfn-quicksight-dashboard-customactionurloperation-urltarget)" : String,
  "[URLTemplate](#cfn-quicksight-dashboard-customactionurloperation-urltemplate)" : String
}
```

### YAML<a name="aws-properties-quicksight-dashboard-customactionurloperation-syntax.yaml"></a>

```
  [URLTarget](#cfn-quicksight-dashboard-customactionurloperation-urltarget): String
  [URLTemplate](#cfn-quicksight-dashboard-customactionurloperation-urltemplate): String
```

## Properties<a name="aws-properties-quicksight-dashboard-customactionurloperation-properties"></a>

`URLTarget` <a name="cfn-quicksight-dashboard-customactionurloperation-urltarget"></a>
The target of the `CustomActionURLOperation`\.  
Valid values are defined as follows:

- `NEW_TAB`: Opens the target URL in a new browser tab\.
- `NEW_WINDOW`: Opens the target URL in a new browser window\.
- `SAME_TAB`: Opens the target URL in the same browser tab\.
  _Required_: Yes  
  _Type_: String  
  _Allowed values_: `NEW_TAB | NEW_WINDOW | SAME_TAB`  
  _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`URLTemplate` <a name="cfn-quicksight-dashboard-customactionurloperation-urltemplate"></a>
THe URL link of the `CustomActionURLOperation`\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `2048`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
