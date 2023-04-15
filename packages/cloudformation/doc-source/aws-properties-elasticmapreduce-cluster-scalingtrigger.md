# AWS::EMR::Cluster ScalingTrigger<a name="aws-properties-elasticmapreduce-cluster-scalingtrigger"></a>

`ScalingTrigger` is a subproperty of the `ScalingRule` property type\. `ScalingTrigger` determines the conditions that trigger an automatic scaling activity\.

## Syntax<a name="aws-properties-elasticmapreduce-cluster-scalingtrigger-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-elasticmapreduce-cluster-scalingtrigger-syntax.json"></a>

```
{
  "[CloudWatchAlarmDefinition](#cfn-elasticmapreduce-cluster-scalingtrigger-cloudwatchalarmdefinition)" : CloudWatchAlarmDefinition
}
```

### YAML<a name="aws-properties-elasticmapreduce-cluster-scalingtrigger-syntax.yaml"></a>

```
  [CloudWatchAlarmDefinition](#cfn-elasticmapreduce-cluster-scalingtrigger-cloudwatchalarmdefinition):
    CloudWatchAlarmDefinition
```

## Properties<a name="aws-properties-elasticmapreduce-cluster-scalingtrigger-properties"></a>

`CloudWatchAlarmDefinition` <a name="cfn-elasticmapreduce-cluster-scalingtrigger-cloudwatchalarmdefinition"></a>
The definition of a CloudWatch metric alarm\. When the defined alarm conditions are met along with other trigger parameters, scaling activity begins\.  
_Required_: Yes  
_Type_: [CloudWatchAlarmDefinition](aws-properties-elasticmapreduce-cluster-cloudwatchalarmdefinition.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
