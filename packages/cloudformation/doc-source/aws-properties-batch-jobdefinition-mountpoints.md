# AWS::Batch::JobDefinition MountPoints<a name="aws-properties-batch-jobdefinition-mountpoints"></a>

Details for a Docker volume mount point that's used in a job's container properties\. This parameter maps to `Volumes` in the [Create a container](https://docs.docker.com/engine/reference/api/docker_remote_api_v1.19/#create-a-container) section of the _Docker Remote API_ and the `--volume` option to docker run\.

## Syntax<a name="aws-properties-batch-jobdefinition-mountpoints-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-batch-jobdefinition-mountpoints-syntax.json"></a>

```
{
  "[ContainerPath](#cfn-batch-jobdefinition-mountpoints-containerpath)" : String,
  "[ReadOnly](#cfn-batch-jobdefinition-mountpoints-readonly)" : Boolean,
  "[SourceVolume](#cfn-batch-jobdefinition-mountpoints-sourcevolume)" : String
}
```

### YAML<a name="aws-properties-batch-jobdefinition-mountpoints-syntax.yaml"></a>

```
  [ContainerPath](#cfn-batch-jobdefinition-mountpoints-containerpath): String
  [ReadOnly](#cfn-batch-jobdefinition-mountpoints-readonly): Boolean
  [SourceVolume](#cfn-batch-jobdefinition-mountpoints-sourcevolume): String
```

## Properties<a name="aws-properties-batch-jobdefinition-mountpoints-properties"></a>

`ContainerPath` <a name="cfn-batch-jobdefinition-mountpoints-containerpath"></a>
The path on the container where the host volume is mounted\.  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`ReadOnly` <a name="cfn-batch-jobdefinition-mountpoints-readonly"></a>
If this value is `true`, the container has read\-only access to the volume\. Otherwise, the container can write to the volume\. The default value is `false`\.  
_Required_: No  
_Type_: Boolean  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`SourceVolume` <a name="cfn-batch-jobdefinition-mountpoints-sourcevolume"></a>
The name of the volume to mount\.  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
