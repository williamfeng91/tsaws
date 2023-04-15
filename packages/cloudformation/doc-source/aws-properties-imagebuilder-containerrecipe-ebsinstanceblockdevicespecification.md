# AWS::ImageBuilder::ContainerRecipe EbsInstanceBlockDeviceSpecification<a name="aws-properties-imagebuilder-containerrecipe-ebsinstanceblockdevicespecification"></a>

Amazon EBS\-specific block device mapping specifications\.

## Syntax<a name="aws-properties-imagebuilder-containerrecipe-ebsinstanceblockdevicespecification-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-imagebuilder-containerrecipe-ebsinstanceblockdevicespecification-syntax.json"></a>

```
{
  "[DeleteOnTermination](#cfn-imagebuilder-containerrecipe-ebsinstanceblockdevicespecification-deleteontermination)" : Boolean,
  "[Encrypted](#cfn-imagebuilder-containerrecipe-ebsinstanceblockdevicespecification-encrypted)" : Boolean,
  "[Iops](#cfn-imagebuilder-containerrecipe-ebsinstanceblockdevicespecification-iops)" : Integer,
  "[KmsKeyId](#cfn-imagebuilder-containerrecipe-ebsinstanceblockdevicespecification-kmskeyid)" : String,
  "[SnapshotId](#cfn-imagebuilder-containerrecipe-ebsinstanceblockdevicespecification-snapshotid)" : String,
  "[Throughput](#cfn-imagebuilder-containerrecipe-ebsinstanceblockdevicespecification-throughput)" : Integer,
  "[VolumeSize](#cfn-imagebuilder-containerrecipe-ebsinstanceblockdevicespecification-volumesize)" : Integer,
  "[VolumeType](#cfn-imagebuilder-containerrecipe-ebsinstanceblockdevicespecification-volumetype)" : String
}
```

### YAML<a name="aws-properties-imagebuilder-containerrecipe-ebsinstanceblockdevicespecification-syntax.yaml"></a>

```
  [DeleteOnTermination](#cfn-imagebuilder-containerrecipe-ebsinstanceblockdevicespecification-deleteontermination): Boolean
  [Encrypted](#cfn-imagebuilder-containerrecipe-ebsinstanceblockdevicespecification-encrypted): Boolean
  [Iops](#cfn-imagebuilder-containerrecipe-ebsinstanceblockdevicespecification-iops): Integer
  [KmsKeyId](#cfn-imagebuilder-containerrecipe-ebsinstanceblockdevicespecification-kmskeyid): String
  [SnapshotId](#cfn-imagebuilder-containerrecipe-ebsinstanceblockdevicespecification-snapshotid): String
  [Throughput](#cfn-imagebuilder-containerrecipe-ebsinstanceblockdevicespecification-throughput): Integer
  [VolumeSize](#cfn-imagebuilder-containerrecipe-ebsinstanceblockdevicespecification-volumesize): Integer
  [VolumeType](#cfn-imagebuilder-containerrecipe-ebsinstanceblockdevicespecification-volumetype): String
```

## Properties<a name="aws-properties-imagebuilder-containerrecipe-ebsinstanceblockdevicespecification-properties"></a>

`DeleteOnTermination` <a name="cfn-imagebuilder-containerrecipe-ebsinstanceblockdevicespecification-deleteontermination"></a>
Use to configure delete on termination of the associated device\.  
_Required_: No  
_Type_: Boolean  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`Encrypted` <a name="cfn-imagebuilder-containerrecipe-ebsinstanceblockdevicespecification-encrypted"></a>
Use to configure device encryption\.  
_Required_: No  
_Type_: Boolean  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`Iops` <a name="cfn-imagebuilder-containerrecipe-ebsinstanceblockdevicespecification-iops"></a>
Use to configure device IOPS\.  
_Required_: No  
_Type_: Integer  
_Minimum_: `100`  
_Maximum_: `64000`  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`KmsKeyId` <a name="cfn-imagebuilder-containerrecipe-ebsinstanceblockdevicespecification-kmskeyid"></a>
Use to configure the KMS key to use when encrypting the device\.  
_Required_: No  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `1024`  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`SnapshotId` <a name="cfn-imagebuilder-containerrecipe-ebsinstanceblockdevicespecification-snapshotid"></a>
The snapshot that defines the device contents\.  
_Required_: No  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `1024`  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`Throughput` <a name="cfn-imagebuilder-containerrecipe-ebsinstanceblockdevicespecification-throughput"></a>
**For GP3 volumes only** – The throughput in MiB/s that the volume supports\.  
_Required_: No  
_Type_: Integer  
_Minimum_: `125`  
_Maximum_: `1000`  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`VolumeSize` <a name="cfn-imagebuilder-containerrecipe-ebsinstanceblockdevicespecification-volumesize"></a>
Use to override the device's volume size\.  
_Required_: No  
_Type_: Integer  
_Minimum_: `1`  
_Maximum_: `16000`  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`VolumeType` <a name="cfn-imagebuilder-containerrecipe-ebsinstanceblockdevicespecification-volumetype"></a>
Use to override the device's volume type\.  
_Required_: No  
_Type_: String  
_Allowed values_: `gp2 | gp3 | io1 | io2 | sc1 | st1 | standard`  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
