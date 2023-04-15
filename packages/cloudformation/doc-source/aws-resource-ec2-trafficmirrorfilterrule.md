# AWS::EC2::TrafficMirrorFilterRule<a name="aws-resource-ec2-trafficmirrorfilterrule"></a>

Creates a Traffic Mirror filter rule\.

A Traffic Mirror rule defines the Traffic Mirror source traffic to mirror\.

You need the Traffic Mirror filter ID when you create the rule\.

## Syntax<a name="aws-resource-ec2-trafficmirrorfilterrule-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-resource-ec2-trafficmirrorfilterrule-syntax.json"></a>

```
{
  "Type" : "AWS::EC2::TrafficMirrorFilterRule",
  "Properties" : {
      "[Description](#cfn-ec2-trafficmirrorfilterrule-description)" : String,
      "[DestinationCidrBlock](#cfn-ec2-trafficmirrorfilterrule-destinationcidrblock)" : String,
      "[DestinationPortRange](#cfn-ec2-trafficmirrorfilterrule-destinationportrange)" : TrafficMirrorPortRange,
      "[Protocol](#cfn-ec2-trafficmirrorfilterrule-protocol)" : Integer,
      "[RuleAction](#cfn-ec2-trafficmirrorfilterrule-ruleaction)" : String,
      "[RuleNumber](#cfn-ec2-trafficmirrorfilterrule-rulenumber)" : Integer,
      "[SourceCidrBlock](#cfn-ec2-trafficmirrorfilterrule-sourcecidrblock)" : String,
      "[SourcePortRange](#cfn-ec2-trafficmirrorfilterrule-sourceportrange)" : TrafficMirrorPortRange,
      "[TrafficDirection](#cfn-ec2-trafficmirrorfilterrule-trafficdirection)" : String,
      "[TrafficMirrorFilterId](#cfn-ec2-trafficmirrorfilterrule-trafficmirrorfilterid)" : String
    }
}
```

### YAML<a name="aws-resource-ec2-trafficmirrorfilterrule-syntax.yaml"></a>

```
Type: AWS::EC2::TrafficMirrorFilterRule
Properties:
  [Description](#cfn-ec2-trafficmirrorfilterrule-description): String
  [DestinationCidrBlock](#cfn-ec2-trafficmirrorfilterrule-destinationcidrblock): String
  [DestinationPortRange](#cfn-ec2-trafficmirrorfilterrule-destinationportrange):
    TrafficMirrorPortRange
  [Protocol](#cfn-ec2-trafficmirrorfilterrule-protocol): Integer
  [RuleAction](#cfn-ec2-trafficmirrorfilterrule-ruleaction): String
  [RuleNumber](#cfn-ec2-trafficmirrorfilterrule-rulenumber): Integer
  [SourceCidrBlock](#cfn-ec2-trafficmirrorfilterrule-sourcecidrblock): String
  [SourcePortRange](#cfn-ec2-trafficmirrorfilterrule-sourceportrange):
    TrafficMirrorPortRange
  [TrafficDirection](#cfn-ec2-trafficmirrorfilterrule-trafficdirection): String
  [TrafficMirrorFilterId](#cfn-ec2-trafficmirrorfilterrule-trafficmirrorfilterid): String
```

## Properties<a name="aws-resource-ec2-trafficmirrorfilterrule-properties"></a>

