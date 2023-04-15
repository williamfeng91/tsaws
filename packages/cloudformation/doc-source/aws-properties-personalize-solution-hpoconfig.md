# AWS::Personalize::Solution HpoConfig<a name="aws-properties-personalize-solution-hpoconfig"></a>

Describes the properties for hyperparameter optimization \(HPO\)\.

## Syntax<a name="aws-properties-personalize-solution-hpoconfig-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-personalize-solution-hpoconfig-syntax.json"></a>

```
{
  "[AlgorithmHyperParameterRanges](#cfn-personalize-solution-hpoconfig-algorithmhyperparameterranges)" : AlgorithmHyperParameterRanges,
  "[HpoObjective](#cfn-personalize-solution-hpoconfig-hpoobjective)" : HpoObjective,
  "[HpoResourceConfig](#cfn-personalize-solution-hpoconfig-hporesourceconfig)" : HpoResourceConfig
}
```

### YAML<a name="aws-properties-personalize-solution-hpoconfig-syntax.yaml"></a>

```
  [AlgorithmHyperParameterRanges](#cfn-personalize-solution-hpoconfig-algorithmhyperparameterranges):
    AlgorithmHyperParameterRanges
  [HpoObjective](#cfn-personalize-solution-hpoconfig-hpoobjective):
    HpoObjective
  [HpoResourceConfig](#cfn-personalize-solution-hpoconfig-hporesourceconfig):
    HpoResourceConfig
```

## Properties<a name="aws-properties-personalize-solution-hpoconfig-properties"></a>

`AlgorithmHyperParameterRanges` <a name="cfn-personalize-solution-hpoconfig-algorithmhyperparameterranges"></a>
The hyperparameters and their allowable ranges\.  
_Required_: No  
_Type_: [AlgorithmHyperParameterRanges](aws-properties-personalize-solution-algorithmhyperparameterranges.md)  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`HpoObjective` <a name="cfn-personalize-solution-hpoconfig-hpoobjective"></a>
The metric to optimize during HPO\.  
Amazon Personalize doesn't support configuring the `hpoObjective` at this time\.
_Required_: No  
_Type_: [HpoObjective](aws-properties-personalize-solution-hpoobjective.md)  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`HpoResourceConfig` <a name="cfn-personalize-solution-hpoconfig-hporesourceconfig"></a>
Describes the resource configuration for HPO\.  
_Required_: No  
_Type_: [HpoResourceConfig](aws-properties-personalize-solution-hporesourceconfig.md)  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
