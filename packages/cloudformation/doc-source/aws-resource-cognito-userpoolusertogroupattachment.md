# AWS::Cognito::UserPoolUserToGroupAttachment<a name="aws-resource-cognito-userpoolusertogroupattachment"></a>

Adds the specified user to the specified group\.

Calling this action requires developer credentials\.

## Syntax<a name="aws-resource-cognito-userpoolusertogroupattachment-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-resource-cognito-userpoolusertogroupattachment-syntax.json"></a>

```
{
  "Type" : "AWS::Cognito::UserPoolUserToGroupAttachment",
  "Properties" : {
      "[GroupName](#cfn-cognito-userpoolusertogroupattachment-groupname)" : String,
      "[Username](#cfn-cognito-userpoolusertogroupattachment-username)" : String,
      "[UserPoolId](#cfn-cognito-userpoolusertogroupattachment-userpoolid)" : String
    }
}
```

### YAML<a name="aws-resource-cognito-userpoolusertogroupattachment-syntax.yaml"></a>

```
Type: AWS::Cognito::UserPoolUserToGroupAttachment
Properties:
  [GroupName](#cfn-cognito-userpoolusertogroupattachment-groupname): String
  [Username](#cfn-cognito-userpoolusertogroupattachment-username): String
  [UserPoolId](#cfn-cognito-userpoolusertogroupattachment-userpoolid): String
```

## Properties<a name="aws-resource-cognito-userpoolusertogroupattachment-properties"></a>

`GroupName` <a name="cfn-cognito-userpoolusertogroupattachment-groupname"></a>
The group name\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `128`  
_Pattern_: `[\p{L}\p{M}\p{S}\p{N}\p{P}]+`  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`Username` <a name="cfn-cognito-userpoolusertogroupattachment-username"></a>
The username for the user\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `128`  
_Pattern_: `[\p{L}\p{M}\p{S}\p{N}\p{P}]+`  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`UserPoolId` <a name="cfn-cognito-userpoolusertogroupattachment-userpoolid"></a>
The user pool ID for the user pool\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `55`  
_Pattern_: `[\w-]+_[0-9a-zA-Z]+`  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

## Return values<a name="aws-resource-cognito-userpoolusertogroupattachment-return-values"></a>

### Ref<a name="aws-resource-cognito-userpoolusertogroupattachment-return-values-ref"></a>

When you pass the logical ID of this resource to the intrinsic `Ref` function, `Ref` returns a generated ID, such as `UserToGroupAttachment-YejJvzrEXAMPLE`\.

For more information about using the `Ref` function, see [Ref](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference-ref.html)\.
