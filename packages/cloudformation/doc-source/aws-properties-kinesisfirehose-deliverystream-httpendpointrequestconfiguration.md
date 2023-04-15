# AWS::KinesisFirehose::DeliveryStream HttpEndpointRequestConfiguration<a name="aws-properties-kinesisfirehose-deliverystream-httpendpointrequestconfiguration"></a>

The configuration of the HTTP endpoint request\. Kinesis Firehose supports any custom HTTP endpoint or HTTP endpoints owned by supported third\-party service providers, including Datadog, MongoDB, and New Relic\.

## Syntax<a name="aws-properties-kinesisfirehose-deliverystream-httpendpointrequestconfiguration-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-kinesisfirehose-deliverystream-httpendpointrequestconfiguration-syntax.json"></a>

```
{
  "[CommonAttributes](#cfn-kinesisfirehose-deliverystream-httpendpointrequestconfiguration-commonattributes)" : [ HttpEndpointCommonAttribute, ... ],
  "[ContentEncoding](#cfn-kinesisfirehose-deliverystream-httpendpointrequestconfiguration-contentencoding)" : String
}
```

### YAML<a name="aws-properties-kinesisfirehose-deliverystream-httpendpointrequestconfiguration-syntax.yaml"></a>

```
  [CommonAttributes](#cfn-kinesisfirehose-deliverystream-httpendpointrequestconfiguration-commonattributes):
    - HttpEndpointCommonAttribute
  [ContentEncoding](#cfn-kinesisfirehose-deliverystream-httpendpointrequestconfiguration-contentencoding): String
```

## Properties<a name="aws-properties-kinesisfirehose-deliverystream-httpendpointrequestconfiguration-properties"></a>

`CommonAttributes` <a name="cfn-kinesisfirehose-deliverystream-httpendpointrequestconfiguration-commonattributes"></a>
Describes the metadata sent to the HTTP endpoint destination\.  
_Required_: No  
_Type_: List of [HttpEndpointCommonAttribute](aws-properties-kinesisfirehose-deliverystream-httpendpointcommonattribute.md)  
_Maximum_: `50`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`ContentEncoding` <a name="cfn-kinesisfirehose-deliverystream-httpendpointrequestconfiguration-contentencoding"></a>
Kinesis Data Firehose uses the content encoding to compress the body of a request before sending the request to the destination\. For more information, see Content\-Encoding in MDN Web Docs, the official Mozilla documentation\.  
_Required_: No  
_Type_: String  
_Allowed values_: `GZIP | NONE`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
