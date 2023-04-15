# AWS::SSMIncidents::ResponsePlan IncidentTemplate<a name="aws-properties-ssmincidents-responseplan-incidenttemplate"></a>

The `IncidentTemplate` property type specifies details used to create an incident when using this response plan\.

## Syntax<a name="aws-properties-ssmincidents-responseplan-incidenttemplate-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-ssmincidents-responseplan-incidenttemplate-syntax.json"></a>

```
{
  "[DedupeString](#cfn-ssmincidents-responseplan-incidenttemplate-dedupestring)" : String,
  "[Impact](#cfn-ssmincidents-responseplan-incidenttemplate-impact)" : Integer,
  "[IncidentTags](#cfn-ssmincidents-responseplan-incidenttemplate-incidenttags)" : [ [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html), ... ],
  "[NotificationTargets](#cfn-ssmincidents-responseplan-incidenttemplate-notificationtargets)" : [ NotificationTargetItem, ... ],
  "[Summary](#cfn-ssmincidents-responseplan-incidenttemplate-summary)" : String,
  "[Title](#cfn-ssmincidents-responseplan-incidenttemplate-title)" : String
}
```

### YAML<a name="aws-properties-ssmincidents-responseplan-incidenttemplate-syntax.yaml"></a>

```
  [DedupeString](#cfn-ssmincidents-responseplan-incidenttemplate-dedupestring):
    String
  [Impact](#cfn-ssmincidents-responseplan-incidenttemplate-impact): Integer
  [IncidentTags](#cfn-ssmincidents-responseplan-incidenttemplate-incidenttags):
    - [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)
  [NotificationTargets](#cfn-ssmincidents-responseplan-incidenttemplate-notificationtargets):
    - NotificationTargetItem
  [Summary](#cfn-ssmincidents-responseplan-incidenttemplate-summary): String
  [Title](#cfn-ssmincidents-responseplan-incidenttemplate-title): String
```

## Properties<a name="aws-properties-ssmincidents-responseplan-incidenttemplate-properties"></a>

`DedupeString` <a name="cfn-ssmincidents-responseplan-incidenttemplate-dedupestring"></a>
Used to create only one incident record for an incident\.  
_Required_: No  
_Type_: String  
_Minimum_: `0`  
_Maximum_: `1000`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Impact` <a name="cfn-ssmincidents-responseplan-incidenttemplate-impact"></a>
Defines the impact to the customers\. Providing an impact overwrites the impact provided by a response plan\.

**Possible impacts:**

- `1` \- Critical impact, this typically relates to full application failure that impacts many to all customers\.
- `2` \- High impact, partial application failure with impact to many customers\.
- `3` \- Medium impact, the application is providing reduced service to customers\.
- `4` \- Low impact, customer might aren't impacted by the problem yet\.
- `5` \- No impact, customers aren't currently impacted but urgent action is needed to avoid impact\.
  _Required_: Yes  
  _Type_: Integer  
  _Minimum_: `1`  
  _Maximum_: `5`  
  _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`IncidentTags` <a name="cfn-ssmincidents-responseplan-incidenttemplate-incidenttags"></a>
Tags to assign to the template\. When the `StartIncident` API action is called, Incident Manager assigns the tags specified in the template to the incident\.  
_Required_: No  
_Type_: List of [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`NotificationTargets` <a name="cfn-ssmincidents-responseplan-incidenttemplate-notificationtargets"></a>
The SNS targets that AWS Chatbot uses to notify the chat channel of updates to an incident\. You can also make updates to the incident through the chat channel using the SNS topics\.  
_Required_: No  
_Type_: List of [NotificationTargetItem](aws-properties-ssmincidents-responseplan-notificationtargetitem.md)  
_Maximum_: `10`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Summary` <a name="cfn-ssmincidents-responseplan-incidenttemplate-summary"></a>
The summary describes what has happened during the incident\.  
_Required_: No  
_Type_: String  
_Minimum_: `0`  
_Maximum_: `8000`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Title` <a name="cfn-ssmincidents-responseplan-incidenttemplate-title"></a>
The title of the incident is a brief and easily recognizable\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `0`  
_Maximum_: `200`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)