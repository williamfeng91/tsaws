# AWS::Config::OrganizationConfigRule OrganizationManagedRuleMetadata<a name="aws-properties-config-organizationconfigrule-organizationmanagedrulemetadata"></a>

An object that specifies organization managed rule metadata such as resource type and ID of AWS resource along with the rule identifier\. It also provides the frequency with which you want AWS Config to run evaluations for the rule if the trigger type is periodic\.

## Syntax<a name="aws-properties-config-organizationconfigrule-organizationmanagedrulemetadata-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-config-organizationconfigrule-organizationmanagedrulemetadata-syntax.json"></a>

```
{
  "[Description](#cfn-config-organizationconfigrule-organizationmanagedrulemetadata-description)" : String,
  "[InputParameters](#cfn-config-organizationconfigrule-organizationmanagedrulemetadata-inputparameters)" : String,
  "[MaximumExecutionFrequency](#cfn-config-organizationconfigrule-organizationmanagedrulemetadata-maximumexecutionfrequency)" : String,
  "[ResourceIdScope](#cfn-config-organizationconfigrule-organizationmanagedrulemetadata-resourceidscope)" : String,
  "[ResourceTypesScope](#cfn-config-organizationconfigrule-organizationmanagedrulemetadata-resourcetypesscope)" : [ String, ... ],
  "[RuleIdentifier](#cfn-config-organizationconfigrule-organizationmanagedrulemetadata-ruleidentifier)" : String,
  "[TagKeyScope](#cfn-config-organizationconfigrule-organizationmanagedrulemetadata-tagkeyscope)" : String,
  "[TagValueScope](#cfn-config-organizationconfigrule-organizationmanagedrulemetadata-tagvaluescope)" : String
}
```

### YAML<a name="aws-properties-config-organizationconfigrule-organizationmanagedrulemetadata-syntax.yaml"></a>

```
  [Description](#cfn-config-organizationconfigrule-organizationmanagedrulemetadata-description): String
  [InputParameters](#cfn-config-organizationconfigrule-organizationmanagedrulemetadata-inputparameters): String
  [MaximumExecutionFrequency](#cfn-config-organizationconfigrule-organizationmanagedrulemetadata-maximumexecutionfrequency): String
  [ResourceIdScope](#cfn-config-organizationconfigrule-organizationmanagedrulemetadata-resourceidscope): String
  [ResourceTypesScope](#cfn-config-organizationconfigrule-organizationmanagedrulemetadata-resourcetypesscope):
    - String
  [RuleIdentifier](#cfn-config-organizationconfigrule-organizationmanagedrulemetadata-ruleidentifier): String
  [TagKeyScope](#cfn-config-organizationconfigrule-organizationmanagedrulemetadata-tagkeyscope): String
  [TagValueScope](#cfn-config-organizationconfigrule-organizationmanagedrulemetadata-tagvaluescope): String
```

## Properties<a name="aws-properties-config-organizationconfigrule-organizationmanagedrulemetadata-properties"></a>

`Description` <a name="cfn-config-organizationconfigrule-organizationmanagedrulemetadata-description"></a>
The description that you provide for your organization AWS Config rule\.  
_Required_: No  
_Type_: String  
_Minimum_: `0`  
_Maximum_: `256`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`InputParameters` <a name="cfn-config-organizationconfigrule-organizationmanagedrulemetadata-inputparameters"></a>
A string, in JSON format, that is passed to your organization AWS Config rule Lambda function\.  
_Required_: No  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `2048`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`MaximumExecutionFrequency` <a name="cfn-config-organizationconfigrule-organizationmanagedrulemetadata-maximumexecutionfrequency"></a>
The maximum frequency with which AWS Config runs evaluations for a rule\. This is for an AWS Config managed rule that is triggered at a periodic frequency\.  
By default, rules with a periodic trigger are evaluated every 24 hours\. To change the frequency, specify a valid value for the `MaximumExecutionFrequency` parameter\.
_Required_: No  
_Type_: String  
_Allowed values_: `One_Hour | Six_Hours | Three_Hours | Twelve_Hours | TwentyFour_Hours`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`ResourceIdScope` <a name="cfn-config-organizationconfigrule-organizationmanagedrulemetadata-resourceidscope"></a>
The ID of the AWS resource that was evaluated\.  
_Required_: No  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `768`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`ResourceTypesScope` <a name="cfn-config-organizationconfigrule-organizationmanagedrulemetadata-resourcetypesscope"></a>
The type of the AWS resource that was evaluated\.  
_Required_: No  
_Type_: List of String  
_Maximum_: `100`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`RuleIdentifier` <a name="cfn-config-organizationconfigrule-organizationmanagedrulemetadata-ruleidentifier"></a>
For organization config managed rules, a predefined identifier from a list\. For example, `IAM_PASSWORD_POLICY` is a managed rule\. To reference a managed rule, see [Using AWS Config managed rules](https://docs.aws.amazon.com/config/latest/developerguide/evaluate-config_use-managed-rules.html)\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `256`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`TagKeyScope` <a name="cfn-config-organizationconfigrule-organizationmanagedrulemetadata-tagkeyscope"></a>
One part of a key\-value pair that make up a tag\. A key is a general label that acts like a category for more specific tag values\.  
_Required_: No  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `128`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`TagValueScope` <a name="cfn-config-organizationconfigrule-organizationmanagedrulemetadata-tagvaluescope"></a>
The optional part of a key\-value pair that make up a tag\. A value acts as a descriptor within a tag category \(key\)\.  
_Required_: No  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `256`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
