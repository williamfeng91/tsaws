# AWS::AutoScaling::AutoScalingGroup LaunchTemplate<a name="aws-properties-autoscaling-autoscalinggroup-launchtemplate"></a>

Use this structure to specify the launch templates and instance types \(overrides\) for a mixed instances policy\.

`LaunchTemplate` is a property of the [AWS::AutoScaling::AutoScalingGroup MixedInstancesPolicy](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-autoscaling-autoscalinggroup-mixedinstancespolicy.html) property type\.

## Syntax<a name="aws-properties-autoscaling-autoscalinggroup-launchtemplate-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-autoscaling-autoscalinggroup-launchtemplate-syntax.json"></a>

```
{
  "[LaunchTemplateSpecification](#cfn-as-group-launchtemplate-launchtemplatespecification)" : LaunchTemplateSpecification,
  "[Overrides](#cfn-as-group-launchtemplate-overrides)" : [ LaunchTemplateOverrides, ... ]
}
```

### YAML<a name="aws-properties-autoscaling-autoscalinggroup-launchtemplate-syntax.yaml"></a>

```
  [LaunchTemplateSpecification](#cfn-as-group-launchtemplate-launchtemplatespecification):
    LaunchTemplateSpecification
  [Overrides](#cfn-as-group-launchtemplate-overrides):
    - LaunchTemplateOverrides
```

## Properties<a name="aws-properties-autoscaling-autoscalinggroup-launchtemplate-properties"></a>

`LaunchTemplateSpecification` <a name="cfn-as-group-launchtemplate-launchtemplatespecification"></a>
The launch template\.  
_Required_: Yes  
_Type_: [LaunchTemplateSpecification](aws-properties-autoscaling-autoscalinggroup-launchtemplatespecification.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Overrides` <a name="cfn-as-group-launchtemplate-overrides"></a>
Any properties that you specify override the same properties in the launch template\.  
_Required_: No  
_Type_: List of [LaunchTemplateOverrides](aws-properties-autoscaling-autoscalinggroup-launchtemplateoverrides.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
