# AWS::Pipes::Pipe PipeSourceActiveMQBrokerParameters<a name="aws-properties-pipes-pipe-pipesourceactivemqbrokerparameters"></a>

The parameters for using an Active MQ broker as a source\.

## Syntax<a name="aws-properties-pipes-pipe-pipesourceactivemqbrokerparameters-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-pipes-pipe-pipesourceactivemqbrokerparameters-syntax.json"></a>

```
{
  "[BatchSize](#cfn-pipes-pipe-pipesourceactivemqbrokerparameters-batchsize)" : Integer,
  "[Credentials](#cfn-pipes-pipe-pipesourceactivemqbrokerparameters-credentials)" : MQBrokerAccessCredentials,
  "[MaximumBatchingWindowInSeconds](#cfn-pipes-pipe-pipesourceactivemqbrokerparameters-maximumbatchingwindowinseconds)" : Integer,
  "[QueueName](#cfn-pipes-pipe-pipesourceactivemqbrokerparameters-queuename)" : String
}
```

### YAML<a name="aws-properties-pipes-pipe-pipesourceactivemqbrokerparameters-syntax.yaml"></a>

```
  [BatchSize](#cfn-pipes-pipe-pipesourceactivemqbrokerparameters-batchsize): Integer
  [Credentials](#cfn-pipes-pipe-pipesourceactivemqbrokerparameters-credentials):
    MQBrokerAccessCredentials
  [MaximumBatchingWindowInSeconds](#cfn-pipes-pipe-pipesourceactivemqbrokerparameters-maximumbatchingwindowinseconds): Integer
  [QueueName](#cfn-pipes-pipe-pipesourceactivemqbrokerparameters-queuename): String
```

## Properties<a name="aws-properties-pipes-pipe-pipesourceactivemqbrokerparameters-properties"></a>

`BatchSize` <a name="cfn-pipes-pipe-pipesourceactivemqbrokerparameters-batchsize"></a>
The maximum number of records to include in each batch\.  
_Required_: No  
_Type_: Integer  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Credentials` <a name="cfn-pipes-pipe-pipesourceactivemqbrokerparameters-credentials"></a>
The credentials needed to access the resource\.  
_Required_: Yes  
_Type_: [MQBrokerAccessCredentials](aws-properties-pipes-pipe-mqbrokeraccesscredentials.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`MaximumBatchingWindowInSeconds` <a name="cfn-pipes-pipe-pipesourceactivemqbrokerparameters-maximumbatchingwindowinseconds"></a>
The maximum length of a time to wait for events\.  
_Required_: No  
_Type_: Integer  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`QueueName` <a name="cfn-pipes-pipe-pipesourceactivemqbrokerparameters-queuename"></a>
The name of the destination queue to consume\.  
_Required_: Yes  
_Type_: String  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
