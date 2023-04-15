# AWS::QuickSight::Dashboard SecondaryValueOptions<a name="aws-properties-quicksight-dashboard-secondaryvalueoptions"></a>

The options that determine the presentation of the secondary value of a KPI visual\.

## Syntax<a name="aws-properties-quicksight-dashboard-secondaryvalueoptions-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-dashboard-secondaryvalueoptions-syntax.json"></a>

```
{
  "[Visibility](#cfn-quicksight-dashboard-secondaryvalueoptions-visibility)" : String
}
```

### YAML<a name="aws-properties-quicksight-dashboard-secondaryvalueoptions-syntax.yaml"></a>

```
  [Visibility](#cfn-quicksight-dashboard-secondaryvalueoptions-visibility): String
```

## Properties<a name="aws-properties-quicksight-dashboard-secondaryvalueoptions-properties"></a>

`Visibility` <a name="cfn-quicksight-dashboard-secondaryvalueoptions-visibility"></a>
Determines the visibility of the secondary value\.  
_Required_: No  
_Type_: String  
_Allowed values_: `HIDDEN | VISIBLE`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
