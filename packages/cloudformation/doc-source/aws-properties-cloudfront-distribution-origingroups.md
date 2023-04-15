# AWS::CloudFront::Distribution OriginGroups<a name="aws-properties-cloudfront-distribution-origingroups"></a>

A complex data type for the origin groups specified for a distribution\.

## Syntax<a name="aws-properties-cloudfront-distribution-origingroups-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-cloudfront-distribution-origingroups-syntax.json"></a>

```
{
  "[Items](#cfn-cloudfront-distribution-origingroups-items)" : [ OriginGroup, ... ],
  "[Quantity](#cfn-cloudfront-distribution-origingroups-quantity)" : Integer
}
```

### YAML<a name="aws-properties-cloudfront-distribution-origingroups-syntax.yaml"></a>

```
  [Items](#cfn-cloudfront-distribution-origingroups-items):
    - OriginGroup
  [Quantity](#cfn-cloudfront-distribution-origingroups-quantity): Integer
```

## Properties<a name="aws-properties-cloudfront-distribution-origingroups-properties"></a>

`Items` <a name="cfn-cloudfront-distribution-origingroups-items"></a>
The items \(origin groups\) in a distribution\.  
_Required_: No  
_Type_: List of [OriginGroup](aws-properties-cloudfront-distribution-origingroup.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Quantity` <a name="cfn-cloudfront-distribution-origingroups-quantity"></a>
The number of origin groups\.  
_Required_: Yes  
_Type_: Integer  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
