# AWS::QuickSight::Dashboard InsightConfiguration<a name="aws-properties-quicksight-dashboard-insightconfiguration"></a>

The configuration of an insight visual\.

## Syntax<a name="aws-properties-quicksight-dashboard-insightconfiguration-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-dashboard-insightconfiguration-syntax.json"></a>

```
{
  "[Computations](#cfn-quicksight-dashboard-insightconfiguration-computations)" : [ Computation, ... ],
  "[CustomNarrative](#cfn-quicksight-dashboard-insightconfiguration-customnarrative)" : CustomNarrativeOptions
}
```

### YAML<a name="aws-properties-quicksight-dashboard-insightconfiguration-syntax.yaml"></a>

```
  [Computations](#cfn-quicksight-dashboard-insightconfiguration-computations):
    - Computation
  [CustomNarrative](#cfn-quicksight-dashboard-insightconfiguration-customnarrative):
    CustomNarrativeOptions
```

## Properties<a name="aws-properties-quicksight-dashboard-insightconfiguration-properties"></a>

`Computations` <a name="cfn-quicksight-dashboard-insightconfiguration-computations"></a>
The computations configurations of the insight visual  
_Required_: No  
_Type_: List of [Computation](aws-properties-quicksight-dashboard-computation.md)  
_Maximum_: `100`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`CustomNarrative` <a name="cfn-quicksight-dashboard-insightconfiguration-customnarrative"></a>
The custom narrative of the insight visual\.  
_Required_: No  
_Type_: [CustomNarrativeOptions](aws-properties-quicksight-dashboard-customnarrativeoptions.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
