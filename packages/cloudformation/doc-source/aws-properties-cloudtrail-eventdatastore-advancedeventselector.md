# AWS::CloudTrail::EventDataStore AdvancedEventSelector<a name="aws-properties-cloudtrail-eventdatastore-advancedeventselector"></a>

Advanced event selectors let you create fine\-grained selectors for the following AWS CloudTrail event record ﬁelds\. They help you control costs by logging only those events that are important to you\. For more information about advanced event selectors, see [Logging data events](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/logging-data-events-with-cloudtrail.html) in the _ AWS CloudTrail User Guide_\.

- `readOnly`
- `eventSource`
- `eventName`
- `eventCategory`
- `resources.type`
- `resources.ARN`

You cannot apply both event selectors and advanced event selectors to a trail\.

## Syntax<a name="aws-properties-cloudtrail-eventdatastore-advancedeventselector-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-cloudtrail-eventdatastore-advancedeventselector-syntax.json"></a>

```
{
  "[FieldSelectors](#cfn-cloudtrail-eventdatastore-advancedeventselector-fieldselectors)" : [ AdvancedFieldSelector, ... ],
  "[Name](#cfn-cloudtrail-eventdatastore-advancedeventselector-name)" : String
}
```

### YAML<a name="aws-properties-cloudtrail-eventdatastore-advancedeventselector-syntax.yaml"></a>

```
  [FieldSelectors](#cfn-cloudtrail-eventdatastore-advancedeventselector-fieldselectors):
    - AdvancedFieldSelector
  [Name](#cfn-cloudtrail-eventdatastore-advancedeventselector-name): String
```

## Properties<a name="aws-properties-cloudtrail-eventdatastore-advancedeventselector-properties"></a>

`FieldSelectors` <a name="cfn-cloudtrail-eventdatastore-advancedeventselector-fieldselectors"></a>
Contains all selector statements in an advanced event selector\.  
_Required_: Yes  
_Type_: List of [AdvancedFieldSelector](aws-properties-cloudtrail-eventdatastore-advancedfieldselector.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Name` <a name="cfn-cloudtrail-eventdatastore-advancedeventselector-name"></a>
An optional, descriptive name for an advanced event selector, such as "Log data events for only two S3 buckets"\.  
_Required_: No  
_Type_: String  
_Minimum_: `0`  
_Maximum_: `1000`  
_Pattern_: `.*`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
