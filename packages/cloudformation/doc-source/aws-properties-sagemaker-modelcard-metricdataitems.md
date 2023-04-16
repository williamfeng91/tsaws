# AWS::SageMaker::ModelCard MetricDataItems<a name="aws-properties-sagemaker-modelcard-metricdataitems"></a>

Metric data\. The `type` determines the data types that you specify for `value`, `XAxisName` and `YAxisName`\. For information about specifying values for metrics, see [model card JSON schema](https://docs.aws.amazon.com/sagemaker/latest/dg/model-cards.html#model-cards-json-schema)\.

## Syntax<a name="aws-properties-sagemaker-modelcard-metricdataitems-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-sagemaker-modelcard-metricdataitems-syntax.json"></a>

```
{
  "[Name](#cfn-sagemaker-modelcard-metricdataitems-name)" : String,
  "[Notes](#cfn-sagemaker-modelcard-metricdataitems-notes)" : String,
  "[Type](#cfn-sagemaker-modelcard-metricdataitems-type)" : String,
  "[Value](#cfn-sagemaker-modelcard-metricdataitems-value)" : Json,
  "[XAxisName](#cfn-sagemaker-modelcard-metricdataitems-xaxisname)" : [ String, ... ],
  "[YAxisName](#cfn-sagemaker-modelcard-metricdataitems-yaxisname)" : [ String, ... ]
}
```

### YAML<a name="aws-properties-sagemaker-modelcard-metricdataitems-syntax.yaml"></a>

```
  [Name](#cfn-sagemaker-modelcard-metricdataitems-name): String
  [Notes](#cfn-sagemaker-modelcard-metricdataitems-notes): String
  [Type](#cfn-sagemaker-modelcard-metricdataitems-type): String
  [Value](#cfn-sagemaker-modelcard-metricdataitems-value): Json
  [XAxisName](#cfn-sagemaker-modelcard-metricdataitems-xaxisname):
    - String
  [YAxisName](#cfn-sagemaker-modelcard-metricdataitems-yaxisname):
    - String
```

## Properties<a name="aws-properties-sagemaker-modelcard-metricdataitems-properties"></a>

`Name` <a name="cfn-sagemaker-modelcard-metricdataitems-name"></a>
The names of the metrics\.  
_Required_: Yes  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Notes` <a name="cfn-sagemaker-modelcard-metricdataitems-notes"></a>
Any notes to add to the metric\.  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Type` <a name="cfn-sagemaker-modelcard-metricdataitems-type"></a>
You must specify one of the following data types:

- Bar Chart – `bar_char`
- Boolean – `boolean`
- Linear Graph – `linear_graph`
- Matrix – `matrix`
- Number – `number`
- String – `string`
  _Required_: Yes  
  _Type_: String  
  _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Value` <a name="cfn-sagemaker-modelcard-metricdataitems-value"></a>
The datatype of the metric\. The metric's _value_ must be compatible with the metric's _type_\.  
_Required_: Yes  
_Type_: Json  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`XAxisName` <a name="cfn-sagemaker-modelcard-metricdataitems-xaxisname"></a>
The name of the x axis\.  
_Required_: No  
_Type_: List of String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`YAxisName` <a name="cfn-sagemaker-modelcard-metricdataitems-yaxisname"></a>
The name of the y axis\.  
_Required_: No  
_Type_: List of String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
