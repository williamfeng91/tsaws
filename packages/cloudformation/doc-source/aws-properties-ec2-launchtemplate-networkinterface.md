# AWS::EC2::LaunchTemplate NetworkInterface<a name="aws-properties-ec2-launchtemplate-networkinterface"></a>

Specifies the parameters for a network interface\.

`NetworkInterface` is a property of [AWS::EC2::LaunchTemplate LaunchTemplateData](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-launchtemplate-launchtemplatedata.html)\.

## Syntax<a name="aws-properties-ec2-launchtemplate-networkinterface-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-ec2-launchtemplate-networkinterface-syntax.json"></a>

```
{
  "[AssociateCarrierIpAddress](#cfn-ec2-launchtemplate-networkinterface-associatecarrieripaddress)" : Boolean,
  "[AssociatePublicIpAddress](#cfn-ec2-launchtemplate-networkinterface-associatepublicipaddress)" : Boolean,
  "[DeleteOnTermination](#cfn-ec2-launchtemplate-networkinterface-deleteontermination)" : Boolean,
  "[Description](#cfn-ec2-launchtemplate-networkinterface-description)" : String,
  "[DeviceIndex](#cfn-ec2-launchtemplate-networkinterface-deviceindex)" : Integer,
  "[Groups](#cfn-ec2-launchtemplate-networkinterface-groups)" : [ String, ... ],
  "[InterfaceType](#cfn-ec2-launchtemplate-networkinterface-interfacetype)" : String,
  "[Ipv4PrefixCount](#cfn-ec2-launchtemplate-networkinterface-ipv4prefixcount)" : Integer,
  "[Ipv4Prefixes](#cfn-ec2-launchtemplate-networkinterface-ipv4prefixes)" : [ Ipv4PrefixSpecification, ... ],
  "[Ipv6AddressCount](#cfn-ec2-launchtemplate-networkinterface-ipv6addresscount)" : Integer,
  "[Ipv6Addresses](#cfn-ec2-launchtemplate-networkinterface-ipv6addresses)" : [ Ipv6Add, ... ],
  "[Ipv6PrefixCount](#cfn-ec2-launchtemplate-networkinterface-ipv6prefixcount)" : Integer,
  "[Ipv6Prefixes](#cfn-ec2-launchtemplate-networkinterface-ipv6prefixes)" : [ Ipv6PrefixSpecification, ... ],
  "[NetworkCardIndex](#cfn-ec2-launchtemplate-networkinterface-networkcardindex)" : Integer,
  "[NetworkInterfaceId](#cfn-ec2-launchtemplate-networkinterface-networkinterfaceid)" : String,
  "[PrivateIpAddress](#cfn-ec2-launchtemplate-networkinterface-privateipaddress)" : String,
  "[PrivateIpAddresses](#cfn-ec2-launchtemplate-networkinterface-privateipaddresses)" : [ PrivateIpAdd, ... ],
  "[SecondaryPrivateIpAddressCount](#cfn-ec2-launchtemplate-networkinterface-secondaryprivateipaddresscount)" : Integer,
  "[SubnetId](#cfn-ec2-launchtemplate-networkinterface-subnetid)" : String
}
```

### YAML<a name="aws-properties-ec2-launchtemplate-networkinterface-syntax.yaml"></a>

```
  [AssociateCarrierIpAddress](#cfn-ec2-launchtemplate-networkinterface-associatecarrieripaddress): Boolean
  [AssociatePublicIpAddress](#cfn-ec2-launchtemplate-networkinterface-associatepublicipaddress): Boolean
  [DeleteOnTermination](#cfn-ec2-launchtemplate-networkinterface-deleteontermination): Boolean
  [Description](#cfn-ec2-launchtemplate-networkinterface-description): String
  [DeviceIndex](#cfn-ec2-launchtemplate-networkinterface-deviceindex): Integer
  [Groups](#cfn-ec2-launchtemplate-networkinterface-groups):
    - String
  [InterfaceType](#cfn-ec2-launchtemplate-networkinterface-interfacetype): String
  [Ipv4PrefixCount](#cfn-ec2-launchtemplate-networkinterface-ipv4prefixcount): Integer
  [Ipv4Prefixes](#cfn-ec2-launchtemplate-networkinterface-ipv4prefixes):
    - Ipv4PrefixSpecification
  [Ipv6AddressCount](#cfn-ec2-launchtemplate-networkinterface-ipv6addresscount): Integer
  [Ipv6Addresses](#cfn-ec2-launchtemplate-networkinterface-ipv6addresses):
    - Ipv6Add
  [Ipv6PrefixCount](#cfn-ec2-launchtemplate-networkinterface-ipv6prefixcount): Integer
  [Ipv6Prefixes](#cfn-ec2-launchtemplate-networkinterface-ipv6prefixes):
    - Ipv6PrefixSpecification
  [NetworkCardIndex](#cfn-ec2-launchtemplate-networkinterface-networkcardindex): Integer
  [NetworkInterfaceId](#cfn-ec2-launchtemplate-networkinterface-networkinterfaceid): String
  [PrivateIpAddress](#cfn-ec2-launchtemplate-networkinterface-privateipaddress): String
  [PrivateIpAddresses](#cfn-ec2-launchtemplate-networkinterface-privateipaddresses):
    - PrivateIpAdd
  [SecondaryPrivateIpAddressCount](#cfn-ec2-launchtemplate-networkinterface-secondaryprivateipaddresscount): Integer
  [SubnetId](#cfn-ec2-launchtemplate-networkinterface-subnetid): String
```

## Properties<a name="aws-properties-ec2-launchtemplate-networkinterface-properties"></a>

