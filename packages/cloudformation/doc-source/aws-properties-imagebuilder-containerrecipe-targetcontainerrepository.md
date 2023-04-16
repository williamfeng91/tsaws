# AWS::ImageBuilder::ContainerRecipe TargetContainerRepository<a name="aws-properties-imagebuilder-containerrecipe-targetcontainerrepository"></a>

The container repository where the output container image is stored\.

## Syntax<a name="aws-properties-imagebuilder-containerrecipe-targetcontainerrepository-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-imagebuilder-containerrecipe-targetcontainerrepository-syntax.json"></a>

```
{
  "[RepositoryName](#cfn-imagebuilder-containerrecipe-targetcontainerrepository-repositoryname)" : String,
  "[Service](#cfn-imagebuilder-containerrecipe-targetcontainerrepository-service)" : String
}
```

### YAML<a name="aws-properties-imagebuilder-containerrecipe-targetcontainerrepository-syntax.yaml"></a>

```
  [RepositoryName](#cfn-imagebuilder-containerrecipe-targetcontainerrepository-repositoryname): String
  [Service](#cfn-imagebuilder-containerrecipe-targetcontainerrepository-service): String
```

## Properties<a name="aws-properties-imagebuilder-containerrecipe-targetcontainerrepository-properties"></a>

`RepositoryName` <a name="cfn-imagebuilder-containerrecipe-targetcontainerrepository-repositoryname"></a>
The name of the container repository where the output container image is stored\. This name is prefixed by the repository location\.  
_Required_: No  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `1024`  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

`Service` <a name="cfn-imagebuilder-containerrecipe-targetcontainerrepository-service"></a>
Specifies the service in which this image was registered\.  
_Required_: No  
_Type_: String  
_Allowed values_: `ECR`  
_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
