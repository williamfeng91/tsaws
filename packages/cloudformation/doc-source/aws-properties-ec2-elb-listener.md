# AWS::ElasticLoadBalancing::LoadBalancer Listeners<a name="aws-properties-ec2-elb-listener"></a>

Specifies a listener for your Classic Load Balancer\.

Modifying any property replaces the listener\.

## Syntax<a name="aws-properties-ec2-elb-listener-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-ec2-elb-listener-syntax.json"></a>

```
{
  "[InstancePort](#cfn-ec2-elb-listener-instanceport)" : String,
  "[InstanceProtocol](#cfn-ec2-elb-listener-instanceprotocol)" : String,
  "[LoadBalancerPort](#cfn-ec2-elb-listener-loadbalancerport)" : String,
  "[PolicyNames](#cfn-ec2-elb-listener-policynames)" : [ String, ... ],
  "[Protocol](#cfn-ec2-elb-listener-protocol)" : String,
  "[SSLCertificateId](#cfn-ec2-elb-listener-sslcertificateid)" : String
}
```

### YAML<a name="aws-properties-ec2-elb-listener-syntax.yaml"></a>

```
  [InstancePort](#cfn-ec2-elb-listener-instanceport): String
  [InstanceProtocol](#cfn-ec2-elb-listener-instanceprotocol): String
  [LoadBalancerPort](#cfn-ec2-elb-listener-loadbalancerport): String
  [PolicyNames](#cfn-ec2-elb-listener-policynames):
    - String
  [Protocol](#cfn-ec2-elb-listener-protocol): String
  [SSLCertificateId](#cfn-ec2-elb-listener-sslcertificateid): String
```

## Properties<a name="aws-properties-ec2-elb-listener-properties"></a>

`InstancePort` <a name="cfn-ec2-elb-listener-instanceport"></a>
The port on which the instance is listening\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `65535`  
_Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)

`InstanceProtocol` <a name="cfn-ec2-elb-listener-instanceprotocol"></a>
The protocol to use for routing traffic to instances: HTTP, HTTPS, TCP, or SSL\.  
If the front\-end protocol is TCP or SSL, the back\-end protocol must be TCP or SSL\. If the front\-end protocol is HTTP or HTTPS, the back\-end protocol must be HTTP or HTTPS\.  
If there is another listener with the same `InstancePort` whose `InstanceProtocol` is secure, \(HTTPS or SSL\), the listener's `InstanceProtocol` must also be secure\.  
If there is another listener with the same `InstancePort` whose `InstanceProtocol` is HTTP or TCP, the listener's `InstanceProtocol` must be HTTP or TCP\.  
_Required_: No  
_Type_: String  
_Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)

`LoadBalancerPort` <a name="cfn-ec2-elb-listener-loadbalancerport"></a>
The port on which the load balancer is listening\. On EC2\-VPC, you can specify any port from the range 1\-65535\. On EC2\-Classic, you can specify any port from the following list: 25, 80, 443, 465, 587, 1024\-65535\.  
_Required_: Yes  
_Type_: String  
_Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)

`PolicyNames` <a name="cfn-ec2-elb-listener-policynames"></a>
The names of the policies to associate with the listener\.  
_Required_: No  
_Type_: List of String  
_Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)

`Protocol` <a name="cfn-ec2-elb-listener-protocol"></a>
The load balancer transport protocol to use for routing: HTTP, HTTPS, TCP, or SSL\.  
_Required_: Yes  
_Type_: String  
_Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)

`SSLCertificateId` <a name="cfn-ec2-elb-listener-sslcertificateid"></a>
The Amazon Resource Name \(ARN\) of the server certificate\.  
_Required_: No  
_Type_: String  
_Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)

## See also<a name="aws-properties-ec2-elb-listener--seealso"></a>

- [CreateLoadBalancerListeners](https://docs.aws.amazon.com/elasticloadbalancing/2012-06-01/APIReference/API_CreateLoadBalancerListeners.html) in the _Elastic Load Balancing API Reference \(version 2012\-06\-01\)_
- [Listeners](https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-listener-config.html) in the _User Guide for Classic Load Balancers_
- [HTTPS Listeners](https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-https-load-balancers.html) in the _User Guide for Classic Load Balancers_
