# AWS::Route53::CidrCollection Location<a name="aws-properties-route53-cidrcollection-location"></a>

Specifies the list of CIDR blocks for a CIDR location\.

## Syntax<a name="aws-properties-route53-cidrcollection-location-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-route53-cidrcollection-location-syntax.json"></a>

```
{
  "[CidrList](#cfn-route53-cidrcollection-location-cidrlist)" : [ String, ... ],
  "[LocationName](#cfn-route53-cidrcollection-location-locationname)" : String
}
```

### YAML<a name="aws-properties-route53-cidrcollection-location-syntax.yaml"></a>

```
  [CidrList](#cfn-route53-cidrcollection-location-cidrlist):
    - String
  [LocationName](#cfn-route53-cidrcollection-location-locationname): String
```

## Properties<a name="aws-properties-route53-cidrcollection-location-properties"></a>

`CidrList` <a name="cfn-route53-cidrcollection-location-cidrlist"></a>
List of CIDR blocks\.  
_Required_: Yes  
_Type_: List of String  
_Maximum_: `1000`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`LocationName` <a name="cfn-route53-cidrcollection-location-locationname"></a>
The CIDR collection location name\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `16`  
_Pattern_: `[0-9A-Za-z_\-\*]+`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

## See also<a name="aws-properties-route53-cidrcollection-location--seealso"></a>

- [LocationSummary](https://docs.aws.amazon.com/Route53/latest/APIReference/API_LocationSummary.html) in the _Amazon Route 53 API Reference_
