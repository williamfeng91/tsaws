# AWS::ACMPCA::Certificate Validity<a name="aws-properties-acmpca-certificate-validity"></a>

Length of time for which the certificate issued by your private certificate authority \(CA\), or by the private CA itself, is valid in days, months, or years\. You can issue a certificate by calling the `IssueCertificate` operation\.

## Syntax<a name="aws-properties-acmpca-certificate-validity-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-acmpca-certificate-validity-syntax.json"></a>

```
{
  "[Type](#cfn-acmpca-certificate-validity-type)" : String,
  "[Value](#cfn-acmpca-certificate-validity-value)" : Double
}
```

### YAML<a name="aws-properties-acmpca-certificate-validity-syntax.yaml"></a>

```
  [Type](#cfn-acmpca-certificate-validity-type): String
  [Value](#cfn-acmpca-certificate-validity-value): Double
```

## Properties<a name="aws-properties-acmpca-certificate-validity-properties"></a>

`Type` <a name="cfn-acmpca-certificate-validity-type"></a>
Specifies whether the `Value` parameter represents days, months, or years\.  
_Required_: Yes  
_Type_: String  
_Allowed values_: `ABSOLUTE | DAYS | END_DATE | MONTHS | YEARS`  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`Value` <a name="cfn-acmpca-certificate-validity-value"></a>
A long integer interpreted according to the value of `Type`, below\.  
_Required_: Yes  
_Type_: Double  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
