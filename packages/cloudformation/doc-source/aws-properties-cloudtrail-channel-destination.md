# AWS::CloudTrail::Channel Destination<a name="aws-properties-cloudtrail-channel-destination"></a>

Contains information about the destination receiving events\.

## Syntax<a name="aws-properties-cloudtrail-channel-destination-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-cloudtrail-channel-destination-syntax.json"></a>

```
{
  "[Location](#cfn-cloudtrail-channel-destination-location)" : String,
  "[Type](#cfn-cloudtrail-channel-destination-type)" : String
}
```

### YAML<a name="aws-properties-cloudtrail-channel-destination-syntax.yaml"></a>

```
  [Location](#cfn-cloudtrail-channel-destination-location): String
  [Type](#cfn-cloudtrail-channel-destination-type): String
```

## Properties<a name="aws-properties-cloudtrail-channel-destination-properties"></a>

`Location` <a name="cfn-cloudtrail-channel-destination-location"></a>
For channels used for a CloudTrail Lake integration, the location is the ARN of an event data store that receives events from a channel\. For service\-linked channels, the location is the name of the AWS service\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `3`  
_Maximum_: `1024`  
_Pattern_: `^[a-zA-Z0-9._/\-:]+$`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Type` <a name="cfn-cloudtrail-channel-destination-type"></a>
The type of destination for events arriving from a channel\. For channels used for a CloudTrail Lake integration, the value is `EventDataStore`\. For service\-linked channels, the value is `AWS_SERVICE`\.  
_Required_: Yes  
_Type_: String  
_Allowed values_: `AWS_SERVICE | EVENT_DATA_STORE`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
