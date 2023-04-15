# AWS::ImageBuilder::DistributionConfiguration ContainerDistributionConfiguration<a name="aws-properties-imagebuilder-distributionconfiguration-containerdistributionconfiguration"></a>

Container distribution settings for encryption, licensing, and sharing in a specific Region\.

## Syntax<a name="aws-properties-imagebuilder-distributionconfiguration-containerdistributionconfiguration-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-imagebuilder-distributionconfiguration-containerdistributionconfiguration-syntax.json"></a>

```
{
  "[ContainerTags](#cfn-imagebuilder-distributionconfiguration-containerdistributionconfiguration-containertags)" : [ String, ... ],
  "[Description](#cfn-imagebuilder-distributionconfiguration-containerdistributionconfiguration-description)" : String,
  "[TargetRepository](#cfn-imagebuilder-distributionconfiguration-containerdistributionconfiguration-targetrepository)" : TargetContainerRepository
}
```

### YAML<a name="aws-properties-imagebuilder-distributionconfiguration-containerdistributionconfiguration-syntax.yaml"></a>

```
  [ContainerTags](#cfn-imagebuilder-distributionconfiguration-containerdistributionconfiguration-containertags):
    - String
  [Description](#cfn-imagebuilder-distributionconfiguration-containerdistributionconfiguration-description): String
  [TargetRepository](#cfn-imagebuilder-distributionconfiguration-containerdistributionconfiguration-targetrepository):
    TargetContainerRepository
```

## Properties<a name="aws-properties-imagebuilder-distributionconfiguration-containerdistributionconfiguration-properties"></a>

`ContainerTags` <a name="cfn-imagebuilder-distributionconfiguration-containerdistributionconfiguration-containertags"></a>
Tags that are attached to the container distribution configuration\.  
_Required_: No  
_Type_: List of String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Description` <a name="cfn-imagebuilder-distributionconfiguration-containerdistributionconfiguration-description"></a>
The description of the container distribution configuration\.  
_Required_: No  
_Type_: String  
_Minimum_: `1`  
_Maximum_: `1024`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`TargetRepository` <a name="cfn-imagebuilder-distributionconfiguration-containerdistributionconfiguration-targetrepository"></a>
The destination repository for the container distribution configuration\.  
_Required_: No  
_Type_: [TargetContainerRepository](aws-properties-imagebuilder-distributionconfiguration-targetcontainerrepository.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
