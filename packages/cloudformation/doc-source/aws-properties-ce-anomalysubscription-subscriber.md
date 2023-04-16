# AWS::CE::AnomalySubscription Subscriber<a name="aws-properties-ce-anomalysubscription-subscriber"></a>

The recipient of `AnomalySubscription` notifications\.

## Syntax<a name="aws-properties-ce-anomalysubscription-subscriber-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-ce-anomalysubscription-subscriber-syntax.json"></a>

```
{
  "[Address](#cfn-ce-anomalysubscription-subscriber-address)" : String,
  "[Status](#cfn-ce-anomalysubscription-subscriber-status)" : String,
  "[Type](#cfn-ce-anomalysubscription-subscriber-type)" : String
}
```

### YAML<a name="aws-properties-ce-anomalysubscription-subscriber-syntax.yaml"></a>

```
  [Address](#cfn-ce-anomalysubscription-subscriber-address): String
  [Status](#cfn-ce-anomalysubscription-subscriber-status): String
  [Type](#cfn-ce-anomalysubscription-subscriber-type): String
```

## Properties<a name="aws-properties-ce-anomalysubscription-subscriber-properties"></a>

`Address` <a name="cfn-ce-anomalysubscription-subscriber-address"></a>
The email address or SNS Topic Amazon Resource Name \(ARN\), depending on the `Type`\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `6`  
_Maximum_: `302`  
_Pattern_: `(^[a-zA-Z0-9.!#$%&'*+=?^_‘{|}~-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$)|(^arn:(aws[a-zA-Z-]*):sns:[a-zA-Z0-9-]+:[0-9]{12}:[a-zA-Z0-9_-]+(\.fifo)?$)`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Status` <a name="cfn-ce-anomalysubscription-subscriber-status"></a>
Indicates if the subscriber accepts the notifications\.  
_Required_: No  
_Type_: String  
_Allowed values_: `CONFIRMED | DECLINED`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Type` <a name="cfn-ce-anomalysubscription-subscriber-type"></a>
The notification delivery channel\.  
_Required_: Yes  
_Type_: String  
_Allowed values_: `EMAIL | SNS`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
