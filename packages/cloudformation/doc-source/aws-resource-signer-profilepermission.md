# AWS::Signer::ProfilePermission<a name="aws-resource-signer-profilepermission"></a>

Adds cross\-account permissions to a signing profile\.

## Syntax<a name="aws-resource-signer-profilepermission-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-resource-signer-profilepermission-syntax.json"></a>

```
{
  "Type" : "AWS::Signer::ProfilePermission",
  "Properties" : {
      "[Action](#cfn-signer-profilepermission-action)" : String,
      "[Principal](#cfn-signer-profilepermission-principal)" : String,
      "[ProfileName](#cfn-signer-profilepermission-profilename)" : String,
      "[ProfileVersion](#cfn-signer-profilepermission-profileversion)" : String,
      "[StatementId](#cfn-signer-profilepermission-statementid)" : String
    }
}
```

### YAML<a name="aws-resource-signer-profilepermission-syntax.yaml"></a>

```
Type: AWS::Signer::ProfilePermission
Properties:
  [Action](#cfn-signer-profilepermission-action): String
  [Principal](#cfn-signer-profilepermission-principal): String
  [ProfileName](#cfn-signer-profilepermission-profilename): String
  [ProfileVersion](#cfn-signer-profilepermission-profileversion): String
  [StatementId](#cfn-signer-profilepermission-statementid): String
```

## Properties<a name="aws-resource-signer-profilepermission-properties"></a>

`Action` <a name="cfn-signer-profilepermission-action"></a>
The AWS Signer action permitted as part of cross\-account permissions\.  
_Required_: Yes  
_Type_: String  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`Principal` <a name="cfn-signer-profilepermission-principal"></a>
The AWS principal receiving cross\-account permissions\. This may be an IAM role or another AWS account ID\.  
_Required_: Yes  
_Type_: String  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`ProfileName` <a name="cfn-signer-profilepermission-profilename"></a>
The human\-readable name of the signing profile\.  
_Required_: Yes  
_Type_: String  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`ProfileVersion` <a name="cfn-signer-profilepermission-profileversion"></a>
The version of the signing profile\.  
_Required_: No  
_Type_: String  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`StatementId` <a name="cfn-signer-profilepermission-statementid"></a>
A unique identifier for the cross\-account permission statement\.  
_Required_: Yes  
_Type_: String  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
