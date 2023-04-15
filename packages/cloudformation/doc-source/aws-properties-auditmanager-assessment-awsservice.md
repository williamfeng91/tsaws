# AWS::AuditManager::Assessment AWSService<a name="aws-properties-auditmanager-assessment-awsservice"></a>

The `AWSService` property type specifies an AWS service such as Amazon S3, AWS CloudTrail, and so on\.

## Syntax<a name="aws-properties-auditmanager-assessment-awsservice-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-auditmanager-assessment-awsservice-syntax.json"></a>

```
{
  "[ServiceName](#cfn-auditmanager-assessment-awsservice-servicename)" : String
}
```

### YAML<a name="aws-properties-auditmanager-assessment-awsservice-syntax.yaml"></a>

```
  [ServiceName](#cfn-auditmanager-assessment-awsservice-servicename): String
```

## Properties<a name="aws-properties-auditmanager-assessment-awsservice-properties"></a>

`ServiceName` <a name="cfn-auditmanager-assessment-awsservice-servicename"></a>
The name of the AWS service\.  
_Required_: No  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `40`  
_Pattern_: `^[a-zA-Z0-9-\s().]+$`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

## See also<a name="aws-properties-auditmanager-assessment-awsservice--seealso"></a>

- [AWSService](https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_AWSService.html) in the _AWS Audit Manager API Reference_\.
