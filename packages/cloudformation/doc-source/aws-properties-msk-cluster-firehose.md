# AWS::MSK::Cluster Firehose<a name="aws-properties-msk-cluster-firehose"></a>

Details of the Kinesis Data Firehose delivery stream that is the destination for broker logs\.

## Syntax<a name="aws-properties-msk-cluster-firehose-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-msk-cluster-firehose-syntax.json"></a>

```
{
  "[DeliveryStream](#cfn-msk-cluster-firehose-deliverystream)" : String,
  "[Enabled](#cfn-msk-cluster-firehose-enabled)" : Boolean
}
```

### YAML<a name="aws-properties-msk-cluster-firehose-syntax.yaml"></a>

```
  [DeliveryStream](#cfn-msk-cluster-firehose-deliverystream): String
  [Enabled](#cfn-msk-cluster-firehose-enabled): Boolean
```

## Properties<a name="aws-properties-msk-cluster-firehose-properties"></a>

`DeliveryStream` <a name="cfn-msk-cluster-firehose-deliverystream"></a>
The Kinesis Data Firehose delivery stream that is the destination for broker logs\.  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Enabled` <a name="cfn-msk-cluster-firehose-enabled"></a>
Specifies whether broker logs get sent to the specified Kinesis Data Firehose delivery stream\.  
_Required_: Yes  
_Type_: Boolean  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
