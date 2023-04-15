# AWS::Route53Resolver::ResolverEndpoint IpAddressRequest<a name="aws-properties-route53resolver-resolverendpoint-ipaddressrequest"></a>

In a [CreateResolverEndpoint](https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_CreateResolverEndpoint.html) request, the IP address that DNS queries originate from \(for outbound endpoints\) or that you forward DNS queries to \(for inbound endpoints\)\. `IpAddressRequest` also includes the ID of the subnet that contains the IP address\.

## Syntax<a name="aws-properties-route53resolver-resolverendpoint-ipaddressrequest-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-route53resolver-resolverendpoint-ipaddressrequest-syntax.json"></a>

```
{
  "[Ip](#cfn-route53resolver-resolverendpoint-ipaddressrequest-ip)" : String,
  "[Ipv6](#cfn-route53resolver-resolverendpoint-ipaddressrequest-ipv6)" : String,
  "[SubnetId](#cfn-route53resolver-resolverendpoint-ipaddressrequest-subnetid)" : String
}
```

### YAML<a name="aws-properties-route53resolver-resolverendpoint-ipaddressrequest-syntax.yaml"></a>

```
  [Ip](#cfn-route53resolver-resolverendpoint-ipaddressrequest-ip): String
  [Ipv6](#cfn-route53resolver-resolverendpoint-ipaddressrequest-ipv6): String
  [SubnetId](#cfn-route53resolver-resolverendpoint-ipaddressrequest-subnetid): String
```

## Properties<a name="aws-properties-route53resolver-resolverendpoint-ipaddressrequest-properties"></a>

`Ip` <a name="cfn-route53resolver-resolverendpoint-ipaddressrequest-ip"></a>
The IPv4 address that you want to use for DNS queries\.  
_Required_: No  
_Type_: String  
_Minimum_: `7`  
_Maximum_: `36`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Ipv6` <a name="cfn-route53resolver-resolverendpoint-ipaddressrequest-ipv6"></a>
The IPv6 address that you want to use for DNS queries\.  
_Required_: No  
_Type_: String  
_Minimum_: `7`  
_Maximum_: `39`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`SubnetId` <a name="cfn-route53resolver-resolverendpoint-ipaddressrequest-subnetid"></a>
The ID of the subnet that contains the IP address\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `32`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

## See also<a name="aws-properties-route53resolver-resolverendpoint-ipaddressrequest--seealso"></a>

- [Return values](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53resolver-resolverendpoint.html#aws-resource-route53resolver-resolverendpoint-return-values) in the topic [AWS::Route53Resolver::ResolverEndpoint](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53resolver-resolverendpoint.html)
- [IpAddressRequest](https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_IpAddressRequest.html) in the _Amazon Route 53 API Reference_
