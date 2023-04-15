# AWS::AuditManager::Assessment Role<a name="aws-properties-auditmanager-assessment-role"></a>

The `Role` property type specifies the wrapper that contains AWS Audit Manager role information, such as the role type and IAM Amazon Resource Name \(ARN\)\.

## Syntax<a name="aws-properties-auditmanager-assessment-role-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-auditmanager-assessment-role-syntax.json"></a>

```
{
  "[RoleArn](#cfn-auditmanager-assessment-role-rolearn)" : String,
  "[RoleType](#cfn-auditmanager-assessment-role-roletype)" : String
}
```

### YAML<a name="aws-properties-auditmanager-assessment-role-syntax.yaml"></a>

```
  [RoleArn](#cfn-auditmanager-assessment-role-rolearn): String
  [RoleType](#cfn-auditmanager-assessment-role-roletype): String
```

## Properties<a name="aws-properties-auditmanager-assessment-role-properties"></a>

`RoleArn` <a name="cfn-auditmanager-assessment-role-rolearn"></a>
The Amazon Resource Name \(ARN\) of the IAM role\.  
_Required_: No  
_Type_: String  
_Minimum_: `20`  
_Maximum_: `2048`  
_Pattern_: `^arn:.*:iam:.*`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`RoleType` <a name="cfn-auditmanager-assessment-role-roletype"></a>
The type of customer persona\.  
In `CreateAssessment`, `roleType` can only be `PROCESS_OWNER`\.  
In `UpdateSettings`, `roleType` can only be `PROCESS_OWNER`\.  
In `BatchCreateDelegationByAssessment`, `roleType` can only be `RESOURCE_OWNER`\.
_Required_: No  
_Type_: String  
_Allowed values_: `PROCESS_OWNER | RESOURCE_OWNER`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

## See also<a name="aws-properties-auditmanager-assessment-role--seealso"></a>

- [Role](https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_Role.html) in the _AWS Audit Manager API Reference_\.
