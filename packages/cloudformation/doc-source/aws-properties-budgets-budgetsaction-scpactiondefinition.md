# AWS::Budgets::BudgetsAction ScpActionDefinition<a name="aws-properties-budgets-budgetsaction-scpactiondefinition"></a>

The service control policies \(SCP\) action definition details\.

## Syntax<a name="aws-properties-budgets-budgetsaction-scpactiondefinition-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-budgets-budgetsaction-scpactiondefinition-syntax.json"></a>

```
{
  "[PolicyId](#cfn-budgets-budgetsaction-scpactiondefinition-policyid)" : String,
  "[TargetIds](#cfn-budgets-budgetsaction-scpactiondefinition-targetids)" : [ String, ... ]
}
```

### YAML<a name="aws-properties-budgets-budgetsaction-scpactiondefinition-syntax.yaml"></a>

```
  [PolicyId](#cfn-budgets-budgetsaction-scpactiondefinition-policyid): String
  [TargetIds](#cfn-budgets-budgetsaction-scpactiondefinition-targetids):
    - String
```

## Properties<a name="aws-properties-budgets-budgetsaction-scpactiondefinition-properties"></a>

`PolicyId` <a name="cfn-budgets-budgetsaction-scpactiondefinition-policyid"></a>
The policy ID attached\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `10`  
_Maximum_: `130`  
_Pattern_: `^p-[0-9a-zA-Z_]{8,128}$`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`TargetIds` <a name="cfn-budgets-budgetsaction-scpactiondefinition-targetids"></a>
A list of target IDs\.  
_Required_: Yes  
_Type_: List of String  
_Maximum_: `100`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
