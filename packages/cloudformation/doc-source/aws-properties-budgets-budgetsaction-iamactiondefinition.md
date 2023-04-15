# AWS::Budgets::BudgetsAction IamActionDefinition<a name="aws-properties-budgets-budgetsaction-iamactiondefinition"></a>

The AWS Identity and Access Management \(IAM\) action definition details\.

## Syntax<a name="aws-properties-budgets-budgetsaction-iamactiondefinition-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-budgets-budgetsaction-iamactiondefinition-syntax.json"></a>

```
{
  "[Groups](#cfn-budgets-budgetsaction-iamactiondefinition-groups)" : [ String, ... ],
  "[PolicyArn](#cfn-budgets-budgetsaction-iamactiondefinition-policyarn)" : String,
  "[Roles](#cfn-budgets-budgetsaction-iamactiondefinition-roles)" : [ String, ... ],
  "[Users](#cfn-budgets-budgetsaction-iamactiondefinition-users)" : [ String, ... ]
}
```

### YAML<a name="aws-properties-budgets-budgetsaction-iamactiondefinition-syntax.yaml"></a>

```
  [Groups](#cfn-budgets-budgetsaction-iamactiondefinition-groups):
    - String
  [PolicyArn](#cfn-budgets-budgetsaction-iamactiondefinition-policyarn): String
  [Roles](#cfn-budgets-budgetsaction-iamactiondefinition-roles):
    - String
  [Users](#cfn-budgets-budgetsaction-iamactiondefinition-users):
    - String
```

## Properties<a name="aws-properties-budgets-budgetsaction-iamactiondefinition-properties"></a>

`Groups` <a name="cfn-budgets-budgetsaction-iamactiondefinition-groups"></a>
A list of groups to be attached\. There must be at least one group\.  
_Required_: No  
_Type_: List of String  
_Maximum_: `100`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`PolicyArn` <a name="cfn-budgets-budgetsaction-iamactiondefinition-policyarn"></a>
The Amazon Resource Name \(ARN\) of the policy to be attached\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `25`  
_Maximum_: `684`  
_Pattern_: `^arn:(aws|aws-cn|aws-us-gov|us-iso-east-1|us-isob-east-1):iam::(\d{12}|aws):policy(\u002F[\u0021-\u007F]+\u002F|\u002F)[\w+=,.@-]+$`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Roles` <a name="cfn-budgets-budgetsaction-iamactiondefinition-roles"></a>
A list of roles to be attached\. There must be at least one role\.  
_Required_: No  
_Type_: List of String  
_Maximum_: `100`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Users` <a name="cfn-budgets-budgetsaction-iamactiondefinition-users"></a>
A list of users to be attached\. There must be at least one user\.  
_Required_: No  
_Type_: List of String  
_Maximum_: `100`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
