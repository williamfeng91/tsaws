# AWS::QuickSight::Dashboard FilterSelectableValues<a name="aws-properties-quicksight-dashboard-filterselectablevalues"></a>

A list of selectable values that are used in a control\.

## Syntax<a name="aws-properties-quicksight-dashboard-filterselectablevalues-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-dashboard-filterselectablevalues-syntax.json"></a>

```
{
  "[Values](#cfn-quicksight-dashboard-filterselectablevalues-values)" : [ String, ... ]
}
```

### YAML<a name="aws-properties-quicksight-dashboard-filterselectablevalues-syntax.yaml"></a>

```
  [Values](#cfn-quicksight-dashboard-filterselectablevalues-values):
    - String
```

## Properties<a name="aws-properties-quicksight-dashboard-filterselectablevalues-properties"></a>

`Values` <a name="cfn-quicksight-dashboard-filterselectablevalues-values"></a>
The values that are used in the `FilterSelectableValues`\.  
_Required_: No  
_Type_: List of String  
_Maximum_: `50000`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
