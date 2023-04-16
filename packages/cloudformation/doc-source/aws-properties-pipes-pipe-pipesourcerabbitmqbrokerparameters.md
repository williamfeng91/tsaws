# AWS::Pipes::Pipe PipeSourceRabbitMQBrokerParameters<a name="aws-properties-pipes-pipe-pipesourcerabbitmqbrokerparameters"></a>

The parameters for using a Rabbit MQ broker as a source\.

## Syntax<a name="aws-properties-pipes-pipe-pipesourcerabbitmqbrokerparameters-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-pipes-pipe-pipesourcerabbitmqbrokerparameters-syntax.json"></a>

```
{
  "[BatchSize](#cfn-pipes-pipe-pipesourcerabbitmqbrokerparameters-batchsize)" : Integer,
  "[Credentials](#cfn-pipes-pipe-pipesourcerabbitmqbrokerparameters-credentials)" : MQBrokerAccessCredentials,
  "[MaximumBatchingWindowInSeconds](#cfn-pipes-pipe-pipesourcerabbitmqbrokerparameters-maximumbatchingwindowinseconds)" : Integer,
  "[QueueName](#cfn-pipes-pipe-pipesourcerabbitmqbrokerparameters-queuename)" : String,
  "[VirtualHost](#cfn-pipes-pipe-pipesourcerabbitmqbrokerparameters-virtualhost)" : String
}
```

### YAML<a name="aws-properties-pipes-pipe-pipesourcerabbitmqbrokerparameters-syntax.yaml"></a>

```
  [BatchSize](#cfn-pipes-pipe-pipesourcerabbitmqbrokerparameters-batchsize): Integer
  [Credentials](#cfn-pipes-pipe-pipesourcerabbitmqbrokerparameters-credentials):
    MQBrokerAccessCredentials
  [MaximumBatchingWindowInSeconds](#cfn-pipes-pipe-pipesourcerabbitmqbrokerparameters-maximumbatchingwindowinseconds): Integer
  [QueueName](#cfn-pipes-pipe-pipesourcerabbitmqbrokerparameters-queuename): String
  [VirtualHost](#cfn-pipes-pipe-pipesourcerabbitmqbrokerparameters-virtualhost): String
```

## Properties<a name="aws-properties-pipes-pipe-pipesourcerabbitmqbrokerparameters-properties"></a>

`BatchSize` <a name="cfn-pipes-pipe-pipesourcerabbitmqbrokerparameters-batchsize"></a>
The maximum number of records to include in each batch\.  
_Required_: No  
_Type_: Integer  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Credentials` <a name="cfn-pipes-pipe-pipesourcerabbitmqbrokerparameters-credentials"></a>
The credentials needed to access the resource\.  
_Required_: Yes  
_Type_: [MQBrokerAccessCredentials](aws-properties-pipes-pipe-mqbrokeraccesscredentials.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`MaximumBatchingWindowInSeconds` <a name="cfn-pipes-pipe-pipesourcerabbitmqbrokerparameters-maximumbatchingwindowinseconds"></a>
The maximum length of a time to wait for events\.  
_Required_: No  
_Type_: Integer  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`QueueName` <a name="cfn-pipes-pipe-pipesourcerabbitmqbrokerparameters-queuename"></a>
The name of the destination queue to consume\.  
_Required_: Yes  
_Type_: String  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`VirtualHost` <a name="cfn-pipes-pipe-pipesourcerabbitmqbrokerparameters-virtualhost"></a>
The name of the virtual host associated with the source broker\.  
_Required_: No  
_Type_: String  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
