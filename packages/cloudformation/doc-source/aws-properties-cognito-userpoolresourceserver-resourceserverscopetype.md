# AWS::Cognito::UserPoolResourceServer ResourceServerScopeType<a name="aws-properties-cognito-userpoolresourceserver-resourceserverscopetype"></a>

A resource server scope\.

## Syntax<a name="aws-properties-cognito-userpoolresourceserver-resourceserverscopetype-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-cognito-userpoolresourceserver-resourceserverscopetype-syntax.json"></a>

```
{
  "[ScopeDescription](#cfn-cognito-userpoolresourceserver-resourceserverscopetype-scopedescription)" : String,
  "[ScopeName](#cfn-cognito-userpoolresourceserver-resourceserverscopetype-scopename)" : String
}
```

### YAML<a name="aws-properties-cognito-userpoolresourceserver-resourceserverscopetype-syntax.yaml"></a>

```
  [ScopeDescription](#cfn-cognito-userpoolresourceserver-resourceserverscopetype-scopedescription): String
  [ScopeName](#cfn-cognito-userpoolresourceserver-resourceserverscopetype-scopename): String
```

## Properties<a name="aws-properties-cognito-userpoolresourceserver-resourceserverscopetype-properties"></a>

`ScopeDescription` <a name="cfn-cognito-userpoolresourceserver-resourceserverscopetype-scopedescription"></a>
A description of the scope\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `256`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`ScopeName` <a name="cfn-cognito-userpoolresourceserver-resourceserverscopetype-scopename"></a>
The name of the scope\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `256`  
_Pattern_: `[\x21\x23-\x2E\x30-\x5B\x5D-\x7E]+`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
