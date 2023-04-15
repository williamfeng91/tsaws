# AWS::NetworkManager::SiteToSiteVpnAttachment ProposedSegmentChange<a name="aws-properties-networkmanager-sitetositevpnattachment-proposedsegmentchange"></a>

Describes a proposed segment change\. In some cases, the segment change must first be evaluated and accepted\.

## Syntax<a name="aws-properties-networkmanager-sitetositevpnattachment-proposedsegmentchange-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-networkmanager-sitetositevpnattachment-proposedsegmentchange-syntax.json"></a>

```
{
  "[AttachmentPolicyRuleNumber](#cfn-networkmanager-sitetositevpnattachment-proposedsegmentchange-attachmentpolicyrulenumber)" : Integer,
  "[SegmentName](#cfn-networkmanager-sitetositevpnattachment-proposedsegmentchange-segmentname)" : String,
  "[Tags](#cfn-networkmanager-sitetositevpnattachment-proposedsegmentchange-tags)" : [ [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html), ... ]
}
```

### YAML<a name="aws-properties-networkmanager-sitetositevpnattachment-proposedsegmentchange-syntax.yaml"></a>

```
  [AttachmentPolicyRuleNumber](#cfn-networkmanager-sitetositevpnattachment-proposedsegmentchange-attachmentpolicyrulenumber): Integer
  [SegmentName](#cfn-networkmanager-sitetositevpnattachment-proposedsegmentchange-segmentname): String
  [Tags](#cfn-networkmanager-sitetositevpnattachment-proposedsegmentchange-tags):
    - [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)
```

## Properties<a name="aws-properties-networkmanager-sitetositevpnattachment-proposedsegmentchange-properties"></a>

`AttachmentPolicyRuleNumber` <a name="cfn-networkmanager-sitetositevpnattachment-proposedsegmentchange-attachmentpolicyrulenumber"></a>
The rule number in the policy document that applies to this change\.  
_Required_: No  
_Type_: Integer  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`SegmentName` <a name="cfn-networkmanager-sitetositevpnattachment-proposedsegmentchange-segmentname"></a>
The name of the segment to change\.  
_Required_: No  
_Type_: String  
_Minimum_: `0`  
_Maximum_: `256`  
_Pattern_: `[\s\S]*`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Tags` <a name="cfn-networkmanager-sitetositevpnattachment-proposedsegmentchange-tags"></a>
The list of key\-value tags that changed for the segment\.  
_Required_: No  
_Type_: List of [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
