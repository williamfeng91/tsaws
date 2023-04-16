# AWS::IoTWireless::PartnerAccount SidewalkAccountInfoWithFingerprint<a name="aws-properties-iotwireless-partneraccount-sidewalkaccountinfowithfingerprint"></a>

Information about a Sidewalk account\.

## Syntax<a name="aws-properties-iotwireless-partneraccount-sidewalkaccountinfowithfingerprint-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-iotwireless-partneraccount-sidewalkaccountinfowithfingerprint-syntax.json"></a>

```
{
  "[AmazonId](#cfn-iotwireless-partneraccount-sidewalkaccountinfowithfingerprint-amazonid)" : String,
  "[Arn](#cfn-iotwireless-partneraccount-sidewalkaccountinfowithfingerprint-arn)" : String,
  "[Fingerprint](#cfn-iotwireless-partneraccount-sidewalkaccountinfowithfingerprint-fingerprint)" : String
}
```

### YAML<a name="aws-properties-iotwireless-partneraccount-sidewalkaccountinfowithfingerprint-syntax.yaml"></a>

```
  [AmazonId](#cfn-iotwireless-partneraccount-sidewalkaccountinfowithfingerprint-amazonid): String
  [Arn](#cfn-iotwireless-partneraccount-sidewalkaccountinfowithfingerprint-arn): String
  [Fingerprint](#cfn-iotwireless-partneraccount-sidewalkaccountinfowithfingerprint-fingerprint): String
```

## Properties<a name="aws-properties-iotwireless-partneraccount-sidewalkaccountinfowithfingerprint-properties"></a>

`AmazonId` <a name="cfn-iotwireless-partneraccount-sidewalkaccountinfowithfingerprint-amazonid"></a>
The Sidewalk Amazon ID\.  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Arn` <a name="cfn-iotwireless-partneraccount-sidewalkaccountinfowithfingerprint-arn"></a>
The Amazon Resource Name \(ARN\) of the resource\.  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Fingerprint` <a name="cfn-iotwireless-partneraccount-sidewalkaccountinfowithfingerprint-fingerprint"></a>
The fingerprint of the Sidewalk application server private key\.  
_Required_: No  
_Type_: String  
_Minimum_: `64`  
_Maximum_: `64`  
_Pattern_: `[a-fA-F0-9]{64}`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
