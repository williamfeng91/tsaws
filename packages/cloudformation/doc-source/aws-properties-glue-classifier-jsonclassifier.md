# AWS::Glue::Classifier JsonClassifier<a name="aws-properties-glue-classifier-jsonclassifier"></a>

A classifier for `JSON` content\.

## Syntax<a name="aws-properties-glue-classifier-jsonclassifier-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-glue-classifier-jsonclassifier-syntax.json"></a>

```
{
  "[JsonPath](#cfn-glue-classifier-jsonclassifier-jsonpath)" : String,
  "[Name](#cfn-glue-classifier-jsonclassifier-name)" : String
}
```

### YAML<a name="aws-properties-glue-classifier-jsonclassifier-syntax.yaml"></a>

```
  [JsonPath](#cfn-glue-classifier-jsonclassifier-jsonpath): String
  [Name](#cfn-glue-classifier-jsonclassifier-name): String
```

## Properties<a name="aws-properties-glue-classifier-jsonclassifier-properties"></a>

`JsonPath` <a name="cfn-glue-classifier-jsonclassifier-jsonpath"></a>
A `JsonPath` string defining the JSON data for the classifier to classify\. AWS Glue supports a subset of `JsonPath`, as described in [Writing JsonPath Custom Classifiers](https://docs.aws.amazon.com/glue/latest/dg/custom-classifier.html#custom-classifier-json)\.  
_Required_: Yes  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Name` <a name="cfn-glue-classifier-jsonclassifier-name"></a>
The name of the classifier\.  
_Required_: No  
_Type_: String  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

## See also<a name="aws-properties-glue-classifier-jsonclassifier--seealso"></a>

- [JsonClassifier Structure](https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-crawler-classifiers.html#aws-glue-api-crawler-classifiers-JsonClassifier) in the _AWS Glue Developer Guide_
