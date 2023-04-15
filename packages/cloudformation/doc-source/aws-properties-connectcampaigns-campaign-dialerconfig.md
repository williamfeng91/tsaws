# AWS::ConnectCampaigns::Campaign DialerConfig<a name="aws-properties-connectcampaigns-campaign-dialerconfig"></a>

Contains dialer configuration for an outbound campaign\.

## Syntax<a name="aws-properties-connectcampaigns-campaign-dialerconfig-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-connectcampaigns-campaign-dialerconfig-syntax.json"></a>

```
{
  "[PredictiveDialerConfig](#cfn-connectcampaigns-campaign-dialerconfig-predictivedialerconfig)" : PredictiveDialerConfig,
  "[ProgressiveDialerConfig](#cfn-connectcampaigns-campaign-dialerconfig-progressivedialerconfig)" : ProgressiveDialerConfig
}
```

### YAML<a name="aws-properties-connectcampaigns-campaign-dialerconfig-syntax.yaml"></a>

```
  [PredictiveDialerConfig](#cfn-connectcampaigns-campaign-dialerconfig-predictivedialerconfig):
    PredictiveDialerConfig
  [ProgressiveDialerConfig](#cfn-connectcampaigns-campaign-dialerconfig-progressivedialerconfig):
    ProgressiveDialerConfig
```

## Properties<a name="aws-properties-connectcampaigns-campaign-dialerconfig-properties"></a>

`PredictiveDialerConfig` <a name="cfn-connectcampaigns-campaign-dialerconfig-predictivedialerconfig"></a>
The configuration of the predictive dialer\.  
_Required_: No  
_Type_: [PredictiveDialerConfig](aws-properties-connectcampaigns-campaign-predictivedialerconfig.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`ProgressiveDialerConfig` <a name="cfn-connectcampaigns-campaign-dialerconfig-progressivedialerconfig"></a>
The configuration of the progressive dialer\.  
_Required_: No  
_Type_: [ProgressiveDialerConfig](aws-properties-connectcampaigns-campaign-progressivedialerconfig.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
