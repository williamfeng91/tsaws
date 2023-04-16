# AWS::SSMIncidents::ResponsePlan SsmAutomation<a name="aws-properties-ssmincidents-responseplan-ssmautomation"></a>

The `SsmAutomation` property type specifies details about the Systems Manager automation document that will be used as a runbook during an incident\.

## Syntax<a name="aws-properties-ssmincidents-responseplan-ssmautomation-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-ssmincidents-responseplan-ssmautomation-syntax.json"></a>

```
{
  "[DocumentName](#cfn-ssmincidents-responseplan-ssmautomation-documentname)" : String,
  "[DocumentVersion](#cfn-ssmincidents-responseplan-ssmautomation-documentversion)" : String,
  "[DynamicParameters](#cfn-ssmincidents-responseplan-ssmautomation-dynamicparameters)" : [ DynamicSsmParameter, ... ],
  "[Parameters](#cfn-ssmincidents-responseplan-ssmautomation-parameters)" : [ SsmParameter, ... ],
  "[RoleArn](#cfn-ssmincidents-responseplan-ssmautomation-rolearn)" : String,
  "[TargetAccount](#cfn-ssmincidents-responseplan-ssmautomation-targetaccount)" : String
}
```

### YAML<a name="aws-properties-ssmincidents-responseplan-ssmautomation-syntax.yaml"></a>

```
  [DocumentName](#cfn-ssmincidents-responseplan-ssmautomation-documentname): String
  [DocumentVersion](#cfn-ssmincidents-responseplan-ssmautomation-documentversion): String
  [DynamicParameters](#cfn-ssmincidents-responseplan-ssmautomation-dynamicparameters):
    - DynamicSsmParameter
  [Parameters](#cfn-ssmincidents-responseplan-ssmautomation-parameters):
    - SsmParameter
  [RoleArn](#cfn-ssmincidents-responseplan-ssmautomation-rolearn): String
  [TargetAccount](#cfn-ssmincidents-responseplan-ssmautomation-targetaccount): String
```

## Properties<a name="aws-properties-ssmincidents-responseplan-ssmautomation-properties"></a>

`DocumentName` <a name="cfn-ssmincidents-responseplan-ssmautomation-documentname"></a>
The automation document's name\.  
_Required_: Yes  
_Type_: String  
_Pattern_: `^[a-zA-Z0-9_\-.:/]{3,128}$`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`DocumentVersion` <a name="cfn-ssmincidents-responseplan-ssmautomation-documentversion"></a>
The automation document's version to use when running\.  
_Required_: No  
_Type_: String  
_Minimum_: `0`  
_Maximum_: `128`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`DynamicParameters` <a name="cfn-ssmincidents-responseplan-ssmautomation-dynamicparameters"></a>
The key\-value pairs to resolve dynamic parameter values when processing a Systems Manager Automation runbook\.  
_Required_: No  
_Type_: List of [DynamicSsmParameter](aws-properties-ssmincidents-responseplan-dynamicssmparameter.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Parameters` <a name="cfn-ssmincidents-responseplan-ssmautomation-parameters"></a>
The key\-value pair parameters to use when running the automation document\.  
_Required_: No  
_Type_: List of [SsmParameter](aws-properties-ssmincidents-responseplan-ssmparameter.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`RoleArn` <a name="cfn-ssmincidents-responseplan-ssmautomation-rolearn"></a>
The Amazon Resource Name \(ARN\) of the role that the automation document will assume when running commands\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `0`  
_Maximum_: `1000`  
_Pattern_: `^arn:aws(-cn|-us-gov)?:iam::([0-9]{12})?:role/.+$`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`TargetAccount` <a name="cfn-ssmincidents-responseplan-ssmautomation-targetaccount"></a>
The account that the automation document will be run in\. This can be in either the management account or an application account\.  
_Required_: No  
_Type_: String  
_Allowed values_: `IMPACTED_ACCOUNT | RESPONSE_PLAN_OWNER_ACCOUNT`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
