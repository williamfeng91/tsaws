# AWS::QuickSight::Dashboard CategoryDrillDownFilter<a name="aws-properties-quicksight-dashboard-categorydrilldownfilter"></a>

The numeric equality type drill down filter\.

## Syntax<a name="aws-properties-quicksight-dashboard-categorydrilldownfilter-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-dashboard-categorydrilldownfilter-syntax.json"></a>

```
{
  "[CategoryValues](#cfn-quicksight-dashboard-categorydrilldownfilter-categoryvalues)" : [ String, ... ],
  "[Column](#cfn-quicksight-dashboard-categorydrilldownfilter-column)" : ColumnIdentifier
}
```

### YAML<a name="aws-properties-quicksight-dashboard-categorydrilldownfilter-syntax.yaml"></a>

```
  [CategoryValues](#cfn-quicksight-dashboard-categorydrilldownfilter-categoryvalues):
    - String
  [Column](#cfn-quicksight-dashboard-categorydrilldownfilter-column):
    ColumnIdentifier
```

## Properties<a name="aws-properties-quicksight-dashboard-categorydrilldownfilter-properties"></a>

`CategoryValues` <a name="cfn-quicksight-dashboard-categorydrilldownfilter-categoryvalues"></a>
A list of the string inputs that are the values of the category drill down filter\.  
_Required_: Yes  
_Type_: List of String  
_Maximum_: `100000`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Column` <a name="cfn-quicksight-dashboard-categorydrilldownfilter-column"></a>
The column that the filter is applied to\.  
_Required_: Yes  
_Type_: [ColumnIdentifier](aws-properties-quicksight-dashboard-columnidentifier.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
