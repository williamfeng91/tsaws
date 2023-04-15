# AWS::CodeBuild::Project BatchRestrictions<a name="aws-properties-codebuild-project-batchrestrictions"></a>

Specifies restrictions for the batch build\.

## Syntax<a name="aws-properties-codebuild-project-batchrestrictions-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-codebuild-project-batchrestrictions-syntax.json"></a>

```
{
  "[ComputeTypesAllowed](#cfn-codebuild-project-batchrestrictions-computetypesallowed)" : [ String, ... ],
  "[MaximumBuildsAllowed](#cfn-codebuild-project-batchrestrictions-maximumbuildsallowed)" : Integer
}
```

### YAML<a name="aws-properties-codebuild-project-batchrestrictions-syntax.yaml"></a>

```
  [ComputeTypesAllowed](#cfn-codebuild-project-batchrestrictions-computetypesallowed):
    - String
  [MaximumBuildsAllowed](#cfn-codebuild-project-batchrestrictions-maximumbuildsallowed): Integer
```

## Properties<a name="aws-properties-codebuild-project-batchrestrictions-properties"></a>

`ComputeTypesAllowed` <a name="cfn-codebuild-project-batchrestrictions-computetypesallowed"></a>
An array of strings that specify the compute types that are allowed for the batch build\. See [Build environment compute types](https://docs.aws.amazon.com/codebuild/latest/userguide/build-env-ref-compute-types.html) in the _ AWS CodeBuild User Guide_ for these values\.  
_Required_: No  
_Type_: List of String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`MaximumBuildsAllowed` <a name="cfn-codebuild-project-batchrestrictions-maximumbuildsallowed"></a>
Specifies the maximum number of builds allowed\.  
_Required_: No  
_Type_: Integer  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
