# AWS::QuickSight::Dashboard ParameterSelectableValues<a name="aws-properties-quicksight-dashboard-parameterselectablevalues"></a>

A list of selectable values that are used in a control\.

## Syntax<a name="aws-properties-quicksight-dashboard-parameterselectablevalues-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-dashboard-parameterselectablevalues-syntax.json"></a>

```
{
  "[LinkToDataSetColumn](#cfn-quicksight-dashboard-parameterselectablevalues-linktodatasetcolumn)" : ColumnIdentifier,
  "[Values](#cfn-quicksight-dashboard-parameterselectablevalues-values)" : [ String, ... ]
}
```

### YAML<a name="aws-properties-quicksight-dashboard-parameterselectablevalues-syntax.yaml"></a>

```
  [LinkToDataSetColumn](#cfn-quicksight-dashboard-parameterselectablevalues-linktodatasetcolumn):
    ColumnIdentifier
  [Values](#cfn-quicksight-dashboard-parameterselectablevalues-values):
    - String
```

## Properties<a name="aws-properties-quicksight-dashboard-parameterselectablevalues-properties"></a>

`LinkToDataSetColumn` <a name="cfn-quicksight-dashboard-parameterselectablevalues-linktodatasetcolumn"></a>
The column identifier that fetches values from the data set\.  
_Required_: No  
_Type_: [ColumnIdentifier](aws-properties-quicksight-dashboard-columnidentifier.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Values` <a name="cfn-quicksight-dashboard-parameterselectablevalues-values"></a>
The values that are used in `ParameterSelectableValues`\.  
_Required_: No  
_Type_: List of String  
_Maximum_: `50000`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
