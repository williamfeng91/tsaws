# AWS::Route53Resolver::ResolverRule TargetAddress<a name="aws-properties-route53resolver-resolverrule-targetaddress"></a>

In a [CreateResolverRule](https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_CreateResolverRule.html) request, an array of the IPs that you want to forward DNS queries to\.

## Syntax<a name="aws-properties-route53resolver-resolverrule-targetaddress-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-route53resolver-resolverrule-targetaddress-syntax.json"></a>

```
{
  "[Ip](#cfn-route53resolver-resolverrule-targetaddress-ip)" : String,
  "[Ipv6](#cfn-route53resolver-resolverrule-targetaddress-ipv6)" : String,
  "[Port](#cfn-route53resolver-resolverrule-targetaddress-port)" : String
}
```

### YAML<a name="aws-properties-route53resolver-resolverrule-targetaddress-syntax.yaml"></a>

```
  [Ip](#cfn-route53resolver-resolverrule-targetaddress-ip): String
  [Ipv6](#cfn-route53resolver-resolverrule-targetaddress-ipv6): String
  [Port](#cfn-route53resolver-resolverrule-targetaddress-port): String
```

## Properties<a name="aws-properties-route53resolver-resolverrule-targetaddress-properties"></a>

`Ip` <a name="cfn-route53resolver-resolverrule-targetaddress-ip"></a>
One IPv4 address that you want to forward DNS queries to\.  
_Required_: No  
_Type_: String  
_Minimum_: `7`  
_Maximum_: `36`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Ipv6` <a name="cfn-route53resolver-resolverrule-targetaddress-ipv6"></a>
One IPv6 address that you want to forward DNS queries to\.  
_Required_: No  
_Type_: String  
_Minimum_: `7`  
_Maximum_: `39`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Port` <a name="cfn-route53resolver-resolverrule-targetaddress-port"></a>
The port at `Ip` that you want to forward DNS queries to\.  
_Required_: No  
_Type_: String  
_Minimum_: `0`  
_Maximum_: `65535`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

## See also<a name="aws-properties-route53resolver-resolverrule-targetaddress--seealso"></a>

- [Return values](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53resolver-resolverrule.html#aws-resource-route53resolver-resolverrule-return-values) in the topic [AWS::Route53Resolver::ResolverRule](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53resolver-resolverrule.html)
- [TargetAddress](https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_TargetAddress.html) in the _Amazon Route 53 API Reference_
