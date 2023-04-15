# AWS::CloudFormation::TypeActivation LoggingConfig<a name="aws-properties-cloudformation-typeactivation-loggingconfig"></a>

Contains logging configuration information for an extension\.

## Syntax<a name="aws-properties-cloudformation-typeactivation-loggingconfig-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-cloudformation-typeactivation-loggingconfig-syntax.json"></a>

```
{
  "[LogGroupName](#cfn-cloudformation-typeactivation-loggingconfig-loggroupname)" : String,
  "[LogRoleArn](#cfn-cloudformation-typeactivation-loggingconfig-logrolearn)" : String
}
```

### YAML<a name="aws-properties-cloudformation-typeactivation-loggingconfig-syntax.yaml"></a>

```
  [LogGroupName](#cfn-cloudformation-typeactivation-loggingconfig-loggroupname): String
  [LogRoleArn](#cfn-cloudformation-typeactivation-loggingconfig-logrolearn): String
```

## Properties<a name="aws-properties-cloudformation-typeactivation-loggingconfig-properties"></a>

`LogGroupName` <a name="cfn-cloudformation-typeactivation-loggingconfig-loggroupname"></a>
The Amazon CloudWatch Logs group to which CloudFormation sends error logging information when invoking the extension's handlers\.  
_Required_: No  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `512`  
_Pattern_: `[\.\-_/#A-Za-z0-9]+`  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`LogRoleArn` <a name="cfn-cloudformation-typeactivation-loggingconfig-logrolearn"></a>
The Amazon Resource Name \(ARN\) of the role that CloudFormation should assume when sending log entries to CloudWatch Logs\.  
_Required_: No  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `256`  
_Pattern_: `arn:.+:iam::[0-9]{12}:role/.+`  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
