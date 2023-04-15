# AWS::DataBrew::Recipe RecipeStep<a name="aws-properties-databrew-recipe-recipestep"></a>

Represents a single step from a DataBrew recipe to be performed\.

## Syntax<a name="aws-properties-databrew-recipe-recipestep-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-databrew-recipe-recipestep-syntax.json"></a>

```
{
  "[Action](#cfn-databrew-recipe-recipestep-action)" : Action,
  "[ConditionExpressions](#cfn-databrew-recipe-recipestep-conditionexpressions)" : [ ConditionExpression, ... ]
}
```

### YAML<a name="aws-properties-databrew-recipe-recipestep-syntax.yaml"></a>

```
  [Action](#cfn-databrew-recipe-recipestep-action):
    Action
  [ConditionExpressions](#cfn-databrew-recipe-recipestep-conditionexpressions):
    - ConditionExpression
```

## Properties<a name="aws-properties-databrew-recipe-recipestep-properties"></a>

`Action` <a name="cfn-databrew-recipe-recipestep-action"></a>
The particular action to be performed in the recipe step\.  
_Required_: Yes  
_Type_: [Action](aws-properties-databrew-recipe-action.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`ConditionExpressions` <a name="cfn-databrew-recipe-recipestep-conditionexpressions"></a>
One or more conditions that must be met for the recipe step to succeed\.  
All of the conditions in the array must be met\. In other words, all of the conditions must be combined using a logical AND operation\.
_Required_: No  
_Type_: List of [ConditionExpression](aws-properties-databrew-recipe-conditionexpression.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
