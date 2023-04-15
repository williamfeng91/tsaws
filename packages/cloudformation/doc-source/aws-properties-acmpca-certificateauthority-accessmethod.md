# AWS::ACMPCA::CertificateAuthority AccessMethod<a name="aws-properties-acmpca-certificateauthority-accessmethod"></a>

Describes the type and format of extension access\. Only one of `CustomObjectIdentifier` or `AccessMethodType` may be provided\. Providing both results in `InvalidArgsException`\.

## Syntax<a name="aws-properties-acmpca-certificateauthority-accessmethod-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-acmpca-certificateauthority-accessmethod-syntax.json"></a>

```
{
  "[AccessMethodType](#cfn-acmpca-certificateauthority-accessmethod-accessmethodtype)" : String,
  "[CustomObjectIdentifier](#cfn-acmpca-certificateauthority-accessmethod-customobjectidentifier)" : String
}
```

### YAML<a name="aws-properties-acmpca-certificateauthority-accessmethod-syntax.yaml"></a>

```
  [AccessMethodType](#cfn-acmpca-certificateauthority-accessmethod-accessmethodtype): String
  [CustomObjectIdentifier](#cfn-acmpca-certificateauthority-accessmethod-customobjectidentifier): String
```

## Properties<a name="aws-properties-acmpca-certificateauthority-accessmethod-properties"></a>

`AccessMethodType` <a name="cfn-acmpca-certificateauthority-accessmethod-accessmethodtype"></a>
Specifies the `AccessMethod`\.  
_Required_: No  
_Type_: String  
_Allowed values_: `CA_REPOSITORY | RESOURCE_PKI_MANIFEST | RESOURCE_PKI_NOTIFY`  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`CustomObjectIdentifier` <a name="cfn-acmpca-certificateauthority-accessmethod-customobjectidentifier"></a>
An object identifier \(OID\) specifying the `AccessMethod`\. The OID must satisfy the regular expression shown below\. For more information, see NIST's definition of [Object Identifier \(OID\)](https://csrc.nist.gov/glossary/term/Object_Identifier)\.  
_Required_: No  
_Type_: String  
_Minimum_: `0`  
_Maximum_: `64`  
_Pattern_: `^([0-2])\.([0-9]|([0-3][0-9]))((\.([0-9]+)){0,126})$`  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
