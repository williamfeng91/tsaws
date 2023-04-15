# AWS::OpsWorks::Volume<a name="aws-resource-opsworks-volume"></a>

Describes an instance's Amazon EBS volume\.

## Syntax<a name="aws-resource-opsworks-volume-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-resource-opsworks-volume-syntax.json"></a>

```
{
  "Type" : "AWS::OpsWorks::Volume",
  "Properties" : {
      "[Ec2VolumeId](#cfn-opsworks-volume-ec2volumeid)" : String,
      "[MountPoint](#cfn-opsworks-volume-mountpoint)" : String,
      "[Name](#cfn-opsworks-volume-name)" : String,
      "[StackId](#cfn-opsworks-volume-stackid)" : String
    }
}
```

### YAML<a name="aws-resource-opsworks-volume-syntax.yaml"></a>

```
Type: AWS::OpsWorks::Volume
Properties:
  [Ec2VolumeId](#cfn-opsworks-volume-ec2volumeid): String
  [MountPoint](#cfn-opsworks-volume-mountpoint): String
  [Name](#cfn-opsworks-volume-name): String
  [StackId](#cfn-opsworks-volume-stackid): String
```

## Properties<a name="aws-resource-opsworks-volume-properties"></a>

`Ec2VolumeId` <a name="cfn-opsworks-volume-ec2volumeid"></a>
The Amazon EC2 volume ID\.  
_Required_: Yes  
_Type_: String  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`MountPoint` <a name="cfn-opsworks-volume-mountpoint"></a>
The volume mount point\. For example, "/mnt/disk1"\.  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Name` <a name="cfn-opsworks-volume-name"></a>
The volume name\. Volume names are a maximum of 128 characters\.  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`StackId` <a name="cfn-opsworks-volume-stackid"></a>
The stack ID\.  
_Required_: Yes  
_Type_: String  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

## Return values<a name="aws-resource-opsworks-volume-return-values"></a>

### Ref<a name="aws-resource-opsworks-volume-return-values-ref"></a>

When you pass the logical ID of this resource to the intrinsic `Ref` function, `Ref` returns the AWS OpsWorks volume ID, such as `1ab23cd4-92ff-4501-b37c-example`\.

For more information about using the `Ref` function, see [Ref](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference-ref.html)\.

## Examples<a name="aws-resource-opsworks-volume--examples"></a>

### Template Snippet<a name="aws-resource-opsworks-volume--examples--Template_Snippet"></a>

The following example registers the `ec2volume` volume with the `opsworksstack` stack, both of which are declared elsewhere in the same template\.

#### JSON<a name="aws-resource-opsworks-volume--examples--Template_Snippet--json"></a>

```
"opsworksVolume": {
  "Type": "AWS::OpsWorks::Volume",
  "Properties": {
    "Ec2VolumeId": { "Ref": "ec2volume" },
    "MountPoint": "/dev/sdb",
    "Name": "testOpsWorksVolume",
    "StackId": { "Ref": "opsworksstack" }
  }
}
```

#### YAML<a name="aws-resource-opsworks-volume--examples--Template_Snippet--yaml"></a>

```
opsworksVolume:
  Type: AWS::OpsWorks::Volume
  Properties:
    Ec2VolumeId: !Ref 'ec2volume'
    MountPoint: /dev/sdb
    Name: testOpsWorksVolume
    StackId: !Ref 'opsworksstack'
```

## See also<a name="aws-resource-opsworks-volume--seealso"></a>

- [RegisterVolume](https://docs.aws.amazon.com/opsworks/latest/APIReference/API_RegisterVolume.html) in the _AWS OpsWorks API Reference_\.
- [Resource Management](https://docs.aws.amazon.com/opsworks/latest/userguide/resources.html) in the _AWS OpsWorks User Guide_\.
