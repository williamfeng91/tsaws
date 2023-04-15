# AWS::EMR::Cluster ScalingAction<a name="aws-properties-elasticmapreduce-cluster-scalingaction"></a>

`ScalingAction` is a subproperty of the `ScalingRule` property type\. `ScalingAction` determines the type of adjustment the automatic scaling activity makes when triggered, and the periodicity of the adjustment\.

## Syntax<a name="aws-properties-elasticmapreduce-cluster-scalingaction-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-elasticmapreduce-cluster-scalingaction-syntax.json"></a>

```
{
  "[Market](#cfn-elasticmapreduce-cluster-scalingaction-market)" : String,
  "[SimpleScalingPolicyConfiguration](#cfn-elasticmapreduce-cluster-scalingaction-simplescalingpolicyconfiguration)" : SimpleScalingPolicyConfiguration
}
```

### YAML<a name="aws-properties-elasticmapreduce-cluster-scalingaction-syntax.yaml"></a>

```
  [Market](#cfn-elasticmapreduce-cluster-scalingaction-market): String
  [SimpleScalingPolicyConfiguration](#cfn-elasticmapreduce-cluster-scalingaction-simplescalingpolicyconfiguration):
    SimpleScalingPolicyConfiguration
```

## Properties<a name="aws-properties-elasticmapreduce-cluster-scalingaction-properties"></a>

`Market` <a name="cfn-elasticmapreduce-cluster-scalingaction-market"></a>
Not available for instance groups\. Instance groups use the market type specified for the group\.  
_Required_: No  
_Type_: String  
_Allowed values_: `ON_DEMAND | SPOT`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`SimpleScalingPolicyConfiguration` <a name="cfn-elasticmapreduce-cluster-scalingaction-simplescalingpolicyconfiguration"></a>
The type of adjustment the automatic scaling activity makes when triggered, and the periodicity of the adjustment\.  
_Required_: Yes  
_Type_: [SimpleScalingPolicyConfiguration](aws-properties-elasticmapreduce-cluster-simplescalingpolicyconfiguration.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
