# AWS::QuickSight::Dashboard ArcConfiguration<a name="aws-properties-quicksight-dashboard-arcconfiguration"></a>

The arc configuration of a `GaugeChartVisual`\.

## Syntax<a name="aws-properties-quicksight-dashboard-arcconfiguration-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-dashboard-arcconfiguration-syntax.json"></a>

```
{
  "[ArcAngle](#cfn-quicksight-dashboard-arcconfiguration-arcangle)" : Double,
  "[ArcThickness](#cfn-quicksight-dashboard-arcconfiguration-arcthickness)" : String
}
```

### YAML<a name="aws-properties-quicksight-dashboard-arcconfiguration-syntax.yaml"></a>

```
  [ArcAngle](#cfn-quicksight-dashboard-arcconfiguration-arcangle): Double
  [ArcThickness](#cfn-quicksight-dashboard-arcconfiguration-arcthickness): String
```

## Properties<a name="aws-properties-quicksight-dashboard-arcconfiguration-properties"></a>

`ArcAngle` <a name="cfn-quicksight-dashboard-arcconfiguration-arcangle"></a>
The option that determines the arc angle of a `GaugeChartVisual`\.  
_Required_: No  
_Type_: Double  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`ArcThickness` <a name="cfn-quicksight-dashboard-arcconfiguration-arcthickness"></a>
The options that determine the arc thickness of a `GaugeChartVisual`\.  
_Required_: No  
_Type_: String  
_Allowed values_: `LARGE | MEDIUM | SMALL`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)