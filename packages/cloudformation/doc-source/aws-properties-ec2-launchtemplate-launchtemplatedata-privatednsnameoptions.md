# AWS::EC2::LaunchTemplate PrivateDnsNameOptions<a name="aws-properties-ec2-launchtemplate-launchtemplatedata-privatednsnameoptions"></a>

The hostname type for EC2 instances launched into this subnet and how DNS A and AAAA record queries should be handled\. For more information, see [Amazon EC2 instance hostname types](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-naming.html) in the _Amazon Elastic Compute Cloud User Guide_\.

## Syntax<a name="aws-properties-ec2-launchtemplate-launchtemplatedata-privatednsnameoptions-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-ec2-launchtemplate-launchtemplatedata-privatednsnameoptions-syntax.json"></a>

```
{
  "[EnableResourceNameDnsAAAARecord](#cfn-ec2-launchtemplate-launchtemplatedata-privatednsnameoptions-enableresourcenamednsaaaarecord)" : Boolean,
  "[EnableResourceNameDnsARecord](#cfn-ec2-launchtemplate-launchtemplatedata-privatednsnameoptions-enableresourcenamednsarecord)" : Boolean,
  "[HostnameType](#cfn-ec2-launchtemplate-launchtemplatedata-privatednsnameoptions-hostnametype)" : String
}
```

### YAML<a name="aws-properties-ec2-launchtemplate-launchtemplatedata-privatednsnameoptions-syntax.yaml"></a>

```
  [EnableResourceNameDnsAAAARecord](#cfn-ec2-launchtemplate-launchtemplatedata-privatednsnameoptions-enableresourcenamednsaaaarecord): Boolean
  [EnableResourceNameDnsARecord](#cfn-ec2-launchtemplate-launchtemplatedata-privatednsnameoptions-enableresourcenamednsarecord): Boolean
  [HostnameType](#cfn-ec2-launchtemplate-launchtemplatedata-privatednsnameoptions-hostnametype): String
```

## Properties<a name="aws-properties-ec2-launchtemplate-launchtemplatedata-privatednsnameoptions-properties"></a>

`EnableResourceNameDnsAAAARecord` <a name="cfn-ec2-launchtemplate-launchtemplatedata-privatednsnameoptions-enableresourcenamednsaaaarecord"></a>
Indicates whether to respond to DNS queries for instance hostnames with DNS AAAA records\.  
_Required_: No  
_Type_: Boolean  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`EnableResourceNameDnsARecord` <a name="cfn-ec2-launchtemplate-launchtemplatedata-privatednsnameoptions-enableresourcenamednsarecord"></a>
Indicates whether to respond to DNS queries for instance hostnames with DNS A records\.  
_Required_: No  
_Type_: Boolean  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`HostnameType` <a name="cfn-ec2-launchtemplate-launchtemplatedata-privatednsnameoptions-hostnametype"></a>
The type of hostname for EC2 instances\. For IPv4 only subnets, an instance DNS name must be based on the instance IPv4 address\. For IPv6 only subnets, an instance DNS name must be based on the instance ID\. For dual\-stack subnets, you can specify whether DNS names use the instance IPv4 address or the instance ID\. For more information, see [Amazon EC2 instance hostname types](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-naming.html) in the _Amazon Elastic Compute Cloud User Guide_\.  
_Required_: No  
_Type_: String  
_Allowed values_: `ip-name | resource-name`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
