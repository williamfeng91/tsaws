# AWS::DirectoryService::MicrosoftAD VpcSettings<a name="aws-properties-directoryservice-microsoftad-vpcsettings"></a>

Contains VPC information for the [CreateDirectory](https://docs.aws.amazon.com/directoryservice/latest/devguide/API_CreateDirectory.html) or [CreateMicrosoftAD](https://docs.aws.amazon.com/directoryservice/latest/devguide/API_CreateMicrosoftAD.html) operation\.

## Syntax<a name="aws-properties-directoryservice-microsoftad-vpcsettings-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-directoryservice-microsoftad-vpcsettings-syntax.json"></a>

```
{
  "[SubnetIds](#cfn-directoryservice-microsoftad-vpcsettings-subnetids)" : [ String, ... ],
  "[VpcId](#cfn-directoryservice-microsoftad-vpcsettings-vpcid)" : String
}
```

### YAML<a name="aws-properties-directoryservice-microsoftad-vpcsettings-syntax.yaml"></a>

```
  [SubnetIds](#cfn-directoryservice-microsoftad-vpcsettings-subnetids):
    - String
  [VpcId](#cfn-directoryservice-microsoftad-vpcsettings-vpcid): String
```

## Properties<a name="aws-properties-directoryservice-microsoftad-vpcsettings-properties"></a>

`SubnetIds` <a name="cfn-directoryservice-microsoftad-vpcsettings-subnetids"></a>
The identifiers of the subnets for the directory servers\. The two subnets must be in different Availability Zones\. AWS Directory Service specifies a directory server and a DNS server in each of these subnets\.  
_Required_: Yes  
_Type_: List of String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`VpcId` <a name="cfn-directoryservice-microsoftad-vpcsettings-vpcid"></a>
The identifier of the VPC in which to create the directory\.  
_Required_: Yes  
_Type_: String  
_Pattern_: `^(vpc-[0-9a-f]{8}|vpc-[0-9a-f]{17})$`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
