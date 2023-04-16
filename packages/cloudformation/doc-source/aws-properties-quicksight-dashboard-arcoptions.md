# AWS::QuickSight::Dashboard ArcOptions<a name="aws-properties-quicksight-dashboard-arcoptions"></a>

The options that determine the arc thickness of a `GaugeChartVisual`\.

## Syntax<a name="aws-properties-quicksight-dashboard-arcoptions-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-dashboard-arcoptions-syntax.json"></a>

```
{
  "[ArcThickness](#cfn-quicksight-dashboard-arcoptions-arcthickness)" : String
}
```

### YAML<a name="aws-properties-quicksight-dashboard-arcoptions-syntax.yaml"></a>

```
  [ArcThickness](#cfn-quicksight-dashboard-arcoptions-arcthickness): String
```

## Properties<a name="aws-properties-quicksight-dashboard-arcoptions-properties"></a>

`ArcThickness` <a name="cfn-quicksight-dashboard-arcoptions-arcthickness"></a>
The arc thickness of a `GaugeChartVisual`\.  
_Required_: No  
_Type_: String  
_Allowed values_: `LARGE | MEDIUM | SMALL | WHOLE`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
