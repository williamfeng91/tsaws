# AWS::DynamoDB::GlobalTable ReplicaSpecification<a name="aws-properties-dynamodb-globaltable-replicaspecification"></a>

Defines settings specific to a single replica of a global table\.

## Syntax<a name="aws-properties-dynamodb-globaltable-replicaspecification-syntax"></a>

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON<a name="aws-properties-dynamodb-globaltable-replicaspecification-syntax.json"></a>

```
{
  "[ContributorInsightsSpecification](#cfn-dynamodb-globaltable-replicaspecification-contributorinsightsspecification)" : ContributorInsightsSpecification,
  "[DeletionProtectionEnabled](#cfn-dynamodb-globaltable-replicaspecification-deletionprotectionenabled)" : Boolean,
  "[GlobalSecondaryIndexes](#cfn-dynamodb-globaltable-replicaspecification-globalsecondaryindexes)" : [ ReplicaGlobalSecondaryIndexSpecification, ... ],
  "[KinesisStreamSpecification](#cfn-dynamodb-globaltable-replicaspecification-kinesisstreamspecification)" : KinesisStreamSpecification,
  "[PointInTimeRecoverySpecification](#cfn-dynamodb-globaltable-replicaspecification-pointintimerecoveryspecification)" : PointInTimeRecoverySpecification,
  "[ReadProvisionedThroughputSettings](#cfn-dynamodb-globaltable-replicaspecification-readprovisionedthroughputsettings)" : ReadProvisionedThroughputSettings,
  "[Region](#cfn-dynamodb-globaltable-replicaspecification-region)" : String,
  "[SSESpecification](#cfn-dynamodb-globaltable-replicaspecification-ssespecification)" : ReplicaSSESpecification,
  "[TableClass](#cfn-dynamodb-globaltable-replicaspecification-tableclass)" : String,
  "[Tags](#cfn-dynamodb-globaltable-replicaspecification-tags)" : [ [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html), ... ]
}
```

### YAML<a name="aws-properties-dynamodb-globaltable-replicaspecification-syntax.yaml"></a>

```
  [ContributorInsightsSpecification](#cfn-dynamodb-globaltable-replicaspecification-contributorinsightsspecification):
    ContributorInsightsSpecification
  [DeletionProtectionEnabled](#cfn-dynamodb-globaltable-replicaspecification-deletionprotectionenabled): Boolean
  [GlobalSecondaryIndexes](#cfn-dynamodb-globaltable-replicaspecification-globalsecondaryindexes):
    - ReplicaGlobalSecondaryIndexSpecification
  [KinesisStreamSpecification](#cfn-dynamodb-globaltable-replicaspecification-kinesisstreamspecification):
    KinesisStreamSpecification
  [PointInTimeRecoverySpecification](#cfn-dynamodb-globaltable-replicaspecification-pointintimerecoveryspecification):
    PointInTimeRecoverySpecification
  [ReadProvisionedThroughputSettings](#cfn-dynamodb-globaltable-replicaspecification-readprovisionedthroughputsettings):
    ReadProvisionedThroughputSettings
  [Region](#cfn-dynamodb-globaltable-replicaspecification-region): String
  [SSESpecification](#cfn-dynamodb-globaltable-replicaspecification-ssespecification):
    ReplicaSSESpecification
  [TableClass](#cfn-dynamodb-globaltable-replicaspecification-tableclass): String
  [Tags](#cfn-dynamodb-globaltable-replicaspecification-tags):
    - [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)
```

## Properties<a name="aws-properties-dynamodb-globaltable-replicaspecification-properties"></a>

`ContributorInsightsSpecification` <a name="cfn-dynamodb-globaltable-replicaspecification-contributorinsightsspecification"></a>
The settings used to enable or disable CloudWatch Contributor Insights for the specified replica\. When not specified, defaults to contributor insights disabled for the replica\.  
_Required_: No  
_Type_: [ContributorInsightsSpecification](aws-properties-dynamodb-globaltable-contributorinsightsspecification.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`DeletionProtectionEnabled` <a name="cfn-dynamodb-globaltable-replicaspecification-deletionprotectionenabled"></a>
Determines if a replica is protected from deletion\. When enabled, the table cannot be deleted by any user or process\. This setting is disabled by default\. For more information, see [Using deletion protection](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/WorkingWithTables.Basics.html#WorkingWithTables.Basics.DeletionProtection) in the _Amazon DynamoDBDeveloper Guide_\.  
_Required_: No  
_Type_: Boolean  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`GlobalSecondaryIndexes` <a name="cfn-dynamodb-globaltable-replicaspecification-globalsecondaryindexes"></a>
Defines additional settings for the global secondary indexes of this replica\.  
_Required_: No  
_Type_: List of [ReplicaGlobalSecondaryIndexSpecification](aws-properties-dynamodb-globaltable-replicaglobalsecondaryindexspecification.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`KinesisStreamSpecification` <a name="cfn-dynamodb-globaltable-replicaspecification-kinesisstreamspecification"></a>
Defines the Kinesis Data Streams configuration for the specified replica\.  
_Required_: No  
_Type_: [KinesisStreamSpecification](aws-properties-dynamodb-globaltable-kinesisstreamspecification.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`PointInTimeRecoverySpecification` <a name="cfn-dynamodb-globaltable-replicaspecification-pointintimerecoveryspecification"></a>
The settings used to enable point in time recovery\. When not specified, defaults to point in time recovery disabled for the replica\.  
_Required_: No  
_Type_: [PointInTimeRecoverySpecification](aws-properties-dynamodb-globaltable-pointintimerecoveryspecification.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`ReadProvisionedThroughputSettings` <a name="cfn-dynamodb-globaltable-replicaspecification-readprovisionedthroughputsettings"></a>
Defines read capacity settings for the replica table\.  
_Required_: No  
_Type_: [ReadProvisionedThroughputSettings](aws-properties-dynamodb-globaltable-readprovisionedthroughputsettings.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Region` <a name="cfn-dynamodb-globaltable-replicaspecification-region"></a>
The region in which this replica exists\.  
_Required_: Yes  
_Type_: String  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`SSESpecification` <a name="cfn-dynamodb-globaltable-replicaspecification-ssespecification"></a>
Allows you to specify a customer\-managed key for the replica\. When using customer\-managed keys for server\-side encryption, this property must have a value in all replicas\.  
_Required_: No  
_Type_: [ReplicaSSESpecification](aws-properties-dynamodb-globaltable-replicassespecification.md)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`TableClass` <a name="cfn-dynamodb-globaltable-replicaspecification-tableclass"></a>
The table class of the specified table\. Valid values are `STANDARD` and `STANDARD_INFREQUENT_ACCESS`\.  
_Required_: No  
_Type_: String  
_Allowed values_: `STANDARD | STANDARD_INFREQUENT_ACCESS`  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

`Tags` <a name="cfn-dynamodb-globaltable-replicaspecification-tags"></a>
An array of key\-value pairs to apply to this replica\.  
For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)\.  
_Required_: No  
_Type_: List of [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)  
_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
