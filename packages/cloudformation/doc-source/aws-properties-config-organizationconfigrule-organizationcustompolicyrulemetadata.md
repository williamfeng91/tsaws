# AWS::Config::OrganizationConfigRule OrganizationCustomPolicyRuleMetadata<a name="aws-properties-config-organizationconfigrule-organizationcustompolicyrulemetadata"></a>

An object that specifies metadata for your organization's AWS Config Custom Policy rule\. The metadata includes the runtime system in use, which accounts have debug logging enabled, and other custom rule metadata, such as resource type, resource ID of AWS resource, and organization trigger types that initiate AWS Config to evaluate AWS resources against a rule\.

## Syntax<a name="aws-properties-config-organizationconfigrule-organizationcustompolicyrulemetadata-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-config-organizationconfigrule-organizationcustompolicyrulemetadata-syntax.json"></a>

```
{
  "[DebugLogDeliveryAccounts](#cfn-config-organizationconfigrule-organizationcustompolicyrulemetadata-debuglogdeliveryaccounts)" : [ String, ... ],
  "[Description](#cfn-config-organizationconfigrule-organizationcustompolicyrulemetadata-description)" : String,
  "[InputParameters](#cfn-config-organizationconfigrule-organizationcustompolicyrulemetadata-inputparameters)" : String,
  "[MaximumExecutionFrequency](#cfn-config-organizationconfigrule-organizationcustompolicyrulemetadata-maximumexecutionfrequency)" : String,
  "[OrganizationConfigRuleTriggerTypes](#cfn-config-organizationconfigrule-organizationcustompolicyrulemetadata-organizationconfigruletriggertypes)" : [ String, ... ],
  "[PolicyText](#cfn-config-organizationconfigrule-organizationcustompolicyrulemetadata-policytext)" : String,
  "[ResourceIdScope](#cfn-config-organizationconfigrule-organizationcustompolicyrulemetadata-resourceidscope)" : String,
  "[ResourceTypesScope](#cfn-config-organizationconfigrule-organizationcustompolicyrulemetadata-resourcetypesscope)" : [ String, ... ],
  "[Runtime](#cfn-config-organizationconfigrule-organizationcustompolicyrulemetadata-runtime)" : String,
  "[TagKeyScope](#cfn-config-organizationconfigrule-organizationcustompolicyrulemetadata-tagkeyscope)" : String,
  "[TagValueScope](#cfn-config-organizationconfigrule-organizationcustompolicyrulemetadata-tagvaluescope)" : String
}
```

### YAML<a name="aws-properties-config-organizationconfigrule-organizationcustompolicyrulemetadata-syntax.yaml"></a>

```
  [DebugLogDeliveryAccounts](#cfn-config-organizationconfigrule-organizationcustompolicyrulemetadata-debuglogdeliveryaccounts):
    - String
  [Description](#cfn-config-organizationconfigrule-organizationcustompolicyrulemetadata-description): String
  [InputParameters](#cfn-config-organizationconfigrule-organizationcustompolicyrulemetadata-inputparameters): String
  [MaximumExecutionFrequency](#cfn-config-organizationconfigrule-organizationcustompolicyrulemetadata-maximumexecutionfrequency): String
  [OrganizationConfigRuleTriggerTypes](#cfn-config-organizationconfigrule-organizationcustompolicyrulemetadata-organizationconfigruletriggertypes):
    - String
  [PolicyText](#cfn-config-organizationconfigrule-organizationcustompolicyrulemetadata-policytext): String
  [ResourceIdScope](#cfn-config-organizationconfigrule-organizationcustompolicyrulemetadata-resourceidscope): String
  [ResourceTypesScope](#cfn-config-organizationconfigrule-organizationcustompolicyrulemetadata-resourcetypesscope):
    - String
  [Runtime](#cfn-config-organizationconfigrule-organizationcustompolicyrulemetadata-runtime): String
  [TagKeyScope](#cfn-config-organizationconfigrule-organizationcustompolicyrulemetadata-tagkeyscope): String
  [TagValueScope](#cfn-config-organizationconfigrule-organizationcustompolicyrulemetadata-tagvaluescope): String
```

