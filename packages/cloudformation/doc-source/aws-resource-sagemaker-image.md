# AWS::SageMaker::Image<a name="aws-resource-sagemaker-image"></a>

Creates a custom SageMaker image\. A SageMaker image is a set of image versions\. Each image version represents a container image stored in Amazon Elastic Container Registry \(ECR\)\. For more information, see [Bring your own SageMaker image](https://docs.aws.amazon.com/sagemaker/latest/dg/studio-byoi.html)\.

## Syntax<a name="aws-resource-sagemaker-image-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-resource-sagemaker-image-syntax.json"></a>

```
{
  "Type" : "AWS::SageMaker::Image",
  "Properties" : {
      "[ImageDescription](#cfn-sagemaker-image-imagedescription)" : String,
      "[ImageDisplayName](#cfn-sagemaker-image-imagedisplayname)" : String,
      "[ImageName](#cfn-sagemaker-image-imagename)" : String,
      "[ImageRoleArn](#cfn-sagemaker-image-imagerolearn)" : String,
      "[Tags](#cfn-sagemaker-image-tags)" : [ [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html), ... ]
    }
}
```

### YAML<a name="aws-resource-sagemaker-image-syntax.yaml"></a>

```
Type: AWS::SageMaker::Image
Properties:
  [ImageDescription](#cfn-sagemaker-image-imagedescription): String
  [ImageDisplayName](#cfn-sagemaker-image-imagedisplayname): String
  [ImageName](#cfn-sagemaker-image-imagename): String
  [ImageRoleArn](#cfn-sagemaker-image-imagerolearn): String
  [Tags](#cfn-sagemaker-image-tags):
    - [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)
```

## Properties<a name="aws-resource-sagemaker-image-properties"></a>

`ImageDescription` <a name="cfn-sagemaker-image-imagedescription"></a>
The description of the image\.  
_Length Constraints_: Minimum length of 1\. Maximum length of 512\.  
_Pattern_: `.*`  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`ImageDisplayName` <a name="cfn-sagemaker-image-imagedisplayname"></a>
The display name of the image\.  
_Length Constraints_: Minimum length of 1\. Maximum length of 128\.  
_Pattern_: `^\S(.*\S)?$`  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`ImageName` <a name="cfn-sagemaker-image-imagename"></a>
The name of the Image\. Must be unique by region in your account\.  
_Length Constraints_: Minimum length of 1\. Maximum length of 63\.  
_Pattern_: `^[a-zA-Z0-9]([-.]?[a-zA-Z0-9]){0,62}$`  
_Required_: Yes  
_Type_: String  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`ImageRoleArn` <a name="cfn-sagemaker-image-imagerolearn"></a>
The Amazon Resource Name \(ARN\) of an IAM role that enables Amazon SageMaker to perform tasks on your behalf\.  
_Length Constraints_: Minimum length of 20\. Maximum length of 2048\.  
_Pattern_: `^arn:aws[a-z\-]*:iam::\d{12}:role/?[a-zA-Z_0-9+=,.@\-_/]+$`  
_Required_: Yes  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Tags` <a name="cfn-sagemaker-image-tags"></a>
A list of key\-value pairs to apply to this resource\.  
_Array Members_: Minimum number of 0 items\. Maximum number of 50 items\.  
_Required_: No  
_Type_: List of [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

## Return values<a name="aws-resource-sagemaker-image-return-values"></a>

### Ref<a name="aws-resource-sagemaker-image-return-values-ref"></a>

When you pass the logical ID of this resource to the intrinsic `Ref` function, `Ref` returns the ImageArn\.

For more information about using the `Ref` function, see [Ref](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference-ref.html)\.

### Fn::GetAtt<a name="aws-resource-sagemaker-image-return-values-fn--getatt"></a>

The `Fn::GetAtt` intrinsic function returns a value for a specified attribute of this type\. The following are the available attributes and sample return values\.

For more information about using the `Fn::GetAtt` intrinsic function, see [Fn::GetAtt](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference-getatt.html)\.

#### <a name="aws-resource-sagemaker-image-return-values-fn--getatt-fn--getatt"></a>

`ImageArn` <a name="ImageArn-fn::getatt"></a>
The Amazon Resource Name \(ARN\) of the image\.  
_Type_: String  
_Length Constraints_: Maximum length of 256\.  
_Pattern_: `^arn:aws(-[\w]+)*:sagemaker:.+:[0-9]{12}:image/[a-z0-9]([-.]?[a-z0-9])*$`
