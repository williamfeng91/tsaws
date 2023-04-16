# AWS::Personalize::Solution SolutionConfig<a name="aws-properties-personalize-solution-solutionconfig"></a>

Describes the configuration properties for the solution\.

## Syntax<a name="aws-properties-personalize-solution-solutionconfig-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-personalize-solution-solutionconfig-syntax.json"></a>

```
{
  "[AlgorithmHyperParameters](#cfn-personalize-solution-solutionconfig-algorithmhyperparameters)" : {Key : Value, ...},
  "[AutoMLConfig](#cfn-personalize-solution-solutionconfig-automlconfig)" : AutoMLConfig,
  "[EventValueThreshold](#cfn-personalize-solution-solutionconfig-eventvaluethreshold)" : String,
  "[FeatureTransformationParameters](#cfn-personalize-solution-solutionconfig-featuretransformationparameters)" : {Key : Value, ...},
  "[HpoConfig](#cfn-personalize-solution-solutionconfig-hpoconfig)" : HpoConfig
}
```

### YAML<a name="aws-properties-personalize-solution-solutionconfig-syntax.yaml"></a>

```
  [AlgorithmHyperParameters](#cfn-personalize-solution-solutionconfig-algorithmhyperparameters):
    Key : Value
  [AutoMLConfig](#cfn-personalize-solution-solutionconfig-automlconfig):
    AutoMLConfig
  [EventValueThreshold](#cfn-personalize-solution-solutionconfig-eventvaluethreshold): String
  [FeatureTransformationParameters](#cfn-personalize-solution-solutionconfig-featuretransformationparameters):
    Key : Value
  [HpoConfig](#cfn-personalize-solution-solutionconfig-hpoconfig):
    HpoConfig
```

## Properties<a name="aws-properties-personalize-solution-solutionconfig-properties"></a>

`AlgorithmHyperParameters` <a name="cfn-personalize-solution-solutionconfig-algorithmhyperparameters"></a>
Lists the hyperparameter names and ranges\.  
_Required_: No  
_Type_: Map of String  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`AutoMLConfig` <a name="cfn-personalize-solution-solutionconfig-automlconfig"></a>
The [AutoMLConfig](https://docs.aws.amazon.com/personalize/latest/dg/API_AutoMLConfig.html) object containing a list of recipes to search when AutoML is performed\.  
_Required_: No  
_Type_: [AutoMLConfig](aws-properties-personalize-solution-automlconfig.md)  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`EventValueThreshold` <a name="cfn-personalize-solution-solutionconfig-eventvaluethreshold"></a>
Only events with a value greater than or equal to this threshold are used for training a model\.  
_Required_: No  
_Type_: String  
_Maximum_: `256`  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`FeatureTransformationParameters` <a name="cfn-personalize-solution-solutionconfig-featuretransformationparameters"></a>
Lists the feature transformation parameters\.  
_Required_: No  
_Type_: Map of String  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`HpoConfig` <a name="cfn-personalize-solution-solutionconfig-hpoconfig"></a>
Describes the properties for hyperparameter optimization \(HPO\)\.  
_Required_: No  
_Type_: [HpoConfig](aws-properties-personalize-solution-hpoconfig.md)  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
