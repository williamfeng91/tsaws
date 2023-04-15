# AWS::EC2::Instance PrivateIpAddressSpecification<a name="aws-properties-ec2-network-interface-privateipspec"></a>

Specifies a secondary private IPv4 address for a network interface\.

## Syntax<a name="aws-properties-ec2-network-interface-privateipspec-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-ec2-network-interface-privateipspec-syntax.json"></a>

```
{
  "[Primary](#cfn-ec2-networkinterface-privateipspecification-primary)" : Boolean,
  "[PrivateIpAddress](#cfn-ec2-networkinterface-privateipspecification-privateipaddress)" : String
}
```

### YAML<a name="aws-properties-ec2-network-interface-privateipspec-syntax.yaml"></a>

```
  [Primary](#cfn-ec2-networkinterface-privateipspecification-primary): Boolean
  [PrivateIpAddress](#cfn-ec2-networkinterface-privateipspecification-privateipaddress): String
```

## Properties<a name="aws-properties-ec2-network-interface-privateipspec-properties"></a>

`Primary` <a name="cfn-ec2-networkinterface-privateipspecification-primary"></a>
Indicates whether the private IPv4 address is the primary private IPv4 address\. Only one IPv4 address can be designated as primary\.  
_Required_: Yes  
_Type_: Boolean  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`PrivateIpAddress` <a name="cfn-ec2-networkinterface-privateipspecification-privateipaddress"></a>
The private IPv4 address\.  
_Required_: Yes  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
