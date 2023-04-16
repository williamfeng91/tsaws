# AWS::ECR::ReplicationConfiguration ReplicationDestination<a name="aws-properties-ecr-replicationconfiguration-replicationdestination"></a>

An array of objects representing the destination for a replication rule\.

## Syntax<a name="aws-properties-ecr-replicationconfiguration-replicationdestination-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-ecr-replicationconfiguration-replicationdestination-syntax.json"></a>

```
{
  "[Region](#cfn-ecr-replicationconfiguration-replicationdestination-region)" : String,
  "[RegistryId](#cfn-ecr-replicationconfiguration-replicationdestination-registryid)" : String
}
```

### YAML<a name="aws-properties-ecr-replicationconfiguration-replicationdestination-syntax.yaml"></a>

```
  [Region](#cfn-ecr-replicationconfiguration-replicationdestination-region): String
  [RegistryId](#cfn-ecr-replicationconfiguration-replicationdestination-registryid): String
```

## Properties<a name="aws-properties-ecr-replicationconfiguration-replicationdestination-properties"></a>

`Region` <a name="cfn-ecr-replicationconfiguration-replicationdestination-region"></a>
The Region to replicate to\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `2`  
_Maximum_: `25`  
_Pattern_: `[0-9a-z-]{2,25}`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`RegistryId` <a name="cfn-ecr-replicationconfiguration-replicationdestination-registryid"></a>
The AWS account ID of the Amazon ECR private registry to replicate to\. When configuring cross\-Region replication within your own registry, specify your own account ID\.  
_Required_: Yes  
_Type_: String  
_Pattern_: `[0-9]{12}`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
