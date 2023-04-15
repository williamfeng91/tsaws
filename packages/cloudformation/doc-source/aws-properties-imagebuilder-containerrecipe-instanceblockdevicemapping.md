# AWS::ImageBuilder::ContainerRecipe InstanceBlockDeviceMapping<a name="aws-properties-imagebuilder-containerrecipe-instanceblockdevicemapping"></a>

Defines block device mappings for the instance used to configure your image\.

## Syntax<a name="aws-properties-imagebuilder-containerrecipe-instanceblockdevicemapping-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-imagebuilder-containerrecipe-instanceblockdevicemapping-syntax.json"></a>

```
{
  "[DeviceName](#cfn-imagebuilder-containerrecipe-instanceblockdevicemapping-devicename)" : String,
  "[Ebs](#cfn-imagebuilder-containerrecipe-instanceblockdevicemapping-ebs)" : EbsInstanceBlockDeviceSpecification,
  "[NoDevice](#cfn-imagebuilder-containerrecipe-instanceblockdevicemapping-nodevice)" : String,
  "[VirtualName](#cfn-imagebuilder-containerrecipe-instanceblockdevicemapping-virtualname)" : String
}
```

### YAML<a name="aws-properties-imagebuilder-containerrecipe-instanceblockdevicemapping-syntax.yaml"></a>

```
  [DeviceName](#cfn-imagebuilder-containerrecipe-instanceblockdevicemapping-devicename): String
  [Ebs](#cfn-imagebuilder-containerrecipe-instanceblockdevicemapping-ebs):
    EbsInstanceBlockDeviceSpecification
  [NoDevice](#cfn-imagebuilder-containerrecipe-instanceblockdevicemapping-nodevice): String
  [VirtualName](#cfn-imagebuilder-containerrecipe-instanceblockdevicemapping-virtualname): String
```

## Properties<a name="aws-properties-imagebuilder-containerrecipe-instanceblockdevicemapping-properties"></a>

`DeviceName` <a name="cfn-imagebuilder-containerrecipe-instanceblockdevicemapping-devicename"></a>
The device to which these mappings apply\.  
_Required_: No  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `1024`  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`Ebs` <a name="cfn-imagebuilder-containerrecipe-instanceblockdevicemapping-ebs"></a>
Use to manage Amazon EBS\-specific configuration for this mapping\.  
_Required_: No  
_Type_: [EbsInstanceBlockDeviceSpecification](aws-properties-imagebuilder-containerrecipe-ebsinstanceblockdevicespecification.md)  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`NoDevice` <a name="cfn-imagebuilder-containerrecipe-instanceblockdevicemapping-nodevice"></a>
Use to remove a mapping from the base image\.  
_Required_: No  
_Type_: String  
_Minimum_: `0`  
_Maximum_: `0`  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`VirtualName` <a name="cfn-imagebuilder-containerrecipe-instanceblockdevicemapping-virtualname"></a>
Use to manage instance ephemeral devices\.  
_Required_: No  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `1024`  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
