# AWS::QuickSight::Analysis SetParameterValueConfiguration<a name="aws-properties-quicksight-analysis-setparametervalueconfiguration"></a>

The configuration of adding parameters in action\.

## Syntax<a name="aws-properties-quicksight-analysis-setparametervalueconfiguration-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-analysis-setparametervalueconfiguration-syntax.json"></a>

```
{
  "[DestinationParameterName](#cfn-quicksight-analysis-setparametervalueconfiguration-destinationparametername)" : String,
  "[Value](#cfn-quicksight-analysis-setparametervalueconfiguration-value)" : DestinationParameterValueConfiguration
}
```

### YAML<a name="aws-properties-quicksight-analysis-setparametervalueconfiguration-syntax.yaml"></a>

```
  [DestinationParameterName](#cfn-quicksight-analysis-setparametervalueconfiguration-destinationparametername): String
  [Value](#cfn-quicksight-analysis-setparametervalueconfiguration-value):
    DestinationParameterValueConfiguration
```

## Properties<a name="aws-properties-quicksight-analysis-setparametervalueconfiguration-properties"></a>

`DestinationParameterName` <a name="cfn-quicksight-analysis-setparametervalueconfiguration-destinationparametername"></a>
The destination parameter name of the `SetParameterValueConfiguration`\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `2048`  
_Pattern_: `^[a-zA-Z0-9]+$`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Value` <a name="cfn-quicksight-analysis-setparametervalueconfiguration-value"></a>
Property description not available\.  
_Required_: Yes  
_Type_: [DestinationParameterValueConfiguration](aws-properties-quicksight-analysis-destinationparametervalueconfiguration.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
