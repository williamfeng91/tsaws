# AWS::QuickSight::Template RowAlternateColorOptions<a name="aws-properties-quicksight-template-rowalternatecoloroptions"></a>

Determines the row alternate color options\.

## Syntax<a name="aws-properties-quicksight-template-rowalternatecoloroptions-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-template-rowalternatecoloroptions-syntax.json"></a>

```
{
  "[RowAlternateColors](#cfn-quicksight-template-rowalternatecoloroptions-rowalternatecolors)" : [ String, ... ],
  "[Status](#cfn-quicksight-template-rowalternatecoloroptions-status)" : String
}
```

### YAML<a name="aws-properties-quicksight-template-rowalternatecoloroptions-syntax.yaml"></a>

```
  [RowAlternateColors](#cfn-quicksight-template-rowalternatecoloroptions-rowalternatecolors):
    - String
  [Status](#cfn-quicksight-template-rowalternatecoloroptions-status): String
```

## Properties<a name="aws-properties-quicksight-template-rowalternatecoloroptions-properties"></a>

`RowAlternateColors` <a name="cfn-quicksight-template-rowalternatecoloroptions-rowalternatecolors"></a>
Determines the list of row alternate colors\.  
_Required_: No  
_Type_: List of String  
_Maximum_: `1`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Status` <a name="cfn-quicksight-template-rowalternatecoloroptions-status"></a>
Determines the widget status\.  
_Required_: No  
_Type_: String  
_Allowed values_: `DISABLED | ENABLED`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
