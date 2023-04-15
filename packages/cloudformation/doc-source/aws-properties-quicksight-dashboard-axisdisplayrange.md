# AWS::QuickSight::Dashboard AxisDisplayRange<a name="aws-properties-quicksight-dashboard-axisdisplayrange"></a>

The range setup of a numeric axis display range\.

This is a union type structure\. For this structure to be valid, only one of the attributes can be defined\.

## Syntax<a name="aws-properties-quicksight-dashboard-axisdisplayrange-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-dashboard-axisdisplayrange-syntax.json"></a>

```
{
  "[DataDriven](#cfn-quicksight-dashboard-axisdisplayrange-datadriven)" : Json,
  "[MinMax](#cfn-quicksight-dashboard-axisdisplayrange-minmax)" : AxisDisplayMinMaxRange
}
```

### YAML<a name="aws-properties-quicksight-dashboard-axisdisplayrange-syntax.yaml"></a>

```
  [DataDriven](#cfn-quicksight-dashboard-axisdisplayrange-datadriven): Json
  [MinMax](#cfn-quicksight-dashboard-axisdisplayrange-minmax):
    AxisDisplayMinMaxRange
```

## Properties<a name="aws-properties-quicksight-dashboard-axisdisplayrange-properties"></a>

`DataDriven` <a name="cfn-quicksight-dashboard-axisdisplayrange-datadriven"></a>
The data\-driven setup of an axis display range\.  
_Required_: No  
_Type_: Json  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`MinMax` <a name="cfn-quicksight-dashboard-axisdisplayrange-minmax"></a>
The minimum and maximum setup of an axis display range\.  
_Required_: No  
_Type_: [AxisDisplayMinMaxRange](aws-properties-quicksight-dashboard-axisdisplayminmaxrange.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
