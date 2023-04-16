# AWS::ElasticLoadBalancingV2::LoadBalancer SubnetMapping<a name="aws-properties-elasticloadbalancingv2-loadbalancer-subnetmapping"></a>

Specifies a subnet for a load balancer\.

## Syntax<a name="aws-properties-elasticloadbalancingv2-loadbalancer-subnetmapping-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-elasticloadbalancingv2-loadbalancer-subnetmapping-syntax.json"></a>

```
{
  "[AllocationId](#cfn-elasticloadbalancingv2-loadbalancer-subnetmapping-allocationid)" : String,
  "[IPv6Address](#cfn-elasticloadbalancingv2-loadbalancer-subnetmapping-ipv6address)" : String,
  "[PrivateIPv4Address](#cfn-elasticloadbalancingv2-loadbalancer-subnetmapping-privateipv4address)" : String,
  "[SubnetId](#cfn-elasticloadbalancingv2-loadbalancer-subnetmapping-subnetid)" : String
}
```

### YAML<a name="aws-properties-elasticloadbalancingv2-loadbalancer-subnetmapping-syntax.yaml"></a>

```
  [AllocationId](#cfn-elasticloadbalancingv2-loadbalancer-subnetmapping-allocationid): String
  [IPv6Address](#cfn-elasticloadbalancingv2-loadbalancer-subnetmapping-ipv6address): String
  [PrivateIPv4Address](#cfn-elasticloadbalancingv2-loadbalancer-subnetmapping-privateipv4address): String
  [SubnetId](#cfn-elasticloadbalancingv2-loadbalancer-subnetmapping-subnetid): String
```

## Properties<a name="aws-properties-elasticloadbalancingv2-loadbalancer-subnetmapping-properties"></a>

`AllocationId` <a name="cfn-elasticloadbalancingv2-loadbalancer-subnetmapping-allocationid"></a>
\[Network Load Balancers\] The allocation ID of the Elastic IP address for an internet\-facing load balancer\.  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`IPv6Address` <a name="cfn-elasticloadbalancingv2-loadbalancer-subnetmapping-ipv6address"></a>
\[Network Load Balancers\] The IPv6 address\.  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`PrivateIPv4Address` <a name="cfn-elasticloadbalancingv2-loadbalancer-subnetmapping-privateipv4address"></a>
\[Network Load Balancers\] The private IPv4 address for an internal load balancer\.  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`SubnetId` <a name="cfn-elasticloadbalancingv2-loadbalancer-subnetmapping-subnetid"></a>
The ID of the subnet\.  
_Required_: Yes  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
