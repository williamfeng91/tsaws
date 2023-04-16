# AWS::Timestream::ScheduledQuery TargetConfiguration<a name="aws-properties-timestream-scheduledquery-targetconfiguration"></a>

Configuration used for writing the output of a query\.

## Syntax<a name="aws-properties-timestream-scheduledquery-targetconfiguration-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-timestream-scheduledquery-targetconfiguration-syntax.json"></a>

```
{
  "[TimestreamConfiguration](#cfn-timestream-scheduledquery-targetconfiguration-timestreamconfiguration)" : TimestreamConfiguration
}
```

### YAML<a name="aws-properties-timestream-scheduledquery-targetconfiguration-syntax.yaml"></a>

```
  [TimestreamConfiguration](#cfn-timestream-scheduledquery-targetconfiguration-timestreamconfiguration):
    TimestreamConfiguration
```

## Properties<a name="aws-properties-timestream-scheduledquery-targetconfiguration-properties"></a>

`TimestreamConfiguration` <a name="cfn-timestream-scheduledquery-targetconfiguration-timestreamconfiguration"></a>
Configuration needed to write data into the Timestream database and table\.  
_Required_: Yes  
_Type_: [TimestreamConfiguration](aws-properties-timestream-scheduledquery-timestreamconfiguration.md)  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
