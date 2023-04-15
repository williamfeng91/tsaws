# AWS::NetworkFirewall::FirewallPolicy PublishMetricAction<a name="aws-properties-networkfirewall-firewallpolicy-publishmetricaction"></a>

Stateless inspection criteria that publishes the specified metrics to Amazon CloudWatch for the matching packet\. This setting defines a CloudWatch dimension value to be published\.

## Syntax<a name="aws-properties-networkfirewall-firewallpolicy-publishmetricaction-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-networkfirewall-firewallpolicy-publishmetricaction-syntax.json"></a>

```
{
  "[Dimensions](#cfn-networkfirewall-firewallpolicy-publishmetricaction-dimensions)" : [ Dimension, ... ]
}
```

### YAML<a name="aws-properties-networkfirewall-firewallpolicy-publishmetricaction-syntax.yaml"></a>

```
  [Dimensions](#cfn-networkfirewall-firewallpolicy-publishmetricaction-dimensions):
    - Dimension
```

## Properties<a name="aws-properties-networkfirewall-firewallpolicy-publishmetricaction-properties"></a>

`Dimensions` <a name="cfn-networkfirewall-firewallpolicy-publishmetricaction-dimensions"></a>

_Required_: Yes  
_Type_: List of [Dimension](aws-properties-networkfirewall-firewallpolicy-dimension.md)  
_Maximum_: `1`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
