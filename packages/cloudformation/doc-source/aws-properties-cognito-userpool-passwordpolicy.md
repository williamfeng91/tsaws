# AWS::Cognito::UserPool PasswordPolicy<a name="aws-properties-cognito-userpool-passwordpolicy"></a>

The password policy type\.

## Syntax<a name="aws-properties-cognito-userpool-passwordpolicy-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-cognito-userpool-passwordpolicy-syntax.json"></a>

```
{
  "[MinimumLength](#cfn-cognito-userpool-passwordpolicy-minimumlength)" : Integer,
  "[RequireLowercase](#cfn-cognito-userpool-passwordpolicy-requirelowercase)" : Boolean,
  "[RequireNumbers](#cfn-cognito-userpool-passwordpolicy-requirenumbers)" : Boolean,
  "[RequireSymbols](#cfn-cognito-userpool-passwordpolicy-requiresymbols)" : Boolean,
  "[RequireUppercase](#cfn-cognito-userpool-passwordpolicy-requireuppercase)" : Boolean,
  "[TemporaryPasswordValidityDays](#cfn-cognito-userpool-passwordpolicy-temporarypasswordvaliditydays)" : Integer
}
```

### YAML<a name="aws-properties-cognito-userpool-passwordpolicy-syntax.yaml"></a>

```
  [MinimumLength](#cfn-cognito-userpool-passwordpolicy-minimumlength): Integer
  [RequireLowercase](#cfn-cognito-userpool-passwordpolicy-requirelowercase): Boolean
  [RequireNumbers](#cfn-cognito-userpool-passwordpolicy-requirenumbers): Boolean
  [RequireSymbols](#cfn-cognito-userpool-passwordpolicy-requiresymbols): Boolean
  [RequireUppercase](#cfn-cognito-userpool-passwordpolicy-requireuppercase): Boolean
  [TemporaryPasswordValidityDays](#cfn-cognito-userpool-passwordpolicy-temporarypasswordvaliditydays): Integer
```

## Properties<a name="aws-properties-cognito-userpool-passwordpolicy-properties"></a>

`MinimumLength` <a name="cfn-cognito-userpool-passwordpolicy-minimumlength"></a>
The minimum length of the password in the policy that you have set\. This value can't be less than 6\.  
_Required_: No  
_Type_: Integer  
_Minimum_: `6`  
_Maximum_: `99`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`RequireLowercase` <a name="cfn-cognito-userpool-passwordpolicy-requirelowercase"></a>
In the password policy that you have set, refers to whether you have required users to use at least one lowercase letter in their password\.  
_Required_: No  
_Type_: Boolean  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`RequireNumbers` <a name="cfn-cognito-userpool-passwordpolicy-requirenumbers"></a>
In the password policy that you have set, refers to whether you have required users to use at least one number in their password\.  
_Required_: No  
_Type_: Boolean  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`RequireSymbols` <a name="cfn-cognito-userpool-passwordpolicy-requiresymbols"></a>
In the password policy that you have set, refers to whether you have required users to use at least one symbol in their password\.  
_Required_: No  
_Type_: Boolean  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`RequireUppercase` <a name="cfn-cognito-userpool-passwordpolicy-requireuppercase"></a>
In the password policy that you have set, refers to whether you have required users to use at least one uppercase letter in their password\.  
_Required_: No  
_Type_: Boolean  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`TemporaryPasswordValidityDays` <a name="cfn-cognito-userpool-passwordpolicy-temporarypasswordvaliditydays"></a>
The number of days a temporary password is valid in the password policy\. If the user doesn't sign in during this time, an administrator must reset their password\.  
When you set `TemporaryPasswordValidityDays` for a user pool, you can no longer set a value for the legacy `UnusedAccountValidityDays` parameter in that user pool\.
_Required_: No  
_Type_: Integer  
_Minimum_: `0`  
_Maximum_: `365`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
