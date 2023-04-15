# AWS::Forecast::Dataset EncryptionConfig<a name="aws-properties-forecast-dataset-encryptionconfig"></a>

An AWS Key Management Service \(KMS\) key and an AWS Identity and Access Management \(IAM\) role that Amazon Forecast can assume to access the key\. You can specify this optional object in the CreateDataset and CreatePredictor requests\.

## Syntax<a name="aws-properties-forecast-dataset-encryptionconfig-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-forecast-dataset-encryptionconfig-syntax.json"></a>

```
{
  "[KmsKeyArn](#cfn-forecast-dataset-encryptionconfig-kmskeyarn)" : String,
  "[RoleArn](#cfn-forecast-dataset-encryptionconfig-rolearn)" : String
}
```

### YAML<a name="aws-properties-forecast-dataset-encryptionconfig-syntax.yaml"></a>

```
  [KmsKeyArn](#cfn-forecast-dataset-encryptionconfig-kmskeyarn): String
  [RoleArn](#cfn-forecast-dataset-encryptionconfig-rolearn): String
```

## Properties<a name="aws-properties-forecast-dataset-encryptionconfig-properties"></a>

`KmsKeyArn` <a name="cfn-forecast-dataset-encryptionconfig-kmskeyarn"></a>
The Amazon Resource Name \(ARN\) of the KMS key\.  
_Required_: No  
_Type_: String  
_Maximum_: `256`  
_Pattern_: `arn:aws:kms:.*:key/.*`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`RoleArn` <a name="cfn-forecast-dataset-encryptionconfig-rolearn"></a>
The ARN of the IAM role that Amazon Forecast can assume to access the AWS KMS key\.  
Passing a role across AWS accounts is not allowed\. If you pass a role that isn't in your account, you get an `InvalidInputException` error\.  
_Required_: No  
_Type_: String  
_Maximum_: `256`  
_Pattern_: `arn:([a-z\d-]+):forecast:.*:.*:.+`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
