# AWS::SageMaker::Endpoint TrafficRoutingConfig<a name="aws-properties-sagemaker-endpoint-trafficroutingconfig"></a>

Defines the traffic routing strategy during an endpoint deployment to shift traffic from the old fleet to the new fleet\.

## Syntax<a name="aws-properties-sagemaker-endpoint-trafficroutingconfig-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-sagemaker-endpoint-trafficroutingconfig-syntax.json"></a>

```
{
  "[CanarySize](#cfn-sagemaker-endpoint-trafficroutingconfig-canarysize)" : CapacitySize,
  "[LinearStepSize](#cfn-sagemaker-endpoint-trafficroutingconfig-linearstepsize)" : CapacitySize,
  "[Type](#cfn-sagemaker-endpoint-trafficroutingconfig-type)" : String,
  "[WaitIntervalInSeconds](#cfn-sagemaker-endpoint-trafficroutingconfig-waitintervalinseconds)" : Integer
}
```

### YAML<a name="aws-properties-sagemaker-endpoint-trafficroutingconfig-syntax.yaml"></a>

```
  [CanarySize](#cfn-sagemaker-endpoint-trafficroutingconfig-canarysize):
    CapacitySize
  [LinearStepSize](#cfn-sagemaker-endpoint-trafficroutingconfig-linearstepsize):
    CapacitySize
  [Type](#cfn-sagemaker-endpoint-trafficroutingconfig-type): String
  [WaitIntervalInSeconds](#cfn-sagemaker-endpoint-trafficroutingconfig-waitintervalinseconds): Integer
```

## Properties<a name="aws-properties-sagemaker-endpoint-trafficroutingconfig-properties"></a>

`CanarySize` <a name="cfn-sagemaker-endpoint-trafficroutingconfig-canarysize"></a>
Batch size for the first step to turn on traffic on the new endpoint fleet\. `Value` must be less than or equal to 50% of the variant's total instance count\.  
_Required_: No  
_Type_: [CapacitySize](aws-properties-sagemaker-endpoint-capacitysize.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`LinearStepSize` <a name="cfn-sagemaker-endpoint-trafficroutingconfig-linearstepsize"></a>
Batch size for each step to turn on traffic on the new endpoint fleet\. `Value` must be 10\-50% of the variant's total instance count\.  
_Required_: No  
_Type_: [CapacitySize](aws-properties-sagemaker-endpoint-capacitysize.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Type` <a name="cfn-sagemaker-endpoint-trafficroutingconfig-type"></a>
Traffic routing strategy type\.

- `ALL_AT_ONCE`: Endpoint traffic shifts to the new fleet in a single step\.
- `CANARY`: Endpoint traffic shifts to the new fleet in two steps\. The first step is the canary, which is a small portion of the traffic\. The second step is the remainder of the traffic\.
- `LINEAR`: Endpoint traffic shifts to the new fleet in n steps of a configurable size\.
  _Required_: Yes  
  _Type_: String  
  _Allowed values_: `ALL_AT_ONCE | CANARY | LINEAR`  
  _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`WaitIntervalInSeconds` <a name="cfn-sagemaker-endpoint-trafficroutingconfig-waitintervalinseconds"></a>
The waiting time \(in seconds\) between incremental steps to turn on traffic on the new endpoint fleet\.  
_Required_: No  
_Type_: Integer  
_Minimum_: `0`  
_Maximum_: `3600`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
