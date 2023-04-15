# AWS::IoTSiteWise::AccessPolicy AccessPolicyIdentity<a name="aws-properties-iotsitewise-accesspolicy-accesspolicyidentity"></a>

The identity \(IAM Identity Center user, IAM Identity Center group, or IAM user\) to which this access policy applies\.

## Syntax<a name="aws-properties-iotsitewise-accesspolicy-accesspolicyidentity-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-iotsitewise-accesspolicy-accesspolicyidentity-syntax.json"></a>

```
{
  "[IamRole](#cfn-iotsitewise-accesspolicy-accesspolicyidentity-iamrole)" : IamRole,
  "[IamUser](#cfn-iotsitewise-accesspolicy-accesspolicyidentity-iamuser)" : IamUser,
  "[User](#cfn-iotsitewise-accesspolicy-accesspolicyidentity-user)" : User
}
```

### YAML<a name="aws-properties-iotsitewise-accesspolicy-accesspolicyidentity-syntax.yaml"></a>

```
  [IamRole](#cfn-iotsitewise-accesspolicy-accesspolicyidentity-iamrole):
    IamRole
  [IamUser](#cfn-iotsitewise-accesspolicy-accesspolicyidentity-iamuser):
    IamUser
  [User](#cfn-iotsitewise-accesspolicy-accesspolicyidentity-user):
    User
```

## Properties<a name="aws-properties-iotsitewise-accesspolicy-accesspolicyidentity-properties"></a>

`IamRole` <a name="cfn-iotsitewise-accesspolicy-accesspolicyidentity-iamrole"></a>
An IAM role identity\.  
_Required_: No  
_Type_: [IamRole](aws-properties-iotsitewise-accesspolicy-iamrole.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`IamUser` <a name="cfn-iotsitewise-accesspolicy-accesspolicyidentity-iamuser"></a>
An IAM user identity\.  
_Required_: No  
_Type_: [IamUser](aws-properties-iotsitewise-accesspolicy-iamuser.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`User` <a name="cfn-iotsitewise-accesspolicy-accesspolicyidentity-user"></a>
The IAM Identity Center user to which this access policy maps\.  
_Required_: No  
_Type_: [User](aws-properties-iotsitewise-accesspolicy-user.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
