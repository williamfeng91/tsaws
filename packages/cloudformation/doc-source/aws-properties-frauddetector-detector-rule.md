# AWS::FraudDetector::Detector Rule<a name="aws-properties-frauddetector-detector-rule"></a>

A rule\. Rule is a condition that tells Amazon Fraud Detector how to interpret variables values during a fraud prediction\.

## Syntax<a name="aws-properties-frauddetector-detector-rule-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-frauddetector-detector-rule-syntax.json"></a>

```
{
  "[Arn](#cfn-frauddetector-detector-rule-arn)" : String,
  "[CreatedTime](#cfn-frauddetector-detector-rule-createdtime)" : String,
  "[Description](#cfn-frauddetector-detector-rule-description)" : String,
  "[DetectorId](#cfn-frauddetector-detector-rule-detectorid)" : String,
  "[Expression](#cfn-frauddetector-detector-rule-expression)" : String,
  "[Language](#cfn-frauddetector-detector-rule-language)" : String,
  "[LastUpdatedTime](#cfn-frauddetector-detector-rule-lastupdatedtime)" : String,
  "[Outcomes](#cfn-frauddetector-detector-rule-outcomes)" : [ Outcome, ... ],
  "[RuleId](#cfn-frauddetector-detector-rule-ruleid)" : String,
  "[RuleVersion](#cfn-frauddetector-detector-rule-ruleversion)" : String,
  "[Tags](#cfn-frauddetector-detector-rule-tags)" : [ [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html), ... ]
}
```

### YAML<a name="aws-properties-frauddetector-detector-rule-syntax.yaml"></a>

```
  [Arn](#cfn-frauddetector-detector-rule-arn): String
  [CreatedTime](#cfn-frauddetector-detector-rule-createdtime): String
  [Description](#cfn-frauddetector-detector-rule-description): String
  [DetectorId](#cfn-frauddetector-detector-rule-detectorid): String
  [Expression](#cfn-frauddetector-detector-rule-expression): String
  [Language](#cfn-frauddetector-detector-rule-language): String
  [LastUpdatedTime](#cfn-frauddetector-detector-rule-lastupdatedtime): String
  [Outcomes](#cfn-frauddetector-detector-rule-outcomes):
    - Outcome
  [RuleId](#cfn-frauddetector-detector-rule-ruleid): String
  [RuleVersion](#cfn-frauddetector-detector-rule-ruleversion): String
  [Tags](#cfn-frauddetector-detector-rule-tags):
    - [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)
```

## Properties<a name="aws-properties-frauddetector-detector-rule-properties"></a>

`Arn` <a name="cfn-frauddetector-detector-rule-arn"></a>
The rule ARN\.  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`CreatedTime` <a name="cfn-frauddetector-detector-rule-createdtime"></a>
Timestamp for when the rule was created\.  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Description` <a name="cfn-frauddetector-detector-rule-description"></a>
The rule description\.  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`DetectorId` <a name="cfn-frauddetector-detector-rule-detectorid"></a>
The detector for which the rule is associated\.  
_Required_: No  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `64`  
_Pattern_: `^[0-9a-z_-]+$`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Expression` <a name="cfn-frauddetector-detector-rule-expression"></a>
The rule expression\. A rule expression captures the business logic\. For more information, see [Rule language reference](https://docs.aws.amazon.com/frauddetector/latest/ug/rule-language-reference.html)\.  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Language` <a name="cfn-frauddetector-detector-rule-language"></a>
The rule language\.  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`LastUpdatedTime` <a name="cfn-frauddetector-detector-rule-lastupdatedtime"></a>
Timestamp for when the rule was last updated\.  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Outcomes` <a name="cfn-frauddetector-detector-rule-outcomes"></a>
The rule outcome\.  
_Required_: No  
_Type_: List of [Outcome](aws-properties-frauddetector-detector-outcome.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`RuleId` <a name="cfn-frauddetector-detector-rule-ruleid"></a>
The rule ID\.  
_Required_: No  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `64`  
_Pattern_: `^[0-9a-z_-]+$`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`RuleVersion` <a name="cfn-frauddetector-detector-rule-ruleversion"></a>
The rule version\.  
_Required_: No  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `5`  
_Pattern_: `^([1-9][0-9]*)$`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Tags` <a name="cfn-frauddetector-detector-rule-tags"></a>
An array of key\-value pairs to apply to this resource\.  
For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)\.  
_Required_: No  
_Type_: List of [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
