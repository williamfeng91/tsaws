# AWS::Pinpoint::Campaign<a name="aws-resource-pinpoint-campaign"></a>

Specifies the settings for a campaign\. A _campaign_ is a messaging initiative that engages a specific segment of users for an Amazon Pinpoint application\.

## Syntax<a name="aws-resource-pinpoint-campaign-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-resource-pinpoint-campaign-syntax.json"></a>

```
{
  "Type" : "AWS::Pinpoint::Campaign",
  "Properties" : {
      "[AdditionalTreatments](#cfn-pinpoint-campaign-additionaltreatments)" : [ WriteTreatmentResource, ... ],
      "[ApplicationId](#cfn-pinpoint-campaign-applicationid)" : String,
      "[CampaignHook](#cfn-pinpoint-campaign-campaignhook)" : CampaignHook,
      "[CustomDeliveryConfiguration](#cfn-pinpoint-campaign-customdeliveryconfiguration)" : CustomDeliveryConfiguration,
      "[Description](#cfn-pinpoint-campaign-description)" : String,
      "[HoldoutPercent](#cfn-pinpoint-campaign-holdoutpercent)" : Integer,
      "[IsPaused](#cfn-pinpoint-campaign-ispaused)" : Boolean,
      "[Limits](#cfn-pinpoint-campaign-limits)" : Limits,
      "[MessageConfiguration](#cfn-pinpoint-campaign-messageconfiguration)" : MessageConfiguration,
      "[Name](#cfn-pinpoint-campaign-name)" : String,
      "[Priority](#cfn-pinpoint-campaign-priority)" : Integer,
      "[Schedule](#cfn-pinpoint-campaign-schedule)" : Schedule,
      "[SegmentId](#cfn-pinpoint-campaign-segmentid)" : String,
      "[SegmentVersion](#cfn-pinpoint-campaign-segmentversion)" : Integer,
      "[Tags](#cfn-pinpoint-campaign-tags)" : Json,
      "[TemplateConfiguration](#cfn-pinpoint-campaign-templateconfiguration)" : TemplateConfiguration,
      "[TreatmentDescription](#cfn-pinpoint-campaign-treatmentdescription)" : String,
      "[TreatmentName](#cfn-pinpoint-campaign-treatmentname)" : String
    }
}
```

### YAML<a name="aws-resource-pinpoint-campaign-syntax.yaml"></a>

```
Type: AWS::Pinpoint::Campaign
Properties:
  [AdditionalTreatments](#cfn-pinpoint-campaign-additionaltreatments):
    - WriteTreatmentResource
  [ApplicationId](#cfn-pinpoint-campaign-applicationid): String
  [CampaignHook](#cfn-pinpoint-campaign-campaignhook):
    CampaignHook
  [CustomDeliveryConfiguration](#cfn-pinpoint-campaign-customdeliveryconfiguration):
    CustomDeliveryConfiguration
  [Description](#cfn-pinpoint-campaign-description): String
  [HoldoutPercent](#cfn-pinpoint-campaign-holdoutpercent): Integer
  [IsPaused](#cfn-pinpoint-campaign-ispaused): Boolean
  [Limits](#cfn-pinpoint-campaign-limits):
    Limits
  [MessageConfiguration](#cfn-pinpoint-campaign-messageconfiguration):
    MessageConfiguration
  [Name](#cfn-pinpoint-campaign-name): String
  [Priority](#cfn-pinpoint-campaign-priority): Integer
  [Schedule](#cfn-pinpoint-campaign-schedule):
    Schedule
  [SegmentId](#cfn-pinpoint-campaign-segmentid): String
  [SegmentVersion](#cfn-pinpoint-campaign-segmentversion): Integer
  [Tags](#cfn-pinpoint-campaign-tags): Json
  [TemplateConfiguration](#cfn-pinpoint-campaign-templateconfiguration):
    TemplateConfiguration
  [TreatmentDescription](#cfn-pinpoint-campaign-treatmentdescription): String
  [TreatmentName](#cfn-pinpoint-campaign-treatmentname): String
```

## Properties<a name="aws-resource-pinpoint-campaign-properties"></a>

