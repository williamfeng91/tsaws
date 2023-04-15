# AWS::Personalize::Solution AutoMLConfig<a name="aws-properties-personalize-solution-automlconfig"></a>

When the solution performs AutoML \(`performAutoML` is true in [CreateSolution](https://docs.aws.amazon.com/personalize/latest/dg/API_CreateSolution.html)\), Amazon Personalize determines which recipe, from the specified list, optimizes the given metric\. Amazon Personalize then uses that recipe for the solution\.

## Syntax<a name="aws-properties-personalize-solution-automlconfig-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-personalize-solution-automlconfig-syntax.json"></a>

```
{
  "[MetricName](#cfn-personalize-solution-automlconfig-metricname)" : String,
  "[RecipeList](#cfn-personalize-solution-automlconfig-recipelist)" : [ String, ... ]
}
```

### YAML<a name="aws-properties-personalize-solution-automlconfig-syntax.yaml"></a>

```
  [MetricName](#cfn-personalize-solution-automlconfig-metricname): String
  [RecipeList](#cfn-personalize-solution-automlconfig-recipelist):
    - String
```

## Properties<a name="aws-properties-personalize-solution-automlconfig-properties"></a>

`MetricName` <a name="cfn-personalize-solution-automlconfig-metricname"></a>
The metric to optimize\.  
_Required_: No  
_Type_: String  
_Maximum_: `256`  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`RecipeList` <a name="cfn-personalize-solution-automlconfig-recipelist"></a>
The list of candidate recipes\.  
_Required_: No  
_Type_: List of String  
_Maximum_: `100`  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)