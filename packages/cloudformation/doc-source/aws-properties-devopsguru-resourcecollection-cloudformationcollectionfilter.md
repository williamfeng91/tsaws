# AWS::DevOpsGuru::ResourceCollection CloudFormationCollectionFilter<a name="aws-properties-devopsguru-resourcecollection-cloudformationcollectionfilter"></a>

Information about AWS CloudFormation stacks\. You can use up to 500 stacks to specify which AWS resources in your account to analyze\. For more information, see [Stacks](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacks.html) in the _ AWS CloudFormation User Guide_\.

## Syntax<a name="aws-properties-devopsguru-resourcecollection-cloudformationcollectionfilter-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-devopsguru-resourcecollection-cloudformationcollectionfilter-syntax.json"></a>

```
{
  "[StackNames](#cfn-devopsguru-resourcecollection-cloudformationcollectionfilter-stacknames)" : [ String, ... ]
}
```

### YAML<a name="aws-properties-devopsguru-resourcecollection-cloudformationcollectionfilter-syntax.yaml"></a>

```
  [StackNames](#cfn-devopsguru-resourcecollection-cloudformationcollectionfilter-stacknames):
    - String
```

## Properties<a name="aws-properties-devopsguru-resourcecollection-cloudformationcollectionfilter-properties"></a>

`StackNames` <a name="cfn-devopsguru-resourcecollection-cloudformationcollectionfilter-stacknames"></a>
An array of CloudFormation stack names\.  
_Required_: No  
_Type_: List of String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
