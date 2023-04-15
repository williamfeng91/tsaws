# AWS::ServiceCatalog::CloudFormationProduct CodeStarParameters<a name="aws-properties-servicecatalog-cloudformationproduct-codestarparameters"></a>

The subtype containing details about the Codestar connection `Type`\.

## Syntax<a name="aws-properties-servicecatalog-cloudformationproduct-codestarparameters-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-servicecatalog-cloudformationproduct-codestarparameters-syntax.json"></a>

```
{
  "[ArtifactPath](#cfn-servicecatalog-cloudformationproduct-codestarparameters-artifactpath)" : String,
  "[Branch](#cfn-servicecatalog-cloudformationproduct-codestarparameters-branch)" : String,
  "[ConnectionArn](#cfn-servicecatalog-cloudformationproduct-codestarparameters-connectionarn)" : String,
  "[Repository](#cfn-servicecatalog-cloudformationproduct-codestarparameters-repository)" : String
}
```

### YAML<a name="aws-properties-servicecatalog-cloudformationproduct-codestarparameters-syntax.yaml"></a>

```
  [ArtifactPath](#cfn-servicecatalog-cloudformationproduct-codestarparameters-artifactpath): String
  [Branch](#cfn-servicecatalog-cloudformationproduct-codestarparameters-branch): String
  [ConnectionArn](#cfn-servicecatalog-cloudformationproduct-codestarparameters-connectionarn): String
  [Repository](#cfn-servicecatalog-cloudformationproduct-codestarparameters-repository): String
```

## Properties<a name="aws-properties-servicecatalog-cloudformationproduct-codestarparameters-properties"></a>

`ArtifactPath` <a name="cfn-servicecatalog-cloudformationproduct-codestarparameters-artifactpath"></a>
The absolute path wehre the artifact resides within the repo and branch, formatted as "folder/file\.json\."  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `4096`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Branch` <a name="cfn-servicecatalog-cloudformationproduct-codestarparameters-branch"></a>
The specific branch where the artifact resides\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `250`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`ConnectionArn` <a name="cfn-servicecatalog-cloudformationproduct-codestarparameters-connectionarn"></a>
The CodeStar ARN, which is the connection between AWS Service Catalog and the external repository\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `1224`  
_Pattern_: `arn:[a-z0-9][-.a-z0-9]{0,62}:codestar-connections:([a-z0-9][-.a-z0-9]{0,62})?:([a-z0-9][-.a-z0-9]{0,62})?:[^/].{0,1023}$`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Repository` <a name="cfn-servicecatalog-cloudformationproduct-codestarparameters-repository"></a>
The specific repository where the product’s artifact\-to\-be\-synced resides, formatted as "Account/Repo\."  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `100`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
