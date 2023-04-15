# AWS::SageMaker::Endpoint CapacitySize<a name="aws-properties-sagemaker-endpoint-capacitysize"></a>

Specifies the endpoint capacity to activate for production\.

## Syntax<a name="aws-properties-sagemaker-endpoint-capacitysize-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-sagemaker-endpoint-capacitysize-syntax.json"></a>

```
{
  "[Type](#cfn-sagemaker-endpoint-capacitysize-type)" : String,
  "[Value](#cfn-sagemaker-endpoint-capacitysize-value)" : Integer
}
```

### YAML<a name="aws-properties-sagemaker-endpoint-capacitysize-syntax.yaml"></a>

```
  [Type](#cfn-sagemaker-endpoint-capacitysize-type): String
  [Value](#cfn-sagemaker-endpoint-capacitysize-value): Integer
```

## Properties<a name="aws-properties-sagemaker-endpoint-capacitysize-properties"></a>

`Type` <a name="cfn-sagemaker-endpoint-capacitysize-type"></a>
Specifies the endpoint capacity type\.

- `INSTANCE_COUNT`: The endpoint activates based on the number of instances\.
- `CAPACITY_PERCENT`: The endpoint activates based on the specified percentage of capacity\.
  _Required_: Yes  
  _Type_: String  
  _Allowed values_: `CAPACITY_PERCENT | INSTANCE_COUNT`  
  _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Value` <a name="cfn-sagemaker-endpoint-capacitysize-value"></a>
Defines the capacity size, either as a number of instances or a capacity percentage\.  
_Required_: Yes  
_Type_: Integer  
_Minimum_: `1`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
