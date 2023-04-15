# AWS::ElasticLoadBalancing::LoadBalancer ConnectionDrainingPolicy<a name="aws-properties-ec2-elb-connectiondrainingpolicy"></a>

Specifies the connection draining settings for your Classic Load Balancer\.

## Syntax<a name="aws-properties-ec2-elb-connectiondrainingpolicy-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-ec2-elb-connectiondrainingpolicy-syntax.json"></a>

```
{
  "[Enabled](#cfn-elb-connectiondrainingpolicy-enabled)" : Boolean,
  "[Timeout](#cfn-elb-connectiondrainingpolicy-timeout)" : Integer
}
```

### YAML<a name="aws-properties-ec2-elb-connectiondrainingpolicy-syntax.yaml"></a>

```
  [Enabled](#cfn-elb-connectiondrainingpolicy-enabled): Boolean
  [Timeout](#cfn-elb-connectiondrainingpolicy-timeout): Integer
```

## Properties<a name="aws-properties-ec2-elb-connectiondrainingpolicy-properties"></a>

`Enabled` <a name="cfn-elb-connectiondrainingpolicy-enabled"></a>
Specifies whether connection draining is enabled for the load balancer\.  
_Required_: Yes  
_Type_: Boolean  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Timeout` <a name="cfn-elb-connectiondrainingpolicy-timeout"></a>
The maximum time, in seconds, to keep the existing connections open before deregistering the instances\.  
_Required_: No  
_Type_: Integer  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

## See also<a name="aws-properties-ec2-elb-connectiondrainingpolicy--seealso"></a>

- [ModifyLoadBalancerAttributes](https://docs.aws.amazon.com/elasticloadbalancing/2012-06-01/APIReference/API_ModifyLoadBalancerAttributes.html) in the _Elastic Load Balancing API Reference \(version 2012\-06\-01\)_
- [Connection Draining](https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/config-conn-drain.html) in the _User Guide for Classic Load Balancers_
