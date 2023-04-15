# AWS::DataBrew::Dataset PathOptions<a name="aws-properties-databrew-dataset-pathoptions"></a>

Represents a set of options that define how DataBrew selects files for a given Amazon S3 path in a dataset\.

## Syntax<a name="aws-properties-databrew-dataset-pathoptions-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-databrew-dataset-pathoptions-syntax.json"></a>

```
{
  "[FilesLimit](#cfn-databrew-dataset-pathoptions-fileslimit)" : FilesLimit,
  "[LastModifiedDateCondition](#cfn-databrew-dataset-pathoptions-lastmodifieddatecondition)" : FilterExpression,
  "[Parameters](#cfn-databrew-dataset-pathoptions-parameters)" : [ PathParameter, ... ]
}
```

### YAML<a name="aws-properties-databrew-dataset-pathoptions-syntax.yaml"></a>

```
  [FilesLimit](#cfn-databrew-dataset-pathoptions-fileslimit):
    FilesLimit
  [LastModifiedDateCondition](#cfn-databrew-dataset-pathoptions-lastmodifieddatecondition):
    FilterExpression
  [Parameters](#cfn-databrew-dataset-pathoptions-parameters):
    - PathParameter
```

## Properties<a name="aws-properties-databrew-dataset-pathoptions-properties"></a>

`FilesLimit` <a name="cfn-databrew-dataset-pathoptions-fileslimit"></a>
If provided, this structure imposes a limit on a number of files that should be selected\.  
_Required_: No  
_Type_: [FilesLimit](aws-properties-databrew-dataset-fileslimit.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`LastModifiedDateCondition` <a name="cfn-databrew-dataset-pathoptions-lastmodifieddatecondition"></a>
If provided, this structure defines a date range for matching Amazon S3 objects based on their LastModifiedDate attribute in Amazon S3\.  
_Required_: No  
_Type_: [FilterExpression](aws-properties-databrew-dataset-filterexpression.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Parameters` <a name="cfn-databrew-dataset-pathoptions-parameters"></a>
A structure that maps names of parameters used in the Amazon S3 path of a dataset to their definitions\.  
_Required_: No  
_Type_: List of [PathParameter](aws-properties-databrew-dataset-pathparameter.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
