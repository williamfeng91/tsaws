# AWS::QuickSight::Analysis WhatIfPointScenario<a name="aws-properties-quicksight-analysis-whatifpointscenario"></a>

Provides the forecast to meet the target for a particular date\.

## Syntax<a name="aws-properties-quicksight-analysis-whatifpointscenario-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-quicksight-analysis-whatifpointscenario-syntax.json"></a>

```
{
  "[Date](#cfn-quicksight-analysis-whatifpointscenario-date)" : String,
  "[Value](#cfn-quicksight-analysis-whatifpointscenario-value)" : Double
}
```

### YAML<a name="aws-properties-quicksight-analysis-whatifpointscenario-syntax.yaml"></a>

```
  [Date](#cfn-quicksight-analysis-whatifpointscenario-date): String
  [Value](#cfn-quicksight-analysis-whatifpointscenario-value): Double
```

## Properties<a name="aws-properties-quicksight-analysis-whatifpointscenario-properties"></a>

`Date` <a name="cfn-quicksight-analysis-whatifpointscenario-date"></a>
The date that you need the forecast results for\.  
_Required_: Yes  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Value` <a name="cfn-quicksight-analysis-whatifpointscenario-value"></a>
The target value that you want to meet for the provided date\.  
_Required_: Yes  
_Type_: Double  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)