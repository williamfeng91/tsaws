# AWS::CodeCommit::Repository Code<a name="aws-properties-codecommit-repository-code"></a>

Information about code to be committed\.

## Syntax<a name="aws-properties-codecommit-repository-code-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-codecommit-repository-code-syntax.json"></a>

```
{
  "[BranchName](#cfn-codecommit-repository-code-branchname)" : String,
  "[S3](#cfn-codecommit-repository-code-s3)" : S3
}
```

### YAML<a name="aws-properties-codecommit-repository-code-syntax.yaml"></a>

```
  [BranchName](#cfn-codecommit-repository-code-branchname): String
  [S3](#cfn-codecommit-repository-code-s3):
    S3
```

## Properties<a name="aws-properties-codecommit-repository-code-properties"></a>

`BranchName` <a name="cfn-codecommit-repository-code-branchname"></a>
Optional\. Specifies a branch name to be used as the default branch when importing code into a repository on initial creation\. If this property is not set, the name _main_ will be used for the default branch for the repository\. Changes to this property are ignored after initial resource creation\. We recommend using this parameter to set the name to _main_ to align with the default behavior of CodeCommit unless another name is needed\.  
_Required_: No  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`S3` <a name="cfn-codecommit-repository-code-s3"></a>
Information about the Amazon S3 bucket that contains a ZIP file of code to be committed to the repository\. Changes to this property are ignored after initial resource creation\.  
_Required_: Yes  
_Type_: [S3](aws-properties-codecommit-repository-s3.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
