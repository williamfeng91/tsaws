# AWS::Config::OrganizationConfigRule OrganizationCustomRuleMetadata<a name="aws-properties-config-organizationconfigrule-organizationcustomrulemetadata"></a>

An object that specifies organization custom rule metadata such as resource type, resource ID of AWS resource, Lambda function ARN, and organization trigger types that trigger AWS Config to evaluate your AWS resources against a rule\. It also provides the frequency with which you want AWS Config to run evaluations for the rule if the trigger type is periodic\.

## Syntax<a name="aws-properties-config-organizationconfigrule-organizationcustomrulemetadata-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-config-organizationconfigrule-organizationcustomrulemetadata-syntax.json"></a>

```
{
  "[Description](#cfn-config-organizationconfigrule-organizationcustomrulemetadata-description)" : String,
  "[InputParameters](#cfn-config-organizationconfigrule-organizationcustomrulemetadata-inputparameters)" : String,
  "[LambdaFunctionArn](#cfn-config-organizationconfigrule-organizationcustomrulemetadata-lambdafunctionarn)" : String,
  "[MaximumExecutionFrequency](#cfn-config-organizationconfigrule-organizationcustomrulemetadata-maximumexecutionfrequency)" : String,
  "[OrganizationConfigRuleTriggerTypes](#cfn-config-organizationconfigrule-organizationcustomrulemetadata-organizationconfigruletriggertypes)" : [ String, ... ],
  "[ResourceIdScope](#cfn-config-organizationconfigrule-organizationcustomrulemetadata-resourceidscope)" : String,
  "[ResourceTypesScope](#cfn-config-organizationconfigrule-organizationcustomrulemetadata-resourcetypesscope)" : [ String, ... ],
  "[TagKeyScope](#cfn-config-organizationconfigrule-organizationcustomrulemetadata-tagkeyscope)" : String,
  "[TagValueScope](#cfn-config-organizationconfigrule-organizationcustomrulemetadata-tagvaluescope)" : String
}
```

### YAML<a name="aws-properties-config-organizationconfigrule-organizationcustomrulemetadata-syntax.yaml"></a>

```
  [Description](#cfn-config-organizationconfigrule-organizationcustomrulemetadata-description): String
  [InputParameters](#cfn-config-organizationconfigrule-organizationcustomrulemetadata-inputparameters): String
  [LambdaFunctionArn](#cfn-config-organizationconfigrule-organizationcustomrulemetadata-lambdafunctionarn): String
  [MaximumExecutionFrequency](#cfn-config-organizationconfigrule-organizationcustomrulemetadata-maximumexecutionfrequency): String
  [OrganizationConfigRuleTriggerTypes](#cfn-config-organizationconfigrule-organizationcustomrulemetadata-organizationconfigruletriggertypes):
    - String
  [ResourceIdScope](#cfn-config-organizationconfigrule-organizationcustomrulemetadata-resourceidscope): String
  [ResourceTypesScope](#cfn-config-organizationconfigrule-organizationcustomrulemetadata-resourcetypesscope):
    - String
  [TagKeyScope](#cfn-config-organizationconfigrule-organizationcustomrulemetadata-tagkeyscope): String
  [TagValueScope](#cfn-config-organizationconfigrule-organizationcustomrulemetadata-tagvaluescope): String
```

## Properties<a name="aws-properties-config-organizationconfigrule-organizationcustomrulemetadata-properties"></a>

`Description` <a name="cfn-config-organizationconfigrule-organizationcustomrulemetadata-description"></a>
The description that you provide for your organization AWS Config rule\.  
_Required_: No  
_Type_: String  
_Minimum_: `0`  
_Maximum_: `256`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`InputParameters` <a name="cfn-config-organizationconfigrule-organizationcustomrulemetadata-inputparameters"></a>
A string, in JSON format, that is passed to your organization AWS Config rule Lambda function\.  
_Required_: No  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `2048`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`LambdaFunctionArn` <a name="cfn-config-organizationconfigrule-organizationcustomrulemetadata-lambdafunctionarn"></a>
The lambda function ARN\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `256`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`MaximumExecutionFrequency` <a name="cfn-config-organizationconfigrule-organizationcustomrulemetadata-maximumexecutionfrequency"></a>
The maximum frequency with which AWS Config runs evaluations for a rule\. Your custom rule is triggered when AWS Config delivers the configuration snapshot\. For more information, see [ConfigSnapshotDeliveryProperties](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-config-deliverychannel.html#cfn-config-deliverychannel-configsnapshotdeliveryproperties)\.  
By default, rules with a periodic trigger are evaluated every 24 hours\. To change the frequency, specify a valid value for the `MaximumExecutionFrequency` parameter\.
_Required_: No  
_Type_: String  
_Allowed values_: `One_Hour | Six_Hours | Three_Hours | Twelve_Hours | TwentyFour_Hours`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`OrganizationConfigRuleTriggerTypes` <a name="cfn-config-organizationconfigrule-organizationcustomrulemetadata-organizationconfigruletriggertypes"></a>
The type of notification that triggers AWS Config to run an evaluation for a rule\. You can specify the following notification types:

- `ConfigurationItemChangeNotification` \- Triggers an evaluation when AWS Config delivers a configuration item as a result of a resource change\.
- `OversizedConfigurationItemChangeNotification` \- Triggers an evaluation when AWS Config delivers an oversized configuration item\. AWS Config may generate this notification type when a resource changes and the notification exceeds the maximum size allowed by Amazon SNS\.
- `ScheduledNotification` \- Triggers a periodic evaluation at the frequency specified for `MaximumExecutionFrequency`\.
  _Required_: Yes  
  _Type_: List of String  
  _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`ResourceIdScope` <a name="cfn-config-organizationconfigrule-organizationcustomrulemetadata-resourceidscope"></a>
The ID of the AWS resource that was evaluated\.  
_Required_: No  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `768`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`ResourceTypesScope` <a name="cfn-config-organizationconfigrule-organizationcustomrulemetadata-resourcetypesscope"></a>
The type of the AWS resource that was evaluated\.  
_Required_: No  
_Type_: List of String  
_Maximum_: `100`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`TagKeyScope` <a name="cfn-config-organizationconfigrule-organizationcustomrulemetadata-tagkeyscope"></a>
One part of a key\-value pair that make up a tag\. A key is a general label that acts like a category for more specific tag values\.  
_Required_: No  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `128`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`TagValueScope` <a name="cfn-config-organizationconfigrule-organizationcustomrulemetadata-tagvaluescope"></a>
The optional part of a key\-value pair that make up a tag\. A value acts as a descriptor within a tag category \(key\)\.  
_Required_: No  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `256`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
