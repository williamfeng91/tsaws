# AWS::ImageBuilder::ImageRecipe InstanceBlockDeviceMapping<a name="aws-properties-imagebuilder-imagerecipe-instanceblockdevicemapping"></a>

Defines block device mappings for the instance used to configure your image\.

## Syntax<a name="aws-properties-imagebuilder-imagerecipe-instanceblockdevicemapping-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-imagebuilder-imagerecipe-instanceblockdevicemapping-syntax.json"></a>

```
{
  "[DeviceName](#cfn-imagebuilder-imagerecipe-instanceblockdevicemapping-devicename)" : String,
  "[Ebs](#cfn-imagebuilder-imagerecipe-instanceblockdevicemapping-ebs)" : EbsInstanceBlockDeviceSpecification,
  "[NoDevice](#cfn-imagebuilder-imagerecipe-instanceblockdevicemapping-nodevice)" : String,
  "[VirtualName](#cfn-imagebuilder-imagerecipe-instanceblockdevicemapping-virtualname)" : String
}
```

### YAML<a name="aws-properties-imagebuilder-imagerecipe-instanceblockdevicemapping-syntax.yaml"></a>

```
  [DeviceName](#cfn-imagebuilder-imagerecipe-instanceblockdevicemapping-devicename): String
  [Ebs](#cfn-imagebuilder-imagerecipe-instanceblockdevicemapping-ebs):
    EbsInstanceBlockDeviceSpecification
  [NoDevice](#cfn-imagebuilder-imagerecipe-instanceblockdevicemapping-nodevice): String
  [VirtualName](#cfn-imagebuilder-imagerecipe-instanceblockdevicemapping-virtualname): String
```

## Properties<a name="aws-properties-imagebuilder-imagerecipe-instanceblockdevicemapping-properties"></a>

`DeviceName` <a name="cfn-imagebuilder-imagerecipe-instanceblockdevicemapping-devicename"></a>
The device to which these mappings apply\.  
_Required_: No  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `1024`  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`Ebs` <a name="cfn-imagebuilder-imagerecipe-instanceblockdevicemapping-ebs"></a>
Use to manage Amazon EBS\-specific configuration for this mapping\.  
_Required_: No  
_Type_: [EbsInstanceBlockDeviceSpecification](aws-properties-imagebuilder-imagerecipe-ebsinstanceblockdevicespecification.md)  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`NoDevice` <a name="cfn-imagebuilder-imagerecipe-instanceblockdevicemapping-nodevice"></a>
Enter an empty string to remove a mapping from the parent image\.  
The following is an example of an empty string value in the `NoDevice` field\.  
`NoDevice:""`  
_Required_: No  
_Type_: String  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`VirtualName` <a name="cfn-imagebuilder-imagerecipe-instanceblockdevicemapping-virtualname"></a>
Manages the instance ephemeral devices\.  
_Required_: No  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `1024`  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
