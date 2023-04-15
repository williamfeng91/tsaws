# AWS::RolesAnywhere::CRL<a name="aws-resource-rolesanywhere-crl"></a>

Imports the certificate revocation list \(CRL\)\. A CRL is a list of certificates that have been revoked by the issuing certificate Authority \(CA\)\. IAM Roles Anywhere validates against the CRL before issuing credentials\.

**Required permissions: **`rolesanywhere:ImportCrl`\.

## Syntax<a name="aws-resource-rolesanywhere-crl-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-resource-rolesanywhere-crl-syntax.json"></a>

```
{
  "Type" : "AWS::RolesAnywhere::CRL",
  "Properties" : {
      "[CrlData](#cfn-rolesanywhere-crl-crldata)" : String,
      "[Enabled](#cfn-rolesanywhere-crl-enabled)" : Boolean,
      "[Name](#cfn-rolesanywhere-crl-name)" : String,
      "[Tags](#cfn-rolesanywhere-crl-tags)" : [ [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html), ... ],
      "[TrustAnchorArn](#cfn-rolesanywhere-crl-trustanchorarn)" : String
    }
}
```

### YAML<a name="aws-resource-rolesanywhere-crl-syntax.yaml"></a>

```
Type: AWS::RolesAnywhere::CRL
Properties:
  [CrlData](#cfn-rolesanywhere-crl-crldata): String
  [Enabled](#cfn-rolesanywhere-crl-enabled): Boolean
  [Name](#cfn-rolesanywhere-crl-name): String
  [Tags](#cfn-rolesanywhere-crl-tags):
    - [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)
  [TrustAnchorArn](#cfn-rolesanywhere-crl-trustanchorarn): String
```

## Properties<a name="aws-resource-rolesanywhere-crl-properties"></a>

`CrlData` <a name="cfn-rolesanywhere-crl-crldata"></a>
The x509 v3 specified certificate revocation list \(CRL\)\.  
_Required_: Yes  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Enabled` <a name="cfn-rolesanywhere-crl-enabled"></a>
Specifies whether the certificate revocation list \(CRL\) is enabled\.  
_Required_: No  
_Type_: Boolean  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Name` <a name="cfn-rolesanywhere-crl-name"></a>
The name of the certificate revocation list \(CRL\)\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `255`  
_Pattern_: `^[ a-zA-Z0-9-_]*$`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Tags` <a name="cfn-rolesanywhere-crl-tags"></a>
A list of tags to attach to the certificate revocation list \(CRL\)\.  
_Required_: No  
_Type_: List of [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)  
_Maximum_: `200`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`TrustAnchorArn` <a name="cfn-rolesanywhere-crl-trustanchorarn"></a>
The ARN of the TrustAnchor the certificate revocation list \(CRL\) will provide revocation for\.  
_Required_: No  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `1011`  
_Pattern_: `^arn:aws(-[^:]+)?:rolesanywhere(:.*){2}(:trust-anchor.*)$`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

## Return values<a name="aws-resource-rolesanywhere-crl-return-values"></a>

### Ref<a name="aws-resource-rolesanywhere-crl-return-values-ref"></a>

When you pass the logical ID of this resource to the intrinsic `Ref` function, `Ref` returns `CrlId`\.

### Fn::GetAtt<a name="aws-resource-rolesanywhere-crl-return-values-fn--getatt"></a>

The `Fn::GetAtt` intrinsic function returns a value for a specified attribute of this type\. The following are the available attributes and sample return values\.

For more information about using the `Fn::GetAtt` intrinsic function, see [Fn::GetAtt](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference-getatt.html)\.

#### <a name="aws-resource-rolesanywhere-crl-return-values-fn--getatt-fn--getatt"></a>

`CrlId` <a name="CrlId-fn::getatt"></a>
The unique primary identifier of the Crl
