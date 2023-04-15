# AWS::AppRunner::Service InstanceConfiguration<a name="aws-properties-apprunner-service-instanceconfiguration"></a>

Describes the runtime configuration of an AWS App Runner service instance \(scaling unit\)\.

## Syntax<a name="aws-properties-apprunner-service-instanceconfiguration-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-apprunner-service-instanceconfiguration-syntax.json"></a>

```
{
  "[Cpu](#cfn-apprunner-service-instanceconfiguration-cpu)" : String,
  "[InstanceRoleArn](#cfn-apprunner-service-instanceconfiguration-instancerolearn)" : String,
  "[Memory](#cfn-apprunner-service-instanceconfiguration-memory)" : String
}
```

### YAML<a name="aws-properties-apprunner-service-instanceconfiguration-syntax.yaml"></a>

```
  [Cpu](#cfn-apprunner-service-instanceconfiguration-cpu): String
  [InstanceRoleArn](#cfn-apprunner-service-instanceconfiguration-instancerolearn): String
  [Memory](#cfn-apprunner-service-instanceconfiguration-memory): String
```

## Properties<a name="aws-properties-apprunner-service-instanceconfiguration-properties"></a>

`Cpu` <a name="cfn-apprunner-service-instanceconfiguration-cpu"></a>
The number of CPU units reserved for each instance of your App Runner service\.  
Default: `1 vCPU`  
_Required_: No  
_Type_: String  
_Minimum_: `4`  
_Maximum_: `6`  
_Pattern_: `1024|2048|(1|2) vCPU`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`InstanceRoleArn` <a name="cfn-apprunner-service-instanceconfiguration-instancerolearn"></a>
The Amazon Resource Name \(ARN\) of an IAM role that provides permissions to your App Runner service\. These are permissions that your code needs when it calls any AWS APIs\.  
_Required_: No  
_Type_: String  
_Minimum_: `29`  
_Maximum_: `1024`  
_Pattern_: `arn:(aws|aws-us-gov|aws-cn|aws-iso|aws-iso-b):iam::[0-9]{12}:(role|role\/service-role)\/[\w+=,.@\-/]{1,1000}`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Memory` <a name="cfn-apprunner-service-instanceconfiguration-memory"></a>
The amount of memory, in MB or GB, reserved for each instance of your App Runner service\.  
Default: `2 GB`  
_Required_: No  
_Type_: String  
_Minimum_: `4`  
_Maximum_: `4`  
_Pattern_: `2048|3072|4096|(2|3|4) GB`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
