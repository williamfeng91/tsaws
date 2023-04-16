# AWS::SageMaker::AppImageConfig FileSystemConfig<a name="aws-properties-sagemaker-appimageconfig-filesystemconfig"></a>

The Amazon Elastic File System \(EFS\) storage configuration for a SageMaker image\.

## Syntax<a name="aws-properties-sagemaker-appimageconfig-filesystemconfig-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-sagemaker-appimageconfig-filesystemconfig-syntax.json"></a>

```
{
  "[DefaultGid](#cfn-sagemaker-appimageconfig-filesystemconfig-defaultgid)" : Integer,
  "[DefaultUid](#cfn-sagemaker-appimageconfig-filesystemconfig-defaultuid)" : Integer,
  "[MountPath](#cfn-sagemaker-appimageconfig-filesystemconfig-mountpath)" : String
}
```

### YAML<a name="aws-properties-sagemaker-appimageconfig-filesystemconfig-syntax.yaml"></a>

```
  [DefaultGid](#cfn-sagemaker-appimageconfig-filesystemconfig-defaultgid): Integer
  [DefaultUid](#cfn-sagemaker-appimageconfig-filesystemconfig-defaultuid): Integer
  [MountPath](#cfn-sagemaker-appimageconfig-filesystemconfig-mountpath): String
```

## Properties<a name="aws-properties-sagemaker-appimageconfig-filesystemconfig-properties"></a>

`DefaultGid` <a name="cfn-sagemaker-appimageconfig-filesystemconfig-defaultgid"></a>
The default POSIX group ID \(GID\)\. If not specified, defaults to `100`\.  
_Required_: No  
_Type_: Integer  
_Minimum_: `0`  
_Maximum_: `65535`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`DefaultUid` <a name="cfn-sagemaker-appimageconfig-filesystemconfig-defaultuid"></a>
The default POSIX user ID \(UID\)\. If not specified, defaults to `1000`\.  
_Required_: No  
_Type_: Integer  
_Minimum_: `0`  
_Maximum_: `65535`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`MountPath` <a name="cfn-sagemaker-appimageconfig-filesystemconfig-mountpath"></a>
The path within the image to mount the user's EFS home directory\. The directory should be empty\. If not specified, defaults to _/home/sagemaker\-user_\.  
_Required_: No  
_Type_: String  
_Maximum_: `1024`  
_Pattern_: `^\/.*`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
