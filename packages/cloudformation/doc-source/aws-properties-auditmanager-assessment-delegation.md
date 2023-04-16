# AWS::AuditManager::Assessment Delegation<a name="aws-properties-auditmanager-assessment-delegation"></a>

The `Delegation` property type specifies the assignment of a control set to a delegate for review\.

## Syntax<a name="aws-properties-auditmanager-assessment-delegation-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-auditmanager-assessment-delegation-syntax.json"></a>

```
{
  "[AssessmentId](#cfn-auditmanager-assessment-delegation-assessmentid)" : String,
  "[AssessmentName](#cfn-auditmanager-assessment-delegation-assessmentname)" : String,
  "[Comment](#cfn-auditmanager-assessment-delegation-comment)" : String,
  "[ControlSetId](#cfn-auditmanager-assessment-delegation-controlsetid)" : String,
  "[CreatedBy](#cfn-auditmanager-assessment-delegation-createdby)" : String,
  "[CreationTime](#cfn-auditmanager-assessment-delegation-creationtime)" : Double,
  "[Id](#cfn-auditmanager-assessment-delegation-id)" : String,
  "[LastUpdated](#cfn-auditmanager-assessment-delegation-lastupdated)" : Double,
  "[RoleArn](#cfn-auditmanager-assessment-delegation-rolearn)" : String,
  "[RoleType](#cfn-auditmanager-assessment-delegation-roletype)" : String,
  "[Status](#cfn-auditmanager-assessment-delegation-status)" : String
}
```

### YAML<a name="aws-properties-auditmanager-assessment-delegation-syntax.yaml"></a>

```
  [AssessmentId](#cfn-auditmanager-assessment-delegation-assessmentid): String
  [AssessmentName](#cfn-auditmanager-assessment-delegation-assessmentname): String
  [Comment](#cfn-auditmanager-assessment-delegation-comment): String
  [ControlSetId](#cfn-auditmanager-assessment-delegation-controlsetid): String
  [CreatedBy](#cfn-auditmanager-assessment-delegation-createdby): String
  [CreationTime](#cfn-auditmanager-assessment-delegation-creationtime): Double
  [Id](#cfn-auditmanager-assessment-delegation-id): String
  [LastUpdated](#cfn-auditmanager-assessment-delegation-lastupdated): Double
  [RoleArn](#cfn-auditmanager-assessment-delegation-rolearn): String
  [RoleType](#cfn-auditmanager-assessment-delegation-roletype): String
  [Status](#cfn-auditmanager-assessment-delegation-status): String
```

## Properties<a name="aws-properties-auditmanager-assessment-delegation-properties"></a>

`AssessmentId` <a name="cfn-auditmanager-assessment-delegation-assessmentid"></a>
The identifier for the assessment that's associated with the delegation\.  
_Required_: No  
_Type_: String  
_Minimum_: `36`  
_Maximum_: `36`  
_Pattern_: `^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`AssessmentName` <a name="cfn-auditmanager-assessment-delegation-assessmentname"></a>
The name of the assessment that's associated with the delegation\.  
_Required_: No  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `300`  
_Pattern_: `^[^\\]*$`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Comment` <a name="cfn-auditmanager-assessment-delegation-comment"></a>
The comment that's related to the delegation\.  
_Required_: No  
_Type_: String  
_Maximum_: `350`  
_Pattern_: `^[\w\W\s\S]*$`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`ControlSetId` <a name="cfn-auditmanager-assessment-delegation-controlsetid"></a>
The identifier for the control set that's associated with the delegation\.  
_Required_: No  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `300`  
_Pattern_: `^[\w\W\s\S]*$`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`CreatedBy` <a name="cfn-auditmanager-assessment-delegation-createdby"></a>
The user or role that created the delegation\.  
_Minimum_: `1`  
_Maximum_: `100`  
_Pattern_: `^[a-zA-Z0-9-_()\\[\\]\\s]+$`  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`CreationTime` <a name="cfn-auditmanager-assessment-delegation-creationtime"></a>
Specifies when the delegation was created\.  
_Required_: No  
_Type_: Double  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Id` <a name="cfn-auditmanager-assessment-delegation-id"></a>
The unique identifier for the delegation\.  
_Required_: No  
_Type_: String  
_Minimum_: `36`  
_Maximum_: `36`  
_Pattern_: `^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`LastUpdated` <a name="cfn-auditmanager-assessment-delegation-lastupdated"></a>
Specifies when the delegation was last updated\.  
_Required_: No  
_Type_: Double  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`RoleArn` <a name="cfn-auditmanager-assessment-delegation-rolearn"></a>
The Amazon Resource Name \(ARN\) of the IAM role\.  
_Required_: No  
_Type_: String  
_Minimum_: `20`  
_Maximum_: `2048`  
_Pattern_: `^arn:.*:iam:.*`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`RoleType` <a name="cfn-auditmanager-assessment-delegation-roletype"></a>
The type of customer persona\.  
In `CreateAssessment`, `roleType` can only be `PROCESS_OWNER`\.  
In `UpdateSettings`, `roleType` can only be `PROCESS_OWNER`\.  
In `BatchCreateDelegationByAssessment`, `roleType` can only be `RESOURCE_OWNER`\.
_Required_: No  
_Type_: String  
_Allowed values_: `PROCESS_OWNER | RESOURCE_OWNER`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Status` <a name="cfn-auditmanager-assessment-delegation-status"></a>
The status of the delegation\.  
_Required_: No  
_Type_: String  
_Allowed values_: `COMPLETE | IN_PROGRESS | UNDER_REVIEW`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

## See also<a name="aws-properties-auditmanager-assessment-delegation--seealso"></a>

- [Delegation](https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_Delegation.html) in the _AWS Audit Manager API Reference_\.
