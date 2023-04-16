# AWS::FinSpace::Environment SuperuserParameters<a name="aws-properties-finspace-environment-superuserparameters"></a>

Configuration information for the superuser\.

## Syntax<a name="aws-properties-finspace-environment-superuserparameters-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-finspace-environment-superuserparameters-syntax.json"></a>

```
{
  "[EmailAddress](#cfn-finspace-environment-superuserparameters-emailaddress)" : String,
  "[FirstName](#cfn-finspace-environment-superuserparameters-firstname)" : String,
  "[LastName](#cfn-finspace-environment-superuserparameters-lastname)" : String
}
```

### YAML<a name="aws-properties-finspace-environment-superuserparameters-syntax.yaml"></a>

```
  [EmailAddress](#cfn-finspace-environment-superuserparameters-emailaddress): String
  [FirstName](#cfn-finspace-environment-superuserparameters-firstname): String
  [LastName](#cfn-finspace-environment-superuserparameters-lastname): String
```

## Properties<a name="aws-properties-finspace-environment-superuserparameters-properties"></a>

`EmailAddress` <a name="cfn-finspace-environment-superuserparameters-emailaddress"></a>
The email address of the superuser\.  
_Required_: No  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `128`  
_Pattern_: `[A-Z0-9a-z._%+-]+@[A-Za-z0-9.-]+[.]+[A-Za-z]+`  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`FirstName` <a name="cfn-finspace-environment-superuserparameters-firstname"></a>
The first name of the superuser\.  
_Required_: No  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `50`  
_Pattern_: `^[a-zA-Z0-9]{1,50}$`  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`LastName` <a name="cfn-finspace-environment-superuserparameters-lastname"></a>
The last name of the superuser\.  
_Required_: No  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `50`  
_Pattern_: `^[a-zA-Z0-9]{1,50}$`  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
