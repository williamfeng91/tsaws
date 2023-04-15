# AWS::ACMPCA::CertificateAuthority AccessDescription<a name="aws-properties-acmpca-certificateauthority-accessdescription"></a>

Provides access information used by the `authorityInfoAccess` and `subjectInfoAccess` extensions described in [RFC 5280](https://datatracker.ietf.org/doc/html/rfc5280)\.

## Syntax<a name="aws-properties-acmpca-certificateauthority-accessdescription-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-acmpca-certificateauthority-accessdescription-syntax.json"></a>

```
{
  "[AccessLocation](#cfn-acmpca-certificateauthority-accessdescription-accesslocation)" : GeneralName,
  "[AccessMethod](#cfn-acmpca-certificateauthority-accessdescription-accessmethod)" : AccessMethod
}
```

### YAML<a name="aws-properties-acmpca-certificateauthority-accessdescription-syntax.yaml"></a>

```
  [AccessLocation](#cfn-acmpca-certificateauthority-accessdescription-accesslocation):
    GeneralName
  [AccessMethod](#cfn-acmpca-certificateauthority-accessdescription-accessmethod):
    AccessMethod
```

## Properties<a name="aws-properties-acmpca-certificateauthority-accessdescription-properties"></a>

`AccessLocation` <a name="cfn-acmpca-certificateauthority-accessdescription-accesslocation"></a>
The location of `AccessDescription` information\.  
_Required_: Yes  
_Type_: [GeneralName](aws-properties-acmpca-certificateauthority-generalname.md)  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`AccessMethod` <a name="cfn-acmpca-certificateauthority-accessdescription-accessmethod"></a>
The type and format of `AccessDescription` information\.  
_Required_: Yes  
_Type_: [AccessMethod](aws-properties-acmpca-certificateauthority-accessmethod.md)  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
