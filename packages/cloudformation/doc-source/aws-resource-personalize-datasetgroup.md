# AWS::Personalize::DatasetGroup<a name="aws-resource-personalize-datasetgroup"></a>

A dataset group is a collection of related datasets \(Interactions, User, and Item\)\. You create a dataset group by calling [CreateDatasetGroup](https://docs.aws.amazon.com/personalize/latest/dg/API_CreateDatasetGroup.html)\. You then create a dataset and add it to a dataset group by calling [CreateDataset](https://docs.aws.amazon.com/personalize/latest/dg/API_CreateDataset.html)\. The dataset group is used to create and train a solution by calling [CreateSolution](https://docs.aws.amazon.com/personalize/latest/dg/API_CreateSolution.html)\. A dataset group can contain only one of each type of dataset\.

You can specify an AWS Key Management Service \(KMS\) key to encrypt the datasets in the group\.

## Syntax<a name="aws-resource-personalize-datasetgroup-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-resource-personalize-datasetgroup-syntax.json"></a>

```
{
  "Type" : "AWS::Personalize::DatasetGroup",
  "Properties" : {
      "[Domain](#cfn-personalize-datasetgroup-domain)" : String,
      "[KmsKeyArn](#cfn-personalize-datasetgroup-kmskeyarn)" : String,
      "[Name](#cfn-personalize-datasetgroup-name)" : String,
      "[RoleArn](#cfn-personalize-datasetgroup-rolearn)" : String
    }
}
```

### YAML<a name="aws-resource-personalize-datasetgroup-syntax.yaml"></a>

```
Type: AWS::Personalize::DatasetGroup
Properties:
  [Domain](#cfn-personalize-datasetgroup-domain): String
  [KmsKeyArn](#cfn-personalize-datasetgroup-kmskeyarn): String
  [Name](#cfn-personalize-datasetgroup-name): String
  [RoleArn](#cfn-personalize-datasetgroup-rolearn): String
```

## Properties<a name="aws-resource-personalize-datasetgroup-properties"></a>

`Domain` <a name="cfn-personalize-datasetgroup-domain"></a>
The domain of a Domain dataset group\.  
_Required_: No  
_Type_: String  
_Allowed values_: `ECOMMERCE | VIDEO_ON_DEMAND`  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`KmsKeyArn` <a name="cfn-personalize-datasetgroup-kmskeyarn"></a>
The Amazon Resource Name \(ARN\) of the AWS Key Management Service \(KMS\) key used to encrypt the datasets\.  
_Required_: No  
_Type_: String  
_Maximum_: `2048`  
_Pattern_: `arn:aws.*:kms:.*:[0-9]{12}:key/.*`  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`Name` <a name="cfn-personalize-datasetgroup-name"></a>
The name of the dataset group\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `63`  
_Pattern_: `^[a-zA-Z0-9][a-zA-Z0-9\-_]*`  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`RoleArn` <a name="cfn-personalize-datasetgroup-rolearn"></a>
The ARN of the IAM role that has permissions to create the dataset group\.  
_Required_: No  
_Type_: String  
_Maximum_: `256`  
_Pattern_: `arn:([a-z\d-]+):iam::\d{12}:role/?[a-zA-Z_0-9+=,.@\-_/]+`  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

## Return values<a name="aws-resource-personalize-datasetgroup-return-values"></a>

### Ref<a name="aws-resource-personalize-datasetgroup-return-values-ref"></a>

When you pass the logical ID of this resource to the intrinsic `Ref` function, `Ref` returns the name of the resource\.

For more information about using the `Ref` function, see [Ref](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference-ref.html)\.

### Fn::GetAtt<a name="aws-resource-personalize-datasetgroup-return-values-fn--getatt"></a>

The `Fn::GetAtt` intrinsic function returns a value for a specified attribute of this type\. The following are the available attributes and sample return values\.

For more information about using the `Fn::GetAtt` intrinsic function, see [Fn::GetAtt](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference-getatt.html)\.

#### <a name="aws-resource-personalize-datasetgroup-return-values-fn--getatt-fn--getatt"></a>

`DatasetGroupArn` <a name="DatasetGroupArn-fn::getatt"></a>
The Amazon Resource Name \(ARN\) of the dataset group\.
