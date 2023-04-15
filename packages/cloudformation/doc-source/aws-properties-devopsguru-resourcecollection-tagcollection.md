# AWS::DevOpsGuru::ResourceCollection TagCollection<a name="aws-properties-devopsguru-resourcecollection-tagcollection"></a>

A collection of AWS tags\.

Tags help you identify and organize your AWS resources\. Many AWS services support tagging, so you can assign the same tag to resources from different services to indicate that the resources are related\. For example, you can assign the same tag to an Amazon DynamoDB table resource that you assign to an AWS Lambda function\. For more information about using tags, see the [Tagging best practices](https://docs.aws.amazon.com/whitepapers/latest/tagging-best-practices/tagging-best-practices.html) whitepaper\.

Each AWS tag has two parts\.

- A tag _key_ \(for example, `CostCenter`, `Environment`, `Project`, or `Secret`\)\. Tag _keys_ are case\-sensitive\.
- An optional field known as a tag _value_ \(for example, `111122223333`, `Production`, or a team name\)\. Omitting the tag _value_ is the same as using an empty string\. Like tag _keys_, tag _values_ are case\-sensitive\.

Together these are known as _key_\-_value_ pairs\.

**Important**  
The string used for a _key_ in a tag that you use to define your resource coverage must begin with the prefix `Devops-guru-`\. The tag _key_ might be `DevOps-Guru-deployment-application` or `devops-guru-rds-application`\. When you create a _key_, the case of characters in the _key_ can be whatever you choose\. After you create a _key_, it is case\-sensitive\. For example, DevOps Guru works with a _key_ named `devops-guru-rds` and a _key_ named `DevOps-Guru-RDS`, and these act as two different _keys_\. Possible _key_/_value_ pairs in your application might be `Devops-Guru-production-application/RDS` or `Devops-Guru-production-application/containers`\.

## Syntax<a name="aws-properties-devopsguru-resourcecollection-tagcollection-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-devopsguru-resourcecollection-tagcollection-syntax.json"></a>

```
{
  "[AppBoundaryKey](#cfn-devopsguru-resourcecollection-tagcollection-appboundarykey)" : String,
  "[TagValues](#cfn-devopsguru-resourcecollection-tagcollection-tagvalues)" : [ String, ... ]
}
```

### YAML<a name="aws-properties-devopsguru-resourcecollection-tagcollection-syntax.yaml"></a>

```
  [AppBoundaryKey](#cfn-devopsguru-resourcecollection-tagcollection-appboundarykey): String
  [TagValues](#cfn-devopsguru-resourcecollection-tagcollection-tagvalues):
    - String
```

## Properties<a name="aws-properties-devopsguru-resourcecollection-tagcollection-properties"></a>

`AppBoundaryKey` <a name="cfn-devopsguru-resourcecollection-tagcollection-appboundarykey"></a>
An AWS tag _key_ that is used to identify the AWS resources that DevOps Guru analyzes\. All AWS resources in your account and Region tagged with this _key_ make up your DevOps Guru application and analysis boundary\.  
The string used for a _key_ in a tag that you use to define your resource coverage must begin with the prefix `Devops-guru-`\. The tag _key_ might be `DevOps-Guru-deployment-application` or `devops-guru-rds-application`\. When you create a _key_, the case of characters in the _key_ can be whatever you choose\. After you create a _key_, it is case\-sensitive\. For example, DevOps Guru works with a _key_ named `devops-guru-rds` and a _key_ named `DevOps-Guru-RDS`, and these act as two different _keys_\. Possible _key_/_value_ pairs in your application might be `Devops-Guru-production-application/RDS` or `Devops-Guru-production-application/containers`\.
_Required_: No  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `128`  
_Pattern_: `^([\p{L}\p{Z}\p{N}_.:/=+\-@]*)$`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`TagValues` <a name="cfn-devopsguru-resourcecollection-tagcollection-tagvalues"></a>
The values in an AWS tag collection\.  
The tag's _value_ is an optional field used to associate a string with the tag _key_ \(for example, `111122223333`, `Production`, or a team name\)\. The _key_ and _value_ are the tag's _key_ pair\. Omitting the tag _value_ is the same as using an empty string\. Like tag _keys_, tag _values_ are case\-sensitive\. You can specify a maximum of 256 characters for a tag value\.  
_Required_: No  
_Type_: List of String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
