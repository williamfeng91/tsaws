# AWS::Rekognition::Project<a name="aws-resource-rekognition-project"></a>

The `AWS::Rekognition::Project` type creates an Amazon Rekognition Custom Labels project\. A project is a group of resources needed to create and manage versions of an Amazon Rekognition Custom Labels model\.

## Syntax<a name="aws-resource-rekognition-project-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-resource-rekognition-project-syntax.json"></a>

```
{
  "Type" : "AWS::Rekognition::Project",
  "Properties" : {
      "[ProjectName](#cfn-rekognition-project-projectname)" : String
    }
}
```

### YAML<a name="aws-resource-rekognition-project-syntax.yaml"></a>

```
Type: AWS::Rekognition::Project
Properties:
  [ProjectName](#cfn-rekognition-project-projectname): String
```

## Properties<a name="aws-resource-rekognition-project-properties"></a>

`ProjectName` <a name="cfn-rekognition-project-projectname"></a>
The name of the project to create\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `255`  
_Pattern_: `[a-zA-Z0-9_.\-]+`  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

## Return values<a name="aws-resource-rekognition-project-return-values"></a>

### Ref<a name="aws-resource-rekognition-project-return-values-ref"></a>

When you pass the logical ID of this resource to the intrinsic `Ref` function, `Ref` returns the project name\. For example:

`{ "Ref": "CircuitBoardProject" }`

For more information about using the `Ref` function, see [Ref](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference-ref.html)\.

### Fn::GetAtt<a name="aws-resource-rekognition-project-return-values-fn--getatt"></a>

`Fn::GetAtt` returns a value for a specified attribute of this type\. The following are the available attributes and sample return values\. For more information about using `Fn::GetAtt`, see [Fn::GetAtt](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference-getatt.html)\.

#### <a name="aws-resource-rekognition-project-return-values-fn--getatt-fn--getatt"></a>

`Arn` <a name="Arn-fn::getatt"></a>
Returns the Amazon Resource Name of the project\.
