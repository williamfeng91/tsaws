# AWS::AppRunner::Service CodeRepository<a name="aws-properties-apprunner-service-coderepository"></a>

Describes a source code repository\.

## Syntax<a name="aws-properties-apprunner-service-coderepository-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-apprunner-service-coderepository-syntax.json"></a>

```
{
  "[CodeConfiguration](#cfn-apprunner-service-coderepository-codeconfiguration)" : CodeConfiguration,
  "[RepositoryUrl](#cfn-apprunner-service-coderepository-repositoryurl)" : String,
  "[SourceCodeVersion](#cfn-apprunner-service-coderepository-sourcecodeversion)" : SourceCodeVersion
}
```

### YAML<a name="aws-properties-apprunner-service-coderepository-syntax.yaml"></a>

```
  [CodeConfiguration](#cfn-apprunner-service-coderepository-codeconfiguration):
    CodeConfiguration
  [RepositoryUrl](#cfn-apprunner-service-coderepository-repositoryurl): String
  [SourceCodeVersion](#cfn-apprunner-service-coderepository-sourcecodeversion):
    SourceCodeVersion
```

## Properties<a name="aws-properties-apprunner-service-coderepository-properties"></a>

`CodeConfiguration` <a name="cfn-apprunner-service-coderepository-codeconfiguration"></a>
Configuration for building and running the service from a source code repository\.  
 `CodeConfiguration` is required only for `CreateService` request\.
_Required_: No  
_Type_: [CodeConfiguration](aws-properties-apprunner-service-codeconfiguration.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`RepositoryUrl` <a name="cfn-apprunner-service-coderepository-repositoryurl"></a>
The location of the repository that contains the source code\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `0`  
_Maximum_: `51200`  
_Pattern_: `.*`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`SourceCodeVersion` <a name="cfn-apprunner-service-coderepository-sourcecodeversion"></a>
The version that should be used within the source code repository\.  
_Required_: Yes  
_Type_: [SourceCodeVersion](aws-properties-apprunner-service-sourcecodeversion.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
