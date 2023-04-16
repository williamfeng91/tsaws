# AWS::QuickSight::Analysis Parameters<a name="aws-properties-quicksight-analysis-parameters"></a>

A list of Amazon QuickSight parameters and the list's override values\.

## Syntax<a name="aws-properties-quicksight-analysis-parameters-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-analysis-parameters-syntax.json"></a>

```
{
  "[DateTimeParameters](#cfn-quicksight-analysis-parameters-datetimeparameters)" : [ DateTimeParameter, ... ],
  "[DecimalParameters](#cfn-quicksight-analysis-parameters-decimalparameters)" : [ DecimalParameter, ... ],
  "[IntegerParameters](#cfn-quicksight-analysis-parameters-integerparameters)" : [ IntegerParameter, ... ],
  "[StringParameters](#cfn-quicksight-analysis-parameters-stringparameters)" : [ StringParameter, ... ]
}
```

### YAML<a name="aws-properties-quicksight-analysis-parameters-syntax.yaml"></a>

```
  [DateTimeParameters](#cfn-quicksight-analysis-parameters-datetimeparameters):
    - DateTimeParameter
  [DecimalParameters](#cfn-quicksight-analysis-parameters-decimalparameters):
    - DecimalParameter
  [IntegerParameters](#cfn-quicksight-analysis-parameters-integerparameters):
    - IntegerParameter
  [StringParameters](#cfn-quicksight-analysis-parameters-stringparameters):
    - StringParameter
```

## Properties<a name="aws-properties-quicksight-analysis-parameters-properties"></a>

`DateTimeParameters` <a name="cfn-quicksight-analysis-parameters-datetimeparameters"></a>
The parameters that have a data type of date\-time\.  
_Required_: No  
_Type_: List of [DateTimeParameter](aws-properties-quicksight-analysis-datetimeparameter.md)  
_Maximum_: `100`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`DecimalParameters` <a name="cfn-quicksight-analysis-parameters-decimalparameters"></a>
The parameters that have a data type of decimal\.  
_Required_: No  
_Type_: List of [DecimalParameter](aws-properties-quicksight-analysis-decimalparameter.md)  
_Maximum_: `100`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`IntegerParameters` <a name="cfn-quicksight-analysis-parameters-integerparameters"></a>
The parameters that have a data type of integer\.  
_Required_: No  
_Type_: List of [IntegerParameter](aws-properties-quicksight-analysis-integerparameter.md)  
_Maximum_: `100`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`StringParameters` <a name="cfn-quicksight-analysis-parameters-stringparameters"></a>
The parameters that have a data type of string\.  
_Required_: No  
_Type_: List of [StringParameter](aws-properties-quicksight-analysis-stringparameter.md)  
_Maximum_: `100`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
