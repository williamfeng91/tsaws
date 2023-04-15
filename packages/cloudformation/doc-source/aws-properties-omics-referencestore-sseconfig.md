# AWS::Omics::ReferenceStore SseConfig<a name="aws-properties-omics-referencestore-sseconfig"></a>

Server\-side encryption \(SSE\) settings for a store\.

## Syntax<a name="aws-properties-omics-referencestore-sseconfig-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-omics-referencestore-sseconfig-syntax.json"></a>

```
{
  "[KeyArn](#cfn-omics-referencestore-sseconfig-keyarn)" : String,
  "[Type](#cfn-omics-referencestore-sseconfig-type)" : String
}
```

### YAML<a name="aws-properties-omics-referencestore-sseconfig-syntax.yaml"></a>

```
  [KeyArn](#cfn-omics-referencestore-sseconfig-keyarn): String
  [Type](#cfn-omics-referencestore-sseconfig-type): String
```

## Properties<a name="aws-properties-omics-referencestore-sseconfig-properties"></a>

`KeyArn` <a name="cfn-omics-referencestore-sseconfig-keyarn"></a>
An encryption key ARN\.  
_Required_: No  
_Type_: String  
_Minimum_: `20`  
_Maximum_: `2048`  
_Pattern_: `.*arn:([^: ]*):([^: ]*):([^: ]*):([0-9]{12}):([^: ]*).*`  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`Type` <a name="cfn-omics-referencestore-sseconfig-type"></a>
The encryption type\.  
_Required_: Yes  
_Type_: String  
_Allowed values_: `KMS`  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
