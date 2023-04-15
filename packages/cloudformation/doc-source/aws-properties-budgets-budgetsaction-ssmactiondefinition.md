# AWS::Budgets::BudgetsAction SsmActionDefinition<a name="aws-properties-budgets-budgetsaction-ssmactiondefinition"></a>

The Amazon EC2 Systems Manager \(SSM\) action definition details\.

## Syntax<a name="aws-properties-budgets-budgetsaction-ssmactiondefinition-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-budgets-budgetsaction-ssmactiondefinition-syntax.json"></a>

```
{
  "[InstanceIds](#cfn-budgets-budgetsaction-ssmactiondefinition-instanceids)" : [ String, ... ],
  "[Region](#cfn-budgets-budgetsaction-ssmactiondefinition-region)" : String,
  "[Subtype](#cfn-budgets-budgetsaction-ssmactiondefinition-subtype)" : String
}
```

### YAML<a name="aws-properties-budgets-budgetsaction-ssmactiondefinition-syntax.yaml"></a>

```
  [InstanceIds](#cfn-budgets-budgetsaction-ssmactiondefinition-instanceids):
    - String
  [Region](#cfn-budgets-budgetsaction-ssmactiondefinition-region): String
  [Subtype](#cfn-budgets-budgetsaction-ssmactiondefinition-subtype): String
```

## Properties<a name="aws-properties-budgets-budgetsaction-ssmactiondefinition-properties"></a>

`InstanceIds` <a name="cfn-budgets-budgetsaction-ssmactiondefinition-instanceids"></a>
The EC2 and RDS instance IDs\.  
_Required_: Yes  
_Type_: List of String  
_Maximum_: `100`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Region` <a name="cfn-budgets-budgetsaction-ssmactiondefinition-region"></a>
The Region to run the \(SSM\) document\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `9`  
_Maximum_: `20`  
_Pattern_: `^\w{2}-\w+(-\w+)?-\d$`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Subtype` <a name="cfn-budgets-budgetsaction-ssmactiondefinition-subtype"></a>
The action subType\.  
_Required_: Yes  
_Type_: String  
_Allowed values_: `STOP_EC2_INSTANCES | STOP_RDS_INSTANCES`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
