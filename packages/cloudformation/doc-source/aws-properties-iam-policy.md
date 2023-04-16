# AWS::IAM::User Policy<a name="aws-properties-iam-policy"></a>

Contains information about an attached policy\.

An attached policy is a managed policy that has been attached to a user, group, or role\.

For more information about managed policies, refer to [Managed Policies and Inline Policies](https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html) in the _IAM User Guide_\.

## Syntax<a name="aws-properties-iam-policy-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-iam-policy-syntax.json"></a>

```
{
  "[PolicyDocument](#cfn-iam-policies-policydocument)" : Json,
  "[PolicyName](#cfn-iam-policies-policyname)" : String
}
```

### YAML<a name="aws-properties-iam-policy-syntax.yaml"></a>

```
  [PolicyDocument](#cfn-iam-policies-policydocument): Json
  [PolicyName](#cfn-iam-policies-policyname): String
```

## Properties<a name="aws-properties-iam-policy-properties"></a>

`PolicyDocument` <a name="cfn-iam-policies-policydocument"></a>
The entire contents of the policy that defines permissions\. For more information, see [Overview of JSON policies](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies.html#access_policies-json)\.  
_Required_: Yes  
_Type_: Json  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`PolicyName` <a name="cfn-iam-policies-policyname"></a>
The friendly name \(not ARN\) identifying the policy\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `128`  
_Pattern_: `[\w+=,.@-]+`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

## Examples<a name="aws-properties-iam-policy--examples"></a>

### IAM User Policy<a name="aws-properties-iam-policy--examples--IAM_User_Policy"></a>

This example shows how the policy document is declared\.

#### JSON<a name="aws-properties-iam-policy--examples--IAM_User_Policy--json"></a>

```
{
    "PolicyName": "root",
    "PolicyDocument": {
        "Version": "2012-10-17",
        "Statement": [
            {
                "Sid": "IamListAccess",
                "Effect": "Allow",
                "Action": [
                    "iam:ListRoles",
                    "iam:ListUsers"
                ],
                "Resource": "*"
            }
        ]
    }
}
```

#### YAML<a name="aws-properties-iam-policy--examples--IAM_User_Policy--yaml"></a>

```
PolicyName: root
PolicyDocument:
   Version: 2012-10-17
   Statement:
      - Sid: IamListAccess
        Effect: Allow
        Action:
         - 'iam:ListRoles'
         - 'iam:ListUsers'
        Resource: '*'
```

## See also<a name="aws-properties-iam-policy--seealso"></a>

- [PolicyDetail](https://docs.aws.amazon.com/IAM/latest/APIReference/API_PolicyDetail.html) in the _AWS Identity and Access Management API Reference_
