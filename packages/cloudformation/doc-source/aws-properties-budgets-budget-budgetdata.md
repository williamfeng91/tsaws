# AWS::Budgets::Budget BudgetData<a name="aws-properties-budgets-budget-budgetdata"></a>

Represents the output of the `CreateBudget` operation\. The content consists of the detailed metadata and data file information, and the current status of the `budget` object\.

This is the Amazon Resource Name \(ARN\) pattern for a budget:

`arn:aws:budgets::AccountId:budget/budgetName`

## Syntax<a name="aws-properties-budgets-budget-budgetdata-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-budgets-budget-budgetdata-syntax.json"></a>

```
{
  "[AutoAdjustData](#cfn-budgets-budget-budgetdata-autoadjustdata)" : AutoAdjustData,
  "[BudgetLimit](#cfn-budgets-budget-budgetdata-budgetlimit)" : Spend,
  "[BudgetName](#cfn-budgets-budget-budgetdata-budgetname)" : String,
  "[BudgetType](#cfn-budgets-budget-budgetdata-budgettype)" : String,
  "[CostFilters](#cfn-budgets-budget-budgetdata-costfilters)" : Json,
  "[CostTypes](#cfn-budgets-budget-budgetdata-costtypes)" : CostTypes,
  "[PlannedBudgetLimits](#cfn-budgets-budget-budgetdata-plannedbudgetlimits)" : Json,
  "[TimePeriod](#cfn-budgets-budget-budgetdata-timeperiod)" : TimePeriod,
  "[TimeUnit](#cfn-budgets-budget-budgetdata-timeunit)" : String
}
```

### YAML<a name="aws-properties-budgets-budget-budgetdata-syntax.yaml"></a>

```
  [AutoAdjustData](#cfn-budgets-budget-budgetdata-autoadjustdata):
    AutoAdjustData
  [BudgetLimit](#cfn-budgets-budget-budgetdata-budgetlimit):
    Spend
  [BudgetName](#cfn-budgets-budget-budgetdata-budgetname): String
  [BudgetType](#cfn-budgets-budget-budgetdata-budgettype): String
  [CostFilters](#cfn-budgets-budget-budgetdata-costfilters): Json
  [CostTypes](#cfn-budgets-budget-budgetdata-costtypes):
    CostTypes
  [PlannedBudgetLimits](#cfn-budgets-budget-budgetdata-plannedbudgetlimits): Json
  [TimePeriod](#cfn-budgets-budget-budgetdata-timeperiod):
    TimePeriod
  [TimeUnit](#cfn-budgets-budget-budgetdata-timeunit): String
```

## Properties<a name="aws-properties-budgets-budget-budgetdata-properties"></a>

`AutoAdjustData` <a name="cfn-budgets-budget-budgetdata-autoadjustdata"></a>
Property description not available\.  
_Required_: No  
_Type_: [AutoAdjustData](aws-properties-budgets-budget-autoadjustdata.md)  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`BudgetLimit` <a name="cfn-budgets-budget-budgetdata-budgetlimit"></a>
The total amount of cost, usage, RI utilization, RI coverage, Savings Plans utilization, or Savings Plans coverage that you want to track with your budget\.  
 `BudgetLimit` is required for cost or usage budgets, but optional for RI or Savings Plans utilization or coverage budgets\. RI and Savings Plans utilization or coverage budgets default to `100`\. This is the only valid value for RI or Savings Plans utilization or coverage budgets\. You can't use `BudgetLimit` with `PlannedBudgetLimits` for `CreateBudget` and `UpdateBudget` actions\.  
