# AWS::IAM::Group Policy<a name="aws-properties-iam-policy-2"></a>

Contains information about an attached policy\.

An attached policy is a managed policy that has been attached to a user, group, or role\.

For more information about managed policies, see [Managed Policies and Inline Policies](https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html) in the _IAM User Guide_\.

## Syntax<a name="aws-properties-iam-policy-2-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-iam-policy-2-syntax.json"></a>

```
{
  "[PolicyDocument](#cfn-iam-policies-policydocument)" : Json,
  "[PolicyName](#cfn-iam-policies-policyname)" : String
}
```

### YAML<a name="aws-properties-iam-policy-2-syntax.yaml"></a>

```
  [PolicyDocument](#cfn-iam-policies-policydocument): Json
  [PolicyName](#cfn-iam-policies-policyname): String
```

## Properties<a name="aws-properties-iam-policy-2-properties"></a>

`PolicyDocument` <a name="cfn-iam-policies-policydocument"></a>
The policy document\.  
_Required_: Yes  
_Type_: Json  
_Minimum_: `1`  
_Maximum_: `131072`  
_Pattern_: `[\u0009\u000A\u000D\u0020-\u00FF]+`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`PolicyName` <a name="cfn-iam-policies-policyname"></a>
The friendly name \(not ARN\) identifying the policy\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `128`  
_Pattern_: `[\w+=,.@-]+`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

## See also<a name="aws-properties-iam-policy-2--seealso"></a>

- [PolicyDetail](https://docs.aws.amazon.com/IAM/latest/APIReference/API_PolicyDetail.html) in the _AWS Identity and Access Management API Reference_
