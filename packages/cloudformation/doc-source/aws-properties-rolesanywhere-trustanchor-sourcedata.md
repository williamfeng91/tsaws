# AWS::RolesAnywhere::TrustAnchor SourceData<a name="aws-properties-rolesanywhere-trustanchor-sourcedata"></a>

The data field of the trust anchor depending on its type\.

## Syntax<a name="aws-properties-rolesanywhere-trustanchor-sourcedata-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-rolesanywhere-trustanchor-sourcedata-syntax.json"></a>

```
{
  "[AcmPcaArn](#cfn-rolesanywhere-trustanchor-sourcedata-acmpcaarn)" : String,
  "[X509CertificateData](#cfn-rolesanywhere-trustanchor-sourcedata-x509certificatedata)" : String
}
```

### YAML<a name="aws-properties-rolesanywhere-trustanchor-sourcedata-syntax.yaml"></a>

```
  [AcmPcaArn](#cfn-rolesanywhere-trustanchor-sourcedata-acmpcaarn): String
  [X509CertificateData](#cfn-rolesanywhere-trustanchor-sourcedata-x509certificatedata): String
```

## Properties<a name="aws-properties-rolesanywhere-trustanchor-sourcedata-properties"></a>

`AcmPcaArn` <a name="cfn-rolesanywhere-trustanchor-sourcedata-acmpcaarn"></a>
The root certificate of the AWS Private Certificate Authority specified by this ARN is used in trust validation for temporary credential requests\. Included for trust anchors of type `AWS_ACM_PCA`\.  
_Required_: No  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `1011`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`X509CertificateData` <a name="cfn-rolesanywhere-trustanchor-sourcedata-x509certificatedata"></a>
The PEM\-encoded data for the certificate anchor\. Included for trust anchors of type `CERTIFICATE_BUNDLE`\.  
_Required_: No  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `8000`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
