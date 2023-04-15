# AWS::IoTAnalytics::Dataset LateDataRule<a name="aws-properties-iotanalytics-dataset-latedatarule"></a>

A structure that contains the name and configuration information of a late data rule\.

## Syntax<a name="aws-properties-iotanalytics-dataset-latedatarule-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-iotanalytics-dataset-latedatarule-syntax.json"></a>

```
{
  "[RuleConfiguration](#cfn-iotanalytics-dataset-latedatarule-ruleconfiguration)" : LateDataRuleConfiguration,
  "[RuleName](#cfn-iotanalytics-dataset-latedatarule-rulename)" : String
}
```

### YAML<a name="aws-properties-iotanalytics-dataset-latedatarule-syntax.yaml"></a>

```
  [RuleConfiguration](#cfn-iotanalytics-dataset-latedatarule-ruleconfiguration):
    LateDataRuleConfiguration
  [RuleName](#cfn-iotanalytics-dataset-latedatarule-rulename): String
```

## Properties<a name="aws-properties-iotanalytics-dataset-latedatarule-properties"></a>

`RuleConfiguration` <a name="cfn-iotanalytics-dataset-latedatarule-ruleconfiguration"></a>
The information needed to configure the late data rule\.  
_Required_: Yes  
_Type_: [LateDataRuleConfiguration](aws-properties-iotanalytics-dataset-latedataruleconfiguration.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`RuleName` <a name="cfn-iotanalytics-dataset-latedatarule-rulename"></a>
The name of the late data rule\.  
_Required_: No  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `128`  
_Pattern_: `^[a-zA-Z0-9_]+$`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
