# AWS::Pipes::Pipe PipeTargetStateMachineParameters<a name="aws-properties-pipes-pipe-pipetargetstatemachineparameters"></a>

The parameters for using a Step Functions state machine as a target\.

## Syntax<a name="aws-properties-pipes-pipe-pipetargetstatemachineparameters-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-pipes-pipe-pipetargetstatemachineparameters-syntax.json"></a>

```
{
  "[InvocationType](#cfn-pipes-pipe-pipetargetstatemachineparameters-invocationtype)" : String
}
```

### YAML<a name="aws-properties-pipes-pipe-pipetargetstatemachineparameters-syntax.yaml"></a>

```
  [InvocationType](#cfn-pipes-pipe-pipetargetstatemachineparameters-invocationtype): String
```

## Properties<a name="aws-properties-pipes-pipe-pipetargetstatemachineparameters-properties"></a>

`InvocationType` <a name="cfn-pipes-pipe-pipetargetstatemachineparameters-invocationtype"></a>
Specify whether to invoke the Step Functions state machine synchronously or asynchronously\.

- `REQUEST_RESPONSE` \(default\) \- Invoke synchronously\. For more information, see [StartSyncExecution](https://docs.aws.amazon.com/step-functions/latest/apireference/API_StartSyncExecution.html) in the _AWS Step Functions API Reference_\.
  **Note**  
  `REQUEST_RESPONSE` is not supported for `STANDARD` state machine workflows\.
- `FIRE_AND_FORGET` \- Invoke asynchronously\. For more information, see [StartExecution](https://docs.aws.amazon.com/step-functions/latest/apireference/API_StartExecution.html) in the _AWS Step Functions API Reference_\.
  For more information, see [Invocation types](https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-pipes.html#pipes-invocation) in the _Amazon EventBridge User Guide_\.  
  _Required_: No  
  _Type_: String  
  _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
