# AWS::Budgets::BudgetsAction<a name="aws-resource-budgets-budgetsaction"></a>

The `AWS::Budgets::BudgetsAction` resource enables you to take predefined actions that are initiated when a budget threshold has been exceeded\. For more information, see [Managing Your Costs with Budgets](https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/budgets-managing-costs.html) in the _AWS Billing and Cost Management User Guide_\.

## Syntax<a name="aws-resource-budgets-budgetsaction-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-resource-budgets-budgetsaction-syntax.json"></a>

```
{
  "Type" : "AWS::Budgets::BudgetsAction",
  "Properties" : {
      "[ActionThreshold](#cfn-budgets-budgetsaction-actionthreshold)" : ActionThreshold,
      "[ActionType](#cfn-budgets-budgetsaction-actiontype)" : String,
      "[ApprovalModel](#cfn-budgets-budgetsaction-approvalmodel)" : String,
      "[BudgetName](#cfn-budgets-budgetsaction-budgetname)" : String,
      "[Definition](#cfn-budgets-budgetsaction-definition)" : Definition,
      "[ExecutionRoleArn](#cfn-budgets-budgetsaction-executionrolearn)" : String,
      "[NotificationType](#cfn-budgets-budgetsaction-notificationtype)" : String,
      "[Subscribers](#cfn-budgets-budgetsaction-subscribers)" : [ Subscriber, ... ]
    }
}
```

### YAML<a name="aws-resource-budgets-budgetsaction-syntax.yaml"></a>

```
Type: AWS::Budgets::BudgetsAction
Properties:
  [ActionThreshold](#cfn-budgets-budgetsaction-actionthreshold):
    ActionThreshold
  [ActionType](#cfn-budgets-budgetsaction-actiontype): String
  [ApprovalModel](#cfn-budgets-budgetsaction-approvalmodel): String
  [BudgetName](#cfn-budgets-budgetsaction-budgetname): String
  [Definition](#cfn-budgets-budgetsaction-definition):
    Definition
  [ExecutionRoleArn](#cfn-budgets-budgetsaction-executionrolearn): String
  [NotificationType](#cfn-budgets-budgetsaction-notificationtype): String
  [Subscribers](#cfn-budgets-budgetsaction-subscribers):
    - Subscriber
```

## Properties<a name="aws-resource-budgets-budgetsaction-properties"></a>

`ActionThreshold` <a name="cfn-budgets-budgetsaction-actionthreshold"></a>
The trigger threshold of the action\.  
_Required_: Yes  
_Type_: [ActionThreshold](aws-properties-budgets-budgetsaction-actionthreshold.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`ActionType` <a name="cfn-budgets-budgetsaction-actiontype"></a>
The type of action\. This defines the type of tasks that can be carried out by this action\. This field also determines the format for definition\.  
_Required_: Yes  
_Type_: String  
_Allowed values_: `APPLY_IAM_POLICY | APPLY_SCP_POLICY | RUN_SSM_DOCUMENTS`  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`ApprovalModel` <a name="cfn-budgets-budgetsaction-approvalmodel"></a>
This specifies if the action needs manual or automatic approval\.  
_Required_: No  
_Type_: String  
_Allowed values_: `AUTOMATIC | MANUAL`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`BudgetName` <a name="cfn-budgets-budgetsaction-budgetname"></a>
A string that represents the budget name\. ":" and "\\" characters aren't allowed\.  
_Required_: Yes  
_Type_: String  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`Definition` <a name="cfn-budgets-budgetsaction-definition"></a>
Specifies all of the type\-specific parameters\.  
_Required_: Yes  
_Type_: [Definition](aws-properties-budgets-budgetsaction-definition.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`ExecutionRoleArn` <a name="cfn-budgets-budgetsaction-executionrolearn"></a>
The role passed for action execution and reversion\. Roles and actions must be in the same account\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `32`  
_Maximum_: `618`  
_Pattern_: `^arn:(aws|aws-cn|aws-us-gov|us-iso-east-1|us-isob-east-1):iam::\d{12}:role(\u002F[\u0021-\u007F]+\u002F|\u002F)[\w+=,.@-]+$`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`NotificationType` <a name="cfn-budgets-budgetsaction-notificationtype"></a>
The type of a notification\.  
_Required_: Yes  
_Type_: String  
_Allowed values_: `ACTUAL | FORECASTED`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Subscribers` <a name="cfn-budgets-budgetsaction-subscribers"></a>
A list of subscribers\.  
_Required_: Yes  
_Type_: List of [Subscriber](aws-properties-budgets-budgetsaction-subscriber.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

## Return values<a name="aws-resource-budgets-budgetsaction-return-values"></a>

### Fn::GetAtt<a name="aws-resource-budgets-budgetsaction-return-values-fn--getatt"></a>

#### <a name="aws-resource-budgets-budgetsaction-return-values-fn--getatt-fn--getatt"></a>

`ActionId` <a name="ActionId-fn::getatt"></a>
A system\-generated universally unique identifier \(UUID\) for the action\.