## Properties<a name="aws-properties-config-organizationconfigrule-organizationcustompolicyrulemetadata-properties"></a>

`DebugLogDeliveryAccounts` <a name="cfn-config-organizationconfigrule-organizationcustompolicyrulemetadata-debuglogdeliveryaccounts"></a>
A list of accounts that you can enable debug logging for your organization AWS Config Custom Policy rule\. List is null when debug logging is enabled for all accounts\.  
_Required_: No  
_Type_: List of String  
_Maximum_: `1000`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Description` <a name="cfn-config-organizationconfigrule-organizationcustompolicyrulemetadata-description"></a>
The description that you provide for your organization AWS Config Custom Policy rule\.  
_Required_: No  
_Type_: String  
_Minimum_: `0`  
_Maximum_: `256`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`InputParameters` <a name="cfn-config-organizationconfigrule-organizationcustompolicyrulemetadata-inputparameters"></a>
A string, in JSON format, that is passed to your organization AWS Config Custom Policy rule\.  
_Required_: No  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `2048`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`MaximumExecutionFrequency` <a name="cfn-config-organizationconfigrule-organizationcustompolicyrulemetadata-maximumexecutionfrequency"></a>
The maximum frequency with which AWS Config runs evaluations for a rule\. Your AWS Config Custom Policy rule is triggered when AWS Config delivers the configuration snapshot\. For more information, see [ConfigSnapshotDeliveryProperties](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-config-deliverychannel.html#cfn-config-deliverychannel-configsnapshotdeliveryproperties)\.  
_Required_: No  
_Type_: String  
_Allowed values_: `One_Hour | Six_Hours | Three_Hours | Twelve_Hours | TwentyFour_Hours`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`OrganizationConfigRuleTriggerTypes` <a name="cfn-config-organizationconfigrule-organizationcustompolicyrulemetadata-organizationconfigruletriggertypes"></a>
The type of notification that initiates AWS Config to run an evaluation for a rule\. For AWS Config Custom Policy rules, AWS Config supports change\-initiated notification types:

- `ConfigurationItemChangeNotification` \- Initiates an evaluation when AWS Config delivers a configuration item as a result of a resource change\.
- `OversizedConfigurationItemChangeNotification` \- Initiates an evaluation when AWS Config delivers an oversized configuration item\. AWS Config may generate this notification type when a resource changes and the notification exceeds the maximum size allowed by Amazon SNS\.
  _Required_: No  
  _Type_: List of String  
  _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`PolicyText` <a name="cfn-config-organizationconfigrule-organizationcustompolicyrulemetadata-policytext"></a>
The policy definition containing the logic for your organization AWS Config Custom Policy rule\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `0`  
_Maximum_: `10000`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`ResourceIdScope` <a name="cfn-config-organizationconfigrule-organizationcustompolicyrulemetadata-resourceidscope"></a>
The ID of the AWS resource that was evaluated\.  
_Required_: No  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `768`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`ResourceTypesScope` <a name="cfn-config-organizationconfigrule-organizationcustompolicyrulemetadata-resourcetypesscope"></a>
The type of the AWS resource that was evaluated\.  
_Required_: No  
_Type_: List of String  
_Maximum_: `100`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Runtime` <a name="cfn-config-organizationconfigrule-organizationcustompolicyrulemetadata-runtime"></a>
Property description not available\.  
_Required_: Yes  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`TagKeyScope` <a name="cfn-config-organizationconfigrule-organizationcustompolicyrulemetadata-tagkeyscope"></a>
One part of a key\-value pair that make up a tag\. A key is a general label that acts like a category for more specific tag values\.  
_Required_: No  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `128`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`TagValueScope` <a name="cfn-config-organizationconfigrule-organizationcustompolicyrulemetadata-tagvaluescope"></a>
The optional part of a key\-value pair that make up a tag\. A value acts as a descriptor within a tag category \(key\)\.  
_Required_: No  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `256`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
