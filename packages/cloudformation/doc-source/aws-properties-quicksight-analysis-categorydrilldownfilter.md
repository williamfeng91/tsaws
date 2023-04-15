# AWS::QuickSight::Analysis CategoryDrillDownFilter<a name="aws-properties-quicksight-analysis-categorydrilldownfilter"></a>

The numeric equality type drill down filter\.

## Syntax<a name="aws-properties-quicksight-analysis-categorydrilldownfilter-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-analysis-categorydrilldownfilter-syntax.json"></a>

```
{
  "[CategoryValues](#cfn-quicksight-analysis-categorydrilldownfilter-categoryvalues)" : [ String, ... ],
  "[Column](#cfn-quicksight-analysis-categorydrilldownfilter-column)" : ColumnIdentifier
}
```

### YAML<a name="aws-properties-quicksight-analysis-categorydrilldownfilter-syntax.yaml"></a>

```
  [CategoryValues](#cfn-quicksight-analysis-categorydrilldownfilter-categoryvalues):
    - String
  [Column](#cfn-quicksight-analysis-categorydrilldownfilter-column):
    ColumnIdentifier
```

## Properties<a name="aws-properties-quicksight-analysis-categorydrilldownfilter-properties"></a>

`CategoryValues` <a name="cfn-quicksight-analysis-categorydrilldownfilter-categoryvalues"></a>
A list of the string inputs that are the values of the category drill down filter\.  
_Required_: Yes  
_Type_: List of String  
_Maximum_: `100000`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Column` <a name="cfn-quicksight-analysis-categorydrilldownfilter-column"></a>
The column that the filter is applied to\.  
_Required_: Yes  
_Type_: [ColumnIdentifier](aws-properties-quicksight-analysis-columnidentifier.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
