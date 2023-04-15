# AWS::Personalize::Solution IntegerHyperParameterRange<a name="aws-properties-personalize-solution-integerhyperparameterrange"></a>

Provides the name and range of an integer\-valued hyperparameter\.

## Syntax<a name="aws-properties-personalize-solution-integerhyperparameterrange-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-personalize-solution-integerhyperparameterrange-syntax.json"></a>

```
{
  "[MaxValue](#cfn-personalize-solution-integerhyperparameterrange-maxvalue)" : Integer,
  "[MinValue](#cfn-personalize-solution-integerhyperparameterrange-minvalue)" : Integer,
  "[Name](#cfn-personalize-solution-integerhyperparameterrange-name)" : String
}
```

### YAML<a name="aws-properties-personalize-solution-integerhyperparameterrange-syntax.yaml"></a>

```
  [MaxValue](#cfn-personalize-solution-integerhyperparameterrange-maxvalue): Integer
  [MinValue](#cfn-personalize-solution-integerhyperparameterrange-minvalue): Integer
  [Name](#cfn-personalize-solution-integerhyperparameterrange-name): String
```

## Properties<a name="aws-properties-personalize-solution-integerhyperparameterrange-properties"></a>

`MaxValue` <a name="cfn-personalize-solution-integerhyperparameterrange-maxvalue"></a>
The maximum allowable value for the hyperparameter\.  
_Required_: No  
_Type_: Integer  
_Maximum_: `1000000`  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`MinValue` <a name="cfn-personalize-solution-integerhyperparameterrange-minvalue"></a>
The minimum allowable value for the hyperparameter\.  
_Required_: No  
_Type_: Integer  
_Minimum_: `-1000000`  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`Name` <a name="cfn-personalize-solution-integerhyperparameterrange-name"></a>
The name of the hyperparameter\.  
_Required_: No  
_Type_: String  
_Maximum_: `256`  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
