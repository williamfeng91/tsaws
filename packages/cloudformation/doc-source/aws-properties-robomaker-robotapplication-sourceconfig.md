# AWS::RoboMaker::RobotApplication SourceConfig<a name="aws-properties-robomaker-robotapplication-sourceconfig"></a>

Information about a source configuration\.

## Syntax<a name="aws-properties-robomaker-robotapplication-sourceconfig-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-robomaker-robotapplication-sourceconfig-syntax.json"></a>

```
{
  "[Architecture](#cfn-robomaker-robotapplication-sourceconfig-architecture)" : String,
  "[S3Bucket](#cfn-robomaker-robotapplication-sourceconfig-s3bucket)" : String,
  "[S3Key](#cfn-robomaker-robotapplication-sourceconfig-s3key)" : String
}
```

### YAML<a name="aws-properties-robomaker-robotapplication-sourceconfig-syntax.yaml"></a>

```
  [Architecture](#cfn-robomaker-robotapplication-sourceconfig-architecture): String
  [S3Bucket](#cfn-robomaker-robotapplication-sourceconfig-s3bucket): String
  [S3Key](#cfn-robomaker-robotapplication-sourceconfig-s3key): String
```

## Properties<a name="aws-properties-robomaker-robotapplication-sourceconfig-properties"></a>

`Architecture` <a name="cfn-robomaker-robotapplication-sourceconfig-architecture"></a>
The target processor architecture for the application\.  
_Required_: Yes  
_Type_: String  
_Allowed values_: `ARM64 | ARMHF | X86_64`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`S3Bucket` <a name="cfn-robomaker-robotapplication-sourceconfig-s3bucket"></a>
The Amazon S3 bucket name\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `3`  
_Maximum_: `63`  
_Pattern_: `[a-z0-9][a-z0-9.\-]*[a-z0-9]`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`S3Key` <a name="cfn-robomaker-robotapplication-sourceconfig-s3key"></a>
The s3 object key\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `1024`  
_Pattern_: `.*`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
