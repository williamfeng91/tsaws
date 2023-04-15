# AWS::QuickSight::Template SetParameterValueConfiguration<a name="aws-properties-quicksight-template-setparametervalueconfiguration"></a>

The configuration of adding parameters in action\.

## Syntax<a name="aws-properties-quicksight-template-setparametervalueconfiguration-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-template-setparametervalueconfiguration-syntax.json"></a>

```
{
  "[DestinationParameterName](#cfn-quicksight-template-setparametervalueconfiguration-destinationparametername)" : String,
  "[Value](#cfn-quicksight-template-setparametervalueconfiguration-value)" : DestinationParameterValueConfiguration
}
```

### YAML<a name="aws-properties-quicksight-template-setparametervalueconfiguration-syntax.yaml"></a>

```
  [DestinationParameterName](#cfn-quicksight-template-setparametervalueconfiguration-destinationparametername): String
  [Value](#cfn-quicksight-template-setparametervalueconfiguration-value):
    DestinationParameterValueConfiguration
```

## Properties<a name="aws-properties-quicksight-template-setparametervalueconfiguration-properties"></a>

`DestinationParameterName` <a name="cfn-quicksight-template-setparametervalueconfiguration-destinationparametername"></a>
The destination parameter name of the `SetParameterValueConfiguration`\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `2048`  
_Pattern_: `^[a-zA-Z0-9]+$`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Value` <a name="cfn-quicksight-template-setparametervalueconfiguration-value"></a>
Property description not available\.  
_Required_: Yes  
_Type_: [DestinationParameterValueConfiguration](aws-properties-quicksight-template-destinationparametervalueconfiguration.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
