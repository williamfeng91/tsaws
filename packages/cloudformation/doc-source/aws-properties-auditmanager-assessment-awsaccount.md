# AWS::AuditManager::Assessment AWSAccount<a name="aws-properties-auditmanager-assessment-awsaccount"></a>

The `AWSAccount` property type specifies the wrapper of the AWS account details, such as account ID, email address, and so on\.

## Syntax<a name="aws-properties-auditmanager-assessment-awsaccount-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-auditmanager-assessment-awsaccount-syntax.json"></a>

```
{
  "[EmailAddress](#cfn-auditmanager-assessment-awsaccount-emailaddress)" : String,
  "[Id](#cfn-auditmanager-assessment-awsaccount-id)" : String,
  "[Name](#cfn-auditmanager-assessment-awsaccount-name)" : String
}
```

### YAML<a name="aws-properties-auditmanager-assessment-awsaccount-syntax.yaml"></a>

```
  [EmailAddress](#cfn-auditmanager-assessment-awsaccount-emailaddress): String
  [Id](#cfn-auditmanager-assessment-awsaccount-id): String
  [Name](#cfn-auditmanager-assessment-awsaccount-name): String
```

## Properties<a name="aws-properties-auditmanager-assessment-awsaccount-properties"></a>

`EmailAddress` <a name="cfn-auditmanager-assessment-awsaccount-emailaddress"></a>
The email address that's associated with the AWS account\.  
_Required_: No  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `320`  
_Pattern_: `^.*@.*$`  
_Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)

`Id` <a name="cfn-auditmanager-assessment-awsaccount-id"></a>
The identifier for the AWS account\.  
_Required_: No  
_Type_: String  
_Minimum_: `12`  
_Maximum_: `12`  
_Pattern_: `^[0-9]{12}$`  
_Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)

`Name` <a name="cfn-auditmanager-assessment-awsaccount-name"></a>
The name of the AWS account\.  
_Required_: No  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `50`  
_Pattern_: `^[\u0020-\u007E]+$`  
_Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)

## See also<a name="aws-properties-auditmanager-assessment-awsaccount--seealso"></a>

- [AWSAccount](https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_AWSAccount.html) in the _AWS Audit Manager API Reference_\.
