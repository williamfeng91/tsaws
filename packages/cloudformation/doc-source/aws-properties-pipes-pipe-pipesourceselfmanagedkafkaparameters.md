# AWS::Pipes::Pipe PipeSourceSelfManagedKafkaParameters<a name="aws-properties-pipes-pipe-pipesourceselfmanagedkafkaparameters"></a>

The parameters for using a self\-managed Apache Kafka stream as a source\.

## Syntax<a name="aws-properties-pipes-pipe-pipesourceselfmanagedkafkaparameters-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-pipes-pipe-pipesourceselfmanagedkafkaparameters-syntax.json"></a>

```
{
  "[AdditionalBootstrapServers](#cfn-pipes-pipe-pipesourceselfmanagedkafkaparameters-additionalbootstrapservers)" : [ String, ... ],
  "[BatchSize](#cfn-pipes-pipe-pipesourceselfmanagedkafkaparameters-batchsize)" : Integer,
  "[ConsumerGroupID](#cfn-pipes-pipe-pipesourceselfmanagedkafkaparameters-consumergroupid)" : String,
  "[Credentials](#cfn-pipes-pipe-pipesourceselfmanagedkafkaparameters-credentials)" : SelfManagedKafkaAccessConfigurationCredentials,
  "[MaximumBatchingWindowInSeconds](#cfn-pipes-pipe-pipesourceselfmanagedkafkaparameters-maximumbatchingwindowinseconds)" : Integer,
  "[ServerRootCaCertificate](#cfn-pipes-pipe-pipesourceselfmanagedkafkaparameters-serverrootcacertificate)" : String,
  "[StartingPosition](#cfn-pipes-pipe-pipesourceselfmanagedkafkaparameters-startingposition)" : String,
  "[TopicName](#cfn-pipes-pipe-pipesourceselfmanagedkafkaparameters-topicname)" : String,
  "[Vpc](#cfn-pipes-pipe-pipesourceselfmanagedkafkaparameters-vpc)" : SelfManagedKafkaAccessConfigurationVpc
}
```

### YAML<a name="aws-properties-pipes-pipe-pipesourceselfmanagedkafkaparameters-syntax.yaml"></a>

```
  [AdditionalBootstrapServers](#cfn-pipes-pipe-pipesourceselfmanagedkafkaparameters-additionalbootstrapservers):
    - String
  [BatchSize](#cfn-pipes-pipe-pipesourceselfmanagedkafkaparameters-batchsize): Integer
  [ConsumerGroupID](#cfn-pipes-pipe-pipesourceselfmanagedkafkaparameters-consumergroupid): String
  [Credentials](#cfn-pipes-pipe-pipesourceselfmanagedkafkaparameters-credentials):
    SelfManagedKafkaAccessConfigurationCredentials
  [MaximumBatchingWindowInSeconds](#cfn-pipes-pipe-pipesourceselfmanagedkafkaparameters-maximumbatchingwindowinseconds): Integer
  [ServerRootCaCertificate](#cfn-pipes-pipe-pipesourceselfmanagedkafkaparameters-serverrootcacertificate): String
  [StartingPosition](#cfn-pipes-pipe-pipesourceselfmanagedkafkaparameters-startingposition): String
  [TopicName](#cfn-pipes-pipe-pipesourceselfmanagedkafkaparameters-topicname): String
  [Vpc](#cfn-pipes-pipe-pipesourceselfmanagedkafkaparameters-vpc):
    SelfManagedKafkaAccessConfigurationVpc
```

## Properties<a name="aws-properties-pipes-pipe-pipesourceselfmanagedkafkaparameters-properties"></a>

`AdditionalBootstrapServers` <a name="cfn-pipes-pipe-pipesourceselfmanagedkafkaparameters-additionalbootstrapservers"></a>
An array of server URLs\.  
_Required_: No  
_Type_: List of String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`BatchSize` <a name="cfn-pipes-pipe-pipesourceselfmanagedkafkaparameters-batchsize"></a>
The maximum number of records to include in each batch\.  
_Required_: No  
_Type_: Integer  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`ConsumerGroupID` <a name="cfn-pipes-pipe-pipesourceselfmanagedkafkaparameters-consumergroupid"></a>
The name of the destination queue to consume\.  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Credentials` <a name="cfn-pipes-pipe-pipesourceselfmanagedkafkaparameters-credentials"></a>
The credentials needed to access the resource\.  
_Required_: No  
_Type_: [SelfManagedKafkaAccessConfigurationCredentials](aws-properties-pipes-pipe-selfmanagedkafkaaccessconfigurationcredentials.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`MaximumBatchingWindowInSeconds` <a name="cfn-pipes-pipe-pipesourceselfmanagedkafkaparameters-maximumbatchingwindowinseconds"></a>
The maximum length of a time to wait for events\.  
_Required_: No  
_Type_: Integer  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`ServerRootCaCertificate` <a name="cfn-pipes-pipe-pipesourceselfmanagedkafkaparameters-serverrootcacertificate"></a>
The ARN of the Secrets Manager secret used for certification\.  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`StartingPosition` <a name="cfn-pipes-pipe-pipesourceselfmanagedkafkaparameters-startingposition"></a>
\(Streams only\) The position in a stream from which to start reading\.  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`TopicName` <a name="cfn-pipes-pipe-pipesourceselfmanagedkafkaparameters-topicname"></a>
The name of the topic that the pipe will read from\.  
_Required_: Yes  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Vpc` <a name="cfn-pipes-pipe-pipesourceselfmanagedkafkaparameters-vpc"></a>
This structure specifies the VPC subnets and security groups for the stream, and whether a public IP address is to be used\.  
_Required_: No  
_Type_: [SelfManagedKafkaAccessConfigurationVpc](aws-properties-pipes-pipe-selfmanagedkafkaaccessconfigurationvpc.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
