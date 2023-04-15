# AWS::CloudFormation::ResourceVersion LoggingConfig<a name="aws-properties-cloudformation-resourceversion-loggingconfig"></a>

Logging configuration information for a resource\.

## Syntax<a name="aws-properties-cloudformation-resourceversion-loggingconfig-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-cloudformation-resourceversion-loggingconfig-syntax.json"></a>

```
{
  "[LogGroupName](#cfn-cloudformation-resourceversion-loggingconfig-loggroupname)" : String,
  "[LogRoleArn](#cfn-cloudformation-resourceversion-loggingconfig-logrolearn)" : String
}
```

### YAML<a name="aws-properties-cloudformation-resourceversion-loggingconfig-syntax.yaml"></a>

```
  [LogGroupName](#cfn-cloudformation-resourceversion-loggingconfig-loggroupname): String
  [LogRoleArn](#cfn-cloudformation-resourceversion-loggingconfig-logrolearn): String
```

## Properties<a name="aws-properties-cloudformation-resourceversion-loggingconfig-properties"></a>

`LogGroupName` <a name="cfn-cloudformation-resourceversion-loggingconfig-loggroupname"></a>
The Amazon CloudWatch logs group to which CloudFormation sends error logging information when invoking the type's handlers\.  
_Required_: No  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `512`  
_Pattern_: `[\.\-_/#A-Za-z0-9]+`  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`LogRoleArn` <a name="cfn-cloudformation-resourceversion-loggingconfig-logrolearn"></a>
The ARN of the role that CloudFormation should assume when sending log entries to CloudWatch logs\.  
_Required_: No  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `256`  
_Pattern_: `arn:.+:iam::[0-9]{12}:role/.+`  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
