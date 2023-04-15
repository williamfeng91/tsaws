# AWS::Kendra::Faq S3Path<a name="aws-properties-kendra-faq-s3path"></a>

Information required to find a specific file in an Amazon S3 bucket\.

## Syntax<a name="aws-properties-kendra-faq-s3path-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-kendra-faq-s3path-syntax.json"></a>

```
{
  "[Bucket](#cfn-kendra-faq-s3path-bucket)" : String,
  "[Key](#cfn-kendra-faq-s3path-key)" : String
}
```

### YAML<a name="aws-properties-kendra-faq-s3path-syntax.yaml"></a>

```
  [Bucket](#cfn-kendra-faq-s3path-bucket): String
  [Key](#cfn-kendra-faq-s3path-key): String
```

## Properties<a name="aws-properties-kendra-faq-s3path-properties"></a>

`Bucket` <a name="cfn-kendra-faq-s3path-bucket"></a>
The name of the S3 bucket that contains the file\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `3`  
_Maximum_: `63`  
_Pattern_: `[a-z0-9][\.\-a-z0-9]{1,61}[a-z0-9]`  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`Key` <a name="cfn-kendra-faq-s3path-key"></a>
The name of the file\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `1024`  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