`AssociateCarrierIpAddress` <a name="cfn-ec2-launchtemplate-networkinterface-associatecarrieripaddress"></a>
Indicates whether to associate a Carrier IP address with eth0 for a new network interface\.  
Use this option when you launch an instance in a Wavelength Zone and want to associate a Carrier IP address with the network interface\. For more information about Carrier IP addresses, see [Carrier IP addresses](https://docs.aws.amazon.com/wavelength/latest/developerguide/how-wavelengths-work.html#provider-owned-ip) in the _ AWS Wavelength Developer Guide_\.  
_Required_: No  
_Type_: Boolean  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`AssociatePublicIpAddress` <a name="cfn-ec2-launchtemplate-networkinterface-associatepublicipaddress"></a>
Associates a public IPv4 address with eth0 for a new network interface\.  
_Required_: No  
_Type_: Boolean  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`DeleteOnTermination` <a name="cfn-ec2-launchtemplate-networkinterface-deleteontermination"></a>
Indicates whether the network interface is deleted when the instance is terminated\.  
_Required_: No  
_Type_: Boolean  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Description` <a name="cfn-ec2-launchtemplate-networkinterface-description"></a>
A description for the network interface\.  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`DeviceIndex` <a name="cfn-ec2-launchtemplate-networkinterface-deviceindex"></a>
The device index for the network interface attachment\.  
_Required_: No  
_Type_: Integer  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Groups` <a name="cfn-ec2-launchtemplate-networkinterface-groups"></a>
The IDs of one or more security groups\.  
_Required_: No  
_Type_: List of String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`InterfaceType` <a name="cfn-ec2-launchtemplate-networkinterface-interfacetype"></a>
The type of network interface\. To create an Elastic Fabric Adapter \(EFA\), specify `efa`\. For more information, see [Elastic Fabric Adapter](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/efa.html) in the _Amazon Elastic Compute Cloud User Guide_\.  
If you are not creating an EFA, specify `interface` or omit this parameter\.  
Valid values: `interface` \| `efa`  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Ipv4PrefixCount` <a name="cfn-ec2-launchtemplate-networkinterface-ipv4prefixcount"></a>
The number of IPv4 prefixes to be automatically assigned to the network interface\. You cannot use this option if you use the `Ipv4Prefix` option\.  
_Required_: No  
_Type_: Integer  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Ipv4Prefixes` <a name="cfn-ec2-launchtemplate-networkinterface-ipv4prefixes"></a>
One or more IPv4 prefixes to be assigned to the network interface\. You cannot use this option if you use the `Ipv4PrefixCount` option\.  
_Required_: No  
_Type_: List of [Ipv4PrefixSpecification](aws-properties-ec2-launchtemplate-ipv4prefixspecification.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Ipv6AddressCount` <a name="cfn-ec2-launchtemplate-networkinterface-ipv6addresscount"></a>
The number of IPv6 addresses to assign to a network interface\. Amazon EC2 automatically selects the IPv6 addresses from the subnet range\. You can't use this option if specifying specific IPv6 addresses\.  
_Required_: No  
_Type_: Integer  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Ipv6Addresses` <a name="cfn-ec2-launchtemplate-networkinterface-ipv6addresses"></a>
One or more specific IPv6 addresses from the IPv6 CIDR block range of your subnet\. You can't use this option if you're specifying a number of IPv6 addresses\.  
_Required_: No  
_Type_: List of [Ipv6Add](aws-properties-ec2-launchtemplate-ipv6add.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Ipv6PrefixCount` <a name="cfn-ec2-launchtemplate-networkinterface-ipv6prefixcount"></a>
The number of IPv6 prefixes to be automatically assigned to the network interface\. You cannot use this option if you use the `Ipv6Prefix` option\.  
_Required_: No  
_Type_: Integer  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Ipv6Prefixes` <a name="cfn-ec2-launchtemplate-networkinterface-ipv6prefixes"></a>
One or more IPv6 prefixes to be assigned to the network interface\. You cannot use this option if you use the `Ipv6PrefixCount` option\.  
_Required_: No  
_Type_: List of [Ipv6PrefixSpecification](aws-properties-ec2-launchtemplate-ipv6prefixspecification.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`NetworkCardIndex` <a name="cfn-ec2-launchtemplate-networkinterface-networkcardindex"></a>
The index of the network card\. Some instance types support multiple network cards\. The primary network interface must be assigned to network card index 0\. The default is network card index 0\.  
_Required_: No  
_Type_: Integer  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`NetworkInterfaceId` <a name="cfn-ec2-launchtemplate-networkinterface-networkinterfaceid"></a>
The ID of the network interface\.  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`PrivateIpAddress` <a name="cfn-ec2-launchtemplate-networkinterface-privateipaddress"></a>
The primary private IPv4 address of the network interface\.  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`PrivateIpAddresses` <a name="cfn-ec2-launchtemplate-networkinterface-privateipaddresses"></a>
One or more private IPv4 addresses\.  
_Required_: No  
_Type_: List of [PrivateIpAdd](aws-properties-ec2-launchtemplate-privateipadd.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`SecondaryPrivateIpAddressCount` <a name="cfn-ec2-launchtemplate-networkinterface-secondaryprivateipaddresscount"></a>
The number of secondary private IPv4 addresses to assign to a network interface\.  
_Required_: No  
_Type_: Integer  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`SubnetId` <a name="cfn-ec2-launchtemplate-networkinterface-subnetid"></a>
The ID of the subnet for the network interface\.  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

## See also<a name="aws-properties-ec2-launchtemplate-networkinterface--seealso"></a>

- [ LaunchTemplateInstanceNetworkInterfaceSpecificationRequest](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_LaunchTemplateInstanceNetworkInterfaceSpecificationRequest.html) in the _Amazon EC2 API Reference_