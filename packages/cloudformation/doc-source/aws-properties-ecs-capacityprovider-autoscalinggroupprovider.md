# AWS::ECS::CapacityProvider AutoScalingGroupProvider<a name="aws-properties-ecs-capacityprovider-autoscalinggroupprovider"></a>

The details of the Auto Scaling group for the capacity provider\.

## Syntax<a name="aws-properties-ecs-capacityprovider-autoscalinggroupprovider-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-ecs-capacityprovider-autoscalinggroupprovider-syntax.json"></a>

```
{
  "[AutoScalingGroupArn](#cfn-ecs-capacityprovider-autoscalinggroupprovider-autoscalinggrouparn)" : String,
  "[ManagedScaling](#cfn-ecs-capacityprovider-autoscalinggroupprovider-managedscaling)" : ManagedScaling,
  "[ManagedTerminationProtection](#cfn-ecs-capacityprovider-autoscalinggroupprovider-managedterminationprotection)" : String
}
```

### YAML<a name="aws-properties-ecs-capacityprovider-autoscalinggroupprovider-syntax.yaml"></a>

```
  [AutoScalingGroupArn](#cfn-ecs-capacityprovider-autoscalinggroupprovider-autoscalinggrouparn): String
  [ManagedScaling](#cfn-ecs-capacityprovider-autoscalinggroupprovider-managedscaling):
    ManagedScaling
  [ManagedTerminationProtection](#cfn-ecs-capacityprovider-autoscalinggroupprovider-managedterminationprotection): String
```

## Properties<a name="aws-properties-ecs-capacityprovider-autoscalinggroupprovider-properties"></a>

`AutoScalingGroupArn` <a name="cfn-ecs-capacityprovider-autoscalinggroupprovider-autoscalinggrouparn"></a>
The Amazon Resource Name \(ARN\) that identifies the Auto Scaling group\.  
_Required_: Yes  
_Type_: String  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`ManagedScaling` <a name="cfn-ecs-capacityprovider-autoscalinggroupprovider-managedscaling"></a>
The managed scaling settings for the Auto Scaling group capacity provider\.  
_Required_: No  
_Type_: [ManagedScaling](aws-properties-ecs-capacityprovider-managedscaling.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`ManagedTerminationProtection` <a name="cfn-ecs-capacityprovider-autoscalinggroupprovider-managedterminationprotection"></a>
The managed termination protection setting to use for the Auto Scaling group capacity provider\. This determines whether the Auto Scaling group has managed termination protection\. The default is off\.  
When using managed termination protection, managed scaling must also be used otherwise managed termination protection doesn't work\.
When managed termination protection is on, Amazon ECS prevents the Amazon EC2 instances in an Auto Scaling group that contain tasks from being terminated during a scale\-in action\. The Auto Scaling group and each instance in the Auto Scaling group must have instance protection from scale\-in actions enabled as well\. For more information, see [Instance Protection](https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-instance-termination.html#instance-protection) in the _ AWS Auto Scaling User Guide_\.  
When managed termination protection is off, your Amazon EC2 instances aren't protected from termination when the Auto Scaling group scales in\.  
_Required_: No  
_Type_: String  
_Allowed values_: `DISABLED | ENABLED`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