_Required_: No  
_Type_: [Spend](aws-properties-budgets-budget-spend.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`BudgetName` <a name="cfn-budgets-budget-budgetdata-budgetname"></a>
The name of a budget\. The value must be unique within an account\. `BudgetName` can't include `:` and `\` characters\. If you don't include value for `BudgetName` in the template, Billing and Cost Management assigns your budget a randomly generated name\.  
_Required_: No  
_Type_: String  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`BudgetType` <a name="cfn-budgets-budget-budgetdata-budgettype"></a>
Specifies whether this budget tracks costs, usage, RI utilization, RI coverage, Savings Plans utilization, or Savings Plans coverage\.  
_Required_: Yes  
_Type_: String  
_Allowed values_: `COST | RI_COVERAGE | RI_UTILIZATION | SAVINGS_PLANS_COVERAGE | SAVINGS_PLANS_UTILIZATION | USAGE`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`CostFilters` <a name="cfn-budgets-budget-budgetdata-costfilters"></a>
The cost filters, such as `Region`, `Service`, `member account`, `Tag`, or `Cost Category`, that are applied to a budget\.  
 AWS Budgets supports the following services as a `Service` filter for RI budgets:

- Amazon EC2
- Amazon Redshift
- Amazon Relational Database Service
- Amazon ElastiCache
- Amazon OpenSearch Service
  _Required_: No  
  _Type_: Json  
  _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`CostTypes` <a name="cfn-budgets-budget-budgetdata-costtypes"></a>
The types of costs that are included in this `COST` budget\.  
 `USAGE`, `RI_UTILIZATION`, `RI_COVERAGE`, `SAVINGS_PLANS_UTILIZATION`, and `SAVINGS_PLANS_COVERAGE` budgets do not have `CostTypes`\.  
_Required_: No  
_Type_: [CostTypes](aws-properties-budgets-budget-costtypes.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`PlannedBudgetLimits` <a name="cfn-budgets-budget-budgetdata-plannedbudgetlimits"></a>
A map containing multiple `BudgetLimit`, including current or future limits\.  
 `PlannedBudgetLimits` is available for cost or usage budget and supports both monthly and quarterly `TimeUnit`\.  
For monthly budgets, provide 12 months of `PlannedBudgetLimits` values\. This must start from the current month and include the next 11 months\. The `key` is the start of the month, `UTC` in epoch seconds\.  
For quarterly budgets, provide four quarters of `PlannedBudgetLimits` value entries in standard calendar quarter increments\. This must start from the current quarter and include the next three quarters\. The `key` is the start of the quarter, `UTC` in epoch seconds\.  
If the planned budget expires before 12 months for monthly or four quarters for quarterly, provide the `PlannedBudgetLimits` values only for the remaining periods\.  
If the budget begins at a date in the future, provide `PlannedBudgetLimits` values from the start date of the budget\.  
After all of the `BudgetLimit` values in `PlannedBudgetLimits` are used, the budget continues to use the last limit as the `BudgetLimit`\. At that point, the planned budget provides the same experience as a fixed budget\.  
 `DescribeBudget` and `DescribeBudgets` response along with `PlannedBudgetLimits` also contain `BudgetLimit` representing the current month or quarter limit present in `PlannedBudgetLimits`\. This only applies to budgets that are created with `PlannedBudgetLimits`\. Budgets that are created without `PlannedBudgetLimits` only contain `BudgetLimit`\. They don't contain `PlannedBudgetLimits`\.  
_Required_: No  
_Type_: Json  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`TimePeriod` <a name="cfn-budgets-budget-budgetdata-timeperiod"></a>
The period of time that is covered by a budget\. The period has a start date and an end date\. The start date must come before the end date\. There are no restrictions on the end date\.  
The start date for a budget\. If you created your budget and didn't specify a start date, the start date defaults to the start of the chosen time period \(MONTHLY, QUARTERLY, or ANNUALLY\)\. For example, if you create your budget on January 24, 2019, choose `MONTHLY`, and don't set a start date, the start date defaults to `01/01/19 00:00 UTC`\. The defaults are the same for the AWS Billing and Cost Management console and the API\.  
You can change your start date with the `UpdateBudget` operation\.  
After the end date, AWS deletes the budget and all associated notifications and subscribers\.  
_Required_: No  
_Type_: [TimePeriod](aws-properties-budgets-budget-timeperiod.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`TimeUnit` <a name="cfn-budgets-budget-budgetdata-timeunit"></a>
The length of time until a budget resets the actual and forecasted spend\. `DAILY` is available only for `RI_UTILIZATION` and `RI_COVERAGE` budgets\.  
_Required_: Yes  
_Type_: String  
_Allowed values_: `ANNUALLY | DAILY | MONTHLY | QUARTERLY`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

## Examples<a name="aws-properties-budgets-budget-budgetdata--examples"></a>

### Create a budget<a name="aws-properties-budgets-budget-budgetdata--examples--Create_a_budget"></a>

The following example creates a budget and shows the format for the CostFilters parameter\.

#### JSON<a name="aws-properties-budgets-budget-budgetdata--examples--Create_a_budget--json"></a>

```
{
    "Budget": {
        "BudgetName": "Example S3 Usage Budget",
        "BudgetLimit": {
            "Amount": "100.0",
            "Unit": "GB"
        },
        "CostFilters": {
            "UsageType": [
                "APS1-APN1-AWS-Out-Bytes"
            ],
            "UsageTypeGroup": [
                "S3: Data Transfer - Region to Region (In)"
            ]
        },
        "CostTypes": {
            "IncludeTax": true,
            "IncludeSubscription": true,
            "UseBlended": false,
            "IncludeRefund": true,
            "IncludeCredit": true,
            "IncludeUpfront": true,
            "IncludeRecurring": true,
            "IncludeOtherSubscription": true,
            "IncludeSupport": true,
            "IncludeDiscount": true,
            "UseAmortized": false
        },
        "TimeUnit": "MONTHLY",
        "TimePeriod": {
            "Start": "2017-10-31T17:00:00-07:00",
            "End": "2087-06-14T17:00:00-07:00"
        },
        "CalculatedSpend": {
            "ActualSpend": {
                "Amount": "0.0",
                "Unit": "GB"
            }
        },
        "BudgetType": "USAGE"
    }
}
```

#### YAML<a name="aws-properties-budgets-budget-budgetdata--examples--Create_a_budget--yaml"></a>

```
---
Budget:
  BudgetName: Example S3 Usage Budget
  BudgetLimit:
    Amount: '100.0'
    Unit: GB
  CostFilters:
    UsageType:
    - APS1-APN1-AWS-Out-Bytes
    UsageTypeGroup:
    - 'S3: Data Transfer - Region to Region (In)'
  CostTypes:
    IncludeTax: true
    IncludeSubscription: true
    UseBlended: false
    IncludeRefund: true
    IncludeCredit: true
    IncludeUpfront: true
    IncludeRecurring: true
    IncludeOtherSubscription: true
    IncludeSupport: true
    IncludeDiscount: true
    UseAmortized: false
  TimeUnit: MONTHLY
  TimePeriod:
    Start: '2017-10-31T17:00:00-07:00'
    End: '2087-06-14T17:00:00-07:00'
  CalculatedSpend:
    ActualSpend:
      Amount: '0.0'
      Unit: GB
  BudgetType: USAGE
```

## See also<a name="aws-properties-budgets-budget-budgetdata--seealso"></a>

- [Budget](https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_budgets_budget.html) in the _AWS Cost Explorer Service Cost Management APIs_