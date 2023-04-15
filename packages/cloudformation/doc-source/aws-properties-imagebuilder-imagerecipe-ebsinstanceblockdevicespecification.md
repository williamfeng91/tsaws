# AWS::ImageBuilder::ImageRecipe EbsInstanceBlockDeviceSpecification<a name="aws-properties-imagebuilder-imagerecipe-ebsinstanceblockdevicespecification"></a>

The image recipe EBS instance block device specification includes the Amazon EBS\-specific block device mapping specifications for the image\.

## Syntax<a name="aws-properties-imagebuilder-imagerecipe-ebsinstanceblockdevicespecification-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-imagebuilder-imagerecipe-ebsinstanceblockdevicespecification-syntax.json"></a>

```
{
  "[DeleteOnTermination](#cfn-imagebuilder-imagerecipe-ebsinstanceblockdevicespecification-deleteontermination)" : Boolean,
  "[Encrypted](#cfn-imagebuilder-imagerecipe-ebsinstanceblockdevicespecification-encrypted)" : Boolean,
  "[Iops](#cfn-imagebuilder-imagerecipe-ebsinstanceblockdevicespecification-iops)" : Integer,
  "[KmsKeyId](#cfn-imagebuilder-imagerecipe-ebsinstanceblockdevicespecification-kmskeyid)" : String,
  "[SnapshotId](#cfn-imagebuilder-imagerecipe-ebsinstanceblockdevicespecification-snapshotid)" : String,
  "[Throughput](#cfn-imagebuilder-imagerecipe-ebsinstanceblockdevicespecification-throughput)" : Integer,
  "[VolumeSize](#cfn-imagebuilder-imagerecipe-ebsinstanceblockdevicespecification-volumesize)" : Integer,
  "[VolumeType](#cfn-imagebuilder-imagerecipe-ebsinstanceblockdevicespecification-volumetype)" : String
}
```

### YAML<a name="aws-properties-imagebuilder-imagerecipe-ebsinstanceblockdevicespecification-syntax.yaml"></a>

```
  [DeleteOnTermination](#cfn-imagebuilder-imagerecipe-ebsinstanceblockdevicespecification-deleteontermination): Boolean
  [Encrypted](#cfn-imagebuilder-imagerecipe-ebsinstanceblockdevicespecification-encrypted): Boolean
  [Iops](#cfn-imagebuilder-imagerecipe-ebsinstanceblockdevicespecification-iops): Integer
  [KmsKeyId](#cfn-imagebuilder-imagerecipe-ebsinstanceblockdevicespecification-kmskeyid): String
  [SnapshotId](#cfn-imagebuilder-imagerecipe-ebsinstanceblockdevicespecification-snapshotid): String
  [Throughput](#cfn-imagebuilder-imagerecipe-ebsinstanceblockdevicespecification-throughput): Integer
  [VolumeSize](#cfn-imagebuilder-imagerecipe-ebsinstanceblockdevicespecification-volumesize): Integer
  [VolumeType](#cfn-imagebuilder-imagerecipe-ebsinstanceblockdevicespecification-volumetype): String
```

## Properties<a name="aws-properties-imagebuilder-imagerecipe-ebsinstanceblockdevicespecification-properties"></a>

`DeleteOnTermination` <a name="cfn-imagebuilder-imagerecipe-ebsinstanceblockdevicespecification-deleteontermination"></a>
Configures delete on termination of the associated device\.  
_Required_: No  
_Type_: Boolean  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`Encrypted` <a name="cfn-imagebuilder-imagerecipe-ebsinstanceblockdevicespecification-encrypted"></a>
Use to configure device encryption\.  
_Required_: No  
_Type_: Boolean  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`Iops` <a name="cfn-imagebuilder-imagerecipe-ebsinstanceblockdevicespecification-iops"></a>
Use to configure device IOPS\.  
_Required_: No  
_Type_: Integer  
_Minimum_: `100`  
_Maximum_: `64000`  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`KmsKeyId` <a name="cfn-imagebuilder-imagerecipe-ebsinstanceblockdevicespecification-kmskeyid"></a>
Use to configure the KMS key to use when encrypting the device\.  
_Required_: No  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `1024`  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`SnapshotId` <a name="cfn-imagebuilder-imagerecipe-ebsinstanceblockdevicespecification-snapshotid"></a>
The snapshot that defines the device contents\.  
_Required_: No  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `1024`  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`Throughput` <a name="cfn-imagebuilder-imagerecipe-ebsinstanceblockdevicespecification-throughput"></a>
**For GP3 volumes only** – The throughput in MiB/s that the volume supports\.  
_Required_: No  
_Type_: Integer  
_Minimum_: `125`  
_Maximum_: `1000`  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`VolumeSize` <a name="cfn-imagebuilder-imagerecipe-ebsinstanceblockdevicespecification-volumesize"></a>
Overrides the volume size of the device\.  
_Required_: No  
_Type_: Integer  
_Minimum_: `1`  
_Maximum_: `16000`  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`VolumeType` <a name="cfn-imagebuilder-imagerecipe-ebsinstanceblockdevicespecification-volumetype"></a>
Overrides the volume type of the device\.  
_Required_: No  
_Type_: String  
_Allowed values_: `gp2 | gp3 | io1 | io2 | sc1 | st1 | standard`  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
