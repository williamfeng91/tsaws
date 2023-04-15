# AWS::ElasticBeanstalk::Environment Tier<a name="aws-properties-elasticbeanstalk-environment-tier"></a>

Describes the environment tier for an [AWS::ElasticBeanstalk::Environment](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-beanstalk-environment.html) resource\. For more information, see [Environment Tiers](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/using-features-managing-env-tiers.html) in the _AWS Elastic Beanstalk Developer Guide_\.

## Syntax<a name="aws-properties-elasticbeanstalk-environment-tier-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-elasticbeanstalk-environment-tier-syntax.json"></a>

```
{
  "[Name](#cfn-elasticbeanstalk-environment-tier-name)" : String,
  "[Type](#cfn-elasticbeanstalk-environment-tier-type)" : String,
  "[Version](#cfn-elasticbeanstalk-environment-tier-version)" : String
}
```

### YAML<a name="aws-properties-elasticbeanstalk-environment-tier-syntax.yaml"></a>

```
  [Name](#cfn-elasticbeanstalk-environment-tier-name): String
  [Type](#cfn-elasticbeanstalk-environment-tier-type): String
  [Version](#cfn-elasticbeanstalk-environment-tier-version): String
```

## Properties<a name="aws-properties-elasticbeanstalk-environment-tier-properties"></a>

`Name` <a name="cfn-elasticbeanstalk-environment-tier-name"></a>
The name of this environment tier\.  
Valid values:

- For _Web server tier_ – `WebServer`
- For _Worker tier_ – `Worker`
  _Required_: No  
  _Type_: String  
  _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`Type` <a name="cfn-elasticbeanstalk-environment-tier-type"></a>
The type of this environment tier\.  
Valid values:

- For _Web server tier_ – `Standard`
- For _Worker tier_ – `SQS/HTTP`
  _Required_: No  
  _Type_: String  
  _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`Version` <a name="cfn-elasticbeanstalk-environment-tier-version"></a>
The version of this environment tier\. When you don't set a value to it, Elastic Beanstalk uses the latest compatible worker tier version\.  
This member is deprecated\. Any specific version that you set may become out of date\. We recommend leaving it unspecified\.
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
