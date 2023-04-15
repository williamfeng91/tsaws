# AWS::EC2::LaunchTemplate InstanceMarketOptions<a name="aws-properties-ec2-launchtemplate-launchtemplatedata-instancemarketoptions"></a>

Specifies the market \(purchasing\) option for an instance\.

`InstanceMarketOptions` is a property of the [AWS::EC2::LaunchTemplate LaunchTemplateData](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-launchtemplate-launchtemplatedata.html)\.

## Syntax<a name="aws-properties-ec2-launchtemplate-launchtemplatedata-instancemarketoptions-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-ec2-launchtemplate-launchtemplatedata-instancemarketoptions-syntax.json"></a>

```
{
  "[MarketType](#cfn-ec2-launchtemplate-launchtemplatedata-instancemarketoptions-markettype)" : String,
  "[SpotOptions](#cfn-ec2-launchtemplate-launchtemplatedata-instancemarketoptions-spotoptions)" : SpotOptions
}
```

### YAML<a name="aws-properties-ec2-launchtemplate-launchtemplatedata-instancemarketoptions-syntax.yaml"></a>

```
  [MarketType](#cfn-ec2-launchtemplate-launchtemplatedata-instancemarketoptions-markettype): String
  [SpotOptions](#cfn-ec2-launchtemplate-launchtemplatedata-instancemarketoptions-spotoptions):
    SpotOptions
```

## Properties<a name="aws-properties-ec2-launchtemplate-launchtemplatedata-instancemarketoptions-properties"></a>

`MarketType` <a name="cfn-ec2-launchtemplate-launchtemplatedata-instancemarketoptions-markettype"></a>
The market type\.  
_Required_: Conditional  
_Type_: String  
_Allowed values_: `spot`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`SpotOptions` <a name="cfn-ec2-launchtemplate-launchtemplatedata-instancemarketoptions-spotoptions"></a>
The options for Spot Instances\.  
_Required_: No  
_Type_: [SpotOptions](aws-properties-ec2-launchtemplate-launchtemplatedata-instancemarketoptions-spotoptions.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

## See also<a name="aws-properties-ec2-launchtemplate-launchtemplatedata-instancemarketoptions--seealso"></a>

- [ LaunchTemplateInstanceMarketOptionsRequest](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_LaunchTemplateInstanceMarketOptionsRequest.html) in the _Amazon EC2 API Reference_
