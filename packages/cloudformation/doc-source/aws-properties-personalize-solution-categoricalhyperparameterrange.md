# AWS::Personalize::Solution CategoricalHyperParameterRange<a name="aws-properties-personalize-solution-categoricalhyperparameterrange"></a>

Provides the name and range of a categorical hyperparameter\.

## Syntax<a name="aws-properties-personalize-solution-categoricalhyperparameterrange-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-personalize-solution-categoricalhyperparameterrange-syntax.json"></a>

```
{
  "[Name](#cfn-personalize-solution-categoricalhyperparameterrange-name)" : String,
  "[Values](#cfn-personalize-solution-categoricalhyperparameterrange-values)" : [ String, ... ]
}
```

### YAML<a name="aws-properties-personalize-solution-categoricalhyperparameterrange-syntax.yaml"></a>

```
  [Name](#cfn-personalize-solution-categoricalhyperparameterrange-name): String
  [Values](#cfn-personalize-solution-categoricalhyperparameterrange-values):
    - String
```

## Properties<a name="aws-properties-personalize-solution-categoricalhyperparameterrange-properties"></a>

`Name` <a name="cfn-personalize-solution-categoricalhyperparameterrange-name"></a>
The name of the hyperparameter\.  
_Required_: No  
_Type_: String  
_Maximum_: `256`  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`Values` <a name="cfn-personalize-solution-categoricalhyperparameterrange-values"></a>
A list of the categories for the hyperparameter\.  
_Required_: No  
_Type_: List of String  
_Maximum_: `100`  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
