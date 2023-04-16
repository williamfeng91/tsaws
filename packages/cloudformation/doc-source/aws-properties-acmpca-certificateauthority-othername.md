# AWS::ACMPCA::CertificateAuthority OtherName<a name="aws-properties-acmpca-certificateauthority-othername"></a>

Defines a custom ASN\.1 X\.400 `GeneralName` using an object identifier \(OID\) and value\. The OID must satisfy the regular expression shown below\. For more information, see NIST's definition of [Object Identifier \(OID\)](https://csrc.nist.gov/glossary/term/Object_Identifier)\.

## Syntax<a name="aws-properties-acmpca-certificateauthority-othername-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-acmpca-certificateauthority-othername-syntax.json"></a>

```
{
  "[TypeId](#cfn-acmpca-certificateauthority-othername-typeid)" : String,
  "[Value](#cfn-acmpca-certificateauthority-othername-value)" : String
}
```

### YAML<a name="aws-properties-acmpca-certificateauthority-othername-syntax.yaml"></a>

```
  [TypeId](#cfn-acmpca-certificateauthority-othername-typeid): String
  [Value](#cfn-acmpca-certificateauthority-othername-value): String
```

## Properties<a name="aws-properties-acmpca-certificateauthority-othername-properties"></a>

`TypeId` <a name="cfn-acmpca-certificateauthority-othername-typeid"></a>
Specifies an OID\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `0`  
_Maximum_: `64`  
_Pattern_: `^([0-2])\.([0-9]|([0-3][0-9]))((\.([0-9]+)){0,126})$`  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`Value` <a name="cfn-acmpca-certificateauthority-othername-value"></a>
Specifies an OID value\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `0`  
_Maximum_: `256`  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
