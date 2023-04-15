# AWS::ECR::ReplicationConfiguration RepositoryFilter<a name="aws-properties-ecr-replicationconfiguration-repositoryfilter"></a>

The filter settings used with image replication\. Specifying a repository filter to a replication rule provides a method for controlling which repositories in a private registry are replicated\. If no filters are added, the contents of all repositories are replicated\.

## Syntax<a name="aws-properties-ecr-replicationconfiguration-repositoryfilter-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-ecr-replicationconfiguration-repositoryfilter-syntax.json"></a>

```
{
  "[Filter](#cfn-ecr-replicationconfiguration-repositoryfilter-filter)" : String,
  "[FilterType](#cfn-ecr-replicationconfiguration-repositoryfilter-filtertype)" : String
}
```

### YAML<a name="aws-properties-ecr-replicationconfiguration-repositoryfilter-syntax.yaml"></a>

```
  [Filter](#cfn-ecr-replicationconfiguration-repositoryfilter-filter): String
  [FilterType](#cfn-ecr-replicationconfiguration-repositoryfilter-filtertype): String
```

## Properties<a name="aws-properties-ecr-replicationconfiguration-repositoryfilter-properties"></a>

`Filter` <a name="cfn-ecr-replicationconfiguration-repositoryfilter-filter"></a>
The repository filter details\. When the `PREFIX_MATCH` filter type is specified, this value is required and should be the repository name prefix to configure replication for\.  
_Required_: Yes  
_Type_: String  
_Minimum_: `2`  
_Maximum_: `256`  
_Pattern_: `^(?:[a-z0-9]+(?:[._-][a-z0-9]*)*/)*[a-z0-9]*(?:[._-][a-z0-9]*)*$`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`FilterType` <a name="cfn-ecr-replicationconfiguration-repositoryfilter-filtertype"></a>
The repository filter type\. The only supported value is `PREFIX_MATCH`, which is a repository name prefix specified with the `filter` parameter\.  
_Required_: Yes  
_Type_: String  
_Allowed values_: `PREFIX_MATCH`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