`AdditionalTreatments` <a name="cfn-pinpoint-campaign-additionaltreatments"></a>
An array of requests that defines additional treatments for the campaign, in addition to the default treatment for the campaign\.  
_Required_: No  
_Type_: List of [WriteTreatmentResource](aws-properties-pinpoint-campaign-writetreatmentresource.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`ApplicationId` <a name="cfn-pinpoint-campaign-applicationid"></a>
The unique identifier for the Amazon Pinpoint application that the campaign is associated with\.  
_Required_: Yes  
_Type_: String  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`CampaignHook` <a name="cfn-pinpoint-campaign-campaignhook"></a>
Specifies the Lambda function to use as a code hook for a campaign\.  
_Required_: No  
_Type_: [CampaignHook](aws-properties-pinpoint-campaign-campaignhook.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`CustomDeliveryConfiguration` <a name="cfn-pinpoint-campaign-customdeliveryconfiguration"></a>
The delivery configuration settings for sending the treatment through a custom channel\. This object is required if the `MessageConfiguration` object for the treatment specifies a `CustomMessage` object\.  
_Required_: No  
_Type_: [CustomDeliveryConfiguration](aws-properties-pinpoint-campaign-customdeliveryconfiguration.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Description` <a name="cfn-pinpoint-campaign-description"></a>
A custom description of the campaign\.  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`HoldoutPercent` <a name="cfn-pinpoint-campaign-holdoutpercent"></a>
The allocated percentage of users \(segment members\) who shouldn't receive messages from the campaign\.  
_Required_: No  
_Type_: Integer  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`IsPaused` <a name="cfn-pinpoint-campaign-ispaused"></a>
Specifies whether to pause the campaign\. A paused campaign doesn't run unless you resume it by changing this value to `false`\. If you restart a campaign, the campaign restarts from the beginning and not at the point you paused it\. If a campaign is running it will complete and then pause\. Pause only pauses or skips the next run for a recurring future scheduled campaign\. A campaign scheduled for immediate can't be paused\.  
_Required_: No  
_Type_: Boolean  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Limits` <a name="cfn-pinpoint-campaign-limits"></a>
The messaging limits for the campaign\.  
_Required_: No  
_Type_: [Limits](aws-properties-pinpoint-campaign-limits.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`MessageConfiguration` <a name="cfn-pinpoint-campaign-messageconfiguration"></a>
The message configuration settings for the campaign\.  
_Required_: No  
_Type_: [MessageConfiguration](aws-properties-pinpoint-campaign-messageconfiguration.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Name` <a name="cfn-pinpoint-campaign-name"></a>
The name of the campaign\.  
_Required_: Yes  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Priority` <a name="cfn-pinpoint-campaign-priority"></a>
An integer between 1 and 5, inclusive, that represents the priority of the in\-app message campaign, where 1 is the highest priority and 5 is the lowest\. If there are multiple messages scheduled to be displayed at the same time, the priority determines the order in which those messages are displayed\.  
_Required_: No  
_Type_: Integer  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Schedule` <a name="cfn-pinpoint-campaign-schedule"></a>
The schedule settings for the campaign\.  
_Required_: Yes  
_Type_: [Schedule](aws-properties-pinpoint-campaign-schedule.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`SegmentId` <a name="cfn-pinpoint-campaign-segmentid"></a>
The unique identifier for the segment to associate with the campaign\.  
_Required_: Yes  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`SegmentVersion` <a name="cfn-pinpoint-campaign-segmentversion"></a>
The version of the segment to associate with the campaign\.  
_Required_: No  
_Type_: Integer  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Tags` <a name="cfn-pinpoint-campaign-tags"></a>
An array of key\-value pairs to apply to this resource\.  
For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)\.  
_Required_: No  
_Type_: Json  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`TemplateConfiguration` <a name="cfn-pinpoint-campaign-templateconfiguration"></a>
The message template to use for the treatment\.  
_Required_: No  
_Type_: [TemplateConfiguration](aws-properties-pinpoint-campaign-templateconfiguration.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`TreatmentDescription` <a name="cfn-pinpoint-campaign-treatmentdescription"></a>
A custom description of the default treatment for the campaign\.  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`TreatmentName` <a name="cfn-pinpoint-campaign-treatmentname"></a>
A custom name of the default treatment for the campaign, if the campaign has multiple treatments\. A _treatment_ is a variation of a campaign that's used for A/B testing\.  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

## Return values<a name="aws-resource-pinpoint-campaign-return-values"></a>

### Ref<a name="aws-resource-pinpoint-campaign-return-values-ref"></a>

When you pass the logical ID of this resource to the intrinsic `Ref` function, `Ref` returns a string that combines the unique identifier for the Amazon Pinpoint application with the unique identifier for the segment that the campaign targets\.

For more information about using the `Ref` function, see [Ref](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference-ref.html)\.

### Fn::GetAtt<a name="aws-resource-pinpoint-campaign-return-values-fn--getatt"></a>

The `Fn::GetAtt` intrinsic function returns a value for a specified attribute of this type\. The following are the available attributes and sample return values\.

For more information about using the `Fn::GetAtt` intrinsic function, see [Fn::GetAtt](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference-getatt.html)\.

#### <a name="aws-resource-pinpoint-campaign-return-values-fn--getatt-fn--getatt"></a>

`Arn` <a name="Arn-fn::getatt"></a>
The Amazon Resource Name \(ARN\) of the campaign\.

`CampaignId` <a name="CampaignId-fn::getatt"></a>
The unique identifier for the campaign\.
