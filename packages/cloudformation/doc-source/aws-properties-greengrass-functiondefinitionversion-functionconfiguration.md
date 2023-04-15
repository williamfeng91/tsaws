# AWS::Greengrass::FunctionDefinitionVersion FunctionConfiguration<a name="aws-properties-greengrass-functiondefinitionversion-functionconfiguration"></a>

<a name="aws-properties-greengrass-functiondefinitionversion-functionconfiguration-description"></a>The group\-specific configuration settings for a Lambda function\. These settings configure the function's behavior in the Greengrass group\. For more information, see [Controlling Execution of Greengrass Lambda Functions by Using Group\-Specific Configuration](https://docs.aws.amazon.com/greengrass/latest/developerguide/lambda-group-config.html) in the _AWS IoT Greengrass Version 1 Developer Guide_\.

<a name="aws-properties-greengrass-functiondefinitionversion-functionconfiguration-inheritance"></a> In an AWS CloudFormation template, `FunctionConfiguration` is a property of the [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-functiondefinitionversion-function.html](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-functiondefinitionversion-function.html) property type\.

## Syntax<a name="aws-properties-greengrass-functiondefinitionversion-functionconfiguration-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-greengrass-functiondefinitionversion-functionconfiguration-syntax.json"></a>

```
{
  "[EncodingType](#cfn-greengrass-functiondefinitionversion-functionconfiguration-encodingtype)" : String,
  "[Environment](#cfn-greengrass-functiondefinitionversion-functionconfiguration-environment)" : Environment,
  "[ExecArgs](#cfn-greengrass-functiondefinitionversion-functionconfiguration-execargs)" : String,
  "[Executable](#cfn-greengrass-functiondefinitionversion-functionconfiguration-executable)" : String,
  "[MemorySize](#cfn-greengrass-functiondefinitionversion-functionconfiguration-memorysize)" : Integer,
  "[Pinned](#cfn-greengrass-functiondefinitionversion-functionconfiguration-pinned)" : Boolean,
  "[Timeout](#cfn-greengrass-functiondefinitionversion-functionconfiguration-timeout)" : Integer
}
```

### YAML<a name="aws-properties-greengrass-functiondefinitionversion-functionconfiguration-syntax.yaml"></a>

```
  [EncodingType](#cfn-greengrass-functiondefinitionversion-functionconfiguration-encodingtype): String
  [Environment](#cfn-greengrass-functiondefinitionversion-functionconfiguration-environment):
    Environment
  [ExecArgs](#cfn-greengrass-functiondefinitionversion-functionconfiguration-execargs): String
  [Executable](#cfn-greengrass-functiondefinitionversion-functionconfiguration-executable): String
  [MemorySize](#cfn-greengrass-functiondefinitionversion-functionconfiguration-memorysize): Integer
  [Pinned](#cfn-greengrass-functiondefinitionversion-functionconfiguration-pinned): Boolean
  [Timeout](#cfn-greengrass-functiondefinitionversion-functionconfiguration-timeout): Integer
```

## Properties<a name="aws-properties-greengrass-functiondefinitionversion-functionconfiguration-properties"></a>

`EncodingType` <a name="cfn-greengrass-functiondefinitionversion-functionconfiguration-encodingtype"></a>
The expected encoding type of the input payload for the function\. Valid values are `json` \(default\) and `binary`\.  
_Required_: No  
_Type_: String  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`Environment` <a name="cfn-greengrass-functiondefinitionversion-functionconfiguration-environment"></a>
The environment configuration of the function\.  
_Required_: No  
_Type_: [Environment](aws-properties-greengrass-functiondefinitionversion-environment.md)  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`ExecArgs` <a name="cfn-greengrass-functiondefinitionversion-functionconfiguration-execargs"></a>
The execution arguments\.  
_Required_: No  
_Type_: String  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`Executable` <a name="cfn-greengrass-functiondefinitionversion-functionconfiguration-executable"></a>
The name of the function executable\.  
_Required_: No  
_Type_: String  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`MemorySize` <a name="cfn-greengrass-functiondefinitionversion-functionconfiguration-memorysize"></a>
The memory size \(in KB\) required by the function\.  
This property applies only to Lambda functions that run in a Greengrass container\.
_Required_: No  
_Type_: Integer  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`Pinned` <a name="cfn-greengrass-functiondefinitionversion-functionconfiguration-pinned"></a>
Indicates whether the function is pinned \(or _long\-lived_\)\. Pinned functions start when the core starts and process all requests in the same container\. The default value is false\.  
_Required_: No  
_Type_: Boolean  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Timeout` <a name="cfn-greengrass-functiondefinitionversion-functionconfiguration-timeout"></a>
The allowed execution time \(in seconds\) after which the function should terminate\. For pinned functions, this timeout applies for each request\.  
_Required_: No  
_Type_: Integer  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

## See also<a name="aws-properties-greengrass-functiondefinitionversion-functionconfiguration--seealso"></a>

- [FunctionConfiguration](https://docs.aws.amazon.com/greengrass/latest/apireference/definitions-functionconfiguration.html) in the _ AWS IoT Greengrass Version 1 API Reference _
- [AWS IoT Greengrass Version 1 Developer Guide](https://docs.aws.amazon.com/greengrass/latest/developerguide/)
