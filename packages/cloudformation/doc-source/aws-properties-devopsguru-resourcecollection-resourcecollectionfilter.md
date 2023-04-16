# AWS::DevOpsGuru::ResourceCollection ResourceCollectionFilter<a name="aws-properties-devopsguru-resourcecollection-resourcecollectionfilter"></a>

Information about a filter used to specify which AWS resources are analyzed for anomalous behavior by DevOps Guru\.

## Syntax<a name="aws-properties-devopsguru-resourcecollection-resourcecollectionfilter-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-devopsguru-resourcecollection-resourcecollectionfilter-syntax.json"></a>

```
{
  "[CloudFormation](#cfn-devopsguru-resourcecollection-resourcecollectionfilter-cloudformation)" : CloudFormationCollectionFilter,
  "[Tags](#cfn-devopsguru-resourcecollection-resourcecollectionfilter-tags)" : [ TagCollection, ... ]
}
```

### YAML<a name="aws-properties-devopsguru-resourcecollection-resourcecollectionfilter-syntax.yaml"></a>

```
  [CloudFormation](#cfn-devopsguru-resourcecollection-resourcecollectionfilter-cloudformation):
    CloudFormationCollectionFilter
  [Tags](#cfn-devopsguru-resourcecollection-resourcecollectionfilter-tags):
    - TagCollection
```

## Properties<a name="aws-properties-devopsguru-resourcecollection-resourcecollectionfilter-properties"></a>

`CloudFormation` <a name="cfn-devopsguru-resourcecollection-resourcecollectionfilter-cloudformation"></a>
Information about AWS CloudFormation stacks\. You can use up to 500 stacks to specify which AWS resources in your account to analyze\. For more information, see [Stacks](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacks.html) in the _ AWS CloudFormation User Guide_\.  
_Required_: No  
_Type_: [CloudFormationCollectionFilter](aws-properties-devopsguru-resourcecollection-cloudformationcollectionfilter.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Tags` <a name="cfn-devopsguru-resourcecollection-resourcecollectionfilter-tags"></a>
The AWS tags used to filter the resources in the resource collection\.  
Tags help you identify and organize your AWS resources\. Many AWS services support tagging, so you can assign the same tag to resources from different services to indicate that the resources are related\. For example, you can assign the same tag to an Amazon DynamoDB table resource that you assign to an AWS Lambda function\. For more information about using tags, see the [Tagging best practices](https://docs.aws.amazon.com/whitepapers/latest/tagging-best-practices/tagging-best-practices.html) whitepaper\.  
Each AWS tag has two parts\.

- A tag _key_ \(for example, `CostCenter`, `Environment`, `Project`, or `Secret`\)\. Tag _keys_ are case\-sensitive\.
- An optional field known as a tag _value_ \(for example, `111122223333`, `Production`, or a team name\)\. Omitting the tag _value_ is the same as using an empty string\. Like tag _keys_, tag _values_ are case\-sensitive\.
  Together these are known as _key_\-_value_ pairs\.  
  The string used for a _key_ in a tag that you use to define your resource coverage must begin with the prefix `Devops-guru-`\. The tag _key_ might be `DevOps-Guru-deployment-application` or `devops-guru-rds-application`\. When you create a _key_, the case of characters in the _key_ can be whatever you choose\. After you create a _key_, it is case\-sensitive\. For example, DevOps Guru works with a _key_ named `devops-guru-rds` and a _key_ named `DevOps-Guru-RDS`, and these act as two different _keys_\. Possible _key_/_value_ pairs in your application might be `Devops-Guru-production-application/RDS` or `Devops-Guru-production-application/containers`\.
  _Required_: No  
  _Type_: List of [TagCollection](aws-properties-devopsguru-resourcecollection-tagcollection.md)  
  _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
