# AWS::EC2::NetworkInsightsAnalysis AnalysisAclRule<a name="aws-properties-ec2-networkinsightsanalysis-analysisaclrule"></a>

Describes a network access control \(ACL\) rule\.

## Syntax<a name="aws-properties-ec2-networkinsightsanalysis-analysisaclrule-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-ec2-networkinsightsanalysis-analysisaclrule-syntax.json"></a>

```
{
  "[Cidr](#cfn-ec2-networkinsightsanalysis-analysisaclrule-cidr)" : String,
  "[Egress](#cfn-ec2-networkinsightsanalysis-analysisaclrule-egress)" : Boolean,
  "[PortRange](#cfn-ec2-networkinsightsanalysis-analysisaclrule-portrange)" : PortRange,
  "[Protocol](#cfn-ec2-networkinsightsanalysis-analysisaclrule-protocol)" : String,
  "[RuleAction](#cfn-ec2-networkinsightsanalysis-analysisaclrule-ruleaction)" : String,
  "[RuleNumber](#cfn-ec2-networkinsightsanalysis-analysisaclrule-rulenumber)" : Integer
}
```

### YAML<a name="aws-properties-ec2-networkinsightsanalysis-analysisaclrule-syntax.yaml"></a>

```
  [Cidr](#cfn-ec2-networkinsightsanalysis-analysisaclrule-cidr): String
  [Egress](#cfn-ec2-networkinsightsanalysis-analysisaclrule-egress): Boolean
  [PortRange](#cfn-ec2-networkinsightsanalysis-analysisaclrule-portrange):
    PortRange
  [Protocol](#cfn-ec2-networkinsightsanalysis-analysisaclrule-protocol): String
  [RuleAction](#cfn-ec2-networkinsightsanalysis-analysisaclrule-ruleaction): String
  [RuleNumber](#cfn-ec2-networkinsightsanalysis-analysisaclrule-rulenumber): Integer
```

## Properties<a name="aws-properties-ec2-networkinsightsanalysis-analysisaclrule-properties"></a>

`Cidr` <a name="cfn-ec2-networkinsightsanalysis-analysisaclrule-cidr"></a>
The IPv4 address range, in CIDR notation\.  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Egress` <a name="cfn-ec2-networkinsightsanalysis-analysisaclrule-egress"></a>
Indicates whether the rule is an outbound rule\.  
_Required_: No  
_Type_: Boolean  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`PortRange` <a name="cfn-ec2-networkinsightsanalysis-analysisaclrule-portrange"></a>
The range of ports\.  
_Required_: No  
_Type_: [PortRange](aws-properties-ec2-networkinsightsanalysis-portrange.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Protocol` <a name="cfn-ec2-networkinsightsanalysis-analysisaclrule-protocol"></a>
The protocol\.  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`RuleAction` <a name="cfn-ec2-networkinsightsanalysis-analysisaclrule-ruleaction"></a>
Indicates whether to allow or deny traffic that matches the rule\.  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`RuleNumber` <a name="cfn-ec2-networkinsightsanalysis-analysisaclrule-rulenumber"></a>
The rule number\.  
_Required_: No  
_Type_: Integer  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
