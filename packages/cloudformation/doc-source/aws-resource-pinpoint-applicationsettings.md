# AWS::Pinpoint::ApplicationSettings<a name="aws-resource-pinpoint-applicationsettings"></a>

Specifies the settings for an Amazon Pinpoint application\. In Amazon Pinpoint, an _application_ \(also referred to as an _app_ or _project_\) is a collection of related settings, customer information, segments, and campaigns, and other types of Amazon Pinpoint resources\.

## Syntax<a name="aws-resource-pinpoint-applicationsettings-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-resource-pinpoint-applicationsettings-syntax.json"></a>

```
{
  "Type" : "AWS::Pinpoint::ApplicationSettings",
  "Properties" : {
      "[ApplicationId](#cfn-pinpoint-applicationsettings-applicationid)" : String,
      "[CampaignHook](#cfn-pinpoint-applicationsettings-campaignhook)" : CampaignHook,
      "[CloudWatchMetricsEnabled](#cfn-pinpoint-applicationsettings-cloudwatchmetricsenabled)" : Boolean,
      "[Limits](#cfn-pinpoint-applicationsettings-limits)" : Limits,
      "[QuietTime](#cfn-pinpoint-applicationsettings-quiettime)" : QuietTime
    }
}
```

### YAML<a name="aws-resource-pinpoint-applicationsettings-syntax.yaml"></a>

```
Type: AWS::Pinpoint::ApplicationSettings
Properties:
  [ApplicationId](#cfn-pinpoint-applicationsettings-applicationid): String
  [CampaignHook](#cfn-pinpoint-applicationsettings-campaignhook):
    CampaignHook
  [CloudWatchMetricsEnabled](#cfn-pinpoint-applicationsettings-cloudwatchmetricsenabled): Boolean
  [Limits](#cfn-pinpoint-applicationsettings-limits):
    Limits
  [QuietTime](#cfn-pinpoint-applicationsettings-quiettime):
    QuietTime
```

## Properties<a name="aws-resource-pinpoint-applicationsettings-properties"></a>

`ApplicationId` <a name="cfn-pinpoint-applicationsettings-applicationid"></a>
The unique identifier for the Amazon Pinpoint application\.  
_Required_: Yes  
_Type_: String  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`CampaignHook` <a name="cfn-pinpoint-applicationsettings-campaignhook"></a>
The settings for the Lambda function to use by default as a code hook for campaigns in the application\. To override these settings for a specific campaign, use the Campaign resource to define custom Lambda function settings for the campaign\.  
_Required_: No  
_Type_: [CampaignHook](aws-properties-pinpoint-applicationsettings-campaignhook.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`CloudWatchMetricsEnabled` <a name="cfn-pinpoint-applicationsettings-cloudwatchmetricsenabled"></a>
Specifies whether to enable application\-related alarms in Amazon CloudWatch\.  
_Required_: No  
_Type_: Boolean  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Limits` <a name="cfn-pinpoint-applicationsettings-limits"></a>
The default sending limits for campaigns in the application\. To override these limits for a specific campaign, use the Campaign resource to define custom limits for the campaign\.  
_Required_: No  
_Type_: [Limits](aws-properties-pinpoint-applicationsettings-limits.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`QuietTime` <a name="cfn-pinpoint-applicationsettings-quiettime"></a>
The default quiet time for campaigns in the application\. Quiet time is a specific time range when campaigns don't send messages to endpoints, if all the following conditions are met:  
\- The `EndpointDemographic.Timezone` property of the endpoint is set to a valid value\.  
\- The current time in the endpoint's time zone is later than or equal to the time specified by the `QuietTime.Start` property for the application \(or a campaign that has custom quiet time settings\)\.  
\- The current time in the endpoint's time zone is earlier than or equal to the time specified by the `QuietTime.End` property for the application \(or a campaign that has custom quiet time settings\)\.  
If any of the preceding conditions isn't met, the endpoint will receive messages from a campaign, even if quiet time is enabled\.  
To override the default quiet time settings for a specific campaign, use the Campaign resource to define a custom quiet time for the campaign\.  
_Required_: No  
_Type_: [QuietTime](aws-properties-pinpoint-applicationsettings-quiettime.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

## Return values<a name="aws-resource-pinpoint-applicationsettings-return-values"></a>

### Ref<a name="aws-resource-pinpoint-applicationsettings-return-values-ref"></a>

When you pass the logical ID of this resource to the intrinsic `Ref` function, `Ref` returns the unique identifier \(`ApplicationId`\) for the Amazon Pinpoint application that you're specifying the settings for\.

For more information about using the `Ref` function, see [Ref](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference-ref.html)\.
