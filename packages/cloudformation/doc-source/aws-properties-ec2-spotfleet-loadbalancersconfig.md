# AWS::EC2::SpotFleet LoadBalancersConfig<a name="aws-properties-ec2-spotfleet-loadbalancersconfig"></a>

Specifies the Classic Load Balancers and target groups to attach to a Spot Fleet request\.

## Syntax<a name="aws-properties-ec2-spotfleet-loadbalancersconfig-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-ec2-spotfleet-loadbalancersconfig-syntax.json"></a>

```
{
  "[ClassicLoadBalancersConfig](#cfn-ec2-spotfleet-loadbalancersconfig-classicloadbalancersconfig)" : ClassicLoadBalancersConfig,
  "[TargetGroupsConfig](#cfn-ec2-spotfleet-loadbalancersconfig-targetgroupsconfig)" : TargetGroupsConfig
}
```

### YAML<a name="aws-properties-ec2-spotfleet-loadbalancersconfig-syntax.yaml"></a>

```
  [ClassicLoadBalancersConfig](#cfn-ec2-spotfleet-loadbalancersconfig-classicloadbalancersconfig):
    ClassicLoadBalancersConfig
  [TargetGroupsConfig](#cfn-ec2-spotfleet-loadbalancersconfig-targetgroupsconfig):
    TargetGroupsConfig
```

## Properties<a name="aws-properties-ec2-spotfleet-loadbalancersconfig-properties"></a>

`ClassicLoadBalancersConfig` <a name="cfn-ec2-spotfleet-loadbalancersconfig-classicloadbalancersconfig"></a>
The Classic Load Balancers\.  
_Required_: No  
_Type_: [ClassicLoadBalancersConfig](aws-properties-ec2-spotfleet-classicloadbalancersconfig.md)  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`TargetGroupsConfig` <a name="cfn-ec2-spotfleet-loadbalancersconfig-targetgroupsconfig"></a>
The target groups\.  
_Required_: No  
_Type_: [TargetGroupsConfig](aws-properties-ec2-spotfleet-targetgroupsconfig.md)  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
