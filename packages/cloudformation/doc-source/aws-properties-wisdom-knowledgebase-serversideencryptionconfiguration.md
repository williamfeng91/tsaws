# AWS::Wisdom::KnowledgeBase ServerSideEncryptionConfiguration<a name="aws-properties-wisdom-knowledgebase-serversideencryptionconfiguration"></a>

The KMS key used for encryption\.

## Syntax<a name="aws-properties-wisdom-knowledgebase-serversideencryptionconfiguration-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-wisdom-knowledgebase-serversideencryptionconfiguration-syntax.json"></a>

```
{
  "[KmsKeyId](#cfn-wisdom-knowledgebase-serversideencryptionconfiguration-kmskeyid)" : String
}
```

### YAML<a name="aws-properties-wisdom-knowledgebase-serversideencryptionconfiguration-syntax.yaml"></a>

```
  [KmsKeyId](#cfn-wisdom-knowledgebase-serversideencryptionconfiguration-kmskeyid): String
```

## Properties<a name="aws-properties-wisdom-knowledgebase-serversideencryptionconfiguration-properties"></a>

`KmsKeyId` <a name="cfn-wisdom-knowledgebase-serversideencryptionconfiguration-kmskeyid"></a>
The KMS key\. For information about valid ID values, see [Key identifiers \(KeyId\)](https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#key-id) in the _AWS Key Management Service Developer Guide_\.  
_Required_: No  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `4096`  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)