# AWS::KafkaConnect::Connector ApacheKafkaCluster<a name="aws-properties-kafkaconnect-connector-apachekafkacluster"></a>

The details of the Apache Kafka cluster to which the connector is connected\.

## Syntax<a name="aws-properties-kafkaconnect-connector-apachekafkacluster-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-kafkaconnect-connector-apachekafkacluster-syntax.json"></a>

```
{
  "[BootstrapServers](#cfn-kafkaconnect-connector-apachekafkacluster-bootstrapservers)" : String,
  "[Vpc](#cfn-kafkaconnect-connector-apachekafkacluster-vpc)" : Vpc
}
```

### YAML<a name="aws-properties-kafkaconnect-connector-apachekafkacluster-syntax.yaml"></a>

```
  [BootstrapServers](#cfn-kafkaconnect-connector-apachekafkacluster-bootstrapservers): String
  [Vpc](#cfn-kafkaconnect-connector-apachekafkacluster-vpc):
    Vpc
```

## Properties<a name="aws-properties-kafkaconnect-connector-apachekafkacluster-properties"></a>

`BootstrapServers` <a name="cfn-kafkaconnect-connector-apachekafkacluster-bootstrapservers"></a>
The bootstrap servers of the cluster\.  
_Required_: Yes  
_Type_: String  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`Vpc` <a name="cfn-kafkaconnect-connector-apachekafkacluster-vpc"></a>
Details of an Amazon VPC which has network connectivity to the Apache Kafka cluster\.  
_Required_: Yes  
_Type_: [Vpc](aws-properties-kafkaconnect-connector-vpc.md)  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
