# AWS::Athena::WorkGroup EncryptionConfiguration<a name="aws-properties-athena-workgroup-encryptionconfiguration"></a>

If query results are encrypted in Amazon S3, indicates the encryption option used \(for example, `SSE_KMS` or `CSE_KMS`\) and key information\.

## Syntax<a name="aws-properties-athena-workgroup-encryptionconfiguration-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-athena-workgroup-encryptionconfiguration-syntax.json"></a>

```
{
  "[EncryptionOption](#cfn-athena-workgroup-encryptionconfiguration-encryptionoption)" : String,
  "[KmsKey](#cfn-athena-workgroup-encryptionconfiguration-kmskey)" : String
}
```

### YAML<a name="aws-properties-athena-workgroup-encryptionconfiguration-syntax.yaml"></a>

```
  [EncryptionOption](#cfn-athena-workgroup-encryptionconfiguration-encryptionoption): String
  [KmsKey](#cfn-athena-workgroup-encryptionconfiguration-kmskey): String
```

## Properties<a name="aws-properties-athena-workgroup-encryptionconfiguration-properties"></a>

`EncryptionOption` <a name="cfn-athena-workgroup-encryptionconfiguration-encryptionoption"></a>
Indicates whether Amazon S3 server\-side encryption with Amazon S3\-managed keys \(`SSE_S3`\), server\-side encryption with KMS\-managed keys \(`SSE_KMS`\), or client\-side encryption with KMS\-managed keys \(`CSE_KMS`\) is used\.  
If a query runs in a workgroup and the workgroup overrides client\-side settings, then the workgroup's setting for encryption is used\. It specifies whether query results must be encrypted, for all queries that run in this workgroup\.  
_Required_: Yes  
_Type_: String  
_Allowed values_: `CSE_KMS | SSE_KMS | SSE_S3`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`KmsKey` <a name="cfn-athena-workgroup-encryptionconfiguration-kmskey"></a>
For `SSE_KMS` and `CSE_KMS`, this is the KMS key ARN or ID\.  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
