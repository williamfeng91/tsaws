# AWS::Evidently::Launch ExecutionStatusObject<a name="aws-properties-evidently-launch-executionstatusobject"></a>

Use this structure to start and stop the launch\.

## Syntax<a name="aws-properties-evidently-launch-executionstatusobject-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-evidently-launch-executionstatusobject-syntax.json"></a>

```
{
  "[DesiredState](#cfn-evidently-launch-executionstatusobject-desiredstate)" : String,
  "[Reason](#cfn-evidently-launch-executionstatusobject-reason)" : String,
  "[Status](#cfn-evidently-launch-executionstatusobject-status)" : String
}
```

### YAML<a name="aws-properties-evidently-launch-executionstatusobject-syntax.yaml"></a>

```
  [DesiredState](#cfn-evidently-launch-executionstatusobject-desiredstate): String
  [Reason](#cfn-evidently-launch-executionstatusobject-reason): String
  [Status](#cfn-evidently-launch-executionstatusobject-status): String
```

## Properties<a name="aws-properties-evidently-launch-executionstatusobject-properties"></a>

`DesiredState` <a name="cfn-evidently-launch-executionstatusobject-desiredstate"></a>
If you are using AWS CloudFormation to stop this launch, specify either `COMPLETED` or `CANCELLED` here to indicate how to classify this experiment\. If you omit this parameter, the default of `COMPLETED` is used\.  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Reason` <a name="cfn-evidently-launch-executionstatusobject-reason"></a>
If you are using AWS CloudFormation to stop this launch, this is an optional field that you can use to record why the launch is being stopped or cancelled\.  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Status` <a name="cfn-evidently-launch-executionstatusobject-status"></a>
To start the launch now, specify `START` for this parameter\. If this launch is currently running and you want to stop it now, specify `STOP`\.  
_Required_: Yes  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
