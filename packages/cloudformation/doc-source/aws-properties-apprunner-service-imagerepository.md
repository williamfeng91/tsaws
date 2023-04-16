# AWS::AppRunner::Service ImageRepository<a name="aws-properties-apprunner-service-imagerepository"></a>

Describes a source image repository\.

## Syntax<a name="aws-properties-apprunner-service-imagerepository-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-apprunner-service-imagerepository-syntax.json"></a>

```
{
  "[ImageConfiguration](#cfn-apprunner-service-imagerepository-imageconfiguration)" : ImageConfiguration,
  "[ImageIdentifier](#cfn-apprunner-service-imagerepository-imageidentifier)" : String,
  "[ImageRepositoryType](#cfn-apprunner-service-imagerepository-imagerepositorytype)" : String
}
```

### YAML<a name="aws-properties-apprunner-service-imagerepository-syntax.yaml"></a>

```
  [ImageConfiguration](#cfn-apprunner-service-imagerepository-imageconfiguration):
    ImageConfiguration
  [ImageIdentifier](#cfn-apprunner-service-imagerepository-imageidentifier): String
  [ImageRepositoryType](#cfn-apprunner-service-imagerepository-imagerepositorytype): String
```

## Properties<a name="aws-properties-apprunner-service-imagerepository-properties"></a>

`ImageConfiguration` <a name="cfn-apprunner-service-imagerepository-imageconfiguration"></a>
Configuration for running the identified image\.  
_Required_: No  
_Type_: [ImageConfiguration](aws-properties-apprunner-service-imageconfiguration.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`ImageIdentifier` <a name="cfn-apprunner-service-imagerepository-imageidentifier"></a>
The identifier of an image\.  
For an image in Amazon Elastic Container Registry \(Amazon ECR\), this is an image name\. For the image name format, see [Pulling an image](https://docs.aws.amazon.com/AmazonECR/latest/userguide/docker-pull-ecr-image.html) in the _Amazon ECR User Guide_\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `1024`  
_Pattern_: `([0-9]{12}.dkr.ecr.[a-z\-]+-[0-9]{1}.amazonaws.com\/((?:[a-z0-9]+(?:[._-][a-z0-9]+)*\/)*[a-z0-9]+(?:[._-][a-z0-9]+)*)(:([\w\d+\-=._:\/@])+|@([\w\d\:]+))?)|(^public\.ecr\.aws\/.+\/((?:[a-z0-9]+(?:[._-][a-z0-9]+)*\/)*[a-z0-9]+(?:[._-][a-z0-9]+)*)(:([\w\d+\-=._:\/@])+|@([\w\d\:]+))?)`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`ImageRepositoryType` <a name="cfn-apprunner-service-imagerepository-imagerepositorytype"></a>
The type of the image repository\. This reflects the repository provider and whether the repository is private or public\.  
_Required_: Yes  
_Type_: String  
_Allowed values_: `ECR | ECR_PUBLIC`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
