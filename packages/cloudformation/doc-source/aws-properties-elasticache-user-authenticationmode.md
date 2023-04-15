# AWS::ElastiCache::User AuthenticationMode<a name="aws-properties-elasticache-user-authenticationmode"></a>

Specifies the authentication mode to use\.

## Syntax<a name="aws-properties-elasticache-user-authenticationmode-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-elasticache-user-authenticationmode-syntax.json"></a>

```
{
  "[Passwords](#cfn-elasticache-user-authenticationmode-passwords)" : [ String, ... ],
  "[Type](#cfn-elasticache-user-authenticationmode-type)" : String
}
```

### YAML<a name="aws-properties-elasticache-user-authenticationmode-syntax.yaml"></a>

```
  [Passwords](#cfn-elasticache-user-authenticationmode-passwords):
    - String
  [Type](#cfn-elasticache-user-authenticationmode-type): String
```

## Properties<a name="aws-properties-elasticache-user-authenticationmode-properties"></a>

`Passwords` <a name="cfn-elasticache-user-authenticationmode-passwords"></a>
Specifies the passwords to use for authentication if `Type` is set to `password`\.  
_Required_: No  
_Type_: List of String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Type` <a name="cfn-elasticache-user-authenticationmode-type"></a>
Specifies the authentication type\. Possible options are IAM authentication, password and no password\.  
_Required_: Yes  
_Type_: String  
_Allowed values_: `iam | no-password-required | password`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
