# AWS::QuickSight::Analysis InsightConfiguration<a name="aws-properties-quicksight-analysis-insightconfiguration"></a>

The configuration of an insight visual\.

## Syntax<a name="aws-properties-quicksight-analysis-insightconfiguration-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-analysis-insightconfiguration-syntax.json"></a>

```
{
  "[Computations](#cfn-quicksight-analysis-insightconfiguration-computations)" : [ Computation, ... ],
  "[CustomNarrative](#cfn-quicksight-analysis-insightconfiguration-customnarrative)" : CustomNarrativeOptions
}
```

### YAML<a name="aws-properties-quicksight-analysis-insightconfiguration-syntax.yaml"></a>

```
  [Computations](#cfn-quicksight-analysis-insightconfiguration-computations):
    - Computation
  [CustomNarrative](#cfn-quicksight-analysis-insightconfiguration-customnarrative):
    CustomNarrativeOptions
```

## Properties<a name="aws-properties-quicksight-analysis-insightconfiguration-properties"></a>

`Computations` <a name="cfn-quicksight-analysis-insightconfiguration-computations"></a>
The computations configurations of the insight visual  
_Required_: No  
_Type_: List of [Computation](aws-properties-quicksight-analysis-computation.md)  
_Maximum_: `100`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`CustomNarrative` <a name="cfn-quicksight-analysis-insightconfiguration-customnarrative"></a>
The custom narrative of the insight visual\.  
_Required_: No  
_Type_: [CustomNarrativeOptions](aws-properties-quicksight-analysis-customnarrativeoptions.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