`Description` <a name="cfn-ec2-trafficmirrorfilterrule-description"></a>
The description of the Traffic Mirror rule\.  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`DestinationCidrBlock` <a name="cfn-ec2-trafficmirrorfilterrule-destinationcidrblock"></a>
The destination CIDR block to assign to the Traffic Mirror rule\.  
_Required_: Yes  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`DestinationPortRange` <a name="cfn-ec2-trafficmirrorfilterrule-destinationportrange"></a>
The destination port range\.  
_Required_: No  
_Type_: [TrafficMirrorPortRange](aws-properties-ec2-trafficmirrorfilterrule-trafficmirrorportrange.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Protocol` <a name="cfn-ec2-trafficmirrorfilterrule-protocol"></a>
The protocol, for example UDP, to assign to the Traffic Mirror rule\.  
For information about the protocol value, see [Protocol Numbers](https://www.iana.org/assignments/protocol-numbers/protocol-numbers.xhtml) on the Internet Assigned Numbers Authority \(IANA\) website\.  
_Required_: No  
_Type_: Integer  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`RuleAction` <a name="cfn-ec2-trafficmirrorfilterrule-ruleaction"></a>
The action to take on the filtered traffic\.  
_Required_: Yes  
_Type_: String  
_Allowed values_: `accept | reject`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`RuleNumber` <a name="cfn-ec2-trafficmirrorfilterrule-rulenumber"></a>
The number of the Traffic Mirror rule\. This number must be unique for each Traffic Mirror rule in a given direction\. The rules are processed in ascending order by rule number\.  
_Required_: Yes  
_Type_: Integer  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`SourceCidrBlock` <a name="cfn-ec2-trafficmirrorfilterrule-sourcecidrblock"></a>
The source CIDR block to assign to the Traffic Mirror rule\.  
_Required_: Yes  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`SourcePortRange` <a name="cfn-ec2-trafficmirrorfilterrule-sourceportrange"></a>
The source port range\.  
_Required_: No  
_Type_: [TrafficMirrorPortRange](aws-properties-ec2-trafficmirrorfilterrule-trafficmirrorportrange.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`TrafficDirection` <a name="cfn-ec2-trafficmirrorfilterrule-trafficdirection"></a>
The type of traffic\.  
_Required_: Yes  
_Type_: String  
_Allowed values_: `egress | ingress`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`TrafficMirrorFilterId` <a name="cfn-ec2-trafficmirrorfilterrule-trafficmirrorfilterid"></a>
The ID of the filter that this rule is associated with\.  
_Required_: Yes  
_Type_: String  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

## Return values<a name="aws-resource-ec2-trafficmirrorfilterrule-return-values"></a>

### Ref<a name="aws-resource-ec2-trafficmirrorfilterrule-return-values-ref"></a>

When you pass the logical ID of this resource to the intrinsic `Ref` function, `Ref` returns the ID of the Traffic Mirror filter rule\.

For more information about using the `Ref` function, see [Ref](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference-ref.html)\.

## Examples<a name="aws-resource-ec2-trafficmirrorfilterrule--examples"></a>

### Create a traffic mirror filter rule for inbound UDP traffic<a name="aws-resource-ec2-trafficmirrorfilterrule--examples--Create_a_traffic_mirror_filter_rule_for_inbound_UDP_traffic"></a>

This is a filter rule for UDP traffic\.

#### JSON<a name="aws-resource-ec2-trafficmirrorfilterrule--examples--Create_a_traffic_mirror_filter_rule_for_inbound_UDP_traffic--json"></a>

```
{
  "SampleTrafficMirrorFilterRule": {
    "Type": "AWS::EC2::TrafficMirrorFilterRule",
    "Properties": {
      "Description": "Example traffic mirror filter rule",
      "TrafficMirrorFilterId": "tmf-04812ff784EXAMPLE",
      "TrafficDirection": "ingress",
      "RuleNumber": 10,
      "DestinationCidrBlock": "10.0.0.0/16",
      "SourceCidrBlock": "10.0.0.0/16",
      "RuleAction": "accept",
      "Protocol": 17,
      "SourcePortRange": {
        "FromPort": 10,
        "ToPort": 50
      },
      "DestinationPortRange": {
        "FromPort": 50,
        "ToPort": 100
      }
    }
  }
}
```

#### YAML<a name="aws-resource-ec2-trafficmirrorfilterrule--examples--Create_a_traffic_mirror_filter_rule_for_inbound_UDP_traffic--yaml"></a>

```
SampleTrafficMirrorFilterRule:
  Type: "AWS::EC2::TrafficMirrorFilterRule"
  Properties:
    Description: "Example traffic mirror filter rule"
    TrafficMirrorFilterId: "tmf-04812ff784EXAMPLE"
    TrafficDirection: "ingress"
    RuleNumber: 10
    DestinationCidrBlock: "10.0.0.0/16"
    SourceCidrBlock: "10.0.0.0/16"
    RuleAction: "accept"
    Protocol: 17
    SourcePortRange:
      FromPort: 10
      ToPort: 50
    DestinationPortRange:
      FromPort: 50
      ToPort: 100
```

## See also<a name="aws-resource-ec2-trafficmirrorfilterrule--seealso"></a>

- [Traffic mirror filters and filter rules](https://docs.aws.amazon.com/vpc/latest/mirroring/traffic-mirroring-filters.html) in _Traffic Mirroring_
- [CreateTrafficMirrorFilterRule](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateTrafficMirrorFilterRule.html) in the _Amazon EC2 API Reference_
